# Changelog

## 2026-09-29 — Full SEO head tags

- Added canonical URL, meta description, Open Graph + Twitter Card tags, and JSON-LD structured data (`WebApplication`) to the page head.
## 2026-09-29 — Prompts page added to the app-switcher header

- The scribnet.io `/prompts.html` workflow-prompts page is now one click away from the app-switcher dropdown in the header, alongside the other destinations.
## 2026-09-29 — Battlecard update: Cohesity vs Rubrik
- Added "Agentic AI resilience" feature row: Cohesity Agent Resilience (discovers, protects, and recovers agent memory/config plus the data systems agents act on; select customers now, GA end of 2026) vs Rubrik MCP (exposes the Security Cloud API schema to customer AI agents for multi-step recovery/compliance workflows; private preview now, GA Oct 2026). Row researched from both vendors' announcements, not just the headlines. Card date bumped to 2026-09-29.


## 2026-09-28 — Canonical subdomain links
- Replaced legacy `scribnetai.github.io/<repo>/` links with canonical
  `https://<repo>.scribnet.io/` URLs (the old URLs 301-redirect, but docs and
  on-page links should point at the real address).

## 2026-09-28
- Added Umami website analytics (cookieless, no consent banner): pageview tracking plus custom events for ad-slot impression/click reporting.

## 2026-09-28
- Added a floating Feedback button (bottom-right) that opens a dialog to send feedback via email — topic chips, optional name, and message, addressed to the site owner with the app name in the subject.

## 2026-09-28
- TLS certificate provisioned for the `battlecards.scribnet.io` custom domain (GitHub's stuck DNS check was reset 2026-09-28); HTTPS is now enforced on the site. App-switcher menu links switched from legacy `scribnetai.github.io` URLs to direct `https://<app>.scribnet.io` URLs for all 10 apps (footer/launcher links updated likewise). This entry also covers the net-zero CNAME delete/re-add commits from the DNS-check reset, which carried no changelog entries. Touched: index.html, battlecard.html, js/app-switcher.js.


## 2026-09-27
- Added a favicon (inline SVG monogram badge, matching the other apps) so browser bookmarks and tabs show the app logo instead of a generic globe.

## 2026-09-27
- Launched Battlecards: competitive battlecard index for presales SEs.
- Three launch cards: Dell PowerStore vs Everpure FlashArray (Primary Storage), Nutanix vs Broadcom VMware (HCI & Virtualization), Cohesity vs Rubrik (Data Protection).
- Every card is 3 pages: neutral head-to-head with per-row edge calls, then each vendor's best case (pitch, wins, discovery, traps, objections).
- Linked from the SE Command Center App Launcher.
- Added fourth card: NetApp AFF vs Everpure FlashArray (Primary Storage) — ONTAP unified/scale-out vs Evergreen simplicity.
- Fixed card tab deep-links: in-page hash changes (back/forward, anchor jumps) now switch tabs instead of only working on full page load.
- Added five security battlecards: CrowdStrike Falcon vs Palo Alto Cortex XDR (Endpoint Security), Palo Alto NGFW vs Fortinet FortiGate (Network Security), Zscaler vs Palo Alto Prisma Access (SASE), Okta vs Microsoft Entra ID (Identity), Wiz vs Palo Alto Cortex Cloud (Cloud Security). Vendor claims labeled as claims; naming follows 2026 current branding (Entra ID, Cortex Cloud).
- Added: above-the-fold "Internal SE prep — not customer collateral" banner on index and card pages.

## 2026-09-29 — Prompts removed from app-switcher dropdown

- Removed the Prompts entry from the in-app dropdown menu so it lists only the SE-job apps (plus the scribnet.io home link). The prompts page itself is untouched.

