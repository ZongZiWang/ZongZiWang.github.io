/* RealChar iOS app (2023) — stylized recreation of the open-source SwiftUI client
   (client/mobile/ios in Shaunwei/RealChar): welcome tabs (About / Try out / Settings),
   character picker, realtime voice conversation, text mode, LLM + Second Brain settings.
   Characters are original, avatars are hand-drawn SVG, all replies are scripted. */
(function(){
window.DEMOS=window.DEMOS||{};
var ID='realchar';
var CSS=`
$ {background:#fff;color:#03081C;font-family:Prompt,-apple-system,'SF Pro Text','Helvetica Neue',system-ui,sans-serif;-webkit-font-smoothing:antialiased;user-select:none}
$ .w{position:absolute;inset:0;overflow:hidden}
$ .sb{position:absolute;top:0;left:0;right:0;height:44px;display:flex;justify-content:space-between;align-items:center;padding:6px 30px 0 34px;font-weight:600;font-size:15px;z-index:40;pointer-events:none;color:#03081C;transition:color .3s}
$ .sb .ic{display:flex;gap:5px;align-items:center}
$ .w.dk .sb{color:#fff}
$ .hi{position:absolute;bottom:8px;left:50%;width:134px;height:5px;margin-left:-67px;border-radius:3px;background:#03081C;z-index:45;pointer-events:none;transition:background .3s}
$ .w.dk .hi{background:#fff}
$ .pg{position:absolute;inset:0;display:flex;flex-direction:column;transition:opacity .35s,transform .35s}
$ .pg.hide{opacity:0;pointer-events:none;transform:translateY(50px)}
$ .pg.wl{padding-bottom:26px}
$ .pg.wl.hide{transform:translateY(-50px)}
$ .nav{height:44px;margin-top:44px;display:flex;align-items:center;padding:0 16px 0 32px;flex:none}
$ .logo{font-weight:700;font-size:25px;letter-spacing:-.6px;color:#03081C;line-height:1}
$ .logo i{color:#6785D3;font-style:normal}
$ .tabs{display:flex;padding:20px 32px 0;flex:none}
$ .tab{padding:16px;font-size:16px;cursor:pointer;position:relative;background:none;border:0;font-family:inherit;color:#03081C}
$ .tab.on::after{content:'';position:absolute;left:16px;right:16px;bottom:8px;height:2px;background:#94B1FF}
$ .body{flex:1;min-height:0;padding:0 48px;display:flex;flex-direction:column}
$ .view{display:none;flex:1;min-height:0;flex-direction:column;gap:20px;padding:8px 0 10px}
$ .view.on{display:flex}
$ h3{font-size:18px;font-weight:500;margin:0}
$ .list{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:18px;padding:2px;scrollbar-width:none}
$ .list::-webkit-scrollbar,$ .msgs::-webkit-scrollbar,$ .set::-webkit-scrollbar{display:none}
$ .opt{display:flex;align-items:center;gap:8px;padding:10px 24px 10px 12px;background:#EDF2FF;border-radius:40px;cursor:pointer;border:2px solid transparent;transition:background .2s,border-color .2s;flex:none}
$ .opt:hover{background:#E3EAFF}
$ .opt.on{background:#fff;border-color:rgba(102,133,212,.6)}
$ .ab{width:40px;height:40px;border-radius:20px;background:#C2D4FF;display:flex;align-items:center;justify-content:center;flex:none}
$ .ab svg{width:36px;height:36px;border-radius:18px;display:block}
$ .opt b{font-size:16px;font-weight:500;color:rgba(3,8,28,.8);flex:1;line-height:1.2}
$ .opt b small{display:block;font-size:11px;color:#6685D4;font-weight:500}
$ .tr{display:flex;justify-content:space-between;align-items:center;font-size:16px;gap:10px;min-height:36px}
$ .tr span small{display:block;font-size:11px;color:#6685D4}
$ .sw{width:51px;height:31px;border-radius:16px;background:#E2E3E8;position:relative;transition:background .2s;flex:none;cursor:pointer;border:0;padding:0}
$ .sw::after{content:'';position:absolute;top:2px;left:2px;width:27px;height:27px;border-radius:50%;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.2);transition:left .2s}
$ .sw.on{background:#94B1FF}
$ .sw.on::after{left:22px}
$ .sw.busy{opacity:.45;pointer-events:none}
$ .sw:disabled{opacity:.35;cursor:default}
$ .cta{height:52px;border-radius:4px;background:#03081C;color:#fff;font-size:18px;font-weight:500;border:0;font-family:inherit;cursor:pointer;width:100%;flex:none;transition:opacity .2s}
$ .cta:disabled{opacity:.25;cursor:default}
$ .cta:active:not(:disabled){opacity:.6}
$ .cta.sec{background:#fff;color:rgba(3,8,28,.8);border:2px solid rgba(102,133,212,.6)}
$ .cta.pulse:not(:disabled){animation:rc-pulse 1.6s infinite}
@keyframes rc-pulse{0%,100%{box-shadow:0 0 0 0 rgba(102,133,212,.55)}50%{box-shadow:0 0 0 7px rgba(102,133,212,0)}}
$ .ban{flex:none;height:0;overflow:hidden;transition:height .25s;color:#fff;font-size:15px;display:flex;align-items:center;justify-content:center;background:#FF9500}
$ .ban.on{height:44px;margin-top:8px}
$ .ban.shake span{animation:rc-shake .4s}
@keyframes rc-shake{20%,60%{transform:translateX(-14px)}40%,80%{transform:translateX(14px)}}
$ .about{flex:1;overflow-y:auto;font-size:16px;line-height:1.5;padding-top:16px;scrollbar-width:none}
$ .about b{color:#6685D4;font-weight:600}
$ .about p{margin:0 0 16px}
$ .about .gap{height:24px}
$ .set{flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;display:flex;flex-direction:column;gap:30px}
$ .grp{display:flex;flex-direction:column;gap:6px}
$ .grp .t{font-size:16px}
$ .row{display:flex;justify-content:space-between;align-items:center;min-height:38px;font-size:16px;cursor:pointer;gap:8px}
$ .row .v{color:#8A8F9C;white-space:nowrap}
$ .row .v::after{content:' \\203A';font-size:20px;color:#C4C6CC}
$ .lo{color:#FF3B30;cursor:pointer;font-size:16px}
$ .hint{font-size:11px;color:#8A8F9C;margin-top:-4px}
$ .pk{position:absolute;inset:0;background:#F2F2F7;z-index:30;transform:translateX(100%);transition:transform .3s;display:flex;flex-direction:column}
$ .pk.on{transform:none}
$ .pk .hd{margin-top:44px;height:44px;display:flex;align-items:center;justify-content:center;position:relative;font-weight:600;font-size:17px;flex:none}
$ .pk .bk{position:absolute;left:6px;color:#007AFF;font-size:17px;background:none;border:0;font-family:inherit;cursor:pointer;padding:8px}
$ .pk ul{list-style:none;margin:16px;padding:0;background:#fff;border-radius:10px;overflow:auto;scrollbar-width:none}
$ .pk li{padding:12px 16px;font-size:16px;border-bottom:1px solid #ECECEF;display:flex;justify-content:space-between;cursor:pointer}
$ .pk li:last-child{border:0}
$ .pk li:hover{background:#F7F7FA}
$ .pk li.on::after{content:'\\2713';color:#007AFF;font-weight:600}
$ .pk .ft{font-size:12px;color:#8A8F9C;margin:-6px 32px 0}
$ .shade{position:absolute;inset:0;background:rgba(0,0,0,.35);z-index:50;display:none;align-items:center;justify-content:center}
$ .shade.on{display:flex}
$ .al{width:270px;background:rgba(246,246,249,.98);border-radius:14px;text-align:center;overflow:hidden;color:#000}
$ .al .in{padding:18px 16px 14px}
$ .al b{font-size:17px;font-weight:600;display:block}
$ .al p{font-size:13px;margin:4px 0 10px}
$ .al .f{display:block;width:100%;border:1px solid #D1D1D6;border-radius:6px;background:#fff;font-size:13px;padding:6px 8px;text-align:left;margin-top:6px;color:#333}
$ .al .bt{display:flex;border-top:1px solid #D1D1D6}
$ .al .bt button{flex:1;background:none;border:0;padding:11px;font-size:17px;color:#007AFF;font-family:inherit;cursor:pointer}
$ .al .bt button+button{border-left:1px solid #D1D1D6;font-weight:600}
$ .ch{background:#03081C;color:#fff}
$ .tb{margin-top:44px;height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 4px;flex:none;position:relative}
$ .tb .logo{color:#fff;font-size:21px;position:absolute;left:50%;transform:translateX(-50%)}
$ .ib{background:none;border:0;padding:10px 22px;cursor:pointer;color:#fff;border-radius:30px;display:flex}
$ .ib:hover{background:rgba(255,255,255,.08)}
$ .ib:disabled{opacity:.3;cursor:default;background:none}
$ .cv{flex:1;min-height:0;display:flex;flex-direction:column;padding:0 40px}
$ .msgs{flex:1;min-height:0;overflow-y:auto;position:relative;z-index:3;display:flex;flex-direction:column;gap:18px;padding:16px 0 8px;scrollbar-width:none}
$ .msgs>:first-child{margin-top:auto}
$ .cv.voice .msgs{-webkit-mask-image:linear-gradient(transparent,#000 22%);mask-image:linear-gradient(transparent,#000 22%)}
$ .um{align-self:flex-end;max-width:100%;background:rgba(102,133,212,.25);border-radius:20px 20px 0 20px;padding:11px 20px;font-size:19px;text-align:right;line-height:1.3;display:flex;align-items:center;gap:8px;flex:none}
$ .um .x{opacity:.7;cursor:pointer;font-size:18px;margin-right:-8px}
$ .um.live{color:#DCE5FF}
$ .cm{font-size:19px;line-height:1.38;flex:none}
$ .cm.cur::after{content:'';display:inline-block;width:8px;height:18px;background:#94B1FF;margin-left:3px;vertical-align:-2px;animation:rc-blink .7s steps(2) infinite}
@keyframes rc-blink{50%{opacity:0}}
$ .meta{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
$ .chip{font-size:11px;padding:3px 9px;border-radius:10px;background:rgba(148,177,255,.14);color:#BCCFFF;line-height:1.4}
$ .chip.q{background:rgba(255,186,120,.16);color:#FFD3A8}
$ .vb{flex:none;display:flex;flex-direction:column;align-items:center;gap:20px;padding:34px 0 6px}
$ .mic{width:80px;height:80px;border-radius:50%;background:#6685D4;border:0;position:relative;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;padding:0;transition:opacity .2s}
$ .mic .face{position:relative;z-index:2;width:80px;height:80px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#6685D4}
$ .mic .face>svg.av{width:80px;height:80px;display:block}
$ .rip{position:absolute;left:50%;top:50%;width:100px;height:100px;margin:-50px 0 0 -50px;border-radius:50%;background:rgba(102,133,212,.3);opacity:0;z-index:0;pointer-events:none}
$ .mic.on .rip{animation:rc-rip 1.2s ease-out infinite}
$ .mic.on .rip.r2{animation-delay:.6s}
$ .mic.on::before{content:'';position:absolute;inset:-10px;border-radius:50%;background:#6685D4;z-index:1}
@keyframes rc-rip{0%{transform:scale(1);opacity:.9}100%{transform:scale(2.3);opacity:0}}
$ .mic.dis{opacity:.25;cursor:default}
$ .mic.idle .face{animation:rc-glow 2s ease-in-out infinite}
@keyframes rc-glow{50%{box-shadow:0 0 0 6px rgba(102,133,212,.25)}}
$ .mic.think .face svg.av{animation:rc-breathe .8s ease-in-out infinite alternate}
@keyframes rc-breathe{from{opacity:.55;transform:scale(.94)}to{opacity:1;transform:scale(1)}}
$ .talk .m{transform-box:fill-box;transform-origin:center;animation:rc-mo .2s ease-in-out infinite alternate}
@keyframes rc-mo{from{transform:scaleY(1)}to{transform:scaleY(2.2)}}
$ .lab{font-size:16px;padding:8px 20px;display:flex;align-items:center;gap:10px;height:40px}
$ .wave{display:flex;gap:3px;align-items:center;height:20px}
$ .wave i{width:3px;background:#94B1FF;border-radius:2px;height:4px;animation:rc-w .45s ease-in-out infinite alternate}
$ .wave i:nth-child(2){animation-delay:.1s}$ .wave i:nth-child(3){animation-delay:.25s}$ .wave i:nth-child(4){animation-delay:.05s}$ .wave i:nth-child(5){animation-delay:.3s}$ .wave i:nth-child(6){animation-delay:.15s}
@keyframes rc-w{to{height:20px}}
$ .bb{flex:none;display:flex;justify-content:center;gap:28px;padding:18px 60px 40px}
$ .rb{width:60px;height:60px;border-radius:50%;border:0;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;transition:opacity .15s}
$ .rb:active{opacity:.6}
$ .pw{background:#F24A29}
$ .md{background:rgba(189,207,255,.1)}
$ .md:hover{background:rgba(189,207,255,.18)}
$ .inp{align-self:stretch;display:flex;align-items:center;gap:6px;background:rgba(102,133,212,.25);border-radius:20px 20px 0 20px;padding:5px 6px 5px 16px;flex:none}
$ .inp input{flex:1;background:none;border:0;outline:0;color:#fff;font-family:inherit;font-size:19px;text-align:right;padding:6px 0;min-width:0;user-select:text}
$ .inp input::placeholder{color:rgba(255,255,255,.45)}
$ .send{width:32px;height:32px;border-radius:50%;background:#6685D4;border:0;color:#fff;cursor:pointer;flex:none;display:flex;align-items:center;justify-content:center;padding:0}
$ .sug{align-self:flex-end;font-size:12px;color:#94B1FF;background:none;border:1px dashed rgba(148,177,255,.5);border-radius:12px;padding:4px 10px;cursor:pointer;font-family:inherit;flex:none;text-align:right}
$ .typing{display:flex;gap:5px;padding:6px 0;flex:none}
$ .typing i{width:7px;height:7px;border-radius:50%;background:#94B1FF;animation:rc-dot 1s infinite}
$ .typing i:nth-child(2){animation-delay:.15s}$ .typing i:nth-child(3){animation-delay:.3s}
@keyframes rc-dot{0%,100%{opacity:.25}50%{opacity:1}}
$ .toast{position:absolute;left:50%;bottom:132px;transform:translate(-50%,8px);background:rgba(36,40,58,.96);color:#fff;font-size:13px;padding:8px 14px;border-radius:16px;opacity:0;transition:opacity .25s,transform .25s;z-index:60;pointer-events:none;width:max-content;max-width:300px;text-align:center}
$ .toast.on{opacity:1;transform:translate(-50%,0)}
$ .rp{position:absolute;right:14px;top:53px;z-index:41;background:rgba(3,8,28,.06);border:0;border-radius:14px;padding:5px 10px;font-weight:600;font-size:11px;font-family:inherit;cursor:pointer;color:#333}
$ .w.dk .rp{top:auto;bottom:16px;background:rgba(255,255,255,.1);color:#ccd}
`.replace(/\$ /g,'.demo-realchar ').replace(/\$ \{/g,'.demo-realchar{');
CSS=CSS.replace('.demo-realchar {background:#fff','.demo-realchar{background:#fff');

var CHARS=[
 {id:'ai',name:'Realtime AI',tag:'Kind',
  greet:"Hi, my friend, what brings you here today?",
  p:[{u:"Can you help me plan my week?",
      g:"Of course! Let\u2019s start with your three must-dos, then block focus time around them. What\u2019s the biggest one?",
      c:"Happy to. Tell me the one thing that would make this week a win, and we\u2019ll protect time for it first \u2014 everything else fits around it.",
      q:["Weekly planning.md","Your note says you do your best deep work before noon, so let\u2019s put the hardest task on Tuesday morning."]},
     {u:"What makes you different from a chatbot?",
      g:"I talk in real time \u2014 you speak, I listen, and I answer in my own voice while I\u2019m still thinking. More like a phone call than a form.",
      c:"Mostly timing: my words and voice stream out as they\u2019re generated, so it feels like a conversation instead of waiting for an essay.",
      q:["About RealChar.md","Your notes put it well: \u201cvoice in, voice out, under a second.\u201d"]}],
  s:"Give me a fun fact to start the day",
  t:{g:"Here\u2019s one: octopuses have three hearts, and two of them take a break whenever they swim.",c:"Sure! Honey never spoils \u2014 archaeologists have found 3,000-year-old honey that was still edible."},
  tq:["Fun facts.md","you saved that one about sea otters holding hands while they sleep \u2014 still my favorite."]},
 {id:'mentor',name:'Tech Mentor',tag:'Patient',
  greet:"Hey! I\u2019m your tech mentor. Stuck on code, career, or a system design? Let\u2019s talk it through.",
  p:[{u:"How do I make my app feel real-time?",
      g:"Stream everything. Keep a WebSocket open, send mic audio up in chunks, and push tokens and speech back the moment the model produces them.",
      c:"One WebSocket per session, streaming both ways: audio up, text tokens and audio chunks down. Never wait for the full answer \u2014 latency is the product.",
      q:["iOS client notes.md","Your notes also say the server sends [thinking] first and [end] when a reply is done, so the UI always knows its state."]},
     {u:"Should I learn Swift or React Native?",
      g:"If you want it to feel truly native \u2014 audio sessions, haptics, speech recognition \u2014 start with Swift and SwiftUI. You can share logic later.",
      c:"Depends on the goal. Deep audio and haptics on iPhone: Swift. One codebase everywhere: React Native. Pick one and ship something this week.",
      q:["Learning plan.md","Your plan says \u201cSwiftUI by August\u201d \u2014 so Swift it is."]}],
  s:"Any tips for my first hackathon?",
  t:{g:"Scope ruthlessly: one wow moment, a demo that works offline, and practice the pitch twice. Sleep a little!",c:"Pick a tiny problem, make the demo bulletproof, and spend the last two hours on the story. Judges remember the moment, not the codebase."},
  tq:["Hackathon retro.md","last time, your team lost an hour to Wi-Fi \u2014 bring a hotspot."]},
 {id:'space',name:'Space Explorer',tag:'Curious',
  greet:"Commander here, orbiting four hundred kilometers up. Ask me anything about life in space!",
  p:[{u:"What does Earth look like from up there?",
      g:"Like a glowing blue marble wrapped in a paper-thin atmosphere. At night, cities trace the coastlines in gold.",
      c:"Breathtaking. The atmosphere is a thin blue line, and because we circle the planet so fast, we see about sixteen sunrises a day.",
      q:["Mission log.md","Your mission log says we pass over the Pacific at dawn tomorrow \u2014 I\u2019ll describe it for you."]},
     {u:"How do you sleep in zero gravity?",
      g:"Zipped into a sleeping bag strapped to the wall, so I don\u2019t drift into an air vent! No pillow needed \u2014 your head just floats.",
      c:"In a small sleeping bag tethered to the wall. Arms float up like a sleepwalker\u2019s, and the hum of the fans is our lullaby.",
      q:["Crew notes.md","According to the crew notes, earplugs are the most requested item on board."]}],
  s:"What do you eat in space?",
  t:{g:"Tortillas instead of bread \u2014 no crumbs floating into the electronics. And lots of hot sauce, since taste dulls up here.",c:"Mostly rehydrated meals and tortillas \u2014 crumbs are dangerous in microgravity. Spicy food is popular because flavors feel muted."},
  tq:["Mission log.md","your log says fresh oranges arrive with Friday\u2019s cargo ship."]},
 {id:'story',name:'Storyteller',tag:'Whimsical',
  greet:"Ah, a visitor! Pull up a chair by the fire. Shall I tell you a story?",
  p:[{u:"Tell me a story about a brave little robot.",
      g:"Once, in a city of rusted towers, a little robot named Pip found the last seed on Earth \u2014 and decided to find it a garden.",
      c:"In a quiet junkyard lived Pip, a robot no bigger than a teapot. One morning Pip found a seed glowing in the dust, and set off to find it a home.",
      q:["Bedtime ideas.md","And since your notes say Mia loves foxes, a clever fox named Ember joins Pip on the journey."]},
     {u:"What happens next?",
      g:"Pip crossed the Glass Desert, bargained with a crow, and at sunrise planted the seed on a hill. By spring, the whole city was green.",
      c:"Pip walked for nine nights. At last, on a hill above the city, the seed took root \u2014 and every rusted tower began to bloom.",
      q:["Bedtime ideas.md","Your notes say every story should end with a lullaby \u2014 so the flowers hum Pip to sleep."]}],
  s:"Make up a riddle for me",
  t:{g:"I have keys but open no doors, space but no rooms, and you can enter but never leave. What am I? \u2026A keyboard!",c:"The more of me you take, the more you leave behind. What am I? Footsteps!"},
  tq:["Riddles.md","you wrote that Mia guessed the echo riddle in one try \u2014 this one\u2019s harder."]}
];
var LLMS=['rebyte','gpt-3.5','gpt-4','claude-2','LLaMA-2-70b'];
var LANGS=['English','Spanish','French','German','Italian','Portuguese','Polish','Hindi','Chinese','Japanese','Korean'];
var LOC={English:'en-US',Spanish:'es-ES',French:'fr-FR',German:'de-DE',Italian:'it-IT',Portuguese:'pt-PT',Polish:'pl-PL',Hindi:'hi-IN',Chinese:'zh-CN',Japanese:'ja-JP',Korean:'ko-KR'};

var gid=0;
function av(id){
  var n='rcg'+(++gid),h='<svg class="av" viewBox="0 0 100 100"><defs>';
  if(id==='ai')return h+'<radialGradient id="'+n+'" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#A9C0FF"/><stop offset=".6" stop-color="#5B6CE0"/><stop offset="1" stop-color="#2A2F8F"/></radialGradient></defs><rect width="100" height="100" fill="url(#'+n+')"/><line x1="50" y1="19" x2="50" y2="29" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="16" r="4.5" fill="#FFD66B"/><rect x="22" y="29" width="56" height="44" rx="16" fill="#fff"/><rect x="29" y="37" width="42" height="27" rx="11" fill="#1C2257"/><circle cx="41" cy="48" r="4.5" fill="#7DF0FF"/><circle cx="59" cy="48" r="4.5" fill="#7DF0FF"/><rect class="m" x="44" y="56" width="12" height="3" rx="1.5" fill="#7DF0FF"/><rect x="15" y="44" width="7" height="14" rx="3" fill="#E4E9FF"/><rect x="78" y="44" width="7" height="14" rx="3" fill="#E4E9FF"/><path d="M28 100 C30 82 70 82 72 100Z" fill="#E4E9FF"/></svg>';
  if(id==='mentor')return h+'<linearGradient id="'+n+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#46C2B0"/><stop offset="1" stop-color="#1D5F86"/></linearGradient></defs><rect width="100" height="100" fill="url(#'+n+')"/><path d="M18 100 C20 76 80 76 82 100Z" fill="#2C3E66"/><path d="M42 76 L50 86 L58 76Z" fill="#fff"/><rect x="43" y="62" width="14" height="14" rx="5" fill="#E2B48E"/><circle cx="50" cy="47" r="20" fill="#F1C6A1"/><path d="M29 46 C27 25 72 20 71 44 C67 35 56 31 45 34 C38 36 33 40 29 46Z" fill="#3A2A22"/><circle cx="42" cy="48" r="6" fill="rgba(255,255,255,.25)" stroke="#1D2433" stroke-width="2.2"/><circle cx="58" cy="48" r="6" fill="rgba(255,255,255,.25)" stroke="#1D2433" stroke-width="2.2"/><line x1="48" y1="48" x2="52" y2="48" stroke="#1D2433" stroke-width="2"/><circle cx="42" cy="48" r="1.8" fill="#1D2433"/><circle cx="58" cy="48" r="1.8" fill="#1D2433"/><ellipse class="m" cx="50" cy="58.5" rx="4.5" ry="1.8" fill="#9C4A3C"/></svg>';
  if(id==='space')return h+'<radialGradient id="'+n+'" cx=".5" cy=".4" r=".8"><stop offset="0" stop-color="#3B3F8F"/><stop offset="1" stop-color="#0B0E2A"/></radialGradient><linearGradient id="'+n+'v" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFB07A"/><stop offset=".5" stop-color="#E0608F"/><stop offset="1" stop-color="#6A4DFF"/></linearGradient></defs><rect width="100" height="100" fill="url(#'+n+')"/><circle cx="14" cy="16" r="1.3" fill="#fff"/><circle cx="84" cy="12" r="1" fill="#fff"/><circle cx="90" cy="40" r="1.4" fill="#fff"/><circle cx="9" cy="62" r="1" fill="#fff"/><circle cx="78" cy="26" r=".8" fill="#fff"/><path d="M16 100 C18 80 82 80 84 100Z" fill="#E9EDF7"/><rect x="40" y="86" width="20" height="8" rx="2" fill="#6685D4"/><circle cx="50" cy="50" r="31" fill="#F4F6FB"/><circle cx="50" cy="50" r="31" fill="none" stroke="#C9D1E6" stroke-width="2"/><ellipse cx="50" cy="51" rx="23" ry="19" fill="url(#'+n+'v)"/><path d="M34 44 C36 37 43 34 49 34" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/><ellipse class="m" cx="50" cy="61" rx="7" ry="1.6" fill="rgba(255,255,255,.65)"/></svg>';
  return h+'<linearGradient id="'+n+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7A4FB8"/><stop offset="1" stop-color="#2F1F5A"/></linearGradient></defs><rect width="100" height="100" fill="url(#'+n+')"/><circle cx="80" cy="20" r="9" fill="#FFE9A8" opacity=".9"/><circle cx="84" cy="17" r="8" fill="#6A44A6"/><path d="M28 34 L33 18 L42 30Z M72 34 L67 18 L58 30Z" fill="#7E4F2C"/><ellipse cx="50" cy="64" rx="27" ry="32" fill="#A06A3F"/><ellipse cx="50" cy="76" rx="16" ry="17" fill="#E8C9A0"/><circle cx="39" cy="50" r="11" fill="#fff"/><circle cx="61" cy="50" r="11" fill="#fff"/><circle cx="40" cy="51" r="5" fill="#2A1A12"/><circle cx="60" cy="51" r="5" fill="#2A1A12"/><circle cx="41.5" cy="49" r="1.6" fill="#fff"/><circle cx="61.5" cy="49" r="1.6" fill="#fff"/><path class="m" d="M45.5 60 L54.5 60 L50 67Z" fill="#F4A62A"/></svg>';
}
var IC={
 mic:'<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M17 7a5 5 0 0 0-10 0v6a5 5 0 0 0 10 0V7Zm-5-3a3 3 0 0 1 3 3v6a3 3 0 1 1-6 0V7a3 3 0 0 1 3-3Zm8 7a1 1 0 0 0-1 1v1a7 7 0 1 1-14 0v-1a1 1 0 1 0-2 0v1a9 9 0 0 0 18 0v-1a1 1 0 0 0-1-1Z"/></svg>',
 stop:'<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="3"/></svg>',
 msg:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3a9 9 0 0 0-8 13.2L3 21l4.9-1.1A9 9 0 1 0 12 3Z"/></svg>',
 pw:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 3v8"/><path d="M6.4 6.6a8 8 0 1 0 11.2 0"/></svg>',
 menu:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h12"/></svg>',
 share:'<svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M8 11H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2"/></svg>',
 up:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'
};
function sig(){return '<svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg><svg width="25" height="12" viewBox="0 0 25 12"><rect x=".5" y=".5" width="21" height="11" rx="3" fill="none" stroke="currentColor" opacity=".5"/><rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor"/><rect x="23" y="4" width="1.5" height="4" rx=".7" fill="currentColor" opacity=".5"/></svg>'}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var LOGO='RealChar<i>.</i>';

window.DEMOS[ID]={
  frame:'phone',
  title:'RealChar \u2014 iOS app (2023)',
  caption:'Pick a character, tap the mic and talk in realtime. Switch to text mode, then open Settings to change the LLM or enable Quivr \u201csecond brain\u201d memory. Replies are scripted; Sound is off by default.',
  sources:[
    'https://github.com/Shaunwei/RealChar',
    'https://github.com/Shaunwei/RealChar/tree/main/client/mobile/ios',
    'https://github.com/Shaunwei/RealChar/blob/main/client/mobile/ios/rac/rac/Interactive/Voice/VoiceMessageView.swift',
    'https://github.com/Shaunwei/RealChar/blob/main/client/mobile/ios/rac/rac/Welcome/Settings/SettingsView.swift',
    'https://github.com/Shaunwei/RealChar/blob/main/client/mobile/ios/rac/rac/Welcome/Config/ConfigView.swift'
  ],
  mount:function(root){
    var timers=[],S,w;
    var hasTTS=('speechSynthesis' in window)&&typeof window.SpeechSynthesisUtterance==='function';
    function T(f,ms){var t=setTimeout(f,ms);timers.push(t);return t}
    function q(s){return w.querySelector(s)}
    function ch(){return CHARS.filter(function(c){return c.id===S.sel})[0]}
    function shh(){if(hasTTS){try{window.speechSynthesis.cancel()}catch(e){}}}
    function fresh(){S={tab:'config',sel:null,openMic:false,llm:'gpt-4',lang:'English',haptic:true,search:false,quivr:false,qBusy:false,sound:false,
      scr:'welcome',mode:'voice',vs:'idle',msgs:[],turn:0,streaming:false,run:0,lt:0,dirty:true,conn:false}}

    function render(){
      gid=0;
      root.innerHTML='<style>'+CSS+'</style><div class="w">'+
      '<div class="sb"><span>9:41</span><span class="ic">'+sig()+'</span></div>'+
      '<button class="rp" data-a="reset">\u21BA Replay</button>'+
      /* welcome */
      '<div class="pg wl"><div class="nav"><span class="logo">'+LOGO+'</span></div>'+
        '<div class="tabs"><button class="tab" data-tab="about">About</button><button class="tab" data-tab="config">Try out</button><button class="tab" data-tab="settings">Settings</button></div>'+
        '<div class="body">'+
          '<div class="view" data-v="about"><div class="about"><p><b>RealChar</b> is a revolutionary project enabling dynamic audio-visual interactions between humans and AI.</p><p>Powered by Large Language Model (LLM), it offers instant, natural, and context-aware responses, paving the way for a new era of interactive AI experiences.</p><p>Disclaimer: Fictional characters for entertainment purposes only.</p><div class="gap"></div><p><b>Authors</b><br>Shaunwei, lynchee-owo, ZongZiWang, pycui</p><div class="gap"></div><p><b>RealChar is Open Source</b></p></div><button class="cta" data-a="contrib">Contribute</button></div>'+
          '<div class="view" data-v="config"><h3>Choose your partner</h3><div class="list">'+
            CHARS.map(function(c){return '<div class="opt" data-c="'+c.id+'"><span class="ab">'+av(c.id)+'</span><b>'+c.name+'<small>'+c.tag+'</small></b></div>'}).join('')+
          '</div><div class="tr"><span>Wearing headphone?<small>Hands-free: keeps listening after each reply</small></span><button class="sw" data-t="openMic" aria-label="Wearing headphone"></button></div>'+
          '<button class="cta go" data-a="start" disabled>Get started</button></div>'+
          '<div class="view" data-v="settings"><div class="set">'+
            '<div class="grp"><h3>User settings</h3><div class="t">Name: Demo Visitor</div><div class="t">Email: visitor@example.com</div><div><span class="lo" data-a="logout">Log out</span></div></div>'+
            '<div class="grp"><h3>System settings</h3>'+
              '<div class="row" data-pk="lang"><span>Conversation Language?</span><span class="v" data-val="lang"></span></div>'+
              '<div class="row" data-pk="llm"><span>LLM Model?</span><span class="v" data-val="llm"></span></div>'+
              '<div class="tr"><span>Haptic feedback?</span><button class="sw" data-t="haptic"></button></div>'+
              '<div class="tr"><span>Enable Google search?</span><button class="sw" data-t="search"></button></div>'+
              '<div class="tr"><span>Enable Second Brain?<small class="qn">Quivr \u00B7 not connected</small></span><button class="sw" data-t="quivr"></button></div>'+
            '</div>'+
            '<div class="grp"><h3>Demo</h3><div class="tr"><span>Sound<small>'+(hasTTS?'Speak replies with your browser voice':'Not supported in this browser')+'</small></span><button class="sw" data-t="sound"'+(hasTTS?'':' disabled')+'></button></div></div>'+
          '</div><button class="cta sec" data-a="feedback">Leave Beta feedback</button></div>'+
        '</div>'+
        '<div class="ban"><span>Connecting to server...</span></div>'+
      '</div>'+
      /* picker */
      '<div class="pk"><div class="hd"><button class="bk" data-a="pkback">\u2039 Back</button><span class="pt"></span></div><ul></ul><div class="ft"></div></div>'+
      /* chat */
      '<div class="pg ch hide">'+
        '<div class="tb"><button class="ib" data-a="menu" aria-label="Settings">'+IC.menu+'</button><span class="logo">'+LOGO+'</span><button class="ib" data-a="share" aria-label="Share">'+IC.share+'</button></div>'+
        '<div class="cv voice"><div class="msgs"></div>'+
          '<div class="vb"><button class="mic" data-a="mic" aria-label="Talk"><i class="rip"></i><i class="rip r2"></i><span class="face"></span></button><div class="lab"></div></div>'+
        '</div>'+
        '<div class="bb"><button class="rb pw" data-a="exit" aria-label="End">'+IC.pw+'</button><button class="rb md" data-a="mode" aria-label="Toggle text mode">'+IC.msg+'</button></div>'+
      '</div>'+
      '<div class="shade"><div class="al"><div class="in"><b>Enable Second Brain</b><p>Connect a Quivr brain so characters can recall your notes.</p><div class="f">Quivr API key: \u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022 (demo)</div><div class="f">Brain ID: product-notes</div></div><div class="bt"><button data-a="qcancel">Cancel</button><button data-a="qok">Submit</button></div></div></div>'+
      '<div class="toast"></div><div class="hi"></div></div>';
      w=root.querySelector('.w');
      updWelcome();
    }

    function toast(t){var el=q('.toast');el.textContent=t;el.classList.add('on');clearTimeout(S.tt);S.tt=T(function(){el.classList.remove('on')},2200)}

    function updWelcome(){
      w.querySelectorAll('.tab').forEach(function(b){b.classList.toggle('on',b.dataset.tab===S.tab)});
      w.querySelectorAll('.view').forEach(function(v){v.classList.toggle('on',v.dataset.v===S.tab)});
      w.querySelectorAll('.opt').forEach(function(o){o.classList.toggle('on',o.dataset.c===S.sel)});
      w.querySelectorAll('.sw').forEach(function(s){s.classList.toggle('on',!!S[s.dataset.t]||(s.dataset.t==='quivr'&&S.qBusy));s.classList.toggle('busy',s.dataset.t==='quivr'&&S.qBusy)});
      q('[data-val=lang]').textContent=S.lang;q('[data-val=llm]').textContent=S.llm;
      q('.qn').textContent=S.qBusy?'Quivr \u00B7 registering memory\u2026':S.quivr?'Quivr \u00B7 Brain: Product notes':'Quivr \u00B7 not connected';
      var go=q('.go');go.disabled=!S.sel;go.classList.toggle('pulse',!!S.sel);
    }
    function reconnect(){
      if(!S.sel)return;S.dirty=true;S.conn=true;q('.ban').classList.add('on');
      clearTimeout(S.ct);S.ct=T(function(){S.conn=false;q('.ban').classList.remove('on')},1100);
    }
    function openPicker(kind){
      S.pk=kind;var items=kind==='llm'?LLMS:LANGS,cur=kind==='llm'?S.llm:S.lang;
      q('.pk .pt').textContent=kind==='llm'?'LLM Model?':'Conversation Language?';
      q('.pk ul').innerHTML=items.map(function(i){return '<li data-pi="'+i+'" class="'+(i===cur?'on':'')+'">'+i+'</li>'}).join('');
      q('.pk .ft').textContent=kind==='llm'?'Non-default models require sign-in (you\u2019re signed in as a demo user). Replies differ between gpt-* and claude-2.':'Sets the speech recognition locale. Scripted replies stay in English.';
      q('.pk').classList.add('on');
    }

    /* ---------- conversation ---------- */
    function showChat(){
      S.scr='chat';q('.wl').classList.add('hide');q('.ch').classList.remove('hide');w.classList.add('dk');
      if(S.dirty){S.run++;shh();S.dirty=false;S.msgs=[];S.turn=0;S.sugUsed=false;S.mode='voice';S.streaming=true;setMode();setVS('think');
        var r=S.run;T(function(){if(r===S.run)stream(ch().greet,{})},1000);}
      else{setMode();renderMsgs();updVoice()}
    }
    function showWelcome(tab){
      if(S.vs==='listen')cancelListen();
      if(S.vs==='talk'||S.vs==='think')S.vs=S.streaming?'recv':'idle';
      shh();S.scr='welcome';S.tab=tab;q('.ch').classList.add('hide');q('.wl').classList.remove('hide');w.classList.remove('dk');updWelcome();
    }
    function setVS(v){S.vs=v;updVoice()}
    function updVoice(){
      var m=q('.mic'),f=q('.face'),l=q('.lab'),v=S.vs,c=ch();
      m.className='mic '+v+((v==='talk'||v==='listen')?' on':'')+(v==='recv'?' dis':'');
      f.innerHTML=v==='listen'?IC.stop:(v==='think'||v==='talk')?av(c.id):IC.mic;
      if(v==='talk')f.firstChild.classList.add('talk');
      l.innerHTML=v==='listen'?'Listening <span class="wave"><i></i><i></i><i></i><i></i><i></i><i></i></span>':{idle:'Talk to me',recv:'Receiving...',think:'Thinking...',talk:'Talking'}[v];
    }
    function setMode(){
      var cv=q('.cv');cv.classList.toggle('voice',S.mode==='voice');
      q('.vb').style.display=S.mode==='voice'?'':'none';
      q('[data-a=mode]').innerHTML=S.mode==='voice'?IC.msg:IC.mic;
      q('[data-a=mode]').setAttribute('aria-label',S.mode==='voice'?'Switch to text':'Switch to voice');
      renderMsgs();
    }
    function msgHTML(m){
      if(m.r==='u')return '<div class="um'+(m.live?' live':'')+'"><span>'+(esc(m.t)||'\u2026')+'</span>'+(m.live?'<span class="x" data-a="cx" title="Cancel">\u2297</span>':'')+'</div>';
      var meta='';
      if(m.done&&m.llm){meta='<div class="meta"><span class="chip">'+esc(m.llm)+'</span>'+(m.search?'<span class="chip">\uD83D\uDD0E Google search</span>':'')+(m.cite?'<span class="chip q">\uD83E\uDDE0 Second Brain \u00B7 '+esc(m.cite)+'</span>':'')+'</div>'}
      return '<div class="cm'+(m.done?'':' cur')+'">'+esc(m.t)+meta+'</div>';
    }
    function renderMsgs(){
      var box=q('.msgs'),ms=S.msgs,h;
      if(S.mode==='voice'){h=ms.slice(-2).map(msgHTML).join('')}
      else{
        h=ms.map(msgHTML).join('');
        var last=ms[ms.length-1];
        if(S.streaming&&last&&last.r==='u')h+='<div class="typing"><i></i><i></i><i></i></div>';
        if(!S.streaming){var c=ch();h+=(S.sugUsed?'':'<button class="sug" data-a="sug">Try: \u201c'+esc(c.s)+'\u201d</button>')+'<div class="inp"><input placeholder="Your turn" maxlength="120"><button class="send" data-a="send" aria-label="Send">'+IC.up+'</button></div>'}
      }
      var inp=box.querySelector('input'),keep=inp?inp.value:'',had=inp&&document.activeElement===inp;
      box.innerHTML=h;
      var ni=box.querySelector('input');if(ni){ni.value=keep;if(had)ni.focus({preventScroll:true})}
      box.scrollTop=box.scrollHeight;
    }
    function variant(o){return S.llm==='claude-2'?o.c:o.g}
    function speak(t,done){
      if(!S.sound||!hasTTS){done&&done(false);return}
      try{shh();var u=new window.SpeechSynthesisUtterance(t);u.lang='en-US';u.rate=1.05;
        var fired=false;var fin=function(){if(!fired){fired=true;done&&done(true)}};u.onend=fin;u.onerror=fin;
        window.speechSynthesis.speak(u);T(fin,15000);}catch(e){done&&done(false)}
    }
    function stream(text,o){
      var r=S.run,m={r:'a',t:'',done:false,llm:S.llm,search:S.search&&o.web,cite:null};
      if(S.quivr&&o.q){text=text+' '+o.q[1];m.cite=o.q[0]}
      S.msgs.push(m);S.streaming=true;
      var voice=S.mode==='voice';
      if(voice&&S.vs==='think')setVS('talk');
      var spoken=false,ended=false;
      if(voice&&S.vs==='talk')speak(text,function(ok){spoken=true;if(ended)finish()});else spoken=true;
      if(!S.sound||!hasTTS)spoken=true;
      var toks=text.match(/\S+\s*/g)||[],i=0;
      function finish(){
        if(r!==S.run)return;
        if(S.vs==='talk'||S.vs==='recv'||S.vs==='think'){setVS('idle');
          if(S.openMic&&S.mode==='voice'&&S.scr==='chat'&&S.turn<ch().p.length)T(function(){if(r===S.run&&S.vs==='idle'&&!S.streaming&&S.scr==='chat')startListen()},900);}
      }
      (function step(){
        if(r!==S.run)return;
        if(i<toks.length){m.t+=toks[i++];renderMsgs();T(step,60+Math.random()*70);return}
        m.done=true;S.streaming=false;renderMsgs();ended=true;
        if(S.mode!=='voice'){if(S.vs!=='listen')S.vs='idle';return}
        if(spoken||S.vs!=='talk')T(finish,350);
      })();
    }
    function startListen(){
      if(S.streaming)return;
      var c=ch(),p=c.p[S.turn%c.p.length],lt=++S.lt,words=p.u.split(' '),k=0;
      var m={r:'u',t:'',live:true};S.msgs.push(m);S.cur={m:m,p:p};
      setVS('listen');renderMsgs();
      (function add(){
        if(lt!==S.lt||S.vs!=='listen')return;
        if(k<words.length){m.t=words.slice(0,++k).join(' ');renderMsgs();T(add,170+Math.random()*120);return}
        T(function(){if(lt===S.lt&&S.vs==='listen')finishListen()},1100);
      })();
    }
    function finishListen(){
      var cur=S.cur;if(!cur)return;S.lt++;S.cur=null;
      cur.m.t=cur.p.u;cur.m.live=false;S.turn++;S.streaming=true;
      setVS('think');renderMsgs();
      var r=S.run;T(function(){if(r===S.run)stream(variant(cur.p),{q:cur.p.q,web:true})},1000+Math.random()*300);
    }
    function cancelListen(){
      if(!S.cur)return;S.lt++;var i=S.msgs.indexOf(S.cur.m);if(i>=0)S.msgs.splice(i,1);S.cur=null;setVS('idle');renderMsgs();
    }
    function sendText(v){
      v=(v||'').trim();if(!v||S.streaming)return;
      var c=ch(),hit=v.toLowerCase().replace(/[?!.]/g,'')===c.s.toLowerCase().replace(/[?!.]/g,'');
      if(hit)S.sugUsed=true;
      S.msgs.push({r:'u',t:v});S.streaming=true;renderMsgs();
      var r=S.run,txt=hit?variant(c.t):(S.llm==='claude-2'?'Good question! I\u2019m a scripted demo, so here\u2019s my favorite answer instead: ':'I\u2019m a scripted demo character, but here\u2019s something I love: ')+(hit?'':variant(c.t));
      T(function(){if(r===S.run)stream(txt,{q:c.tq?[c.tq[0],(hit?'And ':'Also, ')+c.tq[1]]:null,web:hit})},900);
    }
    function onMic(){
      var v=S.vs;
      if(v==='idle'){if(!S.streaming)startListen()}
      else if(v==='listen'){if(S.cur&&S.cur.m.t)finishListen();else cancelListen()}
      else if(v==='talk'||v==='think'){shh();setVS(S.streaming?'recv':'idle')}
    }

    function onClick(e){
      var el=e.target.closest('[data-a],[data-tab],[data-c],[data-t],[data-pk],[data-pi]');if(!el||!w.contains(el))return;
      var d=el.dataset;
      if(d.tab){S.tab=d.tab;updWelcome()}
      else if(d.c){S.sel=S.sel===d.c?null:d.c;updWelcome();if(S.sel)reconnect()}
      else if(d.t){var k=d.t;
        if(k==='quivr'){if(S.qBusy)return;if(S.quivr){S.quivr=false;updWelcome();reconnect()}else{q('.shade').classList.add('on')}return}
        S[k]=!S[k];if(k==='sound'&&!S.sound)shh();updWelcome();
        if(k==='search')reconnect();
        if(k==='haptic'&&S.haptic&&navigator.vibrate){try{navigator.vibrate(15)}catch(x){}}
        if(k==='sound'&&S.sound)toast('Replies will be spoken in voice mode');}
      else if(d.pk)openPicker(d.pk);
      else if(d.pi){var old=S.pk==='llm'?S.llm:S.lang;if(S.pk==='llm')S.llm=d.pi;else S.lang=d.pi;
        openPicker(S.pk);updWelcome();if(old!==d.pi)reconnect();T(function(){q('.pk').classList.remove('on')},250)}
      else switch(d.a){
        case 'reset':reset();break;
        case 'start':if(!S.sel)return;if(S.conn){var b=q('.ban');b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');return}showChat();break;
        case 'contrib':toast('Opens github.com/Shaunwei/RealChar');break;
        case 'feedback':toast('Opens an email to the RealChar team');break;
        case 'logout':toast('Sign-in is disabled in this demo');break;
        case 'pkback':q('.pk').classList.remove('on');break;
        case 'qcancel':q('.shade').classList.remove('on');break;
        case 'qok':q('.shade').classList.remove('on');S.qBusy=true;updWelcome();
          T(function(){S.qBusy=false;S.quivr=true;updWelcome();reconnect();toast('Second Brain connected: Product notes')},1100);break;
        case 'mic':onMic();break;
        case 'cx':cancelListen();break;
        case 'mode':
          if(S.vs==='listen')cancelListen();
          if(S.mode==='voice'){shh();if(S.vs!=='idle')S.vs=S.streaming?'recv':'idle';S.mode='text'}else S.mode='voice';
          setMode();updVoice();if(S.mode==='text'){var i=q('.msgs input');i&&i.focus({preventScroll:true})}break;
        case 'exit':showWelcome('config');break;
        case 'menu':showWelcome('settings');break;
        case 'share':if(S.msgs.length<=2||S.streaming)toast('Have a longer chat first, then share it');else toast('Share link copied: realchar.ai/shared?session_id=\u2026');break;
        case 'sug':var inp=q('.msgs input');if(inp){inp.value=ch().s;inp.focus({preventScroll:true})}break;
        case 'send':var inp2=q('.msgs input');inp2&&sendText(inp2.value);break;
      }
    }
    function onKey(e){if(e.key==='Enter'&&e.target&&e.target.tagName==='INPUT'&&w.contains(e.target)){e.preventDefault();sendText(e.target.value)}}
    function reset(){timers.forEach(clearTimeout);timers=[];shh();fresh();render()}
    root.addEventListener('click',onClick);root.addEventListener('keydown',onKey);
    fresh();render();
    return function(){timers.forEach(clearTimeout);shh();root.removeEventListener('click',onClick);root.removeEventListener('keydown',onKey)};
  }
};
})();
