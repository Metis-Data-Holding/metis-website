import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { siteConfig, type Locale } from "@/lib/siteConfig";
import type { SiteContent } from "@/lib/content";

type NavbarProps = {
  locale: Locale;
  t: SiteContent;
  currentPath?: "/" | "/contact/";
};

export function Navbar({ locale, t, currentPath = "/" }: NavbarProps) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="nav-brand" href={`/${locale}/`} style={{ color: "var(--ink)" }}>
          <Image
            className="logo-img"
            src={siteConfig.logoPath}
            alt="Metis"
            width={34}
            height={34}
            priority
          />
          <span>{siteConfig.brandWordmark}</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href={`/${locale}/#showcase`}>{t.nav.products}</Link>
          <Link href={`/${locale}/#showcase`}>{t.nav.showcase}</Link>
          <Link href={`/${locale}/#faq`}>{t.nav.faq}</Link>
          <Link href={`/${locale}/contact/`}>{t.nav.contact}</Link>
        </nav>
        <div className="nav-right">
          <LanguageSwitcher locale={locale} currentPath={currentPath} />
          <Link className="btn btn--sm btn--primary nav-contact" href={`/${locale}/contact/`}>
            {t.cta.contact} →
          </Link>
        </div>
      </div>
    </header>
  );
}
