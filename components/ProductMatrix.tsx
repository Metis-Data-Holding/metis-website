import type { CSSProperties } from "react";
import type { SiteContent } from "@/lib/content";
import { DramaGallery } from "./DramaGallery";

function GameCapabilities() {
  const cols = [
    {
      label: "AI plays games",
      icon: "▶",
      items: [
        { k: "Smart NPC", v: "agent · LLM" },
        { k: "Auto-QA", v: "scripted runs" },
        { k: "Player companion", v: "context-aware" },
        { k: "Live coach", v: "real-time" },
      ],
    },
    {
      label: "AI builds games",
      icon: "◆",
      items: [
        { k: "Art assets", v: "style-locked" },
        { k: "Design docs", v: "GDD draft" },
        { k: "Engine codegen", v: "Unity · Godot" },
        { k: "Animation", v: "frame seq." },
      ],
    },
  ];

  return (
    <div className="game-capabilities">
      {cols.map((col) => (
        <div className="game-capability" key={col.label}>
          <div className="game-capability-head">
            <span>{col.icon}</span>
            <span>{col.label}</span>
          </div>
          {col.items.map((item) => (
            <div className="game-capability-row" key={item.k}>
              <span>{item.k}</span>
              <span>{item.v}</span>
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
    { name: "gpt-5-turbo", lat: 287, tok: 156, color: "var(--cyan)" },
    { name: "gemini-3-pro", lat: 631, tok: 212, color: "var(--magenta)" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="api-prompt">
        <span style={{ color: "var(--accent)" }}>›</span>
        <span style={{ flex: 1 }}>Compare: &quot;Explain transformer attention in one paragraph.&quot;</span>
        <span style={{ color: "var(--ink-4)" }}>run · ↵</span>
      </div>

      <div className="api-model-grid">
        {models.map((model) => (
          <div className="api-model" key={model.name}>
            <div
              style={
                {
                  "--model-color": model.color,
                } as CSSProperties
              }
              className="api-model-name"
            >
              <span />
              {model.name}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[92, 78, 86, 64, 88, 52, 70].map((width, index) => (
                <div className="api-skeleton-line" key={index} style={{ width: `${width}%` }} />
              ))}
            </div>
            <div className="api-model-meta">
              <span>{model.lat}ms</span>
              <span>{model.tok} tok</span>
            </div>
          </div>
        ))}
      </div>

      <div className="api-tags">
        {["#cinematic", "#json-strict", "#code-review", "#sql-gen", "#one-shot"].map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export function ProductMatrix({ t }: { t: SiteContent }) {
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
              <DramaGallery slots={t.show.drama.slots} labels={t.show.drama.lightbox} />
            </div>
            <div className="show-card-foot">
              <span>{t.show.drama.meta.join("  ·  ")}</span>
              <a className="link" href={`mailto:${t.email}`}>
                {t.show.drama.link} →
              </a>
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
              <a className="link" href={`mailto:${t.email}`}>
                {t.show.api.link} →
              </a>
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
              <a className="link" href={`mailto:${t.email}`}>
                {t.show.game.link} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
