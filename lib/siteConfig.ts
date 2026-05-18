export const siteConfig = {
  name: "Metis",
  brandWordmark: "METIS",
  domain: "https://metisdata.ai",
  companyLegalName: "METIS DATA HOLDING PTE. LTD.",
  contactEmail: "tech@metisdata.ai",
  logoPath: "/metis-symbol-dark.png",
  waitlistFormUrl: process.env.NEXT_PUBLIC_WAITLIST_FORM_URL || "",
  contactFormUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "",
  defaultLocale: "en" as const,
  locales: ["en", "zh"] as const,
  address: {
    line1: "7 Temasek Blvd, #40-01B",
    line2: "SUNTEC TOWER ONE",
    line3: "Singapore 038987",
    short: "SUNTEC TOWER ONE · Singapore",
  },
};

export type Locale = (typeof siteConfig.locales)[number];

export function isLocale(value: string): value is Locale {
  return siteConfig.locales.includes(value as Locale);
}
