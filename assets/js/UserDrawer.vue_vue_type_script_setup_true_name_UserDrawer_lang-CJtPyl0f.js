import{d as _,P as T,h as p,r as t,o as m,g as b,w as o,b as a,e as i,a2 as B,aF as N,a as g,c as L,f as M,u as S,F as $,N as z}from"./index-DEpa5K7h.js";import{a as A,U as D}from"./Imgs-BiRBukdw.js";const E=[{label:"男",value:1},{label:"女",value:2}],H=[{label:"启用",value:1,tagType:"success"},{label:"禁用",value:0,tagType:"danger"}],I=_({name:"UserDrawer"}),J=_({...I,setup(R,{expose:V}){const c=T({avatar:[{required:!0,message:"请上传用户头像"}],photo:[{required:!0,message:"请上传用户照片"}],username:[{required:!0,message:"请填写用户姓名"}],gender:[{required:!0,message:"请选择性别"}],idCard:[{required:!0,message:"请填写身份证号"}],email:[{required:!0,message:"请填写邮箱"}],address:[{required:!0,message:"请填写居住地址"}]}),s=p(!1),l=p({isView:!1,title:"",row:{}}),U=d=>{l.value=d,s.value=!0},v=p(),x=()=>{v.value.validate(async d=>{if(d)try{await l.value.api(l.value.row),z.success({message:`${l.value.title}用户成功！`}),l.value.getTableList(),s.value=!1}catch{}})};return V({acceptParams:U}),(d,e)=>{const y=t("Avatar"),f=t("el-icon"),u=t("el-form-item"),k=t("Picture"),n=t("el-input"),q=t("el-option"),C=t("el-select"),F=t("el-form"),w=t("el-button"),P=t("el-drawer");return m(),b(P,{modelValue:s.value,"onUpdate:modelValue":e[8]||(e[8]=r=>s.value=r),"destroy-on-close":!0,size:"450px",title:`${l.value.title}用户`},{footer:o(()=>[a(w,{onClick:e[7]||(e[7]=r=>s.value=!1)},{default:o(()=>e[13]||(e[13]=[i("取消")])),_:1}),B(a(w,{type:"primary",onClick:x},{default:o(()=>e[14]||(e[14]=[i("确定")])),_:1},512),[[N,!l.value.isView]])]),default:o(()=>[a(F,{ref_key:"ruleFormRef",ref:v,"label-width":"100px","label-suffix":" :",rules:c,disabled:l.value.isView,model:l.value.row,"hide-required-asterisk":l.value.isView},{default:o(()=>[a(u,{label:"用户头像",prop:"avatar"},{default:o(()=>[a(A,{"image-url":l.value.row.avatar,"onUpdate:imageUrl":e[0]||(e[0]=r=>l.value.row.avatar=r),width:"135px",height:"135px","file-size":3},{empty:o(()=>[a(f,null,{default:o(()=>[a(y)]),_:1}),e[9]||(e[9]=g("span",null,"请上传头像",-1))]),tip:o(()=>e[10]||(e[10]=[i(" 头像大小不能超过 3M ")])),_:1},8,["image-url"])]),_:1}),a(u,{label:"用户照片",prop:"photo"},{default:o(()=>[a(D,{"file-list":l.value.row.photo,"onUpdate:fileList":e[1]||(e[1]=r=>l.value.row.photo=r),height:"140px",width:"140px","border-radius":"50%"},{empty:o(()=>[a(f,null,{default:o(()=>[a(k)]),_:1}),e[11]||(e[11]=g("span",null,"请上传照片",-1))]),tip:o(()=>e[12]||(e[12]=[i(" 照片大小不能超过 5M ")])),_:1},8,["file-list"])]),_:1}),a(u,{label:"用户姓名",prop:"username"},{default:o(()=>[a(n,{modelValue:l.value.row.username,"onUpdate:modelValue":e[2]||(e[2]=r=>l.value.row.username=r),placeholder:"请填写用户姓名",clearable:""},null,8,["modelValue"])]),_:1}),a(u,{label:"性别",prop:"gender"},{default:o(()=>[a(C,{modelValue:l.value.row.gender,"onUpdate:modelValue":e[3]||(e[3]=r=>l.value.row.gender=r),placeholder:"请选择性别",clearable:""},{default:o(()=>[(m(!0),L($,null,M(S(E),r=>(m(),b(q,{key:r.value,label:r.label,value:r.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{label:"身份证号",prop:"idCard"},{default:o(()=>[a(n,{modelValue:l.value.row.idCard,"onUpdate:modelValue":e[4]||(e[4]=r=>l.value.row.idCard=r),placeholder:"请填写身份证号",clearable:""},null,8,["modelValue"])]),_:1}),a(u,{label:"邮箱",prop:"email"},{default:o(()=>[a(n,{modelValue:l.value.row.email,"onUpdate:modelValue":e[5]||(e[5]=r=>l.value.row.email=r),placeholder:"请填写邮箱",clearable:""},null,8,["modelValue"])]),_:1}),a(u,{label:"居住地址",prop:"address"},{default:o(()=>[a(n,{modelValue:l.value.row.address,"onUpdate:modelValue":e[6]||(e[6]=r=>l.value.row.address=r),placeholder:"请填写居住地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","disabled","model","hide-required-asterisk"])]),_:1},8,["modelValue","title"])}}});export{J as _,E as g,H as u};
