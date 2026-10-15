import {chromium} from 'playwright-core';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
const [date,query]=process.argv.slice(2);
assert(/^\d{4}-\d{2}-\d{2}$/.test(date)&&query,'Supply expected date and a phrase from its body');
const base='https://farm.aibioo.cn',browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage({viewport:{width:390,height:844},locale:'zh-CN',timezoneId:'Asia/Shanghai'});
 await page.goto(base,{waitUntil:'networkidle'});
 assert.equal((await page.locator('.ai-daily-masthead time').innerText()).trim(),date.replaceAll('-',' / '));
 await page.goto(`${base}/${date.slice(0,7)}/${date}/`,{waitUntil:'networkidle'});
 assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),`${base}/${date.slice(0,7)}/${date}/`);
 const schemas=await page.locator('script[type="application/ld+json"]').allTextContents();
 assert(schemas.some(s=>s.includes('BreadcrumbList')));
 assert(schemas.some(s=>/BlogPosting|TechArticle|"Article"/.test(s)&&s.includes(date)));
 await page.goto(base+'/search/',{waitUntil:'networkidle'});
 await page.locator('#search-input').fill(query);await page.locator('.search-result').first().waitFor();
 const results=await page.locator('#search-results').innerText();
 assert(results.includes(date)||results.includes(date.replaceAll('-','/')),'Latest full-text search result is missing');
 await page.screenshot({path:`docs/screenshots/farm-recovery-${date.replaceAll('-','')}-live-latest-search.png`});
 const receipt={url:base,date,query,homeDate:'matched',latestBodySearch:'matched',canonical:'matched',articleAndBreadcrumb:'matched',browser:browser.version(),checkedAt:new Date().toISOString()};
 await writeFile(`docs/UPDATE_RECOVERY_${date.replaceAll('-','')}_LIVE.json`,JSON.stringify(receipt,null,2));console.log(JSON.stringify(receipt));
}finally{await browser.close();}
