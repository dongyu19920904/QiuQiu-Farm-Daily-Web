import {mkdtemp,cp,writeFile,readFile} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import path from 'node:path';import os from 'node:os';import assert from 'node:assert/strict';
// Fixture files exist only inside the wrapper-owned TEMP; never write content/ or public/.
const current=JSON.parse(await readFile('public/index.json','utf8')).filter(x=>x.section==='daily').sort((a,b)=>b.date.localeCompare(a.date));
const fixtureDates=['2026-09-30','2026-10-01'].map(value=>{let date=value;while(current.some(x=>x.date===date))date=new Date(Date.parse(date)-86400000).toISOString().slice(0,10);return date;});
const temp=await mkdtemp(path.join(process.env.TEMP||process.env.TMP||process.env.RUNNER_TEMP||os.tmpdir(),'farm-archive-'));
const content=path.join(temp,'content'),output=path.join(temp,'output');await cp('content',content,{recursive:true});
for(const date of fixtureDates)await writeFile(path.join(content,'daily',date+'.md'),`---\ntitle: 仅测试月份归档\ndate: ${date}T08:00:00+08:00\n---\n测试fixture，不发布。`);
const result=spawnSync(process.env.FARM_HUGO||'hugo',['--contentDir',content,'--destination',output,'--minify'],{encoding:'utf8'});assert.equal(result.status,0,result.stderr);
const home=await readFile(path.join(output,'index.html'),'utf8'),archive=await readFile(path.join(output,'daily/index.html'),'utf8'),index=JSON.parse(await readFile(path.join(output,'index.json'),'utf8'));
assert(home.includes(current[0].date));assert(archive.includes('2026-09')&&archive.includes('2026-10'));assert.equal((archive.match(/class=archive-entry/g)||[]).length,current.length+2);assert(fixtureDates.every(date=>index.some(x=>x.date===date)));
await writeFile('docs/AI_ARCHIVE_FIXTURE_RECEIPT.json',JSON.stringify({checkedAt:new Date().toISOString(),result:'passed',realDates:current.map(x=>x.date),testOnlyDates:fixtureDates,checks:'latest selection, cross-month archives, complete search index',fixturePublished:false},null,2));console.log('Cross-month archive/search fixture passed; deployment artifact unchanged.');
