/* Spectre — a stylistic recreation of Harvey's internal collaborative cloud agent platform,
   based on the public "Building Spectre" engineering post. All data below is fake. */
(function(){
const ID='spectre';
const CSS=`
.demo-spectre{--n50:#F7F6F4;--n100:#F1EFEC;--n200:#E4E1DD;--n300:#D2D0CC;--n400:#B8B5B0;--n500:#9E9B95;--n600:#848079;--n700:#6A6660;--n800:#4E4B46;--fg:#1A1917;--sub:#848079;--mu:#9E9B95;--ok:#16a34a;--er:#dc2626;--blue:#2563eb;--mono:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
 font:13px/1.5 Inter,ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:var(--fg);background:#fff;-webkit-font-smoothing:antialiased}
@ .app{display:flex;height:100%}
@ button{font:inherit;color:inherit;cursor:pointer;border:0;background:none;padding:0}
@ .i{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round;flex:none}
@ .mono{font-family:var(--mono)}
@ code{font-family:var(--mono);font-size:.88em;background:var(--n100);border-radius:4px;padding:1px 5px;color:var(--fg)}
@ .sp{flex:1}
@ .a{color:var(--ok)}@ .r{color:var(--er)}
@ .spin{width:12px;height:12px;border:1.75px solid var(--n200);border-top-color:var(--n700);border-radius:50%;animation:sp-spin .8s linear infinite;flex:none;display:inline-block}
@keyframes sp-spin{to{transform:rotate(360deg)}}
@ .pulse{animation:sp-glow 1.6s infinite}
@keyframes sp-glow{0%,100%{box-shadow:0 0 0 0 rgba(26,25,23,.35)}50%{box-shadow:0 0 0 5px rgba(26,25,23,0)}}
/* sidebar */
@ .sb{width:212px;flex:none;background:#FBFAF9;border-right:1px solid var(--n100);display:flex;flex-direction:column;padding:10px 8px 8px;min-height:0}
@ .sb.hide{display:none}
@ .lgr{display:flex;align-items:center;gap:9px;padding:2px 6px 12px;font-weight:600;font-size:14px}
@ .lg{width:26px;height:26px;border-radius:7px;flex:none;background:radial-gradient(circle at 30% 22%,#c084fc,#7c3aed 42%,#2e1065 78%,#14072b);color:#fff;font:italic 800 16px/26px Georgia,serif;text-align:center;text-shadow:0 0 6px #f5d0fe}
@ .ib{width:28px;height:28px;border-radius:7px;display:inline-flex;align-items:center;justify-content:center;color:var(--n700);flex:none}
@ .ib:hover{background:var(--n100);color:var(--fg)}
@ .nav{display:flex;align-items:center;gap:10px;height:30px;padding:0 9px;border-radius:7px;color:#33312C;width:100%;text-align:left;font-size:13px}
@ .nav .i{color:var(--n700)}
@ .nav:hover{background:var(--n100)}@ .nav.on{background:var(--n100);font-weight:500}
@ .sec{font-size:11.5px;color:var(--sub);padding:14px 9px 4px;display:flex;justify-content:space-between;align-items:center}
@ .rr{display:flex;align-items:center;gap:9px;height:28px;padding:0 9px;border-radius:7px;font-size:12.5px;color:#33312C;width:100%;text-align:left}
@ .rr:hover,@ .rr.on{background:var(--n100)}
@ .rr span.t{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
@ .rr .i{width:14px;height:14px;color:var(--n600)}
@ .guide{margin-top:auto;background:#fff;border:1px solid var(--n200);border-radius:10px;padding:10px;font-size:11.5px}
@ .guide b{font-size:10.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--sub);font-weight:600}
@ .guide ol{margin:6px 0 8px;padding:0;list-style:none;display:flex;flex-direction:column;gap:5px}
@ .guide li{display:flex;gap:7px;color:var(--n700);align-items:center}
@ .guide li i{width:14px;height:14px;border-radius:50%;border:1.5px solid var(--n300);flex:none;font:700 8.5px/11px system-ui;text-align:center;font-style:normal;color:#fff}
@ .guide li.ok{color:var(--mu);text-decoration:line-through}@ .guide li.ok i{background:var(--ok);border-color:var(--ok)}
@ .guide li.nx{color:var(--fg);font-weight:600}@ .guide li.nx i{border-color:var(--fg)}
@ .guide li button{text-align:left;text-decoration:underline;text-decoration-color:var(--n300);text-underline-offset:2px}
@ .replay{width:100%;border:1px solid var(--n200)!important;border-radius:7px!important;padding:4px!important;font-size:11.5px;background:var(--n50)!important}
@ .replay:hover{background:var(--n100)!important}
@ .srch{display:flex;gap:6px;align-items:center;margin-top:8px}
@ .srch div{flex:1;display:flex;align-items:center;gap:7px;height:30px;border:1px solid var(--n200);border-radius:8px;padding:0 8px;color:var(--mu);font-size:12.5px;background:#fff}
@ .me{display:flex;align-items:center;gap:9px;padding:10px 6px 2px;font-size:13px;font-weight:500;margin-top:8px;border-top:1px solid var(--n100)}
@ .av{width:26px;height:26px;border-radius:50%;flex:none;color:#fff;font:600 10px/26px system-ui;text-align:center}
/* rail (collapsed sidebar, as on the task page) */
@ .sb.rail{width:48px;padding:10px 0;align-items:center;background:#fff;gap:4px}
@ .sb.rail .lg{margin-bottom:10px;background:none;color:var(--fg);text-shadow:none;font:600 14px/26px Inter,system-ui,sans-serif}
@ .sb.rail .ib{width:32px;height:32px}
@ .sb.rail .ib.on{background:var(--n100);color:var(--fg)}
@ .sb.rail .ib .i{width:17px;height:17px}
@ .sb.rail hr{width:22px;border:0;border-top:1px solid var(--n200);margin:6px 0}
/* main */
@ main{flex:1;min-width:0;display:flex;flex-direction:column;position:relative;background:#fff}
@ .hd{height:56px;border-bottom:1px solid var(--n100);display:flex;align-items:center;padding:0 12px 0 14px;gap:8px;flex:none}
@ .hd h1{font-size:15px;font-weight:600;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:-.005em}
@ .ttl{min-width:0;flex:1;padding-left:4px}
@ .t1{display:flex;align-items:center;gap:7px;min-width:0}
@ .t1>.i{width:13px;height:13px;color:var(--mu)}
@ .t2{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--sub);white-space:nowrap;margin-top:1px}
@ .t2 .i{width:12px;height:12px}
@ .t2 a{color:var(--blue);cursor:pointer}
@ .st{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;border-radius:999px;padding:1px 8px;white-space:nowrap;border:1px solid var(--n200);color:var(--n700)}
@ .st.done{background:rgb(209,250,229);border-color:rgb(167,243,208);color:rgb(6,95,70)}
@ .st .spin{width:9px;height:9px}
@ .hb{display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 10px;border-radius:8px;font-size:13px;font-weight:500;white-space:nowrap;color:#33312C}
@ .hb .i{color:var(--n700)}
@ .hb:hover,@ .hb.on{background:var(--n100)}@ .hb[disabled]{opacity:.4;cursor:default;background:none}
@ .hb.merged .i:first-child{color:#7c3aed}
@ .db{display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 12px;border-radius:8px;background:var(--fg);color:#fff;font-size:12.5px;font-weight:500;white-space:nowrap}
@ .db:hover{background:var(--n800)}
@ .ob{display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 11px;border-radius:8px;border:1px solid var(--n200)!important;background:#fff;font-size:12.5px;font-weight:500}
@ .ob:hover{background:var(--n100)}
/* home */
@ .home{flex:1;overflow:auto}
@ .hw{max-width:740px;margin:0 auto;padding:52px 24px 30px}
@ .hw>*{flex:none}
@ .greet{font:400 30px/1.2 'Iowan Old Style','Palatino Linotype',Palatino,Georgia,ui-serif,serif;letter-spacing:-.015em;text-align:center;margin:0 0 6px}
@ .lede{color:var(--sub);margin:0 0 22px;text-align:center;font-size:13px}
@ .cmp{background:var(--n50);border:1px solid var(--n200);border-radius:14px;padding:8px}
@ .cmp.big{background:#fff;box-shadow:0 1px 2px rgba(26,25,23,.04),0 8px 24px -12px rgba(26,25,23,.12)}
@ .cmp textarea{width:100%;border:0;outline:0;resize:none;font:13.5px/1.5 inherit;font-family:inherit;padding:6px 6px 2px;color:var(--fg);background:none}
@ .cmp textarea::placeholder{color:var(--mu)}
@ .cmp.big textarea{height:70px;font-size:14px}
@ .cbar{display:flex;align-items:center;gap:6px;padding:4px 2px 0;flex-wrap:nowrap}
@ .sel{position:relative}
@ .cb2{display:inline-flex;align-items:center;gap:6px;height:28px;border:1px solid var(--n200)!important;border-radius:8px!important;padding:0 9px!important;font-size:12px;font-weight:500;background:#fff!important;white-space:nowrap}
@ .cb2:hover{background:var(--n100)!important}
@ .cb2 .i{width:13px;height:13px;color:var(--n700)}
@ .chip{display:inline-flex;align-items:center;gap:5px;height:24px;border:1px solid var(--n200)!important;border-radius:999px!important;padding:0 8px 0 4px!important;font-size:11.5px;background:#fff!important;white-space:nowrap;color:#33312C}
@ .chip:hover{border-color:var(--n300)!important}
@ .chip.off{opacity:.45}@ .chip.off span{text-decoration:line-through}
@ .cbx{width:16px;height:16px;border-radius:4px;color:#fff;font:700 8px/16px system-ui;text-align:center;flex:none;display:inline-block}
@ .vsep{width:1px;height:18px;background:var(--n200);margin:0 2px;flex:none}
@ .go{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px!important;background:var(--fg)!important;color:#fff!important;border-radius:8px!important;font-weight:500;font-size:12.5px;white-space:nowrap}
@ .go:hover{background:var(--n800)!important}
@ .menu{position:absolute;top:32px;left:0;background:#fff;border:1px solid var(--n200);border-radius:10px;box-shadow:0 12px 32px -12px rgba(26,25,23,.28);padding:4px;z-index:5;min-width:180px}
@ .menu button{display:flex;gap:8px;align-items:center;width:100%;text-align:left;padding:6px 9px;border-radius:6px;font-size:12.5px}
@ .menu button:hover{background:var(--n100)}
@ .sugg{display:flex;gap:6px;margin:12px 0 30px;flex-wrap:wrap;justify-content:center}
@ .sugg button{border:1px solid var(--n200);border-radius:999px;padding:4px 11px;font-size:12px;color:var(--n700);background:#fff}
@ .sugg button:hover{background:var(--n50);color:var(--fg)}
@ .lh{font-size:12px;color:var(--sub);margin:0 0 8px;font-weight:500;display:flex;justify-content:space-between;align-items:center}
@ .lh button{color:var(--fg);font-size:12px;display:inline-flex;gap:5px;align-items:center}
@ .lh button:hover{text-decoration:underline}
@ .list{border:1px solid var(--n200);border-radius:10px;overflow:hidden}
@ .row{display:flex;align-items:center;gap:10px;height:42px;padding:0 12px;width:100%;text-align:left;background:#fff;border-top:1px solid var(--n100)!important}
@ .row:first-child{border-top:0!important}
@ .row:hover{background:var(--n50)}
@ .row .t{flex:1;min-width:0;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@ .row .m{font-size:11.5px;color:var(--sub);white-space:nowrap}
@ .row .i{width:14px;height:14px}
@ .src{font-size:10.5px;border:1px solid var(--n200);border-radius:5px;padding:0 5px;color:var(--n700);white-space:nowrap;background:#fff;line-height:17px}
@ .prc{display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--n700);white-space:nowrap}
@ .prc .i{width:12px;height:12px;color:var(--ok)}@ .prc.mg .i{color:#7c3aed}
@ .okc{color:var(--ok)}
/* task page */
@ .cols{flex:1;display:flex;min-height:0}
@ .files{width:188px;flex:none;border-right:1px solid var(--n100);display:flex;flex-direction:column;min-height:0;font-size:12.5px}
@ .fh{height:36px;flex:none;display:flex;align-items:center;justify-content:space-between;padding:0 6px 0 12px;color:var(--sub);font-size:12px}
@ .fh .ib{width:24px;height:24px}@ .fh .i{width:14px;height:14px}
@ .fbr{padding:4px 12px 8px;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:none}
@ .tree{flex:1;overflow-y:auto;overflow-x:hidden;padding:0 4px 8px}
@ .fi{display:flex;align-items:center;gap:5px;height:24px;border-radius:6px;white-space:nowrap;color:#33312C;width:100%;text-align:left;padding-right:8px}
@ .fi .i{width:14px;height:14px;color:var(--n600)}
@ .fi .cv{width:12px;height:12px;color:var(--n500)}
@ .fi .nm{overflow:hidden;text-overflow:ellipsis}
@ .fi.mod::after{content:'';width:6px;height:6px;border-radius:50%;background:var(--blue);margin-left:auto;flex:none}
@ .fi.mod:hover{background:var(--n100)}
@ .center{flex:1;min-width:0;display:flex;flex-direction:column;border-right:1px solid var(--n100)}
@ .cbr{height:36px;flex:none;display:flex;align-items:center;gap:8px;padding:0 12px;border-bottom:1px solid var(--n100);font-size:12px;color:var(--sub);white-space:nowrap}
@ .cbr .bl{display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden;text-overflow:ellipsis}
@ .cbr .bl .i{width:13px;height:13px}
@ .seg{display:inline-flex;background:var(--n100);border-radius:7px;padding:2px;flex:none}
@ .seg button{height:22px;padding:0 9px;border-radius:5px;font-size:11.5px;color:var(--n700)}
@ .seg button.on{background:#fff;color:var(--fg);font-weight:500;box-shadow:0 1px 2px rgba(0,0,0,.08)}
@ .term{flex:1;overflow:auto;background:#fff;color:#33312C;padding:10px 14px;font:11.5px/1.65 var(--mono);white-space:pre-wrap;word-break:break-all}
@ .term .c{color:var(--fg);font-weight:600}@ .term .ok{color:var(--ok)}@ .term .er{color:var(--er)}@ .term .dm{color:var(--mu)}
@ .diff{flex:1;overflow-y:auto;overflow-x:hidden;background:#fff;padding-bottom:20px}
@ .dfh{position:sticky;top:0;z-index:1;display:flex;align-items:center;gap:8px;height:40px;padding:0 14px 0 12px;background:#fff;border-bottom:1px solid var(--n100);white-space:nowrap;overflow:hidden}
@ .dfh .i{width:14px;height:14px;color:var(--n600)}
@ .dfh .p{font:500 12.5px var(--mono);overflow:hidden;text-overflow:ellipsis;min-width:0}
@ .dfh .a{margin-left:auto;font-size:12.5px}@ .dfh .r{font-size:12.5px}
@ .dl{font:11.5px/1.75 var(--mono);white-space:pre;padding:0 14px;overflow:hidden;text-overflow:ellipsis;background:var(--n50);color:#33312C}
@ .dl.p{background:rgb(209,250,229);color:rgb(6,78,59)}@ .dl.m{background:rgb(255,228,230);color:rgb(136,19,55)}@ .dl.h{background:var(--n50);color:#1d4ed8;padding-top:4px;padding-bottom:4px}
@ .dsp{height:14px}
@ .empty{flex:1;display:flex;flex-direction:column;gap:8px;align-items:center;justify-content:center;color:var(--sub);font-size:12.5px;text-align:center;padding:30px}
@ .empty .i{width:22px;height:22px;color:var(--n400)}
@ .agent{width:372px;flex:none;display:flex;flex-direction:column;min-height:0;background:#fff}
@ .stream{flex:1;overflow:auto;padding:12px 14px 14px;display:flex;flex-direction:column;gap:10px}
@ .stream>*,@ .msgs>*{flex:none}
@ .ub{align-self:flex-end;max-width:90%;display:flex;flex-direction:column;align-items:flex-end;gap:3px}
@ .ub .who{font-size:11px;color:var(--mu)}
@ .ub .bub{background:var(--n100);border-radius:14px;padding:8px 12px;font-size:13px}
@ .sy{font-size:11.5px;color:var(--sub);display:flex;gap:7px;align-items:flex-start;line-height:1.45}
@ .sy .i{width:13px;height:13px;margin-top:1px;color:var(--n500)}
@ .tg2{border:1px solid var(--n200);border-radius:8px;overflow:hidden;background:#fff}
@ .tg2>button{display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;text-align:left;min-width:0}
@ .tg2>button:hover{background:var(--n50)}
@ .tg2>button .i{width:14px;height:14px;color:var(--n600)}
@ .tg2 .n{font-weight:500;flex:none}
@ .tg2 .k{color:var(--mu);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}
@ .tg2 .bd{display:flex;gap:2px;flex:none}
@ .tg2 .bd .cbx{width:14px;height:14px;font-size:7px;line-height:14px;border-radius:3px}
@ .tbody{border-top:1px solid var(--n100);padding:4px}
@ .trow{display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:4px 6px;border-radius:6px;font-size:12px;min-width:0}
@ .trow:hover{background:var(--n50)}
@ .trow .tl{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#33312C}
@ .trow .i{width:13px;height:13px;color:var(--n500)}
@ .trow .ti{width:16px;height:16px;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;flex:none}
@ .trow .ti .i{width:12px;height:12px}
@ .tdet{margin:2px 6px 6px 30px;background:var(--n50);border:1px solid var(--n100);border-radius:6px;padding:6px 8px;font:11px/1.55 var(--mono);color:var(--n800);white-space:pre-wrap;word-break:break-word}
@ .md{font-size:13px;line-height:1.6}
@ .md p{margin:0 0 8px}@ .md p:last-child{margin:0}
@ .md ul{margin:0 0 4px;padding-left:18px;display:flex;flex-direction:column;gap:3px}
@ .md b{font-weight:600}
@ .chg{border:1px solid var(--n200);border-radius:8px;overflow:hidden}
@ .chg>button{display:flex;align-items:center;gap:8px;width:100%;padding:8px 10px;text-align:left;font-size:12.5px;font-weight:500}
@ .chg>button:hover{background:var(--n50)}
@ .chg .i{width:14px;height:14px;color:var(--n600)}
@ .cnt{font-size:11px;background:var(--n100);border-radius:4px;padding:0 5px;color:var(--n700);font-weight:500}
@ .chg .a,@ .chg .r{font-weight:500}
@ .foot{display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--mu)}
@ .foot .i{width:13px;height:13px;color:var(--ok)}
@ .work{font-size:12.5px;color:var(--sub);display:flex;align-items:center;gap:8px}
@ .ac{padding:8px 12px 12px;flex:none}
@ .qa{display:flex;gap:6px;margin-bottom:4px;overflow-x:auto;scrollbar-width:none}
@ .qa::-webkit-scrollbar{display:none}
@ .qb{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 10px!important;border:1px solid var(--n200)!important;border-radius:8px!important;font-size:12px;font-weight:500;background:#fff!important;white-space:nowrap;flex:none}
@ .qb .i{width:14px;height:14px;color:var(--n700)}
@ .qb:hover{background:var(--n100)!important}@ .qb[disabled]{opacity:.45;cursor:default;background:#fff!important}
@ .qs{display:inline-flex;flex:none}@ .qs .qb:first-child{border-radius:8px 0 0 8px!important}@ .qs .qb+.qb{border-left:0!important;border-radius:0 8px 8px 0!important;padding:0 6px!important}
@ .ac textarea{height:52px}
@ .cbot{display:flex;align-items:center;gap:6px;padding:2px 2px 0;color:var(--n600)}
@ .cbot .fl{display:inline-flex;gap:5px;align-items:center;font-size:12px;color:var(--mu)}
@ .cbot .fl .i{width:14px;height:14px}
@ .cbot>.i{width:15px;height:15px;margin:0 4px}
@ .sg{display:inline-flex;border-radius:8px;overflow:hidden}
@ .send{width:32px;height:28px;background:var(--n600)!important;color:#fff!important;display:inline-flex;align-items:center;justify-content:center}
@ .send .i{width:15px;height:15px}
@ .send.dd{width:24px;background:var(--fg)!important}
@ .send[disabled]{background:var(--n300)!important;cursor:default}
/* automations */
@ .pg{display:flex;align-items:center;gap:10px;flex:1;padding-left:4px}
@ .pg .i{width:18px;height:18px;color:var(--n700)}
@ .pg h1{font-size:16px!important}
@ .auto{flex:1;overflow:auto;padding:6px 18px 18px}
@ .ash{display:flex;align-items:center;gap:7px;color:var(--sub);font-size:12.5px;padding:16px 2px 10px}
@ .ash .i{width:14px;height:14px}
@ .ash+.ash{padding-top:4px}
@ .acard{border:1px solid var(--n100);background:var(--n50);border-radius:10px;padding:13px 14px;margin-bottom:10px;display:flex;gap:14px}
@ .acard .tt{font-weight:600;font-size:13.5px;display:flex;gap:8px;align-items:center}
@ .bdg{font-size:11px;font-weight:600;border-radius:5px;padding:0 7px;line-height:19px;background:var(--fg);color:#fff}
@ .bdg.off{background:none;color:var(--n700)}
@ .acard p{margin:3px 0 7px;color:var(--mu);font-size:12.5px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
@ .acard .mt{font-size:11.5px;color:var(--mu);display:flex;gap:14px;align-items:center}
@ .acard .mt .i{width:12px;height:12px}
@ .acard .mt span{display:inline-flex;gap:4px;align-items:center}
@ .ibb{width:30px;height:30px;border:1px solid var(--n200)!important;border-radius:8px!important;background:#fff!important;display:inline-flex;align-items:center;justify-content:center;color:#33312C}
@ .ibb:hover{background:var(--n100)!important}@ .ibb .i{width:14px;height:14px}
@ .ibb.del{color:var(--er)}
@ .tg{width:30px;height:18px;border-radius:999px;background:var(--n200);position:relative;flex:none;transition:.15s;margin:6px 4px 0 0}
@ .tg::after{content:'';position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#fff;transition:.15s;box-shadow:0 1px 2px rgba(0,0,0,.2)}
@ .tg.on{background:var(--fg)}@ .tg.on::after{left:14px}
/* slack */
@ .slack{flex:1;display:flex;min-height:0;background:#fff}
@ .slk{width:190px;background:#3f0e40;color:#cfc3cf;padding:12px 8px;font-size:13px;flex:none;display:flex;flex-direction:column;gap:1px}
@ .slk .ws{color:#fff;font-weight:700;font-size:15px;padding:0 8px 12px}
@ .slk div.ch{padding:3px 10px;border-radius:6px}@ .slk div.ch.on{background:#1164a3;color:#fff}
@ .slk .back{margin-top:auto;border:1px solid rgba(255,255,255,.25)!important;border-radius:8px!important;padding:7px 10px!important;color:#fff!important;font-size:12px;display:flex;gap:8px;align-items:center}
@ .slk .back:hover{background:rgba(255,255,255,.08)!important}
@ .sth{flex:1;display:flex;flex-direction:column;min-width:0}
@ .sth .shd{padding:12px 20px;border-bottom:1px solid #e8e8e8;font-weight:800;font-size:15px}
@ .sth .shd span{font-weight:400;color:#616061;font-size:12.5px;margin-left:8px}
@ .msgs{flex:1;overflow:auto;padding:10px 0}
@ .rep{margin:4px 20px 6px;color:#616061;font-size:12.5px;display:flex;gap:10px;align-items:center}@ .rep::after{content:'';flex:1;border-top:1px solid #e8e8e8}
@ .sm{display:flex;gap:9px;padding:6px 20px;font:14px/1.46 Lato,system-ui,-apple-system,sans-serif;color:#1d1c1d}
@ .sm:hover{background:#f8f8f8}
@ .sm .av{width:36px;height:36px;border-radius:8px;font-size:12px;line-height:36px}
@ .sm .lg{width:36px;height:36px;border-radius:8px;font-size:20px;line-height:36px}
@ .sm .n{font-weight:800;font-size:14px}@ .sm .n small{font-weight:400;color:#616061;font-size:12px;margin-left:6px}
@ .sm .app{font-size:9.5px;background:#e8e8e8;color:#555;border-radius:3px;padding:0 3px;font-weight:700;margin-left:4px;display:inline-block;height:auto;vertical-align:1px}
@ .sm code{color:#c0143c;background:#f6f6f6;border:1px solid #e2e2e2}
@ .ment{color:#1264a3;background:#e8f5fa;border-radius:3px;padding:0 2px}
@ .sbtn{border:1px solid #ccc!important;border-radius:6px!important;padding:3px 10px!important;font-size:13px;font-weight:700;margin:8px 6px 0 0;background:#fff!important}
@ .sbtn:hover{background:#f6f6f6!important}
@ .scomp{margin:8px 20px 14px;border:1px solid #bbb;border-radius:9px;display:flex;align-items:center;padding:8px 8px 8px 12px;gap:8px}
@ .scomp input{flex:1;border:0;outline:0;font:14px system-ui,sans-serif;background:none;color:#1d1c1d}
@ .scomp button{background:#007a5a;color:#fff;border-radius:6px;padding:5px 12px;font-weight:700;font-size:12.5px}
@ .scomp button[disabled]{background:#ddd}
@ .toast{position:absolute;left:50%;bottom:18px;transform:translate(-50%,20px);background:var(--fg);color:#fff;border-radius:10px;padding:8px 14px;font-size:12.5px;opacity:0;transition:.25s;pointer-events:none;z-index:20;white-space:nowrap;box-shadow:0 8px 24px -8px rgba(0,0,0,.35)}
@ .toast.show{opacity:1;transform:translate(-50%,0)}
`;
const P={
home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
board:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
chart:'<path d="M3 3v18h18"/><path d="M8 17v-5M13 17V8M18 17v-8"/>',
notes:'<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/>',
branch:'<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="7" r="2"/><path d="M6 7v10M18 9a6 6 0 0 1-6 6H6"/>',
pr:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M6 8.5v7M18 15.5V9a3 3 0 0 0-3-3h-3M14 3.5 11.5 6 14 8.5"/>',
ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
pencil:'<path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17z"/>',
panel:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
archive:'<rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M10 12h4"/>',
share:'<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 13.3 7.6 4.4M15.8 6.3l-7.6 4.4"/>',
dots:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
chevR:'<path d="m9 6 6 6-6 6"/>',chevD:'<path d="m6 9 6 6 6-6"/>',chevU:'<path d="m6 15 6-6 6 6"/>',
folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
file:'<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/>',
wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
play:'<path d="M7 4.5v15l12-7.5z"/>',
hist:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
sliders:'<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
msg:'<path d="M4 5h16v11H8l-4 4z"/><path d="M8 9h8M8 12h5"/>',
alert:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>',
eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
flask:'<path d="M9 3h6M10 3v6L4.5 19a1 1 0 0 0 .9 1.5h13.2a1 1 0 0 0 .9-1.5L14 9V3M7 15h10"/>',
clip:'<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3h6v1M9 11h6M9 15h4"/>',
attach:'<path d="m20 11-8.5 8.5a5 5 0 0 1-7-7L13 4a3.3 3.3 0 0 1 4.7 4.7l-8.5 8.5a1.7 1.7 0 0 1-2.4-2.4L14.5 7"/>',
mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
spark:'<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/>',
arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
check:'<path d="m5 12 5 5 9-10"/>',
checkc:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
term:'<path d="m5 7 5 5-5 5M12 19h7"/>',
box:'<path d="M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"/>',
lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
activity:'<path d="M3 12h4l3-8 4 16 3-8h4"/>'
};
const I=(n,s)=>`<svg class="i" viewBox="0 0 24 24"${s?` style="width:${s}px;height:${s}px"`:''}>${P[n]}</svg>`;
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
 {n:'Clean up stale spectre/* branches',d:'Delete spectre/* branches inactive for 7+ days with no open PR; ping owners of anything kept.',r:'acme/web',s:'Weekdays at 9am UTC',on:true,k:'cleanup',g:1,last:'1d ago'},
 {n:'Nightly flaky-test triage',d:'Find tests that failed then passed on retry in the last 24h, open a Linear issue per cluster with a suggested fix.',r:'acme/web',s:'Daily at 2am UTC',on:true,k:'fix',g:0,last:'9h ago',p:'Triage last night’s flaky tests and fix the worst offender'},
 {n:'Dependency freshness check',d:'Check for outdated internal packages and open a PR that bumps safe minor versions.',r:'acme/web',s:'Mondays at 8am UTC',on:false,k:'deps',g:0,p:'Bump eslint-config to v9 across packages'}
];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt=s=>esc(s).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/`([^`]*)$/,'<code>$1</code>');
const badge=(c,s)=>{const k=CONN[c];return c==='bash'?`<span class="cbx" style="background:#f5e6dc;color:#c2410c;${s?'':''}">${I('term',11)}</span>`:`<span class="cbx" style="background:${k[0]}">${k[1]}</span>`};

window.DEMOS=window.DEMOS||{};
window.DEMOS[ID]={frame:'browser',title:'Spectre — collaborative cloud agents',url:'spectre.app',
caption:'Hit “Start run” and watch the agent work in a sandbox, then Open PR — or kick one off from the Slack thread.',
sources:['https://www.harvey.ai/blog/building-spectre-internal-collaborative-cloud-agent-platform','https://www.harvey.ai/blog/autonomous-agents-legal-is-next','https://www.harvey.ai/blog/how-harvey-is-building-a-frontier-marketing-org','https://rywalker.com/research/harvey-spectre'],
mount(root){
 const timers=new Set();
 const later=(fn,ms)=>{const t=setTimeout(()=>{timers.delete(t);fn()},ms);timers.add(t);return t};
 let S,seq;
 root.innerHTML=`<style>${CSS.replace(/@ /g,".demo-spectre ")}</style><div class="app"><aside class="sb"></aside><main></main></div><div class="toast"></div>`;
 const sb=root.querySelector('.sb'),main=root.querySelector('main'),toastEl=root.querySelector('.toast');
 let toastT;function toast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>toastEl.classList.remove('show'),2600)}
 function reset(){
  timers.forEach(clearTimeout);timers.clear();seq=7340;
  S={view:'home',cur:null,runs:[],repo:'acme/web',conns:{github:1,datadog:1,linear:1,slack:1},sideOpen:false,
     prompt:'Fix the flaky formatInvoiceDate test in billing and make sure invoice dates respect the customer’s timezone',
     guide:{run:0,pr:0,fu:0,slack:0},slack:{sent:0,runId:null},autos:AUTOS.map(a=>({...a}))};
  mkRun('Clean up stale spectre/* branches','cleanup','acme/web','automation',{instant:1,ago:'1d ago'});
  const b=mkRun('Bump eslint-config to v9 across packages','deps','acme/web','web',{instant:1,ago:'2d ago',who:'dana@acme.dev'});
  b.pr={n:4790,merged:1};
  render();
 }
 function mkRun(title,key,repo,src,o={}){
  const sc=SCRIPTS[key];const id='run_'+(seq++).toString(36);
  const r={id,title,key,repo:repo||sc.repo,src,status:'running',items:[],term:[],diff:[],tab:'term',pr:null,ts:0,
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
  else if(e.t==='done'){it={t:'done',h:e.h||sc.sum.h,li:e.li||sc.sum.li,files:r.diff.slice(r.ts)};r.status='done';r.ended=Date.now();if(!inst)onDone(r)}
  else it=e;
  r.items.push(it);return it;
 }
 const stat=f=>[f.l.filter(l=>l[0]==='+').length,f.l.filter(l=>l[0]==='-').length];
 const statN=fs=>fs.reduce((a,f)=>{const s=stat(f);return[a[0]+s[0],a[1]+s[1]]},[0,0]);
 function onDone(r){if(r.src==='web')S.guide.run=1;if(r.src==='slack'){S.guide.slack=1}}
 function upd(r){renderSide();
  if(S.view==='run'&&S.cur===r.id)renderRunParts();
  else if(S.view==='slack'&&S.slack.runId===r.id)renderSlack();
  else if(S.view==='home'){const l=main.querySelector('.recent');if(l)l.innerHTML=recentRows()}
 }
 /* ---------- sidebar ---------- */
 const NAV=[['home','Home','home'],['board','Board','board'],['autos','Automations','clock'],['usage','Usage Stats','chart'],['notes','Release Notes','notes'],['settings','Settings','gear']];
 const navOn=k=>S.view===k||(k==='home'&&S.view==='run');
 function renderSide(){
  if(S.view==='slack'){sb.className='sb hide';return}
  const open=S.view!=='run'||S.sideOpen;
  if(!open){sb.className='sb rail';
   sb.innerHTML=`<span class="lg">S</span>${NAV.map(n=>`<button class="ib ${navOn(n[0])?'on':''}" data-nav="${n[0]}" title="${n[1]}">${I(n[2])}</button>`).join('')}<hr>
   ${S.runs.slice(0,4).map(r=>`<button class="ib ${S.cur===r.id?'on':''}" data-run="${r.id}" title="${esc(r.title)}">${r.status==='running'?'<i class="spin"></i>':I('branch')}</button>`).join('')}
   <span class="sp"></span><button class="ib" data-side title="Expand sidebar">${I('panel')}</button><span class="av" style="background:#c2410c;margin-top:6px">YU</span>`;return}
  sb.className='sb';
  const g=S.guide;const steps=[['run','Start the prefilled run'],['pr','Open the PR it produces'],['fu','Ask a follow-up (Add Tests)'],['slack','Start a run from Slack']];
  const nx=steps.find(s=>!g[s[0]]);const live=S.runs.filter(r=>r.status==='running').length;
  sb.innerHTML=`<div class="lgr"><span class="lg">S</span><span class="sp">Spectre</span>${S.view==='run'?`<button class="ib" data-side title="Collapse sidebar">${I('panel')}</button>`:`<span class="ib">${I('panel')}</span>`}</div>
  ${NAV.map(n=>`<button class="nav ${navOn(n[0])?'on':''}" data-nav="${n[0]}">${I(n[2])}${n[1]}</button>`).join('')}
  <div class="sec"><span>Recent</span><span>${live?live+' running':''}</span></div>
  ${S.runs.slice(0,4).map(r=>`<button class="rr ${S.view==='run'&&S.cur===r.id?'on':''}" data-run="${r.id}">${r.status==='running'?'<i class="spin"></i>':I(r.pr?'pr':'branch')}<span class="t">${esc(r.title)}</span></button>`).join('')}
  <div class="guide"><b>Try it</b><ol>${steps.map(s=>`<li class="${g[s[0]]?'ok':nx===s?'nx':''}"><i>${g[s[0]]?'✓':''}</i>${s[0]==='slack'?`<button data-nav="slack">${s[1]}</button>`:s[1]}</li>`).join('')}</ol><button class="replay" data-replay>↺ Replay demo</button></div>
  <div class="srch"><div>${I('search',14)}Task</div><span class="ib">${I('sliders',15)}</span></div>
  <div class="me"><span class="av" style="background:#c2410c">YU</span><span class="sp">you</span>${I('chevU',14)}</div>`;
 }
 /* ---------- views ---------- */
 function render(){renderSide();
  if(S.view==='home')renderHome();else if(S.view==='run')renderRun();else if(S.view==='autos')renderAutos();else if(S.view==='slack')renderSlack();
 }
 const ago=r=>r.ago||(r.status==='running'?'running · '+Math.round((Date.now()-r.started)/1000)+'s':'just now');
 const srcLbl={web:'Web',slack:'Slack',automation:'Automation'};
 const stIcon=r=>r.status==='running'?'<i class="spin"></i>':r.pr?`<span class="prc ${r.pr.merged?'mg':''}">${I('pr')}</span>`:`<span class="okc">${I('checkc')}</span>`;
 function recentRows(){return S.runs.map(r=>`<button class="row" data-run="${r.id}">${stIcon(r)}<span class="t">${esc(r.title)}</span><span class="src">${srcLbl[r.src]}</span><span class="m mono">${r.repo}</span>${r.pr?`<span class="prc ${r.pr.merged?'mg':''}">#${r.pr.n} ${r.pr.merged?'merged':'open'}</span>`:''}<span class="m el" data-el="${r.id}">${ago(r)}</span></button>`).join('')}
 function chipsHTML(){return Object.keys(CONN).filter(k=>k!=='bash').map(k=>`<button class="chip ${S.conns[k]?'':'off'}" data-conn="${k}" title="${k==='github'?'Required: repository access':'Toggle tool access for this run'}">${badge(k)}<span>${CONN[k][2]}</span></button>`).join('')}
 function renderHome(){
  main.innerHTML=`<div class="home"><div class="hw"><h2 class="greet">What should Spectre work on?</h2><p class="lede">Each request becomes a durable run in an isolated sandbox. Anyone can watch, follow up, or review the result.</p>
  <div class="cmp big"><textarea class="pt" placeholder="Describe your task...">${esc(S.prompt)}</textarea>
   <div class="cbar"><div class="sel"><button class="cb2" data-menu="repo">${I('branch')}<span>${S.repo}</span>${I('chevD')}</button></div>
   <span class="cb2">main</span><span class="vsep"></span>${chipsHTML()}<span class="sp"></span>
   <button class="go ${S.guide.run?'':'pulse'}" data-start>Start run ${I('arrow',14)}</button></div></div>
  <div class="sugg">${['Investigate why /api/export got slow after yesterday’s deploy','Bump eslint-config to v9 across packages','Write tests for billing refunds'].map(s=>`<button data-sugg="${esc(s)}">${esc(s)}</button>`).join('')}</div>
  <div class="lh"><span>Recent tasks</span><button data-nav="slack">${I('hash',13)}Start one from a Slack thread ${I('arrow',13)}</button></div><div class="list recent">${recentRows()}</div></div></div>`;
 }
 function pickScript(p){p=p.toLowerCase();if(/slow|latency|investigate|debug|spike|why|incident|5xx|error rate/.test(p))return['investigate','acme/api'];if(/bump|upgrade|dependenc|eslint/.test(p))return['deps','acme/web'];if(/branch|cleanup|clean up/.test(p))return['cleanup','acme/web'];return['fix',null]}
 function startFromHome(){
  const ta=main.querySelector('.pt');const p=(ta.value||'').trim();if(!p){ta.focus();return}
  S.prompt=p;const [k,rp]=pickScript(p);
  const repo=S.repo!=='acme/web'?S.repo:(rp||S.repo);
  const r=mkRun(p.length>70?p.slice(0,68)+'…':p,k,k==='fix'?S.repo:repo,'web',{prompt:p});
  S.view='run';S.cur=r.id;render();toast('Run '+r.id+' created — it keeps going even if you close the tab');
 }
 /* ---------- task / run page ---------- */
 const run=()=>S.runs.find(r=>r.id===S.cur);
 function renderRun(){const r=run();if(!r){S.view='home';return render()}
  main.innerHTML=`<div class="hd hdr"></div><div class="cols"><div class="files"></div><div class="center"></div><div class="agent"><div class="stream"></div><div class="ac"></div></div></div>`;
  renderRunParts(1);
 }
 function keepScroll(el,html,stick){const atB=el.scrollHeight-el.scrollTop-el.clientHeight<40;const top=el.scrollTop;el.innerHTML=html;el.scrollTop=(stick&&atB)?el.scrollHeight:top}
 function renderRunParts(first){const r=run();if(!r||!main.querySelector('.cols'))return;
  const hasDiff=r.diff.length>0,done=r.status==='done',br=SCRIPTS[r.key].branch;
  main.querySelector('.hdr').innerHTML=`${S.sideOpen?'':`<button class="ib" data-side title="Show sidebar">${I('panel')}</button>`}
   <div class="ttl"><div class="t1"><h1>${esc(r.title)}</h1>${I('pencil')}<span class="st ${done?'done':''}">${done?I('check',10)+'Completed':'<i class="spin"></i>Running'}</span></div>
   <div class="t2"><span>${r.repo}</span>${r.pr?`${I('pr')}<a data-prview>#${r.pr.n}</a>${I('ext')}${I('copy')}`:''}<span>·</span><span>${srcLbl[r.src]} · ${r.who}</span></div></div>
   ${r.pr?`<button class="hb ${r.pr.merged?'merged':''}" data-prview>${I('pr')}${r.pr.merged?'Merged':'View PR'}${I('ext',14)}</button>`:
     `<button class="hb ${done&&hasDiff&&!S.guide.pr?'pulse':''}" data-openpr ${done&&hasDiff?'':'disabled'}>${I('pr')}Open PR${I('ext',14)}</button>`}
   <button class="hb on" data-ide>${I('panel')}IDE</button><button class="hb" data-archive>${I('archive')}Archive</button><button class="hb" data-share>${I('share')}Share</button><button class="ib" data-more>${I('dots')}</button>`;
  // files
  const tree=(TREES[r.repo]||[]).slice();const mods=r.diff.map(f=>f.p.split('/').pop());
  r.diff.forEach(f=>{const b=f.p.split('/').pop();if(!tree.some(t=>t.trim()===b)){const k=tree.findIndex(t=>/\.test\.ts$/.test(t));if(k>=0)tree.splice(k+1,0,tree[k].replace(/\S.*/,'')+b);else tree.push('  '+b)}});
  const dep=t=>t.length-t.trimStart().length;
  main.querySelector('.files').innerHTML=`<div class="fh"><span>Files</span><button class="ib" data-side title="Toggle sidebar">${I('panel')}</button></div><div class="fbr">${esc(br||'main')}</div><div class="tree">`+tree.map((t,i)=>{const d=dep(t),n=t.trim(),dir=n.endsWith('/'),m=mods.includes(n);const openDir=dir&&tree[i+1]&&dep(tree[i+1])>d;
   return `<button class="fi ${m?'mod':''}" ${m?`data-jump="${esc(n)}"`:''} style="padding-left:${6+d*6}px">${dir?`<svg class="i cv" viewBox="0 0 24 24">${P[openDir?'chevD':'chevR']}</svg>${I('folder')}`:`<span style="width:12px;flex:none"></span>${I('file')}`}<span class="nm">${esc(n.replace(/\/$/,''))}</span></button>`}).join('')+'</div>';
  // center
  const c=main.querySelector('.center');const tA=statN(r.diff);
  const body=r.tab==='diff'?(hasDiff?r.diff.map(f=>{const s=stat(f);return `<div class="dfh" data-file="${esc(f.p.split('/').pop())}">${I('chevD')}${I('file')}<span class="p">${esc(f.p)}</span><span class="a">+${s[0]}</span><span class="r">-${s[1]}</span></div>`+f.l.map(l=>`<div class="dl ${l[0]==='+'?'p':l[0]==='-'?'m':l[0]==='@'?'h':''}">${esc(l[0]==='+'||l[0]==='-'?l[0]+' '+l.slice(1):l[0]==='@'?l:'  '+l.slice(1))}</div>`).join('')+'<div class="dsp"></div>'}).join(''):`<div class="empty">${I('file')}${done?'This run produced no code changes.<br>See the summary on the right.':'No changes yet — the diff appears as soon as the agent edits a file.'}</div>`)
   :r.term.map(l=>`<div class="${/^\$/.test(l)?'c':/✓/.test(l)?'ok':/✗/.test(l)?'er':/^ /.test(l)?'dm':''}">${esc(l)||' '}</div>`).join('')+(done?'<div class="dm">— worker exited 0 · sandbox destroyed —</div>':'<div class="c">▍</div>');
  if(first||!c.querySelector('.cbr')||c.dataset.tab!==r.tab){c.dataset.tab=r.tab;c.innerHTML=`<div class="cbr"></div><div class="${r.tab==='diff'?'diff':'term'}"></div>`}
  c.querySelector('.cbr').innerHTML=`<span class="bl">${I('branch')}${br?'main → '+esc(br):'main'}</span><span class="sp"></span>${hasDiff?`<span class="a">+${tA[0]}</span><span class="r">-${tA[1]}</span>`:''}<span>${r.diff.length} file${r.diff.length===1?'':'s'}</span><span class="seg"><button class="${r.tab==='diff'?'on':''}" data-tab="diff">Changes</button><button class="${r.tab==='term'?'on':''}" data-tab="term">Logs</button></span>`;
  keepScroll(c.lastElementChild,body,r.tab==='term');
  // stream
  const st=main.querySelector('.stream');
  keepScroll(st,streamHTML(r),true);
  if(first)st.scrollTop=st.scrollHeight;
  const ac=main.querySelector('.ac');
  const pul=done&&S.guide.pr&&!S.guide.fu;
  if(first||ac.dataset.done!==String(done)){ac.dataset.done=String(done);const dis=done?'':'disabled';
   ac.innerHTML=`<div class="cmp"><div class="qa"><span class="qs"><button class="qb" data-fu="PR Comments" ${dis}>${I('msg')}PR Comments</button><button class="qb" ${dis} data-fu="PR Comments">${I('chevU',13)}</button></span>
   <button class="qb" data-fu="Fix CI" ${dis}>${I('alert')}Fix CI</button><button class="qb" data-fu="Self-Review" ${dis}>${I('eye')}Self-Review</button><button class="qb ${pul?'pulse':''}" data-fu="Add Tests" ${dis}>${I('flask')}Add Tests</button><button class="qb" data-fu="Present a Plan" ${dis}>${I('clip')}Present a Plan</button></div>
   <textarea class="fu" placeholder="${done?'Type / for skills, or type your message... (Cmd+Enter to send)':'Spectre is working… you can close this tab — the run is durable.'}" ${dis}></textarea>
   <div class="cbot"><span class="fl">${I('attach')}Files</span><span class="sp"></span>${I('spark')}${I('mic')}<span class="sg"><button class="send" data-send ${dis} title="Send">${I('arrow')}</button><button class="send dd" ${dis} tabindex="-1">${I('chevD',13)}</button></span></div></div>`}
  else{const b=ac.querySelector('[data-fu="Add Tests"]');if(b)b.classList.toggle('pulse',pul)}
 }
 function streamHTML(r){
  let out='',i=0;const it=r.items,done=r.status==='done';
  while(i<it.length){const x=it[i];
   if(x.t==='tool'||x.t==='edit'){let j=i;while(j<it.length&&(it[j].t==='tool'||it[j].t==='edit'))j++;out+=groupHTML(r,i,j,!done&&j===it.length);i=j;continue}
   out+=itemHTML(r,x,i);i++}
  if(!done)out+=`<div class="work"><i class="spin"></i>Working… <span class="el" data-el="${r.id}">${Math.round((Date.now()-r.started)/1000)}s</span></div>`;
  return out;
 }
 function groupHTML(r,a,b,live){
  const g=r.items.slice(a,b),h=r.items[a],open=h.gopen!=null?h.gopen:live,n=g.length,last=g[n-1];
  const kinds=[...new Set(g.map(x=>x.t==='edit'?'Edit':CONN[x.c][2]))];const cs=[...new Set(g.filter(x=>x.t==='tool').map(x=>x.c))];
  return `<div class="tg2"><button data-grp="${a}">${I('wrench')}<span class="n">${n} tool call${n>1?'s':''}</span><span class="bd">${cs.map(c=>badge(c)).join('')}</span><span class="k">${live?esc(last.t==='edit'?'Edit '+last.p.split('/').pop():last.x):kinds.join(', ')}</span>${live?'<i class="spin"></i>':''}${I(open?'chevD':'chevR',14)}</button>
  ${open?`<div class="tbody">${g.map((x,k)=>{const idx=a+k;
   if(x.t==='edit')return `<button class="trow" data-jump="${esc(x.p.split('/').pop())}"><span class="ti" style="background:#e0ecff;color:#1d4ed8">${I('pencil')}</span><span class="tl">Edit <span class="mono">${esc(x.p.split('/').pop())}</span></span><span class="a">+${x.a}</span><span class="r">-${x.r}</span></button>`;
   return `<button class="trow" data-tog="${idx}">${badge(x.c)}<span class="tl ${x.c==='bash'?'mono':''}" style="${x.c==='bash'?'font-size:11.5px':''}">${esc(x.x)}</span>${I(x.open?'chevD':'chevR')}</button>${x.open?`<div class="tdet">${esc(x.d)}</div>`:''}`}).join('')}</div>`:''}</div>`;
 }
 function itemHTML(r,it,i){
  if(it.t==='user')return `<div class="ub"><div class="who">${it.who||r.who}${it.src==='slack'?' · via Slack #eng-incidents':it.src==='automation'?' · automation':''}</div><div class="bub">${fmt(it.x)}</div></div>`;
  if(it.t==='sys')return `<div class="sy">${I(/sandbox|worker/i.test(it.x)?'box':/Boundary/.test(it.x)?'lock':/PR #/.test(it.x)?'pr':/automation/i.test(it.x)?'clock':'bolt')}<span>${fmt(it.x)}</span></div>`;
  if(it.t==='msg')return `<div class="md"><p>${fmt(it.shown!=null?it.shown:it.x)}</p></div>`;
  if(it.t==='done'){const fs=it.files||[],s=statN(fs),sc=SCRIPTS[r.key];
   return `<div class="md"><p>Done. Here’s a summary:</p><p><b>${fmt(it.h)}</b></p><ul>${it.li.map(l=>`<li><b>${l[0]}</b>: ${fmt(l[1])}</li>`).join('')}</ul></div>
   ${fs.length?`<div class="chg"><button data-chg="${i}">${I(it.open?'chevD':'chevR')}${I('copy')}Changes in this turn<span class="cnt">${fs.length}</span><span class="a">+${s[0]}</span><span class="r">-${s[1]}</span></button>${it.open?`<div class="tbody">${fs.map(f=>{const q=stat(f);return `<button class="trow" data-jump="${esc(f.p.split('/').pop())}">${I('file')}<span class="tl mono" style="font-size:11.5px">${esc(f.p)}</span><span class="a">+${q[0]}</span><span class="r">-${q[1]}</span></button>`}).join('')}</div>`:''}</div>`:''}
   <div class="foot">${I('check')}Completed in ${Math.max(4,Math.round(((r.ended||Date.now())-r.started)/1000))}s · $0.${(r.id.length*7)%9+1}${r.term.length%10}</div>`}
  return '';
 }
 function followUp(r,q){
  if(r.status!=='done')return;
  r.turn++;r.status='running';r.started=Date.now();r.sbx='sbx-'+Math.random().toString(16).slice(2,6);r.ts=r.diff.length;
  r.items.push({t:'user',x:q,who:'you@acme.dev'});
  const sc=SCRIPTS[r.key];const ev=[{t:'sys',x:'Follow-up appended to '+r.id+' · fresh worker {sbx} restored the previous session'}];
  if(q==='Add Tests'&&sc.more&&!r.diff.includes(sc.more)){ev.push({t:'msg',x:'Adding a regression test around the code path changed in this run.'},{t:'edit',file:sc.more},{t:'term',x:['$ pnpm test','✓ all tests passed'+(r.key==='fix'?' (27)':' (10)')]},{t:'term',x:['$ git commit -qam "test: add regression coverage" && git push','✓ pushed to '+(sc.branch||'main')]},{t:'done',h:'Added a regression test and pushed it to the branch.',li:[['New file','`'+sc.more.p.split('/').pop()+'`'],['Status','All tests green'+(r.pr?'; PR #'+r.pr.n+' updated':'')]]})}
  else if(q==='Self-Review'){ev.push({t:'msg',x:'Reviewing my own diff against the repo’s conventions…'},{t:'term',x:['$ git diff main --stat',r.diff.length+' files changed']},{t:'done',h:'Self-review: no blocking issues.',li:[['Nit','Consider exporting the helper for reuse'],['Risk','Low — change is covered by tests']]})}
  else if(q==='Fix CI'){ev.push({t:'tool',c:'github',x:'Fetch check runs for '+(sc.branch||'main'),d:'lint ✓  typecheck ✓  unit ✓  e2e ✓'},{t:'done',h:'CI is green — nothing to fix.',li:[['Checks','4/4 passing']]})}
  else if(q==='PR Comments'){ev.push({t:'tool',c:'github',x:'Read review comments',d:r.pr?'reviewer: “can we keep the old signature as a deprecated overload?”':'No PR yet — open one first'},{t:'done',h:r.pr?'Addressed 1 review comment.':'No review comments yet.',li:[[r.pr?'Change':'Tip',r.pr?'Kept a deprecated overload for the old call sites':'Use Open PR, then ask again']]})}
  else if(q==='Present a Plan'){ev.push({t:'msg',x:'Here’s how I’d take this further before writing more code.'},{t:'done',h:'Plan: harden the change before merge.',li:[['1','Add a regression test for the exact failure (Add Tests)'],['2','Self-review the diff against repo conventions'],['3','Open the PR and request CODEOWNERS review']]})}
  else ev.push({t:'msg',x:'Got it — picking this up with the context from the earlier turn: “'+q.slice(0,90)+'”.'},{t:'term',x:['$ rg -n "'+(q.split(' ')[0]||'todo').replace(/"/g,'')+'" --stats','12 matches in 5 files']},{t:'done',h:'Done — see notes above.',li:[['Follow-up','Investigated and summarized; no new code changes needed']]});
  if(q==='Add Tests')S.guide.fu=1;else if(q!=='Present a Plan')S.guide.fu=1;
  play(r,ev,0);renderRunParts(1);renderSide();
 }
 function openPR(r){if(r.pr||r.status!=='done'||!r.diff.length)return;
  r.pr={n:4800+Math.floor(Math.random()*90)};r.items.push({t:'sys',x:'Opened PR #'+r.pr.n+' on '+r.repo+': '+SCRIPTS[r.key].branch+' → main · reviewers requested from CODEOWNERS'});
  S.guide.pr=1;renderRunParts(1);renderSide();toast('Pull request #'+r.pr.n+' opened on '+r.repo);
 }
 /* ---------- automations ---------- */
 function acard(a,i){return `<div class="acard"><div style="flex:1;min-width:0"><div class="tt">${esc(a.n)} <span class="bdg ${a.on?'':'off'}">${a.on?'Active':'Paused'}</span></div><p>${esc(a.d)}</p>
  <div class="mt"><span>${I('branch')}${a.r}</span><span>${a.s}</span><span>Last: ${a.last||'—'}</span>${a.on?'<span>Next: in 12h</span>':''}</div></div>
  <div style="display:flex;gap:6px;align-items:flex-start;flex:none"><button class="tg ${a.on?'on':''}" data-tg="${i}" title="${a.on?'Pause':'Resume'}"></button><button class="ibb" data-runauto="${i}" title="Run now">${I('play')}</button><button class="ibb" data-hist="${i}" title="History">${I('hist')}</button><button class="ibb" data-editauto title="Edit">${I('pencil')}</button><button class="ibb del" data-trash title="Delete">${I('trash')}</button></div></div>`}
 function renderAutos(){
  const L=(g)=>S.autos.map((a,i)=>a.g===g?acard(a,i):'').join('');
  main.innerHTML=`<div class="hd"><div class="pg">${I('clock')}<h1>Automations</h1></div><button class="ob" data-trash>${I('trash')}Trash</button><button class="db" data-newauto>${I('plus')}New Automation</button></div>
  <div class="auto"><div class="ash">${I('user')}My Automations</div>${L(0)}<div class="ash">${I('globe')}Global Automations</div>${L(1)}
  <div class="sy" style="padding:4px 2px">${I('bolt')}<span>Each schedule materializes an ordinary run — same history, artifacts and review as interactive work.</span></div></div>`;
 }
 /* ---------- slack ---------- */
 const SAV=(n,c)=>`<span class="av" style="background:${c}">${n}</span>`;
 function renderSlack(){
  const r=S.runs.find(x=>x.id===S.slack.runId);
  let reply='';
  if(r){const done=r.status==='done';const steps=r.items.filter(i=>i.t!=='user').length;
   reply=`<div class="sm"><span class="lg">S</span><div><div class="n">Spectre<span class="app">APP</span><small>11:42 AM</small></div>
   ${done?`<b>Task completed on <code>${r.repo}</code></b><div style="margin-top:6px">${fmt(SCRIPTS[r.key].sum.h)}</div><ul style="margin:4px 0;padding-left:18px">${SCRIPTS[r.key].sum.li.slice(0,3).map(l=>`<li><b>${l[0]}:</b> ${fmt(l[1])}</li>`).join('')}</ul>`:
   `👀 On it — started run <code>${r.id}</code> on <code>${r.repo}</code> with this thread as context.<div style="color:#616061;font-size:13px;margin-top:3px">● Working · ${steps} steps so far…</div>`}
   <button class="sbtn ${done?'pulse':''}" data-run="${r.id}">View run</button>${done&&r.diff.length?`<button class="sbtn" data-run="${r.id}">Review diff (+${statN(r.diff)[0]} −${statN(r.diff)[1]})</button>`:''}</div></div>`}
  const html=`<div class="slack"><div class="slk"><div class="ws">Acme</div>${['general','eng','eng-incidents','deploys','design'].map(c=>`<div class="ch ${c==='eng-incidents'?'on':''}"># ${c}</div>`).join('')}<div style="padding:12px 10px 3px;opacity:.7">Apps</div><div class="ch">● Spectre</div><button class="back" data-nav="home">${I('back',14)}Back to Spectre</button></div>
  <div class="sth"><div class="shd">Thread<span># eng-incidents</span></div><div class="msgs">
   <div class="sm">${SAV('PK','#0e7490')}<div><div class="n">priya<small>11:31 AM</small></div><code>/api/export</code> p95 jumped from ~300ms to 2.4s right after yesterday’s 3pm release 😬
    <div style="margin-top:6px;border:1px solid #e5e5e5;border-radius:8px;padding:8px;width:280px"><svg viewBox="0 0 260 60" width="260" height="60">${Array.from({length:26},(_,i)=>{const h=i<17?6+((i*7)%5):38+((i*11)%14);return `<rect x="${i*10}" y="${58-h}" width="7" height="${h}" fill="${i<17?'#93c5fd':'#3b82f6'}"/>`}).join('')}<line x1="168" y1="0" x2="168" y2="60" stroke="#ef4444" stroke-dasharray="3 2"/></svg><div style="font-size:11px;color:#888">p95 latency · /api/export · last 24h</div></div></div></div>
   <div class="rep">3 replies</div>
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
  if(!b||!root.contains(b)){const m=root.querySelector('.menu');m&&m.remove();return}
  const d=b.dataset;
  if(d.replay!==undefined){reset();toast('Demo reset');return}
  if(d.side!==undefined){S.sideOpen=!S.sideOpen;renderSide();renderRunParts(1);return}
  if(d.nav){const soon={board:'Board',usage:'Usage Stats',notes:'Release Notes',settings:'Settings'};if(soon[d.nav]){toast(soon[d.nav]+' isn’t part of this demo');return}S.view=d.nav;if(d.nav!=='home')S.cur=null;render();return}
  if(d.run){S.view='run';S.cur=d.run;render();return}
  if(d.start!==undefined){startFromHome();return}
  if(d.sugg){const ta=main.querySelector('.pt');ta.value=d.sugg;S.prompt=d.sugg;const k=pickScript(d.sugg);if(k[1]){S.repo=k[1];renderHome()}return}
  if(d.conn){if(d.conn==='github'){toast('GitHub access is required to clone the repo');return}S.prompt=main.querySelector('.pt').value;S.conns[d.conn]=!S.conns[d.conn];renderHome();return}
  if(d.menu){S.prompt=main.querySelector('.pt').value;const old=root.querySelector('.menu');if(old){old.remove();return}
   const m=document.createElement('div');m.className='menu';m.innerHTML=Object.keys(TREES).map(k=>`<button data-repo="${k}">${k===S.repo?I('check',13):'<span style="width:13px"></span>'}<span class="mono">${k}</span></button>`).join('');b.parentNode.appendChild(m);return}
  if(d.repo){S.repo=d.repo;renderHome();return}
  const r=run();
  if(d.tab&&r){r.tab=d.tab;renderRunParts();return}
  if(d.grp&&r){const h=r.items[+d.grp];const live=r.status!=='done'&&!r.items.slice(+d.grp).some(x=>x.t!=='tool'&&x.t!=='edit');h.gopen=!(h.gopen!=null?h.gopen:live);renderRunParts();return}
  if(d.tog&&r){const it=r.items[+d.tog];it.open=!it.open;renderRunParts();return}
  if(d.chg&&r){const it=r.items[+d.chg];it.open=!it.open;renderRunParts();return}
  if(d.jump&&r){r.tab='diff';renderRunParts();const h=main.querySelector(`.dfh[data-file="${CSS_ESC(d.jump)}"]`);if(h){const c=main.querySelector('.diff');c.scrollTop=h.offsetTop-c.offsetTop}return}
  if(d.openpr!==undefined&&r){openPR(r);return}
  if(d.prview!==undefined){toast('That would open GitHub — not in this demo');return}
  if(d.ide!==undefined){toast('Opens the run’s workspace in a browser IDE (not in this demo)');return}
  if(d.archive!==undefined){toast('Archiving hides the task — the run record stays durable');return}
  if(d.share!==undefined){toast('Link copied — teammates can watch, follow up, or take over this run');return}
  if(d.more!==undefined){toast('More actions aren’t part of this demo');return}
  if(d.fu&&r){followUp(r,d.fu);return}
  if(d.send!==undefined&&r){const ta=main.querySelector('.fu');const v=ta.value.trim();if(v)followUp(r,v);return}
  if(d.tg){const a=S.autos[+d.tg];a.on=!a.on;renderAutos();toast(a.n+(a.on?' resumed':' paused'));return}
  if(d.runauto){const a=S.autos[+d.runauto];const nr=mkRun(a.n,a.k,a.r,'automation',{prompt:a.p||a.d});a.last='just now';S.view='run';S.cur=nr.id;render();toast('Automation materialized an ordinary run: '+nr.id);return}
  if(d.hist){const id=S.runs.find(x=>x.src==='automation'&&x.title===S.autos[+d.hist].n);if(id){S.view='run';S.cur=id.id;render()}else toast('No runs yet — press ▶ to run it now');return}
  if(d.newauto!==undefined||d.editauto!==undefined){toast('Automation editor isn’t part of this demo — try ▶ Run now');return}
  if(d.trash!==undefined){toast('Deleting isn’t part of this demo');return}
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
