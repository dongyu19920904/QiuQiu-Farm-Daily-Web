# 新版费用与限额（2026-10-05）

本项目使用GitHub Actions运行Node模型生成与Hugo构建，再Direct Upload到纯静态Pages。浏览器阅读、搜索、雷达和游戏没有模型调用；新Pages部署回执uses_functions=false，没有新增Worker、Cron或KV。静态请求、Actions分钟、模型token、Pages部署次数是不同计量。

## 实测模型规模

10月5日合格整期由平台报告claude-sonnet-5生成：普通输入2 token、缓存写入8505 token、缓存读取0、输出3435 token。平台模型名和缓存计数按响应记录，不据此保证底层模型身份或代理计价方式。私有evidence/2026-10-05-review.json及model-usage.json有回执。

按31期同等规模估算：普通输入62、缓存写入263655、输出106485 token（总输入263717）。正常一期只调用主模型；最多主/备两次，09:49失败补跑可再两次，因此最多四次请求/日，实际文本规模和失败计费会变化，这不是金额上限。

排障有4次格式失败后生成成功。仅保留最近两条失败和一条成功完整响应，早期两次被旧文件名覆盖，不能计算累计金额；现已采用时间戳日志。失败请求不按免费计算。

金额公式：普通输入量×普通输入单价/百万 + 缓存写入量×缓存单价/百万 + 缓存读取量×缓存读单价/百万 + 输出量×输出单价/百万，最终以Runtoken svip-think实际账单为准。单价、余额未核实，不承诺具体人民币或完全免费。

## 基础设施

新工作流27项生成器+13项前端测试，Hugo约1秒；实际CI耗时以本轮Actions回执为准。新稿采集最多25篇/总8分钟，模型最多两次各180秒，job超时20分钟。合格稿且线上匹配时跳过模型/构建/部署；线上缺稿时补建部署。预计正常每月31次完整流水线+31次短检查，来源请求耗时和重试影响分钟；未获得账户剩余分钟/额度，不能保证免费额度足够。

官方2026-10-05查阅的[Pages limits](https://developers.cloudflare.com/pages/platform/limits/)列Free每月500次Pages构建。这不是本账户实际套餐或剩余值，本项目Hugo在GitHub执行，不能把它和Workers CPU或KV混算。[GitHub Actions计费说明](https://docs.github.com/en/billing/concepts/product-billing/github-actions)另说明私有仓库runner分钟/存储由账户计划决定。

本账户套餐/用量：此前subscriptions API403、Pages limits API404；GitHub计费无可读权限。模型价格/余额亦无凭据可读回执。未购买或扩权。保持未核实状态，等待账户可见信息即可，不阻塞已授权的新站部署。

