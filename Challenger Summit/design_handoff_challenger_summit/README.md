# Handoff: Challenger Summit Landing Page

**Target route:** `protoaxiom.com/applications/challenger`
**Target file in monorepo:** `apps/proto/src/pages/applications/challenger.astro` (replaces the existing minimal version)
**Layout:** `apps/proto/src/layouts/BaseLayout.astro` (already imports `@axiom/ui` tokens + design system)

---

## About the design files

The files in this bundle (`Challenger Summit Landing.html`, `styles.css`, `sections.jsx`, plus `assets/`) are **design references** — a high-fidelity HTML/React prototype showing intended layout, type, color, spacing and interaction. They are NOT meant to be copy-pasted into the Astro app. The task is to **recreate the design in the existing Astro + Tailwind monorepo environment**, following the patterns already established in `apps/proto/src/pages/index.astro` (which uses scoped `pa-*` BEM classes inside `<style>` blocks plus the `@axiom/ui` token system).

Open `Challenger Summit Landing.html` in a browser to see the live reference. The Tweaks panel in the bottom-right is for design exploration only and should NOT be ported.

## Fidelity

**High-fidelity (hifi).** Pixel-perfect mockup with final colors, typography, spacing, gradients and interactions. Recreate exactly. Where measurements feel off in the implementation, the prototype is the source of truth.

---

## Voice & content rules

- **Australian English** throughout: organisation, commercialise, programme, behaviour, recognised. Never US spellings.
- **Sentence case** for headings, buttons, nav. Title Case only for proper nouns ("Challenger Summit", "Proto Axiom", "St Vincent's Curran Foundation").
- **Tone**: ambitious, accessible, energising — a half-step warmer than the parent Proto institutional voice. Direct second-person is permitted ("Pitch your science. Build the company.") whereas the parent site avoids it.
- **No emoji.** Brand-guide rule, applies here too.
- **Currencies**: `A$500K`, `A$250,000`, `A$45M`. Always currency-prefixed.
- **Numbers**: spell out under 10 in body copy, numerals for 10+. Use bare years (`2026`, `2027`).

## Placeholders flagged for the team

These are intentionally left as placeholders in the prototype and need real content before launch:

1. **Timeline dates** (currently shown loosely as "Q3 2026", "Q4 2026", "Late 2026", "Early 2027", "Q1 2027") — replace with confirmed dates once known.
2. **Past winners section** (`#winners`) — three cards with `[Winner — …]` placeholder text and `LOGO` placeholder marks. Provide name, one-line description, source institution, logo SVG/PNG.
3. **Sponsor logos** — only Proto Axiom and St Vincent's are filled. Six tiles labelled "Logo placeholder" need real partner logos and labels.
4. **Application status** — current state set to `coming-soon`. When applications open, switch to the `open` state (changes hero stamp pulse copy + primary CTA label from "Join Proto Axiom Connect" → "Apply now").

---

## Screens / views

Single long-scroll landing page, plus mobile responsive breakpoints. Page sections in order:

### 1. Sticky nav (`<nav class="cs-nav">`)
- Sticky top, height `72px`, full-bleed
- Background: `rgba(246, 244, 241, 0.92)` (warm bone) with `backdrop-filter: blur(12px)`
- Border-bottom: `1px solid rgba(214, 217, 221, 0.6)`
- Left: Proto Axiom logo SVG (height 22px) → 1px hairline divider → "Challenger Summit" sublabel (13px, fg-2)
- Center: 5 nav links — "Why pitch", "Streams", "Timeline", "Eligibility", "FAQ" (14px, fg-2, hover → fg-1)
- Right: "Register interest" CTA pill (14px, padding 10/16, navy bg, white text)

### 2. Hero (`#hero`, `.cs-hero`)
- Surface: `--surface-bone` `#F6F4F1` (warmer than Proto white — this is the Challenger field)
- Two-column grid: `1.05fr 1fr`, gap 80px, padding-y `72px / 96px`
- **Left column:**
  - Status pill (rounded 999px, hairline border, white-translucent bg, 11.5px tracked uppercase)
    - Animated `--pa-green` pulse dot (2.4s ease-out infinite, `box-shadow` ripple)
    - Copy: "Applications open Q3 2026 · Register interest now" (when status=`coming-soon`)
  - **H1**: clamp(52px, 6.4vw, 88px), line-height 0.96, tracking -0.025em, weight 700
    - Two lines: "Pitch your science." / "**Build the company.**"
    - Last line wrapped in `<em>` styled as gradient text using the Challenger gradient (see Design Tokens)
  - Lead paragraph (21px, line-height 1.5, max-width 560px, fg-2)
  - Two CTAs: primary navy `#375172` and ghost (transparent + hairline border)
  - 3-column fact strip above a hairline border: PRIZE POOL · NEXT EVENT · AUDIENCE
    - 11.5px uppercase tracked label / 18px weight 600 value / 13px fg-3 sub
- **Right column** (event photo poster):
  - Aspect: min-height 600px, `border-radius: 16px`, `box-shadow: var(--shadow-3)`, overflow hidden
  - `<img>` of `assets/summit-hero.jpg` (object-fit cover) full-bleed
  - Dark gradient overlay top-to-bottom, plus a softer left-to-right
  - Top-left corner mark: 11px tracked uppercase venue label
  - Bottom-positioned poster overlay: edition row · A$500K prize (huge, weight 700, clamp 40-64px) · 3-column meta (Date / Venue / Status)
- **Below the grid**: hero strap — 1px borders top+bottom, "Open to" label + 5 audience pills + "Eligibility detail →" link

### 3. Why pitch (`#why`, `.cs-section--white`)
- Padding: 96px desktop / 64px mobile
- Header: 2-col grid (1fr / 1.4fr) — eyebrow "Why pitch" + h2 "The biggest pitch day in Australian life sciences." / 20px lead
- Body: 2-col grid (1.1fr / 0.9fr)
  - **Left**: navy lede card (`#375172`, white text, radius 16px, padding 48px, min-height 480px). Half-circle helix texture decoration at bottom-right (10% opacity). Lime eyebrow → 38px h3 → body → 4-cell metadata grid bottom (2x2)
  - **Right**: 4 stacked benefit rows (`.cs-why__benefit`)
    - White, 1px hairline, radius 12px, padding 22/24
    - Hover: border → green, translateY -1px
    - 36px num column (green, weight 600) + h4 (16px) + p (14px)
    - Content: "Non-dilutive capital", "Operating bench, on call", "Capital pathway", "Scientific advisory"

### 4. Two streams (`#streams`, `.cs-section--bone`)
- Header: 2-col (1fr / 1.3fr) — eyebrow "Two streams · one stage" + h2 "Two A$250K streams, one national showcase." / 20px lead
- **Totals strip**: 1px borders top+bottom, padding-y 24px
  - 52px gradient-text amount "A$500,000"
  - 14px fg-2 explainer to the right
- **Streams grid**: 2-col (`1.15fr 1fr`), gap 32px, **asymmetric on purpose** — Proto stream is wider/heavier
- **Proto stream** (`.cs-stream--primary`):
  - 4px gradient top edge (the Challenger gradient)
  - Background: 165deg linear-gradient `#FAF9F6 → #F0EFEC`
  - Border: `rgba(0,124,130,0.30)`, soft glow shadow `0 24px 56px -28px rgba(0,124,130,0.25)`
  - Stack: by-line + green pill amount (top row) → 26px title + 14px small subline → desc → divider → dl rows → "Apply for the Proto stream →" link bottom
- **St Vincent's stream** (`.cs-stream--partner`):
  - Plain white card, no gradient edge, `--pa-blue` accent for the amount pill
  - Same internal structure
  - External link to `supportstvincents.com.au/discovery-innovation/`

### 5. Timeline (`#timeline`, `.cs-section--white`)
- Header: 2-col, eyebrow "The path to pitch day" + h2 "From application to pitch day."
- 6-step horizontal stepper (`<ol class="cs-timeline">`)
  - **Important**: `list-style: none; padding: 0; margin: 0` on the `<ol>` to remove default decimals
  - 6-column grid, gap 0
  - Background gradient line at `top: 30px, height: 2px` using `linear-gradient(90deg, --ch-lime 0%, --ch-jade 50%, --ch-cyan 100%)` at 25% opacity
  - Each step: 14px circular dot (z-index above line) + 12px tracked uppercase when label + 17px what + 13px sub + optional pill
  - First step is `--active` state: green dot + 6px green halo box-shadow + green when label
  - Steps: "Q3 2026 Applications open" / "Q4 2026 Applications close" / "Late 2026 Shortlist announced" / "Early 2027 Pitch coaching [FINALIST WEEK]" / "Q1 2027 Pitch day [EVENT]" / "Same day Winners announced"

### 6. Eligibility (`#elig`, `.cs-section--bone`)
- 2-col grid (1fr / 1.3fr), align-items start
- **Left**: sticky (top 96px) — eyebrow "Eligibility & criteria" → h2 "Should you apply?" → lead → small note about Australian English / NZ collaborators
- **Right**: 2-col grid of yes/no lists
  - Each col header: 18px h3 with 28px circular badge (✓ green-bg / × blue-bg) + 1px bottom border
  - List items: 18px icon column (using `mask` against `assets/icon-check.svg` / `assets/icon-x.svg`) + 15px line-height-1.5 text
- 6 items per column. Source content in `sections.jsx` constants `ELIG_YES` and `ELIG_NO`.

### 7. Past winners (`#winners`, `.cs-section--white`)
- Header: 2-col, eyebrow "2026 cohort", h2 "Last year's winners.", explanatory lead
- 3-col grid of placeholder cards
- Each card: white, 1px hairline, radius 12px, padding 28px, min-height 280px, gap 16px
- Year row + stream label / dashed-bottom logo placeholder (28px dashed mark + "Logo to come" italic) / 19px name / 14px desc / 12px source
- **Note paragraph below** with hairline marker — leaves room for the team to fill placeholders

### 8. Sponsors (`#sponsors`, `.cs-section--tight cs-section--bone`)
- 2-col grid (1fr / 2.4fr)
- **Left**: eyebrow + h3 + small body
- **Right**: 4×2 grid of sponsor cells
  - 1px hairline border top+bottom of the grid; right border between cells (cleared on the 4th)
  - Each cell: 36px/24px padding, min-height 120px, type 10px corner label
  - Two filled cells (Proto + St Vincent's, white bg, 18px name + 12px sub)
  - Six placeholder cells (italic, fg-3, "Logo placeholder" + corner type label)

### 9. Apply CTA banner (`#apply`, `.cs-apply`)
- Full-bleed navy `#375172`, padding-y 88px desktop / 64px mobile
- Half-circle helix texture decoration top-right (8% opacity, 560×560, rotated)
- 2-col grid (1.2fr / 1fr), gap 80px
- **Left**: lime eyebrow → h2 (clamp 36-56px), white. Sub-line "**Don't miss the window.**" rendered in gradient text. Body paragraph → 2 buttons:
  - Primary: cyan `#11A8CE` bg, white text → hover `#008f88`
  - Ghost: transparent + 32% white border, hover white border
- **Right**: 4-row dl meta block, hairline-divided rows, lime dt labels uppercase, white dd values with smaller fg-translucent sub-line below

### 10. FAQ (`#faq`, `.cs-section--white`)
- 2-col grid (1fr / 1.6fr)
- **Left**: eyebrow + h2 "Common questions." + body + small contact card (bone bg, hairline border, radius 12px, padding 24px)
- **Right**: stacked `<details>` items
  - 1px hairline borders top+bottom of each item
  - Question row: 17px weight 600, 28px circular icon button on the right (hairline border)
  - Icon is a CSS-drawn `+` that animates to `–` on open via scaleY(0) of the vertical bar, plus bg fill changing to navy
  - Open: smooth 0.25s ease-out transitions
  - Answer: 15px line-height-1.6, max-width 720px, padding-bottom 24px
- 8 questions; first is `open` by default. Source in `FAQS` array of `sections.jsx`.

### 11. Footer (`.cs-footer`)
- Background: `--fg-1` `#1A2540` (deeper than `--surface-navy` for contrast against Apply CTA)
- 3-col top row (1.4fr / 1fr / 1fr): brand block + `Challenger Summit` links + `Proto Axiom` links
- Bottom row: copyright left + tagline right, hairline divider above

---

## Design tokens

These should map onto / extend the existing `@axiom/ui/tokens.css` system. The Challenger gradient is the only **new** brand asset — everything else is Proto-aligned.

### Colors

```css
/* Proto core (already in @axiom/ui) */
--pa-primary:       #375172;   /* navy */
--pa-primary-900:   #243a57;   /* navy hover */
--pa-secondary:     #00B3AB;   /* teal */
--pa-secondary-600: #008f88;
--pa-blue:          #4693C5;
--pa-green:         #007C82;
--pa-almond:        #E2DFDE;
--pa-grey:          #E7E8E9;
--pa-hairline:      #D6D9DD;

/* Challenger-specific (sampled from challenger-summit-logo.svg) */
--ch-lime:    #ACD037;
--ch-leaf:    #87C547;
--ch-jade:    #5DAC6B;
--ch-teal:    #48B090;
--ch-cyan:    #11A8CE;

--ch-gradient: linear-gradient(95deg,
  #ACD037 0%, #87C547 22%, #5DAC6B 50%, #48B090 75%, #11A8CE 100%);

/* Surfaces */
--surface-bone:   #F6F4F1;   /* warmer than Proto white — Challenger field */
--surface-white:  #FFFFFF;
--surface-almond: #E2DFDE;
--surface-navy:   #375172;

/* Ink */
--fg-1: #1A2540;   /* deepest navy ink */
--fg-2: #46556C;   /* secondary */
--fg-3: #6F7A8A;   /* tertiary */
```

### Typography

`Inter` 400/500/600/700 via Google Fonts. `font-feature-settings: 'ss01', 'cv11'`.

| Role | Size | Line-height | Tracking | Weight |
|---|---|---|---|---|
| Hero h1 | clamp(52px, 6.4vw, 88px) | 0.96 | -0.025em | 700 |
| h2 | clamp(32px, 3.4vw, 48px) | 1.05 | -0.018em | 700 |
| h3 | 26px | 1.2 | -0.012em | 600 |
| Lead | 20-21px | 1.5 | 0 | 400 |
| Body | 17px | 1.6 | 0 | 400 |
| Small | 15px | 1.55 | 0 | 400 |
| Meta | 13px | 1.4 | 0 | 400 |
| Eyebrow | 11.5-12px UPPERCASE | 1 | 0.14em | 600 |
| Stat (gradient) | 52px | 1 | -0.025em | 700 |

`text-wrap: balance` on h1/h2/h3, `text-wrap: pretty` on lead/body paragraphs.

### Spacing

4px grid. Sections: `padding: 96px 0` desktop / `64px 0` mobile / `64px 0` for `--tight` variant.
Wrapper: `max-width: 1280px`, padding-x 32px desktop / 20px mobile.

### Radii

| Token | Value | Use |
|---|---|---|
| sm | 4px | inline marks |
| md | 6-8px | buttons |
| lg | 12px | benefit rows, FAQ contact, winner cards, phone hero photo |
| xl | 16px | streams, why-card, hero photo |
| pill | 999px | status stamp, amount badges, icon button |

### Shadows

```css
--shadow-1: 0 1px 2px rgba(28,36,56,.04), 0 1px 1px rgba(28,36,56,.06);
--shadow-2: 0 8px 24px -8px rgba(28,36,56,.12), 0 2px 6px rgba(28,36,56,.06);
--shadow-3: 0 20px 48px -12px rgba(28,36,56,.18), 0 6px 14px rgba(28,36,56,.08);
/* primary stream glow */
box-shadow: 0 24px 56px -28px rgba(0,124,130,0.25);
```

### Motion

- `--ease-out: cubic-bezier(0.2, 0.7, 0.2, 1)`
- Hover transitions: 180ms (links, borders), 200ms (transforms), 250ms (icon animations)
- Status pulse: 2.4s ease-out infinite, box-shadow ripple from `rgba(0,124,130,0.55)` → 12px → 0

---

## Interactions & behavior

| Element | Behavior |
|---|---|
| Status pill pulse dot | 2.4s infinite box-shadow ripple (no JS, pure CSS keyframes) |
| Nav links | color fg-2 → fg-1 on hover |
| Primary buttons | bg `--pa-primary` → `--pa-primary-900` on hover; arrow translateX +3px |
| Ghost buttons | bg transparent → `rgba(55,81,114,0.05)` + border → primary |
| Apply CTA primary button | bg `--ch-cyan` → `--pa-secondary-600` |
| Benefit rows (Why) | border → green, translateY -1px on hover |
| Stream link arrows | translateX +3px on link hover |
| FAQ items | Native `<details>`/`<summary>`. Icon `+` → `–` via vertical bar `scaleY(0)`. Bg fills navy. 250ms ease-out. First item `open` by default. |
| Hero | No JS interactions in current version. Status state is content, not interactive. |

No scroll-triggered animations. No parallax. Per Proto brand rules: subtle and professional.

---

## Responsive behavior

Two breakpoints in the prototype: `1080px` and `720px`. Match with Tailwind's `lg` and `sm` (or the project's existing breakpoints).

**At ≤1080px:**
- Hero: stacks to single column, photo height 480px
- All 2-col headers (`why__head`, `streams__head`, etc.) collapse to single column
- Streams grid → single column
- Why grid → single column
- Timeline → 3 columns, row-gap 32px, gradient line hidden
- Eligibility → single column, left no longer sticky
- Sponsors → 2-column grid (was 4)
- Apply CTA → single column
- FAQ → single column

**At ≤720px:**
- Section padding 64px
- Wrapper padding-x 20px
- Hero h1 clamp `40px → 9vw → 56px`
- Hero facts → 2 columns
- Timeline → single column
- Eligibility yes/no cols → single column
- Winners → single column
- Nav: links and sub-label hidden; only logo + CTA visible
- Footer top → single column

---

## Assets

All copied into `assets/` in this handoff. Move to `apps/proto/public/images/challenger/` (or alongside the existing summit photos).

| File | Source | Purpose |
|---|---|---|
| `assets/challenger-summit-logo.svg` | Design system `portfolio-logos/` | Logo (not currently used on this page — Proto wordmark is in nav. Keep available for future use, e.g. social sharing card.) |
| `assets/proto-axiom-logo.svg` | `apps/proto/public/brand/proto-axiom-logo_full-standard.svg` | Nav logo |
| `assets/proto-axiom-logo-white.svg` | `apps/proto/public/brand/proto-axiom-logo_full-white.svg` | Footer logo |
| `assets/summit-hero.jpg` | `apps/proto/public/images/summit/hero-stage-branded.jpg` | Hero photo (default) |
| `assets/summit-{audience,panel,pitcher,networking,podium,keynote,speaker}.jpg` | `apps/proto/public/images/summit/` | Alt hero photos (used for design exploration, not all needed in production — pick one) |
| `assets/texture-full-circle.svg` | Design system | Why-card decoration |
| `assets/texture-half-circle.svg` | Design system | Apply CTA decoration |
| `assets/texture-two-lines.svg`, `texture-quarter.svg` | Design system | Available, not currently used |
| `assets/icon-check.svg`, `icon-x.svg` | Hand-drawn | Eligibility list markers (used as CSS `mask`) |

---

## Files in this bundle

| File | Purpose |
|---|---|
| `Challenger Summit Landing.html` | Open in a browser to see the live design reference |
| `styles.css` | All scoped styles (`.cs-*` BEM). Read this for exact pixel values. |
| `sections.jsx` | React components for each section + content/copy in JS arrays (FAQs, eligibility lists, timeline, benefits) |
| `tweaks-panel.jsx` | Design-time tweak panel — **do not port** |
| `assets/` | All images and SVGs the design references |
| `README.md` | This document |

---

## Suggested implementation approach

1. Replace `apps/proto/src/pages/applications/challenger.astro` with a new Astro page using the same `BaseLayout` and either:
   - **Mirror the home page approach** (used in `apps/proto/src/pages/index.astro`): inline `<style>` blocks with `pa-*` BEM classes. The classes here (`cs-*`) translate 1:1.
   - **Or use Tailwind utilities** if that better matches the team's preference. The hex values, spacing scale and type ramp above are Tailwind-friendly.
2. Pull the section content from `sections.jsx` data arrays into Astro frontmatter as plain JS arrays.
3. Use the existing `Container` component from `@axiom/ui` if width matches — otherwise the wrapper here is `max-width: 1280px, padding 0 32px`.
4. Lazy-load the hero image. Keep the `<img>` element with eager priority — it's the LCP candidate.
5. The Apply CTA button currently links to `/applications/membership` (Proto Axiom Connect signup) and `mailto:challenger@protoaxiom.com`. When applications open, swap the primary button to point at the hosted Typeform/Tally URL.
6. The page is self-contained — no new components need to be added to `@axiom/ui`. Everything is one-off enough that local Astro components are fine.

---

## Out of scope

- Form embed / application form itself (CTA links to a hosted form per the brief)
- Past winner content (placeholders only)
- Final timeline dates (loose Q labels until confirmed)
- Sponsor logo additions beyond co-hosts
- Social sharing card / Open Graph image (a good follow-up — `challenger-summit-logo.svg` is in this bundle for that purpose)
