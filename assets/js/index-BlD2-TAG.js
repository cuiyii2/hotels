import{d as g,h as U,P as _,r as a,o as F,c as C,b as t,w as r,a as N,e as f,N as h}from"./index-Ai0SrvP8.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";function z(y,d,l){const u=/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;if(d===""&&l("请输入手机号码"),!u.test(d))l(new Error("请输入正确的手机号码"));else return l()}const B={class:"card content-box"},$=g({name:"dynamicForm"}),I=g({...$,setup(y){const d=U(),l=_({name:"Geeker-Admin",phone:"",region:"",date1:"",date2:"",delivery:!1,resource:"",desc:""}),u=_({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],phone:[{required:!0,validator:z,trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}),V=async s=>{s&&await s.validate((e,i)=>{e&&h.success("提交的数据为 : "+JSON.stringify(l))})},v=s=>{s&&s.resetFields()};return(s,e)=>{const i=a("el-input"),n=a("el-form-item"),m=a("el-option"),b=a("el-select"),k=a("el-date-picker"),x=a("el-col"),w=a("el-time-picker"),A=a("el-switch"),p=a("el-radio"),P=a("el-radio-group"),c=a("el-button"),q=a("el-form");return F(),C("div",B,[t(q,{ref_key:"ruleFormRef",ref:d,model:l,rules:u,"label-width":"140px"},{default:r(()=>[t(n,{label:"Activity name",prop:"name"},{default:r(()=>[t(i,{modelValue:l.name,"onUpdate:modelValue":e[0]||(e[0]=o=>l.name=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"Activity phone",prop:"phone"},{default:r(()=>[t(i,{modelValue:l.phone,"onUpdate:modelValue":e[1]||(e[1]=o=>l.phone=o),placeholder:"Activity phone"},null,8,["modelValue"])]),_:1}),t(n,{label:"Activity zone",prop:"region"},{default:r(()=>[t(b,{modelValue:l.region,"onUpdate:modelValue":e[2]||(e[2]=o=>l.region=o),placeholder:"Activity zone"},{default:r(()=>[t(m,{label:"Zone one",value:"shanghai"}),t(m,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"Activity time",required:""},{default:r(()=>[t(n,{prop:"date1"},{default:r(()=>[t(k,{modelValue:l.date1,"onUpdate:modelValue":e[3]||(e[3]=o=>l.date1=o),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),t(x,{class:"text-center",span:1},{default:r(()=>e[10]||(e[10]=[N("span",{class:"text-gray-500"},"-",-1)])),_:1}),t(n,{prop:"date2"},{default:r(()=>[t(w,{modelValue:l.date2,"onUpdate:modelValue":e[4]||(e[4]=o=>l.date2=o),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{label:"Instant delivery",prop:"delivery"},{default:r(()=>[t(A,{modelValue:l.delivery,"onUpdate:modelValue":e[5]||(e[5]=o=>l.delivery=o)},null,8,["modelValue"])]),_:1}),t(n,{label:"Resources",prop:"resource"},{default:r(()=>[t(P,{modelValue:l.resource,"onUpdate:modelValue":e[6]||(e[6]=o=>l.resource=o)},{default:r(()=>[t(p,{label:"Sponsorship"}),t(p,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"Activity form",prop:"desc"},{default:r(()=>[t(i,{modelValue:l.desc,"onUpdate:modelValue":e[7]||(e[7]=o=>l.desc=o),type:"textarea"},null,8,["modelValue"])]),_:1}),t(n,null,{default:r(()=>[t(c,{type:"primary",onClick:e[8]||(e[8]=o=>V(d.value))},{default:r(()=>e[11]||(e[11]=[f(" Create ")])),_:1}),t(c,{onClick:e[9]||(e[9]=o=>v(d.value))},{default:r(()=>e[12]||(e[12]=[f(" Reset ")])),_:1})]),_:1})]),_:1},8,["model","rules"])])}}}),j=R(I,[["__scopeId","data-v-71928434"]]);export{j as default};
