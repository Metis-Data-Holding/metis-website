import type { MetadataRoute } from "next";
import { alternateLanguages, localizedUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteConfig.domain}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: localizedUrl("en"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: alternateLanguages(),
      },
    },
    {
      url: localizedUrl("zh"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: alternateLanguages(),
      },
    },
    {
      url: localizedUrl("en", "contact/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: alternateLanguages("contact/"),
      },
    },
    {
      url: localizedUrl("zh", "contact/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: alternateLanguages("contact/"),
      },
    },
  ];
}
