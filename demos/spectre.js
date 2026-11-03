/* Spectre — a stylistic recreation of Harvey's internal collaborative cloud agent platform,
   based on the public "Building Spectre" engineering post. All data below is fake. */
(function(){
const ID='spectre';
const CSS=`
.demo-spectre{--bd:#ebebe8;--mu:#8a8986;--tx:#1d1d1b;--sb:#f7f7f5;--ok:#15803d;font:13px/1.45 system-ui,-apple-system,'Segoe UI',sans-serif;color:var(--tx);background:#fff}
.demo-spectre .app{display:flex;height:100%}
.demo-spectre button{font:inherit;color:inherit;cursor:pointer;border:0;background:none}
.demo-spectre code,.demo-spectre .mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px}
.demo-spectre code{background:#f1f0ee;border:1px solid #e6e5e1;border-radius:4px;padding:0 4px;color:#9a3412}
.demo-spectre .sb{width:200px;flex:none;background:var(--sb);border-right:1px solid var(--bd);display:flex;flex-direction:column;padding:12px 10px;gap:2px;min-height:0}
.demo-spectre .logo{display:flex;align-items:center;gap:9px;font-weight:650;font-size:14px;padding:2px 6px 12px}
.demo-spectre .logo i{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,#1e1b4b,#7c3aed 55%,#db2777);color:#fff;display:flex;align-items:center;justify-content:center;font:italic 800 15px Georgia,serif;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15)}
.demo-spectre .nav{display:flex;align-items:center;gap:9px;padding:6px 8px;border-radius:7px;color:#3a3a38;text-align:left;width:100%}
.demo-spectre .nav:hover{background:#efefec}.demo-spectre .nav.on{background:#ebebe7;font-weight:600}
.demo-spectre .nav svg{width:15px;height:15px;flex:none;stroke:currentColor;fill:none;stroke-width:1.7}
.demo-spectre .sec{font-size:11px;color:var(--mu);padding:12px 8px 4px;display:flex;justify-content:space-between}
.demo-spectre .rr{display:flex;align-items:center;gap:7px;padding:4px 8px;border-radius:6px;font-size:12px;color:#444;width:100%;text-align:left}
.demo-spectre .rr:hover{background:#efefec}.demo-spectre .rr.on{background:#ebebe7}
.demo-spectre .rr span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
.demo-spectre .dot{width:7px;height:7px;border-radius:50%;background:#16a34a;flex:none}
.demo-spectre .dot.run{background:#7c3aed;animation:sp-pulse 1s infinite}
@keyframes sp-pulse{50%{opacity:.3}}
.demo-spectre .guide{margin-top:auto;background:#fff;border:1px solid var(--bd);border-radius:10px;padding:10px;font-size:11.5px}
.demo-spectre .guide b{font-size:11px;letter-spacing:.04em;text-transform:uppercase;color:var(--mu)}
.demo-spectre .guide ol{margin:6px 0 8px;padding:0;list-style:none;display:flex;flex-direction:column;gap:5px}
.demo-spectre .guide li{display:flex;gap:7px;color:#555}.demo-spectre .guide li i{width:15px;height:15px;border-radius:50%;border:1.5px solid #cfcfcb;flex:none;font:700 9px/12px system-ui;text-align:center;font-style:normal;color:#fff}
.demo-spectre .guide li.ok{color:#999;text-decoration:line-through}.demo-spectre .guide li.ok i{background:#16a34a;border-color:#16a34a}
.demo-spectre .guide li.nx{color:#111;font-weight:600}.demo-spectre .guide li.nx i{border-color:#7c3aed}
.demo-spectre .replay{width:100%;border:1px solid var(--bd)!important;border-radius:7px;padding:4px;font-size:11.5px;background:#fafaf9}
.demo-spectre .me{display:flex;align-items:center;gap:8px;padding:10px 6px 0;font-size:12.5px;font-weight:600}
.demo-spectre .av{width:24px;height:24px;border-radius:50%;flex:none;color:#fff;font:700 10px/24px system-ui;text-align:center}
.demo-spectre main{flex:1;min-width:0;display:flex;flex-direction:column;position:relative}
.demo-spectre .bar{height:52px;border-bottom:1px solid var(--bd);display:flex;align-items:center;padding:0 16px;gap:10px;flex:none}
.demo-spectre .bar h1{font-size:15px;font-weight:650;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.demo-spectre .bar .sub{font-size:11.5px;color:var(--mu);white-space:nowrap}
.demo-spectre .hb{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:7px;font-size:12.5px;white-space:nowrap}
.demo-spectre .hb:hover{background:#f2f2ef}.demo-spectre .hb[disabled]{opacity:.35;cursor:default;background:none}
.demo-spectre .hb.pr{background:#111;color:#fff}.demo-spectre .hb.pr:hover{background:#333}
.demo-spectre .hb.merged{background:#ede9fe;color:#5b21b6}
.demo-spectre .pill{font-size:11px;font-weight:600;border-radius:999px;padding:2px 8px;background:#111;color:#fff;white-space:nowrap}
.demo-spectre .pill.run{background:#ede9fe;color:#6d28d9}.demo-spectre .pill.done{background:#dcfce7;color:#166534}.demo-spectre .pill.off{background:#f1f0ee;color:#777}
.demo-spectre .src{font-size:10.5px;border:1px solid var(--bd);border-radius:5px;padding:0 5px;color:#666;white-space:nowrap}
.demo-spectre .pulse{animation:sp-glow 1.6s infinite}
@keyframes sp-glow{0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,.45)}50%{box-shadow:0 0 0 6px rgba(124,58,237,0)}}
/* home */
.demo-spectre .home{flex:1;overflow:auto;padding:40px 70px}
.demo-spectre .home h2{font:500 26px/1.2 Georgia,'Times New Roman',serif;margin:0 0 4px;letter-spacing:-.01em}
.demo-spectre .home .lede{color:var(--mu);margin:0 0 18px}
.demo-spectre .comp{border:1px solid #dcdcd7;border-radius:14px;box-shadow:0 6px 24px -14px rgba(0,0,0,.25);background:#fff}
.demo-spectre .comp textarea{width:100%;border:0;outline:0;resize:none;font:14px/1.5 system-ui,sans-serif;padding:14px 16px 4px;height:74px;color:var(--tx);background:none}
.demo-spectre .crow{display:flex;align-items:center;gap:6px;padding:8px 10px;flex-wrap:wrap}
.demo-spectre .sel{position:relative}
.demo-spectre .chip{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--bd);border-radius:999px;padding:3px 9px;font-size:12px;background:#fafaf9;white-space:nowrap}
.demo-spectre .chip:hover{border-color:#ccc}
.demo-spectre .chip.off{opacity:.45;text-decoration:line-through}
.demo-spectre .chip b{width:14px;height:14px;border-radius:4px;color:#fff;font:700 8.5px/14px system-ui;text-align:center}
.demo-spectre .menu{position:absolute;top:28px;left:0;background:#fff;border:1px solid var(--bd);border-radius:9px;box-shadow:0 10px 30px -10px rgba(0,0,0,.3);padding:4px;z-index:5;min-width:170px}
.demo-spectre .menu button{display:block;width:100%;text-align:left;padding:6px 9px;border-radius:6px;font-size:12.5px}
.demo-spectre .menu button:hover{background:#f3f3f0}
.demo-spectre .go{margin-left:auto;background:#111;color:#fff;border-radius:9px;padding:7px 14px;font-weight:600;font-size:13px}
.demo-spectre .go:hover{background:#333}
.demo-spectre .sugg{display:flex;gap:8px;margin:12px 0 28px;flex-wrap:wrap}
.demo-spectre .sugg button{border:1px dashed #d6d6d1;border-radius:8px;padding:5px 10px;font-size:12px;color:#555}
.demo-spectre .sugg button:hover{border-style:solid;background:#fafaf9}
.demo-spectre .lh{font-size:12px;color:var(--mu);margin:0 0 6px;font-weight:600}
.demo-spectre .row{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1px solid var(--bd);border-radius:10px;margin-bottom:6px;width:100%;text-align:left;background:#fff}
.demo-spectre .row:hover{background:#fafaf9}
.demo-spectre .row .t{flex:1;min-width:0;font-weight:550;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.demo-spectre .row .m{font-size:11.5px;color:var(--mu);white-space:nowrap}
/* run */
.demo-spectre .cols{flex:1;display:flex;min-height:0}
.demo-spectre .files{width:150px;flex:none;border-right:1px solid var(--bd);overflow-y:auto;overflow-x:hidden;padding:8px 6px;font-size:12px}
.demo-spectre .files .fh{font-size:11px;color:var(--mu);padding:0 6px 6px}
.demo-spectre .fi{display:flex;align-items:center;gap:5px;padding:2px 6px;border-radius:5px;white-space:nowrap;color:#444;width:100%;text-align:left}
.demo-spectre .fi.mod{color:#111;font-weight:600}.demo-spectre .fi.mod::after{content:'';width:6px;height:6px;border-radius:50%;background:#2563eb;margin-left:auto}
.demo-spectre .fi.mod:hover{background:#eff6ff}
.demo-spectre .center{flex:1;min-width:0;display:flex;flex-direction:column;border-right:1px solid var(--bd)}
.demo-spectre .tabs{display:flex;gap:2px;padding:6px 8px;border-bottom:1px solid var(--bd);font-size:12px;align-items:center;white-space:nowrap}
.demo-spectre .tabs button{padding:4px 10px;border-radius:6px;color:#666}.demo-spectre .tabs button.on{background:#f0f0ec;color:#111;font-weight:600}
.demo-spectre .tabs .br{margin-left:auto;color:var(--mu);font-size:10.5px;overflow:hidden;text-overflow:ellipsis;min-width:0;padding-left:8px}
.demo-spectre .term{flex:1;overflow:auto;background:#121212;color:#d4d4d4;padding:10px 12px;font:11.5px/1.6 ui-monospace,Menlo,monospace;white-space:pre-wrap;word-break:break-all}
.demo-spectre .term .c{color:#a78bfa}.demo-spectre .term .ok{color:#4ade80}.demo-spectre .term .er{color:#f87171}.demo-spectre .term .dm{color:#777}
.demo-spectre .diff{flex:1;overflow-y:auto;overflow-x:hidden;background:#fff}
.demo-spectre .dfh{white-space:nowrap;overflow:hidden;position:sticky;top:0;background:#fafaf9;border-bottom:1px solid var(--bd);padding:6px 10px;font:600 12px ui-monospace,Menlo,monospace;display:flex;gap:8px;z-index:1}
.demo-spectre .dfh .a{color:#16a34a;margin-left:auto}.demo-spectre .dfh .r{color:#dc2626}
.demo-spectre .dl{font:11px/1.65 ui-monospace,Menlo,monospace;white-space:pre;padding:0 10px;overflow:hidden;text-overflow:ellipsis}
.demo-spectre .dl.p{background:#dcfce7}.demo-spectre .dl.m{background:#fee2e2}.demo-spectre .dl.h{background:#eff6ff;color:#1d4ed8}
.demo-spectre .empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--mu);font-size:12.5px;text-align:center;padding:30px}
.demo-spectre .agent{width:350px;flex:none;display:flex;flex-direction:column;min-height:0;background:#fff}
.demo-spectre .stream{flex:1;overflow:auto;padding:12px 14px;display:flex;flex-direction:column;gap:8px}
.demo-spectre .stream>*,.demo-spectre .msgs>*,.demo-spectre .home>*{flex:none}
.demo-spectre .ub{align-self:flex-end;background:#f3f3f0;border-radius:12px 12px 3px 12px;padding:8px 11px;max-width:92%}
.demo-spectre .ub .who{font-size:10.5px;color:var(--mu);margin-bottom:2px}
.demo-spectre .sy{font-size:11.5px;color:var(--mu);display:flex;gap:6px;align-items:flex-start}
.demo-spectre .sy::before{content:'';width:5px;height:5px;border-radius:50%;background:#c9c9c4;margin-top:6px;flex:none}
.demo-spectre .tc{border:1px solid var(--bd);border-radius:8px;font-size:12px;overflow:hidden}
.demo-spectre .tc>button{display:flex;align-items:center;gap:7px;width:100%;padding:5px 8px;text-align:left}
.demo-spectre .tc>button:hover{background:#fafaf9}
.demo-spectre .tc>button span{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.demo-spectre .tc .cv{color:#aaa;font-size:10px}
.demo-spectre .tc .det{border-top:1px solid var(--bd);background:#fafaf9;padding:6px 9px;font:11px/1.55 ui-monospace,Menlo,monospace;color:#555;white-space:pre-wrap}
.demo-spectre .cb{width:16px;height:16px;border-radius:4px;color:#fff;font:700 9px/16px system-ui;text-align:center;flex:none}
.demo-spectre .ed{display:flex;align-items:center;gap:7px;font-size:12px;padding:4px 8px;border-radius:7px;background:#f8fafc;border:1px solid #e2e8f0;width:100%;text-align:left}
.demo-spectre .ed:hover{background:#eff6ff}
.demo-spectre .ed .a{color:#16a34a;margin-left:auto;font-weight:600}.demo-spectre .ed .r{color:#dc2626;font-weight:600}
.demo-spectre .ms{font-size:12.8px;line-height:1.55}
.demo-spectre .sum{border:1px solid #d9f99d;background:#fbfff3;border-radius:10px;padding:10px 12px;font-size:12.5px}
.demo-spectre .sum h4{margin:0 0 6px;font-size:13px}
.demo-spectre .sum ul{margin:0;padding-left:16px;display:flex;flex-direction:column;gap:3px}
.demo-spectre .arts{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
.demo-spectre .work{font-size:12px;color:#6d28d9;display:flex;align-items:center;gap:7px}
.demo-spectre .work i{width:12px;height:12px;border:2px solid #ddd6fe;border-top-color:#7c3aed;border-radius:50%;animation:sp-spin .8s linear infinite}
@keyframes sp-spin{to{transform:rotate(360deg)}}
.demo-spectre .ac{border-top:1px solid var(--bd);padding:8px 10px 10px}
.demo-spectre .qa{display:flex;gap:5px;margin-bottom:7px;flex-wrap:wrap}
.demo-spectre .qa button{border:1px solid var(--bd);border-radius:7px;padding:3px 8px;font-size:11.5px;background:#fff}
.demo-spectre .qa button:hover{background:#f6f6f3}.demo-spectre .qa button[disabled]{opacity:.4;cursor:default}
.demo-spectre .ib{display:flex;gap:6px;align-items:flex-end;border:1px solid #dcdcd7;border-radius:10px;padding:6px 6px 6px 10px}
.demo-spectre .ib textarea{flex:1;border:0;outline:0;resize:none;height:34px;font:12.5px/1.4 system-ui,sans-serif;background:none;color:var(--tx)}
.demo-spectre .send{background:#111;color:#fff;border-radius:7px;width:28px;height:28px;font-size:14px}
.demo-spectre .send[disabled]{background:#ccc;cursor:default}
.demo-spectre .bnd{font-size:11px;color:var(--mu);padding:5px 16px;border-bottom:1px solid var(--bd);display:flex;gap:14px;background:#fcfcfb;white-space:nowrap;overflow:hidden}
.demo-spectre .bnd b{color:#555;font-weight:600}
/* automations */
.demo-spectre .auto{flex:1;overflow:auto;padding:14px 20px}
.demo-spectre .acard{border:1px solid var(--bd);background:#fafaf9;border-radius:10px;padding:12px 14px;margin-bottom:10px;display:flex;gap:12px}
.demo-spectre .acard .tt{font-weight:650;display:flex;gap:8px;align-items:center}
.demo-spectre .acard p{margin:3px 0 5px;color:#888;font-size:12px}
.demo-spectre .acard .mt{font-size:11px;color:var(--mu);display:flex;gap:12px}
.demo-spectre .ib2{width:28px;height:28px;border:1px solid var(--bd)!important;border-radius:7px;background:#fff!important;display:flex;align-items:center;justify-content:center}
.demo-spectre .ib2:hover{background:#f1f1ee!important}
.demo-spectre .ib2 svg{width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:1.8}
.demo-spectre .tg{width:34px;height:20px;border-radius:999px;background:#d4d4d0;position:relative;flex:none;transition:.15s}
.demo-spectre .tg::after{content:'';position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;transition:.15s}
.demo-spectre .tg.on{background:#111}.demo-spectre .tg.on::after{left:16px}
/* slack */
.demo-spectre .slack{flex:1;display:flex;min-height:0;background:#fff}
.demo-spectre .slk{width:170px;background:#3f0e40;color:#cfc3cf;padding:12px 8px;font-size:12.5px;flex:none}
.demo-spectre .slk .ws{color:#fff;font-weight:700;font-size:14px;padding:0 8px 12px}
.demo-spectre .slk div.ch{padding:3px 8px;border-radius:5px}.demo-spectre .slk div.ch.on{background:#1164a3;color:#fff}
.demo-spectre .sth{flex:1;display:flex;flex-direction:column;min-width:0}
.demo-spectre .sth .hd{padding:10px 18px;border-bottom:1px solid #e8e8e8;font-weight:700;font-size:14px}
.demo-spectre .sth .hd span{font-weight:400;color:#777;font-size:12px;margin-left:8px}
.demo-spectre .msgs{flex:1;overflow:auto;padding:10px 0}
.demo-spectre .sm{display:flex;gap:9px;padding:6px 18px;font-size:13.5px;line-height:1.46;color:#1d1c1d}
.demo-spectre .sm:hover{background:#f8f8f8}
.demo-spectre .sm .av{width:34px;height:34px;border-radius:7px;font-size:12px;line-height:34px}
.demo-spectre .sm .n{font-weight:800;font-size:13.5px}.demo-spectre .sm .n small{font-weight:400;color:#777;font-size:11.5px;margin-left:5px}
.demo-spectre .sm .app{font-size:9.5px;background:#e8e8e8;color:#555;border-radius:3px;padding:0 3px;font-weight:700;margin-left:4px;display:inline-block}
.demo-spectre .sm code{color:#c0143c;background:#f7f7f7}
.demo-spectre .ment{color:#1264a3;background:#e8f5fa;border-radius:3px;padding:0 2px}
.demo-spectre .sbtn{border:1px solid #ccc!important;border-radius:6px;padding:3px 10px;font-size:12.5px;font-weight:600;margin:6px 6px 0 0;background:#fff!important}
.demo-spectre .sbtn:hover{background:#f6f6f6!important}
.demo-spectre .scomp{margin:8px 18px 14px;border:1px solid #bbb;border-radius:9px;display:flex;align-items:center;padding:8px 8px 8px 12px;gap:8px}
.demo-spectre .scomp input{flex:1;border:0;outline:0;font:13.5px system-ui,sans-serif;background:none;color:#1d1c1d}
.demo-spectre .scomp button{background:#007a5a;color:#fff;border-radius:6px;padding:5px 12px;font-weight:700;font-size:12.5px}
.demo-spectre .scomp button[disabled]{background:#ddd}
.demo-spectre .toast{position:absolute;left:50%;bottom:18px;transform:translate(-50%,20px);background:#111;color:#fff;border-radius:9px;padding:8px 14px;font-size:12.5px;opacity:0;transition:.25s;pointer-events:none;z-index:20;white-space:nowrap}
.demo-spectre .toast.show{opacity:1;transform:translate(-50%,0)}
`;
const SVG=p=>`<svg viewBox="0 0 24 24">${p}</svg>`;
const IC={
 home:SVG('<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>'),
 board:SVG('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/>'),
 clock:SVG('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
 hash:SVG('<path d="M5 9h15M4 15h15M10 3 8 21M16 3l-2 18"/>'),
 chart:SVG('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
 play:SVG('<path d="M7 4l13 8-13 8z"/>'),
 hist:SVG('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>'),
 edit:SVG('<path d="M4 20h4L19 9l-4-4L4 16z"/>'),
 share:SVG('<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11l7.6-4M8.2 13l7.6 4"/>'),
 pr:SVG('<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 7v10M18 17V9a3 3 0 0 0-3-3h-4M13 3l-3 3 3 3"/>'),
 ide:SVG('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 10l-2 2 2 2M16 10l2 2-2 2M13 9l-2 6"/>')
};
const CONN={github:['#111','GH','GitHub'],datadog:['#632ca6','DD','Datadog'],linear:['#5e6ad2','LN','Linear'],slack:['#4a154b','SL','Slack'],bash:['#525252','$_','Bash']};
const TREES={
 'acme/web':['.github/','apps/','  dashboard/','packages/','  billing/','    __tests__/','      formatInvoiceDate.test.ts','    formatInvoiceDate.ts','    index.ts','    types.ts','  ui/','package.json','pnpm-lock.yaml','README.md','tsconfig.json'],
 'acme/api':['src/','  db/','  export/','    buildExportRows.ts','    exportRoute.ts','  routes/','tests/','  export.test.ts','package.json','README.md'],
 'acme/mobile':['ios/','android/','src/','  screens/','  api/','package.json','README.md']
};
/* ---------- run scripts (all fake) ---------- */
const BOOT=[
 {t:'sys',x:'Durable run created · {rid} · visible to everyone at Acme'},
 {t:'sys',x:'Ephemeral worker started in sandbox {sbx} · spectre-worker image'},
 {t:'sys',x:'Boundary: GitHub {repo} (scoped token, 60 min) · tools: {conns} · egress allow-listed'}
];
const SCRIPTS={
fix:{repo:'acme/web',branch:'spectre/fix-invoice-date-tz',ev:[
 {t:'term',x:['$ git clone github.com/{repo} --depth 50','Cloning into "web"… done.','$ pnpm install --frozen-lockfile','Packages: +1,284  ✓ Done in 18.4s']},
 {t:'tool',c:'linear',x:'Read issue ENG-482',d:'“Invoice dates show the previous day for some customers”\nPriority: High · Team: Billing · 3 comments'},
 {t:'tool',c:'datadog',x:'Search logs  service:billing-web "date mismatch"',d:'412 events · last 7d\ntop: formatInvoiceDate → "Feb 28, 2026" (expected "Mar 1, 2026")'},
 {t:'msg',x:'The test builds dates with `new Date("2026-03-01")`, which parses as UTC midnight, but `formatInvoiceDate` formats in the runtime’s local zone. West of UTC that rolls back a day — the same bug customers report in ENG-482. I’ll format in the invoice’s own timezone and pin the test.'},
 {t:'term',x:['$ TZ=America/Los_Angeles pnpm vitest billing/format','✗ formatInvoiceDate › formats ISO date','  expected "Mar 1, 2026", received "Feb 28, 2026"','Tests  1 failed | 23 passed']},
 {t:'edit',f:0},{t:'edit',f:1},
 {t:'term',x:['$ TZ=America/Los_Angeles pnpm vitest billing','✓ 26 passed (1.92s)','$ TZ=Asia/Tokyo pnpm vitest billing','✓ 26 passed (1.88s)','$ pnpm lint && pnpm typecheck','✓ no issues found']},
 {t:'term',x:['$ git checkout -b {branch}','$ git commit -am "fix(billing): format invoice dates in invoice timezone"','[{branch} 9b7e21c] 2 files changed','$ git push -u origin {branch}','✓ branch pushed']},
 {t:'done'}],
 sum:{h:'Fixed the off-by-one invoice date and the flaky test.',li:[['Root cause','`formatInvoiceDate` used the runtime’s local zone, so UTC-parsed dates rolled back a day.'],['Fix','Format with `Intl.DateTimeFormat` in `invoice.timeZone` (defaults to UTC).'],['Tests','Pinned zones + 2 regression cases; 26/26 passing in LA and Tokyo.'],['Context','Linked ENG-482 · 412 matching Datadog events']]},
 files:[
 {p:'packages/billing/formatInvoiceDate.ts',l:['@@ -1,9 +1,14 @@',' import { Invoice } from "./types";',' ','-export function formatInvoiceDate(iso: string): string {','-  const d = new Date(iso);','-  return d.toLocaleDateString("en-US", { dateStyle: "medium" });','+const cache = new Map<string, Intl.DateTimeFormat>();','+','+export function formatInvoiceDate(iso: string, timeZone = "UTC"): string {','+  let fmt = cache.get(timeZone);','+  if (!fmt) {','+    fmt = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone });','+    cache.set(timeZone, fmt);','+  }','+  return fmt.format(new Date(iso));',' }',' ',' export function invoiceHeader(inv: Invoice) {','-  return `Invoice ${inv.number} · ${formatInvoiceDate(inv.issuedAt)}`;','+  return `Invoice ${inv.number} · ${formatInvoiceDate(inv.issuedAt, inv.timeZone)}`;',' }']},
 {p:'packages/billing/__tests__/formatInvoiceDate.test.ts',l:['@@ -1,8 +1,16 @@',' import { describe, it, expect } from "vitest";',' import { formatInvoiceDate } from "../formatInvoiceDate";',' ',' describe("formatInvoiceDate", () => {','-  it("formats ISO date", () => {','-    expect(formatInvoiceDate("2026-03-01")).toBe("Mar 1, 2026");','+  it("formats ISO date in UTC by default", () => {','+    expect(formatInvoiceDate("2026-03-01T00:00:00Z")).toBe("Mar 1, 2026");','   });','+','+  it.each([','+    ["America/Los_Angeles", "2026-03-01T12:00:00Z"],','+    ["Asia/Tokyo", "2026-02-28T20:00:00Z"],','+  ])("respects invoice timezone %s", (tz, iso) => {','+    expect(formatInvoiceDate(iso, tz)).toBe("Mar 1, 2026");','+  });',' });']}],
 more:{p:'packages/billing/__tests__/invoiceHeader.test.ts',l:['@@ -0,0 +1,7 @@','+import { invoiceHeader } from "../formatInvoiceDate";','+','+it("uses the invoice timezone in the header", () => {','+  const inv = { number: "INV-1042", issuedAt: "2026-02-28T20:00:00Z", timeZone: "Asia/Tokyo" };','+  expect(invoiceHeader(inv as any)).toBe("Invoice INV-1042 · Mar 1, 2026");','+});']}
},
investigate:{repo:'acme/api',branch:'spectre/batch-export-attachments',ev:[
 {t:'sys',x:'Attached Slack thread context from #eng-incidents (3 messages, 1 image)'},
 {t:'term',x:['$ git clone github.com/{repo} --depth 200','Cloning into "api"… done.']},
 {t:'tool',c:'datadog',x:'Query metric  p95:trace.http.request{resource:/api/export}',d:'14:55 → 310 ms\n15:12 → 2.41 s   ← deploy api@2026.11.02-3\n15:40 → 2.38 s'},
 {t:'tool',c:'github',x:'Compare 2026.11.02-2…2026.11.02-3',d:'14 commits · 31 files\nsuspect: a41c0de “export: include attachments in payload”'},
 {t:'msg',x:'Latency jumps exactly at the 15:12 deploy. In `a41c0de`, `buildExportRows` now awaits `loadAttachments(row.id)` once per row — a classic N+1. Large exports are 2–5k rows.'},
 {t:'tool',c:'datadog',x:'APM top spans for /api/export',d:'postgres.query  SELECT … FROM attachments WHERE row_id = $1   × 3,912\nshare of request time: 87%'},
 {t:'edit',f:0},
 {t:'term',x:['$ pnpm test tests/export.test.ts','✓ 9 passed (0.71s)','$ pnpm bench export --rows 4000','before: 2,380 ms   after: 284 ms   (-88%)']},
 {t:'term',x:['$ git checkout -b {branch} && git commit -qam "perf(export): batch-load attachments"','$ git push -u origin {branch}','✓ branch pushed']},
 {t:'tool',c:'slack',x:'Replied in #eng-incidents thread',d:'Posted root cause + fix summary, linked this run'},
 {t:'done'}],
 sum:{h:'Root cause: N+1 attachment query introduced in a41c0de.',li:[['Impact','p95 for `/api/export` went 310 ms → 2.4 s right after the 15:12 deploy.'],['Why','`loadAttachments` ran once per row (~3.9k queries per request).'],['Fix','One batched query + in-memory grouping; benchmark 2.38 s → 0.28 s.'],['Next','Review the branch, or reply in Slack to ask Spectre for a revert instead.']]},
 files:[{p:'src/export/buildExportRows.ts',l:['@@ -18,9 +18,12 @@ export async function buildExportRows(ids: string[]) {','   const rows = await db.rows.findMany({ where: { id: { in: ids } } });','-  return Promise.all(rows.map(async (row) => ({','-    ...row,','-    attachments: await loadAttachments(row.id),','-  })));','+  // Batch-load attachments: 1 query instead of N','+  const all = await db.attachments.findMany({ where: { rowId: { in: ids } } });','+  const byRow = new Map<string, Attachment[]>();','+  for (const a of all) byRow.set(a.rowId, [...(byRow.get(a.rowId) ?? []), a]);','+  return rows.map((row) => ({ ...row, attachments: byRow.get(row.id) ?? [] }));',' }']}],
 more:{p:'tests/export.test.ts',l:['@@ -41,3 +41,11 @@','   expect(rows).toHaveLength(3);',' });','+','+it("loads attachments with a single query", async () => {','+  const spy = vi.spyOn(db.attachments, "findMany");','+  await buildExportRows(seedIds(500));','+  expect(spy).toHaveBeenCalledTimes(1);','+});']}
},
cleanup:{repo:'acme/web',ev:[
 {t:'sys',x:'Materialized by automation “Clean up stale spectre/* branches” · Weekdays 09:00 UTC'},
 {t:'term',x:['$ git for-each-ref refs/remotes/origin/spectre/ --sort=committerdate','  … 17 branches older than 7 days']},
 {t:'tool',c:'github',x:'List open PRs for 17 candidate branches',d:'3 have open PRs → keep\n14 inactive > 7 days, no PR, not referenced'},
 {t:'term',x:['$ git push origin --delete spectre/try-vite-6 spectre/rename-flags …','✓ deleted 14 branches']},
 {t:'done'}],
 sum:{h:'Deleted 14 stale branches, kept 3 with open PRs.',li:[['Scope','`spectre/*` branches with no commits for 7+ days'],['Kept','3 branches with open PRs (owners pinged in Slack)'],['Artifacts','Deletion log attached to this run']]},files:[]
},
deps:{repo:'acme/web',branch:'spectre/eslint-config-v9',ev:[
 {t:'term',x:['$ pnpm up @acme/eslint-config@^9 -r','$ pnpm lint --fix','✓ 0 errors, 3 files auto-fixed']},
 {t:'edit',f:0},{t:'done'}],
 sum:{h:'Bumped @acme/eslint-config to v9 across the workspace.',li:[['Changes','1 dependency bump, lint autofixes only'],['CI','All checks green']]},
 files:[{p:'package.json',l:['@@ -24,5 +24,5 @@','   "devDependencies": {','-    "@acme/eslint-config": "^8.4.0",','+    "@acme/eslint-config": "^9.0.1",','     "typescript": "^5.6.3",']}]
}};
const AUTOS=[
 {n:'Clean up stale spectre/* branches',d:'Delete spectre/* branches inactive for 7+ days with no open PR; ping owners of anything kept.',r:'acme/web',s:'Weekdays at 9am UTC',on:true,k:'cleanup'},
 {n:'Nightly flaky-test triage',d:'Find tests that failed then passed on retry in the last 24h, open a Linear issue per cluster with a suggested fix.',r:'acme/web',s:'Daily at 2am UTC',on:true,k:'fix',p:'Triage last night’s flaky tests and fix the worst offender'},
 {n:'Dependency freshness check',d:'Check for outdated internal packages and open a PR that bumps safe minor versions.',r:'acme/web',s:'Mondays at 8am UTC',on:false,k:'deps',p:'Bump eslint-config to v9 across packages'}
];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt=s=>esc(s).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/`([^`]*)$/,'<code>$1</code>');

window.DEMOS=window.DEMOS||{};
window.DEMOS[ID]={frame:'browser',title:'Spectre — collaborative cloud agents',url:'spectre.acme.internal',
caption:'Hit “Start run” and watch the agent work in a sandbox, then Open PR — or kick one off from the Slack thread.',
sources:['https://www.harvey.ai/blog/building-spectre-internal-collaborative-cloud-agent-platform','https://www.harvey.ai/blog/autonomous-agents-legal-is-next','https://www.harvey.ai/blog/how-harvey-is-building-a-frontier-marketing-org','https://rywalker.com/research/harvey-spectre'],
mount(root){
 const timers=new Set();
 const later=(fn,ms)=>{const t=setTimeout(()=>{timers.delete(t);fn()},ms);timers.add(t);return t};
 let S,seq;
 root.innerHTML=`<style>${CSS}</style><div class="app"><aside class="sb"></aside><main></main></div><div class="toast"></div>`;
 const sb=root.querySelector('.sb'),main=root.querySelector('main'),toastEl=root.querySelector('.toast');
 let toastT;function toast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>toastEl.classList.remove('show'),2600)}
 function reset(){
  timers.forEach(clearTimeout);timers.clear();seq=7340;
  S={view:'home',cur:null,runs:[],repo:'acme/web',conns:{github:1,datadog:1,linear:1,slack:1},menu:null,
     prompt:'Fix the flaky formatInvoiceDate test in billing and make sure invoice dates respect the customer’s timezone',
     guide:{run:0,pr:0,fu:0,slack:0},slack:{sent:0,runId:null},autos:AUTOS.map(a=>({...a}))};
  const a=mkRun('Clean up stale spectre/* branches','cleanup','acme/web','automation',{instant:1,ago:'1d ago'});
  const b=mkRun('Bump eslint-config to v9 across packages','deps','acme/web','web',{instant:1,ago:'2d ago',who:'dana@acme.dev'});
  b.pr={n:4790,merged:1};
  render();
 }
 function mkRun(title,key,repo,src,o={}){
  const sc=SCRIPTS[key];const id='run_'+(seq++).toString(36);
  const r={id,title,key,repo:repo||sc.repo,src,status:'running',items:[],term:[],diff:[],tab:'term',pr:null,
   sbx:'sbx-'+Math.random().toString(16).slice(2,6),started:Date.now(),ago:o.ago,who:o.who||'you@acme.dev',
   conns:Object.keys(S.conns).filter(k=>S.conns[k]),turn:0};
  r.items.push({t:'user',x:o.prompt||title,src});
  S.runs.unshift(r);
  const evs=BOOT.concat(sc.ev);
  if(o.instant){evs.forEach(e=>apply(r,e,1));r.status='done';r.tab=r.diff.length?'diff':'term'}
  else play(r,evs,0);
  return r;
 }
 const sub=(r,s)=>s.replace(/\{rid\}/g,r.id).replace(/\{sbx\}/g,r.sbx).replace(/\{repo\}/g,r.repo).replace(/\{branch\}/g,SCRIPTS[r.key].branch||'')
   .replace(/\{conns\}/g,r.conns.filter(c=>c!=='github').map(c=>CONN[c][2]).join(', ')||'none');
 function play(r,evs,i){
  if(i>=evs.length)return;
  const e=evs[i];
  if((e.c&&e.c!=='github'&&!r.conns.includes(e.c))){play(r,evs,i+1);return}
  const d=e.t==='sys'?450:e.t==='msg'?300:e.t==='term'?900:e.t==='edit'?700:e.t==='done'?600:1000;
  later(()=>{const it=apply(r,e);
   if(e.t==='msg'){it.n=0;const words=it.x.split(' ');const step=()=>{it.n=Math.min(words.length,it.n+3);it.shown=words.slice(0,it.n).join(' ');upd(r);if(it.n<words.length)later(step,45);else play(r,evs,i+1)};step();return}
   upd(r);play(r,evs,i+1)},d);
 }
 function apply(r,e,inst){
  const sc=SCRIPTS[r.key];let it;
  if(e.t==='sys'){it={t:'sys',x:sub(r,e.x)}}
  else if(e.t==='tool'){it={t:'tool',c:e.c,x:sub(r,e.x),d:sub(r,e.d||'')}}
  else if(e.t==='term'){const ls=e.x.map(l=>sub(r,l));r.term.push(...ls,'');it={t:'tool',c:'bash',x:ls[0].replace(/^\$ /,''),d:ls.join('\n')}}
  else if(e.t==='msg'){it={t:'msg',x:e.x,shown:inst?e.x:''}}
  else if(e.t==='edit'){const f=e.file||sc.files[e.f];r.diff.push(f);const st=stat(f);it={t:'edit',p:f.p,a:st[0],r:st[1]};if(!inst&&r.diff.length===1)r.tab='diff'}
  else if(e.t==='done'){it={t:'done',h:e.h||sc.sum.h,li:e.li||sc.sum.li};r.status='done';r.ended=Date.now();if(!inst)onDone(r)}
  else it=e;
  r.items.push(it);return it;
 }
 const stat=f=>[f.l.filter(l=>l[0]==='+').length,f.l.filter(l=>l[0]==='-').length];
 function onDone(r){if(r.src==='web')S.guide.run=1;if(r.src==='slack'){S.guide.slack=1}}
 function upd(r){renderSide();
  if(S.view==='run'&&S.cur===r.id)renderRunParts();
  else if(S.view==='slack'&&S.slack.runId===r.id)renderSlack();
  else if(S.view==='home'){const l=main.querySelector('.recent');if(l)l.innerHTML=recentRows()}
 }
 /* ---------- sidebar ---------- */
 function renderSide(){
  const g=S.guide;const steps=[['run','Start the prefilled run'],['pr','Open the PR it produces'],['fu','Ask a follow-up (e.g. Add Tests)'],['slack','Start a run from Slack']];
  const nx=steps.find(s=>!g[s[0]]);
  sb.innerHTML=`<div class="logo"><i>S</i>Spectre</div>
  ${[['home','Home',IC.home],['board','Board',IC.board],['autos','Automations',IC.clock],['slack','Slack thread',IC.hash],['usage','Usage Stats',IC.chart]].map(n=>`<button class="nav ${S.view===n[0]||(n[0]==='home'&&S.view==='run'&&0)?'on':''}" data-nav="${n[0]}">${n[2]}${n[1]}</button>`).join('')}
  <div class="sec"><span>Runs</span><span>${S.runs.filter(r=>r.status==='running').length?S.runs.filter(r=>r.status==='running').length+' live':''}</span></div>
  ${S.runs.slice(0,6).map(r=>`<button class="rr ${S.view==='run'&&S.cur===r.id?'on':''}" data-run="${r.id}"><i class="dot ${r.status==='running'?'run':''}"></i><span>${esc(r.title)}</span></button>`).join('')}
  <div class="guide"><b>Try it</b><ol>${steps.map((s,i)=>`<li class="${g[s[0]]?'ok':nx===s?'nx':''}"><i>${g[s[0]]?'✓':''}</i>${s[1]}</li>`).join('')}</ol><button class="replay" data-replay>↺ Replay demo</button></div>
  <div class="me"><span class="av" style="background:#c2410c">YU</span>you@acme.dev</div>`;
 }
 /* ---------- views ---------- */
 function render(){renderSide();S.menu=null;
  if(S.view==='home')renderHome();else if(S.view==='run')renderRun();else if(S.view==='autos')renderAutos();else if(S.view==='slack')renderSlack();
 }
 const ago=r=>r.ago||(r.status==='running'?'running · '+Math.round((Date.now()-r.started)/1000)+'s':'just now');
 const srcLbl={web:'Web',slack:'Slack',automation:'Automation'};
 function recentRows(){return S.runs.map(r=>`<button class="row" data-run="${r.id}"><i class="dot ${r.status==='running'?'run':''}"></i><span class="t">${esc(r.title)}</span><span class="src">${srcLbl[r.src]}</span><span class="m mono">${r.repo}</span>${r.pr?`<span class="pill ${r.pr.merged?'':'done'}" style="${r.pr.merged?'background:#ede9fe;color:#5b21b6':''}">#${r.pr.n} ${r.pr.merged?'merged':'open'}</span>`:''}<span class="m el" data-el="${r.id}">${ago(r)}</span></button>`).join('')}
 function chipsHTML(){return Object.keys(CONN).filter(k=>k!=='bash').map(k=>`<button class="chip ${S.conns[k]?'':'off'}" data-conn="${k}" title="${k==='github'?'Required: repository access':'Toggle tool access for this run'}"><b style="background:${CONN[k][0]}">${CONN[k][1]}</b>${CONN[k][2]}</button>`).join('')}
 function renderHome(){
  main.innerHTML=`<div class="home"><h2>What should Spectre work on?</h2><p class="lede">Each request becomes a durable run in an isolated sandbox. Anyone can watch, follow up, or review the result.</p>
  <div class="comp"><textarea class="pt">${esc(S.prompt)}</textarea>
   <div class="crow"><div class="sel"><button class="chip" data-menu="repo">${IC.pr.replace('<svg','<svg width="12" height="12" style="stroke:currentColor;fill:none;stroke-width:2"')} <span class="mono">${S.repo}</span> ▾</button></div>
   <span class="chip">main</span><span style="width:1px;height:18px;background:#e5e5e1;margin:0 4px"></span>${chipsHTML()}
   <button class="go ${S.guide.run?'':'pulse'}" data-start>Start run →</button></div></div>
  <div class="sugg">${['Investigate why /api/export got slow after yesterday’s deploy','Bump eslint-config to v9 across packages','Write tests for billing refunds'].map(s=>`<button data-sugg="${esc(s)}">${esc(s)}</button>`).join('')}</div>
  <div class="lh">Recent runs</div><div class="recent">${recentRows()}</div></div>`;
 }
 function pickScript(p){p=p.toLowerCase();if(/slow|latency|investigate|debug|spike|why|incident|5xx|error rate/.test(p))return['investigate','acme/api'];if(/bump|upgrade|dependenc|eslint/.test(p))return['deps','acme/web'];if(/branch|cleanup|clean up/.test(p))return['cleanup','acme/web'];return['fix',null]}
 function startFromHome(){
  const ta=main.querySelector('.pt');const p=(ta.value||'').trim();if(!p){ta.focus();return}
  S.prompt=p;const [k,rp]=pickScript(p);
  const repo=S.repo!=='acme/web'?S.repo:(rp||S.repo);
  const r=mkRun(p.length>70?p.slice(0,68)+'…':p,k,k==='fix'?S.repo:repo,'web',{prompt:p});
  S.view='run';S.cur=r.id;render();toast('Run '+r.id+' created — it keeps going even if you close the tab');
 }
 /* run view */
 const run=()=>S.runs.find(r=>r.id===S.cur);
 function renderRun(){const r=run();if(!r){S.view='home';return render()}
  main.innerHTML=`<div class="bar hdr"></div><div class="bnd"></div><div class="cols"><div class="files"></div><div class="center"></div><div class="agent"><div class="stream"></div><div class="ac"></div></div></div>`;
  renderRunParts(1);
 }
 function keepScroll(el,html,stick){const atB=el.scrollHeight-el.scrollTop-el.clientHeight<40;const top=el.scrollTop;el.innerHTML=html;el.scrollTop=(stick&&atB)?el.scrollHeight:top}
 function renderRunParts(first){const r=run();if(!r||!main.querySelector('.cols'))return;
  const hasDiff=r.diff.length>0,done=r.status==='done';
  main.querySelector('.hdr').innerHTML=`<div style="min-width:0;flex:1"><h1>${esc(r.title)}</h1><div class="sub"><span class="mono">${r.repo}</span> · ${r.id} · by ${r.who} · <span class="src">from ${srcLbl[r.src]}</span></div></div>
   <span class="pill ${done?'done':'run'}">${done?'Completed':'Running'}</span>
   ${r.pr?`<button class="hb ${r.pr.merged?'merged':''}" data-prview>${IC.pr.replace('<svg','<svg width="14" height="14" style="stroke:currentColor;fill:none;stroke-width:1.8"')} PR #${r.pr.n} ${r.pr.merged?'merged':'open'} ↗</button>`:
     `<button class="hb pr ${done&&hasDiff&&!S.guide.pr?'pulse':''}" data-openpr ${done&&hasDiff?'':'disabled'}>${IC.pr.replace('<svg','<svg width="14" height="14" style="stroke:currentColor;fill:none;stroke-width:1.8"')} Open PR</button>`}
   <button class="hb" data-ide>${IC.ide.replace('<svg','<svg width="14" height="14" style="stroke:currentColor;fill:none;stroke-width:1.8"')} IDE</button>
   <button class="hb" data-share>${IC.share.replace('<svg','<svg width="14" height="14" style="stroke:currentColor;fill:none;stroke-width:1.8"')} Share</button>`;
  main.querySelector('.bnd').innerHTML=`<span><b>Sandbox</b> ${r.sbx} ${done?'· terminated':'· live'}</span><span><b>Repo</b> ${r.repo} (scoped, 60 min)</span><span><b>Tools</b> ${r.conns.map(c=>CONN[c][2]).join(' · ')}</span><span><b>Turns</b> ${r.turn+1}</span>`;
  // files
  const tree=(TREES[r.repo]||[]).slice();const mods=r.diff.map(f=>f.p.split('/').pop());
  r.diff.forEach(f=>{const b=f.p.split('/').pop();if(!tree.some(t=>t.trim()===b))tree.push('  '+b)});
  main.querySelector('.files').innerHTML=`<div class="fh">Files · ${r.repo.split('/')[1]}</div>`+tree.map(t=>{const d=t.length-t.trimStart().length,n=t.trim(),dir=n.endsWith('/'),m=mods.includes(n);
   return `<button class="fi ${m?'mod':''}" ${m?`data-jump="${esc(n)}"`:''} style="padding-left:${6+d*5}px">${dir?'▸ 📁':'📄'} ${esc(n.replace(/\/$/,''))}</button>`}).join('');
  // center
  const c=main.querySelector('.center');const tA=stat2(r);
  const body=r.tab==='diff'?(hasDiff?r.diff.map(f=>{const s=stat(f);return `<div class="dfh" data-file="${esc(f.p.split('/').pop())}">${esc(f.p)}<span class="a">+${s[0]}</span><span class="r">−${s[1]}</span></div>`+f.l.map(l=>`<div class="dl ${l[0]==='+'?'p':l[0]==='-'?'m':l[0]==='@'?'h':''}">${esc(l)}</div>`).join('')}).join(''):`<div class="empty">${done?'This run produced no code changes.<br>See the summary on the right.':'No changes yet — the diff appears as soon as the agent edits a file.'}</div>`)
   :r.term.map(l=>`<div class="${/^\$/.test(l)?'c':/✓/.test(l)?'ok':/✗/.test(l)?'er':/^ /.test(l)?'dm':''}">${esc(l)||' '}</div>`).join('')+(done?'<div class="dm">— worker exited 0 · sandbox destroyed —</div>':'<div class="c">▍</div>');
  if(first||!c.querySelector('.tabs')||c.dataset.tab!==r.tab){c.dataset.tab=r.tab;c.innerHTML=`<div class="tabs"></div><div class="${r.tab==='diff'?'diff':'term'}"></div>`}
  c.querySelector('.tabs').innerHTML=`<button class="${r.tab==='term'?'on':''}" data-tab="term">Terminal</button><button class="${r.tab==='diff'?'on':''}" data-tab="diff">Diff ${hasDiff?`<span style="color:#16a34a">+${tA[0]}</span> <span style="color:#dc2626">−${tA[1]}</span>`:''}</button><span class="br mono">${SCRIPTS[r.key].branch?'main → '+SCRIPTS[r.key].branch:'main'}</span>`;
  keepScroll(c.lastElementChild,body,r.tab==='term');
  // stream
  const st=main.querySelector('.stream');
  keepScroll(st,r.items.map((it,i)=>itemHTML(r,it,i)).join('')+(done?'':`<div class="work"><i></i>Working… <span class="el" data-el="${r.id}">${Math.round((Date.now()-r.started)/1000)}s</span></div>`),true);
  if(first)st.scrollTop=st.scrollHeight;
  const ac=main.querySelector('.ac');
  if(first||ac.dataset.done!==String(done)){ac.dataset.done=String(done);
   ac.innerHTML=`<div class="qa">${['PR Comments','Fix CI','Self-Review','Add Tests'].map(q=>`<button data-fu="${q}" ${done?'':'disabled'} ${q==='Add Tests'&&done&&S.guide.pr&&!S.guide.fu?'class="pulse"':''}>${q}</button>`).join('')}</div>
   <div class="ib"><textarea class="fu" placeholder="${done?'Follow up — a fresh worker resumes from this run’s history…':'Spectre is working. You can leave — the run is durable.'}" ${done?'':'disabled'}></textarea><button class="send" data-send ${done?'':'disabled'}>↑</button></div>`}
  else{const b=ac.querySelector('[data-fu="Add Tests"]');if(b)b.classList.toggle('pulse',done&&S.guide.pr&&!S.guide.fu)}
 }
 const stat2=r=>r.diff.reduce((a,f)=>{const s=stat(f);return[a[0]+s[0],a[1]+s[1]]},[0,0]);
 function itemHTML(r,it,i){
  if(it.t==='user')return `<div class="ub"><div class="who">${it.who||r.who}${it.src==='slack'?' · via Slack #eng-incidents':it.src==='automation'?' · automation':''}</div>${fmt(it.x)}</div>`;
  if(it.t==='sys')return `<div class="sy">${fmt(it.x)}</div>`;
  if(it.t==='tool'){const c=CONN[it.c];return `<div class="tc"><button data-tog="${i}"><b class="cb" style="background:${c[0]}">${c[1]}</b><span>${esc(it.x)}</span><em class="cv">${it.open?'▾':'▸'}</em></button>${it.open?`<div class="det">${esc(it.d)}</div>`:''}</div>`}
  if(it.t==='msg')return `<div class="ms">${fmt(it.shown!=null?it.shown:it.x)}</div>`;
  if(it.t==='edit')return `<button class="ed" data-jump="${esc(it.p.split('/').pop())}">✎ <span class="mono">${esc(it.p.split('/').pop())}</span><span class="a">+${it.a}</span><span class="r">−${it.r}</span></button>`;
  if(it.t==='done'){const s=stat2(r),sc=SCRIPTS[r.key];return `<div class="sum"><h4>✓ ${fmt(it.h)}</h4><ul>${it.li.map(l=>`<li><b>${l[0]}:</b> ${fmt(l[1])}</li>`).join('')}</ul>
   <div class="arts">${r.diff.length?`<span class="chip">Δ ${r.diff.length} file${r.diff.length>1?'s':''} <span style="color:#16a34a">+${s[0]}</span><span style="color:#dc2626">−${s[1]}</span></span>`:''}${sc.branch?`<span class="chip mono">⑂ ${sc.branch}</span>`:''}${r.pr?`<span class="chip">PR #${r.pr.n}</span>`:''}<span class="chip">${Math.max(4,Math.round(((r.ended||Date.now())-r.started)/1000))}s · $0.${(r.id.length*7)%9+1}${r.term.length%10}</span></div></div>`}
  return '';
 }
 function followUp(r,q){
  if(r.status!=='done')return;
  r.turn++;r.status='running';r.started=Date.now();r.sbx='sbx-'+Math.random().toString(16).slice(2,6);
  r.items.push({t:'user',x:q,who:'you@acme.dev'});
  const sc=SCRIPTS[r.key];const ev=[{t:'sys',x:'Follow-up appended to '+r.id+' · fresh worker {sbx} restored the previous session'}];
  if(q==='Add Tests'&&sc.more&&!r.diff.includes(sc.more)){ev.push({t:'msg',x:'Adding a regression test around the code path changed in this run.'},{t:'edit',file:sc.more},{t:'term',x:['$ pnpm test','✓ all tests passed'+(r.key==='fix'?' (27)':' (10)')]},{t:'term',x:['$ git commit -qam "test: add regression coverage" && git push','✓ pushed to '+(sc.branch||'main')]},{t:'done',h:'Added a regression test and pushed it to the branch.',li:[['New file','`'+sc.more.p.split('/').pop()+'`'],['Status','All tests green'+(r.pr?'; PR #'+r.pr.n+' updated':'')]]})}
  else if(q==='Self-Review'){ev.push({t:'msg',x:'Reviewing my own diff against the repo’s conventions…'},{t:'term',x:['$ git diff main --stat',r.diff.length+' files changed']},{t:'done',h:'Self-review: no blocking issues.',li:[['Nit','Consider exporting the helper for reuse'],['Risk','Low — change is covered by tests']]})}
  else if(q==='Fix CI'){ev.push({t:'tool',c:'github',x:'Fetch check runs for '+(sc.branch||'main'),d:'lint ✓  typecheck ✓  unit ✓  e2e ✓'},{t:'done',h:'CI is green — nothing to fix.',li:[['Checks','4/4 passing']]})}
  else if(q==='PR Comments'){ev.push({t:'tool',c:'github',x:'Read review comments',d:r.pr?'@dana: “can we keep the old signature as a deprecated overload?”':'No PR yet — open one first'},{t:'done',h:r.pr?'Addressed 1 review comment.':'No review comments yet.',li:[[r.pr?'Change':'Tip',r.pr?'Kept a deprecated overload for the old call sites':'Use Open PR, then ask again']]})}
  else ev.push({t:'msg',x:'Got it — picking this up with the context from the earlier turn: “'+q.slice(0,90)+'”.'},{t:'term',x:['$ rg -n "'+(q.split(' ')[0]||'todo').replace(/"/g,'')+'" --stats','12 matches in 5 files']},{t:'done',h:'Done — see notes above.',li:[['Follow-up','Investigated and summarized; no new code changes needed']]});
  S.guide.fu=1;play(r,ev,0);renderRunParts(1);renderSide();
 }
 function openPR(r){if(r.pr||r.status!=='done'||!r.diff.length)return;
  r.pr={n:4800+Math.floor(Math.random()*90)};r.items.push({t:'sys',x:'Opened PR #'+r.pr.n+' on '+r.repo+': '+SCRIPTS[r.key].branch+' → main · reviewers requested from CODEOWNERS'});
  S.guide.pr=1;renderRunParts(1);renderSide();toast('Pull request #'+r.pr.n+' opened on '+r.repo);
 }
 /* automations */
 function renderAutos(){
  main.innerHTML=`<div class="bar">${IC.clock.replace('<svg','<svg width="18" height="18" style="stroke:#888;fill:none;stroke-width:1.7"')}<h1 style="flex:1">Automations</h1><button class="hb" data-newauto style="background:#111;color:#fff">+ New Automation</button></div>
  <div class="auto"><div class="lh" style="margin:2px 0 10px">Scheduled runs use the same runtime as interactive work — same history, artifacts and review.</div>
  ${S.autos.map((a,i)=>`<div class="acard"><div style="flex:1;min-width:0"><div class="tt">${esc(a.n)} <span class="pill ${a.on?'':'off'}">${a.on?'Active':'Paused'}</span></div><p>${esc(a.d)}</p><div class="mt"><span class="mono">⑂ ${a.r}</span><span>${a.s}</span><span>Last: ${i===0?'1d ago':'—'}</span>${a.on?'<span>Next: in 12h</span>':''}</div></div>
   <div style="display:flex;gap:6px;align-items:flex-start"><button class="tg ${a.on?'on':''}" data-tg="${i}" title="Toggle"></button><button class="ib2" data-runauto="${i}" title="Run now">${IC.play}</button><button class="ib2" data-hist="${i}" title="History">${IC.hist}</button><button class="ib2" data-editauto title="Edit">${IC.edit}</button></div></div>`).join('')}</div>`;
 }
 /* slack */
 const SAV=(n,c)=>`<span class="av" style="background:${c}">${n}</span>`;
 function renderSlack(){
  const r=S.runs.find(x=>x.id===S.slack.runId);
  let reply='';
  if(r){const done=r.status==='done';const steps=r.items.filter(i=>i.t!=='user').length;
   reply=`<div class="sm"><span class="av" style="background:linear-gradient(135deg,#1e1b4b,#7c3aed,#db2777);font:italic 800 16px/34px Georgia,serif">S</span><div><div class="n">Spectre<span class="app">APP</span><small>11:42 AM</small></div>
   ${done?`<b>Task completed on <code>${r.repo}</code></b><div style="margin-top:4px">${fmt(SCRIPTS[r.key].sum.h)}</div><ul style="margin:4px 0;padding-left:18px">${SCRIPTS[r.key].sum.li.slice(0,3).map(l=>`<li><b>${l[0]}:</b> ${fmt(l[1])}</li>`).join('')}</ul>`:
   `👀 On it — started run <code>${r.id}</code> on <code>${r.repo}</code> with this thread as context.<div style="color:#777;font-size:12.5px;margin-top:3px">● Working · ${steps} steps so far…</div>`}
   <button class="sbtn ${done?'pulse':''}" data-run="${r.id}">View run</button>${done&&r.diff.length?`<button class="sbtn" data-run="${r.id}">Review diff (+${stat2(r)[0]} −${stat2(r)[1]})</button>`:''}</div></div>`}
  const html=`<div class="slack"><div class="slk"><div class="ws">Acme</div>${['general','eng','eng-incidents','deploys','design'].map(c=>`<div class="ch ${c==='eng-incidents'?'on':''}"># ${c}</div>`).join('')}<div style="padding:12px 8px 3px;opacity:.7">Apps</div><div class="ch">● Spectre</div></div>
  <div class="sth"><div class="hd">Thread<span># eng-incidents</span></div><div class="msgs">
   <div class="sm">${SAV('PK','#0e7490')}<div><div class="n">priya<small>11:31 AM</small></div><code>/api/export</code> p95 jumped from ~300ms to 2.4s right after yesterday’s 3pm release 😬
    <div style="margin-top:6px;border:1px solid #e5e5e5;border-radius:8px;padding:8px;width:280px"><svg viewBox="0 0 260 60" width="260" height="60">${Array.from({length:26},(_,i)=>{const h=i<17?6+((i*7)%5):38+((i*11)%14);return `<rect x="${i*10}" y="${58-h}" width="7" height="${h}" fill="${i<17?'#93c5fd':'#3b82f6'}"/>`}).join('')}<line x1="168" y1="0" x2="168" y2="60" stroke="#ef4444" stroke-dasharray="3 2"/></svg><div style="font-size:11px;color:#888">p95 latency · /api/export · last 24h</div></div></div></div>
   <div class="sm">${SAV('SM','#4d7c0f')}<div><div class="n">sam<small>11:33 AM</small></div>cc <span class="ment">@dana</span> ^^ I can repro locally with a big workspace export</div></div>
   <div class="sm">${SAV('DA','#a21caf')}<div><div class="n">dana<small>11:34 AM</small></div>the attachments-in-export change went out in that release fwiw</div></div>
   ${S.slack.sent?`<div class="sm">${SAV('YU','#c2410c')}<div><div class="n">you<small>11:41 AM</small></div><span class="ment">@Spectre</span> ${esc(S.slack.text)}</div></div>`:''}
   ${reply}</div>
   <div class="scomp"><input class="sin" value="${S.slack.sent?'':'@Spectre can you debug what Priya said and propose a fix?'}" placeholder="Reply…"><button data-ssend class="${S.slack.sent?'':'pulse'}" ${S.slack.sent?'disabled':''}>Send</button></div></div></div>`;
  const m=main.querySelector('.msgs');const top=m?m.scrollTop:0;
  main.innerHTML=html;const m2=main.querySelector('.msgs');m2.scrollTop=r?m2.scrollHeight:top;
 }
 function slackSend(){const inp=main.querySelector('.sin');let t=(inp.value||'').trim();if(!t)return;
  t=t.replace(/^@spectre\s*/i,'');S.slack.sent=1;S.slack.text=t;renderSlack();
  later(()=>{const r=mkRun('Debug /api/export latency spike (from #eng-incidents)','investigate','acme/api','slack',{prompt:t});S.slack.runId=r.id;renderSide();renderSlack()},900);
 }
 /* ---------- events ---------- */
 function onClick(e){
  const b=e.target.closest('button');
  if(!b||!root.contains(b)){if(S.menu){S.menu=null;const m=root.querySelector('.menu');m&&m.remove()}return}
  const d=b.dataset;
  if(d.replay!==undefined){reset();toast('Demo reset');return}
  if(d.nav){if(d.nav==='board'||d.nav==='usage'){toast((d.nav==='board'?'Board':'Usage Stats')+' isn’t part of this demo');return}S.view=d.nav;if(d.nav!=='home')S.cur=null;render();return}
  if(d.run){S.view='run';S.cur=d.run;render();return}
  if(d.start!==undefined){startFromHome();return}
  if(d.sugg){const ta=main.querySelector('.pt');ta.value=d.sugg;S.prompt=d.sugg;const k=pickScript(d.sugg);if(k[1]){S.repo=k[1];const p=S.prompt;renderHome();}return}
  if(d.conn){if(d.conn==='github'){toast('GitHub access is required to clone the repo');return}S.prompt=main.querySelector('.pt').value;S.conns[d.conn]=!S.conns[d.conn];renderHome();return}
  if(d.menu){S.prompt=main.querySelector('.pt').value;const old=root.querySelector('.menu');if(old){old.remove();return}
   const m=document.createElement('div');m.className='menu';m.innerHTML=Object.keys(TREES).map(k=>`<button data-repo="${k}" class="mono">${k===S.repo?'✓ ':'  '}${k}</button>`).join('');b.parentNode.appendChild(m);return}
  if(d.repo){S.repo=d.repo;renderHome();return}
  const r=run();
  if(d.tab&&r){r.tab=d.tab;renderRunParts();return}
  if(d.tog&&r){const it=r.items[+d.tog];it.open=!it.open;renderRunParts();return}
  if(d.jump&&r){r.tab='diff';renderRunParts();const h=main.querySelector(`.dfh[data-file="${CSS_ESC(d.jump)}"]`);if(h){const c=main.querySelector('.diff');c.scrollTop=h.offsetTop-4}return}
  if(d.openpr!==undefined&&r){openPR(r);return}
  if(d.prview!==undefined){toast('That would open GitHub — not in this demo');return}
  if(d.ide!==undefined){toast('Opens the run’s workspace in a browser IDE (not in this demo)');return}
  if(d.share!==undefined){toast('Link copied — teammates can watch, follow up, or take over this run');return}
  if(d.fu&&r){followUp(r,d.fu);return}
  if(d.send!==undefined&&r){const ta=main.querySelector('.fu');const v=ta.value.trim();if(v)followUp(r,v);return}
  if(d.tg){const a=S.autos[+d.tg];a.on=!a.on;renderAutos();toast(a.n+(a.on?' resumed':' paused'));return}
  if(d.runauto){const a=S.autos[+d.runauto];const nr=mkRun(a.n,a.k,a.r,'automation',{prompt:a.p||a.d});S.view='run';S.cur=nr.id;render();toast('Automation materialized an ordinary run: '+nr.id);return}
  if(d.hist){const id=S.runs.find(x=>x.src==='automation'&&x.title===S.autos[+d.hist].n);if(id){S.view='run';S.cur=id.id;render()}else toast('No runs yet — press ▶ to run it now');return}
  if(d.newauto!==undefined||d.editauto!==undefined){toast('Automation editor isn’t part of this demo — try ▶ Run now');return}
  if(d.ssend!==undefined){slackSend();return}
 }
 const CSS_ESC=s=>s.replace(/["\\]/g,'\\$&');
 function onKey(e){
  if(e.key==='Enter'&&(e.metaKey||e.ctrlKey)&&e.target.classList.contains('pt')){e.preventDefault();startFromHome()}
  else if(e.key==='Enter'&&!e.shiftKey&&e.target.classList.contains('fu')){e.preventDefault();const r=run();const v=e.target.value.trim();if(r&&v)followUp(r,v)}
  else if(e.key==='Enter'&&e.target.classList.contains('sin')){e.preventDefault();if(!S.slack.sent)slackSend()}
 }
 function onInput(e){if(e.target.classList.contains('pt'))S.prompt=e.target.value}
 root.addEventListener('click',onClick);root.addEventListener('keydown',onKey);root.addEventListener('input',onInput);
 const tick=setInterval(()=>{root.querySelectorAll('.el').forEach(el=>{const r=S.runs.find(x=>x.id===el.dataset.el);if(r&&r.status==='running'){const s=Math.round((Date.now()-r.started)/1000);el.textContent=el.closest('.work')?s+'s':'running · '+s+'s'}})},1000);
 reset();
 return function(){timers.forEach(clearTimeout);timers.clear();clearInterval(tick);clearTimeout(toastT);root.removeEventListener('click',onClick);root.removeEventListener('keydown',onKey);root.removeEventListener('input',onInput);root.innerHTML=''};
}};
})();
