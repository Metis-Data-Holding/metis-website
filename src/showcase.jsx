/* global React, window */

function DramaSlots() {
  const slots = [
    { id: "drama-feature", num: "01", label: "hero · feature", className: "feature" },
    { id: "drama-02",      num: "02", label: "still" },
    { id: "drama-03",      num: "03", label: "still" },
    { id: "drama-04",      num: "04", label: "still" },
    { id: "drama-05",      num: "05", label: "still · key" },
  ];
  return (
    <div className="drama-slots">
      {slots.map(s => (
        <div className={"drama-slot " + (s.className || "")} key={s.id}>
          <div className="drama-slot-inner" aria-hidden="true"></div>
          <span className="slot-tag"><span className="num">{s.num}</span> · {s.label}</span>
        </div>
      ))}
    </div>
  );
}

function GameCapabilities() {
  const cols = [
    {
      label: "AI plays games",
      icon: "▶",
      items: [
        { k: "Smart NPC",        v: "agent · LLM" },
        { k: "Auto-QA",          v: "scripted runs" },
        { k: "Player companion", v: "context-aware" },
        { k: "Live coach",       v: "real-time" },
      ],
    },
    {
      label: "AI builds games",
      icon: "◆",
      items: [
        { k: "Art assets",     v: "style-locked" },
        { k: "Design docs",    v: "GDD draft" },
        { k: "Engine codegen", v: "Unity · Godot" },
        { k: "Animation",      v: "frame seq." },
      ],
    },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      {cols.map((col, ci) => (
        <div key={ci} style={{
          background: "var(--bg-1)",
          border: "1px solid var(--line)",
          borderRadius: 4,
          padding: "14px 14px 10px",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            color: "var(--accent)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            paddingBottom: 10,
            marginBottom: 4,
            borderBottom: "1px dashed var(--line-strong)",
          }}>
            <span>{col.icon}</span>
            <span>{col.label}</span>
          </div>
          {col.items.map((it, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between",
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              padding: "6px 0",
              borderTop: i === 0 ? "none" : "1px dashed var(--line)",
            }}>
              <span style={{ color: "var(--ink-2)" }}>{it.k}</span>
              <span style={{ color: "var(--cyan)" }}>{it.v}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function ApiHubViz() {
  const models = [
    { name: "claude-sonnet-4.6", lat: 412, tok: 184, color: "var(--accent)" },
    { name: "gpt-5-turbo",       lat: 287, tok: 156, color: "var(--cyan)" },
    { name: "gemini-3-pro",      lat: 631, tok: 212, color: "var(--magenta)" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "10px 14px",
        background: "var(--bg)",
        border: "1px solid var(--line)",
        borderRadius: 4,
        fontFamily: "var(--font-mono)",
        fontSize: 11.5,
        color: "var(--ink-2)"
      }}>
        <span style={{ color: "var(--accent)" }}>›</span>
        <span style={{ flex: 1 }}>Compare: "Explain transformer attention in one paragraph."</span>
        <span style={{ color: "var(--ink-4)" }}>run · ↵</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {models.map((m, i) => (
          <div key={i} style={{
            background: "var(--bg-1)",
            border: "1px solid var(--line)",
            borderRadius: 4,
            padding: "12px 12px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            minHeight: 160,
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              color: m.color,
              letterSpacing: "0.02em"
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: m.color, display: "inline-block" }}></span>
              {m.name}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[92, 78, 86, 64, 88, 52, 70].map((w, j) => (
                <div key={j} style={{
                  height: 5,
                  width: `${w}%`,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 1,
                }}></div>
              ))}
            </div>
            <div style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--ink-3)",
              paddingTop: 6,
              borderTop: "1px dashed var(--line)",
            }}>
              <span>{m.lat}ms</span>
              <span>{m.tok} tok</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
        {["#cinematic", "#json-strict", "#code-review", "#sql-gen", "#one-shot"].map((tag, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "var(--ink-3)",
            padding: "3px 8px",
            border: "1px solid var(--line-strong)",
            borderRadius: 999,
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function Showcase({ t }) {
  return (
    <section id="showcase">
      <div className="container">
        <div className="caps-head">
          <div>
            <div className="section-label">{t.show.label}</div>
            <h2 className="section-title">{t.show.title}</h2>
          </div>
          <p className="section-sub">{t.show.sub}</p>
        </div>

        <div className="show-grid-3">
          <div className="show-card show-card--feature">
            <div className="show-card-head">
              <h3 className="show-card-title">{t.show.drama.title}</h3>
            </div>
            <div className="show-card-body">
              <p className="show-card-desc">{t.show.drama.desc}</p>
              <DramaSlots />
            </div>
            <div className="show-card-foot">
              <span>{t.show.drama.meta.join("  ·  ")}</span>
              <a className="link" href={`mailto:${t.email}`}>{t.show.drama.link} →</a>
            </div>
          </div>

          <div className="show-card">
            <div className="show-card-head">
              <h3 className="show-card-title">{t.show.api.title}</h3>
            </div>
            <div className="show-card-body">
              <p className="show-card-desc">{t.show.api.desc}</p>
              <ApiHubViz />
            </div>
            <div className="show-card-foot">
              <span>{t.show.api.meta.join("  ·  ")}</span>
              <a className="link" href={`mailto:${t.email}`}>{t.show.api.link} →</a>
            </div>
          </div>

          <div className="show-card">
            <div className="show-card-head">
              <h3 className="show-card-title">{t.show.game.title}</h3>
            </div>
            <div className="show-card-body">
              <p className="show-card-desc">{t.show.game.desc}</p>
              <GameCapabilities />
            </div>
            <div className="show-card-foot">
              <span>{t.show.game.meta.join("  ·  ")}</span>
              <a className="link" href={`mailto:${t.email}`}>{t.show.game.link} →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Showcase });
