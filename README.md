# Tattoo flash concepts — "I choose rich every fucking time"

Procedurally generated vector flash (SVG → 2x PNG) for three directions:

| # | File | Style | Concept |
|---|------|-------|---------|
| 1 | `output/01-unchained-tree-of-life.*` | Black & grey | Shackled forearms snapping a rusty chain; fingers grow into a Tree of Life inside a ring; ribbon banner + script line |
| 2 | `output/02-ascension-blackwork.*` | Blackwork / neo-trad | Muscular figure bursting from cracked rock toward a geometric sun and summit; arched + block lettering |
| 3 | `output/03-horizon-fine-line.*` | Minimalist fine-line | Broken geometric chaos resolving into a horizon, summit and rising compass |
| 3A | `output/03a-the-climb.*` | Geometric fine-line | Low-poly climber stepping from broken ground up faceted peaks to a diamond |
| 3B | `output/03b-three-stages.*` | Geometric fine-line | Kneeling → walking → arms raised on the summit, linked by a star thread |
| 3C | `output/03c-constellation.*` | Constellation | The whole climb drawn as stars; lightest line weight, vertical layout |
| 3D | `output/03d-diamond-summit.*` | Geometric fine-line | Mountain and diamond as one stone; climb from the culet to the peak |

`output/03-variations-sheet.png` compares 3A–3D side by side (`node src/sheet.mjs`).

These are composition/concept drafts. A tattoo artist should redraw them by hand before stenciling,
especially #1: true black & grey realism skin texture can't be reproduced in procedural vector art.

## Rebuild

```bash
node src/render.mjs            # all designs
node src/render.mjs 02         # one design by prefix
```

Requires Node 18+ and Playwright (Chromium). Fonts in `fonts/` are from Google Fonts (SIL OFL).
