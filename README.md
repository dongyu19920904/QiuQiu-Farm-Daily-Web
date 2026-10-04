# 秋秋农场日报

可玩的六块菜地与有真实来源的农业阅读。纯 Hugo 静态页面、原生 JavaScript、本机存档；无账号、Worker、KV、支付或阅读时的 AI 请求。

运行 `hugo --minify` 构建，`npm test` 验证游戏状态，`npm run check` 验证完整产物。`npm ci && node scripts/browser-check.mjs` 使用 Playwright Chromium 做桌面与390px移动验收，安装浏览器时使用项目缓存wrapper；线上验收设置 FARM_TEST_URL。

来源生成与定时发布位于独立私有仓库 QiuQiu-Farm-Daily-Generator。详见 docs/IMPLEMENTATION_PLAN.md、TASK_STATE.md、HANDOFF.md 与 docs/PROVENANCE.md。
