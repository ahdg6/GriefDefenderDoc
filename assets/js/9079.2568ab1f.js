"use strict";(self.webpackChunkgriefdefender=self.webpackChunkgriefdefender||[]).push([[9079],{8926:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(6252),r=n(2262),s=n(2119);const o=(0,a.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=(0,s.yj)(),n=(0,r.iH)();(0,a.YP)((()=>t.path),(()=>n.value.focus()));const o=({target:e})=>{const t=document.querySelector(e.hash);if(t){const e=()=>{t.removeAttribute("tabindex"),t.removeEventListener("blur",e)};t.setAttribute("tabindex","-1"),t.addEventListener("blur",e),t.focus(),window.scrollTo(0,0)}};return()=>[(0,a.h)("span",{ref:n,tabindex:"-1"}),(0,a.h)("a",{href:`#${e.content}`,class:"skip-link sr-only",onClick:o},"Skip to content")]}})},9079:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7621),r=n(6252),s=n(8918),o=n(3127),i=n(2289),c=n(2672),d=n(7443),l=n(2217),u=n(8926);const h=(0,r.aZ)({name:"Blog",setup(){const e=(0,a.I2)();return()=>[(0,r.h)(u.Z),(0,r.h)((0,r.up)("CommonWrapper"),{sidebar:!1,sidebarLinks:!1},{navScreenBottom:()=>(0,r.h)(i.Z),sidebar:()=>(0,r.h)(c.Z),default:()=>e.value.home?(0,r.h)(s.Z):(0,r.h)("main",{class:"page blog",id:"main-content"},(0,r.h)("div",{class:"blog-page-wrapper"},[(0,r.h)(o.Z),(0,r.h)(l.a,{delay:.16},(()=>(0,r.h)(d.Z)))]))})]}})}}]);