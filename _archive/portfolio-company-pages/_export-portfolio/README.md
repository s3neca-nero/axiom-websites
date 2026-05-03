# Proto Axiom — Portfolio Company Detail Pages

Public-safe template for the 8 portfolio company detail pages on protoaxiom.com.

## Files

- `Portfolio Detail - Endo Axiom.html` — **master template**, founding-investor variant. Hash-routes between all 8 companies (`#endo-axiom`, `#advancell`, etc.) so you can flip through the pager.
- `Portfolio Detail - AdvanCell (Venture Stake).html` — venture-stake variant showing the relationship signal handling.
- `Portfolio Detail - Mobile.html` — 390×844 mobile responsive view of the master.
- `data.js` — content array. Drop into Astro page frontmatter as `PA_PORTFOLIO`.
- `page.css` — scoped `pa-pdetail-*` styles. Depends on `assets/colors_and_type.css`.
- `components.jsx` — `<PortfolioDetail slug="..." />`, `<SiteNav />`, `<SiteFooter />`.

## Public-safety contract

The page **does not render** anything from the following — even if added to the data:
- Capital invested ($ amounts)
- Equity %
- Internal Proto Axiom gate codes (G0/G1/G2/G3)
- Specific financing-round labels

`stage` is plain English only — `Preclinical`, `IND-enabling`, `Phase 1/2`, `MVP development`, `Pilot facility build-out`, `Pilot field trials`. `relationship` is one of `founding-investor` | `venture-stake`; the badge and section copy adapt accordingly but never hierarchically.

## Page structure (top → bottom)

1. **Sticky nav** — matches parent site
2. **Breadcrumb** — Home / Portfolio / [Company]
3. **Hero** — relationship badge, large logo, name, 15–20 word tagline, sector + modality chips, primary CTA (visit company site) + optional ANZCTR registry link, side panel "At a glance" (sector, stage, origin, year, relationship, website)
4. **Hero photography band** — 21:8 full-bleed; placeholder pattern when no image
5. **Narrative** — 2–3 paragraphs, 680px measure, with sticky meta column
6. **Leadership** — 3-up grid; B&W photos; placeholder tile when no photo
7. **Programme status** — Now / Next milestone (plain English) + partners chips
8. **Recent press** — date · headline · outlet, hairline list (3–5 items)
9. **Pager** — Prev · 8-dot index · Next (browse without returning to portfolio index)
10. **Footer** — matches parent site

## Type & spacing

| Element | Size | Weight | LH | Tracking |
|---|---|---|---|---|
| Hero name (h1) | clamp(40, 4.4vw, 60) | 500 | 1.05 | -0.02em |
| Tagline | 20 | 400 | 1.55 | 0 |
| Section title (h2) | clamp(28, 2.6vw, 36) | 500 | 1.15 | -0.02em |
| Narrative body | 18 | 400 | 1.7 | 0 |
| Eyebrow | 12 | 500 | — | +0.14em UPPERCASE |
| Glance dt | 11 | 500 | — | +0.12em UPPERCASE |
| Glance dd | 15 | 500 | 1.4 | 0 |
| News headline | 18 | 500 | 1.35 | -0.005em |

Section padding: 96px desktop / 64px mobile. Container max 1200px, gutter 40/24px. Reading measure 680px.

## Colours

All from the brand palette (`colors_and_type.css`):

- `--pa-primary` `#375172` — name, headlines, primary CTA
- `--pa-secondary` `#00B3AB` — founding-investor badge dot
- `--pa-accent-green` `#007C82` — venture-stake badge + dot, "Now" eyebrow
- `--pa-light-almond` `#E2DFDE` — taxonomy chips, leader photo placeholder
- `--pa-french-grey` `#E7E8E9` — placeholder hatch
- `--pa-surface-alt` `#F6F6F5` — alternating sections, glance panel
- `--pa-hairline` `#D6D9DD` — every divider on the page

Photography is grayscale-filtered for leadership portraits per the team-page convention. Hero photography stays full colour.

## Relationship signal

- `relationship: 'founding-investor'` → navy outlined badge, **teal** dot, "Created with Proto Axiom"
- `relationship: 'venture-stake'` → green outlined badge, green dot, "Venture-stage investment"

Both badges sit at the same hierarchy and size — no second-class treatment. The narrative section title also adapts ("How the company was formed…" vs "A venture-stage stake in an established Australian programme").

## Australian English

Every piece of copy in the template uses AU spelling: organisation, commercialise, programme, centre. Verify any new content matches.

## Drop-in to Astro

```astro
---
// src/pages/portfolio/[slug].astro
import { PA_PORTFOLIO } from "../../data/portfolio.js";
export async function getStaticPaths() {
  return PA_PORTFOLIO.map(c => ({ params: { slug: c.slug }, props: { c } }));
}
const { c } = Astro.props;
---
```

Then port `components.jsx` to Astro components — section markup is straightforward 1:1.
