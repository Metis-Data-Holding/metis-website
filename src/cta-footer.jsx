/* global React, MetisMark, window */

function CTA({ t }) {
  return (
    <section className="cta" id="contact">
      <div className="cta-mark" aria-hidden="true">
        <img src="assets/metis-symbol-dark.png" alt="" />
      </div>
      <div className="container cta-inner">
        <h2>
          {t.cta_section.lead_a} <span className="accent">{t.cta_section.lead_accent}</span>{t.cta_section.lead_b}
        </h2>
        <p className="section-sub" style={{ margin: "0 auto 40px" }}>{t.cta_section.sub}</p>
        <div className="cta-ctas">
          <a className="btn btn--primary btn--lg" href={`mailto:${t.email}`}>{t.email} →</a>
        </div>
        <div className="cta-meta">
          <span>SUNTEC TOWER ONE · Singapore</span>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer" id="company">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="nav-brand" href="#" style={{ color: "var(--ink)" }}>
              <MetisMark size={44} />
              <span>METIS · SINGAPORE</span>
            </a>
            <p className="footer-brand-line">{t.footer.tagline}</p>
          </div>

          <div className="footer-col footer-col--contact">
            <h4>{t.footer.contact_h}</h4>
            <a className="footer-email" href={`mailto:${t.footer.contact_email}`}>
              {t.footer.contact_email}
            </a>
            <address className="footer-addr">
              {t.footer.contact_addr_l1}<br />
              {t.footer.contact_addr_l2}<br />
              {t.footer.contact_addr_l3}
            </address>
          </div>

          {t.footer.cols.map((col, i) => (
            <div className="footer-col" key={i}>
              <h4>{col.h}</h4>
              <ul>
                {col.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>{t.footer.legal[0]}</span>
          <span>{t.footer.legal[1]}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { CTA, Footer });
