import{S as _}from"./index-BZnxUNqj.js";import{d as u,h as v,r as n,o as b,c as f,a as i,b as t,t as m,w as a,e as r}from"./index-Ai0SrvP8.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C={class:"card content-box"},k={class:"result"},y=u({name:"selectFilter"}),V=u({...y,setup(g){const l=v({state:"1",type:["1","3"]}),c=s=>{l.value=s},d=[{title:"物流状态(单)",key:"state",options:[{label:"全部",value:""},{label:"已下单",value:"1",icon:"ShoppingCart"},{label:"已发货",value:"2",icon:"Van"},{label:"已签收",value:"3",icon:"Edit"},{label:"已退回",value:"4",icon:"Guide"},{label:"已完成",value:"5",icon:"CircleCheck"}]},{title:"商品类型(多)",key:"type",multiple:!0,options:[{label:"全部",value:""},{label:"食品类",value:"1"},{label:"服装类",value:"2"},{label:"家具类",value:"3"},{label:"日用品类",value:"4"}]}];return(s,e)=>{const o=n("el-descriptions-item"),p=n("el-descriptions");return b(),f("div",C,[e[2]||(e[2]=i("span",{class:"text"}," 分类筛选器 🍓🍇🍈🍉",-1)),t(_,{data:d,"default-values":l.value,onChange:c},null,8,["default-values"]),i("span",k,"返回值: "+m(l.value),1),t(p,{title:"配置项 📚",column:1,border:""},{default:a(()=>[t(o,{label:"data"},{default:a(()=>e[0]||(e[0]=[r(" 需要筛选的数据列表，详情请查看代码 ")])),_:1}),t(o,{label:"defaultValues"},{default:a(()=>e[1]||(e[1]=[r(" 默认选中的值 ")])),_:1})]),_:1})])}}}),F=x(V,[["__scopeId","data-v-067b0044"]]);export{F as default};
