/* Harvey Vault — recreated demo of the Vault product: vaults, upload, ask-the-vault with citations, review tables, sharing (vanilla re-implementation, fake data). */
(function(){
window.DEMOS=window.DEMOS||{};
var P='.demo-vault';
var CSS=`
${P}{--fg:hsl(40 6% 10%);--sub:hsl(36 5% 40%);--mut:hsl(38 4% 50%);--dis:hsl(38 5% 71%);--bg:#fff;--bgs:hsl(40 16% 96%);--bgsh:hsl(36 15% 94%);--bgp:hsl(34 11% 88%);--bd:hsl(36 15% 94%);--bds:hsl(34 11% 88%);--hov:hsla(40,100%,10%,.04);--prs:hsla(40,100%,10%,.08);--blue:hsl(220 79% 48%);--hl:hsl(223 69% 86%);
--e1:0 1px 8px 0 rgba(0,0,0,.04),0 0 0 1px hsla(40,6%,10%,.08);--e2:0 4px 12px 0 rgba(0,0,0,.04),0 0 0 1px hsla(40,6%,10%,.08);--e3:0 8px 20px 0 rgba(0,0,0,.12),0 0 0 1px hsla(40,6%,10%,.1);
font:14px/20px Diatype,Inter,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:var(--fg);background:var(--bgs);display:flex;height:100%;-webkit-font-smoothing:antialiased}
${P} *{box-sizing:border-box}
${P} button{font:inherit;color:inherit;cursor:pointer;background:none;border:0;padding:0}
${P} svg{width:16px;height:16px;flex:none;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
${P} .serif{font-family:HarveySerif,Georgia,'Times New Roman',serif}
/* sidebar */
${P} .sb{width:216px;flex:none;display:flex;flex-direction:column;padding:20px 12px 12px}
${P} .sbh{height:32px;display:flex;align-items:center;justify-content:space-between;padding:0 8px;margin-bottom:16px}
${P} .wm{font:400 23px/1 HarveySerif,Georgia,'Times New Roman',serif;letter-spacing:-.02em}
${P} .sbh .ib{color:var(--sub)}
${P} .ni{display:flex;align-items:center;gap:10px;height:36px;padding:0 10px;border-radius:6px;color:var(--fg);cursor:default;white-space:nowrap}
${P} .ni:hover{background:var(--hov)}${P} .ni.on{background:hsla(40,100%,10%,.06)}
${P} .ni svg{color:var(--sub)}
${P} .subm{margin:2px 0 6px 18px;padding-left:10px;border-left:1px solid var(--bds)}
${P} .subm div{height:30px;display:flex;align-items:center;padding:0 10px;border-radius:6px;font-size:13px;color:var(--sub);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:default}
${P} .subm div:hover{background:var(--hov)}${P} .subm .on{color:var(--fg);background:hsla(40,100%,10%,.06)}
${P} .me{margin-top:auto;display:flex;align-items:center;gap:10px;height:44px;padding:0 10px;border-radius:6px;font-size:13px;color:var(--fg);font-weight:500}
${P} .me small{display:block;font-size:12px;line-height:16px;color:var(--mut);font-weight:400}
${P} .av{width:24px;height:24px;border-radius:6px;background:var(--fg);color:var(--bgs);display:grid;place-items:center;font:500 11px/1 Georgia,serif}
/* content card */
${P} .card{flex:1;min-width:0;margin:10px 10px 10px 4px;background:#fff;border-radius:12px;box-shadow:var(--e1);display:flex;flex-direction:column;overflow:hidden;position:relative}
${P} .hdr{height:52px;flex:none;display:flex;align-items:center;gap:8px;padding:0 12px 0 16px}
${P} .crumb{display:flex;align-items:center;gap:6px;font-size:14px;color:var(--sub);white-space:nowrap;min-width:0}
${P} .crumb b{font-weight:500;color:var(--fg);overflow:hidden;text-overflow:ellipsis}
${P} .crumb i{font-style:normal;color:var(--dis)}
${P} .sp{flex:1}
${P} .btn{height:32px;display:inline-flex;align-items:center;gap:6px;padding:0 12px;border-radius:8px;font-size:14px;font-weight:500;white-space:nowrap;transition:background .15s,border-color .15s}
${P} .btn.sm{height:28px;padding:0 10px;font-size:12px;border-radius:6px}
${P} .btn.sec{background:#fff;border:1px solid var(--bds);box-shadow:0 1px 2px rgba(0,0,0,.03)}${P} .btn.sec:hover{background:var(--bgs)}
${P} .btn.ghost:hover,${P} .btn.ghost.on{background:var(--hov)}${P} .btn.ghost.on{background:var(--prs)}
${P} .btn.pri{background:var(--fg);color:var(--bgs)}${P} .btn.pri:hover{background:hsl(43 7% 19%)}
${P} .btn.pri[disabled]{opacity:.4;cursor:default}
${P} .btn .k{display:inline-grid;place-items:center;min-width:18px;height:18px;padding:0 5px;border-radius:5px;background:var(--fg);color:#fff;font-size:11px}
${P} .ib{width:28px;height:28px;display:inline-grid;place-items:center;border-radius:6px;color:var(--sub)}${P} .ib:hover{background:var(--hov);color:var(--fg)}
${P} .tb{min-height:48px;flex:none;display:flex;align-items:center;gap:4px;padding:0 12px 0 8px;position:relative;border-bottom:1px solid var(--bd)}
${P} .tb .btn{color:var(--fg)}${P} .tb .btn svg{color:var(--sub)}
${P} .sep{width:1px;height:16px;background:var(--bds);margin:0 4px}
${P} .srch{display:flex;align-items:center;gap:6px;height:28px;border-radius:6px;padding:0 8px;width:200px;background:var(--bgs);color:var(--mut);margin-right:4px}
${P} .srch:focus-within{box-shadow:0 0 0 1px var(--bds);background:#fff}
${P} .srch input{border:0;outline:0;font:inherit;font-size:13px;flex:1;min-width:0;background:none;color:var(--fg)}
${P} .srch input::placeholder{color:var(--mut)}
${P} .cnt{font-size:12px;color:var(--mut);margin-right:6px;white-space:nowrap}
${P} .fchip{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 6px 0 10px;border-radius:6px;background:var(--bgsh);font-size:12px;font-weight:500;white-space:nowrap;max-width:210px}
${P} .fchip span{overflow:hidden;text-overflow:ellipsis}${P} .fchip button{flex:none}
${P} .tb .srch{width:170px}${P} .tb{overflow:hidden}${P} .tb.tight .lb{display:none}${P} .tb.tight .btn.ghost{padding:0 7px}
${P} .fchip button{width:18px;height:18px;display:grid;place-items:center;border-radius:4px;color:var(--sub)}${P} .fchip button:hover{background:var(--prs)}
${P} .fchip svg{width:12px;height:12px}
${P} .body{flex:1;display:flex;min-height:0}
${P} .tw{flex:1;overflow:auto;min-width:0;position:relative}
/* grid */
${P} table{border-collapse:separate;border-spacing:0;font-size:13px;line-height:20px;min-width:100%}
${P} th{position:sticky;top:0;z-index:2;background:var(--bgs);height:36px;padding:0 12px;text-align:left;font-size:12px;line-height:16px;font-weight:500;color:var(--fg);white-space:nowrap;border-right:1px solid var(--bds);cursor:default}
${P} th:hover{background:var(--bgsh)}
${P} th .hc{display:flex;align-items:center;gap:6px}${P} th .hc svg{width:14px;height:14px;color:var(--sub)}
${P} th .hc span{overflow:hidden;text-overflow:ellipsis}
${P} th.new{animation:vfade .6s}
@keyframes vfade{from{background:var(--bgp)}}
${P} th.n,${P} td.n{position:sticky;left:0;width:44px;min-width:44px;text-align:center;color:var(--mut);padding:8px 0}${P} th.n{padding:0}
${P} th.n{z-index:4}${P} td.n{z-index:1;font-size:12px;background:#fff}
${P} th.fn,${P} td.fn{position:sticky;left:44px;width:240px;min-width:240px;max-width:240px}
${P} th.fn{z-index:4}${P} td.fn{z-index:1;box-shadow:inset -1px 0 0 var(--bds)}
${P} th.fn{border-right:0;box-shadow:inset -1px 0 0 var(--bds)}
${P} th.ad{border-right:0;padding:0 6px;width:100%}
${P} th.ad .btn{height:28px;font-size:12px;padding:0 8px;border-radius:6px;color:var(--fg)}
${P} th.ad .btn:hover{background:var(--prs)}
${P} td{padding:8px 12px;border-bottom:1px solid var(--bd);border-right:1px solid var(--bd);vertical-align:top;background:#fff;min-width:200px;max-width:240px}
${P} tbody tr:hover td{background:hsl(40 16% 98.5%)}
${P} td.st{min-width:150px;white-space:nowrap;color:var(--fg)}
${P} td.ad{border-right:0;min-width:120px}
${P} .fi{display:flex;gap:8px;align-items:center;font-weight:400;white-space:nowrap;overflow:hidden}
${P} .fi span{overflow:hidden;text-overflow:ellipsis}
${P} .ficon{width:16px;height:16px;flex:none;border-radius:3px;display:grid;place-items:center;font:700 6px/1 system-ui;color:#fff;letter-spacing:-.02em}
${P} .ficon.pdf{background:hsl(357 69% 50%)}${P} .ficon.doc{background:hsl(220 79% 48%)}
${P} .cl{cursor:pointer;position:relative}
${P} .cl .tx{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}
${P}.wrap .cl .tx{-webkit-line-clamp:4}
${P} .cl.sel{box-shadow:inset 0 0 0 2px var(--fg)}
${P} .cl .vk{position:absolute;right:6px;top:10px;width:16px;height:16px;border-radius:50%;background:hsl(155 71% 27%);color:#fff;display:grid;place-items:center}
${P} .cl .vk svg{width:10px;height:10px;stroke-width:2.4}
${P} .cl.ok{padding-right:28px}
${P} .tag{display:inline-flex;align-items:center;height:20px;padding:0 6px;border-radius:6px;font-size:12px;font-weight:500;margin-right:6px;vertical-align:top;white-space:nowrap}
${P} .t-y{background:hsl(140 64% 89%);color:hsl(155 71% 27%)}${P} .t-n{background:hsl(352 83% 93%);color:hsl(356 67% 46%)}${P} .t-m{background:hsl(45 77% 88%);color:hsl(29 78% 34%)}${P} .t-0{background:var(--bgsh);color:var(--fg)}
${P} .ld{height:8px;border-radius:4px;background:linear-gradient(90deg,var(--bgsh),var(--bgs),var(--bgsh));background-size:200% 100%;animation:vsh 1.2s infinite linear;margin:6px 0 4px;width:85%}
@keyframes vsh{to{background-position:-200% 0}}
${P} td.fresh{animation:vfade .9s}
${P} .empty{position:sticky;left:0;width:min(100%,640px);margin:28px auto;text-align:center;color:var(--mut);font-size:13px}
${P} .empty b{display:block;color:var(--fg);font-weight:500;font-size:14px;margin-bottom:4px}
${P} .empty .btn{margin-top:12px}
/* popovers */
${P} .pop{position:absolute;background:#fff;border-radius:10px;box-shadow:var(--e2);z-index:10;font-size:14px;animation:vpop .14s ease-out}
@keyframes vpop{from{opacity:0;transform:translateY(-4px)}}
${P} .pop .hint{padding:8px 12px;font-size:12px;line-height:16px;font-weight:500;color:var(--dis)}
${P} .pop textarea{display:block;width:calc(100% - 16px);margin:0 8px 8px;height:64px;resize:none;border:0;border-radius:8px;background:var(--bgs);padding:8px 10px;font:inherit;font-size:14px;outline:0;color:var(--fg)}
${P} .pop textarea:focus{box-shadow:0 0 0 1px var(--bds)}
${P} .pop textarea::placeholder,${P} .pop input::placeholder{color:var(--mut)}
${P} .sug{padding:0 8px 8px;display:flex;flex-direction:column;gap:1px}
${P} .sug button{display:flex;align-items:center;gap:8px;height:30px;padding:0 8px;border-radius:6px;text-align:left;font-size:13px;color:var(--sub)}
${P} .sug button:hover{background:var(--hov);color:var(--fg)}${P} .sug svg{width:14px;height:14px}
${P} .hr{height:1px;background:var(--bd)}
${P} .row2{display:flex;align-items:center;gap:8px;padding:0 12px 6px}
${P} .row2 label{width:64px;flex:none;font-size:12px;color:var(--sub)}
${P} .row2 input,${P} .row2 select{flex:1;height:32px;border:0;border-radius:6px;background:var(--bgs);padding:0 10px;font:inherit;font-size:13px;outline:0;color:var(--fg);min-width:0;-webkit-appearance:none;appearance:none}
${P} .row2 select{background-image:linear-gradient(45deg,transparent 50%,var(--sub) 50%),linear-gradient(135deg,var(--sub) 50%,transparent 50%);background-position:calc(100% - 14px) 14px,calc(100% - 10px) 14px;background-size:4px 4px;background-repeat:no-repeat}
${P} .pf{display:flex;justify-content:space-between;gap:8px;padding:8px 12px}
${P} .fopt{display:flex;align-items:center;gap:10px;height:32px;padding:0 8px;border-radius:6px;cursor:pointer;font-size:13px}
${P} .fopt:hover{background:var(--hov)}
${P} .cb{width:14px;height:14px;border-radius:4px;border:1px solid var(--mut);display:grid;place-items:center;flex:none}
${P} .fopt.on .cb{background:var(--fg);border-color:var(--fg);color:#fff}${P} .cb svg{width:10px;height:10px;stroke-width:2.4}
${P} .fopt .c{margin-left:auto;color:var(--mut);font-size:12px}
/* side panel (document previewer) */
${P} .side{width:0;flex:none;overflow:hidden;background:var(--bgs);transition:width .25s ease;display:flex;flex-direction:column;border-left:1px solid var(--bd)}
${P} .side.open{width:440px}
${P} .si{width:439px;flex:none;height:100%;display:flex;flex-direction:column;min-height:0}
${P} .sh{height:44px;flex:none;display:flex;align-items:center;gap:8px;padding:0 8px 0 16px;font-size:13px}
${P} .sh .r{color:var(--sub);flex:none}${P} .sh b{font-weight:500;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
${P} .sh .pct{font-size:12px;color:var(--sub);flex:none}
${P} .ac{margin:4px 16px 12px;background:#fff;border-radius:8px;box-shadow:var(--e2);padding:14px 16px 12px}
${P} .ac .q{display:flex;align-items:center;gap:6px;font-size:12px;line-height:16px;font-weight:500;color:var(--sub)}${P} .ac .q svg{width:14px;height:14px}
${P} .ac .a{margin:8px 0 4px;font-size:14px;line-height:22px}
${P} .ac .why{font-size:12px;line-height:18px;color:var(--mut)}
${P} .cite{display:inline-grid;place-items:center;min-width:20px;height:20px;padding:0 6px;border-radius:6px;background:var(--bgsh);color:var(--fg);font-size:12px;font-weight:500;margin-left:4px;vertical-align:1px;line-height:1;cursor:pointer;transition:background .15s,color .15s}
${P} .cite:hover,${P} .cite.on{background:var(--blue);color:#fff}
${P} .vrow{display:flex;align-items:center;gap:4px;margin-top:10px;padding-top:10px;border-top:1px solid var(--bd)}
${P} .vrow .btn{height:28px;font-size:12px;padding:0 8px;border-radius:6px}
${P} .vrow .btn.done{color:hsl(155 71% 27%)}
${P} .pg{flex:1;overflow:auto;margin:0 16px 16px;border-radius:12px;background:var(--bgsh);box-shadow:var(--e2);padding:16px 18px}
${P} .pgh{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--sub);margin-bottom:10px}
${P} .pgh b{font-weight:500;color:var(--fg);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
${P} .paper{background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.1);padding:26px 28px;font:12px/1.65 'Times New Roman',Times,Georgia,serif;color:#222}
${P} .paper h5{text-align:center;font-size:13px;margin:0 0 4px;letter-spacing:.06em}
${P} .paper .sub{text-align:center;font-size:11px;color:#666;margin-bottom:14px}
${P} .paper p{margin:0 0 10px}
${P} mark{background:var(--hl);color:inherit;padding:1px 0;box-shadow:0 0 0 2px var(--hl);border-radius:1px}
${P} .pgn{font:11px system-ui;color:var(--mut);text-align:center;margin-top:10px}
/* toast */
${P} .toast{position:absolute;bottom:16px;left:50%;transform:translate(-50%,8px);background:var(--fg);color:var(--bgs);padding:10px 14px;border-radius:8px;font-size:13px;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;z-index:20;box-shadow:var(--e3);display:flex;align-items:center;gap:8px;white-space:nowrap}
${P} .toast.show{opacity:1;transform:translate(-50%,0)}
${P} .pulse{animation:vpulse 1.8s infinite}
@keyframes vpulse{0%,100%{box-shadow:0 0 0 0 hsla(220,79%,48%,.35)}50%{box-shadow:0 0 0 5px hsla(220,79%,48%,0)}}
/* --- full product shell --- */
${P} .vw{flex:1;display:flex;flex-direction:column;min-height:0;min-width:0}
${P} .crumb a{color:var(--sub);cursor:pointer;border-radius:4px}${P} .crumb a:hover{color:var(--fg)}
${P} .ni,${P} .subm div{cursor:pointer}
${P} .guide{margin-top:16px;background:#fff;border-radius:10px;box-shadow:var(--e1);padding:8px 6px 6px}
${P} .gh{display:flex;align-items:center;justify-content:space-between;padding:0 2px 4px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--mut)}
${P} .gh .btn{height:24px;font-size:11px;padding:0 6px;text-transform:none;letter-spacing:0;color:var(--sub)}${P} .gh .btn:hover{background:var(--hov)}${P} .gh svg{width:12px;height:12px}
${P} .gs{display:flex;align-items:center;gap:8px;width:100%;height:30px;padding:0 6px;border-radius:6px;font-size:13px;color:var(--sub);text-align:left}
${P} .gs:hover{background:var(--hov);color:var(--fg)}
${P} .gn{width:18px;height:18px;border-radius:50%;border:1px solid var(--bds);display:grid;place-items:center;font-size:10px;font-weight:600;flex:none}
${P} .gs.nx{color:var(--fg);font-weight:500}${P} .gs.nx .gn{background:var(--fg);border-color:var(--fg);color:#fff}
${P} .gs.dn{color:var(--fg)}${P} .gs.dn .gn{background:hsl(155 71% 27%);border-color:transparent;color:#fff}${P} .gn svg{width:10px;height:10px;stroke-width:2.4}
${P} .pgw{flex:1;overflow:auto;padding:22px 28px 28px;min-width:0}
${P} h1{font:400 28px/34px HarveySerif,Georgia,'Times New Roman',serif;letter-spacing:-.01em;margin:0}
${P} .lede{color:var(--sub);font-size:13px;margin:4px 0 20px;max-width:640px}
${P} .sec{display:flex;align-items:center;gap:8px;margin:0 0 10px;font-size:14px;font-weight:500}${P} .sec small{font-size:12px;color:var(--mut);font-weight:400}
${P} .vg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:24px}
${P} .vc{border-radius:10px;box-shadow:var(--e1);padding:14px;display:flex;flex-direction:column;align-items:flex-start;min-height:132px;background:#fff;text-align:left;transition:box-shadow .15s,transform .15s;min-width:0}
${P} .vc:hover{box-shadow:var(--e2);transform:translateY(-1px)}
${P} .vc b{font-weight:500;font-size:14px;margin-top:auto;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
${P} .vc .m{font-size:12px;color:var(--mut)}
${P} .vc .ft{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--sub);margin-top:8px;width:100%}${P} .vc .ft svg{width:13px;height:13px}
${P} .vc.nw{box-shadow:none;border:1px dashed var(--dis);background:var(--bgs)}${P} .vc.nw:hover{background:var(--bgsh)}
${P} .vc.nw .pl{width:34px;height:34px;border-radius:8px;background:var(--fg);color:#fff;display:grid;place-items:center;margin-bottom:12px}
${P} .vc.kb{min-height:96px}
${P} .fold{width:44px;height:34px;position:relative;margin-bottom:12px;flex:none}
${P} .fold::before{content:'';position:absolute;left:0;top:0;width:18px;height:9px;border-radius:3px 3px 0 0;background:hsl(36 14% 78%)}
${P} .fold::after{content:'';position:absolute;left:0;top:5px;right:0;bottom:0;border-radius:2px 5px 5px 5px;background:hsl(36 16% 87%)}
${P} .fold.sm{width:18px;height:14px;margin:0}${P} .fold.sm::before{width:8px;height:4px}${P} .fold.sm::after{top:2px}
${P} .bk{width:34px;height:34px;border-radius:8px;background:var(--bgsh);display:grid;place-items:center;margin-bottom:10px}${P} .bk svg{width:20px;height:20px}
${P} .avs{display:flex;margin-left:auto}${P} .avs i{width:20px;height:20px;border-radius:50%;margin-left:-5px;border:1.5px solid #fff;font:600 8px/17px system-ui;color:#fff;text-align:center;font-style:normal}
${P} .stat{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--sub);white-space:nowrap}
${P} .ring{width:14px;height:14px;border-radius:50%;background:conic-gradient(var(--fg) calc(var(--p)*1%),var(--bgp) 0);-webkit-mask:radial-gradient(circle,transparent 4px,#000 4.5px);mask:radial-gradient(circle,transparent 4px,#000 4.5px)}
${P} .spin{width:12px;height:12px;border-radius:50%;border:1.5px solid var(--bgp);border-top-color:var(--fg);animation:vspin .8s linear infinite;flex:none}
@keyframes vspin{to{transform:rotate(360deg)}}
${P} .okc{width:14px;height:14px;border-radius:50%;background:hsl(155 71% 27%);color:#fff;display:grid;place-items:center;flex:none}${P} .okc svg{width:9px;height:9px;stroke-width:2.6}
${P} .qd{width:12px;height:12px;border-radius:50%;border:1.5px dashed var(--dis)}
${P} .ban{border-radius:10px;background:var(--bgs);padding:10px 14px;margin:14px 0 0;font-size:13px;display:flex;align-items:center;gap:12px}
${P} .ban small{color:var(--mut);font-size:12px}
${P} .bar{height:4px;border-radius:2px;background:var(--bgp);overflow:hidden;width:180px;margin-left:auto}${P} .bar i{display:block;height:100%;background:var(--fg);transition:width .3s}
${P} .ph{display:flex;align-items:center;gap:14px}${P} .ph .fold{margin:0}
${P} .pmeta{font-size:12px;color:var(--mut);display:flex;gap:6px;align-items:center;margin-top:2px}${P} .pmeta svg{width:12px;height:12px}
${P} .cmp{border-radius:12px;box-shadow:var(--e2);background:#fff;padding:12px 12px 10px;margin:18px 0 10px;transition:box-shadow .2s}
${P} .cmp:focus-within{box-shadow:0 4px 12px 0 rgba(0,0,0,.06),0 0 0 1px hsla(40,6%,10%,.3)}
${P} .cmp textarea{display:block;width:100%;border:0;outline:0;resize:none;font:inherit;font-size:15px;line-height:22px;height:46px;color:var(--fg);background:none;padding:0 2px}
${P} .cmp textarea::placeholder{color:var(--mut)}
${P} .cr{display:flex;align-items:center;gap:6px}
${P} .chip{display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 8px;border-radius:6px;background:var(--bgs);font-size:12px;color:var(--sub);white-space:nowrap}${P} .chip svg{width:13px;height:13px}
${P} .sgs{display:flex;gap:6px;flex-wrap:wrap}
${P} .sgs button{height:28px;padding:0 10px;border-radius:999px;border:1px solid var(--bds);font-size:12px;color:var(--sub);background:#fff;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis}
${P} .tabs{white-space:nowrap;overflow:hidden}${P} .pgw:has(+.side.open) .tabs .btn span{display:none}${P} .sgs button:hover{color:var(--fg);background:var(--bgs)}
${P} .tabs{display:flex;gap:2px;border-bottom:1px solid var(--bd);margin:18px 0 0;align-items:center}
${P} .tab{height:38px;padding:0 10px;font-size:13px;color:var(--sub);border-bottom:2px solid transparent;margin-bottom:-1px}
${P} .tab:hover{color:var(--fg)}${P} .tab.on{color:var(--fg);border-color:var(--fg);font-weight:500}${P} .tab .c{color:var(--mut);margin-left:5px;font-weight:400}
${P} .tabs .btn{margin-left:6px}
${P} .lst table{width:100%;font-size:13px}
${P} .lst th{position:static;background:#fff;color:var(--mut);border-right:0;border-bottom:1px solid var(--bd);height:34px;font-weight:400}${P} .lst th:hover{background:#fff}
${P} .lst td{min-width:0;max-width:none;border-right:0;padding:9px 12px;white-space:nowrap;color:var(--sub)}
${P} .lst td:first-child{color:var(--fg);width:46%}
${P} .lst tbody tr{cursor:pointer}${P} .lst tbody tr:hover td{background:var(--bgs)}
${P} .lst tr.nw td{animation:vfade .9s}
${P} .fpath{display:flex;align-items:center;gap:6px;height:40px;font-size:13px;color:var(--sub)}${P} .fpath a{cursor:pointer}${P} .fpath a:hover{color:var(--fg)}${P} .fpath b{font-weight:500;color:var(--fg)}
${P} .ficon.xls{background:hsl(148 60% 32%)}
${P} .muted{color:var(--mut);font-size:13px;padding:22px 4px;text-align:center}
${P} .qmain{flex:1;display:flex;flex-direction:column;min-width:0}
${P} .thr{max-width:700px;margin:0 auto;padding:26px 8px 20px}
${P} .turn{margin-bottom:30px}
${P} .qq{font:400 22px/30px HarveySerif,Georgia,'Times New Roman',serif;margin-bottom:8px}
${P} .steps{font-size:12px;color:var(--sub);display:flex;flex-direction:column;gap:6px;margin:12px 0 14px}${P} .steps div{display:flex;gap:8px;align-items:center}
${P} .ans{font-size:14px;line-height:23px}${P} .ans p{margin:0 0 10px}${P} .ans ul{margin:0 0 10px;padding-left:20px}${P} .ans li{margin-bottom:4px}
${P} .ans table{font-size:13px;border:1px solid var(--bds);border-radius:8px;margin:4px 0 12px;width:100%;overflow:hidden}
${P} .ans th{position:static;background:var(--bgs);height:auto;padding:7px 10px;border-right:0;font-size:12px}${P} .ans th:hover{background:var(--bgs)}
${P} .ans td{min-width:0;max-width:none;padding:7px 10px;border-right:0;overflow-wrap:anywhere}${P} .qmain:has(+.side.open) .pgw{padding:0 12px!important}${P} .ans tr:last-child td{border-bottom:0}
${P} .ans .cite{margin-left:3px}
${P} .acts{display:flex;gap:4px;margin-top:6px}
${P} .fu{flex:none;padding:0 28px 14px}${P} .fu .cmp{max-width:700px;margin:0 auto;display:flex;align-items:center;gap:8px;padding:8px 8px 8px 14px}
${P} .fu textarea{height:24px;font-size:14px}
${P} .mdl:empty{display:none}
${P} .ovl{position:absolute;inset:0;background:hsla(40,6%,10%,.28);display:flex;align-items:center;justify-content:center;z-index:30;animation:vfo .15s}
@keyframes vfo{from{opacity:0}}
${P} .dlg{width:560px;max-height:640px;display:flex;flex-direction:column;background:#fff;border-radius:12px;box-shadow:var(--e3);animation:vpop .16s ease-out;position:relative}
${P} .dh{display:flex;align-items:center;padding:16px 14px 2px 20px;font-size:16px;font-weight:500}
${P} .dd{padding:0 20px;color:var(--sub);font-size:13px}
${P} .db{padding:14px 20px 16px;overflow:auto;display:flex;flex-direction:column;gap:14px}
${P} .df{display:flex;gap:8px;align-items:center;padding:12px 16px;border-top:1px solid var(--bd)}
${P} .fl>label{display:block;font-size:12px;font-weight:500;margin-bottom:5px}${P} .fl>small{display:block;font-size:12px;color:var(--mut);margin-top:5px}
${P} .inp{width:100%;height:34px;border:1px solid var(--bds);border-radius:8px;padding:0 10px;font:inherit;font-size:13px;outline:0;color:var(--fg);background:#fff}
${P} .inp:focus{border-color:var(--fg)}
${P} .srcs{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
${P} .so{border:1px solid var(--bds);border-radius:8px;padding:10px;font-size:12px;display:flex;flex-direction:column;gap:6px;text-align:left;font-weight:500}
${P} .so:hover{background:var(--bgs)}${P} .so.on{border-color:var(--fg);box-shadow:0 0 0 1px var(--fg)}
${P} .lg{width:22px;height:22px;border-radius:5px;display:grid;place-items:center;font:700 9px system-ui;color:#fff;background:var(--fg)}
${P} .dz{border:1px dashed var(--dis);border-radius:10px;background:var(--bgs);padding:22px;text-align:center;color:var(--sub);font-size:13px;transition:background .15s,border-color .15s}
${P} .dz.ov{border-color:var(--blue);background:hsl(220 79% 97%)}${P} .dz b{display:block;color:var(--fg);font-weight:500;margin:6px 0 2px}${P} .dz .btn{margin-top:10px}
${P} .dz>svg{width:22px;height:22px;color:var(--sub)}
${P} .frow{display:flex;align-items:center;gap:8px;height:30px;font-size:13px;padding:0 4px;border-bottom:1px solid var(--bd)}${P} .frow span{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}${P} .frow small{color:var(--mut);font-size:12px}
${P} .pick{border:1px solid var(--bds);border-radius:10px;overflow:hidden}
${P} .pick .pk{display:flex;align-items:center;gap:10px;height:40px;padding:0 12px;font-size:13px;border-bottom:1px solid var(--bd);width:100%;text-align:left}
${P} .pick .pk:last-child{border-bottom:0}${P} .pick .pk:hover{background:var(--bgs)}${P} .pick .pk.on{background:hsl(220 79% 97%)}
${P} .pick .pk[disabled]{color:var(--dis);cursor:default;background:none}${P} .pick .pk small{margin-left:auto;color:var(--mut);font-size:12px}
${P} .rd{width:14px;height:14px;border-radius:50%;border:1px solid var(--mut);flex:none}${P} .pk.on .rd{border:4px solid var(--fg)}
${P} .pr{display:flex;align-items:center;gap:10px;min-height:44px}
${P} .av2{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:600;color:#fff;flex:none}
${P} .pr .nm{flex:1;min-width:0;font-size:13px}${P} .pr .nm small{display:block;color:var(--mut);font-size:12px;line-height:16px}
${P} .sel2{height:28px;border:0;background:var(--bgs);border-radius:6px;font:inherit;font-size:12px;padding:0 8px;color:var(--fg);outline:0}
${P} .inv{display:flex;gap:8px;position:relative}
${P} .dir{position:absolute;top:38px;left:0;right:150px;background:#fff;border-radius:10px;box-shadow:var(--e2);padding:4px;z-index:3}
${P} .dir button{display:flex;width:100%;align-items:center;gap:10px;padding:6px 8px;border-radius:6px;text-align:left;font-size:13px}${P} .dir button:hover{background:var(--hov)}
${P} .dir small{display:block;color:var(--mut);font-size:12px}
${P} .gacc{display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bgs);border-radius:8px;font-size:13px}${P} .gacc small{display:block;color:var(--mut);font-size:12px}
${P} .note{font-size:12px;color:hsl(29 78% 34%);background:hsl(45 77% 94%);border-radius:8px;padding:8px 10px}
`;
function sv(p){return '<svg viewBox="0 0 16 16">'+p+'</svg>';}
var I={
asst:sv('<path d="M8 2.2l1.4 3.6 3.6 1.4-3.6 1.4L8 12.2 6.6 8.6 3 7.2l3.6-1.4z"/><path d="M12.5 11.5l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z"/>'),
vault:sv('<rect x="2" y="3" width="12" height="10.5" rx="2"/><path d="M2 6.5h12M6.5 9h3"/>'),
flow:sv('<rect x="2" y="2" width="5" height="5" rx="1.2"/><rect x="9" y="9" width="5" height="5" rx="1.2"/><path d="M7 4.5h2.5a2 2 0 0 1 2 2V9"/>'),
hist:sv('<path d="M2.5 8a5.5 5.5 0 1 0 1.7-4"/><path d="M2.5 2.5v2.5H5M8 5v3l2 1.3"/>'),
lib:sv('<path d="M3 2.5v11M6 2.5v11M9 3l3.5 10.3"/>'),
side:sv('<rect x="2" y="2.5" width="12" height="11" rx="2"/><path d="M6 2.5v11"/>'),
srch:sv('<circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5 13.5 13.5"/>'),
filt:sv('<path d="M2.5 4h11M4.5 8h7M6.5 12h3"/>'),
wrap:sv('<path d="M2.5 4h11M2.5 8h8.5a2 2 0 0 1 0 4H8.5M2.5 12h3"/><path d="M10 10.5 8.5 12l1.5 1.5"/>'),
disp:sv('<path d="M2.5 4.5h6M11.5 4.5h2M2.5 11.5h2M7.5 11.5h6"/><circle cx="10" cy="4.5" r="1.5"/><circle cx="6" cy="11.5" r="1.5"/>'),
plus:sv('<path d="M8 3v10M3 8h10"/>'),
x:sv('<path d="M4 4l8 8M12 4l-8 8"/>'),
chk:sv('<path d="M3.5 8.5l3 3 6-7"/>'),
bub:sv('<path d="M2.5 4a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 13.5 4v6a1.5 1.5 0 0 1-1.5 1.5H7l-3 2.5v-2.5a1.5 1.5 0 0 1-1.5-1.5z"/>'),
file:sv('<path d="M9 2H4.5A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5V6z"/><path d="M9 2v4h4M8 8v4M6 10h4"/>'),
cols:sv('<rect x="2" y="2.5" width="12" height="11" rx="1.5"/><path d="M6 2.5v11M10 2.5v11"/>'),
share:sv('<path d="M8 2v8M5 4.5 8 2l3 2.5"/><path d="M4 7.5H3.5v6h9v-6H12"/>'),
rep:sv('<path d="M2.5 8a5.5 5.5 0 1 0 1.6-3.9"/><path d="M2.5 2.5V5H5"/>'),
down:sv('<path d="M8 3v10M4 9l4 4 4-4"/>'),
tText:sv('<path d="M3 4h10M3 8h10M3 12h6"/>'),
tCls:sv('<path d="M2.5 2.5h5l6 6-5 5-6-6z"/><circle cx="5.5" cy="5.5" r="1"/>'),
tDate:sv('<rect x="2.5" y="3" width="11" height="10.5" rx="1.5"/><path d="M2.5 6.5h11M5.5 1.8v2.4M10.5 1.8v2.4"/>'),
tVerb:sv('<path d="M3 6.5c0-2 1-3 2.5-3.3M3 6.5h2.5v3H3zM8.5 6.5c0-2 1-3 2.5-3.3M8.5 6.5H11v3H8.5z"/>'),
tName:sv('<path d="M9 2H4.5A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5V6z"/><path d="M9 2v4h4"/>')
};
var TYI={'Free response':I.tText,'Classify':I.tCls,'Verbatim':I.tVerb,'Date':I.tDate};
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
law:{q:'What law governs this agreement?',h:'Governing law',ty:'Free response',kw:/govern|law|jurisdic/i,
a:function(d){return {tag:d.law[0],txt:d.law[0]+' law',sec:d.law[1],pass:d.law[2]};}},
coc:{q:'Is there a change of control clause?',h:'Change of control',ty:'Classify',kw:/control|merger|acqui/i,
a:function(d){return {tag:d.coc[0],txt:d.coc[1],sec:d.coc[2],pass:d.coc[3]};}},
term:{q:'Can either party terminate for convenience?',h:'Termination for convenience',ty:'Classify',kw:/terminat|conven|cancel/i,
a:function(d){return {tag:d.term[0],txt:d.term[1],sec:d.term[2],pass:d.term[3]};}},
asg:{q:'What are the restrictions on assignment?',h:'Assignment',ty:'Free response',kw:/assign|transfer/i,
a:function(d){return {tag:d.asg[0],txt:d.asg[0],sec:d.asg[1],pass:d.asg[2]};}}
};
var FILL=['The parties agree that the recitals above are incorporated into and form part of this Agreement.',
'Each party represents that it has full power and authority to enter into and perform its obligations under this Agreement.',
'All notices shall be in writing and delivered by hand, courier, or email with confirmation of receipt to the addresses set forth on the signature page.',
'Fees are payable within thirty (30) days of the invoice date. Late amounts accrue interest at one percent (1%) per month.',
'Neither party shall be liable for any indirect, incidental, or consequential damages arising out of this Agreement.'];
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function tagCls(t){return /^yes|^freely/i.test(t)?'t-y':/^no/i.test(t)?'t-n':/^unclear|^consent|affiliat/i.test(t)?'t-m':'t-0';}
function ficon(f){return /pdf$/.test(f)?'<span class="ficon pdf">PDF</span>':'<span class="ficon doc">DOC</span>';}
I.up=sv('<path d="M8 10.5V2.5M5 5.5l3-3 3 3"/><path d="M2.5 10v2a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-2"/>');
I.book=sv('<path d="M3 3.5A1.5 1.5 0 0 1 4.5 2H13v10H4.5A1.5 1.5 0 0 0 3 13.5zM3 13.5A1.5 1.5 0 0 0 4.5 15H13v-3"/>');
I.lock=sv('<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>');
I.ppl=sv('<circle cx="6" cy="5.5" r="2.3"/><path d="M1.8 13.5a4.2 4.2 0 0 1 8.4 0M10.5 3.4a2.3 2.3 0 0 1 0 4.4M12 9.6a4.2 4.2 0 0 1 2.2 3.9"/>');
I.link=sv('<path d="M7 9a3 3 0 0 0 4.2 0l2-2A3 3 0 0 0 9 2.8l-.8.8M9 7a3 3 0 0 0-4.2 0l-2 2A3 3 0 0 0 7 13.2l.8-.8"/>');
I.sync=sv('<path d="M13 6.5A5 5 0 0 0 3.6 5M3 9.5A5 5 0 0 0 12.4 11"/><path d="M13 3v3.5H9.5M3 13V9.5h3.5"/>');
I.fold=sv('<path d="M2 4.5A1.5 1.5 0 0 1 3.5 3h3l1.5 1.5h4.5A1.5 1.5 0 0 1 14 6v5.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5z"/>');
I.send=sv('<path d="M8 13V3M4 7l4-4 4 4"/>');
I.tbl=I.cols;
var REN=[['Yes','1-year renewal terms','60 days before term end','11.1','This Agreement shall automatically renew for successive one (1) year terms unless either party gives written notice of non-renewal at least sixty (60) days before the end of the then-current term.'],
['No','Renewal only by mutual written agreement','','12.3','Upon expiry of the Initial Term, this Agreement may be renewed only by mutual written agreement of the parties.'],
['Yes','2-year renewal terms','180 days before renewal','13.1','Following the Initial Term, this Agreement shall renew automatically for successive two (2) year periods unless terminated by either party on not less than one hundred eighty (180) days’ notice prior to renewal.'],
['No','Fixed 2-year term','','7.2','This Agreement shall remain in effect for two (2) years from the Effective Date and shall not renew.'],
['Yes','12-month renewal terms','30 days before expiration','19.3','Upon expiration of the Initial Term, this Agreement will automatically renew for successive twelve (12) month Renewal Terms unless Licensee provides notice of non-renewal at least thirty (30) days prior to expiration.'],
['No','Expires on completion of services','','5.1','This SOW expires upon completion of the Services described herein, unless earlier terminated.'],
['Yes','12-month renewal terms','90 days before expiration','23.1','This Agreement shall renew automatically for additional twelve (12) month terms unless either party notifies the other in writing of its intent not to renew at least ninety (90) days prior to expiration.'],
['No','Per purchase order, no fixed term','','2.1','Each Purchase Order constitutes a separate contract; these Terms have no fixed term and do not renew.']];
var FO=[0,'Supplier agreements','Supplier agreements',0,'Licensing & services','Licensing & services','Supplier agreements','Supplier agreements'];
var SZ=[1840,2410,960,312,3150,540,2230,184];
var EXTRA=[{d:{f:'Acme_Globex_MSA_Amendment_1.pdf',t:'Amendment No. 1',d:'Aug 2, 2024',p:'Acme Corp. and Globex Inc.'},sz:420},{d:{f:'Supplier_Spend_FY24.xlsx',t:'Spreadsheet',d:'Sep 30, 2024',p:'Acme Corp. Procurement'},sz:96}];
var OTH=[{n:'Acme v. Globex — Discovery',m:'2,418 files · 3.1 GB',sh:['SR','JL','TB'],src:'SharePoint',t:'Edited 2 days ago'},{n:'Lease Portfolio Q3',m:'312 files · 540 MB',sh:[],t:'Edited last week'},{n:'Board materials 2024',m:'96 files · 210 MB',sh:['JL'],src:'Google Drive',t:'Edited Aug 14'}];
var KB=[{n:'Precedent Library',m:'Templates & precedents · 1,204 files'},{n:'Commercial Playbook',m:'Negotiation positions · 38 files'},{n:'Clause Bank',m:'Approved fallback language · 412 files'}];
var SRC={up:['Upload from computer','',I.up],im:['iManage','iM'],sp:['SharePoint','S'],gd:['Google Drive','G']};
var DIR=[{n:'Sam Rivera',e:'sam.rivera@acmelegal.com'},{n:'Jordan Lee',e:'jordan.lee@acmelegal.com'},{n:'Taylor Brooks',e:'taylor.brooks@acmelegal.com'},{n:'Dana Okafor',e:'dana@outsidecounsel.co',x:1}];
var COL=['hsl(220 50% 45%)','hsl(155 45% 34%)','hsl(16 60% 48%)','hsl(276 35% 46%)','hsl(196 60% 38%)'];
var SUGQ=['Which supplier agreements auto-renew and what are the notice periods?','What law governs each agreement?','Which agreements have a change of control clause?'];
function ini(n){return n.split(/[ .@]/).filter(Boolean).slice(0,2).map(function(s){return s[0].toUpperCase();}).join('');}
function fsz(k){return k>=1000?(k/1000).toFixed(1)+' MB':k+' KB';}
function ficon2(f){return /xlsx$/.test(f)?'<span class="ficon xls">XLS</span>':ficon(f);}

window.DEMOS['vault']={frame:'browser',title:'Harvey Vault',url:'app.harvey.ai/vault',
caption:'Create a vault and upload files, ask a question across every document and open the cited sources, build a review table, then share it. Follow the “Try it” steps on the left.',
sources:['https://www.harvey.ai/platform/vault','https://www.harvey.ai/blog/introducing-the-next-version-of-vault','https://help.harvey.ai/release-notes/category/review-tables','https://ailearninghub.law.stanford.edu/harvey-ai-at-sls/documents-and-tables/'],
mount:function(root){
var T=[],S;
function later(fn,ms){var t=setTimeout(fn,ms);T.push(t);return t;}
function clearT(){T.forEach(clearTimeout);T=[];}
function init(){S={view:'home',fal:null,folder:null,tab:'files',qs:[],cur:null,rt:null,people:[],done:{},dlg:null,vs:'',
cols:[],ans:{},verified:{},sel:null,search:'',filter:null,wrap:false};}
init();
root.innerHTML='<style>'+CSS+'</style>'+
'<aside class="sb"><div class="sbh"><span class="wm">Harvey</span><span class="ib">'+I.side+'</span></div>'+
'<div class="ni" data-a="nav-asst">'+I.asst+'Assistant</div><div class="ni on" data-a="home">'+I.vault+'Vault</div><div class="subm"></div>'+
'<div class="ni" data-a="nav-flow">'+I.flow+'Workflows</div><div class="ni" data-a="nav-hist">'+I.hist+'History</div><div class="ni" data-a="nav-lib">'+I.lib+'Library</div>'+
'<div class="guide"></div>'+
'<div class="me"><div class="av">A</div><div>Alex Jordan<small>Acme Legal</small></div></div></aside>'+
'<section class="card"><div class="vw"></div><div class="mdl"></div><div class="toast"></div></section>';
var $=function(s){return root.querySelector(s);};
var vw=$('.vw'),mdl=$('.mdl'),toastEl=$('.toast'),card=$('.card');
function toast(m){toastEl.innerHTML=esc(m);toastEl.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(function(){toastEl.classList.remove('show');},2200);}
function closePops(){root.querySelectorAll('.pop').forEach(function(p){p.remove();});}
function colById(id){return S.cols.filter(function(c){return c.id===id;})[0];}
function F(){return S.fal;}
function NM(){return esc(F()?F().name:'Project Falcon');}
var STEPS=[['up','Upload files'],['ask','Ask the vault'],['rt','Review table'],['share','Share']];
function nextStep(){for(var i=0;i<STEPS.length;i++)if(!S.done[STEPS[i][0]])return STEPS[i][0];return null;}
function sbDraw(){
var nx=nextStep();
$('.subm').innerHTML=(F()?'<div data-a="proj" class="'+(S.view!=='home'?'on':'')+'">'+NM()+'</div>':'')+OTH.slice(0,2).map(function(v,i){return '<div data-a="oth" data-i="'+i+'">'+esc(v.n)+'</div>';}).join('')+'<div data-a="kb">Precedent Library</div>';
$('.ni.on').classList.toggle('on',true);
$('.guide').innerHTML='<div class="gh">Try it<button class="btn" data-a="reset">'+I.rep+'Replay</button></div>'+STEPS.map(function(s,i){var d=S.done[s[0]];
return '<button class="gs'+(d?' dn':s[0]===nx?' nx':'')+'" data-a="step" data-s2="'+s[0]+'"><span class="gn">'+(d?I.chk:i+1)+'</span>'+s[1]+'</button>';}).join('');
}
function mark(k){if(!S.done[k]){S.done[k]=1;sbDraw();if(!nextStep())later(function(){toast('That’s the Vault tour. Replay any time.');},2400);}}
function hdr(crumbs,right){return '<div class="hdr"><div class="crumb">'+crumbs+'</div><span class="sp"></span>'+right+'</div>';}
function shareBtn(){var n=S.people.length;return '<button class="btn sec sm'+(S.done.rt&&!S.done.share?' pulse':'')+'" data-a="share">'+(n?'<span class="avs" style="margin:0 2px 0 4px">'+S.people.slice(0,3).map(function(p,i){return '<i style="background:'+COL[i+1]+'">'+ini(p.n)+'</i>';}).join('')+'</span>Shared':I.share+'Share')+'</button>';}
function draw(){closePops();
var v=S.view;
if(v==='home')drawHome();else if(v==='proj')drawProj();else if(v==='query')drawQuery();else drawReview();
sbDraw();
}
function go(v){S.view=v;draw();}
/* ---------- home ---------- */
function vcard(v,i){return '<button class="vc" data-a="oth" data-i="'+i+'"><span class="fold"></span><b>'+esc(v.n)+'</b><span class="m">'+v.m+'</span><span class="ft">'+(v.src?I.sync+v.src:I.lock+'Private')+'<span class="avs">'+v.sh.map(function(s,j){return '<i style="background:'+COL[j+1]+'">'+s+'</i>';}).join('')+'</span></span></button>';}
function homeGrid(){var q=S.vs.toLowerCase(),h='';
if(!q)h+='<button class="vc nw'+(F()?'':' pulse')+'" data-a="newv"><span class="pl">'+I.plus+'</span><b>New vault</b><span class="m">Create a new vault to upload and query documents</span></button>';
var f=F();if(f&&F().name.toLowerCase().indexOf(q)>=0)h+='<button class="vc" data-a="proj"><span class="fold"></span><b>'+NM()+'</b><span class="m">'+f.files.length+' files · '+fsz(tot())+'</span><span class="ft">'+(f.src!=='up'?I.sync+SRC[f.src][0]:S.people.length?I.ppl+'Shared':I.lock+'Private')+'<span class="avs">'+S.people.slice(0,3).map(function(p,j){return '<i style="background:'+COL[j+1]+'">'+ini(p.n)+'</i>';}).join('')+'</span></span></button>';
OTH.forEach(function(v,i){if(v.n.toLowerCase().indexOf(q)>=0)h+=vcard(v,i);});
return h||'<div class="muted" style="grid-column:1/-1">No vault found</div>';}
function drawHome(){
vw.innerHTML=hdr('<b>Vault</b>','<div class="srch">'+I.srch+'<input class="vsi" placeholder="Search vaults" value="'+esc(S.vs)+'"></div><button class="btn pri sm" data-a="newv">'+I.plus+'New vault</button>')+
'<div class="pgw"><h1>Vault</h1><p class="lede">Store and organize up to 100,000 files per vault. Ask questions across a whole vault with cited answers, extract data into review tables, and use your vaults across Assistant, Workflows and the Word and Outlook add-ins.</p>'+
'<div class="sec">Your vaults<small>· Recently viewed</small></div><div class="vg hg">'+homeGrid()+'</div>'+
'<div class="sec">Knowledge bases<small>· Shared with your team</small></div><div class="vg">'+KB.map(function(k){return '<button class="vc kb" data-a="kb"><span class="bk">'+I.book+'</span><b>'+k.n+'</b><span class="m">'+k.m+'</span></button>';}).join('')+
'<button class="vc kb nw" data-a="newkb"><span class="bk">'+I.plus+'</span><b>New knowledge base</b><span class="m">Precedents, templates, playbooks</span></button></div></div>';
var vi=$('.vsi');vi.addEventListener('input',function(){S.vs=vi.value;$('.hg').innerHTML=homeGrid();});
}
/* ---------- project ---------- */
function tot(){return F().files.reduce(function(s,f){return s+f.sz;},0);}
function stat(f){return f.st==='ready'?'<span class="stat"><span class="okc">'+I.chk+'</span>Ready</span>':f.st==='up'?'<span class="stat"><span class="ring" style="--p:'+f.p+'"></span>Uploading '+f.p+'%</span>':f.st==='proc'?'<span class="stat"><span class="spin"></span>Processing</span>':'<span class="stat"><span class="qd"></span>Queued</span>';}
function pmeta(){var f=F();return f.files.length+' files · '+fsz(tot())+' · '+(f.src==='up'?'Created just now':I.sync+'Synced from '+SRC[f.src][0]+' · just now')+' · '+(S.people.length?'Shared with '+S.people.length:I.lock+'Private');}
function drawProj(){
var f=F(),nx=nextStep();
vw.innerHTML=hdr('<a data-a="home">Vault</a><i>/</i><b>'+NM()+'</b>',shareBtn()+'<button class="btn sec sm" data-a="addf">'+I.up+'Add files</button>')+
'<div class="body"><div class="pgw"><div class="ph"><span class="fold"></span><div><h1 style="font-size:24px;line-height:30px">'+NM()+'</h1><div class="pmeta">'+pmeta()+'</div></div></div>'+
'<div class="cmp'+(nx==='ask'?' pulse':'')+'"><textarea class="pq" placeholder="Ask a question about this vault…"></textarea><div class="cr"><span class="chip vch">'+I.vault+''+NM()+' · '+f.files.length+' files</span><span class="sp"></span><button class="btn pri sm" data-a="askgo">'+I.send+'Ask</button></div></div>'+
'<div class="sgs">'+SUGQ.map(function(q,i){return '<button data-a="sugq" data-i="'+i+'">'+esc(q)+'</button>';}).join('')+'</div>'+
'<div class="pbody"></div></div><div class="side"></div></div>';
drawPB();
$('.pq').addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();askFromBox();}});
}
function upd(){if(S.view==='proj'&&$('.pbody')){drawPB();$('.pmeta').innerHTML=pmeta();$('.vch').innerHTML=I.vault+NM()+' · '+F().files.length+' files';}}
function drawPB(){
var f=F(),fs=f.files,n=fs.length,up=fs.filter(function(x){return x.st==='queued'||x.st==='up';}).length,pr=fs.filter(function(x){return x.st==='proc';}).length,b='';
if(up){var dn=n-up;b='<div class="ban"><span class="spin"></span><div><b style="font-weight:500">Uploading files</b> · '+dn+' of '+n+' uploaded<br><small>About '+Math.ceil(up*.4+1.2)+'s left · Do not close your window while files are uploading</small></div><span class="bar"><i style="width:'+(dn*100/n)+'%"></i></span></div>';}
else if(pr){var rd=n-pr;b='<div class="ban"><span class="spin"></span><div><b style="font-weight:500">Harvey is processing your files</b> · '+rd+' of '+n+' ready<br><small>Files can be queried as soon as they’re ready</small></div><span class="bar"><i style="width:'+(rd*100/n)+'%"></i></span></div>';}
var t=S.tab,h=b+'<div class="tabs">'+[['files','Files',n],['queries','Queries',S.qs.length],['tables','Review tables',S.rt?1:0]].map(function(x){return '<button class="tab'+(t===x[0]?' on':'')+'" data-a="tab" data-t="'+x[0]+'">'+x[1]+'<span class="c">'+x[2]+'</span></button>';}).join('')+
'<span class="sp"></span><button class="btn sec sm" data-a="newfolder" title="New folder">'+I.fold+'<span>New folder</span></button><button class="btn sec sm'+(nextStep()==='rt'?' pulse':'')+'" data-a="mkrt" title="Create review table">'+I.tbl+'<span>Create review table</span></button></div><div class="lst">';
if(t==='files'){
var fo=S.folder,rows=fs.filter(function(x){return (x.fo||0)===(fo||0);}),folders=fo?[]:f.folders;
h+='<div class="fpath">'+(fo?'<a data-a="fold" data-f="">All files</a><i style="color:var(--dis);font-style:normal">/</i><b>'+esc(fo)+'</b>':'<b>All files</b>')+'</div>';
h+='<table><thead><tr><th>Name</th><th>Type</th><th>Size</th><th>Status</th><th>Uploaded</th></tr></thead><tbody>';
folders.forEach(function(nm){var c=fs.filter(function(x){return x.fo===nm;});h+='<tr data-a="fold" data-f="'+esc(nm)+'"><td><div class="fi"><span class="fold sm"></span><span>'+esc(nm)+'</span></div></td><td>Folder</td><td>'+c.length+' files</td><td>'+(c.length&&c.every(function(x){return x.st==='ready';})?'<span class="stat"><span class="okc">'+I.chk+'</span>Ready</span>':c.length?'<span class="stat"><span class="spin"></span>In progress</span>':'—')+'</td><td>Just now</td></tr>';});
rows.forEach(function(x){h+='<tr data-a="file" data-i="'+fs.indexOf(x)+'" class="'+(x.nw?'nw':'')+'"><td><div class="fi">'+ficon2(x.d.f)+'<span>'+esc(x.d.f)+'</span></div></td><td>'+esc(x.d.t)+'</td><td>'+fsz(x.sz)+'</td><td>'+stat(x)+'</td><td>'+(x.st==='ready'?'Just now':'—')+'</td></tr>';x.nw=0;});
h+='</tbody></table>'+(!rows.length&&!folders.length?'<div class="muted">This folder is empty. Drag files here or use Add files.</div>':'');
}else if(t==='queries'){
h+=S.qs.length?'<table><thead><tr><th>Query</th><th>Type</th><th>Sources</th><th>Created</th></tr></thead><tbody>'+S.qs.map(function(q,i){return '<tr data-a="openq" data-i="'+i+'"><td><div class="fi">'+I.bub+'<span>'+esc(q.turns[0].q)+'</span></div></td><td>'+(q.scope?'Review table query':'Vault query')+'</td><td>'+(q.turns[0].done?q.turns.reduce(function(s,x){return s+x.cites.length;},0)+' citations':'Generating…')+'</td><td>Just now</td></tr>';}).join('')+'</tbody></table>':'<div class="muted">No queries yet. Ask a question above to search every file in this vault.</div>';
}else{
h+=S.rt?'<table><thead><tr><th>Name</th><th>Rows</th><th>Columns</th><th>Created</th></tr></thead><tbody><tr data-a="openrt"><td><div class="fi">'+I.tbl+'<span>'+esc(S.rt.n)+'</span></div></td><td>'+DOCS.length+' files</td><td>'+(S.cols.length+2)+'</td><td>Just now</td></tr></tbody></table>':'<div class="muted">No review tables yet. Create one to extract and compare data points across every file.</div>';
}
$('.pbody').innerHTML=h+'</div>';
}
function mkFal(src,instant,nm){
S.fal={name:(nm||'').trim()||'Project Falcon',src:src,folders:['Supplier agreements','Licensing & services'],files:DOCS.map(function(d,i){return {d:d,fo:FO[i],sz:SZ[i],st:instant?'ready':'queued',p:0};})};
S.folder=null;S.tab='files';
if(!instant)startUpload(S.fal.files,function(){mark('up');toast('All '+DOCS.length+' files are ready · ask Harvey a question');});
}
function startUpload(fs,cb){var t=200,left=fs.length;
fs.forEach(function(f){
later(function(){f.st='up';f.p=15;upd();},t);later(function(){f.p=60;upd();},t+180);
later(function(){f.p=100;f.st='proc';upd();},t+360);
later(function(){f.st='ready';upd();if(!--left&&cb)cb();},t+1300+Math.random()*900);
t+=380;});
}
function ensure(){if(!F())mkFal('up',true);}
/* ---------- dialogs ---------- */
function dlgDraw(){
var d=S.dlg;if(!d){mdl.innerHTML='';return;}
var h='<div class="ovl" data-a="dlgbg"><div class="dlg">';
if(d.k==='share'){
h+='<div class="dh">Share “'+NM()+'”<span class="sp"></span><button class="ib" data-a="dlgx" aria-label="Close">'+I.x+'</button></div><div class="dd">Give colleagues or external partners access to this vault.</div><div class="db">'+
'<div class="inv"><input class="inp shi" placeholder="Add people by name or email" autocomplete="off"><select class="sel2 shp" style="height:34px"><option>Can view</option><option>Can edit</option></select><button class="btn pri sm" style="height:34px" data-a="invite">Invite</button><div class="dirw"></div></div>'+
'<div><div class="pr"><span class="av2" style="background:'+COL[0]+'">AJ</span><div class="nm">Alex Jordan (you)<small>alex.jordan@acmelegal.com</small></div><span class="stat" style="padding-right:8px">Owner</span></div>'+
S.people.map(function(p,i){return '<div class="pr"><span class="av2" style="background:'+COL[(i+1)%5]+'">'+ini(p.n)+'</span><div class="nm">'+esc(p.n)+(p.x?' <span class="tag t-m" style="margin-left:4px">External</span>':'')+'<small>'+esc(p.e)+'</small></div><select class="sel2" data-pi="'+i+'"><option'+(p.pm==='Can view'?' selected':'')+'>Can view</option><option'+(p.pm==='Can edit'?' selected':'')+'>Can edit</option><option>Remove</option></select></div>';}).join('')+'</div>'+
(S.people.some(function(p){return p.x;})?'<div class="note">External partners only see this vault — not the rest of your workspace.</div>':'')+
'<div class="gacc">'+I.lock+'<div>Only people added can open this vault<small>Access applies to files, queries and review tables in the vault</small></div></div></div>'+
'<div class="df"><button class="btn ghost sm" data-a="copylink">'+I.link+'Copy link</button><span class="sp"></span><button class="btn pri sm" data-a="sharedone">Done</button></div>';
}else{
var add=d.k==='add',dms=d.src!=='up';
h+='<div class="dh">'+(add?'Add files to '+NM()+'':'Create vault')+'<span class="sp"></span><button class="ib" data-a="dlgx" aria-label="Close">'+I.x+'</button></div><div class="dd">'+(add?'Upload files or add them from an integration.':'Upload files or sync folders from your document management system.')+'</div><div class="db">'+
(add?'':'<div class="fl"><label>Vault name</label><input class="inp dn" value="'+esc(d.name)+'"></div><div class="fl"><label>Description <span style="color:var(--mut);font-weight:400">(optional)</span></label><input class="inp dds" value="'+esc(d.desc)+'" placeholder="Describe what this vault should be used for"></div>')+
'<div class="fl"><label>File source</label><div class="srcs">'+Object.keys(SRC).map(function(k){var s=SRC[k];return '<button class="so'+(d.src===k?' on':'')+'" data-a="src" data-k="'+k+'"><span class="lg">'+(s[2]||s[1])+'</span>'+s[0]+'</button>';}).join('')+'</div>'+(add?'':'<small>File source cannot be changed later.</small>')+'</div>';
var list=add?EXTRA:DOCS.map(function(x,i){return {d:x,sz:SZ[i]};});
if(!dms){h+=d.picked?'<div class="fl"><label>'+list.length+' files selected</label><div style="max-height:150px;overflow:auto">'+list.map(function(x){return '<div class="frow">'+ficon2(x.d.f)+'<span>'+esc(x.d.f)+'</span><small>'+fsz(x.sz)+'</small></div>';}).join('')+'</div></div>':
'<div class="dz">'+I.up+'<b>Drag and drop files or folders</b>PDF, Word, Excel, email and more · up to 100,000 files per vault<br><button class="btn sec sm" data-a="pick">Choose files</button></div>';}
else{var fl=add?[['Commercial › Supplier agreements › Amendments','2 files']]:[['Commercial › Supplier agreements','8 files'],['Real estate › Lease portfolio','Already synced to a vault',1],['Litigation › Acme v. Globex','Already synced to a vault',1]];
h+='<div class="fl"><label>Choose a folder in '+SRC[d.src][0]+'</label><div class="pick">'+fl.map(function(x,i){return '<button class="pk'+(d.picked&&!i?' on':'')+'" data-a="pk"'+(x[2]?' disabled':'')+'><span class="rd"></span>'+I.fold+esc(x[0])+'<small>'+x[1]+'</small></button>';}).join('')+'</div><small>Harvey keeps the vault in sync with this folder.</small></div>';}
h+='</div><div class="df"><span class="sp"></span><button class="btn sec sm" data-a="dlgx">Cancel</button><button class="btn pri sm" data-a="dlgok"'+(d.picked?'':' disabled')+'>'+(add?(dms?'Sync folder':'Upload '+list.length+' files'):'Create vault')+'</button></div>';
}
mdl.innerHTML=h+'</div></div>';
var dz=mdl.querySelector('.dz');
if(dz){dz.addEventListener('dragover',function(e){e.preventDefault();dz.classList.add('ov');});dz.addEventListener('dragleave',function(){dz.classList.remove('ov');});dz.addEventListener('drop',function(e){e.preventDefault();S.dlg.picked=1;dlgDraw();});}
var n=mdl.querySelector('.dn');if(n)n.addEventListener('input',function(){d.name=n.value;});
var ds=mdl.querySelector('.dds');if(ds)ds.addEventListener('input',function(){d.desc=ds.value;});
var si=mdl.querySelector('.shi');if(si){si.addEventListener('input',dirDraw);si.addEventListener('focus',dirDraw);si.addEventListener('keydown',function(e){if(e.key==='Enter')invite();});}
mdl.querySelectorAll('[data-pi]').forEach(function(s){s.addEventListener('change',function(){var i=+s.dataset.pi;if(s.value==='Remove'){S.people.splice(i,1);dlgDraw();}else S.people[i].pm=s.value;});});
}
function dirMatches(){var si=mdl.querySelector('.shi'),q=si?si.value.trim().toLowerCase():'';
var m=DIR.filter(function(p){return !S.people.some(function(x){return x.e===p.e;})&&(!q||(p.n+' '+p.e).toLowerCase().indexOf(q)>=0);});
if(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/.test(q)&&!m.length&&!S.people.some(function(x){return x.e===q;}))m=[{n:q.split('@')[0],e:q,x:!/@acmelegal\.com$/.test(q)}];
return m;}
function dirDraw(){var w=mdl.querySelector('.dirw'),m=dirMatches();
w.innerHTML=m.length?'<div class="dir">'+m.map(function(p,i){return '<button data-a="addp" data-i="'+i+'"><span class="av2" style="background:'+COL[(i+2)%5]+';width:24px;height:24px;font-size:10px">'+ini(p.n)+'</span><span>'+esc(p.n)+(p.x?' <span class="tag t-m">External</span>':'')+'<small>'+esc(p.e)+'</small></span></button>';}).join('')+'</div>':'';}
function invite(i){var m=dirMatches(),p=m[i||0];if(!p){toast('Type a name or an email address');return;}
S.people.push({n:p.n,e:p.e,x:p.x,pm:mdl.querySelector('.shp').value});dlgDraw();toast((p.x?'External partner ':'')+p.n+' added · '+S.people[S.people.length-1].pm.toLowerCase());
if(S.view==='proj')$('.pmeta').innerHTML=pmeta();}
function openDlg(k){S.dlg=k==='share'?{k:k}:{k:k,src:'up',picked:0,name:'Project Falcon',desc:'Supplier agreements for the Falcon acquisition'};dlgDraw();}
function dlgOk(){var d=S.dlg;if(!d.picked)return;S.dlg=null;dlgDraw();
if(d.k==='new'){mkFal(d.src,false,d.name);go('proj');toast(d.src==='up'?'Vault created · uploading '+DOCS.length+' files':'Syncing folder from '+SRC[d.src][0]);}
else{var f=F(),fs=EXTRA.map(function(x){return {d:x.d,sz:x.sz,fo:0,st:'queued',p:0,nw:1};});f.files=f.files.concat(fs);S.tab='files';S.folder=null;upd();startUpload(fs,function(){mark('up');toast('2 files added to '+F().name);});}
}
/* ---------- ask the vault ---------- */
function askKey(q){if(/renew|auto|expir|notice period/i.test(q))return 'ren';for(var k in QS)if(QS[k].kw.test(q))return k;return null;}
function build(q,scope){
var cites=[],k=askKey(q),h='';
function c(i,sec,pass){cites.push({d:i,sec:sec,pass:pass});return '<span class="cite" data-c="'+cites.length+'">'+cites.length+'</span>';}
if(k==='ren'){
var y=[],n=[];DOCS.forEach(function(d,i){(REN[i][0]==='Yes'?y:n).push(i);});
h='<p><b>'+y.length+' of the '+DOCS.length+' agreements</b> in this vault renew automatically. The notice needed to stop renewal ranges from 30 to 180 days.</p><table><thead><tr><th>Agreement</th><th>Renewal</th><th>Notice to prevent renewal</th></tr></thead><tbody>'+
y.map(function(i){var r=REN[i];return '<tr><td>'+esc(DOCS[i].f)+'</td><td>'+r[1]+'</td><td>'+r[2]+c(i,r[3],r[4])+'</td></tr>';}).join('')+'</tbody></table>'+
'<p><b>Do not auto-renew:</b></p><ul>'+n.map(function(i){var r=REN[i];return '<li>'+esc(DOCS[i].f)+' — '+r[1].toLowerCase()+c(i,r[3],r[4])+'</li>';}).join('')+'</ul>'+
'<p>The longest lead time is the Globex Distribution Agreement: notice is due 180 days before each renewal'+c(2,REN[2][3],REN[2][4])+'.</p>';
}else if(k){
var g={},o=[];DOCS.forEach(function(d,i){var a=QS[k].a(d);if(!g[a.tag]){g[a.tag]=[];o.push(a.tag);}g[a.tag].push([i,a]);});
h='<p>Here is how the '+DOCS.length+(scope?' rows in this review table':' agreements in this vault')+' compare on <b>'+QS[k].h.toLowerCase()+'</b>:</p><ul>'+o.map(function(t){return '<li><b>'+esc(t)+'</b> ('+g[t].length+'): '+g[t].map(function(x){var a=x[1];return esc(DOCS[x[0]].f)+(a.txt!==t&&a.txt!==t+' law'?' — '+esc(a.txt.charAt(0).toLowerCase()+a.txt.slice(1)):'')+(a.sec==='—'?'':c(x[0],a.sec,a.pass));}).join('; ')+'</li>';}).join('')+'</ul>'+
'<p>Open a review table to see this side by side for every file.</p>';
}else{
h='<p>This vault holds '+DOCS.length+' commercial agreements with Acme Corp. Here is what each covers:</p><ul>'+DOCS.map(function(d,i){return '<li><b>'+esc(d.f)+'</b> — '+esc(d.t)+' between '+esc(d.p)+', effective '+esc(d.d)+c(i,'Preamble','This '+d.t+' (the “Agreement”) is entered into as of '+d.d+' by and between '+d.p+'.')+'</li>';}).join('')+'</ul><p>Ask about renewal, governing law, change of control, termination or assignment for a clause-level comparison.</p>';
}
return {q:q,cites:cites,toks:h.match(/<[^>]+>|[^<\s]+\s*|\s+/g),pos:0,st:0,done:false};
}
function askFromBox(){var b=$('.pq'),q=b&&b.value.trim();if(!q){toast('Type a question or pick a suggestion');b&&b.focus();return;}ask(q);}
function ask(q,scope){ensure();var Q={turns:[],scope:scope};S.qs.unshift(Q);S.cur=Q;run(Q,q);go('query');}
function run(Q,q){var t=build(q,Q.scope);Q.turns.push(t);var ti=Q.turns.length-1;dq(Q,ti);
later(function(){t.st=1;dq(Q,ti);},650);later(function(){t.st=2;dq(Q,ti);},1300);
later(function tick(){t.st=3;t.pos=Math.min(t.toks.length,t.pos+4);if(t.pos>=t.toks.length){t.done=true;if(!Q.scope)mark('ask');}dq(Q,ti);if(!t.done)later(tick,32);},1800);
}
function turnHtml(Q,ti){var t=Q.turns[ti],n=F().files.length,s=t.st;
function st(i,l){return '<div>'+(s>i?'<span class="okc">'+I.chk+'</span>':'<span class="spin"></span>')+l+'</div>';}
return '<div class="turn" data-t="'+ti+'"><div class="qq">'+esc(t.q)+'</div><span class="chip">'+(Q.scope?I.tbl+esc(Q.scope):I.vault+''+NM()+' · '+n+' files')+'</span>'+
(t.done?'<div class="steps"><div><span class="okc">'+I.chk+'</span>Searched '+n+' files · '+t.cites.length+' citations</div></div>':'<div class="steps">'+st(0,'Reading '+n+' files')+(s>=1?st(1,'Finding relevant passages'):'')+(s>=2?st(2,'Writing answer'):'')+'</div>')+
'<div class="ans">'+t.toks.slice(0,t.pos).join('')+'</div>'+(t.done?'<div class="acts"><button class="btn ghost sm" data-a="copy">Copy</button><button class="btn ghost sm" data-a="exportw">'+I.down+'Export</button></div>':'')+'</div>';}
function dq(Q,ti){if(S.view!=='query'||S.cur!==Q)return;var el=root.querySelector('.turn[data-t="'+ti+'"]'),sc=$('.qmain .pgw');if(!el)return;
var pin=sc.scrollHeight-sc.scrollTop-sc.clientHeight<60;el.outerHTML=turnHtml(Q,ti);if(pin)sc.scrollTop=sc.scrollHeight;}
function drawQuery(){var Q=S.cur;
vw.innerHTML=hdr('<a data-a="home">Vault</a><i>/</i><a data-a="proj">'+NM()+'</a><i>/</i>'+(Q.scope?'<a data-a="openrt">'+esc(Q.scope)+'</a><i>/</i>':'')+'<b>Query</b>',shareBtn()+'<button class="btn sec sm" data-a="exportw">'+I.down+'Export</button>')+
'<div class="body"><div class="qmain"><div class="pgw" style="padding:0 28px"><div class="thr">'+Q.turns.map(function(t,i){return turnHtml(Q,i);}).join('')+'</div></div>'+
'<div class="fu"><div class="cmp"><textarea class="fq" placeholder="Ask a follow-up…"></textarea><button class="btn pri sm" data-a="fugo">'+I.send+'</button></div></div></div><div class="side"></div></div>';
var fq=$('.fq');fq.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();followUp();}});
var sc=$('.qmain .pgw');sc.scrollTop=sc.scrollHeight;
}
function followUp(){var fq=$('.fq'),q=fq.value.trim();if(!q){toast('Type a follow-up question');return;}var Q=S.cur;
if(Q.turns.some(function(t){return !t.done;})){toast('Wait for the current answer to finish');return;}
fq.value='';var th=$('.thr');run(Q,q);th.insertAdjacentHTML('beforeend',turnHtml(Q,Q.turns.length-1));var sc=$('.qmain .pgw');sc.scrollTop=sc.scrollHeight;}
/* ---------- document preview (shared) ---------- */
function showDoc(d,o){var side=$('.side');if(!side)return;o=o||{};
var paras=FILL.slice(0,3).map(function(t,j){return '<p><b>'+(j+1)+'.</b> '+t+'</p>';});
if(o.sec){paras.push('<p style="text-align:center;color:#999">• • •</p>',o.sec==='—'?'<p><b>17.</b> [Reserved.]</p>':'<p><b>'+esc(o.sec)+'</b> <mark>'+esc(o.pass)+'</mark></p>','<p>'+FILL[3]+'</p><p>'+FILL[4]+'</p>');}
else paras.unshift('<p>This '+esc(d.t)+' is entered into as of '+esc(d.d)+' by and between '+esc(d.p.replace(/\.$/,''))+'.</p>'),paras.push('<p>'+FILL[3]+'</p><p>'+FILL[4]+'</p>');
var pg=o.pg||2;
side.innerHTML='<div class="si"><div class="sh">'+(o.lab?'<span class="r">'+o.lab+'</span><span class="r">/</span>':'')+'<b>'+esc(d.f)+'</b>'+(o.pct!=null?'<span class="pct">'+o.pct+'% verified</span>':'')+'<button class="ib" data-s="x" aria-label="Close">'+I.x+'</button></div>'+(o.ac||'')+
'<div class="pg"'+(o.ac?'':' style="margin-top:4px"')+'><div class="pgh">'+ficon2(d.f)+'<b>'+esc(d.f)+'</b><span>Page '+pg+' of 14</span></div><div class="paper"><h5>'+esc(d.t.toUpperCase())+'</h5><div class="sub">'+esc(d.p)+' · Effective '+esc(d.d)+'</div>'+paras.join('')+'<div class="pgn">'+pg+'</div></div></div></div>';
side.classList.add('open');var tb=$('.tb');if(tb)tb.classList.add('tight');
var m=side.querySelector('mark');if(m)later(function(){var p=side.querySelector('.pg');if(p&&m)p.scrollTop=m.offsetTop-p.offsetTop-80;},280);
}
function openCite(el){var Q=S.cur,ti=+el.closest('.turn').dataset.t,n=+el.dataset.c,c=Q.turns[ti].cites[n-1],d=DOCS[c.d];
root.querySelectorAll('.ans .cite.on').forEach(function(x){x.classList.remove('on');});el.classList.add('on');
showDoc(d,{sec:c.sec,pass:c.pass,lab:'Citation '+n,pg:3+c.d%5,ac:'<div class="ac"><div class="q">'+I.bub+'Source '+n+' · Section '+esc(c.sec)+'</div><div class="a" style="font-size:13px;line-height:20px">“'+esc(c.pass)+'”</div><div class="why">The cited passage is highlighted in the document below.</div></div>'});}
/* ---------- review table ---------- */
function drawReview(){
vw.innerHTML=hdr('<a data-a="home">Vault</a><i>/</i><a data-a="proj">'+NM()+'</a><i>/</i><b>'+esc(S.rt.n)+'</b>',shareBtn()+'<button class="btn sec sm" data-a="export">'+I.down+'Export</button>')+
'<div class="tb"><button class="btn ghost sm" data-a="askt">'+I.bub+'<span class="lb">Ask Harvey</span></button><button class="btn ghost sm" data-a="addfile">'+I.file+'<span class="lb">Add files</span></button><span class="sep"></span>'+
'<div class="srch">'+I.srch+'<input class="rsi" placeholder="Search"></div><button class="btn ghost sm" data-a="filter">'+I.filt+'<span class="fl">Filter</span></button><span class="fcw"></span>'+
'<span class="sp"></span><span class="cnt"></span><button class="btn ghost sm" data-a="wrap">'+I.wrap+'<span class="lb">Wrap text</span></button><button class="btn ghost sm" data-a="display">'+I.disp+'<span class="lb">Display</span></button><button class="ib" data-a="details" aria-label="Toggle details panel">'+I.side+'</button></div>'+
'<div class="body"><div class="tw"></div><div class="side"></div></div>';
var inp=$('.rsi');inp.value=S.search;inp.addEventListener('input',function(){S.search=inp.value;render();});
S.sel=null;render();
}
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
var tw=$('.tw'),tb=$('.tb'),side=$('.side');if(S.view!=='review'||!tw)return;
root.classList.toggle('wrap',S.wrap);
root.querySelector('[data-a=wrap]').classList.toggle('on',S.wrap);
tb.classList.toggle('tight',!!S.filter||side.classList.contains('open'));
var fc=$('.fcw');fc.innerHTML=S.filter?'<span class="fchip"><span>'+esc(colById(S.filter.c).h)+': '+esc(S.filter.v)+'</span><button data-a="clearf" aria-label="Clear filter">'+I.x+'</button></span>':'';
var R=rows();
$('.cnt').textContent=R.length===DOCS.length?DOCS.length+' rows':R.length+' of '+DOCS.length+' rows';
var h='<table><thead><tr><th class="n">#</th><th class="fn"><div class="hc">'+I.tName+'<span>Name</span></div></th><th><div class="hc">'+I.tCls+'<span>Document type</span></div></th><th><div class="hc">'+I.tDate+'<span>Effective date</span></div></th>';
S.cols.forEach(function(c){h+='<th class="'+(c.fresh?'new':'')+'" title="'+esc(c.q)+'"><div class="hc">'+(TYI[c.ty]||I.tText)+'<span>'+esc(c.h)+'</span></div></th>';c.fresh=false;});
h+='<th class="ad"><button class="btn'+(S.cols.length?'':' pulse')+'" data-a="add">'+I.plus+'Add column</button></th></tr></thead><tbody>';
R.forEach(function(i){var d=DOCS[i];
h+='<tr><td class="n">'+(i+1)+'</td><td class="fn"><div class="fi">'+ficon(d.f)+'<span>'+esc(d.f)+'</span></div></td><td class="st"><span class="tag t-0">'+esc(d.t)+'</span></td><td class="st">'+esc(d.d)+'</td>';
S.cols.forEach(function(c){var k=c.id+':'+i,a=S.ans[k];
if(!a){h+='<td><div class="ld"></div><div class="ld" style="width:55%"></div></td>';return;}
h+='<td class="cl'+(S.sel===k?' sel':'')+(S.verified[k]?' ok':'')+(a.fresh?' fresh':'')+'" data-k="'+k+'"><div class="tx">'+
(c.yn?'<span class="tag '+tagCls(a.tag)+'">'+esc(a.tag)+'</span>':'')+esc(a.txt)+'</div>'+(S.verified[k]?'<span class="vk">'+I.chk+'</span>':'')+'</td>';a.fresh=false;});
h+='<td class="ad"></td></tr>';});
h+='</tbody></table>';
if(!R.length)h+='<div class="empty"><b>No results</b>No rows match your search or filters.</div>';
else if(!S.cols.length)h+='<div class="empty"><b>Ask a question of every document</b>Add a column and Harvey extracts the answer from each file, with a citation to the passage it came from.<br><button class="btn pri sm" data-a="add">'+I.plus+'Add column</button></div>';
var sl=tw.scrollLeft,st=tw.scrollTop;tw.innerHTML=h;tw.scrollLeft=sl;tw.scrollTop=st;
}
function match(q){for(var k in QS)if(QS[k].kw.test(q))return k;return null;}
function addPop(){
closePops();
var used=S.cols.map(function(c){return c.key;});
var p=document.createElement('div');p.className='pop';p.style.cssText='top:96px;right:16px;width:420px';
var sugg=Object.keys(QS).filter(function(k){return used.indexOf(k)<0;});
p.innerHTML='<div class="hint">Get started by asking Harvey a question.</div><textarea class="qi" placeholder="What is the signing date of this agreement?"></textarea>'+
(sugg.length?'<div class="sug">'+sugg.map(function(k){return '<button data-k="'+k+'">'+(TYI[QS[k].ty])+QS[k].q+'</button>';}).join('')+'</div>':'')+
'<div class="hr"></div><div class="hint">Header and type generated based on your question.</div>'+
'<div class="row2"><label>Header</label><input class="hi" placeholder="Untitled"></div>'+
'<div class="row2" style="padding-bottom:10px"><label>Type</label><select class="ts"><option>Free response</option><option>Classify</option><option>Verbatim</option><option>Date</option></select></div>'+
'<div class="hr"></div><div class="pf"><button class="btn sec sm" data-x="c">Cancel</button><button class="btn pri sm" data-x="r" disabled>Add column</button></div>';
card.appendChild(p);
var qi=p.querySelector('.qi'),ts=p.querySelector('.ts'),hi=p.querySelector('.hi'),go2=p.querySelector('[data-x=r]');
qi.focus();
function sync(){var k=match(qi.value);if(k){ts.value=QS[k].ty;if(!hi.dataset.touched)hi.value=QS[k].h;}
else if(!hi.dataset.touched)hi.value=qi.value.trim().replace(/\?$/,'').slice(0,28);
go2.disabled=!qi.value.trim();}
p.addEventListener('click',function(e){
var ch=e.target.closest('.sug button');
if(ch){qi.value=QS[ch.dataset.k].q;sync();qi.focus();return;}
var x=e.target.closest('[data-x]');if(!x)return;
if(x.dataset.x==='c')closePops();
if(x.dataset.x==='r'&&!x.disabled)runCol(qi.value,ts.value,hi.value);
});
hi.addEventListener('input',function(){hi.dataset.touched=1;});
qi.addEventListener('input',sync);
qi.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();runCol(qi.value,ts.value,hi.value);}});
}
function runCol(q,ty,hd){
q=(q||'').trim();if(!q){toast('Type a question or pick a suggestion');return;}
var k=match(q);
closePops();
var id='c'+Date.now();
var col={id:id,key:k,q:q,h:(hd||'').trim()||(k?QS[k].h:q.slice(0,28)),ty:ty,yn:ty==='Classify',fresh:true};
S.cols.push(col);render();
var tw=$('.tw');if(tw)tw.scrollLeft=tw.scrollWidth;
toast('Generating output for '+DOCS.length+' documents…');
DOCS.forEach(function(d,i){
later(function(){
var a;
if(k)a=QS[k].a(d);
else a={tag:'Summary',txt:d.t+' between '+d.p+'; see recitals.',sec:'1',pass:'This '+d.t+' (the “Agreement”) is entered into as of '+d.d+' by and between '+d.p+'.'};
if(ty==='Verbatim')a={tag:a.tag,txt:'“'+a.pass+'”',sec:a.sec,pass:a.pass};
if(ty==='Date')a={tag:'Date',txt:d.d,sec:'Preamble',pass:'This '+d.t+' is made and entered into effective as of '+d.d+' (the “Effective Date”).'};
a.fresh=true;a.q=q;S.ans[id+':'+i]=a;render();
if(i===DOCS.length-1){mark('rt');if(S.view==='review')toast('Column complete · click a cell to verify its source');}
},600+i*380+Math.random()*200);
});
}
function pct(){var n=0,t=0;S.cols.forEach(function(c){DOCS.forEach(function(d,i){if(S.ans[c.id+':'+i]){t++;if(S.verified[c.id+':'+i])n++;}});});return t?Math.round(n*100/t):0;}
function openCell(k){
var a=S.ans[k];if(!a)return;
S.sel=k;render();
var p=k.split(':'),i=+p[1],d=DOCS[i],c=colById(p[0]),noCite=a.sec==='—',v=S.verified[k];
showDoc(d,{sec:a.sec,pass:a.pass,lab:'Row '+(i+1),pct:pct(),pg:3+i%5,ac:'<div class="ac"><div class="q">'+(TYI[c.ty]||I.tText)+esc(c.h)+'</div><div class="a">'+(c.yn?'<span class="tag '+tagCls(a.tag)+'">'+esc(a.tag)+'</span>':'')+esc(a.txt)+(noCite?'':'<span class="cite" data-s="c">1</span>')+'</div>'+
'<div class="why">'+(noCite?esc(a.pass):'Found in Section '+esc(a.sec)+'. The cited passage is highlighted in the document below.')+'</div>'+
'<div class="vrow"><button class="btn ghost'+(v?' done':'')+'" data-s="v">'+I.chk+(v?'Verified':'Verify')+'</button><button class="btn ghost" data-s="n">'+I.down+'Next row</button><span class="sp"></span><button class="btn ghost" data-s="cp">Copy</button></div></div>'});
}
function sideClick(b){
var s=b.dataset.s,side=$('.side');
if(s==='x'){side.classList.remove('open');S.sel=null;root.querySelectorAll('.ans .cite.on').forEach(function(x){x.classList.remove('on');});render();}
if(s==='v'){S.verified[S.sel]=!S.verified[S.sel];if(S.verified[S.sel])toast('Cell verified');openCell(S.sel);}
if(s==='c'){var m=side.querySelector('mark');b.classList.add('on');if(m){var pg=side.querySelector('.pg');pg.scrollTop=m.offsetTop-pg.offsetTop-80;m.animate&&m.animate([{boxShadow:'0 0 0 5px hsl(220 79% 48% / .35)'},{boxShadow:'0 0 0 2px hsl(223 69% 86%)'}],{duration:700});}}
if(s==='cp')toast('Copied to clipboard');
if(s==='n'){var p=S.sel.split(':'),R=rows(),ix=R.indexOf(+p[1]);var nx=R[(ix+1)%R.length];openCell(p[0]+':'+nx);
var td=root.querySelector('[data-k="'+p[0]+':'+nx+'"]');if(td)td.scrollIntoView({block:'nearest'});}
}
function filterPop(btn){
closePops();
var p=document.createElement('div');p.className='pop';p.style.cssText='top:92px;left:'+(btn.offsetLeft)+'px;width:260px;padding:4px';
var cs=S.cols.filter(function(c){return c.yn;});
if(!S.cols.length){p.innerHTML='<div class="hint" style="color:var(--mut)">Add a column first — then filter documents by their answers.</div>';}
else{var c=cs[cs.length-1]||S.cols[S.cols.length-1],cnt={};
DOCS.forEach(function(d,i){var a=S.ans[c.id+':'+i];if(a)cnt[a.tag]=(cnt[a.tag]||0)+1;});
p.innerHTML='<div class="hint">'+esc(c.h)+'</div>'+Object.keys(cnt).map(function(v){var on=S.filter&&S.filter.v===v;return '<div class="fopt'+(on?' on':'')+'" data-v="'+esc(v)+'"><span class="cb">'+(on?I.chk:'')+'</span><span class="tag '+(c.yn?tagCls(v):'t-0')+'">'+esc(v)+'</span><span class="c">'+cnt[v]+'</span></div>';}).join('')+
'<div class="hr" style="margin:4px 0"></div><div class="fopt" data-v="" style="color:var(--sub)">Clear filters</div>';
p.addEventListener('click',function(e){var o=e.target.closest('.fopt');if(!o)return;S.filter=o.dataset.v&&!(S.filter&&S.filter.v===o.dataset.v)?{c:c.id,v:o.dataset.v}:null;closePops();render();});
}
card.appendChild(p);
}
function openRT(){ensure();if(!S.rt){S.rt={n:'Supplier agreements review'};toast('Review table created with '+DOCS.length+' files');}go('review');}
function step(k){S.dlg=null;dlgDraw();
if(k==='up'){if(F()){go('proj');openDlg('add');}else{go('home');openDlg('new');}}
else if(k==='ask'){ensure();go('proj');var b=$('.pq');b.value=SUGQ[0];b.focus();toast('Press Ask to search every file in the vault');}
else if(k==='rt'){openRT();if(!S.cols.length)later(addPop,300);}
else{ensure();if(S.view==='home')go('proj');openDlg('share');}
}
var ACT={
home:function(){go('home');},proj:function(){ensure();S.folder=null;go('proj');},
oth:function(a){toast(OTH[+a.dataset.i].n+' is view-only in this demo · try '+(F()?F().name:'creating a new vault'));},
kb:function(){toast('Knowledge bases hold precedents, templates and playbooks your team can draw on in Assistant and Workflows');},
newkb:function(){toast('Creating knowledge bases isn’t part of this demo');},
'nav-asst':function(){toast('Vaults can also be attached to Assistant queries — not part of this demo');},
'nav-flow':function(){toast('Workflows can run over a vault — not part of this demo');},
'nav-hist':function(){if(F()){S.tab='queries';go('proj');}else toast('No history yet');},
'nav-lib':function(){toast('Library isn’t part of this demo');},
newv:function(){if(F()){toast(F().name+' already exists · Replay to start over');go('proj');return;}openDlg('new');},
addf:function(){openDlg('add');},
src:function(a){S.dlg.src=a.dataset.k;S.dlg.picked=0;dlgDraw();},
pick:function(){S.dlg.picked=1;dlgDraw();},pk:function(){S.dlg.picked=1;dlgDraw();},
dlgx:function(){S.dlg=null;dlgDraw();},dlgok:dlgOk,
share:function(){openDlg('share');},invite:function(){invite(0);},addp:function(a){invite(+a.dataset.i);},
copylink:function(){toast('Link copied · only people with access can open it');},
sharedone:function(){S.dlg=null;dlgDraw();if(S.people.length){mark('share');toast(F().name+' shared with '+S.people.length+(S.people.length>1?' people':' person'));}draw();},
tab:function(a){S.tab=a.dataset.t;drawPB();},
fold:function(a){S.folder=a.dataset.f||null;drawPB();},
file:function(a){var f=F().files[+a.dataset.i];if(f.st!=='ready'){toast('This file is still '+(f.st==='proc'?'processing':'uploading'));return;}showDoc(f.d,{pg:1});},
newfolder:function(){var f=F(),n='New folder',i=2;while(f.folders.indexOf(n)>=0)n='New folder '+i++;f.folders.push(n);S.tab='files';S.folder=null;drawPB();toast('Folder “'+n+'” created');},
mkrt:openRT,openrt:function(){go('review');},
openq:function(a){S.cur=S.qs[+a.dataset.i];go('query');},
askgo:askFromBox,sugq:function(a){var b=$('.pq');b.value=SUGQ[+a.dataset.i];askFromBox();},
fugo:followUp,
askt:function(){ask('Which agreements can be terminated for convenience, and on what notice?',S.rt.n);},
copy:function(){toast('Answer copied with citations');},exportw:function(){toast('Would export to Word (.docx) with citations');},
step:function(a){step(a.dataset.s2);},
reset:function(){clearT();init();root.classList.remove('wrap');mdl.innerHTML='';draw();toast('Demo reset');},
add:addPop,filter:function(a){filterPop(a);},clearf:function(){S.filter=null;render();},
wrap:function(){S.wrap=!S.wrap;render();},
details:function(){var side=$('.side'),tw=$('.tw');if(side.classList.contains('open')){side.classList.remove('open');S.sel=null;render();}else{var f=tw.querySelector('.cl');if(f)openCell(f.dataset.k);else toast('Add a column to see answer details');}},
export:function(){toast('Would export to Excel (.xlsx)');},
addfile:function(){toast('Add files to the vault, then add them to this table');},
display:function(){toast('Display options aren’t part of this demo');}
};
function onClick(e){
var b=e.target.closest('[data-s]');if(b&&b.closest('.side')){sideClick(b);return;}
var a=e.target.closest('[data-a]');
if(a&&a.dataset.a==='dlgbg'&&e.target!==a)a=null;
if(!e.target.closest('.pop')&&!(a&&(a.dataset.a==='add'||a.dataset.a==='filter')))closePops();
var dw=mdl.querySelector('.dirw');if(dw&&!e.target.closest('.inv'))dw.innerHTML='';
if(a){var x=a.dataset.a;if(x==='dlgbg'){S.dlg=null;dlgDraw();return;}if(ACT[x])ACT[x](a);return;}
var ci=e.target.closest('.ans .cite');if(ci){openCite(ci);return;}
var c=e.target.closest('.cl');if(c)openCell(c.dataset.k);
}
root.addEventListener('click',onClick);
draw();
return function(){clearT();clearTimeout(toast.t);root.removeEventListener('click',onClick);root.innerHTML='';};
}};
})();
