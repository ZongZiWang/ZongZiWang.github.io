/* Uber Pro (driver loyalty, 2018) — stylized recreation of the driver-app rewards dashboard.
   Point thresholds and rewards are illustrative only. All data is fake. */
(function(){
window.DEMOS=window.DEMOS||{};
var ID='driver-loyalty';
var P='.demo-driver-loyalty ';
var TIERS=[
  {k:'Blue',min:0,c:'#4a8bff',g:'linear-gradient(135deg,#276ef1,#5d9bff)',
   r:[['⛽','Cash back on gas','With the Uber debit card'],['🔧','Vehicle maintenance discounts','At participating shops'],['📊','Earnings insights','Weekly tips on when & where to drive']]},
  {k:'Gold',min:500,c:'#e8b54a',g:'linear-gradient(135deg,#b8862b,#f2cf73)',
   r:[['⛽','More cash back on gas','Higher % on every fill-up'],['🔧','Bigger maintenance discounts','Oil changes, tires, repairs'],['🛟','Free roadside assistance','Towing, jump-starts, lockouts'],['🎓','Tuition coverage eligibility','ASU Online, for you or family*']]},
  {k:'Platinum',min:1200,c:'#c3cbd6',g:'linear-gradient(135deg,#7d8794,#dfe5ec)',
   r:[['📈','Higher time & distance rates','Boost on every trip'],['✈️','Faster airport pickups','Skip ahead in the airport queue'],['🧭','Trip length & direction','See it before you accept'],['🎓','Fully funded ASU Online tuition','Transferable to a family member*'],['🛟','Free roadside assistance','Plus everything in Gold']]},
  {k:'Diamond',min:2000,c:'#5fd6ee',g:'linear-gradient(135deg,#1f8fb0,#8ff0ff)',
   r:[['📈','Top time & distance boost','The biggest rate increase'],['☎️','Premium 24/7 phone support','Priority line to expert agents'],['🚗','Free dent repair & car washes','Keep your car looking sharp'],['✈️','Faster airport pickups','Plus trip length & direction'],['🎓','Fully funded ASU Online tuition','80+ degree programs*']]}
];
var START=497;
var CSS=`
.demo-driver-loyalty{background:#000;color:#fff;font-family:-apple-system,'Helvetica Neue',system-ui,sans-serif;-webkit-font-smoothing:antialiased;user-select:none}
.demo-driver-loyalty .sb{position:absolute;top:0;left:0;right:0;height:44px;display:flex;justify-content:space-between;align-items:center;padding:6px 30px 0 34px;font-weight:600;font-size:15px;z-index:60;pointer-events:none}
.demo-driver-loyalty .app{position:absolute;inset:0;display:flex;flex-direction:column}
.demo-driver-loyalty .hd{padding:52px 20px 6px;display:flex;align-items:flex-end;justify-content:space-between}
.demo-driver-loyalty .hd h1{margin:0;font-size:28px;letter-spacing:-.6px;font-weight:700}
.demo-driver-loyalty .hd .per{font-size:12px;color:#9a9a9a;margin-top:2px}
.demo-driver-loyalty .rp{background:#1c1c1e;border:0;color:#ccc;border-radius:14px;padding:6px 11px;font-weight:600;font-size:11px;font-family:inherit;cursor:pointer}
.demo-driver-loyalty .body{flex:1;overflow-y:auto;padding:6px 16px 140px;scrollbar-width:none}
.demo-driver-loyalty .body::-webkit-scrollbar{display:none}
.demo-driver-loyalty .card{background:#161618;border-radius:16px;padding:16px;margin-bottom:12px;position:relative}
.demo-driver-loyalty .hero{display:flex;flex-direction:column;align-items:center;padding:16px 16px 14px;overflow:hidden}
.demo-driver-loyalty .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,var(--tc),transparent 62%);opacity:.18;transition:background .6s}
.demo-driver-loyalty .ring{position:relative;width:180px;height:180px}
.demo-driver-loyalty .ring svg{position:absolute;inset:0;transform:rotate(-90deg)}
.demo-driver-loyalty .ring .trk{stroke:#2a2a2d}
.demo-driver-loyalty .ring .arc{stroke:var(--tc);transition:stroke-dashoffset .5s ease,stroke .6s;stroke-linecap:round}
.demo-driver-loyalty .ring .ctr{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.demo-driver-loyalty .badge{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:12px;font-weight:700;font-size:12px;color:#000;background:var(--tg)}
.demo-driver-loyalty .pts{font-size:42px;font-weight:700;letter-spacing:-1.5px;line-height:1.05;margin-top:6px;font-variant-numeric:tabular-nums}
.demo-driver-loyalty .ptsl{font-size:12px;color:#9a9a9a}
.demo-driver-loyalty .next{margin-top:10px;font-size:14px;text-align:center;position:relative}
.demo-driver-loyalty .next b{color:var(--nc)}
.demo-driver-loyalty .bump{position:absolute;top:40px;left:50%;transform:translateX(-50%);font-weight:800;font-size:22px;color:#3ccf7f;opacity:0;pointer-events:none;z-index:3}
.demo-driver-loyalty .bump.go{animation:dl-up 1.1s forwards}
@keyframes dl-up{0%{opacity:0;top:70px}25%{opacity:1}100%{opacity:0;top:16px}}
.demo-driver-loyalty .tiers{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:14px;width:100%;position:relative}
.demo-driver-loyalty .tr{background:#222225;border:1.5px solid transparent;border-radius:10px;padding:7px 2px 6px;text-align:center;cursor:pointer;font-family:inherit;color:#fff;transition:border-color .2s,transform .15s}
.demo-driver-loyalty .tr:hover{transform:translateY(-2px)}
.demo-driver-loyalty .tr i{display:block;width:14px;height:14px;border-radius:50%;margin:0 auto 4px;font-style:normal}
.demo-driver-loyalty .tr b{font-size:11.5px;display:block}
.demo-driver-loyalty .tr span{font-size:10px;color:#8a8a8a}
.demo-driver-loyalty .tr.cur{border-color:var(--tc)}
.demo-driver-loyalty .tr.lock{opacity:.55}
.demo-driver-loyalty .row{display:flex;justify-content:space-between;align-items:center}
.demo-driver-loyalty .lab{font-size:15px;font-weight:700}
.demo-driver-loyalty .muted{font-size:12px;color:#8a8a8a}
.demo-driver-loyalty .reqs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}
.demo-driver-loyalty .req{background:#222225;border-radius:10px;padding:9px 10px}
.demo-driver-loyalty .req b{font-size:17px;display:block}
.demo-driver-loyalty .req span{font-size:10.5px;color:#8a8a8a}
.demo-driver-loyalty .req em{font-style:normal;color:#3ccf7f;font-size:11px;float:right;margin-top:3px}
.demo-driver-loyalty .rw{display:flex;gap:12px;align-items:center;padding:10px 0;border-top:1px solid #242427}
.demo-driver-loyalty .rw:first-of-type{border-top:0}
.demo-driver-loyalty .rw i{width:36px;height:36px;border-radius:10px;background:#242427;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:17px;flex:none}
.demo-driver-loyalty .rw b{font-size:14px;display:block;font-weight:600}
.demo-driver-loyalty .rw span{font-size:12px;color:#8a8a8a}
.demo-driver-loyalty .rw .st{margin-left:auto;font-size:11px;font-weight:700;color:#3ccf7f;white-space:nowrap}
.demo-driver-loyalty .rw .st.lk{color:#777}
.demo-driver-loyalty .link{background:none;border:0;color:#4a8bff;font-weight:600;font-size:13px;font-family:inherit;cursor:pointer;padding:0}
.demo-driver-loyalty .dock{position:absolute;left:0;right:0;bottom:0;padding:10px 16px 24px;background:linear-gradient(transparent,#000 26%);z-index:20}
.demo-driver-loyalty .panel{background:#161618;border-radius:16px;padding:12px 14px;display:flex;align-items:center;gap:12px;min-height:84px;position:relative;overflow:hidden}
.demo-driver-loyalty .go{width:64px;height:64px;border-radius:50%;border:0;background:#276ef1;color:#fff;font-weight:800;font-size:19px;font-family:inherit;cursor:pointer;flex:none;box-shadow:0 0 0 0 rgba(39,110,241,.6);animation:dl-pulse 1.8s infinite}
.demo-driver-loyalty .go.off{background:#e11900;animation:none;font-size:13px}
@keyframes dl-pulse{0%{box-shadow:0 0 0 0 rgba(39,110,241,.6)}70%{box-shadow:0 0 0 12px rgba(39,110,241,0)}100%{box-shadow:0 0 0 0 rgba(39,110,241,0)}}
.demo-driver-loyalty .ptxt{flex:1;min-width:0}
.demo-driver-loyalty .ptxt b{font-size:15px;display:block}
.demo-driver-loyalty .ptxt span{font-size:12px;color:#9a9a9a}
.demo-driver-loyalty .btn{border:0;border-radius:10px;background:#fff;color:#000;font-weight:700;font-size:14px;font-family:inherit;cursor:pointer;padding:11px 14px;white-space:nowrap}
.demo-driver-loyalty .btn.blue{background:#276ef1;color:#fff}
.demo-driver-loyalty .btn.dim{background:#2a2a2d;color:#ddd}
.demo-driver-loyalty .btn:disabled{opacity:.4;cursor:default}
.demo-driver-loyalty .prog{position:absolute;left:0;bottom:0;height:3px;background:#276ef1;width:0;transition:width .2s linear}
.demo-driver-loyalty .ffw{display:flex;gap:8px;margin-top:8px}
.demo-driver-loyalty .ffw .btn{flex:1;padding:9px;font-size:12.5px}
.demo-driver-loyalty .dots i{display:inline-block;width:5px;height:5px;border-radius:50%;background:#9a9a9a;margin-right:3px;animation:dl-dot 1s infinite}
.demo-driver-loyalty .dots i:nth-child(2){animation-delay:.15s}.demo-driver-loyalty .dots i:nth-child(3){animation-delay:.3s}
@keyframes dl-dot{50%{opacity:.2}}
.demo-driver-loyalty .busy{display:inline-block;background:#3a2a10;color:#f2b84a;font-size:10.5px;font-weight:700;padding:2px 6px;border-radius:6px;margin-left:4px}
.demo-driver-loyalty .shade{position:absolute;inset:0;background:rgba(0,0,0,.6);opacity:0;pointer-events:none;transition:opacity .25s;z-index:40}
.demo-driver-loyalty .shade.on{opacity:1;pointer-events:auto}
.demo-driver-loyalty .sheet{position:absolute;left:0;right:0;bottom:0;background:#161618;border-radius:18px 18px 0 0;z-index:41;transform:translateY(105%);transition:transform .3s cubic-bezier(.2,.8,.2,1);padding:10px 18px 26px;max-height:610px;overflow-y:auto}
.demo-driver-loyalty .sheet.on{transform:none}
.demo-driver-loyalty .grab{width:36px;height:4px;border-radius:2px;background:#444;margin:0 auto 12px}
.demo-driver-loyalty .sh{border-radius:14px;padding:16px;color:#000;margin-bottom:10px;background:var(--tg)}
.demo-driver-loyalty .sh h2{margin:0;font-size:24px;letter-spacing:-.4px}
.demo-driver-loyalty .sh p{margin:3px 0 0;font-size:13px;opacity:.75}
.demo-driver-loyalty .fine{font-size:10.5px;color:#777;margin-top:10px;line-height:1.35}
.demo-driver-loyalty .promo{position:absolute;inset:0;z-index:50;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px;background:rgba(0,0,0,.88);opacity:0;pointer-events:none;transition:opacity .3s}
.demo-driver-loyalty .promo.on{opacity:1;pointer-events:auto}
.demo-driver-loyalty .medal{width:128px;height:128px;border-radius:50%;background:var(--tg);display:flex;align-items:center;justify-content:center;color:#000;font-weight:800;font-size:22px;box-shadow:0 0 60px var(--tc);transform:scale(.3) rotate(-30deg);transition:transform .6s cubic-bezier(.2,1.6,.4,1)}
.demo-driver-loyalty .promo.on .medal{transform:none}
.demo-driver-loyalty .promo h2{font-size:28px;margin:22px 0 6px;letter-spacing:-.5px}
.demo-driver-loyalty .promo p{color:#bbb;font-size:14px;margin:0 0 14px}
.demo-driver-loyalty .promo ul{list-style:none;padding:0;margin:0 0 20px;text-align:left;width:100%}
.demo-driver-loyalty .promo li{background:#1c1c1e;border-radius:10px;padding:9px 12px;margin-bottom:6px;font-size:13.5px;opacity:0;transform:translateY(8px);transition:all .3s}
.demo-driver-loyalty .promo.on li{opacity:1;transform:none}
.demo-driver-loyalty .conf{position:absolute;width:7px;height:12px;top:-20px;opacity:.9;animation:dl-fall 2.2s linear forwards}
@keyframes dl-fall{to{transform:translateY(820px) rotate(540deg)}}
`;
function fmt(n){return n.toLocaleString('en-US')}
function tierOf(p){var t=0;for(var i=0;i<TIERS.length;i++)if(p>=TIERS[i].min)t=i;return t}

window.DEMOS[ID]={
  frame:'phone',
  title:'Uber Pro — driver rewards (2018)',
  caption:'Tap GO, accept trips (or fast-forward a week) to earn points and level up — tap any tier to see its rewards.',
  sources:[
    'https://www.theverge.com/2018/11/1/18047746/uber-driver-high-performing-earnings-free-college-tuition-pro',
    'https://www.usatoday.com/story/tech/talkingtech/2018/11/02/uber-pro-program-offers-perks-drivers-including-college-tuition/1857137002/',
    'https://news.asu.edu/20181031-asu-news-uber-and-asu-partner-fully-funded-education-eligible-drivers',
    'https://news.asu.edu/20190807-asu-news-uber-partnership-expands-eligible-drivers-nationwide'
  ],
  mount:function(root){
    var timers=[];function T(f,ms){var t=setTimeout(f,ms);timers.push(t);return t}
    function clearAll(){timers.forEach(function(t){clearTimeout(t);clearInterval(t)});timers=[]}
    var st=document.createElement('style');st.textContent=CSS;root.appendChild(st);
    var w=document.createElement('div');root.appendChild(w);
    var S,shown;
    function q(s){return w.querySelector(s)}
    var C=2*Math.PI*78;
    function build(){
      clearAll();
      S={pts:START,online:false,phase:'idle',trips:0,tier:tierOf(START),ff:false};shown=START;
      w.innerHTML='<div class="sb"><span>9:41</span><span>●●● ▮</span></div>'+
      '<div class="app"><div class="hd"><div><h1>Uber Pro</h1><div class="per">Points period · Nov 1 – Jan 31</div></div><button class="rp" data-a="reset">↺ Replay</button></div>'+
      '<div class="body">'+
        '<div class="card hero"><div class="bump"></div>'+
          '<div class="ring"><svg viewBox="0 0 180 180"><circle class="trk" cx="90" cy="90" r="78" fill="none" stroke-width="12"/><circle class="arc" cx="90" cy="90" r="78" fill="none" stroke-width="12" stroke-dasharray="'+C+'" stroke-dashoffset="'+C+'"/></svg>'+
            '<div class="ctr"><span class="badge"><span class="bn"></span></span><div class="pts">0</div><div class="ptsl">points this period</div></div></div>'+
          '<div class="next"></div>'+
          '<div class="tiers">'+TIERS.map(function(t,i){return '<button class="tr" data-tier="'+i+'"><i style="background:'+t.g+'"></i><b>'+t.k+'</b><span>'+fmt(t.min)+'+</span></button>'}).join('')+'</div>'+
        '</div>'+
        '<div class="card"><div class="row"><span class="lab">Keep your status</span><span class="muted">this period</span></div><div class="reqs">'+
          '<div class="req"><b>4.93</b><span>Rating · min 4.85</span><em>✓</em></div>'+
          '<div class="req"><b>2%</b><span>Cancel · max 4%</span><em>✓</em></div>'+
          '<div class="req"><b class="trips">0</b><span>Trips · period</span><em>●</em></div></div></div>'+
        '<div class="card"><div class="row" style="margin-bottom:4px"><span class="lab">Your rewards</span><button class="link" data-a="mine">See all ›</button></div><div class="myr"></div></div>'+
        '<div class="card" style="font-size:12.5px;color:#9a9a9a"><b style="color:#fff;font-size:14px">How points work</b><br>Earn points on every trip, with extra points during busy times. Points earned in a period unlock your status for the next one. <span style="color:#666">(Numbers in this demo are illustrative.)</span></div>'+
      '</div>'+
      '<div class="dock"><div class="panel"><button class="go" data-a="go">GO</button><div class="ptxt"><b class="pt1">You\u2019re offline</b><span class="pt2">Tap GO to start earning points</span></div><div class="pact"></div><div class="prog"></div></div>'+
        '<div class="ffw"><button class="btn dim" data-a="ff">⏩ Fast-forward a busy week</button></div></div>'+
      '</div>'+
      '<div class="shade" data-a="close"></div><div class="sheet"></div>'+
      '<div class="promo"></div>';
      paint(true);
    }
    function paint(instant){
      var p=shown,ti=tierOf(p),t=TIERS[ti],n=TIERS[ti+1];
      w.style.setProperty('--tc',t.c);w.style.setProperty('--tg',t.g);
      if(n)w.style.setProperty('--nc',n.c);
      q('.bn').textContent='◆ '+t.k;
      q('.pts').textContent=fmt(p);
      var frac=n?(p-t.min)/(n.min-t.min):1;
      var arc=q('.arc');if(instant){arc.style.transition='none';T(function(){arc.style.transition=''},30)}
      arc.style.strokeDashoffset=C*(1-Math.max(0.005,Math.min(1,frac)));
      q('.next').innerHTML=n?'<b>'+fmt(n.min-p)+' points</b> to '+n.k+'<div class="muted" style="margin-top:2px">'+t.k+' status · keep driving to unlock more</div>':'<b style="color:'+t.c+'">Top tier reached</b><div class="muted" style="margin-top:2px">You\u2019ve unlocked every Uber Pro reward</div>';
      Array.prototype.forEach.call(w.querySelectorAll('.tr'),function(b,i){b.classList.toggle('cur',i===ti);b.classList.toggle('lock',i>ti)});
      q('.myr').innerHTML=t.r.slice(0,3).map(function(r){return '<div class="rw"><i>'+r[0]+'</i><div><b>'+r[1]+'</b><span>'+r[2]+'</span></div><span class="st">Active</span></div>'}).join('');
      q('.trips').textContent=S.trips;
    }
    function animateTo(target,dur,done){
      var from=shown,k=0,steps=Math.max(6,Math.round(dur/40));
      var iv=setInterval(function(){k++;var v=Math.round(from+(target-from)*k/steps);
        var before=tierOf(shown);shown=v;paint();
        if(tierOf(v)>before){clearInterval(iv);shown=TIERS[tierOf(v)].min;paint();promote(tierOf(v),function(){animateTo(target,dur*(target-shown)/Math.max(1,target-from),done)});return}
        if(k>=steps){clearInterval(iv);shown=target;paint();done&&done()}},40);
      timers.push(iv);
    }
    function bump(txt){var b=q('.bump');b.textContent=txt;b.classList.remove('go');void b.offsetWidth;b.classList.add('go')}
    function panel(t1,t2,act){q('.pt1').innerHTML=t1;q('.pt2').innerHTML=t2;q('.pact').innerHTML=act||''}
    function setGo(){var g=q('.go');g.classList.toggle('off',S.online);g.textContent=S.online?'STOP':'GO'}
    function goOnline(){
      if(S.phase==='trip'||S.ff)return;
      S.online=!S.online;setGo();clearTrip();
      if(!S.online){S.phase='idle';panel('You\u2019re offline','Tap GO to start earning points');return}
      search();
    }
    function clearTrip(){q('.prog').style.width='0'}
    function search(){
      S.phase='search';panel('Finding trips<span class="dots" style="margin-left:6px"><i></i><i></i><i></i></span>','You\u2019re online · busy area nearby');
      T(offer,1300);
    }
    function offer(){
      if(!S.online)return;
      var busy=S.trips===0||Math.random()<0.7;S.offer={busy:busy,pts:busy?3:1,fare:(7+Math.random()*12).toFixed(2),mi:(1.5+Math.random()*5).toFixed(1)};
      S.phase='offer';
      panel('UberX · $'+S.offer.fare+(busy?'<span class="busy">BUSY · 3 pts</span>':'<span class="busy" style="background:#222;color:#aaa">1 pt</span>'),'4.9★ rider · '+S.offer.mi+' mi · 5 min away','<button class="btn blue" data-a="accept">Accept</button>');
    }
    function accept(){
      if(S.phase!=='offer')return;S.phase='trip';var o=S.offer,pr=q('.prog');
      var stages=[['Picking up rider','Head to pickup · 5 min'],['On trip','Dropping off · '+o.mi+' mi'],['Completing trip','Rating rider…']];
      var k=0;pr.style.width='0';
      var iv=setInterval(function(){k++;pr.style.width=Math.min(100,k*100/30)+'%';var s=stages[Math.min(2,Math.floor(k/10))];panel(s[0],s[1]);
        if(k>=30){clearInterval(iv);finish(o)}},70);
      timers.push(iv);
    }
    function finish(o){
      S.trips++;S.pts+=o.pts;S.phase='done';
      panel('Trip complete · +$'+o.fare,'<b style="color:#3ccf7f">+'+o.pts+' Uber Pro point'+(o.pts>1?'s':'')+'</b>'+(o.busy?' (busy-time bonus)':''),'');
      bump('+'+o.pts);
      animateTo(S.pts,500,function(){T(function(){clearTrip();if(S.online&&S.phase==='done')search()},1100)});
    }
    function fastForward(){
      if(S.ff||S.phase==='trip')return;
      if(tierOf(S.pts)===TIERS.length-1&&S.pts>=2600){panel('Diamond status locked in 💎','You\u2019ve maxed out this period');return}
      S.ff=true;var add=320+Math.round(Math.random()*60),tr=Math.round(add/2.6);
      S.online=true;setGo();S.phase='ff';clearTrip();
      panel('Driving a busy week…','<span class="dots"><i></i><i></i><i></i></span> '+tr+' trips · Fri & Sat nights');
      q('[data-a=ff]').disabled=true;bump('+'+add);
      S.trips+=tr;S.pts+=add;
      animateTo(S.pts,1600,function(){S.ff=false;q('[data-a=ff]').disabled=false;
        panel('Week complete · '+tr+' trips','<b style="color:#3ccf7f">+'+add+' points</b> earned');S.phase='done';
        T(function(){if(S.online&&S.phase==='done')search()},1800)});
    }
    function promote(i,cont){
      var t=TIERS[i],pm=q('.promo');
      pm.style.setProperty('--tc',t.c);pm.style.setProperty('--tg',t.g);
      pm.innerHTML='<div class="medal">'+t.k.toUpperCase()+'</div><h2>You reached '+t.k+'!</h2><p>Your '+t.k+' rewards unlock for next period.</p><ul>'+
        t.r.slice(0,4).map(function(r,j){return '<li style="transition-delay:'+(0.25+j*0.1)+'s">'+r[0]+'&nbsp; '+r[1]+'</li>'}).join('')+'</ul><button class="btn" data-a="promook" style="width:100%;padding:14px">Keep driving</button>';
      for(var c=0;c<26;c++){var d=document.createElement('i');d.className='conf';d.style.left=(Math.random()*100)+'%';d.style.background=[t.c,'#fff','#276ef1','#3ccf7f'][c%4];d.style.animationDelay=(Math.random()*0.6)+'s';pm.appendChild(d)}
      S.cont=cont;T(function(){pm.classList.add('on')},20);
    }
    function closePromo(){var pm=q('.promo');pm.classList.remove('on');var c=S.cont;S.cont=null;T(function(){c&&c()},250)}
    function openTier(i){
      var t=TIERS[i],cur=tierOf(shown),sh=q('.sheet'),unl=i<=cur;
      sh.style.setProperty('--tg',t.g);
      sh.innerHTML='<div class="grab"></div><div class="sh"><h2>'+t.k+'</h2><p>'+(i===0?'Every driver starts here':fmt(t.min)+'+ points in a period')+' · '+(unl?(i===cur?'Your current status':'Unlocked'):fmt(t.min-shown)+' points to go')+'</p></div>'+
        t.r.map(function(r){return '<div class="rw"><i>'+r[0]+'</i><div><b>'+r[1]+'</b><span>'+r[2]+'</span></div><span class="st'+(unl?'':' lk')+'">'+(unl?'Active':'🔒')+'</span></div>'}).join('')+
        '<div class="fine">Requires keeping a high rating and low cancellation rate. *Tuition coverage has additional eligibility rules (e.g. lifetime trip count). Points, thresholds and reward details shown here are illustrative.</div>'+
        '<button class="btn" data-a="close" style="width:100%;margin-top:14px;padding:13px">Done</button>';
      sh.scrollTop=0;sh.classList.add('on');q('.shade').classList.add('on');
    }
    function closeSheet(){q('.sheet').classList.remove('on');q('.shade').classList.remove('on')}
    function onClick(e){
      var el=e.target.closest('[data-a],[data-tier]');if(!el||!w.contains(el))return;
      var a=el.dataset.a;
      if(el.dataset.tier)openTier(+el.dataset.tier);
      else if(a==='go')goOnline();
      else if(a==='accept')accept();
      else if(a==='ff')fastForward();
      else if(a==='promook')closePromo();
      else if(a==='close')closeSheet();
      else if(a==='mine')openTier(tierOf(shown));
      else if(a==='reset')build();
    }
    w.addEventListener('click',onClick);
    build();
    return function(){clearAll();w.removeEventListener('click',onClick)};
  }
};
})();
