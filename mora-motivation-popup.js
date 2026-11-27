(function(){
  if(window.__moraMotivationPopupLoaded)return;
  window.__moraMotivationPopupLoaded=true;
  function show(){
    if(!document.body||document.getElementById("mora-motivation-overlay"))return;
    const day=new Date().getDate();
    const poster="./assets/motivasi/poster-"+String(day).padStart(2,"0")+".svg";
    const style=document.createElement("style");
    style.textContent=`
      #mora-motivation-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:14px;background:rgba(3,7,22,.82);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);opacity:0;animation:moraFade .35s ease forwards}
      #mora-motivation-poster{display:block;width:auto;height:auto;max-width:min(440px,94vw);max-height:86vh;aspect-ratio:2/3;object-fit:contain;border-radius:24px;box-shadow:0 28px 90px rgba(0,0,0,.6);transform:translateY(18px) scale(.96);animation:moraPosterIn .55s cubic-bezier(.16,1,.3,1) forwards}
      #mora-motivation-close{position:absolute;top:max(14px,env(safe-area-inset-top));right:16px;width:42px;height:42px;border:1px solid rgba(255,255,255,.45);border-radius:50%;background:rgba(12,18,38,.7);color:#fff;font-size:25px;line-height:1;cursor:pointer}
      #mora-motivation-overlay.moraClosing{opacity:0;transition:opacity .22s ease}
      @keyframes moraFade{to{opacity:1}}@keyframes moraPosterIn{to{transform:translateY(0) scale(1)}}
      @media(prefers-reduced-motion:reduce){#mora-motivation-overlay,#mora-motivation-poster{animation:none;opacity:1;transform:none}}
    `;
    document.head.appendChild(style);
    const overlay=document.createElement("div");
    overlay.id="mora-motivation-overlay";
    overlay.setAttribute("role","dialog");
    overlay.setAttribute("aria-modal","true");
    overlay.setAttribute("aria-label","Poster motivasi harian MoraRepublic Surabaya 2");
    const img=document.createElement("img");
    img.id="mora-motivation-poster";
    img.src=poster;
    img.alt="Poster motivasi hari ke-"+day+" MoraRepublic Surabaya 2";
    img.onerror=function(){img.alt="Poster motivasi hari ini tidak dapat dimuat";};
    const close=document.createElement("button");
    close.id="mora-motivation-close";close.type="button";close.setAttribute("aria-label","Tutup poster");close.textContent="×";
    function dismiss(){if(overlay.classList.contains("moraClosing"))return;overlay.classList.add("moraClosing");clearTimeout(window.__moraMotivationTimer);setTimeout(()=>overlay.remove(),230);}
    close.addEventListener("click",dismiss);
    overlay.addEventListener("click",e=>{if(e.target===overlay)dismiss();});
    document.addEventListener("keydown",function esc(e){if(e.key==="Escape"){dismiss();document.removeEventListener("keydown",esc);}});
    overlay.appendChild(img);overlay.appendChild(close);document.body.appendChild(overlay);
    window.__moraMotivationTimer=setTimeout(dismiss,9000);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",show,{once:true});else show();
})();