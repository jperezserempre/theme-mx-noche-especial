(()=>{"use strict";var e,t={935:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.videoRender=void 0;var o=r(598);Object.defineProperty(t,"videoRender",{enumerable:!0,get:function(){return o.videoRender}})},598:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.videoRender=void 0;t.videoRender=function(e){var t,r=e.event,o=e.renderIn,n=e.dataId;if(r.target instanceof HTMLElement){var i=null===(t=r.target)||void 0===t?void 0:t.closest("[".concat(n,"]"));if(!i)return;r.preventDefault();var a=i.getAttribute(n),l=document.createElement("div");l.classList.add("abi-videoRender","w-screen","aspect-[23/12]","max-w-[1062px]"),l.innerHTML='\n                <iframe\n                    load="lazy"\n                    class="w-full h-full"\n                    style="aspect-ratio: 125 / 50;" width="100%" height="100%"\n                    src="https://www.youtube-nocookie.com/embed/'.concat(a,'?autoplay=1"\n                    title="YouTube video player"\n                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n                    allowfullscreen>\n                </iframe>');var c=document.querySelector(o);null==c||c.replaceWith(l)}}},375:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.pageExist=void 0;var o=r(923);Object.defineProperty(t,"pageExist",{enumerable:!0,get:function(){return o.pageExist}})},923:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.pageExist=void 0;t.pageExist=function(e){var t=e.actualPage,r=e.execute;document.querySelector(t)&&document.addEventListener("DOMContentLoaded",(function(){r()}))}},316:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(935),t),n(r(375),t),n(r(664),t),n(r(181),t),n(r(226),t)},664:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(345),t),n(r(200),t)},345:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},200:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.pages=void 0,t.pages={home:".abi-home"}},866:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=r(226);document.addEventListener("DOMContentLoaded",(function(){(0,o.toggle)({handler:".abi-sticky--close",container:".abi-sticky",toggleClass:"hidden"})}))},672:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=r(935),n=r(375),i=r(664),a=r(226);(0,n.pageExist)({actualPage:i.pages.home,execute:function(){(0,a.toggle)({handler:".abi-videoBanner__preview",container:"#modalYoutube",toggleClass:"abi-modal--active",lockBodyScroll:!0});var e=document.querySelectorAll(".abi-videoBanner [data-video-id]"),t=e.length,r=document.querySelector(".abi-modal-video-banner__preview");if(t)for(var n=0;n<t;n++)e[n].addEventListener("click",(function(e){(0,o.videoRender)({event:e,renderIn:".abi-modal-video-banner__preview",dataId:"data-video-id"})}));(0,a.toggle)({handler:".abi-modal__btn-close",container:"#modalYoutube",toggleClass:"abi-modal--active",lockBodyScroll:!0});var i=document.querySelector(".abi-modal .abi-modal__btn-close");null==i||i.addEventListener("click",(function(){var e=document.querySelector(".abi-modal .abi-videoRender");setTimeout((function(){r&&(null==e||e.replaceWith(r))}),700)}))}})},181:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(866),t),n(r(672),t)},226:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toggle=void 0;var o=r(397);Object.defineProperty(t,"toggle",{enumerable:!0,get:function(){return o.toggle}})},397:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toggle=void 0;t.toggle=function(e){var t=e.handler,r=e.container,o=e.toggleClass,n=e.lockBodyScroll,i=void 0!==n&&n,a=document.querySelectorAll(t),l=document.querySelectorAll(r);a&&l&&a.forEach((function(e,t){e.addEventListener("click",(function(){e.classList.toggle(o),l[t].classList.toggle(o),i&&document.body.classList.toggle("no-scroll")}))}))}},670:()=>{}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,i]=e[u],l=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={24:0,870:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[a,l,c]=r,d=0;if(a.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var u=c(o)}for(t&&t(r);d<a.length;d++)i=a[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},r=self.webpackChunkfrontend_framework=self.webpackChunkfrontend_framework||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.O(void 0,[870],(()=>o(316)));var n=o.O(void 0,[870],(()=>o(670)));n=o.O(n)})();