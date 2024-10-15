import{P as D,t as A}from"./order-3c724f3a.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_name_dialogRes_lang-44d68dcf.js";import{d as g,h as o,i,G as $,r as z,o as V,j,f as n,w as t,b as d,t as c,a as v,u as B,E as y}from"./main-59e74578.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-ba6abaa3.js";import"./_plugin-vue_export-helper-c27b6911.js";function J(u){return u==1?"买入":u==0?"卖出":"--"}const L={class:"table-box"},R=g({name:"orgs"}),Y=g({...R,setup(u){const b=o(),h=i({type:1}),w=e=>({list:e.records,total:e.total,pageNum:e.pageNum,pageSize:e.pageSize}),_=async e=>{let l=JSON.parse(JSON.stringify(e));return l.username&&(l.username="custom-"+l.username),A()},T=[{prop:"orderId",label:"爱好单编号",width:180,search:{el:"input"}},{prop:"orderId",label:"确认单编号",width:180},{prop:"createTime",label:"匹配时间",width:150},{prop:"orderId",label:"产品号",width:180,search:{el:"select"}},{prop:"symbol",label:"协议号",width:180,search:{el:"select"}},{prop:"num",label:"交易方向",width:100},{prop:"num",label:"上山价格",width:100},{prop:"total",label:"上山数量",width:100},{prop:"total",label:"名义本金",width:100},{prop:"org",label:"会员",width:100},{prop:"org",label:"猎头公司",width:100,search:{el:"select"}},{prop:"clearAid",label:"操作人",width:100,search:{el:"select"}},{prop:"clearAid",label:"状态",width:100,search:{el:"select"}},{prop:"operation",label:"操作",fixed:"right",width:100}],m=i({userCode:"12dsds",userName:"1222",price:15400,reservePrice:15600,size:1,action:1,orderType:0,symbol:5991,dealeraid:1}),x=$(),r=o(!0);x.userInfo.username=="test5"&&(r.value=!1);const s=i([{xType:"Input",label:"确认单编号",prop:"userCode",placeholder:"请填写确认单编号",clearable:!0,span:12,disabled:r.value},{xType:"DatePicker",label:"匹配时间",prop:"userCode",placeholder:"请填写匹配时间",clearable:!0,span:12,disabled:!0},{xType:"Select",label:"买方",prop:"买方",placeholder:"请填写买方",clearable:!0,span:12,disabled:r.value,options:[{value:1,label:"上海方正投资"},{value:2,label:"上海大光投资"}]},{xType:"Select",label:"卖方",prop:"卖方",placeholder:"请填写卖方",clearable:!0,span:12,disabled:r.value,options:[{value:1,label:"上海方正投资"},{value:2,label:"上海大光投资"}]},{xType:"Select",label:"买方会员",prop:"买方会员",placeholder:"请填写买方会员",clearable:!0,disabled:r.value,span:12,options:[]},{xType:"Select",label:"卖方会员",prop:"卖方会员",placeholder:"请填写对方会员",clearable:!0,span:12,disabled:r.value,options:[]},{xType:"Select",label:"协议号",prop:"协议号",placeholder:"",clearable:!0,span:12,options:[{value:"0",label:"爬树普通上山"},{value:"1",label:"线上上山"}],disabled:r.value},{xType:"Input",label:"上山价格",prop:"上山价格",placeholder:"请填写上山价格",type:"number",disabled:r.value,span:12},{xType:"Input",label:"上山数量",prop:"上山数量",placeholder:"请填写上山数量",type:"number",disabled:r.value,span:12},{xType:"Input",label:"名义本金(元)",prop:"名义本金",type:"number",placeholder:"请填写名义本金",disabled:!0,span:12},{slotName:"Actions"}]),C=i({userName:[{required:!0,message:"请输入名字",trigger:"blur"}],userCode:[{required:!0,message:"请填写用户编号"}],action:[{required:!0,message:"请选择交易方向"}],price:[{required:!0,message:"请填写交易价格"}],size:[{required:!0,message:"请填写交易数量"}],reservePrice:[{required:!0,message:"请填写名义本金"}]}),N=o(null),S=async()=>{y({message:"已确认",type:"success"}),p.value=!1},k=()=>{y({message:"已拒绝",type:"success"}),p.value=!1},p=o(!1),I=()=>{p.value=!1};o([]);let P=o([]);const q=e=>{e.爱好单编号=="CJYX20230503A001"?(s[8].disabled=!1,s[10].disabled=!1,Object.assign(s,{})):(s[8].disabled=!0,s[10].disabled=!0),Object.assign(m,e),P.value=e,p.value=!0};return(e,l)=>{const f=z("el-button");return V(),j("div",L,[n(D,{ref_key:"proTable",ref:b,title:"用户列表",columns:T,requestApi:_,initParam:h,dataCallback:w,rowKey:"orderId"},{tableHeader:t(()=>[n(f,null,{default:t(()=>[d("下载")]),_:1})]),expand:t(a=>[d(c(a.row),1)]),action:t(a=>[v("span",null,c(B(J)(a.row.action)),1)]),tradeType:t(a=>[v("span",null,c(a.row.tradeType==1?"爬树上山":a.row.tradeType==3?"钓鱼业务":"-"),1)]),operation:t(a=>[n(f,{type:"primary",onClick:F=>q(a.row),text:""},{default:t(()=>[d("确认/退回")]),_:2},1032,["onClick"])]),_:1},8,["initParam"]),n(O,{visible:p.value,confirmName:"同意",confirmName2:"拒绝",title:"业务确认",onClose:l[0]||(l[0]=a=>I()),onConfirm:l[1]||(l[1]=a=>S()),onConfirm2:l[2]||(l[2]=a=>k()),width:"50%"},{default:t(()=>[n(E,{formData:m,formColumns:s,formRules:C,"label-width":"120px",ref_key:"baseForm",ref:N},null,8,["formData","formColumns","formRules"])]),_:1},8,["visible"])])}}});export{Y as default};
