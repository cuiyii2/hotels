import{_ as l}from"./index.vue_vue_type_script_setup_true_name_ECharts_lang-Bkr-2XBk.js";import{d as a,o as n,c,b as s}from"./index-Ai0SrvP8.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CR3YkRw5.js";const p={class:"echarts"},u=a({name:"pie"}),_=a({...u,setup(d){const e=[{value:5e3,name:"Gitee 访问量"},{value:5e3,name:"GitHub 访问量"}],i={title:{text:"Gitee / GitHub",subtext:"访问占比",left:"56%",top:"45%",textAlign:"center",textStyle:{fontSize:18,color:"#767676"},subtextStyle:{fontSize:15,color:"#a1a1a1"}},tooltip:{trigger:"item"},legend:{top:"4%",left:"2%",orient:"vertical",icon:"circle",align:"left",itemGap:20,textStyle:{fontSize:13,color:"#a1a1a1",fontWeight:500},formatter:function(o){let r="";for(let t=0;t<e.length;t++){if(e[t].name==o&&e[t].value>=1e4)return r=(e[t].value/1e4).toFixed(2),o+"      "+r+"w";if(e[t].name==o)return r=e[t].value+"",o+"      "+r}return""}},series:[{type:"pie",radius:["70%","40%"],center:["57%","52%"],silent:!0,clockwise:!0,startAngle:150,data:e,labelLine:{length:80,length2:30,lineStyle:{width:1}},label:{position:"outside",show:!0,formatter:"{d}%",fontWeight:400,fontSize:19,color:"#a1a1a1"},color:[{type:"linear",x:0,y:0,x2:.5,y2:1,colorStops:[{offset:0,color:"#feb791"},{offset:1,color:"#fe8b4c"}]},{type:"linear",x:0,y:0,x2:1,y2:.5,colorStops:[{offset:0,color:"#b898fd"},{offset:1,color:"#8347fd"}]}]}]};return(o,r)=>(n(),c("div",p,[s(l,{option:i})]))}}),b=f(_,[["__scopeId","data-v-2713a60f"]]);export{b as default};
