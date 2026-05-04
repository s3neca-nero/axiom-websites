# /news — design handoff

**Status:** delivered May 2026
**Replaces:** the flat hairline-divided list at `apps/proto/src/pages/news/index.astro` (pre-Thesis-redesign).
**Register:** matches `/thesis`, `/portfolio` and `/team` — Cormorant headlines, DM Sans body, DM Mono meta, hairline section dividers, numbered eyebrows, ambient HelixMotif on white sections only.

A reader who finishes `/thesis` or `/portfolio` and clicks **News** lands on a calm, year-sequenced editorial archive — most recent item front and centre, then year by year back to 2021. Source names lead each row; titles do the work; external arrows make the destination obvious. No stock photography, no card grid, no "trending now". Just a press record, treated like one.

---

## Files in this folder

| File | Destination | Purpose |
|---|---|---|
| `news.css`     | `packages/ui/src/news.css`            | All page styles, scoped under `.nx` |
| `index.astro`  | `apps/proto/src/pages/news/index.astro` | Page replacement |
| `news.html`    | _design preview only — do not ship_   | Standalone preview using actual data shape (see "Preview vs production" below) |
| `README.md`    | _archive only_                        | This document |

After moving the two files into place, register `news.css` in `packages/ui/package.json` exports (mirrors `thesis.css` / `portfolio-overview.css`):

```json
"./news.css": "./src/news.css"
```

The `index.astro` already imports it via `@axiom/ui/news.css`.

---

## Section sequence

| # | Section | Surface | Notes |
|---|---|---|---|
| 1 | **Hero** | white | Eyebrow `News · {N} items`. Cormorant headline (italics on the verb): _"What the world has **written** about us."_ DM Sans 19/300 sub-line. Quiet 4-up stat strip — items · publications · vintage · Connect promise. HelixMotif watermark behind, low opacity, top-right. |
| 2 | **Featured** | white | The single most recent significant item. Half-viewport tall on desktop. Two-column: left rail = featured chip, large Cormorant italic date (32px), DM Mono uppercase source, kind tag; right = Cormorant ~48px headline, DM Sans summary, "Read at {Source} →" or "Read full article →". Computed automatically: `news.find(n => n.featured) ?? sorted[0]`. |
| 3 | **Filter rail** | sticky, glass | Single horizontal pill row: `All · Press · Podcast · Firm announcement`. Reuses the `.po` dark-glass pill treatment. Counter line on the right: `Showing N of N · Most recent first.` |
| 4 | **Year groups** | alternating white / almond | One section per year (2026 / 2025 / 2024 / 2023 / 2022 / 2021). Eyebrow `01 / 06 — 2026`. Inside, items render as editorial rows (not cards): left column = date (Cormorant italic, 18px) + source (DM Mono uppercase) + kind tag; right column = Cormorant 28px title + 1-line DM Sans summary + external `↗` if `href`. |
| 5 | **Connect CTA** | almond, narrow | Cormorant italic question on the left, single mono-cap link on the right (`Subscribe to Proto Axiom Connect →`). Same restraint as the portfolio overview footer. |

The year groups alternate **white → almond → white → almond …**, starting white. The Connect CTA always lands on almond.

---

## Source attribution — the visual job

Source names are the most important signal on this page. They are rendered in **DM Mono uppercase** with letter-spacing 0.16em, in `--nx-ink-2` (`#3a4456`) at rest. On hover of an item link, the source name and any inline mark tint to **`--nx-teal-deep` (`#007C82`)** in lockstep with the title's letter-spacing tighten.

`.item__source-mark` is reserved as an opt-in slot for a small monochrome wordmark on high-prestige sources (AFR, Forbes, FT, The Australian, Sky News, ABC, BBC, Bloomberg) — it inherits `currentColor` so it tracks the hover tint. Type alone is fine where no clean SVG mark is available, which is the v1 default.

No coloured logos. No stock icons. The page is dark-on-light editorial; brand colours don't belong here.

---

## Data — proposed schema additions

The current shape in `apps/proto/src/data/site.ts`:

```ts
export type NewsItem = { date: string; source: string; kind: string; title: string; href?: string };
```

This page uses two **optional** new fields. Both are non-breaking — existing items render fine without them.

```ts
export type NewsItem = {
  date: string;
  source: string;
  kind: string;             // 'Press' | 'Podcast' | 'Firm announcement' | other free text
  title: string;
  href?: string;
  summary?: string;         // 1–2 line editorial summary; renders in featured + row body
  featured?: boolean;       // promotes this item to the Featured section regardless of date
};
```

**`kind` values** — the filter rail expects `Press`, `Podcast`, `Firm announcement`. Existing values like `Feature`, `Interview`, `Announcement`, `Press release` should be normalised when adding `summary`/`featured` — the migration is one-touch. (The current six items were authored before the redesign and use the older labels; they continue to render under whichever pill matches their string exactly.)

**Featured selection logic** in `index.astro`:

```ts
const featured = sorted.find(n => n.featured) || sorted[0];
```

So: nothing flagged → newest item is featured. One item flagged → it's featured even if not newest. This is the editorial control we want.

---

## Tokens used (.nx scope)

All values come from `packages/ui/src/tokens.css` conceptually; the `.nx` scope re-declares the editorial subset to match `/team` (`.tm`) and `/portfolio` (`.po`):

```
--nx-ink:          #0d1a2e   /* primary ink */
--nx-ink-2:        #3a4456   /* source names, lead copy */
--nx-muted:        #6b7280   /* meta, captions */
--nx-hair:         rgba(13,26,46,0.08)
--nx-hair-strong:  rgba(13,26,46,0.14)
--nx-teal:         #00B3AB   /* eyebrow dot, accents */
--nx-teal-deep:    #007C82   /* hover tint, eyebrow chip */
--nx-gold:         #c9a84c   /* single emphasis: Firm-announcement kind dot */
--nx-almond:       #f5f0e8   /* alternate year sections + Connect CTA */
--nx-almond-2:     #efe9df
--nx-paper:        #ffffff
```

**Gold usage is restricted to the Firm-announcement kind dot** — the single point of differentiation between firm-issued items and external press in the row meta. This is the `--pa-gold` motif Anthony already uses on `/team` (Chair badge) and `/portfolio` (clinical badge).

**Type stack:**

- Display: `Cormorant Garamond` 400 + italic 300/400 — hero headline, year names, dates, item titles, featured headline, Connect CTA copy.
- Body: `DM Sans` 300/400/500 — leads, summaries, pill labels.
- Meta: `DM Mono` 400/500 — eyebrows, source names, kind tags, counter, year numbers.

---

## Motion

- **Items fade + lift on scroll** — `opacity 0 → 1`, `translateY 8px → 0`, 700ms `cubic-bezier(0.2, 0.7, 0.2, 1)`. Triggered by `IntersectionObserver` at threshold 0.12. (Class hook: `.reveal` → `.is-in`.)
- **Filter pills** — 200ms fade-out, items reorder/hide, 50ms then 300ms fade-in. Same two-phase pattern as `/portfolio`'s `.po .moment.is-hiding`.
- **Cormorant titles** — slow letter-spacing tighten on hover (`-0.005em → -0.018em`, 600ms). Source name and external arrow tint to teal-deep in the same hover.
- No parallax. No carousel. No infinite scroll. `prefers-reduced-motion: reduce` disables transitions.

---

## Out of scope for v1

- **Internal article bodies.** `apps/proto/src/content/news/*.md` bodies are placeholders. `news/[...slug].astro` continues to redirect to `/news`. If/when Anthony commissions original writing, internal items will route to `/news/[slug]` instead of opening external `href`s.
- **Search.** Filter rail is enough at this volume.
- **Source filter.** Too many sources, too few items per source for v1. Source names already do the visual work in each row.
- **Tagging beyond `kind`.**
- **RSS / email subscription form.** Connect CTA links to `/applications/membership` instead.

---

## Preview vs production

`news.html` is a **standalone design preview** — it ships its own font links, fakes the global nav/footer, and includes six demonstration items in addition to the six real items already in `data/site.ts`. The demonstration items are clearly marked `_designPreview: true` in the inline `NEWS` array. They exist only to populate the year rhythm for the design review (otherwise the 6 real items collapse into 2–3 years and the visual cadence isn't visible).

**Production (`index.astro`) reads only from `news` in `data/site.ts`** — no demonstration items, no inline data. Adding `summary` and `featured` to the existing six items (and any new items) is a content-side change, not a code change.

---

## Build

`pnpm build:proto` from monorepo root must pass after these two edits:
1. Move `news.css` → `packages/ui/src/news.css` and add the `./news.css` entry to `packages/ui/package.json` exports.
2. Move `index.astro` → `apps/proto/src/pages/news/index.astro` (overwriting the existing file).

The existing `news/[...slug].astro` redirect is unchanged.
