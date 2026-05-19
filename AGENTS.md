# AGENTS.md

本文档面向后续参与本项目的 Codex / AI agent / 开发协作者，说明修改 Metis 官网时必须遵守的项目约定。

## 项目定位

本项目是 Metis 的公司首页式 landing page，当前生产部署方式为 GitHub + Cloudflare Pages 自动部署。

技术栈：

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- React
- Next.js static export

部署产物：

```text
out/
```

Cloudflare Pages 配置：

```text
Build command: npm run build
Build output directory: out
Production branch: main
```

## 修改前必须阅读

开始修改前，请先阅读：

- `README.md`：项目结构、本地开发、部署入口
- `SPEC.md`：产品、路由、SEO/AEO、部署和验收标准
- `DESIGN.md`：视觉约束和禁止事项
- `DEPLOY.md`：Cloudflare Pages Git 部署说明

## 视觉原则

当前线上页面是视觉基准。后续修改不得重新设计页面。

必须保留：

- 深色、高级、技术感、terminal-inspired 的整体方向
- Metis logo
- 橙色 accent
- Hero terminal / pipeline 视觉
- 产品矩阵卡片结构
- 当前页面的品牌气质

禁止：

- 改成浅色 SaaS 模板
- 删除 Hero terminal 视觉
- 擅自替换 logo
- 擅自替换邮箱、公司主体、地址、产品名称或产品信息
- 引入大型 UI 框架或复杂动画依赖
- 为了实现方便大幅简化视觉

## 内容与配置

所有中英文文案集中维护在：

```text
lib/content.ts
```

品牌、域名、邮箱、公司主体、地址、表单链接集中维护在：

```text
lib/siteConfig.ts
```

不要在组件中散落硬编码品牌信息、邮箱、域名、公司地址或表单链接。需要新增文案时，应同时考虑英文和中文版本。

## 路由要求

当前必须保持以下路径可访问：

```text
/
/en/
/zh/
/en/contact/
/zh/contact/
/sitemap.xml
/robots.txt
```

`/` 是静态入口页，通过客户端跳转到 `/en/`。这是为了兼容 Cloudflare Pages static export，不要改回 Next.js server redirect。

## SEO/AEO 要求

修改页面结构或文案时，需要检查：

- metadata title / description
- canonical
- hreflang
- Open Graph
- sitemap
- robots
- Organization JSON-LD
- WebSite JSON-LD
- WebPage JSON-LD
- FAQPage JSON-LD

FAQPage JSON-LD 必须和页面可见 FAQ 内容一致。

SEO 工具集中在：

```text
lib/seo.ts
components/JsonLd.tsx
```

## 静态导出约束

`next.config.ts` 必须保持：

```ts
output: "export"
trailingSlash: true
images: {
  unoptimized: true
}
```

不要引入依赖 Next.js runtime 的功能，例如：

- server-only redirect
- API routes
- middleware language detection
- 依赖服务端运行时的动态渲染

如果未来确实需要服务端能力，应先更新 `SPEC.md` 和 `DEPLOY.md`，并明确 Cloudflare Pages 的部署模式变化。

## 验证命令

修改代码、样式、路由、SEO 或配置后，至少运行：

```bash
npm run build
```

构建必须通过，并确认 `out/` 生成。

如修改样式或响应式布局，应本地运行：

```bash
npm run dev
```

重点检查：

- 桌面端首屏视觉
- 移动端无横向滚动
- Hero 标题不溢出
- Terminal 面板不撑破屏幕
- 产品卡片移动端单列
- 中英文页面排版正常

## Git 与部署

生产分支是：

```text
main
```

push 到 `main` 后，Cloudflare Pages 会自动构建并部署。

新功能或较大改动应从 `main` 拉新分支，分支命名格式：

```text
feat/yyyyMMdd-feat-name
```

示例：

```text
feat/20260519-update-seo-copy
```

提交信息使用中文，简洁说明本次变更。

提交前请确认：

- 没有提交 `.next/`
- 没有提交 `out/`
- 没有提交 `node_modules/`
- 没有提交 `.DS_Store`
- 没有遗留旧原型文件或临时文件

## 推荐修改方式

- 小步修改，保持变更范围清晰。
- 优先复用现有组件和 CSS 变量。
- 新增产品信息、公司信息或能力描述前，应确认其真实性。
- 不要虚构客户案例、合作关系、上线状态或未确认产品能力。
- 改动完成后，在最终说明中写清楚修改文件、验证结果和仍需人工确认的事项。
