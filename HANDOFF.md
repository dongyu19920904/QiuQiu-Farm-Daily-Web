# 交接与恢复

生产已切换忠实重建，先读TASK_STATE.md及前端docs/FAITHFUL_DELIVERY.md，按批准方案继续，不重做设计。两个Rebuild目录为权威源码；原AI和农业旧目录dirty文档保留，不reset/rebase/覆盖。

参照原前端baab4f4ca32ddfdec76234218d0063aacdcbaef4 / 后端1a2eb2d71a87f67ed428bea3af258dcf8d9697d6。仅允许写QiuQiu-Farm-Daily-Web、QiuQiu-Farm-Daily-Generator；Pages仅qiuqiu-farm-daily。不能部署upstream Worker或启用旧业务模块。

生产https://farm.aibioo.cn/，当天/2026-10/2026-10-06/。部署11947651-a411-4800-ae9c-2692d0428eb1，对应前端958a48f；Actions37481169580。浏览器截图已更新为生产域名。

生成器入口src/faithful/cli.mjs：auto采集/写作/独立审稿/接收；generate仅出稿；verify验证接收稿SHA；audit-existing仅复核接收稿绝不改稿。首期是实际模型试稿后完整人工编辑审核，不能接受run/faithful未经审核草稿。独立审核每批3条、保留整篇检查日期/重复；引句仅规范弯引号及空白后与原文连续匹配，不接受改写/拼接/虚构，任一批失败不发布。

下个新日期完整无人值守运行尚未观察。查看私有Actions artifact及evidence失败记录，修复实际问题后补跑，不伪造新闻或换旧稿日期。恢复已审同日部署：workflow_dispatch指定日期且force_deploy=true。

回滚：先暂停农业daily.yml并保存证据，在农业Pages回滚43d87743-1e0b-4939-8549-f25b08ed9e2b；旧前端73b9e00114b70b0dd07a74b6cf1cc034af201ba9，旧生成器2ae078ed0e4598027b9430f1f83d8e286bbca377。代码恢复用独立分支/revert验证，不reset原项目或覆盖dirty农业目录，不改原AI/BioAI及DNS。

凭据仅DPAPI及独立农业Secrets，不能输出值。setup/adapt/migrate首次脚本不可重复执行。Folo账户作者订阅受浏览器阻塞；公开RSS/OPML正常。X/小红书先找真实作者，再在Folo搜索已有源，核对身份/近期日期/正文后接入。实际套餐及API余额未知，不购买服务。

2026-10-06T15:22:34Z补记：独立真实模型5批复核全部15个来源小节通过，原文段ID及全覆盖校验通过，已发表文章未改。35项生成器与13项游戏/雷达测试通过，共48项。JSON语法恢复不会改变拒绝状态或接收截断结果；未完成项仍以首个未来日期自动运行、Folo账户搜索及计费权限为准。
