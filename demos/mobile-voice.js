/* Harvey Mobile + Voice — recreated mini demo (stylistic recreation, fake data). */
(function(){
window.DEMOS=window.DEMOS||{};
var CSS=`
.demo-mobile-voice{--bg:#faf9f7;--ink:#151413;--mut:#7a766f;--ln:#e8e5e0;--soft:#f1efeb;font:14px/1.45 -apple-system,system-ui,'Segoe UI',sans-serif;background:var(--bg);color:var(--ink);user-select:none}
.demo-mobile-voice .serif{font-family:'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif}
.demo-mobile-voice button{font:inherit;color:inherit;cursor:pointer;border:0;background:none;padding:0}
.demo-mobile-voice .sbar{position:absolute;top:0;left:0;right:0;height:44px;display:flex;justify-content:space-between;align-items:center;padding:6px 28px 0 34px;font-weight:600;font-size:14px;z-index:40}
.demo-mobile-voice .sbar.dk{color:#fff}
.demo-mobile-voice .view{position:absolute;top:44px;left:0;right:0;bottom:0;display:flex;flex-direction:column}
.demo-mobile-voice .hdr{height:48px;display:flex;align-items:center;padding:0 16px;gap:10px;flex:none}
.demo-mobile-voice .wm{font-size:24px;letter-spacing:-.01em;flex:1}
.demo-mobile-voice .ib{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;color:#45423e}
.demo-mobile-voice .ib svg{width:20px;height:20px}
.demo-mobile-voice .av{width:30px;height:30px;border-radius:50%;background:#2b2a28;color:#fff;display:grid;place-items:center;font-size:12px;font-weight:600}
.demo-mobile-voice .scroll{flex:1;overflow-y:auto;overflow-x:hidden;padding:0 16px 12px}
.demo-mobile-voice .scroll::-webkit-scrollbar{display:none}
.demo-mobile-voice .hi{font-size:30px;line-height:1.15;margin:14px 0 4px;letter-spacing:-.015em}
.demo-mobile-voice .sub{color:var(--mut);margin-bottom:16px}
.demo-mobile-voice .sec{font-size:12px;color:var(--mut);text-transform:uppercase;letter-spacing:.06em;margin:18px 0 8px;display:flex;justify-content:space-between}
.demo-mobile-voice .sec span{text-transform:none;letter-spacing:0;color:var(--ink);font-weight:500}
.demo-mobile-voice .card{background:#fff;border:1px solid var(--ln);border-radius:14px}
.demo-mobile-voice .li{display:flex;gap:12px;align-items:center;padding:12px 14px;border-bottom:1px solid var(--ln);cursor:pointer}
.demo-mobile-voice .li:last-child{border-bottom:0}
.demo-mobile-voice .li .t{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.demo-mobile-voice .li .m{font-size:12px;color:var(--mut)}
.demo-mobile-voice .li .g{flex:1;min-width:0}
.demo-mobile-voice .li:active{background:var(--soft)}
.demo-mobile-voice .ico{width:34px;height:34px;border-radius:9px;background:var(--soft);display:grid;place-items:center;flex:none;color:#55524d}
.demo-mobile-voice .ico svg{width:17px;height:17px}
.demo-mobile-voice .vrow{display:flex;gap:10px;overflow-x:auto;margin:0 -16px;padding:0 16px}
.demo-mobile-voice .vrow::-webkit-scrollbar{display:none}
.demo-mobile-voice .vc{flex:none;width:150px;padding:12px;cursor:pointer}
.demo-mobile-voice .vc .t{font-weight:500;margin-top:8px;line-height:1.25}
.demo-mobile-voice .vc{padding:10px 12px}
.demo-mobile-voice .vc .ico{width:28px;height:28px}
.demo-mobile-voice .home .li{padding:9px 12px}
.demo-mobile-voice .home .hi{margin-top:6px;font-size:28px}
.demo-mobile-voice .home .sec{margin:14px 0 7px}
.demo-mobile-voice .vc .m{font-size:12px;color:var(--mut);margin-top:2px}
.demo-mobile-voice .comp{flex:none;margin:0 12px 8px;background:#fff;border:1px solid var(--ln);border-radius:22px;padding:10px 12px 8px;box-shadow:0 6px 24px -14px rgba(0,0,0,.3)}
.demo-mobile-voice .comp textarea{width:100%;border:0;outline:0;resize:none;font:inherit;height:22px;background:none;color:var(--ink)}
.demo-mobile-voice .crow{display:flex;align-items:center;gap:6px;margin-top:6px}
.demo-mobile-voice .crow .sp{flex:1}
.demo-mobile-voice .cb{height:30px;min-width:30px;border-radius:15px;border:1px solid var(--ln);display:flex;align-items:center;justify-content:center;gap:4px;padding:0 9px;font-size:12.5px;color:#45423e}
.demo-mobile-voice .cb svg{width:15px;height:15px}
.demo-mobile-voice .mic{width:38px;height:38px;border-radius:50%;background:var(--ink);color:#fff;display:grid;place-items:center}
.demo-mobile-voice .mic svg{width:18px;height:18px}
.demo-mobile-voice .mic.pulse{animation:mvp 1.6s infinite}
@keyframes mvp{0%,100%{box-shadow:0 0 0 0 rgba(21,20,19,.45)}60%{box-shadow:0 0 0 10px rgba(21,20,19,0)}}
.demo-mobile-voice .chipv{display:inline-flex;align-items:center;gap:5px;font-size:12px;background:var(--soft);border:1px solid var(--ln);border-radius:99px;padding:2px 9px;margin-bottom:6px;color:#45423e}
.demo-mobile-voice .tabs{flex:none;height:78px;border-top:1px solid var(--ln);display:flex;background:rgba(250,249,247,.96);padding-bottom:22px}
.demo-mobile-voice .tab{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;font-size:10.5px;color:#9a968f}
.demo-mobile-voice .tab svg{width:22px;height:22px}
.demo-mobile-voice .tab.on{color:var(--ink)}
.demo-mobile-voice .vo{position:absolute;inset:0;background:#141312;color:#f3f1ec;z-index:30;display:flex;flex-direction:column;transform:translateY(100%);transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.demo-mobile-voice .vo.open{transform:none}
.demo-mobile-voice .vo .vh{margin-top:56px;padding:0 20px;display:flex;align-items:center;justify-content:space-between}
.demo-mobile-voice .vo .vh .chipv{background:#26241f;border-color:#36332d;color:#d8d4cc;margin:0}
.demo-mobile-voice .vo .st{font-size:13px;color:#a9a499;display:flex;align-items:center;gap:6px}
.demo-mobile-voice .vo .dot{width:7px;height:7px;border-radius:50%;background:#e5533d;animation:mvb 1s infinite}
@keyframes mvb{50%{opacity:.3}}
.demo-mobile-voice .wave{height:120px;display:flex;align-items:center;justify-content:center;gap:4px;margin:46px 0 26px}
.demo-mobile-voice .wave i{width:5px;border-radius:3px;background:#f3f1ec;height:6px;transition:height .12s ease}
.demo-mobile-voice .tr{padding:0 26px;font-size:24px;line-height:1.3;min-height:160px;letter-spacing:-.01em}
.demo-mobile-voice .tr .ph{color:#6f6a61}
.demo-mobile-voice .tr .w{animation:mvw .25s}
@keyframes mvw{from{opacity:0}}
.demo-mobile-voice .vb{margin-top:auto;display:flex;justify-content:space-around;align-items:center;padding:0 40px 54px}
.demo-mobile-voice .vb button{width:56px;height:56px;border-radius:50%;background:#2a2824;display:grid;place-items:center;color:#f3f1ec}
.demo-mobile-voice .vb .go{width:72px;height:72px;background:#f3f1ec;color:#141312}
.demo-mobile-voice .vb svg{width:24px;height:24px}
.demo-mobile-voice .vb .lb{font-size:11px;color:#8d887e;text-align:center;margin-top:6px}
.demo-mobile-voice .ub{align-self:flex-end;max-width:84%;background:#ecE9e3;border-radius:18px 18px 4px 18px;padding:10px 13px;margin:10px 0 4px}
.demo-mobile-voice .ubm{text-align:right;font-size:11px;color:var(--mut)}
.demo-mobile-voice .msgs{display:flex;flex-direction:column}
.demo-mobile-voice .hv{margin:14px 0 4px}
.demo-mobile-voice .hv .who{display:flex;align-items:center;gap:7px;font-size:13px;font-weight:600;margin-bottom:6px}
.demo-mobile-voice .hv .who i{width:20px;height:20px;border-radius:6px;background:var(--ink);color:#fff;font:italic 13px Georgia,serif;display:grid;place-items:center}
.demo-mobile-voice .steps{font-size:12.5px;color:var(--mut);border-left:2px solid var(--ln);padding-left:10px;margin:4px 0 10px}
.demo-mobile-voice .steps div{animation:mvw .3s}
.demo-mobile-voice .steps .ok{color:#2f7d4f}
.demo-mobile-voice .ans{font-size:15px;line-height:1.55}
.demo-mobile-voice .ans p{margin:0 0 10px}
.demo-mobile-voice .ans b{font-weight:600}
.demo-mobile-voice .cit{display:inline-grid;place-items:center;min-width:17px;height:17px;border-radius:5px;background:var(--ink);color:#fff;font-size:10.5px;font-weight:600;margin:0 1px;vertical-align:2px;cursor:pointer;padding:0 3px}
.demo-mobile-voice .cur{display:inline-block;width:7px;height:15px;background:var(--ink);vertical-align:-2px;animation:mvb .8s infinite}
.demo-mobile-voice .srcs{display:flex;gap:8px;overflow-x:auto;margin:6px -16px 0;padding:0 16px}
.demo-mobile-voice .srcs::-webkit-scrollbar{display:none}
.demo-mobile-voice .src{flex:none;width:190px;padding:9px 11px;font-size:12px;cursor:pointer}
.demo-mobile-voice .src b{display:block;font-weight:500;font-size:12.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.demo-mobile-voice .acts{display:flex;gap:6px;margin:10px 0 4px}
.demo-mobile-voice .acts .cb.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.demo-mobile-voice .spk{display:inline-flex;gap:2px;align-items:center;height:12px}
.demo-mobile-voice .spk i{width:2px;background:currentColor;border-radius:1px;height:4px;transition:height .1s}
.demo-mobile-voice .sheet{position:absolute;left:0;right:0;bottom:0;background:#fff;border-radius:20px 20px 0 0;box-shadow:0 -10px 40px rgba(0,0,0,.25);z-index:35;transform:translateY(105%);transition:transform .3s cubic-bezier(.2,.8,.2,1);padding:10px 18px 34px;max-height:70%}
.demo-mobile-voice .sheet.open{transform:none}
.demo-mobile-voice .grab{width:38px;height:5px;border-radius:3px;background:#d8d5cf;margin:0 auto 12px}
.demo-mobile-voice .shade{position:absolute;inset:0;background:rgba(0,0,0,.28);z-index:34;opacity:0;pointer-events:none;transition:opacity .3s}
.demo-mobile-voice .shade.open{opacity:1;pointer-events:auto}
.demo-mobile-voice .paper{background:#faf9f6;border:1px solid var(--ln);border-radius:10px;padding:14px;font:13px/1.6 'Iowan Old Style',Georgia,serif;color:#2a2826;margin-top:10px}
.demo-mobile-voice mark{background:#fbe9a6;box-shadow:0 0 0 2px #fbe9a6}
.demo-mobile-voice .toast{position:absolute;left:50%;top:100px;transform:translateX(-50%);background:var(--ink);color:#fff;padding:8px 14px;border-radius:99px;font-size:12.5px;opacity:0;transition:opacity .25s;z-index:45;width:max-content;max-width:320px;text-align:center;pointer-events:none}
.demo-mobile-voice .comp textarea{overflow:hidden}
.demo-mobile-voice .toast.show{opacity:1}
.demo-mobile-voice .bigbtn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;height:46px;border-radius:14px;background:var(--ink);color:#fff;font-weight:500;margin-top:14px}
.demo-mobile-voice .bigbtn svg{width:18px;height:18px}
.demo-mobile-voice .ft{font-size:10px;font-weight:700;color:#b24b39}
`;
var IC={
 mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>',
 plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
 scan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8V5h3M17 5h3v3M20 16v3h-3M7 19H4v-3M7 12h10"/></svg>',
 spark:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/></svg>',
 chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v11h-9l-5 4v-4H4z"/></svg>',
 box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 10h18M10 14h4"/></svg>',
 clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
 lib:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4v16M10 4v16M14.5 4.5l4.5 15"/></svg>',
 back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg>',
 x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
 doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h8l4 4v14H6zM14 3v4h4"/></svg>',
 re:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 12a8 8 0 1 0 2.5-5.8M4 4v4h4"/></svg>',
 copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/></svg>',
 spk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9zM16.5 8.5a5 5 0 0 1 0 7"/></svg>',
 sq:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="7" y="7" width="10" height="10" rx="2"/></svg>'
};
var SRC=[
 {f:'Globex_Distribution_Agmt.docx',s:'§13.3 Termination without cause',x:'Either party may terminate this Agreement without cause upon ',h:'one hundred eighty (180) days’ written notice',y:' to the other party, provided all outstanding orders are fulfilled.'},
 {f:'Globex_Distribution_Agmt.docx',s:'§21.1 Notices',x:'All notices under this Agreement ',h:'shall be in writing and delivered by hand, courier, or email with confirmation of receipt',y:' to the addresses on the signature page.'},
 {f:'Globex_Distribution_Agmt.docx',s:'§16.2 Change of control',x:'',h:'Any Change of Control of Distributor shall be deemed an assignment requiring the prior written consent of Globex',y:', which may be withheld in Globex’s sole discretion.'}
];
// Answers: arrays of tokens; {c:n} = citation, '\n' = paragraph break, '**' toggles bold
var CONVO=[
 {q:'What’s the notice period to terminate the Globex distribution agreement for convenience, and does it have to be in writing?',
  title:'Globex termination notice',
  steps:['Searching Project Falcon (8 files)','Reading Globex_Distribution_Agmt.docx','Checking notice and assignment provisions'],
  a:'Either party can terminate the Globex Distribution Agreement **without cause on 180 days’ notice** {1} . \n Yes — notice **must be in writing** and delivered by hand, courier, or email with confirmation of receipt {2} . \n One flag: a change of control of the distributor is treated as an assignment that needs **Globex’s prior written consent** {3} , so a sale of the business could trigger a separate consent requirement.'},
 {q:'Draft a short email to the client summarizing that.',
  title:'Globex termination notice',
  steps:['Using previous answer and cited sources','Drafting in a client-friendly tone'],
  a:'**Subject:** Globex agreement — termination options \n Hi Jordan, \n Quick summary on the Globex Distribution Agreement: you can exit without cause by giving **180 days’ written notice** {1} , delivered by hand, courier, or confirmed email {2} . \n If a sale of the business is on the horizon, note that a change of control requires Globex’s **prior written consent** {3} — worth sequencing carefully. Happy to discuss. \n Best, Alex'}
];
var THREADS=[
 {t:'Globex termination notice',m:'Assistant · Project Falcon · now',hide:true},
 {t:'Summarize deposition transcript — Acme v. Globex',m:'Assistant · Yesterday'},
 {t:'Compare indemnity caps across supplier MSAs',m:'Vault · Project Falcon · Mon'},
 {t:'Draft NDA mark-up for Umbrella Co.',m:'Assistant · Oct 28'}
];
var VAULTS=[
 {t:'Project Falcon',m:'8 files · Supplier agreements',files:['Acme_Globex_MSA.pdf','Initech_Supply_Agreement.pdf','Globex_Distribution_Agmt.docx','Umbrella_NDA_2023.pdf','Hooli_License_Agreement.pdf','Stark_Services_SOW.pdf','Wayne_Logistics_MSA.pdf','Soylent_Purchase_Terms.pdf']},
 {t:'Acme v. Globex — Discovery',m:'1,204 files · Litigation',files:['Deposition_Smith_Day1.pdf','Email_Export_Batch_07.zip','Expert_Report_Draft.docx']},
 {t:'Lease Portfolio Q3',m:'46 files · Real estate',files:['Lease_Elm_St.pdf','Lease_Harbor_Way.pdf']}
];
var LIB=['Summarize key obligations in this agreement','Draft a client update email','List all deadlines and notice periods','Translate this clause into plain English'];
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

window.DEMOS['mobile-voice']={frame:'phone',title:'Harvey Mobile — Voice to Prompt',
 caption:'Tap the black mic to ask Harvey by voice; tap a numbered citation to see the source. Try the Vault tab too.',
 sources:['https://www.harvey.ai/blog/mobile-voice-announcement','https://www.harvey.ai/platform/harvey-mobile','https://help.harvey.ai/release-notes/category/mobile','https://www.harvey.ai/blog/top-5-product-releases-of-2025','https://www.artificiallawyer.com/2025/09/10/mobile-and-voice-are-coming-to-harvey/'],
 mount:function(root){
  var T=[],IV=[],S;
  function later(f,ms){var t=setTimeout(f,ms);T.push(t);return t;}
  function every(f,ms){var t=setInterval(f,ms);IV.push(t);return t;}
  function stopAll(){T.forEach(clearTimeout);IV.forEach(clearInterval);T=[];IV=[];}
  function init(){S={tab:'home',view:'home',turn:0,msgs:[],vault:'Project Falcon',busy:false,project:null};}
  init();
  root.innerHTML='<style>'+CSS+'</style><div class="sbar"><span>9:41</span><span style="display:flex;gap:6px;align-items:center"><svg width="18" height="11" viewBox="0 0 18 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="5" y="5" width="3" height="6" rx="1"/><rect x="10" y="2.5" width="3" height="8.5" rx="1"/><rect x="15" y="0" width="3" height="11" rx="1"/></svg><svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="currentColor" opacity=".5"/><rect x="2" y="2" width="16" height="8" rx="1.5" fill="currentColor"/><rect x="23" y="4" width="1.5" height="4" rx=".7" fill="currentColor" opacity=".5"/></svg></span></div>'+
   '<div class="view"></div><div class="shade"></div><div class="sheet"></div>'+
   '<div class="vo"><div class="vh"><span class="chipv">'+IC.box.replace('<svg','<svg width="13" height="13"')+' <span class="vv">Project Falcon</span></span><span class="st"><span class="dot"></span><span class="sl">Listening</span></span></div>'+
   '<div class="wave">'+new Array(29).join('<i></i>')+'</div><div class="tr"></div>'+
   '<div class="vb"><div><button data-a="vcancel">'+IC.x+'</button><div class="lb">Cancel</div></div><div><button class="go" data-a="vsend">'+IC.up+'</button><div class="lb">Send</div></div><div><button data-a="vstop">'+IC.sq+'</button><div class="lb">Pause</div></div></div></div>'+
   '<div class="toast"></div>';
  var $=function(s){return root.querySelector(s);};
  var view=$('.view'),vo=$('.vo'),sheet=$('.sheet'),shade=$('.shade'),sbar=$('.sbar'),toastEl=$('.toast');
  function toast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(function(){toastEl.classList.remove('show');},1700);}

  function tabs(){var t=[['home','Assistant',IC.chat],['vault','Vault',IC.box],['hist','History',IC.clock],['lib','Library',IC.lib]];
   return '<div class="tabs">'+t.map(function(x){return '<button class="tab'+(S.tab===x[0]?' on':'')+'" data-tab="'+x[0]+'">'+x[2]+x[1]+'</button>';}).join('')+'</div>';}
  function composer(ph){return '<div class="comp">'+(S.vault?'<span class="chipv">'+IC.box.replace('<svg','<svg width="12" height="12"')+' '+esc(S.vault)+' <b data-a="unv" style="cursor:pointer;font-weight:400">×</b></span>':'')+
   '<textarea placeholder="'+(ph||'Ask Harvey anything…')+'"></textarea><div class="crow"><button class="cb" data-a="att">'+IC.plus+'</button><button class="cb" data-a="scan">'+IC.scan+'Scan</button><button class="cb" data-a="improve">'+IC.spark+'Improve</button><span class="sp"></span>'+
   '<button class="cb" data-a="send" title="Send">'+IC.up+'</button><button class="mic'+(S.turn<2?' pulse':'')+'" data-a="mic" aria-label="Voice">'+IC.mic+'</button></div></div>';}
  function li(icon,t,m,attr){return '<div class="li" '+attr+'><div class="ico">'+icon+'</div><div class="g"><div class="t">'+esc(t)+'</div><div class="m">'+esc(m)+'</div></div><span style="color:#bbb">›</span></div>';}

  function render(){
   sbar.classList.remove('dk');
   var h='';
   if(S.view==='home'){
    h='<div class="hdr"><div class="wm serif">Harvey</div><button class="ib" data-a="reset" title="Replay">'+IC.re+'</button><div class="av">AJ</div></div><div class="scroll home">'+
     '<div class="hi serif">Good morning, Alex</div><div class="sub">Ask by voice, scan a document, or pick up where you left off.</div>'+
     '<div class="sec">Recent threads <span data-tab="hist" style="cursor:pointer">See all</span></div><div class="card">'+
     THREADS.filter(function(t){return !t.hide||S.msgs.length;}).slice(0,3).map(function(t,i){return li(IC.chat,t.t,t.m,'data-th="'+THREADS.indexOf(t)+'"');}).join('')+'</div>'+
     '<div class="sec">Vaults <span data-tab="vault" style="cursor:pointer">See all</span></div><div class="vrow">'+
     VAULTS.map(function(v,i){return '<div class="card vc" data-pj="'+i+'"><div class="ico">'+IC.box+'</div><div class="t">'+esc(v.t)+'</div><div class="m">'+esc(v.m)+'</div></div>';}).join('')+'</div></div>'+
     composer()+tabs();
   } else if(S.view==='thread'){
    h='<div class="hdr"><button class="ib" data-a="home">'+IC.back+'</button><div style="flex:1;font-weight:600;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(CONVO[0].title)+'</div><button class="ib" data-a="reset">'+IC.re+'</button></div>'+
     '<div class="scroll"><div class="msgs"></div></div>'+composer('Ask a follow-up…');
   } else if(S.view==='vault'){
    h='<div class="hdr"><div class="wm serif" style="font-size:22px">Vault</div><button class="ib" data-a="scan">'+IC.scan+'</button><button class="ib" data-a="att">'+IC.plus+'</button></div><div class="scroll"><div class="sec">Your vaults</div><div class="card">'+
     VAULTS.map(function(v,i){return li(IC.box,v.t,v.m,'data-pj="'+i+'"');}).join('')+'</div><div class="sec">Shared with you</div><div class="card">'+li(IC.box,'Knowledge Base: Precedents','312 files · Shared by Sample LLP','data-a="kb"')+'</div></div>'+tabs();
   } else if(S.view==='project'){
    var v=VAULTS[S.project];
    h='<div class="hdr"><button class="ib" data-tab="vault">'+IC.back+'</button><div style="flex:1;font-weight:600;text-align:center">'+esc(v.t)+'</div><button class="ib" data-a="scan">'+IC.scan+'</button></div><div class="scroll">'+
     '<div class="sub" style="margin:4px 0 0">'+esc(v.m)+'</div><button class="bigbtn" data-a="askvault">'+IC.mic+' Ask this vault by voice</button>'+
     '<div class="sec">Files</div><div class="card">'+v.files.map(function(f){return '<div class="li" data-file="'+esc(f)+'"><div class="ico">'+IC.doc+'</div><div class="g"><div class="t">'+esc(f)+'</div><div class="m"><span class="ft">'+(/pdf$/.test(f)?'PDF':/docx$/.test(f)?'DOCX':'ZIP')+'</span> · Uploaded Oct 2026</div></div></div>';}).join('')+'</div></div>'+tabs();
   } else if(S.view==='hist'){
    h='<div class="hdr"><div class="wm serif" style="font-size:22px">History</div></div><div class="scroll"><div class="sec">Threads</div><div class="card">'+
     THREADS.filter(function(t){return !t.hide||S.msgs.length;}).map(function(t){return li(IC.chat,t.t,t.m,'data-th="'+THREADS.indexOf(t)+'"');}).join('')+'</div></div>'+tabs();
   } else if(S.view==='lib'){
    h='<div class="hdr"><div class="wm serif" style="font-size:22px">Library</div></div><div class="scroll"><div class="sec">Shared prompts</div><div class="card">'+
     LIB.map(function(p,i){return li(IC.spark,p,'Prompt · Sample LLP','data-lib="'+i+'"');}).join('')+'</div></div>'+tabs();
   }
   view.innerHTML=h;
   if(S.view==='thread')drawMsgs();
  }
  function go(v){S.view=v;S.tab=(v==='thread'?'home':v==='project'?'vault':v);render();}

  // ---- thread rendering
  function fmt(tokens,n){var out='',bold=false,c=0;
   for(var i=0;i<n&&i<tokens.length;i++){var w=tokens[i];
    if(w==='\n'){out+='</p><p>';continue;}
    var m=w.match(/^\{(\d)\}$/);if(m){out+='<span class="cit" data-c="'+(m[1]-1)+'">'+m[1]+'</span>';continue;}
    if(w==='.'||w===','){out=out.replace(/ $/,'');out+=w+' ';continue;}
    var parts=w.split('**');for(var j=0;j<parts.length;j++){if(j>0){bold=!bold;out+=bold?'<b>':'</b>';}out+=esc(parts[j]);}
    out+=' ';}
   if(bold)out+='</b>';return '<p>'+out+'</p>';}
  function drawMsgs(){var box=view.querySelector('.msgs');if(!box)return;var h='';
   S.msgs.forEach(function(m,mi){
    if(m.u)h+='<div class="ub">'+esc(m.u)+'</div><div class="ubm">'+IC.mic.replace('<svg','<svg width="11" height="11" style="vertical-align:-1px"')+' Voice prompt</div>';
    else{var C=CONVO[m.i];
     h+='<div class="hv"><div class="who"><i>H</i>Harvey</div><div class="steps">'+C.steps.slice(0,m.steps).map(function(s,k){return '<div'+(k<m.steps-1||m.n>0?' class="ok"':'')+'>'+(k<m.steps-1||m.n>0?'✓ ':'… ')+esc(s)+'</div>';}).join('')+'</div>';
     if(m.n>0)h+='<div class="ans">'+fmt(m.tok,m.n).replace(/<\/p>$/,(m.done?'':'<span class="cur"></span>')+'</p>')+'</div>';
     if(m.done){h+='<div class="sec" style="margin-top:4px">Sources · 3</div><div class="srcs">'+SRC.map(function(s,k){return '<div class="card src" data-c="'+k+'"><b>'+(k+1)+'. '+esc(s.s)+'</b><span style="color:#7a766f">'+esc(s.f)+'</span></div>';}).join('')+'</div>'+
      '<div class="acts"><button class="cb'+(S.speaking===mi?' on':'')+'" data-a="speak" data-m="'+mi+'">'+(S.speaking===mi?'<span class="spk"><i></i><i></i><i></i><i></i></span> Stop':IC.spk+' Read aloud')+'</button><button class="cb" data-a="copy">'+IC.copy+'Copy</button><button class="cb" data-a="save">'+IC.box+'Save to Vault</button></div>';}
     h+='</div>';}
   });
   box.innerHTML=h;var sc=view.querySelector('.scroll');sc.scrollTop=sc.scrollHeight;}

  function ask(i,text){
   go('thread');
   S.msgs.push({u:text});var m={i:i,steps:1,n:0,done:false,tok:CONVO[i].a.split(' ')};S.msgs.push(m);drawMsgs();
   S.busy=true;
   CONVO[i].steps.forEach(function(s,k){if(k)later(function(){m.steps=k+1;drawMsgs();},700*k);});
   later(function(){var iv=every(function(){m.n+=1;if(m.n>=m.tok.length){m.done=true;clearInterval(iv);S.busy=false;
      if(S.turn<CONVO.length)later(function(){toast('Tap a number to check the source · or mic for a follow-up');},400);}drawMsgs();},55);},700*CONVO[i].steps.length);
  }
  function generic(text){
   go('thread');S.msgs.push({u:text});
   var C={steps:['Searching '+(S.vault||'your workspace'),'Drafting response'],a:'In this demo Harvey only knows a few scripted answers — try the **mic** button to ask about the Globex agreement. In the real app, Assistant answers from your vaults and files with citations {1} .',title:''};
   CONVO.push(C);var m={i:CONVO.length-1,steps:1,n:0,tok:C.a.split(' ')};S.msgs.push(m);
   later(function(){m.steps=2;drawMsgs();},600);
   later(function(){var iv=every(function(){m.n++;if(m.n>=m.tok.length){m.done=true;clearInterval(iv);}drawMsgs();},45);},1200);
  }

  // ---- voice session
  var waveIv=null,trT=[];
  function voice(){
   var i=Math.min(S.turn,CONVO.length-1);if(S.turn>=2)i=1;
   var words=CONVO[i].q.split(' ');
   vo.classList.add('open');sbar.classList.add('dk');
   $('.vv').textContent=S.vault||'No vault';
   $('.sl').textContent='Listening';$('.dot').style.display='';
   var tr=$('.tr');tr.innerHTML='<span class="ph">Go ahead, I’m listening…</span>';
   var bars=vo.querySelectorAll('.wave i'),k=0,talking=false;
   waveIv=every(function(){k++;bars.forEach(function(b,j){var env=Math.sin((j/bars.length)*Math.PI);var amp=talking?(10+Math.random()*80*env+12*Math.sin(k/2+j)):(4+3*Math.sin(k/3+j/2));b.style.height=Math.max(5,amp)+'px';});},110);
   var n=0;S.vq={i:i,words:words};
   trT.push(later(function(){talking=true;tr.innerHTML='';
    var wi=every(function(){if(n>=words.length){clearInterval(wi);talking=false;$('.sl').textContent='Done — sending';later(sendVoice,900);return;}
     tr.insertAdjacentHTML('beforeend','<span class="w">'+esc(words[n])+' </span>');n++;},200);trT.push(wi);},900));
   S.vn=function(){return n;};
  }
  function closeVoice(){vo.classList.remove('open');clearInterval(waveIv);stopAll();sbar.classList.remove('dk');}
  function sendVoice(){if(!vo.classList.contains('open'))return;var q=S.vq;closeVoice();S.turn=q.i+1;ask(q.i,q.words.join(' '));}

  // ---- sheet
  function openSrc(k){var s=SRC[k];
   sheet.innerHTML='<div class="grab"></div><div style="display:flex;align-items:center;gap:10px"><div class="ico">'+IC.doc+'</div><div style="flex:1;min-width:0"><div style="font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(s.f)+'</div><div style="font-size:12px;color:#7a766f">Project Falcon · '+esc(s.s)+'</div></div><button class="ib" data-a="shut">'+IC.x+'</button></div>'+
    '<div class="paper"><b>'+esc(s.s.split(' ')[0])+'</b> '+esc(s.x)+'<mark>'+esc(s.h)+'</mark>'+esc(s.y)+'</div><button class="bigbtn" data-a="shut" style="background:#f1efeb;color:#151413">Open full document</button>';
   sheet.classList.add('open');shade.classList.add('open');}
  function shut(){sheet.classList.remove('open');shade.classList.remove('open');}

  var spkIv=null;
  function onClick(e){
   var t=e.target;
   if(t===shade){shut();return;}
   var c=t.closest('[data-c]');if(c){openSrc(+c.dataset.c);return;}
   var tb=t.closest('[data-tab]');if(tb){go(tb.dataset.tab);return;}
   var th=t.closest('[data-th]');if(th){var ix=+th.dataset.th;if(ix===0&&S.msgs.length)go('thread');else toast('Sample thread — try the mic for a live one');return;}
   var pj=t.closest('[data-pj]');if(pj){S.project=+pj.dataset.pj;go('project');return;}
   var lb=t.closest('[data-lib]');if(lb){go('home');view.querySelector('textarea').value=LIB[+lb.dataset.lib];toast('Prompt inserted');return;}
   var fl=t.closest('[data-file]');if(fl){toast('Opening '+fl.dataset.file);return;}
   var a=t.closest('[data-a]');if(!a)return;
   switch(a.dataset.a){
    case 'mic': if(S.busy){toast('Harvey is still answering…');return;} voice();break;
    case 'askvault': S.vault=VAULTS[S.project].t;voice();break;
    case 'vcancel': closeVoice();toast('Voice prompt discarded');break;
    case 'vsend': if(S.vn&&S.vn()<3){toast('Keep talking…');return;} sendVoice();break;
    case 'vstop': $('.sl').textContent='Paused';$('.dot').style.display='none';toast('Paused — tap Send when ready');stopAll();break;
    case 'shut': shut();break;
    case 'send': sendText(view.querySelector('textarea'));break;
    case 'home': go('home');break;
    case 'unv': S.vault=null;render();break;
    case 'scan': toast('Camera scan → upload to Vault (not in demo)');break;
    case 'att': toast('Attach files from Vault or device');break;
    case 'kb': toast('Knowledge Base: read-only in this demo');break;
    case 'copy': toast('Copied with citations');break;
    case 'save': toast('Saved to Project Falcon');break;
    case 'improve': var ta=view.querySelector('textarea');
     if(!ta.value.trim()){toast('Type a rough prompt first, then Improve');return;}
     var v=ta.value.trim();ta.value='';var out='Acting as outside counsel, '+v.replace(/[?.]$/,'').replace(/^./,function(x){return x.toLowerCase();})+'. Cite the specific sections relied on and flag any risks or ambiguities.';
     var j=0;var iv=every(function(){j+=3;ta.value=out.slice(0,j);ta.style.height='66px';if(j>=out.length)clearInterval(iv);},20);break;
    case 'speak': var mi=+a.dataset.m;
     if(S.speaking===mi){S.speaking=null;clearInterval(spkIv);drawMsgs();return;}
     S.speaking=mi;drawMsgs();clearInterval(spkIv);var ticks=0;
     spkIv=every(function(){ticks++;view.querySelectorAll('.spk i').forEach(function(b){b.style.height=(3+Math.random()*9)+'px';});if(ticks>60){S.speaking=null;clearInterval(spkIv);drawMsgs();}},120);break;
    case 'reset': closeVoice();shut();CONVO.length=2;init();render();toast('Demo reset');break;
   }
  }
  function sendText(ta){var v=ta.value.trim();if(!v){toast('Type a question, or tap the mic');return;}if(S.busy){toast('Harvey is still answering…');return;}
   if(/globex|terminat|notice/i.test(v)&&S.turn===0){S.turn=1;ask(0,v);}else generic(v);}
  function onKey(e){if(e.key==='Enter'&&e.target.tagName==='TEXTAREA'){e.preventDefault();sendText(e.target);}}
  root.addEventListener('click',onClick);root.addEventListener('keydown',onKey);
  render();
  return function(){stopAll();clearInterval(waveIv);clearInterval(spkIv);clearTimeout(toast.t);CONVO.length=2;root.removeEventListener('click',onClick);root.removeEventListener('keydown',onKey);root.innerHTML='';};
 }};
})();
