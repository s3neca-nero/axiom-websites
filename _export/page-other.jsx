/* Proto Axiom — Investment, Portfolio Detail, Team, plus Home Mobile */

const InvestmentPage = ({ onNav }) => (
  <div style={{background: 'var(--pa-page-bg)'}}>
    <PaNav active="investment" onNav={onNav} />

    <section className="pa-section pa-section--tight pa-section--white" data-spec="invest-head">
      <div className="pa-wrap">
        <div className="pa-page-head">
          <div>
            <Eyebrow>Investment</Eyebrow>
            <h1 className="pa-page-head__h">Patient capital. Hands‑on incubation. End‑to‑end translation.</h1>
          </div>
          <p className="pa-page-head__lead">
            Australia generates world‑class biomedical research, yet too often that innovation stalls between the lab and the market. Proto Axiom exists to close that gap — co‑creating companies with researchers, installing management, and providing the shared infrastructure required to advance them.
          </p>
        </div>
      </div>
    </section>

    <section className="pa-section pa-section--white" data-spec="invest-thesis">
      <div className="pa-wrap">
        <div className="pa-thesis">
          <div className="pa-thesis__sticky">
            <Eyebrow>Our thesis</Eyebrow>
            <h2 className="pa-h2" style={{marginBottom: 0}}>Build the company.<br/>Not just the cap table.</h2>
          </div>
          <div className="pa-thesis__col">
            <p>Rather than investing passively in existing businesses, we identify translational assets, form companies around them, install management, and provide the shared clinical, regulatory, IP, finance and operating infrastructure required to advance them.</p>
            <p>Capital is permanent. Decisions are made on milestones, not on fund cycles. We back our companies through preclinical milestones into clinical and commercial reality, with global partners.</p>
            <p>Our investors are private — Australian and offshore — and our pipeline is sourced from the country's leading universities, research institutes, and the public health system.</p>
            <div style={{marginTop: 32}}>
              <PaButton variant="primary" arrow onClick={() => onNav && onNav('portfolio')}>Read more about our portfolio</PaButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pa-section pa-section--almond" data-spec="invest-gates">
      <div className="pa-wrap">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'end', marginBottom: 80}}>
          <div>
            <Eyebrow>The four gates</Eyebrow>
            <h2 className="pa-h2">A milestone‑gated process from licensing to inflection.</h2>
          </div>
          <p style={{font: '400 17px/1.65 var(--font-sans)', color: 'var(--pa-ink-muted)', margin: 0, maxWidth: 520}}>
            Capital is deployed in tranches against scientific, clinical and commercial milestones. Each gate has a defined evidence bar before further capital is committed.
          </p>
        </div>
        <div className="pa-gates">
          {PA_DATA.process.map(p => (
            <div key={p.n} className="pa-gates__cell">
              <div className="pa-gates__tag">{p.n} · Gate {p.n.replace('G','')}</div>
              <h3 className="pa-gates__title">{p.title}</h3>
              <p className="pa-gates__text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="pa-section pa-section--white" data-spec="invest-criteria">
      <div className="pa-wrap">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 96, alignItems: 'start'}}>
          <div>
            <Eyebrow>What we look for</Eyebrow>
            <h2 className="pa-h2">Investment criteria.</h2>
            <p style={{font: '400 17px/1.65 var(--font-sans)', color: 'var(--pa-ink-muted)'}}>
              We evaluate every opportunity against five criteria — applied consistently across therapeutics, diagnostics, biotech and bioprocessing.
            </p>
          </div>
          <ol className="pa-criteria">
            {[
              ['01', 'Translational science', 'Clear path from laboratory evidence to a defined patient outcome, with credible regulatory and reimbursement positioning.'],
              ['02', 'Founders we want to build with', 'Researchers and operators with deep technical conviction, willing to partner closely with our operating bench.'],
              ['03', 'Australian roots, global ambition', 'IP and capability sourced from Australian universities, research institutes and the public health system, scaling internationally.'],
              ['04', 'A real inflection within reach', 'A near‑term milestone — clinical, technical or commercial — that materially changes risk and value.'],
              ['05', 'Capital‑efficient path to value', 'Sensible cash burn into the next inflection, with us as a long‑term capital partner.'],
            ].map(([n, h, t]) => (
              <li key={n}>
                <span className="pa-criteria__n">{n}</span>
                <div>
                  <span className="pa-criteria__h">{h}</span>
                  <span className="pa-criteria__t">{t}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <PaFooter onNav={onNav} />
  </div>
);

/* ------------------------------------------------------------------------ */

const PortfolioDetailPage = ({ slug = 'onyx-axiom', onNav }) => {
  const p = PA_DATA.portfolio.find(x => x.slug === slug) || PA_DATA.portfolio[0];
  return (
    <div style={{background: 'var(--pa-page-bg)'}}>
      <PaNav active="portfolio" onNav={onNav} dark />
      <section className="pa-detail-hero" data-spec="detail-hero">
        <img className="pa-detail-hero__texture" src="assets/textures/textures_white-on-blue.svg" alt="" />
        <div className="pa-wrap" style={{position: 'relative'}}>
          <button className="pa-detail-hero__back" onClick={() => onNav && onNav('portfolio')}>← All portfolio</button>
          <div className="pa-detail-hero__top">
            <div>
              <div className="pa-detail-hero__sector">{p.sector} · {p.modality}</div>
              <h1 className="pa-detail-hero__name">{p.name}</h1>
            </div>
            <div className="pa-detail-hero__logo">
              <img src={p.logo} alt={p.name} />
            </div>
          </div>
          <p className="pa-detail-hero__tagline">{p.tagline}</p>
        </div>
      </section>

      <section className="pa-section pa-section--tight pa-section--white">
        <div className="pa-wrap">
          <div className="pa-detail-meta">
            <div className="pa-detail-meta__cell">
              <div className="pa-detail-meta__lbl">Sector</div>
              <div className="pa-detail-meta__val">{p.sector}</div>
            </div>
            <div className="pa-detail-meta__cell">
              <div className="pa-detail-meta__lbl">Origin institution</div>
              <div className="pa-detail-meta__val">{p.origin}</div>
            </div>
            <div className="pa-detail-meta__cell">
              <div className="pa-detail-meta__lbl">Stage</div>
              <div className="pa-detail-meta__val">{p.stage}</div>
            </div>
            <div className="pa-detail-meta__cell">
              <div className="pa-detail-meta__lbl">Founded</div>
              <div className="pa-detail-meta__val">{p.year}</div>
            </div>
            <div className="pa-detail-meta__cell">
              <div className="pa-detail-meta__lbl">PA invested</div>
              <div className="pa-detail-meta__val">{p.invested}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pa-section pa-section--white">
        <div className="pa-wrap">
          <div className="pa-detail-body">
            <div>
              <Eyebrow>Company summary</Eyebrow>
              <p>[ Placeholder copy — to be supplied. {p.tagline} ]</p>
              <p>[ Placeholder — additional paragraph on the science, the clinical or commercial opportunity, and the team Proto Axiom worked with to form the company. ]</p>
              <p>[ Placeholder — paragraph on near‑term milestones and the next inflection point. ]</p>
              <div style={{marginTop: 24}}>
                <PaButton variant="ghost" arrow href="#">Visit {p.name.toLowerCase().split(' ')[0]} site</PaButton>
              </div>
            </div>
            <div>
              <Eyebrow>Founders & leadership</Eyebrow>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32}}>
                {[1, 2].map(i => (
                  <div key={i}>
                    <div style={{aspectRatio: '4/5', background: 'var(--pa-french-grey)', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pa-ink-subtle)', font: '500 11px/1 var(--font-sans)', letterSpacing: '0.14em', textTransform: 'uppercase'}}>[ Photo ]</div>
                    <div style={{font: '500 15px/1.25 var(--font-sans)', color: 'var(--pa-primary)'}}>[ Founder {i} ]</div>
                    <div style={{font: '400 13px/1.4 var(--font-sans)', color: 'var(--pa-ink-muted)', marginTop: 4}}>[ Title · Affiliation ]</div>
                  </div>
                ))}
              </div>
              <Eyebrow>Next inflection</Eyebrow>
              <p style={{font: '500 18px/1.4 var(--font-sans)', color: 'var(--pa-primary)'}}>{p.next}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pa-section pa-section--almond">
        <div className="pa-wrap">
          <Eyebrow>Other portfolio companies</Eyebrow>
          <h2 className="pa-h2" style={{marginBottom: 48}}>From the same bench.</h2>
          <div className="pa-portfolio">
            {PA_DATA.portfolio.filter(x => x.slug !== p.slug).slice(0, 4).map(x => (
              <a key={x.slug} className="pa-portfolio__card" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('detail:' + x.slug); }}>
                <img className="pa-portfolio__logo" src={x.logo} alt={x.name} />
                <div className="pa-portfolio__sector">{x.sector}</div>
                <h3 className="pa-portfolio__name">{x.name}</h3>
                <p className="pa-portfolio__tagline">{x.tagline}</p>
                <div className="pa-portfolio__foot">
                  <span className="pa-portfolio__stage">{x.stage}</span>
                  <span>{x.year}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PaFooter onNav={onNav} />
    </div>
  );
};

/* ------------------------------------------------------------------------ */

const TeamSection = ({ title, count, desc, members }) => (
  <div className="pa-team-section">
    <div className="pa-team-section__head">
      <div>
        <h2 className="pa-team-section__h">{title}</h2>
        <div className="pa-team-section__count" style={{marginTop: 12}}>{count} {count === 1 ? 'person' : 'people'}</div>
      </div>
      <p className="pa-team-section__desc">{desc}</p>
    </div>
    <div className="pa-team-grid">
      {members.map((m, i) => (
        <div key={i} className="pa-team-card">
          {m.photo ? (
            <div className="pa-team-card__photo"><img src={m.photo} alt={m.name} /></div>
          ) : (
            <div className="pa-team-card__photo pa-team-card__photo--placeholder">[ Photo ]</div>
          )}
          <h4 className="pa-team-card__name">{m.name}</h4>
          <div className="pa-team-card__title">{m.title}</div>
        </div>
      ))}
    </div>
  </div>
);

const TeamPage = ({ onNav }) => (
  <div style={{background: 'var(--pa-page-bg)'}}>
    <PaNav active="team" onNav={onNav} />
    <section className="pa-section pa-section--tight pa-section--white">
      <div className="pa-wrap">
        <div className="pa-page-head">
          <div>
            <Eyebrow>Team</Eyebrow>
            <h1 className="pa-page-head__h">An operating bench, not a fund team.</h1>
          </div>
          <p className="pa-page-head__lead">
            Around 30 people across management, board, scientific advisory and strategic advisors — combining science, clinical, finance, governance and operating experience.
          </p>
        </div>
      </div>
    </section>
    <section className="pa-section pa-section--white" style={{paddingTop: 32}}>
      <div className="pa-wrap">
        <TeamSection
          title="Management"
          count={PA_DATA.management.length}
          desc="The operating team. Scientific diligence, capital deployment and hands‑on company building, every day."
          members={PA_DATA.management}
        />
      </div>
    </section>
    <section className="pa-section pa-section--almond" style={{paddingTop: 64, paddingBottom: 64}}>
      <div className="pa-wrap">
        <TeamSection
          title="Board"
          count={PA_DATA.board.length}
          desc="Governance and oversight, with deep capital‑markets, biotech and translational science experience."
          members={PA_DATA.board}
        />
      </div>
    </section>
    <section className="pa-section pa-section--white" style={{paddingTop: 64, paddingBottom: 64}}>
      <div className="pa-wrap">
        <TeamSection
          title="Scientific Advisory Board"
          count={PA_DATA.sab.length}
          desc="Senior scientists and clinicians who guide our diligence and the development plans of portfolio companies."
          members={PA_DATA.sab}
        />
      </div>
    </section>
    <section className="pa-section pa-section--almond" style={{paddingTop: 64, paddingBottom: 96}}>
      <div className="pa-wrap">
        <TeamSection
          title="Strategic Advisors"
          count={PA_DATA.strategic.length}
          desc="Operators, founders and executives who advise on commercial, partnership and capital strategy."
          members={PA_DATA.strategic}
        />
      </div>
    </section>
    <PaFooter onNav={onNav} />
  </div>
);

/* ------------------------------------------------------------------------ */

const HomeMobile = () => (
  <div className="pa-mobile-frame">
    <div className="pa-mobile-status">
      <span>9:41</span>
      <div className="pa-mobile-status__dots">
        <span className="b"></span><span className="b"></span><span className="w"></span>
      </div>
    </div>
    <div className="pa-mobile-nav">
      <img className="pa-mobile-nav__logo" src="assets/logos/proto-axiom-logo_full-standard.svg" alt="Proto Axiom" />
      <button className="pa-mobile-nav__menu"><span></span><span></span><span></span></button>
    </div>
    <div className="pa-mobile-section">
      <Eyebrow>Australian biotech company creation</Eyebrow>
      <h1 className="pa-mobile-h1">We build biotech companies <span style={{color: 'var(--pa-secondary)'}}>in Australia.</span></h1>
      <p className="pa-mobile-lead">{PA_DATA.hero.lead}</p>
      <PaButton variant="primary" arrow>Investment process</PaButton>
    </div>
    <div className="pa-mobile-section" style={{background: '#fff', paddingTop: 24, paddingBottom: 24}}>
      <Eyebrow>The firm at a glance</Eyebrow>
      {PA_DATA.stats.slice(0, 3).map((s, i) => (
        <div key={i} className="pa-mobile-stat">
          <div className="pa-mobile-stat__num">{s.num}</div>
          <div className="pa-mobile-stat__lbl">{s.lbl}</div>
          <div className="pa-mobile-stat__sub">{s.sub}</div>
        </div>
      ))}
    </div>
    <div className="pa-mobile-section pa-mobile-section--brand">
      <Eyebrow>How we build companies</Eyebrow>
      <h2 className="pa-mobile-h2">Five steps. From signal to scale.</h2>
      {PA_DATA.build.map(s => (
        <div key={s.n} className="pa-mobile-build__step">
          <div className="pa-mobile-build__num">{s.n}</div>
          <h3 className="pa-mobile-build__title">{s.title}</h3>
          <p className="pa-mobile-build__text">{s.text}</p>
        </div>
      ))}
    </div>
    <div className="pa-mobile-section pa-mobile-section--almond">
      <Eyebrow>Portfolio</Eyebrow>
      <h2 className="pa-mobile-h2">Eight companies, translated.</h2>
      <div className="pa-mobile-portfolio">
        {PA_DATA.portfolio.map(p => (
          <div key={p.slug} className="pa-mobile-portfolio__cell">
            <img src={p.logo} alt={p.name} />
          </div>
        ))}
      </div>
    </div>
    <div className="pa-mobile-section" style={{background: 'var(--pa-primary)', color: '#fff', textAlign: 'center'}}>
      <div style={{font: '500 11px/1 var(--font-sans)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pa-secondary)', marginBottom: 16}}>A Proto Axiom programme</div>
      <h2 className="pa-mobile-h2">Challenger Summit</h2>
      <div style={{font: '600 56px/1 var(--font-sans)', letterSpacing: '-0.03em', color: '#fff', margin: '20px 0 8px'}}>A$500K</div>
      <div style={{font: '500 12px/1.4 var(--font-sans)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 24}}>Grant prizes · 2026</div>
      <PaButton variant="white" arrow>Programme details</PaButton>
    </div>
  </div>
);

Object.assign(window, { InvestmentPage, PortfolioDetailPage, TeamSection, TeamPage, HomeMobile });
