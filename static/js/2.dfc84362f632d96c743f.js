webpackJsonp([2],{"90Uj":function(t,i){},BJWr:function(t,i){},Dyiu:function(t,i){},UGF4:function(t,i){},qQB7:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("Dd8w"),n=e.n(a),o=e("//Fk"),l=e.n(o),s=e("hUTu"),c=function(t){return new l.a(function(i,e){s.a[t.method](t.url,t.param,function(t){t?i(t):e("error")},function(t){e(t)})})},r=function(t){return c({url:"/cityInfo/addAnewCityInfo",method:"post",param:t})},d=function(t){return c({url:"/cityInfo/deleteCityInfo",method:"post",param:t})},u=function(t){return c({url:"/cityInfo/updateCityInfo",method:"post",param:t})},f=function(){return c({url:"/cityInfo/findAllCityInfo",method:"get",param:""})},p=function(){return c({url:"/cityInfo/findTotalGDPList",method:"get",param:""})},y={name:"areas",data:function(){return{cityInfoFieldsAndLabels:[{field:"city_name",label:"城市名称"},{field:"city_gdp_total",label:"GDP总量"},{field:"city_gdp_total_unit",label:"GDP总量单位"},{field:"city_gdp_pp",label:"人均GDP"},{field:"city_gdp_pp_unit",label:"人均GDP单位"},{field:"city_areas",label:"面积"},{field:"city_areas_unit",label:"面积单位"},{field:"city_population",label:"人口"},{field:"city_population_unit",label:"人口单位"},{field:"city_gov_address",label:"政府驻地"},{field:"city_scenic_spots",label:"热门景点数"},{field:"city_airlines",label:"航班数"},{field:"city_airlines_unit",label:"航班数单位"},{field:"city_train",label:"列车班数"},{field:"city_train_unit",label:"列车班数单位"},{field:"city_cars_counts",label:"汽车保有量"}],adminAreasData:[],dialogVisible:!1,dialogPara:{},dialogTitle:"添加城市信息",dialogFunction:"add"}},mounted:function(){this.findAllCityInfo()},components:{},methods:{toDecimal:function(t){var i=parseFloat(t);if(isNaN(i))return!1;var e=(i=Math.round(100*t)/100).toString(),a=e.indexOf(".");for(a<0&&(a=e.length,e+=".");e.length<=a+2;)e+="0";return e},findAllCityInfo:function(){var t=this,i=f();i.then(function(i){t.adminAreasData=i.data}),i.catch(function(t){console.log(t)})},deleteCityInfo:function(t){var i=this,e=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i=d(t);i.then(function(t){e.$notify({title:"成功",message:"成功删除一条城市信息！",type:"success"}),e.dialogVisible=!1,e.findAllCityInfo()}),i.catch(function(t){console.log(t),e.$notify.error({title:"错误",message:"操作失败！"})})}).catch(function(){i.$message({type:"info",message:"已取消删除"})})},updateCityInfo:function(t){this.dialogPara=t,this.dialogVisible=!0,this.dialogFunction="update",this.dialogTitle="编辑城市信息"},showCityInfoDialog:function(){this.dialogPara={city_id:"",city_name:"",city_gdp_total:0,city_gdp_total_unit:"亿元",city_gdp_pp:0,city_gdp_pp_unit:"元",city_areas:0,city_areas_unit:"平方千米",city_population:0,city_population_unit:"万人",city_gov_address:"",city_scenic_spots:0,city_airlines:0,city_airlines_unit:"条",city_train:0,city_train_unit:"",city_cars_counts:0},this.dialogVisible=!0,this.dialogFunction="add",this.dialogTitle="添加城市信息"},dialogConfirm:function(){"add"===this.dialogFunction?this.confirmAddCityInfo():"update"===this.dialogFunction&&this.confirmUpdateCityInfo()},confirmAddCityInfo:function(){var t=this,i=r(this.dialogPara);i.then(function(i){t.$notify({title:"成功",message:"成功添加一条城市信息！",type:"success"}),t.dialogVisible=!1,t.findAllCityInfo()}),i.catch(function(i){console.log(i),t.$notify.error({title:"错误",message:"操作失败！"})})},confirmUpdateCityInfo:function(){var t=this,i=u(this.dialogPara);i.then(function(i){t.$notify({title:"成功",message:"成功编辑一条城市信息！",type:"success"}),t.dialogVisible=!1,t.findAllCityInfo()}),i.catch(function(i){console.log(i),t.$notify.error({title:"错误",message:"操作失败！"})})}}},m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"adminAreas-page"},[e("div",{staticClass:"adminAreas-operate"},[e("h3",{staticClass:"title"},[t._v("市级行政区域列表")]),t._v(" "),e("el-button",{staticClass:"addCityInfo",attrs:{type:"primary",size:"small"},on:{click:t.showCityInfoDialog}},[e("i",{staticClass:"el-icon-plus"}),t._v("  添加城市信息\n      ")])],1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.adminAreasData,border:"","default-sort":{prop:"city_gdp_total",order:"descending"},"max-height":"500"}},[t._l(t.cityInfoFieldsAndLabels,function(t,i){return e("el-table-column",{key:i,attrs:{fixed:"city_name"===t.field,prop:t.field,label:t.label,sortable:"",width:"150px",align:"center"}})}),t._v(" "),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.deleteCityInfo(i.row)}}},[t._v("删除")]),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.updateCityInfo(i.row)}}},[t._v("编辑")])]}}])})],2),t._v(" "),e("el-dialog",{staticClass:"cityInfo-dialog",attrs:{title:t.dialogTitle,visible:t.dialogVisible,width:"70%"},on:{"update:visible":function(i){t.dialogVisible=i}}},[t._l(t.cityInfoFieldsAndLabels,function(i,a){return e("div",{key:a,staticClass:"dialog-row-box"},[e("p",{staticClass:"dialog-row-label"},[t._v(t._s(i.label)+": ")]),t._v(" "),e("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入...","suffix-icon":"el-icon-edit"},model:{value:t.dialogPara[i.field],callback:function(e){t.$set(t.dialogPara,i.field,e)},expression:"dialogPara[item.field]"}})],1)}),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"small"},on:{click:function(i){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.dialogConfirm}},[t._v("确 定")])],1)],2)],1)},staticRenderFns:[]};var h=e("VU/8")(y,m,!1,function(t){e("Dyiu"),e("UGF4")},"data-v-0563c841",null).exports,_=e("NYxO"),g={name:"adminAreasCharts",data:function(){return{GDPList:[],cityCategory:[],totalGDPList:[],ppGDPList:[],population:[]}},mounted:function(){this.findTotalGDPList()},components:{},methods:{findTotalGDPList:function(){var t=this,i=p();i.then(function(i){t.GDPList=i.data,t.drawLine()}),i.catch(function(t){console.log(t)})},drawLine:function(){var t=this;this.cityCategory=[],this.totalGDPList=[],this.ppGDPList=[],this.population=[],this.GDPList.map(function(i){t.cityCategory.push(i.city_name),t.totalGDPList.push(i.city_gdp_total),t.ppGDPList.push(i.city_gdp_pp),t.population.push(i.city_population)}),this.$echarts.init(document.getElementById("GDPChart")).setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{left:0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["GDP总量","人均GDP","总人口"]},xAxis:[{type:"category",data:this.cityCategory,axisLabel:{interval:0,rotate:20},axisPointer:{type:"shadow"},splitLine:{show:!1}}],yAxis:[{type:"value",name:"GDP总量",min:0,max:15e3,interval:5e3,axisLabel:{formatter:"{value} 亿元",rotate:30}},{type:"value",name:"人均GDP",min:0,max:1e5,interval:2e4,offset:70,position:"left",axisLabel:{formatter:"{value} 元",rotate:30}},{type:"value",name:"总人口",min:0,max:2e3,interval:500,axisLabel:{formatter:"{value} 万人"}}],series:[{name:"GDP总量",type:"bar",data:this.totalGDPList},{name:"人均GDP",type:"bar",yAxisIndex:1,data:this.ppGDPList},{name:"总人口",type:"line",yAxisIndex:2,data:this.population}]})}},computed:n()({},Object(_.b)({leftSideNavCollapse:"leftSideNavCollapse"})),watch:{}},v={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"adminAreasCharts"},[i("div",{style:{width:"100%",height:"500px"},attrs:{id:"GDPChart"}})])},staticRenderFns:[]};var b={name:"index",data:function(){return{activeIndex:"1"}},mounted:function(){},components:{adminAreas:h,adminAreasCharts:e("VU/8")(g,v,!1,function(t){e("BJWr")},"data-v-4f9ac202",null).exports},methods:{handleSelect:function(t,i){this.activeIndex=t}},computed:n()({},Object(_.b)({leftSideNavCollapse:"leftSideNavCollapse"})),watch:{leftSideNavCollapse:function(){var t=this;"1"===t.activeIndex&&(t.activeIndex="0",setTimeout(function(){t.activeIndex="1"},200))}}},x={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[e("el-menu-item",{attrs:{index:"1"}},[t._v("图表展示")]),t._v(" "),e("el-menu-item",{attrs:{index:"2"}},[t._v(" 表格展示")]),t._v(" "),e("el-menu-item",{attrs:{index:"3"}},[t._v("消息中心")])],1),t._v(" "),"1"==t.activeIndex?e("adminAreasCharts"):t._e(),t._v(" "),e("adminAreas",{directives:[{name:"show",rawName:"v-show",value:"2"==t.activeIndex,expression:"'2'==activeIndex"}]})],1)},staticRenderFns:[]};var C=e("VU/8")(b,x,!1,function(t){e("90Uj")},"data-v-0efcc52d",null);i.default=C.exports}});
//# sourceMappingURL=2.dfc84362f632d96c743f.js.map