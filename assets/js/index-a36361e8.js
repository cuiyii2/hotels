import{P as u}from"./index-8a5452c1.js";import{d as l,h as b,l as _,r as h,o as f,j as x,f as t,w as a,b as o,t as y}from"./main-5a92e9dd.js";import{o as g}from"./order-687b9245.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={class:"table-box"},T=l({name:"user-list"}),v=l({...T,setup(k){const p=b(),s=_({type:1}),n=e=>({list:e.records,total:e.total,pageNum:e.pageNum,pageSize:e.pageSize}),i=e=>{let r=JSON.parse(JSON.stringify(e));return r.username&&(r.username="custom-"+r.username),g()},c=[{prop:"ordergroup",label:"爱好单编号"},{prop:"ordergroup",label:"确认单编号",search:{el:"input"}},{prop:"orderId",label:"匹配/钓鱼时间",width:"180px",search:{el:"date-picker",props:{type:"daterange",valueFormat:"YYYY-MM-DD"}}},{prop:"applyid",label:"协议号",width:"100px",search:{el:"select"}},{prop:"ordergroup",label:"交易方向"},{prop:"dealeraid2",label:"上山价格"},{prop:"orderType",label:"上山数量",width:"100px"},{prop:"orderType",label:"名义本金",width:"100px"},{prop:"orderType",label:"会员"},{prop:"orderType",label:"猎头公司",width:"100px",search:{el:"select"}},{prop:"orderType",label:"状态",width:"100px",search:{el:"select"}},{prop:"orderType",label:"类型",width:"100px",search:{el:"select"}}];return(e,r)=>{const d=h("el-button");return f(),x("div",w,[t(u,{ref_key:"proTable",ref:p,title:"确认单查询和下载",columns:c,requestApi:i,initParam:s,dataCallback:n},{tableHeader:a(()=>[t(d,null,{default:a(()=>[o("下载")]),_:1})]),expand:a(m=>[o(y(m.row),1)]),_:1},8,["initParam"])])}}});export{v as default};
