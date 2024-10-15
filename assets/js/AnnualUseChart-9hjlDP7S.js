import{_ as n}from"./index.vue_vue_type_script_setup_true_name_ECharts_lang-Bkr-2XBk.js";import{d as i,o as c,c as d,b as p}from"./index-Ai0SrvP8.js";import{_ as m}from"./mplugin-vue_export-helper-DlAUqK2U.js";import"./index-CR3YkRw5.js";const u={class:"echarts"},f=i({__name:"AnnualUseChart",setup(b){const r=["rgba(254, 219, 101,0.1)","rgba(0, 122, 254,0.1)","rgba(255, 75, 122, 0.1)"],l=[{label:new Date().getFullYear()-2+"年",value:["184","90","120","0","30","100","80","40","20","510","350","180"]},{label:new Date().getFullYear()-1+"年",value:["118","509","366","162","380","123","321","158","352","474","154","22"]},{label:new Date().getFullYear()+"年",value:["548","259","113","90","69","512","23","49","28","420","313","156"]}],o={data:l,unit:l.map(e=>e.label),columns:["1","2","3","4","5","6","7","8","9","10","11","12"],colors:["#FFA600","#007AFE","#FF4B7A"]},s={tooltip:{trigger:"axis",axisPointer:{type:"none"},borderWidth:0,padding:0,backgroundColor:"transparent",formatter:e=>{let a="";return e.forEach(t=>{a+=`
          <div class="year-item">
            <span class="year-dot" style="background-color: ${t.color};"></span>
            <span class="year-name">${t.seriesName}</span>
            <span class="year-value">${t.data>=1e4?(t.data/1e4).toFixed(2)+"w":t.data}</span>
          </div>
          `}),`
                    <div class="annual-tooltip">
                      <span class="annual-month">${e[0].dataIndex+1}月</span>
                      <div class="annual-list">
                        ${a}
                      </div>
                    </div>
                  `}},legend:{right:"2%",top:"0%",itemWidth:15,itemHeight:6,align:"auto",icon:"rect",itemGap:15,textStyle:{color:"#ebebf0"}},grid:{top:"20%",left:"40",right:"4%",bottom:"15%"},xAxis:[{name:"(月份)",type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{color:"#7ec7ff",padding:0,fontSize:12,formatter:function(e){return e}},splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisTick:{show:!1},data:o.columns}],yAxis:{name:"(人数)",nameTextStyle:{color:"#D6DFEA",fontSize:12,padding:[0,30,0,0]},minInterval:1,splitNumber:5,splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{show:!0,color:"#B9D6D6",padding:0},axisTick:{show:!1}},series:o.data.map((e,a)=>({name:e.label,type:"line",symbol:"circle",showSymbol:!1,smooth:!0,lineStyle:{width:1,color:o.colors[a],borderColor:o.colors[a]},itemStyle:{color:o.colors[a],borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:o.colors[a]},{offset:1,color:r[a]}],global:!1},shadowColor:"rgba(25,163,223, 0.3)",shadowBlur:20},data:e.value}))};return(e,a)=>(c(),d("div",u,[p(n,{option:s,resize:!1})]))}}),x=m(f,[["__scopeId","data-v-8c656639"]]);export{x as default};
