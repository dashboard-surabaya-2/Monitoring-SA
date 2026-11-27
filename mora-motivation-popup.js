(function(){
if(window.__moraMotivationPopupLoaded)return;window.__moraMotivationPopupLoaded=true;
const d=new Date(),day=d.getDate(),last=new Date(d.getFullYear(),d.getMonth()+1,0).getDate(),weekend=d.getDay()===0||d.getDay()===6,eom=day>last-10,opening=day<=7;
const pools={
eomWeekend:[
["GOLDEN DAY","☀️","Weekend bukan alasan untuk berhenti bersinar. Isi hari dengan energi baik, saling support, dan selesaikan yang bisa kita menangkan hari ini."],
["WEEKEND POWER","🔥","Santai boleh, semangat jangan padam. Tetap kompak, ambil peluang yang ada, dan bikin penutupan bulan ini jadi cerita yang membanggakan."],
["FINISH WITH PRIDE","🏁","Kita sudah dekat garis akhir. Jaga mood, bantu teman yang butuh dukungan, dan tutup bulan dengan usaha terbaik."]
],
eom:[
["LET'S FINISH STRONG","🚀","Ini waktunya tancap gas! Pilih peluang paling dekat, follow up dengan cepat, dan jangan biarkan kesempatan lewat begitu saja."],
["LAST MILE, BIG ENERGY","⚡","Sedikit lagi sampai garis akhir. Jangan kendur sekarang—satu follow up, satu WO selesai, satu closing bisa jadi pembeda."],
["GAS TERUS, TIM!","💥","Target tidak dikejar sendirian. Saling backup, gerak lebih gesit, dan buktikan kalau kekuatan kita ada di kekompakan."],
["CLOSING MODE: ON","🎯","Fokus ke yang paling berdampak. Rapikan prioritas, tuntaskan kendala, dan ubah sisa waktu jadi hasil nyata."]
],
openingWeekend:[
["HELLO, NEW MONTH!","🌈","Bulan baru, halaman baru. Nikmati Golden Day, isi ulang energi, lalu siap bikin bulan ini jauh lebih keren dari kemarin."],
["GOOD VIBES, GREAT TEAM","✨","Mulai dengan senyum dan energi positif. Ide bagus, kerja kompak, dan langkah kecil hari ini bisa membuka hasil besar."],
["FRESH START","🌻","Tidak perlu menunggu sempurna untuk mulai. Bawa semangat baru, saling dukung, dan tumbuh lebih baik bareng-bareng."]
],
opening:[
["NEW MONTH, NEW WINS","🚀","Bulan baru sudah datang! Pasang target dengan berani, mulai dengan langkah nyata, dan buat setiap hari punya progres."],
["START STRONG!","⚡","Awal yang kuat bukan soal berlari paling cepat, tapi soal konsisten dari hari pertama. Kita bikin bulan ini lebih baik bersama!"],
["LEVEL UP TOGETHER","💫","Kesempatan baru, energi baru. Tinggalkan yang kemarin, ambil pelajarannya, lalu naikkan standar kita bulan ini."],
["THIS MONTH IS OURS","🏆","Buka bulan dengan percaya diri. Satu tim, satu arah, dan banyak kesempatan untuk menciptakan pencapaian baru."]
],
weekend:[
["GOLDEN DAY!","☀️","Hari ini waktunya recharge dan tetap menebar energi positif. Terima kasih sudah berjuang—kita makin kuat karena saling dukung."],
["GOOD DAY, GREAT PEOPLE","😎","Bawa senyum, jaga semangat, dan nikmati prosesnya. Tim hebat bukan yang selalu mulus, tapi yang selalu saling menguatkan."],
["WEEKEND VIBES","🌴","Apresiasi setiap progres sekecil apa pun. Istirahatkan pikiran, isi ulang tenaga, dan siap kembali dengan energi terbaik."],
["KEEP THE SPIRIT ALIVE","🔥","Apa pun ritmenya hari ini, tetap jadi bagian dari energi positif tim. Kompak itu kekuatan, kebersamaan itu kemenangan."]
],
daily:[
["PAGI, PARA PEJUANG!","🌞","Hari baru, peluang baru. Jangan tunggu mood datang—mulai saja dulu, karena langkah kecil yang konsisten bisa membawa hasil besar."],
["MAKE TODAY COUNT","🎯","Satu hal yang dituntaskan lebih baik daripada banyak rencana yang tertunda. Pilih prioritas, bergerak, dan rayakan progresnya."],
["ENERGI KITA, HASIL KITA","⚡","Kalau ada kendala, cari jalan bareng. Kalau ada peluang, kejar bareng. Tidak ada yang harus berjuang sendirian di tim ini."],
["SEDIKIT LAGI, TERUS MAJU","🧡","Jangan remehkan progres hari ini. Setiap usaha punya arti—terus jaga ritme dan saling dorong untuk hasil yang lebih baik."],
["TEAMWORK ON FIRE","🔥","Bukan tentang siapa paling hebat, tapi bagaimana kita membuat satu sama lain jadi lebih hebat. Yuk, bikin hari ini berarti!"],
["BISA KARENA BERSAMA","🤝","Saat kita berbagi info, bantu menyelesaikan kendala, dan saling percaya, pekerjaan berat pun terasa lebih ringan."],
["ONE TEAM. BIG DREAMS.","🌟","Tetap penasaran, tetap bergerak, dan jangan takut mencoba cara yang lebih baik. Hari ini kesempatan kita untuk naik level."]
]};
const key=eom?(weekend?"eomWeekend":"eom"):opening?(weekend?"openingWeekend":"opening"):weekend?"weekend":"daily";
const dayNo=Math.floor((d-new Date(d.getFullYear(),0,0))/86400000),pool=pools[key],msg=pool[dayNo%pool.length];
const scenes={
eom:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#ff9a3d"/><stop offset=".48" stop-color="#ff416c"/><stop offset="1" stop-color="#6028a8"/></linearGradient><radialGradient id="r"><stop stop-color="#fff4b0" stop-opacity=".9"/><stop offset="1" stop-color="#ffb13b" stop-opacity="0"/></radialGradient></defs><rect width="900" height="620" fill="url(#g)"/><circle cx="690" cy="160" r="210" fill="url(#r)"/><circle cx="690" cy="160" r="92" fill="#ffe9a3" opacity=".88"/><path d="M0 420 160 300l110 90 145-190 170 205 125-115 190 140v190H0Z" fill="#55265f" opacity=".52"/><path d="M0 490 170 390l160 105 180-155 190 130 120-65 80 45v170H0Z" fill="#251d4c" opacity=".62"/></svg>',
opening:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#00c6d9"/><stop offset=".5" stop-color="#3978ef"/><stop offset="1" stop-color="#7547cb"/></linearGradient></defs><rect width="900" height="620" fill="url(#g)"/><circle cx="680" cy="180" r="120" fill="#fff3b0" opacity=".9"/><path d="M0 410q170-140 330 0t330 0 240 0v210H0Z" fill="#194d8a" opacity=".45"/><path d="M0 485q170-115 330 0t330 0 240 0v135H0Z" fill="#12345f" opacity=".62"/></svg>',
weekend:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#08b9a5"/><stop offset=".5" stop-color="#168bd5"/><stop offset="1" stop-color="#5949bd"/></linearGradient></defs><rect width="900" height="620" fill="url(#g)"/><circle cx="690" cy="160" r="88" fill="#ffeaa2" opacity=".9"/><path d="M0 360q150-85 300 0t300 0 300 0v260H0Z" fill="#087d87" opacity=".5"/><path d="M0 445q160-70 320 0t320 0 260 0v175H0Z" fill="#073e6a" opacity=".58"/></svg>',
daily:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#173c88"/><stop offset=".52" stop-color="#087fbb"/><stop offset="1" stop-color="#513e9d"/></linearGradient><radialGradient id="a"><stop stop-color="#40e0d0" stop-opacity=".7"/><stop offset="1" stop-color="#40e0d0" stop-opacity="0"/></radialGradient></defs><rect width="900" height="620" fill="url(#g)"/><circle cx="700" cy="190" r="270" fill="url(#a)"/><path d="M0 430 160 320l130 90 160-180 150 160 130-105 170 120v215H0Z" fill="#102e68" opacity=".55"/><path d="M0 520 180 410l170 115 180-130 180 100 110-55 80 50v130H0Z" fill="#0a204d" opacity=".62"/></svg>'
};
const sceneKey=key.startsWith("eom")?"eom":key.startsWith("opening")?"opening":key==="weekend"?"weekend":"daily";
const sceneUrl="./assets/mora-popup.jpg?v=1";
const s=document.createElement("style");s.textContent=
'#mora-motivation-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(3,7,22,.76);backdrop-filter:blur(13px);-webkit-backdrop-filter:blur(13px);opacity:0;animation:mmFade .4s ease forwards;cursor:pointer}'+
'#mora-motivation-card{position:relative;isolation:isolate;overflow:hidden;width:min(520px,100%);min-height:510px;padding:28px 30px 25px;border:1px solid rgba(255,255,255,.32);border-radius:30px;background:#13264b url("'+sceneUrl+'") center/cover no-repeat;box-shadow:0 32px 100px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.06);color:#fff;text-align:center;font-family:"Plus Jakarta Sans","Avenir Next",Inter,system-ui,sans-serif;transform:translateY(24px) scale(.94);animation:mmPop .62s cubic-bezier(.16,1,.3,1) .04s forwards}'+
'#mora-motivation-card:before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(6,13,37,.26),rgba(7,15,39,.58) 36%,rgba(5,10,30,.92))}'+
'#mora-motivation-card:after{content:"";position:absolute;inset:10px;border:1px solid rgba(255,255,255,.18);border-radius:22px;pointer-events:none}'+
'#mora-motivation-top{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:62px;position:relative;z-index:1}'+
'#mora-motivation-brand{font-size:11px;font-weight:950;letter-spacing:3px;color:#fff;text-shadow:0 2px 12px #142044}'+
'#mora-motivation-pill{padding:7px 12px;border:1px solid rgba(255,255,255,.42);border-radius:30px;background:rgba(255,255,255,.15);backdrop-filter:blur(8px);font-size:9px;font-weight:900;letter-spacing:1.5px;color:#fff}'+
'#mora-motivation-mark{width:76px;height:76px;margin:0 auto 19px;border:1px solid rgba(255,255,255,.5);border-radius:25px;display:grid;place-items:center;background:linear-gradient(145deg,rgba(255,255,255,.3),rgba(255,255,255,.08));backdrop-filter:blur(12px);font-size:39px;box-shadow:0 12px 36px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.45);animation:mmFloat 3.5s ease-in-out infinite}'+
'#mora-motivation-kicker{font-size:10px;font-weight:950;letter-spacing:3.2px;color:#b8f5ff;margin-bottom:11px;text-shadow:0 2px 8px #06142f}'+
'#mora-motivation-title{font-size:clamp(25px,6vw,36px);font-weight:1000;letter-spacing:-1.1px;line-height:1.08;margin:0 auto 16px;max-width:430px;color:#fff;text-shadow:0 3px 20px rgba(0,0,0,.55)}'+
'#mora-motivation-copy{font-size:14px;font-weight:550;line-height:1.85;color:rgba(255,255,255,.96);margin:0 auto;max-width:395px;text-shadow:0 2px 9px rgba(0,0,0,.55)}'+
'#mora-motivation-sign{margin-top:25px;font-size:10px;font-weight:950;letter-spacing:2.3px;color:#ffe8a6;text-shadow:0 2px 8px rgba(0,0,0,.5)}'+
'#mora-motivation-progress{height:4px;border-radius:9px;background:rgba(255,255,255,.24);overflow:hidden;margin:20px auto 0;max-width:160px}'+
'#mora-motivation-progress span{display:block;height:100%;width:100%;border-radius:9px;background:linear-gradient(90deg,#fff2a8,#ffcf5a,#fff);transform-origin:left;animation:mmProgress 7s linear forwards}'+
'@keyframes mmFade{to{opacity:1}}@keyframes mmPop{to{transform:translateY(0) scale(1)}}@keyframes mmFloat{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-7px) rotate(4deg)}}@keyframes mmProgress{to{transform:scaleX(0)}}'+
'#mora-motivation-overlay.mmClosing{opacity:0;transition:opacity .24s ease}'+
'@media(max-width:480px){#mora-motivation-overlay{padding:14px}#mora-motivation-card{min-height:490px;padding:24px 22px 22px;border-radius:26px}#mora-motivation-top{margin-bottom:55px}#mora-motivation-mark{width:68px;height:68px;font-size:35px}#mora-motivation-title{font-size:clamp(24px,7vw,32px)}#mora-motivation-copy{font-size:13px;line-height:1.8}}'+
'@media(prefers-reduced-motion:reduce){#mora-motivation-overlay,#mora-motivation-card,#mora-motivation-mark,#mora-motivation-progress span{animation:none;opacity:1;transform:none}}';
document.head.appendChild(s);
function close(){const x=document.getElementById("mora-motivation-overlay");if(!x||x.classList.contains("mmClosing"))return;x.classList.add("mmClosing");clearTimeout(window.__moraMotivationTimer);setTimeout(()=>x.remove(),230)}
function show(){if(!document.body||document.getElementById("mora-motivation-overlay"))return;const x=document.createElement("div");x.id="mora-motivation-overlay";x.setAttribute("role","dialog");x.setAttribute("aria-modal","true");x.setAttribute("aria-label","Pesan penyemangat MoraRepublic");x.innerHTML='<section id="mora-motivation-card"><div id="mora-motivation-top"><span id="mora-motivation-brand">MORAREPUBLIC</span><span id="mora-motivation-pill">SURABAYA 2</span></div><div id="mora-motivation-mark"></div><div id="mora-motivation-kicker">A LITTLE BOOST FOR TODAY</div><h2 id="mora-motivation-title"></h2><p id="mora-motivation-copy"></p><div id="mora-motivation-sign">LET’S MAKE IT HAPPEN ✨</div><div id="mora-motivation-progress"><span></span></div></section>';x.querySelector("#mora-motivation-mark").textContent=msg[1];x.querySelector("#mora-motivation-title").textContent=msg[0];x.querySelector("#mora-motivation-copy").textContent=msg[2];x.addEventListener("pointerdown",close,{once:true});document.addEventListener("keydown",function esc(a){if(a.key==="Escape"){close();document.removeEventListener("keydown",esc)}},{once:true});document.body.appendChild(x);window.__moraMotivationTimer=setTimeout(close,7000)}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",show,{once:true});else show();
})();