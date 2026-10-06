# 2026-10-07 日报精简与配图交付

执行方案：DAILY_ONLY_MEDIA_PLAN.md。

公开站点仅保留最新日报、往期归档、全文搜索及日夜切换。农业雷达、农业时间线、种植知识、工具、信息源、应用机会以及辅助游戏/介绍页面停用；原文件通过 Hugo _build 退出发布、搜索及 sitemap。标签页停用。代码留存，日后可针对真正需要的功能恢复。

2026-10-06 合格稿新增四幅逐条匹配的图片：AI 研发原创示意、Lucy Bradley 的容器照片（CC BY 2.0）、温室数据原创示意、Sharon_K 的盆栽番茄照片（CC BY-SA 4.0）。两张照片不冒充相关新闻现场；两张示意不冒充实验结果或企业产品界面。来源、许可、尺寸、原图链接与 SHA-256 均有 manifest，正文图注可点击来源、许可及大图。本地文件发布，无图床和阅读时模型调用。

文章事实正文、新闻来源链接、发布日期不变。原稿 SHA 99b42336d657d2cc9993938ccc2d602279ab894083736788ddc7edfdf14650c4；媒体修订后 SHA 84ebeedcbd73a56ba78c0742b61199e716d60c880e870d512de1dc68964b029e。原审核归档到生成器 evidence/2026-10-06-pre-media-review.json，修订证据为 evidence/2026-10-06-media-review.json；既有独立模型事实审稿保留作为原事实正文证据，本次没有重新调用写稿模型或修改新闻日期。

后续日报生成接入授权媒体库：按内容匹配，最多四幅、不重复、不在 FAQ 重复配图；无合适图则不填充；模型输出未经授权的图址会被拒绝。审核和全文数据忽略受管理的图片短代码，避免图片元数据成为新闻事实。定时仍为北京时间 08:37、09:49；合格稿跳过、失败保留内容、并发锁等不变。Actions 修正公共文章 SHA 回执的提交范围（static/editions）。

验证：38 项生成器测试（包含3项配图/幂等/事实不变测试）及13项保留源码测试通过；Hugo 0.147.9 构建、canonical/Article/Breadcrumb、日期、sitemap、robots、RSS、全文历史搜索检查通过。Chromium 151 在 1280px 和390px、日夜模式检查通过：无横向溢出、正文17px、图片加载成功、四幅图有归属和许可、停用模块在构建中不存在，线上旧地址重定向到主日报、全文搜索可命中历史正文。截图及回执见 DAILY_ONLY_STATIC_RECEIPT.json、DAILY-ONLY-LOCAL_BROWSER_RECEIPT.json 和 screenshots/daily-only-local-*。

第一次发布已通过 Actions 37548170848，部署 584beafb-1a7d-42ca-a4c7-b595726e6ea7，文章SHA及四幅图线上生效。实际浏览器发现已删除的旧模块仍命中边缘缓存（s-maxage=604800）；增加仅对应退役路径的 Pages _redirects 返回主日报，并替换原来的外部公益404页为本站错误页。第二次发布及完整生产浏览器复核待完成。域名、Secrets、Cloudflare 项目、原 AI/BioAI 项目均无配置迁移。

回滚：Cloudflare Pages 的 qiuqiu-farm-daily 项目将生产回滚至 8afeb3fb-edf6-4994-bd47-6f02585d3061。需要持久回滚时还应 git revert 本次农业两仓库提交后重新运行农业工作流，避免后续定时覆盖。保留内容目录和图像许可记录；不删除旧项目、不修改 DNS 或旧 Worker。
