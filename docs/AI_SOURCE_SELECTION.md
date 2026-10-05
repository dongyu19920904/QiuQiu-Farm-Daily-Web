# AI农业来源筛选和添加记录（2026-10-05）

用户授权助手完成搜索、筛选和添加。已加入独立生成器：8个原始页面/项目、4个机构索引、2条实测RSS；其中存在同机构和相同内容，不能算14个独立机构，也不保证每天有5条新消息。

优先机构/大学原文（CAAS、WUR、CGIAR、USDA、AIIRA），其次原始代码/数据（DeepForest、PlantDoc、CropHarvest）。核对AI任务、农业场景、原日期、应用阶段、许可与读取规则；“智能”字样不足以证明AI能力。

搜索组合：`site:aii.caas.cn 机器视觉 表型`、`site:wur.nl agricultural artificial intelligence`、`site:cgiar.org AI agriculture`、`site:ars.usda.gov AI crops`。Folo发现页查机构名或直接RSS URL，核对原网站再添加，不猜RSSHub路径。

## 两条真实订阅

| 名称 | 实际URL | 实测与用途 |
|---|---|---|
| AgriScienceFM | https://www.agriscience.fm/feed/ | 1条，2026-07-15；从WUR项目 https://agriscience.fm.wur.nl/ 自动发现；低频研究背景 |
| USDA ARS Research News | https://www.ars.usda.gov/rss/?productName=Research%20News | 8条，最新2025-01-08；从官方 https://www.ars.usda.gov/news-events/rss-feeds/ 获取；不能作为当日新闻 |

原始读取审计留在私有生成器 `run/feed-audit.json`、`run/discovery-audit.json`。公共站只提供短改写和原文链接，不发布原文全文。RSS/Atom、日期、去重、禁止路径、Folo分页和认证失效已有测试。

## Folo添加与实际状态

可导入文件：`static/downloads/ai-agriculture-sources.opml`，只含上述两条。https://github.com/RSSNext/Folo 官方实现支持OPML。登录后从订阅导入功能选择文件，或在发现入口输入真实URL，归入“AI农业”分组；具体按钮以当前可读取界面为准。

已打开 https://app.folo.is/，界面明确显示“登录”。专用BrowserOS及发现页读取超时，账户写入未完成；未创建账户、导出Cookie或读取其他订阅。登录只阻塞Folo账户内保存，公开来源已接入生成器，不能报告“已在Folo订阅”。

## 日更保护

全历史事件去重，单机构最多2条、至少3家机构、核心5–8条。素材不足停发并保留最近一期，不重复旧工具或用普通种菜凑数。起步页面会逐次消耗，长期日更能力须通过后续真实采集观察。

补充核查：MIT官方食品/水安全RSS（38条，最新2026-09-08）与AI RSS（50条，最新2026-10-02）可读，但本批标题/摘要通过AI农业双重筛选为0条，暂不启用、不加入农业OPML。UC Davis AIFS公开原文模型主题相关，但本机采集HTTP429，未绕过限流、未启用。农科院标题相邻正文解析修复后，排除本期5来源的新候选池6条/4机构已通过真实采集；它不是已发布新稿或持续日更证明。
