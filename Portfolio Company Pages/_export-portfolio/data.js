/* Proto Axiom — Portfolio Detail Pages
 * Public-safe content array. Drop into Astro page frontmatter.
 *
 * RULES (per brief):
 *   - No dollar amounts invested, no equity %, no internal gate codes.
 *   - Stage in plain English ("Preclinical", "IND-enabling", "Phase 1/2",
 *     "MVP development", "Pilot facility build-out").
 *   - relationship: "founding-investor" | "venture-stake"
 *   - Australian English in copy.
 *   - Where a real value isn't yet public, use bracketed placeholders so
 *     the editor knows to fill it in: "[ Date TBC ]", "[ Stage to come ]".
 */

window.PA_PORTFOLIO = [
  {
    slug: 'endo-axiom',
    name: 'Endo Axiom',
    logo: 'assets/portfolio-logos/endo-axiom.svg',
    tagline: 'A first-in-class oral insulin platform using liver-targeting nanotechnology, addressing a multi-billion-dollar diabetes market with no currently approved oral product.',
    sector: 'Therapeutics',
    modality: 'Oral insulin · Nanotechnology',
    origin: 'University of Sydney / ANZAC Research Institute',
    yearFounded: 2023,
    stage: 'Preclinical · IND-enabling',
    relationship: 'founding-investor',
    website: 'https://endoaxiom.com',
    trialRegistry: null,
    heroImage: 'assets/images/lab-researchers.jpg',
    heroImageCaption: 'Endo Axiom laboratory, ANZAC Research Institute, Concord NSW.',
    narrative: [
      'Endo Axiom is developing the first oral insulin therapy designed to mimic the body\'s own insulin pathway. The platform uses liver-targeting nanoparticles to deliver insulin directly to hepatocytes — restoring the natural first-pass biology that injected insulin bypasses, and addressing a market in which no oral product has been approved.',
      'The science was developed over more than a decade at the ANZAC Research Institute in Concord, NSW, by Professor Victoria Cogger and Associate Professor Nicholas Hunt. Proto Axiom partnered with the inventors in 2023 to form the company, license the underlying IP from the University of Sydney, install management, and fund the preclinical programme.',
      'The current programme is focused on IND-enabling studies and manufacturing readiness, with a clinical pathway targeting type 1 and insulin-dependent type 2 diabetes.'
    ],
    leadership: [
      { name: 'Prof. Victoria Cogger', title: 'Co-founder & Chief Scientific Officer', institution: 'University of Sydney · ANZAC Research Institute', photo: null },
      { name: 'A/Prof. Nicholas Hunt', title: 'Co-founder', institution: 'University of Sydney · Entrepreneur in Residence, Proto Axiom', photo: 'assets/team/nicholas-hunt.png' },
      { name: '[ CEO to be announced ]', title: 'Chief Executive Officer', institution: '', photo: null }
    ],
    programmeStatus: {
      now: 'IND-enabling preclinical studies and GMP manufacturing scale-up.',
      next: 'First-in-human clinical trial submission. [ Submission window TBC ]',
      partners: ['University of Sydney', 'ANZAC Research Institute', 'Sydney Local Health District']
    },
    news: [
      { headline: 'Sydney biotech advances oral insulin platform with US$3M expansion', outlet: 'Australian Financial Review', date: '14 Mar 2026', url: '#' },
      { headline: 'Proto Axiom forms Endo Axiom around USyd nanoparticle insulin IP', outlet: 'BioPharmaDispatch', date: '02 Aug 2023', url: '#' },
      { headline: 'Cogger lab nanoparticle research published in Nature Nanotechnology', outlet: 'University of Sydney News', date: '11 Jun 2023', url: '#' }
    ]
  },

  {
    slug: 'advancell',
    name: 'AdvanCell',
    logo: 'assets/portfolio-logos/advancell.svg',
    tagline: 'Clinical-stage radiopharmaceutical company developing targeted alpha therapies to improve cancer survival and quality of life.',
    sector: 'Therapeutics',
    modality: 'Radiopharmaceuticals · Targeted alpha therapy',
    origin: 'Sydney, Australia',
    yearFounded: 2018,
    stage: 'Phase 1/2 clinical',
    relationship: 'venture-stake',
    website: 'https://advancell.com.au',
    trialRegistry: 'https://anzctr.org.au',
    heroImage: 'assets/images/scientist-microscope.jpg',
    heroImageCaption: 'Image placeholder — supply company-approved imagery before publish.',
    narrative: [
      'AdvanCell is a clinical-stage Australian radiopharmaceutical company developing targeted alpha therapies for cancers with poor existing standards of care. Its lead programme uses lead-212 ( ²¹²Pb ) — a short-range, high-energy alpha emitter — bound to tumour-targeting molecules, delivering a precise dose of radiation to cancer cells while sparing surrounding tissue.',
      'Proto Axiom holds a venture-stage investment in AdvanCell alongside a syndicate of Australian and international biotech investors. Our role is partner capital and operating support; the company is independently led and operates its own clinical, manufacturing and regulatory programmes.',
      'AdvanCell is among Australia\'s most clinically advanced radiopharmaceutical companies, with active trials and pilot manufacturing capability domestically.'
    ],
    leadership: [
      { name: 'AdvanCell leadership', title: 'See company website for full team', institution: 'advancell.com.au', photo: null }
    ],
    programmeStatus: {
      now: 'Phase 1/2 clinical trials in solid tumour indications.',
      next: 'Trial readouts and pilot manufacturing scale-up. [ Readout dates per company disclosure ]',
      partners: ['Australian and international clinical sites', 'ANZCTR-registered programmes']
    },
    news: [
      { headline: 'AdvanCell expands clinical footprint with new manufacturing partnership', outlet: 'Endpoints News', date: '08 Feb 2026', url: '#' },
      { headline: 'Australian alpha-therapy developer raises growth round', outlet: 'BioCentury', date: '21 Oct 2025', url: '#' },
      { headline: 'Proto Axiom backs AdvanCell venture round', outlet: 'Proto Axiom press release', date: '03 Jun 2024', url: '#' }
    ]
  },

  // Remaining 6 — abbreviated entries, content placeholders flagged for editorial.
  {
    slug: 'onyx-axiom',
    name: 'Onyx Axiom',
    logo: 'assets/portfolio-logos/onyx-axiom.svg',
    tagline: 'Advanced drug-delivery technology revolutionising the standard of care in topical antifungal treatment.',
    sector: 'Therapeutics', modality: 'Topical antifungal',
    origin: 'Proto Axiom (in-house formation)',
    yearFounded: 2025, stage: 'Preclinical',
    relationship: 'founding-investor',
    website: '#', trialRegistry: null,
    heroImage: null, heroImageCaption: '[ Image to come ]',
    narrative: ['[ Narrative to come — 2-3 paragraphs covering the science and the formation story. ]'],
    leadership: [{ name: '[ Founders to be announced ]', title: '', institution: '', photo: null }],
    programmeStatus: { now: 'Preclinical formulation development.', next: '[ Next milestone TBC ]', partners: [] },
    news: []
  },
  {
    slug: 'swan-genomics',
    name: 'SWAN Genomics',
    logo: 'assets/portfolio-logos/swan-genomics.svg',
    tagline: 'Pushing the boundaries of DNA sequencing — making genomics data more accessible.',
    sector: 'Biotech', modality: 'DNA sequencing',
    origin: 'UNSW',
    yearFounded: 2023, stage: 'MVP development',
    relationship: 'founding-investor',
    website: '#', trialRegistry: null,
    heroImage: null, heroImageCaption: '[ Image to come ]',
    narrative: ['[ Narrative to come. ]'],
    leadership: [{ name: '[ Founders to be announced ]', title: '', institution: 'UNSW', photo: null }],
    programmeStatus: { now: 'Proof-of-concept sequencing milestone.', next: '[ Date TBC ]', partners: ['UNSW'] },
    news: []
  },
  {
    slug: 'jumpstart-fertility',
    name: 'JumpStart Fertility',
    logo: 'assets/portfolio-logos/jumpstart-fertility.svg',
    tagline: 'NAD+ fertility formulations addressing a growing clinical need, with GMP manufacturing in Sydney and Melbourne and clinical partnerships in Australia and Japan.',
    sector: 'Therapeutics', modality: 'NAD+ fertility',
    origin: 'United States / Australia',
    yearFounded: 2025, stage: 'Pilot facility build-out',
    relationship: 'founding-investor',
    website: '#', trialRegistry: null,
    heroImage: null, heroImageCaption: '[ Image to come ]',
    narrative: ['[ Narrative to come. ]'],
    leadership: [{ name: '[ Leadership to be announced ]', title: '', institution: '', photo: null }],
    programmeStatus: { now: 'GMP manufacturing build-out across Sydney and Melbourne.', next: '[ Clinical partnership milestones TBC ]', partners: ['Australian and Japanese clinical partners'] },
    news: []
  },
  {
    slug: 'flo-axiom',
    name: 'Flo Axiom',
    logo: 'assets/portfolio-logos/flo-axiom.png',
    tagline: 'Bioprocessing infrastructure supporting sovereign capability in domestic biomanufacturing.',
    sector: 'Bioprocessing', modality: 'Sovereign biomanufacturing',
    origin: 'Griffith University',
    yearFounded: 2026, stage: 'Pilot facility build-out',
    relationship: 'founding-investor',
    website: '#', trialRegistry: null,
    heroImage: null, heroImageCaption: '[ Image to come ]',
    narrative: ['[ Narrative to come. ]'],
    leadership: [{ name: '[ Founders to be announced ]', title: '', institution: 'Griffith University', photo: null }],
    programmeStatus: { now: 'Pilot facility design and partner engagement.', next: '[ Build-out milestones TBC ]', partners: ['Griffith University'] },
    news: []
  },
  {
    slug: 'herikin',
    name: 'Herikin',
    logo: 'assets/portfolio-logos/herikin.png',
    tagline: 'Desktop RNA printer enabling rapid, distributed production of RNA for research and therapeutic applications.',
    sector: 'Biotech', modality: 'Desktop RNA printer',
    origin: 'Australia',
    yearFounded: 2024, stage: 'MVP development',
    relationship: 'venture-stake',
    website: '#', trialRegistry: null,
    heroImage: null, heroImageCaption: '[ Image to come ]',
    narrative: ['[ Narrative to come. ]'],
    leadership: [{ name: '[ Per company website ]', title: '', institution: '', photo: null }],
    programmeStatus: { now: 'MVP hardware development.', next: '[ Beta deployment TBC ]', partners: [] },
    news: []
  },
  {
    slug: 'cellutech',
    name: 'Cellutech',
    logo: 'assets/portfolio-logos/cellutech.png',
    tagline: 'AI soil-microbe platform applying machine learning to agricultural biotech.',
    sector: 'AgBio', modality: 'AI soil-microbe platform',
    origin: 'Australia',
    yearFounded: 2024, stage: 'Pilot field trials',
    relationship: 'venture-stake',
    website: '#', trialRegistry: null,
    heroImage: null, heroImageCaption: '[ Image to come ]',
    narrative: ['[ Narrative to come. ]'],
    leadership: [{ name: '[ Per company website ]', title: '', institution: '', photo: null }],
    programmeStatus: { now: 'Field trial preparation.', next: '[ Proof-of-concept window TBC ]', partners: [] },
    news: []
  }
];
