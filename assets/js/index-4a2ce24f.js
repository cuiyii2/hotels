import{g as D,a as U,b as P,u as m,c as q,e as I,f as R,d as $}from"./user-94907be7.js";import{u as V,I as B}from"./index-7aebd086.js";import{P as E}from"./index-8a5452c1.js";import{_ as H}from"./RoleApplyDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-96538a3e.js";import{d as v,h as b,l as u,r as i,o as Y,j as A,f as a,w as s,b as o,t as f,u as g,E as y,x as F,F as M}from"./main-5a92e9dd.js";import"./mplugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_script_setup_true_lang-e4bf2f9f.js";const O={class:"table-box"},z=v({name:"apply"}),ae=v({...z,setup(J){const n=b(),w=u({type:1}),_=e=>({list:e.list,total:e.total,pageNum:e.pageNum,pageSize:e.pageSize}),h=e=>{let t=JSON.parse(JSON.stringify(e));return t.username&&(t.username="custom-"+t.username),D()},{BUTTONS:k}=V(),x=[{type:"selection",fixed:"left",width:80},{type:"index",label:"#",width:80},{prop:"id",label:"用户编号"},{prop:"username",label:"用户名"},{prop:"gender",label:"性别",enum:U,search:{el:"select",props:{filterable:!0}},fieldNames:{label:"genderLabel",value:"genderValue"}},{prop:"user.detail.age",label:"年龄",search:{el:"input"}},{prop:"idCard",label:"身份证号",search:{el:"input"}},{prop:"email",label:"邮箱"},{prop:"address",label:"居住地址"},{prop:"status",label:"用户状态",enum:P,search:{el:"tree-select",props:{filterable:!0}},fieldNames:{label:"userLabel",value:"userStatus"},render:e=>a(M,null,[k.value.status?a(i("el-switch"),{"model-value":e.row.status,"active-text":e.row.status?"启用":"禁用","active-value":1,"inactive-value":0,onClick:()=>T(e.row)},null):a(i("el-tag"),{type:e.row.status?"success":"danger"},{default:()=>[e.row.status?"启用":"禁用"]})])},{prop:"createTime",label:"创建时间",headerRender:e=>a(i("el-button"),{type:"primary",onClick:()=>{y.success("我是通过 tsx 语法渲染的表头")}},{default:()=>[e.label]}),width:180,search:{el:"date-picker",span:2,props:{type:"datetimerange",valueFormat:"YYYY-MM-DD HH:mm:ss"},defaultValue:["2022-11-12 11:35:00","2022-12-12 11:35:00"]}},{prop:"operation",label:"操作",fixed:"right",width:100}],C=async e=>{await m($,{id:e},"删除所选用户信息"),n.value.clearSelection(),n.value.getTableList()},T=async e=>{await m(q,{id:e.id,status:e.status==1?0:1},`切换【${e.username}】用户状态`),n.value.getTableList()},N=u({userCode:"",userName:""}),S=u([{xType:"Input",label:"角色编号",prop:"userCode",placeholder:"请填写角色编号",clearable:!0,span:20},{xType:"Input",label:"角色名",prop:"userName",placeholder:"请填写角色名",clearable:!0,span:20},{xType:"Input",label:"备注",type:"textarea",prop:"content",placeholder:"请填写备注",clearable:!0,span:20},{slotName:"Actions"}]),L=u({userName:[{required:!0,message:"请输入名字",trigger:"blur"},{min:2,max:5,message:"名字长度在2-5个字",trigger:"blur"}],userCode:[{required:!0,message:"请填写用户编号"}],name:[{required:!0,message:"请填写用户名"}],kame:[{required:!0,message:"请填写姓名"}],org:[{required:!0,message:"请填写所属机构"}]}),c=b(null),d=(e,t={})=>{var r;const l={title:e,isView:e==="查看",rowData:{...t},api:e==="新增"?I:e==="编辑"?R:void 0,getTableList:n.value.getTableList,formData:N,formColumns:S,formRules:L};(r=c.value)==null||r.acceptParams(l)};return(e,t)=>{const l=i("el-button");return Y(),A("div",O,[a(E,{ref_key:"proTable",ref:n,title:"用户列表",columns:x,requestApi:h,initParam:w,dataCallback:_},{tableHeader:s(r=>[a(l,{type:"primary",onClick:t[0]||(t[0]=p=>d("审核"))},{default:s(()=>[o("审核")]),_:1}),a(l,{type:"danger",plain:"",onClick:p=>C(r.selectedListIds)},{default:s(()=>[o(" 删除 ")]),_:2},1032,["onClick"])]),expand:s(r=>[o(f(r.row),1)]),createTime:s(r=>[a(l,{type:"primary",link:"",onClick:t[1]||(t[1]=p=>g(y).success("我是通过作用域插槽渲染的内容"))},{default:s(()=>[o(f(r.row.createTime),1)]),_:2},1024)]),operation:s(r=>[a(l,{type:"primary",link:"",icon:g(F),onClick:p=>d("查看",r.row)},{default:s(()=>[o("详细")]),_:2},1032,["icon","onClick"])]),_:1},8,["initParam"]),a(H,{ref_key:"drawerRef",ref:c},null,512),a(B,{ref:"dialogRef"},null,512)])}}});export{ae as default};
