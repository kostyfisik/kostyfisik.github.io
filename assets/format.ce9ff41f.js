import{y as R,o as T,q as S,a8 as M,g as B,k as V,c as f,h as w,A as H,u as U,l as j,r as E,b as F,s as P,B as Q,a9 as A,m as I,aa as D,a as K,ab as $,ac as O}from"./index.9041cdd0.js";import{u as N,a as z}from"./use-dark.1520c919.js";let _,x=0;const u=new Array(256);for(let e=0;e<256;e++)u[e]=(e+256).toString(16).substring(1);const W=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const a=new Uint8Array(t);return e.getRandomValues(a),a}}return t=>{const a=[];for(let o=t;o>0;o--)a.push(Math.floor(Math.random()*256));return a}})(),L=4096;function X(){(_===void 0||x+16>L)&&(x=0,_=W(L));const e=Array.prototype.slice.call(_,x,x+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,u[e[0]]+u[e[1]]+u[e[2]]+u[e[3]]+"-"+u[e[4]]+u[e[5]]+"-"+u[e[6]]+u[e[7]]+"-"+u[e[8]]+u[e[9]]+"-"+u[e[10]]+u[e[11]]+u[e[12]]+u[e[13]]+u[e[14]]+u[e[15]]}function Y(){let e;const t=B();function a(){e=void 0}return R(a),T(a),{removeTick:a,registerTick(o){e=o,S(()=>{e===o&&(M(t)===!1&&e(),e=void 0)})}}}function ee(){let e=null;const t=B();function a(){e!==null&&(clearTimeout(e),e=null)}return R(a),T(a),{removeTimeout:a,registerTimeout(o,i){a(),M(t)===!1&&(e=setTimeout(o,i))}}}let Z=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,Z=e.scrollLeft>=0,e.remove()}var te=V({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>w("div",{class:a.value},H(t.default))}}),ae=V({name:"QItem",props:{...N,...U,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:o}}=B(),i=z(e,o),{hasLink:y,linkAttrs:h,linkClass:r,linkTag:c,navigateOnClick:p}=j(),s=E(null),v=E(null),m=f(()=>e.clickable===!0||y.value===!0||e.tag==="label"),d=f(()=>e.disable!==!0&&m.value===!0),b=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(y.value===!0&&e.active===null?r.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),g=f(()=>{if(e.insetLevel===void 0)return null;const n=o.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function k(n){d.value===!0&&(v.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===s.value?v.value.focus():document.activeElement===v.value&&s.value.focus()),p(n))}function q(n){if(d.value===!0&&F(n,[13,32])===!0){P(n),n.qKeyEvent=!0;const C=new MouseEvent("click",n);C.qKeyEvent=!0,s.value.dispatchEvent(C)}a("keyup",n)}function l(){const n=Q(t.default,[]);return d.value===!0&&n.unshift(w("div",{class:"q-focus-helper",tabindex:-1,ref:v})),n}return()=>{const n={ref:s,class:b.value,style:g.value,role:"listitem",onClick:k,onKeyup:q};return d.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,h.value)):m.value===!0&&(n["aria-disabled"]="true"),w(c.value,n,l())}}}),le=V({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const a=f(()=>parseInt(e.lines,10)),o=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),i=f(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>w("div",{style:i.value,class:o.value},H(t.default))}});function ne(e,t,a){let o;function i(){o!==void 0&&(A.remove(o),o=void 0)}return T(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){o={condition:()=>a.value===!0,handler:t},A.add(o)}}}const oe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ie=["beforeShow","show","beforeHide","hide"];function ue({showing:e,canShow:t,hideOnRouteChange:a,handleShow:o,handleHide:i,processOnMount:y}){const h=B(),{props:r,emit:c,proxy:p}=h;let s;function v(l){e.value===!0?b(l):m(l)}function m(l){if(r.disable===!0||l!==void 0&&l.qAnchorHandled===!0||t!==void 0&&t(l)!==!0)return;const n=r["onUpdate:modelValue"]!==void 0;n===!0&&(c("update:modelValue",!0),s=l,S(()=>{s===l&&(s=void 0)})),(r.modelValue===null||n===!1)&&d(l)}function d(l){e.value!==!0&&(e.value=!0,c("beforeShow",l),o!==void 0?o(l):c("show",l))}function b(l){if(r.disable===!0)return;const n=r["onUpdate:modelValue"]!==void 0;n===!0&&(c("update:modelValue",!1),s=l,S(()=>{s===l&&(s=void 0)})),(r.modelValue===null||n===!1)&&g(l)}function g(l){e.value!==!1&&(e.value=!1,c("beforeHide",l),i!==void 0?i(l):c("hide",l))}function k(l){r.disable===!0&&l===!0?r["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):l===!0!==e.value&&(l===!0?d:g)(s)}I(()=>r.modelValue,k),a!==void 0&&D(h)===!0&&I(()=>p.$route.fullPath,()=>{a.value===!0&&e.value===!0&&b()}),y===!0&&K(()=>{k(r.modelValue)});const q={show:m,hide:b,toggle:v};return Object.assign(p,q),q}function re(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,$(t))}}}function se(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),O.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ce(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function de(e,t,a){if(a<=t)return t;const o=a-t+1;let i=t+(e-t)%o;return i<t&&(i=o+i),i===0?0:i}export{ae as Q,Y as a,ee as b,se as c,oe as d,ie as e,ue as f,ne as g,ce as h,re as i,te as j,le as k,de as n,Z as r,X as u};