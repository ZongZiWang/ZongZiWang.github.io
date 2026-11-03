/* Harvey Vault — recreated mini demo of a Vault review table (vanilla re-implementation, fake data). */
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

window.DEMOS['vault']={frame:'browser',title:'Harvey Vault — Review table',url:'app.harvey.ai/vault/project-falcon',
 caption:'Click “Add column”, ask a question, watch answers fill in — then click any cell to see the cited source.',
 sources:['https://www.harvey.ai/platform/vault','https://www.harvey.ai/blog/introducing-the-next-version-of-vault','https://help.harvey.ai/release-notes/category/review-tables','https://ailearninghub.law.stanford.edu/harvey-ai-at-sls/documents-and-tables/'],
 mount:function(root){
  var T=[],S;
  function later(fn,ms){var t=setTimeout(fn,ms);T.push(t);return t;}
  function clearT(){T.forEach(clearTimeout);T=[];}
  function init(){S={cols:[],ans:{},verified:{},sel:null,search:'',filter:null,wrap:false};}
  init();
  root.innerHTML='<style>'+CSS+'</style>'+
  '<aside class="sb"><div class="sbh"><span class="wm">Harvey</span><span class="ib">'+I.side+'</span></div>'+
   '<div class="ni">'+I.asst+'Assistant</div><div class="ni on">'+I.vault+'Vault</div>'+
   '<div class="subm"><div class="on">Project Falcon</div><div>Acme v. Globex — Discovery</div><div>Lease Portfolio Q3</div><div>Precedent Library</div></div>'+
   '<div class="ni">'+I.flow+'Workflows</div><div class="ni">'+I.hist+'History</div><div class="ni">'+I.lib+'Library</div>'+
   '<div class="me"><div class="av">A</div><div>Alex Jordan<small>Acme Legal</small></div></div></aside>'+
  '<section class="card"><div class="hdr"><div class="crumb"><span>Vault</span><i>/</i><span>Project Falcon</span><i>/</i><b>Supplier agreements review</b></div><span class="sp"></span>'+
   '<button class="btn sec sm" data-a="reset">'+I.rep+'Replay</button><button class="btn sec sm" data-a="share">'+I.share+'Share</button><button class="btn sec sm" data-a="export">'+I.down+'Export</button></div>'+
   '<div class="tb"><button class="btn ghost sm" data-a="ask">'+I.bub+'<span class="lb">Ask Harvey</span></button><button class="btn ghost sm" data-a="addfile">'+I.file+'<span class="lb">Add files</span></button><span class="sep"></span>'+
   '<div class="srch">'+I.srch+'<input placeholder="Search"></div><button class="btn ghost sm" data-a="filter">'+I.filt+'<span class="fl">Filter</span></button><span class="fcw"></span>'+
   '<span class="sp"></span><span class="cnt"></span><button class="btn ghost sm" data-a="wrap">'+I.wrap+'<span class="lb">Wrap text</span></button><button class="btn ghost sm" data-a="display">'+I.disp+'<span class="lb">Display</span></button><button class="ib" data-a="details" aria-label="Toggle details panel">'+I.side+'</button></div>'+
   '<div class="body"><div class="tw"></div><div class="side"></div></div><div class="toast"></div></section>';
  var $=function(s){return root.querySelector(s);};
  var tw=$('.tw'),side=$('.side'),tb=$('.tb'),toastEl=$('.toast'),inp=$('.srch input'),card=$('.card');
  function toast(m){toastEl.innerHTML=esc(m);toastEl.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(function(){toastEl.classList.remove('show');},2000);}
  function closePops(){root.querySelectorAll('.pop').forEach(function(p){p.remove();});}
  function colById(id){return S.cols.filter(function(c){return c.id===id;})[0];}
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
   var qi=p.querySelector('.qi'),ts=p.querySelector('.ts'),hi=p.querySelector('.hi'),go=p.querySelector('[data-x=r]');
   qi.focus();
   function sync(){var k=match(qi.value);if(k){ts.value=QS[k].ty;if(!hi.dataset.touched)hi.value=QS[k].h;}
    else if(!hi.dataset.touched)hi.value=qi.value.trim().replace(/\?$/,'').slice(0,28);
    go.disabled=!qi.value.trim();}
   p.addEventListener('click',function(e){
    var ch=e.target.closest('.sug button');
    if(ch){qi.value=QS[ch.dataset.k].q;sync();qi.focus();return;}
    var x=e.target.closest('[data-x]');if(!x)return;
    if(x.dataset.x==='c')closePops();
    if(x.dataset.x==='r'&&!x.disabled)run(qi.value,ts.value,hi.value);
   });
   hi.addEventListener('input',function(){hi.dataset.touched=1;});
   qi.addEventListener('input',sync);
   qi.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();run(qi.value,ts.value,hi.value);}});
  }
  function run(q,ty,hd){
   q=(q||'').trim();if(!q){toast('Type a question or pick a suggestion');return;}
   var k=match(q);
   closePops();
   var id='c'+Date.now();
   var col={id:id,key:k,q:q,h:(hd||'').trim()||(k?QS[k].h:q.slice(0,28)),ty:ty,yn:ty==='Classify',fresh:true};
   S.cols.push(col);render();
   tw.scrollLeft=tw.scrollWidth;
   toast('Generating output for '+DOCS.length+' documents…');
   DOCS.forEach(function(d,i){
    later(function(){
     var a;
     if(k)a=QS[k].a(d);
     else a={tag:'Summary',txt:d.t+' between '+d.p+'; see recitals.',sec:'1',pass:'This '+d.t+' (the “Agreement”) is entered into as of '+d.d+' by and between '+d.p+'.'};
     if(ty==='Verbatim')a={tag:a.tag,txt:'“'+a.pass+'”',sec:a.sec,pass:a.pass};
     if(ty==='Date')a={tag:'Date',txt:d.d,sec:'Preamble',pass:'This '+d.t+' is made and entered into effective as of '+d.d+' (the “Effective Date”).'};
     a.fresh=true;a.q=q;S.ans[id+':'+i]=a;render();
     if(i===DOCS.length-1)toast('Column complete · click a cell to verify its source');
    },600+i*380+Math.random()*200);
   });
  }
  function pct(){var n=0,t=0;S.cols.forEach(function(c){DOCS.forEach(function(d,i){if(S.ans[c.id+':'+i]){t++;if(S.verified[c.id+':'+i])n++;}});});return t?Math.round(n*100/t):0;}
  function openCell(k){
   var a=S.ans[k];if(!a)return;
   S.sel=k;render();
   var p=k.split(':'),i=+p[1],d=DOCS[i],c=colById(p[0]),noCite=a.sec==='—';
   var paras=FILL.slice(0,3).map(function(t,j){return '<p><b>'+(j+1)+'.</b> '+t+'</p>';});
   var cited=noCite?'<p><b>17.</b> [Reserved.]</p>':'<p><b>'+esc(a.sec)+'</b> <mark>'+esc(a.pass)+'</mark></p>';
   paras.push('<p style="text-align:center;color:#999">• • •</p>',cited,'<p>'+FILL[3]+'</p><p>'+FILL[4]+'</p>');
   var v=S.verified[k];
   side.innerHTML='<div class="si"><div class="sh"><span class="r">Row '+(i+1)+'</span><span class="r">/</span><b>'+esc(d.f)+'</b><span class="pct">'+pct()+'% verified</span><button class="ib" data-s="x" aria-label="Close">'+I.x+'</button></div>'+
    '<div class="ac"><div class="q">'+(TYI[c.ty]||I.tText)+esc(c.h)+'</div><div class="a">'+(c.yn?'<span class="tag '+tagCls(a.tag)+'">'+esc(a.tag)+'</span>':'')+esc(a.txt)+(noCite?'':'<span class="cite" data-s="c">1</span>')+'</div>'+
    '<div class="why">'+(noCite?esc(a.pass):'Found in Section '+esc(a.sec)+'. The cited passage is highlighted in the document below.')+'</div>'+
    '<div class="vrow"><button class="btn ghost'+(v?' done':'')+'" data-s="v">'+I.chk+(v?'Verified':'Verify')+'</button><button class="btn ghost" data-s="n">'+I.down+'Next row</button><span class="sp"></span><button class="btn ghost" data-s="cp">Copy</button></div></div>'+
    '<div class="pg"><div class="pgh">'+ficon(d.f)+'<b>'+esc(d.f)+'</b><span>Page '+(3+i%5)+' of 14</span></div><div class="paper"><h5>'+esc(d.t.toUpperCase())+'</h5><div class="sub">'+esc(d.p)+' · Effective '+esc(d.d)+'</div>'+paras.join('')+'<div class="pgn">'+(3+i%5)+'</div></div></div></div>';
   side.classList.add('open');tb.classList.add('tight');
   var m=side.querySelector('mark');if(m)later(function(){var pg=side.querySelector('.pg');if(pg&&m)pg.scrollTop=m.offsetTop-pg.offsetTop-80;},280);
  }
  side.addEventListener('click',function(e){
   var b=e.target.closest('[data-s]');if(!b)return;
   var s=b.dataset.s;
   if(s==='x'){side.classList.remove('open');S.sel=null;render();}
   if(s==='v'){S.verified[S.sel]=!S.verified[S.sel];if(S.verified[S.sel])toast('Cell verified');openCell(S.sel);}
   if(s==='c'){var m=side.querySelector('mark');b.classList.add('on');if(m){var pg=side.querySelector('.pg');pg.scrollTop=m.offsetTop-pg.offsetTop-80;m.animate&&m.animate([{boxShadow:'0 0 0 5px hsl(220 79% 48% / .35)'},{boxShadow:'0 0 0 2px hsl(223 69% 86%)'}],{duration:700});}}
   if(s==='cp')toast('Copied to clipboard');
   if(s==='n'){var p=S.sel.split(':'),R=rows(),ix=R.indexOf(+p[1]);var nx=R[(ix+1)%R.length];openCell(p[0]+':'+nx);
     var td=tw.querySelector('[data-k="'+p[0]+':'+nx+'"]');if(td)td.scrollIntoView({block:'nearest'});}
  });
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
  function onClick(e){
   var a=e.target.closest('[data-a]');
   if(!e.target.closest('.pop')&&!(a&&(a.dataset.a==='add'||a.dataset.a==='filter')))closePops();
   if(a){var x=a.dataset.a;
    if(x==='add')addPop();
    else if(x==='filter')filterPop(a);
    else if(x==='clearf'){S.filter=null;render();}
    else if(x==='wrap'){S.wrap=!S.wrap;render();}
    else if(x==='details'){if(side.classList.contains('open')){side.classList.remove('open');S.sel=null;render();}else{var f=tw.querySelector('.cl');if(f)openCell(f.dataset.k);else toast('Add a column to see answer details');}}
    else if(x==='reset'){clearT();init();inp.value='';side.classList.remove('open');closePops();render();toast('Demo reset');}
    else toast({share:'Sharing is disabled in this demo',export:'Would export to Excel (.xlsx)',ask:'Ask Harvey about this table isn’t part of this demo',addfile:'Uploading is disabled in this demo',display:'Display options aren’t part of this demo'}[x]||'');
    return;}
   var c=e.target.closest('.cl');if(c)openCell(c.dataset.k);
  }
  root.addEventListener('click',onClick);
  inp.addEventListener('input',function(){S.search=inp.value;render();});
  render();
  return function(){clearT();clearTimeout(toast.t);root.removeEventListener('click',onClick);root.innerHTML='';};
 }};
})();
