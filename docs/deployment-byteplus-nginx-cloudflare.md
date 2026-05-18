# Cloudflare Pages + BytePlus ECS + Nginx 部署说明

本文档说明 Metis landing page 的当前生产部署方式，以及 BytePlus ECS + Nginx 的备用静态托管方案。

## 当前生产部署：Cloudflare Pages

当前线上 `metisdata.ai` 通过 Cloudflare Pages 部署。

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

当前项目已在 `next.config.ts` 中启用 Next.js static export：

```ts
output: "export"
trailingSlash: true
```

构建后会生成 `out/` 目录，Cloudflare Pages 直接托管该目录。

当前应确认生成并可访问：

```text
/
/en/
/zh/
/en/contact/
/zh/contact/
/sitemap.xml
/robots.txt
```

`/` 在 static export 下不使用 Next.js server redirect，而是导出一个静态入口页，并通过客户端跳转到 `/en/`。这样可以避免 Cloudflare Pages 静态托管环境中缺少 Next.js runtime 的问题。

当前部署不需要业务运行时环境变量。可选变量：

```text
NEXT_PUBLIC_WAITLIST_FORM_URL=
NEXT_PUBLIC_CONTACT_FORM_URL=
```

如果 Cloudflare Pages 默认 Node.js 版本过旧，建议添加构建环境变量：

```text
NODE_VERSION=20
```

## 推荐生产架构

```text
访问者
  -> Cloudflare DNS / CDN / SSL / Pages
  -> Cloudflare Pages static assets
```

## Cloudflare DNS 与域名策略

Cloudflare Pages 通常使用 Pages 提供的自定义域名能力绑定：

```text
metisdata.ai
www.metisdata.ai
```

需要明确一个 canonical 域名策略：

- apex canonical：将 `www.metisdata.ai` 重定向到 `metisdata.ai`
- www canonical：将 `metisdata.ai` 重定向到 `www.metisdata.ai`

当前 SEO 配置使用：

```text
https://metisdata.ai
```

因此第一版推荐使用 apex canonical，即以 `metisdata.ai` 作为主域名。

## Cloudflare SSL/TLS

推荐使用：

```text
Full
```

或：

```text
Full (strict)
```

不要使用：

```text
Flexible SSL
```

`Flexible SSL` 容易造成 HTTPS 重定向循环，并且 Cloudflare 到源站之间不是端到端加密。Cloudflare Pages 自身会提供托管侧 HTTPS 证书。

## Cloudflare 建议配置

推荐开启：

- Always Use HTTPS
- Automatic HTTPS Rewrites
- Brotli compression
- 基础 DDoS 防护
- Cloudflare Web Analytics，可选

早期迭代阶段不要过度缓存 HTML 页面。静态资源可以比 HTML 页面使用更长缓存时间。

## 语言跳转说明

当前行为：

```text
/ -> /en/
```

当前实现为静态首页中的客户端跳转。未来如需根据浏览器语言自动跳转，可以在以下任一层实现：

- Cloudflare Redirect Rules 或 Workers，基于 `Accept-Language`
- Nginx map/rewrite 规则，基于 `Accept-Language`
- Next.js middleware，适用于 Next.js Runtime 部署方式

需要避免无限重定向。`/en/` 和 `/zh/` 必须始终可以直接访问。

## BytePlus ECS 备用部署

如果未来需要改为自托管，可以使用 BytePlus ECS + Nginx 托管 `out/` 静态文件。

### BytePlus ECS 初始化

推荐基础软件：

```bash
sudo apt update
sudo apt install -y nginx git
```

Node.js 建议使用 LTS 版本，可根据服务器标准选择 `fnm`、`nvm`、NodeSource 或预装 Node.js 的镜像。

拉取代码并构建：

```bash
git clone git@github.com:Metis-Data-Holding/metis-website.git
cd metis-website
npm install
npm run build
```

### Nginx 静态托管

Nginx 静态托管示例：

```nginx
server {
    listen 80;
    server_name metisdata.ai www.metisdata.ai;
    root /var/www/metis-website/out;
    index index.html;

    location / {
        try_files $uri $uri/ /en/index.html;
    }

    location = /robots.txt {
        try_files $uri =404;
    }

    location = /sitemap.xml {
        try_files $uri =404;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|webp|svg|ico|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
        try_files $uri =404;
    }
}
```

## 部署验收清单

- `npm install` 成功
- `npm run build` 成功
- `out/` 目录生成
- `/en/` 返回 200
- `/zh/` 返回 200
- `/en/contact/` 返回 200
- `/zh/contact/` 返回 200
- `/` 跳转到 `/en/`
- `/sitemap.xml` 返回 XML
- `/robots.txt` 返回文本
- Cloudflare SSL/TLS 使用 Full 或 Full (strict)
- `www` 与 apex domain 的跳转策略明确
