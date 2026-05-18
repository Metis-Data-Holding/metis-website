"use client";

import { useEffect, useRef, useState } from "react";

type TerminalScriptItem =
  | { t: "prompt" | "out" | "dim" | "ok" | "warn" | "err"; text: string }
  | { t: "bar"; pct: number; label: string }
  | { t: "blank" };

type TerminalLine =
  | { t: "prompt" | "out" | "dim" | "ok" | "warn" | "err"; text: string }
  | { t: "bar"; pct: number; label: string }
  | { t: "blank" };

const TERMINAL_SCRIPT: TerminalScriptItem[] = [
  { t: "prompt", text: "metis init drama-pipeline" },
  { t: "out", text: "→ loading config from ./metis.toml" },
  { t: "dim", text: "→ resolving graph: script → scenes → render → mux" },
  { t: "ok", text: "✓ pipeline ready (4 stages · 12 nodes)" },
  { t: "blank" },
  { t: "prompt", text: 'metis run --script "ep_07.md" --style "ink-noir"' },
  { t: "dim", text: "[01/04] parse script ............ 1842 lines" },
  { t: "bar", pct: 100, label: "script.parse" },
  { t: "dim", text: "[02/04] generate scenes ........ 248 shots" },
  { t: "bar", pct: 100, label: "scenes.gen" },
  { t: "dim", text: "[03/04] render with LoRA ........ char_v3.safetensors" },
  { t: "bar", pct: 100, label: "render.run" },
  { t: "dim", text: "[04/04] mux + lip-sync ........... 60fps · 9:16" },
  { t: "bar", pct: 100, label: "mux.compose" },
  { t: "blank" },
  { t: "ok", text: "✓ episode_07.mp4 — 12m 32s · 248 shots · 7.3s/shot" },
  { t: "out", text: "  manifest.json written → ./out/ep_07/" },
  { t: "blank" },
  { t: "prompt", text: "metis hub compare --prompt prompts/attention.md" },
  { t: "dim", text: "→ fan out to 3 models · side-by-side" },
  { t: "bar", pct: 100, label: "hub.dispatch" },
  { t: "ok", text: "✓ claude-sonnet · gpt-5 · gemini-3   diff ready" },
  { t: "blank" },
  { t: "prompt", text: "" },
];

export function Terminal({ active = true }: { active?: boolean }) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!active) return;
    let idx = 0;
    let mounted = true;

    function tick() {
      if (!mounted) return;
      if (idx >= TERMINAL_SCRIPT.length) {
        timerRef.current = setTimeout(() => {
          if (!mounted) return;
          setLines([]);
          idx = 0;
          tick();
        }, 2400);
        return;
      }

      const item = TERMINAL_SCRIPT[idx];
      idx += 1;

      if (item.t === "bar") {
        let p = 0;
        setLines((prev) => [...prev, { t: "bar", label: item.label, pct: 0 }]);
        const interval = window.setInterval(() => {
          p += Math.random() * 18 + 6;
          if (p >= 100) p = 100;
          setLines((prev) => {
            const next = [...prev];
            next[next.length - 1] = { t: "bar", label: item.label, pct: Math.round(p) };
            return next;
          });
          if (p >= 100) {
            window.clearInterval(interval);
            timerRef.current = setTimeout(tick, 240);
          }
        }, 90);
        return;
      }

      setLines((prev) => [...prev, item]);
      const delay = item.t === "prompt" ? 700 : item.t === "blank" ? 180 : item.t === "ok" ? 360 : 200;
      timerRef.current = setTimeout(tick, delay);
    }

    tick();
    return () => {
      mounted = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="term">
      <div className="term-bar">
        <span className="term-dot r" />
        <span className="term-dot y" />
        <span className="term-dot g" />
        <span className="term-title">metis@sg-prod-01 — ~/pipelines/drama</span>
        <div className="term-tabs">
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-3)" }}>tabs:</span>
          <span className="term-tab active">drama.log</span>
          <span className="term-tab">game.log</span>
          <span className="term-tab">hub.log</span>
        </div>
      </div>
      <div className="term-body" ref={bodyRef}>
        {lines.map((line, index) => {
          if (line.t === "blank") return <div key={index} className="term-line">&nbsp;</div>;
          if (line.t === "prompt") {
            const isLast = index === lines.length - 1;
            return (
              <div key={index} className="term-line">
                <span className="term-prompt" />
                <span className="term-cmd">{line.text}</span>
                {isLast && <span className="term-cursor" />}
              </div>
            );
          }
          if (line.t === "bar") {
            return (
              <div key={index} className="term-row">
                <span className="lbl">{line.label}</span>
                <span className="track">
                  <span className="fill" style={{ width: `${line.pct}%` }} />
                </span>
                <span className="pct">{line.pct}%</span>
              </div>
            );
          }
          const cls =
            line.t === "ok"
              ? "term-ok"
              : line.t === "warn"
                ? "term-warn"
                : line.t === "err"
                  ? "term-err"
                  : line.t === "dim"
                    ? "term-dim"
                    : "term-out";
          return (
            <div key={index} className={`term-line ${cls}`}>
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
