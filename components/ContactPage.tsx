import type { SiteContent } from "@/lib/content";
import { siteConfig, type Locale } from "@/lib/siteConfig";

export function ContactPage({ t }: { locale: Locale; t: SiteContent }) {
  return (
    <section className="contact-page">
      <div className="container contact-grid">
        <div>
          <div className="section-label">Contact</div>
          <h1 className="section-title contact-title">{t.contact.title}</h1>
          <p className="section-sub">{t.contact.subtitle}</p>
          <div className="contact-email-block">
            <span>{t.contact.emailLabel}</span>
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </div>
        </div>
        <div className="contact-card">
          <h2>{siteConfig.companyLegalName}</h2>
          <address>
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
            <br />
            {siteConfig.address.line3}
          </address>
          <div className="contact-topic-list">
            {t.contact.sections.map((section) => (
              <span key={section}>{section}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
