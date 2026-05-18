/* global window */

const I18N = {
  zh: {
    nav: {
      capabilities: "产品矩阵",
      products: "案例展示",
      company: "联系",
    },
    cta: { primary: "联系我们", secondary: "了解更多", contact: "联系我们" },
    email: "tech@metisdata.ai",
    hero: {
      eyebrow: "新加坡 · AIGC 产品矩阵",
      h1_a: "用 AI 重新定义",
      h1_accent: "内容、游戏与工具",
      h1_b: "。",
      h1_mono: "// AI Short Drama · AI Game · Multi-Model API Hub",
      sub: "三条产品线、一支小团队、总部新加坡。",
      stats: [
        { v: "Singapore",   k: "// HQ" },
        { v: "AIGC",        k: "// End-to-end stack" },
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
    cta_section: {
      lead_a: "如果这些方向跟你相关，",
      lead_accent: "欢迎邮件聊聊",
      lead_b: "。",
      sub: "合作、接入、招聘、技术交流都可以。",
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
    footer: {
      tagline: "METIS DATA HOLDING PTE. LTD. — 新加坡注册的 AIGC 公司。三条产品线、一套基础设施。",
      contact_h: "Contact",
      contact_email: "tech@metisdata.ai",
      contact_addr_l1: "7 Temasek Blvd, #40-01B",
      contact_addr_l2: "SUNTEC TOWER ONE",
      contact_addr_l3: "Singapore 038987",
      cols: [
        { h: "Products",  items: ["AI Short Drama", "AI Game", "AI API Hub", "Self-hosted"] },
        { h: "Resources", items: ["Docs", "Changelog", "Status", "Security"] },
      ],
      legal: ["© 2026 Metis Data Holding Pte. Ltd.", "Singapore"],
    },
  },

  en: {
    nav: {
      capabilities: "Products",
      products: "Showcase",
      company: "Contact",
    },
    cta: { primary: "Get in touch", secondary: "Learn more", contact: "Contact" },
    email: "tech@metisdata.ai",
    hero: {
      eyebrow: "Singapore · AIGC product portfolio",
      h1_a: "Reinventing",
      h1_accent: "content, games & AI tooling",
      h1_b: " with generative AI.",
      h1_mono: "// AI Short Drama · AI Game · Multi-Model API Hub",
      sub: "Three product lines, one small team, headquartered in Singapore.",
      stats: [
        { v: "Singapore",   k: "// HQ" },
        { v: "AIGC",        k: "// End-to-end stack" },
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
    cta_section: {
      lead_a: "If any of this is",
      lead_accent: "relevant to you",
      lead_b: ", drop us a line.",
      sub: "Partnerships, integrations, hiring, technical chats — all welcome.",
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
    footer: {
      tagline: "METIS DATA HOLDING PTE. LTD. — A Singapore-registered AIGC company. Three product lines, one infrastructure.",
      contact_h: "Contact",
      contact_email: "tech@metisdata.ai",
      contact_addr_l1: "7 Temasek Blvd, #40-01B",
      contact_addr_l2: "SUNTEC TOWER ONE",
      contact_addr_l3: "Singapore 038987",
      cols: [
        { h: "Products",  items: ["AI Short Drama", "AI Game", "AI API Hub", "Self-hosted"] },
        { h: "Resources", items: ["Docs", "Changelog", "Status", "Security"] },
      ],
      legal: ["© 2026 Metis Data Holding Pte. Ltd.", "Singapore"],
    },
  },
};

window.I18N = I18N;
