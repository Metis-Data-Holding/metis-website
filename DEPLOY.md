# Cloudflare Pages Git 部署说明

本文档只描述当前 Metis landing page 的实际生产部署方式：GitHub + Cloudflare Pages 自动构建与静态托管。

## 当前部署信息

```text
线上域名：metisdata.ai
Cloudflare Pages project：webpage1
GitHub repository：Metis-Data-Holding/metis-website
Production branch：main
```

当前项目是 Next.js static export 项目，Cloudflare Pages 不运行 Next.js server，也不需要 Node.js 常驻进程。

## 项目构建方式

[next.config.ts](/Users/hongbo/MetisProjects/metis/metis-website/next.config.ts) 必须保持：

```ts
output: "export"
trailingSlash: true
images: {
  unoptimized: true
}
```

Cloudflare Pages 构建配置：

```text
Framework preset: None
Build command: npm run build
Build output directory: out
Root directory: /
Production branch: main
```

构建流程：

```text
push 到 main
  -> Cloudflare Pages 拉取 GitHub 仓库
  -> 安装依赖
  -> 执行 npm run build
  -> 发布 out/ 静态目录
```

## 环境变量

当前上线不需要业务运行时环境变量。

可选公开变量：

```text
NEXT_PUBLIC_WAITLIST_FORM_URL=
NEXT_PUBLIC_CONTACT_FORM_URL=
```

如果 Cloudflare Pages 构建环境的 Node.js 版本过旧，建议添加：

```text
NODE_VERSION=20
```

## 静态导出产物

`npm run build` 后必须生成 `out/` 目录，并包含以下可访问路径：

```text
/
/en/
/zh/
/en/contact/
/zh/contact/
/sitemap.xml
/robots.txt
```

当前 `/` 是静态入口页，通过客户端跳转到 `/en/`。这样可以兼容 Cloudflare Pages static export，不依赖 Next.js server redirect。

## 域名策略

当前 SEO canonical 使用：

```text
https://metisdata.ai
```

因此生产环境以 apex domain `metisdata.ai` 作为主域名。

建议：

- 在 Cloudflare Pages 项目中绑定 `metisdata.ai`。
- 如同时绑定 `www.metisdata.ai`，应将 `www.metisdata.ai` 重定向到 `metisdata.ai`。
- `/en/` 和 `/zh/` 必须始终可以直接访问，不能被语言跳转规则拦截。

## 语言跳转

当前行为：

```text
/ -> /en/
```

未来如果需要按浏览器语言跳转，可以使用 Cloudflare Redirect Rules 或 Workers 基于 `Accept-Language` 实现。实现时必须避免无限重定向，并确保 `/en/`、`/zh/`、`/en/contact/`、`/zh/contact/` 直接访问稳定。

## 部署验收清单

- `npm run build` 成功
- `out/` 目录生成
- `/` 可访问并跳转到 `/en/`
- `/en/` 返回 200
- `/zh/` 返回 200
- `/en/contact/` 返回 200
- `/zh/contact/` 返回 200
- `/sitemap.xml` 返回 XML
- `/robots.txt` 返回文本
- `metisdata.ai` 已绑定到 Cloudflare Pages 项目
- 如启用 `www`，`www.metisdata.ai` 已重定向到 `metisdata.ai`
