# DESIGN.md

## 1. 设计目标

本项目的视觉目标是保留当前 Claude Design 原型中的深色、高级、技术感、terminal-inspired 的 AI 产品公司风格，并在不明显改变当前视觉效果的前提下，将页面工程化为正式可上线项目。

本文件用于约束 Codex 在重构过程中不要偏离当前设计方向。

## 2. 当前视觉基准

当前 Claude Design 原型是本项目的视觉基准。后续 Next.js + Tailwind CSS 重构必须尽量还原当前原型的整体观感。

必须保留：
- 深色背景
- Metis logo
- 橙色主 accent
- terminal / code / pipeline 风格视觉
- 高级技术感
- 产品卡片布局
- 当前页面的整体品牌气质

## 3. 视觉关键词

- Dark premium
- AI-native
- Technical
- Terminal-inspired
- Product portfolio
- High contrast
- Minimal but expressive
- Futuristic but credible

中文描述：
深色、高级、技术感、可信、AI 原生、适合 AIGC 产品矩阵展示。

## 4. 色彩系统

整体采用深色背景，不要改成浅色 SaaS 风格。

建议保留：
- 主背景：接近黑色或深灰黑
- 主文字：白色或接近白色
- 次级文字：灰色
- 主 accent：Metis 橙色
- 辅助线条：低透明度灰色或橙色
- 卡片背景：深灰、半透明或带轻微边框
- 代码/terminal 区域：深色面板 + 橙色/绿色/灰色点缀

Codex 重构时可以提取现有 CSS 中的实际颜色值，并转化为 Tailwind token 或 CSS variables。

## 5. 字体与排版

整体排版应保持强烈的技术产品感。

要求：
- Hero 标题必须大、清晰、有视觉冲击力
- 正文保持高可读性
- 产品卡片标题清晰
- 状态标签醒目但不过度抢眼
- 中英文页面需要分别检查换行和字重

不要使用过于可爱、卡通或消费级娱乐风格的字体。

## 6. 背景与纹理

必须尽量保留当前原型中的：
- 深色背景
- 网格感
- subtle glow
- 技术感线条或 code/pipeline 氛围

但不得让背景影响文字可读性。

## 7. Hero 区域

Hero 是当前设计最重要的视觉资产，必须重点还原。

必须保留：
- 左侧强标题和描述文案
- 右侧 terminal / code / pipeline 视觉
- 清晰的主 CTA 和次 CTA
- 深色科技感氛围
- Metis 品牌露出

移动端可以调整 terminal 的大小和位置，但不能完全删除。

## 8. Terminal / Code 视觉

Terminal 视觉用于表达 Metis 的 AI pipeline、AIGC workflow、inference、automation 等技术感。

要求：
- 保留 terminal 风格面板
- 保留代码/命令行/状态输出的视觉语言
- 保留 subtle animation，但不要影响性能
- 移动端允许简化动画或缩小面板
- 不要引入大型动画依赖

## 9. 产品卡片

产品卡片用于展示 Metis 的产品矩阵。

要求：
- 保留当前原型的卡片式展示
- 每张卡片包含产品名称、状态、简短说明、CTA
- AI Short Drama、AI API Hub、AI Game 的视觉层级应清楚
- 卡片应有边框、深色背景、hover 或 subtle glow 效果
- 移动端卡片改为单列

## 10. CTA 按钮

CTA 应清晰、可点击、有层级。

要求：
- 主 CTA 使用 Metis 橙色或高对比样式
- 次 CTA 使用 outline / ghost 风格
- 按钮文字清晰
- 移动端按钮宽度和点击区域足够大
- CTA 不应被背景动效淹没

## 11. 动效要求

允许：
- subtle hover
- terminal 文本轻微变化
- 背景微弱 glow
- 卡片 hover
- section 轻微出现动画

禁止：
- 大型 3D 动画
- 影响加载速度的复杂动效
- 过度闪烁
- 自动播放大视频
- 让用户分心的动画

## 12. 移动端适配

移动端必须专门优化。

要求：
- 不允许横向滚动
- Hero 标题不得溢出
- Terminal 面板不得撑破屏幕
- 产品卡片单列展示
- CTA 按钮易点击
- 导航简化
- section 间距适当缩小
- 字体大小保持可读

## 13. SEO/AEO 与视觉关系

重要信息必须用真实文本呈现，不能只作为图片或 canvas 出现。

包括：
- 公司定位
- 产品名称
- 产品说明
- FAQ
- Contact 信息
- CTA 文案

视觉效果不能牺牲 SEO/AEO 可读性。

## 14. 禁止事项

Codex 重构时不得：
- 把页面改成浅色 SaaS 模板
- 替换 Metis logo
- 替换当前确认的邮箱
- 擅自修改产品名称
- 删除 terminal hero 视觉
- 删除深色高级技术感
- 使用大量未确认的产品能力文案
- 引入复杂大型 UI 框架
- 为了实现方便大幅简化视觉

## 15. 视觉验收标准

重构完成后，必须满足：

- 桌面端第一眼与 Claude Design 原型保持同一视觉风格
- 深色、高级、terminal-inspired 的品牌气质没有丢失
- Hero 区域视觉冲击力仍然存在
- 产品卡片清晰、精致、层级明确
- CTA 明显
- 移动端无横向溢出
- 中英文页面都保持良好排版
- 页面看起来不像普通模板站
