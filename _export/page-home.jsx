/* Proto Axiom — Home (Variant A: institutional, polished) */

const PaHeroA = () => (
  <section className="pa-hero-a" data-spec="hero-a">
    <div className="pa-wrap">
      <div className="pa-hero-a__stamp">
        <span>EST. 2022 · SYDNEY</span>
        <span className="dot"></span>
        <span>HOLDING COMPANY · PERMANENT CAPITAL</span>
        <span className="dot"></span>
        <span>A$45M AUM · 8 PORTFOLIO COMPANIES</span>
      </div>
      <div className="pa-hero-a__grid">
        <div className="pa-hero-a__head">
          <Eyebrow>Australian biotech company creation</Eyebrow>
          <h1 className="pa-hero-a__title">
            We build biotech companies <em>in Australia.</em>
          </h1>
          <p className="pa-hero-a__lead">{PA_DATA.hero.lead}</p>
          <div className="pa-hero-a__cta">
            <PaButton variant="primary" arrow>Our investment process</PaButton>
            <PaButton variant="ghost">Read 2025 letter</PaButton>
          </div>
        </div>
        <div className="pa-hero-a__visual">
          <img src="assets/images/scientist-microscope.jpg" alt="Researcher at microscope" />
          <div className="pa-hero-a__caption">
            INSIDE THE LAB · USYD / ANZAC RESEARCH INSTITUTE
          </div>
        </div>
      </div>
      <PaUniversityWall />
    </div>
  </section>
);

const PaAumBlock = () => (
  <section className="pa-section pa-section--white" data-spec="aum">
    <div className="pa-wrap">
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 96, alignItems: 'end', marginBottom: 64}}>
        <div>
          <Eyebrow>The firm at a glance</Eyebrow>
          <h2 className="pa-h2">Permanent capital.<br/>Patient timelines.</h2>
        </div>
        <p className="pa-body" style={{maxWidth: 540, color: 'var(--pa-ink-muted)', fontSize: 17, marginTop: 0}}>
          Proto Axiom is structured as a holding company, not a fund. No fixed life, no management fees, no carry — capital is deployed in milestone‑gated tranches alongside founders and Australia's leading research institutions.
        </p>
      </div>
      <div className="pa-aum">
        {PA_DATA.stats.map((s, i) => (
          <div key={i} className="pa-aum__cell">
            <div className="pa-aum__num">{s.num}</div>
            <div className="pa-aum__lbl">{s.lbl}</div>
            <div className="pa-aum__sub">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="pa-aum__foot">
        <span>As at 31 March 2026 · figures unaudited unless stated</span>
        <PaLink>Download factsheet (PDF)</PaLink>
      </div>
    </div>
  </section>
);

const PaCapitalStrip = () => (
  <section className="pa-section pa-section--tight pa-section--white" data-spec="capital" style={{paddingTop: 0}}>
    <div className="pa-wrap">
      <div className="pa-capital-quiet">
        <div className="pa-capital-quiet__lbl">Capital base</div>
        <p className="pa-capital-quiet__body">
          Backed by a closed group of <strong>33 private investors</strong> across Australia, the United States and the United Kingdom — family offices, foundations and strategic operators who provide patient capital alongside operating insight. Investor identities held in confidence.
        </p>
      </div>
    </div>
  </section>
);

const PaWhyAustraliaBlock = () => (
  <section className="pa-section pa-section--almond" data-spec="why-au">
    <div className="pa-wrap">
      <div className="pa-whyx">
        <header className="pa-whyx__head">
          <div>
            <Eyebrow>The translation gap</Eyebrow>
            <h2 className="pa-h2" style={{margin: 0}}>World‑class science.<br/>Under‑capitalised companies.</h2>
          </div>
          <p className="pa-whyx__lead">
            Australia consistently ranks in the global top tier for biomedical research output — but the capital flowing into translation lags every comparable economy. The arithmetic is the entire reason Proto Axiom exists.
          </p>
        </header>

        {/* Compare strip — AU vs US arithmetic, per researcher */}
        <div className="pa-whyx__compare">
          <div className="pa-whyx__compare-head">
            <div className="pa-whyx__compare-lbl">Per‑researcher venture capital, life sciences</div>
            <div className="pa-whyx__compare-note">Source: AusBiotech, OECD MSTI, NVCA · 2024 calendar year</div>
          </div>
          <div className="pa-whyx__compare-rows">
            <div className="pa-whyx__compare-row">
              <div className="pa-whyx__compare-flag">AU</div>
              <div className="pa-whyx__compare-bar"><span style={{width: '8%'}}></span></div>
              <div className="pa-whyx__compare-val">US$11k</div>
            </div>
            <div className="pa-whyx__compare-row">
              <div className="pa-whyx__compare-flag">UK</div>
              <div className="pa-whyx__compare-bar"><span style={{width: '34%'}}></span></div>
              <div className="pa-whyx__compare-val">US$48k</div>
            </div>
            <div className="pa-whyx__compare-row">
              <div className="pa-whyx__compare-flag pa-whyx__compare-flag--accent">US</div>
              <div className="pa-whyx__compare-bar"><span className="pa-whyx__compare-bar-fill--accent" style={{width: '100%'}}></span></div>
              <div className="pa-whyx__compare-val pa-whyx__compare-val--accent">US$142k</div>
            </div>
          </div>
        </div>

        {/* Core stats — three honest numbers */}
        <div className="pa-whyx__stats">
          <div className="pa-whyx__stat">
            <div className="pa-whyx__stat-num">3.4%</div>
            <div className="pa-whyx__stat-lbl">of global biomedical publications</div>
            <div className="pa-whyx__stat-sub">Australia produces output at ~3× its share of world GDP. Source: Nature Index 2024.</div>
          </div>
          <div className="pa-whyx__stat">
            <div className="pa-whyx__stat-num">A$22B</div>
            <div className="pa-whyx__stat-lbl">Medical Research Future Fund</div>
            <div className="pa-whyx__stat-sub">Sovereign endowment for translational research, perpetually invested by the Australian Government.</div>
          </div>
          <div className="pa-whyx__stat">
            <div className="pa-whyx__stat-num pa-whyx__stat-num--neg">0.06%</div>
            <div className="pa-whyx__stat-lbl">of GDP into life‑sciences VC</div>
            <div className="pa-whyx__stat-sub">~1/8th of the US figure. The bottleneck is company formation capital — not science. Source: ABS, NVCA.</div>
          </div>
        </div>

        {/* The bridge — what Proto Axiom does about it */}
        <div className="pa-whyx__bridge">
          <div className="pa-whyx__bridge-lbl">Our response</div>
          <p className="pa-whyx__bridge-body">
            Permanent capital, milestone‑gated, deployed alongside Australia's research institutions to form companies that wouldn't otherwise exist. <strong>Eight in four years.</strong> Three approaching clinical trials.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PaPortfolioBlock = ({ onNav }) => (
  <section className="pa-section pa-section--white" data-spec="portfolio">
    <div className="pa-wrap">
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'end', marginBottom: 64}}>
        <div>
          <Eyebrow>Portfolio · 8 companies</Eyebrow>
          <h2 className="pa-h2">Scientific breakthroughs, translated.</h2>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16}}>
          <p className="pa-body" style={{margin: 0, color: 'var(--pa-ink-muted)', fontSize: 17, maxWidth: 480}}>
            Eight companies across therapeutics, biotech, diagnostics and bioprocessing — sourced from Australia's leading research institutions and built with Proto Axiom as founding investor.
          </p>
          <PaLink onClick={() => onNav && onNav('portfolio')}>All portfolio companies</PaLink>
        </div>
      </div>
      <div className="pa-portfolio">
        {PA_DATA.portfolio.map(p => (
          <a key={p.slug} className="pa-portfolio__card" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('detail:' + p.slug); }}>
            <div className="pa-portfolio__top">
              <img className="pa-portfolio__logo" src={p.logo} alt={p.name} />
              <div className="pa-portfolio__year">{p.year}</div>
            </div>
            <div className="pa-portfolio__sector">{p.sector} · {p.modality}</div>
            <h3 className="pa-portfolio__name">{p.name}</h3>
            <p className="pa-portfolio__tagline">{p.tagline}</p>
            <dl className="pa-portfolio__stats">
              <div><dt>Origin</dt><dd>{p.origin}</dd></div>
              <div><dt>Invested</dt><dd>{p.invested}</dd></div>
              <div><dt>Equity</dt><dd>{p.equity}</dd></div>
            </dl>
            <div className="pa-portfolio__foot">
              <span className="pa-portfolio__stage">{p.stage}</span>
              <span className="pa-portfolio__more">View →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const PaPipelineBlock = () => {
  // Each company plotted by current stage (0=G0, 1=G1, 2=G2, 3=G3) — bar spans from first deployment to current state.
  const rows = [
    { name: 'AdvanCell',           sector: 'Therapeutics',   from: 0.4, to: 3.2, accent: false, dot: 3.2, label: 'Phase 1/2' },
    { name: 'Onyx Axiom',          sector: 'Therapeutics',   from: 0.2, to: 2.6, accent: true,  dot: 2.6, label: 'Phase 2b — 2027' },
    { name: 'JumpStart Fertility', sector: 'Therapeutics',   from: 0.5, to: 2.3, accent: false, dot: 2.3, label: 'GMP / clinical AU+JP' },
    { name: 'Endo Axiom',          sector: 'Therapeutics',   from: 0.1, to: 2.0, accent: true,  dot: 2.0, label: 'IND-enabling' },
    { name: 'SWAN Genomics',       sector: 'Biotech',        from: 0.3, to: 1.8, accent: false, dot: 1.8, label: 'POC mid 2026' },
    { name: 'Flo Axiom',           sector: 'Bioprocessing',  from: 0.1, to: 1.0, accent: true,  dot: 1.0, label: 'Pilot build-out' },
    { name: 'Herikin',             sector: 'Biotech',        from: 0.2, to: 0.7, accent: false, dot: 0.7, label: 'MVP hardware', ghost: true },
    { name: 'Cellutech',           sector: 'AgBio',          from: 0.2, to: 0.6, accent: false, dot: 0.6, label: 'Field trials',  ghost: true }
  ];
  const pct = (v) => `${(v / 4) * 100}%`;
  return (
    <section className="pa-section pa-section--white" data-spec="pipeline">
      <div className="pa-wrap">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, alignItems: 'end', marginBottom: 64}}>
          <div>
            <Eyebrow>Portfolio pipeline · 2026</Eyebrow>
            <h2 className="pa-h2">Eight companies. One framework.</h2>
          </div>
          <p className="pa-body" style={{margin: 0, color: 'var(--pa-ink-muted)', fontSize: 17, maxWidth: 540}}>
            Every company moves through the same milestone-gated framework — G0 formation through G3 validated inflection. Capital is released against gates, not calendars.
          </p>
        </div>
        <div className="pa-gantt">
          <div className="pa-gantt__head">
            <div className="pa-gantt__col-label">Company</div>
            <div className="pa-gantt__gates">
              <div className="pa-gantt__gate">G0<span>Identify &amp; form</span></div>
              <div className="pa-gantt__gate">G1<span>Proof of concept</span></div>
              <div className="pa-gantt__gate">G2<span>Clinical / technical readiness</span></div>
              <div className="pa-gantt__gate">G3<span>Validated inflection</span></div>
            </div>
          </div>
          {rows.map(r => (
            <div key={r.name} className="pa-gantt__row">
              <div className="pa-gantt__name">
                <h4>{r.name}</h4>
                <span>{r.sector}</span>
              </div>
              <div className="pa-gantt__track">
                <span></span><span></span><span></span><span></span>
                <div className={`pa-gantt__bar ${r.accent ? 'pa-gantt__bar--accent' : ''} ${r.ghost ? 'pa-gantt__bar--ghost' : ''}`}
                  style={{left: pct(r.from), right: `calc(100% - ${pct(r.to)})`}}>
                  {r.label}
                </div>
                <div className="pa-gantt__dot" style={{left: pct(r.dot)}}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="pa-gantt__legend">
          <div><span className="pa-gantt__swatch"></span>Created with Proto Axiom as founding investor</div>
          <div><span className="pa-gantt__swatch pa-gantt__swatch--accent"></span>Lead programme</div>
          <div><span className="pa-gantt__swatch pa-gantt__swatch--ghost"></span>Venture stake</div>
        </div>
      </div>
    </section>
  );
};

const PaCapStructureBlock = () => (
  <section className="pa-section pa-section--white" data-spec="capstruct">
    <div className="pa-wrap">
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, alignItems: 'end', marginBottom: 56}}>
        <div>
          <Eyebrow>Capital structure</Eyebrow>
          <h2 className="pa-h2">A holding company.<br/>Not a fund.</h2>
        </div>
        <p className="pa-body" style={{margin: 0, color: 'var(--pa-ink-muted)', fontSize: 17, maxWidth: 540}}>
          Most biotech in Australia is funded by closed-end venture funds with a 10-year clock. We're structured for the timelines science actually requires.
        </p>
      </div>
      <div className="pa-capstruct">
        <div className="pa-capstruct__col pa-capstruct__col--pa">
          <div className="pa-capstruct__lbl">Proto Axiom</div>
          <h3 className="pa-capstruct__h">Permanent capital. Milestone-gated.</h3>
          <p className="pa-capstruct__sub">Holding company structure with no fixed life — capital recycles into the portfolio indefinitely.</p>
          <div className="pa-capstruct__rows">
            <div className="pa-capstruct__row"><span>Vehicle</span><div><strong>Holding company</strong> — single permanent balance sheet</div></div>
            <div className="pa-capstruct__row"><span>Time horizon</span><div><strong>Indefinite</strong> — no fund close, no forced exits</div></div>
            <div className="pa-capstruct__row"><span>Fees</span><div><strong>None</strong> — no management fee, no carry</div></div>
            <div className="pa-capstruct__row"><span>Capital release</span><div><strong>Gate-driven</strong> — tranches against scientific milestones</div></div>
            <div className="pa-capstruct__row"><span>Operating bench</span><div><strong>Shared</strong> — clinical, regulatory, IP, finance, governance</div></div>
          </div>
          <div className="pa-capstruct__timeline">
            <div className="pa-capstruct__timeline-cap">Capital availability over time</div>
            <div className="pa-capstruct__timeline-row">
              <div className="pa-capstruct__timeline-bar"></div>
              <div className="pa-capstruct__timeline-fill pa-capstruct__timeline-fill--full"></div>
            </div>
          </div>
        </div>
        <div className="pa-capstruct__col pa-capstruct__col--vc">
          <div className="pa-capstruct__lbl">Traditional VC fund</div>
          <h3 className="pa-capstruct__h">Closed-end. 10-year cycle.</h3>
          <p className="pa-capstruct__sub">Standard fund-of-funds vehicle with LP commitments, fixed deployment window and forced exit calendar.</p>
          <div className="pa-capstruct__rows">
            <div className="pa-capstruct__row"><span>Vehicle</span><div><strong>Limited partnership</strong> — LP commitments, GP carry</div></div>
            <div className="pa-capstruct__row"><span>Time horizon</span><div><strong>10 years</strong> — investment + harvest periods fixed</div></div>
            <div className="pa-capstruct__row"><span>Fees</span><div><strong>2 / 20</strong> — 2% management, 20% carried interest</div></div>
            <div className="pa-capstruct__row"><span>Capital release</span><div><strong>Round-driven</strong> — milestones tied to financing cycles</div></div>
            <div className="pa-capstruct__row"><span>Operating bench</span><div><strong>External</strong> — outsourced to founders / consultants</div></div>
          </div>
          <div className="pa-capstruct__timeline">
            <div className="pa-capstruct__timeline-cap">Capital availability over time</div>
            <div className="pa-capstruct__timeline-row">
              <div className="pa-capstruct__timeline-bar"></div>
              <div className="pa-capstruct__timeline-fill pa-capstruct__timeline-fill--cycle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PaUniversityWall = () => (
  <div className="pa-unis" data-spec="unis">
    <div className="pa-unis__head">
      <div className="pa-unis__lbl">Sourced with</div>
      <h4 className="pa-unis__h">Australia's leading research institutions and the public health system.</h4>
    </div>
    <div className="pa-unis__grid">
      {['University of Sydney','UNSW Sydney','Monash University','Griffith University','ANZAC Research Institute','Sydney Local Health District'].map(u => (
        <div key={u} className="pa-unis__cell">{u}</div>
      ))}
    </div>
  </div>
);

const PaBuildBlock = () => (
  <section className="pa-section pa-section--brand" data-spec="build" style={{position: 'relative', overflow: 'hidden'}}>
    <img src="assets/textures/textures_white-on-blue.svg" alt=""
      style={{position: 'absolute', right: -160, top: -100, width: 560, height: 560, opacity: 0.14, pointerEvents: 'none'}} />
    <div className="pa-wrap" style={{position: 'relative'}}>
      <div className="pa-build-head">
        <div>
          <Eyebrow>How we build companies</Eyebrow>
          <h2 className="pa-h2" style={{margin: 0}}>From signal<br/>to scale.</h2>
        </div>
        <p className="pa-build-head__lead">
          We do the hard middle: rigorous diligence, practical company building, and disciplined capital deployment alongside the researchers we partner with — five stages, one operating bench.
        </p>
        <div className="pa-build-head__meta">
          <span>Average time, signal → first capital</span>
          <strong>~9 months</strong>
        </div>
      </div>

      <div className="pa-build-flow">
        {/* Row 1 — steps 1 & 2 */}
        <div className="pa-build-row pa-build-row--text">
          {PA_DATA.build.slice(0, 2).map((s, i) => (
            <article key={s.n} className="pa-build-step">
              <div className="pa-build-step__rule"></div>
              <div className="pa-build-step__head">
                <span className="pa-build-step__num">{s.n}</span>
                <span className="pa-build-step__tag">{i === 0 ? 'Sourcing' : 'Diligence'}</span>
              </div>
              <h3 className="pa-build-step__title">{s.title}</h3>
              <p className="pa-build-step__text">{s.text}</p>
            </article>
          ))}
        </div>

        {/* Row 2 — anchor image + step 3 */}
        <div className="pa-build-row pa-build-row--anchor">
          <figure className="pa-build-anchor">
            <img src="assets/images/lab-researchers.jpg" alt="Researchers in shared operating environment" />
            <figcaption>
              <span className="pa-build-anchor__lbl">Inside the bench</span>
              <span className="pa-build-anchor__cap">Shared clinical, regulatory and finance team co‑located with portfolio companies — Sydney, AU.</span>
            </figcaption>
          </figure>
          <article className="pa-build-step pa-build-step--accent">
            <div className="pa-build-step__rule pa-build-step__rule--accent"></div>
            <div className="pa-build-step__head">
              <span className="pa-build-step__num pa-build-step__num--accent">{PA_DATA.build[2].n}</span>
              <span className="pa-build-step__tag pa-build-step__tag--accent">Formation</span>
            </div>
            <h3 className="pa-build-step__title">{PA_DATA.build[2].title}</h3>
            <p className="pa-build-step__text">{PA_DATA.build[2].text}</p>
            <ul className="pa-build-step__list">
              <li>Founding capital, A$0.8M – A$3.6M</li>
              <li>Company formation &amp; IP licensing</li>
              <li>Tailored management appointment</li>
            </ul>
          </article>
        </div>

        {/* Row 3 — steps 4 & 5 */}
        <div className="pa-build-row pa-build-row--text">
          {PA_DATA.build.slice(3).map((s, i) => (
            <article key={s.n} className="pa-build-step">
              <div className="pa-build-step__rule"></div>
              <div className="pa-build-step__head">
                <span className="pa-build-step__num">{s.n}</span>
                <span className="pa-build-step__tag">{i === 0 ? 'De‑risking' : 'Scale'}</span>
              </div>
              <h3 className="pa-build-step__title">{s.title}</h3>
              <p className="pa-build-step__text">{s.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="pa-build-foot">
        <span className="pa-build-foot__lbl">Outcome</span>
        <p className="pa-build-foot__body">
          A company with a defined development plan, capital sufficient for the next gate, and an operating team that has built biotechs before. Repeated, with discipline, eight times since 2022.
        </p>
      </div>
    </div>
  </section>
);

const PaInitiativesBlock = ({ onNav }) => (
  <section className="pa-section pa-section--white" data-spec="initiatives">
    <div className="pa-wrap">
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 96, alignItems: 'end', marginBottom: 56}}>
        <div>
          <Eyebrow>Initiatives</Eyebrow>
          <h2 className="pa-h2">Programmes that<br/>widen the funnel.</h2>
        </div>
        <p className="pa-body" style={{margin: 0, color: 'var(--pa-ink-muted)', fontSize: 17, maxWidth: 540}}>
          Alongside our portfolio, Proto Axiom runs and supports programmes that surface translational science earlier — from researchers who haven't yet considered company formation through to under‑represented founders in priority therapeutic areas.
        </p>
      </div>
      <div className="pa-inits">
        <a className="pa-inits__card" onClick={() => onNav && onNav('summit')}>
          <div className="pa-inits__top">
            <div className="pa-inits__lbl">Pitch programme · Annual</div>
            <span className="pa-inits__arrow">→</span>
          </div>
          <h3 className="pa-inits__name">Challenger Summit</h3>
          <p className="pa-inits__desc">Australia's largest pitch day in life sciences. Researchers, founders and clinical leads pitch for capital, mentorship and a path to patient impact. A$500K in grant prizes awarded in 2026.</p>
          <dl className="pa-inits__stats">
            <div><dt>Next event</dt><dd>2027</dd></div>
            <div><dt>2026 prize pool</dt><dd>A$500K</dd></div>
            <div><dt>Partner</dt><dd>St Vincent's Health</dd></div>
          </dl>
        </a>
        <a className="pa-inits__card" href="#whf" onClick={(e) => e.preventDefault()}>
          <div className="pa-inits__top">
            <div className="pa-inits__lbl">Foundry · Women's health</div>
            <span className="pa-inits__arrow">→</span>
          </div>
          <h3 className="pa-inits__name">Women's Health Foundry</h3>
          <p className="pa-inits__desc">A dedicated programme to identify, fund and incubate breakthrough science in women's health — an area persistently under‑capitalised relative to its disease burden. Sourcing, scientific advisory and seed capital provided by Proto Axiom.</p>
          <dl className="pa-inits__stats">
            <div><dt>Status</dt><dd>Sourcing</dd></div>
            <div><dt>Focus</dt><dd>Therapeutics, dx, devices</dd></div>
            <div><dt>Stage</dt><dd>G0 — G1</dd></div>
          </dl>
        </a>
      </div>
    </div>
  </section>
);

const PaSummitBlock = ({ onNav }) => (
  <section className="pa-section pa-section--tight pa-section--white" data-spec="summit">
    <div className="pa-wrap">
      <div className="pa-summit">
        <div className="pa-summit__copy">
          <Eyebrow>A Proto Axiom programme</Eyebrow>
          <h2 className="pa-summit__h">Challenger Summit</h2>
          <p>Australia's largest pitch day in life sciences. Researchers, founders and clinical leads pitch for capital, mentorship and a path to real‑world patient impact.</p>
          <div className="pa-summit__prize">A$500K</div>
          <div style={{font: '500 12px/1.4 var(--font-sans)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--pa-ink-muted)'}}>
            In grant prizes · 2026
          </div>
          <div style={{marginTop: 16}}>
            <PaButton variant="primary" arrow onClick={() => onNav && onNav('summit')}>Programme details</PaButton>
          </div>
        </div>
        <div className="pa-summit__art">
          <img src="assets/summit/hero-stage-branded.jpg" alt="Challenger Summit stage" />
          <div className="pa-summit__art-overlay"></div>
          <div className="pa-summit__art-tag">
            <span>26 March 2026</span>
            <span>Cell Block Theatre, Sydney</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PaNewsBlock = ({ onNav }) => (
  <section className="pa-section pa-section--white" data-spec="news">
    <div className="pa-wrap">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 56}}>
        <div>
          <Eyebrow>Latest news</Eyebrow>
          <h2 className="pa-h2" style={{margin: 0}}>From the firm and our portfolio.</h2>
        </div>
        <PaLink onClick={() => onNav && onNav('news')}>All news</PaLink>
      </div>
      <div className="pa-news">
        {PA_DATA.news.slice(0, 3).map((n, i) => (
          <div key={i} className="pa-news__item">
            <div className="pa-news__meta">
              <span>{n.date}</span>
              <span>·</span>
              <span className="pa-news__source">{n.source}</span>
              <span>·</span>
              <span>{n.kind}</span>
            </div>
            <h3 className="pa-news__title">{n.title}</h3>
            <div style={{marginTop: 'auto', paddingTop: 16}}>
              <PaLink>Read</PaLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomePage = ({ onNav }) => (
  <div style={{background: 'var(--pa-page-bg)'}}>
    <PaNav active="home" onNav={onNav} />
    <PaHeroA />
    <PaAumBlock />
    <PaCapitalStrip />
    <PaWhyAustraliaBlock />
    <PaBuildBlock />
    <PaPortfolioBlock onNav={onNav} />
    <PaPipelineBlock />
    <PaCapStructureBlock />
    <PaInitiativesBlock onNav={onNav} />
    <PaNewsBlock onNav={onNav} />
    <PaFooter onNav={onNav} />
  </div>
);

Object.assign(window, { PaHeroA, PaAumBlock, PaCapitalStrip, PaWhyAustraliaBlock, PaPortfolioBlock, PaPipelineBlock, PaCapStructureBlock, PaUniversityWall, PaBuildBlock, PaInitiativesBlock, PaSummitBlock, PaNewsBlock, HomePage });
