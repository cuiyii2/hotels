import{g as o}from"./user-BlmrqHzu.js";import{T as i}from"./index-BsLe1Vwx.js";import{d as _,P as u,r as p,o as v,c as F,b as t,u as m,a as f,w as l,e as s,N as b}from"./index-CAiYY8wA.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"content-box"},q={class:"descriptions-box card"},C=_({name:"treeFilter"}),N=_({...C,setup(T){const n=u({departmentId:"1"}),c=r=>{b.success(`你选择了 id 为 ${r} 的数据🤔`),n.departmentId=r},d=u({departmentId:["11"]}),x=r=>{b.success(`你选择了 id 为 ${JSON.stringify(r)} 的数据🤔`),d.departmentId=r};return(r,e)=>{const a=p("el-descriptions-item"),g=p("el-descriptions");return v(),F("div",V,[t(i,{label:"name",title:"部门列表(单选)","request-api":m(o),"default-value":n.departmentId,onChange:c},null,8,["request-api","default-value"]),t(i,{title:"部门列表(多选)",multiple:"",label:"name","request-api":m(o),"default-value":d.departmentId,onChange:x},null,8,["request-api","default-value"]),f("div",q,[e[7]||(e[7]=f("span",{class:"text"}," 树形筛选器 🍓🍇🍈🍉",-1)),t(g,{title:"配置项 📚",column:1,border:""},{default:l(()=>[t(a,{label:"requestApi"},{default:l(()=>e[0]||(e[0]=[s(" 请求分类数据的 api ")])),_:1}),t(a,{label:"data"},{default:l(()=>e[1]||(e[1]=[s(" 分类数据，如果有分类数据，则不会执行 api 请求 ")])),_:1}),t(a,{label:"title"},{default:l(()=>e[2]||(e[2]=[s(" treeFilter 标题 ")])),_:1}),t(a,{label:"id"},{default:l(()=>e[3]||(e[3]=[s(" 选择的id，默认为 “id” ")])),_:1}),t(a,{label:"label"},{default:l(()=>e[4]||(e[4]=[s(" 显示的label，默认为 “label” ")])),_:1}),t(a,{label:"multiple"},{default:l(()=>e[5]||(e[5]=[s(" 是否为多选，默认为 false ")])),_:1}),t(a,{label:"defaultValue"},{default:l(()=>e[6]||(e[6]=[s(" 默认选中的值 ")])),_:1})]),_:1})])])}}}),$=I(N,[["__scopeId","data-v-b2b5dc6d"]]);export{$ as default};
