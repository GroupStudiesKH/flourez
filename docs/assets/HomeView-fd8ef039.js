import{_ as u,u as m,r as g,a as v,o as p,b as r,c as b,d as f,e as d,f as e,g as h,n as x,t as s,h as w,F}from"./index-c108cebd.js";import{H,F as T}from"./Footer-56e68b12.js";const y="/assets/img/index_intro.png",M="/assets/img/home_section1.webp",L="/assets/img/home_section2.webp",z="/assets/img/home_section3.webp",k="/assets/img/home_section4.webp",E="/assets/img/home_bottom.webp",B="/assets/img/home_iso.png",D={components:{Header:H,Footer:T},setup(){m();const i=g(!1),{t:n,locale:l}=v(),o=()=>{const t=document.getElementById("intro").getBoundingClientRect();console.log(`rect.bottom: ${t.bottom}`),console.log(`window.innerHeight: ${window.innerHeight}`),t.top>=0&&t.bottom/2<=window.innerHeight&&(i.value=!0)};return p(()=>{window.addEventListener("scroll",o)}),{isIntroScolled:i,t:n,locale:l}}},S={id:"index"},V={id:"company_info"},C={class:"container"},I={class:"row"},K={class:"col-lg-6 col-12",id:"company_intro"},N=["innerHTML"],q={class:"row"},A={class:"col-6 col-md-3 badge"},O={class:"heading"},P=["innerHTML"],R={class:"col-6 col-md-3 badge"},j={class:"heading"},G=["innerHTML"],J={class:"col-6 col-md-3 badge"},Q={class:"heading"},U=["innerHTML"],W={class:"col-6 col-md-3 badge"},X={class:"heading"},Y=["innerHTML"],Z={id:"csr_red"},$={class:"container"},ee={class:"row"},ne={class:"col-5"},oe=["innerHTML"],se=["href"];function ie(i,n,l,o,a,t){const c=r("Header"),_=r("Footer");return b(),f(F,null,[d(c),e("main",S,[n[12]||(n[12]=h('<div class="banner"></div><div id="bannerCarousel" class="carousel slide"><div class="carousel-inner banner"><div class="carousel-item active"><div style="background-image:url(&#39;/assets/img/home_banner.png&#39;);" class="banner-content"><div class="container"><h1>Discover Fluorez Technology</h1><p class="d-none d-lg-block"> A global leader in FFKM sealing solutions trusted by international industrial organizations. Our mission is simple: deliver cost-effective, durable solutions tailored to your specific needs. Experience excellence with Fluorez Technology </p></div></div></div><div class="carousel-item"><div style="background-image:url(&#39;/assets/img/home_banner.png&#39;);" class="banner-content"><div class="container"><h1>Discover Fluorez Technology</h1><p class="d-none d-lg-block"> A global leader in FFKM sealing solutions trusted by international industrial organizations. Our mission is simple: deliver cost-effective, durable solutions tailored to your specific needs. Experience excellence with Fluorez Technology </p></div></div></div></div></div>',2)),e("div",V,[e("div",C,[e("div",I,[n[0]||(n[0]=e("div",{class:"col-lg-6 col-12",id:"company_pic"},[e("img",{src:y,alt:""})],-1)),e("div",K,[e("p",{innerHTML:i.$t("index.intro")},null,8,N)])])]),n[1]||(n[1]=e("div",{id:"company_info_right_shape"},null,-1))]),e("div",{class:x(["container",o.isIntroScolled?"scrolled":""]),id:"intro"},[e("div",q,[e("div",A,[e("div",O,[e("h3",null,s(o.t("index.feature1_title")),1),n[2]||(n[2]=e("span",null,"Fluoroelastomers, FFKM",-1))]),n[3]||(n[3]=e("img",{src:M,alt:""},null,-1)),e("p",{innerHTML:o.t("index.feature1_subtitle")},null,8,P)]),e("div",R,[e("div",j,[e("h3",null,s(o.t("index.feature2_title")),1),n[4]||(n[4]=e("span",null,"Fluoroelastomers, FKM",-1))]),n[5]||(n[5]=e("img",{src:L,alt:""},null,-1)),e("p",{innerHTML:o.t("index.feature2_subtitle")},null,8,G)]),e("div",J,[e("div",Q,[e("h3",null,s(o.t("index.feature3_title")),1),n[6]||(n[6]=e("span",null,"Perfluorinated liquids",-1))]),n[7]||(n[7]=e("img",{src:z,alt:""},null,-1)),e("p",{innerHTML:o.t("index.feature3_subtitle")},null,8,U)]),e("div",W,[e("div",X,[e("h3",null,s(o.t("index.feature4_title")),1),n[8]||(n[8]=e("span",null,"PTFE micropowders",-1))]),n[9]||(n[9]=e("img",{src:k,alt:""},null,-1)),e("p",{innerHTML:o.t("index.feature4_subtitle")},null,8,Y)])])],2),e("div",Z,[e("div",$,[e("div",ee,[n[11]||(n[11]=e("div",{class:"col-7"},[e("img",{src:E})],-1)),e("div",ne,[e("h3",{innerHTML:o.t("index.feature5.title")},null,8,oe),e("p",null,[w(s(o.t("index.feature5.content")),1),n[10]||(n[10]=e("br",null,null,-1)),e("small",null,s(o.t("index.feature5.content_2")),1)]),e("a",{href:`${o.locale}/about?content=pfas_content`},s(o.t("index.feature5.readmore")),9,se)])])])]),n[13]||(n[13]=e("div",{id:"iso_quality"},[e("div",{class:"container"},[e("img",{src:B})])],-1))]),d(_)],64)}const re=u(D,[["render",ie]]);export{re as default};