import{d as L,as as Re,C as P,am as de,h as E,r as a,o as r,g as x,w as n,b as e,e as R,a as t,n as D,u as k,W as j,p as I,aR as Ee,c as F,A as Z,B as Y,D as De,t as M,M as me,O as _e,al as ee,s as A,R as we,S as X,F as O,f as J,y as H,V as ze,a2 as ne,aF as le,aS as Ue,aT as Ge,aC as Pe,aU as ge,aV as Be,aW as Ie,aX as Ne,x as qe,N as ye,a3 as Ce,aw as Oe,aY as Ke,a4 as He,z as pe,P as We}from"./index-ChWs1m5F.js";import{a as je,_ as ae}from"./index.vue_vue_type_script_setup_true_name_SwitchDark_lang-CFODKmz0.js";import{_ as z}from"./mplugin-vue_export-helper-DlAUqK2U.js";import{u as xe,a as $e}from"./tabs-BAoJWEke.js";import{S as Qe,_ as be}from"./sortable.esm-CGHLlJBv.js";import{u as Se}from"./index-Cn9HUOno.js";function Ye(v){return{all:v=v||new Map,on:function(l,o){var i=v.get(l);i?i.push(o):v.set(l,[o])},off:function(l,o){var i=v.get(l);i&&(o?i.splice(i.indexOf(o)>>>0,1):v.set(l,[]))},emit:function(l,o){var i=v.get(l);i&&i.slice().map(function(d){d(o)}),(i=v.get("*"))&&i.slice().map(function(d){d(l,o)})}}}const Ve=Ye(),Je={class:"layout-box"},Xe={class:"theme-item"},Ze={class:"theme-item mb50"},et={class:"theme-item"},tt={class:"theme-item"},nt={class:"theme-item"},lt={class:"theme-item mb40"},ot={class:"theme-item"},st={class:"theme-item"},at={class:"theme-item"},it={class:"theme-item"},ut={class:"theme-item"},rt={class:"theme-item"},ct={class:"theme-item"},dt={class:"theme-item"},mt=L({__name:"index",setup(v){const{changePrimary:l,changeGreyOrWeak:o,setAsideTheme:i,setHeaderTheme:d}=Re(),u=P(),{layout:m,primary:p,isGrey:c,isWeak:g,asideInverted:f,headerInverted:C,isCollapse:$,accordion:_,watermark:w,breadcrumb:b,breadcrumbIcon:V,tabs:h,tabsIcon:y,footer:U}=de(u),B=[Ee,"#daa96e","#0c819f","#409eff","#27ae60","#ff5c93","#e74c3c","#fd726d","#f39c12","#9b59b6"],T=G=>{u.setGlobalState("layout",G),i()},K=E(!1);return Ve.on("openThemeDrawer",()=>K.value=!0),(G,s)=>{const Le=a("Notification"),W=a("el-icon"),ce=a("el-divider"),se=a("CircleCheckFilled"),te=a("el-tooltip"),ve=a("QuestionFilled"),q=a("el-switch"),Me=a("ColdDrink"),Fe=a("el-color-picker"),Ae=a("Setting"),Te=a("el-drawer");return r(),x(Te,{modelValue:K.value,"onUpdate:modelValue":s[19]||(s[19]=S=>K.value=S),title:"布局设置",size:"290px"},{default:n(()=>[e(ce,{class:"divider","content-position":"center"},{default:n(()=>[e(W,null,{default:n(()=>[e(Le)]),_:1}),s[20]||(s[20]=R(" 布局样式 "))]),_:1}),t("div",Je,[e(te,{effect:"dark",content:"纵向",placement:"top","show-after":200},{default:n(()=>[t("div",{class:D(["layout-item layout-vertical",{"is-active":k(m)=="vertical"}]),onClick:s[0]||(s[0]=S=>T("vertical"))},[s[21]||(s[21]=t("div",{class:"layout-dark"},null,-1)),s[22]||(s[22]=t("div",{class:"layout-container"},[t("div",{class:"layout-light"}),t("div",{class:"layout-content"})],-1)),k(m)=="vertical"?(r(),x(W,{key:0},{default:n(()=>[e(se)]),_:1})):j("",!0)],2)]),_:1}),e(te,{effect:"dark",content:"经典",placement:"top","show-after":200},{default:n(()=>[t("div",{class:D(["layout-item layout-classic",{"is-active":k(m)=="classic"}]),onClick:s[1]||(s[1]=S=>T("classic"))},[s[23]||(s[23]=t("div",{class:"layout-dark"},null,-1)),s[24]||(s[24]=t("div",{class:"layout-container"},[t("div",{class:"layout-light"}),t("div",{class:"layout-content"})],-1)),k(m)=="classic"?(r(),x(W,{key:0},{default:n(()=>[e(se)]),_:1})):j("",!0)],2)]),_:1}),e(te,{effect:"dark",content:"横向",placement:"top","show-after":200},{default:n(()=>[t("div",{class:D(["layout-item layout-transverse",{"is-active":k(m)=="transverse"}]),onClick:s[2]||(s[2]=S=>T("transverse"))},[s[25]||(s[25]=t("div",{class:"layout-dark"},null,-1)),s[26]||(s[26]=t("div",{class:"layout-content"},null,-1)),k(m)=="transverse"?(r(),x(W,{key:0},{default:n(()=>[e(se)]),_:1})):j("",!0)],2)]),_:1}),e(te,{effect:"dark",content:"分栏",placement:"top","show-after":200},{default:n(()=>[t("div",{class:D(["layout-item layout-columns",{"is-active":k(m)=="columns"}]),onClick:s[3]||(s[3]=S=>T("columns"))},[s[27]||(s[27]=t("div",{class:"layout-dark"},null,-1)),s[28]||(s[28]=t("div",{class:"layout-light"},null,-1)),s[29]||(s[29]=t("div",{class:"layout-content"},null,-1)),k(m)=="columns"?(r(),x(W,{key:0},{default:n(()=>[e(se)]),_:1})):j("",!0)],2)]),_:1})]),t("div",Xe,[t("span",null,[s[30]||(s[30]=R(" 侧边栏反转色 ")),e(te,{effect:"dark",content:"侧边栏颜色变为深色模式",placement:"top"},{default:n(()=>[e(W,null,{default:n(()=>[e(ve)]),_:1})]),_:1})]),e(q,{modelValue:k(f),"onUpdate:modelValue":s[4]||(s[4]=S=>I(f)?f.value=S:null),onChange:k(i)},null,8,["modelValue","onChange"])]),t("div",Ze,[t("span",null,[s[31]||(s[31]=R(" 头部反转色 ")),e(te,{effect:"dark",content:"头部颜色变为深色模式",placement:"top"},{default:n(()=>[e(W,null,{default:n(()=>[e(ve)]),_:1})]),_:1})]),e(q,{modelValue:k(C),"onUpdate:modelValue":s[5]||(s[5]=S=>I(C)?C.value=S:null),onChange:k(d)},null,8,["modelValue","onChange"])]),e(ce,{class:"divider","content-position":"center"},{default:n(()=>[e(W,null,{default:n(()=>[e(Me)]),_:1}),s[32]||(s[32]=R(" 全局主题 "))]),_:1}),t("div",et,[s[33]||(s[33]=t("span",null,"主题颜色",-1)),e(Fe,{modelValue:k(p),"onUpdate:modelValue":s[6]||(s[6]=S=>I(p)?p.value=S:null),predefine:B,onChange:k(l)},null,8,["modelValue","onChange"])]),t("div",tt,[s[34]||(s[34]=t("span",null,"暗黑模式",-1)),e(je)]),t("div",nt,[s[35]||(s[35]=t("span",null,"灰色模式",-1)),e(q,{modelValue:k(c),"onUpdate:modelValue":s[7]||(s[7]=S=>I(c)?c.value=S:null),onChange:s[8]||(s[8]=S=>k(o)("grey",!!S))},null,8,["modelValue"])]),t("div",lt,[s[36]||(s[36]=t("span",null,"色弱模式",-1)),e(q,{modelValue:k(g),"onUpdate:modelValue":s[9]||(s[9]=S=>I(g)?g.value=S:null),onChange:s[10]||(s[10]=S=>k(o)("weak",!!S))},null,8,["modelValue"])]),e(ce,{class:"divider","content-position":"center"},{default:n(()=>[e(W,null,{default:n(()=>[e(Ae)]),_:1}),s[37]||(s[37]=R(" 界面设置 "))]),_:1}),t("div",ot,[s[38]||(s[38]=t("span",null,"菜单折叠",-1)),e(q,{modelValue:k($),"onUpdate:modelValue":s[11]||(s[11]=S=>I($)?$.value=S:null)},null,8,["modelValue"])]),t("div",st,[s[39]||(s[39]=t("span",null,"菜单手风琴",-1)),e(q,{modelValue:k(_),"onUpdate:modelValue":s[12]||(s[12]=S=>I(_)?_.value=S:null)},null,8,["modelValue"])]),t("div",at,[s[40]||(s[40]=t("span",null,"水印",-1)),e(q,{modelValue:k(w),"onUpdate:modelValue":s[13]||(s[13]=S=>I(w)?w.value=S:null)},null,8,["modelValue"])]),t("div",it,[s[41]||(s[41]=t("span",null,"面包屑",-1)),e(q,{modelValue:k(b),"onUpdate:modelValue":s[14]||(s[14]=S=>I(b)?b.value=S:null)},null,8,["modelValue"])]),t("div",ut,[s[42]||(s[42]=t("span",null,"面包屑图标",-1)),e(q,{modelValue:k(V),"onUpdate:modelValue":s[15]||(s[15]=S=>I(V)?V.value=S:null)},null,8,["modelValue"])]),t("div",rt,[s[43]||(s[43]=t("span",null,"标签栏",-1)),e(q,{modelValue:k(h),"onUpdate:modelValue":s[16]||(s[16]=S=>I(h)?h.value=S:null)},null,8,["modelValue"])]),t("div",ct,[s[44]||(s[44]=t("span",null,"标签栏图标",-1)),e(q,{modelValue:k(y),"onUpdate:modelValue":s[17]||(s[17]=S=>I(y)?y.value=S:null)},null,8,["modelValue"])]),t("div",dt,[s[45]||(s[45]=t("span",null,"页脚",-1)),e(q,{modelValue:k(U),"onUpdate:modelValue":s[18]||(s[18]=S=>I(U)?U.value=S:null)},null,8,["modelValue"])])]),_:1},8,["modelValue"])}}}),_t=z(mt,[["__scopeId","data-v-24675b73"]]),pt=L({__name:"Maximize",setup(v){const l=P(),o=()=>{l.setGlobalState("maximize",!1)};return(i,d)=>(r(),F("div",{class:"maximize",onClick:o},d[0]||(d[0]=[t("i",{class:D("iconfont icon-tuichu")},null,-1)])))}}),ft=z(pt,[["__scopeId","data-v-fbc0d1c1"]]),vt=L({__name:"MoreButton",setup(v){const l=Z(),o=Y(),i=xe(),d=P(),u=$e(),m=De("refresh"),p=()=>{setTimeout(()=>{l.meta.isKeepAlive&&u.removeKeepAliveName(l.fullPath),m(!1),me(()=>{l.meta.isKeepAlive&&u.addKeepAliveName(l.fullPath),m(!0)})},0)},c=()=>{d.setGlobalState("maximize",!0)},g=()=>{l.meta.isAffix||i.removeTabs(l.fullPath)},f=()=>{i.closeMultipleTab(),o.push(_e)};return(C,$)=>{const _=a("Refresh"),w=a("el-icon"),b=a("el-dropdown-item"),V=a("FullScreen"),h=a("Remove"),y=a("DArrowLeft"),U=a("DArrowRight"),B=a("CircleClose"),T=a("FolderDelete"),K=a("el-dropdown-menu"),G=a("el-dropdown");return r(),x(G,{trigger:"click",teleported:!1},{dropdown:n(()=>[e(K,null,{default:n(()=>[e(b,{onClick:p},{default:n(()=>[e(w,null,{default:n(()=>[e(_)]),_:1}),R(M(C.$t("tabs.refresh")),1)]),_:1}),e(b,{onClick:c},{default:n(()=>[e(w,null,{default:n(()=>[e(V)]),_:1}),R(M(C.$t("tabs.maximize")),1)]),_:1}),e(b,{divided:"",onClick:g},{default:n(()=>[e(w,null,{default:n(()=>[e(h)]),_:1}),R(M(C.$t("tabs.closeCurrent")),1)]),_:1}),e(b,{onClick:$[0]||($[0]=s=>k(i).closeTabsOnSide(k(l).fullPath,"left"))},{default:n(()=>[e(w,null,{default:n(()=>[e(y)]),_:1}),R(M(C.$t("tabs.closeLeft")),1)]),_:1}),e(b,{onClick:$[1]||($[1]=s=>k(i).closeTabsOnSide(k(l).fullPath,"right"))},{default:n(()=>[e(w,null,{default:n(()=>[e(U)]),_:1}),R(M(C.$t("tabs.closeRight")),1)]),_:1}),e(b,{divided:"",onClick:$[2]||($[2]=s=>k(i).closeMultipleTab(k(l).fullPath))},{default:n(()=>[e(w,null,{default:n(()=>[e(B)]),_:1}),R(M(C.$t("tabs.closeOther")),1)]),_:1}),e(b,{onClick:f},{default:n(()=>[e(w,null,{default:n(()=>[e(T)]),_:1}),R(M(C.$t("tabs.closeAll")),1)]),_:1})]),_:1})]),default:n(()=>[$[3]||($[3]=t("div",{class:"more-button"},[t("i",{class:D("iconfont icon-xiala")})],-1))]),_:1})}}}),gt=z(vt,[["__scopeId","data-v-a3822701"]]),bt={class:"tabs-box"},ht={class:"tabs-menu"},kt=L({__name:"index",setup(v){const l=Z(),o=Y(),i=xe(),d=ee(),u=P(),m=E(l.fullPath),p=A(()=>i.tabsMenuList),c=A(()=>u.tabsIcon);we(()=>{f(),g()}),X(()=>l.fullPath,()=>{if(l.meta.isFull)return;m.value=l.fullPath;const _={icon:l.meta.icon,title:l.meta.title,path:l.fullPath,name:l.name,close:!l.meta.isAffix,isKeepAlive:l.meta.isKeepAlive};i.addTabs(_)},{immediate:!0});const g=()=>{d.flatMenuListGet.forEach(_=>{if(_.meta.isAffix&&!_.meta.isHide&&!_.meta.isFull){const w={icon:_.meta.icon,title:_.meta.title,path:_.path,name:_.name,close:!_.meta.isAffix,isKeepAlive:_.meta.isKeepAlive};i.addTabs(w)}})},f=()=>{Qe.create(document.querySelector(".el-tabs__nav"),{draggable:".el-tabs__item",animation:300,onEnd({newIndex:_,oldIndex:w}){const b=[...i.tabsMenuList],V=b.splice(w,1)[0];b.splice(_,0,V),i.setTabs(b)}})},C=_=>{const w=_.props.name;o.push(w)},$=_=>{i.removeTabs(_,_==l.fullPath)};return(_,w)=>{const b=a("el-icon"),V=a("el-tab-pane"),h=a("el-tabs");return r(),F("div",bt,[t("div",ht,[e(h,{modelValue:m.value,"onUpdate:modelValue":w[0]||(w[0]=y=>m.value=y),type:"card",onTabClick:C,onTabRemove:$},{default:n(()=>[(r(!0),F(O,null,J(p.value,y=>(r(),x(V,{key:y.path,label:y.title,name:y.path,closable:y.close},{label:n(()=>[y.icon&&c.value?(r(),x(b,{key:0,class:"tabs-icon"},{default:n(()=>[(r(),x(H(y.icon)))]),_:2},1024)):j("",!0),R(" "+M(y.title),1)]),_:2},1032,["label","name","closable"]))),128))]),_:1},8,["modelValue"]),e(gt)])])}}}),wt=z(kt,[["__scopeId","data-v-d2996584"]]),yt={},Ct={class:"footer flx-center"};function xt(v,l){return r(),F("div",Ct,l[0]||(l[0]=[t("a",{href:"https://github.com/HalseySpicy",target:"_blank"}," 2022 © Geeker-Admin By Geeker Technology. ",-1)]))}const $t=z(yt,[["render",xt],["__scopeId","data-v-57c6c1ad"]]),St=L({__name:"index",setup(v){const l=P(),{maximize:o,isCollapse:i,layout:d,tabs:u,footer:m}=de(l),p=$e(),{keepAliveName:c}=de(p),g=E(!0);Pe("refresh",b=>g.value=b);const C=new Map;function $(b,V){if(!b)return;const h=V.fullPath;let y=C.get(h);return y||(y={name:h,render:()=>ge(b)},C.set(h,y)),ge(y)}X(()=>o.value,()=>{const b=document.getElementById("app");o.value?b.classList.add("main-maximize"):b.classList.remove("main-maximize")},{immediate:!0}),X(()=>d.value,()=>{document.body.setAttribute("class",d.value)},{immediate:!0});const _=E(0),w=Se(()=>{_.value=document.body.clientWidth,!i.value&&_.value<1200&&l.setGlobalState("isCollapse",!0),i.value&&_.value>1200&&l.setGlobalState("isCollapse",!1)},100);return window.addEventListener("resize",w,!1),ze(()=>{window.removeEventListener("resize",w)}),(b,V)=>{const h=a("router-view"),y=a("el-main"),U=a("el-footer");return r(),F(O,null,[ne(e(ft,null,null,512),[[le,k(o)]]),ne(e(wt,null,null,512),[[le,k(u)]]),e(y,null,{default:n(()=>[e(h,null,{default:n(({Component:B,route:T})=>[e(Ue,{appear:"",name:"fade-transform",mode:"out-in"},{default:n(()=>[(r(),x(Ge,{include:k(c)},[g.value?(r(),x(H($(B,T)),{key:T.fullPath})):j("",!0)],1032,["include"]))]),_:2},1024)]),_:1})]),_:1}),ne(e(U,null,{default:n(()=>[e($t)]),_:1},512),[[le,k(m)]])],64)}}}),ie=z(St,[["__scopeId","data-v-91a2f566"]]),Vt=L({__name:"CollapseIcon",setup(v){const l=P(),o=()=>l.setGlobalState("isCollapse",!l.isCollapse);return(i,d)=>{const u=a("el-icon");return r(),x(u,{class:"collapse-icon",onClick:o},{default:n(()=>[(r(),x(H(k(l).isCollapse?"expand":"fold")))]),_:1})}}}),Lt=z(Vt,[["__scopeId","data-v-79434c0f"]]),Mt=["onClick"],Ft={class:"breadcrumb-title"},At=L({__name:"Breadcrumb",setup(v){const l=Z(),o=Y(),i=ee(),d=P(),u=A(()=>{let p=i.breadcrumbListGet[l.matched[l.matched.length-1].path]??[];return p[0].path!==_e&&(p=[{path:_e,meta:{icon:"HomeFilled",title:"首页"}},...p]),p}),m=(p,c)=>{c!==u.value.length-1&&o.push(p.path)};return(p,c)=>{const g=a("el-icon"),f=a("el-breadcrumb-item"),C=a("el-breadcrumb");return r(),F("div",{class:D(["breadcrumb-box mask-image",!k(d).breadcrumbIcon&&"no-icon"])},[e(C,{"separator-icon":k(Ie)},{default:n(()=>[e(Be,{name:"breadcrumb"},{default:n(()=>[(r(!0),F(O,null,J(u.value,($,_)=>(r(),x(f,{key:$.path},{default:n(()=>[t("div",{class:D(["el-breadcrumb__inner is-link",{"item-no-icon":!$.meta.icon}]),onClick:w=>m($,_)},[$.meta.icon&&k(d).breadcrumbIcon?(r(),x(g,{key:0,class:"breadcrumb-icon"},{default:n(()=>[(r(),x(H($.meta.icon)))]),_:2},1024)):j("",!0),t("span",Ft,M($.meta.title),1)],10,Mt)]),_:2},1024))),128))]),_:1})]),_:1},8,["separator-icon"])],2)}}}),Tt=z(At,[["__scopeId","data-v-fbbb1a4d"]]),Rt={class:"tool-bar-lf"},Et=L({__name:"ToolBarLeft",setup(v){const l=P();return(o,i)=>(r(),F("div",Rt,[e(Lt,{id:"collapseIcon"}),ne(e(Tt,{id:"breadcrumb"},null,512),[[le,k(l).breadcrumb]])]))}}),fe=z(Et,[["__scopeId","data-v-143c0251"]]),Dt=L({__name:"AssemblySize",setup(v){const l=P(),o=A(()=>l.assemblySize),i=[{label:"默认",value:"default"},{label:"大型",value:"large"},{label:"小型",value:"small"}],d=u=>{o.value!==u&&l.setGlobalState("assemblySize",u)};return(u,m)=>{const p=a("el-dropdown-item"),c=a("el-dropdown-menu"),g=a("el-dropdown");return r(),x(g,{trigger:"click",onCommand:d},{dropdown:n(()=>[e(c,null,{default:n(()=>[(r(),F(O,null,J(i,f=>e(p,{key:f.value,command:f.value,disabled:o.value===f.value},{default:n(()=>[R(M(f.label),1)]),_:2},1032,["command","disabled"])),64))]),_:1})]),default:n(()=>[t("i",{class:D(["iconfont icon-contentright","toolBar-icon"])})]),_:1})}}}),zt=L({__name:"Language",setup(v){const l=Ne.useI18n(),o=P(),i=A(()=>o.language),d=[{label:"简体中文",value:"zh"},{label:"English",value:"en"}],u=m=>{l.locale.value=m,o.setGlobalState("language",m)};return(m,p)=>{const c=a("el-dropdown-item"),g=a("el-dropdown-menu"),f=a("el-dropdown");return r(),x(f,{trigger:"click",onCommand:u},{dropdown:n(()=>[e(g,null,{default:n(()=>[(r(),F(O,null,J(d,C=>e(c,{key:C.value,command:C.value,disabled:i.value===C.value},{default:n(()=>[R(M(C.label),1)]),_:2},1032,["command","disabled"])),64))]),_:1})]),default:n(()=>[t("i",{class:D(["iconfont icon-zhongyingwen","toolBar-icon"])})]),_:1})}}}),Ut={class:"search-menu"},Gt=["onMouseenter"],Pt={class:"menu-lf"},Bt={class:"menu-title"},It=L({__name:"SearchMenu",setup(v){const l=Y(),o=ee(),i=A(()=>o.flatMenuListGet.filter(h=>!h.meta.isHide)),d=E(""),u=h=>{d.value=h.path},m=E(null),p=E(!1),c=E("");X(p,h=>{h?document.addEventListener("keydown",b):document.removeEventListener("keydown",b)});const g=()=>{p.value=!0,me(()=>{setTimeout(()=>{var h;(h=m.value)==null||h.focus()})})},f=E([]),$=Se(()=>{f.value=c.value?i.value.filter(h=>{var y;return(h.path.toLowerCase().includes(c.value.toLowerCase())||h.meta.title.toLowerCase().includes(c.value.toLowerCase()))&&!((y=h.meta)!=null&&y.isHide)}):[],d.value=f.value.length?f.value[0].path:""},300);X(c,$);const _=E(null),w=h=>{const y=f.value.length;if(y===0)return;const B=(f.value.findIndex(T=>T.path===d.value)+h+y)%y;d.value=f.value[B].path,me(()=>{var K;if(!((K=_.value)!=null&&K.firstElementChild))return;const T=_.value.firstElementChild.clientHeight+12||0;_.value.scrollTop=B*T})},b=h=>{h.key==="ArrowUp"?(h.preventDefault(),w(-1)):h.key==="ArrowDown"?(h.preventDefault(),w(1)):h.key==="Enter"&&(h.preventDefault(),V())},V=()=>{var y;const h=f.value.find(U=>U.path===d.value);h&&((y=h.meta)!=null&&y.isLink?window.open(h.meta.isLink,"_blank"):l.push(h.path),c.value="",p.value=!1)};return(h,y)=>{const U=a("el-input"),B=a("el-icon"),T=a("el-empty"),K=a("el-dialog");return r(),F("div",Ut,[t("i",{class:D(["iconfont icon-sousuo","toolBar-icon"]),onClick:g}),e(K,{class:"search-dialog",modelValue:p.value,"onUpdate:modelValue":y[2]||(y[2]=G=>p.value=G),width:600,"show-close":!1,top:"10vh"},{default:n(()=>[e(U,{modelValue:c.value,"onUpdate:modelValue":y[0]||(y[0]=G=>c.value=G),ref_key:"menuInputRef",ref:m,placeholder:"菜单搜索：支持菜单名称、路径",size:"large",clearable:"","prefix-icon":k(qe)},null,8,["modelValue","prefix-icon"]),f.value.length?(r(),F("div",{key:0,class:"menu-list",ref_key:"menuListRef",ref:_},[(r(!0),F(O,null,J(f.value,G=>(r(),F("div",{key:G.path,class:D(["menu-item",{"menu-active":G.path===d.value}]),onMouseenter:s=>u(G),onClick:y[1]||(y[1]=s=>V())},[t("div",Pt,[e(B,{class:"menu-icon"},{default:n(()=>[(r(),x(H(G.meta.icon)))]),_:2},1024),t("span",Bt,M(G.meta.title),1)]),t("i",{class:D(["iconfont icon-huiche","menu-enter"]),onClick:g})],42,Gt))),128))],512)):(r(),x(T,{key:1,class:"mt20 mb20","image-size":100,description:"暂无菜单"}))]),_:1},8,["modelValue"])])}}}),Nt=z(It,[["__scopeId","data-v-5ab44711"]]),qt={class:"theme-setting"},Ot=L({__name:"ThemeSetting",setup(v){const l=()=>{Ve.emit("openThemeDrawer")};return(o,i)=>(r(),F("div",qt,[t("i",{class:D(["iconfont icon-zhuti","toolBar-icon"]),onClick:l})]))}}),Kt=""+new URL("../png/msg01-CVG7czTN.png",import.meta.url).href,Ht=""+new URL("../png/msg02-CtICKvOe.png",import.meta.url).href,Wt=""+new URL("../png/msg03-1Ny4U3yZ.png",import.meta.url).href,jt=""+new URL("../png/msg04-Bz076faf.png",import.meta.url).href,Qt=""+new URL("../png/msg05-BJG0QSg1.png",import.meta.url).href,Yt={class:"message"},Jt=L({__name:"Message",setup(v){const l=E("first");return(o,i)=>{const d=a("el-badge"),u=a("el-tab-pane"),m=a("el-tabs"),p=a("el-popover");return r(),F("div",Yt,[e(p,{placement:"bottom",width:310,trigger:"click"},{reference:n(()=>[e(d,{value:5,class:"item"},{default:n(()=>[t("i",{class:D(["iconfont icon-xiaoxi","toolBar-icon"])})]),_:1})]),default:n(()=>[e(m,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=c=>l.value=c)},{default:n(()=>[e(u,{label:"通知(5)",name:"first"},{default:n(()=>i[1]||(i[1]=[t("div",{class:"message-list"},[t("div",{class:"message-item"},[t("img",{src:Kt,alt:"",class:"message-icon"}),t("div",{class:"message-content"},[t("span",{class:"message-title"},"一键三连 Geeker-Admin 🧡"),t("span",{class:"message-date"},"一分钟前")])]),t("div",{class:"message-item"},[t("img",{src:Ht,alt:"",class:"message-icon"}),t("div",{class:"message-content"},[t("span",{class:"message-title"},"一键三连 Geeker-Admin 💙"),t("span",{class:"message-date"},"一小时前")])]),t("div",{class:"message-item"},[t("img",{src:Wt,alt:"",class:"message-icon"}),t("div",{class:"message-content"},[t("span",{class:"message-title"},"一键三连 Geeker-Admin 💚"),t("span",{class:"message-date"},"半天前")])]),t("div",{class:"message-item"},[t("img",{src:jt,alt:"",class:"message-icon"}),t("div",{class:"message-content"},[t("span",{class:"message-title"},"一键三连 Geeker-Admin 💜"),t("span",{class:"message-date"},"一星期前")])]),t("div",{class:"message-item"},[t("img",{src:Qt,alt:"",class:"message-icon"}),t("div",{class:"message-content"},[t("span",{class:"message-title"},"一键三连 Geeker-Admin 💛"),t("span",{class:"message-date"},"一个月前")])])],-1)])),_:1}),e(u,{label:"消息(0)",name:"second"},{default:n(()=>i[2]||(i[2]=[t("div",{class:"message-empty"},[t("img",{src:be,alt:"notData"}),t("div",null,"暂无消息")],-1)])),_:1}),e(u,{label:"待办(0)",name:"third"},{default:n(()=>i[3]||(i[3]=[t("div",{class:"message-empty"},[t("img",{src:be,alt:"notData"}),t("div",null,"暂无待办")],-1)])),_:1})]),_:1},8,["modelValue"])]),_:1})])}}}),Xt=z(Jt,[["__scopeId","data-v-b58bc489"]]),he=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Q=(()=>{if(typeof document>"u")return!1;const v=he[0],l={};for(const o of he)if((o==null?void 0:o[1])in document){for(const[d,u]of o.entries())l[v[d]]=u;return l}return!1})(),ke={change:Q.fullscreenchange,error:Q.fullscreenerror};let N={request(v=document.documentElement,l){return new Promise((o,i)=>{const d=()=>{N.off("change",d),o()};N.on("change",d);const u=v[Q.requestFullscreen](l);u instanceof Promise&&u.then(d).catch(i)})},exit(){return new Promise((v,l)=>{if(!N.isFullscreen){v();return}const o=()=>{N.off("change",o),v()};N.on("change",o);const i=document[Q.exitFullscreen]();i instanceof Promise&&i.then(o).catch(l)})},toggle(v,l){return N.isFullscreen?N.exit():N.request(v,l)},onchange(v){N.on("change",v)},onerror(v){N.on("error",v)},on(v,l){const o=ke[v];o&&document.addEventListener(o,l,!1)},off(v,l){const o=ke[v];o&&document.removeEventListener(o,l,!1)},raw:Q};Object.defineProperties(N,{isFullscreen:{get:()=>!!document[Q.fullscreenElement]},element:{enumerable:!0,get:()=>document[Q.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[Q.fullscreenEnabled]}});Q||(N={isEnabled:!1});const oe=N,Zt={class:"fullscreen"},en=L({__name:"Fullscreen",setup(v){const l=E(oe.isFullscreen);we(()=>{oe.on("change",()=>{oe.isFullscreen?l.value=!0:l.value=!1})});const o=()=>{oe.isEnabled||ye.warning("当前您的浏览器不支持全屏 ❌"),oe.toggle()};return(i,d)=>(r(),F("div",Zt,[t("i",{class:D([["iconfont",l.value?"icon-suoxiao":"icon-fangda"],"toolBar-icon"]),onClick:o},null,2)]))}}),tn=""+new URL("../gif/avatar-Dcbh69co.gif",import.meta.url).href,nn={class:"dialog-footer"},ln=L({__name:"InfoDialog",setup(v,{expose:l}){const o=E(!1);return l({openDialog:()=>{o.value=!0}}),(d,u)=>{const m=a("el-button"),p=a("el-dialog");return r(),x(p,{modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=c=>o.value=c),title:"个人信息",width:"500px",draggable:""},{footer:n(()=>[t("span",nn,[e(m,{onClick:u[0]||(u[0]=c=>o.value=!1)},{default:n(()=>u[3]||(u[3]=[R("取消")])),_:1}),e(m,{type:"primary",onClick:u[1]||(u[1]=c=>o.value=!1)},{default:n(()=>u[4]||(u[4]=[R("确认")])),_:1})])]),default:n(()=>[u[5]||(u[5]=t("span",null,"This is userInfo",-1))]),_:1},8,["modelValue"])}}}),on={class:"dialog-footer"},sn=L({__name:"PasswordDialog",setup(v,{expose:l}){const o=E(!1);return l({openDialog:()=>{o.value=!0}}),(d,u)=>{const m=a("el-button"),p=a("el-dialog");return r(),x(p,{modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=c=>o.value=c),title:"修改密码",width:"500px",draggable:""},{footer:n(()=>[t("span",on,[e(m,{onClick:u[0]||(u[0]=c=>o.value=!1)},{default:n(()=>u[3]||(u[3]=[R("取消")])),_:1}),e(m,{type:"primary",onClick:u[1]||(u[1]=c=>o.value=!1)},{default:n(()=>u[4]||(u[4]=[R("确认")])),_:1})])]),default:n(()=>[u[5]||(u[5]=t("span",null,"This is Password",-1))]),_:1},8,["modelValue"])}}}),an=L({__name:"Avatar",setup(v){const l=Y(),o=Ce(),i=()=>{Oe.confirm("您是否确认退出登录?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await Ke(),o.setToken(""),l.replace(He),ye.success("退出登录成功！")})},d=E(null),u=E(null),m=p=>{var c,g;p=="infoRef"&&((c=d.value)==null||c.openDialog()),p=="passwordRef"&&((g=u.value)==null||g.openDialog())};return(p,c)=>{const g=a("User"),f=a("el-icon"),C=a("el-dropdown-item"),$=a("Edit"),_=a("SwitchButton"),w=a("el-dropdown-menu"),b=a("el-dropdown");return r(),F(O,null,[e(b,{trigger:"click"},{dropdown:n(()=>[e(w,null,{default:n(()=>[e(C,{onClick:c[0]||(c[0]=V=>m("infoRef"))},{default:n(()=>[e(f,null,{default:n(()=>[e(g)]),_:1}),R(M(p.$t("header.personalData")),1)]),_:1}),e(C,{onClick:c[1]||(c[1]=V=>m("passwordRef"))},{default:n(()=>[e(f,null,{default:n(()=>[e($)]),_:1}),R(M(p.$t("header.changePassword")),1)]),_:1}),e(C,{divided:"",onClick:i},{default:n(()=>[e(f,null,{default:n(()=>[e(_)]),_:1}),R(M(p.$t("header.logout")),1)]),_:1})]),_:1})]),default:n(()=>[c[2]||(c[2]=t("div",{class:"avatar"},[t("img",{src:tn,alt:"avatar"})],-1))]),_:1}),e(ln,{ref_key:"infoRef",ref:d},null,512),e(sn,{ref_key:"passwordRef",ref:u},null,512)],64)}}}),un=z(an,[["__scopeId","data-v-77eb58f7"]]),rn={class:"tool-bar-ri"},cn={class:"header-icon"},dn={class:"username"},mn=L({__name:"ToolBarRight",setup(v){const l=Ce(),o=A(()=>l.userInfo.name);return(i,d)=>(r(),F("div",rn,[t("div",cn,[e(Dt,{id:"assemblySize"}),e(zt,{id:"language"}),e(Nt,{id:"searchMenu"}),e(Ot,{id:"themeSetting"}),e(Xt,{id:"message"}),e(en,{id:"fullscreen"})]),t("span",dn,M(o.value),1),e(un)]))}}),ue=z(mn,[["__scopeId","data-v-dc77bd85"]]),_n={class:"sle"},pn={class:"sle"},re=L({__name:"SubMenu",props:{menuList:{}},setup(v){const l=Y(),o=i=>{if(i.meta.isLink)return window.open(i.meta.isLink,"_blank");l.push(i.path)};return(i,d)=>{const u=a("el-icon"),m=a("SubMenu",!0),p=a("el-sub-menu"),c=a("el-menu-item");return r(!0),F(O,null,J(i.menuList,g=>{var f;return r(),F(O,{key:g.path},[(f=g.children)!=null&&f.length?(r(),x(p,{key:0,index:g.path},{title:n(()=>[g.meta.icon?(r(),x(u,{key:0},{default:n(()=>[(r(),x(H(g.meta.icon)))]),_:2},1024)):j("",!0),t("span",_n,M(g.meta.title),1)]),default:n(()=>[e(m,{"menu-list":g.children},null,8,["menu-list"])]),_:2},1032,["index"])):(r(),x(c,{key:1,index:g.path,onClick:C=>o(g)},{title:n(()=>[t("span",pn,M(g.meta.title),1)]),default:n(()=>[g.meta.icon?(r(),x(u,{key:0},{default:n(()=>[(r(),x(H(g.meta.icon)))]),_:2},1024)):j("",!0)]),_:2},1032,["index","onClick"]))],64)}),128)}}}),fn={class:"logo flx-center"},vn=L({name:"layoutVertical"}),gn=L({...vn,setup(v){const l="Geeker Admin",o=Z(),i=ee(),d=P(),u=A(()=>d.accordion),m=A(()=>d.isCollapse),p=A(()=>i.showMenuListGet),c=A(()=>o.meta.activeMenu?o.meta.activeMenu:o.path);return(g,f)=>{const C=a("el-menu"),$=a("el-scrollbar"),_=a("el-aside"),w=a("el-header"),b=a("el-container");return r(),x(b,{class:"layout"},{default:n(()=>[e(_,null,{default:n(()=>[t("div",{class:"aside-box",style:pe({width:m.value?"65px":"210px"})},[t("div",fn,[f[0]||(f[0]=t("img",{class:"logo-img",src:ae,alt:"logo"},null,-1)),ne(t("span",{class:"logo-text"},M(k(l)),513),[[le,!m.value]])]),e($,null,{default:n(()=>[e(C,{router:!1,"default-active":c.value,collapse:m.value,"unique-opened":u.value,"collapse-transition":!1},{default:n(()=>[e(re,{"menu-list":p.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1})],4)]),_:1}),e(b,null,{default:n(()=>[e(w,null,{default:n(()=>[e(fe),e(ue)]),_:1}),e(ie)]),_:1})]),_:1})}}}),bn=z(gn,[["__scopeId","data-v-617fc15b"]]),hn={class:"header-lf mask-image"},kn={class:"logo flx-center"},wn={class:"logo-text"},yn={class:"header-ri"},Cn=L({name:"layoutClassic"}),xn=L({...Cn,setup(v){const l="Geeker Admin",o=Z(),i=ee(),d=P(),u=A(()=>d.accordion),m=A(()=>d.isCollapse),p=A(()=>i.showMenuListGet),c=A(()=>o.meta.activeMenu?o.meta.activeMenu:o.path);return(g,f)=>{const C=a("el-header"),$=a("el-menu"),_=a("el-scrollbar"),w=a("el-aside"),b=a("el-container");return r(),x(b,{class:"layout"},{default:n(()=>[e(C,null,{default:n(()=>[t("div",hn,[t("div",kn,[f[0]||(f[0]=t("img",{class:"logo-img",src:ae,alt:"logo"},null,-1)),t("span",wn,M(k(l)),1)]),e(fe)]),t("div",yn,[e(ue)])]),_:1}),e(b,{class:"classic-content"},{default:n(()=>[e(w,null,{default:n(()=>[t("div",{class:"aside-box",style:pe({width:m.value?"65px":"210px"})},[e(_,null,{default:n(()=>[e($,{router:!1,"default-active":c.value,collapse:m.value,"unique-opened":u.value,"collapse-transition":!1},{default:n(()=>[e(re,{"menu-list":p.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1})],4)]),_:1}),e(b,{class:"classic-main"},{default:n(()=>[e(ie)]),_:1})]),_:1})]),_:1})}}}),$n=z(xn,[["__scopeId","data-v-5ecd0ead"]]),Sn={class:"logo flx-center"},Vn={class:"logo-text"},Ln=L({name:"layoutTransverse"}),Mn=L({...Ln,setup(v){const l="Geeker Admin",o=Z(),i=Y(),d=ee(),u=A(()=>d.showMenuListGet),m=A(()=>o.meta.activeMenu?o.meta.activeMenu:o.path),p=c=>{if(c.meta.isLink)return window.open(c.meta.isLink,"_blank");i.push(c.path)};return(c,g)=>{const f=a("el-icon"),C=a("el-sub-menu"),$=a("el-menu-item"),_=a("el-menu"),w=a("el-header"),b=a("el-container");return r(),x(b,{class:"layout"},{default:n(()=>[e(w,null,{default:n(()=>[t("div",Sn,[g[0]||(g[0]=t("img",{class:"logo-img",src:ae,alt:"logo"},null,-1)),t("span",Vn,M(k(l)),1)]),e(_,{mode:"horizontal",router:!1,"default-active":m.value},{default:n(()=>[(r(!0),F(O,null,J(u.value,V=>{var h;return r(),F(O,{key:V.path},[(h=V.children)!=null&&h.length?(r(),x(C,{key:V.path,index:V.path+"el-sub-menu"},{title:n(()=>[e(f,null,{default:n(()=>[(r(),x(H(V.meta.icon)))]),_:2},1024),t("span",null,M(V.meta.title),1)]),default:n(()=>[e(re,{"menu-list":V.children},null,8,["menu-list"])]),_:2},1032,["index"])):(r(),x($,{key:V.path+"el-menu-item",index:V.path,onClick:y=>p(V)},{title:n(()=>[t("span",null,M(V.meta.title),1)]),default:n(()=>[e(f,null,{default:n(()=>[(r(),x(H(V.meta.icon)))]),_:2},1024)]),_:2},1032,["index","onClick"]))],64)}),128))]),_:1},8,["default-active"]),e(ue)]),_:1}),e(ie)]),_:1})}}}),Fn=z(Mn,[["__scopeId","data-v-e857d371"]]),An={class:"aside-split"},Tn={class:"split-list"},Rn=["onClick"],En={class:"title"},Dn={class:"logo flx-center"},zn=L({name:"layoutColumns"}),Un=L({...zn,setup(v){const l="Geeker Admin",o=Z(),i=Y(),d=ee(),u=P(),m=A(()=>u.accordion),p=A(()=>u.isCollapse),c=A(()=>d.showMenuListGet),g=A(()=>o.meta.activeMenu?o.meta.activeMenu:o.path),f=E([]),C=E("");X(()=>[c,o],()=>{var w;if(!c.value.length)return;C.value=o.path;const _=c.value.filter(b=>o.path===b.path||`/${o.path.split("/")[1]}`===b.path);if((w=_[0].children)!=null&&w.length)return f.value=_[0].children;f.value=[]},{deep:!0,immediate:!0});const $=_=>{var w;if(C.value=_.path,(w=_.children)!=null&&w.length)return f.value=_.children;f.value=[],i.push(_.path)};return(_,w)=>{const b=a("el-icon"),V=a("el-scrollbar"),h=a("el-menu"),y=a("el-aside"),U=a("el-header"),B=a("el-container");return r(),x(B,{class:"layout"},{default:n(()=>[t("div",An,[w[0]||(w[0]=t("div",{class:"logo flx-center"},[t("img",{class:"logo-img",src:ae,alt:"logo"})],-1)),e(V,null,{default:n(()=>[t("div",Tn,[(r(!0),F(O,null,J(c.value,T=>(r(),F("div",{key:T.path,class:D(["split-item",{"split-active":C.value===T.path||`/${C.value.split("/")[1]}`===T.path}]),onClick:K=>$(T)},[e(b,null,{default:n(()=>[(r(),x(H(T.meta.icon)))]),_:2},1024),t("span",En,M(T.meta.title),1)],10,Rn))),128))])]),_:1})]),e(y,{class:D({"not-aside":!f.value.length}),style:pe({width:p.value?"65px":"210px"})},{default:n(()=>[t("div",Dn,[ne(t("span",{class:"logo-text"},M(p.value?"G":k(l)),513),[[le,f.value.length]])]),e(V,null,{default:n(()=>[e(h,{router:!1,"default-active":g.value,collapse:p.value,"unique-opened":m.value,"collapse-transition":!1},{default:n(()=>[e(re,{"menu-list":f.value},null,8,["menu-list"])]),_:1},8,["default-active","collapse","unique-opened"])]),_:1})]),_:1},8,["class","style"]),e(B,null,{default:n(()=>[e(U,null,{default:n(()=>[e(fe),e(ue)]),_:1}),e(ie)]),_:1})]),_:1})}}}),Gn=z(Un,[["__scopeId","data-v-50a8bf22"]]),Pn=L({name:"layout"}),Bn=L({...Pn,setup(v){const l={vertical:bn,classic:$n,transverse:Fn,columns:Gn},o=P(),i=A(()=>o.isDark),d=A(()=>o.layout),u=A(()=>o.watermark),m=We({color:"rgba(0, 0, 0, .15)"});return X(i,()=>m.color=i.value?"rgba(255, 255, 255, .15)":"rgba(0, 0, 0, .15)",{immediate:!0}),(p,c)=>{const g=a("el-watermark");return r(),x(g,{id:"watermark",font:m,content:u.value?["Geeker Admin","Happy Working"]:""},{default:n(()=>[(r(),x(H(l[d.value]))),e(_t)]),_:1},8,["font","content"])}}}),Wn=z(Bn,[["__scopeId","data-v-73e931e4"]]);export{Wn as default};
