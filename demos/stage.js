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
  .stage-err{padding:40px;font:14px monospace;color:#b00}`;
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
    ov.innerHTML=`<div class="stage-top"><div><b class="t">Loading…</b><div class="cap"></div></div><button class="stage-x">✕ Close (Esc)</button></div><div class="stage-fit"></div>`;
    document.body.appendChild(ov);requestAnimationFrame(()=>ov.classList.add('show'));
    window.demoOpen=true;document.body.style.overflow='hidden';
    current={ov,cleanup:null};
    ov.querySelector('.stage-x').onclick=closeDemo;
    ov.addEventListener('mousedown',e=>{if(e.target===ov)closeDemo()});
    let d;
    try{d=await load(id)}catch(e){ov.querySelector('.stage-fit').innerHTML=`<div class="stage-err">${e.message}</div>`;return}
    if(!current||current.ov!==ov)return;
    const kind=d.frame||'browser',[W,H]=SIZES[kind];
    ov.querySelector('.t').textContent=d.title||id;ov.querySelector('.cap').textContent=d.caption||'';
    const dev=document.createElement('div');dev.className='stage-dev '+kind;
    const root=document.createElement('div');root.className='stage-root demo-'+id;root.style.width=W+'px';root.style.height=H+'px';root.tabIndex=0;
    if(kind==='browser'){dev.innerHTML=`<div class="chrome"><i></i><i></i><i></i><span>${d.url||''}</span></div>`;dev.appendChild(root)}
    else{const scr=document.createElement('div');scr.className='scr';scr.appendChild(root);dev.appendChild(scr)}
    ov.querySelector('.stage-fit').appendChild(dev);
    const fit=()=>{const box=ov.querySelector('.stage-fit').getBoundingClientRect();const r=dev.getBoundingClientRect();
      const w=r.width/(current.scale||1),h=r.height/(current.scale||1);const s=Math.min(1,box.width/w,box.height/h);current.scale=s;dev.style.transform=`scale(${s})`};
    current.scale=1;fit();current.fit=fit;window.addEventListener('resize',fit);
    try{current.cleanup=d.mount(root)||null}catch(e){root.innerHTML=`<div class="stage-err">${e.stack}</div>`;console.error(e)}
    root.focus({preventScroll:true});
  };
  window.closeDemo=function(){if(!current)return;try{current.cleanup&&current.cleanup()}catch(e){}
    window.removeEventListener('resize',current.fit);current.ov.remove();current=null;window.demoOpen=false;document.body.style.overflow=''};
  document.addEventListener('keydown',e=>{if(current&&e.key==='Escape'){e.stopPropagation();closeDemo()}},true);
})();
