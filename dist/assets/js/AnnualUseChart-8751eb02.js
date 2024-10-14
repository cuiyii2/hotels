import{d,o as p,c as u,A as m,F as h,p as f,g as y,h as _,_ as g}from"./index-ab608e36.js";import{i as b}from"./index-ead1f960.js";const w=r=>(f("data-v-28c355a2"),r=r(),y(),r),x=w(()=>_("div",{class:"echarts",id:"AnnualUseChart"},null,-1)),S=d({__name:"AnnualUseChart",setup(r,{expose:l}){return l({initChart:(t={})=>{const s=document.getElementById("AnnualUseChart"),i=["rgba(254, 219, 101,0.1)","rgba(0, 122, 254,0.1)","rgba(255, 75, 122, 0.1)"],n=b(s),c={tooltip:{trigger:"axis",axisPointer:{type:"none"},borderWidth:0,padding:0,backgroundColor:"transparent",formatter:e=>{let o="";return e.forEach(a=>{o+=`
          <div class="year-item">
            <span class="year-dot" style="background-color: ${a.color};"></span>
            <span class="year-name">${a.seriesName}</span>
            <span class="year-value">${a.data>=1e4?(a.data/1e4).toFixed(2)+"w":a.data}</span>
          </div>
          `}),`
                    <div class="annual-tooTip">
                      <span class="annual-month">${e[0].dataIndex+1}\u6708</span>
                      <div class="annual-list">
                        ${o}
                      </div>
                    </div>
                  `}},legend:{right:"2%",top:"0%",itemWidth:15,itemHeight:6,align:"auto",icon:"rect",itemGap:15,textStyle:{color:"#ebebf0"}},grid:{top:"20%",left:"40",right:"4%",bottom:"15%"},xAxis:[{name:"(\u6708\u4EFD)",type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{color:"#7ec7ff",padding:0,fontSize:12,formatter:function(e){return e}},splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisTick:{show:!1},data:t.columns}],yAxis:{name:"(\u4EBA\u6570)",nameTextStyle:{color:"#D6DFEA",fontSize:12,padding:[0,30,0,0]},minInterval:1,splitNumber:5,splitLine:{show:!1,lineStyle:{color:"#192a44"}},axisLine:{show:!0,lineStyle:{color:"#233653"}},axisLabel:{show:!0,color:"#B9D6D6",padding:0,formatter:function(e){return e>=1e4&&(e=e/1e4+"w"),e}},axisTick:{show:!1}},series:t.data.map((e,o)=>({name:e.label,type:"line",symbol:"circle",showSymbol:!1,smooth:!0,lineStyle:{width:1,color:t.colors[o],borderColor:t.colors[o]},itemStyle:{color:t.colors[o],borderColor:"#646ace",borderWidth:2},tooltip:{show:!0},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:t.colors[o]},{offset:1,color:i[o]}],global:!1},shadowColor:"rgba(25,163,223, 0.3)",shadowBlur:20},data:e.value}))};return n.setOption(c),n}}),(t,s)=>(p(),u(h,null,[m(" \u5E74\u5EA6\u4F7F\u7528 "),x],2112))}});const v=g(S,[["__scopeId","data-v-28c355a2"],["__file","F:/www/geeker-admin/Geeker-Admin/src/views/dataScreen/components/AnnualUseChart.vue"]]);export{v as default};
