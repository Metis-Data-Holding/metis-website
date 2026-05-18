# Metis Website

Metis 公司首页式 landing page。当前项目从 Claude Design 静态原型工程化而来，保留深色、高级、terminal-inspired 的视觉方向，同时补齐 Next.js App Router 项目结构、多语言路由与基础 SEO/AEO 能力。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- React

## 本地开发

安装依赖：

```bash
npm install
```

启动本地开发服务器：

```bash
npm run dev
```

访问页面：

```text
http://localhost:3000/en/
http://localhost:3000/zh/
http://localhost:3000/en/contact/
http://localhost:3000/zh/contact/
```

根路径 `/` 当前默认跳转到 `/en/`。未来如果需要根据浏览器语言自动跳转，可以在 Cloudflare、Nginx 或 Next.js middleware 层实现。

## 构建

执行生产构建：

```bash
npm run build
```

当前项目已配置为 Next.js static export，构建产物会输出到：

```text
out/
```

`npm run start` 仅适用于 Next.js runtime 部署方式。Cloudflare Pages 部署时不需要运行 `npm run start`。

## 项目结构

```text
app/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
  [locale]/
    page.tsx
    contact/
      page.tsx
components/
  Background.tsx
  ContactPage.tsx
  FAQ.tsx
  FinalCTA.tsx
  Footer.tsx
  Hero.tsx
  JsonLd.tsx
  LanguageSwitcher.tsx
  Navbar.tsx
  ProductMatrix.tsx
  RootRedirect.tsx
  Terminal.tsx
  Ticker.tsx
lib/
  content.ts
  seo.ts
  siteConfig.ts
public/
  metis-symbol-dark.png
docs/
  deployment-byteplus-nginx-cloudflare.md
```

## 配置

品牌名、域名、公司主体、地址、联系邮箱、表单链接等集中在：

```text
lib/siteConfig.ts
```

中英文页面文案和 FAQ 内容集中在：

```text
lib/content.ts
```

可选公开环境变量：

```text
NEXT_PUBLIC_WAITLIST_FORM_URL=
NEXT_PUBLIC_CONTACT_FORM_URL=
```

如果暂未配置表单链接，当前 CTA 会继续跳转联系页或使用 `mailto:tech@metisdata.ai`。

## SEO/AEO

当前已实现：

- `/en/`、`/zh/`、`/en/contact/`、`/zh/contact/` 的多语言 metadata
- canonical URL
- Open Graph metadata
- hreflang alternates，包括 `x-default`
- `/sitemap.xml`
- `/robots.txt`
- Organization JSON-LD
- WebSite JSON-LD
- WebPage JSON-LD
- FAQPage JSON-LD

FAQPage JSON-LD 直接从页面可见 FAQ 内容生成，确保结构化数据与页面文本一致。

## 部署

### Cloudflare Pages

当前线上 `metisdata.ai` 使用 Cloudflare Pages 部署：

```text
Cloudflare Pages project: webpage1
GitHub repository: Metis-Data-Holding/metis-website
Production branch: main
```

Cloudflare Pages 构建配置应填写：

```text
Build command: npm run build
Build output directory: out
```

当前项目通过 `next.config.ts` 启用：

```ts
output: "export"
trailingSlash: true
```

因此 `/en/`、`/zh/`、`/en/contact/`、`/zh/contact/`、`/sitemap.xml`、`/robots.txt` 会在 `npm run build` 后生成到 `out/`。

根路径 `/` 在 static export 下不能依赖 Next.js server redirect，因此当前实现为静态页面 + 客户端跳转到 `/en/`，并提供备用链接。未来如果需要基于浏览器语言跳转，可在 Cloudflare Redirect Rules、Cloudflare Workers 或 Nginx 中基于 `Accept-Language` 实现。

当前部署不需要业务运行时环境变量。可选变量：

```text
NEXT_PUBLIC_WAITLIST_FORM_URL=
NEXT_PUBLIC_CONTACT_FORM_URL=
```

如果 Cloudflare Pages 默认 Node.js 版本过旧，建议在 Pages 环境变量中设置：

```text
NODE_VERSION=20
```

### BytePlus / Nginx / Cloudflare

BytePlus ECS、Nginx 与 Cloudflare 的备用部署说明见：

```text
docs/deployment-byteplus-nginx-cloudflare.md
```
