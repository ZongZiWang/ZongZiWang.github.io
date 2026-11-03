/* Uber in-app tipping (2017) — stylized recreation of the rider end-of-trip rating + tip flow,
   plus the driver-side tip notification. All data is fake. */
(function(){
window.DEMOS=window.DEMOS||{};
var ID='uber-tipping';
var CSS=`
.demo-uber-tipping{background:#fff;color:#000;font-family:-apple-system,'Helvetica Neue',system-ui,sans-serif;-webkit-font-smoothing:antialiased;user-select:none}
.demo-uber-tipping .sb{position:absolute;top:0;left:0;right:0;height:44px;display:flex;justify-content:space-between;align-items:center;padding:6px 30px 0 34px;font-weight:600;font-size:15px;z-index:40;pointer-events:none}
.demo-uber-tipping .sb .ic{display:flex;gap:5px;align-items:center}
.demo-uber-tipping .sb.dk{color:#fff}
.demo-uber-tipping .pg{position:absolute;inset:0;display:none;flex-direction:column}
.demo-uber-tipping .pg.on{display:flex}
.demo-uber-tipping .map{position:relative;height:210px;flex:none;background:#eef0f2;overflow:hidden}
.demo-uber-tipping .map svg{position:absolute;inset:0}
.demo-uber-tipping .arr{position:absolute;left:16px;bottom:14px;background:#000;color:#fff;font-weight:700;font-size:13px;padding:7px 12px;border-radius:4px}
.demo-uber-tipping .sheet{flex:1;background:#fff;margin-top:-12px;border-radius:14px 14px 0 0;position:relative;box-shadow:0 -4px 16px rgba(0,0,0,.08);display:flex;flex-direction:column;overflow:hidden}
.demo-uber-tipping .scroll{flex:1;overflow-y:auto;padding:8px 20px 12px;scrollbar-width:none}
.demo-uber-tipping .scroll::-webkit-scrollbar{display:none}
.demo-uber-tipping .grab{width:36px;height:4px;border-radius:2px;background:#d6d6d6;margin:8px auto 4px}
.demo-uber-tipping .drv{display:flex;align-items:center;gap:12px;padding:10px 0 14px;border-bottom:1px solid #eee}
.demo-uber-tipping .av{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#5b6b7d,#2e3a46);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:19px;flex:none;position:relative}
.demo-uber-tipping .av small{position:absolute;bottom:-4px;right:-6px;background:#fff;color:#000;border-radius:10px;font-size:10px;font-weight:700;padding:1px 5px;box-shadow:0 1px 3px rgba(0,0,0,.25)}
.demo-uber-tipping .drv b{font-size:17px;display:block}
.demo-uber-tipping .drv span{font-size:13px;color:#6b6b6b}
.demo-uber-tipping .fare{margin-left:auto;text-align:right}
.demo-uber-tipping .fare b{font-size:17px}
.demo-uber-tipping h2{font-size:22px;font-weight:700;margin:16px 0 4px;letter-spacing:-.3px;text-align:center}
.demo-uber-tipping .sub{font-size:13px;color:#6b6b6b;text-align:center}
.demo-uber-tipping .stars{display:flex;justify-content:center;gap:8px;margin:12px 0 4px}
.demo-uber-tipping .stars button{background:none;border:0;padding:2px;cursor:pointer;transition:transform .15s}
.demo-uber-tipping .stars button:hover{transform:scale(1.12)}
.demo-uber-tipping .stars svg{width:40px;height:40px;display:block}
.demo-uber-tipping .stars path{fill:#e2e2e2;transition:fill .15s}
.demo-uber-tipping .stars button.f path{fill:#000}
.demo-uber-tipping .rlab{text-align:center;font-size:13px;font-weight:600;height:18px;color:#333}
.demo-uber-tipping .sec{margin-top:0;opacity:0;transform:translateY(8px);transition:opacity .3s,transform .3s;pointer-events:none;max-height:0;overflow:hidden}
.demo-uber-tipping .sec.on{opacity:1;transform:none;pointer-events:auto;max-height:400px;margin-top:16px}
.demo-uber-tipping .lab{font-size:15px;font-weight:700;margin-bottom:10px}
.demo-uber-tipping .badges{display:flex;gap:10px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.demo-uber-tipping .badges::-webkit-scrollbar{display:none}
.demo-uber-tipping .bd{flex:none;width:76px;text-align:center;font-size:11px;font-weight:500;cursor:pointer;color:#333}
.demo-uber-tipping .bd i{display:flex;width:56px;height:56px;margin:0 auto 5px;border-radius:50%;background:#f3f3f3;align-items:center;justify-content:center;font-style:normal;font-size:24px;border:2px solid transparent;transition:all .15s;position:relative}
.demo-uber-tipping .bd.on i{background:#000;border-color:#000;filter:none}
.demo-uber-tipping .bd.on i::after{content:'✓';position:absolute;right:-3px;bottom:-3px;width:18px;height:18px;border-radius:50%;background:#05a357;color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center;border:2px solid #fff}
.demo-uber-tipping .chips{display:flex;flex-wrap:wrap;gap:8px}
.demo-uber-tipping .chip{border:0;background:#f3f3f3;border-radius:18px;padding:8px 13px;font-weight:500;font-size:13px;font-family:inherit;cursor:pointer}
.demo-uber-tipping .chip.on{background:#000;color:#fff}
.demo-uber-tipping .tips{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.demo-uber-tipping .tip{border:2px solid #eee;background:#fff;border-radius:10px;height:56px;font-family:inherit;font-weight:700;font-size:17px;cursor:pointer;transition:all .15s;color:#000}
.demo-uber-tipping .tip small{display:block;font-size:10px;font-weight:500;color:#6b6b6b}
.demo-uber-tipping .tip:hover{border-color:#bbb}
.demo-uber-tipping .tip.on{background:#000;color:#fff;border-color:#000}
.demo-uber-tipping .tip.on small{color:#bbb}
.demo-uber-tipping .note{font-size:12px;color:#6b6b6b;margin-top:9px;display:flex;gap:6px;align-items:center}
.demo-uber-tipping .foot{padding:12px 20px 26px;border-top:1px solid #f0f0f0;background:#fff}
.demo-uber-tipping .btn{width:100%;height:52px;border:0;border-radius:8px;background:#000;color:#fff;font-weight:600;font-size:17px;font-family:inherit;cursor:pointer;transition:background .2s;position:relative;overflow:hidden}
.demo-uber-tipping .btn:disabled{background:#e8e8e8;color:#a6a6a6;cursor:default}
.demo-uber-tipping .btn.pulse:not(:disabled){animation:ut-pulse 1.6s infinite}
@keyframes ut-pulse{0%,100%{box-shadow:0 0 0 0 rgba(0,0,0,.35)}50%{box-shadow:0 0 0 7px rgba(0,0,0,0)}}
.demo-uber-tipping .btn .bar{position:absolute;left:0;top:0;bottom:0;background:rgba(255,255,255,.18);width:0}
.demo-uber-tipping .skip{display:block;margin:8px auto 0;background:none;border:0;color:#6b6b6b;font-weight:500;font-size:13px;font-family:inherit;cursor:pointer}
.demo-uber-tipping .pad{position:absolute;left:0;right:0;bottom:0;background:#fff;border-radius:16px 16px 0 0;box-shadow:0 -8px 30px rgba(0,0,0,.2);transform:translateY(105%);transition:transform .28s cubic-bezier(.2,.8,.2,1);z-index:30;padding:14px 20px 26px}
.demo-uber-tipping .pad.on{transform:none}
.demo-uber-tipping .pad .amt{text-align:center;font-size:44px;font-weight:700;letter-spacing:-1px;margin:6px 0 2px}
.demo-uber-tipping .pad .hint{text-align:center;font-size:12px;color:#6b6b6b;margin-bottom:10px}
.demo-uber-tipping .keys{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:12px}
.demo-uber-tipping .keys button{height:46px;border:0;background:#f6f6f6;border-radius:8px;font-weight:500;font-size:21px;font-family:inherit;cursor:pointer}
.demo-uber-tipping .keys button:active{background:#e6e6e6}
.demo-uber-tipping .shade{position:absolute;inset:0;background:rgba(0,0,0,.4);opacity:0;pointer-events:none;transition:opacity .25s;z-index:29}
.demo-uber-tipping .shade.on{opacity:1;pointer-events:auto}
.demo-uber-tipping .done{align-items:center;justify-content:center;text-align:center;padding:60px 28px 30px}
.demo-uber-tipping .chk{width:92px;height:92px;border-radius:50%;background:#05a357;display:flex;align-items:center;justify-content:center;transform:scale(0);transition:transform .45s cubic-bezier(.2,1.6,.4,1)}
.demo-uber-tipping .done.go .chk{transform:scale(1)}
.demo-uber-tipping .chk path{stroke-dasharray:60;stroke-dashoffset:60;transition:stroke-dashoffset .5s .3s}
.demo-uber-tipping .done.go .chk path{stroke-dashoffset:0}
.demo-uber-tipping .done h1{font-size:28px;letter-spacing:-.5px;margin:22px 0 8px}
.demo-uber-tipping .done p{color:#545454;font-size:15px;margin:0 0 18px}
.demo-uber-tipping .rcpt{width:100%;background:#f6f6f6;border-radius:12px;padding:14px 16px;font-size:14px;text-align:left;margin-bottom:18px}
.demo-uber-tipping .rcpt div{display:flex;justify-content:space-between;padding:4px 0}
.demo-uber-tipping .rcpt .tot{border-top:1px solid #ddd;margin-top:6px;padding-top:9px;font-weight:700}
.demo-uber-tipping .ghost{background:#eee;color:#000}
.demo-uber-tipping .dscr{background:#111;color:#fff}
.demo-uber-tipping .dmap{position:absolute;inset:0;background:#1d2126}
.demo-uber-tipping .epill{position:absolute;top:180px;left:50%;transform:translateX(-50%);background:#000;color:#fff;border-radius:22px;padding:9px 20px;font-weight:700;font-size:20px;box-shadow:0 4px 14px rgba(0,0,0,.5);z-index:5;transition:background .3s}
.demo-uber-tipping .epill.up{background:#05a357}
.demo-uber-tipping .notif{position:absolute;top:50px;left:10px;right:10px;background:rgba(245,245,245,.97);color:#000;border-radius:16px;padding:11px 13px;display:flex;gap:10px;z-index:45;transform:translateY(-140%);transition:transform .45s cubic-bezier(.2,.9,.3,1.1);box-shadow:0 10px 30px rgba(0,0,0,.5);cursor:pointer}
.demo-uber-tipping .notif.on{transform:none}
.demo-uber-tipping .notif .ap{width:38px;height:38px;border-radius:9px;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;flex:none}
.demo-uber-tipping .notif b{font-size:14px}
.demo-uber-tipping .notif .t{font-size:12px;color:#777;float:right}
.demo-uber-tipping .notif p{margin:2px 0 0;font-size:13px;line-height:1.3}
.demo-uber-tipping .dsheet{position:absolute;left:0;right:0;bottom:0;background:#1f1f1f;border-radius:16px 16px 0 0;padding:8px 20px 26px;z-index:6}
.demo-uber-tipping .dsheet .grab{background:#444}
.demo-uber-tipping .dsheet h3{margin:8px 0 12px;font-size:19px}
.demo-uber-tipping .trow{display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid #2e2e2e;font-size:14px}
.demo-uber-tipping .trow span{color:#9a9a9a;font-size:12px;display:block}
.demo-uber-tipping .trow .tp{color:#3ccf7f;font-weight:700;font-size:12px;opacity:0;transition:opacity .4s}
.demo-uber-tipping .trow.new .tp{opacity:1}
.demo-uber-tipping .trow.new{animation:ut-flash 1.4s}
@keyframes ut-flash{0%{background:rgba(5,163,87,.35)}100%{background:transparent}}
.demo-uber-tipping .dsheet .btn{background:#fff;color:#000;margin-top:14px;height:46px;font-size:15px}
.demo-uber-tipping .float{position:absolute;font-weight:800;color:#3ccf7f;font-size:20px;top:240px;left:50%;transform:translateX(-50%);opacity:0;z-index:7;pointer-events:none}
.demo-uber-tipping .float.go{animation:ut-float 1.4s forwards}
@keyframes ut-float{0%{opacity:0;top:280px}20%{opacity:1}100%{opacity:0;top:234px}}
.demo-uber-tipping .rp{position:absolute;right:12px;top:48px;z-index:41;background:rgba(0,0,0,.06);border:0;border-radius:14px;padding:5px 10px;font-weight:600;font-size:11px;font-family:inherit;cursor:pointer;color:#333}
.demo-uber-tipping .rp.dk{background:rgba(255,255,255,.12);color:#ddd}
`;
var STAR='<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z"/></svg>';
var BADGES=[['⭐','Excellent service'],['💬','Great conversation'],['🧭','Expert navigation'],['✨','Neat and tidy'],['🎵','Great music'],['🚗','Cool car'],['🏅','Above and beyond']];
var ISSUES=['Route','Driving','Pickup','Car condition','Conversation','Other'];
var RL=['','Terrible','Bad','OK','Good','Great!'];
var FARE=14.82;

function mapSVG(dark){
  var bg=dark?'#1d2126':'#eef0f2',rd=dark?'#2c323a':'#fff',bl=dark?'#262b31':'#e2e5e8',pk=dark?'#1f3329':'#d8ecd9',wt=dark?'#18283a':'#cfe0ee';
  var s='<svg viewBox="0 0 375 '+(dark?760:210)+'" preserveAspectRatio="xMidYMid slice" width="100%" height="100%"><rect width="100%" height="100%" fill="'+bg+'"/>';
  var H=dark?760:210;
  s+='<path d="M0 '+(H*0.78)+' Q120 '+(H*0.7)+' 220 '+(H*0.86)+' T375 '+(H*0.8)+' V'+H+' H0Z" fill="'+wt+'"/>';
  s+='<rect x="235" y="'+(H*0.12)+'" width="90" height="'+(H*0.22)+'" rx="6" fill="'+pk+'"/>';
  for(var x=-20;x<400;x+=62)s+='<rect x="'+x+'" y="0" width="'+(x%124?9:14)+'" height="'+H+'" fill="'+rd+'"/>';
  for(var y=18;y<H;y+=54)s+='<rect x="0" y="'+y+'" width="375" height="'+(y%108?8:13)+'" fill="'+rd+'"/>';
  s+='<rect x="0" y="0" width="375" height="'+H+'" fill="none"/>';
  if(!dark){
    s+='<path d="M48 178 L48 126 L166 126 L166 72 L290 72 L290 40" fill="none" stroke="#000" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>';
    s+='<circle cx="48" cy="178" r="7" fill="#000"/><circle cx="48" cy="178" r="3" fill="#fff"/>';
    s+='<rect x="283" y="33" width="14" height="14" fill="#000"/><rect x="287" y="37" width="6" height="6" fill="#fff"/>';
  } else {
    s+='<g transform="translate(180 290)"><circle r="40" fill="rgba(39,110,241,.15)"/><path d="M0 -14 L10 12 L0 6 L-10 12Z" fill="#276ef1" stroke="#fff" stroke-width="2"/></g>';
  }
  s+='</svg>';return s;
}
function money(n){return '$'+n.toFixed(2)}

window.DEMOS[ID]={
  frame:'phone',
  title:'Uber — in-app tipping (2017)',
  caption:'Rate your driver, pick a tip and a compliment, then hit Done — and see the tip land on the driver\u2019s phone.',
  sources:[
    'https://www.uber.com/us/en/newsroom/180-days-change-building-true-partnership-together/',
    'https://www.bbc.com/news/technology-40349835',
    'http://fortune.com/2017/10/06/uber-driver-product/',
    'https://www.uber.com/in/en/newsroom/180-days-support/'
  ],
  mount:function(root){
    var timers=[];function T(f,ms){var t=setTimeout(f,ms);timers.push(t);return t}
    var st=document.createElement('style');st.textContent=CSS;root.appendChild(st);
    var w=document.createElement('div');root.appendChild(w);
    var S;
    function render(){
      timers.forEach(clearTimeout);timers=[];
      S={rating:0,badges:{},issues:{},tip:null,custom:0,padStr:''};
      w.innerHTML=
      '<div class="sb"><span>9:41</span><span class="ic">'+sig()+'</span></div>'+
      '<button class="rp" data-a="reset">↺ Replay</button>'+
      /* screen 1: rate + tip */
      '<div class="pg on s1">'+
        '<div class="map">'+mapSVG(false)+'<div class="arr">You\u2019ve arrived · 9:41 AM</div></div>'+
        '<div class="sheet"><div class="grab"></div><div class="scroll">'+
          '<div class="drv"><div class="av">AR<small>4.96★</small></div><div><b>Alex</b><span>Toyota Camry · 7DEMO42</span></div>'+
          '<div class="fare"><b>'+money(FARE)+'</b><br><span style="font-size:12px;color:#6b6b6b;white-space:nowrap">UberX · ••12</span></div></div>'+
          '<h2>How was your trip?</h2><div class="sub">Your feedback helps keep rides great.</div>'+
          '<div class="stars">'+[1,2,3,4,5].map(function(i){return '<button data-star="'+i+'" aria-label="'+i+' stars">'+STAR+'</button>'}).join('')+'</div>'+
          '<div class="rlab"></div>'+
          '<div class="sec good"><div class="lab">Give Alex a compliment</div><div class="badges">'+
            BADGES.map(function(b,i){return '<div class="bd" data-badge="'+i+'"><i>'+b[0]+'</i>'+b[1]+'</div>'}).join('')+'</div></div>'+
          '<div class="sec bad"><div class="lab">What could be improved?</div><div class="chips">'+
            ISSUES.map(function(c,i){return '<button class="chip" data-issue="'+i+'">'+c+'</button>'}).join('')+'</div></div>'+
          '<div class="sec tipsec"><div class="lab">Add a tip for Alex</div><div class="tips">'+
            [1,3,5].map(function(v){return '<button class="tip" data-tip="'+v+'">$'+v+'<small>'+Math.round(v/FARE*100)+'%</small></button>'}).join('')+
            '<button class="tip" data-tip="c"><span class="cv">Custom</span><small class="cs">amount</small></button></div>'+
            '<div class="note">🔒 100% of your tip goes to Alex. You can also tip later in Your Trips.</div></div>'+
        '</div>'+
        '<div class="foot"><button class="btn pulse go" disabled>Rate your driver</button><button class="skip" data-a="skip" style="display:none">No tip this time</button></div></div>'+
        '<div class="shade"></div>'+
        '<div class="pad"><div class="grab"></div><div class="lab" style="text-align:center;margin:6px 0 0">Enter custom amount</div><div class="amt">$0</div><div class="hint">Maximum tip is 200% of fare</div>'+
        '<div class="keys">'+['1','2','3','4','5','6','7','8','9','.','0','⌫'].map(function(k){return '<button data-k="'+k+'">'+k+'</button>'}).join('')+'</div>'+
        '<button class="btn" data-a="padok">Set tip</button></div>'+
      '</div>'+
      /* screen 2: confirmation */
      '<div class="pg done s2">'+
        '<div class="chk"><svg width="48" height="48" viewBox="0 0 48 48"><path d="M12 25 L21 34 L37 15" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'+
        '<h1 class="dh">Thanks!</h1><p class="dp"></p>'+
        '<div class="rcpt"></div>'+
        '<button class="btn" data-a="driver">See it on Alex\u2019s phone →</button>'+
        '<button class="btn ghost" style="margin-top:10px" data-a="reset">Rate another trip</button>'+
      '</div>'+
      /* screen 3: driver side */
      '<div class="pg dscr s3"><div class="dmap">'+mapSVG(true)+'</div>'+
        '<div class="epill">$86.40</div><div class="float"></div>'+
        '<div class="notif"><div class="ap">Uber</div><div style="flex:1"><span class="t">now</span><b>You got a tip! 🎉</b><p class="np"></p></div></div>'+
        '<div class="dsheet"><div class="grab"></div><h3>Today\u2019s trips</h3>'+
          '<div class="trow new0"><div>9:24 AM · UberX<span>Pickup: Main St · 4.2 mi</span></div><div style="text-align:right">$11.37<div class="tp"></div></div></div>'+
          '<div class="trow"><div>8:51 AM · UberX<span>2.8 mi</span></div><div>$8.92</div></div>'+
          '<div class="trow"><div>8:10 AM · UberPOOL<span>5.1 mi</span></div><div>$12.05</div></div>'+
          '<button class="btn" data-a="back">← Back to rider view</button>'+
        '</div></div>';
    }
    function sig(){return '<svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg><svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="currentColor" opacity=".5"/><rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor"/><rect x="23" y="4" width="1.5" height="4" rx=".7" fill="currentColor" opacity=".5"/></svg>'}
    function q(s){return w.querySelector(s)}
    function qa(s){return Array.prototype.slice.call(w.querySelectorAll(s))}
    function tipAmt(){return S.tip==='c'?S.custom:(S.tip||0)}
    function update(){
      qa('[data-star]').forEach(function(b){b.classList.toggle('f',+b.dataset.star<=S.rating)});
      q('.rlab').textContent=RL[S.rating];
      q('.good').classList.toggle('on',S.rating>=4);
      q('.bad').classList.toggle('on',S.rating>0&&S.rating<4);
      q('.tipsec').classList.toggle('on',S.rating>0);
      qa('[data-badge]').forEach(function(b){b.classList.toggle('on',!!S.badges[b.dataset.badge])});
      qa('[data-issue]').forEach(function(b){b.classList.toggle('on',!!S.issues[b.dataset.issue])});
      qa('[data-tip]').forEach(function(b){b.classList.toggle('on',String(S.tip)===b.dataset.tip)});
      q('.cv').textContent=S.tip==='c'&&S.custom?money(S.custom):'Custom';
      q('.cs').textContent=S.tip==='c'&&S.custom?Math.round(S.custom/FARE*100)+'%':'amount';
      var go=q('.go');go.disabled=!S.rating;
      var t=tipAmt();
      go.textContent=!S.rating?'Rate your driver':(t?'Done · Tip '+money(t):'Done');
      q('[data-a=skip]').style.display=S.rating&&t?'block':'none';
    }
    function openPad(on){q('.pad').classList.toggle('on',on);q('.shade').classList.toggle('on',on);if(on){S.padStr=S.custom?String(S.custom):'';padUpd()}}
    function padUpd(){var v=S.padStr||'0';q('.pad .amt').textContent='$'+v;var n=parseFloat(S.padStr||'0');var over=n>FARE*2;q('.pad .hint').style.color=over?'#e11900':'#6b6b6b';q('[data-a=padok]').disabled=!n||over}
    function submit(){
      var go=q('.go');if(go.disabled||S.busy)return;S.busy=true;go.disabled=true;
      go.innerHTML='<span class="bar"></span>Sending…';var bar=go.querySelector('.bar');var p=0;
      var iv=setInterval(function(){p+=12;bar.style.width=Math.min(p,100)+'%';if(p>=100){clearInterval(iv);showDone()}},70);timers.push(iv);
    }
    function showDone(){
      S.busy=false;
      var t=tipAmt(),bs=Object.keys(S.badges).map(function(i){return BADGES[i][1]});
      q('.s1').classList.remove('on');var d=q('.s2');d.classList.add('on');
      d.classList.remove('go');T(function(){d.classList.add('go')},40);
      q('.dh').textContent=t?'Thanks for tipping!':'Thanks for your feedback!';
      q('.dp').innerHTML=t?'Alex receives <b>100%</b> of your '+money(t)+' tip.':'You rated Alex '+S.rating+' star'+(S.rating>1?'s':'')+'. You can still add a tip for 30 days.';
      q('.rcpt').innerHTML='<div><span>Trip fare</span><span>'+money(FARE)+'</span></div>'+
        (t?'<div><span>Tip for Alex</span><span>'+money(t)+'</span></div>':'')+
        '<div><span>Your rating</span><span>'+'★'.repeat(S.rating)+'<span style="color:#ccc">'+'★'.repeat(5-S.rating)+'</span></span></div>'+
        (bs.length?'<div><span>Compliment'+(bs.length>1?'s':'')+'</span><span style="text-align:right;max-width:190px">'+bs.join(', ')+'</span></div>':'')+
        '<div class="tot"><span>Total charged</span><span>'+money(FARE+t)+'</span></div>';
      q('[data-a=driver]').style.display=t?'block':'none';
    }
    function showDriver(){
      var t=tipAmt();
      q('.s2').classList.remove('on');q('.s3').classList.add('on');
      q('.sb').classList.add('dk');q('.rp').classList.add('dk');
      var pill=q('.epill'),n=q('.notif');pill.textContent='$86.40';pill.classList.remove('up');n.classList.remove('on');
      q('.new0').classList.remove('new');
      q('.np').textContent='A rider added a '+money(t)+' tip for your 9:24 AM trip. 100% of tips go to you.';
      T(function(){n.classList.add('on')},500);
      T(function(){
        var f=q('.float');f.textContent='+'+money(t);f.classList.remove('go');void f.offsetWidth;f.classList.add('go');
        pill.classList.add('up');var a=86.40,b=86.40+t,k=0;
        var iv=setInterval(function(){k++;pill.textContent=money(a+(b-a)*k/15);if(k>=15){clearInterval(iv);T(function(){pill.classList.remove('up')},900)}},40);timers.push(iv);
        var r=q('.new0');r.classList.add('new');r.querySelector('.tp').textContent='+ '+money(t)+' tip';
      },1300);
      T(function(){n.classList.remove('on')},5200);
    }
    function back(){q('.s3').classList.remove('on');q('.s2').classList.add('on');q('.sb').classList.remove('dk');q('.rp').classList.remove('dk')}
    function onClick(e){
      var el=e.target.closest('[data-star],[data-badge],[data-issue],[data-tip],[data-k],[data-a],.go,.shade,.notif');if(!el||!w.contains(el))return;
      var d=el.dataset;
      if(d.star){S.rating=+d.star;if(S.rating<4)S.badges={};else S.issues={};
        update();T(function(){var sc=q('.scroll');sc.scrollTo?sc.scrollTo({top:sc.scrollHeight,behavior:'smooth'}):(sc.scrollTop=9999)},320);}
      else if(d.badge){S.badges[d.badge]=!S.badges[d.badge];update()}
      else if(d.issue){S.issues[d.issue]=!S.issues[d.issue];update()}
      else if(d.tip){if(d.tip==='c')openPad(true);else{S.tip=String(S.tip)===d.tip?null:+d.tip;update()}}
      else if(d.k){var k=d.k,s=S.padStr;if(k==='⌫')s=s.slice(0,-1);else if(k==='.'){if(s.indexOf('.')<0)s=(s||'0')+'.'}else{if(/\.\d\d$/.test(s)||s.length>5)return;s=(s==='0'?'':s)+k}S.padStr=s;padUpd()}
      else if(d.a==='padok'){var v=Math.round(parseFloat(S.padStr||'0')*100)/100;if(v>0&&v<=FARE*2){S.custom=v;S.tip='c'}openPad(false);update()}
      else if(d.a==='skip'){S.tip=null;update()}
      else if(d.a==='reset'){render();update()}
      else if(d.a==='driver')showDriver();
      else if(d.a==='back')back();
      else if(el.classList.contains('go'))submit();
      else if(el.classList.contains('shade'))openPad(false);
      else if(el.classList.contains('notif'))el.classList.remove('on');
    }
    function onKey(e){if(!q('.pad.on'))return;var k=e.key;if(/^[0-9.]$/.test(k)||k==='Backspace'){var b=q('[data-k="'+(k==='Backspace'?'⌫':k)+'"]');b&&b.click();e.preventDefault()}else if(k==='Enter'){q('[data-a=padok]').click()}}
    w.addEventListener('click',onClick);root.addEventListener('keydown',onKey);
    render();update();
    return function(){timers.forEach(function(t){clearTimeout(t);clearInterval(t)});w.removeEventListener('click',onClick);root.removeEventListener('keydown',onKey)};
  }
};
})();
