# 2026-10-15 停更恢复回执

实际网站：https://farm.aibioo.cn/ 。10月15日19条日报已经上线，日期页 `/2026-10/2026-10-15/`；没有把10月8日旧稿改日期补位，也没有伪造停更期间的历史日报。

## 原因与修复

10月9—14日每天两次schedule实际运行但失败。14日运行38524067935已有39篇可核对来源、计划18条；9日运行37894550145已有37篇来源、计划15条。最先失败在单句55字校验，随后管道掩盖原错误，verify再报缺审核回执。农业计数器把空格和标点计入，而继承的AI日报校验只计汉字、字母、数字。现已统一计数口径，原55字门槛与完整事实审核保留。

其他实际修复：只修不合格条目；保留准确输入的原始响应和合格检查点；超长内容反馈实际字数与明确压缩预算；仅在原有词语上补齐高亮；引用格式调整不改原文或URL；完整单一JSON可以剥离简短围栏/说明，截断、第二个对象或坏来源仍拒绝。来源提示包含真实发布站点，事实审核逐条独立进行，摘要另审，杜绝三篇混审的串项。事实纠错最多两轮，改稿必须复审；来源段ID和字面引句仍逐个验证。

workflow明确pipefail、北京时间日期、同日缓存与并发锁。新增手动“仅演练生成”选项，默认关闭；演练真实生成/审稿/构建，但不会提交、部署或覆盖正式文章。

## 本次正式发布

- 今天这一期来自真实模型试稿，经Codex逐条对照原文校对，再由独立模型逐条复核19条与摘要，共20个审核块。保留 `agentSourceProofread: true`，不能将这一期说成完全未经编辑的云端自动稿。
- 文章SHA256：`3b6607af8225578ca49000ed47881ff1037aee44ba6ee8100da9d84d7f6cfc07`。
- 前端内容提交：`96d3bd1`；生成器接受回执提交：`ba05adc`。
- 发布Actions：[38680000284](https://github.com/dongyu19920904/QiuQiu-Farm-Daily-Generator/actions/runs/38680000284)，成功；此发布任务SKIP已审稿→VERIFY→Hugo→Pages→LIVE，未冒充新的模型生成证明。
- Pages部署：https://84c59027.qiuqiu-farm-daily.pages.dev 。北京时间12:10发布；实际域名文章/首页/搜索索引/edition SHA验证通过。
- 这期没有匹配且已核实授权的原新闻照片，因此没有补不相关图片。10月8日原来源授权照片继续保留在往期。

## 验证

生成器168项、前端13项测试通过；Hugo 0.147.9与静态canonical、Article、Breadcrumb、sitemap、robots检查通过，实际日期页JSON-LD可以完整解析。真实域名Chromium 151验证1280/768/390px、日夜模式持久化、全文搜索、历史、目录、旧路径跳转；正文17px，无横向溢出或页面脚本错误。另检查首页确实为10月15日，`Molagri`全文搜索确实返回今天内容。

证据：`FARM-RECOVERY-20261015-LIVE_BROWSER_RECEIPT.json`、`UPDATE_RECOVERY_20261015_LIVE.json`、`DAILY_ONLY_STATIC_RECEIPT.json`及`screenshots/farm-recovery-20261015-live-*`。

云端独立生成补跑最终通过：[38686659604](https://github.com/dongyu19920904/QiuQiu-Farm-Daily-Generator/actions/runs/38686659604)，代码c7636fd。它从早前真实云端采集/生成的同日检查点继续，模型自行纠错、19条及摘要独立复审、ACCEPT/VERIFY与Hugo均通过，agentSourceProofread=false；没有人工替换该演练稿，也没有把SKIP冒充生成。演练稿SHA为`141db470ea7e5bedce658c8aea33b78adfd08fed67e61eff0d87cf67b5aa0857`；提交/部署步骤明确skipped，正式稿仍为3b6607af。

此前演练真实暴露并修复了字数压缩、引用计数、高亮、长JSON前言、模型复写URL、标题夸大和无效纠错缓存等问题。明确的事实拒绝必须改稿复审，不能用另一模型“通过”覆盖；被拒标题必须改，原样复用被拒稿不能通过。截断、第二个JSON对象、额外异常闭括号、假原文段ID与错误URL仍拒绝。失败回执与artifact保留，不隐藏试跑失败，也不宣称未来模型永不出错。

## 运行与恢复

原自动任务仍启用：北京时间08:37初跑、09:49补跑；GitHub排队可能使实际启动延后。已观察自然schedule [38684966182](https://github.com/dongyu19920904/QiuQiu-Farm-Daily-Generator/actions/runs/38684966182)成功核验10月15日线上稿并跳过重复生成、重复部署。下一个新日期的自然生成尚未观察；持续抽查内容、地区条件及来源称谓。

已有合格同日文章时跳过模型调用，校验接受回执与文章SHA。需恢复发布时，农业生成器的daily.yml手动指定日期和force_deploy=true。没有合格稿时查看Actions artifact，修复实际原因后补跑；不能直接改accepted标记。失败保留已上线内容。

回滚前先暂停农业daily.yml并保存现有回执，避免定时任务把回滚覆盖。只操作`qiuqiu-farm-daily` Pages的上一稳定production部署（停更前10月8日快照177a662a）；代码用新分支revert本次修复并测试，保留已发表文章与匹配回执，核对后再启用农业任务。两个原AI/BioAI项目、DNS、Secrets、Worker/Cron/KV均未修改。

缓存保持进程级D:/CodexCache；包装脚本清理每次任务TEMP/TMP，共享依赖缓存及项目内失败证据保留。没有购买服务或新增Worker/KV；模型实际金额须以原代理账单为准，本机未核实其计价和余额。
