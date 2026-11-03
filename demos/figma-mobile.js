/* Figma mobile app (iOS) — hand-built interactive recreation (no external assets). */
(function(){
window.DEMOS=window.DEMOS||{};
var ID='figma-mobile';
var CSS=`
.demo-figma-mobile{--b:#0D99FF;--tx:#1E1E1E;--mu:#8C8C8C;--ln:#EBEBEB;font-family:-apple-system,'SF Pro Text','Inter',system-ui,sans-serif;background:#fff;color:var(--tx);user-select:none;-webkit-user-select:none}
.demo-figma-mobile button{font-family:inherit;cursor:pointer}
.demo-figma-mobile .sb{position:absolute;left:0;right:0;top:0;height:44px;display:flex;align-items:center;justify-content:space-between;padding:6px 28px 0 34px;font:600 15px/1 inherit;font-family:inherit;z-index:30;pointer-events:none}
.demo-figma-mobile .sb.dk{color:#fff}
.demo-figma-mobile .sb i{display:inline-flex;gap:5px;align-items:center}
.demo-figma-mobile .vw{position:absolute;inset:0;background:#fff;transition:transform .38s cubic-bezier(.3,.8,.3,1),opacity .3s;overflow:hidden}
.demo-figma-mobile .vw.off{transform:translateX(100%)}
.demo-figma-mobile .vw.back{transform:translateX(-28%)}
.demo-figma-mobile .vw.up{transform:translateY(100%)}
.demo-figma-mobile .hd{padding:52px 18px 6px;display:flex;align-items:center;justify-content:space-between}
.demo-figma-mobile .hd h1{font:700 30px/1.1 inherit;font-family:inherit;margin:0;letter-spacing:-.02em}
.demo-figma-mobile .me{width:32px;height:32px;border-radius:50%;background:#9747FF;color:#fff;font:700 13px/32px inherit;font-family:inherit;text-align:center}
.demo-figma-mobile .team{margin:4px 18px 10px;display:inline-flex;align-items:center;gap:6px;font:500 13px inherit;font-family:inherit;color:var(--mu);background:#F5F5F5;border-radius:8px;padding:6px 10px}
.demo-figma-mobile .team b{width:16px;height:16px;border-radius:4px;background:#FF7262;display:inline-block}
.demo-figma-mobile .body{position:absolute;top:0;left:0;right:0;bottom:84px;overflow-y:auto;scrollbar-width:none}
.demo-figma-mobile .body::-webkit-scrollbar{display:none}
.demo-figma-mobile .secth{display:flex;justify-content:space-between;align-items:baseline;padding:10px 18px 8px}
.demo-figma-mobile .secth b{font:700 18px inherit;font-family:inherit}
.demo-figma-mobile .secth span{color:var(--b);font:500 14px inherit;font-family:inherit}
.demo-figma-mobile .hs{display:flex;gap:12px;overflow-x:auto;padding:0 18px 6px;scrollbar-width:none}
.demo-figma-mobile .hs::-webkit-scrollbar{display:none}
.demo-figma-mobile .pc{flex:none;width:132px;border:0;background:none;padding:0;text-align:left;position:relative}
.demo-figma-mobile .pc .th{width:132px;height:176px;border-radius:12px;background:#F0F0F0;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}
.demo-figma-mobile .pc .nm{font:600 13px/1.25 inherit;font-family:inherit;margin-top:8px}
.demo-figma-mobile .pc .mt,.demo-figma-mobile .fr .mt{font:400 12px/1.3 inherit;font-family:inherit;color:var(--mu);margin-top:2px}
.demo-figma-mobile .mini{width:375px;height:760px;transform-origin:0 0;position:absolute;left:0;top:0;pointer-events:none;overflow:hidden;border-radius:30px}
.demo-figma-mobile .fr{display:flex;gap:12px;align-items:center;width:100%;border:0;background:none;padding:9px 18px;text-align:left;position:relative}
.demo-figma-mobile .fr .th{width:84px;height:60px;border-radius:8px;flex:none;overflow:hidden;position:relative;border:1px solid var(--ln)}
.demo-figma-mobile .fr .nm{font:600 14.5px/1.25 inherit;font-family:inherit}
.demo-figma-mobile .fr .kd{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:6px;vertical-align:-1px}
.demo-figma-mobile .tabs{position:absolute;left:0;right:0;bottom:0;height:84px;border-top:1px solid var(--ln);background:rgba(255,255,255,.96);display:flex;padding:8px 8px 0;z-index:5}
.demo-figma-mobile .tab{flex:1;border:0;background:none;display:flex;flex-direction:column;align-items:center;gap:4px;font:500 10.5px inherit;font-family:inherit;color:#B3B3B3;position:relative}
.demo-figma-mobile .tab.on{color:var(--tx)}
.demo-figma-mobile .tab .bd{position:absolute;top:-2px;left:54%;background:#F24822;color:#fff;font:700 10px/16px inherit;font-family:inherit;min-width:16px;height:16px;border-radius:8px;padding:0 4px}
.demo-figma-mobile .srch{margin:6px 18px 8px;background:#F2F2F2;border-radius:10px;height:38px;display:flex;align-items:center;gap:8px;padding:0 12px;color:var(--mu)}
.demo-figma-mobile .srch input{border:0;background:none;outline:none;font:400 15px inherit;font-family:inherit;flex:1;color:var(--tx)}
.demo-figma-mobile .act{display:flex;gap:12px;padding:12px 18px;border:0;background:none;width:100%;text-align:left;border-bottom:1px solid var(--ln);position:relative}
.demo-figma-mobile .act.unread:before{content:'';position:absolute;left:6px;top:26px;width:7px;height:7px;border-radius:50%;background:var(--b)}
.demo-figma-mobile .av{width:34px;height:34px;border-radius:50%;flex:none;color:#fff;font:700 13px/34px inherit;font-family:inherit;text-align:center}
.demo-figma-mobile .act p{margin:0;font:400 14px/1.35 inherit;font-family:inherit}
.demo-figma-mobile .act small{color:var(--mu);font-size:12px}
.demo-figma-mobile .act q{display:block;margin-top:4px;color:#444;font-style:normal;quotes:none}
/* file viewer */
.demo-figma-mobile .fv{background:#E8E8E8}
.demo-figma-mobile .fvtop{position:absolute;left:0;right:0;top:0;padding:46px 8px 8px;background:#fff;border-bottom:1px solid var(--ln);display:flex;align-items:center;gap:4px;z-index:6}
.demo-figma-mobile .ib{width:38px;height:38px;border:0;background:none;border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--tx);position:relative}
.demo-figma-mobile .ib.on{background:#E5F4FF;color:var(--b)}
.demo-figma-mobile .fvt{flex:1;min-width:0;text-align:center}
.demo-figma-mobile .fvt b{display:block;font:600 15px/1.2 inherit;font-family:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.demo-figma-mobile .fvt span{font:500 12px inherit;font-family:inherit;color:var(--mu)}
.demo-figma-mobile .cv{position:absolute;left:0;right:0;top:93px;bottom:112px;overflow:hidden;touch-action:none;cursor:grab}
.demo-figma-mobile .cv.cm{cursor:crosshair}
.demo-figma-mobile .wd{position:absolute;left:0;top:0;transform-origin:0 0;transition:transform .35s cubic-bezier(.3,.8,.3,1)}
.demo-figma-mobile .wd.nt{transition:none}
.demo-figma-mobile .fm{position:absolute;width:375px;height:760px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12)}
.demo-figma-mobile .fm.sel{outline:5px solid var(--b)}
.demo-figma-mobile .fm .fl{position:absolute;top:-38px;left:0;font:500 26px inherit;font-family:inherit;color:#777;white-space:nowrap}
.demo-figma-mobile .fm.sel .fl{color:var(--b)}
.demo-figma-mobile .fm .mini{border-radius:0}
.demo-figma-mobile .pin{position:absolute;width:64px;height:64px;margin:-64px 0 0 0;border-radius:32px 32px 32px 0;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;transform-origin:0 100%;animation:fmpin .3s cubic-bezier(.3,1.6,.5,1)}
.demo-figma-mobile .pin b{width:50px;height:50px;border-radius:50%;color:#fff;font:700 22px/50px inherit;font-family:inherit;text-align:center}
@keyframes fmpin{from{transform:scale(0)}to{transform:scale(1)}}
.demo-figma-mobile .slider{position:absolute;left:0;right:0;bottom:0;height:112px;background:#fff;border-top:1px solid var(--ln);display:flex;gap:10px;align-items:center;padding:0 14px 22px;overflow-x:auto;scrollbar-width:none}
.demo-figma-mobile .slider button{flex:none;width:44px;height:72px;border-radius:6px;border:2px solid transparent;background:#F0F0F0;padding:0;position:relative;overflow:hidden}
.demo-figma-mobile .slider button.on{border-color:var(--b)}
.demo-figma-mobile .slider .lb{font:500 11px inherit;font-family:inherit;color:var(--mu);margin-left:auto;white-space:nowrap;padding-left:6px}
.demo-figma-mobile .play{position:absolute;right:16px;bottom:126px;height:44px;border:0;border-radius:22px;background:var(--tx);color:#fff;font:600 14px inherit;font-family:inherit;padding:0 18px 0 14px;display:flex;align-items:center;gap:8px;box-shadow:0 6px 18px -6px rgba(0,0,0,.5);z-index:4}
.demo-figma-mobile .chint{position:absolute;left:50%;top:104px;transform:translateX(-50%);background:var(--tx);color:#fff;font:500 13px/1 inherit;font-family:inherit;padding:9px 13px;border-radius:18px;z-index:6;white-space:nowrap;display:none}
.demo-figma-mobile .chint.show{display:block}
/* sheet */
.demo-figma-mobile .sheet{position:absolute;left:0;right:0;bottom:0;background:#fff;border-radius:16px 16px 0 0;box-shadow:0 -8px 30px -8px rgba(0,0,0,.3);z-index:20;transform:translateY(105%);transition:transform .32s cubic-bezier(.3,.8,.3,1);padding:8px 0 28px;max-height:470px;display:flex;flex-direction:column}
.demo-figma-mobile .sheet.show{transform:none}
.demo-figma-mobile .grab{width:36px;height:5px;border-radius:3px;background:#D9D9D9;margin:0 auto 8px}
.demo-figma-mobile .shd{display:flex;align-items:center;justify-content:space-between;padding:0 16px 8px;border-bottom:1px solid var(--ln)}
.demo-figma-mobile .shd b{font:600 16px inherit;font-family:inherit}
.demo-figma-mobile .shd button{border:0;background:none;color:var(--b);font:500 14px inherit;font-family:inherit}
.demo-figma-mobile .msgs{overflow-y:auto;padding:6px 16px;flex:1;min-height:60px}
.demo-figma-mobile .msg{display:flex;gap:10px;padding:10px 0;animation:fmfade .3s}
.demo-figma-mobile .msg .av{width:28px;height:28px;font-size:11px;line-height:28px}
.demo-figma-mobile .msg p{margin:2px 0 0;font:400 14.5px/1.4 inherit;font-family:inherit}
.demo-figma-mobile .msg .who{font:600 13.5px inherit;font-family:inherit}.demo-figma-mobile .msg .who small{color:var(--mu);font-weight:400;margin-left:6px}
.demo-figma-mobile .rx{display:inline-flex;gap:4px;margin-top:6px}
.demo-figma-mobile .rx span{border:1px solid var(--ln);border-radius:10px;padding:2px 8px;font-size:12px}
.demo-figma-mobile .typing{color:var(--mu);font:italic 13px inherit;font-family:inherit;padding:4px 0 8px 38px}
@keyframes fmfade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.demo-figma-mobile .cmp{display:flex;gap:8px;align-items:center;padding:8px 12px 0;border-top:1px solid var(--ln)}
.demo-figma-mobile .cmp input{flex:1;height:40px;border-radius:20px;border:1px solid #DADADA;padding:0 14px;font:400 15px inherit;font-family:inherit;outline:none}
.demo-figma-mobile .cmp input:focus{border-color:var(--b)}
.demo-figma-mobile .send{width:36px;height:36px;border-radius:50%;border:0;background:var(--b);color:#fff;display:flex;align-items:center;justify-content:center}
.demo-figma-mobile .send:disabled{background:#CFE9FF}
/* prototype */
.demo-figma-mobile .pv{background:#000}
.demo-figma-mobile .pstage{position:absolute;inset:0;overflow:hidden}
.demo-figma-mobile .ps{position:absolute;inset:0;transition:transform .42s cubic-bezier(.3,.8,.3,1),opacity .35s}
.demo-figma-mobile .ps.r{transform:translateX(100%)}.demo-figma-mobile .ps.l{transform:translateX(-30%);opacity:.6}
.demo-figma-mobile .ps.u{transform:translateY(100%)}.demo-figma-mobile .ps.f{opacity:0}
.demo-figma-mobile .pmenu{position:absolute;right:12px;top:48px;width:36px;height:36px;border-radius:18px;border:0;background:rgba(0,0,0,.45);color:#fff;z-index:12;font:700 16px/1 inherit;font-family:inherit;backdrop-filter:blur(6px)}
.demo-figma-mobile .hsh [data-go]{position:relative}
.demo-figma-mobile .flash [data-go]:after{content:'';position:absolute;inset:-3px;background:rgba(13,153,255,.28);border:2px solid rgba(13,153,255,.8);border-radius:8px;animation:fmfl .7s ease-out forwards;pointer-events:none}
@keyframes fmfl{0%{opacity:0}25%{opacity:1}100%{opacity:0}}
.demo-figma-mobile .menu{position:absolute;inset:0;background:rgba(0,0,0,.4);z-index:25;display:none}
.demo-figma-mobile .menu.show{display:block}
.demo-figma-mobile .menu .card{position:absolute;left:10px;right:10px;bottom:24px;background:#fff;border-radius:14px;overflow:hidden;animation:fmfade .2s}
.demo-figma-mobile .menu .card button{display:flex;justify-content:space-between;width:100%;border:0;background:#fff;border-bottom:1px solid var(--ln);padding:15px 18px;font:500 16px inherit;font-family:inherit;text-align:left;color:var(--tx)}
.demo-figma-mobile .menu .card button.x{color:#F24822;border:0}
.demo-figma-mobile .menu .card .tg{width:40px;height:24px;border-radius:12px;background:#D9D9D9;position:relative;transition:.2s}
.demo-figma-mobile .menu .card .tg:after{content:'';position:absolute;left:2px;top:2px;width:20px;height:20px;border-radius:50%;background:#fff;transition:.2s}
.demo-figma-mobile .menu .card .tg.on{background:#14AE5C}.demo-figma-mobile .menu .card .tg.on:after{left:18px}
/* coach */
.demo-figma-mobile .coach{position:absolute;left:14px;right:14px;bottom:94px;background:#1E1E1E;color:#fff;border-radius:12px;padding:10px 12px;font:500 12.5px/1.35 inherit;font-family:inherit;z-index:40;display:flex;gap:10px;align-items:center;box-shadow:0 8px 24px -8px rgba(0,0,0,.5);transition:bottom .3s,opacity .3s;pointer-events:auto}
.demo-figma-mobile .coach b{flex:none;background:var(--b);border-radius:10px;font-size:11px;padding:3px 7px}
.demo-figma-mobile .coach button{margin-left:auto;flex:none;border:0;border-radius:8px;background:#fff;color:#1E1E1E;font:600 12px inherit;font-family:inherit;padding:6px 9px}
.demo-figma-mobile .coach.hide{opacity:0;pointer-events:none}
.demo-figma-mobile .pulse{animation:fmpulse 1.5s ease-in-out infinite}
@keyframes fmpulse{0%,100%{box-shadow:0 0 0 0 rgba(13,153,255,.0)}50%{box-shadow:0 0 0 6px rgba(13,153,255,.45)}}
/* fake app (Bean & Co.) */
.demo-figma-mobile .app{position:absolute;inset:0;background:#FBF7F2;color:#2B1D14;font-family:inherit;overflow:hidden}
.demo-figma-mobile .app .pad{padding:56px 20px 0}
.demo-figma-mobile .app h2{margin:0;font:700 27px/1.15 inherit;font-family:inherit;letter-spacing:-.02em}
.demo-figma-mobile .app .sub{color:#9A8577;font-size:14px;margin-top:4px}
.demo-figma-mobile .app .as{margin-top:18px;height:44px;border-radius:12px;background:#F0E8DF;display:flex;align-items:center;padding:0 14px;color:#9A8577;font-size:14px}
.demo-figma-mobile .app .chips{display:flex;gap:8px;margin-top:16px}
.demo-figma-mobile .app .chips span{padding:7px 14px;border-radius:16px;background:#F0E8DF;font:600 13px inherit;font-family:inherit}
.demo-figma-mobile .app .chips span:first-child{background:#2B1D14;color:#fff}
.demo-figma-mobile .app .grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:18px}
.demo-figma-mobile .app .card{background:#fff;border-radius:18px;padding:12px;box-shadow:0 2px 10px -4px rgba(80,50,20,.25)}
.demo-figma-mobile .app .cup{height:110px;border-radius:12px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:12px}
.demo-figma-mobile .app .cup i{width:52px;height:62px;border-radius:4px 4px 16px 16px;background:#fff;position:relative;box-shadow:0 3px 0 rgba(0,0,0,.08)}
.demo-figma-mobile .app .cup i:before{content:'';position:absolute;left:-5px;right:-5px;top:-8px;height:10px;border-radius:4px;background:#2B1D14}
.demo-figma-mobile .app .cup i:after{content:'';position:absolute;left:8px;right:8px;top:22px;height:14px;border-radius:3px;background:currentColor;opacity:.75}
.demo-figma-mobile .app .card b{display:block;font-size:15px;margin-top:10px}
.demo-figma-mobile .app .card span{font-size:13px;color:#9A8577}
.demo-figma-mobile .app .back{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.85);display:flex;align-items:center;justify-content:center;font-size:20px;position:absolute;left:18px;top:52px}
.demo-figma-mobile .app .hero{height:340px;display:flex;align-items:center;justify-content:center;border-radius:0 0 36px 36px}
.demo-figma-mobile .app .hero .cup i{width:110px;height:130px;border-radius:8px 8px 30px 30px}
.demo-figma-mobile .app .hero .cup i:before{left:-10px;right:-10px;top:-16px;height:18px}
.demo-figma-mobile .app .hero .cup i:after{top:46px;height:30px;left:16px;right:16px}
.demo-figma-mobile .app .row{display:flex;justify-content:space-between;align-items:center}
.demo-figma-mobile .app .sz{display:flex;gap:10px;margin-top:18px}
.demo-figma-mobile .app .sz span{flex:1;text-align:center;padding:11px 0;border-radius:12px;border:1.5px solid #E5D9CC;font-weight:600;font-size:14px}
.demo-figma-mobile .app .sz span.on{border-color:#2B1D14;background:#2B1D14;color:#fff}
.demo-figma-mobile .app .cta{position:absolute;left:20px;right:20px;bottom:40px;height:56px;border-radius:16px;background:#C8642F;color:#fff;display:flex;align-items:center;justify-content:center;font:700 16px inherit;font-family:inherit}
.demo-figma-mobile .app .li{display:flex;gap:12px;align-items:center;background:#fff;border-radius:16px;padding:12px;margin-top:16px}
.demo-figma-mobile .app .li .cup{height:60px;width:60px;padding:6px;border-radius:12px}.demo-figma-mobile .app .li .cup i{width:28px;height:34px;border-radius:3px 3px 9px 9px}
.demo-figma-mobile .app .li .cup i:before{top:-5px;height:6px;left:-3px;right:-3px}.demo-figma-mobile .app .li .cup i:after{top:12px;height:8px;left:5px;right:5px}
.demo-figma-mobile .app .tot{margin-top:22px;border-top:1px dashed #E0D2C3;padding-top:14px;font-size:14px;color:#7A6658}
.demo-figma-mobile .app .tot div{display:flex;justify-content:space-between;padding:4px 0}
.demo-figma-mobile .app .tot div:last-child{color:#2B1D14;font-weight:700;font-size:17px}
.demo-figma-mobile .app .ok{width:96px;height:96px;border-radius:50%;background:#2E9E62;color:#fff;font-size:48px;display:flex;align-items:center;justify-content:center;margin:170px auto 24px;animation:fmpin .5s cubic-bezier(.3,1.6,.5,1)}
`;
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
var IC={
 back:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
 cmt:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3a9 9 0 019 9 9 9 0 01-9 9H3v-9a9 9 0 019-9z"/></svg>',
 share:'<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3M7 8l5-5 5 5M5 13v7h14v-7"/></svg>',
 play:'<svg width="14" height="14" viewBox="0 0 24 24"><path d="M6 3l15 9-15 9z" fill="currentColor"/></svg>',
 send:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
 rec:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/></svg>',
 srch:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
 bell:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4" stroke-linecap="round"/></svg>',
 acct:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="9" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke-linecap="round"/></svg>'
};
var SB='<span>9:41</span><i><svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2.5" width="3" height="9.5" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg><svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="currentColor" opacity=".45"/><rect x="2" y="2" width="16" height="8" rx="1.6" fill="currentColor"/><rect x="23" y="4" width="1.6" height="4" rx=".8" fill="currentColor" opacity=".45"/></svg></i>';

/* --- fake product designed in the file: "Bean & Co." --- */
var SCREENS=['Home','Detail','Bag','Confirmed'];
function appHTML(n,size){
 size=size||'M';var price={S:'$4.75',M:'$5.50',L:'$6.25'}[size];
 if(n==='Home')return '<div class="app"><div class="pad"><div class="sub">Good morning, Alex</div><h2>What are we<br>sipping today?</h2><div class="as">Search drinks</div><div class="chips"><span>Popular</span><span>Hot</span><span>Iced</span><span>Tea</span></div><div class="grid">'+
  '<div class="card" data-go="Detail"><div class="cup" style="background:#F6E3CF;color:#B57A4C"><i></i></div><b>Oat Latte</b><span>$5.50</span></div>'+
  '<div class="card"><div class="cup" style="background:#DDEBDD;color:#5C8A5C"><i></i></div><b>Matcha</b><span>$5.25</span></div>'+
  '<div class="card"><div class="cup" style="background:#E7DDF2;color:#8466A8"><i></i></div><b>Ube Cold Foam</b><span>$6.00</span></div>'+
  '<div class="card"><div class="cup" style="background:#F5DADA;color:#B4575A"><i></i></div><b>Berry Fizz</b><span>$4.75</span></div></div></div></div>';
 if(n==='Detail')return '<div class="app"><div class="hero" style="background:#F6E3CF"><div class="cup" style="color:#B57A4C;background:none"><i></i></div></div><div class="back" data-go="Home" data-t="back">←</div><div class="pad" style="padding-top:22px"><div class="row"><h2>Oat Latte</h2><h2 style="font-size:22px" class="pr">'+price+'</h2></div><div class="sub">Double shot espresso, steamed oat milk, a touch of vanilla.</div><div class="sz">'+
  ['S','M','L'].map(function(s){return '<span data-size="'+s+'" class="'+(s===size?'on':'')+'">'+s+'</span>'}).join('')+'</div></div><div class="cta" data-go="Bag" data-t="up">Add to bag · '+price+'</div></div>';
 if(n==='Bag')return '<div class="app"><div class="back" data-go="Detail" data-t="back" style="background:#F0E8DF">←</div><div class="pad" style="padding-top:110px"><h2>Your bag</h2><div class="li"><div class="cup" style="background:#F6E3CF;color:#B57A4C"><i></i></div><div style="flex:1"><b>Oat Latte</b><div class="sub" style="margin:2px 0 0;font-size:13px">Size '+size+' · Oat milk</div></div><b>'+price+'</b></div><div class="tot"><div><span>Subtotal</span><span>'+price+'</span></div><div><span>Pickup fee</span><span>$0.00</span></div><div><span>Total</span><span>'+price+'</span></div></div><div class="sub" style="margin-top:18px">Pickup at Sample St. · ready in ~6 min</div></div><div class="cta" data-go="Confirmed" data-t="fade">Place order</div></div>';
 return '<div class="app" style="text-align:center"><div class="ok">✓</div><h2>Order placed!</h2><div class="sub" style="margin-top:8px">We’ll ping you when it’s ready.<br>Order #0042 · Bean &amp; Co.</div><div class="cta" data-go="Home" data-t="fade" style="background:#2B1D14">Back to home</div></div>';
}
function mini(n,w){var k=w/375;return '<div class="mini" style="transform:scale('+k+')">'+appHTML(n)+'</div>'}

function mount(root){
 var timers=[];function T(f,ms){var t=setTimeout(f,ms);timers.push(t);return t}
 var st=el('style');st.textContent=CSS;root.appendChild(st);
 var sb=el('div','sb',SB);
 var S={}; // state
 var home,fv,pv,menu,coach;
 function reset(){
  timers.forEach(clearTimeout);timers=[];
  [].slice.call(root.children).forEach(function(c){if(c!==st)c.remove()});
  S={tab:'rec',step:0,frame:0,cmode:false,hints:true,pins:[],thread:null,size:'M',seen:{}};
  buildHome();buildFile();buildProto();
  root.appendChild(sb);
  coach=el('div','coach');root.appendChild(coach);
  setStep(0);
 }
 /* coach / guided path */
 var STEPS=[
  ['1/4','Tap the “Checkout flow” prototype to try it on-device.'],
  ['2/4','Tap through: Oat Latte → Add to bag → Place order. Tap empty space to reveal hotspots.'],
  ['3/4','Nice! Tap ••• and choose “View file” to see the design.'],
  ['4/4','Tap the comment pin to read feedback — or tap 💬 then the canvas to leave your own.'],
  ['✓','That’s the Figma app: browse, prototype, comment. Explore tabs, or']
 ];
 function setStep(i){if(i<S.step)return;S.step=i;var s=STEPS[i];coach.innerHTML='<b>'+s[0]+'</b><span>'+s[1]+'</span>'+(i===4?'<button>Replay</button>':'');
  var rb=coach.querySelector('button');if(rb)rb.onclick=reset;
  [].forEach.call(root.querySelectorAll('.pulse'),function(n){n.classList.remove('pulse')});
  var tgt={0:'.pc[data-k="proto"]',2:'.pmenu',3:'.pin'}[i];if(tgt){var n=root.querySelector(tgt);n&&n.classList.add('pulse')}
  posCoach()}
 function posCoach(){if(!coach)return;var inP=S.at==='proto';var inF=S.at==='file';
  coach.style.bottom=inF?'auto':inP?'108px':'94px';coach.style.top=inF?'100px':'auto';coach.classList.toggle('hide',!!(S.sheet))}

 /* ---------------- Home / tabs ---------------- */
 var FILES=[
  {n:'Bean & Co. — App',m:'Edited 12 minutes ago',c:'#A259FF',k:'design',th:'Home'},
  {n:'Design System v3',m:'Edited yesterday',c:'#A259FF',k:'design',th:null,col:'#E5F4FF'},
  {n:'Q4 Planning board',m:'Edited 2 days ago · FigJam',c:'#14AE5C',k:'jam',th:null,col:'#FFF3CC'},
  {n:'Onboarding explorations',m:'Edited last week',c:'#A259FF',k:'design',th:'Bag'},
  {n:'Pitch deck — Sample Inc.',m:'Edited last week · Slides',c:'#FFA629',k:'slides',th:null,col:'#FFE8D6'}
 ];
 function buildHome(){
  home=el('div','vw');root.appendChild(home);
  var body=el('div','body');home.appendChild(body);
  var tabs=el('div','tabs');
  [['rec','Recents',IC.rec],['srch','Search',IC.srch],['act','Activity',IC.bell],['acct','Account',IC.acct]].forEach(function(t){var b=el('button','tab'+(t[0]==='rec'?' on':''),t[2]+t[1]+(t[0]==='act'?'<span class="bd">1</span>':''));b.dataset.k=t[0];b.onclick=function(){S.tab=t[0];[].forEach.call(tabs.children,function(x){x.classList.toggle('on',x===b)});renderTab(body)};tabs.appendChild(b)});
  home.appendChild(tabs);home._tabs=tabs;renderTab(body);
 }
 function fileRow(f){var b=el('button','fr','<div class="th" style="background:'+(f.col||'#F5F5F5')+'">'+(f.th?'<div style="position:absolute;left:28px;top:4px;width:28px;height:57px;overflow:hidden;border-radius:3px;box-shadow:0 1px 3px rgba(0,0,0,.2)">'+mini(f.th,28)+'</div>':thumbArt(f.k))+'</div><div style="min-width:0"><div class="nm"><span class="kd" style="background:'+f.c+'"></span>'+f.n+'</div><div class="mt">'+f.m+'</div></div>');
  b.onclick=function(){if(f.th==='Home')openFile();else toastIn(home,'Demo: only “Bean & Co. — App” opens')};return b}
 function thumbArt(k){if(k==='jam')return '<div style="position:absolute;left:14px;top:12px;width:20px;height:20px;background:#FFE299"></div><div style="position:absolute;left:38px;top:18px;width:20px;height:20px;background:#B3EFBD"></div><div style="position:absolute;left:24px;top:34px;width:20px;height:20px;background:#DCCCFF"></div>';
  if(k==='slides')return '<div style="position:absolute;left:16px;top:14px;right:16px;bottom:14px;background:#fff;border-radius:3px;box-shadow:0 1px 3px rgba(0,0,0,.15)"><div style="margin:8px;height:5px;width:60%;background:#FFA629;border-radius:2px"></div><div style="margin:0 8px;height:3px;width:40%;background:#ddd"></div></div>';
  return '<div style="position:absolute;left:12px;top:14px;width:24px;height:24px;border-radius:6px;background:#0D99FF"></div><div style="position:absolute;left:42px;top:16px;width:28px;height:6px;border-radius:3px;background:#B3B3B3"></div><div style="position:absolute;left:42px;top:28px;width:20px;height:6px;border-radius:3px;background:#D9D9D9"></div>'}
 function renderTab(body){
  body.innerHTML='';var t=S.tab;
  if(t==='rec'){
   body.appendChild(el('div','hd','<h1>Recents</h1><div class="me">A</div>'));
   body.appendChild(el('div','team','<b></b>Sample Studio ▾'));
   body.appendChild(el('div','secth','<b>Prototypes</b><span>See all</span>'));
   var hs=el('div','hs');body.appendChild(hs);
   [['Checkout flow','Bean & Co. — App','Home','proto'],['Order tracking','Bean & Co. — App','Confirmed',''],['Onboarding v2','Onboarding explorations','Bag','']].forEach(function(p){
    var b=el('button','pc','<div class="th"><div style="position:relative;width:78px;height:158px;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.18)">'+mini(p[2],78)+'</div></div><div class="nm">'+p[0]+'</div><div class="mt">'+p[1]+'</div>');b.dataset.k=p[3];
    b.onclick=function(){if(p[3])openProto();else toastIn(home,'Demo: try “Checkout flow”')};hs.appendChild(b)});
   body.appendChild(el('div','secth','<b>Files</b><span>See all</span>'));
   FILES.forEach(function(f){body.appendChild(fileRow(f))});
   if(S.step===0)T(function(){setStep(0)},0);
  } else if(t==='srch'){
   body.appendChild(el('div','hd','<h1>Search</h1>'));
   var sr=el('div','srch',IC.srch.replace('24','18').replace('24','18')+'<input placeholder="Search files, prototypes, teams">');body.appendChild(sr);
   var res=el('div');body.appendChild(res);
   var inp=sr.querySelector('input');
   function upd(){res.innerHTML='';var q=inp.value.toLowerCase();var m=FILES.filter(function(f){return f.n.toLowerCase().indexOf(q)>=0});
    res.appendChild(el('div','secth','<b style="font-size:14px;color:#8C8C8C;font-weight:600">'+(q?m.length+' result'+(m.length===1?'':'s'):'Recent files')+'</b>'));m.forEach(function(f){res.appendChild(fileRow(f))});
    if(!m.length)res.appendChild(el('div',null,'<div style="padding:30px 18px;color:#8C8C8C;font-size:14px">No files match “'+inp.value.replace(/</g,'&lt;')+'”</div>'))}
   inp.oninput=upd;upd();T(function(){inp.focus()},350);
  } else if(t==='act'){
   body.appendChild(el('div','hd','<h1>Activity</h1>'));
   var a=el('button','act'+(S.seen.act?'':' unread'),'<div class="av" style="background:#FF7262">M</div><div><p><b>Maya</b> commented on <b>Bean & Co. — App</b><q>“Can Add to bag stay pinned while scrolling on small phones?”</q></p><small>Detail · 1h</small></div>');
   a.onclick=function(){S.seen.act=1;var bd=home.querySelector('.bd');bd&&bd.remove();openFile(function(){openThread(S.pins[0])})};body.appendChild(a);
   body.appendChild(el('div','act','<div class="av" style="background:#14AE5C">S</div><div><p><b>Sam</b> shared <b>Q4 Planning board</b> with you</p><small>Yesterday</small></div>'));
   body.appendChild(el('div','act','<div class="av" style="background:#0D99FF">R</div><div><p><b>Riley</b> mentioned you in <b>Design System v3</b><q>“@Alex new button tokens are in 🎉”</q></p><small>2 days ago</small></div>'));
  } else {
   body.appendChild(el('div','hd','<h1>Account</h1>'));
   body.appendChild(el('div',null,'<div style="display:flex;gap:14px;align-items:center;padding:12px 18px"><div class="me" style="width:56px;height:56px;line-height:56px;font-size:22px">A</div><div><b style="font-size:17px">Alex Sample</b><div style="color:#8C8C8C;font-size:13px">alex@sample.studio</div></div></div>'+['Teams','Notifications','Appearance','Help & feedback','Log out'].map(function(x){return '<div style="padding:15px 18px;border-bottom:1px solid #EBEBEB;font-size:15px">'+x+'</div>'}).join('')));
  }
 }
 function toastIn(scr,txt){var t=el('div','chint show',txt);t.style.top='auto';t.style.bottom='170px';scr.appendChild(t);T(function(){t.remove()},1600)}

 /* ---------------- File viewer ---------------- */
 var cv,wd,slider,frames=[],view={x:0,y:0,z:.5},sheet;
 var GAP=120;
 function buildFile(){
  fv=el('div','vw fv off');root.appendChild(fv);
  var top=el('div','fvtop','<button class="ib" data-a="back">'+IC.back+'</button><div class="fvt"><b>Bean & Co. — App</b><span>Checkout ▾</span></div><button class="ib" data-a="share">'+IC.share+'</button><button class="ib" data-a="cmt">'+IC.cmt+'</button>');
  fv.appendChild(top);
  cv=el('div','cv');fv.appendChild(cv);wd=el('div','wd');cv.appendChild(wd);
  frames=SCREENS.map(function(n,i){var f=el('div','fm','<div class="fl">'+n+'</div>'+'<div class="mini" style="transform:none">'+appHTML(n)+'</div>');f.style.left=(i*(375+GAP))+'px';f.style.top='0px';wd.appendChild(f);return f});
  var chint=el('div','chint','Tap anywhere to add a comment');fv.appendChild(chint);fv._chint=chint;
  var play=el('button','play',IC.play+'Present');fv.appendChild(play);play.onclick=function(){openProto(SCREENS[S.frame])};
  slider=el('div','slider');fv.appendChild(slider);
  SCREENS.forEach(function(n,i){var b=el('button',i===0?'on':'','<div style="position:absolute;inset:0;overflow:hidden">'+mini(n,40)+'</div>');b.onclick=function(){selectFrame(i,true)};slider.appendChild(b)});
  slider.appendChild(el('span','lb','4 frames'));
  sheet=el('div','sheet');fv.appendChild(sheet);
  top.addEventListener('click',function(e){var b=e.target.closest('[data-a]');if(!b)return;var a=b.dataset.a;
   if(a==='back'){closeSheet();go(home,fv)}
   else if(a==='cmt'){S.cmode=!S.cmode;b.classList.toggle('on',S.cmode);chint.classList.toggle('show',S.cmode);cv.classList.toggle('cm',S.cmode)}
   else if(a==='share'){toastIn(fv,'Link copied to clipboard')}});
  // seed comment pin from Maya on Detail frame
  S.pins=[];
  addPin(375+GAP+300,690,'M','#FF7262',[{w:'Maya',c:'#FF7262',t:'1h',m:'Can Add to bag stay pinned while scrolling on small phones?',rx:['👀 2']}]);
  // canvas gestures
  var d=null;
  cv.addEventListener('pointerdown',function(e){if(e.target.closest('.pin'))return;d={sx:e.clientX,sy:e.clientY,vx:view.x,vy:view.y,m:0};wd.classList.add('nt');try{cv.setPointerCapture(e.pointerId)}catch(_){}});
  cv.addEventListener('pointermove',function(e){if(!d)return;var s=sc();var dx=(e.clientX-d.sx)/s,dy=(e.clientY-d.sy)/s;if(Math.abs(dx)+Math.abs(dy)>6)d.m=1;if(d.m){view.x=d.vx+dx;view.y=d.vy+dy;applyView()}});
  cv.addEventListener('pointerup',function(e){if(!d)return;wd.classList.remove('nt');var moved=d.m;d=null;if(moved){nearest();return}
   var p=toWorld(e.clientX,e.clientY);
   if(S.cmode){newComment(p);return}
   var hit=-1;frames.forEach(function(f,i){var x=i*(375+GAP);if(p.x>=x&&p.x<=x+375&&p.y>=0&&p.y<=760)hit=i});
   if(hit>=0)selectFrame(hit,true);else {frames.forEach(function(f){f.classList.remove('sel')})}});
  cv.addEventListener('wheel',function(e){e.preventDefault();wd.classList.add('nt');view.x-=e.deltaX;view.y-=e.deltaY;applyView()},{passive:false});
 }
 function sc(){var r=root.getBoundingClientRect();return r.width/root.offsetWidth}
 function toWorld(cx,cy){var r=cv.getBoundingClientRect(),s=sc();return {x:((cx-r.left)/s-view.x)/view.z,y:((cy-r.top)/s-view.y)/view.z}}
 function applyView(){wd.style.transform='translate('+view.x+'px,'+view.y+'px) scale('+view.z+')'}
 function selectFrame(i,center){S.frame=i;frames.forEach(function(f,j){f.classList.toggle('sel',j===i)});[].forEach.call(slider.querySelectorAll('button'),function(b,j){b.classList.toggle('on',j===i)});
  if(center){view.x=375/2-(i*(375+GAP)+187.5)*view.z;view.y=(555-760*view.z)/2;applyView()}}
 function nearest(){var cx=(375/2-view.x)/view.z;var i=Math.max(0,Math.min(3,Math.round((cx-187.5)/(375+GAP))));S.frame=i;[].forEach.call(slider.querySelectorAll('button'),function(b,j){b.classList.toggle('on',j===i)})}
 function addPin(x,y,ch,col,thread){var p=el('div','pin','<b style="background:'+col+'">'+ch+'</b>');p.style.left=x+'px';p.style.top=y+'px';wd.appendChild(p);var o={el:p,thread:thread};S.pins.push(o);
  p.addEventListener('pointerdown',function(e){e.stopPropagation()});p.onclick=function(e){e.stopPropagation();openThread(o)};return o}
 function newComment(p){var o=addPin(p.x,p.y,'A','#9747FF',[]);o.isNew=1;S.cmode=false;fv.querySelector('[data-a="cmt"]').classList.remove('on');fv._chint.classList.remove('show');cv.classList.remove('cm');openThread(o)}
 function openThread(o){S.thread=o;S.sheet=1;posCoach();
  sheet.innerHTML='<div class="grab"></div><div class="shd"><b>'+(o.thread.length?'Comment':'New comment')+'</b><span>'+(o.thread.length?'<button data-a="res">Resolve</button>':'')+'<button data-a="x">Done</button></span></div><div class="msgs"></div><div class="cmp"><input placeholder="'+(o.thread.length?'Reply':'Add a comment')+'…"><button class="send" disabled>'+IC.send+'</button></div>';
  var msgs=sheet.querySelector('.msgs');o.thread.forEach(function(m){msgs.appendChild(msgEl(m))});
  var inp=sheet.querySelector('input'),snd=sheet.querySelector('.send');
  if(!o.thread.length||o.isNew)inp.value='';else inp.value='';
  inp.oninput=function(){snd.disabled=!inp.value.trim()};
  function send(){var v=inp.value.trim();if(!v)return;var m={w:'You',c:'#9747FF',t:'now',m:v};o.thread.push(m);msgs.appendChild(msgEl(m));inp.value='';snd.disabled=true;msgs.scrollTop=1e4;
   sheet.querySelector('.shd b').textContent='Comment';setStep(4);
   var who=o.isNew?['Sam','#14AE5C','S']:['Maya','#FF7262','M'];
   T(function(){var ty=el('div','typing',who[0]+' is typing…');msgs.appendChild(ty);msgs.scrollTop=1e4;
    T(function(){ty.remove();var r={w:who[0],c:who[1],t:'now',m:o.isNew?'Good catch — I’ll take a look in the file this afternoon.':'Amazing, thanks! I’ll re-test it on my phone in the prototype.'};o.thread.push(r);if(S.thread===o){msgs.appendChild(msgEl(r));msgs.scrollTop=1e4}},1600)},900)}
  snd.onclick=send;inp.onkeydown=function(e){if(e.key==='Enter')send()};
  sheet.querySelector('[data-a="x"]').onclick=closeSheet;
  var rs=sheet.querySelector('[data-a="res"]');if(rs)rs.onclick=function(){o.el.remove();closeSheet();toastIn(fv,'Comment resolved')};
  sheet.classList.add('show');setStep(3);if(S.step===3&&!o.isNew){}T(function(){inp.focus()},350);
  if(o.isNew||o===S.pins[0]){}
 }
 function msgEl(m){var e=el('div','msg','<div class="av" style="background:'+m.c+'">'+m.w[0]+'</div><div><div class="who">'+m.w+'<small>'+m.t+'</small></div><p></p>'+(m.rx?'<div class="rx">'+m.rx.map(function(r){return '<span>'+r+'</span>'}).join('')+'</div>':'')+'</div>');e.querySelector('p').textContent=m.m;return e}
 function closeSheet(){if(!sheet)return;sheet.classList.remove('show');S.sheet=0;var o=S.thread;if(o&&o.isNew&&!o.thread.length){o.el.remove()}S.thread=null;posCoach()}
 function openFile(after){selectFrame(1,true);go(fv,null,after)}

 /* ---------------- Prototype viewer ---------------- */
 var stage,cur;
 function buildProto(){
  pv=el('div','vw pv up');root.appendChild(pv);
  stage=el('div','pstage hsh');pv.appendChild(stage);
  var mb=el('button','pmenu','•••');pv.appendChild(mb);
  menu=el('div','menu','<div class="card"><button data-a="restart">Restart prototype</button><button data-a="file">View file</button><button data-a="hints">Hotspot hints <span class="tg on"></span></button><button data-a="share">Share prototype</button><button class="x" data-a="exit">Exit prototype</button></div>');pv.appendChild(menu);
  mb.onclick=function(){menu.classList.add('show');coach.classList.add('hide')};
  menu.addEventListener('click',function(e){var b=e.target.closest('[data-a]');if(!b){if(e.target===menu){menu.classList.remove('show');posCoach()}return}var a=b.dataset.a;
   if(a==='hints'){S.hints=!S.hints;b.querySelector('.tg').classList.toggle('on',S.hints);return}
   menu.classList.remove('show');posCoach();
   if(a==='restart')show('Home','fade');
   else if(a==='file'){openFile();if(S.step>=2)setStep(3)}
   else if(a==='exit'){go(home,pv)}
   else toastIn(pv,'Prototype link copied')});
  stage.addEventListener('click',function(e){var sz=e.target.closest('[data-size]');if(sz){S.size=sz.dataset.size;rerender();return}
   var g=e.target.closest('[data-go]');if(g){show(g.dataset.go,g.dataset.t||'push');return}
   if(S.hints){cur.classList.remove('flash');void cur.offsetWidth;cur.classList.add('flash')}});
 }
 function rerender(){cur.innerHTML=appHTML(cur.dataset.n,S.size)}
 function show(n,t){var nx=el('div','ps');nx.dataset.n=n;nx.innerHTML=appHTML(n,S.size);
  var old=cur;
  if(!old||t==='none'){stage.innerHTML='';stage.appendChild(nx);cur=nx;return}
  if(t==='back'){nx.classList.add('l');stage.insertBefore(nx,old);void nx.offsetWidth;nx.classList.remove('l');old.classList.add('r')}
  else{nx.classList.add(t==='up'?'u':t==='fade'?'f':'r');stage.appendChild(nx);void nx.offsetWidth;nx.classList.remove('u','f','r');if(t==='push')old.classList.add('l')}
  cur=nx;T(function(){old.remove()},450);
  if(n==='Confirmed'){T(function(){setStep(2)},500)}
  else if(S.step===1&&n!=='Home'){}
 }
 function openProto(start){S.size='M';cur=null;show(start||'Home','none');go(pv);if(S.step<1)setStep(1)}

 /* ---------------- navigation: home <- file <- prototype (modal) ---------------- */
 function go(to,from,after){
  S.at=to===pv?'proto':to===fv?'file':'home';
  if(to===pv){pv.className='vw pv'}
  else{pv.className='vw pv up';menu.classList.remove('show');
   if(to===fv){fv.className='vw fv';home.className='vw back'}
   else{fv.className='vw fv off';home.className='vw'}}
  sb.classList.toggle('dk',false);
  posCoach();if(after)T(after,420);
 }

 reset();
 return function(){timers.forEach(clearTimeout);root.innerHTML=''};
}

window.DEMOS[ID]={frame:'phone',title:'Figma for iOS',caption:'Open the “Checkout flow” prototype and tap through it, then view the file and reply to (or drop) a comment pin.',
 sources:['https://help.figma.com/hc/en-us/articles/1500007537281-Guide-to-the-Figma-mobile-app','https://help.figma.com/hc/en-us/articles/360039825314-Guide-to-comments-in-Figma','https://help.figma.com/hc/en-us/articles/360039824594-Comment-on-prototypes','https://figmalion.com/topics/ios-app'],
 mount:mount};
})();
