(()=>{
const S=' - 2026-2';
const AREAS=window.AREAS;

const FOLDER='<svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2h8.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" fill="currentColor"/></svg>';
const SHORT='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';
const LOCK='<span class="lock" title="Acceso restringido"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>Acceso restringido</span>';
const esc=s=>s.replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
let autoAnimate=()=>{}, animateFn=null;

/* footer logos */
document.getElementById('logoStrip').innerHTML=AREAS.map(a=>`<img src="assets/logos/${a.k}-blanco.webp" alt="UIFCE ${a.name}" loading="lazy">`).join('');

/* árbol */
function parse(text){
  const root={children:[]},stack=[{d:-1,node:root}];
  for(const line of text.split('\n')){
    const d=line.match(/^ */)[0].length/2,node={label:line.trim(),children:[]};
    while(stack.at(-1).d>=d)stack.pop();
    stack.at(-1).node.children.push(node);stack.push({d,node});
  }
  return root.children;
}
function fmt(label){
  const m=label.match(/^([\dn.]+\.)\s(.*)$/);
  const rest=esc(m?m[2]:label).replace(/\[[^\]]+\]/g,x=>`<span class="var">${x}</span>`);
  return `<span class="num">${m?m[1]:''}</span> ${rest}`;
}
function renderList(nodes,ul){
  ul.innerHTML='';
  for(const n of nodes){
    const li=document.createElement('li'),has=n.children.length>0;
    const el=document.createElement(has?'button':'div');
    el.className='node';
    if(has){el.type='button';el.setAttribute('aria-expanded','false')}
    const r=/\s*\{r\}$/.test(n.label),lbl=n.label.replace(/\s*\{r\}$/,'');
    el.innerHTML=`<span class="car">${has?'›':''}</span>${FOLDER}<span>${fmt(lbl)}${esc(S)}</span>${r?LOCK:''}`;
    li.appendChild(el);
    if(has){
      const sub=document.createElement('ul');li.appendChild(sub);autoAnimate(sub);
      el._toggle=open=>{el.setAttribute('aria-expanded',open);open?renderList(n.children,sub):sub.innerHTML=''};
      el.addEventListener('click',()=>el._toggle(el.getAttribute('aria-expanded')!=='true'));
    }
    ul.appendChild(li);
  }
}
const count=nodes=>nodes.reduce((t,n)=>t+1+count(n.children),0);

const tabs=document.getElementById('tabs'),panel=document.getElementById('panel');
tabs.innerHTML=AREAS.map((a,i)=>`<button class="atab" role="tab" type="button" aria-selected="${i===2}" data-i="${i}"><small>ÁREA ${a.n} · ${a.s}</small><b>${a.name}</b></button>`).join('');
function showArea(i){
  const a=AREAS[i],nodes=parse(a.tree);
  tabs.querySelectorAll('.atab').forEach(t=>t.setAttribute('aria-selected',t.dataset.i==i));
  const pill={o:'<span class="pill o">Obligatoria</span>',s:'<span class="pill s">Si aplica</span>',l:'<span class="pill l">Una por lanzamiento</span>'};
  panel.innerHTML=`
   <div class="card pcard">
     <img class="pcard-logo" src="assets/logos/${a.k}-azul.webp" alt="UIFCE ${a.name}">
     <p class="pdesc">${a.desc}</p>
     <div class="tree-tools"><button class="mini" type="button" data-x="open">Expandir todo</button><button class="mini" type="button" data-x="close">Contraer</button><span class="count">${count(nodes)+1} carpetas</span></div>
     <div class="tree"><ul id="treeRoot"></ul></div>
   </div>
   <div class="card pcard">
     <h3 style="margin-bottom:8px">Carpetas de proceso</h3>
     <table class="ptable"><tbody>${a.procs.map(p=>`<tr><td>${esc(p[0])}</td><td><div>${p[1]}</div>${pill[p[2]]}</td></tr>`).join('')}</tbody></table>
     <div class="files"><b>Archivos sueltos sugeridos</b>${a.files.map(f=>`<span>${f}</span>`).join('')}</div>
     ${a.note?`<aside class="repo-note"><b>Nota aclaratoria</b><p>${a.note}</p></aside>`:''}
   </div>`;
  const root=panel.querySelector('#treeRoot');autoAnimate(root);
  renderList(nodes,root);
  const zero=document.createElement('li');
  zero.innerHTML=`<div class="node short"><span class="car"></span>${SHORT}<span><span class="num">0.</span> ${a.s} - ${a.name} - 2026-1 · acceso directo</span></div>`;
  root.prepend(zero);
  panel.querySelector('[data-x="open"]').onclick=()=>{let g;while((g=panel.querySelectorAll('.tree button.node[aria-expanded="false"]')).length)g.forEach(b=>b._toggle(true))};
  panel.querySelector('[data-x="close"]').onclick=()=>root.querySelectorAll(':scope>li>button.node[aria-expanded="true"]').forEach(b=>b._toggle(false));
  if(animateFn&&!reduce)animateFn(panel.children,{opacity:[0,1],y:[14,0]},{duration:.35,delay:window.Motion?window.Motion.stagger(.07):0});
}
tabs.addEventListener('click',e=>{const t=e.target.closest('.atab');if(t)showArea(+t.dataset.i)});
tabs.addEventListener('keydown',e=>{
  if(!['ArrowRight','ArrowLeft'].includes(e.key))return;
  const cur=+document.activeElement.dataset.i,nx=(cur+(e.key==='ArrowRight'?1:6))%7;
  tabs.children[nx].focus();showArea(nx);
});

/* validador */
const SIGLAS=AREAS.map(a=>a.s),AREA_NAMES=AREAS.map(a=>`${a.n}. ${a.name}`);
function validate(v){
  if(!v.trim())return{state:'info',msg:'Escribe un nombre y lo reviso.',checks:[]};
  if(/^\d{4}$/.test(v))return{state:'ok',msg:'Excepción válida: carpeta anual.',checks:[]};
  if(/^\d{4}-(I|II)$/.test(v))return{state:'ok',msg:'Excepción válida: carpeta semestral.',checks:[]};
  if(AREA_NAMES.includes(v))return{state:'ok',msg:'Excepción válida: carpeta de área.',checks:[]};
  const parts=v.split(' - '),m=(parts[0]||'').match(/^((?:\d+|n)(?:\.(?:\d+|n))*)\.\s(\S+)$/);
  const code=m?m[1]:null,sig=m?m[2]:null;
  const concept=parts.length>=3?parts.slice(1,-1).join(' - '):'',sem=parts.length>=3?parts.at(-1):'';
  const checks=[],add=(ok,t,h)=>checks.push({ok,t,h:ok?'':h});
  add(parts.length===3,'Tres bloques separados por " - "',`Se encontraron ${parts.length} bloque(s). El patrón es Código Sigla - Concepto - Semestre.`);
  add(!!code,'Código jerárquico terminado en punto y espacio','Ejemplo: 2.1. al inicio, seguido de un espacio.');
  if(code){
    const segs=code.split('.'),lead=segs.some(s=>/^0\d/.test(s)),zero=segs.length>1&&segs.includes('0');
    add(!lead&&!zero,'Sin ceros a la izquierda ni 0 fuera del acceso directo',lead?'No uses 01, 02… escribe 1, 2…':'El 0 solo se usa como 0. para el acceso directo.');
  }
  const sigOk=SIGLAS.includes(sig);
  checks.push({ok:sigOk,t:'Sigla válida de dos letras',h:sigOk?`${sig} · ${AREAS.find(a=>a.s===sig).name}`:`Usa una de: ${SIGLAS.join(', ')}.`});
  const generic=/\b(varios|otros|nueva carpeta|copia de|final|definitivo|v\d+)\b/i.test(concept);
  add(!!concept&&!generic,'Concepto descriptivo',!concept?'Falta el concepto.':'Evita Varios, Otros, Nueva carpeta, Copia de, Final o versiones.');
  const badSym=/[\/\\|#_]/.test(v),dbl=/ {2}/.test(v),emoji=/\p{Extended_Pictographic}/u.test(v);
  add(!badSym&&!dbl&&!emoji,'Sin emojis, símbolos / \\ | # _ ni dobles espacios',badSym?'Hay un símbolo no permitido.':dbl?'Hay un doble espacio.':'Hay un emoji.');
  const semOk=/^\d{4}-[12]$/.test(sem);
  add(semOk,'Semestre en formato 2026-2',/-(I|II)$/.test(sem)?'Dentro de una carpeta va 2026-2, no 2026-II.':'Formato Año-Periodo con 1 o 2.');
  const ok=checks.every(c=>c.ok),bad=checks.filter(c=>!c.ok).length;
  return{state:ok?'ok':'bad',msg:ok?'¡Perfecto! Este nombre cumple la guía.':`Ojo: ${bad} regla${bad>1?'s':''} por corregir.`,checks};
}
const input=document.getElementById('nameInput'),verdict=document.getElementById('verdict'),checksEl=document.getElementById('checks'),vM=document.getElementById('vMascot');
const FACE={ok:'feliz',bad:'idea',info:'atento'};let lastState='';
function runCheck(){
  const r=validate(input.value);
  const CH={ok:['✓','Cumple'],bad:['✕','Revisar'],info:['?','Validador']}[r.state];
  verdict.innerHTML=`<span class="chip ${r.state}"><i>${CH[0]}</i>${CH[1]}</span><br>${esc(r.msg)}`;
  checksEl.innerHTML=r.checks.map(c=>`<li class="${c.ok?'y':'n'}"><span class="ic">${c.ok?'✓':'✕'}</span><span>${esc(c.t)}${c.h?`<small>${esc(c.h)}</small>`:''}</span></li>`).join('');
  if(r.state!==lastState){
    vM.src=`assets/uifcito/${FACE[r.state]}.webp`;
    if(animateFn&&!reduce&&lastState)animateFn(vM,{scale:[.8,1.08,1],rotate:[-6,4,0]},{duration:.45});
    lastState=r.state;
  }
}
input.addEventListener('input',runCheck);
const SAMPLES=['2.1.1.3.1. CL - Grabaciones Econometría en Python - 2026-2','0. ET - Estrategias Tecnológicas - 2026-1','01. CL - Planeación - 2026-2','4. DS - Varios - 2026-II','3_GC_Backup_2026_2','3. Cursos Libres'];
const samplesEl=document.getElementById('samples');
samplesEl.innerHTML=SAMPLES.map(s=>{const ok=validate(s).state==='ok';return`<button class="sample" type="button" data-s="${esc(s)}"><span>${esc(s)}</span><em class="${ok?'y':'n'}">${ok?'Cumple':'No cumple'}</em></button>`}).join('');
samplesEl.addEventListener('click',e=>{const b=e.target.closest('.sample');if(b){input.value=b.dataset.s;runCheck();input.focus()}});
runCheck();

/* numeración */
const BASE=[['Actividades del Área','o'],['Material','o'],['Listas de Participación','o'],['Encuestas de Satisfacción','o'],['Proyectos del Área','s']];
let added=false;
const stack=document.getElementById('stack'),addBtn=document.getElementById('addFolder');
function renderStack(){
  const items=[...BASE];if(added)items.push(['Taller Power BI Avanzado','n']);items.push(['Informe de Gestión','i']);
  const tag={o:'<span class="pill o">Obligatoria</span>',s:'<span class="pill s">Si aplica</span>',n:'<span class="pill l">Ejemplo nueva</span>',i:'<span class="pill o">Siempre al final</span>'};
  const tmp=document.createElement('ol');
  tmp.innerHTML=[`<li class="zero" data-k="zero">${SHORT} 0. AA - Apoyos Académicos - 2026-1</li>`].concat(items.map((it,i)=>`<li data-k="${it[0]}" class="${it[1]==='n'?'new':''}">${i+1}. AA - ${it[0]} - 2026-2 ${tag[it[1]]}</li>`)).join('');
  const existing=new Map([...stack.children].map(li=>[li.dataset.k,li]));
  [...tmp.children].forEach((li,idx)=>{
    const old=existing.get(li.dataset.k);
    if(old){old.innerHTML=li.innerHTML;old.className=li.className;existing.delete(li.dataset.k);if(stack.children[idx]!==old)stack.insertBefore(old,stack.children[idx]||null)}
    else stack.insertBefore(li,stack.children[idx]||null);
  });
  existing.forEach(li=>li.remove());
  addBtn.textContent=added?'Restablecer':'Agregar carpeta a mitad de semestre';
  addBtn.classList.toggle('ghost',added);
}
addBtn.addEventListener('click',()=>{added=!added;renderStack()});
renderStack();
showArea(2);

/* ---- capa de animación: AutoAnimate (listas), Motion (revelados), GSAP (héroe y línea de tiempo) ---- */
if(window.autoAnimate){
  autoAnimate=el=>window.autoAnimate(el,{duration:220});
  [stack,checksEl,...document.querySelectorAll('#treeRoot, #treeRoot ul')].forEach(autoAnimate);
}
const M=window.Motion||null;
if(M)animateFn=M.animate;

if(!reduce){
  if(M){
    const{animate,inView}=M;
    document.querySelectorAll('.reveal').forEach(el=>{
      if(el.getBoundingClientRect().top>innerHeight){
        el.style.opacity='0';
        inView(el,()=>{animate(el,{opacity:[0,1],y:[28,0]},{duration:.6,ease:[.2,.7,.2,1]})},{amount:.15});
      }
    });
    inView('#reader',()=>{
      const rows=[...document.querySelectorAll('.reader-row')];
      rows.forEach((r,i)=>setTimeout(()=>{rows.forEach(x=>x.classList.remove('on'));r.classList.add('on')},300+i*450));
    },{amount:.5});
  }
  if(window.gsap){
    const g=window.gsap;g.registerPlugin(window.ScrollTrigger);
    const tl=g.timeline({defaults:{ease:'power3.out'}});
    tl.from('#heroMascot',{y:40,rotate:-6,opacity:0,duration:.8})
      .from('#heroTitle',{y:24,opacity:0,duration:.6},'-=.6')
      .from('#bubble',{scale:.6,opacity:0,transformOrigin:'right center',duration:.4,ease:'back.out(2)'},'-=.2')
      .from('#anatomy .txt',{y:16,opacity:0,stagger:.08,duration:.45},'-=.2')
      .from('#anatomy .part-seg:not(.sep) .lbl',{scaleX:0,transformOrigin:'left',opacity:0,stagger:.1,duration:.4},'-=.15');
    g.to('#heroMascot',{y:-8,duration:2.2,ease:'sine.inOut',yoyo:true,repeat:-1,delay:1.2});
    document.querySelectorAll('[data-count]').forEach(el=>{
      const o={v:0};g.to(o,{v:+el.dataset.count,duration:1.2,delay:.8,ease:'power2.out',onUpdate:()=>el.textContent=Math.round(o.v)});
    });
    g.fromTo('#railFill',{scaleY:0},{scaleY:1,ease:'none',scrollTrigger:{trigger:'#timeline',start:'top 70%',end:'bottom 60%',scrub:true}});
    g.utils.toArray('.step').forEach(s=>g.from(s,{x:-18,duration:.5,scrollTrigger:{trigger:s,start:'top 88%'}}));
  }
}
})();
