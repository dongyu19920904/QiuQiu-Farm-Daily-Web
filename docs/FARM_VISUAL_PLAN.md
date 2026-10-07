# 农场视觉换皮：最小改动方案（2026-10-07）

## 现状与边界

权威前端为 QiuQiu-Farm-Daily-Web-Rebuild，基线 b7626d65f82dfc15f4c99d3d3b060a97d2ecdd80，干净 main；本次分支 codex/farm-visual-theme。技术栈 Hugo 0.147.9 / Hextra，Node 仅用于验收。没有 app/src React 页面、数据库或前端业务 API。现有页面为最新日报、历史详情、归档和搜索；已停用的其他模块保持停用，不新增虚构仓库、商店或金币余额。

实施中发现自动任务正常发布10月7日文章，已fetch并merge远端2a98fe1（没有reset/rebase）；以该远端版本的独立Git归档重新构建业务对照，保留其全部文章和数据。索引比较只规范正文中的CR为空格（Hugo在Windows工作树与干净Git归档构建的行尾差异），词句、LF段落、标题、日期、URL与条目顺序仍精确比较，不修改实际索引生成逻辑。

现有入口：assets/css/custom.css（历史主题），layouts/partials/custom/head-end.html（全站扩展），layouts/docs/list.html / single.html、layouts/daily/single.html（正文），custom/daily-masthead.html（公告板），navbar-title.html（品牌），archive/list.html（往期），search/single.html（独立搜索），custom/footer.html（页脚）。Hextra 原生 html.dark、移动菜单、目录与 FlexSearch；search 页继续使用原 search.js 和 site.css。

## 实施

1. 记录现有内容、数据、配置、JS、i18n 与构建索引/SEO文件指纹。
2. 新增 assets/css/farm-theme.css，通过原 head-end 末尾引入指纹化 CSS。统一 farm tokens 并映射原 daily 变量，不删除/重写历史主题和第三方主题。
3. 自制小体积 SVG：天空白云、远山、草地、菜畦、木屋、栅栏、温室；纯装饰 aria-hidden，不承载功能和重要文字。不复制参考项目资源。复用本站原创蔬菜图标。
4. 公告板增加装饰场景，保留全部文字、时间和链接；品牌加原创 sprout 图标与木牌类。正文保留原 DOM/标题/锚点/来源/图片，主阅读区使用浅奶油面板、木质边框；分节标题木牌化、重点首条金色强调。导航、目录、搜索、归档、页脚用同套色彩，不改变文案或事件绑定。
5. 深色为月夜草地、深绿阅读板，不使用霓虹/故障动效；手机缩短场景、保留17px正文、44px主要触控区；平板和长文本检查。打印移除装饰。

## 素材与风险

已只读参考 smdk000/qq-farm-ui-pro-max 的 dashboard-assets（scene-bg / scene-fg / nameplate）；仓库代码 MIT 不证明全部游戏图像版权，正式产物只用本项目原创 SVG/CSS。标题使用现有中文字体加粗和圆润木牌，正文继续现有字体，不新增远程字体或依赖。装饰禁止 pointer-events，避免遮挡搜索、菜单、链接。通过 CSS 解决，正文不新增游戏状态或游戏接口。

## 验收与交付

- npm test；Hugo production --minify；现有 faithful 静态 SEO/搜索/来源/配图检查。
- 对照修改前后 content/data/i18n/static/js/hugo.yaml 的全部 SHA256；构建 index.json、RSS、sitemap、robots、redirects 一致。
- 实际浏览器检查 1280px / 768px / 390px，日夜、首页/详情/归档/搜索、菜单/主题持久化/全文搜索/锚点、无溢出、图片与正文可读，保存截图及回执。
- 当前 package.json 没有 lint/typecheck/build 脚本，Hugo 为实际构建，不伪称执行不存在的命令。
- 仅前端新农业仓库提交/SSH推送；部署复用新农业 Pages 的既有授权链路，不调用日报模型，不改生成器、来源、Cron、Secrets、DNS或旧项目。验收完成后更新 TASK_STATE/HANDOFF 和素材许可；回滚只回退本次视觉提交并重发静态站。
