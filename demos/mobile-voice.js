/* Harvey Mobile + Voice — recreated mini demo (stylistic recreation, fake data, no network). */
(function(){
window.DEMOS=window.DEMOS||{};
var CSS=`
_ {--fg:#1a1917;--sub:#6a6660;--mut:#9e9b95;--dis:#b8b5b0;--b:#f1efec;--bs:#e4e1dd;--in:#f7f6f4;--skel:#d2d0cc;--cbg:#f3f3f1;--cbd:#e5e3e1;--csel:#716d65;
 font:17px/1.3 -apple-system,'SF Pro Text',system-ui,'Helvetica Neue',Arial,sans-serif;background:#fff;color:var(--fg);user-select:none;-webkit-font-smoothing:antialiased;letter-spacing:-.005em}
_ button{font:inherit;color:inherit;cursor:pointer;border:0;background:none;padding:0;letter-spacing:inherit}
_ svg{display:block;flex:none}
_ .sbar{position:absolute;top:0;left:0;right:0;height:44px;display:flex;justify-content:space-between;align-items:center;padding:4px 26px 0 38px;font-weight:600;font-size:15px;z-index:60;pointer-events:none}
_ .hind{position:absolute;left:50%;bottom:8px;width:134px;height:5px;margin-left:-67px;border-radius:3px;background:#000;z-index:70;pointer-events:none}
_ .view{position:absolute;top:44px;left:0;right:0;bottom:0;display:flex;flex-direction:column;background:#fff}
_ .nav{height:44px;flex:none;display:flex;align-items:center;padding:0 8px;gap:2px;position:relative}
_ .nav .sp{flex:1}
_ .nb{width:40px;height:40px;display:grid;place-items:center;border-radius:20px;color:var(--fg)}
_ .nb:active,.demo-mobile-voice .qa:active,.demo-mobile-voice .row:active{background:rgba(26,25,23,.06)}
_ .nb svg{width:22px;height:22px}
_ .nback{display:flex;align-items:center;gap:2px;font-size:17px;padding:0 8px 0 2px;height:40px}
_ .nback svg{width:24px;height:24px}
_ .bd{flex:1;overflow-y:auto;overflow-x:hidden;min-height:0;position:relative}
_ .bd::-webkit-scrollbar{display:none}
_ .lt{font-size:33px;line-height:41px;font-weight:500;letter-spacing:-.4px;padding:2px 20px 8px}
_ .srch{margin:0 16px 4px;height:36px;border-radius:10px;background:rgba(118,118,128,.12);display:flex;align-items:center;gap:6px;padding:0 8px;color:#8a8a8e;font-size:17px}
_ .srch svg{width:17px;height:17px}
_ .tabs{flex:none;height:83px;display:flex;padding:7px 0 0;background:rgba(250,250,250,.94);border-top:.5px solid rgba(60,60,67,.29)}
_ .tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;font-size:10px;font-weight:700;line-height:12px;color:#999}
_ .tab svg{width:26px;height:26px}
_ .tab.on{color:var(--fg)}
_ .empty{flex:1;display:flex;align-items:center;justify-content:center}
_ .logo{font:400 46px/1 'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif;color:#ecebe9;letter-spacing:-.5px;display:flex;align-items:center;gap:10px}
_ .qas{display:flex;gap:12px;padding:16px 16px 8px;overflow-x:auto;flex:none}
_ .qas::-webkit-scrollbar{display:none}
_ .qa{min-width:134px;border:1px solid var(--b);border-radius:12px;padding:12px 12px 8px;display:flex;flex-direction:column;gap:6px;align-items:flex-start;font-size:14px;font-weight:500;line-height:20px;text-align:left}
_ .qa svg{width:16px;height:16px}
_ .cmp{flex:none;padding:8px 16px 12px}
_ .pills{display:flex;gap:8px;align-items:center;margin:0 -16px 4px;padding:0 16px;overflow-x:auto}
_ .pills::-webkit-scrollbar{display:none}
_ .pill{display:flex;align-items:center;gap:6px;height:36px;padding:0 12px;border-radius:99px;border:1px solid var(--b);background:#fff;font-size:14px;font-weight:500;white-space:nowrap;flex:none}
_ .pill svg{width:16px;height:16px}
_ .trash{width:36px;height:36px;border-radius:50%;border:1px solid var(--b);display:grid;place-items:center;flex:none}
_ .trash svg{width:16px;height:16px}
_ .qi{background:var(--in);border-radius:12px;padding:12px 16px}
_ .qi textarea{display:block;width:100%;border:0;outline:0;resize:none;background:none;font:inherit;font-size:17px;line-height:22px;color:var(--fg);padding:9px 0;height:40px;max-height:120px;overflow:hidden}
_ .qi textarea::placeholder{color:var(--mut)}
_ .ctl{display:flex;align-items:center;margin-top:16px;gap:8px}
_ .ctl .sp{flex:1}
_ .chip{height:32px;border-radius:100px;background:var(--bs);display:flex;align-items:center;gap:6px;padding:0 12px;font-size:16px;font-weight:500}
_ .chip svg{width:16px;height:16px}
_ .ib{width:32px;height:32px;display:grid;place-items:center;border-radius:16px;position:relative}
_ .ib svg{width:22px;height:22px}
_ .ib.mic.hint::after{content:'';position:absolute;inset:-2px;border-radius:50%;border:2px solid var(--fg);animation:mvp 1.8s infinite}
@keyframes mvp{0%{transform:scale(.8);opacity:.7}100%{transform:scale(1.45);opacity:0}}
_ .send{width:32px;height:32px;border-radius:50%;background:var(--fg);color:#fff;display:grid;place-items:center;position:relative}
_ .send svg{width:18px;height:18px}
_ .send.hint::after{content:'';position:absolute;inset:-2px;border-radius:50%;border:2px solid var(--fg);animation:mvp 1.8s infinite}
_ .spin{width:18px;height:18px;border-radius:50%;border:2px solid var(--bs);border-top-color:var(--fg);animation:mvs .8s linear infinite}
@keyframes mvs{to{transform:rotate(360deg)}}
_ .dict{background:var(--in);border-radius:12px;padding:12px 16px;animation:mvin .3s cubic-bezier(.2,.8,.2,1)}
@keyframes mvin{from{transform:scale(.95);opacity:0}}
_ .wave{height:48px;display:flex;align-items:center;justify-content:space-between;margin-bottom:2px}
_ .wave i{width:3px;border-radius:2px;background:var(--fg);height:4px}
_ .tph{height:16px;margin:16px 0 18px;border-radius:4px;background:linear-gradient(90deg,rgba(60,60,67,.12) 30%,rgba(60,60,67,.24) 50%,rgba(60,60,67,.12) 70%);background-size:300% 100%;animation:mvsh 1.4s linear infinite}
@keyframes mvsh{from{background-position:100% 0}to{background-position:-50% 0}}
_ .drow{display:flex;align-items:center;gap:16px}
_ .drow .st{flex:1;text-align:center;color:var(--sub);font-size:17px}
_ .dx{width:32px;height:32px;border-radius:50%;background:var(--b);display:grid;place-items:center}
_ .dx svg{width:15px;height:15px}
_ .dstop{width:32px;height:32px;border-radius:50%;background:var(--fg);color:#fff;display:grid;place-items:center}
_ .dstop svg{width:14px;height:14px}
_ .dstop.off{background:var(--mut)}
_ .msgs{padding:4px 0 24px}
_ .ub{padding:8px 24px;display:flex}
_ .ub div{background:rgba(120,120,128,.12);border-radius:16px;padding:16px;font-size:17px;line-height:22px;font-weight:600;max-width:88%}
_ .ah{display:flex;align-items:center;gap:4px;padding:8px 24px 4px;font-size:16px;line-height:24px;font-weight:500;cursor:pointer}
_ .ah svg{width:14px;height:14px;margin-top:2px}
_ .ah .el{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
_ .ah.done{color:var(--sub)}
_ .shim{background:linear-gradient(90deg,var(--fg) 35%,#c9c6c0 50%,var(--fg) 65%);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:mvsh 2.2s linear infinite}
_ .shim svg{color:var(--fg)}
_ .md{padding:8px 24px;font-size:17px;line-height:24px}
_ .md p{margin:0 0 12px}
_ .md p:last-child{margin:0}
_ .md b{font-weight:600}
_ .cit{display:inline-block;min-width:16px;height:18px;line-height:16px;padding:0 4px;border-radius:4px;background:var(--cbg);border:1px solid var(--cbd);font-size:12px;font-weight:500;text-align:center;vertical-align:2px;margin:0 1px;cursor:pointer;color:var(--fg)}
_ .cit.on{background:var(--csel);border-color:var(--csel);color:#fff}
_ .cur{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--fg);vertical-align:1px;margin-left:2px;animation:mvb .9s infinite}
@keyframes mvb{50%{opacity:.25}}
_ .acts{display:flex;padding:0 16px;color:var(--sub)}
_ .acts button{width:32px;height:32px;display:grid;place-items:center;border-radius:16px}
_ .acts button:active{background:rgba(26,25,23,.08)}
_ .acts button.on{color:var(--fg)}
_ .acts svg{width:16px;height:16px}
_ .srow{margin:6px 24px 0;display:flex;align-items:center;gap:8px;padding:12px 16px;background:#f2f2f7;border-radius:10px;cursor:pointer;width:calc(100% - 48px);text-align:left}
_ .srow svg{width:22px;height:22px;color:var(--sub)}
_ .srow b{font-size:15px;font-weight:500}
_ .srow span{font-size:14px;color:var(--sub);flex:1}
_ .srow .cv{width:12px;height:12px;display:grid}
_ .srow .cv svg{width:12px;height:12px}
_ .fus{padding:24px 0 8px}
_ .fus h4{margin:0 24px 8px;font-size:16px;font-weight:700;line-height:24px}
_ .fu{display:block;width:calc(100% - 48px);margin:0 24px;padding:12px 16px;text-align:left;font-size:16px;line-height:22px;border:1px solid var(--b);border-top-width:0}
_ .fu:first-of-type{border-top-width:1px;border-radius:12px 12px 0 0}
_ .fu:last-child{border-radius:0 0 12px 12px}
_ .fu:active{background:var(--in)}
_ .sec{font-size:16px;font-weight:700;line-height:24px;padding:24px 20px 4px;display:flex;align-items:center;justify-content:space-between}
_ .sec button{font-size:16px;font-weight:500;color:var(--sub);display:flex;align-items:center;gap:4px}
_ .sec button svg{width:20px;height:20px}
_ .h3{font-size:17px;font-weight:600;padding:20px 20px 6px}
_ .row{display:flex;align-items:center;gap:12px;padding:8px 20px;cursor:pointer;position:relative;width:100%;text-align:left}
_ .row::after{content:'';position:absolute;left:56px;right:0;bottom:0;border-bottom:.5px solid rgba(60,60,67,.18)}
_ .row:last-child::after{display:none}
_ .row .ic{width:24px;height:24px;color:var(--skel);flex:none}
_ .row .ic.dk{color:var(--fg)}
_ .row .g{flex:1;min-width:0}
_ .row .t{font-size:16px;line-height:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
_ .row .t.m{font-size:15px;font-weight:500;line-height:20px}
_ .row .s{font-size:14px;line-height:20px;color:var(--sub)}
_ .row .s.xs{font-size:12px;line-height:16px}
_ .row .cv{width:12px;height:12px;color:var(--mut)}
_ .shd{display:inline-block;width:12px;height:12px;color:var(--sub);vertical-align:-1px;margin-left:4px}
_ .psub{font-size:15px;color:var(--sub);padding:0 20px 6px}
_ .chips{display:flex;gap:12px;padding:8px 16px;overflow-x:auto}
_ .chips::-webkit-scrollbar{display:none}
_ .cbtn{display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:100px;border:1px solid rgba(60,60,67,.3);font-size:15px;white-space:nowrap;flex:none}
_ .cbtn svg{width:16px;height:16px}
_ .tg{font-size:16px;font-weight:700;line-height:24px;padding:24px 24px 0}
_ .tc{padding:4px 0 16px;border-bottom:1px solid var(--b);cursor:pointer;position:relative}
_ .tc .tt{padding:12px 60px 0 24px;font-size:16px;line-height:24px}
_ .tc .mo{position:absolute;right:12px;top:8px;width:40px;height:40px;display:grid;place-items:center;color:var(--sub)}
_ .tc .mo svg{width:18px;height:18px}
_ .tc .ft{display:flex;gap:4px;padding:8px 24px 0;font-size:14px;line-height:20px;color:var(--sub)}
_ .tc .ft svg{width:16px;height:16px;margin-top:1px}
_ .tc:active{background:var(--in)}
_ .shade{position:absolute;inset:0;background:rgba(26,25,23,.4);z-index:80;opacity:0;pointer-events:none;transition:opacity .3s}
_ .shade.open{opacity:1;pointer-events:auto}
_ .sheet{position:absolute;left:0;right:0;bottom:0;background:#fff;border-radius:14px 14px 0 0;z-index:81;transform:translateY(105%);transition:transform .35s cubic-bezier(.2,.85,.25,1);max-height:88%;display:flex;flex-direction:column;padding-bottom:28px}
_ .sheet.open{transform:none}
_ .grab{width:36px;height:5px;border-radius:3px;background:rgba(60,60,67,.3);margin:6px auto 0;flex:none}
_ .shh{flex:none;display:flex;align-items:center;padding:14px 12px 14px;font-size:17px;font-weight:600;line-height:22px}
_ .shh .ttl{flex:1;text-align:center}
_ .shh .nb{width:32px;height:32px;background:rgba(118,118,128,.12);color:var(--sub)}
_ .shh .nb svg{width:14px;height:14px}
_ .shh .ghost{width:32px}
_ .shb{overflow-y:auto;flex:1;min-height:0}
_ .shb::-webkit-scrollbar{display:none}
_ .sitem{display:flex;gap:10px;padding:12px 16px 12px;margin:0 8px;border-radius:10px;cursor:pointer;text-align:left;width:calc(100% - 16px)}
_ .sitem:active{background:var(--in)}
_ .sitem .fi{width:20px;height:20px;color:var(--sub);margin-top:2px;flex:none}
_ .sitem .fi svg,.demo-mobile-voice .step .ck svg{width:100%;height:100%}
_ .shh .ttl{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 6px}
_ .sitem b{display:block;font-size:16px;font-weight:500;line-height:24px}
_ .sitem p{margin:6px 0 0;font-size:14px;line-height:20px;color:var(--sub);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
_ .sitem .n{display:inline-block;margin-right:6px}
_ .ad{padding:0 20px}
_ .ad h3{margin:0;font-size:17px;font-weight:600;line-height:22px}
_ .ad .rf{font-size:15px;color:var(--sub);margin:2px 0 14px}
_ .ad .qt{background:rgba(120,120,128,.06);border-radius:8px;padding:16px;font-size:17px;line-height:24px}
_ .ad .vb{margin-top:16px;width:100%;height:50px;border-radius:10px;background:var(--fg);color:#fff;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:600}
_ .ad .vb svg{width:18px;height:18px}
_ .pdf{margin:0 16px;background:#f2f1ef;border-radius:10px;padding:14px;height:420px;overflow:hidden}
_ .pg{background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.12);padding:22px 20px;font:11.5px/1.65 'Iowan Old Style',Georgia,serif;color:#2b2a27}
_ .pg h5{font:600 12px/1.4 Georgia,serif;margin:12px 0 4px;letter-spacing:.02em}
_ .pg h5:first-child{margin-top:0}
_ .pg p{margin:0}
_ .pg .hl{background:#d3e4fc;box-shadow:0 0 0 2px #d3e4fc}
_ .pgn{text-align:center;font-size:12px;color:var(--sub);margin-top:10px}
_ .step{display:flex;gap:12px;padding:0 24px;position:relative}
_ .step .ck{width:16px;height:16px;margin-top:2px;color:var(--fg);flex:none}
_ .step .ln{position:absolute;left:31.5px;top:24px;bottom:-6px;width:1px;background:var(--bs)}
_ .step:last-child .ln{display:none}
_ .step div{font-size:15px;line-height:20px;padding-bottom:18px}
_ .step div small{display:block;font-size:13px;color:var(--sub);margin-top:2px}
_ .arow{display:flex;align-items:center;gap:14px;padding:16px 24px;border-top:.5px solid rgba(60,60,67,.18);width:100%;text-align:left;font-size:17px}
_ .arow:first-child{border-top:0}
_ .arow svg{width:24px;height:24px}
_ .arow:active{background:var(--in)}
_ .toast{position:absolute;left:16px;right:16px;top:52px;z-index:90;background:#fff;border-radius:16px;box-shadow:0 8px 28px rgba(26,25,23,.16),0 0 0 .5px rgba(26,25,23,.06);padding:14px 18px;display:flex;align-items:center;gap:12px;font-size:16px;line-height:22px;transform:translateY(-14px);opacity:0;transition:all .3s cubic-bezier(.2,.85,.25,1);pointer-events:none}
_ .toast.show{transform:none;opacity:1}
_ .toast svg{width:22px;height:22px;color:#059669}
_ .trans{position:absolute;inset:0;z-index:85;background:rgba(0,0,0,.3);display:none;align-items:center;justify-content:center}
_ .trans.on{display:flex}
_ .trans div{background:rgba(0,0,0,.8);border-radius:16px;padding:24px;color:#fff;font-size:15px;display:flex;flex-direction:column;align-items:center;gap:16px}
_ .trans .spin{border-color:rgba(255,255,255,.3);border-top-color:#fff;width:24px;height:24px}
`.replace(/(^|[}\n,])_ /g,'$1.demo-mobile-voice ');
function sv(d,o){o=o||{};return '<svg viewBox="0 0 24 24" fill="'+(o.f?'currentColor':'none')+'" stroke="'+(o.f?'none':'currentColor')+'" stroke-width="'+(o.w||1.75)+'" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>';}
function P(d){return '<path d="'+d+'"/>';}
var BUB='M5 4.5h14a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2h-6.5L8 20.5V17H5a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2z';
var FLD='M3 7a2 2 0 0 1 2-2h4.2l2 2H19a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z';
var FILE='M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8zM14 3v5h5';
var THU='M7 10v11M15 5.9 14 10h5.8a2 2 0 0 1 1.9 2.6l-2.3 7A2 2 0 0 1 17.5 21H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2.8a2 2 0 0 0 1.8-1.1L12 3a3.1 3.1 0 0 1 3 2.9z';
var IC={
 asst:sv(P(BUB)+P('M8 9.5h8M8 12.5h5')),
 asstF:sv(P(BUB),{f:1}).replace('</svg>','<path d="M8 9.5h8M8 12.5h5" stroke="#fff" stroke-width="1.75" stroke-linecap="round"/></svg>'),
 vault:sv(P(FLD)+P('M3 10h18')),
 vaultF:sv(P(FLD),{f:1}),
 hist:sv('<circle cx="12" cy="12" r="9"/>'+P('M12 7v5l3.2 2')),
 histF:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.6" fill="currentColor"/><path d="M12 7v5l3.2 2" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round"/></svg>',
 sliders:sv(P('M20 7h-9M14 17H4')+'<circle cx="7" cy="7" r="3"/><circle cx="17" cy="17" r="3"/>'),
 mic:sv('<rect x="9" y="2.5" width="6" height="12" rx="3"/>'+P('M5 10.5a7 7 0 0 0 14 0M12 17.5V21')),
 up:sv(P('M12 19V5M5.5 11.5 12 5l6.5 6.5'),{w:2.2}),
 plus:sv(P('M12 5v14M5 12h14'),{w:2}),
 scan:sv(P('M3 7.5V5a2 2 0 0 1 2-2h2.5M16.5 3H19a2 2 0 0 1 2 2v2.5M21 16.5V19a2 2 0 0 1-2 2h-2.5M7.5 21H5a2 2 0 0 1-2-2v-2.5M7 12h10')),
 fileUp:sv(P(FILE)+P('M12 17.5v-6M9.2 14.2 12 11.4l2.8 2.8')),
 file:sv(P(FILE)+P('M8.5 13h7M8.5 16.5h4.5')),
 copy:sv('<rect x="8.5" y="8.5" width="12" height="12" rx="2"/>'+P('M15.5 8.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v9A1.5 1.5 0 0 0 5 15.5h3.5'),{w:2}),
 share:sv(P('M12 3v12M8 6.5 12 3l4 3.5M8.5 10H6.5A1.5 1.5 0 0 0 5 11.5v8A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-8a1.5 1.5 0 0 0-1.5-1.5h-2'),{w:2}),
 thu:sv(P(THU),{w:2}),
 thuF:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="'+THU+'"/></svg>',
 chev:sv(P('M9 5.5 15.5 12 9 18.5'),{w:2.4}),
 back:sv(P('M15.5 4.5 8 12l7.5 7.5'),{w:2.6}),
 x:sv(P('M6 6l12 12M18 6 6 18'),{w:2.6}),
 stop:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="3"/></svg>',
 book:sv(P('M4 19V5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5 2.5 2.5 0 0 0 6.5 23H20M8.5 7.5h7M8.5 11h5')),
 fldF:sv(P(FLD),{f:1}),
 srch:sv('<circle cx="11" cy="11" r="7"/>'+P('M20.5 20.5 16 16'),{w:2.2}),
 dots:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg>',
 compose:sv(P('M11.5 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5.5M18.4 2.6a2 2 0 0 1 2.9 2.9L12 14.8 8 16l1.2-4z')),
 globe:sv('<circle cx="12" cy="12" r="9"/>'+P('M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18')),
 trash:sv(P('M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3')),
 check:sv(P('M5 12.5 9.5 17 19 7.5'),{w:2.2}),
 checkC:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="m7.5 12.3 3 3 6-6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
 filter:sv(P('M4 6.5h16M7 12h10M10 17.5h4'),{w:2}),
 conn:sv(P('M7 2v6a4 4 0 0 0 4 4h7'),{w:1.5}),
 plusC:sv('<circle cx="12" cy="12" r="9"/>'+P('M12 8v8M8 12h8')),
 users:sv('<circle cx="9" cy="8" r="3.5"/>'+P('M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6'),{w:2.2}),
 replay:sv(P('M3.5 12a8.5 8.5 0 1 0 2.5-6L3.5 8.5M3.5 3.5v5h5'))
};
var SRC=[
 {f:'Globex_Distribution_Agmt.docx',s:'13.3',h:'Termination without Cause',x:'Either party may terminate this Agreement without cause upon ',hl:'one hundred eighty (180) days’ written notice',y:' to the other party, provided that all purchase orders accepted prior to the effective date of termination are fulfilled in accordance with their terms.'},
 {f:'Globex_Distribution_Agmt.docx',s:'21.1',h:'Notices',x:'All notices under this Agreement ',hl:'shall be in writing and delivered by hand, by recognized overnight courier, or by email with confirmation of receipt',y:', to the addresses set out on the signature page or such other address as a party may designate.'},
 {f:'Globex_Distribution_Agmt.docx',s:'16.2',h:'Change of Control',x:'',hl:'Any Change of Control of Distributor shall be deemed an assignment requiring the prior written consent of Globex',y:', which consent may be withheld in Globex’s sole discretion.'}
];
// tokens: {n} = citation, '\n' = paragraph, '**' toggles bold
var CONVO=[
 {q:'What’s the notice period to terminate the Globex distribution agreement for convenience, and does it have to be in writing?',
  steps:[['Searching Project Falcon','8 files'],['Reading Globex_Distribution_Agmt.docx','Sections 13, 16 and 21'],['Checking notice and assignment provisions','3 relevant passages']],
  fu:['Draft a short email to the client summarizing that.','Which other Project Falcon agreements have change-of-control clauses?','What happens to open purchase orders after termination?'],
  a:'Either party can terminate the Globex Distribution Agreement **without cause on 180 days’ notice** {1} . \n Yes — notice **must be in writing** and delivered by hand, overnight courier, or email with confirmation of receipt {2} . \n One flag: a change of control of the distributor is treated as an assignment that needs **Globex’s prior written consent** {3} , so a sale of the business could trigger a separate consent requirement.'},
 {q:'Draft a short email to the client summarizing that.',
  steps:[['Reviewing previous answer','3 cited sources'],['Drafting email','Client-friendly tone']],
  fu:[],
  a:'**Subject:** Globex agreement — termination options \n Hi Jordan, \n Quick summary on the Globex Distribution Agreement: you can exit without cause by giving **180 days’ written notice** {1} , delivered by hand, courier, or confirmed email {2} . \n If a sale of the business is on the horizon, note that a change of control requires Globex’s **prior written consent** {3} — worth sequencing carefully. Happy to discuss. \n Best, \n Alex'}
];
var VAULTS=[
 {t:'Project Falcon',n:8,q:14,sz:'3.1 MB',files:[['Acme_Globex_MSA.pdf',42,'612 KB'],['Globex_Distribution_Agmt.docx',31,'248 KB'],['Initech_Supply_Agreement.pdf',27,'388 KB'],['Umbrella_NDA_2023.pdf',6,'92 KB'],['Hooli_License_Agreement.pdf',19,'301 KB'],['Stark_Services_SOW.pdf',12,'176 KB'],['Wayne_Logistics_MSA.pdf',38,'544 KB'],['Soylent_Purchase_Terms.pdf',9,'120 KB']],rq:[['Compare indemnity caps across supplier MSAs','Oct 30, 2026'],['List all auto-renewal dates','Oct 27, 2026']]},
 {t:'Acme v. Globex — Discovery',n:1204,q:37,sz:'2.4 GB',files:[['Deposition_Smith_Day1.pdf',212,'4.1 MB'],['Expert_Report_Draft.docx',64,'880 KB'],['Email_Export_Batch_07.pdf',590,'18.2 MB']],rq:[['Summarize deposition transcript — Day 1','Today']]},
 {t:'Lease Portfolio Q3',n:46,q:0,sz:'96 MB',files:[['Lease_Elm_St.pdf',58,'2.2 MB'],['Lease_Harbor_Way.pdf',61,'2.5 MB']],rq:[]}
];
var HIST=[
 ['Today',[['Summarize deposition transcript — Acme v. Globex','Deposition_Smith_Day1.pdf']]],
 ['Yesterday',[['Compare indemnity caps across supplier MSAs','Project Falcon · 2 follow-ups']]],
 ['Previous 7 days',[['Draft NDA mark-up for Umbrella Co.','Umbrella_NDA_2023.pdf'],['Explain the MFN clause in plain English',null]]]
];
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

window.DEMOS['mobile-voice']={frame:'phone',title:'Harvey Mobile — Voice to Prompt',
 caption:'Tap the mic in the composer to ask Harvey by voice, then send the transcript. Tap a numbered citation or “Sources” to check the source; try a follow-up and the Vault tab.',
 sources:['https://www.harvey.ai/blog/mobile-voice-announcement','https://www.harvey.ai/platform/harvey-mobile','https://help.harvey.ai/release-notes/category/mobile','https://www.harvey.ai/blog/top-5-product-releases-of-2025','https://www.artificiallawyer.com/2025/09/10/mobile-and-voice-are-coming-to-harvey/'],
 mount:function(root){
  var T=[],IV=[],S,dict=[];
  function later(f,ms){var t=setTimeout(f,ms);T.push(t);return t;}
  function every(f,ms){var t=setInterval(f,ms);IV.push(t);return t;}
  function stopAll(){T.forEach(clearTimeout);IV.forEach(clearInterval);T=[];IV=[];stopDict();}
  function stopDict(){dict.forEach(function(t){clearTimeout(t);clearInterval(t);});dict=[];}
  function init(){S={tab:'assistant',view:'home',turn:0,msgs:[],src:{type:'vault',v:0},busy:false,comp:'input',query:'',fb:{},hint:'mic',project:0,cite:null,live:false};}
  init();
  root.innerHTML='<style>'+CSS+'</style><div class="sbar"><span>9:41</span><span style="display:flex;gap:6px;align-items:center"><svg width="18" height="11" viewBox="0 0 18 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="5" y="5" width="3" height="6" rx="1"/><rect x="10" y="2.5" width="3" height="8.5" rx="1"/><rect x="15" y="0" width="3" height="11" rx="1"/></svg><svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><path d="M8 2.2c2.3 0 4.4.9 5.9 2.4l1.1-1.1A9.9 9.9 0 0 0 8 .6 9.9 9.9 0 0 0 1 3.5l1.1 1.1A8.3 8.3 0 0 1 8 2.2zm0 3.2c1.4 0 2.7.6 3.6 1.5l1.1-1.1A6.7 6.7 0 0 0 8 3.8a6.7 6.7 0 0 0-4.7 2l1.1 1.1A5.1 5.1 0 0 1 8 5.4zm0 3.2c.5 0 .9.2 1.3.5L8 10.4 6.7 9.1c.4-.3.8-.5 1.3-.5z"/></svg><svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="16" height="8" rx="1.5" fill="currentColor"/><rect x="23" y="4" width="1.5" height="4" rx=".7" fill="currentColor" opacity=".4"/></svg></span></div>'+
   '<div class="view"></div><div class="trans"><div><span class="spin"></span>Opening in Assistant</div></div><div class="shade"></div><div class="sheet"></div><div class="toast"></div><div class="hind"></div>';
  var $=function(s){return root.querySelector(s);};
  var view=$('.view'),sheet=$('.sheet'),shade=$('.shade'),toastEl=$('.toast');
  var tT;function toast(m,ok){toastEl.innerHTML=(ok?IC.checkC:'')+'<span>'+esc(m)+'</span>';toastEl.classList.add('show');clearTimeout(tT);tT=setTimeout(function(){toastEl.classList.remove('show');},2200);}

  function tabs(){var t=[['assistant','Assistant','asst'],['vault','Vault','vault'],['history','History','hist']];
   return '<div class="tabs">'+t.map(function(x){var on=S.tab===x[0];return '<button class="tab'+(on?' on':'')+'" data-tab="'+x[0]+'">'+IC[x[2]+(on?'F':'')]+x[1]+'</button>';}).join('')+'</div>';}
  function srcPill(){if(!S.src)return '';
   var p=S.src.type==='web'?'<span class="pill">'+IC.globe+'Web search</span>':'<span class="pill" data-a="pick" style="max-width:282px">'+IC.vault+'<span style="overflow:hidden;text-overflow:ellipsis">'+esc(VAULTS[S.src.v].t)+' ('+VAULTS[S.src.v].n.toLocaleString('en-US')+' files)</span></span>';
   return '<div class="pills">'+p+'<button class="trash" data-a="unsrc" aria-label="Clear sources">'+IC.trash+'</button></div>';}
  function composer(){
   if(S.comp==='rec'||S.comp==='trans'){
    return '<div class="cmp"><div class="dict">'+(S.comp==='rec'?'<div class="wave">'+new Array(63).join('<i></i>')+'</div>':'<div class="tph"></div>')+
     '<div class="drow"><button class="dx" data-a="dcancel" aria-label="Cancel recording">'+IC.x+'</button><span class="st">'+(S.comp==='rec'?'Recording...':'Transcribing...')+'</span><button class="dstop'+(S.comp==='trans'?' off':'')+'" data-a="dstop" aria-label="Stop recording">'+IC.stop+'</button></div></div></div>';}
   var has=S.query.trim().length>0;
   return '<div class="cmp">'+srcPill()+'<div class="qi"><textarea rows="1" placeholder="'+(S.busy?'Processing your query…':'Ask Harvey anything')+'"'+(S.busy?' disabled':'')+'>'+esc(S.query)+'</textarea>'+
    '<div class="ctl"><button class="chip" data-a="source">'+IC.plus+'Source</button><span class="sp"></span>'+
    '<button class="ib mic'+(S.hint==='mic'&&!S.busy?' hint':'')+'" data-a="mic" aria-label="Dictate"'+(S.busy?' style="color:var(--dis)"':'')+'>'+(S.micSpin?'<span class="spin"></span>':IC.mic)+'</button>'+
    (has?'<button class="send'+(S.hint==='send'?' hint':'')+'" data-a="send" aria-label="Send message">'+IC.up+'</button>':'')+'</div></div></div>';}
  function drawComposer(){var c=view.querySelector('.cmp');if(!c)return;c.outerHTML=composer();var ta=view.querySelector('.qi textarea');if(ta)fit(ta);}
  function fit(ta){ta.style.height='40px';ta.style.height=Math.min(120,Math.max(40,ta.scrollHeight))+'px';}
  function nav(left,right){return '<div class="nav">'+(left||'')+'<span class="sp"></span>'+(right||'')+'</div>';}
  function row(icon,t,s,attr,o){o=o||{};return '<button class="row" '+(attr||'')+'><span class="ic'+(o.dk?' dk':'')+'">'+icon+'</span><span class="g"><div class="t'+(o.m?' m':'')+'">'+t+'</div>'+(s?'<div class="s'+(o.xs?' xs':'')+'">'+esc(s)+'</div>':'')+'</span>'+(o.chev?'<span class="cv">'+IC.chev+'</span>':'')+'</button>';}

  function render(){
   var h='';
   if(S.view==='home'){
    h=nav('<button class="nb" data-a="reset" title="Replay demo" aria-label="Replay demo">'+IC.replay+'</button>','<button class="nb" data-a="settings" aria-label="Settings">'+IC.sliders+'</button>')+
     '<div class="empty"><div class="logo">Harvey</div></div>'+
     '<div class="qas"><button class="qa" data-a="scan">'+IC.scan+'Scan document</button><button class="qa" data-a="upload">'+IC.fileUp+'Upload file</button></div>'+composer()+tabs();
   } else if(S.view==='thread'){
    h=nav('<button class="nb" data-a="reset" title="Replay demo" aria-label="New conversation">'+IC.compose+'</button>','<button class="nb" data-a="share" aria-label="Share">'+IC.share+'</button>')+
     '<div class="bd"><div class="msgs"></div></div>'+composer()+tabs();
   } else if(S.view==='vault'){
    h=nav('','<button class="nb" data-a="scan" aria-label="Scan">'+IC.scan+'</button>')+'<div class="bd"><div class="lt">Vault</div><div class="srch">'+IC.srch+'Search projects</div>'+
     '<div class="sec">Knowledge bases</div>'+row(IC.book,'Precedents Library<span class="shd">'+IC.users+'</span>','312 files','data-a="kb"')+
     '<div class="sec">Vaults<button data-a="newv">New'+IC.plusC+'</button></div>'+
     VAULTS.map(function(v,i){return row(IC.fldF,esc(v.t),v.n.toLocaleString('en-US')+' files'+(v.q?' · '+v.q+' queries':''),'data-pj="'+i+'"');}).join('')+'</div>'+tabs();
   } else if(S.view==='project'){
    var v=VAULTS[S.project],rq=v.rq.slice();if(S.project===0&&S.live)rq.unshift(['Globex termination notice','Today']);
    h=nav('<button class="nback" data-tab="vault">'+IC.back+'Vault</button>','<button class="nb" data-a="more" aria-label="More">'+IC.dots+'</button>')+'<div class="bd"><div class="lt" style="font-size:30px">'+esc(v.t)+'</div>'+
     '<div class="psub">'+v.n.toLocaleString('en-US')+' files • '+v.sz+'</div><div class="srch" style="margin-top:6px">'+IC.srch+'Search files and folders</div>'+
     '<div class="chips"><button class="cbtn" data-a="askvault">'+IC.asst+'Start a new query</button><button class="cbtn" data-a="scan">'+IC.scan+'Scan a doc</button><button class="cbtn" data-a="upload">'+IC.up+'Upload a doc</button></div>'+
     '<div class="h3">Recent queries</div>'+(rq.length?rq.map(function(q,k){return row(IC.asst,esc(q[0]),q[1],(k===0&&S.project===0&&S.live?'data-a="openlive"':'data-a="sample"'),{dk:1,m:1,xs:1});}).join(''):'<div class="psub" style="padding-top:6px">No recent queries found</div>')+
     '<div class="h3">Files</div>'+v.files.map(function(f){return row(IC.file,esc(f[0]),f[1]+' pages • '+f[2],'data-file="'+esc(f[0])+'"',{dk:1,m:1,xs:1});}).join('')+'<div style="height:16px"></div></div>'+tabs();
   } else if(S.view==='history'){
    var groups=HIST.map(function(g){return [g[0],g[1].slice()];});if(S.live)groups[0][1].unshift(['Globex termination notice','Project Falcon'+(S.turn>1?' · 1 follow-up':''),1]);
    h=nav('','<button class="nb" data-a="filter" aria-label="Filter">'+IC.filter+'</button>')+'<div class="bd"><div class="lt">History</div><div class="srch">'+IC.srch+'Search conversations</div>'+
     groups.map(function(g){return '<div class="tg">'+g[0]+'</div>'+g[1].map(function(e){return '<div class="tc" data-a="'+(e[2]?'openlive':'sample')+'"><div class="tt">'+esc(e[0])+'</div><span class="mo">'+IC.dots+'</span>'+(e[1]?'<div class="ft">'+IC.conn+'<span>'+esc(e[1])+'</span></div>':'')+'</div>';}).join('');}).join('')+'<div style="height:20px"></div></div>'+tabs();
   }
   view.innerHTML=h;
   var ta=view.querySelector('.qi textarea');if(ta)fit(ta);
   if(S.view==='thread')drawMsgs(true);
  }
  function go(v){S.view=v;S.tab=(v==='thread'||v==='home')?'assistant':v==='project'?'vault':v;render();}

  // ---- thread
  function fmt(tokens,n){var out='',bold=false;
   for(var i=0;i<n&&i<tokens.length;i++){var w=tokens[i];
    if(w==='\n'){out=out.replace(/ $/,'')+'</p><p>';continue;}
    var m=w.match(/^\{(\d)\}$/);if(m){out+='<span class="cit'+(S.cite===m[1]-1?' on':'')+'" data-c="'+(m[1]-1)+'">'+m[1]+'</span> ';continue;}
    if(w==='.'||w===','){out=out.replace(/ $/,'')+w+' ';continue;}
    var parts=w.split('**');for(var j=0;j<parts.length;j++){if(j>0){bold=!bold;out+=bold?'<b>':'</b>';}out+=esc(parts[j]);}
    out+=' ';}
   if(bold)out+='</b>';return '<p>'+out+'</p>';}
  function drawMsgs(jump){var box=view.querySelector('.msgs');if(!box)return;var h='',last=S.msgs.length-1;
   S.msgs.forEach(function(m,mi){
    if(m.u!=null){h+='<div class="ub"><div>'+esc(m.u)+'</div></div>';return;}
    var C=CONVO[m.i],stream=!m.done;
    if(stream){var st=C.steps[Math.min(m.steps,C.steps.length)-1];h+='<div class="ah shim" data-a="steps" data-m="'+mi+'"><span class="el">'+esc(st[0])+'…</span>'+IC.chev+'</div>';}
    else if(C.steps.length>1)h+='<div class="ah done" data-a="steps" data-m="'+mi+'">Finished in '+C.steps.length+' steps'+IC.chev+'</div>';
    if(m.n>0){h+='<div class="md">'+fmt(m.tok,m.n).replace(/<\/p>$/,(m.done?'':'<span class="cur"></span>')+'</p>')+'</div>';}
    if(m.done){var fb=S.fb[mi]||0;
     h+='<div class="acts"><button data-a="copy" aria-label="Copy message">'+IC.copy+'</button><button data-a="share" aria-label="Share message">'+IC.share+'</button>'+
      '<button data-a="fb" data-v="1" data-m="'+mi+'" class="'+(fb===1?'on':'')+'" aria-label="Thumbs up">'+(fb===1?IC.thuF:IC.thu)+'</button>'+
      '<button data-a="fb" data-v="-1" data-m="'+mi+'" class="'+(fb===-1?'on':'')+'" aria-label="Thumbs down"><span style="transform:rotate(180deg);display:block">'+(fb===-1?IC.thuF:IC.thu)+'</span></button></div>';
     if(C.src!==false)h+='<button class="srow" data-a="sources">'+IC.file+'<b>Sources</b><span>(3)</span><i class="cv">'+IC.chev+'</i></button>';
     if(mi===last&&C.fu&&C.fu.length&&!S.busy)h+='<div class="fus"><h4>Follow-ups</h4>'+C.fu.map(function(q,k){return '<button class="fu" data-fu="'+k+'">'+esc(q)+'</button>';}).join('')+'</div>';
    }
   });
   box.innerHTML=h;var sc=view.querySelector('.bd');if(sc&&(jump||S.busy))sc.scrollTop=sc.scrollHeight;}

  function ask(i,text){
   stopDict();S.comp='input';S.query='';S.hint=null;go('thread');S.live=true;
   S.msgs.push({u:text});var m={i:i,steps:1,n:0,done:false,tok:CONVO[i].a.split(' ')};S.msgs.push(m);S.busy=true;drawMsgs(true);drawComposer();
   var C=CONVO[i];C.steps.forEach(function(s,k){if(k)later(function(){m.steps=k+1;drawMsgs();},900*k);});
   later(function(){var iv=every(function(){m.n+=1;if(m.n>=m.tok.length){m.done=true;clearInterval(iv);S.busy=false;drawComposer();drawMsgs(true);
      if(i===0)later(function(){toast('Tap a number to check the source, or pick a follow-up');},500);}drawMsgs();},45);},900*C.steps.length);
  }
  function generic(text){
   var C={steps:[['Searching '+(S.src&&S.src.type==='vault'?VAULTS[S.src.v].t:S.src?'the web':'your workspace'),''],['Drafting response','']],src:false,fu:[],
    a:'This demo only has a couple of scripted answers — try the **mic** to ask about the Globex agreement in Project Falcon. In the real app, Assistant answers from your vaults, uploaded files or the web, with citations you can open.'};
   CONVO.push(C);ask(CONVO.length-1,text);
  }

  // ---- dictation (inline in composer, like the real app)
  function startDictation(){
   if(S.busy){toast('Harvey is still answering…');return;}
   var i=S.turn===0?0:1;S.dq=CONVO[i].q;S.di=i;S.hint=null;S.micSpin=true;drawComposer();
   dict.push(setTimeout(function(){S.micSpin=false;S.comp='rec';drawComposer();runWave();},450));
  }
  function runWave(){
   var bars=[].slice.call(view.querySelectorAll('.wave i')),N=bars.length,lv=[],k=0,talk=false,dur=Math.max(3200,S.dq.split(' ').length*230);
   for(var j=0;j<N;j++)lv.push(0);
   dict.push(setTimeout(function(){talk=true;},500));
   dict.push(setTimeout(function(){talk=false;},500+dur));
   dict.push(setTimeout(function(){if(S.comp==='rec')stopRec();},500+dur+700));
   dict.push(setInterval(function(){k++;var v=talk?(.25+Math.random()*.75)*(.55+.45*Math.abs(Math.sin(k/5))):Math.random()*.06;
    lv.push(v);lv.shift();for(var j=0;j<N;j++)bars[j].style.height=(4+44*lv[j])+'px';},70));
  }
  function stopRec(){stopDict();S.comp='trans';drawComposer();
   dict.push(setTimeout(function(){S.comp='input';S.query='';drawComposer();var full=S.dq,c=0;
    var iv=setInterval(function(){c+=4;S.query=full.slice(0,c);var ta=view.querySelector('.qi textarea');if(ta){ta.value=S.query;fit(ta);}
     if(c>=full.length){clearInterval(iv);S.query=full;S.hint='send';drawComposer();toast('Transcript ready — tap ↑ to send');}},16);dict.push(iv);},1200));}

  // ---- sheets
  function openSheet(title,body,o){o=o||{};
   sheet.innerHTML='<div class="grab"></div><div class="shh">'+(o.back?'<button class="nb" data-a="'+o.back+'" aria-label="Back">'+IC.back+'</button>':'<span class="ghost"></span>')+'<span class="ttl">'+title+'</span>'+(o.noX?'<span class="ghost"></span>':'<button class="nb" data-a="shut" aria-label="Close">'+IC.x+'</button>')+'</div><div class="shb">'+body+'</div>';
   sheet.classList.add('open');shade.classList.add('open');}
  function shut(){sheet.classList.remove('open');shade.classList.remove('open');if(S.cite!=null){S.cite=null;if(S.view==='thread')drawMsgs();}}
  function srcList(){openSheet('Sources',SRC.map(function(s,k){return '<button class="sitem" data-c="'+k+'" data-from="list"><span class="fi">'+IC.file+'</span><span><b><span class="cit n">'+(k+1)+'</span>'+esc(s.f)+'</b><p>§'+s.s+' '+esc(s.h)+'. '+esc(s.x+s.hl+s.y)+'</p></span></button>';}).join(''));}
  function citeDetail(k,fromList){var s=SRC[k];S.cite=k;if(S.view==='thread')drawMsgs();
   openSheet('',
    '<div class="ad"><h3>'+esc(s.f)+'</h3><div class="rf">Reference ['+(k+1)+']</div><div class="qt">'+esc(s.x+s.hl+s.y)+'</div><button class="vb" data-a="pdf" data-k="'+k+'">'+IC.srch+'View in PDF</button></div>',{back:fromList?'srclist':null});}
  function pdf(k){var s=SRC[k];
   var secs=[['13.2','Termination for Breach','Either party may terminate this Agreement upon written notice if the other party materially breaches this Agreement and fails to cure such breach within thirty (30) days.'],
     [s.s,s.h,s.x+'<span class="hl">'+esc(s.hl)+'</span>'+s.y],['13.4','Effect of Termination','Upon termination, Distributor shall cease to hold itself out as an authorized distributor of the Products and shall return all Confidential Information.']];
   if(k!==0)secs[0]=['§','…','…'];
   openSheet(esc(s.f),'<div class="pdf"><div class="pg">'+secs.filter(function(x){return x[0]!=='§';}).map(function(x){return '<h5>'+x[0]+' '+x[1]+'</h5><p>'+x[2]+'</p>';}).join('')+'</div></div><div class="pgn">Page '+(k===0?14:k===1?22:18)+' of 31</div>',{back:'cite'});S.pdfk=k;}
  function steps(mi){var m=S.msgs[mi],C=CONVO[m.i],n=m.done?C.steps.length:m.steps;
   openSheet(m.done?'Finished':'Working...',C.steps.slice(0,n).map(function(s,k){var done=m.done||k<n-1;return '<div class="step"><span class="ck">'+(done?IC.check:'<span class="spin" style="width:14px;height:14px"></span>')+'</span><span class="ln"></span><div>'+esc(s[0])+(s[1]?'<small>'+esc(s[1])+'</small>':'')+'</div></div>';}).join(''));}
  function actions(){openSheet('Choose an action',
   '<button class="arow" data-a="scan">'+IC.scan+'Scan document</button><button class="arow" data-a="pick">'+IC.vault+'Upload from vault</button><button class="arow" data-a="upload">'+IC.fileUp+'Upload from phone files</button><button class="arow" data-a="web">'+IC.globe+'Web search</button>',{noX:1});}
  function picker(){openSheet('Choose vault','<div class="srch" style="margin:0 16px 8px">'+IC.srch+'Search projects</div>'+VAULTS.map(function(v,i){return row(IC.fldF,esc(v.t),v.n.toLocaleString('en-US')+' files','data-pick="'+i+'"',{chev:1});}).join(''));}

  function onClick(e){
   var t=e.target;
   if(t===shade){shut();return;}
   var c=t.closest('[data-c]');if(c){citeDetail(+c.dataset.c,c.dataset.from==='list');return;}
   var tb=t.closest('[data-tab]');if(tb){var nt=tb.dataset.tab;
    if(nt==='assistant'){if(S.tab==='assistant'&&S.view==='thread'&&!S.busy){S.msgs=[];S.query='';go('home');return;}go(S.msgs.length?'thread':'home');return;}
    go(nt);return;}
   var pj=t.closest('[data-pj]');if(pj){S.project=+pj.dataset.pj;go('project');return;}
   var pk=t.closest('[data-pick]');if(pk){S.src={type:'vault',v:+pk.dataset.pick};shut();drawComposer();toast(VAULTS[S.src.v].t+' added as a source',1);return;}
   var fu=t.closest('[data-fu]');if(fu){if(S.busy)return;var k=+fu.dataset.fu;var last=S.msgs[S.msgs.length-1];
    if(k===0&&last.i===0){S.turn=2;ask(1,CONVO[1].q);}else generic(CONVO[last.i].fu[k]);return;}
   var fl=t.closest('[data-file]');if(fl){toast('Opens '+fl.dataset.file+' in the PDF viewer');return;}
   var a=t.closest('[data-a]');if(!a)return;
   switch(a.dataset.a){
    case 'mic':startDictation();break;
    case 'dcancel':stopDict();S.comp='input';drawComposer();break;
    case 'dstop':if(S.comp==='rec')stopRec();break;
    case 'send':sendText();break;
    case 'source':actions();break;
    case 'pick':picker();break;
    case 'web':S.src={type:'web'};shut();drawComposer();break;
    case 'unsrc':S.src=null;drawComposer();break;
    case 'sources':srcList();break;
    case 'srclist':srcList();break;
    case 'cite':citeDetail(S.pdfk);break;
    case 'pdf':pdf(+a.dataset.k);break;
    case 'steps':steps(+a.dataset.m);break;
    case 'shut':shut();break;
    case 'copy':toast('Message copied',1);break;
    case 'share':toast('Share sheet (not in demo)');break;
    case 'fb':var mi=+a.dataset.m;S.fb[mi]=+a.dataset.v;drawMsgs();toast('Thanks for the feedback',1);break;
    case 'scan':shut();toast('Opens the document scanner (not in demo)');break;
    case 'upload':shut();toast('Opens the Files picker (not in demo)');break;
    case 'settings':toast('Settings (not in demo)');break;
    case 'kb':case 'newv':case 'more':case 'filter':toast('Not in this demo');break;
    case 'sample':toast('Sample conversation — use the mic for a live one');break;
    case 'openlive':go('thread');break;
    case 'askvault':S.src={type:'vault',v:S.project};var tr=$('.trans');tr.classList.add('on');
     later(function(){tr.classList.remove('on');S.msgs=[];S.query='';S.hint='mic';go('home');},800);break;
    case 'reset':stopAll();shut();CONVO.length=2;init();render();toast('Demo reset',1);break;
   }
  }
  function sendText(){var v=S.query.trim();if(!v){return;}if(S.busy){toast('Harvey is still answering…');return;}
   if(v===CONVO[0].q||(S.turn===0&&/globex|terminat|notice/i.test(v))){if(S.src&&S.src.type==='vault'&&S.src.v===0){S.turn=1;ask(0,v);return;}}
   if(v===CONVO[1].q&&S.turn>=1&&S.msgs.length){S.turn=2;ask(1,v);return;}
   generic(v);}
  function onInput(e){if(e.target.tagName!=='TEXTAREA')return;var had=S.query.trim().length>0;S.query=e.target.value;fit(e.target);
   if(had!==(S.query.trim().length>0)){var ta=e.target,pos=ta.selectionStart;drawComposer();ta=view.querySelector('.qi textarea');ta.focus();ta.setSelectionRange(pos,pos);}}
  function onKey(e){if(e.key==='Enter'&&!e.shiftKey&&e.target.tagName==='TEXTAREA'){e.preventDefault();sendText();}}
  root.addEventListener('click',onClick);root.addEventListener('input',onInput);root.addEventListener('keydown',onKey);
  render();
  return function(){stopAll();clearTimeout(tT);CONVO.length=2;root.removeEventListener('click',onClick);root.removeEventListener('input',onInput);root.removeEventListener('keydown',onKey);root.innerHTML='';};
 }};
})();
