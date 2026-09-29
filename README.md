# Battlecards

Competitive battlecards for presales SEs. Live at https://battlecards.scribnet.io/

Each battlecard is three pages:
1. **Head-to-head** — neutral feature-by-feature comparison with an edge call per row.
2. **The case for vendor A** — pitch, why-we-win, discovery questions, trap questions, objection handling.
3. **The case for vendor B** — the mirror image.

## Adding a card

Edit `js/cards.js` and append a new object to `CARDS` following the existing shape
(`id`, `category`, `title`, `subtitle`, `updated`, `a`/`b` vendor blocks, `features[]`,
`takeaway`, `caseA`/`caseB`). The index and card pages render from data — no HTML changes needed.

## Local preview

Serve the folder over HTTP (e.g. `python3 -m http.server`) — `fetch("CHANGELOG.md")` needs http, not file://.

## Privacy

100% client-side. Nothing leaves the browser.
