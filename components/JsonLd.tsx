import type { SiteContent } from "@/lib/content";
import { siteConfig, type Locale } from "@/lib/siteConfig";
import { absoluteUrl, localizedUrl } from "@/lib/seo";

type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function organizationJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.companyLegalName,
    url: siteConfig.domain,
    logo: absoluteUrl(siteConfig.logoPath),
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Singapore",
      postalCode: "038987",
      addressCountry: "SG",
    },
    description:
      locale === "zh"
        ? "Metis 是一家注册在新加坡的 AIGC 公司，当前围绕 AI 短剧、AI 游戏和 AI 开发者工具构建产品矩阵。"
        : "Metis is a Singapore-registered AIGC company building products across AI short drama, AI games, and AI developer tooling.",
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
  };
}

export function faqPageJsonLd(t: SiteContent, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function webpageJsonLd(locale: Locale, path = "") {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: localizedUrl(locale, path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    inLanguage: locale === "zh" ? "zh-CN" : "en",
  };
}
