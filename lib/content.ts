import { siteConfig, type Locale } from "./siteConfig";

export type ProductKey = "drama" | "api" | "game";

export const content = {
  zh: {
    nav: {
      products: "产品矩阵",
      showcase: "案例展示",
      faq: "常见问题",
      contact: "联系",
    },
    cta: { primary: "联系我们", secondary: "了解更多", contact: "联系我们" },
    email: siteConfig.contactEmail,
    hero: {
      eyebrow: "新加坡 · AIGC 产品矩阵",
      h1_a: "用 AI 重新定义",
      h1_accent: "内容、游戏与工具",
      h1_b: "。",
      h1_mono: "// AI Short Drama · AI Game · Multi-Model API Hub",
      sub: "三条产品线、一支小团队、总部新加坡。",
      stats: [
        { v: "Singapore", k: "// HQ" },
        { v: "AIGC", k: "// End-to-end stack" },
        { v: "Self-hosted", k: "// GPU infrastructure" },
      ],
    },
    show: {
      label: "Products — 03",
      title: "三条产品线。",
      sub: "从内容（短剧）、到娱乐（游戏）、再到开发者工具（API 平台），在 AIGC 全栈上寻找最有价值的应用层。",
      drama: {
        title: "AI Short Drama Platform",
        desc: "以剧本为入口，自动完成分镜、角色一致性、口型同步、配音、字幕与 BGM 编排——端到端产出可发布的竖屏短剧。",
        meta: ["pipeline.v1.4", "9:16 · 60fps"],
        link: "查看更多",
        slots: [
          {
            src: "/drama/drama-01-feature.webp",
            video: "/drama/drama-01-feature.mp4",
            alt: "AI 生成短剧 · 关键画面",
          },
          { src: "/drama/drama-02.webp", alt: "AI 生成短剧剧照 02" },
          { src: "/drama/drama-03.webp", alt: "AI 生成短剧剧照 03" },
          { src: "/drama/drama-04.webp", alt: "AI 生成短剧剧照 04" },
          { src: "/drama/drama-05.webp", alt: "AI 生成短剧剧照 05" },
        ],
        lightbox: { close: "关闭", prev: "上一张", next: "下一张" },
      },
      game: {
        title: "AI Game",
        desc: "AI 玩游戏 × AI 造游戏两个方向：智能 NPC、自动测试、玩家陪伴；以及美术资源、设计文档与引擎插件级的 AI 辅助编程。",
        meta: ["agents · assets", "design · codegen"],
        link: "了解更多",
      },
      api: {
        title: "AI API Hub",
        desc: "一个账号调用所有主流大模型：多模型并排对比、统一计费、提示词社区分享。OpenAI 兼容接口，免去多套密钥的管理成本。",
        meta: ["unified API", "OpenAI compat"],
        link: "了解更多",
      },
    },
    ticker: [
      "AI Short Drama",
      "AI Game Studio",
      "AI API Hub",
      "Realtime Inference",
      "Self-hosted GPU",
      "Singapore HQ",
      "40+ Models Aggregated",
      "Multi-tenant",
    ],
    faq: {
      label: "FAQ",
      title: "常见问题。",
      items: [
        {
          q: "Metis 是什么？",
          a: "Metis 是一家注册在新加坡的 AIGC 公司，当前围绕 AI 短剧、AI 游戏和 AI 开发者工具构建产品矩阵。",
        },
        {
          q: "Metis 当前有哪些产品线？",
          a: "当前 Claude Design 原型中展示的产品线包括 AI Short Drama Platform、AI Game 和 AI API Hub。",
        },
        {
          q: "AI Game 是什么？",
          a: "AI Game 是 Metis 面向游戏娱乐与游戏开发工作流的产品方向，核心叙事是 “AI 玩游戏 × AI 造游戏”。",
        },
        {
          q: "AI API Hub 是什么？",
          a: "AI API Hub 是 Metis 面向开发者工具的产品方向，覆盖多模型 API 调用、多模型并排对比、统一 API 工作流和 OpenAI-compatible 接入体验。",
        },
        {
          q: "如何联系 Metis？",
          a: `可以通过 ${siteConfig.contactEmail} 联系我们。`,
        },
      ],
    },
    cta_section: {
      lead_a: "如果这些方向跟你相关，",
      lead_accent: "欢迎邮件聊聊",
      lead_b: "。",
      sub: "合作、接入、招聘、技术交流都可以。",
    },
    contact: {
      title: "联系 Metis",
      subtitle: "如果你对 AI 内容创作、模型体验或合作机会感兴趣，欢迎联系我们。",
      emailLabel: "邮箱",
      sections: [
        "合作咨询",
        "创作者与内容团队合作",
        "高校与 AI 教育合作",
        "开发者与 API 合作",
        "一般问题咨询",
      ],
    },
    footer: {
      tagline: "METIS DATA HOLDING PTE. LTD. — 新加坡注册的 AIGC 公司。三条产品线、一套基础设施。",
      contact_h: "Contact",
      cols: [
        { h: "Products", items: ["AI Short Drama", "AI Game", "AI API Hub", "Self-hosted"] },
        { h: "Resources", items: ["Docs", "Changelog", "Status", "Security"] },
      ],
      legal: ["© 2026 Metis Data Holding Pte. Ltd.", "Singapore"],
    },
  },
  en: {
    nav: {
      products: "Products",
      showcase: "Showcase",
      faq: "FAQ",
      contact: "Contact",
    },
    cta: { primary: "Get in touch", secondary: "Learn more", contact: "Contact" },
    email: siteConfig.contactEmail,
    hero: {
      eyebrow: "Singapore · AIGC product portfolio",
      h1_a: "Reinventing",
      h1_accent: "content, games & AI tooling",
      h1_b: " with generative AI.",
      h1_mono: "// AI Short Drama · AI Game · Multi-Model API Hub",
      sub: "Three product lines, one small team, headquartered in Singapore.",
      stats: [
        { v: "Singapore", k: "// HQ" },
        { v: "AIGC", k: "// End-to-end stack" },
        { v: "Self-hosted", k: "// GPU infrastructure" },
      ],
    },
    show: {
      label: "Products — 03",
      title: "Three product lines.",
      sub: "From content (short drama) to entertainment (games) to developer tooling (API hub) — hunting for the highest-leverage layers of the AIGC stack.",
      drama: {
        title: "AI Short Drama Platform",
        desc: "Scripts in, publishable vertical drama out. Auto paneling, character consistency, lip-sync, voiceover, subtitles and BGM — end-to-end.",
        meta: ["pipeline.v1.4", "9:16 · 60fps"],
        link: "See more",
        slots: [
          {
            src: "/drama/drama-01-feature.webp",
            video: "/drama/drama-01-feature.mp4",
            alt: "AI-generated short drama key still",
          },
          { src: "/drama/drama-02.webp", alt: "AI-generated short drama still 02" },
          { src: "/drama/drama-03.webp", alt: "AI-generated short drama still 03" },
          { src: "/drama/drama-04.webp", alt: "AI-generated short drama still 04" },
          { src: "/drama/drama-05.webp", alt: "AI-generated short drama still 05" },
        ],
        lightbox: { close: "Close", prev: "Previous", next: "Next" },
      },
      game: {
        title: "AI Game",
        desc: "AI plays games × AI builds games: smart NPCs, auto-QA, player companions; plus art assets, design docs, and engine-plugin codegen.",
        meta: ["agents · assets", "design · codegen"],
        link: "Learn more",
      },
      api: {
        title: "AI API Hub",
        desc: "One account for every frontier LLM. Side-by-side comparison, unified billing, prompt marketplace. OpenAI-compatible — no juggling keys.",
        meta: ["unified API", "OpenAI compat"],
        link: "Learn more",
      },
    },
    ticker: [
      "AI Short Drama",
      "AI Game Studio",
      "AI API Hub",
      "Realtime Inference",
      "Self-hosted GPU",
      "Singapore HQ",
      "40+ Models Aggregated",
      "Multi-tenant",
    ],
    faq: {
      label: "FAQ",
      title: "Frequently asked.",
      items: [
        {
          q: "What is Metis?",
          a: "Metis is a Singapore-registered AIGC company building products across AI short drama, AI games, and AI developer tooling.",
        },
        {
          q: "What are Metis' product lines?",
          a: "The current product lines shown in the Claude Design prototype are AI Short Drama Platform, AI Game, and AI API Hub.",
        },
        {
          q: "What is AI Game?",
          a: "AI Game is Metis' product direction for game entertainment and game development workflows, focused on AI plays games × AI builds games.",
        },
        {
          q: "What is AI API Hub?",
          a: "AI API Hub is Metis' developer tooling direction for multi-model API access, side-by-side model comparison, unified API workflows, and OpenAI-compatible integration.",
        },
        {
          q: "How can I contact Metis?",
          a: `You can reach us at ${siteConfig.contactEmail}.`,
        },
      ],
    },
    cta_section: {
      lead_a: "If any of this is",
      lead_accent: "relevant to you",
      lead_b: ", drop us a line.",
      sub: "Partnerships, integrations, hiring, technical chats — all welcome.",
    },
    contact: {
      title: "Contact Metis",
      subtitle: "Interested in AI content creation, model exploration, or partnership opportunities? Reach out to us.",
      emailLabel: "Email",
      sections: [
        "Partnership inquiries",
        "Creator and studio collaboration",
        "University and education partnerships",
        "Developer and API collaboration",
        "General questions",
      ],
    },
    footer: {
      tagline: "METIS DATA HOLDING PTE. LTD. — A Singapore-registered AIGC company. Three product lines, one infrastructure.",
      contact_h: "Contact",
      cols: [
        { h: "Products", items: ["AI Short Drama", "AI Game", "AI API Hub", "Self-hosted"] },
        { h: "Resources", items: ["Docs", "Changelog", "Status", "Security"] },
      ],
      legal: ["© 2026 Metis Data Holding Pte. Ltd.", "Singapore"],
    },
  },
} satisfies Record<Locale, unknown>;

export type SiteContent = (typeof content)[Locale];
