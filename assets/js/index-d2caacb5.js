import{P as i}from"./index-8a5452c1.js";import{d as a,h as c,l as d,o as m,j as u,f as b,w as f,b as _,t as y}from"./main-5a92e9dd.js";import{o as T}from"./order-687b9245.js";import"./mplugin-vue_export-helper-c27b6911.js";const g={class:"table-box"},h=a({name:"user-list"}),S=a({...h,setup(x){const t=c(),o=d({type:1}),p=e=>({list:e.records,total:e.total,pageNum:e.pageNum,pageSize:e.pageSize}),l=e=>{let r=JSON.parse(JSON.stringify(e));return r.username&&(r.username="custom-"+r.username),T()},s=[{prop:"orderId",label:"开始/结束日期",width:"180px",type:"none",search:{el:"date-picker",props:{type:"daterange",valueFormat:"YYYY-MM-DD"}}},{prop:"applyid",label:"用户名",width:"100px",search:{el:"select"}},{prop:"ordergroup",label:"用户姓名"},{prop:"dealeraid2",label:"用户类型"},{prop:"orderType",label:"事件发生日期"},{prop:"orderType",label:"事件发生时间"},{prop:"orderType",label:"事件终止日期"},{prop:"orderType",label:"事件终止时间"},{prop:"orderType",label:"操作名称",search:{el:"select"}}];return(e,r)=>(m(),u("div",g,[b(i,{ref_key:"proTable",ref:t,title:"消息中心管理",columns:s,requestApi:l,initParam:o,dataCallback:p},{expand:f(n=>[_(y(n.row),1)]),_:1},8,["initParam"])]))}});export{S as default};
