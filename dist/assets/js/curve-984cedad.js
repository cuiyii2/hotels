import{d as a,r as n,o as d,c as l,A as c,h as f,F as u,_ as p}from"./index-ab608e36.js";import{i as h}from"./index-ead1f960.js";import{u as m}from"./useEcharts-b2fba04f.js";const x=a({name:"cure"}),g=a({...x,setup(_,{expose:o}){const r=n();return o({initChart:t=>{const i=h(r.value),s={tooltip:{trigger:"axis",backgroundColor:"transparent",axisPointer:{type:"none"},padding:0,formatter:e=>`<div style="width:100%; height: 70px !important; display:flex;flex-direction: column;justify-content: space-between;padding:10px;box-sizing: border-box;
      color:#fff; background: #6B9DFE;border-radius: 4px;font-size:14px; ">
        <div style="display: flex; align-items: center;"> <div style="width:5px;height:5px;background:#ffffff;border-radius: 50%;margin-right:5px"></div>\u5E73\u53F0 :  ${e[0].name}</div>
        <div style="display: flex;align-items: center;"><div style="width:5px;height:5px;background:#ffffff;border-radius: 50%;margin-right:5px"></div>\u6570\u636E\u91CF :  ${e[0].value}</div>
      </div>`},toolbox:{show:!0,orient:"horizontal"},grid:{left:"0",right:"0"},dataZoom:[{show:!1,height:10,xAxisIndex:[0],bottom:0,startValue:0,endValue:9,handleStyle:{color:"#6b9dfe"},textStyle:{color:"transparent"}},{type:"inside",show:!0,height:0,zoomLock:!0}],xAxis:[{type:"category",data:t.map(e=>({value:e.spotName})),axisTick:{show:!1},axisLabel:{margin:20,interval:0,color:"#a1a1a1",fontSize:14,formatter:function(e){return e.length>8?e.slice(0,8)+"...":e}},axisLine:{lineStyle:{color:"#F6F6F7",width:2}}}],yAxis:[{min:0,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#edeff5",width:2}},axisLabel:{color:"#a1a1a1",fontSize:16,fontWeight:400,formatter:function(e){return e===0?e:e>=1e4?e/1e4+"w":e}}}],series:[{name:"Direct",type:"bar",data:t.map(e=>({value:e.value})),barWidth:"45px",itemStyle:{color:"#C5D8FF",borderRadius:[12,12,0,0]},emphasis:{itemStyle:{color:"#6B9DFE"}}}]};m(i,s)}}),(t,i)=>(d(),l(u,null,[c(" \u6570\u636E\u6765\u6E90 "),f("div",{class:"echarts",ref_key:"echartsRef",ref:r},null,512)],2112))}});const F=p(g,[["__scopeId","data-v-5825ad8f"],["__file","F:/www/geeker-admin/Geeker-Admin/src/views/dashboard/dataVisualize/components/curve.vue"]]);export{F as default};
