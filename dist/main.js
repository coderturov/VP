!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){window.addEventListener("DOMContentLoaded",function(){"use strict";let e=n(1),t=n(2),o=n(3),l=n(4),c=n(5);e(),t(),o(),l(),c()})},function(e,t){e.exports=function(){let e=document.querySelectorAll(".popup_calc_btn"),t=document.querySelector(".popup_calc_close"),n=document.querySelector(".popup_calc"),o=document.querySelector(".balcon_icons"),l=o.querySelectorAll("img"),c=document.querySelector(".big_img").querySelectorAll("img"),s=document.querySelector("#height"),i=document.querySelector("#width"),a=document.querySelector(".popup_calc_button"),r=document.querySelector(".popup_calc_profile"),u=document.querySelector(".popup_calc_profile_close"),d=document.querySelector("select.form-control"),p=document.querySelectorAll(".checkbox")[0],f=document.querySelectorAll(".checkbox")[1],y=document.querySelector(".popup_calc_profile_button"),m=document.querySelector(".popup_calc_end"),v=document.querySelector(".popup_calc_end_close"),h={};for(let t=0;t<e.length;t++)g(e[t],n);function g(e,t){e.addEventListener("click",function(){t.style.display="block"})}t.addEventListener("click",function(){n.style.display="none";for(let e in h)delete h[e]}),o.addEventListener("click",function(e){let t=event.target;if("IMG"==t.tagName){e.preventDefault();for(let e=0;e<l.length;e++)if(t==l[e]){for(let e=0;e<c.length;e++)c[e].style.display="none";c[e].style.display="inline-block",h.selectedBalcony=e+1}}}),d.addEventListener("change",function(){d.options[2].selected?(p.checked=!1,p.disabled=!0):p.disabled=!1}),s.addEventListener("input",function(){s.value=s.value.replace(/\D/g,"")}),i.addEventListener("input",function(){i.value=i.value.replace(/\D/g,"")}),a.addEventListener("click",function(e){""==s.value||""==i.value?e.preventDefault():(h.width=i.value,h.height=s.value,null==h.selectedBalcony&&(h.selectedBalcony=1),n.style.display="none",r.style.display="block")}),u.addEventListener("click",function(){r.style.display="none";for(let e in h)delete h[e]}),p.addEventListener("click",function(e){f.checked&&e.preventDefault()}),f.addEventListener("click",function(e){p.checked&&e.preventDefault()}),y.addEventListener("click",function(e){f.checked||p.checked?(h.select=d.options[d.selectedIndex].value,f.checked?h.checkbox="Warm":p.checked&&(h.checkbox="Cold"),r.style.display="none",m.style.display="block"):e.preventDefault()}),v.addEventListener("click",function(){m.style.display="none";for(let e in h)delete h[e]});let b={loading:'<div class="status-ico-div"><class="status-ico" alt="loading"><span class="status-ico-div-span">Идёт загрузка, подождите...</span></div>',success:'<div class="status-ico-div"><class="status-ico" alt="checked"><span class="status-ico-div-span">Заявка успешно оставлена!</span></div>',failure:'<div class="status-ico-div"><class="status-ico" alt="fail"><span class="status-ico-div-span">Произошла ошибка!</span></div>'},L=document.querySelectorAll(".form"),k=document.createElement("div"),_=document.querySelectorAll('input[type="tel"]');for(let e=0;e<_.length;e++)S(_[e]);function S(e){e.addEventListener("input",function(){e.value=e.value.replace(/[^0-9+() ]/gi,"")})}k.classList.add("status"),k.classList.add("status-ico-div");for(let e=0;e<L.length;e++)q(L[e]);function q(e){e.addEventListener("submit",function(t){t.preventDefault(),e.appendChild(k);let n=e.getElementsByTagName("input");e.appendChild(k);let o=new FormData(e);new Promise(function(t,n){let l=new XMLHttpRequest;l.open("POST","../server.php"),l.setRequestHeader("Content-type","application/json; charset=utf-8");let c={};o.forEach(function(e,t){c[t]=e}),e.classList.contains("calcForm")&&(c.height=h.height,c.width=h.width,c.selectedBalcony=h.selectedBalcony,c.checkbox=h.checkbox,c.select=h.select);let s=JSON.stringify(c);l.onreadystatechange=function(){l.readyState<4?t():4===l.readyState&&200==l.status&&(200==l.status&&l.status<300?t():n())},l.send(s)}).then(()=>k.innerHtml=b.loading).then(()=>k.innerHTML=b.success).catch(()=>k.innerHTML=b.failure).then(function(){for(let e=0;e<n.length;e++)n[e].value=""})})}}},function(e,t){e.exports=function(){let e=document.querySelectorAll(".worksImg"),t=document.querySelector(".img-overlay"),n=document.querySelectorAll(".link");for(let t=0;t<e.length;t++)o(e[t]);function o(o){o.addEventListener("click",function(l){l.preventDefault();let c=o.getAttribute("src");t.style.display="block",document.body.style.overflow="hidden";let s,i=document.createElement("img");for(let t=0;t<e.length;t++)s=t+1,c.slice(14,15)==s&&(c=n[t].getAttribute("href"));i.setAttribute("src",c),i.classList.add("img-overlay_img"),t.appendChild(i),t.addEventListener("click",function(){t.removeChild(i),t.style.display="none",document.body.style.overflow=""})})}}},function(e,t){e.exports=function(){let e=document.querySelector(".popup_engineer"),t=document.querySelector(".header_btn"),n=document.querySelector(".phonesPopup");t.addEventListener("click",function(){e.style.display="block",document.body.style.overflow="hidden"}),e.addEventListener("click",function(t){(t.target.parentNode.classList.contains("popup_close")||t.target.classList.contains("popup_engineer"))&&(e.style.display="none",document.body.style.overflow="")}),document.addEventListener("click",function(e){e.target.parentNode.classList.contains("popup_close")||e.target.classList.contains("phonesPopup")?(e.preventDefault(),n.style.display="none"):e.target.classList.contains("phone_link")&&(e.preventDefault(),n.style.display="block")}),setTimeout(function(){n.style.display="block"},6e4)}},function(e,t){e.exports=function(){let e=document.querySelector(".glazing").querySelectorAll(".glazing_block"),t=document.querySelector(".info-header"),n=document.querySelectorAll(".tab-content"),o=document.querySelectorAll(".tab-link");function l(e){for(let t=e;t<n.length;t++)n[t].classList.remove("show"),n[t].classList.add("hide"),o[t].classList.remove("active")}l(1),t.addEventListener("click",function(t){let c=t.target;if(c&&(c.classList.contains("glazing_block")||c.parentNode.classList.contains("glazing_block")))for(let t=0;t<e.length;t++)if(c==e[t]||c.parentNode==e[t]){l(0),n[s=t].classList.contains("hide")&&(n[s].classList.remove("hide"),n[s].classList.add("show"),o[s].classList.add("active"));break}var s});let c=document.querySelectorAll(".tab_head_info"),s=document.querySelector(".tab_head"),i=document.querySelectorAll(".tab_material"),a=document.querySelectorAll(".style_selector");function r(e){for(let t=e;t<i.length;t++)i[t].classList.remove("show"),i[t].classList.add("hide"),a[t].classList.remove("after_click")}r(1),s.addEventListener("click",function(e){let t=e.target;if(t&&t.classList.contains("tab_head_info"))for(let e=0;e<c.length;e++)if(t==c[e]){r(0),i[n=e].classList.contains("hide")&&(i[n].classList.remove("hide"),i[n].classList.add("show"),a[n].classList.add("after_click"));break}var n})}},function(e,t){e.exports=function(){let e=60*(new Date).getTimezoneOffset()*1e3;!function(t,n){let o=document.getElementById("days"),l=document.getElementById("hours"),c=document.getElementById("minutes"),s=document.getElementById("seconds"),i=setInterval(function(){let t=function(t){let n=Date.parse(t)-Date.parse(new Date)+e,o=Math.floor(n/1e3%60),l=Math.floor(n/1e3/60%60),c=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:c,minutes:l,seconds:o}}(n);o.textContent=t.days,l.textContent=t.hours,c.textContent=t.minutes,s.textContent=t.seconds,t.days<10&&(o.textContent=`0${t.days}`),t.hours<10&&(l.textContent=`0${t.hours}`),t.minutes<10&&(c.textContent=`0${t.minutes}`),t.seconds<10&&(s.textContent=`0${t.seconds}`),t.total<=0&&(clearInterval(i),o.textContent="00",l.textContent="00",c.textContent="00",s.textContent="00")},1e3)}(0,"2018-12-31")}}]);