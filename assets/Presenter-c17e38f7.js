import{o as d,e as k,f as e,y as S,z as E,b as h,d as M,A as y,q as p,B as V,_ as A,C as P,D as T,c as B,a as F,E as b,G as I,H as z,I as H,J as L,K as R,L as O,M as U,N as q,O as W,g as r,k as u,t as Z,n as x,P as D,S as $,l as j,Q as G,R as w,T as J,F as K,U as Q,V as X,s as Y,W as ee,X as te,m as N,Y as se,Z as oe,$ as le,a0 as ne,a1 as ae,i as re,a2 as ie}from"./index-f55f1874.js";import{N as ce}from"./NoteDisplay-61980f0c.js";import ue from"./DrawingControls-57b0aeaf.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),ve=[_e];function me(o,n){return d(),k("svg",de,ve)}const pe={name:"carbon-renew",render:me},he={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ge=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),xe=[fe,ge];function we(o,n){return d(),k("svg",he,xe)}const Se={name:"carbon-time",render:we},ye="/DSA5101_report/assets/logo-title-horizontal-96c3c915.png";function ke(){const o=S(Date.now()),n=E({interval:1e3}),_=h(()=>{const t=(n.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function v(){o.value=n.value}return{timer:_,resetTimer:v}}const Ce=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o,_=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),v=h(()=>{var t,l,s;return(s=(l=(t=y.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),p(ce,{class:V(n.class),note:_.value,"note-html":v.value},null,8,["class","note","note-html"]))}}),Be=A(Ce,[["__file","C:/Users/16934/OneDrive/File/课程学习/DSML/第一学期/DSA5101 Introduction to Big Data for Industry/Project/slides/slides/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(Q("data-v-574fd206"),o=o(),X(),o),be={class:"bg-main h-full slidev-presenter"},De={class:"grid-container"},$e={class:"grid-section top flex"},Ne=f(()=>e("img",{src:ye,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Me=f(()=>e("div",{class:"flex-auto"},null,-1)),Ve={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ae=f(()=>e("div",{class:"context"}," current ",-1)),Ee=f(()=>e("div",{class:"context"}," next ",-1)),Pe={class:"grid-section note overflow-auto"},Te={class:"grid-section bottom"},Fe={class:"progress-bar"},Ie=M({__name:"Presenter",setup(o){const n=S();P(),T(n);const _=B.titleTemplate.replace("%s",B.title||"Slidev");F({title:`Presenter - ${_}`});const{timer:v,resetTimer:t}=ke(),l=S([]),s=h(()=>b.value<I.value?{route:y.value,clicks:b.value+1}:z.value?{route:H.value,clicks:0}:null);return L(),R(()=>{const C=n.value.querySelector("#slide-content"),i=O(U()),g=q();W(()=>{if(!g.value||ee.value||!te.value)return;const c=C.getBoundingClientRect(),a=(i.x-c.left)/c.width*100,m=(i.y-c.top)/c.height*100;if(!(a<0||a>100||m<0||m>100))return{x:a,y:m}},c=>{Y.cursor=c})}),(C,i)=>{const g=Se,c=pe;return d(),k(K,null,[e("div",be,[e("div",De,[e("div",$e,[Ne,Me,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...a)=>r(t)&&r(t)(...a))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Ve,Z(r(v)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(r(N))},[u($,{key:"main",class:"h-full w-full"},{default:D(()=>[u(se,{"render-context":"presenter"})]),_:1}),Ae],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(r(N))},[s.value?(d(),p($,{key:"next",class:"h-full w-full"},{default:D(()=>{var a;return[u(r(le),{is:(a=s.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":i[1]||(i[1]=m=>l.value=m),clicks:s.value.clicks,"clicks-disabled":!1,class:V(r(oe)(s.value.route)),route:s.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):j("v-if",!0),Ee],4),e("div",Pe,[(d(),p(Be,{key:2,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Te,[u(ne,{persist:!0})]),(d(),p(ue,{key:0}))]),e("div",Fe,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(r(ae)-1)/(r(re)-1)*100}%`})},null,4)])]),u(ie),u(J,{modelValue:r(w),"onUpdate:modelValue":i[2]||(i[2]=a=>G(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const Re=A(Ie,[["__scopeId","data-v-574fd206"],["__file","C:/Users/16934/OneDrive/File/课程学习/DSML/第一学期/DSA5101 Introduction to Big Data for Industry/Project/slides/slides/node_modules/@slidev/client/internals/Presenter.vue"]]);export{Re as default};
