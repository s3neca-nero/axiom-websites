/* Challenger Summit page sections — desktop sections + mobile mockups
   ─────────────────────────────────────────────────────────────────── */

/* ─────────────────────────────  data  ───────────────────────────── */

const TIMELINE = [
  {
    when: "Q3 2026",
    what: "Applications open",
    sub: "Online application form goes live",
    state: "upcoming",
  },
  {
    when: "Q4 2026",
    what: "Applications close",
    sub: "Submission window ends",
    state: "upcoming",
  },
  {
    when: "Late 2026",
    what: "Shortlist announced",
    sub: "Up to 12 finalists selected",
    state: "upcoming",
  },
  {
    when: "Early 2027",
    what: "Pitch coaching",
    sub: "Finalists pair with operators",
    state: "upcoming",
    pill: "FINALIST WEEK",
  },
  {
    when: "Q1 2027",
    what: "Pitch day",
    sub: "Cell Block Theatre, Sydney",
    state: "upcoming",
    pill: "EVENT",
  },
  {
    when: "Same day",
    what: "Winners announced",
    sub: "A$500K awarded across both streams",
    state: "upcoming",
  },
];

const ELIG_YES = [
  "Researchers at Australian universities, research institutes or hospitals",
  "Founders of Australian-incorporated life-sciences companies (pre-seed to Series A)",
  "Clinical leads or principal investigators with translational programs",
  "Teams with a clear path from research to a clinical or commercial inflection",
  "Cross-institutional collaborations (lead applicant must be Australian)",
  "Programs in therapeutics, diagnostics, devices, biotech tools, bioprocessing",
];

const ELIG_NO = [
  "Pure software / digital health without a wet-lab or clinical component",
  "Programs with material conflicts to existing Proto Axiom portfolio companies",
  "Companies that have raised more than A$10M in priced equity",
  "Researchers based outside Australia (NZ collaborators welcome as co-applicants)",
  "Service businesses, contract research, or consulting practices",
  "Concepts without identifiable IP or a credible plan to secure it",
];

const WINNERS_2026 = [
  { name: "[Winner — Proto stream]", desc: "[One-line summary of the winning program — to be added.]", source: "[Institution]", stream: "Proto Axiom · A$250K" },
  { name: "[Winner — St Vincent's stream]", desc: "[One-line summary of the winning program — to be added.]", source: "[Institution]", stream: "St Vincent's · A$250K" },
  { name: "[Runner-up / honourable mention]", desc: "[Optional second placement to feature here.]", source: "[Institution]", stream: "2026 finalist" },
];

const FAQS = [
  {
    q: "Who can apply for the Challenger Summit grant?",
    a: "Researchers and founders from Australian universities, medical research institutes and the public health system are eligible to apply for the Proto Axiom Challenger Summit stream (A$250K). The St Vincent's Discovery & Innovation stream (A$250K) is open to teams from St Vincent's Hospital Sydney, the Garvan Institute and the Victor Chang Cardiac Research Institute. New Zealand-based collaborators are welcome as co-applicants on Australian-led programs.",
  },
  {
    q: "Is this an investment round, or a grant?",
    a: "The A$500K prize pool is awarded as non-dilutive grants — there is no equity exchanged at the time of the award. Winners may separately enter a commercial conversation with Proto Axiom about company formation and capital, but participation in Challenger Summit does not bind you to anything.",
  },
  {
    q: "Who owns the IP?",
    a: "You do. Challenger Summit does not take any rights over your science or your technology. We ask only for permission to share approved program summaries with the judging panel and our partner institutions.",
  },
  {
    q: "What stage of program is the panel looking for?",
    a: "Anything from late-stage research with a translational hypothesis through to early-clinical programs that need capital to reach the next gate. We are looking for credible science, an identifiable inflection point, and a team capable of executing on it. Pre-seed and seed-stage company formation candidates are equally welcome.",
  },
  {
    q: "What does the application involve?",
    a: "An online form with a short program description, the team, a budget, and a one-page commercial framing. Shortlisted finalists are invited to pitch live at Cell Block Theatre, Sydney, in front of a panel of investors, clinicians and industry leaders. Pitch coaching is provided in the lead-up to the event.",
  },
  {
    q: "What do winners get beyond the cash?",
    a: "Beyond the grant, winners are invited into Proto Axiom's operating bench — clinical, regulatory, IP, finance and governance support — and a structured pathway to first capital where appropriate. The Scientific Advisory Network and intros to our 33 private investors are extended to all finalists, not just winners.",
  },
  {
    q: "When and where is the next event?",
    a: "The next Challenger Summit pitch day will be held in Q1 2027 at Cell Block Theatre, Sydney. Application open dates and the shortlist announcement will be published here and shared with the Proto Axiom Connect community before they go public.",
  },
  {
    q: "How do I stay in the loop?",
    a: "Join Proto Axiom Connect to be notified the moment applications open, get program updates and early invites to finalist briefings.",
  },
];

/* ─────────────────────────────  primitives  ───────────────────────────── */

const Eyebrow = ({ children, modifier = "" }) => (
  <p className={`cs-eyebrow ${modifier}`}>{children}</p>
);

const Arrow = () => <span className="arrow">→</span>;

/* ─────────────────────────────  hero  ───────────────────────────── */

function Hero({ status, photo }) {
  const STATUS = {
    "coming-soon": {
      stamp: ["pulse", "Applications open Q3 2026", "Register interest now"],
      ctaPrimary: "Join Proto Axiom Connect",
      ctaSecondary: "Read the 2026 wrap",
    },
    "open": {
      stamp: ["pulse", "Applications open", "Closing late 2026"],
      ctaPrimary: "Apply now",
      ctaSecondary: "Download brief (PDF)",
    },
    "closed": {
      stamp: [null, "2026 cycle complete", "2027 dates announcing soon"],
      ctaPrimary: "Get notified",
      ctaSecondary: "View 2026 highlights",
    },
  };
  const s = STATUS[status] || STATUS["coming-soon"];

  return (
    <section className="cs-hero">
      <div className="cs-wrap">
        <div className="cs-hero__inner">
          <div className="cs-hero__left">
            <span className="cs-hero__stamp">
              {s.stamp[0] === "pulse" && <span className="pulse"></span>}
              <span>{s.stamp[1]}</span>
              <span className="dot"></span>
              <span>{s.stamp[2]}</span>
            </span>
            <h1 className="cs-hero__title">
              Pitch your science.<br/>
              <em>Build the company.</em>
            </h1>
            <p className="cs-hero__lead">
              Challenger Summit is Australia's largest pitch day in life sciences.
              Every year, researchers, founders and clinical leads pitch for capital,
              mentorship and a path to patient impact — co-hosted by Proto Axiom and
              St Vincent's Curran Foundation.
            </p>
            <div className="cs-hero__cta">
              <a className="cs-btn cs-btn--lg" href="#apply">{s.ctaPrimary} <Arrow/></a>
              <a className="cs-btn cs-btn--ghost cs-btn--lg" href="#why">{s.ctaSecondary}</a>
            </div>
            <dl className="cs-hero__facts">
              <div className="cs-hero__fact">
                <span className="cs-hero__fact-lbl">Prize pool</span>
                <span className="cs-hero__fact-val">A$500,000</span>
                <span className="cs-hero__fact-sub">Non-dilutive · two streams</span>
              </div>
              <div className="cs-hero__fact">
                <span className="cs-hero__fact-lbl">Next event</span>
                <span className="cs-hero__fact-val">Q1 2027</span>
                <span className="cs-hero__fact-sub">Cell Block Theatre, Sydney</span>
              </div>
              <div className="cs-hero__fact">
                <span className="cs-hero__fact-lbl">Audience</span>
                <span className="cs-hero__fact-val">250+ investors</span>
                <span className="cs-hero__fact-sub">Clinicians, operators, capital</span>
              </div>
            </dl>
          </div>

          <div className="cs-hero__right">
            <img className="cs-hero__photo" src={photo} alt="Challenger Summit on stage" />
            <div className="cs-hero__photo-overlay"></div>
            <div className="cs-hero__corner">
              <span>Cell Block Theatre · Sydney</span>
            </div>
            <div className="cs-hero__poster">
              <div className="cs-hero__poster-row">
                <span>Edition · 2027</span>
                <span>Co-hosted with St Vincent's Curran Foundation</span>
              </div>
              <div className="cs-hero__poster-prize">
                <span>A$500K</span>
                <small>in grant prizes</small>
              </div>
              <div className="cs-hero__poster-meta">
                <div>
                  <span>Date</span>
                  <strong>Q1 2027</strong>
                </div>
                <div>
                  <span>Venue</span>
                  <strong>Cell Block Theatre, Sydney</strong>
                </div>
                <div>
                  <span>Status</span>
                  <strong>{status === "open" ? "Apply now" : status === "closed" ? "2026 closed" : "Coming soon"}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs-hero__strap">
          <span className="cs-hero__strap-lbl">Open to</span>
          <div className="cs-hero__strap-list">
            <span>Australian universities</span>
            <span>Medical research institutes</span>
            <span>Public health system</span>
            <span>Translational founders</span>
            <span>Pre-seed and seed-stage companies</span>
          </div>
          <a className="cs-hero__strap-link" href="#elig">Eligibility detail →</a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  Why pitch  ───────────────────────────── */

const BENEFITS = [
  { n: "01", h: "Non-dilutive capital", t: "A$250K to A$500K, depending on stream — awarded as a grant. No equity, no covenants attached to the prize itself." },
  { n: "02", h: "Operating bench, on call", t: "Winners gain working access to Proto Axiom's clinical, regulatory, IP, finance and governance team — the same team supporting the portfolio." },
  { n: "03", h: "Capital pathway", t: "Where the science fits, finalists enter a structured conversation with Proto Axiom about company formation and first round." },
  { n: "04", h: "Scientific advisory", t: "Intros to Proto Axiom's investor and clinical network — TIME Ventures, Catalio Capital, Reliance Life Sciences and a 33-strong private investor base." },
];

function WhyPitch() {
  return (
    <section className="cs-section cs-section--white" id="why">
      <div className="cs-wrap">
        <header className="cs-why__head">
          <div>
            <Eyebrow>Why pitch</Eyebrow>
            <h2 className="cs-h2" style={{ marginTop: 16 }}>The biggest pitch day<br/>in Australian life sciences.</h2>
          </div>
          <p className="cs-lead cs-why__lead">
            Challenger Summit was built by Proto Axiom — Australia's biotech
            company-creation platform — to surface translational science before it
            ever reaches the conventional capital stack. The prize is the on-ramp.
            What happens after is the point.
          </p>
        </header>

        <div className="cs-why__grid">
          <article className="cs-why__lede-card">
            <div>
              <span className="cs-why__lede-card-eye">Powered by Proto Axiom</span>
              <h3>
                We back the
                researchers most
                of the country
                hasn't found yet.
              </h3>
              <p>
                Proto Axiom has formed eight biotechs since 2022 — three in or
                approaching Australian clinical trials — sourced from the same
                institutions that send researchers to Challenger Summit each year.
              </p>
            </div>
            <dl className="cs-why__lede-card-meta">
              <div>
                <dt>Companies built</dt>
                <dd>8 since 2022</dd>
              </div>
              <div>
                <dt>Capital raised</dt>
                <dd>A$45M+ AUM</dd>
              </div>
              <div>
                <dt>Sourced from</dt>
                <dd>USyd, UNSW,<br/>Monash, Griffith</dd>
              </div>
              <div>
                <dt>Approaching clinical</dt>
                <dd>3 portfolio<br/>programs</dd>
              </div>
            </dl>
          </article>

          <div className="cs-why__benefits">
            {BENEFITS.map((b) => (
              <div key={b.n} className="cs-why__benefit">
                <span className="cs-why__benefit-num">{b.n}</span>
                <div>
                  <h4>{b.h}</h4>
                  <p>{b.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  Streams  ───────────────────────────── */

function Streams() {
  return (
    <section className="cs-section cs-section--bone" id="streams">
      <div className="cs-wrap">
        <header className="cs-streams__head">
          <div>
            <Eyebrow>Two streams · one stage</Eyebrow>
            <h2 className="cs-h2" style={{ marginTop: 16 }}>Two A$250K streams,<br/>one national showcase.</h2>
          </div>
          <p className="cs-lead">
            By combining the Proto Axiom Challenger Summit stream and the St Vincent's
            Discovery &amp; Innovation 'Pitch for Health' grants into a single national
            showcase, we amplify visibility, foster collaboration, and streamline pathways
            to capital and commercialisation.
          </p>
        </header>

        <div className="cs-streams__totals">
          <span className="cs-streams__totals-amount">A$500,000</span>
          <span className="cs-streams__totals-lbl">
            Awarded across the two streams in 2026 — second edition for 2027 confirmed
            with the same prize pool.
          </span>
        </div>

        <div className="cs-streams__grid">
          <article className="cs-stream cs-stream--primary">
            <div className="cs-stream__top">
              <span className="cs-stream__by">Proto Axiom Challenger Summit</span>
              <span className="cs-stream__amount">A$250,000</span>
            </div>
            <h3 className="cs-stream__title">
              Open to all Australian researchers and founders.
              <small>Translational science → company formation pathway.</small>
            </h3>
            <p className="cs-stream__desc">
              Our flagship stream. Open to researchers and founders from any Australian
              university, medical research institute or hospital — and to pre-seed /
              seed-stage Australian-incorporated companies. Ideal for translational
              programs ready for de-risking capital and a credible commercial framing.
            </p>
            <div className="cs-stream__divider"></div>
            <dl className="cs-stream__rows">
              <div className="cs-stream__row"><dt>Open to</dt><dd>All Australian universities, institutes, hospitals; pre-seed/seed startups</dd></div>
              <div className="cs-stream__row"><dt>Focus</dt><dd>Therapeutics, diagnostics, devices, biotech tools, bioprocessing</dd></div>
              <div className="cs-stream__row"><dt>Stage</dt><dd>Late research → first clinical inflection</dd></div>
              <div className="cs-stream__row"><dt>Judged by</dt><dd>Proto Axiom investment team + independent clinical / industry panel</dd></div>
              <div className="cs-stream__row"><dt>Bonus</dt><dd>Direct conversation with Proto Axiom about company formation</dd></div>
            </dl>
            <div className="cs-stream__foot">
              <a className="cs-stream__link" href="#apply">Apply for the Proto stream <Arrow/></a>
            </div>
          </article>

          <article className="cs-stream cs-stream--partner">
            <div className="cs-stream__top">
              <span className="cs-stream__by">St Vincent's Discovery &amp; Innovation</span>
              <span className="cs-stream__amount">A$250,000</span>
            </div>
            <h3 className="cs-stream__title">
              St Vincent's 'Pitch for Health' grants.
              <small>Programs out of St Vincent's, Garvan, and Victor Chang.</small>
            </h3>
            <p className="cs-stream__desc">
              Run in partnership with St Vincent's Curran Foundation. Open to teams from
              St Vincent's Hospital Sydney, the Garvan Institute of Medical Research, and
              the Victor Chang Cardiac Research Institute — programs aligned with the
              Foundation's discovery and innovation priorities.
            </p>
            <div className="cs-stream__divider"></div>
            <dl className="cs-stream__rows">
              <div className="cs-stream__row"><dt>Open to</dt><dd>St Vincent's Hospital Sydney, Garvan Institute, Victor Chang Cardiac</dd></div>
              <div className="cs-stream__row"><dt>Focus</dt><dd>Aligned with St Vincent's Discovery &amp; Innovation priorities</dd></div>
              <div className="cs-stream__row"><dt>Stage</dt><dd>Clinical translation, discovery science with patient impact</dd></div>
              <div className="cs-stream__row"><dt>Judged by</dt><dd>St Vincent's Curran Foundation panel</dd></div>
              <div className="cs-stream__row"><dt>Partner site</dt><dd>supportstvincents.com.au</dd></div>
            </dl>
            <div className="cs-stream__foot">
              <a className="cs-stream__link" href="https://www.supportstvincents.com.au/discovery-innovation/" target="_blank" rel="noopener">St Vincent's stream details <Arrow/></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  Timeline  ───────────────────────────── */

function Timeline() {
  return (
    <section className="cs-section cs-section--white" id="timeline">
      <div className="cs-wrap">
        <header className="cs-timeline__head">
          <div>
            <Eyebrow>The path to pitch day</Eyebrow>
            <h2 className="cs-h2" style={{ marginTop: 16 }}>From application<br/>to pitch day.</h2>
          </div>
          <p className="cs-lead">
            The 2027 cycle opens for applications later this year. Exact dates will land
            in the Proto Axiom Connect newsletter first — the timeline below reflects the
            shape of the program. Mark your calendar.
          </p>
        </header>
        <ol className="cs-timeline">
          {TIMELINE.map((s, i) => (
            <li key={i} className={`cs-timeline__step ${i === 0 ? 'cs-timeline__step--active' : ''}`}>
              <div className="cs-timeline__dot"></div>
              <div className="cs-timeline__when">{s.when}</div>
              <div className="cs-timeline__what">{s.what}</div>
              <div className="cs-timeline__sub">{s.sub}</div>
              {s.pill && <span className="cs-timeline__pill">{s.pill}</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────────  Eligibility  ───────────────────────────── */

function Eligibility() {
  return (
    <section className="cs-section cs-section--bone" id="elig">
      <div className="cs-wrap">
        <div className="cs-elig__grid">
          <div className="cs-elig__left">
            <Eyebrow>Eligibility &amp; criteria</Eyebrow>
            <h2 className="cs-h2" style={{ marginTop: 16 }}>Should you<br/>apply?</h2>
            <p className="cs-lead" style={{ marginTop: 24 }}>
              We make the answer easy. The Proto Axiom Challenger Summit stream is broad
              by design — we'd rather see one ambitious application than miss it because
              you weren't sure. The St Vincent's stream has institution-specific
              eligibility outlined on the partner site.
            </p>
            <div style={{ marginTop: 24, fontSize: 14, color: "var(--fg-2)", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--fg-1)" }}>Australian English:</strong> we mean
              "organisation" and "commercialise" — and yes, NZ-based collaborators are very welcome
              as co-applicants on Australian-led programs.
            </div>
          </div>
          <div className="cs-elig__cols">
            <div className="cs-elig__col cs-elig__col--yes">
              <h3><span className="badge">✓</span> Apply if you are…</h3>
              <ul className="cs-elig__list">
                {ELIG_YES.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
            </div>
            <div className="cs-elig__col cs-elig__col--no">
              <h3><span className="badge">×</span> Probably not a fit…</h3>
              <ul className="cs-elig__list">
                {ELIG_NO.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  Past winners  ───────────────────────────── */

function Winners() {
  return (
    <section className="cs-section cs-section--white" id="winners">
      <div className="cs-wrap">
        <header className="cs-winners__head">
          <div>
            <Eyebrow>2026 cohort</Eyebrow>
            <h2 className="cs-h2" style={{ marginTop: 16 }}>Last year's winners.</h2>
          </div>
          <p className="cs-lead">
            The first edition of Challenger Summit was held at Cell Block Theatre, Sydney
            in March 2026. Three programs were recognised across the two streams. Detail
            below to be filled in by the Proto Axiom team — placeholders shown.
          </p>
        </header>
        <div className="cs-winners__grid">
          {WINNERS_2026.map((w, i) => (
            <article key={i} className="cs-winner">
              <div className="cs-winner__year">
                <span>2026 winner</span>
                <span className="stream">{w.stream}</span>
              </div>
              <div className="cs-winner__logo">
                <span>
                  <span className="placeholder-mark">LOGO</span>
                  Logo to come
                </span>
              </div>
              <h3 className="cs-winner__name">{w.name}</h3>
              <p className="cs-winner__desc">{w.desc}</p>
              <div className="cs-winner__source">{w.source}</div>
            </article>
          ))}
        </div>
        <p className="cs-winners__note">
          Placeholders in this section. Provide winner detail (logo, program lead, one-line
          summary, source institution) and I'll plug them in.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  Sponsors  ───────────────────────────── */

function Sponsors() {
  return (
    <section className="cs-section cs-section--tight cs-section--bone" id="sponsors">
      <div className="cs-wrap">
        <div className="cs-sponsors__inner">
          <div>
            <Eyebrow>Co-hosts &amp; partners</Eyebrow>
            <h3 className="cs-h3" style={{ marginTop: 16 }}>Co-hosted by Proto Axiom &amp; St&nbsp;Vincent's Curran Foundation.</h3>
            <p className="cs-body" style={{ marginTop: 12, maxWidth: 360 }}>
              Supporting partners listed alongside. Add or remove tiles to match the 2027
              partner roster.
            </p>
          </div>
          <div className="cs-sponsors__list">
            <div className="cs-sponsor cs-sponsor--filled">
              <span className="cs-sponsor__type">Co-host</span>
              <div>
                Proto Axiom
                <small>Australian biotech company creation</small>
              </div>
            </div>
            <div className="cs-sponsor cs-sponsor--filled">
              <span className="cs-sponsor__type">Co-host</span>
              <div>
                St Vincent's Curran Foundation
                <small>Discovery &amp; Innovation grants</small>
              </div>
            </div>
            <div className="cs-sponsor cs-sponsor--placeholder">
              <span className="cs-sponsor__type">Venue partner</span>
              <span>Logo placeholder</span>
            </div>
            <div className="cs-sponsor cs-sponsor--placeholder">
              <span className="cs-sponsor__type">Supporting partner</span>
              <span>Logo placeholder</span>
            </div>
            <div className="cs-sponsor cs-sponsor--placeholder">
              <span className="cs-sponsor__type">Supporting partner</span>
              <span>Logo placeholder</span>
            </div>
            <div className="cs-sponsor cs-sponsor--placeholder">
              <span className="cs-sponsor__type">Media partner</span>
              <span>Logo placeholder</span>
            </div>
            <div className="cs-sponsor cs-sponsor--placeholder">
              <span className="cs-sponsor__type">Institution</span>
              <span>Logo placeholder</span>
            </div>
            <div className="cs-sponsor cs-sponsor--placeholder">
              <span className="cs-sponsor__type">Institution</span>
              <span>Logo placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  Apply CTA  ───────────────────────────── */

function ApplyCTA({ status }) {
  return (
    <section className="cs-apply" id="apply">
      <div className="cs-wrap">
        <div className="cs-apply__inner">
          <div>
            <Eyebrow modifier="cs-eyebrow--light">Take the next step</Eyebrow>
            <h2 style={{ marginTop: 16 }}>
              Applications open soon.
              <br/>
              <span className="cs-grad">Don't miss the window.</span>
            </h2>
            <p>
              Join Proto Axiom Connect to be the first to know when the 2027 application
              form opens — plus program updates, finalist briefings and event invites
              before they go public. No spam, never shared.
            </p>
            <div className="cs-apply__buttons">
              <a className="cs-btn cs-btn--lg cs-btn--primary-bright" href="https://protoaxiom.com/applications/membership">
                Join Proto Axiom Connect <Arrow/>
              </a>
              <a className="cs-btn cs-btn--lg cs-btn--ghost-light" href="mailto:challenger@protoaxiom.com">
                Email the team
              </a>
            </div>
          </div>
          <dl className="cs-apply__meta">
            <div className="cs-apply__meta-row">
              <dt>Next event</dt>
              <dd>Q1 2027<small>Cell Block Theatre, Sydney</small></dd>
            </div>
            <div className="cs-apply__meta-row">
              <dt>Prize pool</dt>
              <dd>A$500,000<small>A$250K Proto · A$250K St Vincent's</small></dd>
            </div>
            <div className="cs-apply__meta-row">
              <dt>Eligibility</dt>
              <dd>Australian researchers &amp; founders<small>NZ collaborators welcome</small></dd>
            </div>
            <div className="cs-apply__meta-row">
              <dt>Questions</dt>
              <dd>challenger@protoaxiom.com<small>We reply within two business days</small></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  FAQ  ───────────────────────────── */

function FAQ() {
  return (
    <section className="cs-section cs-section--white" id="faq">
      <div className="cs-wrap">
        <div className="cs-faq__inner">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="cs-h2" style={{ marginTop: 16 }}>Common<br/>questions.</h2>
            <p className="cs-body" style={{ marginTop: 16 }}>
              Eight starters below. Anything else, the team is one email away.
            </p>
            <div className="cs-faq__contact">
              <strong>Talk to the program team</strong>
              <a href="mailto:challenger@protoaxiom.com">challenger@protoaxiom.com</a>
              <div style={{ marginTop: 8, fontSize: 13, color: "var(--fg-3)" }}>
                Or join Proto Axiom Connect for low-frequency program updates.
              </div>
            </div>
          </div>
          <div className="cs-faq__list">
            {FAQS.map((f, i) => (
              <details key={i} className="cs-faq__item" open={i === 0}>
                <summary className="cs-faq__q">
                  <span>{f.q}</span>
                  <span className="icon"></span>
                </summary>
                <div className="cs-faq__a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  Footer  ───────────────────────────── */

function Footer() {
  return (
    <footer className="cs-footer">
      <div className="cs-wrap">
        <div className="cs-footer__top">
          <div className="cs-footer__brand">
            <img src="assets/proto-axiom-logo-white.svg" alt="Proto Axiom" />
            <p>
              Proto Axiom is an Australian biotech company-creation platform —
              partnering with researchers and clinicians to build companies from
              translational science. Challenger Summit is our flagship pitch program.
            </p>
          </div>
          <div className="cs-footer__col">
            <h4>Challenger Summit</h4>
            <ul>
              <li><a href="#why">Why pitch</a></li>
              <li><a href="#streams">Two streams</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#elig">Eligibility</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="cs-footer__col">
            <h4>Proto Axiom</h4>
            <ul>
              <li><a href="https://protoaxiom.com">Home</a></li>
              <li><a href="https://protoaxiom.com/investment">Investment process</a></li>
              <li><a href="https://protoaxiom.com/team">Team</a></li>
              <li><a href="https://protoaxiom.com/news">News</a></li>
              <li><a href="mailto:challenger@protoaxiom.com">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="cs-footer__bot">
          <span>© 2026 Proto Axiom Pty Ltd · Suite 303, 80 Mount Street, North Sydney NSW 2060</span>
          <span>Australian biotech company creation</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────  Sticky nav  ───────────────────────────── */

function Nav() {
  return (
    <nav className="cs-nav">
      <div className="cs-wrap cs-nav__inner">
        <a className="cs-nav__brand" href="https://protoaxiom.com">
          <img src="assets/proto-axiom-logo.svg" alt="Proto Axiom" />
          <span className="cs-nav__divider"></span>
          <span className="cs-nav__sub">Challenger Summit</span>
        </a>
        <div className="cs-nav__links">
          <a href="#why">Why pitch</a>
          <a href="#streams">Streams</a>
          <a href="#timeline">Timeline</a>
          <a href="#elig">Eligibility</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="cs-nav__cta" href="#apply">Register interest</a>
      </div>
    </nav>
  );
}

/* ─────────────────────────────  Mobile mockups  ───────────────────────────── */

function MobileMockups({ photo }) {
  return (
    <div className="cs-canvas-host">
      <div className="cs-wrap">
        <p className="cs-canvas-title">Mobile · 390 × 780</p>
        <div className="cs-canvas-shelf">
          {/* Phone 1 — hero */}
          <div className="cs-phone">
            <div className="cs-phone__notch"></div>
            <div className="cs-phone__statusbar">
              <span>9:41</span>
              <span style={{ display: "flex", gap: 6, fontSize: 12 }}>
                <span>●●●●●</span><span>5G</span><span>100%</span>
              </span>
            </div>
            <div className="cs-phone__viewport">
              <div className="cs-phone__nav">
                <img src="assets/proto-axiom-logo.svg" alt="" />
                <div className="menu"><span></span><span></span></div>
              </div>
              <div className="cs-phone__hero">
                <span className="cs-phone__stamp">
                  <span className="pulse"></span>
                  <span>Apps open Q3 2026</span>
                </span>
                <h1 className="cs-phone__title">
                  Pitch your science.<br/>
                  <em>Build the company.</em>
                </h1>
                <p className="cs-phone__lead">
                  Australia's largest pitch day in life sciences. A$500K in non-dilutive grant prizes.
                </p>
                <div className="cs-phone__cta">
                  <a className="cs-btn">Join Proto Axiom Connect <span className="arrow">→</span></a>
                  <a className="cs-btn cs-btn--ghost">Read the 2026 wrap</a>
                </div>
                <div className="cs-phone__photo">
                  <img src={photo} alt="" />
                  <div className="cs-phone__photo-overlay"></div>
                  <div className="cs-phone__photo-poster">
                    <small>Q1 2027 · Cell Block Theatre</small>
                    <strong>A$500K prize pool</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 — streams */}
          <div className="cs-phone">
            <div className="cs-phone__notch"></div>
            <div className="cs-phone__statusbar">
              <span>9:41</span>
              <span style={{ display: "flex", gap: 6, fontSize: 12 }}>
                <span>●●●●●</span><span>5G</span><span>100%</span>
              </span>
            </div>
            <div className="cs-phone__viewport">
              <div className="cs-phone__nav">
                <img src="assets/proto-axiom-logo.svg" alt="" />
                <div className="menu"><span></span><span></span></div>
              </div>
              <div className="cs-phone__streams">
                <p className="cs-eyebrow" style={{ fontSize: 10, marginBottom: 8 }}>Two streams</p>
                <h3>Two A$250K streams, one stage.</h3>
                <div className="cs-phone__stream cs-phone__stream--primary">
                  <span className="cs-phone__stream-by">Proto Axiom Challenger</span>
                  <span className="cs-phone__stream-amt">A$250,000</span>
                  <p className="cs-phone__stream-title">Open to all Australian researchers &amp; founders.</p>
                  <p className="cs-phone__stream-desc">Universities, institutes, hospitals, pre-seed/seed startups. Translational science → company formation.</p>
                </div>
                <div className="cs-phone__stream">
                  <span className="cs-phone__stream-by">St Vincent's Discovery &amp; Innovation</span>
                  <span className="cs-phone__stream-amt" style={{ background: "rgba(70,147,197,0.10)", color: "var(--pa-blue)" }}>A$250,000</span>
                  <p className="cs-phone__stream-title">'Pitch for Health' grants.</p>
                  <p className="cs-phone__stream-desc">St Vincent's Hospital, Garvan Institute, Victor Chang Cardiac.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3 — timeline + apply */}
          <div className="cs-phone">
            <div className="cs-phone__notch"></div>
            <div className="cs-phone__statusbar">
              <span>9:41</span>
              <span style={{ display: "flex", gap: 6, fontSize: 12 }}>
                <span>●●●●●</span><span>5G</span><span>100%</span>
              </span>
            </div>
            <div className="cs-phone__viewport">
              <div className="cs-phone__timeline">
                <p className="cs-eyebrow" style={{ fontSize: 10, marginBottom: 8 }}>The path</p>
                <h3>From application to pitch day.</h3>
                <p>2027 cycle dates land in the Proto Axiom Connect newsletter first.</p>
                <div className="cs-phone__tl">
                  {TIMELINE.slice(0, 5).map((s, i) => (
                    <div key={i} className={`cs-phone__tl-step ${i === 0 ? 'cs-phone__tl-step--active' : ''}`}>
                      <div className="cs-phone__tl-when">{s.when}</div>
                      <div className="cs-phone__tl-what">{s.what}</div>
                      <div className="cs-phone__tl-sub">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs-phone__cta-block">
                <h3>Don't miss the window.</h3>
                <p>Join Proto Axiom Connect — be first to know when 2027 applications open.</p>
                <a className="cs-btn">Register interest <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* expose */
Object.assign(window, {
  Hero, Nav, WhyPitch, Streams, Timeline, Eligibility,
  Winners, Sponsors, ApplyCTA, FAQ, Footer, MobileMockups
});
