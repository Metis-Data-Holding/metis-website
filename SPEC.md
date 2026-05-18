# Metis 公司首页式 Landing Page 开发规格说明

> 文件名建议：`SPEC.md`  
> 项目名称：Metis Company Landing Page  
> 域名：`metisdata.ai`  
> 文档用途：本文件用于指导 Codex、开发者或未来团队成员完成 Metis 第一版公司首页式 landing page 的设计、开发、部署和验收。

> 当前更新说明：本版本已根据“已有 Claude Design 原型将作为视觉与业务基准”的目标进行调整。开发时应优先保留原型中的视觉效果、logo、联系邮箱、产品名称和产品信息；本 SPEC 主要用于补齐正式上线所需的工程结构、多语言路由、SEO/AEO、部署和验收要求。

> 重要补充：项目根目录应同时包含 `DESIGN.md`。`SPEC.md` 负责产品需求、信息架构、路由、SEO/AEO、部署和验收；`DESIGN.md` 负责视觉还原、色彩、排版、动效、组件观感和移动端视觉规则。Codex 开发时必须同时阅读 `SPEC.md` 与 `DESIGN.md`。

---

## 0. Claude Design 原型优先级说明

当前项目已经存在一个由同事制作的 Claude Design landing page 原型。该原型不是要被丢弃的草稿，而是本项目当前的**视觉与业务内容基准**。

### 0.1 必须优先保留的内容

开发过程中必须尽量保留 Claude Design 原型中的以下内容：

```text
整体视觉风格
深色高级科技感
Metis logo 与图形资产
主色与 accent 色
Hero 区域的 terminal / workflow 视觉
当前产品名称与产品信息
当前联系邮箱
当前页面的品牌氛围
当前主要布局节奏
```

### 0.2 SPEC.md 的职责

本 SPEC 的主要作用不是重新设计页面，而是将现有 Claude Design 原型升级为一个正式、可维护、可部署、符合 SEO/AEO 要求的项目。

本 SPEC 主要用于补齐：

```text
Next.js / TypeScript / Tailwind 工程结构
/en/ 与 /zh/ 独立多语言路由
/en/contact/ 与 /zh/contact/ 联系页面
SEO metadata
canonical
hreflang
sitemap.xml
robots.txt
Organization / WebSite / FAQPage JSON-LD
移动端适配修复
BytePlus ECS + Nginx + Cloudflare 部署支持
验收标准
```

### 0.3 冲突处理原则

如果 Claude Design 原型与本 SPEC 在以下内容上存在冲突，应**优先以 Claude Design 原型为准**，除非项目负责人明确要求修改：

```text
logo
联系邮箱
产品名称
产品信息
视觉风格
主色
页面整体氛围
```

如果 Claude Design 原型与本 SPEC 在以下内容上存在差异，应**优先以本 SPEC 为准**：

```text
路由结构
多语言 URL
SEO/AEO 要求
结构化数据
sitemap / robots
部署方式
可维护性要求
验收标准
```

### 0.4 DESIGN.md 的职责与优先级

项目根目录中应存在 `DESIGN.md`。该文件是本项目的**视觉约束文档**，用于防止 Codex 在工程化重构过程中偏离 Claude Design 原型。

`DESIGN.md` 主要负责：

```text
当前 Claude Design 原型的视觉基准说明
必须保留的深色高级技术感
Metis logo 和品牌资产使用原则
主色、accent 色、背景、卡片、边框和文字颜色的处理原则
Hero 区域 terminal / workflow 视觉还原要求
产品卡片、CTA、Footer 等组件的视觉规范
动效保留与性能边界
移动端视觉适配要求
禁止事项，例如不得改成浅色 SaaS 模板
视觉验收标准
```

`SPEC.md` 与 `DESIGN.md` 的分工如下：

```text
SPEC.md：决定做什么、有哪些页面、有哪些产品信息、路由如何设计、SEO/AEO 如何实现、如何部署、如何验收。
DESIGN.md：决定页面应该长什么样、哪些视觉元素必须保留、哪些视觉方向禁止偏离。
Claude Design 原型：当前视觉与业务内容基准。
```

如果 `SPEC.md` 与 `DESIGN.md` 在视觉描述上存在冲突，应优先以 `DESIGN.md` 为准。

如果 `SPEC.md` 与 `DESIGN.md` 在产品内容、路由、SEO/AEO、部署或验收要求上存在冲突，应优先以 `SPEC.md` 为准。

如果 `DESIGN.md` 与 Claude Design 原型在视觉细节上存在冲突，应优先以 Claude Design 原型为准，并由 Codex 在审计阶段指出差异，等待项目负责人确认。

---

### 0.5 给 Codex 的最高优先级指令

Codex 在开发时必须遵守：

```text
不要重新设计页面。
不要改成浅色 SaaS 风格。
不要擅自替换 logo、邮箱、产品名称或产品信息。
不要为了套用 SPEC 而破坏 Claude Design 原型的视觉效果。
请以 Claude Design 原型为视觉和业务内容基准，以 SPEC.md 为工程化和上线标准。
```

---

## 1. 项目背景

Metis 目前是一家处于早期阶段的 AI 产品公司，注册主体在新加坡。根据当前 Claude Design 原型，Metis 的对外产品叙事应围绕 **AIGC product portfolio / AIGC 产品矩阵** 展开，核心方向包括内容生产、游戏娱乐与开发者工具。

当前已有一个内部可用的 AI 短剧生产工具，该工具已经可以服务公司内部短剧生产流程，但对外开放前仍需要进一步产品化、界面优化、稳定性建设和商业化设计。

Claude Design 原型中当前展示的三条产品线为：

1. **AI Short Drama Platform**：面向 AI 短剧生产，围绕剧本、分镜、角色一致性、口型同步、配音、字幕、BGM 和竖屏短剧生产流程展开。
2. **AI Game**：围绕 “AI plays games × AI builds games” 两条路径，覆盖智能 NPC、自动测试、玩家陪伴、实时教练、美术资源、游戏设计文档、引擎插件级代码生成与动画序列等方向。
3. **AI API Hub**：面向开发者工具与多模型 API 调用场景，围绕多模型对比、统一 API、OpenAI-compatible 接口、提示词社区和多模型调用体验展开。

因此，本项目不是传统意义上的完整公司官网，也不是单一产品 landing page，而是一个：

> **公司首页式 landing page**

它既要承担 Metis 的对外品牌入口功能，也要承担早期产品介绍、用户引导、waitlist 收集和合作咨询转化功能。

---

## 2. 项目目标

第一版网站的核心目标是：

1. 让访问者快速理解 Metis 是一家什么样的 AI 公司。
2. 让访问者了解 Metis 当前展示的三条主要产品线：AI Short Drama Platform、AI Game、AI API Hub。
3. 明确展示不同产品当前所处阶段，避免过度承诺。
4. 为 AI 短剧创作者、内容团队、高校学生、AI 初学者、企业和高校组织提供不同的行动入口。
5. 支持中英文访问，兼顾国际化和中文用户。
6. 符合基础 SEO 与 AEO 要求，方便搜索引擎和 AI 问答系统理解网站内容。
7. 支持部署到 BytePlus ECS 服务器，并通过 Cloudflare 管理域名、DNS、SSL 和 CDN。

---

## 3. 网站类型定义

本项目应被定义为：

> **公司首页式 landing page**

也就是说：

- 它看起来像公司首页，因为它是 `metisdata.ai` 的一级域名主入口。
- 它的设计逻辑应当像 landing page，因为它必须围绕明确转化目标组织信息。
- 它不应做成传统大而全的公司官网。
- 它不应为每个尚未成熟的产品制作过度详细的产品页。

第一版网站应强调：

- 清晰定位
- 简洁结构
- 产品方向
- 产品状态
- CTA 引导
- 合作联系
- SEO/AEO 基础合规

---

## 4. 品牌信息

### 4.1 品牌展示名

统一使用：

```text
Metis
```

不要在页面主视觉中使用全小写 `metis`。正式展示建议使用首字母大写的 `Metis`。

### 4.2 域名

```text
metisdata.ai
```

### 4.3 邮箱

公司已经拥有 `@metisdata.ai` 邮箱域名。

重要原则：

```text
页面中的实际联系邮箱应以 Claude Design 原型中已经使用并经内部确认的邮箱为准。
```

如果原型中使用的是 `tech@metisdata.ai`，则继续使用 `tech@metisdata.ai`；如果后续负责人确认改为 `tech@metisdata.ai`，再统一替换。

开发时应将邮箱集中放入配置文件，例如：

```text
lib/siteConfig.ts
```

禁止在多个组件中硬编码不同邮箱。

如后续需要区分合作、支持和媒体联系，可增加：

```text
partnerships@metisdata.ai
support@metisdata.ai
press@metisdata.ai
```

---

## 5. 公司定位

### 5.1 英文定位

```text
Metis builds AI products for creators, learners, and teams.
```

### 5.2 中文定位

```text
Metis 为创作者、学习者与组织构建 AI 产品。
```

### 5.3 英文扩展说明

```text
We are developing AI tools for short drama production, multimodal model exploration, and intelligent API workflows.
```

### 5.4 中文扩展说明

```text
我们正在构建面向短剧生产、多模态模型体验与智能 API 工作流的 AI 工具。
```

### 5.5 定位说明

当前不建议将公司定位为单一的“AI 短剧公司”、“AI 游戏公司”或“AI API 平台”。

原因：

1. 当前产品矩阵仍在演进。
2. AI 短剧工具虽然已有内部能力，但尚未完全对外产品化。
3. AI Game 和 AI API Hub 仍需根据实际产品进度持续校准对外表达。
4. 过早绑定单一产品会限制后续品牌扩展。

因此，第一版页面应将 Metis 定义为：

```text
一家面向内容创作、模型体验与智能工作流的 AI 产品公司。
```

---

## 6. 目标用户

第一版网站服务以下五类核心用户。

### 6.1 AI 短剧创作者与内容从业者

包括：

- 短剧创作者
- MCN 机构
- 内容团队
- 短视频团队
- AI 视频创作者
- 剧本、分镜、视频制作相关从业者

他们关心：

- 是否能提升短剧生产效率
- 是否能辅助剧本、分镜、素材和视频生成
- 是否能降低内容制作成本
- 是否可以申请 demo 或合作

主要 CTA：

```text
Request Demo
Join Creator Waitlist
Contact Us
```

中文：

```text
预约演示
加入创作者等待名单
联系我们
```

---

### 6.2 高校学生

包括：

- 对 AI 感兴趣的大学生
- 希望体验最新大模型能力的学生
- 想学习 AI 工具和 AI 创作的学生
- 未来可能参与校园活动或高校合作项目的学生

他们关心：

- 是否能低门槛体验 AI 模型
- 是否能学习 AI 应用
- 是否有适合学生的产品入口
- 是否有校园合作或活动机会

主要 CTA：

```text
Learn More
Explore Products
```

中文：

```text
了解更多
查看产品
```

---

### 6.3 AI 初学者与普通用户

包括：

- 听说过 AI 但不了解大模型的人
- 想体验 Chat、文生图、文生视频等能力的人
- 希望通过一个平台理解 AI 能做什么的人

他们关心：

- 是否容易上手
- 是否能集中体验多种 AI 能力
- 是否需要技术背景
- 是否可以免费或低成本体验

主要 CTA：

```text
Join Waitlist
Get Early Access
```

中文：

```text
加入等待名单
申请提前体验
```

---

### 6.4 游戏开发者、游戏工作室与游戏内容团队

包括：

- 游戏开发者
- 独立游戏团队
- 游戏工作室
- 游戏测试与 QA 团队
- 关注智能 NPC、玩家陪伴和 AI 辅助游戏开发的团队
- 使用 Unity、Godot 等引擎进行开发的技术团队

他们关心：

- AI 是否能参与游戏测试、自动跑图或自动 QA
- 是否能生成或辅助生成游戏美术资产
- 是否能帮助产出 GDD / Game Design Document 草稿
- 是否能辅助生成 Unity、Godot 等引擎插件或脚本代码
- 是否能作为玩家陪伴、智能 NPC 或实时教练能力嵌入游戏体验

主要 CTA：

```text
Learn More
Contact Us
```

中文：

```text
了解更多
联系我们
```

---

### 6.5 企业、高校与机构合作方

包括：

- 高校
- 企业
- 内容机构
- AI 教育机构
- 创作者社区
- 开发者团队

他们关心：

- Metis 是否支持组织级合作
- 是否支持高校 AI 教育或活动
- 是否可以合作开发 AI 内容生产流程
- 是否可以使用 API 或模型服务能力

主要 CTA：

```text
Contact Us
Partner With Us
```

中文：

```text
联系我们
寻求合作
```

---

## 7. 产品矩阵

第一版网站展示三条产品线，必须优先对齐 Claude Design 原型中的产品信息和视觉顺序。当前原型中的三条产品线为：

```text
AI Short Drama Platform
AI API Hub
AI Game
```

重要原则：

```text
产品名称、产品顺序、产品说明、邮箱、logo 和当前产品信息应优先以 Claude Design 原型为准。
```

同时，无论后续是否调整产品名称，都必须遵守以下要求：

```text
清楚展示产品方向
避免虚构未实现能力
避免暗示尚未开放的产品已经成熟上线
CTA 路径清楚
产品状态表达清楚
```

### 7.1 AI Short Drama Platform

中文名称建议：

```text
AI 短剧生成平台
```

原型中的英文说明：

```text
Scripts in, publishable vertical drama out. Auto paneling, character consistency, lip-sync, voiceover, subtitles and BGM — end-to-end.
```

原型中的中文说明：

```text
以剧本为入口，自动完成分镜、角色一致性、口型同步、配音、字幕与 BGM 编排——端到端产出可发布的竖屏短剧。
```

原型中的元信息：

```text
pipeline.v1.4
9:16 · 60fps
```

说明：

- 该产品是当前最成熟、最应重点展示的产品方向。
- 如 `pipeline.v1.4`、`9:16 · 60fps` 等信息已经由内部确认，可以保留。
- 如果这些信息尚未确认，开发前应向负责人确认是否对外展示。
- CTA 可使用 `See more` / `查看更多` 或跳转至 `mailto:tech@metisdata.ai`。

---

### 7.2 AI API Hub

中文名称建议：

```text
AI API Hub
```

原型中的英文说明：

```text
One account for every frontier LLM. Side-by-side comparison, unified billing, prompt marketplace. OpenAI-compatible — no juggling keys.
```

原型中的中文说明：

```text
一个账号调用所有主流大模型：多模型并排对比、统一计费、提示词社区分享。OpenAI 兼容接口，免去多套密钥的管理成本。
```

原型中的元信息：

```text
unified API
OpenAI compat
```

说明：

- 该产品在 Claude Design 原型中是开发者工具方向，不应改名为 AI API Gateway，除非负责人明确要求。
- 如 `unified billing`、`prompt marketplace`、`OpenAI-compatible` 等能力已经被内部确认，可以保留。
- 如果这些能力尚未上线，但属于明确规划，可在页面中使用更克制表述，例如 `planned`、`building`、`exploring`。
- CTA 可使用 `Learn more` / `了解更多` 或跳转至 `mailto:tech@metisdata.ai`。

---

### 7.3 AI Game

中文名称建议：

```text
AI Game
```

产品定位：

```text
AI Game 是 Metis 面向游戏娱乐与游戏开发工作流的 AIGC 产品方向，核心叙事为 “AI plays games × AI builds games”。
```

原型中的英文说明：

```text
AI plays games × AI builds games: smart NPCs, auto-QA, player companions; plus art assets, design docs, and engine-plugin codegen.
```

原型中的中文说明：

```text
AI 玩游戏 × AI 造游戏两个方向：智能 NPC、自动测试、玩家陪伴；以及美术资源、设计文档与引擎插件级的 AI 辅助编程。
```

原型中的元信息：

```text
agents · assets
design · codegen
```

AI Game 在页面中应拆成两组能力展示。

#### AI plays games

英文能力项：

```text
Smart NPC — agent · LLM
Auto-QA — scripted runs
Player companion — context-aware
Live coach — real-time
```

中文能力项：

```text
智能 NPC — agent · LLM
自动测试 — scripted runs
玩家陪伴 — context-aware
实时教练 — real-time
```

#### AI builds games

英文能力项：

```text
Art assets — style-locked
Design docs — GDD draft
Engine codegen — Unity · Godot
Animation — frame seq.
```

中文能力项：

```text
美术资源 — style-locked
设计文档 — GDD draft
引擎代码生成 — Unity · Godot
动画序列 — frame seq.
```

说明：

- AI Game 是当前 Claude Design 原型中的正式产品方向之一，Codex 不得删除。
- 页面应保留 “AI plays games × AI builds games” 这一核心表达。
- 页面应保留双列能力展示结构，或者在移动端改为上下两组卡片。
- 如果具体能力仍处于探索阶段，可在产品状态或描述中使用 `Exploring`、`In development`、`正在探索` 等措辞，但不要删除该产品方向。
- CTA 可使用 `Learn more` / `了解更多` 或跳转至 `mailto:tech@metisdata.ai`。

---

## 8. 第一版页面范围

### 8.1 必须实现的页面

```text
/en/
/zh/
/en/contact/
/zh/contact/
```

### 8.2 根路径处理

```text
/
```

根路径可采用以下两种方案之一。

推荐方案：自动语言检测。

逻辑：

```text
如果浏览器语言包含 zh，则跳转到 /zh/
否则跳转到 /en/
```

要求：

- 页面中必须保留语言切换入口。
- 不得只依赖浏览器语言判断。
- `/en/` 和 `/zh/` 必须是可直接访问的独立 URL。

备选方案：

```text
/ 默认展示英文首页，并在导航栏提供中文切换。
```

第一版建议使用自动检测，但如果实现复杂度过高，可以先使用英文首页作为默认页面。

---

## 9. 第一版不做的内容

以下内容不属于第一版范围：

```text
完整产品独立页面
用户登录系统
后台管理系统
支付系统
复杂 CMS
博客系统
价格页
API 文档页
多角色账号系统
数据库驱动的表单系统
复杂动画
过多三维视觉效果
```

说明：

第一版重点是快速上线、表达清楚、便于后续迭代，而不是一次性完成完整官网。

---

## 10. 预留但暂不完整开发的 URL 结构

未来可扩展为：

```text
/en/products/short-drama/
/zh/products/short-drama/

/en/products/ai-game/
/zh/products/ai-game/

/en/products/api-hub/
/zh/products/api-hub/

/en/partnerships/
/zh/partnerships/

/en/resources/
/zh/resources/
```

第一版中，产品卡片可以暂时跳转到：

- 首页内对应 section
- waitlist 表单
- contact 页面

不要创建内容空泛的产品独立页面。

---

## 11. 首页页面结构

### 11.1 顶部导航栏

导航项建议：

英文：

```text
Products
Who We Serve
Partnerships
FAQ
Contact
中文
```

中文：

```text
产品
服务对象
合作
常见问题
联系我们
English
```

导航栏要求：

- 桌面端横向导航。
- 移动端使用折叠菜单或简化导航。
- 始终包含语言切换入口。
- CTA 按钮建议放在右侧：`Contact Us` / `联系我们`。

---

### 11.2 Hero 首屏

目的：

让用户在 5 秒内理解 Metis 是谁、做什么、下一步可以点哪里。

英文文案：

```text
Headline:
AI products for creators, learners, and teams.

Subheadline:
Metis is building tools for AI short drama production, multimodal model exploration, and intelligent API workflows.

Primary CTA:
Explore Products

Secondary CTA:
Contact Us
```

中文文案：

```text
主标题：
为创作者、学习者与组织构建 AI 产品。

副标题：
Metis 正在构建覆盖 AI 短剧、AI 游戏和 AI 开发者工具的 AIGC 产品矩阵。

主按钮：
查看产品

次按钮：
联系我们
```

视觉要求：

- 简洁、现代、科技感，但不要过度赛博朋克。
- 建议浅色背景，局部使用柔和渐变。
- 首屏要清楚，不要让复杂动效影响加载速度。
- 移动端首屏按钮必须清楚可点击。

---

### 11.3 Product Matrix 产品矩阵

目的：

展示 Metis 当前 Claude Design 原型中的三条产品线，并保留现有视觉结构。

英文标题：

```text
Three product lines.
```

中文标题：

```text
三条产品线。
```

英文副标题：

```text
From content (short drama) to entertainment (games) to developer tooling (API hub) — hunting for the highest-leverage layers of the AIGC stack.
```

中文副标题：

```text
从内容（短剧）、到娱乐（游戏）、再到开发者工具（API 平台），在 AIGC 全栈上寻找最有价值的应用层。
```

三个产品卡片应优先保持 Claude Design 原型中的视觉顺序与展示方式。

#### 产品卡片 1：AI Short Drama Platform

英文：

```text
Name:
AI Short Drama Platform

Description:
Scripts in, publishable vertical drama out. Auto paneling, character consistency, lip-sync, voiceover, subtitles and BGM — end-to-end.

Meta:
pipeline.v1.4 · 9:16 · 60fps

CTA:
See more
```

中文：

```text
名称：
AI Short Drama Platform

说明：
以剧本为入口，自动完成分镜、角色一致性、口型同步、配音、字幕与 BGM 编排——端到端产出可发布的竖屏短剧。

元信息：
pipeline.v1.4 · 9:16 · 60fps

按钮：
查看更多
```

#### 产品卡片 2：AI API Hub

英文：

```text
Name:
AI API Hub

Description:
One account for every frontier LLM. Side-by-side comparison, unified billing, prompt marketplace. OpenAI-compatible — no juggling keys.

Meta:
unified API · OpenAI compat

CTA:
Learn more
```

中文：

```text
名称：
AI API Hub

说明：
一个账号调用所有主流大模型：多模型并排对比、统一计费、提示词社区分享。OpenAI 兼容接口，免去多套密钥的管理成本。

元信息：
unified API · OpenAI compat

按钮：
了解更多
```

#### 产品卡片 3：AI Game

英文：

```text
Name:
AI Game

Description:
AI plays games × AI builds games: smart NPCs, auto-QA, player companions; plus art assets, design docs, and engine-plugin codegen.

Meta:
agents · assets · design · codegen

CTA:
Learn more
```

中文：

```text
名称：
AI Game

说明：
AI 玩游戏 × AI 造游戏两个方向：智能 NPC、自动测试、玩家陪伴；以及美术资源、设计文档与引擎插件级的 AI 辅助编程。

元信息：
agents · assets · design · codegen

按钮：
了解更多
```

AI Game 卡片应包含两组能力展示：

```text
AI plays games:
Smart NPC / Auto-QA / Player companion / Live coach

AI builds games:
Art assets / Design docs / Engine codegen / Animation
```

移动端要求：

- 三个产品卡片可纵向排列。
- AI Game 的两组能力在移动端可改为上下两块。
- 不允许出现横向溢出。

---

### 11.4 Featured Product：AI Short Drama Platform

目的：

突出目前最真实的内部能力，即 AI 短剧生产工具。

英文标题：

```text
From internal production tool to creator-facing platform
```

中文标题：

```text
从内部生产工具走向创作者平台
```

英文说明：

```text
Our AI short drama platform is currently used internally to support short drama production. We are continuing to improve the product experience, workflow reliability, and external access before opening it to selected creators and partners.
```

中文说明：

```text
Metis 的 AI 短剧工具目前已用于公司内部短剧生产流程。我们正在继续优化产品体验、工作流稳定性和外部访问能力，并计划逐步面向创作者和合作伙伴开放。
```

能力点：

英文：

```text
Script and story development
Storyboard and scene planning
AI-generated creative assets
Video production workflow support
Creator and studio collaboration
```

中文：

```text
剧本与故事创作辅助
分镜与场景规划
AI 创意素材生成
视频生产流程支持
创作者与内容团队协作
```

CTA：

英文：

```text
Request Demo
Contact for Collaboration
```

中文：

```text
预约演示
联系合作
```

---

### 11.5 Who We Serve 服务对象

目的：

让不同类型用户快速判断自己是否适合 Metis。

英文标题：

```text
Who we serve
```

中文标题：

```text
我们服务谁
```

用户卡片：

英文：

```text
AI creators and short drama teams
For creators, studios, and content teams exploring AI-assisted production.

Students and AI learners
For students and beginners who want to understand and experience modern AI models.

Companies and institutions
For universities, enterprises, and organizations looking for AI product or education partnerships.

Game developers and studios
For teams exploring smart NPCs, auto-QA, player companions, game asset generation, design docs, and engine-plugin codegen.

Developers and technical teams
For teams interested in AI API access, multi-model workflows, and developer tooling.
```

中文：

```text
AI 创作者与短剧团队
面向正在探索 AI 辅助内容生产的创作者、工作室和内容团队。

高校学生与 AI 学习者
面向希望理解和体验现代 AI 模型能力的学生与初学者。

企业、高校与机构
面向希望开展 AI 产品、AI 教育或内容生产合作的组织。

游戏开发者与游戏工作室
面向正在探索智能 NPC、自动测试、玩家陪伴、游戏资产生成、设计文档和引擎插件代码生成的团队。

开发者与技术团队
面向关注 AI API 接入、多模型工作流和开发者工具的团队。
```

---

### 11.6 Capabilities 能力模块

目的：

概括 Metis 的能力方向，但不夸大具体成熟度。

英文标题：

```text
What we are building
```

中文标题：

```text
我们正在构建什么
```

能力项：

英文：

```text
AI content generation
AI game agents and game asset workflows
Multimodal model exploration
Short drama production workflows
API access and model workflow planning
University and enterprise collaboration
```

中文：

```text
AI 内容生成
AI 游戏智能体与游戏资产工作流
多模态模型体验
短剧生产工作流
API 接入与模型工作流规划
高校与企业合作
```

说明要求：

- 不要写成所有能力已经完全上线。
- 应使用 `building`、`developing`、`planning`、`exploring` 等措辞。
- 中文中应使用“正在构建”、“计划”、“探索”、“逐步开放”等表述。

---

### 11.7 Partnership 合作入口

目的：

为高校、企业、内容团队提供明确合作入口。

英文标题：

```text
Partner with Metis
```

中文标题：

```text
与 Metis 合作
```

英文说明：

```text
We welcome conversations with universities, enterprises, creator teams, and AI communities interested in AI education, content production, model exploration, or product collaboration.
```

中文说明：

```text
我们欢迎高校、企业、创作者团队和 AI 社区与 Metis 交流合作，合作方向包括 AI 教育、内容生产、模型体验和产品共创。
```

合作类型：

英文：

```text
University partnerships
Enterprise AI initiatives
Creator and studio collaboration
AI education and workshops
Product and API collaboration
```

中文：

```text
高校合作
企业 AI 项目合作
创作者与内容团队合作
AI 教育与工作坊
产品与 API 合作
```

CTA：

英文：

```text
Contact Us
```

中文：

```text
联系我们
```

---

### 11.8 FAQ 常见问题

目的：

增强 SEO/AEO，同时回答用户对产品状态和合作方式的关键疑问。

#### FAQ 英文版

```text
Q: What is Metis?
A: Metis is a Singapore-registered AIGC company building products across AI short drama, AI games, and AI developer tooling.

Q: What are Metis' product lines?
A: The current product lines shown in the Claude Design prototype are AI Short Drama Platform, AI Game, and AI API Hub.

Q: What is AI Game?
A: AI Game is Metis' product direction for game entertainment and game development workflows. It focuses on “AI plays games × AI builds games”, including smart NPCs, auto-QA, player companions, live coaching, art assets, design docs, engine-plugin codegen, and animation workflows.

Q: Is the AI Short Drama Platform available to the public?
A: The page should follow the latest internally confirmed product status. If it is not yet publicly available, the page should direct users to email Metis for collaboration or access discussions.

Q: What is AI API Hub?
A: AI API Hub is Metis' developer tooling direction for multi-model API access, side-by-side model comparison, unified API workflows, and OpenAI-compatible integration.

Q: Can universities, companies, or game teams work with Metis?
A: Yes. Metis welcomes conversations with universities, enterprises, creator teams, game teams, developers, and AI communities.

Q: How can I contact Metis?
A: You can reach us at tech@metisdata.ai.
```

#### FAQ 中文版

```text
Q: Metis 是什么？
A: Metis 是一家注册在新加坡的 AIGC 公司，当前围绕 AI 短剧、AI 游戏和 AI 开发者工具构建产品矩阵。

Q: Metis 当前有哪些产品线？
A: 当前 Claude Design 原型中展示的产品线包括 AI Short Drama Platform、AI Game 和 AI API Hub。

Q: AI Game 是什么？
A: AI Game 是 Metis 面向游戏娱乐与游戏开发工作流的产品方向，核心叙事是 “AI 玩游戏 × AI 造游戏”，包括智能 NPC、自动测试、玩家陪伴、实时教练、美术资源、游戏设计文档、引擎插件代码生成和动画工作流。

Q: AI 短剧生成平台现在可以公开使用吗？
A: 页面应以内部确认的最新状态为准。如果尚未公开开放，应引导用户通过邮件联系 Metis 讨论合作或访问申请。

Q: AI API Hub 是什么？
A: AI API Hub 是 Metis 面向开发者工具的产品方向，覆盖多模型 API 调用、多模型并排对比、统一 API 工作流和 OpenAI-compatible 接入体验。

Q: 高校、企业或游戏团队可以与 Metis 合作吗？
A: 可以。Metis 欢迎高校、企业、创作者团队、游戏团队、开发者和 AI 社区围绕 AIGC 产品、内容生产、游戏智能体、API 工具和技术交流展开合作。

Q: 如何联系 Metis？
A: 可以通过 tech@metisdata.ai 联系我们。
```

---

### 11.9 Final CTA 最终行动区

英文：

```text
Ready to explore what Metis is building?

Explore our AI product directions or contact us for collaboration.

Buttons:
Explore Products
Contact Us
```

中文：

```text
想了解 Metis 正在构建的 AI 产品？

你可以查看我们的产品方向，或联系我们讨论合作机会。

按钮：
查看产品
联系我们
```

---

### 11.10 Footer 页脚

内容：

英文：

```text
Metis
AI products for creators, learners, and teams.

Contact: tech@metisdata.ai

Navigation:
Products
Partnerships
FAQ
Contact

Language:
English
中文
```

中文：

```text
Metis
为创作者、学习者与组织构建 AI 产品。

联系邮箱：tech@metisdata.ai

导航：
产品
合作
常见问题
联系我们

语言：
English
中文
```

页脚需包含：

```text
© 当前年份 Metis. All rights reserved.
```

---

## 12. Contact 页面

### 12.1 页面路径

```text
/en/contact/
/zh/contact/
```

### 12.2 页面目标

Contact 页面用于企业、高校、创作者团队、开发者和潜在合作伙伴联系 Metis。

第一版可以不自建表单，先展示邮箱和外部表单链接。

### 12.3 英文文案

```text
Title:
Contact Metis

Subtitle:
Interested in AI content creation, model exploration, or partnership opportunities? Reach out to us.

Email:
tech@metisdata.ai

Sections:
Partnership inquiries
Creator and studio collaboration
University and education partnerships
Developer and API collaboration
General questions
```

### 12.4 中文文案

```text
标题：
联系 Metis

副标题：
如果你对 AI 内容创作、模型体验或合作机会感兴趣，欢迎联系我们。

邮箱：
tech@metisdata.ai

联系方向：
合作咨询
创作者与内容团队合作
高校与 AI 教育合作
开发者与 API 合作
一般问题咨询
```

---

## 13. 表单策略

### 13.1 第一版建议

第一版不开发自建表单后端。

建议使用外部表单工具，例如：

```text
Tally
Google Forms
Typeform
Airtable Forms
```

推荐优先级：

```text
1. Tally
2. Google Forms
3. Typeform
```

### 13.2 表单用途

至少准备两个表单：

#### 表单 1：Join Waitlist

用途：收集个人用户、学生、AI 初学者、创作者、开发者的早期访问需求。

字段建议：

```text
Name
Email
User Type
Interested Product
How would you like to use Metis?
```

中文：

```text
姓名
邮箱
用户类型
感兴趣的产品
你希望如何使用 Metis？
```

用户类型选项：

```text
Creator
Student
Developer
AI learner
Company / Institution
Other
```

感兴趣产品选项：

```text
AI Short Drama Platform
AI Game
AI API Hub
```

#### 表单 2：Partnership / Contact

用途：收集高校、企业、机构、内容团队合作需求。

字段建议：

```text
Name
Work Email
Organization
Role
Partnership Type
Message
```

中文：

```text
姓名
工作邮箱
公司或学校
职位/身份
合作类型
合作需求
```

合作类型选项：

```text
University partnership
Enterprise partnership
Creator / studio collaboration
AI short drama production
API / developer collaboration
Other
```

### 13.3 表单链接占位符

开发时使用以下环境变量或配置项占位：

```text
NEXT_PUBLIC_WAITLIST_FORM_URL=
NEXT_PUBLIC_CONTACT_FORM_URL=
```

如暂时没有表单链接，按钮可跳转到 Contact 页面或使用 `mailto:tech@metisdata.ai`。

---

## 14. CTA 策略

### 14.1 全站主 CTA

英文：

```text
Explore Products
Contact Us
```

中文：

```text
查看产品
联系我们
```

### 14.2 产品 CTA

AI Short Drama Platform：

```text
See more
Get in touch
```

中文：

```text
查看更多
联系我们
```

AI API Hub：

```text
Learn more
Get in touch
```

中文：

```text
了解更多
联系我们
```

AI Game：

```text
Learn more
Get in touch
```

中文：

```text
了解更多
联系我们
```

重要说明：

```text
产品 CTA 应优先保留 Claude Design 原型中的按钮文案和链接行为。
如果当前原型统一使用 mailto:tech@metisdata.ai，则第一版可继续使用该方式。
```

### 14.3 CTA 行为

第一版中：

- `Explore Products` / `查看产品` 跳转到首页产品矩阵 section。
- `Contact Us` / `联系我们` 跳转到对应语言的 contact 页面。
- `Join Waitlist` 跳转到 waitlist 表单或 contact 页面。
- `Request Demo` 跳转到 contact 页面或 partnership 表单。

---

## 15. 视觉设计要求

### 15.1 整体风格

本项目的视觉风格应以 Claude Design 原型为准。

核心风格关键词：

```text
深色高级科技感
AI-native
terminal-inspired
technical but polished
可信
现代
国际化
适合 AI 产品公司
适合技术、创作者、企业与高校合作方
```

必须保留或尽量还原：

```text
深色背景
Metis 当前 logo
当前 accent 色
Hero 区域的 terminal / workflow 视觉
产品卡片风格
整体空间感与技术氛围
```

避免：

```text
改成浅色 SaaS 模板风格
重新设计品牌视觉
过度赛博朋克
过度炫酷动画
过多发光效果导致文字不可读
不成熟的卡通风格
密集堆砌信息
```

### 15.2 颜色建议

颜色系统应从 Claude Design 原型中提取，不要由 Codex 自行重设。

建议处理方式：

```text
从现有 styles.css / 原型截图中提取背景色、主文字色、次级文字色、accent 色、卡片色和边框色
迁移到 Tailwind theme 或 CSS variables
保持当前深色高级视觉方向
```

如果必须新增颜色，应与原型中的主色和暗色背景协调，不得引入破坏整体风格的高饱和杂色。

### 15.3 字体与排版

要求：

- 移动端优先。
- 标题层级清晰。
- 每个 section 留足空白。
- 中英文页面都要保证可读性。
- 不要把重要文字放进图片中。

### 15.4 响应式要求

必须支持：

```text
移动端
平板
桌面端
```

移动端要求：

- CTA 按钮容易点击。
- 导航不拥挤。
- 产品卡片纵向排列。
- 字体不小于可读标准。

---

## 16. 技术栈要求

推荐技术栈：

```text
Next.js
TypeScript
Tailwind CSS
React
```

建议使用：

```text
Next.js App Router
静态导出或 Node.js runtime 二选一
```

第一版如无服务端逻辑，优先考虑静态导出。

---

## 17. 推荐项目结构

```text
metis-landing-page/
  app/
    layout.tsx
    page.tsx
    en/
      page.tsx
      contact/
        page.tsx
    zh/
      page.tsx
      contact/
        page.tsx
    robots.ts
    sitemap.ts
  components/
    Navbar.tsx
    Hero.tsx
    ProductMatrix.tsx
    FeaturedProduct.tsx
    WhoWeServe.tsx
    Capabilities.tsx
    Partnership.tsx
    FAQ.tsx
    FinalCTA.tsx
    Footer.tsx
    LanguageSwitcher.tsx
  lib/
    siteConfig.ts
    content.ts
    seo.ts
  public/
    logo.svg
  next.config.js
  package.json
  README.md
  SPEC.md
  DESIGN.md
```

说明：

- 所有中英文文案建议集中在 `lib/content.ts` 中。
- 品牌、邮箱、表单链接、域名等配置放在 `lib/siteConfig.ts` 中。
- SEO metadata 逻辑放在 `lib/seo.ts` 中。

---

## 18. 配置文件要求

### 18.1 siteConfig.ts

应包含：

```ts
export const siteConfig = {
  name: "Metis",
  domain: "https://metisdata.ai",
  contactEmail: "以 Claude Design 原型中的邮箱为准",
  waitlistFormUrl: process.env.NEXT_PUBLIC_WAITLIST_FORM_URL || "",
  contactFormUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "",
  defaultLocale: "en",
  locales: ["en", "zh"],
};
```

### 18.2 content.ts

应集中管理：

- 英文首页文案
- 中文首页文案
- 产品状态
- CTA 文案
- FAQ 内容
- Contact 页面内容

---

## 19. 多语言要求

### 19.1 路由

必须支持：

```text
/en/
/zh/
/en/contact/
/zh/contact/
```

### 19.2 语言切换

每个页面都必须有语言切换入口。

英文页切换到中文页：

```text
/zh/
```

中文页切换到英文页：

```text
/en/
```

Contact 页面语言切换：

```text
/en/contact/ <-> /zh/contact/
```

### 19.3 根路径语言检测

如果实现自动语言检测：

```text
/ 根据浏览器语言跳转
zh 开头的语言跳转 /zh/
其他语言跳转 /en/
```

必须避免无限重定向。

---

## 20. SEO 要求

### 20.1 基础 SEO

每个页面必须包含：

```text
唯一 title
唯一 meta description
canonical URL
Open Graph title
Open Graph description
Open Graph URL
语言属性
```

### 20.2 英文首页 metadata 建议

```text
Title:
Metis | AI Products for Creators, Learners, and Teams

Description:
Metis builds AIGC products across AI short drama, AI games, and AI developer tooling.
```

### 20.3 中文首页 metadata 建议

```text
Title:
Metis | 面向创作者、学习者与组织的 AI 产品

Description:
Metis 正在构建覆盖 AI 短剧、AI 游戏和 AI 开发者工具的 AIGC 产品矩阵。
```

### 20.4 英文 Contact 页面 metadata

```text
Title:
Contact Metis | AI Product Partnerships

Description:
Contact Metis for AI content creation, model exploration, university partnerships, enterprise collaboration, and developer opportunities.
```

### 20.5 中文 Contact 页面 metadata

```text
Title:
联系 Metis | AI 产品与合作咨询

Description:
联系 Metis，了解 AI 内容创作、模型体验、高校合作、企业合作和开发者合作机会。
```

### 20.6 Sitemap

必须生成：

```text
/sitemap.xml
```

包含：

```text
https://metisdata.ai/en/
https://metisdata.ai/zh/
https://metisdata.ai/en/contact/
https://metisdata.ai/zh/contact/
```

未来产品页上线后再加入 sitemap。

### 20.7 Robots

必须生成：

```text
/robots.txt
```

建议内容：

```text
User-agent: *
Allow: /

Sitemap: https://metisdata.ai/sitemap.xml
```

### 20.8 Hreflang

英文和中文页面之间必须设置 hreflang。

示例：

```html
<link rel="alternate" href="https://metisdata.ai/en/" hreflang="en" />
<link rel="alternate" href="https://metisdata.ai/zh/" hreflang="zh" />
<link rel="alternate" href="https://metisdata.ai/en/" hreflang="x-default" />
```

Contact 页面也需要对应 hreflang。

---

## 21. AEO 要求

AEO 即 Answer Engine Optimization，目标是让 AI 搜索、问答引擎和摘要系统更容易理解 Metis。

### 21.1 必须包含清晰定义

首页应直接回答：

英文：

```text
What is Metis?
Metis is an AI product company building tools for creators, learners, and teams across AI content creation, model exploration, and intelligent workflows.
```

中文：

```text
Metis 是什么？
Metis 是一家 AI 产品公司，正在构建面向创作者、学习者与组织的 AI 内容创作、模型体验和智能工作流工具。
```

### 21.2 FAQ 必须存在

FAQ 内容应使用真实、具体、克制的表达，不得营销空泛。

### 21.3 不得虚构

不得虚构：

```text
客户案例
融资信息
合作高校
合作企业
产品已开放状态
模型支持列表
价格信息
API SLA
```

### 21.4 文本优先

重要信息必须用页面文本呈现，不要只放在图片、视频或动画里。

---

## 22. 结构化数据要求

### 22.1 Organization JSON-LD

首页应加入 Organization 结构化数据。

示例：

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Metis",
  "url": "https://metisdata.ai",
  "email": "tech@metisdata.ai",
  "description": "Metis builds AI products for creators, learners, and teams.",
  "sameAs": []
}
```

如果暂时没有 logo、社交媒体链接或公开地址，不要编造。

### 22.2 WebSite JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Metis",
  "url": "https://metisdata.ai"
}
```

### 22.3 FAQPage JSON-LD

FAQ section 可以添加 FAQPage 结构化数据。

要求：

- JSON-LD 中的问题和答案必须与页面可见内容一致。
- 中文页使用中文 FAQ。
- 英文页使用英文 FAQ。

---

## 23. 部署要求：BytePlus ECS + Cloudflare

### 23.1 目标架构

```text
用户浏览器
  ↓
Cloudflare DNS / CDN / SSL
  ↓
BytePlus ECS
  ↓
Nginx
  ↓
Next.js app 或静态文件
```

### 23.2 推荐部署方式

第一版推荐优先考虑：

```text
Next.js static export + Nginx 静态托管
```

原因：

- 页面内容静态为主。
- 无需 Node.js 常驻服务。
- 部署简单。
- 稳定性高。
- 服务器维护成本低。

如果后续需要服务端功能，再切换为：

```text
Next.js Node.js runtime + PM2 + Nginx reverse proxy
```

### 23.3 ECS 服务器要求

服务器需要安装：

```text
Nginx
Node.js LTS
npm 或 pnpm
Git
```

如采用静态导出，构建可以在本地或 CI 中完成，服务器只需要 Nginx 托管构建产物。

### 23.4 Nginx 基础要求

Nginx 应支持：

```text
HTTPS
静态文件托管
gzip 或 brotli 压缩
404 fallback
缓存控制
```

### 23.5 Cloudflare 配置要求

Cloudflare 中需要配置：

```text
DNS 记录指向 BytePlus ECS 公网 IP
SSL/TLS 使用 Full 或 Full (strict)
开启 HTTPS
配置 www 与根域名访问策略
开启基础防护
开启 Cloudflare Web Analytics（可选但推荐）
```

不要使用：

```text
Flexible SSL
```

因为它容易造成 HTTPS 重定向问题。

---

## 24. 安全与隐私要求

第一版没有用户登录和自建数据库，因此安全范围较小。

必须做到：

```text
全站 HTTPS
不暴露服务器敏感信息
不在前端写入密钥
表单链接不包含敏感 token
如使用第三方表单，确认提交数据可访问权限
```

如果后续收集用户邮箱，需要准备基础隐私政策页面。

第一版如只使用外部表单，可以暂时不做复杂隐私政策，但建议后续补充：

```text
/en/privacy/
/zh/privacy/
```

---

## 25. 性能要求

第一版目标：

```text
移动端加载快
首屏清晰
无大型阻塞资源
图片压缩
字体加载合理
避免不必要的大型依赖
```

技术要求：

- 避免引入大型 UI 框架。
- 避免复杂动画库，除非确有必要。
- 图片使用 WebP 或 SVG。
- Logo 使用 SVG。
- 首屏尽量不依赖大图。

---

## 26. 可访问性要求

必须满足基础可访问性：

```text
按钮可通过键盘访问
图片有 alt
颜色对比度足够
表单链接语义清楚
H1/H2/H3 层级合理
导航结构清晰
```

---

## 27. 开发任务清单

Codex 或开发者应按以下顺序执行。

### 27.1 初始化项目

```text
创建 Next.js + TypeScript + Tailwind CSS 项目
配置 App Router
配置基本 lint 和 build 命令
```

### 27.2 创建基础结构

```text
创建 /en 页面
创建 /zh 页面
创建 /en/contact 页面
创建 /zh/contact 页面
创建共享 layout
创建导航栏和页脚
```

### 27.3 创建组件

```text
Navbar
Hero
ProductMatrix
FeaturedProduct
WhoWeServe
Capabilities
Partnership
FAQ
FinalCTA
Footer
LanguageSwitcher
```

### 27.4 配置内容

```text
将中英文文案放入 lib/content.ts
将品牌、域名、邮箱和表单链接放入 lib/siteConfig.ts
```

### 27.5 实现 SEO/AEO

```text
配置 metadata
配置 canonical
配置 hreflang
生成 sitemap.xml
生成 robots.txt
添加 Organization JSON-LD
添加 WebSite JSON-LD
添加 FAQPage JSON-LD
```

### 27.6 实现语言跳转

```text
/ 根据浏览器语言跳转到 /zh/ 或 /en/
或先默认跳转 /en/
```

### 27.7 实现 CTA 行为

```text
Explore Products 跳转产品矩阵
Contact Us 跳转 contact 页面
Join Waitlist 跳转表单或 contact 页面
Request Demo 跳转 contact 页面
```

### 27.8 本地验证

```text
npm install
npm run dev
npm run build
检查 /en /zh /en/contact /zh/contact
```

### 27.9 准备部署

```text
根据 BytePlus ECS 方案准备 build 输出
准备 Nginx 配置
准备部署说明 README
```

---

## 28. 给 Codex 的初始 Prompt

当前项目不应从零重新设计，而应基于已有 Claude Design 原型进行工程化升级。可以将以下 prompt 交给 Codex：

```text
请先阅读项目根目录中的 SPEC.md、DESIGN.md，并检查当前 Claude Design landing page 原型代码。

最高优先级原则：
1. 当前 Claude Design 原型是视觉基准。
2. 当前原型中的 logo、联系邮箱、产品名称和产品信息是当前业务基准，除非我明确要求，否则不要擅自替换。
3. 不要重新设计页面。
4. 不要改成浅色 SaaS 风格。
5. 不要偏离当前深色、高级、技术感、terminal-inspired 的视觉方向。
6. SPEC.md 的作用是补齐正式项目需要的工程能力，包括多语言路由、SEO/AEO、sitemap、robots、JSON-LD、Contact 页面、BytePlus ECS + Nginx + Cloudflare 部署支持和验收标准。

任务目标：
将当前 Claude Design landing page 原型升级为一个正式、可维护、可部署的 landing page 项目。

技术方向：
- 优先采用 Next.js App Router
- 使用 TypeScript
- 使用 Tailwind CSS
- 可以从当前原型的 CSS 中提取颜色、布局、动效和视觉变量
- 尽量还原当前 Claude Design 的视觉效果
- 保留当前 logo、主色、背景风格、terminal 视觉和整体布局氛围
- 保留当前产品信息和联系邮箱
- 修复当前移动端布局问题，尤其是标题、terminal 区域和卡片可能出现的溢出问题

必须实现：
- /en/ 英文首页
- /zh/ 中文首页
- /en/contact/ 英文联系页面
- /zh/contact/ 中文联系页面
- / 根路径根据浏览器语言跳转，或默认跳转 /en/
- 每个页面都有语言切换入口
- 所有中英文文案集中管理
- 所有品牌、邮箱、域名、表单链接集中配置
- SEO metadata
- canonical
- hreflang
- sitemap.xml
- robots.txt
- Organization JSON-LD
- WebSite JSON-LD
- 如果页面包含 FAQ，则添加 FAQPage JSON-LD
- npm install、npm run dev、npm run build 必须正常运行
- 准备 BytePlus ECS + Nginx + Cloudflare 部署说明

请先不要直接大规模改代码。
请先输出：
1. 你对当前项目结构的理解
2. 你准备保留的视觉元素
3. 你准备保留的业务信息，包括 logo、邮箱、产品名称
4. 你准备补齐的 SPEC 要求
5. DESIGN.md 中必须遵守的视觉规则
6. 推荐的新项目结构
7. 可能存在的风险
等我确认后，再开始实现。
```

如果 Codex 已经完成上述审计并得到确认，再使用第二条 prompt 开始实现：

```text
现在请根据刚才确认的方案开始工程化重构。

请创建 Next.js + TypeScript + Tailwind CSS 项目结构，并迁移当前 Claude Design 原型的视觉、内容和资源。

要求：
- 视觉尽量贴近原型
- 内容以原型为准
- 工程能力以 SPEC.md 为准
- 视觉还原以 DESIGN.md 和 Claude Design 原型为准
- 每完成一个主要阶段，请运行构建或检查，并说明完成情况
```

---

## 29. 验收标准

### 29.1 页面验收

必须满足：

```text
/en/ 可访问
/zh/ 可访问
/en/contact/ 可访问
/zh/contact/ 可访问
/ 可正确跳转或展示默认语言
导航栏正常
语言切换正常
所有 CTA 可点击
移动端布局正常
桌面端布局正常
```

### 29.2 内容验收

必须满足：

```text
Metis 定位清楚
Claude Design 原型中确认的产品方向展示清楚
产品状态展示清楚
没有夸大未完成产品
中英文内容语义一致
Contact 邮箱与 Claude Design 原型确认的邮箱一致
FAQ 可见
```

### 29.3 视觉验收

必须满足：

```text
重构后的桌面端首屏与 Claude Design 原型保持同一视觉方向
深色、高级、terminal-inspired 的品牌气质没有丢失
Metis logo、主色、背景风格和产品卡片视觉被保留
Hero 区域 terminal / workflow 视觉没有被删除或大幅弱化
CTA 按钮层级清晰
移动端无横向溢出
移动端 terminal 区域、标题和产品卡片布局正常
实现结果符合 DESIGN.md 中的视觉验收标准
```

### 29.4 SEO/AEO 验收

必须满足：

```text
每页有唯一 title
每页有唯一 description
每页 canonical 正确
/en 和 /zh 有 hreflang
sitemap.xml 可访问
robots.txt 可访问
Organization JSON-LD 存在
WebSite JSON-LD 存在
FAQPage JSON-LD 存在
H1 每页只有一个
重要内容为文本，不是图片
```

### 29.5 技术验收

必须满足：

```text
npm install 成功
npm run dev 成功
npm run build 成功
无明显 console error
无明显 404 静态资源
页面加载速度可接受
```

### 29.6 部署验收

必须满足：

```text
metisdata.ai 可访问
HTTPS 正常
Cloudflare DNS 生效
Cloudflare SSL/TLS 配置为 Full 或 Full (strict)
Nginx 正常返回页面
www 与根域名策略清楚
无重定向循环
```

---

## 30. 后续迭代路线

### 30.1 第二版

当 AI 短剧工具具备对外演示能力后，增加：

```text
/en/products/short-drama/
/zh/products/short-drama/
```

内容包括：

```text
产品介绍
适用对象
核心能力
demo 截图或视频
申请试用表单
FAQ
```

### 30.2 第三版

当 AI Game 具备更明确的外部展示能力后，增加：

```text
/en/products/ai-game/
/zh/products/ai-game/
```

内容包括：

```text
AI plays games 能力说明
AI builds games 能力说明
智能 NPC / Auto-QA / Player companion / Live coach
Art assets / Design docs / Engine codegen / Animation
适用对象
合作或体验申请入口
FAQ
```

### 30.3 第四版

当 AI API Hub 有明确开发者能力后，增加：

```text
/en/products/api-hub/
/zh/products/api-hub/
```

内容包括：

```text
API 服务说明
多模型对比能力
OpenAI-compatible 接入说明
开发者申请
文档入口
FAQ
```

### 30.4 公司官网阶段

当具备以下条件后，再升级为完整公司官网：

```text
至少一个成熟对外产品
真实客户或合作案例
稳定注册/试用流程
明确商业模式
内容或资源沉淀
招聘或品牌传播需求
```

届时网站结构可扩展为：

```text
Home
Products
Solutions
Resources
Company
Contact
```

---

## 31. 第一版最终交付物

第一版项目完成后，应交付：

```text
可运行的 Next.js 项目
中英文首页
中英文联系页
SEO/AEO 基础配置
sitemap.xml
robots.txt
结构化数据
BytePlus ECS 部署说明
Nginx 配置示例
Cloudflare 配置说明
README.md
SPEC.md
DESIGN.md
```

---

## 32. 重要原则

开发过程中必须遵守以下原则：

1. **真实**：不虚构产品能力、客户案例、合作关系或上线状态。
2. **清晰**：让用户快速理解 Metis 是什么、做什么、下一步点哪里。
3. **克制**：第一版不追求大而全，优先上线和验证。
4. **可扩展**：URL、组件、内容结构要为未来产品页和完整官网预留空间。
5. **SEO/AEO 友好**：重要内容文本化、结构清楚、FAQ 明确、metadata 完整。
6. **移动端优先**：移动端体验必须优先保证。
7. **便于 Codex 修改**：文案、配置、组件结构要清楚，避免难维护的复杂实现。

---

## 33. 当前推荐决策汇总

```text
品牌展示名：Metis
域名：metisdata.ai
视觉基准：已有 Claude Design 原型
logo：以 Claude Design 原型为准
联系邮箱：以 Claude Design 原型中已确认邮箱为准
产品信息：以 Claude Design 原型中已确认产品信息为准
网站类型：公司首页式 landing page
默认语言策略：自动检测，保留 /en/ 和 /zh/ 独立 URL
第一版页面：/en/、/zh/、/en/contact/、/zh/contact/
第一版不做：登录、后台、支付、博客、CMS
部署目标：BytePlus ECS + Nginx + Cloudflare
前端技术：Next.js + TypeScript + Tailwind CSS
表单策略：优先外部表单工具，暂不自建后端
SEO/AEO：第一版必须实现基础配置
工程策略：以 Claude Design 为视觉和内容基准，以 SPEC.md 为工程和上线标准，以 DESIGN.md 为视觉还原标准
```

---

## 34. 当前开发进入方式

当前阶段的目标不是让 Codex 从零生成一个新页面，而是让 Codex 先审计并工程化重构现有 Claude Design 原型。

推荐进入开发的顺序：

```text
Step 1：把 SPEC.md 放在项目根目录
Step 2：把 Claude Design 原型文件也放在同一个项目目录，或确保 Codex 能读取原型代码和 assets
Step 3：确认项目根目录包含 SPEC.md、DESIGN.md 和 Claude Design 原型代码
Step 4：将第 28 节第一条 prompt 发给 Codex
Step 4：只让 Codex 先输出审计结果和重构计划，不要立即写代码
Step 5：确认 Codex 是否正确识别 logo、邮箱、产品名称、视觉风格和页面结构
Step 6：确认后，再发送第 28 节第二条 prompt 开始实现
Step 7：实现后运行 npm install、npm run dev、npm run build
Step 8：对照原型截图检查视觉还原度
Step 9：对照本 SPEC 检查 SEO/AEO、多语言、Contact 页面和部署说明
```

第一阶段完成标准：

```text
Codex 已正确理解现有原型
Codex 已明确哪些视觉和业务内容需要保留
新项目结构已经确定
没有擅自替换 logo、邮箱或产品信息
没有把页面改成与原型不同的视觉方向
```

---

## 35. 完成定义

当以下条件全部满足时，认为第一版 Metis landing page 完成：

```text
用户可以通过 https://metisdata.ai 访问网站
用户可以在英文和中文之间切换
用户可以理解 Metis 的公司定位
用户可以看到 AI Short Drama Platform、AI Game、AI API Hub 三条产品线及状态
用户可以通过按钮进入联系或等待名单流程
搜索引擎可以抓取 sitemap 和页面 metadata
页面在移动端和桌面端均正常显示
项目可以由 Codex 或开发者继续维护和扩展
```

