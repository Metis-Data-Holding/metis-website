import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { ContactPage } from "@/components/ContactPage";
import { Footer } from "@/components/Footer";
import { JsonLd, organizationJsonLd, webpageJsonLd, websiteJsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
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
  return metadataFor(locale, "contact/", "contact");
}

export default async function ContactRoute({ params }: PageProps) {
  const { locale: value } = await params;
  if (!isLocale(value)) notFound();

  const locale: Locale = value;
  const t = content[locale];

  return (
    <>
      <JsonLd data={[organizationJsonLd(locale), websiteJsonLd(locale), webpageJsonLd(locale, "contact/")]} />
      <Background />
      <Navbar locale={locale} t={t} currentPath="/contact/" />
      <main>
        <ContactPage locale={locale} t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
