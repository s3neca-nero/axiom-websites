/**
 * Proto Axiom site data — ported from _export/data.js (Claude Design output).
 * Single source of truth for hero copy, stats, build process, portfolio,
 * team groupings, and news. Edit here, not in the JSX prototype.
 */

export const hero = {
  eyebrow: 'Australian biotech company creation',
  title: 'We build biotech companies in Australia.',
  lead:
    'Proto Axiom co‑creates companies with researchers — from first capital and incorporation through preclinical milestones to clinical and commercial reality.',
};

export const stats = [
  { num: 'A$45M', lbl: 'Assets under management', sub: 'Permanent capital, milestone‑gated.' },
  { num: '8', lbl: 'Portfolio companies', sub: 'Seven formed with us as founding investor.' },
  { num: '3', lbl: 'In or approaching clinical trials', sub: 'Australian sites, sovereign capability.' },
  { num: '~30', lbl: 'Operating bench', sub: 'Science, clinical, finance and governance.' },
] as const;

export const buildSteps = [
  { n: '01', title: 'Find the signal', text: 'We work alongside Australian universities, research institutes and clinicians to identify translational assets with a clear path to patient impact.' },
  { n: '02', title: 'Shape the blueprint', text: 'Together with founders we set the development plan, IP position, regulatory pathway and operating model before any capital moves.' },
  { n: '03', title: 'Seed with capital and talent', text: 'Founding capital, company formation, and a tailored management team — supported by our shared clinical, finance and governance bench.' },
  { n: '04', title: 'De‑risk in the lab', text: 'Preclinical validation, GMP planning, regulatory submissions and trial readiness — inside our shared operating infrastructure.' },
  { n: '05', title: 'Scale with global partners', text: 'Strategic licensing, externally led financings and partnerships that take Australian science to global markets.' },
] as const;

export const process = [
  { n: 'G0', title: 'Identify & form', text: 'IP identification and licensing, company formation, initial management appointment and a defined development plan.' },
  { n: 'G1', title: 'Proof of concept', text: 'Preclinical validation, regulatory pathway definition, manufacturing planning and early commercial positioning.' },
  { n: 'G2', title: 'Clinical or technical readiness', text: 'GMP or prototype manufacturing, regulatory submissions, site preparation and trial readiness.' },
  { n: 'G3', title: 'Validated inflection', text: 'Clinical data, prototype validation, licensing discussions, strategic partnerships or externally led financing.' },
] as const;

export type PortfolioLeader = {
  name: string;
  title: string;
  institution: string;
  photo: string | null;
};

export type PortfolioNews = {
  headline: string;
  outlet: string;
  date: string;
  url: string;
};

export type PortfolioItem = {
  slug: string;
  name: string;
  logo: string;
  tagline: string;
  sector: string;
  modality: string;
  origin: string;
  yearFounded: number;
  stage: string;
  relationship: 'founding-investor' | 'venture-stake';
  website: string;
  trialRegistry: string | null;
  heroImage: string | null;
  heroImageCaption: string;
  narrative: string[];
  leadership: PortfolioLeader[];
  programmeStatus: {
    now: string;
    next: string;
    partners: string[];
  };
  news: PortfolioNews[];
};

export const portfolio: PortfolioItem[] = [
  {
    slug: 'endo-axiom',
    name: 'Endo Axiom',
    logo: '/images/portfolio/endo-axiom.svg',
    tagline: 'A first‑in‑class oral insulin platform using liver‑targeting nanotechnology, addressing a multi‑billion‑dollar diabetes market with no currently approved oral product.',
    sector: 'Therapeutics',
    modality: 'Oral insulin · Nanotechnology',
    origin: 'University of Sydney / ANZAC Research Institute',
    yearFounded: 2023,
    stage: 'Preclinical · IND‑enabling',
    relationship: 'founding-investor',
    website: 'https://endoaxiom.com',
    trialRegistry: null,
    heroImage: '/images/photography/cogger-hunt-endo-axiom.jpg',
    heroImageCaption: 'Endo Axiom co‑founders Prof Victoria Cogger and A/Prof Nicholas Hunt, ANZAC Research Institute, Concord NSW.',
    narrative: [
      "Endo Axiom is focused on the prevention of autoimmune diseases and improving the quality of life of diabetics. The lead programme — EA‑100 — is an oral insulin therapy delivered via liver‑targeting nanotechnology, addressing a multi‑billion‑dollar diabetes market with no currently approved oral product.",
      'The science was developed over more than a decade at the ANZAC Research Institute in Concord, NSW, by Professor Victoria Cogger, Professor David Le Couteur AO and Dr Nicholas Hunt. Proto Axiom partnered with the inventors in April 2023 to form the company, license the underlying IP from the University of Sydney, install management, and fund the preclinical programme.',
      'EA‑100 is on track for first‑in‑human Phase I clinical entry in 2026, approximately three years from company formation.',
    ],
    leadership: [
      { name: 'A/Prof. Nicholas Hunt', title: 'Chief Executive Officer & Co‑founder', institution: 'University of Sydney · Entrepreneur in Residence, Proto Axiom', photo: '/images/team/nicholas-hunt.png' },
      { name: 'Prof. Victoria Cogger', title: 'Scientific Advisor & Co‑founder', institution: 'University of Sydney · ANZAC Research Institute', photo: '/images/team/victoria-cogger.jpg' },
      { name: 'Prof. David Le Couteur AO', title: 'Clinical Advisor & Co‑founder', institution: 'University of Sydney · ANZAC Research Institute', photo: '/images/team/david-le-couteur.jpg' },
      { name: 'Samantha Guthrie', title: 'Vice President, Clinical Operations', institution: '', photo: null },
      { name: 'Lawrence Gozlan', title: 'Chair of the Board', institution: 'Proto Axiom Strategic Advisor', photo: '/images/team/lawrence-gozlan.webp' },
      { name: 'Anthony Liveris', title: 'Director', institution: 'Proto Axiom (founding investor)', photo: '/images/team/anthony-liveris.webp' },
    ],
    programmeStatus: {
      now: 'IND‑enabling preclinical studies for EA‑100. CMC scale‑up active.',
      next: 'EA‑100 oral insulin Phase I first‑in‑human readout, expected late 2026.',
      partners: ['University of Sydney · ANZAC Research Institute', 'Sydney Local Health District'],
    },
    news: [
      { headline: 'Sydney researchers spin out company to deliver insulin in a pill', outlet: 'The University of Sydney',  date: '05 Apr 2023', url: '#' },
      { headline: "Endo Axiom tackles one of diabetes' biggest challenges: needle‑free insulin", outlet: 'MTPConnect',     date: '14 Apr 2023', url: '#' },
      { headline: 'Australian startup Endo Axiom advances oral insulin platform', outlet: 'BioSpectrum Asia',              date: '05 Apr 2023', url: '#' },
    ],
  },
  {
    slug: 'advancell',
    name: 'AdvanCell',
    logo: '/images/portfolio/advancell.svg',
    tagline: "Clinical‑stage radiopharmaceutical company developing targeted alpha therapies using lead‑212 (²¹²Pb) for cancers with poor existing standards of care.",
    sector: 'Therapeutics',
    modality: 'Radiopharmaceuticals · Targeted alpha therapy',
    origin: 'Sydney, Australia',
    yearFounded: 2024,
    stage: 'Phase 2 expansion / commercial scale‑up',
    relationship: 'venture-stake',
    website: 'https://advancell.com.au',
    trialRegistry: 'https://anzctr.org.au',
    heroImage: '/images/portfolio-hero/advancell.jpg',
    heroImageCaption: 'AdvanCell Lead‑212 manufacturing and clinical operations, Australia.',
    narrative: [
      "AdvanCell is a clinical‑stage Australian radiopharmaceutical company developing targeted alpha therapies for cancers with poor existing standards of care. Its lead asset, ²¹²Pb‑ADVC001, uses lead‑212 — a short‑range, high‑energy alpha emitter — bound to PSMA‑targeting molecules, delivering a precise dose of radiation to prostate cancer cells while sparing surrounding tissue.",
      'The Phase 1b TheraPb readout at ESMO in October 2025 showed an 80% PSA50 response at doses ≥160 MBq, 100% objective response in RECIST‑measurable lesions, two complete responses, and no dose‑limiting toxicities. The Phase 2 expansion initiated in December 2025 is enrolling across mHSPC and mCRPC indications, with topline data planned for late 2026.',
      'Proto Axiom holds a venture‑stage investment in AdvanCell alongside Sanofi, Brandon Capital, Time Bio and others. The company is independently led by CEO Philina Lee from a Boston US HQ, with Australian operations led by Managing Director Andrew Adamovich.',
    ],
    leadership: [
      { name: 'Philina Lee', title: 'Chief Executive Officer', institution: 'Boston, US HQ', photo: '/images/team/philina-lee.jpg' },
      { name: 'Andrew Kay', title: 'Chair of the Board', institution: 'Appointed October 2025', photo: '/images/team/andrew-kay.jpg' },
      { name: 'Andrew Adamovich', title: 'Managing Director, Australia', institution: 'Sydney', photo: '/images/team/andrew-adamovich.webp' },
    ],
    programmeStatus: {
      now: 'Phase 2 ²¹²Pb‑ADVC001 expansion across mHSPC and mCRPC indications. Lead‑212 / Thorium‑228 manufacturing scale‑up at Brisbane facility.',
      next: 'Phase 2 topline data planned end of 2026. US manufacturing expansion under way.',
      partners: ['Eli Lilly (oncology collaboration, expanded Feb 2025)', 'Brandon Capital', 'Sanofi', 'ANZCTR clinical sites'],
    },
    news: [
      { headline: '²¹²Pb‑ADVC001 Phase 1b: 80% PSA50 response at ESMO', outlet: 'ESMO Congress 2025',    date: '20 Oct 2025', url: '#' },
      { headline: 'Eli Lilly expands strategic collaboration with AdvanCell', outlet: 'AdvanCell press release', date: '12 Feb 2025', url: '#' },
      { headline: 'AdvanCell closes Series C financing led by Sanofi', outlet: 'BioCentury',              date: '03 Jul 2025', url: '#' },
    ],
  },
  {
    slug: 'onyx-axiom',
    name: 'Onyx Axiom',
    logo: '/images/portfolio/onyx-axiom.svg',
    tagline: 'A next‑generation topical antifungal for onychomycosis — combining the safety of topical therapy with efficacy approaching oral drugs, via a novel lyotropic liquid crystal drug‑delivery system.',
    sector: 'Therapeutics',
    modality: 'Topical antifungal · Lyotropic liquid crystal drug delivery',
    origin: 'Melbourne',
    yearFounded: 2025,
    stage: 'Advanced Gate 2 · Phase IIb',
    relationship: 'founding-investor',
    website: '#',
    trialRegistry: null,
    heroImage: '/images/portfolio-hero/onyx-axiom.png',
    heroImageCaption: 'Onyx Axiom founders.',
    narrative: [
      'Onyx Axiom is developing a next‑generation topical treatment for onychomycosis (toenail fungus) using a novel lyotropic liquid crystal drug‑delivery system to enhance the efficacy of terbinafine while avoiding the systemic side effects of oral antifungals.',
      'Proto Axiom formed Onyx Axiom in 2025, licensing the underlying IP into Australia under an exclusive global licence.',
      'A Phase IIb clinical trial is currently under way.',
    ],
    leadership: [
      { name: 'Dr. Paul Gavin', title: 'Chief Executive Officer · Commercial Founder', institution: 'Melbourne', photo: '/images/team/paul-gavin.jpg' },
      { name: 'Lawrence Gozlan', title: 'Director · Commercial Founder', institution: 'Proto Axiom Strategic Advisor', photo: '/images/team/lawrence-gozlan.webp' },
      { name: 'Anthony Liveris', title: 'Director', institution: 'Proto Axiom (founding investor)', photo: '/images/team/anthony-liveris.webp' },
    ],
    programmeStatus: {
      now: 'Phase IIb clinical trial of topical terbinafine for onychomycosis.',
      next: 'Phase IIb data readout. [ Date per company disclosure ]',
      partners: [],
    },
    news: [],
  },
  {
    slug: 'swan-genomics',
    name: 'SWAN Genomics',
    logo: '/images/portfolio/swan-genomics.svg',
    tagline: 'A deep‑tech genomics company developing a next‑generation DNA sequencing platform based on plasmonic nanoantenna technology — true single‑molecule sequencing without the traditional trade‑offs between accuracy, read length, cost and speed.',
    sector: 'Biotech',
    modality: 'Plasmonic nanoantenna · DNA sequencing',
    origin: 'UNSW Sydney',
    yearFounded: 2023,
    stage: 'Mid Gate 2 · Series A in market',
    relationship: 'founding-investor',
    website: '#',
    trialRegistry: null,
    heroImage: '/images/portfolio-hero/swan-genomics.png',
    heroImageCaption: 'SWAN Genomics — plasmonic nanoantenna DNA sequencing platform.',
    narrative: [
      'SWAN Genomics is developing a next‑generation DNA sequencing platform based on plasmonic nanoantenna technology, enabling true single‑molecule sequencing without the traditional trade‑offs between accuracy, read length, cost and speed. The platform has applications across human health, biosecurity, agriculture, food systems, environmental monitoring and emerging industrial use cases.',
      'The company spun out of UNSW Sydney in September 2023. Scientific founders Dr Lawrence Lee and Dr Min Huang lead the technology; commercial co‑founders Brock Siegel and Dr Bill Hyun lead the commercial build. Proto Axiom seeded the company alongside other institutional and strategic investors.',
    ],
    leadership: [
      { name: 'Dr. Lawrence Lee', title: 'Chief Executive Officer · Co‑founder (Scientific)', institution: 'UNSW Sydney', photo: '/images/team/lawrence-lee.jpg' },
      { name: 'Dr. Min Huang', title: 'Co‑founder (Scientific)', institution: 'UNSW Sydney', photo: '/images/team/min-huang.jpg' },
      { name: 'Brock Siegel', title: 'Chair of the Board · Co‑founder (Commercial)', institution: 'SWAN Genomics', photo: '/images/team/brock-siegel.jpg' },
      { name: 'Dr. Bill Hyun', title: 'Co‑founder (Commercial)', institution: 'SWAN Genomics', photo: '/images/team/bill-hyun.jpg' },
      { name: 'Hugh McGonagle', title: 'Director (Proto Axiom)', institution: 'Chief Operating Officer, Proto Axiom', photo: '/images/team/hugh-mcgonagle.webp' },
    ],
    programmeStatus: {
      now: 'Proof of concept complete. Foundational short‑read demonstrated. Series A in market targeting A$20M+ with institutional and strategic investors.',
      next: 'Working prototype within 18 months, leading to a material Series B raise.',
      partners: ['UNSW Sydney', 'In‑Q‑Tel (US)', 'Salus VC', 'Ki Tua Fund', 'Investible', 'EGB Capital'],
    },
    news: [],
  },
  {
    slug: 'jumpstart-fertility',
    name: 'JumpStart Fertility',
    logo: '/images/portfolio/jumpstart-fertility.svg',
    tagline: 'A platform biotechnology company developing NAD+ technologies to modulate cellular energy, metabolism and ageing biology — with IVF laboratory media as the lead clinical and commercial application.',
    sector: 'Therapeutics',
    modality: 'NAD+ platform · IVF media',
    origin: 'UNSW · Re‑domiciled from United States',
    yearFounded: 2025,
    stage: 'Gate 2 / early Gate 3',
    relationship: 'founding-investor',
    website: '#',
    trialRegistry: null,
    heroImage: '/images/portfolio-hero/jumpstart-fertility.webp',
    heroImageCaption: 'JumpStart Fertility — NAD+ platform with IVF media as lead application.',
    narrative: [
      'JumpStart Fertility is a platform biotechnology company developing NAD+ (nicotinamide adenine dinucleotide) technologies to modulate cellular energy, metabolism and ageing biology. The lead clinical and commercial application is IVF laboratory media; consumer and animal health streams are also progressing.',
      'The company was founded by Dr Lindsay Wu (Chief Science Officer of Proto Axiom and Head of the Laboratory for Ageing Research at UNSW Sydney). Proto Axiom re‑domiciled JumpStart Fertility to Australia from the United States — all IP and employees now sit within the Australian entity. CEO Dr Stephanie Allen joined to lead commercial strategy, partnerships and capital‑raising.',
    ],
    leadership: [
      { name: 'Dr. Stephanie Allen', title: 'Chief Executive Officer', institution: 'Joined July 2025', photo: '/images/team/stephanie-allen.jpg' },
      { name: 'Dr. Annalisa Jenkins OBE, MBBS, FRCP', title: 'Chair of the Board', institution: 'Non‑Executive Director, Proto Axiom', photo: '/images/team/annalisa-jenkins.webp' },
      { name: 'Dr. Lindsay Wu', title: 'Co‑founder & Chief Science Officer', institution: 'UNSW Sydney · CSO Proto Axiom', photo: '/images/team/lindsay-wu.webp' },
      { name: 'Prof. Hayden Homer', title: 'Co‑founder', institution: 'University of Queensland', photo: '/images/team/hayden-homer.png' },
      { name: 'Shaun Deery', title: 'Chief Commercial Officer', institution: '', photo: '/images/team/shaun-deery.jpg' },
    ],
    programmeStatus: {
      now: 'GMP manufacturing complete. Inbound licensing interest confirmed. Clinic‑based sibling embryo trials in preparation.',
      next: 'Sibling embryo trial readouts and FDA 510(k) regulatory progress. Commercial rollout with large IVF clinic networks.',
      partners: ['Genea Biomedx (Sydney) — GMP manufacturing', 'Case Bioscience (Melbourne) — formulation', 'VU Venture Partners', 'UNSW'],
    },
    news: [],
  },
  {
    slug: 'flo-axiom',
    name: 'Flo Axiom',
    logo: '/images/portfolio/flo-axiom.png',
    tagline: 'A bioprocessing technology company developing novel downstream purification materials and workflows that improve the efficiency, cost and scalability of biologics manufacturing.',
    sector: 'Bioprocessing',
    modality: 'Downstream purification · Biologics manufacturing',
    origin: 'Griffith University',
    yearFounded: 2026,
    stage: 'Gate 1 · Benchmarking & validation',
    relationship: 'founding-investor',
    website: '#',
    trialRegistry: null,
    heroImage: '/images/portfolio-hero/flo-axiom.jpg',
    heroImageCaption: 'Flo Axiom — downstream purification for biologics manufacturing.',
    narrative: [
      'Flo Axiom (formerly BioProSep) is a bioprocessing technology company developing novel downstream purification materials and workflows to improve the efficiency, cost and scalability of biologics manufacturing. The platform is designed to integrate into existing pharmaceutical manufacturing processes, with applications across biologics and advanced therapies.',
      'The thesis is a capital‑efficient enabling platform addressing a critical bottleneck in biologics manufacturing — with potential to generate earlier revenue through research‑use and process‑development applications, while supporting Australian sovereign capability and reducing reliance on offshore purification technologies.',
    ],
    leadership: [
      { name: 'Anthony Haddad', title: 'Chief Executive Officer', institution: 'Operating Partner, Proto Axiom', photo: '/images/team/tony-haddad.jpeg' },
      { name: 'Dr. Stefanie Buchholz', title: 'Co‑founder & Chief Scientific Officer', institution: 'Griffith University', photo: '/images/team/stefanie-buchholz.jpg' },
      { name: 'Dr. Bernd Rehm', title: 'Co‑founder', institution: 'Griffith University', photo: '/images/team/bernd-rehm.jpg' },
      { name: 'Hugh McGonagle', title: 'Director & Public Officer', institution: 'Chief Operating Officer, Proto Axiom', photo: '/images/team/hugh-mcgonagle.webp' },
    ],
    programmeStatus: {
      now: 'Benchmarking and validation work with external partners. Manufacturing scalability being de‑risked.',
      next: '[ Date per company disclosure ]',
      partners: ['Griffith University'],
    },
    news: [],
  },
  {
    slug: 'herikin',
    name: 'Herikin',
    logo: '/images/portfolio/herikin.png',
    tagline: 'A desktop RNA printer enabling rapid, distributed production of RNA for research and rare‑disease therapeutic applications.',
    sector: 'Biotech',
    modality: 'RNA printing · Rare disease therapeutics',
    origin: 'Monash University',
    yearFounded: 2024,
    stage: 'MVP development',
    relationship: 'venture-stake',
    website: '#',
    trialRegistry: null,
    heroImage: '/images/portfolio-hero/herikin.jpg',
    heroImageCaption: 'Herikin — desktop RNA printer.',
    narrative: [
      'Herikin is developing a desktop RNA printer designed to enable rapid, distributed production of RNA for research and therapeutic applications, with a particular focus on underserved rare‑disease populations. The technology aims to compress the cycle time and cost of small‑batch RNA manufacturing for indications where centralised production is uneconomic.',
      'The company was founded by Harry Al‑Wassiti, PhD, with the underlying technology originating at Monash University. Proto Axiom holds a venture‑stage investment via the Bio 10x SAFE programme, signed in August 2024, alongside the founding team and other Bio 10x cohort investors.',
      'The current focus is MVP hardware development; the company is independently led — refer to the Herikin team for the latest programme detail.',
    ],
    leadership: [
      { name: 'Harry Al‑Wassiti, PhD', title: 'Founder', institution: 'Monash University · Bio 10x cohort', photo: '/images/team/harry-al-wassiti.jpg' },
    ],
    programmeStatus: {
      now: 'MVP hardware development.',
      next: 'Beta deployment with research partners. [ Date TBC ]',
      partners: ['Monash University', 'Bio 10x'],
    },
    news: [],
  },
  {
    slug: 'cellutech',
    name: 'Cellutech',
    logo: '/images/portfolio/cellutech.png',
    tagline: 'A novel biomanufacturing platform — initially focused on human‑health compounds, now leading with an AI soil‑microbe product to reduce reliance on imported fertilisers.',
    sector: 'AgBio',
    modality: 'AI soil‑microbe platform',
    origin: 'UNSW Sydney · B10x cohort',
    yearFounded: 2024,
    stage: 'Pilot field trials',
    relationship: 'venture-stake',
    website: 'https://www.cellutech.com.au',
    trialRegistry: null,
    heroImage: '/images/portfolio-hero/cellutech.webp',
    heroImageCaption: 'Cellutech — pilot field trials.',
    narrative: [
      "Cellutech operates a novel biomanufacturing platform initially focused on producing high‑value bioactive compounds for human health. The company has since pivoted to lead with an AI soil‑microbe product, chosen for quicker market entry — with the potential to reduce Australia's reliance on imported fertilisers.",
      'Field trials are under way. The platform retains broader optionality across human health, agriculture and nutraceutical applications, supported by onshore pilot‑scale biomanufacturing in Australia.',
      'The company emerged from the UNSW Founders B10x accelerator programme and is led by Founder & CEO Joakim Wisting alongside a six‑person founding team. Proto Axiom holds a venture‑stage investment via the Bio 10x SAFE programme, signed in August 2024.',
    ],
    leadership: [
      { name: 'Joakim Wisting', title: 'Founder & Chief Executive Officer', institution: 'UNSW · B10x', photo: '/images/team/joakim-wisting.jpg' },
      { name: 'Christopher Wakefield', title: 'Founder & Chief Financial Officer', institution: 'UNSW · B10x', photo: null },
      { name: 'Marina Alonso', title: 'Founder & Chief Scientific Officer', institution: 'UNSW · B10x', photo: null },
      { name: 'Gustavo De Cerqueira', title: 'Founder & Scientific Adviser', institution: 'UNSW · B10x', photo: null },
      { name: 'Nathan Taylor', title: 'Founder & Business Development Manager', institution: 'UNSW · B10x', photo: null },
      { name: 'Andrew Heath', title: 'Chief Commercial Officer', institution: '', photo: null },
    ],
    programmeStatus: {
      now: 'AI soil‑microbe pilot field trials under way. Onshore pilot‑scale biomanufacturing.',
      next: 'Field trial readouts and commercial partnerships in agricultural inputs. [ Date per company disclosure ]',
      partners: ['UNSW Founders B10x', 'Australian agricultural partners (pilot field trials)'],
    },
    news: [],
  },
];
// Team data moved to src/content/team/*.md (Astro content collection).
// The team page renders directly from getCollection('team') in pages/team.astro.

export type NewsItem = { date: string; source: string; kind: string; title: string; href?: string };

export const news: NewsItem[] = [
  { date: '17 Apr 2026', source: 'Proto Axiom', kind: 'Announcement', title: 'Proto Axiom opens A$30M Series B Extension at A$100M pre‑money.' },
  { date: '04 Mar 2026', source: 'AFR', kind: 'Feature', title: 'Billionaire Salesforce boss tips into Sydney biotech incubator.' },
  { date: '12 Feb 2026', source: 'Proto Axiom', kind: 'Portfolio', title: 'AdvanCell advances targeted alpha therapy programme into Phase 1/2 expansion.' },
  { date: '28 Nov 2025', source: 'AusBiotech', kind: 'Interview', title: 'Backing biotechs with US‑style entrepreneurialism — a conversation with Anthony Liveris.' },
  { date: '03 Oct 2025', source: 'Proto Axiom', kind: 'Programme', title: 'Challenger Pitch for Health 2026 announces A$500K in grant prizes.' },
  { date: '14 Aug 2025', source: 'Proto Axiom', kind: 'Portfolio', title: 'Onyx Axiom advances topical antifungal toward Phase 2b.' },
  { date: '02 Jun 2025', source: 'Proto Axiom', kind: 'Announcement', title: 'Proto Axiom banks A$20M towards A$30M Series B.' },
];
