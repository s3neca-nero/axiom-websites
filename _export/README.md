# Proto Axiom — Design Prototype

This folder is the static design prototype for the Proto Axiom marketing site, exported from the Claude design environment as a reference for the Astro port.

## What's here

- `Proto Axiom Website.html` — the entry HTML
- `*.jsx` — React components (`design-canvas.jsx` is the wrapper; `page-home.jsx` and `page-other.jsx` are the screens; `primitives.jsx` shared chrome; `tweaks-panel.jsx` design controls)
- `data.js` — content data (portfolio, team, news, build steps, stats)
- `styles.css` — full stylesheet (~1300 lines)
- `assets/` — logos, photography, textures, portfolio + team images

## How to view it

This is a single static HTML file with relative asset paths. To preview locally:

```bash
# from this folder
npx serve .
# then open the printed URL and navigate to "Proto Axiom Website.html"
```

Or just double-click the HTML in a Finder/Explorer window — it will open in a browser. (Some browsers block local fetches; the `npx serve` route is more reliable.)

## How to use it for the Astro port

The pieces that should map directly into `apps/proto/`:

| Prototype file       | Astro destination                                     |
|----------------------|-------------------------------------------------------|
| `styles.css` tokens (`:root`, color vars, type scale) | `packages/ui/src/tokens.css` |
| `primitives.jsx` (PaNav, PaFooter, PaButton, PaLink, Eyebrow) | `packages/ui/src/components/` |
| `page-home.jsx` sections (PaHeroA, PaAumBlock, PaWhyAustraliaBlock, PaBuildBlock, PaPortfolioBlock, PaPipelineBlock, PaCapStructureBlock, PaInitiativesBlock, PaUniversityWall) | `apps/proto/src/components/sections/` |
| `data.js` constants  | `apps/proto/src/content/` (Astro content collections) or `packages/ui/src/data/` |
| `assets/`            | `apps/proto/public/`                                  |

## Notes for the port

- The prototype uses Babel-in-browser JSX (no build step). Component name collisions are handled by re-exporting onto `window` at the bottom of each component file — that pattern doesn't carry over to Astro and can be dropped.
- `tweaks-panel.jsx` is design-environment-only — exclude it from the Astro port.
- All inline `style={...}` props are intentional design overrides; they should generally graduate to Tailwind classes or be lifted into `styles.css`.
- The "Initiatives" dropdown in `PaNav` uses `React.useState` for hover; replicate with Astro's island pattern or a small client:load component.
