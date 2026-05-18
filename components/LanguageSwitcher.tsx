import Link from "next/link";
import type { Locale } from "@/lib/siteConfig";

type LanguageSwitcherProps = {
  locale: Locale;
  currentPath?: "/" | "/contact/";
};

export function LanguageSwitcher({ locale, currentPath = "/" }: LanguageSwitcherProps) {
  const suffix = currentPath === "/contact/" ? "contact/" : "";

  return (
    <div className="lang-toggle" aria-label="Language switcher">
      <Link className={locale === "zh" ? "active" : ""} href={`/zh/${suffix}`}>
        中
      </Link>
      <Link className={locale === "en" ? "active" : ""} href={`/en/${suffix}`}>
        EN
      </Link>
    </div>
  );
}
