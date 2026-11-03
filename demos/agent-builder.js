/* Agent Builder (formerly Workflow Builder) — a vanilla re-implementation of Harvey's step-based
   agent/workflow builder canvas. All data is fake. */
(function(){
const ID='agent-builder';
const P='.demo-agent-builder';
const CSS=`
${P}{--fg:hsl(40 6% 10%);--sub:hsl(36 5% 40%);--mut:hsl(38 4% 50%);--dis:hsl(38 5% 71%);--bgs:hsl(40 16% 96%);--bgsh:hsl(36 15% 94%);--bgp:hsl(34 11% 88%);--bd:hsl(36 15% 94%);--bds:hsl(34 11% 88%);--n3:hsl(40 6% 81%);--hov:hsla(40,100%,10%,.04);--prs:hsla(40,100%,10%,.08);--blue:hsl(220 79% 48%);
--e2:0 4px 12px 0 rgba(0,0,0,.04),0 0 0 1px hsla(40,6%,10%,.08);--e3:0 8px 20px 0 rgba(0,0,0,.12),0 0 0 1px hsla(40,6%,10%,.1);--e4:0 16px 32px 0 rgba(0,0,0,.2),0 0 0 1px hsla(40,6%,10%,.12);
font:14px/20px Diatype,Inter,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:var(--fg);background:#fff;-webkit-font-smoothing:antialiased}
${P} *{box-sizing:border-box}
${P} button{font:inherit;color:inherit;cursor:pointer;border:0;background:none;padding:0}
${P} input,${P} textarea,${P} select{font:inherit;color:inherit}
${P} svg{width:16px;height:16px;flex:none;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
${P} .app{display:flex;flex-direction:column;height:100%}
${P} .top{height:52px;flex:none;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:8px;padding:0 12px 0 8px}
${P} .ib{width:32px;height:32px;display:inline-grid;place-items:center;border-radius:8px;color:var(--sub)}${P} .ib:hover{background:var(--hov);color:var(--fg)}
${P} .ib.sm{width:24px;height:24px;border-radius:6px}${P} .ib.sm svg{width:14px;height:14px}
${P} .wm{font:400 19px/1 HarveySerif,Georgia,'Times New Roman',serif;letter-spacing:-.02em;padding:0 4px}
${P} .vs{width:1px;height:20px;background:var(--bds);margin:0 4px}
${P} .ttl{font-weight:500;font-size:14px;border:1px solid transparent;border-radius:6px;padding:4px 6px;outline:0;width:200px;background:none}
${P} .ttl:hover,${P} .ttl:focus{border-color:var(--bds)}
${P} .st{display:inline-flex;align-items:center;gap:5px;height:20px;font-size:12px;font-weight:500;border-radius:6px;padding:0 6px;background:var(--bgsh);color:var(--sub);white-space:nowrap}
${P} .st i{width:6px;height:6px;border-radius:50%;background:var(--mut)}
${P} .st.pub{background:hsl(140 64% 89%);color:hsl(155 71% 27%)}${P} .st.pub i{background:hsl(155 53% 39%)}
${P} .saved{font-size:12px;color:var(--mut);white-space:nowrap;margin-right:4px}
${P} .btn{height:32px;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:0 12px;border-radius:8px;font-size:14px;font-weight:500;white-space:nowrap;transition:background .15s,border-color .15s}
${P} .btn.sm{height:28px;padding:0 10px;font-size:12px;border-radius:6px}
${P} .btn.sec{background:#fff;border:1px solid var(--bds);box-shadow:0 1px 2px rgba(0,0,0,.03)}${P} .btn.sec:hover{background:var(--bgs)}
${P} .btn.ghost:hover{background:var(--hov)}
${P} .btn.pri{background:var(--fg);color:var(--bgs)}${P} .btn.pri:hover{background:hsl(43 7% 19%)}
${P} .btn[disabled]{opacity:.4;cursor:default}
${P} .body{flex:1;display:flex;min-height:0}
/* step menu (left) */
${P} .pal{width:228px;flex:none;border-right:1px solid var(--bd);display:flex;flex-direction:column;background:#fff;min-height:0}
${P} .palh{padding:14px 16px 4px;font-size:14px;font-weight:500}
${P} .palh small{display:block;font-size:12px;line-height:16px;color:var(--mut);font-weight:400;margin-top:2px}
${P} .pls{flex:1;overflow:auto;min-height:0}
${P} .grp{border-bottom:1px solid var(--bd);padding-bottom:6px}${P} .grp:last-child{border-bottom:0}
${P} .grp h5{margin:0;padding:12px 16px 4px;font-size:12px;line-height:16px;color:var(--mut);font-weight:400}
${P} .pi{display:flex;align-items:center;gap:10px;width:calc(100% - 12px);margin:0 6px;text-align:left;padding:6px 10px;border-radius:6px;font-size:14px}
${P} .pi:hover{background:var(--hov)}
${P} .pi>span:last-child{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
${P} .pi small{display:block;color:var(--mut);font-size:12px;line-height:16px;overflow:hidden;text-overflow:ellipsis}
${P} .ico{width:24px;height:24px;border-radius:4px;display:grid;place-items:center;flex:none}
${P} .k-in{background:hsl(198 48% 89%);color:hsl(201 46% 43%)}
${P} .k-ai{background:hsl(255 9% 91%);color:hsl(258 66% 57%)}
${P} .k-kn{background:hsl(180 14% 90%);color:hsl(184 56% 30%)}
${P} .k-lg{background:hsl(47 25% 89%);color:hsl(29 78% 34%)}
${P} .k-out{background:hsl(86 14% 90%);color:hsl(85 41% 31%)}
/* canvas */
${P} .cv{flex:1;min-width:0;overflow-y:auto;overflow-x:hidden;position:relative;background-color:var(--bgs);background-image:radial-gradient(hsl(40 6% 81%) 1px,transparent 1.2px);background-size:20px 20px}
${P} .cv.drop{background-color:hsl(220 13% 95%)}
${P} .cvh{position:sticky;top:0;height:0;z-index:3}
${P} .cvh span{position:absolute;right:14px;top:12px;font-size:12px;color:var(--mut);white-space:nowrap}
${P} .cvw{flex:1;min-width:0;position:relative;display:flex}
${P} .cv{scrollbar-width:none}${P} .cv::-webkit-scrollbar{display:none}
${P} .ctrls{position:absolute;left:12px;bottom:12px;z-index:3}
${P} .ctrls div{display:flex;flex-direction:column;background:#fff;border-radius:6px;box-shadow:var(--e2);overflow:hidden;width:28px}
${P} .ctrls button{height:26px;display:grid;place-items:center;color:var(--sub);border-bottom:1px solid var(--bd)}${P} .ctrls button:last-child{border:0}
${P} .ctrls button:hover{background:var(--bgs)}${P} .ctrls svg{width:13px;height:13px}
${P} .chain{display:flex;flex-direction:column;align-items:center;padding:44px 0 150px;transform-origin:top center;transition:transform .2s}
${P} .blk{width:340px;max-width:calc(100% - 56px);height:82px;background:#fff;border:1px solid var(--bds);border-radius:12px;cursor:pointer;position:relative;transition:border-color .15s,box-shadow .15s;display:flex;flex-direction:column}
${P} .blk:hover{box-shadow:var(--e2)}
${P} .blk.sel{border-color:var(--blue)}
${P} .blk.run{border-color:hsl(258 66% 57%);box-shadow:0 0 0 3px hsla(258,66%,57%,.14)}
${P} .blk.done{border-color:hsl(151 51% 49%)}
${P} .blk.new{animation:ab-in .35s ease}
@keyframes ab-in{from{opacity:0;transform:translateY(-8px) scale(.97)}}
${P} .bh{height:41px;flex:none;display:flex;align-items:center;gap:8px;padding:0 6px 0 12px;border-bottom:1px solid var(--bds)}
${P} .bh b{flex:1;min-width:0;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
${P} .kd{font-size:10px;line-height:14px;color:var(--mut);background:var(--bgsh);border-radius:6px;padding:2px 4px;white-space:nowrap}
${P} .more{width:24px;height:24px;border-radius:6px;display:grid;place-items:center;color:var(--sub)}${P} .more:hover{background:var(--hov)}
${P} .bf{flex:1;padding:0 12px;font-size:12px;line-height:16px;color:var(--dis);display:flex;gap:4px;align-items:center;white-space:nowrap;overflow:hidden}
${P} .lbl{border:1px solid var(--bds);background:var(--bgs);border-radius:4px;padding:1px 3px;color:var(--mut);font-size:12px;line-height:16px;overflow:hidden;text-overflow:ellipsis;max-width:150px}
${P} .lbl.hl{border-color:hsl(256 83% 74%);background:hsl(260 13% 95%);color:hsl(258 66% 57%)}
${P} .stt{position:absolute;right:-30px;top:30px;width:20px;height:20px;border-radius:50%;display:grid;place-items:center;color:#fff}
${P} .stt svg{width:11px;height:11px;stroke-width:2.4}
${P} .stt.r{border:2px solid hsl(255 9% 91%);border-top-color:hsl(258 66% 57%);animation:ab-spin .8s linear infinite}
${P} .stt.d{background:hsl(155 53% 39%)}
@keyframes ab-spin{to{transform:rotate(360deg)}}
${P} .con{width:1px;height:32px;background:var(--n3);position:relative}
${P} .con::before{content:'';position:absolute;top:-3px;left:-2px;width:5px;height:5px;border-radius:50%;background:#fff;border:1px solid var(--n3)}
${P} .con::after{content:'';position:absolute;bottom:-1px;left:-3px;border:3.5px solid transparent;border-top:5px solid var(--n3);border-bottom:0}
${P} .addst{height:32px;border:1px solid var(--bds);background:#fff;border-radius:8px;padding:0 12px;font-size:14px;font-weight:500;display:inline-flex;align-items:center;gap:6px}
${P} .addst:hover{background:var(--bgs)}${P} .addst svg{color:var(--sub)}
${P} .mn{position:absolute;right:6px;top:36px;background:#fff;border-radius:8px;box-shadow:var(--e3);padding:4px;z-index:6;min-width:150px}
${P} .mn button{display:flex;align-items:center;gap:8px;width:100%;text-align:left;height:32px;padding:0 8px;border-radius:6px;font-size:14px}
${P} .mn button svg{color:var(--sub)}
${P} .mn button:hover{background:var(--hov)}${P} .mn button.del,${P} .mn button.del svg{color:hsl(356 67% 46%)}
/* edit panel */
${P} .cfg{width:340px;flex:none;border-left:1px solid var(--bd);overflow:auto;padding:0 20px 20px;background:#fff}
${P} .ch{display:flex;align-items:center;gap:8px;padding:20px 0 20px}
${P} .ch b{font-size:18px;line-height:26px;font-weight:500;flex:1}
${P} .fl{margin:16px 0 6px;font-size:14px;font-weight:500;display:flex;align-items:center;gap:6px}
${P} .fl i{width:14px;height:14px;border:1px solid var(--dis);border-radius:50%;font:500 9px/12px system-ui;text-align:center;color:var(--mut);font-style:normal}
${P} .inp{width:100%;background:var(--bgs);border:1px solid transparent;border-radius:8px;padding:6px 10px;outline:0;font-size:14px;line-height:20px}
${P} .inp:hover{background:var(--bgsh)}${P} .inp:focus{border-color:var(--bds);background:#fff}
${P} textarea.inp{resize:none;height:132px;line-height:21px}
${P} .ctx{display:flex;gap:4px;flex-wrap:wrap;background:var(--bgs);border-radius:8px;padding:6px;min-height:36px;align-items:center}
${P} .chip{display:inline-flex;gap:4px;align-items:center;height:24px;padding:0 4px 0 6px;border-radius:6px;background:#fff;box-shadow:0 0 0 1px var(--bds);font-size:12px;font-weight:500}
${P} .chip svg{width:12px;height:12px}
${P} .chip button{width:16px;height:16px;border-radius:4px;display:grid;place-items:center;color:var(--mut)}${P} .chip button:hover{background:var(--hov)}
${P} .chip button svg{width:10px;height:10px}
${P} .plus{display:inline-flex;align-items:center;gap:4px;height:24px;font-size:12px;color:var(--sub);padding:0 6px;border-radius:6px}${P} .plus:hover{background:var(--prs)}
${P} .plus svg{width:12px;height:12px}
${P} .seg{display:flex;background:var(--bgsh);border-radius:8px;padding:2px;gap:2px}
${P} .seg button{flex:1 1 auto;height:28px;padding:0 8px;border-radius:6px;font-size:12px;color:var(--sub);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
${P} .seg button.on{background:#fff;color:var(--fg);font-weight:500;box-shadow:0 1px 2px rgba(0,0,0,.06),0 0 0 1px hsla(40,6%,10%,.06)}
${P} .opt{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border:1px solid var(--bds);border-radius:8px;margin-bottom:6px;width:100%;text-align:left;font-size:14px;transition:border-color .15s}
${P} .opt:hover{background:var(--bgs)}${P} .opt.on{border-color:var(--fg)}
${P} .opt small{display:block;color:var(--mut);font-size:12px;line-height:16px}
${P} .rad{width:16px;height:16px;border-radius:50%;border:1px solid var(--mut);flex:none;margin-top:2px}
${P} .opt.on .rad{border:5px solid var(--fg)}
${P} .hint{font-size:12px;line-height:16px;color:var(--mut);margin-top:8px}
${P} .guide{margin:8px 10px 10px;background:var(--bgs);border-radius:8px;padding:10px 10px 8px;font-size:12px;line-height:16px}
${P} .guide b{font-size:12px;font-weight:500}
${P} .guide ol{list-style:none;margin:8px 0;padding:0;display:flex;flex-direction:column;gap:6px}
${P} .guide li{display:flex;gap:7px;color:var(--sub)}
${P} .guide li i{width:16px;height:16px;border-radius:50%;border:1px solid var(--n3);flex:none;display:grid;place-items:center;background:#fff;color:#fff}
${P} .guide li i svg{width:10px;height:10px;stroke-width:2.4}
${P} .guide li.ok{color:var(--dis);text-decoration:line-through}${P} .guide li.ok i{background:hsl(155 53% 39%);border-color:hsl(155 53% 39%)}
${P} .guide li.nx{color:var(--fg);font-weight:500}${P} .guide li.nx i{border-color:var(--blue);box-shadow:0 0 0 2px hsla(220,79%,48%,.15)}
${P} .guide .btn{width:100%}
${P} .pulse{animation:ab-glow 1.8s infinite}
@keyframes ab-glow{0%,100%{box-shadow:0 0 0 0 hsla(220,79%,48%,.45)}50%{box-shadow:0 0 0 5px hsla(220,79%,48%,0)}}
/* run panel */
${P} .runp{width:565px;flex:none;border-left:1px solid var(--bd);display:flex;flex-direction:column;background:#fff;min-height:0}
${P} .rh{display:flex;align-items:center;gap:8px;height:52px;flex:none;padding:0 8px 0 20px;border-bottom:1px solid var(--bd)}
${P} .rh b{font-size:16px;font-weight:500;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
${P} .rb{flex:1;overflow:auto;padding:16px 20px;background:var(--bgs)}
${P} .card{background:#fff;border-radius:8px;box-shadow:var(--e2);padding:14px 16px;margin-bottom:12px}
${P} .card h6{margin:0 0 10px;font-size:14px;font-weight:500;display:flex;gap:8px;align-items:center}
${P} .card h6 .ico{width:20px;height:20px}${P} .card h6 .ico svg{width:13px;height:13px}
${P} .dz{border:1px dashed var(--n3);border-radius:8px;padding:16px;text-align:center;color:var(--mut);font-size:12px;background:var(--bgs);display:flex;flex-direction:column;align-items:center;gap:8px}
${P} .file{display:flex;gap:10px;align-items:center;border-radius:8px;padding:8px 10px;font-size:14px;background:var(--bgs)}
${P} .fic{width:24px;height:28px;border-radius:4px;background:hsl(357 69% 50%);color:#fff;font:700 7px/28px system-ui;text-align:center;flex:none}
${P} .fic.doc{background:var(--blue)}
${P} .lg{display:flex;flex-direction:column;gap:8px;font-size:13px}
${P} .lg div{display:flex;gap:8px;align-items:center}
${P} .lg .s{width:16px;height:16px;border-radius:50%;flex:none;display:grid;place-items:center;color:#fff}
${P} .lg .s svg{width:10px;height:10px;stroke-width:2.6}
${P} .lg .s.r{border:2px solid hsl(255 9% 91%);border-top-color:hsl(258 66% 57%);animation:ab-spin .8s linear infinite}
${P} .lg .s.d{background:hsl(155 53% 39%)}
${P} .lg .s.w{border:1px solid var(--n3)}
${P} .lg span.m{color:var(--mut);font-size:12px;margin-left:auto;white-space:nowrap}
${P} table{width:100%;border-collapse:collapse;font-size:12px;line-height:17px;table-layout:fixed}
${P} th{text-align:left;font-weight:500;color:var(--fg);padding:8px;background:var(--bgs);font-size:12px}
${P} th:first-child{border-radius:6px 0 0 6px}${P} th:last-child{border-radius:0 6px 6px 0}
${P} td{padding:8px;border-bottom:1px solid var(--bd);vertical-align:top}
${P} tr.in{animation:ab-in .3s ease}
${P} .risk{display:inline-flex;align-items:center;height:20px;font-size:12px;font-weight:500;border-radius:6px;padding:0 6px;white-space:nowrap}
${P} .risk.High{background:hsl(352 83% 93%);color:hsl(356 67% 46%)}${P} .risk.Medium{background:hsl(45 77% 88%);color:hsl(29 78% 34%)}${P} .risk.Low{background:hsl(140 64% 89%);color:hsl(155 71% 27%)}
${P} .cite{display:inline-grid;place-items:center;min-width:18px;height:18px;font-size:11px;font-weight:500;color:var(--fg);background:var(--bgsh);border-radius:5px;padding:0 5px;margin-left:3px;white-space:nowrap;vertical-align:1px;line-height:1;cursor:default}
${P} .cite:hover{background:var(--blue);color:#fff}
${P} .cite.kn{background:hsl(180 14% 90%);color:hsl(184 56% 30%)}
${P} .memo p{margin:0 0 10px;font:13px/1.65 HarveySerif,Georgia,'Times New Roman',serif}
${P} .memo h4{font:500 16px/1.3 HarveySerif,Georgia,'Times New Roman',serif;margin:0 0 8px}
${P} .warn{display:flex;gap:8px;align-items:flex-start;font-size:12px;line-height:16px;padding:8px 10px;border-radius:6px;background:hsl(12 22% 95%);color:hsl(16 85% 39%);margin-bottom:10px}
${P} .note{font-size:12px;line-height:16px;margin-top:10px;color:hsl(29 78% 34%);display:flex;gap:6px;align-items:center}
/* modal + toast */
${P} .ov{position:absolute;inset:0;background:rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;z-index:30;animation:ab-fade .15s}
@keyframes ab-fade{from{opacity:0}}
${P} .modal{width:460px;background:#fff;border-radius:12px;box-shadow:var(--e4);overflow:hidden}
${P} .mh{padding:20px 24px 4px}${P} .mh h3{margin:0 0 4px;font-size:18px;line-height:26px;font-weight:500}
${P} .mb{padding:0 24px 8px}
${P} .mf{display:flex;gap:8px;justify-content:flex-end;padding:12px 24px 20px}
${P} .toast{position:absolute;left:50%;bottom:18px;transform:translate(-50%,12px);background:var(--fg);color:var(--bgs);border-radius:8px;padding:10px 14px;font-size:13px;opacity:0;transition:.2s;pointer-events:none;z-index:40;white-space:nowrap;box-shadow:var(--e3)}
${P} .toast.show{opacity:1;transform:translate(-50%,0)}
`;
const sv=p=>`<svg viewBox="0 0 16 16">${p}</svg>`;
const IC={
 text:sv('<rect x="2" y="3.5" width="12" height="9" rx="1.5"/><path d="M5 6.5v3M4 6.5h2M8 9.5h3"/>'),
 upload:sv('<path d="M4.5 12.5a3 3 0 0 1-.4-6 4 4 0 0 1 7.8 0 3 3 0 0 1-.4 6"/><path d="M8 13.5v-5M6 10l2-2 2 2"/>'),
 select:sv('<rect x="2.5" y="2.5" width="11" height="11" rx="1.5"/><path d="M5 5.5h1M5 8h1M5 10.5h1M8 5.5h3M8 8h3M8 10.5h3"/>'),
 prompt:sv('<rect x="2.5" y="2.5" width="11" height="11" rx="2"/><path d="M8 5.2v5.6M5.6 6.6l4.8 2.8M10.4 6.6 5.6 9.4"/>'),
 table:sv('<rect x="2" y="3" width="12" height="10" rx="1.5"/><path d="M2 6.5h12M6 6.5V13M10 6.5V13"/>'),
 draft:sv('<path d="M9 2H4.5A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5V6z"/><path d="M9 2v4h4M5.5 9h5M5.5 11.5h3"/>'),
 know:sv('<path d="M3 3.5A1.5 1.5 0 0 1 4.5 2H13v10H4.5A1.5 1.5 0 0 0 3 13.5z"/><path d="M3 13.5A1.5 1.5 0 0 0 4.5 15H13v-3M6 5h4"/>'),
 branch:sv('<circle cx="4" cy="3.5" r="1.5"/><circle cx="4" cy="12.5" r="1.5"/><circle cx="12" cy="6" r="1.5"/><path d="M4 5v6M12 7.5c0 2.5-4 2.5-7.5 4"/>'),
 resp:sv('<path d="M2.5 3.5h11v7.5H7l-3 2.5V11H2.5z"/><path d="M5.5 6.5h5M5.5 8.5h3"/>'),
 doc:sv('<path d="M9 2H4.5A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5V6z"/><path d="M9 2v4h4M5.5 8.5l1 3.5 1.5-3 1.5 3 1-3.5"/>'),
 back:sv('<path d="M13 8H3M7 4 3 8l4 4"/>'),
 play:sv('<path d="M5 3.5v9l7-4.5z"/>'),
 dots:sv('<circle cx="3.5" cy="8" r=".6"/><circle cx="8" cy="8" r=".6"/><circle cx="12.5" cy="8" r=".6"/>'),
 x:sv('<path d="M4 4l8 8M12 4l-8 8"/>'),
 plus:sv('<path d="M8 3v10M3 8h10"/>'),
 minus:sv('<path d="M3 8h10"/>'),
 fit:sv('<path d="M2.5 6V2.5H6M10 2.5h3.5V6M13.5 10v3.5H10M6 13.5H2.5V10"/>'),
 chk:sv('<path d="M3.5 8.5l3 3 6-7"/>'),
 up:sv('<path d="M8 13V3M4 7l4-4 4 4"/>'),
 down:sv('<path d="M8 3v10M4 9l4 4 4-4"/>'),
 dup:sv('<rect x="5" y="5" width="8.5" height="8.5" rx="1.5"/><path d="M11 5V3.5A1 1 0 0 0 10 2.5H3.5a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1H5"/>'),
 trash:sv('<path d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 9h5.8l.6-9"/>'),
 warn:sv('<path d="M8 2.5 14 13H2z"/><path d="M8 6.5v3M8 11.2v.1"/>')
};
const T={
 text:{n:'Freeform text',k:'in',g:'User input',d:'Ask the user a question',out:'Deal context',q:'Any context on the deal or counterparty?'},
 upload:{n:'File upload',k:'in',g:'User input',d:'Collect documents',out:'Vendor NDA',q:'Upload the vendor’s NDA'},
 select:{n:'Selection list',k:'in',g:'User input',d:'Choose from options',out:'Leverage',q:'How much leverage do we have?',opts:['High','Low']},
 know:{n:'Knowledge source',k:'kn',g:'AI action',d:'Firm playbooks & precedent',out:'Playbook',src:0},
 prompt:{n:'Prompt',k:'ai',g:'AI action',d:'Query Harvey with instructions',out:'Issues'},
 table:{n:'Review table',k:'ai',g:'AI action',d:'Extract terms into columns',out:'Key terms',cols:['Parties','Term','Governing law','Residuals']},
 draft:{n:'Document drafting',k:'ai',g:'AI action',d:'Draft from a template',out:'Redline'},
 branch:{n:'Conditional',k:'lg',g:'Logic',d:'Route on a condition',out:''},
 resp:{n:'Response',k:'out',g:'Output',d:'Show results to the user',out:''},
 doc:{n:'Export to Word',k:'out',g:'Output',d:'Download a .docx',out:''}
};
const KL={in:'User input',ai:'AI Action',kn:'AI Action',lg:'Logic',out:'Output'};
const SOURCES=[['Firm NDA Playbook','Vault · 14 negotiated positions · Commercial group'],['Commercial precedent bank','Vault · 212 executed agreements'],['Outside counsel guidelines','Vault · 3 documents']];
const ROWS=[
 ['Definition of Confidential Information','Covers all information “whether or not marked”','Limit to marked info or info reasonably understood as confidential','Medium','Add “that is marked or reasonably should be understood to be confidential”','§1.1'],
 ['Term of confidentiality','Obligations survive in perpetuity','3 years post-termination; trade secrets for as long as protected','High','Replace with a 3-year survival period plus trade-secret carve-out','§6'],
 ['Residuals','Vendor may use information retained in unaided memory','No residuals clause accepted','High','Delete §7.2 in full','§7.2'],
 ['Non-solicitation','24-month mutual non-solicit of all employees','Max 12 months, limited to employees directly engaged','Medium','Reduce to 12 months; limit to engaged personnel','§9'],
 ['Governing law','Delaware law, Delaware courts','New York or Delaware acceptable','Low','No change needed','§12']
];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ico=(type,big)=>`<span class="ico k-${T[type].k}"${big?' style="width:28px;height:28px"':''}>${IC[type]}</span>`;

window.DEMOS=window.DEMOS||{};
window.DEMOS[ID]={frame:'browser',title:'Harvey Agent Builder (fka Workflow Builder)',url:'app.harvey.ai/workflows/builder',
caption:'Add the firm playbook from the left, run the agent on a sample NDA, then publish it to your workspace.',
sources:['https://www.harvey.ai/blog/introducing-workflow-builder','https://www.harvey.ai/blog/introducing-agent-builder','https://www.harvey.ai/blog/getting-started-with-workflow-builder-5-workflows-we-recommend','https://www.harvey.ai/blog/how-harveys-legal-team-uses-harvey-to-work-smarter','https://www.harvey.ai/blog/paul-weiss-harvey-workflow-builder'],
mount(root){
 const timers=new Set();const later=(f,ms)=>{const t=setTimeout(()=>{timers.delete(t);f()},ms);timers.add(t)};
 let S,uid;
 root.innerHTML=`<style>${CSS}</style><div class="app"><div class="top"></div><div class="body"></div></div><div class="toast"></div>`;
 const top=root.querySelector('.top'),body=root.querySelector('.body'),toastEl=root.querySelector('.toast');
 let tt;const toast=m=>{toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toastEl.classList.remove('show'),2600)};
 function mk(type,o){const t=T[type];return Object.assign({id:'b'+(uid++),type,out:t.out,q:t.q,src:t.src,opts:t.opts&&t.opts.slice(),cols:t.cols&&t.cols.slice()},o||{})}
 function reset(){timers.forEach(clearTimeout);timers.clear();uid=1;
  const up=mk('upload'),pr=mk('prompt',{text:'Review the Vendor NDA clause by clause. For each clause that deviates from our standard position, explain the deviation, rate the risk (High / Medium / Low) and propose a specific edit. Cite the section.',ctx:[],model:'Auto'}),rs=mk('resp',{fmt:'Table'});
  pr.ctx=[up.id];rs.show=pr.id;
  S={title:'Vendor NDA Review',blocks:[up,pr,rs],sel:pr.id,menu:null,mode:'build',pub:0,g:{kn:0,cfg:0,run:0,pub:0},run:null,modal:null,justAdded:null,zoom:1};
  render();
 }
 const byId=id=>S.blocks.find(b=>b.id===id);
 const label=id=>{const b=byId(id);return b?b.out:'—'};
 function render(){renderTop();renderBody()}
 function renderTop(){
  const ready=S.g.run;
  top.innerHTML=`<button class="ib" data-nav="back" aria-label="Back">${IC.back}</button><span class="wm">Harvey</span><span class="vs"></span><input class="ttl" value="${esc(S.title)}" aria-label="Agent name"><span class="st ${S.pub?'pub':''}"><i></i>${S.pub?'Published · v'+S.pub:'Unpublished'}</span>
  <span style="flex:1"></span><span class="saved">${S.blocks.length} steps · Saved just now</span>
  <button class="btn sec sm ${S.g.kn&&!S.g.run&&S.mode==='build'?'pulse':''}" data-run>${S.mode==='run'?IC.back+'Back to builder':IC.play+'Run'}</button>
  <button class="btn pri sm ${ready&&!S.g.pub?'pulse':''}" data-pub>${S.pub?'Publish update':'Publish'}</button><button class="ib" data-nav="more" aria-label="More agent actions">${IC.dots}</button>`;
 }
 function renderBody(){
  const cvScroll=body.querySelector('.cv')?body.querySelector('.cv').scrollTop:0;
  body.innerHTML=(S.mode==='build'?palHTML():'')+`<div class="cvw"><div class="cv"><div class="cvh">${S.mode==='build'?'<span>Shift + drag to select multiple steps</span>':''}</div>${chainHTML()}</div><div class="ctrls"><div><button data-zoom="1" aria-label="Zoom in">${IC.plus}</button><button data-zoom="-1" aria-label="Zoom out">${IC.minus}</button><button data-zoom="0" aria-label="Fit view">${IC.fit}</button></div></div></div>`+(S.mode==='build'?`<div class="cfg">${cfgHTML()}</div>`:`<div class="runp">${runHTML()}</div>`)+(S.modal?modalHTML():'');
  const cv=body.querySelector('.cv');cv.scrollTop=cvScroll;
  if(S.mode==='run'){const rb=body.querySelector('.rb');if(rb&&S.run&&S.run.stick)rb.scrollTop=rb.scrollHeight}
  S.justAdded=null;
 }
 function palHTML(){const groups={};Object.keys(T).forEach(k=>{(groups[T[k].g]=groups[T[k].g]||[]).push(k)});
  return `<div class="pal"><div class="palh">Steps<small>Click or drag a step onto the canvas</small></div><div class="pls">${Object.keys(groups).map(g=>`<div class="grp"><h5>${g}</h5>`+groups[g].map(k=>`<button class="pi ${k==='know'&&!S.g.kn?'pulse':''}" draggable="true" data-add="${k}">${ico(k)}<span>${T[k].n}<small>${T[k].d}</small></span></button>`).join('')+'</div>').join('')}</div>${guideHTML()}</div>`}
 const L=(t,hl)=>`<span class="lbl${hl?' hl':''}">${esc(t)}</span>`;
 function footer(b){
  if(b.type==='resp')return `Display ${L(label(b.show),1)}${L(b.fmt)}`;
  if(b.type==='doc')return `File ${L(S.title.replace(/\s+/g,'_')+'.docx')}`;
  if(b.type==='branch')return `If ${L(label(b.on),1)} has High risk → ${L('Escalate to partner')}`;
  if(b.type==='know')return `Source ${L(SOURCES[b.src][0])} Output ${L(b.out)}`;
  if(b.type==='prompt')return `Input ${(b.ctx||[]).slice(0,2).map(c=>L(label(c),1)).join('')||L('none')}${(b.ctx||[]).length>2?`<span style="color:var(--mut)">+${b.ctx.length-2}</span>`:''} Output ${L(b.out)}`;
  return `Output ${L(b.out)}`;
 }
 function chainHTML(){const rs=S.run;
  return `<div class="chain" style="transform:scale(${S.zoom})">`+S.blocks.map((b,i)=>{const t=T[b.type];const st=rs?rs.st[b.id]:null;
   return (i?'<div class="con"></div>':'')+`<div class="blk ${S.sel===b.id&&S.mode==='build'?'sel':''} ${st==='r'?'run':st==='d'?'done':''} ${S.justAdded===b.id?'new':''}" data-blk="${b.id}">
   <div class="bh">${ico(b.type)}<b>${t.n}</b><span class="kd">${KL[t.k]}</span>${S.mode==='build'?`<button class="more" data-more="${b.id}" aria-label="Step actions">${IC.dots}</button>`:''}</div>
   <div class="bf">${footer(b)}</div>${st?`<span class="stt ${st}">${st==='d'?IC.chk:''}</span>`:''}
   ${S.menu===b.id?`<div class="mn"><button data-mv="${b.id}" data-dir="-1">${IC.up}Move up</button><button data-mv="${b.id}" data-dir="1">${IC.down}Move down</button><button data-dup="${b.id}">${IC.dup}Duplicate</button><button class="del" data-del="${b.id}">${IC.trash}Delete</button></div>`:''}</div>`}).join('')
   +(S.mode==='build'?`<div class="con"></div><button class="addst" data-addmenu>${IC.plus}Add step</button>`:'')+`</div>`;
 }
 function guideHTML(){const g=S.g;const st=[['kn','Add “Knowledge source” (firm playbook)'],['cfg','Open the Prompt — see Playbook in its context'],['run','Run it on a sample NDA'],['pub','Publish to your workspace']];const nx=st.find(s=>!g[s[0]]);
  return `<div class="guide"><b>Try it</b><ol>${st.map(s=>`<li class="${g[s[0]]?'ok':nx===s?'nx':''}"><i>${g[s[0]]?IC.chk:''}</i>${s[1]}</li>`).join('')}</ol><button class="btn sec sm" data-reset>Replay demo</button></div>`}
 function cfgHTML(){const b=byId(S.sel);if(!b)return `<div class="hint" style="margin-top:60px;text-align:center">Select a step to configure it.</div>`;
  const t=T[b.type];let h=`<div class="ch">${ico(b.type,1)}<b>${t.n}</b><button class="ib sm" data-desel aria-label="Close">${IC.x}</button></div>`;
  const outF=`<div class="fl">Output label <i>i</i></div><input class="inp" data-f="out" value="${esc(b.out)}">`;
  if(b.type==='prompt'){
   const avail=S.blocks.slice(0,S.blocks.indexOf(b)).filter(x=>x.out&&!(b.ctx||[]).includes(x.id));
   h+=`<div class="fl">Instructions <i>i</i></div><textarea class="inp" data-f="text" placeholder="Write a set of instructions…">${esc(b.text||'')}</textarea>
   <div class="hint" style="margin-top:4px">Type @ to directly reference prior steps in the prompt.</div>
   <div class="fl">Context <i>i</i></div><div class="ctx">${(b.ctx||[]).map(c=>{const x=byId(c);return `<span class="chip ${S.justCtx===c?'pulse':''}">${x?IC[x.type]:''}${esc(label(c))}<button data-rmctx="${c}" aria-label="Remove">${IC.x}</button></span>`}).join('')}${avail.length?`<button class="plus" data-addctx>${IC.plus}Add context</button>`:''}</div>
   ${S.ctxMenu?`<div class="ctx" style="margin-top:4px;background:#fff;box-shadow:var(--e2)">${avail.map(x=>`<button class="chip" data-pickctx="${x.id}">${IC[x.type]}${esc(x.out)}</button>`).join('')}</div>`:''}
   <div class="fl">Model <i>i</i></div><div class="seg">${['Auto','Fast','Deep reasoning'].map(m=>`<button class="${b.model===m?'on':''}" data-model="${m}">${m}</button>`).join('')}</div>${outF}`;
  }else if(b.type==='know'){
   h+=`<div class="fl">Knowledge sources <i>i</i></div>${SOURCES.map((s,i)=>`<button class="opt ${b.src===i?'on':''}" data-src="${i}"><span class="rad"></span><span>${s[0]}<small>${s[1]}</small></span></button>`).join('')}${outF}<div class="hint">Knowledge is retrieved at run time and cited in the output.</div>`;
  }else if(b.type==='resp'){
   const outs=S.blocks.filter(x=>x.out&&x!==b);
   h+=`<div class="fl">Display</div><div class="seg">${outs.map(x=>`<button class="${b.show===x.id?'on':''}" data-show="${x.id}">${esc(x.out)}</button>`).join('')}</div>
   <div class="fl">Format</div><div class="seg">${['Table','Memo','Bullets'].map(f=>`<button class="${b.fmt===f?'on':''}" data-fmt="${f}">${f}</button>`).join('')}</div><div class="hint">Select which outputs from prior steps are shown to the user.</div>`;
  }else if(b.type==='select'){
   h+=`<div class="fl">Question</div><input class="inp" data-f="q" value="${esc(b.q)}"><div class="fl">Options</div><div class="ctx">${b.opts.map(o=>`<span class="chip" style="padding-right:6px">${esc(o)}</span>`).join('')}<button class="plus">${IC.plus}Add new option</button></div>${outF}`;
  }else if(b.type==='branch'){
   const outs=S.blocks.filter(x=>x.out&&x!==b);
   h+=`<div class="fl">Condition</div><div class="seg">${outs.map(x=>`<button class="${b.on===x.id?'on':''}" data-on="${x.id}">${esc(x.out)}</button>`).join('')}</div><div class="hint">contains any <b>High</b> risk → route to <b>Escalate to partner</b>; otherwise continue.</div>`;
  }else if(b.type==='table'){
   h+=`<div class="fl">Columns</div><div class="ctx">${b.cols.map(c=>`<span class="chip" style="padding-right:6px">${esc(c)}</span>`).join('')}</div>${outF}`;
  }else if(b.type==='doc'){
   h+=`<div class="fl">Template</div><input class="inp" value="Acme house style — redline.dotx" readonly><div class="hint">Exports the response as a Word document.</div>`;
  }else{
   h+=`<div class="fl">Question shown to the user</div><input class="inp" data-f="q" value="${esc(b.q||'')}">${outF}${b.type==='upload'?'<div class="hint">Allow the user to upload files to be used as an input in later steps. PDF, DOCX · up to 10 files.</div>':''}`;
  }
  return h;
 }
 /* ---- run ---- */
 function runHTML(){const r=S.run;const inputs=S.blocks.filter(b=>T[b.type].k==='in');
  let h=`<div class="rh"><b>Run agent · ${esc(S.title)}</b><span class="st">Preview</span><button class="ib" data-close aria-label="Close">${IC.x}</button></div><div class="rb">`;
  inputs.forEach(b=>{h+=`<div class="card"><h6>${ico(b.type)}${esc(b.q||T[b.type].n)}</h6>`;
   if(b.type==='upload')h+=r.file?`<div class="file"><span class="fic">PDF</span><div style="flex:1;min-width:0"><div style="font-weight:500">sample_vendor_nda.pdf</div><div class="hint" style="margin:0">Globex Corp ⇄ Acme Inc. · 9 pages</div></div>${r.phase==='form'?`<button class="ib sm" data-unfile aria-label="Remove">${IC.x}</button>`:''}</div>`:`<div class="dz">${IC.upload}Drag and drop files here, or<button class="btn sec sm ${!r.file?'pulse':''}" data-file>Use sample_vendor_nda.pdf</button></div>`;
   else if(b.type==='select')h+=`<div class="seg">${b.opts.map(o=>`<button class="${r.ans[b.id]===o?'on':''}" data-ans="${b.id}" data-v="${o}">${o}</button>`).join('')}</div>`;
   else h+=`<input class="inp" data-ansin="${b.id}" value="${esc(r.ans[b.id]||'')}" placeholder="Optional — e.g. vendor is a new SaaS provider">`;
   h+='</div>'});
  if(r.phase==='form'){const ok=!inputs.some(b=>b.type==='upload')||r.file;h+=`<button class="btn pri ${ok?'pulse':''}" data-go ${ok?'':'disabled'} style="width:100%">${IC.play}Run agent</button>`}
  else{
   h+=`<div class="card"><h6>Progress <span class="hint" style="margin:0 0 0 auto;font-weight:400">${r.phase==='done'?'Completed in '+r.secs+'s':'Running…'}</span></h6><div class="lg">${S.blocks.map(b=>{const s=r.st[b.id];return `<div><span class="s ${s==='d'?'d':s==='r'?'r':'w'}">${s==='d'?IC.chk:''}</span>${esc(stepText(b))}<span class="m">${s==='d'?(r.meta[b.id]||''):''}</span></div>`}).join('')}</div></div>`;
   if(r.rows)h+=outHTML();
  }
  return h+'</div>';
 }
 function stepText(b){const t=T[b.type];switch(b.type){
  case'upload':return 'Read '+(S.run.file?'sample_vendor_nda.pdf':'uploaded files');
  case'know':return 'Retrieve '+SOURCES[b.src][0];
  case'prompt':return 'Prompt: '+(b.text||'').slice(0,46)+'…';
  case'resp':return 'Format response ('+b.fmt+')';
  case'branch':return 'Conditional on '+label(b.on);
  case'select':return 'Answer: '+(S.run.ans[b.id]||b.opts[0]);
  default:return t.n+(b.out?' → '+b.out:'');}}
 function hasKn(){return S.blocks.some(b=>b.type==='know')}
 function rowsFor(){let rows=ROWS.slice();const sel=S.blocks.find(b=>b.type==='select');
  if(sel&&(S.run.ans[sel.id]||'High')==='Low')rows=rows.filter(r=>r[3]==='High'||r[3]==='Low');return rows}
 function outHTML(){const r=S.run;const resp=S.blocks.find(b=>b.type==='resp');const fmt=resp?resp.fmt:'Table';const rows=rowsFor().slice(0,r.rows);const kn=hasKn();
  const cite=x=>`<span class="cite">${x[5]}</span>`+(kn?`<span class="cite kn">Playbook</span>`:'');
  let h=`<div class="card"><h6><span class="ico k-out">${IC.resp}</span>${esc(resp?label(resp.show):'Output')}${r.phase==='done'?`<span style="margin-left:auto;display:flex;gap:4px"><button class="btn ghost sm" data-copy>Copy</button><button class="btn sec sm" data-export>Export .docx</button></span>`:''}</h6>`;
  if(!kn)h+=`<div class="warn">${IC.warn}<span>No knowledge source — compared against general market practice, not your firm’s playbook.</span></div>`;
  if(fmt==='Table')h+=`<table><tr><th style="width:24%">Clause</th><th style="width:37%">${kn?'Deviation from playbook':'Observation'}</th><th style="width:14%">Risk</th><th>Suggested edit</th></tr>${rows.map((x,i)=>`<tr class="${i===r.rows-1&&r.phase!=='done'?'in':''}"><td><b style="font-weight:500">${x[0]}</b><div style="margin:4px 0 0 -3px">${cite(x)}</div></td><td>${kn?esc(x[1])+' — <i style="color:var(--mut)">playbook: '+esc(x[2])+'</i>':esc(x[1])}</td><td><span class="risk ${x[3]}">${x[3]}</span></td><td>${esc(x[4])}</td></tr>`).join('')}</table>`;
  else if(fmt==='Memo')h+=`<div class="memo"><h4>Memorandum — Vendor NDA (Globex Corp)</h4>${rows.map(x=>`<p><b>${x[0]}${cite(x)}.</b> ${esc(x[1])}. ${kn?'Our playbook position: '+esc(x[2])+'. ':''}Risk is <b>${x[3].toLowerCase()}</b>; we recommend: ${esc(x[4]).replace(/^./,c=>c.toLowerCase())}.</p>`).join('')}</div>`;
  else h+=`<ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:6px;font-size:13px">${rows.map(x=>`<li><span class="risk ${x[3]}">${x[3]}</span> <b style="font-weight:500">${x[0]}</b>${cite(x)} — ${esc(x[4])}</li>`).join('')}</ul>`;
  if(r.phase==='done'){const hi=rows.filter(x=>x[3]==='High').length;
   if(S.blocks.some(b=>b.type==='branch'))h+=`<div class="note">${IC.branch}Conditional: ${hi} High-risk issue${hi===1?'':'s'} → routed to “Escalate to partner”.</div>`;
   if(S.blocks.some(b=>b.type==='draft'||b.type==='doc'))h+=`<div class="file" style="margin-top:10px"><span class="fic doc">DOC</span><b style="flex:1;font-weight:500">${esc(S.title.replace(/\s+/g,'_'))}_redline.docx</b><span class="hint" style="margin:0">${rows.filter(x=>x[3]!=='Low').length} tracked changes</span></div>`;
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
 function modalHTML(){const m=S.modal;return `<div class="ov" data-ov><div class="modal"><div class="mh"><h3>${S.pub?'Publish update':'Publish agent'}</h3><div class="hint" style="margin:0 0 12px">Published agents appear in your workspace’s Workflows library and can be run by anyone they’re shared with.</div></div>
  <div class="mb"><div class="fl" style="margin-top:0">Name</div><input class="inp" value="${esc(S.title)}" readonly>
  <div class="fl">Shared with</div>${[['me','Just me','Keep as a private agent'],['grp','Commercial practice group','38 people'],['firm','Entire workspace','All Acme Legal users']].map(o=>`<button class="opt ${m.who===o[0]?'on':''}" data-who="${o[0]}"><span class="rad"></span><span>${o[1]}<small>${o[2]}</small></span></button>`).join('')}</div>
  <div class="mf"><button class="btn sec" data-cancel>Cancel</button><button class="btn pri pulse" data-confirm>Publish</button></div></div></div>`}
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
  else toast(T[type].n+' step added');
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
  if(el.tagName!=='BUTTON'&&d.blk){if(S.mode!=='build')return;S.sel=d.blk;S.menu=null;S.ctxMenu=false;const b=byId(d.blk);if(b&&S.g.kn&&!S.g.cfg&&b.type==='prompt'){S.g.cfg=1;later(()=>{S.justCtx=null},2500)}renderBody();return}
  if(el.tagName!=='BUTTON')return;
  if(d.reset!==undefined){reset();toast('Demo reset');return}
  if(d.nav){toast(d.nav==='back'?'Agents list isn’t part of this demo':'More agent actions aren’t part of this demo');return}
  if(d.zoom!==undefined){const z=+d.zoom;S.zoom=z===0?1:Math.max(.6,Math.min(1.2,+(S.zoom+z*.1).toFixed(2)));const c=body.querySelector('.chain');if(c)c.style.transform=`scale(${S.zoom})`;return}
  if(d.add){addBlock(d.add);return}
  if(d.desel!==undefined){S.sel=null;renderBody();return}
  if(d.addmenu!==undefined){toast('Pick a step from the panel on the left (or drag one in)');const p=body.querySelector('.pal');p&&p.animate&&p.animate([{background:'hsl(220 13% 95%)'},{background:'#fff'}],{duration:900});return}
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
  if(d.confirm!==undefined){const w={me:'you',grp:'the Commercial practice group',firm:'everyone at Acme Legal'}[S.modal.who];S.modal=null;S.pub=(S.pub||0)+1;S.g.pub=1;render();toast('Published v'+S.pub+' — available to '+w);return}
 }
 function onInput(e){const t=e.target;
  if(t.classList.contains('ttl')){S.title=t.value||'Untitled agent';return}
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
