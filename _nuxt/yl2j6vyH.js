import{_ as m}from"./B0lOKujI.js";import{f as u,o as a,c as o,a as e,b as d,k as i,t as p,F as f,i as h,r as g,a0 as b,g as y,h as l}from"./Dy2aZlg1.js";import{d as k}from"./CL8PB_jd.js";import"./BQTnwUtG.js";const v=""+new URL("effect.GsihajK7.svg",import.meta.url).href,w={class:"section"},D={key:0,class:"container py-6"},L={class:"columns"},N={class:"p-4 column is-one-fifth is-one-whole-mobile"},V={key:0,class:"container"},$={class:"social-icons is-flex is-justify-content-center"},B=["href"],C=["href"],j=["href"],F={class:"p-4 column mb-6 is-two-fifths is-one-whole-mobile"},R={class:"title is-2 mb-3"},E={class:"tags"},G={class:"has-text-grey is-flex is-clipped mb-0"},I=["href"],K=u({__name:"DappDetail",props:{dapp:{}},setup(_){return(s,t)=>{const n=m;return a(),o("section",w,[s.dapp?(a(),o("div",D,[e("div",L,[e("div",N,[e("figure",null,[d(n,{src:`img/ecosystem/${s.dapp.image_url}`,alt:s.dapp.image_url},null,8,["src","alt"])]),s.dapp?(a(),o("div",V,[e("div",$,[s.dapp.campaign_url?(a(),o("a",{key:0,href:s.dapp.campaign_url,target:"_blank"},t[0]||(t[0]=[e("img",{src:v,style:{height:"35px"}},null,-1)]),8,B)):i("",!0),s.dapp.github_url?(a(),o("a",{key:1,href:s.dapp.github_url,target:"_blank"},t[1]||(t[1]=[e("i",{class:"fab fa-github"},null,-1)]),8,C)):i("",!0),s.dapp.youtube_url?(a(),o("a",{key:2,href:s.dapp.youtube_url,target:"_blank"},t[2]||(t[2]=[e("i",{class:"fab fa-youtube"},null,-1)]),8,j)):i("",!0)])])):i("",!0)]),e("div",F,[e("h1",R,p(s.dapp.group_name),1),e("div",E,[(a(!0),o(f,null,h(s.dapp.tags,r=>(a(),o("span",{key:r,class:"tag is-info is-light"},p(r),1))),128))]),e("p",G,p(s.dapp.description),1),s.dapp.website_url?(a(),o("a",{key:0,href:s.dapp.website_url,class:"button is-primary mt-3"}," Visit website ",8,I)):i("",!0)])]),t[3]||(t[3]=e("hr",null,null,-1))])):i("",!0)])}}}),M={key:0},A=u({__name:"[slug]",setup(_){const s=g(),t=b();return y(()=>{s.value=k.find(n=>n.group_name.toLocaleLowerCase()===t.params.slug)}),(n,r)=>{const c=K;return l(s)?(a(),o("div",M,[d(c,{dapp:l(s)},null,8,["dapp"])])):i("",!0)}}});export{A as default};
