import type { Metadata } from "next";
import { siteConfig, type Locale } from "./siteConfig";

type PageKey = "home" | "contact" | "root";

const titles: Record<PageKey, Record<Locale, string>> = {
  root: {
    en: "Metis | AI Products for Creators, Learners, and Teams",
    zh: "Metis | 面向创作者、学习者与组织的 AI 产品",
  },
  home: {
    en: "Metis | AI Products for Creators, Learners, and Teams",
    zh: "Metis | 面向创作者、学习者与组织的 AI 产品",
  },
  contact: {
    en: "Contact Metis | AI Product Partnerships",
    zh: "联系 Metis | AI 产品与合作咨询",
  },
};

const descriptions: Record<PageKey, Record<Locale, string>> = {
  root: {
    en: "Metis builds AIGC products across AI short drama, AI games, and AI developer tooling.",
    zh: "Metis 正在构建覆盖 AI 短剧、AI 游戏和 AI 开发者工具的 AIGC 产品矩阵。",
  },
  home: {
    en: "Metis builds AIGC products across AI short drama, AI games, and AI developer tooling.",
    zh: "Metis 正在构建覆盖 AI 短剧、AI 游戏和 AI 开发者工具的 AIGC 产品矩阵。",
  },
  contact: {
    en: "Contact Metis for AI content creation, model exploration, university partnerships, enterprise collaboration, and developer opportunities.",
    zh: "联系 Metis，了解 AI 内容创作、模型体验、高校合作、企业合作和开发者合作机会。",
  },
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
};

export function absoluteUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return normalizedPath ? `${siteConfig.domain}/${normalizedPath}` : siteConfig.domain;
}

export function localizedUrl(locale: Locale, path = "") {
  return absoluteUrl(`${locale}/${path}`);
}

export function alternateLanguages(path = "") {
  return {
    en: localizedUrl("en", path),
    zh: localizedUrl("zh", path),
    "x-default": localizedUrl(siteConfig.defaultLocale, path),
  };
}

export function metadataFor(locale: Locale, path = "", page: PageKey = "home"): Metadata {
  const url = localizedUrl(locale, path);
  const title = titles[page][locale];
  const description = descriptions[page][locale];

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: alternateLanguages(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: openGraphLocales[locale],
      alternateLocale: siteConfig.locales
        .filter((item) => item !== locale)
        .map((item) => openGraphLocales[item]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
