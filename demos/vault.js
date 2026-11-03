/* Harvey Vault — recreated mini demo (stylistic recreation, fake data). */
(function(){
window.DEMOS=window.DEMOS||{};
var CSS=`
.demo-vault{--bg:#fbfaf8;--ink:#161514;--mut:#77736d;--ln:#e7e4df;--soft:#f3f1ed;--hl:#fbe9a6;--ok:#2f7d4f;font:13px/1.45 system-ui,-apple-system,'Segoe UI',sans-serif;background:var(--bg);color:var(--ink);display:flex;height:100%}
.demo-vault .serif{font-family:'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif}
.demo-vault button{font:inherit;color:inherit;cursor:pointer}
.demo-vault .sb{width:196px;flex:none;border-right:1px solid var(--ln);background:#f6f4f0;display:flex;flex-direction:column;padding:16px 10px}
.demo-vault .wm{font-size:22px;padding:2px 10px 18px;letter-spacing:-.01em}
.demo-vault .nav a{display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:7px;color:#3d3b38;text-decoration:none;font-weight:500;cursor:default}
.demo-vault .nav a.on{background:#e9e6e0;color:var(--ink)}
.demo-vault .nav svg{width:15px;height:15px;flex:none}
.demo-vault .sb .proj{margin-top:18px;font-size:11px;color:var(--mut);padding:0 10px 6px;text-transform:uppercase;letter-spacing:.06em}
.demo-vault .sb .pj{padding:5px 10px;border-radius:6px;color:#4a4744;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.demo-vault .sb .pj.on{background:#fff;border:1px solid var(--ln)}
.demo-vault .sb .me{margin-top:auto;display:flex;align-items:center;gap:8px;padding:8px 10px;color:var(--mut);font-size:12px}
.demo-vault .av{width:24px;height:24px;border-radius:50%;background:#2b2a28;color:#fff;display:grid;place-items:center;font-size:11px;font-weight:600}
.demo-vault .main{flex:1;min-width:0;display:flex;flex-direction:column}
.demo-vault .top{padding:14px 22px 10px;border-bottom:1px solid var(--ln);background:#fff}
.demo-vault .crumb{font-size:12px;color:var(--mut)}
.demo-vault .crumb b{color:var(--ink);font-weight:500}
.demo-vault .ttl{display:flex;align-items:center;gap:10px;margin-top:4px}
.demo-vault .ttl h1{font-size:21px;font-weight:500;margin:0;letter-spacing:-.01em}
.demo-vault .pill{font-size:11px;padding:2px 8px;border-radius:99px;background:var(--soft);color:#55524d;border:1px solid var(--ln)}
.demo-vault .tabs{display:flex;gap:18px;margin-top:10px;font-size:12.5px;color:var(--mut)}
.demo-vault .tabs span{padding-bottom:6px;cursor:default}
.demo-vault .tabs span.on{color:var(--ink);border-bottom:2px solid var(--ink);font-weight:500}
.demo-vault .rp{margin-left:auto;border:1px solid var(--ln);background:#fff;border-radius:7px;padding:4px 10px;font-size:12px;color:#55524d}
.demo-vault .tb{display:flex;align-items:center;gap:8px;padding:10px 22px;border-bottom:1px solid var(--ln);background:#fff;position:relative}
.demo-vault .srch{display:flex;align-items:center;gap:6px;border:1px solid var(--ln);border-radius:7px;padding:5px 9px;width:230px;background:#fff}
.demo-vault .srch input{border:0;outline:0;font:inherit;flex:1;min-width:0;background:none}
.demo-vault .btn{border:1px solid var(--ln);background:#fff;border-radius:7px;padding:5px 10px;font-size:12.5px;display:flex;align-items:center;gap:6px}
.demo-vault .btn.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.demo-vault .btn.pri{background:var(--ink);color:#fff;border-color:var(--ink)}
.demo-vault .btn.pulse{animation:vpulse 1.6s infinite}
@keyframes vpulse{0%,100%{box-shadow:0 0 0 0 rgba(22,21,20,.35)}50%{box-shadow:0 0 0 6px rgba(22,21,20,0)}}
.demo-vault .tb .sp{flex:1}
.demo-vault .cnt{font-size:12px;color:var(--mut)}
.demo-vault .body{flex:1;display:flex;min-height:0}
.demo-vault .tw{flex:1;overflow:auto;min-width:0}
.demo-vault table{border-collapse:separate;border-spacing:0;font-size:12.5px;min-width:100%}
.demo-vault th{position:sticky;top:0;background:#f7f5f1;z-index:2;text-align:left;font-weight:500;color:#45423e;padding:8px 10px;border-bottom:1px solid var(--ln);border-right:1px solid var(--ln);white-space:nowrap}
.demo-vault th .ty{font-size:10px;color:var(--mut);font-weight:400;display:block;text-transform:uppercase;letter-spacing:.05em}
.demo-vault th.new{animation:vfade .4s}
@keyframes vfade{from{background:#ece8df}}
.demo-vault td{padding:8px 10px;border-bottom:1px solid var(--ln);border-right:1px solid var(--ln);vertical-align:top;background:#fff;width:200px;max-width:220px}
.demo-vault td.st{white-space:nowrap;width:auto;color:#45423e}
.demo-vault td.cl{min-width:190px}
.demo-vault td.fn{position:sticky;left:0;z-index:1;width:230px;min-width:230px;font-weight:500;white-space:nowrap}
.demo-vault th.fn{position:sticky;left:0;z-index:3}
.demo-vault td.n{width:34px;min-width:34px;color:var(--mut);text-align:center}
.demo-vault .fi{display:flex;gap:8px;align-items:flex-start}
.demo-vault .doc{width:16px;height:19px;flex:none;border-radius:2px;background:#fff;border:1px solid #c9c4bb;position:relative;margin-top:1px}
.demo-vault .doc::after{content:'';position:absolute;left:3px;right:3px;top:5px;height:6px;border-top:1px solid #c9c4bb;border-bottom:1px solid #c9c4bb}
.demo-vault .doc.pdf{border-color:#d9a79c}
.demo-vault .cl{cursor:pointer;position:relative}
.demo-vault .cl .tx{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}
.demo-vault.wrap .cl .tx{-webkit-line-clamp:unset;display:block}
.demo-vault .cl:hover{background:#faf8f3}
.demo-vault .cl.sel{box-shadow:inset 0 0 0 2px var(--ink)}
.demo-vault .cl.ok::after{content:'✓';position:absolute;right:5px;top:6px;font-size:10px;color:#fff;background:var(--ok);width:14px;height:14px;border-radius:50%;display:grid;place-items:center;line-height:14px;text-align:center}
.demo-vault .tag{display:inline-block;font-size:11px;padding:0 6px;border-radius:4px;margin-right:4px;font-weight:500}
.demo-vault .t-y{background:#e3f0e6;color:#24603c}.demo-vault .t-n{background:#f6e4e1;color:#8c3427}.demo-vault .t-m{background:#f3ecd9;color:#7b5c14}
.demo-vault .ld{height:10px;border-radius:4px;background:linear-gradient(90deg,#eeebe5,#f8f6f2,#eeebe5);background-size:200% 100%;animation:vsh 1.1s infinite linear;margin-top:4px;width:80%}
@keyframes vsh{to{background-position:-200% 0}}
.demo-vault td.fresh{animation:vfade 0.8s}
.demo-vault .pop{position:absolute;top:44px;right:22px;width:360px;background:#fff;border:1px solid var(--ln);border-radius:10px;box-shadow:0 18px 50px -12px rgba(0,0,0,.25);padding:14px;z-index:10}
.demo-vault .pop h4{margin:0 0 8px;font-size:13px;font-weight:600}
.demo-vault .pop label{font-size:11px;color:var(--mut);display:block;margin:8px 0 4px}
.demo-vault .pop input,.demo-vault .pop select{width:100%;border:1px solid var(--ln);border-radius:7px;padding:7px 9px;font:inherit;outline:0}
.demo-vault .pop input:focus{border-color:#999}
.demo-vault .chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.demo-vault .chip{border:1px solid var(--ln);background:var(--soft);border-radius:99px;padding:3px 9px;font-size:12px}
.demo-vault .chip:hover{border-color:#aaa}
.demo-vault .pop .row{display:flex;gap:8px;justify-content:flex-end;margin-top:12px}
.demo-vault .fpop{left:auto;right:auto;width:240px}
.demo-vault .fopt{display:flex;justify-content:space-between;padding:6px 8px;border-radius:6px;cursor:pointer}
.demo-vault .fopt:hover,.demo-vault .fopt.on{background:var(--soft)}
.demo-vault .side{width:0;flex:none;overflow:hidden;border-left:1px solid var(--ln);background:#fff;transition:width .25s;display:flex;flex-direction:column}
.demo-vault .side.open{width:410px}
.demo-vault .sh{padding:12px 16px;border-bottom:1px solid var(--ln);display:flex;align-items:center;gap:8px;min-width:410px}
.demo-vault .sh b{flex:1;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.demo-vault .x{border:0;background:none;font-size:16px;color:var(--mut)}
.demo-vault .ans{padding:12px 16px;border-bottom:1px solid var(--ln);background:#faf9f6;min-width:410px}
.demo-vault .ans .q{font-size:11px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em}
.demo-vault .ans .a{margin:4px 0 8px;font-size:13.5px}
.demo-vault .ans .why{font-size:12px;color:#55524d}
.demo-vault .cite{display:inline-block;font-size:10px;background:var(--ink);color:#fff;border-radius:3px;padding:0 4px;margin-left:3px;vertical-align:1px}
.demo-vault .vrow{display:flex;gap:8px;margin-top:10px}
.demo-vault .pg{flex:1;overflow:auto;padding:18px 22px;background:#efede8;min-width:410px}
.demo-vault .paper{background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12);padding:28px 30px;font-family:'Iowan Old Style','Times New Roman',Georgia,serif;font-size:12.5px;line-height:1.6;color:#222}
.demo-vault .paper h5{text-align:center;font-size:13px;margin:0 0 4px;letter-spacing:.04em}
.demo-vault .paper .sub{text-align:center;font-size:11px;color:#666;margin-bottom:14px}
.demo-vault .paper p{margin:0 0 10px}
.demo-vault mark{background:var(--hl);padding:1px 0;box-shadow:0 0 0 2px var(--hl)}
.demo-vault .pgn{font-size:10px;color:#999;text-align:center;margin-top:12px;font-family:system-ui}
.demo-vault .toast{position:absolute;bottom:18px;left:50%;transform:translateX(-50%);background:var(--ink);color:#fff;padding:8px 14px;border-radius:8px;font-size:12.5px;opacity:0;transition:opacity .25s;pointer-events:none;z-index:20}
.demo-vault .toast.show{opacity:1}
.demo-vault .empty{padding:40px;text-align:center;color:var(--mut)}
`;
var I={
 a:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg>',
 v:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2" y="3" width="12" height="10" rx="1.5"/><path d="M2 6.5h12"/></svg>',
 w:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 3h4v4H3zM9 9h4v4H9zM7 5h4v4"/></svg>',
 h:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5"/></svg>',
 l:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 2.5v11M6.5 2.5v11M10 3l3 10"/></svg>',
 s:'<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="#888" stroke-width="1.6"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 14 14"/></svg>',
 f:'<svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h12l-4.5 5.5V13l-3-1.5v-3z"/></svg>'
};
// Fake documents. Each has clause text keyed by question id; answers cite the clause.
var DOCS=[
 {f:'Acme_Globex_MSA.pdf',t:'Master Services Agreement',d:'Mar 1, 2022',p:'Acme Corp. and Globex Inc.',
  law:['Delaware','14.2','This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of laws principles.'],
  coc:['Yes',"Termination right on change of control",'11.4','Either party may terminate this Agreement upon thirty (30) days’ written notice if the other party undergoes a Change of Control, including any merger or sale of more than fifty percent (50%) of its voting securities.'],
  term:['Yes','90 days’ written notice','11.2','Customer may terminate this Agreement for convenience upon ninety (90) days’ prior written notice to Provider.'],
  asg:['Consent required','15.1','Neither party may assign this Agreement without the prior written consent of the other party, such consent not to be unreasonably withheld.']},
 {f:'Initech_Supply_Agreement.pdf',t:'Supply Agreement',d:'Jul 15, 2021',p:'Initech LLC and Acme Corp.',
  law:['New York','18.1','This Agreement and any dispute arising hereunder shall be governed by the laws of the State of New York.'],
  coc:['No','Not addressed','—','The Agreement does not contain a change of control provision. Section 17 (Assignment) is silent as to mergers or changes in ownership.'],
  term:['No','Only for cause','12.1','This Agreement may be terminated only for material breach that remains uncured sixty (60) days following written notice thereof.'],
  asg:['Consent required','17.1','Supplier shall not assign or delegate any of its obligations without Buyer’s prior written consent.']},
 {f:'Globex_Distribution_Agmt.docx',t:'Distribution Agreement',d:'Jan 9, 2023',p:'Globex Inc. and Acme Corp.',
  law:['England & Wales','20.3','This Agreement shall be governed by and interpreted in accordance with the laws of England and Wales, and the courts of London shall have exclusive jurisdiction.'],
  coc:['Yes','Consent required on change of control','16.2','Any Change of Control of Distributor shall be deemed an assignment requiring the prior written consent of Globex.'],
  term:['Yes','180 days’ notice','13.3','Either party may terminate this Agreement without cause upon one hundred eighty (180) days’ written notice.'],
  asg:['Consent required','16.1','Distributor may not assign, transfer or sub-license any rights hereunder without the prior written consent of Globex.']},
 {f:'Umbrella_NDA_2023.pdf',t:'Mutual NDA',d:'Apr 4, 2023',p:'Umbrella Co. and Acme Corp.',
  law:['California','9.1','This Agreement shall be governed by the laws of the State of California applicable to contracts made and performed therein.'],
  coc:['No','Not addressed','—','No change of control provision identified. The NDA binds successors and permitted assigns (Section 8.3).'],
  term:['Yes','30 days’ notice','7.1','Either party may terminate this Agreement at any time upon thirty (30) days’ written notice; confidentiality obligations survive for three (3) years.'],
  asg:['Freely assignable','8.3','This Agreement shall be binding upon and inure to the benefit of the parties and their respective successors and assigns.']},
 {f:'Hooli_License_Agreement.pdf',t:'Software License Agreement',d:'Nov 30, 2020',p:'Hooli Inc. and Acme Corp.',
  law:['California','22.5','This Agreement shall be governed by the laws of the State of California, and the parties consent to venue in Santa Clara County.'],
  coc:['Yes','Licensor may terminate on change of control','19.2','Licensor may terminate this Agreement immediately upon written notice if Licensee is acquired by, or merges with, a competitor of Licensor.'],
  term:['No','Not permitted during initial term','19.1','Neither party may terminate this Agreement for convenience during the Initial Term of thirty-six (36) months.'],
  asg:['Consent required','21.1','Licensee shall not assign this Agreement, by operation of law or otherwise, without Licensor’s prior written consent.']},
 {f:'Stark_Services_SOW.pdf',t:'Statement of Work',d:'Feb 12, 2024',p:'Stark Industries and Acme Corp.',
  law:['Delaware','6.1','This SOW is governed by the Master Agreement, which shall be governed by the laws of the State of Delaware.'],
  coc:['Unclear','Refers to Master Agreement','6.2','Change of control matters are governed by the Master Agreement between the parties, which was not provided in this vault.'],
  term:['Yes','30 days’ notice','5.4','Client may terminate this SOW for convenience on thirty (30) days’ written notice, subject to payment for services rendered.'],
  asg:['Consent required','6.3','Assignment of this SOW is subject to the assignment provisions of the Master Agreement.']},
 {f:'Wayne_Logistics_MSA.pdf',t:'Master Services Agreement',d:'Sep 1, 2022',p:'Wayne Logistics and Acme Corp.',
  law:['New York','25.1','This Agreement shall be governed by and construed under the laws of the State of New York, excluding its choice of law rules.'],
  coc:['Yes','Notice + termination right','23.6','Provider shall notify Customer within ten (10) days of any Change of Control, whereupon Customer may terminate this Agreement without penalty.'],
  term:['Yes','60 days’ notice','23.2','Customer may terminate this Agreement or any Order for convenience upon sixty (60) days’ written notice.'],
  asg:['Assignable to affiliates','24.1','Either party may assign this Agreement to an Affiliate without consent; any other assignment requires prior written consent.']},
 {f:'Soylent_Purchase_Terms.pdf',t:'Purchase Order Terms',d:'Jun 20, 2023',p:'Soylent Foods and Acme Corp.',
  law:['Texas','12.1','These Terms shall be governed by the laws of the State of Texas, including the Uniform Commercial Code as adopted therein.'],
  coc:['No','Not addressed','—','These Terms contain no change of control provision.'],
  term:['Yes','Any time, on written notice','10.1','Buyer may cancel any Purchase Order, in whole or in part, at any time prior to shipment upon written notice to Seller.'],
  asg:['Consent required','11.1','Seller may not assign any Purchase Order or these Terms without Buyer’s written consent.']}
];
var QS={
 law:{q:'Governing law?',ty:'Free text',kw:/govern|law|jurisdic/i,
   a:function(d){return {tag:d.law[0],txt:d.law[0]+' law',sec:d.law[1],pass:d.law[2]};}},
 coc:{q:'Change of control clause?',ty:'Yes / No',kw:/control|merger|acqui/i,
   a:function(d){return {tag:d.coc[0],txt:d.coc[1],sec:d.coc[2],pass:d.coc[3]};}},
 term:{q:'Termination for convenience?',ty:'Yes / No',kw:/terminat|conven|cancel/i,
   a:function(d){return {tag:d.term[0],txt:d.term[1],sec:d.term[2],pass:d.term[3]};}},
 asg:{q:'Assignment restrictions?',ty:'Free text',kw:/assign|transfer/i,
   a:function(d){return {tag:d.asg[0],txt:d.asg[0],sec:d.asg[1],pass:d.asg[2]};}}
};
var FILL=['The parties agree that the recitals above are incorporated into and form part of this Agreement.',
 'Each party represents that it has full power and authority to enter into and perform its obligations under this Agreement.',
 'All notices shall be in writing and delivered by hand, courier, or email with confirmation of receipt to the addresses set forth on the signature page.',
 'Fees are payable within thirty (30) days of the invoice date. Late amounts accrue interest at one percent (1%) per month.',
 'Neither party shall be liable for any indirect, incidental, or consequential damages arising out of this Agreement.'];
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function tagCls(t){return /^yes|^freely/i.test(t)?'t-y':/^no/i.test(t)?'t-n':/^unclear|^consent|affiliat/i.test(t)?'t-m':'';}

window.DEMOS['vault']={frame:'browser',title:'Harvey Vault — Review table',url:'app.harvey.ai/vault/project-falcon',
 caption:'Click “+ Add column”, pick a question, watch answers fill in — then click any cell to see the cited source.',
 sources:['https://www.harvey.ai/platform/vault','https://www.harvey.ai/blog/introducing-the-next-version-of-vault','https://help.harvey.ai/release-notes/category/review-tables','https://ailearninghub.law.stanford.edu/harvey-ai-at-sls/documents-and-tables/'],
 mount:function(root){
  var T=[],S;
  function later(fn,ms){var t=setTimeout(fn,ms);T.push(t);return t;}
  function clearT(){T.forEach(clearTimeout);T=[];}
  function init(){S={cols:[],ans:{},verified:{},sel:null,search:'',filter:null,wrap:false,loading:{}};}
  init();
  root.innerHTML='<style>'+CSS+'</style>'+
  '<aside class="sb"><div class="wm serif">Harvey</div><nav class="nav">'+
   '<a>'+I.a+'Assistant</a><a class="on">'+I.v+'Vault</a><a>'+I.w+'Workflows</a><a>'+I.h+'History</a><a>'+I.l+'Library</a></nav>'+
   '<div class="proj">Vault projects</div><div class="pj on">Project Falcon</div><div class="pj">Acme v. Globex — Discovery</div><div class="pj">Lease Portfolio Q3</div><div class="pj">Knowledge Base: Precedents</div>'+
   '<div class="me"><div class="av">AJ</div>Alex J. · Sample LLP</div></aside>'+
  '<section class="main"><div class="top"><div class="crumb">Vault / <b>Project Falcon</b></div>'+
   '<div class="ttl"><h1 class="serif">Project Falcon — Supplier Agreements</h1><span class="pill">8 files</span><span class="pill">Private · Shared with 3</span><button class="rp" data-a="reset">↺ Replay</button></div>'+
   '<div class="tabs"><span>Files</span><span class="on">Review table</span><span>Queries</span></div></div>'+
   '<div class="tb"><div class="srch">'+I.s+'<input placeholder="Search files and answers…"></div>'+
   '<button class="btn" data-a="filter">'+I.f+'<span class="fl">Filter</span></button>'+
   '<button class="btn" data-a="wrap">↵ Wrap cells</button><span class="cnt"></span><span class="sp"></span>'+
   '<button class="btn pri pulse" data-a="add">+ Add column</button></div>'+
   '<div class="body"><div class="tw"></div><div class="side"></div></div></section><div class="toast"></div>';
  var $=function(s){return root.querySelector(s);};
  var tw=$('.tw'),side=$('.side'),tb=$('.tb'),toastEl=$('.toast'),inp=$('.srch input');
  function toast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(function(){toastEl.classList.remove('show');},1800);}
  function closePops(){root.querySelectorAll('.pop').forEach(function(p){p.remove();});}

  function rows(){
   var q=S.search.toLowerCase();
   return DOCS.map(function(d,i){return i;}).filter(function(i){
    var d=DOCS[i];
    if(S.filter){var a=S.ans[S.filter.c+':'+i];if(!a||a.tag!==S.filter.v)return false;}
    if(!q)return true;
    if((d.f+' '+d.t).toLowerCase().indexOf(q)>=0)return true;
    return S.cols.some(function(c){var a=S.ans[c.id+':'+i];return a&&(a.txt+' '+a.tag).toLowerCase().indexOf(q)>=0;});
   });
  }
  function render(){
   root.classList.toggle('wrap',S.wrap);
   root.querySelector('[data-a=wrap]').classList.toggle('on',S.wrap);
   $('.fl').textContent=S.filter?(colById(S.filter.c).q.replace('?','')+': '+S.filter.v):'Filter';
   root.querySelector('[data-a=filter]').classList.toggle('on',!!S.filter);
   var R=rows();
   $('.cnt').textContent=R.length===DOCS.length?DOCS.length+' rows':R.length+' of '+DOCS.length+' rows';
   var h='<table><thead><tr><th class="n">#</th><th class="fn">File</th><th>Document type<span class="ty">Classification</span></th><th>Effective date<span class="ty">Date</span></th>';
   S.cols.forEach(function(c){h+='<th class="'+(c.fresh?'new':'')+'">'+esc(c.q)+'<span class="ty">'+esc(c.ty)+'</span></th>';c.fresh=false;});
   h+='</tr></thead><tbody>';
   R.forEach(function(i){var d=DOCS[i];
    h+='<tr><td class="n">'+(i+1)+'</td><td class="fn"><div class="fi"><span class="doc '+(/pdf$/.test(d.f)?'pdf':'')+'"></span>'+esc(d.f)+'</div></td><td class="st">'+esc(d.t)+'</td><td class="st">'+esc(d.d)+'</td>';
    S.cols.forEach(function(c){var k=c.id+':'+i,a=S.ans[k];
     if(!a){h+='<td><div class="ld"></div><div class="ld" style="width:50%"></div></td>';return;}
     h+='<td class="cl'+(S.sel===k?' sel':'')+(S.verified[k]?' ok':'')+(a.fresh?' fresh':'')+'" data-k="'+k+'"><div class="tx">'+
       (c.yn?'<span class="tag '+tagCls(a.tag)+'">'+esc(a.tag)+'</span>':'')+esc(c.yn?a.txt:a.txt)+'</div></td>';a.fresh=false;});
    h+='</tr>';});
   h+='</tbody></table>';
   if(!R.length)h+='<div class="empty">No rows match.</div>';
   if(!S.cols.length)h+='<div class="empty" style="padding:26px">Add a column to ask a question of every document. Harvey extracts the answer and cites the passage it came from.</div>';
   var sl=tw.scrollLeft;tw.innerHTML=h;tw.scrollLeft=sl;
  }
  function colById(id){return S.cols.filter(function(c){return c.id===id;})[0];}

  function addPop(){
   closePops();
   var used=S.cols.map(function(c){return c.key;});
   var p=document.createElement('div');p.className='pop';
   p.innerHTML='<h4>New column</h4><label>Question — what should Harvey extract from each document?</label><input class="qi" placeholder="e.g. What law governs this agreement?">'+
    '<div class="chips">'+Object.keys(QS).filter(function(k){return used.indexOf(k)<0;}).map(function(k){return '<button class="chip" data-k="'+k+'">'+QS[k].q+'</button>';}).join('')+'</div>'+
    '<label>Column type</label><select class="ts"><option>Free text</option><option>Yes / No</option><option>Verbatim</option><option>Date</option></select>'+
    '<div class="row"><button class="btn" data-x="c">Cancel</button><button class="btn pri" data-x="r">Run column</button></div>';
   tb.appendChild(p);
   var qi=p.querySelector('.qi'),ts=p.querySelector('.ts');
   qi.focus();
   p.addEventListener('click',function(e){
    var ch=e.target.closest('.chip');
    if(ch){qi.value=QS[ch.dataset.k].q;ts.value=QS[ch.dataset.k].ty;return;}
    if(e.target.dataset.x==='c')closePops();
    if(e.target.dataset.x==='r')run(qi.value,ts.value);
   });
   qi.addEventListener('input',function(){var k=match(qi.value);if(k)ts.value=QS[k].ty;});
   qi.addEventListener('keydown',function(e){if(e.key==='Enter')run(qi.value,ts.value);});
  }
  function match(q){for(var k in QS)if(QS[k].kw.test(q))return k;return null;}
  function run(q,ty){
   q=(q||'').trim();if(!q){toast('Type a question or pick a suggestion');return;}
   var k=match(q);
   closePops();
   root.querySelector('[data-a=add]').classList.remove('pulse');
   var id='c'+Date.now();
   var col={id:id,key:k,q:q.length>34?q.slice(0,33)+'…':q,ty:ty,yn:ty==='Yes / No'||k==='coc'||k==='term',fresh:true};
   S.cols.push(col);render();
   tw.scrollLeft=tw.scrollWidth;
   toast('Harvey is reviewing 8 documents…');
   DOCS.forEach(function(d,i){
    later(function(){
     var a;
     if(k)a=QS[k].a(d);
     else a={tag:'Summary',txt:d.t+' between '+d.p+'; see recitals.',sec:'1',pass:'This '+d.t+' (the “Agreement”) is entered into as of '+d.d+' by and between '+d.p+'.'};
     if(ty==='Verbatim')a={tag:a.tag,txt:'“'+a.pass+'”',sec:a.sec,pass:a.pass};
     a.fresh=true;a.q=q;S.ans[id+':'+i]=a;render();
     if(i===DOCS.length-1){toast('Column complete · click a cell to verify its source');}
    },600+i*380+Math.random()*200);
   });
  }
  function openCell(k){
   var a=S.ans[k];if(!a)return;
   S.sel=k;render();
   var i=+k.split(':')[1],d=DOCS[i],noCite=a.sec==='—';
   var paras=FILL.slice(0,3).map(function(t,j){return '<p><b>'+(j+1)+'.</b> '+t+'</p>';});
   var cited=noCite?'<p><b>17.</b> [Reserved.]</p>':'<p><b>'+a.sec+'</b> <mark>'+esc(a.pass)+'</mark></p>';
   paras.push('<p style="text-align:center;color:#999">• • •</p>',cited,'<p>'+FILL[3]+'</p><p>'+FILL[4]+'</p>');
   side.innerHTML='<div class="sh"><span class="doc '+(/pdf$/.test(d.f)?'pdf':'')+'"></span><b>'+esc(d.f)+'</b><button class="x" data-s="x">✕</button></div>'+
    '<div class="ans"><div class="q">'+esc(a.q)+'</div><div class="a">'+(a.tag&&a.txt.indexOf(a.tag)<0?'<span class="tag '+tagCls(a.tag)+'">'+esc(a.tag)+'</span>':'')+esc(a.txt)+(noCite?'':'<span class="cite">§'+a.sec+'</span>')+'</div>'+
    '<div class="why">'+(noCite?esc(a.pass):'Harvey found this in Section '+a.sec+'. The cited passage is highlighted in the document below.')+'</div>'+
    '<div class="vrow"><button class="btn'+(S.verified[k]?' on':'')+'" data-s="v">'+(S.verified[k]?'✓ Verified':'Mark as verified')+'</button><button class="btn" data-s="n">Next cell ↓</button></div></div>'+
    '<div class="pg"><div class="paper"><h5>'+esc(d.t.toUpperCase())+'</h5><div class="sub">'+esc(d.p)+' · Effective '+esc(d.d)+'</div>'+paras.join('')+'<div class="pgn">Page '+(3+i%5)+' of 14</div></div></div>';
   side.classList.add('open');
   var m=side.querySelector('mark');if(m)later(function(){m.scrollIntoView({block:'center'});},260);
  }
  side.addEventListener('click',function(e){
   var b=e.target.closest('[data-s]');if(!b)return;
   if(b.dataset.s==='x'){side.classList.remove('open');S.sel=null;render();}
   if(b.dataset.s==='v'){S.verified[S.sel]=!S.verified[S.sel];if(S.verified[S.sel])toast('Cell verified');openCell(S.sel);}
   if(b.dataset.s==='n'){var p=S.sel.split(':'),R=rows(),ix=R.indexOf(+p[1]);var nx=R[(ix+1)%R.length];openCell(p[0]+':'+nx);
     var td=tw.querySelector('[data-k="'+p[0]+':'+nx+'"]');if(td)td.scrollIntoView({block:'nearest'});}
  });
  function filterPop(btn){
   closePops();
   var p=document.createElement('div');p.className='pop fpop';p.style.left=(btn.offsetLeft)+'px';
   var cs=S.cols.filter(function(c){return c.yn;});
   if(!S.cols.length){p.innerHTML='<h4>Filter rows</h4><div style="color:#77736d;font-size:12px">Add a column first — then filter documents by their answers.</div>';}
   else{var c=cs[cs.length-1]||S.cols[S.cols.length-1],cnt={};
    DOCS.forEach(function(d,i){var a=S.ans[c.id+':'+i];if(a)cnt[a.tag]=(cnt[a.tag]||0)+1;});
    p.innerHTML='<h4>Filter by “'+esc(c.q)+'”</h4>'+Object.keys(cnt).map(function(v){return '<div class="fopt'+(S.filter&&S.filter.v===v?' on':'')+'" data-v="'+esc(v)+'"><span><span class="tag '+tagCls(v)+'">'+esc(v)+'</span></span><span style="color:#999">'+cnt[v]+'</span></div>';}).join('')+
     '<div class="fopt" data-v="" style="color:#77736d;margin-top:4px;border-top:1px solid #eee">Clear filter</div>';
    p.addEventListener('click',function(e){var o=e.target.closest('.fopt');if(!o)return;S.filter=o.dataset.v?{c:c.id,v:o.dataset.v}:null;closePops();render();});
   }
   tb.appendChild(p);
  }
  function onClick(e){
   var a=e.target.closest('[data-a]');
   if(!e.target.closest('.pop')&&!(a&&(a.dataset.a==='add'||a.dataset.a==='filter')))closePops();
   if(a){var x=a.dataset.a;
    if(x==='add')addPop();
    if(x==='filter')filterPop(a);
    if(x==='wrap'){S.wrap=!S.wrap;render();}
    if(x==='reset'){clearT();init();inp.value='';side.classList.remove('open');closePops();root.querySelector('[data-a=add]').classList.add('pulse');render();}
    return;}
   var c=e.target.closest('.cl');if(c)openCell(c.dataset.k);
  }
  root.addEventListener('click',onClick);
  inp.addEventListener('input',function(){S.search=inp.value;render();});
  render();
  return function(){clearT();clearTimeout(toast.t);root.removeEventListener('click',onClick);root.innerHTML='';};
 }};
})();
