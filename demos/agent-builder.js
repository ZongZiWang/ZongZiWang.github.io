/* Agent Builder (formerly Workflow Builder) — a stylistic recreation of Harvey's block-based
   workflow builder, based on public Harvey blog posts and screenshots. All data is fake. */
(function(){
const ID='agent-builder';
const P='.demo-agent-builder';
const CSS=`
${P}{--bd:#e7e5e1;--mu:#8b8883;--tx:#1b1a18;--bg:#f7f6f3;font:13px/1.45 system-ui,-apple-system,'Segoe UI',sans-serif;color:var(--tx);background:#fff}
${P} button{font:inherit;color:inherit;cursor:pointer;border:0;background:none}
${P} input,${P} textarea,${P} select{font:inherit;color:inherit}
${P} .app{display:flex;height:100%}
${P} .nav{width:176px;flex:none;background:var(--bg);border-right:1px solid var(--bd);display:flex;flex-direction:column;padding:16px 10px;gap:2px}
${P} .wm{font:500 22px/1 Georgia,'Times New Roman',serif;letter-spacing:-.01em;padding:0 8px 18px}
${P} .ni{display:flex;align-items:center;gap:9px;padding:6px 8px;border-radius:7px;color:#4a4844;width:100%;text-align:left}
${P} .ni:hover{background:#efede9}${P} .ni.on{background:#ebe9e4;color:#111;font-weight:600}
${P} .ni svg{width:15px;height:15px;stroke:currentColor;fill:none;stroke-width:1.6;flex:none}
${P} .org{display:flex;gap:8px;align-items:center;padding:8px;font-size:12px;color:#555}
${P} .org i{width:24px;height:24px;border-radius:6px;background:#1b1a18;color:#fff;font:600 11px/24px Georgia,serif;text-align:center;font-style:normal}
${P} .wrap{flex:1;min-width:0;display:flex;flex-direction:column}
${P} .top{height:54px;flex:none;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px;padding:0 16px}
${P} .crumb{color:var(--mu);font-size:12.5px;white-space:nowrap}
${P} .ttl{font:500 17px Georgia,'Times New Roman',serif;border:1px solid transparent;border-radius:6px;padding:3px 6px;outline:0;min-width:0;width:230px;background:none}
${P} .ttl:hover,${P} .ttl:focus{border-color:var(--bd);background:#fff}
${P} .st{font-size:11px;font-weight:600;border-radius:999px;padding:2px 9px;background:#f0eeea;color:#6b6862;white-space:nowrap}
${P} .st.pub{background:#e3f1e3;color:#256029}
${P} .btn{border:1px solid var(--bd)!important;border-radius:8px;padding:6px 12px;font-weight:550;background:#fff!important;white-space:nowrap;display:inline-flex;align-items:center;gap:6px}
${P} .btn:hover{background:#f6f5f2!important}
${P} .btn.dk{background:#1b1a18!important;color:#fff;border-color:#1b1a18!important}${P} .btn.dk:hover{background:#3a3835!important}
${P} .btn[disabled]{opacity:.45;cursor:default}
${P} .body{flex:1;display:flex;min-height:0}
${P} .pal{width:190px;flex:none;border-right:1px solid var(--bd);overflow:auto;padding:12px 10px;background:#fff}
${P} .pal h5{margin:10px 4px 5px;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--mu);font-weight:600}
${P} .pal h5:first-child{margin-top:0}
${P} .pi{display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:5px 6px;border-radius:7px;font-size:12.5px;border:1px solid transparent}
${P} .pi:hover{background:#f6f5f2;border-color:var(--bd)}
${P} .pi>span:last-child{min-width:0;white-space:nowrap}
${P} .pi small{display:block;color:var(--mu);font-size:10.5px;line-height:1.25;overflow:hidden;text-overflow:ellipsis}
${P} .ico{width:24px;height:24px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex:none}
${P} .ico svg{width:14px;height:14px;fill:none;stroke-width:1.7}
${P} .k-in{background:#dfecf6}${P} .k-in svg{stroke:#2b6a9c}
${P} .k-ai{background:#ebe5f5}${P} .k-ai svg{stroke:#6440a8}
${P} .k-kn{background:#f6ead9}${P} .k-kn svg{stroke:#9a5b12}
${P} .k-lg{background:#f3f0d6}${P} .k-lg svg{stroke:#7a6a0c}
${P} .k-out{background:#e3edd9}${P} .k-out svg{stroke:#4b7a26}
${P} .cv{flex:1;min-width:0;overflow-y:auto;overflow-x:hidden;position:relative;background-color:#faf9f7;background-image:radial-gradient(#d9d6d0 1px,transparent 1px);background-size:16px 16px}
${P} .cv.drop{background-color:#f3f0fa}
${P} .chain{display:flex;flex-direction:column;align-items:center;padding:26px 0 150px}
${P} .blk{width:330px;max-width:calc(100% - 70px);background:#fff;border:1px solid #e2dfda;border-radius:10px;box-shadow:0 1px 2px rgba(0,0,0,.04);cursor:pointer;position:relative;transition:border-color .15s,box-shadow .15s}
${P} .blk:hover{border-color:#cfcbc4}
${P} .blk.sel{border-color:#3d9bd1;box-shadow:0 0 0 3px rgba(61,155,209,.14)}
${P} .blk.run{border-color:#7c5cc4;box-shadow:0 0 0 3px rgba(124,92,196,.16)}
${P} .blk.done{border-color:#9cc58a}
${P} .blk.new{animation:ab-in .35s ease}
@keyframes ab-in{from{opacity:0;transform:translateY(-8px) scale(.97)}}
${P} .bh{display:flex;align-items:center;gap:10px;padding:10px 12px}
${P} .bh b{flex:1;font-weight:600;font-size:13.5px}
${P} .bh .kd{font-size:10.5px;color:var(--mu);font-weight:500;margin-left:6px}
${P} .more{width:24px;height:24px;border-radius:6px;font-weight:700;letter-spacing:1px;color:#666}
${P} .more:hover{background:#f2f1ee}
${P} .bf{border-top:1px solid #efede9;padding:7px 12px;font-size:12px;color:#77746e;display:flex;gap:6px;align-items:center;flex-wrap:wrap}
${P} .tag{border:1px solid #e2dfda;background:#f8f7f5;border-radius:5px;padding:0 6px;color:#555;font-size:11.5px}
${P} .tag.v{border-color:#c4b2ea;background:#f4effc;color:#5b3ea0}
${P} .stt{position:absolute;right:-30px;top:12px;width:20px;height:20px;border-radius:50%;font:700 11px/20px system-ui;text-align:center;color:#fff}
${P} .stt.r{border:2px solid #e3dbf5;border-top-color:#7c5cc4;animation:ab-spin .8s linear infinite}
${P} .stt.d{background:#4b9a3a}
@keyframes ab-spin{to{transform:rotate(360deg)}}
${P} .con{width:2px;height:26px;background:#cfcbc4;position:relative}
${P} .con::before{content:'';position:absolute;top:-3px;left:-2px;width:6px;height:6px;border-radius:50%;background:#fff;border:1px solid #bbb6ae}
${P} .con::after{content:'';position:absolute;bottom:0;left:-3px;border:4px solid transparent;border-top:5px solid #bbb6ae;border-bottom:0}
${P} .addst{border:1px solid #dcd9d3;background:#fff;border-radius:7px;padding:5px 12px;font-size:12px;color:#555;margin-top:2px}
${P} .addst:hover{background:#f6f5f2}
${P} .mn{position:absolute;right:8px;top:36px;background:#fff;border:1px solid var(--bd);border-radius:8px;box-shadow:0 10px 30px -10px rgba(0,0,0,.3);padding:4px;z-index:6;min-width:130px}
${P} .mn button{display:block;width:100%;text-align:left;padding:5px 9px;border-radius:5px;font-size:12.5px}
${P} .mn button:hover{background:#f3f2ef}${P} .mn button.del{color:#b42318}
${P} .addmenu{position:absolute;background:#fff;border:1px solid var(--bd);border-radius:9px;box-shadow:0 10px 30px -10px rgba(0,0,0,.3);padding:6px;z-index:6;width:220px}
${P} .cfg{width:320px;flex:none;border-left:1px solid var(--bd);overflow:auto;padding:16px 18px;background:#fff}
${P} .ch{display:flex;align-items:center;gap:10px;padding-bottom:14px;border-bottom:1px solid var(--bd);margin-bottom:12px}
${P} .ch b{font-size:16px;font-weight:600}
${P} .fl{margin:12px 0 5px;font-size:12.5px;color:#6b6862;display:flex;align-items:center;gap:5px}
${P} .fl i{width:13px;height:13px;border:1px solid #bbb;border-radius:50%;font:600 9px/11px system-ui;text-align:center;color:#999;font-style:normal}
${P} .inp{width:100%;background:#f5f4f1;border:1px solid transparent;border-radius:8px;padding:8px 10px;outline:0;font-size:13px}
${P} .inp:focus{border-color:#cfcbc4;background:#fff}
${P} textarea.inp{resize:none;height:118px;line-height:1.5}
${P} .ctx{display:flex;gap:5px;flex-wrap:wrap;background:#f5f4f1;border-radius:8px;padding:6px;min-height:36px;align-items:center}
${P} .ctx .tag{background:#fff;padding:2px 6px;font-size:12px;display:inline-flex;gap:5px;align-items:center}
${P} .ctx .tag button{color:#999;font-size:11px}
${P} .ctx .plus{font-size:12px;color:#6b6862;padding:2px 6px;border-radius:5px}${P} .ctx .plus:hover{background:#ebe9e4}
${P} .seg{display:flex;background:#f0eeea;border-radius:8px;padding:3px;gap:2px}
${P} .seg button{flex:1;padding:5px;border-radius:6px;font-size:12px;color:#666}
${P} .seg button.on{background:#fff;color:#111;font-weight:600;box-shadow:0 1px 2px rgba(0,0,0,.08)}
${P} .opt{display:flex;gap:9px;align-items:flex-start;padding:8px 10px;border:1px solid var(--bd);border-radius:8px;margin-bottom:6px;width:100%;text-align:left;font-size:12.5px}
${P} .opt.on{border-color:#3d9bd1;background:#f2f8fc}
${P} .opt small{display:block;color:var(--mu);font-size:11px}
${P} .rad{width:14px;height:14px;border-radius:50%;border:1.5px solid #bbb;flex:none;margin-top:2px}
${P} .opt.on .rad{border:4px solid #3d9bd1}
${P} .hint{font-size:11.5px;color:var(--mu);margin-top:6px}
${P} .guide{margin-top:auto;background:#fff;border:1px solid var(--bd);border-radius:10px;padding:10px;font-size:11.5px}
${P} .guide b{font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--mu)}
${P} .guide ol{list-style:none;margin:6px 0 8px;padding:0;display:flex;flex-direction:column;gap:5px}
${P} .guide li{display:flex;gap:7px;color:#666}
${P} .guide li i{width:15px;height:15px;border-radius:50%;border:1.5px solid #cfcbc4;flex:none;font:700 9px/12px system-ui;text-align:center;font-style:normal;color:#fff}
${P} .guide li.ok{color:#aaa;text-decoration:line-through}${P} .guide li.ok i{background:#4b9a3a;border-color:#4b9a3a}
${P} .guide li.nx{color:#111;font-weight:600}${P} .guide li.nx i{border-color:#3d9bd1}
${P} .rp{width:100%;border:1px solid var(--bd)!important;border-radius:7px;padding:4px;font-size:11.5px;background:#faf9f7!important}
${P} .pulse{animation:ab-glow 1.6s infinite}
@keyframes ab-glow{0%,100%{box-shadow:0 0 0 0 rgba(61,155,209,.5)}50%{box-shadow:0 0 0 6px rgba(61,155,209,0)}}
${P} .runp{width:565px;flex:none;border-left:1px solid var(--bd);display:flex;flex-direction:column;background:#fff;min-height:0}
${P} .rh{display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid var(--bd)}
${P} .rh b{font:500 16px Georgia,serif;flex:1}
${P} .rb{flex:1;overflow:auto;padding:14px 16px}
${P} .card{border:1px solid var(--bd);border-radius:10px;padding:12px;margin-bottom:10px}
${P} .card h6{margin:0 0 8px;font-size:12.5px;font-weight:600;display:flex;gap:8px;align-items:center}
${P} .dz{border:1.5px dashed #cfcbc4;border-radius:9px;padding:14px;text-align:center;color:var(--mu);font-size:12px}
${P} .file{display:flex;gap:9px;align-items:center;border:1px solid var(--bd);border-radius:8px;padding:7px 10px;font-size:12.5px;background:#faf9f7}
${P} .file .pdf{width:26px;height:30px;border-radius:4px;background:#fbe5e1;color:#b42318;font:700 8px/30px system-ui;text-align:center}
${P} .lg{display:flex;flex-direction:column;gap:6px;font-size:12.5px}
${P} .lg div{display:flex;gap:8px;align-items:center}
${P} .lg .s{width:14px;height:14px;border-radius:50%;flex:none}
${P} .lg .s.r{border:2px solid #e3dbf5;border-top-color:#7c5cc4;animation:ab-spin .8s linear infinite}
${P} .lg .s.d{background:#4b9a3a;color:#fff;font:700 9px/14px system-ui;text-align:center}
${P} .lg .s.w{border:1.5px solid #d6d3cd}
${P} .lg span.m{color:var(--mu);font-size:11.5px;margin-left:auto;white-space:nowrap}
${P} table{width:100%;border-collapse:collapse;font-size:11.5px;table-layout:fixed}
${P} th{text-align:left;font-weight:600;color:#6b6862;padding:6px;border-bottom:1px solid var(--bd);background:#faf9f7}
${P} td{padding:7px 6px;border-bottom:1px solid #f0eeea;vertical-align:top}
${P} tr.in{animation:ab-in .3s ease}
${P} .risk{font-size:10.5px;font-weight:700;border-radius:4px;padding:1px 6px;white-space:nowrap}
${P} .risk.High{background:#fde4e1;color:#a4271b}${P} .risk.Medium{background:#fcefd6;color:#8a5a0a}${P} .risk.Low{background:#e3f1e3;color:#256029}
${P} .cite{font-size:10px;color:#3d7cb1;background:#eaf3fa;border-radius:3px;padding:0 4px;margin-left:3px;white-space:nowrap}
${P} .memo p{margin:0 0 8px;font:13px/1.6 Georgia,serif}
${P} .memo h4{font:600 13.5px Georgia,serif;margin:0 0 6px}
${P} .ov{position:absolute;inset:0;background:rgba(27,26,24,.35);display:flex;align-items:center;justify-content:center;z-index:30}
${P} .modal{width:430px;background:#fff;border-radius:14px;padding:20px 22px;box-shadow:0 30px 80px -20px rgba(0,0,0,.5)}
${P} .modal h3{margin:0 0 4px;font:500 20px Georgia,serif}
${P} .toast{position:absolute;left:50%;bottom:18px;transform:translate(-50%,20px);background:#1b1a18;color:#fff;border-radius:9px;padding:8px 14px;font-size:12.5px;opacity:0;transition:.25s;pointer-events:none;z-index:40;white-space:nowrap}
${P} .toast.show{opacity:1;transform:translate(-50%,0)}
`;
const sv=p=>`<svg viewBox="0 0 24 24">${p}</svg>`;
const IC={
 text:sv('<path d="M4 7V5h16v2M12 5v14M9 19h6"/>'),
 upload:sv('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M12 17v-6M9 14l3-3 3 3"/>'),
 select:sv('<circle cx="12" cy="12" r="8"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),
 prompt:sv('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8.5 10l7 4M15.5 10l-7 4"/>'),
 table:sv('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M9 10v9M15 10v9"/>'),
 draft:sv('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>'),
 know:sv('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M9 8h6"/>'),
 branch:sv('<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 7v10M18 10c0 4-6 3-12 7"/>'),
 resp:sv('<path d="M4 5h16v11H9l-5 4z"/><path d="M9 10h.01M12 10h.01M15 10h.01"/>'),
 doc:sv('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>'),
 asst:sv('<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/>'),
 vault:sv('<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18"/>'),
 flow:sv('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4a3 3 0 0 1 3 3V14"/>'),
 hist:sv('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>'),
 lib:sv('<path d="M5 4v16M10 4v16M15 5l4 15"/>')
};
const T={
 text:{n:'Freeform text',k:'in',g:'User input',d:'Ask the user a question',out:'Deal context',q:'Any context on the deal or counterparty?'},
 upload:{n:'File upload',k:'in',g:'User input',d:'Collect documents',out:'Vendor NDA',q:'Upload the vendor’s NDA'},
 select:{n:'Select option',k:'in',g:'User input',d:'Multiple-choice question',out:'Leverage',q:'How much leverage do we have?',opts:['High','Low']},
 know:{n:'Knowledge source',k:'kn',g:'AI action',d:'Firm playbooks & precedent',out:'Playbook',src:0},
 prompt:{n:'Prompt',k:'ai',g:'AI action',d:'Instruct Harvey',out:'Issues'},
 table:{n:'Review table',k:'ai',g:'AI action',d:'Extract terms into columns',out:'Key terms',cols:['Parties','Term','Governing law','Residuals']},
 draft:{n:'Draft document',k:'ai',g:'AI action',d:'Write from a template',out:'Redline'},
 branch:{n:'Branch',k:'lg',g:'Logic',d:'Route on a condition',out:''},
 resp:{n:'Response',k:'out',g:'Output',d:'Show results to the user',out:''},
 doc:{n:'Export to Word',k:'out',g:'Output',d:'Download a .docx',out:''}
};
const ICON={text:'text',upload:'upload',select:'select',know:'know',prompt:'prompt',table:'table',draft:'draft',branch:'branch',resp:'resp',doc:'doc'};
const SOURCES=[['Firm NDA Playbook','Vault · 14 negotiated positions · Commercial group'],['Commercial precedent bank','Vault · 212 executed agreements'],['Outside counsel guidelines','Vault · 3 documents']];
const ROWS=[
 ['Definition of Confidential Information','Covers all information “whether or not marked”','Limit to marked info or info reasonably understood as confidential','Medium','Add “that is marked or reasonably should be understood to be confidential”','§1.1'],
 ['Term of confidentiality','Obligations survive in perpetuity','3 years post-termination; trade secrets for as long as protected','High','Replace with a 3-year survival period plus trade-secret carve-out','§6'],
 ['Residuals','Vendor may use information retained in unaided memory','No residuals clause accepted','High','Delete §7.2 in full','§7.2'],
 ['Non-solicitation','24-month mutual non-solicit of all employees','Max 12 months, limited to employees directly engaged','Medium','Reduce to 12 months; limit to engaged personnel','§9'],
 ['Governing law','Delaware law, Delaware courts','New York or Delaware acceptable','Low','No change needed','§12']
];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

window.DEMOS=window.DEMOS||{};
window.DEMOS[ID]={frame:'browser',title:'Harvey Agent Builder (fka Workflow Builder)',url:'app.harvey.ai/workflows/builder',
caption:'Add the firm playbook from the left, run the workflow on a sample NDA, then publish it to your firm.',
sources:['https://www.harvey.ai/blog/introducing-workflow-builder','https://www.harvey.ai/blog/introducing-agent-builder','https://www.harvey.ai/blog/getting-started-with-workflow-builder-5-workflows-we-recommend','https://www.harvey.ai/blog/how-harveys-legal-team-uses-harvey-to-work-smarter','https://www.harvey.ai/blog/paul-weiss-harvey-workflow-builder'],
mount(root){
 const timers=new Set();const later=(f,ms)=>{const t=setTimeout(()=>{timers.delete(t);f()},ms);timers.add(t)};
 let S,uid;
 root.innerHTML=`<style>${CSS}</style><div class="app"><aside class="nav"></aside><div class="wrap"><div class="top"></div><div class="body"></div></div></div><div class="toast"></div>`;
 const navEl=root.querySelector('.nav'),top=root.querySelector('.top'),body=root.querySelector('.body'),toastEl=root.querySelector('.toast');
 let tt;const toast=m=>{toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toastEl.classList.remove('show'),2600)};
 function mk(type,o){const t=T[type];return Object.assign({id:'b'+(uid++),type,out:t.out,q:t.q,src:t.src,opts:t.opts&&t.opts.slice(),cols:t.cols&&t.cols.slice()},o||{})}
 function reset(){timers.forEach(clearTimeout);timers.clear();uid=1;
  const up=mk('upload'),pr=mk('prompt',{text:'Review the Vendor NDA clause by clause. For each clause that deviates from our standard position, explain the deviation, rate the risk (High / Medium / Low) and propose a specific edit. Cite the section.',ctx:[],model:'Auto'}),rs=mk('resp',{fmt:'Table'});
  pr.ctx=[up.id];rs.show=pr.id;
  S={title:'Vendor NDA Review',blocks:[up,pr,rs],sel:pr.id,menu:null,mode:'build',pub:0,g:{kn:0,cfg:0,run:0,pub:0},run:null,modal:null,justAdded:null};
  render();
 }
 const byId=id=>S.blocks.find(b=>b.id===id);
 const label=id=>{const b=byId(id);return b?b.out:'—'};
 function render(){renderNav();renderTop();renderBody()}
 function renderNav(){navEl.innerHTML=`<div class="wm">Harvey</div>${[['asst','Assistant'],['vault','Vault'],['flow','Workflows'],['hist','History'],['lib','Library']].map(n=>`<button class="ni ${n[0]==='flow'?'on':''}" data-nav="${n[1]}">${IC[n[0]]}${n[1]}</button>`).join('')}${guideHTML()}<div class="org"><i>A</i>Acme &amp; Partners LLP</div>`}
 function renderTop(){renderNav();
  const ready=S.g.run;
  top.innerHTML=`<span class="crumb">Workflows /</span><input class="ttl" value="${esc(S.title)}" aria-label="Workflow name"><span class="st ${S.pub?'pub':''}">${S.pub?'Published · v'+S.pub:'Draft'}</span>
  <span style="flex:1"></span><span class="crumb">${S.blocks.length} steps · autosaved</span>
  <button class="btn ${S.g.kn&&!S.g.run&&S.mode==='build'?'pulse':''}" data-run>${S.mode==='run'?'■ Back to builder':'▶ Run'}</button>
  <button class="btn dk ${ready&&!S.g.pub?'pulse':''}" data-pub>${S.pub?'Publish update':'Publish'}</button>`;
 }
 function renderBody(){
  const cvScroll=body.querySelector('.cv')?body.querySelector('.cv').scrollTop:0;
  body.innerHTML=(S.mode==='build'?palHTML():'')+`<div class="cv">${chainHTML()}</div>`+(S.mode==='build'?`<div class="cfg">${cfgHTML()}</div>`:`<div class="runp">${runHTML()}</div>`)+(S.modal?modalHTML():'');
  const cv=body.querySelector('.cv');cv.scrollTop=cvScroll;
  if(S.mode==='run'){const rb=body.querySelector('.rb');if(rb&&S.run&&S.run.stick)rb.scrollTop=rb.scrollHeight}
  S.justAdded=null;
 }
 function palHTML(){const groups={};Object.keys(T).forEach(k=>{(groups[T[k].g]=groups[T[k].g]||[]).push(k)});
  return `<div class="pal">${Object.keys(groups).map(g=>`<h5>${g}</h5>`+groups[g].map(k=>`<button class="pi ${k==='know'&&!S.g.kn?'pulse':''}" draggable="true" data-add="${k}"><span class="ico k-${T[k].k}">${IC[ICON[k]]}</span><span>${T[k].n}<small>${T[k].d}</small></span></button>`).join('')).join('')}<div class="hint" style="padding:10px 4px">Click or drag a block onto the canvas.</div></div>`}
 function footer(b){
  if(b.type==='resp')return `Display <span class="tag v">${esc(label(b.show))}</span><span class="tag">${b.fmt}</span>`;
  if(b.type==='doc')return `File <span class="tag">${esc(S.title.replace(/\s+/g,'_'))}.docx</span>`;
  if(b.type==='branch')return `If <span class="tag v">${esc(label(b.on))}</span> has High risk → <span class="tag">Escalate to partner</span>`;
  if(b.type==='know')return `Source <span class="tag">${SOURCES[b.src][0]}</span> Output <span class="tag v">${esc(b.out)}</span>`;
  if(b.type==='prompt')return `Context ${(b.ctx||[]).map(c=>`<span class="tag v">${esc(label(c))}</span>`).join('')||'<span class="tag">none</span>'} Output <span class="tag">${esc(b.out)}</span>`;
  return `Output <span class="tag">${esc(b.out)}</span>`;
 }
 function chainHTML(){const rs=S.run;
  return `<div class="chain">`+S.blocks.map((b,i)=>{const t=T[b.type];const st=rs?rs.st[b.id]:null;
   return (i?'<div class="con"></div>':'')+`<div class="blk ${S.sel===b.id&&S.mode==='build'?'sel':''} ${st==='r'?'run':st==='d'?'done':''} ${S.justAdded===b.id?'new':''}" data-blk="${b.id}">
   <div class="bh"><span class="ico k-${t.k}">${IC[ICON[b.type]]}</span><b>${t.n}<span class="kd">${t.g}</span></b>${S.mode==='build'?`<button class="more" data-more="${b.id}">···</button>`:''}</div>
   <div class="bf">${footer(b)}</div>${st?`<span class="stt ${st}">${st==='d'?'✓':''}</span>`:''}
   ${S.menu===b.id?`<div class="mn"><button data-mv="${b.id}" data-dir="-1">↑ Move up</button><button data-mv="${b.id}" data-dir="1">↓ Move down</button><button data-dup="${b.id}">⧉ Duplicate</button><button class="del" data-del="${b.id}">✕ Delete</button></div>`:''}</div>`}).join('')
   +(S.mode==='build'?`<div class="con"></div><button class="addst" data-addmenu>+ Add step</button>`:'')+`</div>`;
 }
 function guideHTML(){const g=S.g;const st=[['kn','Add “Knowledge source” (firm playbook)'],['cfg','Open the Prompt — see Playbook in its context'],['run','Run it on a sample NDA'],['pub','Publish to your firm']];const nx=st.find(s=>!g[s[0]]);
  return `<div class="guide"><b>Try it</b><ol>${st.map(s=>`<li class="${g[s[0]]?'ok':nx===s?'nx':''}"><i>${g[s[0]]?'✓':''}</i>${s[1]}</li>`).join('')}</ol><button class="rp" data-reset>↺ Replay demo</button></div>`}
 function cfgHTML(){const b=byId(S.sel);if(!b)return `<div class="hint" style="margin-top:40px;text-align:center">Select a step to configure it.</div>`;
  const t=T[b.type];let h=`<div class="ch"><span class="ico k-${t.k}" style="width:30px;height:30px">${IC[ICON[b.type]]}</span><b>${t.n}</b></div>`;
  const outF=`<div class="fl">Label of output <i>i</i></div><input class="inp" data-f="out" value="${esc(b.out)}">`;
  if(b.type==='prompt'){
   const avail=S.blocks.slice(0,S.blocks.indexOf(b)).filter(x=>x.out&&!(b.ctx||[]).includes(x.id));
   h+=`<div class="fl">Prompt <i>i</i></div><textarea class="inp" data-f="text">${esc(b.text||'')}</textarea>
   <div class="fl">Context <i>i</i></div><div class="ctx">${(b.ctx||[]).map(c=>`<span class="tag ${S.justCtx===c?'pulse':''}">${esc(label(c))}<button data-rmctx="${c}">✕</button></span>`).join('')}${avail.length?`<button class="plus" data-addctx>+ Add</button>`:''}</div>
   ${S.ctxMenu?`<div class="ctx" style="margin-top:4px;background:#fff;border:1px solid var(--bd)">${avail.map(x=>`<button class="tag" data-pickctx="${x.id}">${esc(x.out)}</button>`).join('')}</div>`:''}
   <div class="fl">Model <i>i</i></div><div class="seg">${['Auto','Fast','Deep reasoning'].map(m=>`<button class="${b.model===m?'on':''}" data-model="${m}">${m}</button>`).join('')}</div>${outF}
   <div class="hint">Earlier outputs (<span class="tag v">Vendor NDA</span>) can be referenced in the prompt and context.</div>`;
  }else if(b.type==='know'){
   h+=`<div class="fl">Source <i>i</i></div>${SOURCES.map((s,i)=>`<button class="opt ${b.src===i?'on':''}" data-src="${i}"><span class="rad"></span><span>${s[0]}<small>${s[1]}</small></span></button>`).join('')}${outF}<div class="hint">Knowledge is retrieved at run time and cited in the output.</div>`;
  }else if(b.type==='resp'){
   const outs=S.blocks.filter(x=>x.out&&x!==b);
   h+=`<div class="fl">Display</div><div class="seg">${outs.map(x=>`<button class="${b.show===x.id?'on':''}" data-show="${x.id}">${esc(x.out)}</button>`).join('')}</div>
   <div class="fl">Format</div><div class="seg">${['Table','Memo','Bullets'].map(f=>`<button class="${b.fmt===f?'on':''}" data-fmt="${f}">${f}</button>`).join('')}</div><div class="hint">Changes how results are shown to the person running this workflow.</div>`;
  }else if(b.type==='select'){
   h+=`<div class="fl">Question</div><input class="inp" data-f="q" value="${esc(b.q)}"><div class="fl">Options</div><div class="ctx">${b.opts.map(o=>`<span class="tag">${esc(o)}</span>`).join('')}</div>${outF}`;
  }else if(b.type==='branch'){
   const outs=S.blocks.filter(x=>x.out&&x!==b);
   h+=`<div class="fl">Condition</div><div class="seg">${outs.map(x=>`<button class="${b.on===x.id?'on':''}" data-on="${x.id}">${esc(x.out)}</button>`).join('')}</div><div class="hint">contains any <b>High</b> risk → route to <b>Escalate to partner</b>; otherwise continue.</div>`;
  }else if(b.type==='table'){
   h+=`<div class="fl">Columns</div><div class="ctx">${b.cols.map(c=>`<span class="tag">${esc(c)}</span>`).join('')}</div>${outF}`;
  }else if(b.type==='doc'){
   h+=`<div class="fl">Template</div><input class="inp" value="Acme house style — redline.dotx" readonly><div class="hint">Exports the response as a Word document.</div>`;
  }else{
   h+=`<div class="fl">Question shown to the user</div><input class="inp" data-f="q" value="${esc(b.q||'')}">${outF}${b.type==='upload'?'<div class="hint">Accepts PDF, DOCX · up to 10 files</div>':''}`;
  }
  return h;
 }
 /* ---- run ---- */
 function runHTML(){const r=S.run;const inputs=S.blocks.filter(b=>T[b.type].k==='in');
  let h=`<div class="rh"><b>Run “${esc(S.title)}”</b><span class="st">Preview</span><button class="btn" data-close style="padding:3px 9px">✕</button></div><div class="rb">`;
  inputs.forEach(b=>{h+=`<div class="card"><h6><span class="ico k-in" style="width:20px;height:20px">${IC[ICON[b.type]]}</span>${esc(b.q||T[b.type].n)}</h6>`;
   if(b.type==='upload')h+=r.file?`<div class="file"><span class="pdf">PDF</span><div style="flex:1"><b>sample_vendor_nda.pdf</b><div class="hint" style="margin:0">Globex Corp ⇄ Acme Inc. · 9 pages</div></div>${r.phase==='form'?'<button class="btn" data-unfile style="padding:2px 8px">✕</button>':''}</div>`:`<div class="dz">Drop files here or <button class="btn ${!r.file?'pulse':''}" data-file style="margin-left:6px;padding:3px 10px">Use sample_vendor_nda.pdf</button></div>`;
   else if(b.type==='select')h+=`<div class="seg">${b.opts.map(o=>`<button class="${r.ans[b.id]===o?'on':''}" data-ans="${b.id}" data-v="${o}">${o}</button>`).join('')}</div>`;
   else h+=`<input class="inp" data-ansin="${b.id}" value="${esc(r.ans[b.id]||'')}" placeholder="Optional — e.g. vendor is a new SaaS provider">`;
   h+='</div>'});
  if(r.phase==='form'){const ok=!inputs.some(b=>b.type==='upload')||r.file;h+=`<button class="btn dk ${ok?'pulse':''}" data-go ${ok?'':'disabled'} style="width:100%;justify-content:center;padding:9px">▶ Run workflow</button>`}
  else{
   h+=`<div class="card"><h6>Progress <span class="hint" style="margin:0;font-weight:400">${r.phase==='done'?'Completed in '+r.secs+'s':'Running…'}</span></h6><div class="lg">${S.blocks.map(b=>{const s=r.st[b.id];return `<div><span class="s ${s==='d'?'d':s==='r'?'r':'w'}">${s==='d'?'✓':''}</span>${esc(stepText(b))}<span class="m">${s==='d'?(r.meta[b.id]||''):''}</span></div>`}).join('')}</div></div>`;
   if(r.rows)h+=outHTML();
  }
  return h+'</div>';
 }
 function stepText(b){const t=T[b.type];switch(b.type){
  case'upload':return 'Read '+(S.run.file?'sample_vendor_nda.pdf':'uploaded files');
  case'know':return 'Retrieve '+SOURCES[b.src][0];
  case'prompt':return 'Prompt: '+(b.text||'').slice(0,46)+'…';
  case'resp':return 'Format response ('+b.fmt+')';
  case'branch':return 'Branch on '+label(b.on);
  case'select':return 'Answer: '+(S.run.ans[b.id]||b.opts[0]);
  default:return t.n+(b.out?' → '+b.out:'');}}
 function hasKn(){return S.blocks.some(b=>b.type==='know')}
 function rowsFor(){let rows=ROWS.slice();const sel=S.blocks.find(b=>b.type==='select');
  if(sel&&(S.run.ans[sel.id]||'High')==='Low')rows=rows.filter(r=>r[3]==='High'||r[3]==='Low');return rows}
 function outHTML(){const r=S.run;const resp=S.blocks.find(b=>b.type==='resp');const fmt=resp?resp.fmt:'Table';const rows=rowsFor().slice(0,r.rows);const kn=hasKn();
  const cite=x=>`<span class="cite">${x[5]}</span>`+(kn?`<span class="cite" style="background:#f6ead9;color:#9a5b12">Playbook</span>`:'');
  let h=`<div class="card"><h6><span class="ico k-out" style="width:20px;height:20px">${IC.resp}</span>${esc(resp?label(resp.show):'Output')}${r.phase==='done'?`<span style="margin-left:auto;display:flex;gap:6px"><button class="btn" data-copy style="padding:2px 8px;font-size:11.5px">Copy</button><button class="btn" data-export style="padding:2px 8px;font-size:11.5px">Export .docx</button></span>`:''}</h6>`;
  if(!kn)h+=`<div class="hint" style="margin:0 0 8px;color:#9a5b12">⚠ No knowledge source — compared against general market practice, not your firm’s playbook.</div>`;
  if(fmt==='Table')h+=`<table><tr><th style="width:23%">Clause</th><th style="width:38%">${kn?'Deviation from playbook':'Observation'}</th><th style="width:13%">Risk</th><th>Suggested edit</th></tr>${rows.map((x,i)=>`<tr class="${i===r.rows-1&&r.phase!=='done'?'in':''}"><td><b>${x[0]}</b><div style="margin:2px 0 0 -3px">${cite(x)}</div></td><td>${kn?esc(x[1])+' — <i style="color:#777">playbook: '+esc(x[2])+'</i>':esc(x[1])}</td><td><span class="risk ${x[3]}">${x[3]}</span></td><td>${esc(x[4])}</td></tr>`).join('')}</table>`;
  else if(fmt==='Memo')h+=`<div class="memo"><h4>Memorandum — Vendor NDA (Globex Corp)</h4>${rows.map(x=>`<p><b>${x[0]}${cite(x)}.</b> ${esc(x[1])}. ${kn?'Our playbook position: '+esc(x[2])+'. ':''}Risk is <b>${x[3].toLowerCase()}</b>; we recommend: ${esc(x[4]).replace(/^./,c=>c.toLowerCase())}.</p>`).join('')}</div>`;
  else h+=`<ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:5px;font-size:12.5px">${rows.map(x=>`<li><span class="risk ${x[3]}">${x[3]}</span> <b>${x[0]}</b>${cite(x)} — ${esc(x[4])}</li>`).join('')}</ul>`;
  if(r.phase==='done'){const hi=rows.filter(x=>x[3]==='High').length;
   if(S.blocks.some(b=>b.type==='branch'))h+=`<div class="hint" style="margin-top:8px;color:#7a6a0c">⑂ Branch: ${hi} High-risk issue${hi===1?'':'s'} → routed to “Escalate to partner”.</div>`;
   if(S.blocks.some(b=>b.type==='draft'||b.type==='doc'))h+=`<div class="file" style="margin-top:8px"><span class="pdf" style="background:#e1ecfb;color:#1d4ed8">DOC</span><b style="flex:1">${esc(S.title.replace(/\s+/g,'_'))}_redline.docx</b><span class="hint" style="margin:0">${rows.filter(x=>x[3]!=='Low').length} tracked changes</span></div>`;
  }
  return h+'</div>';
 }
 function startRun(){S.mode='run';S.menu=null;S.run={phase:'form',file:false,ans:{},st:{},meta:{},rows:0,stick:false};render()}
 function go(){const r=S.run;r.phase='running';r.t0=Date.now();r.stick=true;const bl=S.blocks.slice();
  const meta={upload:'9 pages · 31 clauses',know:'5 positions matched',prompt:'5 issues',table:'4 columns',draft:'3 edits',branch:'',resp:'',select:'',text:'',doc:'1 file'};
  let i=0;const next=()=>{if(i>=bl.length){r.phase='done';r.secs=((Date.now()-r.t0)/1000).toFixed(1);r.stick=true;S.g.run=1;renderTop();renderBody();return}
   const b=bl[i];r.st[b.id]='r';renderBody();
   const dur=b.type==='prompt'?1700:b.type==='know'?1100:700;
   if(b.type==='resp'){let n=0;const total=rowsFor().length;const tick=()=>{n++;r.rows=n;renderBody();if(n<total)later(tick,380);else{r.st[b.id]='d';i++;later(next,250)}};later(tick,300);return}
   later(()=>{r.st[b.id]='d';r.meta[b.id]=meta[b.type]||'';i++;next()},dur)};
  renderBody();later(next,300);
 }
 /* ---- publish ---- */
 function modalHTML(){const m=S.modal;return `<div class="ov" data-ov><div class="modal"><h3>${S.pub?'Publish update':'Publish workflow'}</h3><div class="hint" style="margin:0 0 10px">Published workflows appear in your firm’s Workflows library and as suggestions in Assistant.</div>
  <div class="fl">Name</div><input class="inp" value="${esc(S.title)}" readonly>
  <div class="fl">Share with</div>${[['me','Just me','Keep as a private workflow'],['grp','Commercial practice group','38 people'],['firm','Entire firm','All Acme & Partners LLP users']].map(o=>`<button class="opt ${m.who===o[0]?'on':''}" data-who="${o[0]}"><span class="rad"></span><span>${o[1]}<small>${o[2]}</small></span></button>`).join('')}
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px"><button class="btn" data-cancel>Cancel</button><button class="btn dk pulse" data-confirm>Publish</button></div></div></div>`}
 /* ---- mutations ---- */
 function addBlock(type,at){const b=mk(type);
  if(type==='resp'){b.fmt='Table';const p=[...S.blocks].reverse().find(x=>x.out);b.show=p&&p.id}
  if(type==='branch'){const p=S.blocks.find(x=>x.type==='prompt');b.on=p?p.id:null}
  if(type==='prompt'){b.text='Using the context provided, ';b.ctx=S.blocks.filter(x=>x.out).map(x=>x.id).slice(0,2);b.model='Auto';b.out='Analysis'}
  let idx=at;
  if(idx==null){if(T[type].k==='in'||type==='know'){const p=S.blocks.findIndex(x=>T[x.type].k!=='in');idx=p<0?S.blocks.length:p}
   else if(T[type].k==='out')idx=S.blocks.length;
   else{const o=S.blocks.findIndex(x=>T[x.type].k==='out');idx=o<0?S.blocks.length:o}}
  S.blocks.splice(idx,0,b);
  if(type==='know'){const pr=S.blocks.find(x=>x.type==='prompt');if(pr&&!pr.ctx.includes(b.id)){pr.ctx.push(b.id);pr.text=pr.text.replace('our standard position','the Playbook');S.justCtx=b.id}S.g.kn=1;toast('Playbook added — and wired into the Prompt’s context')}
  else toast(T[type].n+' added');
  S.sel=b.id;S.justAdded=b.id;S.menu=null;S.addMenu=false;renderTop();renderBody();
  const el=body.querySelector(`[data-blk="${b.id}"]`);if(el)el.scrollIntoView({block:'nearest'});
 }
 function delBlock(id){const i=S.blocks.findIndex(b=>b.id===id);if(i<0)return;const b=S.blocks[i];S.blocks.splice(i,1);
  S.blocks.forEach(x=>{if(x.ctx)x.ctx=x.ctx.filter(c=>c!==id);if(x.show===id)x.show=null;if(x.on===id)x.on=null});
  if(b.type==='know'&&!hasKn())S.g.kn=0;
  if(S.sel===id)S.sel=null;S.menu=null;renderTop();renderBody();toast(T[b.type].n+' removed')}
 /* ---- events ---- */
 function onClick(e){const el=e.target.closest('button,[data-blk],[data-ov]');if(!el||!root.contains(el))return;const d=el.dataset;
  if(d.ov!==undefined&&e.target===el){S.modal=null;renderBody();return}
  if(el.tagName!=='BUTTON'&&d.blk){if(S.mode!=='build')return;S.sel=d.blk;S.menu=null;S.ctxMenu=false;const b=byId(d.blk);if(b&&S.g.kn&&!S.g.cfg){S.g.cfg=1;later(()=>{S.justCtx=null},2500);renderNav()}renderBody();return}
  if(el.tagName!=='BUTTON')return;
  if(d.reset!==undefined){reset();toast('Demo reset');return}
  if(d.nav){if(d.nav!=='Workflows')toast(d.nav+' isn’t part of this demo');return}
  if(d.add){addBlock(d.add);return}
  if(d.addmenu!==undefined){toast('Pick a block from the panel on the left (or drag one in)');const p=body.querySelector('.pal');p&&p.animate&&p.animate([{background:'#eef6fb'},{background:'#fff'}],{duration:900});return}
  if(d.more){e.stopPropagation();S.menu=S.menu===d.more?null:d.more;renderBody();return}
  if(d.mv){const i=S.blocks.findIndex(b=>b.id===d.mv),j=i+(+d.dir);if(j>=0&&j<S.blocks.length){const [b]=S.blocks.splice(i,1);S.blocks.splice(j,0,b)}S.menu=null;renderBody();return}
  if(d.dup){const i=S.blocks.findIndex(b=>b.id===d.dup);const c=JSON.parse(JSON.stringify(S.blocks[i]));c.id='b'+(uid++);c.out=c.out?c.out+' (copy)':'';S.blocks.splice(i+1,0,c);S.menu=null;S.sel=c.id;S.justAdded=c.id;renderTop();renderBody();return}
  if(d.del){delBlock(d.del);return}
  const b=byId(S.sel);
  if(d.rmctx&&b){b.ctx=b.ctx.filter(c=>c!==d.rmctx);renderBody();return}
  if(d.addctx!==undefined){S.ctxMenu=!S.ctxMenu;renderBody();return}
  if(d.pickctx&&b){b.ctx.push(d.pickctx);S.ctxMenu=false;renderBody();return}
  if(d.model&&b){b.model=d.model;renderBody();return}
  if(d.src&&b){b.src=+d.src;b.out=['Playbook','Precedents','Guidelines'][b.src];renderBody();return}
  if(d.fmt&&b){b.fmt=d.fmt;renderBody();return}
  if(d.show&&b){b.show=d.show;renderBody();return}
  if(d.on&&b){b.on=d.on;renderBody();return}
  if(d.run!==undefined){if(S.mode==='run'){S.mode='build';S.run=null;timers.forEach(clearTimeout);timers.clear();render()}else startRun();return}
  if(d.close!==undefined){S.mode='build';S.run=null;timers.forEach(clearTimeout);timers.clear();render();return}
  if(d.file!==undefined){S.run.file=true;S.run.stick=false;renderBody();return}
  if(d.unfile!==undefined){S.run.file=false;renderBody();return}
  if(d.ans){S.run.ans[d.ans]=d.v;renderBody();return}
  if(d.go!==undefined){go();return}
  if(d.copy!==undefined){toast('Copied to clipboard (not really — it’s a demo)');return}
  if(d.export!==undefined){toast('Would download '+S.title.replace(/\s+/g,'_')+'.docx');return}
  if(d.pub!==undefined){S.modal={who:'firm'};renderBody();return}
  if(d.who){S.modal.who=d.who;renderBody();return}
  if(d.cancel!==undefined){S.modal=null;renderBody();return}
  if(d.confirm!==undefined){const w={me:'you',grp:'the Commercial practice group',firm:'everyone at Acme & Partners LLP'}[S.modal.who];S.modal=null;S.pub=(S.pub||0)+1;S.g.pub=1;render();toast('Published v'+S.pub+' — available to '+w);return}
 }
 function onInput(e){const t=e.target;
  if(t.classList.contains('ttl')){S.title=t.value||'Untitled workflow';return}
  if(t.dataset.f){const b=byId(S.sel);if(!b)return;b[t.dataset.f]=t.value;if(t.dataset.f!=='text'){const bf=body.querySelector(`[data-blk="${b.id}"] .bf`);if(bf)bf.innerHTML=footer(b)}return}
  if(t.dataset.ansin&&S.run){S.run.ans[t.dataset.ansin]=t.value}
 }
 function onDocDown(e){if(S&&S.menu&&!e.target.closest('.mn')&&!e.target.closest('[data-more]')){S.menu=null;renderBody()}}
 function onDragStart(e){const p=e.target.closest&&e.target.closest('[data-add]');if(p){e.dataTransfer.setData('text/plain','ab:'+p.dataset.add);e.dataTransfer.effectAllowed='copy'}}
 function onDragOver(e){const cv=e.target.closest&&e.target.closest('.cv');if(cv){e.preventDefault();cv.classList.add('drop')}}
 function onDragLeave(e){const cv=e.target.closest&&e.target.closest('.cv');if(cv&&!cv.contains(e.relatedTarget))cv.classList.remove('drop')}
 function onDrop(e){const cv=e.target.closest&&e.target.closest('.cv');if(!cv)return;e.preventDefault();cv.classList.remove('drop');const v=e.dataTransfer.getData('text/plain');if(!v.startsWith('ab:'))return;
  const blks=[...cv.querySelectorAll('[data-blk]')];let at=blks.length;for(let i=0;i<blks.length;i++){const r=blks[i].getBoundingClientRect();if(e.clientY<r.top+r.height/2){at=i;break}}
  addBlock(v.slice(3),at)}
 root.addEventListener('click',onClick);root.addEventListener('input',onInput);root.addEventListener('mousedown',onDocDown);
 root.addEventListener('dragstart',onDragStart);root.addEventListener('dragover',onDragOver);root.addEventListener('dragleave',onDragLeave);root.addEventListener('drop',onDrop);
 reset();
 return function(){timers.forEach(clearTimeout);timers.clear();clearTimeout(tt);
  ['click','input','mousedown','dragstart','dragover','dragleave','drop'].forEach((ev,i)=>root.removeEventListener(ev,[onClick,onInput,onDocDown,onDragStart,onDragOver,onDragLeave,onDrop][i]));root.innerHTML=''};
}};
})();
