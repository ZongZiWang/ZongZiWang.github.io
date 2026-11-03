/* Uber Copter — recreated mini demo (phone frame).
   Stylistic recreation from public press coverage only; all data is fake. */
(function(){
window.DEMOS = window.DEMOS || {};
var ID = 'uber-copter';
var P = '.demo-uber-copter ';
var CSS = [
P+'{background:#cfdde8;font-family:"Helvetica Neue",Helvetica,Arial,system-ui,sans-serif;color:#000;-webkit-font-smoothing:antialiased}',
P+'.uc-app{position:absolute;inset:0;overflow:hidden}',
P+'.uc-status{position:absolute;top:0;left:0;right:0;height:44px;display:flex;justify-content:space-between;align-items:center;padding:6px 30px 0 34px;font:600 14px system-ui,sans-serif;z-index:40;pointer-events:none}',
P+'.uc-status .ic{display:flex;gap:5px;align-items:center}',
P+'.uc-map{position:absolute;left:0;top:0;width:375px}',
P+'.uc-map svg{display:block;width:100%;height:100%;background:#cfdde8}',
P+'.uc-sheet{position:absolute;left:0;right:0;bottom:0;background:#fff;border-radius:16px 16px 0 0;box-shadow:0 -6px 24px rgba(0,0,0,.14);padding:10px 18px 22px;z-index:10;animation:ucUp .32s ease-out}',
P+'@keyframes ucUp{from{transform:translateY(40px);opacity:.3}to{transform:none;opacity:1}}',
P+'.uc-grab{width:38px;height:5px;border-radius:3px;background:#d6d6d6;margin:0 auto 12px}',
P+'.uc-h1{font-size:24px;font-weight:700;letter-spacing:-.3px;margin:2px 0 12px}',
P+'.uc-where{display:flex;align-items:center;justify-content:space-between;background:#eee;border-radius:10px;height:54px;padding:0 10px 0 16px;font-size:20px;font-weight:600;cursor:pointer;color:#222}',
P+'.uc-now{background:#fff;border-radius:999px;font-size:13px;font-weight:600;padding:7px 11px;display:flex;gap:5px;align-items:center}',
P+'.uc-row{display:flex;align-items:center;gap:14px;padding:12px 0;border-bottom:1px solid #eee;cursor:pointer}',
P+'.uc-row:last-child{border-bottom:0}',
P+'.uc-row .bub{width:38px;height:38px;border-radius:50%;background:#eee;display:flex;align-items:center;justify-content:center;flex:none}',
P+'.uc-row b{display:block;font-size:15.5px;font-weight:600}',
P+'.uc-row small{display:block;font-size:13px;color:#6b6b6b;margin-top:1px}',
P+'.uc-promo{margin-top:12px;border-radius:12px;background:#000;color:#fff;padding:14px 14px 14px 16px;display:flex;align-items:center;gap:10px;cursor:pointer;position:relative;overflow:hidden}',
P+'.uc-promo b{font-size:16px;display:block}',
P+'.uc-promo small{font-size:12.5px;color:#bdbdbd;display:block;margin-top:3px;line-height:1.35}',
P+'.uc-tag{display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:.4px;padding:2px 6px;border-radius:4px;background:#276ef1;color:#fff;vertical-align:2px;margin-left:6px}',
P+'.uc-tag.g{background:#e7f6ec;color:#05944f}',
P+'.uc-tag.p{background:#ececec;color:#333}',
P+'.uc-search{position:absolute;inset:0;background:#fff;z-index:20;padding:50px 0 0;animation:ucFade .2s}',
P+'@keyframes ucFade{from{opacity:0}to{opacity:1}}',
P+'.uc-top{display:flex;align-items:center;gap:10px;padding:0 16px 10px}',
P+'.uc-back{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:22px;flex:none;background:#fff}',
P+'.uc-fields{display:flex;gap:12px;padding:4px 16px 14px;border-bottom:8px solid #f3f3f3}',
P+'.uc-rail{display:flex;flex-direction:column;align-items:center;padding-top:16px}',
P+'.uc-rail i{width:7px;height:7px;border-radius:50%;background:#000;display:block}',
P+'.uc-rail i.sq{border-radius:0}',
P+'.uc-rail span{width:1.5px;height:34px;background:#000;display:block;margin:3px 0}',
P+'.uc-fields .ins{flex:1;display:flex;flex-direction:column;gap:8px}',
P+'.uc-in{height:40px;background:#eee;border-radius:6px;padding:0 12px;display:flex;align-items:center;font-size:15px;color:#555}',
P+'.uc-in input{all:unset;width:100%;font-size:15px;color:#000;caret-color:#276ef1}',
P+'.uc-list{padding:0 18px}',
P+'.uc-card{position:absolute;inset:0;z-index:5}',
P+'.uc-prod{display:flex;align-items:center;gap:12px;padding:9px 10px;border-radius:10px;border:2px solid transparent;cursor:pointer;margin:0 -8px 4px;transition:background .15s,border-color .15s}',
P+'.uc-prod.sel{border-color:#000;background:#fff}',
P+'.uc-prod:hover{background:#f6f6f6}',
P+'.uc-prod .ico{width:64px;height:44px;flex:none;display:flex;align-items:center;justify-content:center}',
P+'.uc-prod .mid{flex:1;min-width:0}',
P+'.uc-prod .mid b{font-size:17px;font-weight:700}',
P+'.uc-prod .mid small{display:block;font-size:13px;color:#545454;margin-top:2px}',
P+'.uc-prod .mid em{display:block;font-style:normal;font-size:12px;color:#6b6b6b;margin-top:2px}',
P+'.uc-prod .pr{font-size:16.5px;font-weight:700;text-align:right}',
P+'.uc-prod .pr s{display:block;font-size:12px;color:#8a8a8a;font-weight:500;text-decoration:none}',
P+'.uc-prod .mid small,'+P+'.uc-prod .mid em{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
P+'.uc-pay{display:flex;align-items:center;gap:10px;padding:12px 2px;border-top:1px solid #eee;font-size:14.5px;font-weight:600;margin-top:4px}',
P+'.uc-pay .cc{width:30px;height:20px;border-radius:3px;background:linear-gradient(135deg,#1a1f71,#3b49c4)}',
P+'.uc-btn{display:block;width:100%;height:54px;border:0;border-radius:8px;background:#000;color:#fff;font:600 18px "Helvetica Neue",Helvetica,Arial,sans-serif;cursor:pointer;transition:transform .1s}',
P+'.uc-btn:active{transform:scale(.98)}',
P+'.uc-btn.light{background:#eee;color:#000;height:46px;font-size:15.5px}',
P+'.uc-btn:disabled{background:#555;cursor:default}',
P+'.uc-pulse{animation:ucPulse 1.6s ease-in-out infinite}',
P+'@keyframes ucPulse{0%,100%{box-shadow:0 0 0 0 rgba(39,110,241,.55)}50%{box-shadow:0 0 0 7px rgba(39,110,241,0)}}',
P+'.uc-tl{position:relative;margin:4px 0 10px;padding-left:4px}',
P+'.uc-step{display:flex;gap:12px;position:relative;padding-bottom:9px}',
P+'.uc-step:not(:last-child)::after{content:"";position:absolute;left:15px;top:32px;bottom:2px;width:2px;background:#e2e2e2}',
P+'.uc-step .dot{width:32px;height:32px;border-radius:50%;background:#f1f1f1;display:flex;align-items:center;justify-content:center;flex:none;z-index:1}',
P+'.uc-step.fly .dot{background:#000}',
P+'.uc-step .tx{flex:1;min-width:0}',
P+'.uc-step .tx b{font-size:15px;display:block}',
P+'.uc-step .tx small{font-size:12.5px;color:#6b6b6b;display:block;line-height:1.35;margin-top:1px}',
P+'.uc-step .tm{font-size:12.5px;font-weight:600;color:#333;white-space:nowrap;padding-top:2px}',
P+'.uc-seat{display:flex;align-items:center;justify-content:space-between;background:#f6f6f6;border-radius:10px;padding:10px 12px;margin-bottom:10px}',
P+'.uc-seat .st{display:flex;align-items:center;gap:12px;font-weight:700;font-size:16px}',
P+'.uc-seat button{width:32px;height:32px;border-radius:50%;border:0;background:#fff;font-size:18px;font-weight:700;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.15)}',
P+'.uc-seat button:disabled{opacity:.35;cursor:default}',
P+'.uc-fine{font-size:11.5px;color:#757575;line-height:1.4;margin:0 0 10px}',
P+'.uc-trip .hd{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}',
P+'.uc-trip .hd b{font-size:19px;font-weight:700;line-height:1.2;display:block}',
P+'.uc-trip .hd small{font-size:13px;color:#545454;display:block;margin-top:3px}',
P+'.uc-eta{background:#000;color:#fff;border-radius:8px;padding:6px 10px;text-align:center;min-width:64px;flex:none}',
P+'.uc-eta b{font-size:20px!important;line-height:1!important}',
P+'.uc-eta span{font-size:10.5px;color:#cfcfcf;display:block;margin-top:2px}',
P+'.uc-legs{display:flex;gap:4px;margin:14px 0 6px}',
P+'.uc-legs div{flex:1;height:4px;border-radius:2px;background:#e6e6e6;overflow:hidden}',
P+'.uc-legs div i{display:block;height:100%;width:0;background:#000}',
P+'.uc-legl{display:flex;justify-content:space-between;font-size:10.5px;color:#8a8a8a;margin-bottom:12px;font-weight:600}',
P+'.uc-legl span.on{color:#000}',
P+'.uc-info{display:flex;align-items:center;gap:12px;padding:12px 0;border-top:1px solid #eee;min-height:66px}',
P+'.uc-info .av{width:42px;height:42px;border-radius:50%;background:#e4e4e4;display:flex;align-items:center;justify-content:center;font-weight:700;flex:none}',
P+'.uc-info .tx{flex:1;font-size:13px;color:#545454;line-height:1.35}',
P+'.uc-info .tx b{color:#000;font-size:15px;display:block}',
P+'.uc-plate{font-weight:700;font-size:13px;background:#f1f1f1;border-radius:4px;padding:4px 7px;color:#000;flex:none}',
P+'.uc-done{text-align:center;padding:4px 0 6px}',
P+'.uc-cmp{display:flex;gap:8px;margin:10px 0 14px}',
P+'.uc-cmp div{flex:1;border-radius:10px;background:#f4f4f4;padding:10px;text-align:left}',
P+'.uc-cmp div.win{background:#000;color:#fff}',
P+'.uc-cmp b{font-size:22px;display:block}',
P+'.uc-cmp small{font-size:11.5px;opacity:.75}',
P+'.uc-toast{position:absolute;left:50%;top:58px;transform:translateX(-50%);background:#000;color:#fff;font-size:13px;font-weight:600;padding:8px 14px;border-radius:999px;z-index:30;white-space:nowrap;box-shadow:0 4px 14px rgba(0,0,0,.25);animation:ucFade .25s}',
P+'.uc-spin{width:22px;height:22px;border:3px solid #ddd;border-top-color:#000;border-radius:50%;display:inline-block;animation:ucRot .8s linear infinite;vertical-align:middle}',
P+'@keyframes ucRot{to{transform:rotate(360deg)}}',
P+'.uc-reset{position:absolute;right:12px;top:48px;z-index:35;background:#fff;border:0;border-radius:999px;padding:6px 11px;font:600 12px system-ui,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.18);cursor:pointer}'
].join('\n');

/* ---------- SVG bits ---------- */
function carSide(c){c=c||'#1d1d1d';return '<svg width="62" height="30" viewBox="0 0 62 30"><path d="M5 20c0-4 2-6 6-7l8-6c2-1.5 4-2 7-2h12c3 0 5 .8 7 2.5l6 5.5c4 .5 7 2.5 7 6v3c0 1-1 2-2 2H7c-1 0-2-1-2-2z" fill="'+c+'"/><path d="M21 8.5c1.4-1 2.8-1.4 5-1.4h5v6H15z M34 7.1h4c2.2 0 3.6.6 5 1.9l4.5 4H34z" fill="#bfd2e6"/><circle cx="16" cy="23" r="5" fill="#111"/><circle cx="16" cy="23" r="2.2" fill="#aaa"/><circle cx="47" cy="23" r="5" fill="#111"/><circle cx="47" cy="23" r="2.2" fill="#aaa"/></svg>';}
function heliSide(){return '<svg width="64" height="40" viewBox="0 0 64 40"><rect x="6" y="5" width="50" height="2.4" rx="1.2" fill="#222"/><rect x="29" y="6" width="3" height="6" fill="#222"/><path d="M14 22c0-6 6-10 14-10h8c6 0 10 4 10 9v3c0 3-2 5-5 5H20c-4 0-6-3-6-7z" fill="#111"/><path d="M36 14h1c3.5 0 6.5 3 7 7h-8z" fill="#bfd2e6"/><path d="M14 21L2 18v-5l3 0 4 5 6 1z" fill="#111"/><rect x="18" y="31" width="26" height="2.2" rx="1" fill="#222"/><rect x="22" y="28" width="2" height="4" fill="#222"/><rect x="38" y="28" width="2" height="4" fill="#222"/></svg>';}
function ico(n,c){c=c||'#000';var m={
 clock:'<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="'+c+'" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="'+c+'" stroke-width="2"/></svg>',
 pin:'<svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" fill="'+c+'"/><circle cx="12" cy="9" r="2.6" fill="#fff"/></svg>',
 plane:'<svg width="18" height="18" viewBox="0 0 24 24"><path d="M21 15.5v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0v5l-8 5v2l8-2.5v5.5l-2 1.5V22l3.5-1 3.5 1v-1.5l-2-1.5V13z" fill="'+c+'"/></svg>',
 star:'<svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" fill="'+c+'"/></svg>',
 car:'<svg width="18" height="18" viewBox="0 0 24 24"><path d="M5 11l1.6-4.4A2 2 0 0 1 8.5 5h7a2 2 0 0 1 1.9 1.6L19 11v7h-2.5v-2h-9v2H5z" fill="'+c+'"/><circle cx="8" cy="13.5" r="1.3" fill="#fff"/><circle cx="16" cy="13.5" r="1.3" fill="#fff"/></svg>',
 heli:'<svg width="18" height="18" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="1.8" rx=".9" fill="'+c+'"/><rect x="11" y="4" width="1.8" height="3" fill="'+c+'"/><path d="M6 12a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" fill="'+c+'"/><path d="M6 11L1 9.5V7" stroke="'+c+'" stroke-width="1.8" fill="none"/><rect x="7" y="18.5" width="11" height="1.6" rx=".8" fill="'+c+'"/></svg>',
 check:'<svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5" fill="none" stroke="'+c+'" stroke-width="2.6"/></svg>',
 flag:'<svg width="18" height="18" viewBox="0 0 24 24"><path d="M5 21V3h13l-2.5 4.5L18 12H7v9z" fill="'+c+'"/></svg>',
 person:'<svg width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4.5" fill="'+c+'"/><path d="M3.5 22c0-5 3.8-8 8.5-8s8.5 3 8.5 8z" fill="'+c+'"/></svg>',
 search:'<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="'+c+'" stroke-width="2.4"/><path d="M15.5 15.5L21 21" stroke="'+c+'" stroke-width="2.4"/></svg>'
};return m[n]||'';}

/* Stylised map of Lower Manhattan / Brooklyn / Queens / JFK in a 375x470 coordinate space */
var PICK=[108,262], PAD_M=[118,293], PAD_J=[318,320], T4=[346,300];
var R_LEG1='M108 262 L104 276 L112 284 L118 293';
var R_HELI='M118 293 C 150 352, 228 372, 318 320';
var R_LEG2='M318 320 L330 312 L338 305 L346 300';
var R_X='M108 262 L132 252 L152 250 L184 246 L206 268 L226 286 L252 296 L282 290 L312 292 L330 296 L346 300';
function mapSVG(vb, extra){
  return '<svg viewBox="'+vb+'" preserveAspectRatio="xMidYMid meet">'+
  '<defs><pattern id="ucGrid" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(29)"><path d="M0 0H9M0 0V9" stroke="#fff" stroke-width=".7" opacity=".85"/></pattern></defs>'+
  '<rect x="-200" y="-200" width="800" height="900" fill="#cfdde8"/>'+
  // New Jersey
  '<path d="M-200 -200 L74 -200 L70 40 L62 130 L50 230 L30 300 L-200 330Z" fill="#ececea"/>'+
  // Brooklyn + Queens
  '<path d="M178 -200 L600 -200 L600 470 L380 452 L330 444 L280 440 L230 426 L180 410 L146 392 L136 360 L146 318 L160 270 L168 210 L172 120Z" fill="#ececea"/>'+
  '<path d="M178 -200 L600 -200 L600 470 L380 452 L330 444 L280 440 L230 426 L180 410 L146 392 L136 360 L146 318 L160 270 L168 210 L172 120Z" fill="url(#ucGrid)"/>'+
  // Jamaica Bay
  '<path d="M222 352 C 240 336, 280 330, 302 340 C 320 348, 318 372, 296 380 C 268 390, 236 386, 224 374Z" fill="#cfdde8"/>'+
  '<path d="M190 418 C 260 404, 330 410, 420 420 L420 430 C 330 424, 250 420, 192 428Z" fill="#cfdde8"/>'+
  // parks
  '<path d="M206 300 l18 -6 l10 14 l-16 8z" fill="#d8e8cf"/><path d="M262 214 l26 -4 l4 16 l-26 4z" fill="#d8e8cf"/>'+
  // Manhattan
  '<path d="M118 -200 L170 -200 L166 40 L156 140 L148 210 L138 252 L126 284 L112 302 L96 306 L86 296 L88 270 L96 220 L104 140 L110 40Z" fill="#ececea"/>'+
  '<path d="M118 -200 L170 -200 L166 40 L156 140 L148 210 L138 252 L126 284 L112 302 L96 306 L86 296 L88 270 L96 220 L104 140 L110 40Z" fill="url(#ucGrid)" opacity=".9"/>'+
  '<path d="M114 60 l22 2 l-4 60 l-22 -2z" fill="#d8e8cf"/>'+
  // Governors Island
  '<path d="M104 318 l14 -4 l6 10 l-14 6z" fill="#e4e8df"/>'+
  // JFK airport
  '<path d="M296 268 L372 262 L380 330 L332 344 L300 330Z" fill="#e2e2e6"/>'+
  '<g stroke="#c9c9cf" stroke-width="3.2" stroke-linecap="round"><path d="M304 284 L360 330"/><path d="M314 276 L370 300"/><path d="M330 268 L320 334"/></g>'+
  '<rect x="338" y="292" width="16" height="10" rx="2" fill="#cfcfd6"/>'+
  // highways
  '<g fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M138 252 L184 246 L206 268 L226 286 L252 296 L282 290 L312 292 L346 300"/><path d="M184 246 L200 180 L240 120 L300 60"/><path d="M226 286 L232 340 L200 400"/><path d="M252 296 L300 230 L360 200"/><path d="M98 300 L104 200 L114 80"/></g>'+
  // bridges
  '<g stroke="#9aa3ad" stroke-width="1.6"><path d="M134 256 L166 246"/><path d="M140 236 L168 228"/></g>'+
  // labels
  '<g font-family="Helvetica Neue,Arial,sans-serif" font-weight="700" fill="#8f939b" letter-spacing="1.2" font-size="8.5"><text x="118" y="190" transform="rotate(-78 118 190)">MANHATTAN</text><text x="196" y="330">BROOKLYN</text><text x="262" y="150">QUEENS</text><text x="6" y="160" font-size="7.5">NEW JERSEY</text></g>'+
  '<g font-family="Helvetica Neue,Arial,sans-serif" font-style="italic" fill="#7f97ab" font-size="7"><text x="152" y="176" transform="rotate(-80 152 176)">East River</text><text x="36" y="350">Upper Bay</text><text x="236" y="364">Jamaica Bay</text></g>'+
  '<g font-family="Helvetica Neue,Arial,sans-serif" font-weight="700" font-size="8" fill="#555"><text x="330" y="258">JFK</text></g>'+
  (extra||'')+
  '</svg>';
}
function pinDot(x,y,sq){return sq?'<rect x="'+(x-4.5)+'" y="'+(y-4.5)+'" width="9" height="9" fill="#000"/><rect x="'+(x-1.8)+'" y="'+(y-1.8)+'" width="3.6" height="3.6" fill="#fff"/>':'<circle cx="'+x+'" cy="'+y+'" r="5" fill="#000"/><circle cx="'+x+'" cy="'+y+'" r="2" fill="#fff"/>';}
function padMark(x,y){return '<circle cx="'+x+'" cy="'+y+'" r="5.2" fill="#fff" stroke="#000" stroke-width="1.2"/><text x="'+x+'" y="'+(y+2.6)+'" text-anchor="middle" font-size="6.5" font-weight="800" font-family="Arial">H</text>';}

/* ---------- data ---------- */
var PRODUCTS={
 copter:{name:'Copter',seats:5,price:205,old:'',time:'5:27 PM',dur:'31 min',note:'Car + 8-min flight + car',tag:'<span class="uc-tag">NEW</span>'},
 uberx:{name:'UberX',seats:4,price:71.48,time:'6:21 PM',dur:'85 min · traffic',note:'Affordable, everyday rides'},
 black:{name:'Black',seats:4,price:118.2,time:'6:19 PM',dur:'83 min · traffic',note:'Premium rides in luxury cars'}
};
var DESTS=[
 {n:'JFK Airport, Terminal 4',a:'Jamaica, NY 11430',i:'plane'},
 {n:'JFK Airport, Terminal 5',a:'Jamaica, NY 11430',i:'plane'},
 {n:'JFK Airport, Terminal 8',a:'Jamaica, NY 11430',i:'plane'},
 {n:'Downtown Manhattan Heliport',a:'Pier 6, East River, New York, NY',i:'pin'},
 {n:'Brooklyn Bridge Park',a:'Brooklyn, NY',i:'pin'},
 {n:'Sample Office Tower',a:'200 Example St, New York, NY',i:'pin'}
];
function money(v){return '$'+v.toFixed(2);}
function clock(min){ // minutes after 4:56 PM
  var t=16*60+56+Math.round(min),h=Math.floor(t/60)%24,m=t%60;return ((h+11)%12+1)+':'+(m<10?'0':'')+m+' PM';}

window.DEMOS[ID]={
 frame:'phone',
 title:'Uber Copter — Lower Manhattan to JFK',
 caption:'Tap “Where to?”, pick a JFK terminal, compare Copter vs UberX, then Request and watch the car → helicopter → car trip play out.',
 sources:[
  'https://techcrunch.com/2019/06/06/uber-copter-offers-on-demand-jfk-helicopter-service-for-top-tier-users/',
  'https://www.nbcnews.com/business/consumer/uber-expands-helicopter-service-manhattan-jfk-airport-n1062086',
  'https://abcnews.com/amp/Business/uber-copter-landed-rideshare-expands-skyward-jfk/story?id=64238990',
  'https://www.independent.co.uk/travel/news-and-advice/uber-helicopter-service-manhattan-jfk-uber-copter-a8946576.html',
  'https://abc7ny.com/post/uber-launches-helicopter-service-from-manhattan-to-jfk/5386339/'
 ],
 mount:function(root){
  var st=document.createElement('style');st.textContent=CSS;root.appendChild(st);
  var app=document.createElement('div');app.className='uc-app';root.appendChild(app);
  var timers=[],iv=null;
  var S={screen:'home',product:'uberx',seats:1,dest:DESTS[0].n};
  function T(f,ms){var t=setTimeout(f,ms);timers.push(t);return t;}
  function clearAll(){timers.forEach(clearTimeout);timers=[];if(iv){clearInterval(iv);iv=null;}}
  function q(s){return app.querySelector(s);}
  function qa(s){return Array.prototype.slice.call(app.querySelectorAll(s));}
  function status(dark){return '<div class="uc-status" style="color:'+(dark?'#fff':'#000')+'"><span>4:52</span><span class="ic"><svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="7" width="3" height="4" rx="1" fill="currentColor"/><rect x="4.5" y="5" width="3" height="6" rx="1" fill="currentColor"/><rect x="9" y="2.5" width="3" height="8.5" rx="1" fill="currentColor"/><rect x="13.5" y="0" width="3" height="11" rx="1" fill="currentColor"/></svg><svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="currentColor" opacity=".45"/><rect x="2" y="2" width="15" height="8" rx="1.8" fill="currentColor"/><rect x="23" y="4" width="1.6" height="4" rx=".8" fill="currentColor" opacity=".45"/></svg></span></div>';}
  function go(s){S.screen=s;render();}
  function render(){clearAll();app.innerHTML='';SCREENS[S.screen]();}
  function toast(msg,ms){var t=document.createElement('div');t.className='uc-toast';t.textContent=msg;app.appendChild(t);T(function(){t.remove();},ms||1800);}
  function resetBtn(){var b=document.createElement('button');b.className='uc-reset';b.textContent='↺ Replay';b.onclick=function(){S.product='uberx';S.seats=1;go('home');};app.appendChild(b);}

  var SCREENS={
  home:function(){
    app.innerHTML=status()+
    '<div class="uc-map" style="height:520px">'+mapSVG('10 150 200 300', pinDot(PICK[0],PICK[1])+'<circle cx="'+PICK[0]+'" cy="'+PICK[1]+'" r="12" fill="#276ef1" opacity=".15"/>'+padMark(PAD_M[0],PAD_M[1]))+'</div>'+
    '<div class="uc-sheet" style="height:372px"><div class="uc-grab"></div>'+
      '<div class="uc-h1">Good afternoon</div>'+
      '<div class="uc-where uc-pulse" data-a="where"><span style="display:flex;gap:10px;align-items:center">'+ico('search','#222')+'Where to?</span><span class="uc-now">'+ico('clock')+'Now ▾</span></div>'+
      '<div class="uc-row" data-a="jfk"><div class="bub">'+ico('plane')+'</div><div><b>JFK Airport</b><small>Queens, NY 11430</small></div></div>'+
      '<div class="uc-promo" data-a="promo"><div style="flex:1"><b>Uber Copter <span class="uc-tag" style="background:#fff;color:#000">NEW</span></b><small>Beat rush hour: car + 8-minute flight from Lower Manhattan to JFK. For Platinum &amp; Diamond Rewards members.</small></div><div style="transform:scaleX(-1);filter:invert(1)">'+heliSide()+'</div></div>'+
    '</div>';
    q('[data-a=where]').onclick=function(){go('search');};
    q('[data-a=jfk]').onclick=function(){S.dest=DESTS[0].n;go('select');};
    q('[data-a=promo]').onclick=function(){S.dest=DESTS[0].n;S.product='copter';go('select');};
  },
  search:function(){
    app.innerHTML=status()+'<div class="uc-search">'+
      '<div class="uc-top"><div class="uc-back" data-a="back">←</div><div style="flex:1;text-align:center;font-weight:700;font-size:17px;margin-right:46px">Plan your ride</div></div>'+
      '<div class="uc-fields"><div class="uc-rail"><i></i><span></span><i class="sq"></i></div><div class="ins"><div class="uc-in">Wall St &amp; Water St</div><div class="uc-in" style="background:#f1f1f1;outline:2px solid #000"><input placeholder="Where to?" aria-label="Where to?"></div></div></div>'+
      '<div class="uc-list"></div></div>';
    var inp=q('input'),list=q('.uc-list'),typed=false;
    function fill(){var v=inp.value.trim().toLowerCase();var items=DESTS.filter(function(d){return !v||d.n.toLowerCase().indexOf(v)>=0||d.a.toLowerCase().indexOf(v)>=0;});
      if(!items.length)items=[{n:inp.value+' (sample)',a:'New York, NY',i:'pin'}];
      list.innerHTML=items.map(function(d,i){return '<div class="uc-row'+(i===0&&v?' uc-hint':'')+'" data-i="'+i+'"><div class="bub">'+ico(d.i)+'</div><div><b>'+d.n+'</b><small>'+d.a+'</small></div></div>';}).join('');
      qa('.uc-row').forEach(function(r,i){r.onclick=function(){S.dest=items[i].n;go('select');};});
      var h=q('.uc-hint .bub');if(h)h.classList.add('uc-pulse');}
    inp.oninput=function(){typed=true;fill();};
    inp.onkeydown=function(e){if(e.key==='Enter'){var r=q('.uc-row');if(r)r.click();}};
    fill();T(function(){inp.focus({preventScroll:true});},50);
    var word='JFK';word.split('').forEach(function(ch,i){T(function(){if(typed)return;inp.value+=ch;fill();},500+i*220);});
    q('[data-a=back]').onclick=function(){go('home');};
  },
  select:function(){
    var dest=S.dest.replace('JFK Airport, ','JFK ');
    var extra='<path d="'+R_X+'" fill="none" stroke="'+(S.product==='copter'?'#9a9a9a':'#000')+'" stroke-width="3" stroke-linejoin="round" class="rx"/>'+
      '<path d="'+R_LEG1+'" fill="none" stroke="#000" stroke-width="3" class="rc"/><path d="'+R_HELI+'" fill="none" stroke="#276ef1" stroke-width="2.6" stroke-dasharray="5 4" class="rc"/><path d="'+R_LEG2+'" fill="none" stroke="#000" stroke-width="3" class="rc"/>'+
      padMark(PAD_M[0],PAD_M[1])+padMark(PAD_J[0],PAD_J[1])+pinDot(PICK[0],PICK[1])+pinDot(T4[0],T4[1],1)+
      '<g font-family="Helvetica Neue,Arial" font-size="7.5" font-weight="700"><rect x="296" y="276" width="62" height="13" rx="2" fill="#000"/><text x="327" y="285.5" fill="#fff" text-anchor="middle">'+dest.replace('JFK ','')+'</text></g>';
    app.innerHTML=status()+'<div class="uc-map" style="height:340px">'+mapSVG('50 205 330 230',extra)+'</div>'+
     '<div class="uc-back" data-a="back" style="position:absolute;left:14px;top:50px;z-index:12;box-shadow:0 2px 8px rgba(0,0,0,.2)">←</div>'+
     '<div class="uc-sheet" style="height:440px;padding-top:8px"><div class="uc-grab"></div>'+
     '<div style="text-align:center;font-size:13px;color:#545454;margin:-4px 0 8px">To <b style="color:#000">'+S.dest+'</b></div>'+
     '<div class="plist"></div>'+
     '<div class="uc-pay"><span class="cc"></span>Visa •••• 4242<span style="margin-left:auto;font-size:12px;color:#6b6b6b;font-weight:500">Uber Rewards · Platinum ›</span></div>'+
     '<button class="uc-btn" data-a="go"></button></div>';
    function paint(){
      q('.plist').innerHTML=['copter','uberx','black'].map(function(k){var p=PRODUCTS[k];
        return '<div class="uc-prod'+(S.product===k?' sel':'')+(k==='copter'&&S.product!=='copter'?' uc-pulse':'')+'" data-k="'+k+'"><div class="ico">'+(k==='copter'?heliSide():carSide(k==='black'?'#111':'#3a3a3a'))+'</div>'+
        '<div class="mid"><b>'+p.name+'</b> <span style="font-size:12px;color:#545454">'+ico('person','#545454')+' '+p.seats+'</span>'+(p.tag||'')+
        '<small>'+p.time+' · '+p.dur+(k==='copter'?' <span class="uc-tag g">FASTEST</span>':'')+'</small><em>'+p.note+'</em></div>'+
        '<div class="pr">'+(k==='copter'?'$205.00<s>per seat</s>':money(p.price))+'</div></div>';}).join('');
      qa('.uc-prod').forEach(function(el){el.onclick=function(){var k=el.dataset.k;if(S.product===k){choose();return;}S.product=k;paint();};});
      var b=q('[data-a=go]');b.textContent=S.product==='copter'?'Choose Copter':'Choose '+PRODUCTS[S.product].name;
      qa('.rc').forEach(function(p){p.style.opacity=S.product==='copter'?1:.25;});
      var rx=q('.rx');rx.setAttribute('stroke',S.product==='copter'?'#a5a5a5':'#000');rx.style.opacity=S.product==='copter'?.6:1;
    }
    function choose(){if(S.product==='copter')go('itin');else go('confirm');}
    paint();q('[data-a=go]').onclick=choose;q('[data-a=back]').onclick=function(){go('search');};
    if(S.product!=='copter')T(function(){toast('Heavy traffic to JFK · try Copter ↓',2600);},700);
  },
  itin:function(){
    app.innerHTML=status()+'<div class="uc-map" style="height:240px">'+mapSVG('50 205 330 230','<path d="'+R_LEG1+'" fill="none" stroke="#000" stroke-width="3"/><path d="'+R_HELI+'" fill="none" stroke="#276ef1" stroke-width="2.6" stroke-dasharray="5 4"/><path d="'+R_LEG2+'" fill="none" stroke="#000" stroke-width="3"/>'+padMark(PAD_M[0],PAD_M[1])+padMark(PAD_J[0],PAD_J[1])+pinDot(PICK[0],PICK[1])+pinDot(T4[0],T4[1],1))+'</div>'+
    '<div class="uc-back" data-a="back" style="position:absolute;left:14px;top:50px;z-index:12;box-shadow:0 2px 8px rgba(0,0,0,.2)">←</div>'+
    '<div class="uc-sheet" style="height:592px;padding-top:8px"><div class="uc-grab"></div>'+
    '<div style="display:flex;justify-content:space-between;align-items:baseline"><div class="uc-h1" style="margin:0 0 2px;font-size:21px">Your Copter trip</div><span class="uc-tag p">PLATINUM</span></div>'+
    '<div style="font-size:13px;color:#545454;margin-bottom:12px">Door-to-door in ~31 min · '+S.dest+'</div>'+
    '<div class="uc-tl">'+
     step('car','Car to the heliport','Pickup at Wall St &amp; Water St · included in fare',clock(0))+
     step('check','Check in at the heliport','Downtown Manhattan Heliport, Pier 6 · bag weigh-in &amp; safety briefing',clock(9))+
     step('heli','Fly to JFK · ~8 min','Over the harbor and Brooklyn coast · 1 carry-on + 1 personal item',clock(15),'fly')+
     step('car','Car to your terminal','Driver meets you at the JFK helipad',clock(23))+
     step('flag','Arrive at '+S.dest.replace('JFK Airport, ',''),'vs. ~85 min by car in rush hour',clock(31))+
    '</div>'+
    '<div class="uc-seat"><div><div style="font-weight:700;font-size:15px">Seats</div><div style="font-size:12px;color:#6b6b6b" class="pps">$205.00 per seat</div></div><div class="st"><button data-a="minus">−</button><span class="n">1</span><button data-a="plus">+</button></div></div>'+
    '<p class="uc-fine">Weekday afternoons · book on demand or up to 5 days ahead · $200–225 typical, varies with demand. Sample itinerary.</p>'+
    '<button class="uc-btn uc-pulse" data-a="req">Request Copter · $205.00</button></div>';
    function seats(d){S.seats=Math.max(1,Math.min(5,S.seats+d));q('.n').textContent=S.seats;q('[data-a=minus]').disabled=S.seats<=1;q('[data-a=plus]').disabled=S.seats>=5;q('[data-a=req]').textContent='Request Copter · '+money(205*S.seats);}
    q('[data-a=minus]').onclick=function(){seats(-1);};q('[data-a=plus]').onclick=function(){seats(1);};seats(0);
    q('[data-a=back]').onclick=function(){go('select');};
    q('[data-a=req]').onclick=function(){go('confirm');};
  },
  confirm:function(){
    var c=S.product==='copter';
    app.innerHTML=status()+'<div class="uc-map" style="height:520px">'+mapSVG('10 150 200 300',pinDot(PICK[0],PICK[1]))+'</div>'+
    '<div class="uc-sheet" style="height:250px;text-align:center"><div class="uc-grab"></div><div style="margin:22px 0 14px"><span class="uc-spin"></span></div>'+
    '<div style="font-size:19px;font-weight:700">'+(c?'Reserving '+S.seats+' seat'+(S.seats>1?'s':'')+' on the next flight…':'Connecting you to a driver…')+'</div>'+
    '<div style="font-size:13px;color:#6b6b6b;margin-top:6px">'+(c?'Matching your car, flight and terminal ride':'Looking for nearby '+PRODUCTS[S.product].name+' drivers')+'</div></div>';
    T(function(){go(c?'tripC':'tripX');},1500);
  },
  tripC:function(){tripScreen(true);},
  tripX:function(){tripScreen(false);}
  };
  function step(i,t,s,tm,cls){return '<div class="uc-step '+(cls||'')+'"><div class="dot">'+ico(i,cls?'#fff':'#000')+'</div><div class="tx"><b>'+t+'</b><small>'+s+'</small></div><div class="tm">'+tm+'</div></div>';}

  function tripScreen(copter){
    var routes=copter?
      '<path d="'+R_LEG1+'" fill="none" stroke="#000" stroke-width="3" id="ucL0"/><path d="'+R_HELI+'" fill="none" stroke="#276ef1" stroke-width="2.4" stroke-dasharray="5 4" id="ucL1"/><path d="'+R_LEG2+'" fill="none" stroke="#000" stroke-width="3" id="ucL2"/>'+padMark(PAD_M[0],PAD_M[1])+padMark(PAD_J[0],PAD_J[1])
      :'<path d="'+R_X+'" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round" id="ucL0"/><path d="M184 246 L206 268 L226 286 L252 296" fill="none" stroke="#e11900" stroke-width="3.2" stroke-linecap="round"/><path d="M282 290 L312 292" fill="none" stroke="#f6a623" stroke-width="3.2" stroke-linecap="round"/>';
    var markers='<g id="ucCar"><rect x="-5" y="-3" width="10" height="6" rx="1.8" fill="#000" stroke="#fff" stroke-width="1"/></g>'+
      '<g id="ucHeli" style="display:none"><ellipse cx="0" cy="0" rx="5" ry="3.2" fill="#000" stroke="#fff" stroke-width=".8"/><rect x="-11" y="-.7" width="7" height="1.4" fill="#000"/><g id="ucRotor"><rect x="-9" y="-.6" width="18" height="1.2" fill="#276ef1"/><rect x="-.6" y="-9" width="1.2" height="18" fill="#276ef1"/></g></g>';
    app.innerHTML=status()+'<div class="uc-map" style="height:500px">'+mapSVG('64 170 311 300',routes+pinDot(PICK[0],PICK[1])+pinDot(T4[0],T4[1],1)+markers)+'</div>'+
    '<div class="uc-sheet uc-trip" style="height:280px;padding-top:8px"><div class="uc-grab"></div>'+
     '<div class="hd"><div><b class="ttl">Driver is arriving</b><small class="sub"></small></div><div class="uc-eta"><b class="eta">—</b><span>min left</span></div></div>'+
     '<div class="uc-legs">'+(copter?'<div><i></i></div><div><i></i></div><div><i></i></div><div><i></i></div>':'<div><i></i></div>')+'</div>'+
     '<div class="uc-legl">'+(copter?'<span>Car</span><span>Check-in</span><span>Flight</span><span>Car</span>':'<span>UberX to '+S.dest.replace('JFK Airport, ','JFK ')+'</span><span>Arrive '+clock(85)+'</span>')+'</div>'+
     '<div class="uc-info"></div><div class="foot"></div></div>';
    resetBtn();
    var car=q('#ucCar'),heli=q('#ucHeli'),rotor=q('#ucRotor');
    var paths=[q('#ucL0'),q('#ucL1'),q('#ucL2')];
    // phases: [label, sub, realSeconds, simMinutes, kind, path index, leg bar index]
    var PH=copter?[
      ['Driver is arriving','Black Camry · meet at Wall St &amp; Water St',2.2,3,'wait',-1,0],
      ['Heading to the heliport','Downtown Manhattan Heliport · Pier 6',3.2,6,'car',0,0],
      ['Checking in','Bag weigh-in · safety briefing · board',3.0,6,'check',-1,1],
      ['In flight to JFK','Cruising over the harbor · ~1,500 ft',6.5,8,'heli',1,2],
      ['Car to your terminal','Driver waiting at the JFK helipad',2.6,8,'car',2,3]
    ]:[
      ['Driver is arriving','Silver Prius · meet at Wall St &amp; Water St',2.2,4,'wait',-1,0],
      ['On the way to JFK','Heavy traffic on the BQE &amp; Belt Pkwy',11,81,'car',0,0]
    ];
    var totalSim=PH.reduce(function(a,p){return a+p[3];},0);
    var info={
     wait:'<div class="av">MJ</div><div class="tx"><b>Morgan J. · 4.9 ★</b>'+(copter?'Car included with your Copter fare':'UberX · Toyota Prius')+'</div><span class="uc-plate">'+(copter?'T 000 SMP':'DEMO 123')+'</span>',
     car:'<div class="av">MJ</div><div class="tx"><b>Morgan J. · 4.9 ★</b>Share your trip status with a friend</div><span class="uc-plate">'+(copter?'T 000 SMP':'DEMO 123')+'</span>',
     check:'<div class="av" style="background:#000">'+ico('check','#fff')+'</div><div class="tx"><b>Show this screen at check-in</b>Seat'+(S.seats>1?'s':'')+' '+(S.seats>1?'2A–'+(1+S.seats)+'A':'2A')+' · 1 carry-on + 1 personal item</div>',
     heli:'<div class="av" style="background:#276ef1">'+ico('heli','#fff')+'</div><div class="tx"><b>Flight UC 104 · sample operator</b>Wheels down at JFK in a few minutes</div>'
    };
    var car2='<div class="av">RK</div><div class="tx"><b>Riley K. · 4.95 ★</b>Taking you to '+S.dest.replace('JFK Airport, ','')+'</div><span class="uc-plate">T 111 SMP</span>';
    var pi=0,t0=Date.now(),simBase=0,lastKind='';
    function place(el,path,f){var L=path.getTotalLength(),a=path.getPointAtLength(Math.max(0,L*f-.5)),b=path.getPointAtLength(Math.min(L,L*f+.5));var p=path.getPointAtLength(L*f);var ang=Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI;el.setAttribute('transform','translate('+p.x.toFixed(1)+' '+p.y.toFixed(1)+') rotate('+ang.toFixed(0)+') scale('+(el.id==='ucHeli'?2.1:1.5)+')');}
    var spin=0;
    function tick(){
      var ph=PH[pi];if(!ph)return;
      var f=Math.min(1,(Date.now()-t0)/(ph[2]*1000));
      if(ph[4]!==lastKind||pi===PH.length-1&&lastKind!=='last'){q('.ttl').textContent=ph[0];q('.sub').innerHTML=ph[1];q('.uc-info').innerHTML=(copter&&pi===4)?car2:info[ph[4]];lastKind=ph[4];}
      qa('.uc-legl span').forEach(function(s,i){s.classList.toggle('on',i===ph[6]);});
      var bars=qa('.uc-legs i');bars.forEach(function(b,i){var w=i<ph[6]?1:i>ph[6]?0:(copter?(ph[6]===0?((pi===0?f*.25:.25+f*.75)):f):(pi===0?f*.05:.05+f*.95));b.style.width=(w*100)+'%';});
      if(ph[4]==='car'){car.style.display='';heli.style.display='none';place(car,paths[ph[5]],f);}
      else if(ph[4]==='heli'){car.style.display='none';heli.style.display='';place(heli,paths[1],f);spin+=47;rotor.setAttribute('transform','rotate('+spin+')');}
      else if(ph[4]==='wait'){place(car,paths[0],0);}
      else if(ph[4]==='check'){car.style.display='none';heli.style.display='';place(heli,paths[1],0);}
      var sim=simBase+ph[3]*f;q('.eta').textContent=Math.max(0,Math.ceil(totalSim-sim));
      if(f>=1){simBase+=ph[3];pi++;t0=Date.now();lastKind='';if(pi>=PH.length)finish();}
    }
    function finish(){clearInterval(iv);iv=null;
      q('.uc-trip').style.height='326px';
      q('.ttl').textContent='You’ve arrived';q('.sub').textContent=S.dest.replace('JFK Airport, ','JFK ')+' · have a great flight!';q('.eta').textContent='0';
      qa('.uc-legs i').forEach(function(b){b.style.width='100%';});
      q('.uc-info').innerHTML='<div class="uc-cmp" style="width:100%;margin:0"><div class="win"><small>Copter'+(copter?' · your trip':'')+'</small><b>31 min</b><small>$'+(205*S.seats)+' · '+S.seats+' seat'+(S.seats>1?'s':'')+'</small></div><div><small>UberX in traffic'+(copter?'':' · your trip')+'</small><b>85 min</b><small>$71.48</small></div></div>';
      q('.foot').innerHTML=copter?'<button class="uc-btn light" data-a="again">↺ Replay the trip</button>':'<button class="uc-btn uc-pulse" data-a="try">Try Copter instead</button>';
      var a=q('[data-a=again]');if(a)a.onclick=function(){S.product='uberx';S.seats=1;go('home');};
      var b=q('[data-a=try]');if(b)b.onclick=function(){S.product='copter';go('select');};
    }
    tick();iv=setInterval(tick,40);
    if(copter)T(function(){toast('Copter booked · '+S.seats+' seat'+(S.seats>1?'s':''));},300);
  }

  render();
  return function cleanup(){clearAll();app.innerHTML='';};
 }
};
})();
