import {loadHarvest,saveHarvest,matchesSignal,randomSignal} from './radar-state.js';
let storage;try{storage=localStorage;}catch{storage={getItem(){throw Error();},setItem(){throw Error();}};}
const saved=loadHarvest(storage),rows=[...document.querySelectorAll('.signal')],status=document.querySelector('#radar-status');let savedOnly=false;
const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
function filter(){let count=0;const f={query:document.querySelector('#radar-query').value,topic:document.querySelector('#radar-topic').value,kind:document.querySelector('#radar-kind').value,days:document.querySelector('#radar-window').value,savedOnly,saved,today};for(const row of rows){row.hidden=!matchesSignal({...row.dataset},f);if(!row.hidden)count++;}status.textContent=`显示 ${count} / ${rows.length} 条 · 本机收获 ${saved.size} 条`;}
function marks(){for(const button of document.querySelectorAll('[data-save]')){const active=saved.has(button.dataset.save);button.setAttribute('aria-pressed',String(active));button.textContent=active?'已收获 · 取消':'收获到本机';}}
for(const id of ['radar-query','radar-topic','radar-kind','radar-window'])document.getElementById(id).addEventListener('input',filter);
document.querySelector('#radar-saved').onclick=e=>{savedOnly=!savedOnly;e.currentTarget.setAttribute('aria-pressed',String(savedOnly));filter();};
document.querySelector('#radar-random').onclick=()=>{const row=randomSignal(rows.filter(r=>!r.hidden));if(!row){status.textContent='当前筛选没有条目，请调整条件。';return;}row.scrollIntoView({behavior:'smooth',block:'center'});row.querySelector('h3 a').focus({preventScroll:true});};
document.querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>{saved.has(b.dataset.save)?saved.delete(b.dataset.save):saved.add(b.dataset.save);const okay=saveHarvest(storage,saved);marks();filter();if(!okay)status.textContent+=' · 存储不可用，仅当前页面保留';});marks();filter();
