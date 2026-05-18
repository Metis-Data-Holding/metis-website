import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@/lib/content";
import { siteConfig, type Locale } from "@/lib/siteConfig";

export function FinalCTA({ locale, t }: { locale: Locale; t: SiteContent }) {
  return (
    <section className="cta" id="contact">
      <div className="cta-mark" aria-hidden="true">
        <Image src={siteConfig.logoPath} alt="" width={820} height={820} />
      </div>
      <div className="container cta-inner">
        <h2>
          {t.cta_section.lead_a} <span className="accent">{t.cta_section.lead_accent}</span>
          {t.cta_section.lead_b}
        </h2>
        <p className="section-sub" style={{ margin: "0 auto 40px" }}>
          {t.cta_section.sub}
        </p>
        <div className="cta-ctas">
          <a className="btn btn--primary btn--lg" href={`mailto:${t.email}`}>
            {t.email} →
          </a>
          <Link className="btn btn--ghost btn--lg" href={`/${locale}/contact/`}>
            {t.cta.contact}
          </Link>
        </div>
        <div className="cta-meta">
          <span>{siteConfig.address.short}</span>
        </div>
      </div>
    </section>
  );
}
