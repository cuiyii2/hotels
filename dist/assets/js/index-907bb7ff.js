import{d as i,r as m,a as p,o as u,c as d,b as c,j as t,w as a,F as b,z as B,l as C,D as l,u as r,B as s,ag as v,_ as x}from"./index-ab608e36.js";const h={class:"card content-box"},y=i({name:"proForm"}),w=i({...y,setup(D){let o=m({});const n=m({form:{inline:!1,labelPosition:"right",labelWidth:"80px",size:"default",disabled:!1,labelSuffix:" :"},columns:[{formItem:{label:"\u7528\u6237\u540D",prop:"username",labelWidth:"80px",required:!0},attrs:{typeName:"input",clearable:!0,placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",disabled:!0}},{formItem:{label:"\u5BC6\u7801",prop:"password",class:"data"},attrs:{typeName:"input",clearable:!0,autofocus:!0,placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password"}},{formItem:{label:"\u90AE\u7BB1",prop:"email"},attrs:{typeName:"input",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",clearable:!0,style:"width:500px"}}]});return(_,g)=>{const f=p("el-alert"),F=p("el-form-item");return u(),d("div",h,[c(f,{title:"\u901A\u8FC7 component :is \u7EC4\u4EF6\u5C5E\u6027 && v-bind \u5C5E\u6027\u900F\u4F20\uFF0C\u53EF\u4EE5\u5C06 template \u4E2D\u7684 html \u4EE3\u7801\u5168\u90E8\u6539\u53D8\u4E3A columns \u914D\u7F6E\u9879\uFF0C\u5177\u4F53\u914D\u7F6E\u8BF7\u770B\u4EE3\u7801\u3002",type:"warning",closable:!1}),(u(),t(s("el-form"),l(n.value.form,{ref:"proFormRef",model:r(o)}),{default:a(()=>[(u(!0),d(b,null,B(n.value.columns,e=>(u(),t(s("el-form-item"),v(l({key:e.prop},e.formItem)),{default:a(()=>[(u(),t(s(`el-${e.attrs.typeName}`),l(e.attrs,{modelValue:r(o)[e.formItem.prop],"onUpdate:modelValue":E=>r(o)[e.formItem.prop]=E}),null,16,["modelValue","onUpdate:modelValue"]))]),_:2},1040))),128)),c(F,null,{default:a(()=>[C(_.$slots,"operation",{},void 0,!0)]),_:3})]),_:3},16,["model"]))])}}});const k=x(w,[["__scopeId","data-v-67429369"],["__file","F:/www/geeker-admin/Geeker-Admin/src/views/form/proForm/index.vue"]]);export{k as default};
