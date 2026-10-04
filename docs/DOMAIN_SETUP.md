# farm.aibioo.cn 域名接入

用户已确认：aibioo.cn DNS由腾讯云/DNSPod管理；Cloudflare只有Worker/Pages，不迁移nameserver。

唯一新增DNS记录：

| 域名 | 主机记录 | 类型 | 值 | TTL |
|---|---|---|---|---|
| aibioo.cn | farm | CNAME | qiuqiu-farm-daily.pages.dev | 600秒（或账户默认值） |

添加前再确认 farm 没有冲突的A/AAAA/CNAME/TXT记录。若出现已有记录，不覆盖、不删除，先核实归属。现有news、根域、其他记录完全保留。

新Cloudflare Pages qiuqiu-farm-daily已创建；绑定farm需要此CNAME才能通过验证与签发证书。等待域名状态active后，用真实HTTPS打开首页与当期页；再把hugo.toml baseURL与robots Sitemap切到farm，构建部署，复查canonical/sitemap。证书未就绪前使用已验收的pages.dev，不绕过浏览器TLS警告。

目前未发现本机腾讯云/DNSPod配置或环境凭据，也无可读浏览器登录控制接口。已请求用户提供本地凭据配置位置或直接新增这唯一记录。不要把此步骤误报为已完成。
