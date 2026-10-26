(()=>{
 const form=document.getElementById('request'),panel=document.getElementById('prepared'),preview=document.getElementById('preview'),send=document.getElementById('send');let request='';
 const source=new URLSearchParams(location.search),tags={};for(const k of ['utm_source','utm_medium','utm_campaign','utm_content']){const v=source.get(k);if(v&&/^[a-zA-Z0-9_.-]{1,100}$/.test(v))tags[k]=v;}
 const entry=document.getElementById('demo-request-link');if(entry){const params=new URLSearchParams(tags).toString();entry.href='request-demo.html'+(params?'?'+params:'');}if(!form)return;
 function count(name){if(location.hostname==='iamloralei.com'&&window.goatcounter?.count)window.goatcounter.count({path:name,title:name,event:true});}
 form.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(form);request='Hello Joseph,\n\nI would like to discuss: '+f.get('interest')+'\n\nName: '+f.get('name')+'\nReply email: '+f.get('email')+'\nOrganization: '+(f.get('organization')||'Independent / not specified')+'\n\nQuestion or goal:\n'+f.get('question')+'\n\nSource: '+(Object.entries(tags).map(([k,v])=>k+'='+v).join('; ')||'Direct website request');preview.textContent=request;send.href='mailto:contact@iamloralei.com?'+new URLSearchParams({subject:'Loralei demo request — '+f.get('interest'),body:request}).toString().replace(/\+/g,'%20');panel.hidden=false;form.hidden=true;count('demo-request-prepared');panel.scrollIntoView({behavior:'smooth',block:'start'});});
 send.addEventListener('click',()=>count('demo-request-email-open'));
 document.getElementById('edit').onclick=()=>{panel.hidden=true;form.hidden=false;};
 document.getElementById('copy').onclick=async()=>{try{await navigator.clipboard.writeText(request);document.getElementById('copy-status').textContent='Request copied. Paste it into an email to contact@iamloralei.com.';}catch{document.getElementById('copy-status').textContent='Select and copy the request text above.';}};
 if(location.hostname==='iamloralei.com'){const script=document.createElement('script');script.async=true;script.src='https://gc.zgo.at/count.js';script.dataset.goatcounter='https://loralei.goatcounter.com/count';document.head.append(script);}
 // Analytics events contain fixed names only. Names, email, question and request body are never sent to analytics.
})();
