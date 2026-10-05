const select=document.querySelector('#timeline-topic'),rows=[...document.querySelectorAll('.timeline-event')],status=document.querySelector('#timeline-status');
function filter(){let count=0;for(const row of rows){row.hidden=!!select.value&&row.dataset.topic!==select.value;if(!row.hidden)count++;}status.textContent=`显示 ${count} 条已核实资料`;}
select.addEventListener('input',filter);filter();
