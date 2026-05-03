/* Proto Axiom — Portfolio Detail components (single-file React)
 * Renders one company detail page. Pass `slug` to pick.
 *
 * Public-safe: no $ amounts, no equity %, no internal gate codes.
 * Reads from window.PA_PORTFOLIO (data.js).
 */

const NAV_ITEMS = [
  ['home', 'Home'],
  ['process', 'Investment'],
  ['team', 'Team'],
  ['news', 'News'],
  ['summit', 'Challenger Summit']
];

const SiteNav = () => (
  <nav className="pa-nav">
    <div className="pa-nav__inner">
      <a href="#" aria-label="Proto Axiom — home">
        <img className="pa-nav__logo" src="assets/logos/proto-axiom-logo_full-standard.svg" alt="Proto Axiom" />
      </a>
      <div className="pa-nav__links">
        {NAV_ITEMS.map(([k, label]) => (
          <button key={k} className="pa-nav__link">{label}</button>
        ))}
      </div>
      <button className="pa-nav__cta">Contact</button>
    </div>
  </nav>
);

const SiteFooter = () => (
  <footer className="pa-footer">
    <div className="pa-container">
      <div className="pa-footer__grid">
        <div>
          <img className="pa-footer__logo" src="assets/logos/proto-axiom-logo_full-white-helix-blue.svg" alt="Proto Axiom" />
          <div className="pa-footer__addr">
            Suite 303, 80 Mount Street<br />
            North Sydney NSW 2060<br />
            Australia<br /><br />
            info@protoaxiom.com
          </div>
        </div>
        <div>
          <h5>Company</h5>
          <a>Home</a>
          <a>Team</a>
        </div>
        <div>
          <h5>Investment</h5>
          <a>Investment Process</a>
          <a>Portfolio</a>
        </div>
        <div>
          <h5>Updates</h5>
          <a>News</a>
          <a>Challenger Summit</a>
        </div>
      </div>
      <div className="pa-footer__bottom">
        <span>© Proto Axiom 2026</span>
        <span>ABN · Australia</span>
      </div>
    </div>
  </footer>
);

/* ---------- Detail page ---------- */
const PortfolioDetail = ({ slug }) => {
  const all = window.PA_PORTFOLIO;
  const idx = all.findIndex(x => x.slug === slug);
  const c = all[idx];
  if (!c) return null;
  const prev = all[(idx - 1 + all.length) % all.length];
  const next = all[(idx + 1) % all.length];
  const isVenture = c.relationship === 'venture-stake';

  return (
    <div>
      <SiteNav />

      {/* Breadcrumb */}
      <div className="pa-pdetail__breadcrumb">
        <div className="pa-container">
          <a href="#">Home</a>
          <span className="sep">/</span>
          <a href="#">Portfolio</a>
          <span className="sep">/</span>
          <span className="current">{c.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="pa-pdetail__hero">
        <div className="pa-container">
          <div className="pa-pdetail__hero-grid">
            <div>
              <div className={`pa-pdetail__badge${isVenture ? ' pa-pdetail__badge--venture' : ''}`}>
                <span className="dot" />
                {isVenture ? 'Venture-stage investment' : 'Created with Proto Axiom'}
              </div>

              <img className="pa-pdetail__logo" src={c.logo} alt={`${c.name} logo`} />

              <h1 className="pa-pdetail__name">{c.name}</h1>
              <p className="pa-pdetail__tagline">{c.tagline}</p>

              <div className="pa-pdetail__taxonomy">
                <span className="pa-pdetail__chip">{c.sector}</span>
                <span className="pa-pdetail__chip">{c.modality}</span>
              </div>

              <div className="pa-pdetail__cta-row">
                <a className="pa-pdetail__cta" href={c.website} target="_blank" rel="noopener noreferrer">
                  Visit {c.name.split(' ')[0].toLowerCase()} site
                </a>
                {c.trialRegistry && (
                  <a className="pa-pdetail__cta pa-pdetail__cta--ghost" href={c.trialRegistry} target="_blank" rel="noopener noreferrer">
                    Trial registry (ANZCTR)
                  </a>
                )}
              </div>
            </div>

            <aside className="pa-pdetail__glance">
              <div className="pa-pdetail__glance-eyebrow">At a glance</div>
              <dl>
                <div>
                  <dt>Sector</dt>
                  <dd>{c.sector} · {c.modality}</dd>
                </div>
                <div>
                  <dt>Stage</dt>
                  <dd>{c.stage}</dd>
                </div>
                <div>
                  <dt>Origin institution</dt>
                  <dd>{c.origin}</dd>
                </div>
                <div>
                  <dt>Year founded</dt>
                  <dd>{c.yearFounded}</dd>
                </div>
                <div>
                  <dt>Relationship to Proto Axiom</dt>
                  <dd>{isVenture ? 'Venture-stage investment' : 'Created with Proto Axiom as founding investor'}</dd>
                </div>
                <div>
                  <dt>Website</dt>
                  <dd><a href={c.website} target="_blank" rel="noopener noreferrer">{c.website.replace(/^https?:\/\//, '')}</a></dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Hero photography band */}
      {c.heroImage ? (
        <div className="pa-pdetail__hero-image">
          <img src={c.heroImage} alt="" />
          {c.heroImageCaption && <div className="caption">{c.heroImageCaption}</div>}
        </div>
      ) : (
        <div className="pa-pdetail__hero-image pa-pdetail__hero-image--placeholder">
          <div className="caption">{c.heroImageCaption || '[ Hero image to come ]'}</div>
        </div>
      )}

      {/* Narrative */}
      <section className="pa-pdetail__section">
        <div className="pa-container">
          <div className="pa-pdetail__narrative-grid">
            <div>
              <div className="pa-pdetail__section-eyebrow">The science · The story</div>
              <h2 className="pa-pdetail__section-title">
                {isVenture ? 'A venture-stage stake in an established Australian programme.' : 'How the company was formed, and what it is building.'}
              </h2>
              <div className="pa-pdetail__narrative-body">
                {c.narrative.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <dl className="pa-pdetail__pull">
              <dt>Founded</dt>
              <dd>{c.yearFounded}</dd>
              <dt>Origin</dt>
              <dd>{c.origin}</dd>
              <dt>Sector</dt>
              <dd>{c.sector}</dd>
              <dt>Modality</dt>
              <dd>{c.modality}</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="pa-pdetail__section pa-pdetail__section--alt">
        <div className="pa-container">
          <div className="pa-pdetail__section-eyebrow">Leadership</div>
          <h2 className="pa-pdetail__section-title">
            {isVenture ? 'Independently led; see the company website for the full team.' : 'Founders and key team.'}
          </h2>
          <div className="pa-pdetail__leadership">
            {c.leadership.map((p, i) => (
              <div key={i} className="pa-pdetail__leader">
                {p.photo
                  ? <div className="pa-pdetail__leader-photo"><img src={p.photo} alt={p.name} /></div>
                  : <div className="pa-pdetail__leader-photo pa-pdetail__leader-photo--placeholder" />
                }
                <div className="pa-pdetail__leader-name">{p.name}</div>
                {p.title && <div className="pa-pdetail__leader-title">{p.title}</div>}
                {p.institution && <div className="pa-pdetail__leader-inst">{p.institution}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme status */}
      <section className="pa-pdetail__section">
        <div className="pa-container">
          <div className="pa-pdetail__section-eyebrow">Programme status</div>
          <h2 className="pa-pdetail__section-title">Where the programme is now, and what comes next.</h2>
          <dl className="pa-pdetail__programme">
            <div>
              <dt>Now</dt>
              <dd>{c.programmeStatus.now}</dd>
            </div>
            <div>
              <dt>Next milestone</dt>
              <dd>{c.programmeStatus.next}</dd>
            </div>
          </dl>
          {c.programmeStatus.partners && c.programmeStatus.partners.length > 0 && (
            <div className="pa-pdetail__programme-partners">
              <span className="label">Partners & sites</span>
              {c.programmeStatus.partners.map((p, i) => <span key={i} className="partner">{p}</span>)}
            </div>
          )}
        </div>
      </section>

      {/* News */}
      <section className="pa-pdetail__section pa-pdetail__section--alt">
        <div className="pa-container">
          <div className="pa-pdetail__section-eyebrow">In the press</div>
          <h2 className="pa-pdetail__section-title">Recent news.</h2>
          <div className="pa-pdetail__news">
            {c.news.length === 0 ? (
              <div className="pa-pdetail__news-empty">[ Press mentions to be added as they publish. ]</div>
            ) : c.news.map((n, i) => (
              <a key={i} href={n.url} className="pa-pdetail__news-item">
                <div className="pa-pdetail__news-date">{n.date}</div>
                <div className="pa-pdetail__news-headline">{n.headline}</div>
                <div className="pa-pdetail__news-outlet">{n.outlet}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="pa-container">
        <nav className="pa-pdetail__pager" aria-label="Portfolio navigation">
          <a href={`#${prev.slug}`} className="prev">
            <span className="label">Previous company</span>
            <span className="name">{prev.name}</span>
          </a>
          <div className="index">
            <span className="label">Portfolio · {idx + 1} of {all.length}</span>
            <div className="pa-pdetail__pager-dots">
              {all.map((p, i) => (
                <button key={p.slug}
                  className={`pa-pdetail__pager-dot${i === idx ? ' is-active' : ''}`}
                  aria-label={`Go to ${p.name}`}
                  title={p.name}
                />
              ))}
            </div>
          </div>
          <a href={`#${next.slug}`} className="next">
            <span className="label">Next company</span>
            <span className="name">{next.name}</span>
          </a>
        </nav>
      </div>

      <SiteFooter />
    </div>
  );
};

Object.assign(window, { PortfolioDetail, SiteNav, SiteFooter });
