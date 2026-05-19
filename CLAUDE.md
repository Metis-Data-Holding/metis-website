# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install deps
npm run dev        # local dev server → http://localhost:3000
npm run build      # static export → out/
```

There is **no lint, no test, no typecheck script** in `package.json`. The TypeScript compiler runs only as part of `next build`. Treat `npm run build` as the gate that must pass before any change is considered done.

Locally validated routes:

```
http://localhost:3000/        # static page, client-redirects to /en/
http://localhost:3000/en/
http://localhost:3000/zh/
http://localhost:3000/en/contact/
http://localhost:3000/zh/contact/
```

## Architecture

### Stack and rendering model

Next.js 15 App Router + React 19 + TypeScript strict, configured for **static export** (`next.config.ts` sets `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`). Cloudflare Pages serves the resulting `out/` directory — there is no Next.js server runtime in production.

This constraint is **hard**: do not add API routes, middleware, server-side redirects, or anything that requires a Node runtime. The root `/` is a static page with a client-side redirect to `/en/` ([components/RootRedirect.tsx](components/RootRedirect.tsx)) precisely because static export cannot perform a server redirect.

### Routing and i18n

Multilingual routes are produced by a single dynamic segment `app/[locale]/`, with locales declared in `siteConfig.locales` (`["en", "zh"]`) and materialized via `generateStaticParams()` on each page. Two pages exist: home (`app/[locale]/page.tsx`) and contact (`app/[locale]/contact/page.tsx`). Both compose presentational components from `components/` with content from `lib/content.ts`.

There is no client-side i18n state — language is encoded in the URL.

### The three-file content/config seam

All editable content and brand info flow through three files. Components must never hardcode these values.

| File | Owns |
|------|------|
| `lib/siteConfig.ts` | Brand name, domain, contact email, company legal name, address, logo path, locale list, optional form URLs |
| `lib/content.ts` | All visible copy (hero, ticker, product cards, FAQ, CTA, footer, contact page) — keyed by locale, mirror structure across `en` and `zh` |
| `lib/seo.ts` | `metadataFor(locale, path, page)`, `localizedUrl`, `alternateLanguages` (incl. `x-default`) — used by every page's `generateMetadata` |

When adding a string, add both `en` and `zh`. When adding a brand fact, put it in `siteConfig`. When adding a page, give it a `metadataFor` entry.

### SEO/AEO surface area

A change to copy or page structure typically requires touching multiple files because the structured data must stay consistent with what users see:

- `app/sitemap.ts` and `app/robots.ts` — generate `/sitemap.xml` and `/robots.txt` at build time
- `components/JsonLd.tsx` — `organizationJsonLd`, `websiteJsonLd`, `webpageJsonLd`, `faqPageJsonLd` (the FAQ JSON-LD is derived directly from `content.faq.items`, so editing FAQ copy automatically updates structured data — but adding a new FAQ requires no extra wiring)
- `lib/seo.ts` — page-level `<title>` / description tables and canonical/hreflang generation

### Styling

Visual system lives in `app/globals.css` as a hand-written design system: CSS variables for color (`--bg`, `--accent`, `--ink-*`, …), fonts (Space Grotesk / JetBrains Mono / Noto Sans SC / Inter loaded via Google Fonts in `app/layout.tsx`), grid background, glow, terminal styling, product card layout. Components apply these via plain `className`s (`.hero`, `.term`, `.show-card`, …).

Tailwind v4 is installed and configured via `@tailwindcss/postcss`, but components rarely use utilities. **Prefer reusing existing CSS variables and class names over introducing Tailwind utilities** — the design system was ported from a Claude Design prototype and matching its tokens is important for visual consistency.

### Terminal component

[components/Terminal.tsx](components/Terminal.tsx) is a `"use client"` component that animates a scripted CLI session (`TERMINAL_SCRIPT`). It is the centerpiece of the Hero visual and may not be removed (see `DESIGN.md` §7–8). The script can be edited but the visual chrome (tabs, dots, progress bars) and animation timing should be preserved.

## Hard project conventions

These are enforced by `AGENTS.md` and `DESIGN.md`; brief summary:

- **Don't redesign the page.** The current live site is the visual baseline. Dark, terminal-inspired, orange-accented. No light SaaS templates.
- **Don't introduce large UI / animation libraries** (Framer Motion, MUI, shadcn, etc.). Keep the dependency surface minimal.
- **Don't add server features** (API routes, middleware, ISR). Static export is the deployment contract.
- **Production branch is `main`**, auto-deployed to Cloudflare Pages project `webpage1` → `metisdata.ai`.
- **Branch naming for new work**: `feat/yyyyMMdd-feat-name`. Commit messages in Chinese, concise.
- **Never commit** `node_modules/`, `.next/`, `out/`, `.DS_Store`, prototype scratch files.

## Verification before declaring a change done

1. `npm run build` succeeds and produces `out/`
2. `out/` contains `/en/`, `/zh/`, `/en/contact/`, `/zh/contact/`, `/sitemap.xml`, `/robots.txt`
3. If layout/styles changed: run `npm run dev` and manually check both locales, both pages, on desktop and mobile widths. Specifically watch for horizontal scroll on mobile, Hero title overflow, and Terminal panel blowing out the viewport (these are the recurring regressions).
4. If FAQ content changed: confirm the FAQ JSON-LD on the rendered page matches the visible questions (it's derived from the same source, but worth a glance).

## Where to look for full context

This project carries unusually detailed prose docs — when in doubt, read them rather than guessing:

- [README.md](README.md) — project structure, dev/build/deploy basics
- [AGENTS.md](AGENTS.md) — full agent contract: must-read before edits, must-not list, validation steps
- [DESIGN.md](DESIGN.md) — visual constraints and prohibitions, by section (Hero / Terminal / cards / mobile / etc.)
- [DEPLOY.md](DEPLOY.md) — Cloudflare Pages config, environment variables, route verification checklist
- [SPEC.md](SPEC.md) — full product/route/SEO/AEO/deployment spec (long; the source of truth when other docs disagree)
- [metis-landing-page/](metis-landing-page/) — the original Claude Design handoff bundle that the production site was ported from; useful when reasoning about why a component looks the way it does
