# 秋秋农场日报

已从原 AI 日报核实的远端版本重建阅读模板、字体、目录、日夜切换和全文搜索，只做农业必要适配。日报是主页面；小游戏入口在页脚，原浏览器本地存档 key 保持不变。

生产地址 https://farm.aibioo.cn/ ，既有 Cloudflare Pages 项目 `qiuqiu-farm-daily`。原 AI 日报、生命延续学日报及其 Worker/Cron/DNS 不在本项目写入范围。

当前执行方案见 docs/AI_DAILY_FAITHFUL_REBUILD_ANALYSIS.md；旧 game-first 与 AI-only v2 文档保留为历史记录。原版代码基线在 docs/FAITHFUL_REBUILD_BASELINE.json。首期实际模型试稿经过逐条读源和编辑，存证在独立私有生成仓库。

本地 Hugo 0.147.9 `hugo --minify`，Node 24；Windows 构建、测试、浏览器与 npm 命令必须通过本机 project-cache-hygiene 包装器，使缓存处于进程级 D:\CodexCache。静态检查 `node scripts/check-faithful-site.mjs`，桌面/390px 与日夜检查 `node scripts/check-faithful-browser.mjs`；设置 FARM_TEST_URL 可检查部署页。

定时发布由独立 `QiuQiu-Farm-Daily-Generator` 的 Actions 完成，每天北京时间 08:37 和 09:49。前端自身 Actions 只检查，不另开生产发布链路。资料不足、模型/审核/构建失败保留最近一期。源页面及 OPML 位于 /sources/。

旧农业日报 10 月 4、5 日正文和 URL 已保留；10 月 6 日 v2 文章在 docs/legacy 归档，旧 URL 转向新版当天日报。日期目录兼容原版月份导航。雷达与时间线由每期受核对的正文和来源数据更新。

回滚及确实未完成项见 TASK_STATE.md、HANDOFF.md 和 docs/FAITHFUL_DELIVERY.md。游戏图标来自本项目原创 SVG，沿用 ASSET_LICENSES.md；没有未经确认的新闻图片复用。主题及复用代码保留原许可证，参考代码历史未导入本项目 Git。
