# AI农业改版交付（2026-10-05）

正式网址 https://farm.aibioo.cn/ ，新版真实稿 https://farm.aibioo.cn/daily/2026-10-05/ ，备用 https://qiuqiu-farm-daily.pages.dev/ 。已按AI_AGRICULTURE_REVISION_PLAN.md实施，正式构建部署已完成，最终自动化与正式域名浏览器回执已保存于同目录。

## 用户可见变化

| 功能 | 已实现与验证 |
|---|---|
| 首页 | 最新整期全文，桌面月份侧栏与右目录、手机折叠菜单/目录；首屏无菜地 |
| 完整日报 | 5条AI农业案例/研究/工具，AI作用、场景、人群、条件、限制、原文和原日期；小课与2个FAQ |
| 往期与搜索 | 保留真实10月4日早期种植版；两期正文搜索、Ctrl+K、标签、上下期、RSS |
| 知识/工具 | /knowledge/与详情；/tools/三个开源/数据详情、许可证和使用门槛 |
| 时间线 | /timeline/按原始日期展示、主题筛选；未知日期明确标注，不按收录日伪装新闻 |
| 雷达 | /radar/正文/主题/来源/类型/时间筛选、三条速读、随机发现、本机收获、来源采集时间；随合格日报更新，非实时 |
| 应用机会 | /opportunities/两个有条件的验证方案，事实与编辑假设分开，不承诺收益 |
| 游戏 | /farm/六地四作物，保留旧存档、种/浇/长/收/库存、离线与奖励幂等；入口仅页脚 |
| 阅读与SEO | 白色/夜间清晰17px正文、静态可选择/抓取、来源链接、canonical/Article/Breadcrumb/真实生成与复核时间、sitemap/robots |

不迁旧账号导购、广告、业务数据或部署配置。无合适配图许可时不配不相关图片；原创游戏SVG、MIT Hextra与Apache-2.0 FlexSearch许可记录见PROVENANCE.md。

## 内容与来源

10月5日稿由真实模型生成，再由本次助手逐条读原始网页及完整README复核，修正AIIRA阶段、跨项目术语和开源工具边界。没有真人农技专家签核。原资料明确为案例/研究/工具，本期整理日期不等于原文今天发布。

独立生成器启用8个原始页面/项目、4个机构索引、2条RSS，具体见AI_SOURCE_SELECTION.md。新候选池实际6条/4机构，与本期5来源去重；并未发布为第二篇新AI稿。两条RSS偏低频，MIT补充RSS本批相关0暂不启用，AIFS429不绕过。长期5–8条日更能力仍须持续观察，素材不足保留上期。

Folo OPML已准备：https://farm.aibioo.cn/downloads/ai-agriculture-sources.opml 。实际账户页面显示未登录，账户内保存尚未完成；不读取其他订阅或旧Cookie。生成器直接读取公开源，不依赖Folo登录。

## 验证和自动化

生成器27项、前端13项测试通过；跨月fixture独立TEMP构建验证最新/月份/全文索引，不发布测试文章。桌面1280与手机390的日夜、Ctrl+K首次慢加载、目录跳转、两期搜索、雷达来源筛选/保存、工具/知识/机会、游戏/坏存档/禁存储通过；截图与JSON回执在docs。

Actions北京时间08:37生成、09:49补跑；workflow_dispatch、并发锁、20分钟超时、有限来源/模型重试；已有合格稿且线上匹配才跳过；已提交却缺上线时恢复构建，不重复付费生成。Hugo/校验失败保留线上，只上传完整有效静态产物。

首次旧代码schedule在2026-10-05 14:09北京时间延迟触发且失败，没有清空线上。新版工作流已手动执行验收；新版下一次schedule触发尚未观测，GitHub调度不能承诺准点。

## 隔离与回滚

仅新两个仓库SSH推送、新Pages项目qiuqiu-farm-daily部署；未对旧目录执行reset/rebase/push或写旧部署。15个旧dirty基线文件哈希相同；旧AI/BioAI Cron相同。旧BioAI Worker代码modified_on在本任务期间出现外部更新（2026-10-05T05:41:22.833407Z），本任务只有GET读取，因此不能声称旧项目全局没有任何其他更新；详见AI_OLD_SERVICE_POSTCHECK.json。

回滚前暂停新生成器工作流，避免下次发布覆盖回滚。快速回滚仅在新Pages项目选择原production部署159d4b0b-b2ee-4ab9-8e31-d429107363a3（早期种植版）。代码回退用新仓库revert或从ecb9683前端/3e6b4b7生成器独立检出构建；不reset旧目录、不改变旧Cron/DNS。若暂时停发，只暂停新生成器工作流，保留新站现有产物。

## 确实未完成

Folo账户保存；模型单价/余额和Cloudflare/GitHub账户实际套餐/剩余额度；新版未来定时触发与长期来源供给；真人农技审稿（若需要）；家人具体编辑理念仍待补充。5个历史任务临时目录结束清理曾被安全策略拒绝，准确路径见CACHE_CLEANUP_RECEIPT.json，未换方式重试。每次wrapper自有进程临时目录按finally清理，共享缓存与凭据保留。

正式生产部署：0277eeb0-e114-4405-a031-f2cb13b652ec，构建前端7d7518d47ce04c3847aceba50b883d33ec9b653a，usesFunctions=false。成功部署Actions [37273779956](https://github.com/dongyu19920904/QiuQiu-Farm-Daily-Generator/actions/runs/37273779956)；合格跳过Actions [37274385154](https://github.com/dongyu19920904/QiuQiu-Farm-Daily-Generator/actions/runs/37274385154)。正式域名1280/390浏览器2026-10-05T06:43:20.572Z通过，无页面异常/横向溢出。


