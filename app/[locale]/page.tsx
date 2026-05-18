import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JsonLd, faqPageJsonLd, organizationJsonLd, websiteJsonLd, webpageJsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { ProductMatrix } from "@/components/ProductMatrix";
import { Ticker } from "@/components/Ticker";
import { content } from "@/lib/content";
import { isLocale, siteConfig, type Locale } from "@/lib/siteConfig";
import { metadataFor } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return metadataFor(locale, "", "home");
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();

  const locale: Locale = value;
  const t = content[locale];

  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(locale),
          websiteJsonLd(locale),
          webpageJsonLd(locale),
          faqPageJsonLd(t, locale),
        ]}
      />
      <Background />
      <Navbar locale={locale} t={t} currentPath="/" />
      <main>
        <Hero locale={locale} t={t} />
        <Ticker items={t.ticker} />
        <ProductMatrix t={t} />
        <FAQ t={t} />
        <FinalCTA locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
