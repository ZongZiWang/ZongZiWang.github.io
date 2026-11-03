/* Google Play Store — recreated mini demo (phone frame) illustrating ML-personalized recommendations.
   Stylistic recreation from public sources only; every app name and number is fictional. */
(function(){
window.DEMOS = window.DEMOS || {};
var ID = 'google-play';
var P = '.demo-google-play ';
var G = '#01875f';
var CSS = [
P+'{background:#fff;font-family:Roboto,"Google Sans","Segoe UI",system-ui,sans-serif;color:#1f1f1f}',
P+'.gp-app{position:absolute;inset:0;overflow:hidden;background:#fff}',
P+'.gp-status{position:absolute;top:0;left:0;right:0;height:44px;display:flex;justify-content:space-between;align-items:center;padding:6px 30px 0 32px;font:500 14px Roboto,system-ui,sans-serif;z-index:60;pointer-events:none;color:#1f1f1f}',
P+'.gp-home{position:absolute;left:0;right:0;top:44px;bottom:72px;display:flex;flex-direction:column}',
P+'.gp-search{margin:6px 14px 4px;height:48px;border-radius:24px;background:#e9eef6;display:flex;align-items:center;gap:12px;padding:0 8px 0 16px;color:#444746;font-size:16px;flex:none;cursor:text}',
P+'.gp-search span{flex:1}',
P+'.gp-av{width:32px;height:32px;border-radius:50%;background:#7c4dff;color:#fff;font-weight:500;font-size:14px;display:flex;align-items:center;justify-content:center}',
P+'.gp-tabs{display:flex;gap:0;padding:0 6px;border-bottom:1px solid #e3e3e3;flex:none}',
P+'.gp-tab{padding:12px 11px 10px;font-size:14px;font-weight:500;color:#444746;cursor:pointer;position:relative;white-space:nowrap}',
P+'.gp-tab.on{color:'+G+'}',
P+'.gp-tab.on::after{content:"";position:absolute;left:10px;right:10px;bottom:-1px;height:3px;border-radius:3px 3px 0 0;background:'+G+'}',
P+'.gp-body{flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none}',
P+'.gp-body::-webkit-scrollbar,'+P+'.gp-row::-webkit-scrollbar,'+P+'.gp-dscroll::-webkit-scrollbar{display:none}',
P+'.gp-perso{display:flex;align-items:center;gap:8px;padding:10px 16px 2px}',
P+'.gp-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid #c4c7c5;border-radius:8px;padding:5px 10px;font-size:12.5px;font-weight:500;color:#444746;cursor:pointer;background:#fff;white-space:nowrap}',
P+'.gp-chip.g{background:#e6f4ea;border-color:#e6f4ea;color:#0d652d}',
P+'.gp-sec{padding:14px 0 4px;overflow:hidden}',
P+'.gp-sec.new{animation:gpIn .7s ease-out}',
P+'@keyframes gpIn{from{max-height:0;opacity:0;background:#e6f4ea}50%{background:#e6f4ea}to{max-height:260px;opacity:1;background:#fff}}',
P+'.gp-sh{display:flex;align-items:center;justify-content:space-between;padding:0 16px 10px}',
P+'.gp-sh b{font-size:17px;font-weight:500;display:block;line-height:1.25}',
P+'.gp-sh small{font-size:12.5px;color:#5e5e5e;display:block;margin-top:1px}',
P+'.gp-sh .ar{font-size:20px;color:#444746}',
P+'.gp-row{display:flex;gap:12px;overflow-x:auto;padding:8px 16px 4px;margin-top:-8px;scroll-behavior:smooth;scrollbar-width:none}',
P+'.gp-card{width:80px;flex:none;cursor:pointer;position:relative}',
P+'.gp-card .nm{font-size:12.5px;line-height:1.3;margin-top:7px;height:33px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#1f1f1f}',
P+'.gp-card .rt{font-size:12px;color:#5e5e5e;margin-top:1px}',
P+'.gp-card .mv{position:absolute;top:-6px;right:-4px;background:'+G+';color:#fff;font-size:10px;font-weight:700;border-radius:8px;padding:1px 5px;animation:gpPop 2.6s forwards;z-index:2}',
P+'.gp-card .mv.nw{background:#1a73e8}',
P+'@keyframes gpPop{0%{transform:scale(0)}10%{transform:scale(1.15)}18%,80%{transform:scale(1);opacity:1}100%{opacity:0}}',
P+'.gp-ic{border-radius:22%;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 2px rgba(0,0,0,.18);overflow:hidden;flex:none}',
P+'.gp-feat{margin:4px 16px 0;border-radius:16px;overflow:hidden;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.12)}',
P+'.gp-feat .art{height:132px;position:relative;overflow:hidden}',
P+'.gp-feat .meta{display:flex;align-items:center;gap:12px;padding:10px 12px;background:#fff}',
P+'.gp-feat .meta b{font-size:14px;font-weight:500;display:block}',
P+'.gp-feat .meta small{font-size:12px;color:#5e5e5e}',
P+'.gp-pill{margin-left:auto;background:'+G+';color:#fff;border:0;border-radius:18px;padding:7px 16px;font:500 13px Roboto,system-ui,sans-serif;cursor:pointer}',
P+'.gp-list .it{display:flex;align-items:center;gap:14px;padding:9px 16px;cursor:pointer}',
P+'.gp-list .it:hover{background:#f6f8fc}',
P+'.gp-list .n{width:18px;font-size:14px;color:#444746;text-align:center}',
P+'.gp-list .tx{flex:1;min-width:0}',
P+'.gp-list .tx b{font-size:14.5px;font-weight:400;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
P+'.gp-list .tx small{font-size:12.5px;color:#5e5e5e;display:block}',
P+'.gp-seg{display:flex;gap:8px;padding:12px 16px 6px;overflow:hidden}',
P+'.gp-nav{position:absolute;left:0;right:0;bottom:0;height:72px;background:#f0f4f9;display:flex;justify-content:space-around;align-items:flex-start;padding-top:10px;z-index:20}',
P+'.gp-nav div{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:12px;font-weight:500;color:#444746;width:72px;cursor:pointer}',
P+'.gp-nav i{width:56px;height:30px;border-radius:15px;display:flex;align-items:center;justify-content:center}',
P+'.gp-nav .on i{background:#c4eed0}',
P+'.gp-nav .on{color:#1f1f1f;font-weight:700}',
P+'.gp-detail{position:absolute;left:0;right:0;top:0;bottom:0;background:#fff;z-index:30;transform:translateX(100%);transition:transform .28s cubic-bezier(.2,0,0,1);display:flex;flex-direction:column;padding-top:44px}',
P+'.gp-detail.show{transform:none}',
P+'.gp-dbar{display:flex;align-items:center;gap:6px;padding:4px 8px;flex:none}',
P+'.gp-ib{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer}',
P+'.gp-ib:hover{background:#f0f2f5}',
P+'.gp-dscroll{flex:1;overflow-y:auto;padding-bottom:20px;scrollbar-width:none}',
P+'.gp-dh{display:flex;gap:18px;padding:8px 20px 12px;align-items:center}',
P+'.gp-dh h2{font-size:22px;font-weight:400;margin:0;line-height:1.2}',
P+'.gp-dh .dev{color:'+G+';font-size:14px;font-weight:500;margin-top:4px}',
P+'.gp-dh small{font-size:12px;color:#5e5e5e;display:block;margin-top:3px}',
P+'.gp-icw{position:relative;width:72px;height:72px;flex:none}',
P+'.gp-icw svg.ring{position:absolute;inset:-7px;width:86px;height:86px;transform:rotate(-90deg)}',
P+'.gp-icw .gp-ic{transition:transform .3s}',
P+'.gp-icw.busy .gp-ic{transform:scale(.8)}',
P+'.gp-stats{display:flex;padding:4px 10px 14px}',
P+'.gp-stats div{flex:1;text-align:center;font-size:12px;color:#5e5e5e;position:relative}',
P+'.gp-stats div+div::before{content:"";position:absolute;left:0;top:6px;height:24px;width:1px;background:#e3e3e3}',
P+'.gp-stats b{display:block;font-size:14px;color:#1f1f1f;font-weight:500;margin-bottom:2px}',
P+'.gp-btns{display:flex;gap:10px;padding:0 20px 6px}',
P+'.gp-btn{flex:1;height:40px;border-radius:20px;border:0;background:'+G+';color:#fff;font:500 14px Roboto,system-ui,sans-serif;cursor:pointer}',
P+'.gp-btn.ol{background:#fff;color:'+G+';border:1px solid #747775}',
P+'.gp-btn:disabled{background:#e3e3e3;color:#9aa0a6;cursor:default;border:0}',
P+'.gp-prog{padding:0 20px 8px;font-size:12px;color:#5e5e5e;height:22px}',
P+'.gp-shots{display:flex;gap:8px;overflow:hidden;padding:6px 20px 4px}',
P+'.gp-shot{width:96px;height:170px;border-radius:10px;flex:none;position:relative;overflow:hidden}',
P+'.gp-about{padding:14px 20px 0}',
P+'.gp-about b{font-size:16px;font-weight:500}',
P+'.gp-about p{font-size:13.5px;color:#444746;line-height:1.5;margin:6px 0 0}',
P+'.gp-rv{display:flex;gap:16px;padding:12px 20px 0;align-items:center}',
P+'.gp-rv .big{font-size:44px;line-height:1;font-weight:400}',
P+'.gp-bars{flex:1}',
P+'.gp-bars div{display:flex;align-items:center;gap:8px;font-size:11px;color:#5e5e5e;height:13px}',
P+'.gp-bars span{flex:1;height:8px;border-radius:4px;background:#e3e3e3;overflow:hidden}',
P+'.gp-bars span i{display:block;height:100%;background:'+G+'}',
P+'.gp-snack{position:absolute;left:12px;right:12px;bottom:84px;background:#313131;color:#f2f2f2;font-size:13.5px;border-radius:6px;padding:13px 16px;z-index:50;display:flex;justify-content:space-between;align-items:center;gap:10px;animation:gpUp .25s ease-out;box-shadow:0 3px 10px rgba(0,0,0,.3)}',
P+'.gp-snack a{color:#80e0a7;font-weight:500;cursor:pointer}',
P+'@keyframes gpUp{from{transform:translateY(20px);opacity:0}to{transform:none;opacity:1}}',
P+'.gp-sheet{position:absolute;left:0;right:0;bottom:0;background:#f7f9fc;border-radius:24px 24px 0 0;z-index:55;padding:10px 20px 22px;box-shadow:0 -4px 20px rgba(0,0,0,.18);animation:gpUp .25s ease-out}',
P+'.gp-sheet h3{font-size:18px;font-weight:400;margin:6px 0 4px}',
P+'.gp-sheet p{font-size:12.5px;color:#5e5e5e;margin:0 0 12px;line-height:1.45}',
P+'.gp-aff{display:flex;align-items:center;gap:10px;font-size:12.5px;margin:7px 0}',
P+'.gp-aff span{width:120px;color:#444746}',
P+'.gp-aff em{flex:1;height:10px;border-radius:5px;background:#e3e3e3;overflow:hidden}',
P+'.gp-aff em i{display:block;height:100%;background:'+G+';transition:width .6s}',
P+'.gp-scrim{position:absolute;inset:0;background:rgba(0,0,0,.32);z-index:54}',
P+'.gp-tip{position:absolute;z-index:45;background:#1a73e8;color:#fff;font-size:12.5px;font-weight:500;padding:8px 12px;border-radius:8px;box-shadow:0 4px 12px rgba(26,115,232,.4);pointer-events:none;max-width:220px;line-height:1.35;animation:gpBob 1.6s ease-in-out infinite}',
P+'.gp-tip::after{content:"";position:absolute;top:-6px;left:24px;border:6px solid transparent;border-top:0;border-bottom-color:#1a73e8}',
P+'@keyframes gpBob{50%{transform:translateY(3px)}}',
P+'.gp-pulse{animation:gpPulse 1.5s ease-in-out infinite}',
P+'@keyframes gpPulse{0%,100%{box-shadow:0 0 0 0 rgba(1,135,95,.5)}50%{box-shadow:0 0 0 8px rgba(1,135,95,0)}}',
P+'.gp-cat{display:flex;align-items:center;gap:16px;padding:12px 20px;font-size:14.5px;cursor:pointer}',
P+'.gp-cat i{width:36px;height:36px;border-radius:50%;background:#e6f4ea;display:flex;align-items:center;justify-content:center;flex:none}',
P+'.gp-kidban{margin:12px 16px 0;border-radius:16px;padding:16px;background:linear-gradient(120deg,#fde293,#fbbc04 60%,#f29900);color:#3c2a00}',
P+'.gp-kidban b{font-size:18px;font-weight:500;display:block}',
P+'.gp-kidban small{font-size:12.5px}'
].join('\n');

/* ---------- glyphs (24x24, white) ---------- */
var GL={
 bolt:'<path d="M13 2L5 14h6l-1 8 8-12h-6z"/>',
 heart:'<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/>',
 lotus:'<circle cx="12" cy="7" r="3"/><path d="M12 11c-4 0-7 3-7 7h14c0-4-3-7-7-7z"/>',
 drop:'<path d="M12 2s7 7.6 7 12.5A7 7 0 0 1 5 14.5C5 9.6 12 2 12 2z"/>',
 pot:'<path d="M3 10h18v2h-1v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5H3z"/><path d="M9 4h6v2H9zM7 7h10v2H7z"/>',
 cake:'<path d="M4 13h16v8H4zM6 9h12v3H6z"/><path d="M12 3c1 1.3 1.5 2.2 1.5 3A1.5 1.5 0 0 1 12 7.5 1.5 1.5 0 0 1 10.5 6c0-.8.5-1.7 1.5-3z"/>',
 leaf:'<path d="M20 4C9 4 4 9 4 16c0 1.5.3 2.7.8 4 .7-4.3 3.6-8.3 9.2-10-4.5 2.3-7 6-7.6 10.5C17 20 20 13 20 4z"/>',
 plane:'<path d="M21 15.5v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0v5l-8 5v2l8-2.5v5.5l-2 1.5V22l3.5-1 3.5 1v-1.5l-2-1.5V13z"/>',
 globe:'<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="2"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" fill="none" stroke="#fff" stroke-width="1.6"/>',
 coin:'<circle cx="12" cy="12" r="9"/><path d="M12 6v12M15 8.5c-.6-.9-1.7-1.3-3-1.3-1.9 0-3 .9-3 2.3 0 3.2 6 1.6 6 4.8 0 1.4-1.2 2.4-3 2.4-1.4 0-2.6-.5-3.2-1.5" fill="none" stroke="#00000055" stroke-width="1.8"/>',
 split:'<path d="M12 3a9 9 0 0 0 0 18z"/><path d="M13.5 3.1a9 9 0 0 1 0 17.8z" opacity=".55"/>',
 note:'<path d="M9 17.5V5l11-2v12.5" fill="none" stroke="#fff" stroke-width="2.2"/><circle cx="6.5" cy="17.5" r="3"/><circle cx="17.5" cy="15.5" r="3"/>',
 drum:'<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2" opacity=".6"/><rect x="3" y="13" width="8" height="8" rx="2" opacity=".6"/><rect x="13" y="13" width="8" height="8" rx="2"/>',
 aperture:'<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="2.4"/><circle cx="12" cy="12" r="3.5"/>',
 grid:'<rect x="3" y="3" width="11" height="11" rx="2"/><rect x="16" y="3" width="5" height="11" rx="1.5" opacity=".7"/><rect x="3" y="16" width="18" height="5" rx="1.5" opacity=".7"/>',
 check:'<rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="#fff" stroke-width="2"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" stroke-width="2.6"/>',
 pencil:'<path d="M4 20l1-5L15.5 4.5a2.1 2.1 0 0 1 3 0l1 1a2.1 2.1 0 0 1 0 3L9 19z"/>',
 book:'<path d="M4 4h6a3 3 0 0 1 2 1 3 3 0 0 1 2-1h6v15h-6a2 2 0 0 0-2 1 2 2 0 0 0-2-1H4z"/>',
 star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
 blocks:'<rect x="3" y="12" width="8" height="8" rx="1.5"/><rect x="13" y="12" width="8" height="8" rx="1.5" opacity=".7"/><rect x="8" y="3" width="8" height="8" rx="1.5" opacity=".85"/>',
 flower:'<circle cx="12" cy="7" r="3.4"/><circle cx="7" cy="12" r="3.4"/><circle cx="17" cy="12" r="3.4"/><circle cx="12" cy="17" r="3.4"/><circle cx="12" cy="12" r="2.4" fill="#00000040"/>',
 castle:'<path d="M4 21V9h3v3h2V9h2v3h2V9h2v3h2V9h3v12h-7v-4a2 2 0 0 0-4 0v4z"/>',
 paw:'<circle cx="7" cy="9" r="2.2"/><circle cx="12" cy="6.5" r="2.2"/><circle cx="17" cy="9" r="2.2"/><path d="M12 11c3 0 6 4.5 6 7 0 1.5-1.3 2-2.5 2-1.5 0-2.2-.8-3.5-.8s-2 .8-3.5.8C7.3 20 6 19.5 6 18c0-2.5 3-7 6-7z"/>',
 cloud:'<path d="M7 19a5 5 0 0 1-.6-10A6.5 6.5 0 0 1 19 10.5 4.3 4.3 0 0 1 18 19z"/>',
 lang:'<path d="M3 5h10v2H9.7c-.5 2.6-1.8 4.8-3.6 6.5 1 .7 2.1 1.2 3.3 1.6l-.7 1.9c-1.5-.5-2.9-1.2-4.1-2.1-1 .7-2.2 1.3-3.4 1.7l-.6-1.9c1-.3 1.9-.8 2.7-1.3C2 11.9 1.2 10.3.8 8.7h2.1c.4 1.1 1 2.1 1.8 3 1.2-1.3 2.1-2.9 2.5-4.7H3z"/><path d="M16.5 9h2l4 11h-2.2l-1-2.8h-3.6l-1 2.8h-2.2zm-.1 6.3h2.2l-1.1-3.2z"/>',
 rocket:'<path d="M12 2c3.5 2 5 5.6 5 9.5l2.5 3V18l-3.5-1.5H8L4.5 18v-3.5L7 11.5C7 7.6 8.5 4 12 2z"/><circle cx="12" cy="10" r="2" fill="#00000040"/><path d="M10 18h4l-2 4z"/>'
};
var DIMS=['fit','food','travel','money','music','photo','prod','learn','kids','puzzle'];
var LBL={fit:'Health & fitness',food:'Food & drink',travel:'Travel',money:'Finance',music:'Music & audio',photo:'Photography',prod:'Productivity',learn:'Education',kids:'Kids',puzzle:'Puzzle games'};
// id, name, developer, category, vector, rating, downloads label, dl score, size MB, colors, glyph
var RAW=[
 ['trail','Trailmix Run','Sample Labs','Health & fitness',{fit:1,travel:.3},4.6,'10M+',8,24,['#34a853','#0b8043'],'bolt'],
 ['pulse','PulseFit Coach','Demo Fitness Co.','Health & fitness',{fit:1},4.4,'5M+',7,31,['#ea4335','#b31412'],'heart'],
 ['stretch','Stretchly Yoga','Example Studio','Health & fitness',{fit:.8,learn:.2},4.7,'1M+',5,18,['#a142f4','#681da8'],'lotus'],
 ['hydro','Hydrate Buddy','Placeholder Apps','Health & fitness',{fit:.7,food:.3},4.5,'1M+',5,9,['#4fc3f7','#1a73e8'],'drop'],
 ['chef','Sous Chef Pantry','Fictional Foods','Food & drink',{food:1},4.5,'5M+',7,27,['#fb8c00','#e65100'],'pot'],
 ['crumb','Crumb Bake','Fictional Foods','Food & drink',{food:.9,photo:.1},4.3,'500K+',4,22,['#c58b5b','#8d5524'],'cake'],
 ['meal','Mealwise Planner','Sample Labs','Food & drink',{food:.7,fit:.6,prod:.2},4.6,'1M+',5,15,['#7cb342','#33691e'],'leaf'],
 ['wander','Wander Notes','Atlas Demo','Travel & local',{travel:1,photo:.3},4.5,'5M+',7,33,['#00acc1','#00695c'],'plane'],
 ['layover','Layover Lite','Atlas Demo','Travel & local',{travel:.9,prod:.2},4.2,'1M+',5,14,['#5c6bc0','#283593'],'globe'],
 ['peso','PocketPeso','Ledger Example','Finance',{money:1},4.6,'10M+',8,20,['#43a047','#1b5e20'],'coin'],
 ['splitly','Splitly','Ledger Example','Finance',{money:.7,travel:.4},4.4,'1M+',5,12,['#fbc02d','#f57f17'],'split'],
 ['lyre','Lyrebird Tunes','Sample Sound','Music & audio',{music:1},4.5,'50M+',9,40,['#ec407a','#ad1457'],'note'],
 ['drum','Drumpad Lab','Sample Sound','Music & audio',{music:.8,learn:.3},4.3,'1M+',5,58,['#ff7043','#bf360c'],'drum'],
 ['lumen','Lumen Cam','Pixel Placeholder','Photography',{photo:1},4.4,'10M+',8,36,['#424242','#111111'],'aperture'],
 ['collage','Collage Kit','Pixel Placeholder','Photography',{photo:.8,kids:.2},4.2,'5M+',6,29,['#26c6da','#7e57c2'],'grid'],
 ['task','Taskloom','Demo Works','Productivity',{prod:1},4.7,'5M+',7,16,['#4285f4','#1967d2'],'check'],
 ['notely','Notely Pad','Demo Works','Productivity',{prod:.8,learn:.3},4.5,'10M+',8,11,['#fdd663','#f9ab00'],'pencil'],
 ['lingo','Lingo Leaf','Example Learning','Education',{learn:1,travel:.45},4.7,'10M+',8,44,['#66bb6a','#2e7d32'],'lang'],
 ['star','Starmap Junior','Example Learning','Education',{kids:.7,learn:.6},4.6,'1M+',5,38,['#3949ab','#1a237e'],'rocket'],
 ['block','Block Blast Zen','Tiny Games Demo','Puzzle',{puzzle:1},4.5,'50M+',9,62,['#ab47bc','#4a148c'],'blocks'],
 ['word','Word Garden','Tiny Games Demo','Word',{puzzle:.7,learn:.4},4.6,'10M+',8,48,['#9ccc65','#558b2f'],'flower'],
 ['tales','Tiny Tales','Storybook Sample','Kids',{kids:1,learn:.2},4.4,'1M+',5,52,['#ffa726','#ef6c00'],'castle'],
 ['zoo','Doodle Zoo','Storybook Sample','Kids',{kids:.9,puzzle:.2},4.3,'5M+',6,47,['#26a69a','#00796b'],'paw'],
 ['cloudy','Cloudy Weather','Placeholder Apps','Weather',{travel:.3,prod:.3},4.4,'10M+',8,10,['#90caf9','#1e88e5'],'cloud']
];
var APPS={},ORDER=[];
RAW.forEach(function(r,i){var v=DIMS.map(function(d){return r[4][d]||0;});var n=Math.sqrt(v.reduce(function(a,x){return a+x*x;},0))||1;
  APPS[r[0]]={id:r[0],name:r[1],dev:r[2],cat:r[3],v:v.map(function(x){return x/n;}),rating:r[5],dl:r[6],pop:r[7],mb:r[8],c:r[9],g:r[10],jit:((i*37)%11)/100};ORDER.push(r[0]);});
function dot(a,b){var s=0;for(var i=0;i<a.length;i++)s+=a[i]*b[i];return s;}

function icon(a,s){return '<div class="gp-ic" style="width:'+s+'px;height:'+s+'px;background:linear-gradient(140deg,'+a.c[0]+','+a.c[1]+')"><svg width="'+Math.round(s*.52)+'" height="'+Math.round(s*.52)+'" viewBox="0 0 24 24" fill="#fff">'+GL[a.g]+'</svg></div>';}
function ui(n,c){c=c||'#444746';var m={
 search:'<path d="M10.5 4a6.5 6.5 0 0 1 5.2 10.4l4.4 4.4-1.4 1.4-4.4-4.4A6.5 6.5 0 1 1 10.5 4zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"/>',
 mic:'<path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-3.1A7 7 0 0 0 19 11z"/>',
 back:'<path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20z"/>',
 more:'<circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/>',
 games:'<path d="M7 7h10a5 5 0 0 1 0 10c-1.6 0-2.4-1-3.4-2h-3.2c-1 1-1.8 2-3.4 2A5 5 0 0 1 7 7zm0 3v1.2H5.8v1.6H7V14h1.6v-1.2h1.2v-1.6H8.6V10zm8.5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>',
 apps:'<path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z"/>',
 books:'<path d="M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm1 3v8l2.5-1.5L12 14V6z"/>',
 arrow:'<path d="M8.6 5.4L10 4l8 8-8 8-1.4-1.4L15.2 12z"/>',
 spark:'<path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z"/>',
 info:'<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-6h2zm0-8h-2V7h2z"/>',
 reset:'<path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z"/>'
};return '<svg width="22" height="22" viewBox="0 0 24 24" fill="'+c+'">'+(m[n]||'')+'</svg>';}

window.DEMOS[ID]={
 frame:'phone',
 title:'Google Play — personalized app recommendations',
 caption:'Open an app in “Recommended for you”, tap Install, then go back: the home feed re-ranks and a “Because you installed…” row appears. Tap “Why these?” to see the taste profile.',
 sources:[
  'https://research.google/blog/app-discovery-with-google-play-part-2-personalized-recommendations-with-related-apps/',
  'https://deepmind.google/blog/advanced-machine-learning-helps-play-store-users-discover-personalised-apps/',
  'https://developers.google.com/machine-learning/recommendation/overview',
  'https://www.androidauthority.com/google-play-store-july-ui-changes-3685473/',
  'https://9to5google.com/2019/06/12/play-store-material-theme-redesign/'
 ],
 mount:function(root){
  var st=document.createElement('style');st.textContent=CSS;root.appendChild(st);
  var app=document.createElement('div');app.className='gp-app';root.appendChild(app);
  var timers=[],ivs=[];
  function T(f,ms){var t=setTimeout(f,ms);timers.push(t);return t;}
  function clearAll(){timers.forEach(clearTimeout);ivs.forEach(clearInterval);timers=[];ivs=[];}
  function q(s,el){return (el||app).querySelector(s);}
  function qa(s,el){return Array.prototype.slice.call((el||app).querySelectorAll(s));}
  var S;
  function fresh(){S={tab:'foryou',installed:[],history:[],prevRank:{},lastSeed:null,tipDone:false,installing:null,dirty:false};}
  fresh();

  /* ---------- model ---------- */
  function profile(){var p=DIMS.map(function(){return .25;});S.installed.forEach(function(id,k){var w=1.6+.4*k;APPS[id].v.forEach(function(x,i){p[i]+=x*w;});});return p;}
  function score(a,p){return dot(a.v,p)+.06*a.pop+.15*a.rating+a.jit;}
  function recs(n){var p=profile(),ex=S.lastSeed?related(S.lastSeed,3):[];return ORDER.filter(function(id){return S.installed.indexOf(id)<0&&ex.indexOf(id)<0&&APPS[id].cat!=='Kids';}).sort(function(x,y){return score(APPS[y],p)-score(APPS[x],p);}).slice(0,n);}
  function related(seed,n,excl){var p=profile(),s=APPS[seed];return ORDER.filter(function(id){return id!==seed&&S.installed.indexOf(id)<0&&id!==excl;}).sort(function(x,y){var a=APPS[x],b=APPS[y];return (dot(b.v,s.v)*1.4+.08*dot(b.v,p)+.03*b.pop+b.jit)-(dot(a.v,s.v)*1.4+.08*dot(a.v,p)+.03*a.pop+a.jit);}).slice(0,n);}

  /* ---------- shell ---------- */
  app.innerHTML='<div class="gp-status"><span>9:41</span><span style="display:flex;gap:6px;align-items:center"><svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 12L0 3.5a11.5 11.5 0 0 1 16 0z" fill="#1f1f1f"/></svg><svg width="14" height="14" viewBox="0 0 14 14"><path d="M14 0v14H0z" fill="#1f1f1f"/></svg><svg width="10" height="15" viewBox="0 0 10 15"><rect x="2.5" y="0" width="5" height="2" fill="#1f1f1f"/><rect x="0" y="1.5" width="10" height="13.5" rx="1.5" fill="#1f1f1f"/></svg></span></div>'+
   '<div class="gp-home"><div class="gp-search">'+ui('search')+'<span>Search apps &amp; games</span>'+ui('mic')+'<div class="gp-av">J</div></div>'+
   '<div class="gp-tabs">'+[['foryou','For you'],['charts','Top charts'],['kids','Kids'],['cats','Categories']].map(function(t){return '<div class="gp-tab" data-t="'+t[0]+'">'+t[1]+'</div>';}).join('')+'</div>'+
   '<div class="gp-body"></div></div>'+
   '<div class="gp-nav"><div data-n="games"><i>'+ui('games')+'</i>Games</div><div class="on" data-n="apps"><i>'+ui('apps','#1f1f1f')+'</i>Apps</div><div data-n="search"><i>'+ui('search')+'</i>Search</div><div data-n="books"><i>'+ui('books')+'</i>Books</div></div>'+
   '<div class="gp-detail"></div>';
  var body=q('.gp-body'),detail=q('.gp-detail');
  qa('.gp-tab').forEach(function(t){t.onclick=function(){S.tab=t.dataset.t;renderTab();};});
  qa('.gp-nav div').forEach(function(n){n.onclick=function(){if(n.dataset.n!=='apps')snack(n.textContent+' isn’t part of this demo — try Apps');};});
  q('.gp-search').onclick=function(){snack('Search isn’t part of this demo');};

  function snack(msg,action,fn){var old=q('.gp-snack');if(old)old.remove();var s=document.createElement('div');s.className='gp-snack';s.innerHTML='<span>'+msg+'</span>'+(action?'<a>'+action+'</a>':'');app.appendChild(s);if(action)q('a',s).onclick=function(){s.remove();fn();};T(function(){s.remove();},3200);}
  function tip(el,text){var old=q('.gp-tip');if(old)old.remove();if(!el)return;var r=el.getBoundingClientRect(),R=app.getBoundingClientRect(),k=R.width/375;var t=document.createElement('div');t.className='gp-tip';t.textContent=text;t.style.left=Math.max(8,(r.left-R.left)/k-6)+'px';t.style.top=((r.bottom-R.top)/k+8)+'px';app.appendChild(t);}
  function clearTip(){var t=q('.gp-tip');if(t)t.remove();}

  function card(id,row,badge){var a=APPS[id];return '<div class="gp-card" data-card="'+id+'" data-row="'+row+'">'+(badge||'')+icon(a,80)+'<div class="nm">'+a.name+'</div><div class="rt">'+(S.installed.indexOf(id)>=0?'Installed':a.rating.toFixed(1)+' ★')+'</div></div>';}
  function section(key,title,sub,ids,cls){return '<div class="gp-sec '+(cls||'')+'" data-sec="'+key+'"><div class="gp-sh"><div><b>'+title+'</b>'+(sub?'<small>'+sub+'</small>':'')+'</div><span class="ar">'+ui('arrow')+'</span></div><div class="gp-row" data-rowk="'+key+'">'+ids.map(function(id){return card(id,key);}).join('')+'</div></div>';}
  function bindCards(el){qa('[data-card]',el).forEach(function(c){c.onclick=function(){openDetail(c.dataset.card);};});}

  /* ---------- For you ---------- */
  function forYou(){
    var r=recs(10),old=S.rr?S.prevRank:null;S.rr=false;S.prevRank={};r.forEach(function(id,i){S.prevRank[id]=i;});
    var feat=APPS['wander'];
    body.innerHTML='<div class="gp-perso"><span class="gp-chip g" data-a="why">'+ui('spark','#0d652d').replace('width="22" height="22"','width="15" height="15"')+'<span class="pc">Personalized for you</span></span><span class="gp-chip" data-a="why2">Why these?</span><span class="gp-chip" data-a="reset" style="margin-left:auto">'+ui('reset').replace('width="22" height="22"','width="14" height="14"')+'</span></div>'+
     '<div class="gp-because"></div>'+
     section('rec','Recommended for you','',r)+
     '<div class="gp-sec"><div class="gp-sh"><div><b>Suggested for you</b></div></div><div class="gp-feat" data-card="wander"><div class="art" style="background:linear-gradient(120deg,#00acc1,#00695c)"><svg width="375" height="132" viewBox="0 0 375 132" style="position:absolute;left:-16px;top:0"><circle cx="300" cy="30" r="22" fill="#fff59d" opacity=".85"/><path d="M0 132 L70 70 L120 110 L190 50 L260 120 L320 80 L400 132Z" fill="#004d40" opacity=".55"/><path d="M0 132 L90 95 L160 125 L240 90 L330 120 L400 100 L400 132Z" fill="#00332c" opacity=".6"/><path d="M60 40 q60 -30 140 0" stroke="#fff" stroke-width="2" stroke-dasharray="5 5" fill="none"/><g transform="translate(200 38) rotate(20)" fill="#fff"><path d="M9 4.5v-1L5 1V-1.5a.8.8 0 0 0-1.6 0V1L-.5 3.5v1l4-1.2v2.8l-1 .7v.8l1.8-.5 1.8.5v-.8l-1-.7V3.3z" transform="scale(2)"/></g><text x="30" y="112" font-family="Roboto,sans-serif" font-size="20" font-weight="500" fill="#fff">Plan your next trip</text></svg></div><div class="meta">'+icon(feat,40)+'<div><b>'+feat.name+'</b><small>'+feat.cat+' · '+feat.rating+' ★</small></div><button class="gp-pill">Install</button></div></div></div>'+
     section('new','New &amp; updated apps','',['cloudy','notely','lyre','block','peso','lumen'])+
     section('fresh','Popular apps','',['lyre','block','peso','notely','word','trail'].filter(function(x,i,arr){return arr.indexOf(x)===i;}))+
     '<div style="height:20px"></div>';
    if(old){var row=q('[data-rowk=rec]');row.innerHTML=r.map(function(id,i){return card(id,'rec',badgeFor(old,id,i));}).join('');}
    bindCards(body);
    q('[data-a=why]').onclick=q('[data-a=why2]').onclick=whyPanel;
    q('[data-a=reset]').onclick=function(){clearAll();fresh();closeDetail(true);renderTab();snack('Install history cleared — recommendations reset');T(showFirstTip,500);};
    if(S.lastSeed)renderBecause(false);
    updatePerso();
  }
  function updatePerso(){var pc=q('.pc');if(pc)pc.textContent=S.installed.length?'Personalized · '+S.installed.length+' install'+(S.installed.length>1?'s':''):'Personalized for you';}
  function renderBecause(animate){
    var w=q('.gp-because');if(!w||!S.lastSeed)return;var seed=APPS[S.lastSeed];
    w.innerHTML=section('because','Because you installed '+seed.name,'You might also like',related(S.lastSeed,8),animate?'new':'');bindCards(w);
  }
  function badgeFor(prev,id,i){if(prev[id]===undefined)return '<span class="mv nw">NEW</span>';if(prev[id]-i>0)return '<span class="mv">▲'+(prev[id]-i)+'</span>';return '';}
  function rerank(){
    // FLIP: animate cards in the "Recommended for you" row to new positions
    var row=q('[data-rowk=rec]');if(!row)return;var k=app.getBoundingClientRect().width/375;
    var before={};qa('[data-card]',row).forEach(function(c){before[c.dataset.card]=c.getBoundingClientRect().left;});
    var prev=S.prevRank,r=recs(10);S.prevRank={};r.forEach(function(id,i){S.prevRank[id]=i;});
    row.innerHTML=r.map(function(id,i){return card(id,'rec',badgeFor(prev,id,i));}).join('');
    bindCards(row);
    qa('[data-card]',row).forEach(function(c){var id=c.dataset.card,now=c.getBoundingClientRect().left;
      if(c.animate){if(before[id]!==undefined){var dx=(before[id]-now)/k;if(Math.abs(dx)>1)c.animate([{transform:'translateX('+dx+'px)'},{transform:'none'}],{duration:650,easing:'cubic-bezier(.2,0,0,1)'});}
      else c.animate([{transform:'scale(.6)',opacity:0},{transform:'none',opacity:1}],{duration:500,easing:'ease-out'});}});
    row.scrollLeft=0;
    renderBecause(true);updatePerso();
    var body2=q('.gp-body');body2.scrollTop=0;
  }

  /* ---------- other tabs ---------- */
  function charts(){var chip=S.chartChip||'free';
    var list=ORDER.slice().sort(function(a,b){return (APPS[b].pop+APPS[b].rating)-(APPS[a].pop+APPS[a].rating);});
    if(chip==='gross')list=list.filter(function(id){return ['lyre','block','peso','word','lumen','task','chef','pulse','wander','lingo'].indexOf(id)>=0;}).reverse();
    if(chip==='paid')list=['stretch','drum','star','crumb','layover','tales','meal','splitly','collage','hydro'];
    body.innerHTML='<div class="gp-seg">'+[['free','Top free'],['gross','Top grossing'],['paid','Top paid']].map(function(c){return '<span class="gp-chip'+(chip===c[0]?' g':'')+'" data-c="'+c[0]+'">'+c[1]+'</span>';}).join('')+'</div><div class="gp-list">'+
     list.slice(0,12).map(function(id,i){var a=APPS[id];return '<div class="it" data-card="'+id+'"><span class="n">'+(i+1)+'</span>'+icon(a,52)+'<div class="tx"><b>'+a.name+'</b><small>'+a.cat+'</small><small>'+(S.installed.indexOf(id)>=0?'Installed':a.rating.toFixed(1)+' ★ · '+a.mb+' MB')+(chip==='paid'?' · $'+(1.99+i%3).toFixed(2):'')+'</small></div></div>';}).join('')+'</div>';
    bindCards(body);qa('[data-c]').forEach(function(c){c.onclick=function(){S.chartChip=c.dataset.c;charts();};});
  }
  function kids(){body.innerHTML='<div class="gp-kidban"><b>Teacher-approved picks</b><small>Fun, enriching apps for ages 5 &amp; under, 6–8 and 9–12 (sample)</small></div>'+section('k1','Ages 5 & under','',['tales','zoo','star','collage'])+section('k2','Learn something new','',['star','lingo','word','drum'])+'<div style="height:20px"></div>';bindCards(body);}
  function cats(){var cs=[['Health & fitness','heart','trail'],['Food & drink','pot','chef'],['Travel & local','plane','wander'],['Finance','coin','peso'],['Music & audio','note','lyre'],['Photography','aperture','lumen'],['Productivity','check','task'],['Education','book','lingo'],['Kids','castle','tales'],['Weather','cloud','cloudy']];
    body.innerHTML='<div style="padding:12px 20px 4px;font-size:16px;font-weight:500">App categories</div>'+cs.map(function(c){return '<div class="gp-cat" data-card="'+c[2]+'"><i><svg width="20" height="20" viewBox="0 0 24 24" fill="'+G+'">'+GL[c[1]].replace(/#fff/g,G)+'</svg></i>'+c[0]+'</div>';}).join('');bindCards(body);}
  function renderTab(){clearTip();qa('.gp-tab').forEach(function(t){t.classList.toggle('on',t.dataset.t===S.tab);});body.scrollTop=0;
    ({foryou:forYou,charts:charts,kids:kids,cats:cats})[S.tab]();}

  /* ---------- detail page ---------- */
  var curId=null;
  function openDetail(id){
    clearTip();curId=id;var a=APPS[id],inst=S.installed.indexOf(id)>=0;
    var reviews=Math.round(a.pop*1.7+a.jit*100)+'K';
    var dist=[.72,.15,.06,.03,.04].map(function(x,i){return i===0?x+(a.rating-4.4)*.6:x;});
    detail.innerHTML='<div class="gp-dbar"><div class="gp-ib" data-a="back">'+ui('back','#1f1f1f')+'</div><div style="flex:1"></div><div class="gp-ib">'+ui('search','#1f1f1f')+'</div><div class="gp-ib">'+ui('more','#1f1f1f')+'</div></div>'+
    '<div class="gp-dscroll"><div class="gp-dh"><div class="gp-icw"><svg class="ring" viewBox="0 0 86 86"><circle cx="43" cy="43" r="40" fill="none" stroke="'+G+'" stroke-width="3.5" stroke-dasharray="251.3" stroke-dashoffset="251.3" stroke-linecap="round"/></svg>'+icon(a,72)+'</div><div><h2>'+a.name+'</h2><div class="dev">'+a.dev+'</div><small>Contains ads · In-app purchases</small></div></div>'+
    '<div class="gp-stats"><div><b>'+a.rating.toFixed(1)+' ★</b>'+reviews+' reviews</div><div><b>'+a.mb+' MB</b>Size</div><div><b>'+a.dl+'</b>Downloads</div><div><b style="display:inline-block;border:1.5px solid #1f1f1f;border-radius:3px;padding:0 4px;font-size:11px">E</b><br>Everyone</div></div>'+
    '<div class="gp-btns"></div><div class="gp-prog"></div>'+
    '<div class="gp-shots">'+[0,1,2].map(function(i){return '<div class="gp-shot" style="background:linear-gradient('+(160+i*30)+'deg,'+a.c[0]+','+a.c[1]+')"><div style="position:absolute;left:10px;right:10px;top:14px;height:8px;border-radius:4px;background:#ffffff88"></div><div style="position:absolute;left:10px;width:50%;top:28px;height:6px;border-radius:3px;background:#ffffff55"></div><div style="position:absolute;left:10px;right:10px;top:46px;bottom:14px;border-radius:8px;background:#ffffff33;display:flex;align-items:center;justify-content:center"><svg width="38" height="38" viewBox="0 0 24 24" fill="#fff" opacity=".85">'+GL[a.g]+'</svg></div></div>';}).join('')+'</div>'+
    '<div class="gp-about"><b>About this app →</b><p>A sample '+a.cat.toLowerCase()+' app made up for this demo. '+a.name+' isn’t a real product — it exists to show how installs feed Play’s recommendations.</p></div>'+
    '<div class="gp-sec" data-sec="also"><div class="gp-sh"><div><b>You might also like</b><small>Related to '+a.name+', ranked for you</small></div><span class="ar">'+ui('arrow')+'</span></div><div class="gp-row">'+related(id,8).map(function(x){return card(x,'also');}).join('')+'</div></div>'+
    '<div class="gp-about"><b>Ratings and reviews →</b></div><div class="gp-rv"><div><div class="big">'+a.rating.toFixed(1)+'</div><div style="font-size:12px;color:'+G+'">★★★★★</div><div style="font-size:11px;color:#5e5e5e">'+reviews+' reviews</div></div><div class="gp-bars">'+dist.map(function(x,i){return '<div>'+(5-i)+'<span><i style="width:'+Math.round(Math.max(.02,x)*100)+'%"></i></span></div>';}).join('')+'</div></div>'+
    '</div>';
    detail.classList.add('show');q('.gp-dscroll',detail).scrollTop=0;
    bindCards(q('[data-sec=also]',detail));
    q('[data-a=back]',detail).onclick=function(){closeDetail();};
    paintBtns(id,inst?'done':'idle');
    if(!inst&&!S.installed.length)T(function(){tip(q('.gp-btn',detail),'Tap Install — Play learns from what you install');},420);
  }
  function paintBtns(id,state,pct){
    var b=q('.gp-btns',detail),pr=q('.gp-prog',detail),ring=q('.ring circle',detail),w=q('.gp-icw',detail);if(!b)return;var a=APPS[id];
    if(state==='idle'){b.innerHTML='<button class="gp-btn gp-pulse" data-a="install">Install</button>';pr.textContent='';w.classList.remove('busy');q('[data-a=install]',detail).onclick=function(){install(id);};}
    else if(state==='busy'){if(!q('[data-a=cancel]',detail)){b.innerHTML='<button class="gp-btn ol" data-a="cancel">Cancel</button><button class="gp-btn" disabled>Open</button>';q('[data-a=cancel]',detail).onclick=function(){cancel(id);};}
      w.classList.add('busy');ring.style.strokeDashoffset=251.3*(1-(pct||0)/100);
      pr.textContent=pct===undefined?'Pending…':pct>=100?'Installing…':Math.floor(pct)+'% of '+a.mb+' MB';}
    else{w.classList.remove('busy');ring.style.strokeDashoffset=251.3;pr.innerHTML='<span style="color:'+G+'">✓ Installed</span> · your recommendations just updated';
      b.innerHTML='<button class="gp-btn ol" data-a="uninst">Uninstall</button><button class="gp-btn" data-a="open">Open</button>';
      q('[data-a=open]',detail).onclick=function(){snack('Opening '+a.name+'… (it’s fictional!)');};
      q('[data-a=uninst]',detail).onclick=function(){S.installed=S.installed.filter(function(x){return x!==id;});if(S.lastSeed===id)S.lastSeed=S.installed[S.installed.length-1]||null;S.dirty=true;paintBtns(id,'idle');snack(a.name+' uninstalled');};}
  }
  var instIv=null;
  function cancel(id){if(instIv){clearInterval(instIv);instIv=null;}S.installing=null;paintBtns(id,'idle');}
  function install(id){
    clearTip();if(instIv)clearInterval(instIv);S.installing=id;paintBtns(id,'busy');
    var t0=Date.now();
    instIv=setInterval(function(){var e=Date.now()-t0;
      if(curId!==id){return;}
      if(e<700)paintBtns(id,'busy');else if(e<2700)paintBtns(id,'busy',(e-700)/20);else if(e<3300)paintBtns(id,'busy',100);
      else{clearInterval(instIv);instIv=null;S.installing=null;if(S.installed.indexOf(id)<0)S.installed.push(id);S.lastSeed=id;S.dirty=true;paintBtns(id,'done');
        snack(APPS[id].name+' installed','Back to home',function(){closeDetail();});
        T(function(){if(S.installed.length===1&&curId===id)tip(q('[data-a=back]',detail),'Now go back — watch your home feed re-rank');},600);}
    },60);ivs.push(instIv);
  }
  function closeDetail(silent){
    clearTip();if(instIv){clearInterval(instIv);instIv=null;S.installing=null;}
    detail.classList.remove('show');curId=null;
    if(silent)return;
    if(S.dirty){S.dirty=false;
      if(S.tab!=='foryou'){S.tab='foryou';S.rr=true;renderTab();var b=q('.gp-because .gp-sec');if(b)b.classList.add('new');}
      else T(rerank,320);
      T(function(){snack('Recommendations updated from your installs','Why?',whyPanel);},900);
    }
  }

  /* ---------- "Why these?" panel ---------- */
  function whyPanel(){
    var p=profile(),mx=Math.max.apply(null,p);var idx=DIMS.map(function(d,i){return i;}).sort(function(a,b){return p[b]-p[a];}).slice(0,6);
    var scrim=document.createElement('div');scrim.className='gp-scrim';var sh=document.createElement('div');sh.className='gp-sheet';
    sh.innerHTML='<div style="width:32px;height:4px;border-radius:2px;background:#c4c7c5;margin:0 auto 6px"></div><h3>Why you’re seeing these apps</h3>'+
     '<p>'+(S.installed.length?'Based on '+S.installed.length+' install'+(S.installed.length>1?'s':'')+' ('+S.installed.map(function(x){return APPS[x].name;}).join(', ')+'). ':'No installs yet — showing broadly popular apps. ')+
     'Like Play’s real system (simplified here): candidate apps are retrieved by similarity to what you’ve installed, then re-ranked by a model of your interests.</p>'+
     '<div style="font-size:12px;font-weight:500;color:#444746;margin-bottom:2px">Your interest profile (illustrative)</div>'+
     idx.map(function(i){return '<div class="gp-aff"><span>'+LBL[DIMS[i]]+'</span><em><i style="width:'+Math.round(p[i]/mx*100)+'%"></i></em></div>';}).join('')+
     '<div style="display:flex;gap:10px;margin-top:14px"><button class="gp-btn ol" data-a="x">Got it</button></div>';
    app.appendChild(scrim);app.appendChild(sh);
    function close(){scrim.remove();sh.remove();}scrim.onclick=close;q('[data-a=x]',sh).onclick=close;
  }

  function showFirstTip(){if(S.installed.length||S.tab!=='foryou'||curId)return;var c=q('[data-rowk=rec] .gp-card');if(c){c.querySelector('.gp-ic').classList.add('gp-pulse');tip(c,'Tap an app to open it');}}
  renderTab();T(showFirstTip,600);
  return function cleanup(){clearAll();if(instIv)clearInterval(instIv);app.innerHTML='';};
 }
};
})();
