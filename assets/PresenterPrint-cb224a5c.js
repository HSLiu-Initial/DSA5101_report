import{d as m,u as d,a as _,c as u,b as p,r as h,o as a,e as n,f as t,t as s,g as l,F as f,h as g,n as v,i as x,j as y,k as b,l as B,m as N,_ as k}from"./index-f55f1874.js";import{N as D}from"./NoteDisplay-61980f0c.js";const P={class:"m-4"},S={class:"mb-10"},w={class:"text-4xl font-bold mt-2"},F={class:"opacity-50"},L={class:"text-lg"},V={class:"font-bold flex gap-2"},C={class:"opacity-50"},E=t("div",{class:"flex-auto"},null,-1),T={key:0,class:"border-gray-400/50 mb-8"},j=m({__name:"PresenterPrint",setup(A){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),_({title:`Notes - ${u.title}`});const i=p(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(a(),n("div",{id:"page-root",style:v(l(N))},[t("div",P,[t("div",S,[t("h1",w,s(l(u).title),1),t("div",F,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",V,[t("div",C,s(e==null?void 0:e.no)+"/"+s(l(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),E])]),b(D,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",T)):B("v-if",!0)]))),128))])],4))}}),z=k(j,[["__file","C:/Users/16934/OneDrive/File/课程学习/DSML/第一学期/DSA5101 Introduction to Big Data for Industry/Project/slides/slides/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{z as default};
