/* global React, Terminal, window */

function Hero({ t, onCTA }) {
  return (
    <section className="hero" data-variant="terminal">
      <div className="hero-mark" aria-hidden="true">
        <img src="assets/metis-symbol-dark.png" alt="" />
      </div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot"></span>
              {t.hero.eyebrow}
            </div>
            <h1 className="hero-h1">
              {t.hero.h1_a} <span className="accent">{t.hero.h1_accent}</span>{t.hero.h1_b}
              <span className="mono">{t.hero.h1_mono}</span>
            </h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-ctas">
              <a className="btn btn--primary" href={`mailto:${t.email}`}>{t.email} →</a>
              <button className="btn btn--ghost" onClick={onCTA}>{t.cta.secondary}</button>
            </div>
            <div className="hero-meta">
              {t.hero.stats.map((s, i) => (
                <div className="hero-meta-item" key={i}>
                  <span className="v">{s.v}</span>
                  {s.k}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-term">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
