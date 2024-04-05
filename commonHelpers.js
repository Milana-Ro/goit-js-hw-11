import{S as p}from"./assets/vendor-874053e3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",d="43177088-2530548a60ff9c950be2fcaec",y=`${g}?key=${d}&image_type=photo&orientation=horizontal&safesearch=true`,h=(o="")=>fetch(`${y}&q=${o}`).then(t=>t.json()),a=document.querySelector(".gallery");document.querySelector(".loader");const L=o=>{const t=o.reduce((s,n)=>{const{webformatURL:e,largeImageURL:r,tags:i,likes:c,views:m,comments:u,downloads:f}=n;return s+=`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              loading="lazy"
              src="${e}"
              alt="${i}"
            />
          </a>
          <ul class="description-list">
            <li>Likes <span>${c}</span></li>
            <li>Views <span>${m}</span></li>
            <li>Comments <span>${u}</span></li>
            <li>Downloads <span>${f}</span></li>
          </ul>
        </li>
        `,s},"");a.insertAdjacentHTML("afterbegin",t),$()},b=()=>{a.innerHTML=""},$=()=>{const o={captionsData:"alt",captionDelay:250};let t=new p(".gallery a",o);t.on("show.simplelightbox"),t.refresh()},l=document.querySelector(".form");l.addEventListener("submit",w);function w(o){o.preventDefault(),b();const t=new FormData(l).get("imageName").trim();if(!t)return alert("fill the input");h(t).then(s=>{const{hits:n,total:e}=s;if(!n.length||!e)return console.log("Sorry, there are no images matching your search query. Please try again!");L(n)}).catch(s=>console.error(s.toString())),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
