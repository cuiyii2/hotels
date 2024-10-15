import{P as q}from"./index-8a5452c1.js";import{_ as F}from"./index.vue_vue_type_script_setup_true_name_dialogRes_lang-8c858457.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_name_dialogRes_lang-fd36c8ac.js";import{d as T,h as m,l as t,n as V,r as x,o as J,j as L,f as a,w as o,b as s,t as b,a as B,u as f,E as j}from"./main-5a92e9dd.js";import{a as z,b as M}from"./order-687b9245.js";import{_}from"./index.vue_vue_type_script_setup_true_lang-e4bf2f9f.js";import{g as U}from"./businessDic-7728b785.js";import{b as w}from"./serviceDict-82a9115d.js";import"./_plugin-vue_export-helper-c27b6911.js";const W={class:"table-box"},G=T({name:"orgs-apply-list"}),te=T({...G,setup(H){const g=m(),C=t({type:1}),h=l=>({list:l.records,total:l.total,pageNum:l.pageNum,pageSize:l.pageSize}),k=l=>{let e=JSON.parse(JSON.stringify(l));return e.username&&(e.username="custom-"+e.username),z()},I=[{prop:"orderId",label:"机构编码",width:"120px",search:{order:1,el:"input"}},{prop:"orderId",label:"机构名称",width:"120px",search:{order:1,el:"input"}},{prop:"ordergroup",label:"机构类型",width:"120px",search:{el:"input"}},{prop:"orderType",label:"机构标识",width:"110px"},{prop:"org",label:"用户数",labelWidth:90,search:{el:"input"},width:"100px"},{prop:"symbol",label:"营业执照",width:"100px"},{prop:"symbol",label:"地址",width:"100px"},{prop:"symbol",label:"联系方式",width:"100px"},{prop:"applyid",label:"机构状态",width:"100px"},{prop:"operation",label:"操作",fixed:"right",width:150}],p=t({tradeDay:V(),orderId:"",org:"",type:"",price:0,total:0,volume:0,action:0,content:[],tradeType:""});let N=t([{xType:"Input",label:"机构编码",prop:"orderId",placeholder:"请填写",clearable:!0,span:12},{xType:"Input",label:"机构名称",prop:"orderId",placeholder:"请填写",clearable:!0,span:12},{xType:"Select",label:"机构类型",prop:"dealerAid",placeholder:"请填写买方经纪商",clearable:!0,span:12,options:w},{xType:"Checkbox",label:"机构标识",prop:"content",clearable:!0,span:12,options:[{value:"0",label:"钓鱼放弃会员"},{value:"1",label:"连续"}]},{xType:"Input",label:"用户数",prop:"orderId",placeholder:"请填写",clearable:!0,span:12},{xType:"Input",label:"营业执照号",prop:"orderId",placeholder:"请填写",clearable:!0,span:12},{xType:"Input",label:"地址",prop:"orderId",placeholder:"请填写",clearable:!0,span:12},{xType:"Input",label:"联系方式",prop:"orderId",placeholder:"请填写",clearable:!0,span:12},{xType:"Select",label:"机构状态",prop:"dealerAid2",placeholder:"请填写",clearable:!0,span:12,options:w},{slotName:"Actions"}]);const y=t({symbol:[{required:!0,message:"请输入名字",trigger:"blur"}],price:[{required:!0,message:"请填写"}],volume:[{required:!0,message:"请选择"}],tradeDay:[{required:!0,message:"请填写"}]}),n=m(null),v=async()=>{var e;if(!n.value)return;await((e=n.value)==null?void 0:e.formRef).validate(async(c,u)=>{if(!c)return;let r=JSON.parse(JSON.stringify(p));(await M(r)).code==0&&(j.success("添加成功！"),g.value.getTableList(),i.value=!1)})},D=async()=>{},R=t({org1:[],org2:1});let $=t([{xType:"Checkbox",label:"机构标识",prop:"org1",clearable:!0,span:24,options:[{value:"0",label:"钓鱼放弃会员"},{value:"1",label:"连续"}]},{xType:"Radio",label:"机构状态",prop:"org2",span:24,options:[{value:1,label:"正常"},{value:2,label:"锁定"}]},{slotName:"Actions"}]);const i=m(!1),d=m(!1),S=()=>{i.value=!1},A=()=>{d.value=!1},E=l=>{i.value=!0},P=l=>{l!=1&&Object.assign(p,l),d.value=!0};return(l,e)=>{const c=x("el-tag"),u=x("el-button");return J(),L("div",W,[a(q,{ref_key:"proTable",ref:g,title:"用户列表",columns:I,requestApi:k,initParam:C,dataCallback:h},{expand:o(r=>[s(b(r.row),1)]),action:o(r=>[B("span",null,b(f(U)(r.row.action)),1)]),orderType:o(r=>[a(c,null,{default:o(()=>[s(b(r.row.orderType==1?"爬树普通上山":"-"),1)]),_:2},1024)]),operation:o(()=>[a(u,{link:"",onClick:e[0]||(e[0]=r=>E(1)),type:"primary"},{default:o(()=>[s("复核")]),_:1}),a(u,{link:"",onClick:e[1]||(e[1]=r=>D()),type:"danger"},{default:o(()=>[s("撤销")]),_:1}),a(u,{link:"",onClick:e[2]||(e[2]=r=>P(1)),type:"primary"},{default:o(()=>[s("详情")]),_:1})]),_:1},8,["initParam"]),a(O,{visible:i.value,confirmName:"保存",title:"复核",onClose:e[3]||(e[3]=r=>S()),onConfirm:e[4]||(e[4]=r=>v()),width:"480px"},{default:o(()=>[a(_,{formData:R,formColumns:f($),formRules:y,"label-width":"120px",ref_key:"baseForm",ref:n},null,8,["formData","formColumns","formRules"])]),_:1},8,["visible"]),a(F,{visible:d.value,confirmName:"保存",title:"详情",onClose:e[5]||(e[5]=r=>A()),onConfirm:e[6]||(e[6]=r=>v()),width:"60%"},{default:o(()=>[a(_,{formData:p,formColumns:f(N),formRules:y,"label-width":"120px",ref_key:"baseForm",ref:n},null,8,["formData","formColumns","formRules"])]),_:1},8,["visible"])])}}});export{te as default};
