import{aw as c,N as o}from"./index-CAiYY8wA.js";const l=(t,a={},e,s="warning")=>new Promise((r,n)=>{c.confirm(`是否${e}?`,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:s,draggable:!0}).then(async()=>{if(!await t(a))return n(!1);o({type:"success",message:`${e}成功!`}),r(!0)}).catch(()=>{})});export{l as u};
