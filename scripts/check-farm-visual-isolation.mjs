import {readFile,writeFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const sha=b=>createHash('sha256').update(b).digest('hex');
async function files(dir){const out=[];for(const f of await readdir(dir,{withFileTypes:true})){const p=dir+'/'+f.name;out.push(...(f.isDirectory()?await files(p):[p]));}return out.sort();}
const business={};
for(const dir of ['content','data','i18n','static/js','.github/workflows'])for(const file of await files(dir))business[file]=sha(await readFile(file));
business['hugo.yaml']=sha(await readFile('hugo.yaml'));
const generated={};for(const file of ['index.json','index.xml','sitemap.xml','robots.txt','_redirects'])generated[file]=sha(await readFile('public/'+file));
// Hugo's Plain may preserve a CR from Windows template line endings where the
// clean Git archive emits one space. Normalize only that character in body;
// all words, LF paragraph breaks, entry order, titles, dates and URLs stay exact.
const index=JSON.parse(await readFile('public/index.json','utf8'));
generated['index.json']=sha(JSON.stringify(index.map(e=>({...e,body:e.body.replace(/\r/g,' ')}))));
const semantics={};
for(const file of (await files('public')).filter(p=>p.endsWith('.html'))){const html=await readFile(file,'utf8');semantics[file]={
 headings:[...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)].map(m=>m[0]),
 links:[...html.matchAll(/<a\b[^>]*\bhref=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(m=>m[1]||m[2]||m[3]),
 schemas:[...html.matchAll(/<script\b[^>]*type=(?:"application\/ld\+json"|application\/ld\+json)[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]),
 canonical:html.match(/<link\b[^>]*rel=(?:"canonical"|canonical)[^>]*>/)?.[0]
};}
const snapshot={business,generated,semantics},baseline='docs/FARM_THEME_BASELINE.json';
if(process.argv.includes('--record')){await writeFile(baseline,JSON.stringify(snapshot,null,2));console.log('Recorded pre-theme content, runtime, routes, headings, links and SEO baseline.');}
else {const actual=JSON.parse(JSON.stringify(snapshot)),expected=JSON.parse(await readFile(baseline,'utf8'));const changed=[];for(const section of ['business','generated','semantics'])for(const key of new Set([...Object.keys(actual[section]),...Object.keys(expected[section])]))if(JSON.stringify(actual[section][key])!==JSON.stringify(expected[section][key]))changed.push(section+': '+key);assert.deepEqual(changed,[],'Visual change altered business files, navigation, headings, SEO or feed/index artifacts');const receipt={verifiedAt:new Date().toISOString(),businessFiles:Object.keys(business).length,pages:Object.keys(semantics).length,unchanged:['content','data','i18n','runtime JS','workflow','hugo configuration','headings','links','schemas','canonical','search index','RSS','sitemap','robots','redirects']};await writeFile('docs/FARM_THEME_ISOLATION_RECEIPT.json',JSON.stringify(receipt,null,2));console.log(JSON.stringify(receipt));}
