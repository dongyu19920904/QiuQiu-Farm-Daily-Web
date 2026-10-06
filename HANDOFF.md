# 交接与恢复

按已保存的忠实重建方案继续，不要重做设计。现工作目录是两个 Rebuild 候选，原 AI 两个目录和农业旧目录 dirty 文档均保留，不能 reset/rebase/覆盖。

当前源码来自原前端 baab4f4ca32ddfdec76234218d0063aacdcbaef4 / 原后端 1a2eb2d71a87f67ed428bea3af258dcf8d9697d6。只允许推送 QiuQiu-Farm-Daily-Web 和 QiuQiu-Farm-Daily-Generator，Pages 只能 qiuqiu-farm-daily。不要部署 upstream Worker 或执行旧业务模块。

先看 TASK_STATE.md 和 docs/FAITHFUL_DELIVERY.md（发布后补全）。当日首期为真实模型试稿经完整人工编辑、审核，不是故障兜底。生成器运行 src/faithful/cli.mjs；generate只出审核稿，auto用于定时完整链路，已有合格当天稿跳过。不要接受 run/faithful 旧试稿，必须匹配 evidence 审核哈希。

回滚点：Cloudflare Pages 部署 43d87743-1e0b-4939-8549-f25b08ed9e2b，前端旧稳定主分支73b9e00114b70b0dd07a74b6cf1cc034af201ba9，生成器旧主分支2ae078ed0e4598027b9430f1f83d8e286bbca377。回滚前暂停农业daily.yml，保留当前证据，其他项目不涉及。

本机密钥仅DPAPI及独立农业Secrets，不能输出值。初次初始化setup/adapt/migrate脚本不可重复执行，它们是建立候选的历史记录。未登录/浏览器接口问题只阻塞Folo账户订阅，公开RSS已正常接入并可导入OPML。