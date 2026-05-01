/* Proto Axiom — primitives + shell (nav/footer) */

const Eyebrow = ({ children, className = '' }) => (
  <div className={"pa-eyebrow " + className}>{children}</div>
);

const PaButton = ({ variant = 'primary', arrow = false, children, onClick, href }) => {
  const cls = `pa-btn pa-btn--${variant}`;
  const inner = (<>{children}{arrow && <span className="pa-arrow">→</span>}</>);
  if (href) return <a className={cls} href={href} onClick={onClick}>{inner}</a>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
};

const PaLink = ({ children, onClick, href = '#' }) => (
  <a className="pa-link" href={href} onClick={(e) => { e.preventDefault(); onClick && onClick(); }}>
    {children} <span style={{marginLeft: 6}}>→</span>
  </a>
);

const PaNav = ({ active = 'home', onNav, dark = false }) => {
  const [openInits, setOpenInits] = React.useState(false);
  const items = [
    ['home', 'Home'],
    ['investment', 'Investment'],
    ['portfolio', 'Portfolio'],
    ['team', 'Team'],
    ['news', 'News'],
  ];
  const initsActive = active === 'summit' || active === 'whf' || active === 'initiatives';
  return (
    <nav className="pa-nav" style={dark ? {background: 'rgba(36,60,87,0.92)', borderBottomColor: 'rgba(255,255,255,0.14)'} : null}>
      <div className="pa-nav__inner">
        <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('home'); }}>
          <img className="pa-nav__logo" src={dark ? "assets/logos/proto-axiom-logo_full-white-helix-blue.svg" : "assets/logos/proto-axiom-logo_full-standard.svg"} alt="Proto Axiom" />
        </a>
        <div className="pa-nav__links">
          {items.map(([k, label]) => (
            <button key={k}
              className={"pa-nav__link" + (active === k ? ' is-active' : '')}
              style={dark ? {color: active === k ? '#fff' : 'rgba(255,255,255,0.78)'} : null}
              onClick={() => onNav && onNav(k)}>{label}</button>
          ))}
          <div className="pa-nav__group"
            onMouseEnter={() => setOpenInits(true)}
            onMouseLeave={() => setOpenInits(false)}>
            <button
              className={"pa-nav__link pa-nav__link--has-menu" + (initsActive ? ' is-active' : '')}
              style={dark ? {color: initsActive ? '#fff' : 'rgba(255,255,255,0.78)'} : null}
              onClick={() => onNav && onNav('initiatives')}>
              Initiatives
              <span className="pa-nav__caret" aria-hidden>▾</span>
            </button>
            {openInits && (
              <div className={"pa-nav__menu" + (dark ? ' pa-nav__menu--dark' : '')}>
                <button className="pa-nav__menu-item" onClick={() => { setOpenInits(false); onNav && onNav('summit'); }}>
                  <span className="pa-nav__menu-name">Challenger Summit</span>
                  <span className="pa-nav__menu-desc">Annual pitch programme · A$500K</span>
                </button>
                <button className="pa-nav__menu-item" onClick={() => { setOpenInits(false); onNav && onNav('whf'); }}>
                  <span className="pa-nav__menu-name">Women's Health Foundry</span>
                  <span className="pa-nav__menu-desc">Founders programme · sourcing</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <PaButton variant={dark ? 'white' : 'primary'} onClick={() => onNav && onNav('contact')}>Get in touch</PaButton>
      </div>
    </nav>
  );
};

const PaFooter = ({ onNav }) => (
  <footer className="pa-footer">
    <img className="pa-footer__texture" src="assets/textures/textures_white-on-blue.svg" alt="" />
    <div className="pa-wrap">
      <div className="pa-footer__grid">
        <div>
          <img className="pa-footer__logo" src="assets/logos/proto-axiom-logo_full-white-helix-blue.svg" alt="Proto Axiom" />
          <div className="pa-footer__addr">
            Suite 303, 80 Mount Street<br />
            North Sydney NSW 2060<br />
            Australia<br /><br />
            info@protoaxiom.com<br />
            +61 2 [placeholder]
          </div>
        </div>
        <div>
          <h5 className="pa-footer__h">Company</h5>
          <a className="pa-footer__link" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('home'); }}>Home</a>
          <a className="pa-footer__link" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('team'); }}>Team</a>
          <a className="pa-footer__link" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('contact'); }}>Contact</a>
        </div>
        <div>
          <h5 className="pa-footer__h">Investment</h5>
          <a className="pa-footer__link" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('investment'); }}>Investment process</a>
          <a className="pa-footer__link" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('portfolio'); }}>Portfolio</a>
        </div>
        <div>
          <h5 className="pa-footer__h">Updates</h5>
          <a className="pa-footer__link" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('news'); }}>News</a>
        </div>
        <div>
          <h5 className="pa-footer__h">Initiatives</h5>
          <a className="pa-footer__link" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('summit'); }}>Challenger Summit</a>
          <a className="pa-footer__link" href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('whf'); }}>Women's Health Foundry</a>
        </div>
      </div>
      <div className="pa-footer__bottom">
        <span>© Proto Axiom 2026</span>
        <span>ABN [placeholder] · Australia</span>
      </div>
    </div>
  </footer>
);

/* Spec annotation overlay — toggleable */
const SpecOverlay = ({ specs, show }) => {
  if (!show) return null;
  return (
    <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>
      {specs.map((s, i) => (
        <div key={i}
          className={"pa-anno-pill" + (s.accent ? ' pa-anno-pill--accent' : '')}
          style={{top: s.top, left: s.left, right: s.right, bottom: s.bottom}}>
          {s.label}
        </div>
      ))}
    </div>
  );
};

Object.assign(window, { Eyebrow, PaButton, PaLink, PaNav, PaFooter, SpecOverlay });
