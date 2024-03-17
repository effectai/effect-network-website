import{_ as b}from"./nuxt-link.aL9ZCtTT.js";import{_ as g}from"./SocialBar.vue.4hS6WaRI.js";import{_ as k}from"./ContentRendererMarkdown.vue.8NYA25_j.js";import C from"./ContentRenderer.DjApH1Ru.js";import{u as w,q as z}from"./query.BKupzxMM.js";import{a as B,t as $,d as N}from"./socials.CMTy8176.js";import{g as R,a3 as V,L as T,v as j,o,c,a as t,i as s,x as q,w as r,b as a,d as l,t as _,F as A,j as D,l as p,k as E}from"./entry.DkiCdcdQ.js";import"./index.BsYmvPZw.js";import"./preview.BN--2fIA.js";const F={id:"nuxt-content"},L={class:"container"},S={class:"breadcrumbs"},H={class:"columns is-vcentered"},M={class:"column is-two-thirds"},O={class:"is-size-1 mt-5 has-text-primary title"},U={class:"is-flex is-align-items-center"},G=t("a",{class:"button is-primary is-black mx-3 is-self-center",href:"https://github.com/effectai/effect-js",target:"_blank"},[t("span",{class:"icon has-icon-left"},[t("i",{class:"fab fa-github"})]),t("span",null," Edit on github")],-1),I={class:"is-family-monospace is-size-7 is-dimmed"},J=t("div",{class:"column is-offset-1"},[t("img",{src:"https://placeholder.com/350x200"})],-1),K={class:"columns"},P={class:"column is-one-fifth"},Q={class:"is-sticky",id:"toc"},W=t("h4",{class:"is-size-5 has-text-primary"},"Table of Contents",-1),X={key:0},Y={class:"column content",id:"content"},_t=R({__name:"[slug]",async setup(Z){let n,m;const u=V(),h=T(()=>u.hash),f=u.params.slug,{data:e}=([n,m]=j(()=>w("page-data",()=>z(`/tutorials/${f}`).findOne())),n=await n,m(),n);return(tt,st)=>{const d=b,v=g,x=k,y=C;return o(),c("main",F,[t("div",L,[s(e)?(o(),q(y,{key:0,value:s(e)},{default:r(()=>[t("div",S,[a(d,{to:"/"},{default:r(()=>[l("Home")]),_:1}),l(" -> "),a(d,{to:"/developers#tutorials"},{default:r(()=>[l("Tutorials")]),_:1})]),t("div",H,[t("div",M,[t("h1",O,_(s(e).title),1),t("div",U,[a(v,{class:"has-text-primary is-size-3",socials:[s(B),s($),s(N)]},null,8,["socials"]),G]),t("span",I," updated "+_(s(e).lastUpdated),1)]),J]),t("div",K,[t("div",P,[t("div",Q,[W,s(e).body.toc&&s(e).body.toc.links?(o(),c("ul",X,[(o(!0),c(A,null,D(s(e).body.toc.links,i=>(o(),c("li",{key:i.text},[a(d,{class:E({"link-active":s(h)===`#${i.id}`}),to:`#${i.id}`},{default:r(()=>[l(_(i.text),1)]),_:2},1032,["class","to"])]))),128))])):p("",!0)])]),t("div",Y,[a(x,{value:s(e)},null,8,["value"])])])]),_:1},8,["value"])):p("",!0)])])}}});export{_t as default};
