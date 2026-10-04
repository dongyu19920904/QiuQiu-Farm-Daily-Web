# 续做交接
已发布 https://farm.aibioo.cn/ ，2026-10-04真实首期已校对。不要重新创建项目、批量迁移 Secrets 或复用旧工作树。前端 D:/GitHub/QiuQiu-Farm-Daily-Web，生成器 D:/GitHub/QiuQiu-Farm-Daily-Generator，main 分支、SSH origin。前端 docs/IMPLEMENTATION_PLAN.md 为原方案，docs/DELIVERY.md 与各 JSON 回执为交付证据。

旧仓库 D:/GitHub/Hextra-AI-Insight-Daily 和 CloudFlare-AI-Insight-Daily 只读，禁止 reset/rebase/push；旧 AI 与 BioAI Worker、Cron、KV、Secrets、DNS 均不写。仅新 Pages qiuqiu-farm-daily 和 farm.aibioo.cn。aibioo.cn DNS 在腾讯云，不迁移 NS，不动 news。

daily.yml 北京时间08:37/09:49，合格稿跳过；素材或模型失败停发并保留线上。补跑传 date；恢复构建用 force_deploy=true、validate_model=false。发布前跑隔离/内容校验、Hugo、实际页面。模型预览 validate_model=true 会付费且不替换已有稿，已有成功回执后不要无故重复。

加密模型凭据在 D:/CodexCache/credentials/qiuqiu-farm/model-key.xml，由生成器 scripts/Invoke-Local.ps1 载入，不输出或提交密钥。测试/构建用 C:/Users/dongy/.codex/skills/project-cache-hygiene/scripts/Invoke-WithProjectCache.ps1，进程缓存 D:/CodexCache，不改全局环境、不删共享依赖或未知缓存。

未完成账户套餐/余额核实、未来定时首次触发、多期搜索；家人理念待补充。审稿由助手逐条读源完成，无真人专家签核。浏览器控制曾超时，实际网站使用独立 Chromium151 做桌面1280和390手机验收，不读取用户日常浏览器登录态。

5个额外任务临时目录清理被执行工具安全策略拒绝，禁止把此拒绝当作许可换命令或表面重试。前端 docs/CACHE_CLEANUP_RECEIPT.json 列出准确路径。共享依赖与加密凭据继续保留。
