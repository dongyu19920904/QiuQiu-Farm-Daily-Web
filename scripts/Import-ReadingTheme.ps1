$ErrorActionPreference='Stop'
$reference='D:\CodexCache\runs\qiuqiu-reference-20261004\web'
$revision='ab145429e99b2752c3078c333bfe522acd6b0f0b'
$bundle=Join-Path $env:TEMP 'hextra-reading.zip'
& git -C $reference archive --format=zip --output=$bundle $revision themes/hextra/layouts themes/hextra/assets themes/hextra/i18n themes/hextra/static themes/hextra/data themes/hextra/theme.toml themes/hextra/LICENSE assets/js/vendor/flexsearch.bundle.min.js
if($LASTEXITCODE -ne 0){throw '只读主题提取失败'}
Expand-Archive -LiteralPath $bundle -DestinationPath (Get-Location).Path -Force
$readingHome='{{ define "main" }}{{ range first 1 ((where site.RegularPages "Section" "daily").ByDate.Reverse) }}{{ partial "daily-reader.html" . }}{{ else }}<main id="main"><h1>秋秋 AI 农业日报</h1><p>通过真实来源校验的日报将在这里完整展示。</p></main>{{ end }}{{ end }}'
Set-Content -LiteralPath 'themes/hextra/layouts/home.html' -Value $readingHome -Encoding utf8
Write-Output 'Imported MIT Hextra reading theme and Apache-2.0 FlexSearch from audited reference; no old content/config/workflows.'
