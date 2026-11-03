/* FigJam for iPad — hand-built interactive recreation (no external assets). */
(function(){
window.DEMOS=window.DEMOS||{};
var ID='figjam-ios';
var STICKY=[['Yellow','#FFE299'],['Orange','#FFC79E'],['Green','#B3EFBD'],['Blue','#BDE3FF'],['Violet','#DCCCFF'],['Pink','#FFC2EC'],['Red','#FFAFA3'],['Gray','#E6E6E6']];
var INK=['#1E1E1E','#F24822','#FFA629','#FFCD29','#14AE5C','#0D99FF','#9747FF','#B3B3B3'];
var STAMPS=[['plus1','+1','#9747FF'],['heart','♥','#F24822'],['thumb','✓','#14AE5C'],['star','★','#FFA629'],['q','?','#0D99FF']];
var EMOTES=['♥','★','✦','☺'];

var CSS=`
.demo-figjam-ios{--p:#9747FF;font-family:-apple-system,'SF Pro Text','Inter',system-ui,sans-serif;background:#F5F5F5;user-select:none;-webkit-user-select:none;touch-action:none}
.demo-figjam-ios .vp{position:absolute;inset:0;overflow:hidden;background-color:#F4F4F4;background-image:radial-gradient(#C6C6C6 1.1px,transparent 1.4px);background-size:24px 24px;cursor:default}
.demo-figjam-ios .vp.t-hand{cursor:grab}.demo-figjam-ios .vp.t-marker,.demo-figjam-ios .vp.t-hl{cursor:crosshair}
.demo-figjam-ios .world{position:absolute;left:0;top:0;transform-origin:0 0}
.demo-figjam-ios svg.ink{position:absolute;left:-3000px;top:-3000px;width:6000px;height:6000px;overflow:visible;pointer-events:none}
.demo-figjam-ios svg.ink path{pointer-events:stroke;fill:none;stroke-linecap:round;stroke-linejoin:round}
.demo-figjam-ios .sec{position:absolute;border-radius:6px;background:#fff;border:1px solid #E3E3E3}
.demo-figjam-ios .sec .lab{position:absolute;top:-30px;left:0;background:#9747FF;color:#fff;font:600 13px/1 inherit;padding:7px 10px;border-radius:6px;font-family:inherit}
.demo-figjam-ios .stk{position:absolute;width:150px;height:150px;padding:14px;border-radius:2px;box-shadow:0 1px 2px rgba(0,0,0,.12),0 4px 10px -2px rgba(0,0,0,.12);font:500 16px/1.3 inherit;font-family:inherit;color:#1E1E1E;display:flex;flex-direction:column;transition:box-shadow .15s}
.demo-figjam-ios .stk.drag{box-shadow:0 10px 26px -6px rgba(0,0,0,.3);z-index:5}
.demo-figjam-ios .stk.sel{outline:2px solid var(--p);outline-offset:2px}
.demo-figjam-ios .stk .tx{flex:1;outline:none;word-break:break-word;cursor:text;user-select:text;-webkit-user-select:text}
.demo-figjam-ios .stk .tx:empty:before{content:'Type something…';color:rgba(0,0,0,.35)}
.demo-figjam-ios .stk .au{font-size:11px;color:rgba(0,0,0,.45);font-weight:500}
.demo-figjam-ios .stk.pop{animation:fjpop .28s cubic-bezier(.3,1.6,.5,1)}
@keyframes fjpop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
.demo-figjam-ios .shp{position:absolute;display:flex;align-items:center;justify-content:center;text-align:center;font:600 15px/1.2 inherit;font-family:inherit;color:#1E1E1E;padding:10px;z-index:1}
.demo-figjam-ios .shp svg{position:absolute;inset:0;width:100%;height:100%;z-index:-1;overflow:visible}
.demo-figjam-ios .ttl{position:absolute;white-space:nowrap;font:700 30px/1.1 inherit;font-family:inherit;color:#1E1E1E;letter-spacing:-.02em}
.demo-figjam-ios .ttl small{display:block;font-size:14px;font-weight:500;color:#757575;letter-spacing:0;margin-top:6px}
.demo-figjam-ios .stamp{position:absolute;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font:800 18px/1 inherit;font-family:inherit;box-shadow:0 0 0 3px #fff,0 3px 8px rgba(0,0,0,.25);animation:fjstamp .35s cubic-bezier(.3,1.8,.5,1)}
.demo-figjam-ios .stamp i{position:absolute;right:-6px;bottom:-6px;width:20px;height:20px;border-radius:50%;border:2px solid #fff;font:700 9px/16px inherit;font-family:inherit;font-style:normal;text-align:center;color:#fff}
@keyframes fjstamp{0%{transform:scale(2.2);opacity:0}100%{transform:scale(1);opacity:1}}
.demo-figjam-ios .cur{position:absolute;left:0;top:0;transition:transform 1.4s cubic-bezier(.45,.05,.3,1);pointer-events:none;z-index:20}
.demo-figjam-ios .cur span{position:absolute;left:14px;top:16px;color:#fff;font:600 12px/1 inherit;font-family:inherit;padding:5px 8px;border-radius:10px 10px 10px 2px;white-space:nowrap}
.demo-figjam-ios .emo{position:absolute;font-size:30px;pointer-events:none;animation:fjfloat 1.6s ease-out forwards;z-index:30}
@keyframes fjfloat{0%{transform:translate(0,0) scale(.4);opacity:0}15%{opacity:1;transform:translate(0,-20px) scale(1.1)}100%{transform:translate(var(--dx),-170px) scale(1);opacity:0}}
/* chrome */
.demo-figjam-ios .tl,.demo-figjam-ios .tr{position:absolute;top:16px;display:flex;align-items:center;gap:8px;background:#fff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.1),0 4px 14px -4px rgba(0,0,0,.12);padding:6px;z-index:40}
.demo-figjam-ios .tl{left:16px}.demo-figjam-ios .tr{right:16px}
.demo-figjam-ios .ib{width:34px;height:34px;border-radius:8px;border:0;background:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#1E1E1E;font:600 13px inherit;font-family:inherit}
.demo-figjam-ios .ib:hover{background:#F0F0F0}
.demo-figjam-ios .ib:disabled{opacity:.35}
.demo-figjam-ios .fn{font:600 14px/1 inherit;font-family:inherit;padding:0 8px 0 2px}
.demo-figjam-ios .fn small{display:block;font-weight:400;color:#8A8A8A;font-size:11px;margin-top:3px}
.demo-figjam-ios .logo{width:26px;height:26px;border-radius:7px;background:#9747FF;color:#fff;display:flex;align-items:center;justify-content:center;font:800 14px/1 inherit;font-family:inherit;margin-left:4px}
.demo-figjam-ios .av{width:28px;height:28px;border-radius:50%;color:#fff;font:700 12px/28px inherit;font-family:inherit;text-align:center;border:2px solid #fff;margin-left:-8px}
.demo-figjam-ios .av:first-child{margin-left:0}
.demo-figjam-ios .share{background:#9747FF;color:#fff;border:0;border-radius:8px;height:32px;padding:0 14px;font:600 13px inherit;font-family:inherit;cursor:pointer}
.demo-figjam-ios .zm{font:500 12px inherit;font-family:inherit;color:#555;padding:0 6px;min-width:44px;text-align:center}
/* toolbar */
.demo-figjam-ios .tb{position:absolute;left:50%;bottom:16px;transform:translateX(-50%);height:68px;background:#fff;border-radius:16px;box-shadow:0 2px 4px rgba(0,0,0,.08),0 10px 30px -8px rgba(0,0,0,.22);display:flex;align-items:flex-end;padding:0 10px;gap:4px;z-index:40}
.demo-figjam-ios .tb .sep{width:1px;height:40px;background:#E6E6E6;margin:0 6px 14px}
.demo-figjam-ios .tool{position:relative;width:52px;height:68px;border:0;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:10px;color:#1E1E1E;padding:0}
.demo-figjam-ios .tool.sm{width:44px;height:52px;margin-bottom:8px}
.demo-figjam-ios .tool.sm.on{background:#F0E8FF;color:#9747FF}
.demo-figjam-ios .tool .lbl{position:absolute;bottom:-26px;left:50%;transform:translateX(-50%);background:#1E1E1E;color:#fff;font:500 11px/1 inherit;font-family:inherit;padding:5px 7px;border-radius:5px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .15s}
.demo-figjam-ios .tool:hover .lbl{opacity:1}
.demo-figjam-ios .pen{height:68px;width:44px;overflow:hidden;align-items:flex-start}
.demo-figjam-ios .pen svg{transform:translateY(22px);transition:transform .2s cubic-bezier(.3,1.4,.5,1)}
.demo-figjam-ios .pen:hover svg{transform:translateY(16px)}
.demo-figjam-ios .pen.on svg{transform:translateY(4px)}
.demo-figjam-ios .stkt{width:60px;overflow:hidden;align-items:flex-start}
.demo-figjam-ios .stkt .pad{width:40px;height:40px;margin-top:20px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.25);transform:rotate(-4deg);transition:transform .2s}
.demo-figjam-ios .stkt.on .pad,.demo-figjam-ios .stkt:hover .pad{transform:rotate(-4deg) translateY(-8px)}
.demo-figjam-ios .stkt .pad:before{content:'';display:block;width:40px;height:40px;transform:translate(5px,-3px) rotate(8deg);background:inherit;filter:brightness(.92);position:relative;z-index:-1;border-radius:2px}
.demo-figjam-ios .tray{position:absolute;left:50%;bottom:96px;transform:translateX(-50%) translateY(6px);background:#fff;border-radius:14px;box-shadow:0 2px 4px rgba(0,0,0,.08),0 10px 30px -8px rgba(0,0,0,.22);display:flex;gap:6px;padding:8px;z-index:41;opacity:0;pointer-events:none;transition:.18s}
.demo-figjam-ios .tray.show{opacity:1;pointer-events:auto;transform:translateX(-50%)}
.demo-figjam-ios .sw{width:28px;height:28px;border-radius:50%;border:0;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12)}
.demo-figjam-ios .sw.sq{border-radius:4px}
.demo-figjam-ios .sw.on{box-shadow:0 0 0 2px #fff,0 0 0 4px #9747FF}
.demo-figjam-ios .tray .stb{width:38px;height:38px;border-radius:50%;border:0;color:#fff;font:800 16px/1 inherit;font-family:inherit;cursor:pointer}
.demo-figjam-ios .tray .stb.on{box-shadow:0 0 0 2px #fff,0 0 0 4px #1E1E1E}
.demo-figjam-ios .tray .eb{width:40px;height:40px;border-radius:10px;border:0;background:#F5F5F5;font-size:22px;cursor:pointer}
.demo-figjam-ios .tray .eb:hover{background:#EDE4FF}
.demo-figjam-ios .tray .shb{width:40px;height:40px;border:0;background:transparent;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center}
.demo-figjam-ios .tray .shb.on{background:#F0E8FF}
/* guide */
.demo-figjam-ios .guide{position:absolute;top:66px;white-space:nowrap;left:50%;transform:translateX(-50%);background:#1E1E1E;color:#fff;border-radius:12px;padding:8px 8px 8px 14px;display:flex;gap:12px;align-items:center;font:500 12.5px/1 inherit;font-family:inherit;z-index:42;box-shadow:0 6px 20px -6px rgba(0,0,0,.4)}
.demo-figjam-ios .guide .st{display:flex;align-items:center;gap:6px;opacity:.55;transition:opacity .2s}
.demo-figjam-ios .guide .st.cur2{opacity:1}
.demo-figjam-ios .guide .st b{width:18px;height:18px;border-radius:50%;background:#444;display:inline-flex;align-items:center;justify-content:center;font-size:10px}
.demo-figjam-ios .guide .st.done{opacity:1}.demo-figjam-ios .guide .st.done b{background:#14AE5C}
.demo-figjam-ios .guide .st.cur2 b{background:#9747FF}
.demo-figjam-ios .guide button{background:#fff;color:#1E1E1E;border:0;border-radius:8px;height:26px;padding:0 10px;font:600 12px inherit;font-family:inherit;cursor:pointer}
.demo-figjam-ios .pulse:after{content:'';position:absolute;left:50%;top:50%;width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;border:2px solid #9747FF;animation:fjpulse 1.4s ease-out infinite;pointer-events:none}
@keyframes fjpulse{0%{transform:scale(.6);opacity:1}100%{transform:scale(1.5);opacity:0}}
.demo-figjam-ios .toast{position:absolute;left:50%;top:112px;transform:translateX(-50%);background:#fff;border-radius:10px;padding:9px 14px;font:500 13px/1 inherit;font-family:inherit;box-shadow:0 4px 16px -4px rgba(0,0,0,.2);z-index:42;opacity:0;transition:opacity .25s;pointer-events:none}
.demo-figjam-ios .toast.show{opacity:1}
`;

function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e}
var I={
 sel:'<svg width="22" height="22" viewBox="0 0 24 24"><path d="M5 3l14 8-6.2 1.6L10 19z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
 hand:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12V5.5a1.5 1.5 0 013 0V11m0-6.5a1.5 1.5 0 013 0V11m0-5a1.5 1.5 0 013 0v7c0 4-2.5 7-6 7s-5-1.6-6.6-4.2L4.5 13a1.5 1.5 0 012.4-1.6L8 13"/></svg>',
 shape:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="11" width="10" height="10" rx="1.5"/><circle cx="16" cy="8" r="5"/></svg>',
 text:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M5 6V4h14v2M12 4v16M9 20h6"/></svg>',
 stamp:'<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#9747FF"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="800" fill="#fff" font-family="system-ui">+1</text></svg>',
 emote:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8 14.5c1 1.3 2.3 2 4 2s3-.7 4-2"/><circle cx="9" cy="10" r=".6" fill="currentColor"/><circle cx="15" cy="10" r=".6" fill="currentColor"/></svg>',
 undo:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 010 12h-3"/></svg>',
 redo:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14l5-5-5-5"/><path d="M20 9H10a6 6 0 000 12h3"/></svg>',
 menu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
};
function penSvg(kind,color){
 if(kind==='marker')return '<svg width="30" height="64" viewBox="0 0 30 64"><path d="M11 2h8l3 10H8z" fill="'+color+'"/><rect x="6" y="12" width="18" height="52" rx="3" fill="#fff" stroke="#D9D9D9"/><rect x="6" y="22" width="18" height="6" fill="'+color+'"/></svg>';
 if(kind==='hl')return '<svg width="30" height="64" viewBox="0 0 30 64"><path d="M8 4h14v8H8z" fill="'+color+'" opacity=".8"/><path d="M5 12h20l-2 6H7z" fill="#EDEDED" stroke="#D9D9D9"/><rect x="7" y="18" width="16" height="46" rx="3" fill="'+color+'" opacity=".55"/></svg>';
 return '<svg width="30" height="64" viewBox="0 0 30 64"><rect x="7" y="4" width="16" height="12" rx="3" fill="#FFAFA3"/><rect x="7" y="14" width="16" height="50" rx="3" fill="#fff" stroke="#D9D9D9"/><rect x="7" y="14" width="16" height="4" fill="#E6E6E6"/></svg>';
}
function shapeSvg(k,fill,stroke){
 if(k==='circle')return '<svg viewBox="0 0 100 100" preserveAspectRatio="none"><ellipse cx="50" cy="50" rx="49" ry="49" fill="'+fill+'" stroke="'+stroke+'" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>';
 if(k==='diamond')return '<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M50 1L99 50 50 99 1 50z" fill="'+fill+'" stroke="'+stroke+'" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>';
 return '<svg viewBox="0 0 100 100" preserveAspectRatio="none"><rect x="1" y="1" width="98" height="98" rx="8" fill="'+fill+'" stroke="'+stroke+'" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>';
}

function mount(root){
 var timers=[],ivs=[];function T(f,ms){var t=setTimeout(f,ms);timers.push(t);return t}
 var st=el('style');st.textContent=CSS;root.appendChild(st);
 var vp=el('div','vp');root.appendChild(vp);
 var world=el('div','world');vp.appendChild(world);
 var NS='http://www.w3.org/2000/svg';
 var ink,state;

 // chrome
 var tl=el('div','tl','<span class="logo">J</span><button class="ib" title="Menu">'+I.menu+'</button><div class="fn">Team Brainstorm<small>Drafts · FigJam</small></div><button class="ib" data-a="undo" title="Undo">'+I.undo+'</button><button class="ib" data-a="redo" title="Redo">'+I.redo+'</button>');
 root.appendChild(tl);
 var tr=el('div','tr','<div style="display:flex;padding:0 4px"><div class="av" style="background:#0D99FF">P</div><div class="av" style="background:#14AE5C">S</div><div class="av" style="background:#9747FF">You</div></div><span class="zm">100%</span><button class="ib" data-a="reset" title="Reset board" style="width:auto;padding:0 8px;font-size:12px">↺ Replay</button><button class="share">Share</button>');
 tr.querySelector('.av:last-child').style.fontSize='9px';
 root.appendChild(tr);
 var zmEl=tr.querySelector('.zm');
 var guide=el('div','guide','<div class="st" data-s="0"><b>1</b>Draw with the marker</div><div class="st" data-s="1"><b>2</b>Drop a sticky &amp; type</div><div class="st" data-s="2"><b>3</b>Stamp a +1</div>');
 root.appendChild(guide);
 var toast=el('div','toast');root.appendChild(toast);
 function say(t){toast.textContent=t;toast.classList.add('show');clearTimeout(say.t);say.t=T(function(){toast.classList.remove('show')},1800)}

 // toolbar
 var tb=el('div','tb');root.appendChild(tb);
 function tool(id,html,label,cls){var b=el('button','tool '+(cls||''),html+'<span class="lbl">'+label+'</span>');b.dataset.t=id;tb.appendChild(b);return b}
 tool('select',I.sel,'Move','sm');tool('hand',I.hand,'Hand','sm');
 tb.appendChild(el('div','sep'));
 var penM=tool('marker','','Marker','pen');var penH=tool('hl','','Highlighter','pen');var penE=tool('eraser',penSvg('eraser'),'Eraser','pen');
 tb.appendChild(el('div','sep'));
 var stkT=tool('sticky','<div class="pad"></div>','Sticky note','stkt');
 tool('shape',I.shape,'Shapes','sm');tool('text',I.text,'Text','sm');
 tb.appendChild(el('div','sep'));
 tool('stamp',I.stamp,'Stamp','sm');tool('emote',I.emote,'Emote','sm');

 var tray=el('div','tray');root.appendChild(tray);

 function freshState(){return {tool:'select',ink:INK[0],hlc:INK[3],stk:0,stamp:0,shape:'square',px:60,py:40,z:1,steps:[0,0,0],undo:[],redo:[]}}

 function paintPens(){var o=penM.querySelector('svg');if(o)o.remove();penM.insertAdjacentHTML('afterbegin',penSvg('marker',state.ink));
  o=penH.querySelector('svg');if(o)o.remove();penH.insertAdjacentHTML('afterbegin',penSvg('hl',state.hlc));
  stkT.querySelector('.pad').style.background=STICKY[state.stk][1]}

 function setTool(t,keepTray){
  state.tool=t;
  [].forEach.call(tb.querySelectorAll('.tool'),function(b){b.classList.toggle('on',b.dataset.t===t)});
  vp.className='vp t-'+t;
  if(!keepTray)openTray(t);
  pulseNext();
 }
 function openTray(t){
  tray.innerHTML='';var show=true;
  if(t==='marker'||t==='hl'){INK.forEach(function(c){var b=el('button','sw');b.style.background=c;if((t==='marker'?state.ink:state.hlc)===c)b.classList.add('on');
    b.onclick=function(){if(t==='marker')state.ink=c;else state.hlc=c;paintPens();openTray(t)};tray.appendChild(b)})}
  else if(t==='sticky'){STICKY.forEach(function(c,i){var b=el('button','sw sq');b.title=c[0];b.style.background=c[1];if(i===state.stk)b.classList.add('on');b.onclick=function(){state.stk=i;paintPens();openTray(t)};tray.appendChild(b)})}
  else if(t==='stamp'){STAMPS.forEach(function(s,i){var b=el('button','stb',s[1]);b.style.background=s[2];if(i===state.stamp)b.classList.add('on');b.onclick=function(){state.stamp=i;openTray(t)};tray.appendChild(b)})}
  else if(t==='shape'){['square','circle','diamond'].forEach(function(k){var b=el('button','shb','<div style="position:relative;width:24px;height:24px">'+shapeSvg(k,'#fff','#1E1E1E')+'</div>');b.firstChild.firstChild.style.cssText='width:24px;height:24px';if(state.shape===k)b.classList.add('on');b.onclick=function(){state.shape=k;openTray(t)};tray.appendChild(b)})}
  else if(t==='emote'){EMOTES.forEach(function(e){var b=el('button','eb',e);b.onclick=function(){burst(e)};tray.appendChild(b)})}
  else show=false;
  tray.classList.toggle('show',show);
  if(show){var b=tb.querySelector('[data-t="'+t+'"]');var rr=root.getBoundingClientRect(),br=b.getBoundingClientRect(),s=rr.width/root.offsetWidth;
   tray.style.left=((br.left+br.width/2-rr.left)/s)+'px'}
 }
 tb.addEventListener('click',function(e){var b=e.target.closest('.tool');if(!b)return;var t=b.dataset.t;
  if(t===state.tool&&tray.classList.contains('show')){tray.classList.remove('show');return}
  setTool(t)});

 function applyView(){world.style.transform='translate('+state.px+'px,'+state.py+'px) scale('+state.z+')';
  vp.style.backgroundPosition=state.px+'px '+state.py+'px';vp.style.backgroundSize=(24*state.z)+'px '+(24*state.z)+'px';zmEl.textContent=Math.round(state.z*100)+'%'}
 function toWorld(cx,cy){var r=root.getBoundingClientRect(),s=r.width/root.offsetWidth;return {x:((cx-r.left)/s-state.px)/state.z,y:((cy-r.top)/s-state.py)/state.z}}

 // undo stack: entries are {add:node} 
 function pushAdd(node){state.undo.push({n:node,parent:node.parentNode});state.redo=[]}
 tl.addEventListener('click',function(e){var b=e.target.closest('[data-a]');if(!b)return;
  if(b.dataset.a==='undo'){var u=state.undo.pop();if(u){u.n.remove();state.redo.push(u);say('Undo')}}
  else if(b.dataset.a==='redo'){var r=state.redo.pop();if(r){r.parent.appendChild(r.n);state.undo.push(r);say('Redo')}}});
 tr.querySelector('[data-a="reset"]').onclick=function(){build();say('Board reset')};

 function sticky(x,y,color,text,author,mine){
  var s=el('div','stk pop','<div class="tx"></div><div class="au"></div>');s.style.left=x+'px';s.style.top=y+'px';s.style.background=color;
  s.querySelector('.tx').textContent=text||'';s.querySelector('.au').textContent=author||'';
  world.insertBefore(s,ink);return s}
 function stampAt(x,y,i,who,whoColor){var d=STAMPS[i];var s=el('div','stamp',d[1]+'<i style="background:'+(whoColor||'#9747FF')+'">'+(who||'J')+'</i>');s.style.left=x+'px';s.style.top=y+'px';s.style.background=d[2];world.insertBefore(s,ink);return s}
 function shapeAt(x,y,k,text){var s=el('div','shp',shapeSvg(k,'#E5F4FF','#0D99FF')+'<div class="tx" contenteditable="true" style="outline:none;min-width:20px"></div>');s.style.cssText+='left:'+x+'px;top:'+y+'px;width:'+(k==='diamond'?150:140)+'px;height:'+(k==='diamond'?110:90)+'px';s.querySelector('.tx').textContent=text||'';world.insertBefore(s,ink);return s}
 function burst(ch){var rr=root.getBoundingClientRect(),s=rr.width/root.offsetWidth;for(var i=0;i<6;i++){(function(i){T(function(){var e=el('div','emo',ch);e.style.left=(470+Math.random()*80)+'px';e.style.top=(560)+'px';e.style.color=['#F24822','#9747FF','#FFA629','#0D99FF'][i%4];e.style.setProperty('--dx',(Math.random()*120-60)+'px');root.appendChild(e);T(function(){e.remove()},1700)},i*110)})(i)}}

 var curLayer;
 function build(){
  timers.forEach(clearTimeout);timers=[];
  state=freshState();world.innerHTML='';
  ink=document.createElementNS(NS,'svg');ink.setAttribute('class','ink');ink.setAttribute('viewBox','-3000 -3000 6000 6000');world.appendChild(ink);
  curLayer=el('div');world.appendChild(curLayer);
  // seed content
  var t=el('div','ttl','Offsite brainstorm ✏️<small>What should we build for mobile next?</small>');t.style.left='40px';t.style.top='30px';world.insertBefore(t,ink);
  var sec=el('div','sec','<div class="lab">Ideas</div>');sec.style.cssText='left:40px;top:150px;width:520px;height:380px';world.insertBefore(sec,ink);
  var sec2=el('div','sec','<div class="lab" style="background:#14AE5C">Next steps</div>');sec2.style.cssText='left:610px;top:150px;width:300px;height:380px';world.insertBefore(sec2,ink);
  [['Quick sketch mode for Pencil',0,'Priya'],['Share board from the Files app',3,'Sam'],['Sticky note templates',2,'Priya'],['Present mode on iPad',4,'Sam']].forEach(function(a,i){var s=sticky(70+(i%3)*165,190+Math.floor(i/3)*175,STICKY[a[1]][1],a[0],a[2]);s.classList.remove('pop')});
  var sh=shapeAt(660,200,'square','Prototype in 2 weeks');sh.querySelector('.tx').removeAttribute('contenteditable');
  var sh2=shapeAt(655,390,'diamond','Ship?');sh2.querySelector('.tx').removeAttribute('contenteditable');
  // connector
  var c=document.createElementNS(NS,'path');c.setAttribute('d','M730 290 L730 390');c.setAttribute('stroke','#1E1E1E');c.setAttribute('stroke-width','2');c.setAttribute('marker-end','');c.style.pointerEvents='none';c.dataset.seed='1';ink.appendChild(c);
  var ah=document.createElementNS(NS,'path');ah.setAttribute('d','M723 380 L730 390 L737 380');ah.setAttribute('stroke','#1E1E1E');ah.setAttribute('stroke-width','2');ah.setAttribute('fill','none');ah.style.pointerEvents='none';ah.dataset.seed='1';ink.appendChild(ah);
  // collaborators
  cursors=[mkCursor('Priya','#0D99FF'),mkCursor('Sam','#14AE5C')];
  paintPens();setTool('select');applyView();updGuide();
  // scripted collaborators
  moveC(cursors[0],400,120);moveC(cursors[1],760,470);
  loop();
  T(function(){moveC(cursors[0],400,370)},2200);
  T(function(){var s=sticky(400-0,370,STICKY[5][1],'','Priya');typeInto(s.querySelector('.tx'),'Offline boards for flights ✈️')},3800);
  T(function(){moveC(cursors[1],220,340)},5200);
  T(function(){stampAt(222,342,1,'S','#14AE5C');moveC(cursors[1],250,380)},6800);
 }
 function typeInto(node,txt){var i=0;var iv=setInterval(function(){node.textContent=txt.slice(0,++i);if(i>=txt.length)clearInterval(iv)},70);ivs.push(iv)}
 var cursors=[];
 function mkCursor(name,color){var c=el('div','cur','<svg width="18" height="22" viewBox="0 0 18 22"><path d="M1 1l15 9-6.5 1.6L6 19z" fill="'+color+'" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg><span style="background:'+color+'">'+name+'</span>');curLayer.appendChild(c);return c}
 function moveC(c,x,y){c.style.transform='translate('+x+'px,'+y+'px)'}
 var wander;
 function loop(){clearInterval(wander);var k=0;wander=setInterval(function(){k++;if(k<4)return;var c=cursors[k%2];moveC(c,80+Math.random()*760,140+Math.random()*360)},1700);ivs.push(wander)}

 // guide
 function updGuide(){var cur=state.steps.indexOf(0);[].forEach.call(guide.querySelectorAll('.st'),function(s,i){s.classList.toggle('done',!!state.steps[i]);s.classList.toggle('cur2',i===cur);s.querySelector('b').textContent=state.steps[i]?'✓':(i+1)});
  var btn=guide.querySelector('button');if(cur<0&&!btn){var b=el('button',null,'Nice! Replay');b.onclick=function(){build();say('Board reset')};guide.appendChild(b);say('That’s FigJam on iPad — try emotes too')}if(cur>=0&&btn)btn.remove();pulseNext()}
 function done(i){if(!state.steps[i]){state.steps[i]=1;updGuide()}}
 function pulseNext(){[].forEach.call(tb.querySelectorAll('.pulse'),function(b){b.classList.remove('pulse')});if(!state)return;var cur=state.steps.indexOf(0);var want=['marker','sticky','stamp'][cur];if(want&&state.tool!==want){var b=tb.querySelector('[data-t="'+want+'"]');b&&b.classList.add('pulse')}}

 // pointer interactions
 var drag=null;
 function onDown(e){
  if(e.button>0)return;
  var tx=e.target.closest('.tx');
  if(tx&&tx.isContentEditable)return; // typing
  var p=toWorld(e.clientX,e.clientY);var t=state.tool;
  var stk=e.target.closest('.stk,.shp,.stamp');
  if(document.activeElement&&document.activeElement.blur&&document.activeElement!==root)document.activeElement.blur();
  [].forEach.call(world.querySelectorAll('.sel'),function(n){n.classList.remove('sel')});
  if(t==='marker'||t==='hl'){
   var path=document.createElementNS(NS,'path');path.setAttribute('stroke',t==='hl'?state.hlc:state.ink);path.setAttribute('stroke-width',t==='hl'?18:4);if(t==='hl')path.setAttribute('stroke-opacity','.4');
   ink.appendChild(path);drag={k:'ink',path:path,pts:[[p.x,p.y]]};path.setAttribute('d','M'+p.x+' '+p.y+' l0.1 0');
  } else if(t==='eraser'){drag={k:'erase'};erase(e)}
  else if(t==='sticky'){var s=sticky(p.x-75,p.y-75,STICKY[state.stk][1],'','Joey');pushAdd(s);var tx2=s.querySelector('.tx');tx2.contentEditable='true';T(function(){tx2.focus()},30);
   tx2.addEventListener('input',function(){if(tx2.textContent.trim().length>1)done(1)});
   tx2.addEventListener('blur',function(){tx2.contentEditable='false';if(tx2.textContent.trim())done(1)});
   setTool('select',true);tray.classList.remove('show');s.classList.add('sel');say('Sticky added — start typing');
   e.preventDefault();return}
  else if(t==='stamp'){var sp=stampAt(p.x,p.y,state.stamp,'J','#9747FF');pushAdd(sp);done(2)}
  else if(t==='shape'){var sh=shapeAt(p.x-70,p.y-45,state.shape,'');pushAdd(sh);var x=sh.querySelector('.tx');T(function(){x.focus()},30);setTool('select',true);tray.classList.remove('show');e.preventDefault();return}
  else if(t==='text'){var tt=el('div','ttl');tt.style.cssText='left:'+p.x+'px;top:'+(p.y-16)+'px;font-size:24px;outline:none;min-width:40px';tt.contentEditable='true';tt.classList.add('tx');world.insertBefore(tt,ink);pushAdd(tt);T(function(){tt.focus()},30);setTool('select',true);e.preventDefault();return}
  else if(t==='select'&&stk){stk.classList.add('sel');drag={k:'move',n:stk,ox:p.x-parseFloat(stk.style.left),oy:p.y-parseFloat(stk.style.top),moved:0};stk.classList.add('drag')}
  else {drag={k:'pan',sx:e.clientX,sy:e.clientY,px:state.px,py:state.py};if(t==='hand')vp.style.cursor='grabbing'}
  if(drag){try{vp.setPointerCapture(e.pointerId)}catch(_){} }
  e.preventDefault();
 }
 function erase(e){var n=root.ownerDocument.elementFromPoint(e.clientX,e.clientY);if(n&&n.tagName==='path'&&n.parentNode===ink&&!n.dataset.seed){pushAdd(n);n.remove()}}
 function onMove(e){if(!drag)return;var p=toWorld(e.clientX,e.clientY);
  if(drag.k==='ink'){var l=drag.pts[drag.pts.length-1];if(Math.hypot(p.x-l[0],p.y-l[1])<1.5)return;drag.pts.push([p.x,p.y]);drag.path.setAttribute('d',smooth(drag.pts))}
  else if(drag.k==='erase')erase(e);
  else if(drag.k==='move'){drag.moved=1;drag.n.style.left=(p.x-drag.ox)+'px';drag.n.style.top=(p.y-drag.oy)+'px'}
  else if(drag.k==='pan'){var s=root.getBoundingClientRect().width/root.offsetWidth;state.px=drag.px+(e.clientX-drag.sx)/s;state.py=drag.py+(e.clientY-drag.sy)/s;applyView()}}
 function onUp(e){if(!drag)return;
  if(drag.k==='ink'){pushAdd(drag.path);if(drag.pts.length>6)done(0)}
  if(drag.k==='move'){drag.n.classList.remove('drag')}
  if(drag.k==='pan')vp.style.cursor='';
  drag=null}
 function smooth(p){var d='M'+p[0][0].toFixed(1)+' '+p[0][1].toFixed(1);for(var i=1;i<p.length-1;i++){var mx=(p[i][0]+p[i+1][0])/2,my=(p[i][1]+p[i+1][1])/2;d+=' Q'+p[i][0].toFixed(1)+' '+p[i][1].toFixed(1)+' '+mx.toFixed(1)+' '+my.toFixed(1)}var l=p[p.length-1];return d+' L'+l[0].toFixed(1)+' '+l[1].toFixed(1)}
 function onDbl(e){var s=e.target.closest('.stk');if(!s)return;var tx=s.querySelector('.tx');tx.contentEditable='true';tx.focus();tx.onblur=function(){tx.contentEditable='false'}}
 function onWheel(e){e.preventDefault();if(e.ctrlKey||e.metaKey){var r=root.getBoundingClientRect(),s=r.width/root.offsetWidth;var mx=(e.clientX-r.left)/s,my=(e.clientY-r.top)/s;var nz=Math.max(.4,Math.min(2.5,state.z*Math.exp(-e.deltaY*.01)));state.px=mx-(mx-state.px)*nz/state.z;state.py=my-(my-state.py)*nz/state.z;state.z=nz}else{state.px-=e.deltaX;state.py-=e.deltaY}applyView()}
 function onKey(e){if(e.target.isContentEditable)return;var m={v:'select',h:'hand',m:'marker',s:'sticky',r:'shape',t:'text',e:'stamp'};if(m[e.key]){setTool(m[e.key])}}
 vp.addEventListener('pointerdown',onDown);vp.addEventListener('pointermove',onMove);vp.addEventListener('pointerup',onUp);vp.addEventListener('pointercancel',onUp);
 vp.addEventListener('dblclick',onDbl);vp.addEventListener('wheel',onWheel,{passive:false});root.addEventListener('keydown',onKey);

 build();
 return function(){timers.forEach(clearTimeout);ivs.forEach(clearInterval);clearInterval(wander);root.removeEventListener('keydown',onKey);root.innerHTML=''};
}

window.DEMOS[ID]={frame:'tablet',title:'FigJam for iPad',caption:'Pick the marker and draw, drop a sticky note and type, stamp a +1 — drag empty space to pan, ⌘/ctrl-scroll to zoom.',
 sources:['https://www.figma.com/blog/introducing-figjam-for-ipad/','https://www.figma.com/blog/whats-new-in-figma-march-2022/','https://help.figma.com/hc/en-us/articles/4502073572247-FigJam-for-iPad','https://figmalion.com/topics/ios-app','https://www.figma.com/release-notes/feed/atom.xml'],
 mount:mount};
})();
