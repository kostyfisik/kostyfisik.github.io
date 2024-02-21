import{c as m,k as x,r as u,m as Q,o as j,h as l,aq as F,A as R,aB as H,_ as L,W as V,X as B,Y as W,Z as D,$ as k,a0 as d,a3 as E,a7 as h,a4 as M,a1 as O}from"./index.9041cdd0.js";import{Q as U,a as A}from"./QCard.ef21fad4.js";import{G as X}from"./GetHostIndex.8098174a.js";import{G as Y}from"./GetSourceParameters.9839ce19.js";import"./use-dark.1520c919.js";import"./InputWithUnits.28d3e368.js";import"./format.ce9ff41f.js";const Z={ratio:[String,Number]};function J(e,r){return m(()=>{const o=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(o)!==!0&&o>0?{paddingBottom:`${100/o}%`}:null})}const K=16/9;var ee=x({name:"QImg",props:{...Z,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:K},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:o}){const S=u(e.initialRatio),_=J(e,S);let i=null,s=!1;const n=[u(null),u(y())],a=u(0),c=u(!1),g=u(!1),N=m(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),T=m(()=>({width:e.width,height:e.height})),$=m(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),z=m(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));Q(()=>b(),q);function b(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function y(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function q(t){i!==null&&(clearTimeout(i),i=null),g.value=!1,t===null?(c.value=!1,n[a.value^1].value=y()):c.value=!0,n[a.value].value=t}function p({target:t}){s!==!0&&(i!==null&&(clearTimeout(i),i=null),S.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,C(t,1))}function C(t,f){s===!0||f===1e3||(t.complete===!0?G(t):i=setTimeout(()=>{i=null,C(t,f+1)},50))}function G(t){s!==!0&&(a.value=a.value^1,n[a.value].value=null,c.value=!1,g.value=!1,o("load",t.currentSrc||t.src))}function I(t){i!==null&&(clearTimeout(i),i=null),c.value=!1,g.value=!0,n[a.value].value=null,n[a.value^1].value=y(),o("error",t)}function w(t){const f=n[t].value,v={key:"img_"+t,class:$.value,style:z.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...f};return a.value===t?(v.class+=" q-img__image--waiting",Object.assign(v,{onLoad:p,onError:I})):v.class+=" q-img__image--loaded",l("div",{class:"q-img__container absolute-full",key:"img"+t},l("img",v))}function P(){return c.value!==!0?l("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},R(r[g.value===!0?"error":"default"])):l("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[l(H,{color:e.spinnerColor,size:e.spinnerSize})])}return q(b()),j(()=>{s=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const t=[];return _.value!==null&&t.push(l("div",{key:"filler",style:_.value})),g.value!==!0&&(n[0].value!==null&&t.push(w(0)),n[1].value!==null&&t.push(w(1))),t.push(l(F,{name:"q-transition--fade"},P)),l("div",{class:N.value,style:T.value,role:"img","aria-label":e.alt},t)}}});const te=V({name:"FarFieldPage",components:{GetHostIndex:X,GetSourceParameters:Y},setup(){let e="underconstruction.jpg";return e="/".toString()+"underconstruction.jpg",{img_path:e}}}),ie=h("div",{class:"q-ma-sm"},null,-1),ne=h("div",{class:"q-ma-sm"},null,-1),ae={class:"col-auto"},le=h("div",{class:"q-ma-lg"},null,-1);function re(e,r,o,S,_,i){const s=B("GetSourceParameters"),n=B("GetHostIndex");return W(),D(U,{class:"column q-px-md"},{default:k(()=>[d(ee,{src:e.img_path},null,8,["src"]),ie,E(" Under construction! "),ne,d(s),d(n),h("div",ae," Input result: "+M(e.$store.state.simulationSetup.gui.fromWL),1),le,d(A,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:k(()=>[d(O,{size:"xs",fab:"",icon:"keyboard_arrow_up",color:"primary"})]),_:1})]),_:1})}var fe=L(te,[["render",re]]);export{fe as default};