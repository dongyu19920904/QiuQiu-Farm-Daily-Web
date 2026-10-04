# 费用和限额审计
截至2026-10-04：新项目采用GitHub Actions构建后Direct Upload到纯静态Pages。浏览器阅读/搜索/游戏没有AI请求；没有新Worker/Cron/KV/Pages Functions，新增Workers CPU与KV用量为零。

实际账户Cloudflare套餐/本月用量/余额未核实：subscriptions API403、pages/limits API404；登录浏览器控制不可用。GitHub账户计费API也无可读权限；Runtoken svip-think单价和余额没有可核实回执。已向用户请求可见的账户数据。不扩权、不购买服务、不绕过额度。

官方文档列出的Pages Free参考值为每月500次构建，但这不是本账户实际套餐或剩余额度，而且本项目Hugo构建发生在GitHub，不把构建次数、请求、Workers CPU、KV和模型余额混为一谈：[Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/)。GitHub私有仓库托管runner的分钟和存储受账户计划约束，公开仓库标准runner另有规则：[GitHub Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions)。

最近完整模型预览回执（Actions 37196681418）：claude-sonnet-5，1984输入/1493输出token，无备选调用。按此短摘要规模，31次正常生成约6.2万输入+4.7万输出token；每天主模型与备选各一次约12.3万输入+9.3万输出。若早间两次均失败且补跑再用两次，最多四次/日的同等规模约24.6万输入+18.6万输出；来源长度、报错提示、输出与超时计费会改变实际量，这不是费用硬上限。模型实际金额=输入百万token单价×输入量/一百万+输出百万token单价×输出量/一百万，另按平台实际缓存计价。不能在单价未知时承诺人民币金额或“完全免费”。首日排障另有较长提示、多次请求和截断，缺少完整平台账单，无法给准确累计费用。

正常08:37生成，09:49补跑检测合格当期后跳过模型、构建与重复部署。初步预计月31次完整流水线加31次短检查约90–180 Linux分钟，需用成功Actions实际耗时再修正；不保证账户剩余分钟足够。失败日志artifact保存7日，未设置付费升级。
