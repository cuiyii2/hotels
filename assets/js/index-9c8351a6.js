import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-e4bf2f9f.js";import{p as T}from"./serviceDict-82a9115d.js";import{d as V,h as b,l as v,z as J,r as a,o as n,j as N,a as i,f as c,w as r,F as j,J as q,u as f,c as y,b as k,e as C,D as z,I as A}from"./main-5a92e9dd.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const U=d=>(z("data-v-ab2989fc"),d=d(),A(),d),$={class:"table-box"},G={class:"card"},H={class:"header-bar"},P={class:"left"},Q=U(()=>i("span",null,"机构类型",-1)),W={class:"right"},X=V({name:"orgs-li-list"}),Y=V({...X,setup(d){const g=b("");let u=b(!0);const E=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"}],x=[{id:"setting",label:"系统设置",children:[{id:"menu",label:"菜单管理"}]}],_=v({permissionsMenu:x});let l=v([{xType:"Tree",label:"",prop:"permissionsMenu",data:T,style:"display:block;float:left","show-checkbox":!0,"node-key":"id","default-expand-all":!0,defaultCheckedKeys:["log"],check:I,isCancel:!1,disabled:!0,float:"left",span:24},{slotName:"Actions"}]);const F=v({symbol:[{required:!0,message:"请输入名字",trigger:"blur"}]});function I(o,e){_.permissionsMenu=[...x,o]}const m=b(null),O=async()=>{var e;if(!m.value)return;await((e=m.value)==null?void 0:e.formRef).validate(async(h,w)=>{if(!h)return;let s=JSON.parse(JSON.stringify(_))})},S=()=>{u.value=!0,l[0]["show-checkbox"]=!0};let p=[];const R=function(o){o.map(e=>{e.children?R(e.children):p.push(e.id)})};R(_.permissionsMenu);function M(){l[0].isCancel=!l[0].isCancel,l[0].defaultCheckedKeys=p}return J(()=>{l[0].isCancel=!l[0].isCancel,l[0].defaultCheckedKeys=p}),(o,e)=>{const h=a("el-option"),w=a("el-select"),s=a("el-button"),B=a("el-divider"),D=a("el-scrollbar");return n(),N("div",$,[i("div",G,[i("div",H,[i("div",P,[Q,c(w,{modelValue:g.value,"onUpdate:modelValue":e[0]||(e[0]=t=>g.value=t),clearable:"",placeholder:"Select"},{default:r(()=>[(n(),N(j,null,q(E,t=>c(h,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),i("div",W,[f(u)?(n(),y(s,{key:0,onClick:M},{default:r(()=>[k("取消")]),_:1})):C("",!0),f(u)?(n(),y(s,{key:1,type:"primary",onClick:O},{default:r(()=>[k("保存")]),_:1})):C("",!0),f(u)?C("",!0):(n(),y(s,{key:2,type:"primary",onClick:S},{default:r(()=>[k("设置")]),_:1}))])]),c(B),c(D,{height:"400"},{default:r(()=>[c(K,{formData:_,formColumns:f(l),formRules:F,"label-width":"0px",ref_key:"baseForm",ref:m},null,8,["formData","formColumns","formRules"])]),_:1})])])}}});const se=L(Y,[["__scopeId","data-v-ab2989fc"]]);export{se as default};
