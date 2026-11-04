/* Harvey Agent Builder (text-based, 2026) — vanilla re-implementation for a portfolio demo.
   Describe an agent in plain language, refine it in chat, test, publish, share and schedule.
   All data is fake; nothing leaves the page. */
(function(){
window.DEMOS=window.DEMOS||{};
var P='.demo-agent-builder';
var CSS=`
${P}{--fg:hsl(40 6% 10%);--sub:hsl(36 5% 40%);--mut:hsl(38 4% 50%);--dis:hsl(38 5% 71%);--bgs:hsl(40 16% 96%);--bgsh:hsl(36 15% 94%);--bgp:hsl(34 11% 88%);--bd:hsl(36 15% 94%);--bds:hsl(34 11% 88%);--n3:hsl(40 6% 81%);--hov:hsla(40,100%,10%,.04);--prs:hsla(40,100%,10%,.08);--blue:hsl(220 79% 48%);--grn:hsl(155 53% 39%);--red:hsl(356 67% 46%);
--e1:0 1px 8px 0 rgba(0,0,0,.04),0 0 0 1px hsla(40,6%,10%,.08);--e2:0 4px 12px 0 rgba(0,0,0,.04),0 0 0 1px hsla(40,6%,10%,.08);--e3:0 8px 20px 0 rgba(0,0,0,.12),0 0 0 1px hsla(40,6%,10%,.1);--e4:0 16px 32px 0 rgba(0,0,0,.2),0 0 0 1px hsla(40,6%,10%,.12);
font:14px/20px Diatype,Inter,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:var(--fg);background:var(--bgs);display:flex;height:100%;-webkit-font-smoothing:antialiased;position:relative}
${P} *{box-sizing:border-box}
${P} button{font:inherit;color:inherit;cursor:pointer;background:none;border:0;padding:0}
${P} input,${P} textarea,${P} select{font:inherit;color:inherit}
${P} svg{width:16px;height:16px;flex:none;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
${P} .serif{font-family:HarveySerif,Georgia,'Times New Roman',serif;font-weight:400;letter-spacing:-.015em}
/* sidebar */
${P} .sb{width:216px;flex:none;display:flex;flex-direction:column;padding:20px 12px 12px;transition:width .2s}
${P} .sbh{height:32px;display:flex;align-items:center;justify-content:space-between;padding:0 8px;margin-bottom:16px}
${P} .wm{font:400 23px/1 HarveySerif,Georgia,'Times New Roman',serif;letter-spacing:-.02em}
${P} .ni{display:flex;align-items:center;gap:10px;height:36px;padding:0 10px;border-radius:6px;white-space:nowrap;width:100%;text-align:left;cursor:default}
${P} .ni:hover{background:var(--hov)}${P} .ni.on{background:hsla(40,100%,10%,.06)}
${P} button.ni{cursor:pointer}
${P} .ni svg{color:var(--sub)}
${P} .sbl{font-size:12px;color:var(--mut);padding:16px 10px 4px}
${P} .rc{height:30px;display:flex;align-items:center;padding:0 10px;border-radius:6px;font-size:13px;color:var(--sub);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;text-align:left}
${P} .rc:hover{background:var(--hov)}
${P} .me{margin-top:auto;display:flex;align-items:center;gap:10px;height:44px;padding:0 10px;font-size:13px;font-weight:500;white-space:nowrap}
${P} .me small{display:block;font-size:12px;line-height:16px;color:var(--mut);font-weight:400}
${P} .av{width:24px;height:24px;border-radius:6px;background:var(--fg);color:var(--bgs);display:grid;place-items:center;font:500 11px/1 Georgia,serif;flex:none}
${P} .sb.rail{width:56px;padding:16px 8px 12px}${P} .sb.rail .sbh{padding:0;justify-content:center}${P} .sb.rail .wm{font-size:20px}
${P} .sb.rail .ni{justify-content:center;padding:0}${P} .sb.rail .ni span,${P} .sb.rail .sbl,${P} .sb.rail .rc,${P} .sb.rail .me div{display:none}${P} .sb.rail .me{padding:0;justify-content:center}
/* card */
${P} .card{flex:1;min-width:0;margin:10px 10px 10px 4px;background:#fff;border-radius:12px;box-shadow:var(--e1);display:flex;flex-direction:column;overflow:hidden;position:relative}
${P} .hdr{height:52px;flex:none;display:flex;align-items:center;gap:8px;padding:0 12px 0 16px;border-bottom:1px solid var(--bd)}
${P} .sp{flex:1}
${P} .btn{height:32px;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:0 12px;border-radius:8px;font-size:14px;font-weight:500;white-space:nowrap;transition:background .15s,opacity .15s}
${P} .btn.sm{height:28px;padding:0 10px;font-size:13px;border-radius:6px}
${P} .btn.sec{background:#fff;border:1px solid var(--bds);box-shadow:0 1px 2px rgba(0,0,0,.03)}${P} .btn.sec:hover{background:var(--bgs)}
${P} .btn.ghost:hover{background:var(--hov)}
${P} .btn.pri{background:var(--fg);color:var(--bgs)}${P} .btn.pri:hover{background:hsl(43 7% 19%)}
${P} .btn[disabled]{opacity:.4;cursor:default;pointer-events:none}
${P} .btn svg{color:currentColor}${P} .btn.sec svg{color:var(--sub)}
${P} .ib{width:32px;height:32px;display:inline-grid;place-items:center;border-radius:8px;color:var(--sub)}${P} .ib:hover{background:var(--hov);color:var(--fg)}
${P} .ib.sm{width:26px;height:26px;border-radius:6px}
${P} .tip{position:relative;display:inline-flex}
${P} .tip[data-tip]:hover::after{content:attr(data-tip);position:absolute;top:calc(100% + 6px);right:0;background:var(--fg);color:#fff;font-size:12px;line-height:16px;padding:5px 8px;border-radius:6px;white-space:nowrap;z-index:40;pointer-events:none}
${P} .badge{display:inline-flex;align-items:center;gap:5px;height:22px;font-size:12px;font-weight:500;border-radius:6px;padding:0 7px;background:var(--bgsh);color:var(--sub);white-space:nowrap}
${P} .badge i{width:6px;height:6px;border-radius:50%;background:var(--mut)}
${P} .badge.pub{background:hsl(140 64% 89%);color:hsl(155 71% 27%)}${P} .badge.pub i{background:var(--grn)}
${P} .badge svg{width:12px;height:12px}
${P} .saved{font-size:12px;color:var(--mut);white-space:nowrap}
${P} .pulse{animation:ab-glow 1.6s infinite}
@keyframes ab-glow{0%,100%{box-shadow:0 0 0 0 hsla(220,79%,48%,.5)}50%{box-shadow:0 0 0 6px hsla(220,79%,48%,0)}}
@keyframes ab-in{from{opacity:0;transform:translateY(6px)}}
@keyframes ab-fade{from{opacity:0}}
@keyframes ab-spin{to{transform:rotate(360deg)}}
/* list */
${P} .pg{flex:1;overflow:auto;padding:28px 40px}
${P} .pgh{display:flex;align-items:center;gap:10px;margin-bottom:18px}
${P} .pgh h1{margin:0;font-size:28px;line-height:34px}
${P} .tabs{display:flex;gap:2px;border-bottom:1px solid var(--bd);margin-bottom:8px}
${P} .tabs span{padding:8px 10px;font-size:14px;color:var(--sub);border-bottom:2px solid transparent;margin-bottom:-1px}
${P} .tabs span.on{color:var(--fg);font-weight:500;border-color:var(--fg)}
${P} .emp{display:flex;flex-direction:column;align-items:center;gap:28px;padding:22px 0 10px;text-align:center}
${P} .mq{width:620px;overflow:hidden;display:flex;flex-direction:column;gap:8px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent);mask-image:linear-gradient(90deg,transparent,#000 15%,#000 85%,transparent)}
${P} .mqr{display:flex;gap:8px;width:max-content;animation:ab-mq 60s linear infinite}
${P} .mqr.r{animation-direction:reverse}
${P} .mqr span{height:32px;display:inline-flex;align-items:center;padding:0 12px;border-radius:999px;background:var(--bgs);font-size:13px;color:var(--sub);white-space:nowrap}
@keyframes ab-mq{to{transform:translateX(-50%)}}
${P} .emp h2{margin:0;font-size:24px;line-height:30px}
${P} .emp p{margin:6px 0 0;color:var(--mut);font-size:14px}
${P} .emp .lnk{font-weight:500;color:var(--fg);text-decoration:underline;text-underline-offset:2px}
${P} table{width:100%;border-collapse:collapse;font-size:13px}
${P} th{text-align:left;font-weight:500;font-size:12px;color:var(--mut);padding:8px 10px;border-bottom:1px solid var(--bd);white-space:nowrap}
${P} td{padding:12px 10px;border-bottom:1px solid var(--bd);vertical-align:middle}
${P} tr.row{cursor:pointer;animation:ab-in .3s}${P} tr.row:hover td{background:var(--bgs)}
${P} .stamp{width:28px;height:28px;border-radius:7px;background:hsl(255 9% 91%);color:hsl(258 66% 57%);display:grid;place-items:center;flex:none}
${P} td small{display:block;color:var(--mut);font-size:12px;line-height:16px;max-width:380px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
/* start */
${P} .st{flex:1;overflow:auto;display:flex;flex-direction:column;align-items:center;padding:36px 40px 24px}
${P} .stw{width:620px;display:flex;flex-direction:column;gap:18px}
${P} .st h1{margin:0;font-size:30px;line-height:36px;text-align:center}
${P} .st .lead{text-align:center;color:var(--mut);margin:-8px 0 6px}
${P} .pbox{border-radius:14px;box-shadow:var(--e2);background:#fff;padding:12px 12px 10px 16px}
${P} .pbox:focus-within{box-shadow:var(--e3)}
${P} .pbox textarea{width:100%;border:0;outline:0;resize:none;height:66px;font-size:15px;line-height:22px;background:none}
${P} .pbox textarea::placeholder{color:var(--mut)}
${P} .pbf{display:flex;align-items:center;gap:6px}
${P} .snd{width:32px;height:32px;border-radius:8px;background:var(--fg);color:#fff;display:grid;place-items:center}
${P} .snd[disabled]{opacity:.25;cursor:default}
${P} .sugs{display:grid;grid-template-columns:1fr 1fr;gap:8px}
${P} .sug{display:flex;gap:10px;align-items:flex-start;text-align:left;padding:10px 12px;border-radius:10px;border:1px solid var(--bds);font-size:13px;line-height:18px;color:var(--sub);background:#fff}
${P} .sug:hover{background:var(--bgs);color:var(--fg)}${P} .sug svg{margin-top:1px}
${P} .sa{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:4px}
${P} .sac{display:flex;gap:12px;align-items:center;min-height:60px;border-radius:12px;background:var(--bgs);padding:10px 16px;text-align:left}
${P} .sac:hover{background:var(--bgsh)}
${P} .sac b{font-weight:500;display:block;font-size:14px}${P} .sac small{display:block;color:var(--mut);font-size:12px;line-height:16px}
${P} .sac>span:first-child{width:22px;height:22px;border-radius:5px;background:hsla(40,100%,10%,.06);display:grid;place-items:center}
${P} .or{display:flex;align-items:center;gap:10px;color:var(--mut);font-size:12px}${P} .or::before,${P} .or::after{content:'';flex:1;height:1px;background:var(--bd)}
/* builder */
${P} .bld{flex:1;display:flex;min-height:0}
${P} .doc{flex:1;min-width:0;overflow:auto;position:relative;scroll-behavior:smooth}
${P} .docw{max-width:600px;margin:0 auto;padding:28px 24px 80px;display:flex;flex-direction:column;gap:22px}
${P} .nm{display:flex;align-items:center;gap:6px}
${P} .nm h1{margin:0;font-size:30px;line-height:38px;outline:0;border-radius:6px;min-width:40px}
${P} .nm h1:empty::before{content:'Untitled agent';color:var(--dis)}
${P} .nm h1:focus{background:var(--bgs)}
${P} .ds{width:100%;border:0;outline:0;resize:none;color:var(--sub);background:none;font-size:14px;line-height:20px;padding:4px 6px;margin:-14px 0 0 -6px;border-radius:6px;height:28px;overflow:hidden}
${P} .ds:focus{background:var(--bgs)}${P} .ds::placeholder{color:var(--dis)}
${P} .ds.upd{animation:ab-hl 2s}
@keyframes ab-hl{0%,60%{background:hsl(140 64% 93%)}}
${P} .aut{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--mut);margin-top:-16px}
${P} .cbx{width:14px;height:14px;border-radius:4px;background:var(--fg);color:#fff;display:grid;place-items:center}
${P} .cbx svg{width:10px;height:10px;stroke-width:2.4}${P} .cbx.off{background:#fff;box-shadow:inset 0 0 0 1px var(--mut)}${P} .cbx.off svg{display:none}
${P} .sh{font-size:14px;font-weight:500;display:flex;align-items:center;gap:8px;margin-bottom:8px}
${P} .sh small{font-weight:400;color:var(--mut);font-size:12px}
${P} .ctx{display:flex;flex-wrap:wrap;gap:6px;align-items:center;min-height:32px;position:relative}
${P} .ctx .empt{font-size:13px;color:var(--dis)}
${P} .mc{display:inline-flex;align-items:center;gap:4px;height:22px;padding:0 6px;border-radius:6px;font-size:13px;font-weight:500;line-height:22px;vertical-align:-5px;cursor:pointer;white-space:nowrap;user-select:none;background:var(--bgsh);color:var(--fg);margin:0 1px}
${P} .mc svg{width:13px;height:13px}
${P} .mc.pb svg{color:hsl(258 66% 57%)}${P} .mc.file svg{color:var(--blue)}${P} .mc.ks svg{color:hsl(184 56% 30%)}${P} .mc.rt svg{color:hsl(155 53% 39%)}
${P} .mc:hover{background:var(--bgp)}
${P} .ctx .mc{height:28px;padding:0 9px;border-radius:7px;background:#fff;box-shadow:0 0 0 1px var(--bds);animation:ab-in .3s}
${P} .ctx .mc:hover{background:var(--bgs)}
${P} .ed{position:relative;border-radius:12px;box-shadow:var(--e2);background:#fff}
${P} .tbar{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:2px;padding:6px 8px;background:#fff;border-bottom:1px solid var(--bd);border-radius:12px 12px 0 0;transition:box-shadow .15s,border-radius .15s,margin .15s}
${P} .tbar.fl{box-shadow:var(--e3);border-radius:10px;border-color:transparent;margin:0 10px}
${P} .tbar button{height:28px;min-width:28px;padding:0 6px;border-radius:6px;display:inline-grid;place-items:center;color:var(--sub);font-size:13px;font-weight:500}
${P} .tbar button:hover{background:var(--hov);color:var(--fg)}
${P} .tbar i{width:1px;height:16px;background:var(--bds);margin:0 4px}
${P} .tbar .cnt{margin-left:auto;font-size:12px;color:var(--mut);padding-right:4px}
${P} .ce{min-height:180px;padding:16px 22px 22px;outline:0;font-size:14px;line-height:22px}
${P} .ce:empty::before{content:'Write a set of instructions… Type @ to add files, knowledge sources, playbooks or review tables.';color:var(--dis)}
${P} .ce h3{font-size:15px;font-weight:600;margin:16px 0 4px}${P} .ce h3:first-child{margin-top:0}
${P} .ce p{margin:0 0 6px}${P} .ce ol,${P} .ce ul{margin:0 0 6px;padding-left:22px}${P} .ce li{margin:0 0 4px;padding-left:2px}
${P} .ce .new{background:hsl(140 64% 91%);border-radius:4px;box-shadow:0 0 0 3px hsl(140 64% 91%);transition:background 1.5s,box-shadow 1.5s}
${P} .ce .new.gone{background:transparent;box-shadow:0 0 0 3px transparent}
${P} .ce .cur::after{content:'';display:inline-block;width:7px;height:15px;background:var(--fg);margin-left:2px;vertical-align:-2px;animation:ab-fade .6s infinite alternate}
${P} .gen{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--mut);padding:0 22px 14px}
${P} .spin{width:14px;height:14px;border-radius:50%;border:2px solid var(--bgp);border-top-color:var(--fg);animation:ab-spin .8s linear infinite;flex:none}
/* side panel */
${P} .pn{width:340px;flex:none;border-left:1px solid var(--bd);display:flex;flex-direction:column;min-height:0;background:#fff}
${P} .pnt{height:44px;flex:none;display:flex;align-items:center;gap:2px;padding:0 8px;border-bottom:1px solid var(--bd)}
${P} .pnt button{height:30px;padding:0 10px;border-radius:6px;font-size:13px;color:var(--sub);display:inline-flex;align-items:center;gap:6px}
${P} .pnt button.on{background:var(--prs);color:var(--fg);font-weight:500}
${P} .msgs{flex:1;overflow:auto;padding:14px 16px;display:flex;flex-direction:column;gap:12px}
${P} .m{animation:ab-in .25s;font-size:14px;line-height:21px}
${P} .m.u{align-self:flex-end;max-width:88%;background:var(--bgsh);border-radius:12px 12px 4px 12px;padding:8px 12px}
${P} .m.h p{margin:0 0 6px}
${P} .m .who{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--mut);margin-bottom:4px}
${P} .stp{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--sub);background:var(--bgs);border-radius:10px;padding:10px 12px}
${P} .stp b{font-weight:500;color:var(--fg);font-size:13px}
${P} .stp div{display:flex;gap:8px;align-items:center}
${P} .dot{width:14px;height:14px;border-radius:50%;flex:none;display:grid;place-items:center;color:#fff;background:var(--grn)}
${P} .dot svg{width:9px;height:9px;stroke-width:2.6}${P} .dot.w{background:none;box-shadow:inset 0 0 0 1px var(--n3)}
${P} .vc{display:flex;align-items:center;justify-content:space-between;gap:8px;border:1px solid var(--bds);border-radius:10px;padding:10px 12px 10px 14px;font-size:14px;font-weight:500;animation:ab-in .3s}
${P} .vc small{display:block;font-weight:400;color:var(--mut);font-size:12px;line-height:16px}
${P} .chips{display:flex;flex-direction:column;gap:6px;align-items:flex-start}
${P} .cs{border:1px solid var(--bds);border-radius:999px;padding:5px 12px;font-size:13px;line-height:18px;text-align:left;background:#fff}
${P} .cs:hover{background:var(--bgs)}
${P} .cmp{flex:none;padding:10px 12px 12px}
${P} .cmpb{border-radius:12px;box-shadow:var(--e2);padding:8px 8px 8px 12px;display:flex;align-items:flex-end;gap:6px}
${P} .cmpb:focus-within{box-shadow:var(--e3)}
${P} .cmpb textarea{flex:1;border:0;outline:0;resize:none;height:40px;font-size:14px;line-height:20px;background:none}
${P} .cmpb .snd{width:28px;height:28px;border-radius:7px}
${P} .fchip{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;background:var(--bgs);font-size:13px;width:100%;text-align:left}
${P} button.fchip:hover{background:var(--bgsh)}
${P} .fchip small{display:block;color:var(--mut);font-size:12px;line-height:16px}
${P} .fic{width:22px;height:26px;border-radius:4px;color:#fff;font:700 7px/26px system-ui;text-align:center;flex:none;background:var(--red)}
${P} .fic.docx{background:var(--blue)}${P} .fic.xlsx{background:hsl(150 60% 32%)}${P} .fic.json{background:var(--sub)}
${P} .outs{display:flex;flex-direction:column;gap:6px;margin-top:8px}
${P} .rl{display:flex;flex-direction:column;gap:7px;font-size:13px}
${P} .rl div{display:flex;gap:8px;align-items:center;animation:ab-in .25s}
${P} .rl div em{font-style:normal;color:var(--mut);margin-left:auto;font-size:12px}
${P} .rl .esc{color:hsl(16 85% 39%)}
${P} .lbl{font-size:12px;color:var(--mut);margin:4px 0 -4px}
/* menus, modals, toasts */
${P} .mn{position:absolute;background:#fff;border-radius:10px;box-shadow:var(--e3);padding:4px;z-index:35;min-width:220px;animation:ab-fade .12s}
${P} .mn h6{margin:0;padding:8px 8px 2px;font-size:11px;font-weight:500;color:var(--mut);text-transform:none}
${P} .mn button{display:flex;align-items:center;gap:8px;width:100%;text-align:left;height:32px;padding:0 8px;border-radius:6px;font-size:13px;white-space:nowrap}
${P} .mn button:hover,${P} .mn button.act{background:var(--hov)}
${P} .mn button small{margin-left:auto;color:var(--mut);font-size:11px}
${P} .mn hr{border:0;border-top:1px solid var(--bd);margin:4px 0}
${P} .ov{position:absolute;inset:0;background:rgba(0,0,0,.28);display:flex;align-items:center;justify-content:center;z-index:50;animation:ab-fade .15s}
${P} .md{width:480px;max-height:620px;background:#fff;border-radius:14px;box-shadow:var(--e4);display:flex;flex-direction:column;animation:ab-in .18s}
${P} .md.w{width:860px}
${P} .mdh{display:flex;align-items:center;gap:8px;padding:16px 16px 6px 22px}
${P} .mdh b{font-size:18px;line-height:26px;font-weight:500;flex:1}
${P} .mdb{padding:8px 22px 16px;overflow:auto;font-size:14px;color:var(--sub)}
${P} .mdb p{margin:0 0 10px}
${P} .mdf{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid var(--bd)}
${P} .flb{font-size:13px;font-weight:500;color:var(--fg);margin:14px 0 6px;display:block}
${P} .inp{width:100%;height:34px;background:var(--bgs);border:1px solid transparent;border-radius:8px;padding:0 10px;outline:0;font-size:14px}
${P} .inp:focus{border-color:var(--bds);background:#fff}
${P} select.inp{appearance:auto}
${P} .row2{display:flex;gap:8px}
${P} .days{display:flex;gap:6px}
${P} .days button{width:36px;height:32px;border-radius:8px;border:1px solid var(--bds);font-size:12px;font-weight:500}
${P} .days button.on{background:var(--fg);color:#fff;border-color:var(--fg)}
${P} .note{display:flex;gap:8px;align-items:flex-start;font-size:12px;line-height:16px;padding:8px 10px;border-radius:8px;background:var(--bgs);color:var(--sub);margin-top:14px}
${P} .note.warn{background:hsl(45 77% 92%);color:hsl(29 78% 30%)}
${P} .ppl{display:flex;flex-direction:column;margin-top:6px}
${P} .pr{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--bd);color:var(--fg);animation:ab-in .2s}
${P} .pr div{flex:1;min-width:0}${P} .pr small{display:block;color:var(--mut);font-size:12px;line-height:16px}
${P} .pr select{height:30px;border:1px solid var(--bds);border-radius:6px;font-size:13px;padding:0 6px;background:#fff}
${P} .pr .av{width:28px;height:28px;border-radius:50%;font-family:inherit;font-size:11px}
${P} .gav{background:hsl(198 48% 89%);color:hsl(201 46% 33%)}
${P} .diff{display:grid;grid-template-columns:1fr 1fr;gap:16px}
${P} .diff>div{background:var(--bgs);border-radius:10px;padding:14px 16px;font-size:13px;line-height:20px;color:var(--fg)}
${P} .diff h5{margin:0 0 8px;font-size:12px;font-weight:500;color:var(--mut)}
${P} .diff h3{font-size:13px;margin:10px 0 2px}
${P} .diff p,${P} .diff li{margin:0 0 4px}${P} .diff ol,${P} .diff ul{margin:0;padding-left:18px}
${P} del{background:hsl(352 83% 93%);color:var(--red);text-decoration:line-through}
${P} ins{background:hsl(140 64% 89%);color:hsl(155 71% 24%);text-decoration:none}
${P} .page{background:#fff;border-radius:4px;box-shadow:var(--e2);padding:28px 34px;font:13px/1.65 HarveySerif,Georgia,serif;color:var(--fg)}
${P} .page h4{text-align:center;font-size:15px;margin:0 0 14px}
${P} .cmt{float:right;width:150px;margin:0 -20px 6px 12px;font:11px/15px system-ui,sans-serif;background:hsl(45 77% 92%);border-left:3px solid hsl(40 80% 55%);padding:6px 8px;border-radius:4px}
${P} .grid{width:100%;border-collapse:collapse;font-size:12px}
${P} .grid td,${P} .grid th{border:1px solid var(--bds);padding:5px 7px;color:var(--fg);vertical-align:top}
${P} .grid th{background:hsl(150 30% 94%);font-weight:600;font-size:11px}
${P} .rk{font-weight:600;font-size:11px}${P} .rk.H{color:var(--red)}${P} .rk.M{color:hsl(29 78% 34%)}${P} .rk.L{color:var(--grn)}
${P} .toast{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);background:var(--fg);color:#fff;border-radius:10px;padding:9px 14px;font-size:13px;display:flex;gap:8px;align-items:center;z-index:60;box-shadow:var(--e4);animation:ab-in .2s;white-space:nowrap}
${P} .toast svg{color:hsl(140 60% 70%)}
`;
function sv(p){return '<svg viewBox="0 0 16 16">'+p+'</svg>'}
var I={
 asst:sv('<path d="M8 2.2l1.4 3.6 3.6 1.4-3.6 1.4L8 12.2 6.6 8.6 3 7.2l3.6-1.4z"/><path d="M12.5 11.5l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z"/>'),
 bot:sv('<rect x="3" y="5" width="10" height="8" rx="2"/><path d="M8 2.5V5M6 9h.01M10 9h.01M1.5 9v1.5M14.5 9v1.5"/>'),
 vault:sv('<rect x="2" y="3" width="12" height="10.5" rx="2"/><path d="M2 6.5h12M6.5 9h3"/>'),
 lib:sv('<path d="M3 2.5v11M6 2.5v11M9 3l3.5 10.3"/>'),
 side:sv('<rect x="2" y="2.5" width="12" height="11" rx="2"/><path d="M6 2.5v11"/>'),
 plus:sv('<path d="M8 3v10M3 8h10"/>'),
 x:sv('<path d="M4 4l8 8M12 4l-8 8"/>'),
 chk:sv('<path d="M3.5 8.5l3 3 6-7"/>'),
 back:sv('<path d="M13 8H3M7 4 3 8l4 4"/>'),
 hist:sv('<path d="M2.5 8a5.5 5.5 0 1 0 1.7-4"/><path d="M2.5 2.5v2.5H5M8 5v3l2 1.3"/>'),
 more:sv('<path d="M3.5 8h.01M8 8h.01M12.5 8h.01" stroke-width="2.4"/>'),
 play:sv('<path d="M5 3.5v9l7-4.5z"/>'),
 share:sv('<path d="M8 2v8M5 4.5 8 2l3 2.5"/><path d="M4 7.5H3.5v6h9v-6H12"/>'),
 up:sv('<path d="M8 13V3M4 7l4-4 4 4"/>'),
 clock:sv('<circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.3"/>'),
 pen:sv('<path d="M10.5 3 13 5.5 6 12.5H3.5V10z"/>'),
 at:sv('<circle cx="8" cy="8" r="2.5"/><path d="M10.5 8v1a1.8 1.8 0 0 0 3.5 0V8a6 6 0 1 0-2.4 4.8"/>'),
 file:sv('<path d="M9 2H4.5A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5V6z"/><path d="M9 2v4h4"/>'),
 book:sv('<path d="M3 3.5A1.5 1.5 0 0 1 4.5 2H13v10H4.5A1.5 1.5 0 0 0 3 13.5zM3 13.5A1.5 1.5 0 0 0 4.5 15H13v-3"/>'),
 db:sv('<ellipse cx="8" cy="4" rx="5" ry="2"/><path d="M3 4v8c0 1.1 2.2 2 5 2s5-.9 5-2V4M3 8c0 1.1 2.2 2 5 2s5-.9 5-2"/>'),
 tbl:sv('<rect x="2" y="2.5" width="12" height="11" rx="1.5"/><path d="M2 6h12M6 6v7.5"/>'),
 ul:sv('<path d="M6 4h8M6 8h8M6 12h8M2.5 4h.01M2.5 8h.01M2.5 12h.01" />'),
 ol:sv('<path d="M7 4h7M7 8h7M7 12h7M2.5 3l1-.5V6M2.3 9.5c.3-.6 1.8-.6 1.8.3 0 .7-1.8 1.5-1.8 2.2h1.9"/>'),
 undo:sv('<path d="M5 6.5H10a3 3 0 0 1 0 6H6"/><path d="M7 4 4.5 6.5 7 9"/>'),
 down:sv('<path d="M8 3v8M4.5 7.5 8 11l3.5-3.5M3 13.5h10"/>'),
 upl:sv('<path d="M8 11V3M4.5 6.5 8 3l3.5 3.5M3 13.5h10"/>'),
 copy:sv('<rect x="5" y="5" width="8.5" height="8.5" rx="1.5"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5"/>'),
 rep:sv('<path d="M2.5 8a5.5 5.5 0 1 0 1.6-3.9"/><path d="M2.5 2.5V5H5"/>'),
 globe:sv('<circle cx="8" cy="8" r="5.5"/><path d="M2.5 8h11M8 2.5c1.6 1.6 2.3 3.5 2.3 5.5S9.6 11.9 8 13.5C6.4 11.9 5.7 10 5.7 8S6.4 4.1 8 2.5"/>'),
 flag:sv('<path d="M3.5 14V2.5M3.5 3h8l-1.5 3 1.5 3h-8"/>')
};
var KI={pb:I.book,file:I.file,ks:I.db,rt:I.tbl};
var SRC=[
 {g:'Files',k:'file',n:'Acme_NDA_Template.docx'},{g:'Files',k:'file',n:'sample_vendor_nda.pdf'},
 {g:'Knowledge sources',k:'ks',n:'Acme Clause Bank'},{g:'Knowledge sources',k:'ks',n:'Commercial Precedents'},
 {g:'Playbooks',k:'pb',n:'Acme NDA Playbook'},
 {g:'Review tables',k:'rt',n:'Project Falcon — NDA review'}
];
var PROMPTS=[['Identify Legal Red Flags in CIM','Conduct Diligence on Corporate Consents','Prepare NDA Markup','Draft Term Sheet','Analyze Transition Services Agreement Markup (TSA)'],
 ['Analyze Counterparty Markup of Supply Agreement','Compare VDR to Due Diligence Request List','Prepare Due Diligence Request List','Analyze Term Sheet Markup'],
 ['Prepare Diligence Tracker by Workstream','Identify Missing Corporate Records','Research Merits of Pending Litigation and Claims','Analyze Change of Control Provisions']];
var SUGS=[
 {t:'Review vendor NDAs against our playbook and produce a redline and an issues memo',k:'nda'},
 {t:'Create an agent to mark up agreements against my standard positions',k:'markup',n:'Agreement Markup'},
 {t:'Create an agent to draft documents from my templates and playbooks',k:'draft',n:'Template Drafting'},
 {t:'Create an agent to analyze and extract key data from a provided document',k:'extract',n:'Key Data Extraction'}];
var NDA={name:'Vendor NDA Review',
 desc:'Reviews incoming vendor NDAs against the Acme NDA Playbook and returns a Word redline and an Excel issues list.',
 ctx:[['pb','Acme NDA Playbook'],['file','Acme_NDA_Template.docx']],
 outs:['Vendor_NDA_Redline.docx','NDA_Issues_List.xlsx'],
 blocks:[['h','Goal'],['p','Review an incoming vendor NDA against {pb|Acme NDA Playbook} and return a redline and an issues list the business team can act on.'],
 ['h','Steps'],
 ['n','Read the uploaded NDA and identify the parties, term, governing law and the definition of Confidential Information.'],
 ['n','Compare each clause to {pb|Acme NDA Playbook}. Flag any clause that departs from the preferred or fallback position.'],
 ['n','For each issue, propose replacement language from {file|Acme_NDA_Template.docx} and explain the risk in one sentence.'],
 ['n','Treat residuals clauses, non-solicits and perpetual confidentiality terms as High risk.'],
 ['h','Output'],
 ['b','A Word redline of the NDA with tracked changes and short margin comments.'],
 ['b','An Excel issues list with columns: Clause, Issue, Risk, Proposed language, Playbook reference.']]};
function genTpl(prompt,name){return {name:name||'Custom Review Agent',
 desc:'Runs the following on uploaded documents: '+prompt.replace(/^create an agent (to|that) /i,'').replace(/\.$/,'')+'.',
 ctx:[['pb','Acme NDA Playbook'],['ks','Acme Clause Bank']],outs:['Findings_Memo.docx','Findings.xlsx'],
 blocks:[['h','Goal'],['p',(function(g){return g.charAt(0).toUpperCase()+g.slice(1)})(prompt.replace(/^create an agent (to|that) /i,'').replace(/\.$/,''))+'.'],['h','Steps'],
 ['n','Read the uploaded documents and identify the parties, dates and key commercial terms.'],
 ['n','Compare the terms to {pb|Acme NDA Playbook} and {ks|Acme Clause Bank}; flag every deviation.'],
 ['n','Cite the clause and page for every finding.'],['h','Output'],
 ['b','A Word memo summarizing the findings, most important first.'],['b','An Excel table with one row per finding.']]}}
var ESC_STEP='If the NDA contains uncapped liability or an uncapped indemnity, stop and escalate to the General Counsel with a two-line summary before anything goes back to the vendor.';

window.DEMOS['agent-builder']={frame:'browser',title:'Harvey — Agent Builder',url:'app.harvey.ai/agents/new',
 caption:'Describe an agent in plain language, refine it in chat like you’d brief an associate, then test, publish, share and schedule it. Type @ in the instructions to add context.',
 sources:['https://www.harvey.ai/blog/introducing-harvey-ii','https://help.harvey.ai/release-notes/category/agents','https://x.com/harvey'],
 mount:function(root){
 var st=document.createElement('style');st.textContent=CSS;root.appendChild(st);
 var host=document.createElement('div');host.style.cssText='display:contents';root.appendChild(host);
 var timers=new Set(),S,tt;
 function later(f,ms){var t=setTimeout(function(){timers.delete(t);f()},ms);timers.add(t);return t}
 function clearT(){timers.forEach(clearTimeout);timers.clear()}
 function $(s){return host.querySelector(s)}
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
 function chip(k,n){return '<span class="mc '+k+'" contenteditable="false" data-a="prev" data-f="'+esc(n)+'" data-k="'+k+'">'+KI[k]+esc(n)+'</span>'}
 function inl(x){return esc(x).replace(/\{(\w+)\|([^}]+)\}/g,function(_,k,n){return chip(k,n)})}
 function slug(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
 function fresh(){return {view:'list',agent:false,name:'',desc:'',ctx:[],blocks:[],outs:[],v:0,pubV:0,dirty:false,vers:[],chat:[],panel:'chat',run:null,esc:false,
  sched:null,share:[{n:'You',s:'Owner',a:'Full access',me:1}],modal:null,menu:null,busy:false,startText:'',tpl:null,g:{}}}
 function reset(){clearT();S=fresh();render()}
 function toast(msg){var t=$('.toast');if(t)t.remove();clearTimeout(tt);var d=document.createElement('div');d.className='toast';d.innerHTML=I.chk+esc(msg);host.appendChild(d);tt=setTimeout(function(){d.remove()},2600)}

 /* ---------- shell ---------- */
 function sidebar(rail){
  return '<aside class="sb'+(rail?' rail':'')+'"><div class="sbh"><span class="wm">'+(rail?'H':'Harvey')+'</span>'+(rail?'':'<span class="ib sm">'+I.side+'</span>')+'</div>'+
  '<div class="ni">'+I.asst+'<span>Assistant</span></div><button class="ni on" data-a="list">'+I.bot+'<span>Agents</span></button><div class="ni">'+I.vault+'<span>Vault</span></div><div class="ni">'+I.lib+'<span>Library</span></div>'+
  '<div class="sbl">Recents</div>'+(S.agent?'<button class="rc" data-a="open">'+esc(S.name||'Untitled agent')+'</button>':'')+'<div class="rc">Project Falcon diligence</div><div class="rc">Globex supply agreement</div>'+
  '<button class="ni" data-a="replay" title="Replay demo" style="margin-top:auto">'+I.rep+'<span>Replay demo</span></button>'+
  '<div class="me" style="margin-top:0"><span class="av">AK</span><div>Alex Kim<small>Acme Legal</small></div></div></aside>'}
 function render(){
  var v=S.view;
  host.innerHTML=sidebar(v==='build')+'<main class="card">'+(v==='list'?listView():v==='start'?startView():buildView())+'</main><div class="lay"></div>';
  if(v==='build')afterBuild();
  if(v==='start'){var ta=$('.pbox textarea');ta.value=S.startText;syncSend()}
  renderModal();hint();
 }
 function listView(){
  var rows=S.agent?'<table><tr><th>Name</th><th>Status</th><th>Owner</th><th>Last updated</th></tr><tr class="row" data-a="open"><td><div style="display:flex;gap:10px;align-items:center"><span class="stamp">'+I.bot+'</span><div><b style="font-weight:500">'+esc(S.name||'Untitled agent')+'</b><small>'+esc(S.desc||'No description')+'</small></div></div></td><td>'+status()+(S.sched?' <span class="badge">'+I.clock+'Scheduled</span>':'')+'</td><td>You</td><td style="color:var(--mut)">Just now</td></tr></table>'
  :'<div class="emp"><div class="mq">'+PROMPTS.map(function(r,i){var it=r.concat(r).map(function(x){return '<span>'+esc(x)+'</span>'}).join('');return '<div class="mqr'+(i%2?' r':'')+'" style="animation-delay:-'+(i*13)+'s">'+it+'</div>'}).join('')+'</div>'+
   '<div><h2 class="serif">No agents yet</h2><p>Create your first agent to automate recurring legal work</p></div>'+
   '<div style="display:flex;flex-direction:column;align-items:center;gap:14px"><button class="btn pri" data-a="create" id="ab-add">'+I.plus+'Add agent</button><p style="margin:0">or <button class="lnk" data-a="import">import an existing skill</button></p></div></div>';
  return '<div class="pg"><div class="pgh"><h1 class="serif">Agents</h1><span class="sp"></span><button class="btn sec" data-a="import">'+I.upl+'Import</button><button class="btn pri" data-a="create">'+I.plus+'Create agent</button></div>'+
  '<div class="tabs"><span class="on">All agents</span><span>Created by you</span><span>Shared with you</span><span>Scheduled</span></div>'+rows+'</div>'}
 function status(){return S.pubV?'<span class="badge pub"><i></i>Published</span>':'<span class="badge"><i></i>Draft</span>'}
 function startView(){
  return '<div class="hdr"><button class="ib" data-a="list" title="Back to Agents">'+I.back+'</button><span style="color:var(--sub)">Agents</span><span style="color:var(--dis)">/</span><b style="font-weight:500">Build an agent</b></div>'+
  '<div class="st"><div class="stw"><h1 class="serif">Build an agent</h1><p class="lead">Describe what you would like your agent to do, and I’ll build it for you.</p>'+
  '<div class="pbox"><textarea placeholder="Describe the agent you want" data-i="start"></textarea><div class="pbf"><button class="ib sm" title="Add files">'+I.plus+'</button><span style="font-size:12px;color:var(--mut)">Delivers work product in Word, Excel and PowerPoint</span><span class="sp"></span><button class="snd" data-a="go" disabled>'+I.up+'</button></div></div>'+
  '<div class="sugs">'+SUGS.map(function(s,i){return '<button class="sug" data-a="sug" data-i="'+i+'">'+I.asst+'<span>'+esc(s.t)+'</span></button>'}).join('')+'</div>'+
  '<div class="or">or</div><div class="sa"><button class="sac" data-a="import"><span>'+I.upl+'</span><span><b>Import a skill</b><small>Upload instructions or skills from another tool</small></span></button><button class="sac" data-a="scratch"><span>'+I.plus+'</span><span><b>Start from scratch</b><small>Write instructions and add context yourself</small></span></button></div></div></div>'}
 function syncSend(){var ta=$('.pbox textarea'),b=$('[data-a="go"]');if(ta&&b)b.disabled=!ta.value.trim();hint()}

 /* ---------- builder ---------- */
 function buildView(){
  return '<div class="hdr" id="ab-top"></div><div class="bld"><div class="doc"><div class="docw">'+
  '<div><div class="nm"><h1 class="serif" contenteditable="true" spellcheck="false" data-i="name">'+esc(S.name)+'</h1><button class="ib sm" data-a="pen" title="Edit agent details">'+I.pen+'</button></div></div>'+
  '<textarea class="ds" data-i="desc" placeholder="Add description">'+esc(S.desc)+'</textarea>'+
  '<div class="aut"><span class="cbx">'+I.chk+'</span>Update description automatically on save</div>'+
  '<div><div class="sh">Context <small>Files, knowledge sources, playbooks and review tables the agent can use</small></div><div class="ctx" id="ab-ctx"></div></div>'+
  '<div><div class="sh">Instructions</div><div class="ed"><div class="tbar"><button data-c="bold" title="Bold"><b>B</b></button><button data-c="italic" title="Italic"><i style="font-family:Georgia">I</i></button><button data-c="h" title="Heading">H</button><i></i><button data-c="insertUnorderedList" title="Bulleted list">'+I.ul+'</button><button data-c="insertOrderedList" title="Numbered list">'+I.ol+'</button><i></i><button data-c="at" title="Mention a file or source">'+I.at+'</button><button data-c="undo" title="Undo">'+I.undo+'</button><span class="cnt"></span></div>'+
  '<div class="ce" contenteditable="true" spellcheck="false" data-i="ce"></div><div class="gen" style="display:none"><span class="spin"></span>Generating instructions…</div></div></div>'+
  '</div></div><div class="pn"></div></div>'}
 function afterBuild(){
  renderTop();renderCtx();renderPanel();grow();
  var ce=$('.ce');if(S.blocks.length&&!S.busy)ce.innerHTML=blocksHTML(S.blocks);count();
  var doc=$('.doc');doc.addEventListener('scroll',onDocScroll);
 }
 function onDocScroll(){var doc=$('.doc');if(!doc)return;var dr=doc.getBoundingClientRect(),h=$('.nm h1').getBoundingClientRect(),ed=$('.ed').getBoundingClientRect();
  var c=h.bottom<dr.top+4;var tn=$('#ab-tn');if(tn){tn.style.opacity=c?1:0;tn.style.transform=c?'none':'translateY(6px)'}
  $('.tbar').classList.toggle('fl',ed.top<dr.top-1)}
 function renderTop(){
  var t=$('#ab-top');if(!t)return;var empty=!hasText(),live=S.pubV&&S.pubV===S.v&&!S.dirty;
  var pt=empty?'Empty instructions':live?'Latest draft published':S.busy?'Harvey is working on your agent…':'';
  t.innerHTML='<button class="ib" data-a="list" title="Back to Agents">'+I.back+'</button><span style="color:var(--sub)">Agents</span>'+
  '<b id="ab-tn" style="font-weight:500;opacity:0;transform:translateY(6px);transition:.2s;white-space:nowrap;max-width:220px;overflow:hidden;text-overflow:ellipsis"><span style="color:var(--dis);font-weight:400;margin-right:8px">/</span><span class="tnn">'+esc(S.name||'Untitled agent')+'</span></b>'+
  status()+(S.sched?'<span class="badge" title="'+esc(schedText())+'">'+I.clock+'Scheduled</span>':'')+
  '<span class="saved">'+(S.dirty?'Not saved':S.v?'Draft saved just now':'')+'</span><span class="sp"></span>'+
  '<button class="ib" data-a="hist" title="Compare agent versions"'+(S.vers.length<2?' disabled style="opacity:.35"':'')+'>'+I.hist+'</button><button class="ib" data-a="more" title="More agent actions">'+I.more+'</button>'+
  '<button class="btn sec sm" data-a="test" '+(empty||S.busy?'disabled':'')+'>'+I.play+'Test</button>'+
  '<button class="btn sec sm" data-a="save" '+(S.dirty?'':'disabled')+'>Save</button>'+
  '<button class="btn sec sm" data-a="share" '+(S.v?'':'disabled')+'>'+I.share+'Share</button>'+
  '<span class="tip"'+(pt?' data-tip="'+pt+'"':'')+'><button class="btn pri sm" data-a="publish" '+(pt?'disabled':'')+'>'+(S.pubV?'Publish changes':'Publish')+'</button></span>';
  if($('.doc'))onDocScroll();hint()}
 function renderCtx(){var c=$('#ab-ctx');if(!c)return;
  c.innerHTML=S.ctx.map(function(x){return chip(x[0],x[1])}).join('')+(S.ctx.length?'':'<span class="empt">No context yet</span>')+'<button class="btn ghost sm" data-a="ctxadd" style="color:var(--sub)">'+I.plus+'Add</button>'}
 function grow(){var d=$('.ds');if(d){d.style.height='auto';d.style.height=d.scrollHeight+'px'}}
 function hasText(){var ce=$('.ce');return ce?ce.textContent.trim().length>0:S.blocks.length>0}
 function count(){var ce=$('.ce'),c=$('.tbar .cnt');if(ce&&c){var n=ce.textContent.trim().length;c.textContent=n?n.toLocaleString()+' characters':''}}
 function blocksHTML(bl,hl,cur){var h='',lt=null;bl.forEach(function(b,i){var t=b[0];var want=t==='n'?'ol':t==='b'?'ul':null;
   if(lt&&want!==lt){h+='</'+lt+'>';lt=null}if(want&&!lt){h+='<'+want+'>';lt=want}
   var cls=(hl&&hl.indexOf(i)>=0?'new':'')+(cur===i?' cur':'');var a=cls.trim()?' class="'+cls.trim()+'"':'';
   h+=t==='h'?'<h3'+a+'>'+inl(b[1])+'</h3>':t==='p'?'<p'+a+'>'+inl(b[1])+'</p>':'<li'+a+'>'+inl(b[1])+'</li>'});
  if(lt)h+='</'+lt+'>';return h}

 /* ---------- side panel ---------- */
 function renderPanel(){var p=$('.pn');if(!p)return;
  p.innerHTML='<div class="pnt"><button data-a="tab" data-t="chat" class="'+(S.panel==='chat'?'on':'')+'">'+I.asst+'Ask Harvey</button><button data-a="tab" data-t="test" class="'+(S.panel==='test'?'on':'')+'" '+(hasText()?'':'disabled style="opacity:.4"')+'>'+I.play+'Test runs</button></div>'+
  '<div class="msgs"></div>'+(S.panel==='chat'?'<div class="cmp"><div class="cmpb"><textarea data-i="chat" placeholder="Ask Harvey to edit this agent…"></textarea><button class="snd" data-a="send">'+I.up+'</button></div></div>':'');
  renderMsgs()}
 function renderMsgs(){var m=$('.msgs');if(!m)return;
  if(S.panel==='test'){m.innerHTML=testHTML()}else{
  m.innerHTML=(S.chat.length?'':'<div class="m h"><div class="who">'+I.asst+'Harvey</div><p>Describe what you want the agent to do and Harvey will write the instructions here. You can also write them yourself and type <b>@</b> to add context.</p></div>')+S.chat.map(msgHTML).join('')}
  m.scrollTop=1e5;hint()}
 function msgHTML(c){
  if(c.r==='u')return '<div class="m u">'+esc(c.x)+'</div>';
  if(c.r==='steps')return '<div class="m stp"><b>'+esc(c.title)+'</b>'+c.s.map(function(s,i){return '<div>'+(i<c.i?'<span class="dot">'+I.chk+'</span>':i===c.i?'<span class="spin"></span>':'<span class="dot w"></span>')+esc(s)+'</div>'}).join('')+'</div>';
  if(c.r==='card')return '<div class="vc"><span>'+esc(c.x)+'<small>Version '+c.v+'</small></span>'+(c.diff?'<button class="btn sec sm" data-a="diff">View changes</button>':'')+'</div>';
  return '<div class="m h"><div class="who">'+I.asst+'Harvey</div>'+c.x+(c.sugs&&!S.g.refined?'<div class="chips">'+c.sugs.map(function(s){return '<button class="cs" data-a="cs">'+esc(s)+'</button>'}).join('')+'</div>':'')+'</div>'}
 function pushChat(c){S.chat.push(c);renderMsgs();return c}
 function runSteps(title,steps,ms,done){var c=pushChat({r:'steps',title:title,s:steps,i:0});
  (function nx(){later(function(){c.i++;renderMsgs();if(c.i<steps.length)nx();else done()},ms)})()}

 /* ---------- drafting ---------- */
 function startBuild(text,tpl){
  S.view='build';S.agent=true;S.busy=true;S.tpl=tpl;S.name='';S.desc='';S.ctx=[];S.blocks=[];S.outs=tpl.outs;S.chat=[{r:'u',x:text}];render();
  var ce=$('.ce');$('.gen').style.display='flex';
  runSteps('Harvey is working on your agent…',['Understanding the process','Writing instructions','Adding context','Choosing outputs: Word and Excel'],1050,function(){});
  typeInto(tpl.name,function(v){S.name=v;var h=$('.nm h1');if(h)h.textContent=v},28,function(){
   typeInto(tpl.desc,function(v){S.desc=v;var d=$('.ds');if(d){d.value=v;grow()}},9,function(){
    tpl.ctx.forEach(function(x,i){later(function(){S.ctx.push(x);renderCtx()},i*260)});
    streamBlocks(tpl.blocks,function(){
     S.busy=false;$('.gen').style.display='none';S.v=1;S.vers=[{v:1,blocks:S.blocks.slice(),desc:S.desc}];
     pushChat({r:'card',x:'Agent draft saved',v:1});
     later(function(){pushChat({r:'h',x:'<p>I drafted <b>'+esc(S.name)+'</b>. '+(tpl===NDA?'It checks each clause against your playbook, then delivers a Word redline and an Excel issues list.':'It follows your playbook and clause bank, then delivers a Word memo and an Excel table.')+'</p><p>Refine it the way you’d brief an associate. For example:</p>',
      sugs:['Escalate anything with uncapped liability to the GC','Keep the issues list to the 10 most important points']});renderTop();renderPanel()},350);
     renderTop()})})});
 }
 function typeInto(s,set,ms,done){var i=0;(function t(){i=Math.min(s.length,i+2);set(s.slice(0,i));if(i<s.length)later(t,ms);else done()})()}
 function streamBlocks(bl,done){var ce=$('.ce'),bi=0;
  (function nb(){if(bi>=bl.length){ce.innerHTML=blocksHTML(S.blocks);count();done();return}
   var b=bl[bi],toks=b[1].split(/(\{\w+\|[^}]+\}|\s+)/).filter(Boolean),k=0;S.blocks.push([b[0],'']);
   (function tk(){k=Math.min(toks.length,k+3);S.blocks[bi][1]=toks.slice(0,k).join('');var c=$('.ce');if(!c)return;c.innerHTML=blocksHTML(S.blocks,null,bi);count();
    var doc=$('.doc');if(doc&&bi>5)doc.scrollTop=doc.scrollHeight;
    if(k<toks.length)later(tk,32);else{bi++;later(nb,b[0]==='h'?120:70)}})()})();
 }

 /* ---------- refinement ---------- */
 function refine(text){
  if(S.busy||!text.trim())return;S.busy=true;pushChat({r:'u',x:text});renderTop();
  var liab=/liab|indemn|uncap|escalat/i.test(text);
  runSteps('Editing instructions…',['Reading the current instructions','Updating steps','Updating description'],700,function(){
   var prev=S.blocks.slice(),hl=[],lastN=-1;S.blocks.forEach(function(b,i){if(b[0]==='n')lastN=i});
   var nb=S.blocks.slice();
   if(liab&&!S.esc){S.esc=true;nb.splice(lastN+1,0,['n',ESC_STEP]);hl.push(lastN+1);
    var oi=nb.findIndex(function(b){return /Excel/.test(b[1])});if(oi>=0){nb[oi]=[nb[oi][0],nb[oi][1].replace(/\.$/,', Escalated to GC.')];hl.push(oi)}}
   else{var tx=text.trim().replace(/^please\s+/i,'');tx=tx.charAt(0).toUpperCase()+tx.slice(1);if(!/[.!?]$/.test(tx))tx+='.';nb.splice(lastN+1,0,['n',tx]);hl.push(lastN+1)}
   S.blocks=nb;S.v++;S.dirty=false;var ce=$('.ce');ce.innerHTML=blocksHTML(nb,hl);count();
   var el=ce.querySelector('.new');if(el){var doc=$('.doc');doc.scrollTop=Math.max(0,el.offsetTop+$('.ed').offsetTop-140)}
   later(function(){ce.querySelectorAll('.new').forEach(function(e){e.classList.add('gone')})},4200);
   if(liab&&S.desc.indexOf('General Counsel')<0)S.desc=S.desc.replace(/\.$/,'')+', escalating uncapped liability to the General Counsel.';
   var d=$('.ds');if(d){d.value=S.desc;grow();d.classList.remove('upd');void d.offsetWidth;d.classList.add('upd')}
   S.vers.push({v:S.v,blocks:nb.slice(),desc:S.desc,prev:prev});S.busy=false;S.g.refined=1;
   pushChat({r:'card',x:'Agent updated',v:S.v,diff:1});
   later(function(){pushChat({r:'h',x:liab?'<p>Added an escalation step (step '+(nb.slice(0,lastN+2).filter(function(b){return b[0]==='n'}).length)+') and an <b>Escalated to GC</b> column in the issues list. The description was updated to match.</p>':'<p>Added that as a new step. Open <b>View changes</b> to compare versions.</p>'})},250);
   renderTop()})}

 /* ---------- test run ---------- */
 function testHTML(){var r=S.run;
  var h='<div class="m h"><div class="who">'+I.play+'Test agent</div><p style="color:var(--sub);font-size:13px">Runs the current draft privately. Nothing is shared until you publish.</p></div>'+
  '<div class="lbl">Input</div><button class="fchip" data-a="prev" data-f="sample_vendor_nda.pdf" data-k="file"><span class="fic">PDF</span><span>sample_vendor_nda.pdf<small>Globex Corp. mutual NDA · 6 pages</small></span></button>';
  if(!r)return h+'<button class="btn pri" data-a="run" style="width:100%">'+I.play+'Run test</button>';
  var steps=[['Reading sample_vendor_nda.pdf','6 pages'],['Comparing 14 clauses to Acme NDA Playbook','5 issues']];
  if(S.esc)steps.push(['Escalation check: uncapped indemnity in §7','Flagged',1]);
  steps.push(['Drafting redline in Word',''],['Building issues list in Excel','']);
  h+='<div class="lbl">Run</div><div class="rl">'+steps.slice(0,r.i+1).map(function(s,i){var d=i<r.i||r.done;return '<div class="'+(s[2]&&d?'esc':'')+'">'+(d?(s[2]?'<span class="dot" style="background:hsl(16 85% 45%)">'+I.flag+'</span>':'<span class="dot">'+I.chk+'</span>'):'<span class="spin"></span>')+esc(s[0])+(d&&s[1]?'<em>'+s[1]+'</em>':'')+'</div>'}).join('')+'</div>';
  if(r.done){h+='<div class="m h"><p style="margin-top:6px">Found <b>5 issues</b> (2 High). '+(S.esc?'<b>Escalated to GC:</b> uncapped indemnity in §7. ':'')+'The redline replaces the residuals clause and caps the term at 3 years.</p><div class="outs">'+
   S.outs.map(function(o){var x=o.split('.').pop();return '<button class="fchip" data-a="prev" data-f="'+o+'" data-k="out"><span class="fic '+x+'">'+x.slice(0,3).toUpperCase()+'</span><span>'+o+'<small>'+(x==='docx'?'Word · tracked changes':'Excel · '+(S.esc?6:5)+' columns')+'</small></span></button>'}).join('')+'</div></div>'+
   '<button class="btn sec sm" data-a="run" style="align-self:flex-start">'+I.rep+'Run again</button>'}
  return h}
 function runTest(){S.run={i:0,done:false};S.g.tested=0;renderMsgs();var n=S.esc?5:4;
  (function nx(){later(function(){if(!S.run)return;if(S.run.i<n-1){S.run.i++;renderMsgs();nx()}else{S.run.done=true;S.g.tested=1;renderMsgs();renderTop()}},850)})()}

 /* ---------- modals ---------- */
 function renderModal(){var l=host.querySelector('.lay');if(!l)return;var m=S.modal;l.innerHTML='';if(!m)return;var h='';
  if(m.t==='publish'){var ch=S.vers.length>1&&S.pubV?['Instructions changed since version '+S.pubV]:['First published version'];
   h=md('Publish agent','<p>Publishing makes <b>version '+S.v+'</b> the live version for everyone you share it with. You can keep editing the draft afterwards.</p>'+(S.dirty?'<div class="note warn">Your unsaved changes will be saved first.</div>':'')+'<div class="flb">Changes detected:</div><ul style="margin:0;padding-left:18px">'+ch.map(function(c){return '<li>'+c+'</li>'}).join('')+'</ul>',
    '<button class="btn sec" data-a="close">Cancel</button><button class="btn pri" data-a="dopub">Publish</button>')}
  else if(m.t==='share'){var opts=['Run','View','Edit','Full access'];
   h=md('Share agent','<div style="position:relative"><input class="inp" placeholder="Add people or groups" data-a="shin" readonly style="cursor:pointer">'+(m.drop?'<div class="mn" style="top:38px;left:0;right:0">'+[['Commercial Contracts','Group · 18 members'],['Project Falcon team','Group · 6 members'],['Jordan Park','jordan.park@acme.example']].filter(function(g){return !S.share.some(function(s){return s.n===g[0]})}).map(function(g){return '<button data-a="shadd" data-n="'+g[0]+'" data-s="'+g[1]+'">'+I.plus+g[0]+'<small>'+g[1]+'</small></button>'}).join('')+'</div>':'')+'</div>'+
    '<div class="ppl">'+S.share.map(function(p,i){return '<div class="pr"><span class="av'+(p.me?'':' gav')+'">'+p.n.split(' ').map(function(w){return w[0]}).join('').slice(0,2)+'</span><div>'+esc(p.n)+'<small>'+esc(p.s)+'</small></div>'+(p.me?'<span style="font-size:13px;color:var(--mut)">Full access</span>':'<select data-i="acc" data-n="'+i+'">'+opts.map(function(o){return '<option'+(o===p.a?' selected':'')+(o==='Run'&&!S.pubV?' disabled':'')+'>'+o+'</option>'}).join('')+'</select>')+'</div>'}).join('')+'</div>'+
    '<div class="note"><span>'+(S.pubV?'<b>Run</b> uses the published version · <b>View</b> sees instructions · <b>Edit</b> changes the draft · <b>Full access</b> can also share and publish.':'Run access can only be granted for published agents.')+'</span></div>',
    '<button class="btn pri" data-a="shdone">Done</button>')}
  else if(m.t==='sched'){var np=!S.pubV;
   h=md('Set schedule',(np?'<div class="note warn" style="margin:0 0 4px">Publish the agent before scheduling it</div>':'')+
    '<span class="flb">Repeat every</span><div class="row2"><input class="inp" value="1" style="width:70px" aria-label="Repeat interval"><select class="inp" style="flex:1" aria-label="Repeat frequency"><option>Hour</option><option>Day</option><option selected>Week</option><option>Month</option></select></div>'+
    '<span class="flb">Days of the week</span><div class="days">'+['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(function(d){return '<button data-a="day" data-d="'+d+'" class="'+(m.days.indexOf(d)>=0?'on':'')+'">'+d.slice(0,2)+'</button>'}).join('')+'</div>'+
    '<div class="row2"><div style="flex:1"><span class="flb">Time of day</span><select class="inp" data-i="stime">'+['8:00 AM','9:00 AM','12:00 PM','5:00 PM'].map(function(t){return '<option'+(t===m.time?' selected':'')+'>'+t+'</option>'}).join('')+'</select></div>'+
    '<div style="flex:1.4"><span class="flb">Timezone</span><select class="inp" data-i="stz">'+[['ET','Eastern Time (ET) · New York'],['PT','Pacific Time (PT) · Los Angeles'],['GMT','Greenwich Mean Time (GMT) · London']].map(function(z){return '<option value="'+z[0]+'"'+(z[0]===m.tz?' selected':'')+'>'+z[1]+'</option>'}).join('')+'</select></div></div>'+
    '<label style="display:flex;gap:8px;align-items:center;margin-top:14px;color:var(--fg);font-size:13px"><span class="cbx">'+I.chk+'</span>Notify me when this agent runs</label>'+
    '<div class="note">'+I.globe+'<span>Next scheduled run: <b>'+nextRun(m)+'</b>. Schedules are private and won’t be shared.</span></div>',
    (S.sched?'<button class="btn ghost" data-a="unsched" style="margin-right:auto;color:var(--red)">Remove schedule</button>':'')+'<button class="btn sec" data-a="close">Cancel</button><button class="btn pri" data-a="schsave" '+(np||!m.days.length?'disabled':'')+'>Save your schedule</button>')}
  else if(m.t==='diff'){var V=S.vers,a=V[V.length-2],b=V[V.length-1];
   h=md('Compare agent versions','<div style="display:flex;gap:8px;align-items:center;margin-bottom:10px"><span class="badge">Side by Side</span><span style="font-size:12px">Version '+a.v+' → Version '+b.v+'</span></div><div class="diff"><div><h5>Previous Version</h5>'+diffHTML(a.blocks,b.blocks,0)+'</div><div><h5>New Version</h5>'+diffHTML(a.blocks,b.blocks,1)+'</div></div>',
    '<button class="btn sec" data-a="restore">'+I.rep+'Restore version '+a.v+'</button><button class="btn pri" data-a="close">Keep current changes</button>',1)}
  else if(m.t==='prev'){h=md(m.f,previewHTML(m.f,m.k),'<button class="btn sec" data-a="close">Close</button>',m.k==='out'||/pdf$/.test(m.f))}
  l.innerHTML='<div class="ov" data-a="ovbg">'+h+'</div>'}
 function md(t,b,f,wide){return '<div class="md'+(wide?' w':'')+'"><div class="mdh"><b>'+esc(t)+'</b><button class="ib sm" data-a="close" title="Close">'+I.x+'</button></div><div class="mdb">'+b+'</div><div class="mdf">'+f+'</div></div>'}
 function nextRun(m){var D=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],best=null;(m.days.length?m.days:['Mon']).forEach(function(d){var o=((D.indexOf(d)-1+7)%7)||7;if(!best||o<best[1])best=[d,o]});return best[0]+', Nov '+(3+best[1])+' at '+m.time+' '+m.tz}
 function schedText(){var s=S.sched;return 'Every week: '+s.days.join(', ')+' at '+s.time+' '+s.tz}
 function words(s){return s.split(/(\s+)/)}
 function diffHTML(A,B,side){var out=[],ai=0,bi=0,lt=null;
  function emit(t,html){var w=t==='n'?'ol':t==='b'?'ul':null;if(lt&&w!==lt){out.push('</'+lt+'>');lt=null}if(w&&!lt){out.push('<'+w+'>');lt=w}out.push(t==='h'?'<h3>'+html+'</h3>':t==='p'?'<p>'+html+'</p>':'<li>'+html+'</li>')}
  while(ai<A.length||bi<B.length){var a=A[ai],b=B[bi];
   if(a&&b&&a[1]===b[1]){emit(a[0],inl(a[1]));ai++;bi++;continue}
   var inA=b&&A.slice(ai).some(function(x){return x[1]===b[1]});
   if(b&&!inA&&a&&B.slice(bi).some(function(x){return x[1]===a[1]})){if(side)emit(b[0],'<ins>'+inl(b[1])+'</ins>');bi++;continue}
   if(a&&b){var wa=words(a[1]),wb=words(b[1]),p=0;while(p<wa.length&&wa[p]===wb[p])p++;var s=0;while(s<wa.length-p&&s<wb.length-p&&wa[wa.length-1-s]===wb[wb.length-1-s])s++;
    var pre=inl(wa.slice(0,p).join('')),post=inl(wa.slice(wa.length-s).join(''));
    emit(side?b[0]:a[0],pre+(side?'<ins>'+inl(wb.slice(p,wb.length-s).join(''))+'</ins>':'<del>'+inl(wa.slice(p,wa.length-s).join(''))+'</del>')+post);ai++;bi++;continue}
   if(b){if(side)emit(b[0],'<ins>'+inl(b[1])+'</ins>');bi++}else{if(!side)emit(a[0],'<del>'+inl(a[1])+'</del>');ai++}}
  if(lt)out.push('</'+lt+'>');return out.join('')}
 function previewHTML(f,k){
  if(/xlsx$/.test(f)){var rows=[['§2 Definition','“Confidential Information” includes residual knowledge','H','Delete residuals clause; use Template §2.3','PB 2.1'],['§5 Term','Perpetual confidentiality obligations','H','3 years from disclosure; trade secrets survive','PB 5.2'],['§7 Remedies','Uncapped indemnity for any breach','M','Mutual; cap at fees paid in prior 12 months','PB 7.4'],['§9 Non-solicit','24-month employee non-solicit','M','Delete, or 12 months limited to direct contacts','PB 9.1'],['§12 Law','Governed by laws of the Cayman Islands','L','New York law, NY courts','PB 12.1']];
   return '<table class="grid"><tr><th>Clause</th><th>Issue</th><th>Risk</th><th>Proposed language</th><th>Playbook reference</th>'+(S.esc?'<th>Escalated to GC</th>':'')+'</tr>'+rows.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td><td class="rk '+r[2]+'">'+{H:'High',M:'Medium',L:'Low'}[r[2]]+'</td><td>'+r[3]+'</td><td>'+r[4]+'</td>'+(S.esc?'<td>'+(r[0]==='§7 Remedies'?'<b style="color:var(--red)">Yes</b>':'No')+'</td>':'')+'</tr>'}).join('')+'</table>'}
  if(/docx$/.test(f)&&k==='out')return '<div class="page"><h4>MUTUAL NON-DISCLOSURE AGREEMENT<br><span style="font-weight:400;font-size:12px">Globex Corp. and Acme Holdings, Inc.</span></h4>'+
   '<p><span class="cmt"><b>Acme Legal:</b> Residuals clause conflicts with Playbook 2.1.</span><b>2.3</b> Confidential Information <del>includes any information retained in the unaided memory of the Receiving Party’s personnel</del><ins>does not include information independently developed without use of the Disclosing Party’s information</ins>.</p>'+
   '<p><b>5.1</b> The obligations in this Agreement shall survive <del>in perpetuity</del><ins>for three (3) years from the date of disclosure; obligations regarding trade secrets survive for so long as they remain trade secrets</ins>.</p>'+
   '<p><span class="cmt"><b>Acme Legal:</b> '+(S.esc?'Escalated to GC — uncapped indemnity.':'Cap per Playbook 7.4.')+'</span><b>7.2</b> Each Party shall indemnify the other for losses arising from its breach<ins>, subject to a cap equal to the fees paid in the prior twelve (12) months</ins>.</p>'+
   '<p><b>12.1</b> This Agreement is governed by the laws of <del>the Cayman Islands</del><ins>the State of New York</ins>.</p></div>';
  if(/pdf$/.test(f))return '<div class="page"><h4>MUTUAL NON-DISCLOSURE AGREEMENT</h4><p>This Mutual Non-Disclosure Agreement is entered into by Globex Corp. (“Globex”) and Acme Holdings, Inc. (“Acme”) in connection with Project Falcon.</p><p><b>2.3</b> Confidential Information includes any information retained in the unaided memory of the Receiving Party’s personnel.</p><p><b>5.1</b> The obligations in this Agreement shall survive in perpetuity.</p><p><b>7.2</b> Each Party shall indemnify the other for any and all losses arising from its breach.</p><p style="color:var(--mut)">Sample document — fictional parties.</p></div>';
  if(k==='pb')return '<p>A playbook gives the agent structured guidance to follow while completing a task.</p><table class="grid"><tr><th>Position</th><th>Preferred</th><th>Fallback</th></tr><tr><td>2.1 Residuals</td><td>No residuals clause</td><td>Limited to general skills</td></tr><tr><td>5.2 Term</td><td>2 years</td><td>3 years; trade secrets survive</td></tr><tr><td>7.4 Liability</td><td>No indemnity</td><td>Mutual, capped at 12 months’ fees</td></tr><tr><td>12.1 Governing law</td><td>New York</td><td>Delaware</td></tr></table>';
  if(k==='rt')return '<p>Review table used as agent context.</p><table class="grid"><tr><th>Document</th><th>Counterparty</th><th>Status</th></tr><tr><td>NDA_Globex.pdf</td><td>Globex Corp.</td><td>Reviewed</td></tr><tr><td>NDA_Initech.pdf</td><td>Initech LLC</td><td>Pending</td></tr></table>';
  if(k==='ks')return '<p>Knowledge source · 214 approved clauses across NDAs, MSAs and DPAs.</p>';
  return '<div class="page"><h4>ACME STANDARD NDA (TEMPLATE)</h4><p><b>2.3</b> Confidential Information does not include information independently developed without use of the Disclosing Party’s information.</p><p><b>5.1</b> Obligations survive for three (3) years from disclosure.</p></div>'}

 /* ---------- mentions ---------- */
 var mq=null;
 function scale(){return root.getBoundingClientRect().width/1100||1}
 function openMenu(x,y,items,mode,q,yt){closeMenu();var el=document.createElement('div');el.className='mn';el.id='ab-mn';var sc=scale(),rr=root.getBoundingClientRect();
  el.style.left=Math.min(1100-240,(x-rr.left)/sc)+'px';el.dataset.mode=mode;
  var g='',h='';items.forEach(function(it,i){if(it.g!==g){g=it.g;h+='<h6>'+g+'</h6>'}h+='<button data-a="mpick" data-i="'+SRC.indexOf(it)+'" class="'+(i===0?'act':'')+'">'+KI[it.k]+esc(it.n)+'</button>'});
  el.innerHTML=h||'<h6>No matches for “'+esc(q||'')+'”</h6>';host.appendChild(el);S.menu=mode;placeMenu(el,y,yt)}
 function placeMenu(el,y,yt){var sc=scale(),rr=root.getBoundingClientRect(),top=(y-rr.top)/sc,hh=el.offsetHeight;
  if(top+hh>672)top=Math.max(8,((yt==null?y:yt)-rr.top)/sc-hh-8);el.style.top=top+'px'}
 function closeMenu(){var m=$('#ab-mn');if(m)m.remove();S.menu=null;mq=null}
 function checkMention(){var sel=getSelection();if(!sel.rangeCount)return closeMenu();var r=sel.getRangeAt(0),n=r.startContainer;
  if(n.nodeType!==3||!$('.ce').contains(n))return closeMenu();var before=n.textContent.slice(0,r.startOffset),m=/(^|\s)@([\w.\-]*)$/.exec(before);
  if(!m)return S.menu==='at'&&closeMenu();var q=m[2].toLowerCase(),items=SRC.filter(function(s){return s.n.toLowerCase().indexOf(q)>=0});
  var rc=r.getBoundingClientRect();if(!rc.width&&!rc.height){var sp=document.createElement('span');sp.textContent='\u200b';r.insertNode(sp);rc=sp.getBoundingClientRect();sp.remove();n.parentNode&&n.parentNode.normalize()}
  var sel2=getSelection();r=sel2.rangeCount?sel2.getRangeAt(0):r;
  openMenu(rc.left,rc.bottom+4,items,'at',m[2],rc.top);mq={len:m[2].length+1}}
 function pickMention(it){var mode=S.menu;
  if(mode==='ctx'){if(!S.ctx.some(function(c){return c[1]===it.n}))S.ctx.push([it.k,it.n]);closeMenu();renderCtx();markDirty();toast('Added '+it.n+' to context');return}
  var sel=getSelection();if(!sel.rangeCount||!mq)return closeMenu();var r=sel.getRangeAt(0),n=r.startContainer;
  if(n.nodeType===3){var o=r.startOffset;r.setStart(n,Math.max(0,o-mq.len));r.deleteContents()}
  var t=document.createElement('span');t.innerHTML=chip(it.k,it.n);var c=t.firstChild,sp=document.createTextNode('\u00a0');r.insertNode(sp);r.insertNode(c);
  r.setStartAfter(sp);r.collapse(true);sel.removeAllRanges();sel.addRange(r);closeMenu();
  if(!S.ctx.some(function(x){return x[1]===it.n})){S.ctx.push([it.k,it.n]);renderCtx()}markDirty();S.g.mention=1}
 function markDirty(){if(S.busy)return;if(!S.dirty){S.dirty=true;renderTop()}else if(!S.v)renderTop();count()}

 /* ---------- hints ---------- */
 function hint(){host.querySelectorAll('.pulse').forEach(function(e){e.classList.remove('pulse')});if(S.modal||S.busy)return;var sel=null;
  if(S.view==='list')sel=S.agent?(S.sched?null:'tr.row'):'#ab-add';
  else if(S.view==='start'){var ta=$('.pbox textarea');sel=ta&&ta.value.trim()?'[data-a="go"]':'.sug[data-i="0"]'}
  else if(S.v){if(!S.g.refined)sel=S.panel==='chat'?'.cs':'[data-t="chat"]';else if(!S.g.diff)sel='[data-a="diff"]';else if(!S.run)sel=S.panel==='test'?'[data-a="run"]':'[data-a="test"]';
   else if(S.run.done&&!S.pubV)sel='[data-a="publish"]';else if(S.pubV&&!S.g.shared)sel='[data-a="share"]';else if(S.pubV&&!S.sched)sel='[data-a="more"]'}
  var e=sel&&$(sel);if(e)e.classList.add('pulse')}

 /* ---------- events ---------- */
 function onClick(e){var t=e.target.closest('[data-a],[data-c]');
  if($('#ab-mn')&&!e.target.closest('#ab-mn')&&!(t&&(t.dataset.a==='more'||t.dataset.a==='ctxadd')))closeMenu();
  if(!t)return;
  if(t.dataset.c){tbar(t.dataset.c);return}
  var a=t.dataset.a;
  switch(a){
  case 'replay':reset();break;
  case 'list':if(S.busy)return;S.view='list';S.modal=null;render();break;
  case 'create':S.view='start';render();setTimeout(function(){var ta=$('.pbox textarea');ta&&ta.focus()},0);break;
  case 'open':S.view='build';render();break;
  case 'import':importAgent();break;
  case 'sug':var s=SUGS[+t.dataset.i];S.startText=s.t;var ta=$('.pbox textarea');ta.value=s.t;ta.focus();syncSend();break;
  case 'go':goStart();break;
  case 'scratch':S.view='build';S.agent=true;S.tpl=null;S.name='Untitled agent';S.desc='';S.ctx=[];S.blocks=[];S.outs=NDA.outs;S.chat=[];render();setTimeout(function(){var c=$('.ce');c&&c.focus()},0);toast('Agent created');break;
  case 'pen':var h=$('.nm h1');h.focus();var r=document.createRange();r.selectNodeContents(h);var sl=getSelection();sl.removeAllRanges();sl.addRange(r);break;
  case 'tab':if(t.disabled)return;S.panel=t.dataset.t;renderPanel();break;
  case 'send':var ci=$('[data-i="chat"]');if(ci&&ci.value.trim()){var v=ci.value;ci.value='';sendChat(v)}break;
  case 'cs':sendChat(t.textContent);break;
  case 'diff':S.g.diff=1;S.modal={t:'diff'};renderModal();break;
  case 'hist':if(S.vers.length>1){S.g.diff=1;S.modal={t:'diff'};renderModal()}break;
  case 'test':S.panel='test';renderPanel();if(!S.run)runTest();break;
  case 'run':runTest();break;
  case 'save':saveDraft();toast('Changes saved');break;
  case 'publish':S.modal={t:'publish'};renderModal();hint();break;
  case 'dopub':if(S.dirty||!S.v)saveDraft();S.pubV=S.v;S.modal=null;renderModal();renderTop();renderMsgs();toast('Agent published');break;
  case 'share':S.modal={t:'share'};renderModal();hint();break;
  case 'shin':S.modal.drop=!S.modal.drop;renderModal();break;
  case 'shadd':S.share.push({n:t.dataset.n,s:t.dataset.s,a:S.pubV?'Run':'View'});S.modal.drop=false;renderModal();break;
  case 'shdone':var n=S.share.length-1;S.modal=null;renderModal();S.g.shared=1;if(n)toast('Shared with '+S.share.slice(1).map(function(p){return p.n}).join(', '));hint();break;
  case 'more':if(S.menu==='more'){closeMenu();break}var rc=t.getBoundingClientRect();openMore(rc);break;
  case 'msched':closeMenu();S.modal={t:'sched',days:S.sched?S.sched.days.slice():['Mon'],time:S.sched?S.sched.time:'9:00 AM',tz:S.sched?S.sched.tz:'ET'};renderModal();break;
  case 'day':var d=t.dataset.d,ds=S.modal.days,ix=ds.indexOf(d);ix>=0?ds.splice(ix,1):ds.push(d);var ord=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];ds.sort(function(x,y){return ord.indexOf(x)-ord.indexOf(y)});renderModal();break;
  case 'schsave':S.sched={days:S.modal.days,time:S.modal.time,tz:S.modal.tz};S.modal=null;renderModal();renderTop();toast('Scheduled · '+schedText());hint();break;
  case 'unsched':S.sched=null;S.modal=null;renderModal();renderTop();toast('Schedule removed');break;
  case 'mexport':closeMenu();toast('Exported '+slug(S.name||'agent')+'.json');break;
  case 'mimport':closeMenu();toast('Import a .md, .skill, .zip, or .json file from another tool');break;
  case 'mdup':closeMenu();toast('Agent duplicated successfully');break;
  case 'restore':restore();break;
  case 'ctxadd':if(S.menu==='ctx'){closeMenu();break}var r2=t.getBoundingClientRect();openMenu(r2.left,r2.bottom+4,SRC,'ctx');break;
  case 'mpick':pickMention(SRC[+t.dataset.i]);break;
  case 'prev':e.preventDefault();S.modal={t:'prev',f:t.dataset.f,k:t.dataset.k};renderModal();break;
  case 'close':S.modal=null;renderModal();hint();break;
  case 'ovbg':if(e.target===t){S.modal=null;renderModal();hint()}break;
  }}
 function openMore(rc){openMenu(rc.left-170,rc.bottom+4,[],'more');var el=$('#ab-mn');
  el.style.top=(rc.bottom-root.getBoundingClientRect().top)/scale()+4+'px';el.innerHTML='<button data-a="msched">'+I.clock+(S.sched?'Manage schedule':'Set schedule')+'</button><button data-a="hist">'+I.hist+'Compare agent versions</button><hr><button data-a="mexport">'+I.down+'Export agent (.json)</button><button data-a="mimport">'+I.upl+'Import from file</button><button data-a="mdup">'+I.copy+'Duplicate agent</button>'}
 function goStart(){var ta=$('.pbox textarea');var v=ta.value.trim();if(!v)return;var s=SUGS.find(function(x){return x.t===v});
  var tpl=(s&&s.k==='nda')||/\bnda/i.test(v)?NDA:genTpl(v,s&&s.n);startBuild(v,tpl)}
 function sendChat(v){if(S.busy)return;if(!S.v){S.chat=[];var tpl=/\bnda/i.test(v)?NDA:genTpl(v);startBuild(v,tpl);return}refine(v)}
 function saveDraft(){var ce=$('.ce');if(!S.v){S.blocks=[['p',ce.textContent.trim()]]}S.v++;S.dirty=false;S.vers.push({v:S.v,blocks:S.blocks.slice(),desc:S.desc});renderTop()}
 function restore(){var V=S.vers,a=V[V.length-2];S.blocks=a.blocks.slice();S.desc=a.desc;S.esc=S.blocks.some(function(b){return b[1]===ESC_STEP});S.v++;S.vers.push({v:S.v,blocks:S.blocks.slice(),desc:S.desc});S.modal=null;
  renderModal();var ce=$('.ce');ce.innerHTML=blocksHTML(S.blocks);var d=$('.ds');d.value=S.desc;grow();count();pushChat({r:'card',x:'Agent updated',v:S.v,diff:1});renderTop();toast('Agent version restored and saved.')}
 function importAgent(){S.view='build';S.agent=true;S.name=NDA.name;S.desc=NDA.desc;S.ctx=NDA.ctx.slice();S.blocks=NDA.blocks.slice();S.outs=NDA.outs;S.v=1;S.vers=[{v:1,blocks:S.blocks.slice(),desc:S.desc}];
  S.chat=[{r:'card',x:'Agent imported from vendor-nda-review.json',v:1},{r:'h',x:'<p>Imported. Try a refinement:</p>',sugs:['Escalate anything with uncapped liability to the GC']}];render();toast('Agent imported successfully')}
 function tbar(c){var ce=$('.ce');if(!ce)return;ce.focus();
  if(c==='at'){document.execCommand('insertText',false,' @');checkMention();return}
  if(c==='h'){document.execCommand('formatBlock',false,'h3')}else document.execCommand(c);markDirty()}
 function onInput(e){var t=e.target,i=t.dataset&&t.dataset.i;
  if(i==='start'){S.startText=t.value;syncSend()}
  else if(i==='name'){S.name=t.textContent;var tn=$('#ab-tn .tnn');if(tn)tn.textContent=S.name||'Untitled agent';markDirty()}
  else if(i==='desc'){S.desc=t.value;grow();markDirty()}
  else if(i==='ce'){checkMention();markDirty();if(!S.v){renderTop()}var tb=$('[data-t="test"]');if(tb&&hasText()){tb.disabled=false;tb.style.opacity=''}}
  else if(i==='acc'){S.share[+t.dataset.n].a=t.value}
  else if(i==='stime'){S.modal.time=t.value;renderModal()}else if(i==='stz'){S.modal.tz=t.value;renderModal()}}
 function onKey(e){var t=e.target;
  if(S.menu==='at'&&t.dataset&&t.dataset.i==='ce'){var m=$('#ab-mn'),bs=m?[].slice.call(m.querySelectorAll('button')):[],ai=bs.findIndex(function(b){return b.classList.contains('act')});
   if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!bs.length)return;bs[ai]&&bs[ai].classList.remove('act');ai=(ai+(e.key==='ArrowDown'?1:-1)+bs.length)%bs.length;bs[ai].classList.add('act');return}
   if(e.key==='Enter'||e.key==='Tab'){if(bs[ai]){e.preventDefault();pickMention(SRC[+bs[ai].dataset.i])}return}
   if(e.key==='Escape'){e.stopPropagation();closeMenu();return}}
  if(e.key==='Enter'&&!e.shiftKey&&t.dataset){if(t.dataset.i==='start'){e.preventDefault();goStart()}else if(t.dataset.i==='chat'){e.preventDefault();var v=t.value;t.value='';sendChat(v)}else if(t.dataset.i==='name'){e.preventDefault();t.blur()}}
  if(e.key==='Escape'&&S.modal){e.stopPropagation();S.modal=null;renderModal();hint()}}
 function onDown(e){if(e.target.closest('#ab-mn'))e.preventDefault()}
 function onUp(e){if(e.target.closest&&e.target.closest('.ce'))setTimeout(checkMention,0)}
 root.addEventListener('click',onClick);root.addEventListener('input',onInput);root.addEventListener('change',onInput);root.addEventListener('keydown',onKey,true);root.addEventListener('mousedown',onDown);root.addEventListener('mouseup',onUp);
 reset();
 return function(){clearT();clearTimeout(tt);['click','input','change','mousedown','mouseup'].forEach(function(ev,i){root.removeEventListener(ev,[onClick,onInput,onInput,onDown,onUp][i])});root.removeEventListener('keydown',onKey,true);root.innerHTML=''};
 }};
})();
