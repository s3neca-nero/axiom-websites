# Migration Checklist

Step-by-step guide for taking protoaxiom.com and endoaxiom.com from Webflow/Wix to this Astro monorepo on Vercel. Work through roughly in order — the items marked **[you]** require your hands on the keyboard; everything else Claude can do once the upstream step is done.

---

## Phase 1 — Source material extraction

### 1.1 Webflow code export (protoaxiom.com) **[you]**

1. Log into Webflow → open the Proto Axiom site.
2. In the Designer, top-left menu → **Export Code** (requires a site plan on the account; confirm with Marina if the export button is greyed out).
3. Download the ZIP.
4. Save it as `C:\Users\AnthonyLiveris\Proto Axiom\Proto Axiom - Documents\10 Marketing & Media\Website and Brand\Websites\_imports\webflow-export.zip`.
   (Create the `_imports` folder — it's gitignored via `.gitignore`.)
5. Let Claude know it's there and Claude will unzip and diff against the Astro scaffold.

### 1.2 Webflow CMS export (protoaxiom.com) **[you]**

For each Collection (News, Portfolio, Team — whatever exists):

1. In Webflow Designer → **CMS** icon in the left sidebar.
2. Click the Collection → **Export CSV** (top-right).
3. Save each CSV into `_imports/webflow-cms/` with the Collection name as the filename (e.g. `news.csv`, `portfolio.csv`, `team.csv`).
4. For each collection that has image fields, also download the referenced images — Webflow's CSV exports give image URLs, not the files themselves. Claude can write a script to pull them down once the CSVs are in place.

### 1.3 Wix content extraction (endoaxiom.com) **[you, with help]**

Wix has no code export. Two parallel tasks:

**(a) Content transcription** — for each page on endoaxiom.com (Home, Team, Media, Privacy Policy, plus any form copy), copy/paste the full text into `_imports/wix-content/<page>.md`. Claude can then port each into the matching `apps/endo/src/pages/*.astro` file.

**(b) Asset download** — for each image on the site, right-click → Save Image As → drop into `_imports/wix-assets/`. Include team photos, logos, any media thumbnails.

Alternative: Claude can drive Claude in Chrome to do this if you'd rather — say the word.

### 1.4 Assets from HappySimple **[Marina is handling]**

Marina's email thread is requesting:
- Figma files for both sites
- Brand guidelines (colors, fonts, usage)
- Logo files (SVG + favicon variants)
- Full-res photography
- Font files + licenses

When those arrive, drop them in `_imports/brand/` and Claude will:
- Replace placeholder hex values in `packages/ui/src/tokens.css`
- Replace placeholder font stacks
- Copy logos into `apps/proto/public/` and `apps/endo/public/`
- Flag any fonts that need commercial licenses before we ship

---

## Phase 2 — Analytics baseline (before cutover) **[you]**

Do this *before* the rebuild launches so you have comparable numbers.

### 2.1 Google Analytics 4

1. Go to https://analytics.google.com → **Admin** (bottom-left gear).
2. **Create Property** → name it "Proto Axiom" → Australia / AUD / Sydney timezone.
3. Under **Data Streams** → **Add Web Stream** → URL `https://protoaxiom.com` → stream name "Proto Axiom Web".
4. Copy the **Measurement ID** (starts `G-`).
5. Repeat for Endo Axiom (separate property, separate measurement ID).
6. Share both Measurement IDs with Claude — they get added to the base layouts.

### 2.2 Google Search Console

1. https://search.google.com/search-console → **Add Property**.
2. Pick **Domain property** → enter `protoaxiom.com`.
3. Verify via DNS TXT record → Squarespace's DNS UI → add the TXT record Google shows you.
4. Repeat for `endoaxiom.com`.
5. Note the verification status — Claude doesn't need the TXT value afterward, just confirmation both are verified.

### 2.3 Current metrics snapshot

After GA4 is live for a few days, grab a screenshot of:
- 30-day sessions & users per site
- Top 10 pages
- Top referrers

These become the before/after comparison when the new sites go live.

---

## Phase 3 — Repo + Vercel setup

### 3.1 Git repo creation **[you]**

1. In whichever GitHub org you use for Proto Axiom, create a new private repo called `axiom-websites` (empty — no README, no gitignore, no license).
2. In your terminal, from `C:\Users\AnthonyLiveris\Proto Axiom\Proto Axiom - Documents\10 Marketing & Media\Website and Brand\Websites`:

```bash
git init
git add .
git commit -m "Initial scaffold: Astro monorepo for Proto + Endo Axiom"
git branch -M main
git remote add origin git@github.com:<your-org>/axiom-websites.git
git push -u origin main
```

3. Share the repo URL with Claude.

### 3.2 Vercel projects **[you, guided]**

Create *two* Vercel projects pointing at the same repo — one per site.

**Project 1: proto-axiom**
1. Vercel dashboard → **Add New** → **Project**.
2. Import the `axiom-websites` repo.
3. **Root Directory**: `apps/proto`
4. **Framework Preset**: Astro (should auto-detect).
5. **Build Command**: `cd ../.. && pnpm install --frozen-lockfile && pnpm --filter proto build`
6. **Output Directory**: `dist`
7. **Install Command**: leave blank.
8. Deploy. Expect it to land on a URL like `proto-axiom.vercel.app`.

**Project 2: endo-axiom**
1. Same repo.
2. **Root Directory**: `apps/endo`
3. **Build Command**: `cd ../.. && pnpm install --frozen-lockfile && pnpm --filter endo build`
4. Same other settings.

### 3.3 Staging subdomains (optional but recommended)

In Squarespace DNS for each domain:
- Add CNAME: `new.protoaxiom.com → cname.vercel-dns.com`
- Add CNAME: `new.endoaxiom.com → cname.vercel-dns.com`

Then in each Vercel project → **Settings → Domains** → add `new.<domain>`.

This lets you preview the rebuilt sites at `new.protoaxiom.com` / `new.endoaxiom.com` without touching the live Webflow/Wix setups. Share those URLs with Marina / stakeholders for review.

---

## Phase 4 — Content port

Claude does most of this, with your review.

- [ ] Parse `webflow-export.zip` → port any unique page styles into Astro components.
- [ ] Parse each CSV in `_imports/webflow-cms/` → generate one markdown file per entry in `apps/proto/src/content/<collection>/`.
- [ ] Download referenced images from Webflow CDN URLs → `apps/proto/public/images/`.
- [ ] Transcribe Endo pages into `apps/endo/src/pages/*.astro` from `_imports/wix-content/`.
- [ ] Move Wix assets into `apps/endo/public/images/`.
- [ ] Replace placeholder brand tokens with Figma-confirmed values.
- [ ] Swap in real logos in both apps' `public/` folders.
- [ ] Wire up contact/enquiry forms — decide on Formspree vs Resend vs a Vercel serverless function.

---

## Phase 5 — Pre-cutover checks

- [ ] Visual regression: spot-check every page on `new.*` against the live site. Fix breakages.
- [ ] Lighthouse scores ≥ 90 for Performance, Accessibility, Best Practices, SEO on all key pages.
- [ ] Confirm GA4 is firing on all pages.
- [ ] Confirm sitemap.xml is generated and accessible.
- [ ] Set up 301 redirects for any URLs that changed slugs (unlikely, but check).
- [ ] Test all forms end-to-end with a real submission.
- [ ] Final content review with Marina.

---

## Phase 6 — DNS cutover **[you]**

**Do Proto first, Endo the next day** — so if anything breaks on Proto you're not debugging two migrations at once.

### For each domain in Squarespace DNS:

1. Note the current DNS records for safety (screenshot or copy to a notepad):
   - A records for `@` and `www`
   - Any CNAMEs
   - **Critical**: MX records, SPF TXT records, DKIM — these control email. Do not touch.
2. Remove old A/CNAME records for `@` and `www` pointing at Webflow/Wix.
3. Add:
   - A record: `@ → 76.76.21.21` (Vercel's anycast IP)
   - CNAME: `www → cname.vercel-dns.com`
4. In Vercel → each project → **Settings → Domains** → add the production domain (`protoaxiom.com` or `endoaxiom.com`).
5. Also add the `www` variant and set one as the canonical (Vercel handles the redirect).
6. Wait 5–60 minutes for DNS propagation. Check with `dig protoaxiom.com` or https://dnschecker.org.
7. Once propagated, hit the live URL and verify in an incognito window.

### After cutover

- Old Webflow site stays parked — keep the plan active for a month in case you need to roll back.
- Remove HappySimple as Webflow Designer guests (Workspace → Members).
- Remove HappySimple from Wix admin (Roles & Permissions).
- Switch off Wix billing once everything is stable.
- Celebrate.

---

## Emergency rollback

If anything goes wrong after cutover:

1. In Squarespace DNS, revert the A record for `@` and CNAME for `www` back to the values you screenshotted in step 1 of Phase 6.
2. DNS propagation for a revert is usually faster than the forward change (5–15 min) because old records may still be cached.
3. Keep calm — the Webflow/Wix sites didn't go anywhere; you're just pointing back at them.
