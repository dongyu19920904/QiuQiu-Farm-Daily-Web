# 秋秋AI农业改版交接（2026-10-05）
先读TASK_STATE和docs/AI_REVISION_DELIVERY.md、AI_SOURCE_SELECTION.md。方案AI_AGRICULTURE_REVISION_PLAN.md为已执行方案，结尾“仅方案”是早期历史范围，当前已经授权实施并正式上线。
前端 D:/GitHub/QiuQiu-Farm-Daily-Web（public）；生成器 D:/GitHub/QiuQiu-Farm-Daily-Generator（private），均独立SSH origin和main。不要重建、复制旧目录、旧文章或旧Secrets；旧Hextra-AI-Insight-Daily及CloudFlare-AI-Insight-Daily永久只读。
站点首页是最新全文，游戏/farm/仅页脚、原key qiuqiu-farm-v1保留。公开data不含完整原文证据；私有生成器evidence保存来源/模型用量/逐条复核。新稿schemaVersion2/topic ai-agriculture，已有合格稿且线上对应则SKIP；缺线上自动补建，不重复模型。来源不足/模型/构建失败均保留线上。
动作菜单：补跑date指定历史合法日期；强制恢复force_deploy=true、validate_model=false。真实付费draft/validate_model=true仅必要时运行，已有本次成功整期和回执，不无故重复。
新工作流08:37/09:49北京时间但GitHub可延迟；最小回归node --test、Hugo0.166、check-site，浏览器脚本本次验收基于10月5日两期/五信号快照，以后新增稿先更新测试期望再测。跨月fixture仅TEMP，绝不部署。
Windows Node/npm/Hugo/browser用project-cache-hygiene wrapper，缓存仅进程D:/CodexCache；DPAPI模型key在credentials/qiuqiu-farm/model-key.xml，只由生成器Invoke-Local.ps1载入，不输出/提交。5旧临时目录清理有策略拒绝，禁止换命令或工具绕过；准确列表见docs/CACHE_CLEANUP_RECEIPT.json。
下一项：用户完成Folo账户登录后，仅添加两条核实OPML订阅到AI农业分组并验证，不读取其他订阅；无需让用户自己搜索。公开源已直接接入；如无账户登录继续收集核实来源和观察新schedule，不伪造稳定日更。费用/余额、家人理念和真人专家签核尚未提供。
本任务旧项目无写入；旧BioAI部署时间发生独立变化，仅记录、不恢复或回滚旧Worker。只回滚新Pages deployment159d4b0b或新仓库revert，绝不reset/rebase旧目录、动旧Cron/DNS。
