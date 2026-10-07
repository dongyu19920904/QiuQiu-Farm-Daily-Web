# 农场外观交付（2026-10-07）

## 本次改动

新增独立 Farm Theme：天空与草地、原创菜畦/木屋/温室/栅栏 SVG、木牌品牌、公告板、奶油色正文板、蔬菜小图标、木质分节标题、金边第一条焦点、绿色操作入口、统一归档/搜索/目录/页脚、月夜配色。仍是原农业日报；没有新增游戏入口、金币余额、仓库或商店，停用模块仍停用。

生产视觉文件仅 assets/css/farm-theme.css、static/images/farm-theme/landscape.svg、layouts/partials/custom/head-end.html、custom/daily-masthead.html、navbar-title.html。另更新 ASSET_LICENSES、验收脚本及文档。原 custom.css、Hextra、正文模板、所有运行JS均未改。

参考 QQ 农场开源面板的场景和木牌构图；正式站未拷贝其图片。原创矢量按本项目 MIT 使用，继续复用本站 sprout.svg。没有新增字体下载、JS框架或运行依赖。新增资源未经传输压缩合计约22KB（CSS 16,277字节、SVG 5,754字节），不影响新闻照片。正文17px，标题与数字沿用可读中文字体，不引入卡通正文字体。

## 业务隔离

开始时本地为 b7626d6；远端正常自动发布了10月7日稿，已fetch/merge更新至内容基线2a98fe1000bb9760ab5050ebd55c348d6a7acf99，没有reset/rebase或覆盖日更。对该干净远端Git归档构建，保存 FARM_THEME_BASELINE.json。

对照验证41个内容/数据/i18n/运行JS/workflow/配置文件逐字节不变；11个生成HTML的标题、锚点与导航链接、结构化数据、canonical不变；RSS、sitemap、robots、redirects不变。索引精确比对条目顺序、标题、日期、链接和正文，仅将Hugo在Windows与干净Git归档的正文CR行尾差异规范为空格，不修改搜索索引或搜索逻辑。所有4期历史、最新10月7日稿、原来源与图片保留。

最新文章SHA256：e1f77d5a7e5c548a15aa3d3572fa3e033617f3b0f3c0ab1f21ae96652b09f54c，与远端独立生成器已审核回执相符。原AI/BioAI目录、生成器源码/配置、API、DNS、Secrets、Cron、数据库均未改。

## 检查

- npm test：13/13通过，原存档/离线/奖励/来源过滤测试保留。没有修改断言以掩盖功能失败。
- Hugo 0.147.9 production --minify：通过，17页统计、47静态文件。包里没有独立lint/typecheck/build脚本；Hugo为实际构建。
- check-faithful-site：最新2026-10-07，4期日报、5条搜索索引；canonical/Article/Breadcrumb/sitemap/robots、原4幅10月6日授权配图、停用路由验证通过。
- check-farm-visual-isolation：通过；41业务文件及11生成HTML语义保持。
- Chromium 151.0.7922.34：1280×960、768×1024、390×844，首页/详情/历史/搜索/日夜与刷新持久化、手机和平板菜单、历史正文搜索、长查询、来源链接、图片、无水平溢出、无JS错误通过。手动查看截图，修复木牌标题对比、旧霓虹色残留、恰好768px侧栏遮挡；增强首屏标题实际命中验证，不能只以DOM非空冒充可见。
- 专用Neo内嵌工具超时；官方stdio诊断可连接但真实操作仍超时。本次浏览器证据使用项目现有Playwright Chromium，不声称Neo页面验收成功，不重启共享浏览器或清登录态。

本地回执 FARM-THEME-LOCAL_BROWSER_RECEIPT.json、FARM_THEME_ISOLATION_RECEIPT.json；截图 docs/screenshots/farm-theme-local-*。

## 发布

仅使用农业项目现有Pages链路，以已审核的2026-10-07执行force_deploy；不改生成器工作流，不重新写新闻。部署及实际域名回执待发布完成后补入本节。

## 回滚与后续

回滚只需在新农业前端回退本次视觉提交（或恢复新增Farm Theme文件/三处模板），保留所有后续content/data更新，再通过原流程重发合格静态站；不要重置整个仓库到旧日期。也可用Pages上一生产部署回滚后补回当前最新日报。

可继续细化原创作物图标和木牌纹理；本轮不扩充功能、不评价或改写当日日报事实。自动写作质量改进仍在独立试验分支，未混入本次前端换皮。
