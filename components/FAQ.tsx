import type { SiteContent } from "@/lib/content";

export function FAQ({ t }: { t: SiteContent }) {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="caps-head">
          <div>
            <div className="section-label">{t.faq.label}</div>
            <h2 className="section-title">{t.faq.title}</h2>
          </div>
        </div>
        <div className="faq-grid">
          {t.faq.items.map((item) => (
            <article className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
