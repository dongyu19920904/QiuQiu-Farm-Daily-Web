2026-10-07 农场视觉换皮：原CSS/Hextra/运行JS保留，仅新增Farm Theme、原创5.8KB场景SVG与三处模板装饰。已合入远端正常10月7日内容更新（2a98fe1），不改其文章。13测试、Hugo、41业务文件/11HTML语义隔离、1280/768/390日夜/搜索/菜单/阅读通过。768px侧栏遮挡只做CSS修复；未加游戏或假商店。当前分支codex/farm-visual-theme，准备沿既有Pages链路重发已审核当天稿；详细 docs/FARM_VISUAL_DELIVERY.md。生成器试验分支未合入，原AI/BioAI、来源、API、Cron、DNS、Secrets不变。

---

2026-10-07 当前任务：只公开主日报，保留搜索/往期/日夜。辅助模块及标签已撤出构建、索引和入口；4 幅逐项匹配配图已加入 10 月 6 日合格稿，事实正文与原始新闻链接不变，文章 SHA 84ebeedcbd73a56ba78c0742b61199e716d60c880e870d512de1dc68964b029e。生成器后续按授权媒体库匹配，图注标示资料照片/原创示意。

新分支 codex/daily-only-images；原方案和旧回执以下仅作为历史记录。本轮已完成：38项生成器测试+13项保留源码测试，Hugo、SEO及实际域名1280/390px日夜/搜索/配图通过；生产部署6d4986cc-b8ac-4b26-87c7-9bb9dbfa7ebd，发布Actions37548981028成功。旧模块路径301返回主日报，替换了旧外部公益404页。两农业仓库已SSH推送，旧AI/BioAI和DNS/Secrets不变。下一步仅是之后正常日报抽查；本次精简和配图无未完成验收项。前端生产代码817283954891689610bbe3a5162c1d2b221c2f2f，后端代码1b6d0015698fe051e79c9d13b09d15d93a3f1899；后续提交只是回执/文档。回滚基线 8afeb3fb-edf6-4994-bd47-6f02585d3061。具体方案：前端 docs/DAILY_ONLY_MEDIA_PLAN.md。

---

# 交接与恢复

生产已切换忠实重建，先读TASK_STATE.md及前端docs/FAITHFUL_DELIVERY.md，按批准方案继续，不重做设计。两个Rebuild目录为权威源码；原AI和农业旧目录dirty文档保留，不reset/rebase/覆盖。

参照原前端baab4f4ca32ddfdec76234218d0063aacdcbaef4 / 后端1a2eb2d71a87f67ed428bea3af258dcf8d9697d6。仅允许写QiuQiu-Farm-Daily-Web、QiuQiu-Farm-Daily-Generator；Pages仅qiuqiu-farm-daily。不能部署upstream Worker或启用旧业务模块。

生产https://farm.aibioo.cn/，当天/2026-10/2026-10-06/。首发部署11947651-a411-4800-ae9c-2692d0428eb1，对应前端958a48f；Actions37481169580。浏览器截图已更新为生产域名。

生成器入口src/faithful/cli.mjs：auto采集/写作/独立审稿/接收；generate仅出稿；verify验证接收稿SHA；audit-existing仅复核接收稿绝不改稿。首期是实际模型试稿后完整人工编辑审核，不能接受run/faithful未经审核草稿。独立审核每批3条、保留整篇检查日期/重复；引句仅规范弯引号及空白后与原文连续匹配，不接受改写/拼接/虚构，任一批失败不发布。

下个新日期完整无人值守运行尚未观察。查看私有Actions artifact及evidence失败记录，修复实际问题后补跑，不伪造新闻或换旧稿日期。恢复已审同日部署：workflow_dispatch指定日期且force_deploy=true。

回滚：先暂停农业daily.yml并保存证据，在农业Pages回滚43d87743-1e0b-4939-8549-f25b08ed9e2b；旧前端73b9e00114b70b0dd07a74b6cf1cc034af201ba9，旧生成器2ae078ed0e4598027b9430f1f83d8e286bbca377。代码恢复用独立分支/revert验证，不reset原项目或覆盖dirty农业目录，不改原AI/BioAI及DNS。

凭据仅DPAPI及独立农业Secrets，不能输出值。setup/adapt/migrate首次脚本不可重复执行。Folo账户作者订阅受浏览器阻塞；公开RSS/OPML正常。X/小红书先找真实作者，再在Folo搜索已有源，核对身份/近期日期/正文后接入。实际套餐及API余额未知，不购买服务。

2026-10-06T15:22:34Z补记：独立真实模型5批复核全部15个来源小节通过，原文段ID及全覆盖校验通过，已发表文章未改。35项生成器与13项游戏/雷达测试通过，共48项。JSON语法恢复不会改变拒绝状态或接收截断结果；未完成项仍以首个未来日期自动运行、Folo账户搜索及计费权限为准。

当前生产回执：8afeb3fb-edf6-4994-bd47-6f02585d3061，构建d85750a5e67d9d69afc359b3d9bcafe68f1f09eb（产品代码与首发一致，新增交付文档）。最终Actions37488171970在生成器d733355c9c496df64c01ef04e9036459079feff9通过35+13项测试，SKIP/VERIFY/LIVE均通过，构建/提交/部署正确跳过，未再次调用AI或部署。线上校验凭据路径已按脚本自身位置解析，不依赖工作目录。
