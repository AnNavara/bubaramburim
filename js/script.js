"use strict";!function(){if(sessionStorage.getItem("fontsLoaded"))document.querySelector("body").classList.add("fonts-loaded");else{var e=new FontFaceObserver("PT Serif",{weight:"normal"}),t=new FontFaceObserver("PT Serif",{weight:700});Promise.all([t.load(null,12e3),e.load(null,12e3)]).then(function(){document.querySelector("body").classList.add("fonts-loaded"),sessionStorage.setItem("fontsLoaded",!0)},function(){console.log("Error loading font")})}}(),function(){for(var e=document.querySelectorAll(".img-move"),t=0,n=e.length;n>t;++t)e[t].addEventListener("click",function(e){e.preventDefault(),this.classList.toggle("img-move--show")})}(),function(){var e=document.querySelector(".page-nav__control"),t=document.querySelector(".page-nav__drop");e.addEventListener("click",function(n){n.preventDefault(),t.classList.toggle("page-nav__drop--active"),e.classList.toggle("page-nav__control--active")})}(),function(){function e(){l.classList.contains("modal--active")||l.classList.add("modal--active")}function t(){l.classList.contains("modal--active")&&l.classList.remove("modal--active")}function n(){s.classList.contains("zoomed")&&r.classList.contains("zoomed")?(s.classList.remove("zoomed"),r.classList.remove("zoomed")):(s.classList.add("zoomed"),r.classList.add("zoomed"))}function o(t){e(),console.log(t.dataset.heading),console.log(t.dataset.text),void 0===t.dataset.heading?r.querySelector("h3").innerHTML=null:r.querySelector("h3").innerHTML=t.dataset.heading,void 0===t.dataset.text?r.querySelector("p").innerHTML=null:r.querySelector("p").innerHTML=t.dataset.text,s.src=t.href}var l=document.querySelector(".modal"),r=l.querySelector(".modal__header"),i=l.querySelector(".modal__close"),s=l.querySelector("img");i.addEventListener("click",function(e){e.preventDefault(),t()}),window.addEventListener("keydown",function(e){27===e.keyCode&&l.classList.contains("modal--active")&&t()}),s.addEventListener("click",function(e){e.preventDefault(),n()});for(var a=document.querySelectorAll(".img-link"),c=0;c<a.length;c++)a[c].addEventListener("click",function(e){e.preventDefault(),o(this)})}(),function(){function e(e){e.parentNode.firstChild.nextSibling!==e&&e.parentNode.insertBefore(e,e.parentNode.firstChild.nextElementSibling)}if(window.matchMedia("(max-width: 930px)").matches)for(var t=document.querySelector(".promo"),n=t.querySelectorAll(".promo__row"),o=0;o<n.length;o++){var l=n[o].querySelector(".promo__text");e(l)}}(),function(){function e(e,r,i,s){if(null!==e){var a=$(e).find(".slider__content"),c=e.querySelector(".slider__prev"),d=e.querySelector(".slider__next"),u={prevArrow:c,nextArrow:d,infinite:!1,draggable:!1,lazyLoad:"ondemand",fade:!0,cssEase:"linear",speed:200,autoplay:!0,autoplaySpeed:1500+l(500,1500)},f={prevArrow:c,nextArrow:d,infinite:!1,draggable:!1,lazyLoad:"ondemand",adaptiveHeight:!0};"configPromo"===r?a.slick(u):"configFull"===r&&a.slick(f),i&&a.on("init",function(t,n){e.querySelector(".slider__counter").innerHTML="1&nbsp;/&nbsp;"+e.querySelectorAll(".slider__item").length}),s&&t(e),c.classList.contains("slider__prev--last")||c.classList.add("slider__prev--last"),a.on("afterChange",function(t,l,r,s){var a=e.querySelectorAll(".slider__item").length;i&&(e.querySelector(".slider__counter").innerHTML=r+1+"&nbsp;/&nbsp;"+a),0===r?(n(c,"slider__prev--last"),o(d,"slider__next--last")):r+1===a?(n(d,"slider__next--last"),o(c,"slider__prev--last")):(o(d,"slider__next--last"),o(c,"slider__prev--last"))})}}function t(e){null!==e&&e.addEventListener("click",function(t){t.preventDefault(),$(e).find(".slider__content--full").slick("setPosition")})}function n(e,t){e.classList.contains(t)||e.classList.add(t)}function o(e,t){e.classList.contains(t)&&e.classList.remove(t)}function l(e,t){return Math.floor(Math.random()*(t-e))+e}for(var r=document.querySelectorAll(".slider"),i=document.querySelectorAll(".slider--full"),s=0;s<r.length;s++)e(r[s],"configPromo",!0,!1);for(var a=0;a<i.length;a++)e(i[a],"configFull",!1,!0)}();