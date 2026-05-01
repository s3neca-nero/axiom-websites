# Axiom Websites

Monorepo for **protoaxiom.com** and **endoaxiom.com**, built with Astro + Tailwind and deployed to Vercel.

## Layout

```
apps/
  proto/   Proto Axiom marketing site (protoaxiom.com)
  endo/    Endo Axiom marketing site (endoaxiom.com)
packages/
  ui/      Shared brand components (Nav, Footer, Button, Container)
  config/  Shared Tailwind preset + TS config
```

## Prerequisites

- Node 20+
- pnpm 9+ (`corepack enable && corepack prepare pnpm@9.12.0 --activate`)

## Getting started

```bash
pnpm install
pnpm dev:proto      # localhost:4321
pnpm dev:endo       # localhost:4322
```

## Building

```bash
pnpm build              # both sites
pnpm build:proto        # just Proto
pnpm build:endo         # just Endo
```

## Deploying

Each app is an independent Vercel project pointing at the same GitHub repo with its root directory set to `apps/proto` or `apps/endo`.

Vercel build settings for each:

- **Framework preset:** Astro
- **Build command:** `cd ../.. && pnpm install --frozen-lockfile && pnpm --filter <proto|endo> build`
- **Output directory:** `dist`
- **Install command:** leave default (Vercel detects pnpm)

## Current status

- [x] Monorepo scaffolded
- [x] Shared brand tokens + components stubbed
- [x] Placeholder pages in both apps
- [ ] Brand tokens verified against Figma (waiting on HappySimple)
- [ ] Real content ported from Webflow CMS export
- [ ] Real content ported from Wix
- [ ] Deployed to Vercel staging
- [ ] DNS cutover

See `MIGRATION_CHECKLIST.md` for the step-by-step handover.
