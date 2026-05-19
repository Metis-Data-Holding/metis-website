# Metis Website

Metis 公司首页式 landing page。当前项目使用 Next.js App Router、TypeScript 和 Tailwind CSS 构建，保留深色、高级、terminal-inspired 的视觉方向，并支持多语言路由、SEO/AEO 与 Cloudflare Pages 静态部署。

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

根路径 `/` 当前默认跳转到 `/en/`。未来如果需要根据浏览器语言自动跳转，可以在 Cloudflare Redirect Rules 或 Workers 层实现。

## 构建

执行生产构建：

```bash
npm run build
```

当前项目已配置为 Next.js static export，构建产物会输出到：

```text
out/
```

Cloudflare Pages 部署时不需要运行 Next.js runtime 服务。

## 项目结构

```text
.
├── app/                         # Next.js App Router 路由、全局样式和 metadata routes
│   ├── icon.jpg                 # 浏览器标签页 favicon
│   ├── layout.tsx               # 全站根布局，加载字体与全局 metadata
│   ├── page.tsx                 # 根路径 /，静态页面 + 客户端跳转到 /en/
│   ├── robots.ts                # 生成 /robots.txt
│   ├── sitemap.ts               # 生成 /sitemap.xml
│   └── [locale]/                # 多语言动态路由，当前支持 en / zh
│       ├── page.tsx             # /en/ 与 /zh/ 首页
│       └── contact/page.tsx     # /en/contact/ 与 /zh/contact/ 联系页
├── components/                  # 页面组件，保持视觉拆分和复用
│   ├── Background.tsx           # 全站深色网格与 glow 背景
│   ├── ContactPage.tsx          # 联系页主体内容
│   ├── FAQ.tsx                  # FAQ 展示
│   ├── FinalCTA.tsx             # 页面底部 CTA
│   ├── Footer.tsx               # 页脚与公司信息
│   ├── Hero.tsx                 # 首页首屏内容
│   ├── JsonLd.tsx               # Organization / WebSite / WebPage / FAQPage JSON-LD
│   ├── LanguageSwitcher.tsx     # 中英文切换
│   ├── Navbar.tsx               # 顶部导航
│   ├── ProductMatrix.tsx        # 三条产品线展示
│   ├── RootRedirect.tsx         # / 路径客户端跳转逻辑
│   ├── Terminal.tsx             # Hero terminal 视觉
│   └── Ticker.tsx               # 首页滚动信息条
├── lib/                         # 内容、配置和 SEO 工具
│   ├── content.ts               # 中英文文案与 FAQ 内容
│   ├── seo.ts                   # metadata、canonical、hreflang URL 工具
│   └── siteConfig.ts            # 品牌、域名、邮箱、公司主体、地址、表单链接
├── public/                      # 静态资源，构建后原样输出
│   └── metis-symbol-dark.png    # 当前站点使用的 Metis logo 图形
├── AGENTS.md                    # AI agent / 协作者修改项目时的工作约定
├── DEPLOY.md                    # Cloudflare Pages Git 自动部署说明
├── DESIGN.md                    # 当前页面视觉约束
├── SPEC.md                      # 产品、路由、SEO/AEO、部署与验收规格
├── next.config.ts               # Next.js static export 配置
├── package.json                 # npm scripts 与依赖声明
└── tsconfig.json                # TypeScript 配置
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

### Cloudflare Pages Git 自动部署

当前线上 `metisdata.ai` 使用 GitHub + Cloudflare Pages 自动部署：

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

部署流程：

```text
push 到 main
  -> Cloudflare Pages 自动拉取 GitHub 仓库
  -> 执行 npm run build
  -> 发布 out/ 静态目录
```

当前项目通过 `next.config.ts` 启用：

```ts
output: "export"
trailingSlash: true
images.unoptimized: true
```

因此 `/en/`、`/zh/`、`/en/contact/`、`/zh/contact/`、`/sitemap.xml`、`/robots.txt` 会在 `npm run build` 后生成到 `out/`。

根路径 `/` 在 static export 下不能依赖 Next.js server redirect，因此当前实现为静态页面 + 客户端跳转到 `/en/`，并提供备用链接。未来如果需要基于浏览器语言跳转，可在 Cloudflare Redirect Rules 或 Workers 中基于 `Accept-Language` 实现。

当前部署不需要业务运行时环境变量。可选变量：

```text
NEXT_PUBLIC_WAITLIST_FORM_URL=
NEXT_PUBLIC_CONTACT_FORM_URL=
```

如果 Cloudflare Pages 默认 Node.js 版本过旧，建议在 Pages 环境变量中设置：

```text
NODE_VERSION=20
```

### 部署说明

Cloudflare Pages Git 自动部署说明见：

```text
DEPLOY.md
```
