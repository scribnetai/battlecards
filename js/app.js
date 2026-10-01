/* Battlecards index page: render card grid + changelog. */
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

(function renderIndex() {
  const grid = document.getElementById("card-grid");
  grid.innerHTML = CARDS.map((c) => `
    <a class="bcard" id="card-${esc(c.id)}" href="battlecard.html?id=${esc(c.id)}">
      <div class="cat">${esc(c.category)}</div>
      <div class="vsline">
        <span class="dot" style="background:${esc(c.a.color)};color:${esc(c.a.color)}"></span>
        <span>${esc(c.a.vendor)}</span>
        <span class="vs">vs</span>
        <span class="dot" style="background:${esc(c.b.color)};color:${esc(c.b.color)}"></span>
        <span>${esc(c.b.vendor)}</span>
      </div>
      <h3>${esc(c.title)}</h3>
      <p class="sub">${esc(c.subtitle)}</p>
      <div class="meta"><span>Verified ${esc(c.updated)}</span><span class="pages">3 pages →</span></div>
    </a>`).join("");
})();

/* Changelog — strict format: "# Changelog", "## YYYY-MM-DD", "- " bullets. */
fetch("CHANGELOG.md", { cache: "no-store" })
  .then((res) => { if (!res.ok) throw new Error("bad status"); return res.text(); })
  .then((md) => {
    let html = "", inList = false;
    const close = () => { if (inList) { html += "</ul>"; inList = false; } };
    for (const line of md.split("\n")) {
      if (line.startsWith("## ")) { close(); html += `<h3>${esc(line.slice(3).trim())}</h3>`; }
      else if (line.startsWith("- ")) { if (!inList) { html += "<ul>"; inList = true; } html += `<li>${esc(line.slice(2).trim())}</li>`; }
      else if (line.startsWith("# ")) { close(); }
    }
    close();
    document.getElementById("changelog-body").innerHTML = html || "<p>No entries yet.</p>";
  })
  .catch(() => {
    document.getElementById("changelog-body").innerHTML = "<p>Changelog unavailable.</p>";
  });

/* Hash deep-link routing: index.html#<card-id> scrolls to and briefly highlights
   that card in the grid. Section hashes (#cards, #how, #faq) are untouched —
   native browser scrolling handles those. */
function routeCardHash() {
  document.querySelectorAll(".bcard.flash").forEach((el) => el.classList.remove("flash"));
  const id = location.hash.replace(/^#/, "");
  if (!id) return;
  const el = document.getElementById("card-" + id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.add("flash");
  setTimeout(() => el.classList.remove("flash"), 2400);
}
window.addEventListener("hashchange", routeCardHash);
routeCardHash();
