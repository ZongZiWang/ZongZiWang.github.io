/* Demo stage: opens a product demo inside a device frame (browser / phone / tablet).
   Each demo lives in demos/<id>.js and registers:
     window.DEMOS[id] = { frame:'browser'|'phone'|'tablet', title, url?, caption, sources:[...], mount(root) -> cleanup? }
   `root` is a fixed-size element (see SIZES); the stage scales it to fit the viewport. */
(function(){
  window.DEMOS = window.DEMOS || {};
  const SIZES = { browser:[1100,680], tablet:[1024,720], phone:[375,760] };
  const css = `
  .stage-ov{position:fixed;inset:0;z-index:100;background:rgba(8,8,10,.86);backdrop-filter:blur(8px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;opacity:0;transition:opacity .2s}
  .stage-ov.show{opacity:1}
  .stage-top{width:min(1100px,100%);display:flex;justify-content:space-between;align-items:center;gap:12px;color:#ecebe7;font:600 12px 'JetBrains Mono',ui-monospace,monospace;letter-spacing:.06em}
  .stage-top b{font-size:15px;letter-spacing:0}
  .stage-top .cap{color:#8d8a94;font-weight:500;letter-spacing:0;margin-top:3px;max-width:760px}
  .stage-x{background:#ecebe7;color:#111;border:0;border-radius:999px;padding:8px 14px;font:700 12px 'JetBrains Mono',monospace;cursor:pointer}
  .stage-fit{position:relative;flex:1;width:100%;display:flex;align-items:center;justify-content:center;min-height:0}
  .stage-dev{transform-origin:center center;box-shadow:0 40px 120px -30px #000;flex:none}
  .stage-dev.browser{border-radius:12px;overflow:hidden;background:#fff;border:1px solid #333}
  .stage-dev.browser .chrome{height:38px;background:#e9e9ec;display:flex;align-items:center;gap:8px;padding:0 14px;border-bottom:1px solid #d4d4d8}
  .stage-dev.browser .chrome i{width:12px;height:12px;border-radius:50%;background:#ff5f57}.stage-dev.browser .chrome i+i{background:#febc2e}.stage-dev.browser .chrome i+i+i{background:#28c840}
  .stage-dev.browser .chrome span{flex:1;margin:0 60px;height:24px;border-radius:6px;background:#fff;color:#666;font:500 12px system-ui;display:flex;align-items:center;justify-content:center}
  .stage-dev.phone{border-radius:54px;padding:14px;background:#0b0b0d;border:2px solid #2c2c31}
  .stage-dev.phone .scr{border-radius:42px;overflow:hidden;position:relative}
  .stage-dev.phone .scr::before{content:'';position:absolute;top:10px;left:50%;transform:translateX(-50%);width:110px;height:30px;border-radius:20px;background:#000;z-index:50;pointer-events:none}
  .stage-dev.tablet{border-radius:30px;padding:18px;background:#0b0b0d;border:2px solid #2c2c31}
  .stage-dev.tablet .scr{border-radius:14px;overflow:hidden;position:relative}
  .stage-root{position:relative;overflow:hidden;background:#fff;color:#111;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;line-height:1.4;text-align:left}
  .stage-root *{box-sizing:border-box}
  .stage-err{padding:40px;font:14px monospace;color:#b00}
  .stage-ov{overscroll-behavior:contain;touch-action:manipulation;height:100dvh}
  .stage-root,.stage-root *{touch-action:manipulation}
  /* iOS zooms the whole page when focusing inputs smaller than 16px; keep it from doing that */
  @media (pointer:coarse){.stage-root input,.stage-root textarea,.stage-root select,.stage-root [contenteditable]{font-size:16px!important}}
  .stage-hint{display:none;color:#8d8a94;font:500 12px 'JetBrains Mono',monospace;text-align:center}
  @media (max-width:760px){
    .stage-ov{padding:10px 0 0;gap:8px;justify-content:flex-start}
    .stage-top{padding:0 12px}
    .stage-top .cap{font-size:11px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
    .stage-top .cap.open{display:block}
    .stage-top b{font-size:13px}
    .stage-x{padding:10px 14px;min-height:40px;white-space:nowrap;flex:none}
    .stage-fit.pan{overflow:auto;-webkit-overflow-scrolling:touch;align-items:flex-start;justify-content:flex-start;padding:0 10px 10px}
    .stage-dev.phone,.stage-dev.tablet{border-radius:0;padding:0;border:0;background:none}
    .stage-dev.phone .scr,.stage-dev.tablet .scr{border-radius:16px}
    .stage-dev.phone .scr::before{display:none}
    .stage-hint.show{display:block}
  }`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

  function load(id){
    if(window.DEMOS[id]) return Promise.resolve(window.DEMOS[id]);
    return new Promise((res,rej)=>{const s=document.createElement('script');s.src=(window.DEMO_BASE||'demos/')+id+'.js?v='+Date.now();
      s.onload=()=>window.DEMOS[id]?res(window.DEMOS[id]):rej(new Error('demo did not register: '+id));s.onerror=()=>rej(new Error('missing demos/'+id+'.js'));document.head.appendChild(s)});
  }
  let current=null;
  window.openDemo=async function(id){
    closeDemo();
    const ov=document.createElement('div');ov.className='stage-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');
    ov.innerHTML=`<div class="stage-top"><div><b class="t">Loading…</b><div class="cap"></div></div><button class="stage-x">✕ Close</button></div><div class="stage-fit"></div>`;
    document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add('show'));
    window.demoOpen=true;document.body.style.overflow='hidden';
    current={ov,cleanup:null};
    ov.querySelector('.stage-x').onclick=closeDemo;
    ov.addEventListener('mousedown',e=>{if(e.target===ov)closeDemo()});
    let d;
    try{d=await load(id)}catch(e){ov.querySelector('.stage-fit').innerHTML=`<div class="stage-err">${e.message}</div>`;return}
    if(!current||current.ov!==ov)return;
    const kind=d.frame||'browser',[W,H]=SIZES[kind];
    ov.querySelector('.t').textContent=d.title||id;const cap=ov.querySelector('.cap');cap.textContent=d.caption||'';
    cap.onclick=()=>{cap.classList.toggle('open');current&&current.fit&&current.fit()};
    const dev=document.createElement('div');dev.className='stage-dev '+kind;
    const root=document.createElement('div');root.className='stage-root demo-'+id;root.style.width=W+'px';root.style.height=H+'px';root.tabIndex=0;
    if(kind==='browser'){dev.innerHTML=`<div class="chrome"><i></i><i></i><i></i><span>${d.url||''}</span></div>`;dev.appendChild(root)}
    else{const scr=document.createElement('div');scr.className='scr';scr.appendChild(root);dev.appendChild(scr)}
    const fitBox=ov.querySelector('.stage-fit');
    const sizer=document.createElement('div');sizer.style.cssText='position:relative;flex:none';sizer.appendChild(dev);fitBox.appendChild(sizer);
    const hint=document.createElement('div');hint.className='stage-hint';ov.insertBefore(hint,fitBox);
    dev.style.transformOrigin='0 0';dev.style.position='absolute';dev.style.left='0';dev.style.top='0';dev.style.width='max-content';
    // natural size of the device (unscaled)
    const nat=()=>{dev.style.transform='none';const r=dev.getBoundingClientRect();return[r.width,r.height]};
    // On phones the viewport height jumps around while you interact (on-screen keyboard,
    // Safari's toolbar collapsing). Remember the tallest box we've seen for this width and
    // never shrink the demo because of a temporary height change.
    let lastW=0,maxBoxH=0;
    const fit=(force)=>{const [w,h]=nat();const box=fitBox.getBoundingClientRect();
      if(box.width!==lastW||force===true){lastW=box.width;maxBoxH=box.height}else{maxBoxH=Math.max(maxBoxH,box.height)}
      let s=Math.min(1,box.width/w,maxBoxH/h);
      const small=window.innerWidth<=760;
      // desktop-sized demos on a phone: don't shrink below 55%; let the visitor pan around instead
      const pan=small&&kind!=='phone'&&s<0.55;
      if(pan){s=Math.min(0.55,(maxBoxH-10)/h)}
      fitBox.classList.toggle('pan',pan);
      hint.textContent=pan?(window.innerHeight>window.innerWidth?'Desktop demo · drag to pan, or rotate your phone':'Drag to pan around'):'';
      hint.classList.toggle('show',pan);
      dev.style.transform=`scale(${s})`;sizer.style.width=w*s+'px';sizer.style.height=h*s+'px';current.scale=s};
    fit(true);current.fit=()=>fit(true);current.onResize=()=>fit();window.addEventListener('resize',current.onResize);
    try{current.cleanup=d.mount(root)||null}catch(e){root.innerHTML=`<div class="stage-err">${e.stack}</div>`;console.error(e)}
    root.focus({preventScroll:true});
  };
  window.closeDemo=function(){if(!current)return;try{current.cleanup&&current.cleanup()}catch(e){}
    window.removeEventListener('resize',current.onResize);current.ov.remove();current=null;window.demoOpen=false;document.body.style.overflow=''};
  document.addEventListener('keydown',e=>{if(current&&e.key==='Escape'){e.stopPropagation();closeDemo()}},true);
})();
