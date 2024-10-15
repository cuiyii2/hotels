import{d as Z,r as q,o as de,c as ae,a as F,b as V,w as pe,e as ce,q as ve,u as ue}from"./index-Ai0SrvP8.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";let O={};function z(e={}){O={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...e}}function l(e){return e?O[e]:O}function I(e,t,o,i){return(e/=i/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t}function J(e){const t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap(o=>{const i=o.matches(t),n=Array.from(o.querySelectorAll(t));return[...i?[o]:[],...n]}).filter(o=>getComputedStyle(o).pointerEvents!=="none"&&fe(o))}function Q(e){if(!e||we(e))return;const t=l("smoothScroll");e.scrollIntoView({behavior:!t||he(e)?"auto":"smooth",inline:"center",block:"center"})}function he(e){if(!e||!e.parentElement)return;const t=e.parentElement;return t.scrollHeight>t.clientHeight}function we(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function fe(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}let W={};function b(e,t){W[e]=t}function d(e){return e?W[e]:W}function j(){W={}}let R={};function N(e,t){R[e]=t}function B(e){var t;(t=R[e])==null||t.call(R)}function ge(){R={}}function ye(e,t,o,i){let n=d("__activeStagePosition");const a=n||o.getBoundingClientRect(),u=i.getBoundingClientRect(),h=I(e,a.x,u.x-a.x,t),s=I(e,a.y,u.y-a.y,t),m=I(e,a.width,u.width-a.width,t),r=I(e,a.height,u.height-a.height,t);n={x:h,y:s,width:m,height:r},ee(n),b("__activeStagePosition",n)}function U(e){if(!e)return;const t=e.getBoundingClientRect(),o={x:t.x,y:t.y,width:t.width,height:t.height};b("__activeStagePosition",o),ee(o)}function xe(){const e=d("__activeStagePosition"),t=d("__overlaySvg");if(!e)return;if(!t){console.warn("No stage svg found.");return}const o=window.innerWidth,i=window.innerHeight;t.setAttribute("viewBox",`0 0 ${o} ${i}`)}function be(e){const t=Ce(e);document.body.appendChild(t),oe(t,o=>{o.target.tagName==="path"&&B("overlayClick")}),b("__overlaySvg",t)}function ee(e){const t=d("__overlaySvg");if(!t){be(e);return}const o=t.firstElementChild;if((o==null?void 0:o.tagName)!=="path")throw new Error("no path element found in stage svg");o.setAttribute("d",te(e))}function Ce(e){const t=window.innerWidth,o=window.innerHeight,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.classList.add("driver-overlay","driver-overlay-animated"),i.setAttribute("viewBox",`0 0 ${t} ${o}`),i.setAttribute("xmlSpace","preserve"),i.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),i.setAttribute("version","1.1"),i.setAttribute("preserveAspectRatio","xMinYMin slice"),i.style.fillRule="evenodd",i.style.clipRule="evenodd",i.style.strokeLinejoin="round",i.style.strokeMiterlimit="2",i.style.zIndex="10000",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%";const n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",te(e)),n.style.fill=l("overlayColor")||"rgb(0,0,0)",n.style.opacity=`${l("overlayOpacity")}`,n.style.pointerEvents="auto",n.style.cursor="auto",i.appendChild(n),i}function te(e){const t=window.innerWidth,o=window.innerHeight,i=l("stagePadding")||0,n=l("stageRadius")||0,a=e.width+i*2,u=e.height+i*2,h=Math.min(n,a/2,u/2),s=Math.floor(Math.max(h,0)),m=e.x-i+s,r=e.y-i,p=a-s*2,c=u-s*2;return`M${t},0L0,0L0,${o}L${t},${o}L${t},0Z
    M${m},${r} h${p} a${s},${s} 0 0 1 ${s},${s} v${c} a${s},${s} 0 0 1 -${s},${s} h-${p} a${s},${s} 0 0 1 -${s},-${s} v-${c} a${s},${s} 0 0 1 ${s},-${s} z`}function _e(){const e=d("__overlaySvg");e&&e.remove()}function Ee(){const e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}function K(e){const{element:t}=e;let o=typeof t=="string"?document.querySelector(t):t;o||(o=Ee()),Pe(o,e)}function Le(){const e=d("__activeElement"),t=d("__activeStep");e&&(U(e),xe(),re(e,t))}function Pe(e,t){const o=Date.now(),i=d("__activeStep"),n=d("__activeElement")||e,a=!n||n===e,u=e.id==="driver-dummy-element",h=n.id==="driver-dummy-element",s=l("animate"),m=t.onHighlightStarted||l("onHighlightStarted"),r=(t==null?void 0:t.onHighlighted)||l("onHighlighted"),p=(i==null?void 0:i.onDeselected)||l("onDeselected"),c=l(),w=d();!a&&p&&p(h?void 0:n,i,{config:c,state:w}),m&&m(u?void 0:e,t,{config:c,state:w});const g=!a&&s;let f=!1;Ae(),b("previousStep",i),b("previousElement",n),b("activeStep",t),b("activeElement",e);const v=()=>{if(d("__transitionCallback")!==v)return;const y=Date.now()-o,E=400-y<=400/2;t.popover&&E&&!f&&g&&(G(e,t),f=!0),l("animate")&&y<400?ye(y,400,n,e):(U(e),r&&r(u?void 0:e,t,{config:l(),state:d()}),b("__transitionCallback",void 0),b("__previousStep",i),b("__previousElement",n),b("__activeStep",t),b("__activeElement",e)),window.requestAnimationFrame(v)};b("__transitionCallback",v),window.requestAnimationFrame(v),Q(e),!g&&t.popover&&G(e,t),n.classList.remove("driver-active-element","driver-no-interaction"),n.removeAttribute("aria-haspopup"),n.removeAttribute("aria-expanded"),n.removeAttribute("aria-controls"),l("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}function ke(){var e;(e=document.getElementById("driver-dummy-element"))==null||e.remove(),document.querySelectorAll(".driver-active-element").forEach(t=>{t.classList.remove("driver-active-element","driver-no-interaction"),t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-controls")})}function S(){const e=d("__resizeTimeout");e&&window.cancelAnimationFrame(e),b("__resizeTimeout",window.requestAnimationFrame(Le))}function Be(e){var t;if(!d("isInitialized")||!(e.key==="Tab"||e.keyCode===9))return;const o=d("__activeElement"),i=(t=d("popover"))==null?void 0:t.wrapper,n=J([...i?[i]:[],...o?[o]:[]]),a=n[0],u=n[n.length-1];if(e.preventDefault(),e.shiftKey){const h=n[n.indexOf(document.activeElement)-1]||u;h==null||h.focus()}else{const h=n[n.indexOf(document.activeElement)+1]||a;h==null||h.focus()}}function ne(e){var t;((t=l("allowKeyboardControl"))==null||t)&&(e.key==="Escape"?B("escapePress"):e.key==="ArrowRight"?B("arrowRightPress"):e.key==="ArrowLeft"&&B("arrowLeftPress"))}function oe(e,t,o){const i=(n,a)=>{const u=n.target;e.contains(u)&&((!o||o(u))&&(n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation()),a==null||a(n))};document.addEventListener("pointerdown",i,!0),document.addEventListener("mousedown",i,!0),document.addEventListener("pointerup",i,!0),document.addEventListener("mouseup",i,!0),document.addEventListener("click",n=>{i(n,t)},!0)}function Se(){window.addEventListener("keyup",ne,!1),window.addEventListener("keydown",Be,!1),window.addEventListener("resize",S),window.addEventListener("scroll",S)}function $e(){window.removeEventListener("keyup",ne),window.removeEventListener("resize",S),window.removeEventListener("scroll",S)}function Ae(){const e=d("popover");e&&(e.wrapper.style.display="none")}function G(e,t){var o,i;let n=d("popover");n&&document.body.removeChild(n.wrapper),n=Me(),document.body.appendChild(n.wrapper);const{title:a,description:u,showButtons:h,disableButtons:s,showProgress:m,nextBtnText:r=l("nextBtnText")||"Next &rarr;",prevBtnText:p=l("prevBtnText")||"&larr; Previous",progressText:c=l("progressText")||"{current} of {total}"}=t.popover||{};n.nextButton.innerHTML=r,n.previousButton.innerHTML=p,n.progress.innerHTML=c,a?(n.title.innerHTML=a,n.title.style.display="block"):n.title.style.display="none",u?(n.description.innerHTML=u,n.description.style.display="block"):n.description.style.display="none";const w=h||l("showButtons"),g=m||l("showProgress")||!1,f=(w==null?void 0:w.includes("next"))||(w==null?void 0:w.includes("previous"))||g;n.closeButton.style.display=w.includes("close")?"block":"none",f?(n.footer.style.display="flex",n.progress.style.display=g?"block":"none",n.nextButton.style.display=w.includes("next")?"block":"none",n.previousButton.style.display=w.includes("previous")?"block":"none"):n.footer.style.display="none";const v=s||l("disableButtons")||[];v!=null&&v.includes("next")&&(n.nextButton.disabled=!0,n.nextButton.classList.add("driver-popover-btn-disabled")),v!=null&&v.includes("previous")&&(n.previousButton.disabled=!0,n.previousButton.classList.add("driver-popover-btn-disabled")),v!=null&&v.includes("close")&&(n.closeButton.disabled=!0,n.closeButton.classList.add("driver-popover-btn-disabled"));const y=n.wrapper;y.style.display="block",y.style.left="",y.style.top="",y.style.bottom="",y.style.right="",y.id="driver-popover-content",y.setAttribute("role","dialog"),y.setAttribute("aria-labelledby","driver-popover-title"),y.setAttribute("aria-describedby","driver-popover-description");const E=n.arrow;E.className="driver-popover-arrow";const L=((o=t.popover)==null?void 0:o.popoverClass)||l("popoverClass")||"";y.className=`driver-popover ${L}`.trim(),oe(n.wrapper,P=>{var $,A,H;const k=P.target,M=(($=t.popover)==null?void 0:$.onNextClick)||l("onNextClick"),T=((A=t.popover)==null?void 0:A.onPrevClick)||l("onPrevClick"),D=((H=t.popover)==null?void 0:H.onCloseClick)||l("onCloseClick");if(k.classList.contains("driver-popover-next-btn"))return M?M(e,t,{config:l(),state:d()}):B("nextClick");if(k.classList.contains("driver-popover-prev-btn"))return T?T(e,t,{config:l(),state:d()}):B("prevClick");if(k.classList.contains("driver-popover-close-btn"))return D?D(e,t,{config:l(),state:d()}):B("closeClick")},P=>!(n!=null&&n.description.contains(P))&&!(n!=null&&n.title.contains(P))&&typeof P.className=="string"&&P.className.includes("driver-popover")),b("popover",n);const x=((i=t.popover)==null?void 0:i.onPopoverRender)||l("onPopoverRender");x&&x(n,{config:l(),state:d()}),re(e,t),Q(y);const C=e.classList.contains("driver-dummy-element"),_=J([y,...C?[]:[e]]);_.length>0&&_[0].focus()}function ie(){const e=d("popover");if(!(e!=null&&e.wrapper))return;const t=e.wrapper.getBoundingClientRect(),o=l("stagePadding")||0,i=l("popoverOffset")||0;return{width:t.width+o+i,height:t.height+o+i,realWidth:t.width,realHeight:t.height}}function X(e,t){const{elementDimensions:o,popoverDimensions:i,popoverPadding:n,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(o.top-n,window.innerHeight-i.realHeight-a.width),a.width):e==="end"?Math.max(Math.min(o.top-(i==null?void 0:i.realHeight)+o.height+n,window.innerHeight-(i==null?void 0:i.realHeight)-a.width),a.width):e==="center"?Math.max(Math.min(o.top+o.height/2-(i==null?void 0:i.realHeight)/2,window.innerHeight-(i==null?void 0:i.realHeight)-a.width),a.width):0}function Y(e,t){const{elementDimensions:o,popoverDimensions:i,popoverPadding:n,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(o.left-n,window.innerWidth-i.realWidth-a.width),a.width):e==="end"?Math.max(Math.min(o.left-(i==null?void 0:i.realWidth)+o.width+n,window.innerWidth-(i==null?void 0:i.realWidth)-a.width),a.width):e==="center"?Math.max(Math.min(o.left+o.width/2-(i==null?void 0:i.realWidth)/2,window.innerWidth-(i==null?void 0:i.realWidth)-a.width),a.width):0}function re(e,t){const o=d("popover");if(!o)return;const{align:i="start",side:n="left"}=(t==null?void 0:t.popover)||{},a=i,u=e.id==="driver-dummy-element"?"over":n,h=l("stagePadding")||0,s=ie(),m=o.arrow.getBoundingClientRect(),r=e.getBoundingClientRect(),p=r.top-s.height;let c=p>=0;const w=window.innerHeight-(r.bottom+s.height);let g=w>=0;const f=r.left-s.width;let v=f>=0;const y=window.innerWidth-(r.right+s.width);let E=y>=0;const L=!c&&!g&&!v&&!E;let x=u;if(u==="top"&&c?E=v=g=!1:u==="bottom"&&g?E=v=c=!1:u==="left"&&v?E=c=g=!1:u==="right"&&E&&(v=c=g=!1),u==="over"){const C=window.innerWidth/2-s.realWidth/2,_=window.innerHeight/2-s.realHeight/2;o.wrapper.style.left=`${C}px`,o.wrapper.style.right="auto",o.wrapper.style.top=`${_}px`,o.wrapper.style.bottom="auto"}else if(L){const C=window.innerWidth/2-(s==null?void 0:s.realWidth)/2,_=10;o.wrapper.style.left=`${C}px`,o.wrapper.style.right="auto",o.wrapper.style.bottom=`${_}px`,o.wrapper.style.top="auto"}else if(v){const C=Math.min(f,window.innerWidth-(s==null?void 0:s.realWidth)-m.width),_=X(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:h,popoverArrowDimensions:m});o.wrapper.style.left=`${C}px`,o.wrapper.style.top=`${_}px`,o.wrapper.style.bottom="auto",o.wrapper.style.right="auto",x="left"}else if(E){const C=Math.min(y,window.innerWidth-(s==null?void 0:s.realWidth)-m.width),_=X(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:h,popoverArrowDimensions:m});o.wrapper.style.right=`${C}px`,o.wrapper.style.top=`${_}px`,o.wrapper.style.bottom="auto",o.wrapper.style.left="auto",x="right"}else if(c){const C=Math.min(p,window.innerHeight-s.realHeight-m.width);let _=Y(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:h,popoverArrowDimensions:m});o.wrapper.style.top=`${C}px`,o.wrapper.style.left=`${_}px`,o.wrapper.style.bottom="auto",o.wrapper.style.right="auto",x="top"}else if(g){const C=Math.min(w,window.innerHeight-(s==null?void 0:s.realHeight)-m.width);let _=Y(a,{elementDimensions:r,popoverDimensions:s,popoverPadding:h,popoverArrowDimensions:m});o.wrapper.style.left=`${_}px`,o.wrapper.style.bottom=`${C}px`,o.wrapper.style.top="auto",o.wrapper.style.right="auto",x="bottom"}L?o.arrow.classList.add("driver-popover-arrow-none"):He(a,x,e)}function He(e,t,o){const i=d("popover");if(!i)return;const n=o.getBoundingClientRect(),a=ie(),u=i.arrow,h=a.width,s=window.innerWidth,m=n.width,r=n.left,p=a.height,c=window.innerHeight,w=n.top,g=n.height;u.className="driver-popover-arrow";let f=t,v=e;t==="top"?(r+m<=0?(f="right",v="end"):r+m-h<=0&&(f="top",v="start"),r>=s?(f="left",v="end"):r+h>=s&&(f="top",v="end")):t==="bottom"?(r+m<=0?(f="right",v="start"):r+m-h<=0&&(f="bottom",v="start"),r>=s?(f="left",v="start"):r+h>=s&&(f="bottom",v="end")):t==="left"?(w+g<=0?(f="bottom",v="end"):w+g-p<=0&&(f="left",v="start"),w>=c?(f="top",v="end"):w+p>=c&&(f="left",v="end")):t==="right"&&(w+g<=0?(f="bottom",v="start"):w+g-p<=0&&(f="right",v="start"),w>=c?(f="top",v="start"):w+p>=c&&(f="right",v="end")),f?(u.classList.add(`driver-popover-arrow-side-${f}`),u.classList.add(`driver-popover-arrow-align-${v}`)):u.classList.add("driver-popover-arrow-none")}function Me(){const e=document.createElement("div");e.classList.add("driver-popover");const t=document.createElement("div");t.classList.add("driver-popover-arrow");const o=document.createElement("header");o.id="driver-popover-title",o.classList.add("driver-popover-title"),o.style.display="none",o.innerText="Popover Title";const i=document.createElement("div");i.id="driver-popover-description",i.classList.add("driver-popover-description"),i.style.display="none",i.innerText="Popover description is here";const n=document.createElement("button");n.type="button",n.classList.add("driver-popover-close-btn"),n.setAttribute("aria-label","Close"),n.innerHTML="&times;";const a=document.createElement("footer");a.classList.add("driver-popover-footer");const u=document.createElement("span");u.classList.add("driver-popover-progress-text"),u.innerText="";const h=document.createElement("span");h.classList.add("driver-popover-navigation-btns");const s=document.createElement("button");s.type="button",s.classList.add("driver-popover-prev-btn"),s.innerHTML="&larr; Previous";const m=document.createElement("button");return m.type="button",m.classList.add("driver-popover-next-btn"),m.innerHTML="Next &rarr;",h.appendChild(s),h.appendChild(m),a.appendChild(u),a.appendChild(h),e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(i),e.appendChild(a),{wrapper:e,arrow:t,title:o,description:i,footer:a,previousButton:s,nextButton:m,closeButton:n,footerButtons:h,progress:u}}function Te(){var e;const t=d("popover");t&&((e=t.wrapper.parentElement)==null||e.removeChild(t.wrapper))}function De(e={}){z(e);function t(){l("allowClose")&&m()}function o(){const r=d("activeIndex"),p=l("steps")||[];if(typeof r>"u")return;const c=r+1;p[c]?s(c):m()}function i(){const r=d("activeIndex"),p=l("steps")||[];if(typeof r>"u")return;const c=r-1;p[c]?s(c):m()}function n(r){(l("steps")||[])[r]?s(r):m()}function a(){var r;if(d("__transitionCallback"))return;const p=d("activeIndex"),c=d("__activeStep"),w=d("__activeElement");if(typeof p>"u"||typeof c>"u"||typeof d("activeIndex")>"u")return;const g=((r=c.popover)==null?void 0:r.onPrevClick)||l("onPrevClick");if(g)return g(w,c,{config:l(),state:d()});i()}function u(){var r;if(d("__transitionCallback"))return;const p=d("activeIndex"),c=d("__activeStep"),w=d("__activeElement");if(typeof p>"u"||typeof c>"u")return;const g=((r=c.popover)==null?void 0:r.onNextClick)||l("onNextClick");if(g)return g(w,c,{config:l(),state:d()});o()}function h(){d("isInitialized")||(b("isInitialized",!0),document.body.classList.add("driver-active",l("animate")?"driver-fade":"driver-simple"),Se(),N("overlayClick",t),N("escapePress",t),N("arrowLeftPress",a),N("arrowRightPress",u))}function s(r=0){var p,c,w,g,f,v,y,E;const L=l("steps");if(!L){console.error("No steps to drive through"),m();return}if(!L[r]){m();return}b("__activeOnDestroyed",document.activeElement),b("activeIndex",r);const x=L[r],C=L[r+1],_=L[r-1],P=((p=x.popover)==null?void 0:p.doneBtnText)||l("doneBtnText")||"Done",$=l("allowClose"),A=typeof((c=x.popover)==null?void 0:c.showProgress)<"u"?(w=x.popover)==null?void 0:w.showProgress:l("showProgress"),H=(((g=x.popover)==null?void 0:g.progressText)||l("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${r+1}`).replace("{{total}}",`${L.length}`),k=((f=x.popover)==null?void 0:f.showButtons)||l("showButtons"),M=["next","previous",...$?["close"]:[]].filter(le=>!(k!=null&&k.length)||k.includes(le)),T=((v=x.popover)==null?void 0:v.onNextClick)||l("onNextClick"),D=((y=x.popover)==null?void 0:y.onPrevClick)||l("onPrevClick"),se=((E=x.popover)==null?void 0:E.onCloseClick)||l("onCloseClick");K({...x,popover:{showButtons:M,nextBtnText:C?void 0:P,disableButtons:[..._?[]:["previous"]],showProgress:A,progressText:H,onNextClick:T||(()=>{C?s(r+1):m()}),onPrevClick:D||(()=>{s(r-1)}),onCloseClick:se||(()=>{m()}),...(x==null?void 0:x.popover)||{}}})}function m(r=!0){const p=d("__activeElement"),c=d("__activeStep"),w=d("__activeOnDestroyed"),g=l("onDestroyStarted");if(r&&g){const y=!p||(p==null?void 0:p.id)==="driver-dummy-element";g(y?void 0:p,c,{config:l(),state:d()});return}const f=(c==null?void 0:c.onDeselected)||l("onDeselected"),v=l("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),$e(),Te(),ke(),_e(),ge(),j(),p&&c){const y=p.id==="driver-dummy-element";f&&f(y?void 0:p,c,{config:l(),state:d()}),v&&v(y?void 0:p,c,{config:l(),state:d()})}w&&w.focus()}return{isActive:()=>d("isInitialized")||!1,refresh:S,drive:(r=0)=>{h(),s(r)},setConfig:z,setSteps:r=>{j(),z({...l(),steps:r})},getConfig:l,getState:d,getActiveIndex:()=>d("activeIndex"),isFirstStep:()=>d("activeIndex")===0,isLastStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&p===r.length-1},getActiveStep:()=>d("activeStep"),getActiveElement:()=>d("activeElement"),getPreviousElement:()=>d("previousElement"),getPreviousStep:()=>d("previousStep"),moveNext:o,movePrevious:i,moveTo:n,hasNextStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&r[p+1]},hasPreviousStep:()=>{const r=l("steps")||[],p=d("activeIndex");return p!==void 0&&r[p-1]},highlight:r=>{h(),K({...r,popover:r.popover?{showButtons:[],showProgress:!1,progressText:"",...r.popover}:void 0})},destroy:()=>{m(!1)}}}const Ie={class:"card content-box"},Ne={id:"Geeker"},We=Z({name:"guide"}),Re=Z({...We,setup(e){const t=De({allowClose:!0,doneBtnText:"结束",nextBtnText:"下一步",prevBtnText:"上一步",steps:[{element:"#collapseIcon",popover:{title:"Collapse Icon",description:"Open && Close sidebar",side:"right"}},{element:"#breadcrumb",popover:{title:"Breadcrumb",description:"Indicate the current page location",side:"right"}},{element:"#assemblySize",popover:{title:"Switch Assembly Size",description:"Switch the system size",side:"left"}},{element:"#language",popover:{title:"Switch Language",description:"Switch the system language",side:"left"}},{element:"#searchMenu",popover:{title:"Page Search",description:"Page search, quick navigation",side:"left"}},{element:"#themeSetting",popover:{title:"Setting theme",description:"Customize settings theme",side:"left"}},{element:"#message",popover:{title:"Message Notification",description:"Can receive company information",side:"left"}},{element:"#fullscreen",popover:{title:"Full Screen",description:"Full Screen, Exit The Full Screen Page",side:"left"}}]});return(o,i)=>{const n=q("el-alert"),a=q("el-button");return de(),ae("div",Ie,[i[2]||(i[2]=F("span",{class:"text"}," 引导页 🍓🍇🍈🍉",-1)),V(n,{title:"引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js.",type:"warning",closable:!1}),F("div",Ne,[V(a,{type:"primary",onClick:i[0]||(i[0]=ve(u=>ue(t).drive(),["prevent","stop"]))},{default:pe(()=>i[1]||(i[1]=[ce(" 打开引导页 🤹‍♂️ ")])),_:1})])])}}}),qe=me(Re,[["__scopeId","data-v-6a4794fd"]]);export{qe as default};
