import{aa as r,d as S,h as f,r as n,o as O,g as k,w as o,b as a,u as D,a1 as I,e as g,ab as y,a as b,t as R}from"./index-CAiYY8wA.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const A=async(w,d,c={},_=!0,i=".xlsx")=>{_&&r({title:"温馨提示",message:"如果数据庞大会导致下载缓慢哦，请您耐心等待！",type:"info",duration:3e3});try{const e=await w(c),u=new Blob([e]);if("msSaveOrOpenBlob"in navigator)return window.navigator.msSaveOrOpenBlob(u,d+i);const p=window.URL.createObjectURL(u),s=document.createElement("a");s.style.display="none",s.download=`${d}${i}`,s.href=p,document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(p)}catch{}},F={class:"el-upload__tip"},N=S({name:"ImportExcel"}),M=S({...N,setup(w,{expose:d}){const c=f(!1),_=f(1),i=f(!1),e=f({title:"",fileSize:5,fileType:["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]}),u=l=>{e.value={...e.value,...l},i.value=!0},p=()=>{e.value.tempApi&&A(e.value.tempApi,`${e.value.title}模板`)},s=async l=>{let t=new FormData;t.append("file",l.file),t.append("isCover",c.value),await e.value.importApi(t),e.value.getTableList&&e.value.getTableList(),i.value=!1},U=l=>{const t=e.value.fileType.includes(l.type),m=l.size/1024/1024<e.value.fileSize;return t||r({title:"温馨提示",message:"上传文件只能是 xls / xlsx 格式！",type:"warning"}),m||setTimeout(()=>{r({title:"温馨提示",message:`上传文件大小不能超过 ${e.value.fileSize}MB！`,type:"warning"})},0),t&&m},V=()=>{r({title:"温馨提示",message:"最多只能上传一个文件！",type:"warning"})},h=()=>{r({title:"温馨提示",message:`批量添加${e.value.title}失败，请您重新上传！`,type:"error"})},C=()=>{r({title:"温馨提示",message:`批量添加${e.value.title}成功！`,type:"success"})};return d({acceptParams:u}),(l,t)=>{const m=n("el-button"),v=n("el-form-item"),E=n("upload-filled"),$=n("el-icon"),B=n("el-upload"),L=n("el-switch"),T=n("el-form"),z=n("el-dialog");return O(),k(z,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=x=>i.value=x),title:`批量添加${e.value.title}`,"destroy-on-close":!0,width:"580px",draggable:""},{default:o(()=>[a(T,{class:"drawer-multiColumn-form","label-width":"100px"},{default:o(()=>[a(v,{label:"模板下载 :"},{default:o(()=>[a(m,{type:"primary",icon:D(I),onClick:p},{default:o(()=>t[2]||(t[2]=[g(" 点击下载 ")])),_:1},8,["icon"])]),_:1}),a(v,{label:"文件上传 :"},{default:o(()=>[a(B,{action:"#",class:"upload",drag:!0,limit:_.value,multiple:!0,"show-file-list":!0,"http-request":s,"before-upload":U,"on-exceed":V,"on-success":C,"on-error":h,accept:e.value.fileType.join(",")},{tip:o(()=>[y(l.$slots,"tip",{},()=>[b("div",F,"请上传 .xls , .xlsx 标准格式文件，文件最大为 "+R(e.value.fileSize)+"M",1)],!0)]),default:o(()=>[y(l.$slots,"empty",{},()=>[a($,{class:"el-icon--upload"},{default:o(()=>[a(E)]),_:1}),t[3]||(t[3]=b("div",{class:"el-upload__text"},[g("将文件拖到此处，或"),b("em",null,"点击上传")],-1))],!0)]),_:3},8,["limit","accept"])]),_:3}),a(v,{label:"数据覆盖 :"},{default:o(()=>[a(L,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=x=>c.value=x)},null,8,["modelValue"])]),_:1})]),_:3})]),_:3},8,["modelValue","title"])}}}),G=j(M,[["__scopeId","data-v-dd116d8b"]]);export{G as I,A as u};
