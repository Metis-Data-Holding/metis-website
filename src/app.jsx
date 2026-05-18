/* global React, ReactDOM, I18N, Nav, Ticker, Hero, Showcase, CTA, Footer */
const { useState } = React;

function App() {
  const [lang, setLang] = useState("en");

  const i18n = I18N[lang];

  function onCTA() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <React.Fragment>
      <div className="bg-glow"></div>
      <div className="bg-grid"></div>

      <Nav t={i18n} lang={lang} setLang={setLang} />

      <main>
        <Hero t={i18n} onCTA={onCTA} />
        <Ticker items={i18n.ticker} />
        <Showcase t={i18n} />
        <CTA t={i18n} />
      </main>

      <Footer t={i18n} />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
