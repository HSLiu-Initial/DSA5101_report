import{o as n,e as i,f as e,d as U,c as S,a as j,p as q,b as u,s as d,r as k,n as F,g as o,k as a,l as O,q as M,t as L,F as G,i as V,v as J,w as K,x as Q,_ as W}from"./index-f55f1874.js";import{N as D}from"./NoteDisplay-61980f0c.js";const X={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),ee=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),te=[Y,ee];function oe(_,c){return n(),i("svg",X,te)}const ne={name:"carbon-zoom-out",render:oe},se={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},le=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ae=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ie=[le,ae];function ce(_,c){return n(),i("svg",se,ie)}const re={name:"carbon-zoom-in",render:ce},ue={class:"h-full flex flex-col"},de={key:0,class:"px-5 py-2 max-h-60 overflow-auto border-t border-gray-400 border-opacity-20"},_e={class:"flex-none border-t border-gray-400 border-opacity-20"},pe={class:"flex gap-1 items-center px-6 py-3"},ve=e("div",{class:"flex-auto"},null,-1),me={class:"p2 text-center"},he=U({__name:"NotesView",setup(_){const c=S.titleTemplate.replace("%s",S.title||"Slidev");j({title:`Notes - ${c}`});const{isFullscreen:H,toggle:p}=J,s=q("slidev-notes-font-size",18),l=u(()=>{var t;return((t=d.lastUpdate)==null?void 0:t.type)==="viewer"?d.viewerPage:d.page}),v=u(()=>k.find(t=>t.path===`${l.value}`)),r=u(()=>k.find(t=>t.path===`${l.value+1}`));function A(){s.value=s.value+1}function E(){s.value=s.value-1}return(t,m)=>{var h,f,g,x,b,y,$,w,z,B,N,C;const T=K,Z=Q,R=re,I=ne;return n(),i(G,null,[e("div",{class:"fixed top-0 left-0 h-2px bg-teal-500 transition-all duration-500",style:F({width:`${(l.value-1)/o(V)*100}%`})},null,4),e("div",ue,[e("div",{class:"px-5 flex-auto h-full overflow-auto",style:F({fontSize:`${o(s)}px`})},[a(D,{note:(g=(f=(h=v.value)==null?void 0:h.meta)==null?void 0:f.slide)==null?void 0:g.note,"note-html":(y=(b=(x=v.value)==null?void 0:x.meta)==null?void 0:b.slide)==null?void 0:y.noteHTML,placeholder:`No notes for Slide ${l.value}.`},null,8,["note","note-html","placeholder"])],4),r.value?(n(),i("div",de,[a(D,{class:"opacity-50",note:(z=(w=($=r.value)==null?void 0:$.meta)==null?void 0:w.slide)==null?void 0:z.note,"note-html":(C=(N=(B=r.value)==null?void 0:B.meta)==null?void 0:N.slide)==null?void 0:C.noteHTML,placeholder:"No notes for next slide."},null,8,["note","note-html"])])):O("v-if",!0),e("div",_e,[e("div",pe,[e("button",{class:"slidev-icon-btn",onClick:m[0]||(m[0]=(...P)=>o(p)&&o(p)(...P))},[o(H)?(n(),M(T,{key:0})):(n(),M(Z,{key:1}))]),e("button",{class:"slidev-icon-btn",onClick:A},[a(R)]),e("button",{class:"slidev-icon-btn",onClick:E},[a(I)]),ve,e("div",me,L(l.value)+" / "+L(o(V)),1)])])])],64)}}}),xe=W(he,[["__file","C:/Users/16934/OneDrive/File/课程学习/DSML/第一学期/DSA5101 Introduction to Big Data for Industry/Project/slides/slides/node_modules/@slidev/client/internals/NotesView.vue"]]);export{xe as default};
