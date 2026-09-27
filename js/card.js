/* Battlecard detail page: 3 sub-pages per card.
   Page 1: neutral head-to-head. Page 2: case for A. Page 3: case for B. */
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

const params = new URLSearchParams(location.search);
const card = CARDS.find((c) => c.id === params.get("id"));

if (!card) {
  document.getElementById("card-root").innerHTML =
    `<div class="wrap"><p style="padding:60px 0">Battlecard not found. <a href="index.html">Back to the index →</a></p></div>`;
} else {
  document.title = `${card.title} — Battlecards`;
  renderCard(card);
  wireTabs(card);
  const h = location.hash.replace("#", "");
  if (["p1", "p2", "p3"].includes(h)) showPage(h);
}

function edgeBadge(f, card) {
  if (f.edge === "a") return `<span class="edge a">${esc(card.a.vendor)} edge</span>`;
  if (f.edge === "b") return `<span class="edge b">${esc(card.b.vendor)} edge</span>`;
  return `<span class="edge tie">Even</span>`;
}

function pageHeadToHead(card) {
  const aN = card.features.filter((f) => f.edge === "a").length;
  const bN = card.features.filter((f) => f.edge === "b").length;
  const tN = card.features.length - aN - bN;
  const pct = (n) => ((n / card.features.length) * 100).toFixed(1) + "%";
  return `
    <div class="score" style="--va:${esc(card.a.color)};--vb:${esc(card.b.color)}">
      <div class="bar">
        <div style="width:${pct(aN)};background:${esc(card.a.color)}"></div>
        <div style="width:${pct(tN)};background:#3a4763"></div>
        <div style="width:${pct(bN)};background:${esc(card.b.color)}"></div>
      </div>
      <div class="legend">
        <span><span class="sw" style="background:${esc(card.a.color)}"></span><b>${aN}</b> ${esc(card.a.vendor)} edges</span>
        <span><span class="sw" style="background:#3a4763"></span><b>${tN}</b> even</span>
        <span><span class="sw" style="background:${esc(card.b.color)}"></span><b>${bN}</b> ${esc(card.b.vendor)} edges</span>
      </div>
    </div>
    ${card.features.map((f) => `
      <div class="feat" style="--va:${esc(card.a.color)};--vb:${esc(card.b.color)}">
        <div class="head"><h3>${esc(f.label)}</h3>${edgeBadge(f, card)}</div>
        <div class="cols">
          <div class="col ca"><div class="who">${esc(card.a.vendor)} ${esc(card.a.product)}</div><p>${esc(f.a)}</p></div>
          <div class="col cb"><div class="who">${esc(card.b.vendor)} ${esc(card.b.product)}</div><p>${esc(f.b)}</p></div>
        </div>
        ${f.note ? `<p class="note">SE note: ${esc(f.note)}</p>` : ""}
      </div>`).join("")}
    <div class="takeaway">
      <h3>⚡ SE takeaway</h3>
      <p>${esc(card.takeaway)}</p>
    </div>
    <p class="fineprint">Last verified ${esc(card.updated)}. Specs, pricing, and licensing change fast — verify against current vendor datasheets before any customer conversation. Vendor claims are labeled as claims.</p>`;
}

function pageCase(card, side) {
  const cs = side === "a" ? card.caseA : card.caseB;
  const v = side === "a" ? card.a : card.b;
  const rival = side === "a" ? card.b : card.a;
  const icons = { wins: "🏆", discover: "🔍", traps: "🪤" };
  return `
    <div class="pitch" style="--vc:${esc(v.color)}">${esc(cs.pitch)}</div>
    <div class="case-sec">
      <h3><span class="ico">${icons.wins}</span>Why ${esc(v.vendor)} wins</h3>
      <ul>${cs.wins.map((w) => `<li>${w}</li>`).join("")}</ul>
    </div>
    <div class="case-sec">
      <h3><span class="ico">${icons.discover}</span>Discovery questions</h3>
      <ul>${cs.discover.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
    </div>
    <div class="case-sec">
      <h3><span class="ico">${icons.traps}</span>Trap questions for ${esc(rival.vendor)}</h3>
      <ul>${cs.traps.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    </div>
    <div class="case-sec">
      <h3><span class="ico">🛡️</span>Handling objections</h3>
      ${cs.objections.map((o) => `<div class="qa"><div class="q">${esc(o.q)}</div><div class="a">${esc(o.a)}</div></div>`).join("")}
    </div>
    <p class="fineprint">Internal SE prep — not customer collateral. Verify claims against current datasheets.</p>`;
}

function renderCard(card) {
  document.getElementById("card-root").innerHTML = `
  <div class="wrap">
    <a class="backlink" href="index.html">← All battlecards</a>
    <div class="duel">
      <div class="contender" style="--vc:${esc(card.a.color)}">
        <div class="vname">${esc(card.a.vendor)}</div>
        <h2>${esc(card.a.product)}</h2>
        <p class="tag">${esc(card.a.tag)}</p>
      </div>
      <div class="vs-badge">VS</div>
      <div class="contender" style="--vc:${esc(card.b.color)}">
        <div class="vname">${esc(card.b.vendor)}</div>
        <h2>${esc(card.b.product)}</h2>
        <p class="tag">${esc(card.b.tag)}</p>
      </div>
    </div>
    <p class="duel-sub">${esc(card.category)} · Last verified ${esc(card.updated)}</p>
    <div class="tabs" role="tablist">
      <button class="tab active" data-page="p1"><span class="pg">Pg 1</span>Head-to-head</button>
      <button class="tab" data-page="p2"><span class="pg">Pg 2</span>Case for ${esc(card.a.vendor)}</button>
      <button class="tab" data-page="p3"><span class="pg">Pg 3</span>Case for ${esc(card.b.vendor)}</button>
    </div>
    <div id="page-body"></div>
  </div>`;
  document.getElementById("page-body").innerHTML = pageHeadToHead(card);
  window.__pages = {
    p1: () => pageHeadToHead(card),
    p2: () => pageCase(card, "a"),
    p3: () => pageCase(card, "b"),
  };
}

function showPage(p) {
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.page === p));
  document.getElementById("page-body").innerHTML = window.__pages[p]();
  history.replaceState(null, "", "#" + p);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function wireTabs() {
  document.querySelectorAll(".tab").forEach((t) =>
    t.addEventListener("click", () => showPage(t.dataset.page)));
}
