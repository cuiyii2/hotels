import{_ as r}from"./index.vue_vue_type_script_setup_true_name_ECharts_lang-aJsviJPQ.js";import{d as o,o as s,c as n,b as l}from"./index-DEpa5K7h.js";import{_ as c}from"./mplugin-vue_export-helper-DlAUqK2U.js";import"./index-gtqKEDc2.js";const d={class:"echarts"},p=o({name:"cure"}),f=o({...p,setup(m){const t=[{value:30,spotName:"掘金"},{value:90,spotName:"CSDN"},{value:10,spotName:"Gitee"},{value:70,spotName:"GitHub"},{value:20,spotName:"知乎"},{value:60,spotName:"MyBlog"},{value:55,spotName:"简书"},{value:80,spotName:"StackOverFlow"},{value:50,spotName:"博客园"}],a={tooltip:{trigger:"axis",backgroundColor:"transparent",axisPointer:{type:"none"},padding:0,formatter:e=>`<div style="width:100%; height: 70px !important; display:flex;flex-direction: column;justify-content: space-between;padding:10px;box-sizing: border-box;
      color:#fff; background: #6B9DFE;border-radius: 4px;font-size:14px; ">
        <div style="display: flex; align-items: center;"> <div style="width:5px;height:5px;background:#ffffff;border-radius: 50%;margin-right:5px"></div>平台 :  ${e[0].name}</div>
        <div style="display: flex;align-items: center;"><div style="width:5px;height:5px;background:#ffffff;border-radius: 50%;margin-right:5px"></div>数据量 :  ${e[0].value}</div>
      </div>`},toolbox:{show:!0,orient:"horizontal"},grid:{left:"0",right:"0"},dataZoom:[{show:!1,height:10,xAxisIndex:[0],bottom:0,startValue:0,endValue:9,handleStyle:{color:"#6b9dfe"},textStyle:{color:"transparent"}},{type:"inside",show:!0,height:0,zoomLock:!0}],xAxis:[{type:"category",data:t.map(e=>({value:e.spotName})),axisTick:{show:!1},axisLabel:{margin:20,interval:0,color:"#a1a1a1",fontSize:14,formatter:function(e){return e.length>8?e.slice(0,8)+"...":e}},axisLine:{lineStyle:{color:"#c0c0c0"}}}],yAxis:[{min:0,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#c0c0c0"}},axisLabel:{color:"#a1a1a1",fontSize:16,fontWeight:400,formatter:function(e){return e===0?e+"":e>=1e4?e/1e4+"w":e+""}}}],series:[{name:"Direct",type:"bar",data:t.map(e=>({value:e.value})),barWidth:"45px",itemStyle:{color:"#C5D8FF",borderRadius:[12,12,0,0]},emphasis:{itemStyle:{color:"#6B9DFE"}}}]};return(e,i)=>(s(),n("div",d,[l(r,{option:a})]))}}),v=c(f,[["__scopeId","data-v-3f4f053f"]]);export{v as default};
