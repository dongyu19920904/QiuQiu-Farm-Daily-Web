# 秋秋农场日报实施方案

保存日期：2026-10-04（Asia/Shanghai）。状态：审计后实施；独立项目，旧目录全程只读。

## 可观察交付
可访问的静态网站：首页有六块可操作菜地、当天真实日报及全文入口；四种作物可播种、浇水、收获，刷新与离线恢复不重复奖励。往期正文可搜索、明暗切换、390px 手机无溢出。独立私有生成仓库定时产出并部署 Cloudflare Pages，失败保留旧站。优先 farm.aibioo.cn，缺权限交付 pages.dev。

## 审计与稳定基线
- 原前端 origin 为用户 SSH 仓库，main tracking origin/main。本地 a4fa154d7aa7816ef1e890484e1d6bf35935b594；有修改、删除、未跟踪文件。远端比较落后 1642、领先 0。稳定远端 ab145429e99b2752c3078c333bfe522acd6b0f0b，线上 GitHub Pages 部署 6837283675，对应成功 Actions 37180139322。
- 原后端同为用户 SSH 仓库；main tracking origin/main。本地 b405186880f2e9f6b1aa1a71284c4c3c0c542007，有 13 处 tracked 修改。远端 1a2eb2d71a87f67ed428bea3af258dcf8d9697d6，领先 1、落后 318。生产 Worker cloudflare-ai-lnsight-daily 最后修改 2026-10-03T04:52:35Z；生产配置与定时作为只读快照，禁止修改。
- 新目录此前均不存在。只在任务专用临时目录 shallow/no-checkout 获取远端固定提交；按文件提取可用结构与经验，新仓库 git init，不携带旧 .git、内容、Secrets、workflow 或 wrangler。
- GitHub 用户 dongyu19920904 已登录，repo/workflow 权限。Cloudflare 令牌 active，可读 Pages/Workers；当前只查到 supply Pages，aibioo.cn 查询为空；订阅查询 403，因此不声称套餐、额度或域名归属已核实。专用浏览器 Cloudflare 未登录，已请求用户补充，其他工作继续。

## 复用 / 删除 / 新增
复用：Hugo 静态 Markdown、文章列表、全文 JSON 搜索、系统中文字体及可读排版经验；原生成器的有界请求重试、源时间过滤、事件去重、发布前校验原则。逐文件读远端代码再决定移植，记录许可证。
不迁入：旧文章、AI 商机/账号/广告、雷达/时间线、账户业务配置、旧 Cron/Worker/KV/DNS/凭据/写入 helper、整套主题依赖。若原逻辑依赖 Worker 则改写纯 Node 适配，不复制无用模块。
新增：原生 DOM/CSS/SVG 菜地、独立 Node 来源采集与模型编辑、源证据档案、验收测试、单一私有仓库发布 workflow、公开前端仓库。

## 架构与数据流
公开网页/已验证订阅 → allowlist 采集（超时、robots、低频）→ 标题/正文/发布日期及 URL 证据 → 去重/筛选（新闻最多 7 天，旧技术显式标记）→ 合法已配置模型有限调用 → JSON schema + 来源/数值/危险内容校验 → 原子写 Markdown → Hugo 构建 + SEO/search 校验 → 只提交新前端仓库 → 仅新 Pages 上传。浏览器阅读、搜索和游戏零 API 调用，无 Worker/Cron/KV。
GitHub Actions UTC 00:37（北京时间 08:37）运行，01:49 补跑；workflow_dispatch 可指定日期。并发锁、20 分钟超时、模型最多 2 次、同日期合格内容跳过；失败 artifact 与 run 日志保留，不清空站点。
独立仓库 Secrets 只含必要模型和 Cloudflare 凭据及新前端仓库写入凭据，不导出旧仓库 Secrets。所有 repo/project 常量 allowlist，首跑前隔离测试。

## 内容与来源策略
每天 5–8 条不同事件/技术，来源不少于 3 个独立机构；优先中国农业农村部、全国农技中心、农科院、大学 Extension 和可信农业媒体。先验证实际地址/日期/robots，不编造 RSS。未验证或禁止自动抓取的来源仅记录待接入。
每条写适用人群、环境条件和今天可做的小事。新闻显示真实发布日期；旧技术显示资料更新时间或“未标明”，不冒充当天新闻。不生成天气、产量、农药剂量或安全间隔。只用源支持的简短改写与自然来源链接。原图无明确许可则不使用。
日报另含实操任务、误区及引用；知识判断答案来自该引用。夫人的理念、身份、经验、引语未提供，记录待补充，不编造。

## 游戏规则
六块地，萝卜/生菜/番茄/胡萝卜四种原创 SVG。模拟成熟 60/90/150/120 秒，浇水一次后成长；现实种植周期另行明确提示。每次收获清空该地，库存 +1，归还 2 粒该作物种子。每日知识题正确只奖一次两粒种子，答案错可重读重试，无强迫分享。
存档版本校验、范围校验、损坏备份并恢复、localStorage 不可用改内存并提示。单调保存 lastSeen，后退时钟冻结；前跳超 24 小时按上限恢复并提示，不持续依靠异常时钟奖励。visibilitychange 恢复；跨标签保存冲突不重复收获。文字和按钮在 DOM，无 Canvas-only 信息，手机点击至少 44px。

## 风险、测试、发布与回滚
来源不足不凑数，停在失败日志并保留已发布版本。模型不可用则继续游戏/前端和采集，明确真实生成未验收。Cloudflare 账户订阅/用量读权限不足必须写未核实；域名权限不足先 pages.dev，无购买、无新账户。
测试：采集解析/日期/去重/证据、发布目标隔离、游戏奖励幂等/离线/时钟/坏存档/存储失败；逐条读真实模型整期，Hugo build，latest/search/canonical/Article/Breadcrumb/sitemap/robots；真实浏览器桌面与390px日夜交互、截图及链接；实际部署首页和当期页复核。对照旧仓库 status/hash、旧 Worker Cron 与 DNS 的只读快照，证明没有本任务写入。
回滚：新 Pages 生产部署回滚到已验证 deployment；新前端回退内容 commit 后重新静态部署，保留往期；游戏存档 version 兼容。仅新项目可操作。

## 成本核算边界
单月约 31 次正常生成、少量失败重试；实际 token 使用回执另记，价格依据当前模型合法配置查证。GitHub 私有仓库 Actions 分钟从实际账户额度核对；Cloudflare Pages 静态内容与 Workers CPU/KV 无关。官方 Free 文档额度只能作为参考，不能替代当前账户套餐及剩余额度。未核实处明确标记。

## 实施中的核实与修正
- 用户补充：aibioo.cn 在腾讯云/DNSPod；现有 news.aibioo.cn 前端DNS为 dongyu19920904.github.io，生成 Worker 在当前Cloudflare账户。新 farm 子域无记录。不迁移nameserver，仅新建farm CNAME指向新Pages；不能把Cloudflare无zone解释为用户无域名。
- 旧模型配置403；用户提供当前合法Anthropic配置，小额测试成功。首批自由JSON暴露重复来源、引用拼接和语法错误，门禁阻止发布；改用强制结构化工具结果与来源中预切分的证据编号，主模型最多1次、备选最多1次。
- MOA robots禁止采集，UMN403排除；实际可用技术源UMD/UW/Iowa/RHS。当前首次技术版如实标记，不伪造新闻。通过真实索引发现新技术源，最近30日URL不重复；不足5条停止并保持已发布文章。
- 私有证据全文不放到公开前端；公开前端只存短改写与必要出处。
- 浏览器Neo和Chrome控制接口超时，服务状态就绪仍不足以验收。使用新项目依赖Playwright-core 1.62.1（Apache-2.0）及已有Chromium 151测试网站，用新隔离context，不碰日常浏览器账号。

- 已核实Tencent/DNSPod farm CNAME生效，Cloudflare新Pages自定义域名与证书active；仅新增farm，未改news/根域/nameserver。
- 首期2026-10-04含2条9月30日新闻与5条不同主题技术资料。真实sonnet模型草稿由主编逐条读源、修订政策范围/实验阶段/单位/季节与术语后通过校验；原始回执和修订记录留在私有证据档案。不能把首期编辑校对说成未经人工处理的自动稿。
- 知识题采用4条已经逐条核对来源的轮换题库，答案有真有假，按当期日报日期轮换并限制每期限奖一次。
- 首次浏览器验收Chromium151，1280桌面与390手机日夜画面、交互、搜索、坏存档和存储不可用通过；截图与回执在docs/。

## 2026-10-05产品改版方案
用户要求以AI农业日报为主体、原功能逐项迁移、游戏迁往辅助页。后续依据 [AI_AGRICULTURE_REVISION_PLAN.md](AI_AGRICULTURE_REVISION_PLAN.md)；该文档为本轮方案，尚未实施。保留本文件作为首版实施与审计历史。
