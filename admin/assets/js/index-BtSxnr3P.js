import{d as w,B as L,h as m,P as b,r as h,o as B,c as N,b as r,u as s,a as P,w as l,_ as I,e as i,i as A,a1 as D,aQ as E,$ as F,E as R,a0 as V,N as q,aw as H}from"./index-ChWs1m5F.js";import{u as g}from"./useHandleData-CevAIN5e.js";import{I as M,u as S}from"./index-2PLaLq20.js";import{_ as G}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-sdbFgNhQ.js";import{T as Q}from"./index-DGHGFGs8.js";import{_ as W}from"./UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-HPW5Atea.js";import{a as j,b as z,g as J,c as K,d as O,r as X,e as _,B as Y,h as Z,i as ee}from"./user-CuOV01nt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./sortable.esm-CGHLlJBv.js";import"./Imgs-Ch6kikj6.js";import"./upload-CtNtBD5D.js";const ae={class:"main-box"},te={class:"table-box"},re=w({name:"useTreeFilter"}),ge=w({...re,setup(le){const y=L(),v=()=>{y.push("/proTable/useTreeFilter/detail/123456?params=detail-page")},n=m(),d=b({departmentId:"1"}),k=a=>{q.success("请注意查看请求参数变化 🤔"),n.value.pageable.pageNum=1,d.departmentId=a},C=b([{type:"index",label:"#",width:80},{prop:"username",label:"用户姓名",width:120,search:{el:"input"}},{prop:"gender",label:"性别",width:120,sortable:!0,enum:j,search:{el:"select"},fieldNames:{label:"genderLabel",value:"genderValue"}},{prop:"idCard",label:"身份证号"},{prop:"email",label:"邮箱"},{prop:"address",label:"居住地址"},{prop:"status",label:"用户状态",width:120,sortable:!0,tag:!0,enum:z,search:{el:"select"},fieldNames:{label:"userLabel",value:"userStatus"}},{prop:"createTime",label:"创建时间",width:180},{prop:"operation",label:"操作",width:330,fixed:"right"}]),T=async a=>{var e;await g(O,{id:[a.id]},`删除【${a.username}】用户`),(e=n.value)==null||e.getTableList()},x=async a=>{var e;await g(X,{id:a.id},`重置【${a.username}】用户密码`),(e=n.value)==null||e.getTableList()},U=async()=>{H.confirm("确认导出用户数据?","温馨提示",{type:"warning"}).then(()=>{var a;return S(_,"用户列表",(a=n.value)==null?void 0:a.searchParam)})},c=m(null),$=()=>{var e,t;const a={title:"用户",tempApi:_,importApi:Y,getTableList:(e=n.value)==null?void 0:e.getTableList};(t=c.value)==null||t.acceptParams(a)},f=m(null),u=(a,e={})=>{var o,p;const t={title:a,isView:a==="查看",row:{...e},api:a==="新增"?Z:a==="编辑"?ee:void 0,getTableList:(o=n.value)==null?void 0:o.getTableList};(p=f.value)==null||p.acceptParams(t)};return(a,e)=>{const t=h("el-button");return B(),N("div",ae,[r(Q,{label:"name",title:"部门列表(单选)","request-api":s(J),"default-value":d.departmentId,onChange:k},null,8,["request-api","default-value"]),P("div",te,[r(G,{ref_key:"proTable",ref:n,columns:C,"request-api":s(K),"init-param":d,"search-col":{xs:1,sm:1,md:2,lg:3,xl:3}},{tableHeader:l(()=>[r(t,{type:"primary",icon:s(I),onClick:e[0]||(e[0]=o=>u("新增"))},{default:l(()=>e[1]||(e[1]=[i("新增用户")])),_:1},8,["icon"]),r(t,{type:"primary",icon:s(A),plain:"",onClick:$},{default:l(()=>e[2]||(e[2]=[i("批量添加用户")])),_:1},8,["icon"]),r(t,{type:"primary",icon:s(D),plain:"",onClick:U},{default:l(()=>e[3]||(e[3]=[i("导出用户数据")])),_:1},8,["icon"]),r(t,{type:"primary",plain:"",onClick:v},{default:l(()=>e[4]||(e[4]=[i("To 平级详情页面")])),_:1})]),operation:l(o=>[r(t,{type:"primary",link:"",icon:s(E),onClick:p=>u("查看",o.row)},{default:l(()=>e[5]||(e[5]=[i("查看")])),_:2},1032,["icon","onClick"]),r(t,{type:"primary",link:"",icon:s(F),onClick:p=>u("编辑",o.row)},{default:l(()=>e[6]||(e[6]=[i("编辑")])),_:2},1032,["icon","onClick"]),r(t,{type:"primary",link:"",icon:s(R),onClick:p=>x(o.row)},{default:l(()=>e[7]||(e[7]=[i("重置密码")])),_:2},1032,["icon","onClick"]),r(t,{type:"primary",link:"",icon:s(V),onClick:p=>T(o.row)},{default:l(()=>e[8]||(e[8]=[i("删除")])),_:2},1032,["icon","onClick"])]),_:1},8,["columns","request-api","init-param"]),r(W,{ref_key:"drawerRef",ref:f},null,512),r(M,{ref_key:"dialogRef",ref:c},null,512)])])}}});export{ge as default};
