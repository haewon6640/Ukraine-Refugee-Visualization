(()=>{"use strict";(()=>{const e=[1595680,3132231,3852914,4183137,4577554,4964567,5341362,5634221,5982586,6318383,6678100,7241315],t=[{PL:1027603,HU:191348,MD:103254,SK:140745,RO:78977,RU:53300,BY:453},{PL:692624,HU:72540,MD:233961,SK:72255,RO:374455,RU:89694,BY:1022},{PL:393327,HU:53975,MD:30698,SK:40592,RO:89876,RU:109382,BY:2833},{PL:180279,HU:36178,MD:15714,SK:21847,RO:52560,RU:18878,BY:4767},{PL:175824,HU:40687,MD:12821,SK:25966,RO:52542,RU:79378,BY:7199},{PL:176220,HU:34226,MD:16926,SK:18841,RO:53331,RU:82451,BY:5018},{PL:154836,HU:36644,MD:11853,SK:19434,RO:48952,RU:102759,BY:2317},{PL:122265,HU:31316,MD:10048,SK:17880,RO:31905,RU:78476,BY:969},{PL:152262,HU:37907,MD:12895,SK:24464,RO:53575,RU:66838,BY:424},{PL:158796,HU:37939,MD:8896,SK:22439,RO:47482,RU:58262,BY:1983},{PL:142956,HU:37316,MD:7228,SK:19564,RO:41214,RU:111116,BY:323},{PL:250186,HU:72518,MD:15219,SK:37137,RO:64488,RU:120883,BY:2784}],a=[{PL:.64399065,HU:.119916274,MD:.064708463,SK:.088203775,RO:.04949426,RU:.033402687,BY:283892e-9},{PL:.450765383,HU:.047209627,MD:.152263739,SK:.047024147,RO:.243698387,RU:.058373591,BY:665126e-9},{PL:.545769777,HU:.074894232,MD:.042595704,SK:.056324348,RO:.124709477,RU:.151775469,BY:.003930993},{PL:.545931083,HU:.10955627,MD:.047586025,SK:.066158323,RO:.15916517,RU:.057167429,BY:.0144357},{PL:.445782002,HU:.103157318,MD:.032506205,SK:.065833876,RO:.133214339,RU:.201254003,BY:.018252256},{PL:.455333542,HU:.088436306,MD:.043734965,SK:.048683119,RO:.137801573,RU:.213044523,BY:.012965973},{PL:.41092902,HU:.097251821,MD:.031457424,SK:.051577118,RO:.129916798,RU:.272718587,BY:.006149232},{PL:.417487596,HU:.106932005,MD:.034310026,SK:.061053271,RO:.108943212,RU:.26796513,BY:.00330876},{PL:.437076055,HU:.108814031,MD:.037015774,SK:.070225195,RO:.153789847,RU:.191861984,BY:.001217114},{PL:.472892849,HU:.11298195,MD:.026492196,SK:.06682311,RO:.141400906,RU:.173503635,BY:.005905354},{PL:.39741241,HU:.103737104,MD:.020093574,SK:.054387199,RO:.114573401,RU:.308898384,BY:897928e-9},{PL:.44421047,HU:.128757224,MD:.027021652,SK:.065937519,RO:.114499791,RU:.214630292,BY:.00494305}];let l=null;var o=null,n=document.getElementById("total-count"),r=document.getElementById("myRange"),s=document.getElementById("date"),i=["3/1/2022 - 3/7/2022","3/8/2022 - 3/14/2022","3/15/2022 - 3/21/2022","3/22/2022 - 3/28/2022","3/29/2022 - 4/4/2022","4/5/2022 - 4/11/2022","4/12/2022 - 4/18/2022","4/19/2022 - 4/25/2022","4/26/2022 - 5/2/2022","5/3/2022 - 5/9/2022","5/10/2022 - 5/16/2022","5/24/2022 - 5/30/2022"];s.innerHTML=i[r.value],n.innerHTML=`Total Number of Migrant Refugees: ${e[r.value].toLocaleString("en-US")}`;let u=Object.keys(t[0]);for(var g=[],m=0;m<u.length;m++)g.push({id:u[m],value:t[0][u[m]],percent:`${(Math.round(1e4*a[0][u[m]])/100).toFixed(2)}%`});am5.ready((function(){var e=am5.Root.new("chartdiv");l=e,e.setThemes([am5themes_Animated.new(e)]);var t=e.container.children.push(am5map.MapChart.new(e,{panX:"translateX",panY:"translateY",layout:e.horizontalLayout})),a=t.series.push(am5map.MapPolygonSeries.new(e,{geoJSON:am5geodata_region_world_europeHigh,valueField:"value",calculateAggregates:!0}));a.mapPolygons.template.setAll({tooltipText:"{name} \n Total Refugees: {value} \n Percent Refugees: {percent}"}),a.set("heatRules",[{target:a.mapPolygons.template,dataField:"value",min:am5.color(16736799),max:am5.color(6692608),key:"fill"}]),a.mapPolygons.template.events.on("pointerover",(function(e){Boolean(e.target.dataItem.get("value"))||(e.target._settings.tooltipText=""),n.showValue(e.target.dataItem.get("value"))})),a.data.setAll(g);var n=t.children.push(am5.HeatLegend.new(e,{orientation:"vertical",startColor:am5.color(16736799),endColor:am5.color(6692608),startText:"Lowest",endText:"Highest",stepCount:5}));n.startLabel.setAll({fontSize:12,fill:n.get("startColor")}),n.endLabel.setAll({fontSize:12,fill:n.get("endColor")}),a.events.on("datavalidated",(function(){n.set("startValue",a.getPrivate("valueLow")),n.set("endValue",a.getPrivate("valueHigh"))})),o=n})),r.oninput=function(){s.innerHTML=i[this.value],n.innerHTML=`Total Number of Migrant Refugees: ${e[r.value].toLocaleString("en-US")}`;let u=Object.keys(t[this.value]);for(var g=[],m=0;m<u.length;m++)g.push({id:u[m],value:t[this.value][u[m]],percent:`${(Math.round(1e4*a[this.value][u[m]])/100).toFixed(2)}%`});let R=l;R.setThemes([am5themes_Animated.new(R)]),R.container.children.pop();var d=R.container.children.push(am5map.MapChart.new(R,{panX:"translateX",panY:"translateY",layout:R.horizontalLayout})),U=d.series.push(am5map.MapPolygonSeries.new(R,{geoJSON:am5geodata_region_world_europeHigh,valueField:"value",calculateAggregates:!0}));U.mapPolygons.template.setAll({tooltipText:"{name} \n Total Refugees: {value} \n Percent Refugees: {percent}"}),U.set("heatRules",[{target:U.mapPolygons.template,dataField:"value",min:am5.color(16736799),max:am5.color(6692608),key:"fill"}]),U.mapPolygons.template.events.on("pointerover",(function(e){o.hideTooltip(),o=p,p.showValue(e.target.dataItem.get("value"))})),U.data.setAll(g);var p=d.children.push(am5.HeatLegend.new(R,{orientation:"vertical",startColor:am5.color(16736799),endColor:am5.color(6692608),startText:"Lowest",endText:"Highest",stepCount:5}));p.startLabel.setAll({fontSize:12,fill:p.get("startColor")}),p.endLabel.setAll({fontSize:12,fill:p.get("endColor")}),U.events.on("datavalidated",(function(){p.set("startValue",U.getPrivate("valueLow")),p.set("endValue",U.getPrivate("valueHigh"))}))}})()})();
//# sourceMappingURL=main.js.map