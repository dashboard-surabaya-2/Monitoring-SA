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
const themes={eom:"linear-gradient(135deg,#ff8a35,#ff426d 55%,#8d4bff)",eomWeekend:"linear-gradient(135deg,#ffb347,#ff5f6d 55%,#8d5cff)",opening:"linear-gradient(135deg,#00c6ff,#5271ff 55%,#a855f7)",openingWeekend:"linear-gradient(135deg,#36d1a3,#00a8cc 55%,#7868ff)",weekend:"linear-gradient(135deg,#ffb347,#ff6b8a 55%,#7868ff)",daily:"linear-gradient(135deg,#00c6ff,#4776e6 55%,#9b59b6)"};
const s=document.createElement("style");s.textContent=`
#mora-motivation-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:radial-gradient(circle at 15% 15%,rgba(61,130,255,.24),transparent 38%),rgba(5,9,24,.78);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);opacity:0;animation:mmFade .35s ease forwards;cursor:pointer}
#mora-motivation-card{--mora-accent:${themes[key]};position:relative;isolation:isolate;overflow:hidden;width:min(490px,100%);padding:34px 30px 27px;border:1px solid rgba(255,255,255,.16);border-radius:28px;background:linear-gradient(145deg,#182747 0%,#111a32 58%,#101326 100%);box-shadow:0 30px 100px rgba(0,0,0,.55),0 0 55px rgba(63,123,255,.12);color:#fff;text-align:center;font-family:'Plus Jakarta Sans',Inter,system-ui,sans-serif;transform:translateY(18px) scale(.96);animation:mmPop .55s cubic-bezier(.16,1,.3,1) .04s forwards}
#mora-motivation-card:before{content:"";position:absolute;z-index:-1;width:290px;height:290px;right:-125px;top:-165px;border-radius:50%;background:var(--mora-accent);filter:blur(3px);opacity:.22}
#mora-motivation-card:after{content:"";position:absolute;z-index:-1;width:220px;height:220px;left:-130px;bottom:-150px;border-radius:50%;background:var(--mora-accent);filter:blur(8px);opacity:.16}
#mora-motivation-top{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:20px}
#mora-motivation-brand{font-size:9px;font-weight:800;letter-spacing:2.1px;color:#b9c9e8}
#mora-motivation-pill{padding:6px 10px;border:1px solid rgba(255,255,255,.14);border-radius:30px;background:rgba(255,255,255,.07);font-size:9px;font-weight:800;letter-spacing:1.1px;color:#fff}
#mora-motivation-mark{width:70px;height:70px;margin:0 auto 18px;border-radius:23px;display:grid;place-items:center;background:var(--mora-accent);font-size:34px;box-shadow:0 12px 34px rgba(0,0,0,.25);transform:rotate(-5deg);animation:mmFloat 3s ease-in-out infinite}
#mora-motivation-kicker{font-size:10px;font-weight:900;letter-spacing:2.8px;color:#9bcfff;margin-bottom:9px}
#mora-motivation-title{font-size:clamp(21px,5vw,29px);font-weight:900;letter-spacing:-.7px;line-height:1.16;margin:0 0 13px;background:var(--mora-accent);background-clip:text;-webkit-background-clip:text;color:transparent}
#mora-motivation-copy{font-size:14px;line-height:1.8;color:rgba(239,244,255,.88);margin:0 auto;max-width:390px}
#mora-motivation-sign{margin-top:22px;font-size:10px;font-weight:800;letter-spacing:1.7px;color:rgba(190,209,241,.72)}
#mora-motivation-progress{height:3px;border-radius:9px;background:rgba(255,255,255,.13);overflow:hidden;margin:21px auto 0;max-width:150px}
#mora-motivation-progress span{display:block;height:100%;width:100%;background:var(--mora-accent);transform-origin:left;animation:mmProgress 7s linear forwards}
@keyframes mmFade{to{opacity:1}}@keyframes mmPop{to{transform:translateY(0) scale(1)}}@keyframes mmFloat{0%,100%{transform:rotate(-5deg) translateY(0)}50%{transform:rotate(3deg) translateY(-5px)}}@keyframes mmProgress{to{transform:scaleX(0)}}
#mora-motivation-overlay.mmClosing{opacity:0;transition:opacity .22s ease}
@media(max-width:480px){#mora-motivation-card{padding:29px 22px 23px;border-radius:25px}#mora-motivation-copy{font-size:13px;line-height:1.75}#mora-motivation-mark{width:62px;height:62px;border-radius:20px}}
@media(prefers-reduced-motion:reduce){#mora-motivation-overlay,#mora-motivation-card,#mora-motivation-mark,#mora-motivation-progress span{animation:none;opacity:1;transform:none}}
`;document.head.appendChild(s);
function close(){const x=document.getElementById("mora-motivation-overlay");if(!x||x.classList.contains("mmClosing"))return;x.classList.add("mmClosing");clearTimeout(window.__moraMotivationTimer);setTimeout(()=>x.remove(),230)}
function show(){if(!document.body||document.getElementById("mora-motivation-overlay"))return;const x=document.createElement("div");x.id="mora-motivation-overlay";x.setAttribute("role","dialog");x.setAttribute("aria-modal","true");x.setAttribute("aria-label","Pesan penyemangat MoraRepublic");x.innerHTML='<section id="mora-motivation-card"><div id="mora-motivation-top"><span id="mora-motivation-brand">MORAREPUBLIC</span><span id="mora-motivation-pill">SURABAYA 2</span></div><div id="mora-motivation-mark"></div><div id="mora-motivation-kicker">A LITTLE BOOST FOR TODAY</div><h2 id="mora-motivation-title"></h2><p id="mora-motivation-copy"></p><div id="mora-motivation-sign">LET’S MAKE IT HAPPEN ✨</div><div id="mora-motivation-progress"><span></span></div></section>';x.querySelector("#mora-motivation-mark").textContent=msg[1];x.querySelector("#mora-motivation-title").textContent=msg[0];x.querySelector("#mora-motivation-copy").textContent=msg[2];x.addEventListener("pointerdown",close,{once:true});document.addEventListener("keydown",function esc(a){if(a.key==="Escape"){close();document.removeEventListener("keydown",esc)}},{once:true});document.body.appendChild(x);window.__moraMotivationTimer=setTimeout(close,7000)}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",show,{once:true});else show();
})();