import Image from "next/image";
import Link from "next/link";
import { Terminal } from "./Terminal";
import type { SiteContent } from "@/lib/content";
import { siteConfig, type Locale } from "@/lib/siteConfig";

type HeroProps = {
  locale: Locale;
  t: SiteContent;
};

export function Hero({ locale, t }: HeroProps) {
  return (
    <section className="hero" data-variant="terminal">
      <div className="hero-mark" aria-hidden="true">
        <Image src={siteConfig.logoPath} alt="" width={820} height={820} priority />
      </div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              {t.hero.eyebrow}
            </div>
            <h1 className="hero-h1">
              {t.hero.h1_a} <span className="accent">{t.hero.h1_accent}</span>
              {t.hero.h1_b}
              <span className="mono">{t.hero.h1_mono}</span>
            </h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-ctas">
              <a className="btn btn--primary" href={`mailto:${t.email}`}>
                {t.email} →
              </a>
              <Link className="btn btn--ghost" href={`/${locale}/#showcase`}>
                {t.cta.secondary}
              </Link>
            </div>
            <div className="hero-meta">
              {t.hero.stats.map((s) => (
                <div className="hero-meta-item" key={s.k}>
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
