import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@/lib/content";
import { siteConfig, type Locale } from "@/lib/siteConfig";

export function Footer({ locale, t }: { locale: Locale; t: SiteContent }) {
  return (
    <footer className="footer" id="company">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="nav-brand" href={`/${locale}/`} style={{ color: "var(--ink)" }}>
              <Image className="logo-img" src={siteConfig.logoPath} alt="Metis" width={44} height={44} />
              <span>METIS · SINGAPORE</span>
            </Link>
            <p className="footer-brand-line">{t.footer.tagline}</p>
          </div>

          <div className="footer-col footer-col--contact">
            <h4>{t.footer.contact_h}</h4>
            <a className="footer-email" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            <address className="footer-addr">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.line3}
            </address>
          </div>

          {t.footer.cols.map((col) => (
            <div className="footer-col" key={col.h}>
              <h4>{col.h}</h4>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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
