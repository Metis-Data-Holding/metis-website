/* global React, window */

function MetisMark({ size = 28 }) {
  return (
    <img
      className="logo-img"
      src="assets/metis-symbol-dark.png"
      alt="Metis"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

function Nav({ t, lang, setLang }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="nav-left">
          <a className="nav-brand" href="#" style={{ color: "var(--ink)" }}>
            <MetisMark size={34} />
            <span>METIS</span>
          </a>
          <nav className="nav-links">
            <a href="#showcase">{t.nav.capabilities}</a>
            <a href="#showcase">{t.nav.products}</a>
            <a href="#company">{t.nav.company}</a>
          </nav>
        </div>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")}>中</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a className="btn btn--sm btn--primary" href={`mailto:${t.email}`}>{t.cta.contact} →</a>
        </div>
      </div>
    </header>
  );
}

function Ticker({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((s, i) => (
          <span className="ticker-item" key={i}>
            <span className="dot">◆</span> {s}
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { MetisMark, Nav, Ticker });
