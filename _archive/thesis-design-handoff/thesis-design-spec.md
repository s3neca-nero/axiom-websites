# Thesis page — design spec

**File:** `thesis.html` + `thesis.css` (extending the design system at `colors_and_type.css`).
**Audience priority:** sophisticated allocators / family offices, researchers and clinicians, Australian government / tech-transfer / policy readers, press.
**Tone target:** Bridgewater client letter / Howard Marks memo / "It's Time to Build" — serious, dry, intelligent, no hype words, no bullet-soup, willing to be honest about what's hard.

---

## How to read this document

The deliverable is one canonical HTML page rather than 14 isolated comps. A long-form editorial argument depends on the *sequence* of section backgrounds, the *recurrence* of the pull-quote spine, and the *consistency* of the section-id hairline header — those qualities are only legible when the sections sit next to each other. Each section below is specified individually; the page-level system note at the end covers the cross-cutting decisions.

---

## Page-level system

### 1 · Section background rhythm

With 14 sections, the white-on-white-on-white risk is real. The sequence below is designed to breathe and to signal structural turns in the argument:

| §  | Section                 | Surface             | Why                                                                 |
|----|-------------------------|---------------------|----------------------------------------------------------------------|
| 01 | Thesis (hero)           | White               | Calm opening; serif title carries the weight.                       |
| 02 | Origin                  | **Almond**          | Letter-like; warm pause before the data section.                    |
| 03 | Translation gap         | White               | Data needs a clean ground; bar chart and stat block read better.    |
| 04 | Structural answer       | White               | Continuous reasoning from §3 — same surface.                        |
| 05 | Capital footprint       | **Almond** (quiet)  | Single quiet paragraph beat; less padding than a regular section.   |
| 06 | Operating bench         | White               | Timeline reads cleanly on white.                                    |
| 07 | Four gates              | **French grey**     | Cool surface signals a process / mechanism turn in the argument.    |
| 08 | Australia               | White               | Geography flow + metrics — clean ground.                            |
| 09 | What we are not         | **Almond**          | Four "Not / Instead" boxes; warm surface keeps it from feeling cold.|
| 10 | Investment criteria     | White               | Numbered list reads as editorial, not as a card grid.               |
| 11 | Portfolio as proof      | White               | Evidence table demands the cleanest ground.                         |
| 12 | Where we fit            | **Almond**          | Positioning map sits on the warm surface — the plot is the focal.   |
| 13 | What could be wrong     | **Deep navy**       | The home-page deep-navy treatment. Strongest moment on the page.    |
| 14 | Closing                 | White               | Returns to neutral; serif coda mirrors §1 hero.                     |

Pattern: **W / A / W·W / A / W / G / W / A / W·W / A / N / W**. There are never more than two consecutive whites. The deep-navy moment falls at §13 — the second-to-last section — so it functions as the page's emotional crescendo before the closing CTA returns to calm.

### 2 · Type hierarchy

- **Cormorant Garamond** earns its keep deliberately and only:
  - Section 1 hero title at display scale (clamp 48–96px).
  - The hero pull-quote.
  - Section H2s on §2 Origin, §13 What could be wrong, §14 Closing — all sections where the firm is speaking *as a voice* rather than presenting *information*.
  - Every pull-quote across the page (the spine).
  - The struck-through "Not / Instead" name on §9.
  - The italic objection numbers on §13.
  - The §14 closing coda.
- **Inter** carries every other H2, all section-id labels, body, eyebrows, criteria, evidence table, gates, timeline, geography, captions, nav, and CTA copy.
- **DM Sans** is the body face on §13 (the deep-navy section). It reads better on dark surfaces than Inter at the same weight.
- **Sentence case** for all titles. Title-case reserved for proper nouns ("Proto Axiom", "Apple Tree Partners", "Australia"). ALL CAPS only for eyebrows and the small section-id labels.

### 3 · Pull-quote treatment (the spine)

A single, consistent treatment applied to every section so the page accumulates a vertical spine the reader can skim.

- **Face:** Cormorant Garamond italic, weight 500.
- **Size:** clamp(22px, 2.4vw, 32px). One step smaller in the hero (since the hero already shouts in serif).
- **Color:** Primary navy on light surfaces; white on the deep-navy section.
- **Rule:** 2px solid teal (`--pa-secondary`) on the left edge, 28px padding-left.
- **Width:** max 36ch — a balance line, not a paragraph.
- **Position:** always at the *end* of the section's body, never breaking it. The spine reads as a contemplative summary, not a drop-cap interruption.

### 4 · Section transitions

A single, repeating treatment:

- **Section-id header**: 2-column grid (rail + content). Left: `01 / 14` in tabular-nums uppercase. Right: section label in uppercase tracked +0.18em. A 1px hairline below. This is the most important *quiet* design decision on the page — it numbers the argument like a journal article and gives the reader a constant sense of where they are.
- **Vertical rhythm**: 128px section padding on desktop, 96px on tablet, 72px on mobile. Almond and grey sections lose the section-divider hairline (the surface change *is* the divider).
- **No section-numbering animations, no arrows, no scroll indicators.**

### 5 · Helix integration

Three quiet expressions of the home-page motif. Never a fourth.

1. **Hero watermark (§1):** A static SVG of the double-helix curve at 6% opacity, anchored to the top-right of the hero, 720px tall. It includes 11 teal nodes at the helix vertices — a literal echo of the home-page constellation at rest. Pure SVG, zero JS, zero animation.
2. **Deep-navy watermark (§13):** Same curve recoloured in `#00B3AB` at 4.5% opacity on the navy ground. The motif appears only on the two strongest sections (the opening and the sceptic's section), so its meaning compounds rather than dilutes.
3. **Nodes-on-strand (§7):** The four gates sit on a 1px hairline strand with circular nodes at each gate. The first node carries the teal accent. This is the only diagram on the page where the helix language drives the structure.

Critically, the motif **does not appear** on §3 (data), §4 (comparison), §6 (timeline), §11 (evidence), or §12 (positioning map). On data sections it would compete with the chart. On structural sections it would clutter the argument. The principle: the motif appears where the firm is speaking, not where the firm is showing.

### 6 · Mobile (≤720px)

- All multi-column splits (`tx-split`) collapse to a single column. Rails become inline eyebrow blocks above the section H2.
- The bar chart (§3) keeps its three rows but the country flag column shrinks; values stay right-aligned.
- The "designed for" comparison (§4) stacks vertically, with a hairline divider between the two columns and the second column keeping its almond surface tint to preserve the `Designed for X / Designed for Y` rhythm.
- The positioning map (§12) becomes 4:5 portrait so points don't cluster; labels shrink to 10px.
- The evidence grid (§11) collapses each row to a stacked card, with each cell prefixed by its column header (Origin, Role, Stage, Next inflection) via `data-lbl` attributes — a definition-list-style fallback for narrow widths.
- The gates (§7) become a 2×2 grid at ≤1024px, then 1-column at ≤720px. The connecting strand is hidden when columns wrap.
- The right-rail TOC is hidden below 1280px; on smaller screens the section-id hairline header is the only navigation indicator.

### 7 · Anchor navigation

- A **right-rail floating TOC** appears on screens ≥1280px. It shows two-digit numbers permanently and reveals labels on hover (or when active). Active state is scroll-driven via IntersectionObserver. The TOC is muted (`rgba(255,255,255,0.7)` panel, hairline left border), styled so it never competes with reading.
- **No top-of-page "On this page" block.** It would compete with the hero. The right rail does the same job without slowing the entrance to the argument.
- Below 1280px the TOC disappears; the section-id `01 / 14` header is the page's only orientation marker — which, given how restrained the rest of the page is, is enough.

### 8 · Motion notes (page-wide)

- No bouncy easings anywhere. Single ease curve: `cubic-bezier(0.2, 0.7, 0.2, 1)` (already in design tokens).
- Bar-chart fills animate `width` over 600ms on enter via `.tx-reveal`. Disabled under `prefers-reduced-motion`.
- TOC labels expand on hover with a 220ms transition.
- CTA links (§14) shift their trailing arrow 4px on hover.
- The helix watermarks are **not animated**. They are static. The home page is the loud version; the thesis page is the quiet version.
- All entrances are opt-in (`.tx-reveal`); the page is fully readable with motion disabled.

### 9 · Accessibility (page-wide)

- **Contrast:** body on white meets WCAG AAA (≥7:1, `--pa-ink` on `#fff`). Body on almond meets AA. Body on the deep-navy §13 meets AA at `rgba(255,255,255,0.82)` against `#0a1320` (≥9:1). White-on-teal pull-quote rules are decorative only.
- **Focus:** 2px solid teal outline, 3px offset, on every interactive element (nav links, CTAs, TOC items, footer links, in-text anchors). Always visible.
- **Semantics:** `<main>` wraps the article; each section is a `<section>` with a stable `id`. H2s are unique per section. The bar chart and positioning map use `role="figure"` with `aria-label`. The evidence table uses `role="table"` and per-cell `data-lbl` attributes that double as mobile labels.
- **Reduced motion:** `prefers-reduced-motion: reduce` disables the bar-fill animation, the smooth scroll, and the reveal transitions in one block at the end of `thesis.css`.

### 10 · New tokens / components proposed

The page uses the existing `--pa-*` tokens unchanged. Two additions are proposed:

- **`--pa-deep-navy: #0a1320`** — the home-page canvas. Already documented in the brief as part of the brand. Used on §13 only and on the footer.
- **`--pa-warm-almond: #ECE7E1`** and **`--pa-almond-soft: #F4F0EB`** — slightly warmer than the existing `--pa-light-almond` (`#E2DFDE`). Tested both: `#F4F0EB` reads as breathing room, `#E2DFDE` reads as a card surface. For a long-form page with multiple almond sections, the softer tone holds up better.

Two new component classes that should be lifted into the design system:

- **`.tx-section-id`** — the numbered hairline header pattern. This works for any long-form editorial page (e.g. a future "Approach" or "Process" page).
- **`.tx-pull`** — the pull-quote treatment. The spine pattern is reusable wherever long-form prose needs vertical rhythm.

---

## Per-section specs

### §1 — Thesis (hero)

**Layout grid.** 2-column (220px rail / 1fr content) with 80px gutter, 1280px max-width container. Hero padding: 220px top / 160px bottom. Below 1024px collapses to single column with 120px / 96px padding.

**Tokens.**
- Surface: `#fff`. Bottom hairline `--pa-rule-soft`.
- Eyebrow: `--pa-accent-green`, 12px Inter SemiBold, +0.22em tracking.
- Title: Cormorant Garamond, weight 500, `clamp(48px, 6.4vw, 96px)`, line-height 1.02, letter-spacing -0.012em. The phrase "hard middle" is italicised in `--pa-secondary` (teal) for emphasis — the only hue in the title.
- Lead: Inter Regular, 22px / 1.55, `--pa-ink-muted`, 56ch max measure.
- Pull-quote: Cormorant italic, weight 500, `clamp(22px, 2.2vw, 30px)` / 1.35, `--pa-primary`, 32ch max, 2px teal left rule.

**Motion.** None on entrance (the hero is the first impression — no reveal). The helix watermark is static SVG.

**Accessibility.** AAA contrast on title and lead. Focus state on the nav CTA. Helix SVG is `aria-hidden`. Title uses `<em>` so the italic emphasis is semantic, not decorative.

**Rationale.** The hero is the only section where Cormorant operates at display scale. The italic teal on "hard middle" is the page's single typographic flourish — it announces both the thesis and the visual permission to use the serif sparingly elsewhere. The hero deliberately omits a CTA: serious arguments don't ask for action before they've made the argument.

---

### §2 — Origin

**Layout grid.** Almond surface, 2-column split (rail + content). Rail carries "A note from the founders / Sydney · 2021 → present" — a letter-like attribution.

**Tokens.**
- Surface: `--pa-almond-soft` (`#F4F0EB`).
- H2: Cormorant Garamond, weight 500, `clamp(38px, 4.2vw, 60px)` / 1.05.
- Body: Inter Regular, 19px / 1.65 (the "lead" body variant — slightly heavier than default body to feel personal).
- Pull-quote: standard spine treatment.

**Motion.** None.

**Accessibility.** AA on almond. The rail eyebrow is decorative meta — main heading hierarchy is unaffected.

**Rationale.** This is the firm speaking as a voice, not presenting a fact. Cormorant H2 + slightly larger body type signal "this is a letter, read it slowly." The almond surface immediately after the white hero gives the reader's eye a moment of warmth before the data section that follows.

---

### §3 — The translation gap

**Layout grid.** White, 2-column split. Body, then bar chart (max-width 760px), then a paired stat block (2-column), then the pull-quote.

**Tokens.**
- Bar chart: 64px label / 1fr bar / 120px value. 8px-tall bars on `--pa-french-grey` ground; fills in `--pa-primary`. The Australia row is highlighted in `--pa-secondary` (teal) — the visual punchline of the chart.
- Caption: 12px Inter Regular, `--pa-ink-subtle`. Sources: AusBiotech / OECD MSTI / NVCA, 2024. Methodology footnote included.
- Paired stat block: 56px Inter Medium tabular-nums, with subscript units in `--pa-ink-subtle`. Two stats side by side: science output (rank 7) vs. company-building capital (0.06% of GDP).

**Motion.** Bar fills animate from 0 to their final width over 600ms via IntersectionObserver `.tx-reveal`. Disabled under reduced motion (bars render at final width immediately).

**Accessibility.** Chart wrapped in `role="figure"` with descriptive `aria-label`. Country flags are decorative (`aria-hidden`); country names are written in the label. AA contrast on caption.

**Rationale.** The bar chart preserves the existing pattern from `/investment` but tightens the typography (tabular numerals, single-row hairlines). The paired stat block answers the "input vs. capital" question the brief asked for in a quieter way than a two-axis scatter — for an audience reading carefully, two big numbers are more legible than a plot.

---

### §4 — Structural answer

**Layout grid.** White, 2-column split. Body then a 2-column "designed for" comparison.

**Tokens.**
- Comparison: 2 columns, hairline divider between them; right column gets `--pa-almond-soft` background to differentiate without making it feel like "the right answer". Definition list: 11px tracked uppercase term, 15px Inter dd, 1px hairline below each pair.
- Both columns use the same `Designed for / Closed-end venture fund` and `Designed for / Proto Axiom holding company` framing — never "good vs. bad".

**Motion.** None.

**Accessibility.** Native `<dl>` semantics. Both columns have identical structure so screen readers can compare row-by-row.

**Rationale.** The "designed for" framing — taken directly from the brief — turns what is normally a hostile comparison into a structural one. Pacing / role / pressure / strength are the four axes, parallel between columns. The almond tint on the right column is the only visual emphasis given to Proto Axiom — never bold, never coloured.

---

### §5 — Capital footprint

**Layout grid.** Almond, **quiet** padding (96px instead of 128px). 2-column split with a 3-column geography block below the body.

**Tokens.**
- Geography block: 3 hairline-bordered cells. Country code in tracked uppercase, percentage as 44px tabular-num, label in 13px muted body.
- Percentages are **approximate** ("~60%") — explicitly so, since the brief notes the firm doesn't disclose every name.

**Motion.** None.

**Accessibility.** Geography wrapped in `role="figure"`. Numbers are large enough that the approximation tilde is unambiguous.

**Rationale.** This is the "single-paragraph quiet section" pattern from the existing `/investment` page, applied. No logos, no investor names — the brief was explicit. The geography sketch is structural information, not a brand wall.

---

### §6 — Operating bench

**Layout grid.** White, 2-column split. Body then a 3-column timeline (Week 01 / Month 01 / Year 01).

**Tokens.**
- Timeline: 3 columns separated by 1px hairlines. Each step has eyebrow (Inter SemiBold uppercase, accent green), title (20px Inter Medium navy), and a hairline-divided list of 4 items.
- Lists: 14px Inter Regular `--pa-ink-muted`, 10px vertical padding, 1px `--pa-rule-soft` between items.

**Motion.** None.

**Accessibility.** Timeline is `role="list"` with `role="listitem"` children. The temporal labels (Week 01, Month 01, Year 01) carry the sequence; visual order matches DOM order.

**Rationale.** The brief asked for "operational, not decorative". Hairlines, not cards. No icons. The reader gets four concrete deliverables per stage — the kind of operational specificity that distinguishes a real operating platform from a pitch deck about one.

---

### §7 — Four gates

**Layout grid.** **French grey** surface (the cool surface signals a process turn). 2-column split. Below the body: a 4-column "nodes-on-strand" diagram — the helix-derived structural treatment promised in the brief.

**Tokens.**
- Strand: 1px `--pa-rule` horizontal line, absolutely positioned.
- Nodes: 36px circles, 1px hairline border, white fill, with the gate number (`01`–`04`) inside. Gate 01 carries the teal accent.
- Gate name: tracked uppercase eyebrow.
- Gate title: 19px Inter Medium navy, max 14ch.
- Q/A definition list: "Decision" / "Evidence" pairs.

**Motion.** None on the strand or nodes. The diagram is static.

**Accessibility.** Each gate is a self-contained block with a unique heading. The strand is `aria-hidden`. Below 1024px the strand disappears (visual coupling is gone but content order is preserved).

**Rationale.** This is the page's most explicit helix reference outside the watermarks — and it does real work. The gates *are* nodes on a strand. The visual metaphor reinforces the operational claim: each gate is a discrete decision, connected to the next by structural continuity, not by inevitability.

---

### §8 — Australia as starting advantage

**Layout grid.** White, 2-column split. Body, then a flow diagram (Australia → Global) with a 60px arrow column between, then a 3-column metrics row.

**Tokens.**
- Flow nodes: 1px hairline boxes, 32px padding, eyebrow + h3 + hairline-divided list.
- Arrow: 60×24 SVG inline, `currentColor` stroke, 1.25 stroke-width. On mobile the arrow rotates 90deg.
- Metrics row: 3 columns, hairline top, 32px Inter Medium tabular-num, with caption.

**Motion.** None.

**Accessibility.** Arrow SVG is `aria-hidden`; the visual sequence is supported by the "Launch environment" / "Outward path" eyebrows.

**Rationale.** The brief asked for "map-based sequence... restrained — do not make the map the focal point." A literal map would have been wrong. The flow diagram is map-shaped without being a map — Australia on the left, Global on the right, an arrow between. The metrics anchor the claim (A$1.6B sector, 7,700 employees, 1,850 trials).

---

### §9 — What we are not

**Layout grid.** Almond, 2-column split. Body, then a 2×2 grid of "Not / Instead" cells.

**Tokens.**
- Grid: 1px hairline border, 1px hairline dividers between cells.
- "Not" eyebrow: tracked uppercase, `--pa-ink-subtle`, prefixed with the word "Not " via `::before`.
- "Not" name: Cormorant Garamond italic 26px, line-through in 1px hairline. The struck-through serif is the visual joke — what we are *not* is rendered in the firm's most formal voice, then crossed out.
- "Instead" eyebrow: tracked uppercase, accent green.
- Body: 15px Inter Regular, 38ch max.

**Motion.** None.

**Accessibility.** Line-through is decorative; the word "Not" prefix carries the meaning for screen readers. Instead/Not pair is one paragraph per cell.

**Rationale.** The brief said "tight copy, no icons". The struck-through Cormorant is the icon — it's a typographic gesture, not an illustration. Each cell is a paragraph long, not a sentence; this is one of the most argument-dense moments on the page.

---

### §10 — Investment criteria

**Layout grid.** White, 2-column split. Body, then a 5-row criteria table: 80px number / 1fr title / 1.4fr body.

**Tokens.**
- Number: 14px Inter Medium tabular-num, `--pa-ink-subtle` (intentionally muted — the criterion is the point, not the count).
- Title: 19px Inter Medium navy, max 18ch.
- Body: 15px Inter Regular, 50ch max, full body weight.
- Hairlines top/bottom of each row, plus a hairline below the last.

**Motion.** None.

**Accessibility.** Native heading hierarchy (h3 per criterion). On mobile the body re-flows below the title with a 56px left indent so the number column still reads as a list.

**Rationale.** The brief asked for "five numbered criteria with one sentence each, sticky two-column layout". The sticky behaviour comes from the section's outer `tx-split` (the rail eyebrow stays in view as the reader scans the criteria). Inside the section, the criteria are a table — readable as a scannable list, not a card grid pretending to be one.

---

### §11 — Portfolio as proof

**Layout grid.** White, 2-column split. Below the body: an evidence table with 5 rows × 5 columns (Company / Origin / Role Proto played / Stage / Next inflection).

**Tokens.**
- Table head: tracked uppercase 11px, `--pa-ink-subtle`.
- Company name: 17px Inter Medium navy.
- Cells: 14px Inter Regular, body color, with `--cell--muted` variant for tertiary info.
- Stage chip: 11px Inter Medium tracked uppercase, 1px accent-green border, 6×10px padding, 2px radius.
- Hairlines: 1px below header, 1px `--pa-rule-soft` between rows.

**Motion.** None.

**Accessibility.** `role="table"`, `role="row"`, plus `data-lbl` on every cell. On mobile (≤1024px) the table head hides and each cell renders its own header from `data-lbl::before` — making the table read as a stacked card.

**Rationale.** This is the section that most easily slides into "logo wall" mode. Refusing logos and refusing thumbnails forces the design to deliver evidence. The single-line stage chip (Pre-clinical, Platform, Clinical, Formation, Clinical) is the only coloured element per row — a quick scannable rhythm of "where each company is right now".

---

### §12 — Where we fit

**Layout grid.** Almond, 2-column split. Below the body: a 16:10 positioning plot with x-axis (capital duration: closed-end → permanent) and y-axis (operating intensity: high → low).

**Tokens.**
- Plot: `--pa-almond-soft` ground with a subtle 4×4 grid (rgba primary at 0.08).
- Points: 12px circles in `--pa-primary` with white inner ring; Proto Axiom is enlarged (18px), teal-filled, with a 6px rgba teal halo.
- Labels: 12px Inter Medium with a 4×6px almond-soft pill behind for legibility against the grid; Proto Axiom's pill is white with a 1px teal border.
- Geography line: 10px tracked uppercase below each label.

**Motion.** None.

**Accessibility.** The plot is `role="figure"` with descriptive `aria-label` and a caption explaining the axes and the geography annotation. Each point is a labelled element in DOM order (Traditional VC, Third Rock, Flagship, ATP, Medicxi, Syncona, Proto Axiom), so a screen-reader user gets the comparison without seeing the plot.

**Rationale.** The plot answers the brief's "operating intensity × capital duration with geography as annotation" exactly. Proto Axiom sits in the upper-right (high intensity, permanent capital) — visually distinct without being self-congratulatory. Geography is rendered as a small uppercase label beneath each name, never as a flag or colour, so the comparison stays structural.

---

### §13 — What could be wrong

**Layout grid.** **Deep navy** (`#0a1320`), the home-page canvas. 2-column split, body in DM Sans for better legibility on dark surfaces. Below the body: 4 numbered objections in a 60px / 1fr / 1.4fr grid (number / claim / answer).

**Tokens.**
- Surface: `--pa-deep-navy`. Body in DM Sans Regular at `rgba(255,255,255,0.82)`.
- H2: Cormorant Garamond at hero scale — the second time the serif appears at this size on the page.
- Objection number: Cormorant italic 36px at 0.45 white — large but recessive, like a marginalia number.
- Claim: 19px DM Sans Medium white, 30ch max — the objection itself, in plain English.
- Answer label: 10px tracked uppercase teal eyebrow ("Our answer — selection discipline").
- Answer body: 15px DM Sans Regular at 0.78 white, 56ch max.
- Helix watermark: identical SVG to §1 hero, recoloured teal at 4.5% opacity, anchored top-right.

**Motion.** None. The watermark is static.

**Accessibility.** White-on-deep-navy at 0.82 opacity ≈ 9:1 contrast (AAA). The teal answer-label sits at ~5:1 against the dark ground (AA for tracked uppercase). Focus ring stays teal; visible on dark surfaces.

**Rationale.** The brief flagged §13 as the strongest candidate for the deep-navy treatment, and it is the right call — the only place on the page where the firm explicitly engages with what could break the model. The serif H2 + numbered objections deliberately echo the §1 hero's typographic register; structurally, §13 *is* the hero in negative — same gravity, opposite argument. The teal answer-labels are the only colour, doing the work of signalling that each objection is met directly.

---

### §14 — Closing

**Layout grid.** White, 2-column split. Body, then a 3-column CTA grid (Allocators / Researchers / Institutions), then a centred italic coda.

**Tokens.**
- CTA cards: 1px hairline border, 1px hairline dividers, 48px padding. Audience eyebrow (accent green tracked uppercase), h3 (22px Inter Medium navy), body (14px muted), then a single bottom-anchored link.
- Link: Inter Medium, navy, single-line underline 1px / 6px offset, with a trailing arrow that translates 4px on hover. Hover colour shifts to `--pa-accent-green`.
- Coda: Cormorant italic 28–40px clamp, centred, max 38ch, 96px top margin — the final beat of the page.

**Motion.** Arrow translates 4px on hover; colour shifts on hover. Both 220ms.

**Accessibility.** Three cards are three `<h3>` blocks with semantic links (mailto:). Focus state on each link.

**Rationale.** The brief's "three CTA cards" framing, applied with restraint. No coloured buttons — buttons would feel like a startup landing page. The coda ("If the science is serious and the company is buildable, we want to see it") in italic Cormorant closes the page with the same voice the hero opened with: serious, dry, confident.

---

## Composite (top-to-bottom view)

The screenshot composite at `screenshots/01-01-hero.png` (and related captures) shows the page rendering. The visual rhythm to verify: **white hero → almond origin → white data → white structure → almond capital → white bench → grey gates → white Australia → almond not → white criteria → white portfolio → almond map → navy sceptic → white closing**.

The deep-navy §13 sits at ~85% scroll depth — the place where, structurally, a long-form argument is most fragile. Putting the strongest visual moment there is intentional: it marks the section where the firm engages with its own failure modes, and signals to the reader that everything before it can be trusted because everything after it is already accounted for.
