import{f as n,o as s,c as t,a as o,j as a,t as i,k as l,m as r}from"./CkxwMjSb.js";const d={class:"container"},c={key:0,class:"title is-2 is-spaced"},p={key:1,class:"subtitle"},m={class:""},_=n({__name:"SimpleSection",props:{centered:{type:Boolean,default:!1},title:{},subtitle:{},isMirrored:{type:Boolean}},setup(u){return(e,f)=>(s(),t("section",{class:a([{"is-mirrored":e.isMirrored},"section"]),"data-aos":"fade-in"},[o("div",d,[o("div",{class:a([{"has-text-centered":e.centered},"my-6"])},[e.title?(s(),t("h3",c,i(e.title),1)):l("",!0),e.subtitle?(s(),t("h4",p,i(e.subtitle),1)):e.$slots.subtitle?r(e.$slots,"subtitle",{key:2}):l("",!0)],2),o("div",m,[r(e.$slots,"default")])])],2))}});export{_};