import{d as c,r as s,o as p,c as _,w as t,a as g,f as r,b as i,t as d,g as N}from"./main-5a92e9dd.js";const b={class:"dialog-footer"},v=c({name:"dialogRes"}),k=c({...v,props:{visible:{type:Boolean,default:!1},title:{default:"提示"},width:{default:"300px"},center:{type:Boolean,default:!1},cancelName:{default:"取消"},confirmName:{default:"确定"},confirmName2:{default:""}},emits:["confirm","close"],setup(w,{emit:l}){const f=()=>{l("confirm")},a=()=>{l("close")};return(e,o)=>{const n=s("el-button"),m=s("el-dialog");return p(),_(m,{"model-value":e.visible,center:e.center,title:e.title,"close-on-click-modal":!0,"destroy-on-close":!0,width:e.width,"before-close":a,draggable:""},{footer:t(()=>[g("span",b,[r(n,{onClick:o[0]||(o[0]=u=>a())},{default:t(()=>[i(d(e.cancelName),1)]),_:1}),r(n,{type:"primary",onClick:o[1]||(o[1]=u=>f())},{default:t(()=>[i(d(e.confirmName),1)]),_:1})])]),default:t(()=>[N(e.$slots,"default")]),_:3},8,["model-value","center","title","width"])}}});export{k as _};
