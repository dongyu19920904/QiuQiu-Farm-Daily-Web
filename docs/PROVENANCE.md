# 复用、来源与许可

参考固定版本：前端 ab145429e99b2752c3078c333bfe522acd6b0f0b，生成器 1a2eb2d71a87f67ed428bea3af258dcf8d9697d6。均从 SSH 远端 shallow/no-checkout 到任务临时目录，未复制旧工作树。

Hugo 配置复用 Asia/Shanghai、hasCJKLanguage、robots 和 Markdown 静态阅读结构，剔除分析广告、作者身份、账号商店、其他品牌、旧菜单。排版采用系统中文字体与 600–750 字重，避免旧 Orbitron/Rajdhani 的细数字和赛博风格。搜索继承完整正文索引思路；首版以原生 includes 实现中文任意词全文查找（规模小时无需额外搜索库）。远端 FlexSearch v0.8.143（Apache-2.0）只作只读评估，没有发布或引入运行依赖。

生成器解析实体的小函数沿用原项目 src/dataSources/rss-news.js 的解码方式，原项目 GPL-3.0；生成器保留原 LICENSE 并采用 GPL-3.0-only。原 src/chatapi.js 的 schema/超时与 src/publishValidation.js 的证据门禁已审读；其 Worker/账号耦合不适合，按原则重写独立 Node 适配与农业校验。原项目测试依赖旧模块、内容和环境，不能在新项目直接运行；用等价的日期/解析/证据/隔离测试覆盖移植功能。

游戏四种作物与 sprout SVG 为本项目原创几何图形，MIT。无 QQ 农场素材。无游戏引擎、Canvas、外部字体与图片依赖。新闻原图无明确使用许可因此不加入。

来源自动采集：UMD公开 resource、UW Extension公开 articles、Iowa State公开 how-to。robots 原始记录在私有生成器内部证据，访问中遵守禁止路径与低频读取。农业农村部 robots Disallow:/，已从自动采集删除。UMN自动请求403，未绕过限制。natesc本次读取失败；CAAS与中国农业农村信息网公开首页和正文后来核实可读，已接入低频新闻发现，按真实发布日期过滤；未编造 RSS/API。允许抓取的公开网页不等于有图片转载许可，本站只发布短改写与自然链接，不公开原文证据全文。

家人的进一步编辑理念待补充，尚未编造身份、经历或引语。
