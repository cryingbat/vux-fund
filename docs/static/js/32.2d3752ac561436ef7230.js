webpackJsonp([32],{"16lW":function(t,e,a){var n=a("3O+v");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("18c11ad1",n,!0,{})},"3O+v":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.shift[data-v-0f7e62e5] {\n  margin-bottom: 53px;\n}\n.box[data-v-0f7e62e5] {\n  position: relative;\n  width: 350px;\n  height: 170px;\n  overflow: hidden;\n  border-radius: 8px;\n  margin: 10px auto;\n}\n.box.states2[data-v-0f7e62e5] {\n  background: #51a4ac;\n}\n.box.states3[data-v-0f7e62e5] {\n  background: -webkit-gradient(linear, left top, left bottom, from(#51a4ac), to(#3571b0));\n  background: linear-gradient(#51a4ac 0%, #3571b0 100%);\n}\n.box.states4[data-v-0f7e62e5] {\n  background: #3571b0;\n}\n.box.states5[data-v-0f7e62e5] {\n  background: #938da7;\n}\n.box.states1[data-v-0f7e62e5] {\n  background: linear-gradient(150deg, #0c1414 0%, #d40000 0%, #001912 100%, #0a0a12 100%);\n}\n.box .icon[data-v-0f7e62e5] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.box .moreData .loadMore[data-v-0f7e62e5] {\n  text-align: center;\n  font-size: 14px;\n  color: #ac9375;\n}\n.box .env[data-v-0f7e62e5] {\n  position: absolute;\n  bottom: 0px;\n  right: 50px;\n}\n.box .top[data-v-0f7e62e5] {\n  overflow: hidden;\n}\n.box .top .state[data-v-0f7e62e5] {\n  text-align: center;\n  padding-top: 10px;\n  width: 13%;\n  height: 120px;\n  float: left;\n}\n.box .top .table[data-v-0f7e62e5] {\n  margin-top: 10px;\n  width: 73%;\n  height: 105px;\n  float: left;\n  border: 1px solid #fff;\n}\n.box .top .table .item1[data-v-0f7e62e5],\n.box .top .table .item2[data-v-0f7e62e5] {\n  color: #fff;\n  border-bottom: 1px solid #fff;\n}\n.box .top .table .item1[data-v-0f7e62e5] {\n  padding: 5px 0 5px 8px;\n}\n.box .top .table .item1 .dTimeBox[data-v-0f7e62e5] {\n  float: right;\n  font-weight: 700;\n  color: #f00000;\n  margin-right: 5px;\n}\n.box .top .table .item2[data-v-0f7e62e5] {\n  padding: 8px 0 8px 8px;\n  font-size: 10px;\n}\n.box .top .table .item3[data-v-0f7e62e5] {\n  font-size: 14px;\n  overflow: hidden;\n}\n.box .top .table .subItem1[data-v-0f7e62e5],\n.box .top .table .subItem3[data-v-0f7e62e5] {\n  display: inline-block;\n  padding-left: 8px;\n  width: 22%;\n  /*font-weight: bold;*/\n  color: #fff;\n  height: 32px;\n  text-align: center;\n  line-height: 32px;\n  float: left;\n  border-right: 1px solid #fff;\n}\n.box .top .table .subItem1[data-v-0f7e62e5] {\n  padding-right: 10px;\n}\n.box .top .table .subItem2[data-v-0f7e62e5] {\n  display: inline-block;\n  float: left;\n  color: #fff;\n  height: 32px;\n  text-align: center;\n  line-height: 32px;\n  /*font-weight: bold;*/\n  padding-left: 8px;\n  border-right: 1px solid #fff;\n  width: 30%;\n}\n.box .top .table .subItem3[data-v-0f7e62e5] {\n  border: 0;\n}\n.box .bottom[data-v-0f7e62e5] {\n  padding: 0 20px;\n  overflow: hidden;\n}\n.box .bottom .time[data-v-0f7e62e5] {\n  padding-top: 2px;\n  color: #fff;\n  float: left;\n  font-size: 12px;\n}\n.box .bottom .more[data-v-0f7e62e5] {\n  float: right;\n  border: 2px solid #797979;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n  color: #000;\n  padding: 3px 5px;\n  border-radius: 20px;\n}\n",""])},TAcK:function(t,e,a){"use strict";function n(t){a("16lW")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),o=a.n(s),i=a("gyMJ"),r=a("Bfwr"),d=a("63CM"),l=a("L6bb"),c=a.n(l),f=a("PJh5"),p=a.n(f),m=(d.a,r.a,{directives:{TransferDom:d.a},data:function(){return{oneOrder:[],nextOrder:[],page:"0",showLoad:!1,status:!0,env:"../../static/over.png",name:"加载中...",imgIcon:["../../static/buy.png","../../static/sell.png"],imgSrc:["../../static/wp.png","../../static/bf.png","../../static/pp.png","../../static/js.png","../../static/dj.png"]}},components:{Loading:r.a},methods:{dealTime:function(t,e,a,n){e=p()(e).format("X"),a=p()(a).format("X"),n=parseInt(3600*Number(n));var s=a-e,o=setInterval(function(){var e="";if(s<=n){var a=n-s,i=parseInt(a/3600),r=parseInt(a/60)%60,d=a%60;e=(i>=10?i:"0"+i)+":"+(r>=10?r:"0"+r)+":"+(d>=10?d:"0"+d)}else clearInterval(o),e="已截止";s++,t.dTime=e},1e3)},showLoading:function(){this.showLoad=!0},hideLoading:function(){this.showLoad=!1},showDetailInfo:function(t,e){this.$router.push("/home/page/lfdinfo?id="+t+"&st="+e)},getFdinfo:function(){var t=this;this.showLoading();var e=this.$route.query.id||"",a=o()({bill_id:e,page:this.page});Object(i.m)(a).then(function(e){if(e.succ>0)if(t.hideLoading(),null!==e.data)for(var a=0;a<e.data.length;a++){var n={};"0"==e.data[a].status?n.st="已冻结":"1"==e.data[a].status?n.st="等待上传凭证":"2"==e.data[a].status?n.st="等待确认":"100"==e.data[a].status?n.st="已完成":n.st="管理员审核中",n.status=e.data[a].status,n.from=e.data[a].from,n.to=e.data[a].to,n.type=e.data[a].type,n.money=e.data[a].money,n.sub_bill_id=e.data[a].sub_bill_id,n.time=e.data[a].time,n.idName=(1==n.type?"B":"S")+p()(e.data[a].time).format("HHmmss")+c()(e.data[a].sub_bill_id).substr(8,4),n.dTime="",t.oneOrder.push(n),100===Number(n.status)?n.over=!0:n.over=!1,t.oneOrder&&1===Number(n.status)&&t.dealTime(t.oneOrder[t.oneOrder.length-1],e.data[a].time,e.data[a].current_time,e.data[a].interval)}else t.oneOrder=[];else-1===Number(e.succ)||-2===Number(e.succ)?(alert("请重新登录！"),t.$router.push({name:"root"})):(t.name="加载失败！",t.oneOrder=[])})},loadMore:function(){this.status=!1}},mounted:function(){var t=this;setTimeout(function(){t.getFdinfo()},300)}}),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shift"},[t.oneOrder.length<=0?a("div",{staticStyle:{color:"#999","text-align":"center","margin-top":"20px"}},[t._v("数据为空")]):t._l(t.oneOrder,function(e,n){return a("div",{key:n,staticClass:"box",class:{states1:"0"===e.status,states2:"1"===e.status,states3:"2"===e.status,states4:"100"===e.status,states5:"4"===e.status},on:{click:function(a){100!==Number(e.status)&&t.showDetailInfo(e.sub_bill_id,e.status)}}},[a("img",{directives:[{name:"show",rawName:"v-show",value:1===Number(e.type),expression:"Number(item.type) === 1"}],staticClass:"icon",attrs:{src:t.imgIcon[0],alt:""}}),t._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:2===Number(e.type),expression:"Number(item.type) === 2"}],staticClass:"icon",attrs:{src:t.imgIcon[1],alt:""}}),t._v(" "),a("div",{staticClass:"top"},[a("div",{staticClass:"state"},["已冻结"===e.st?a("img",{attrs:{src:t.imgSrc[4],width:"32",height:"32",alt:""}}):"等待上传凭证"===e.st?a("img",{attrs:{src:t.imgSrc[1],width:"32",height:"32",alt:""}}):"等待确认"===e.st?a("img",{attrs:{src:t.imgSrc[0],width:"32",height:"32",alt:""}}):"已完成"===e.st?a("img",{attrs:{src:t.imgSrc[2],width:"32",height:"32",alt:""}}):a("img",{attrs:{src:t.imgSrc[3],width:"32",height:"32",alt:""}})]),t._v(" "),a("div",{staticClass:"table"},[a("p",{staticClass:"item1"},[t._v("号码："+t._s(e.idName))]),t._v(" "),a("p",{staticClass:"item2"},[t._v("状态："+t._s(e.st)+" "),a("span",{staticClass:"dTimeBox"},[t._v(t._s(e.dTime))])]),t._v(" "),a("p",{staticClass:"item3"}),a("div",{staticClass:"subItem1"},[t._v(t._s(e.from))]),t._v(" "),a("div",{staticClass:"subItem2"},[t._v(t._s(e.money))]),t._v(" "),a("div",{staticClass:"subItem3"},[t._v(t._s(e.to))]),t._v(" "),a("p")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.over,expression:"item.over"}],staticClass:"env"},[a("img",{attrs:{src:t.env,width:"100%",height:"100%",alt:""}})]),t._v(" "),a("div",{staticClass:"bottom"},[a("span",{staticClass:"time"},[t._v("创建日期："+t._s(e.time))]),t._v(" "),a("button",{staticClass:"more"},[t._v("阅读更多")])])])}),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("loading",{attrs:{text:t.name},model:{value:t.showLoad,callback:function(e){t.showLoad=e},expression:"showLoad"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.oneOrder.length>0,expression:"oneOrder.length>0"}],staticClass:"moreData",staticStyle:{"text-align":"center",color:"#ac9375","font-size":"12px",padding:"15px 0"}},[t.status?a("div",{staticClass:"loadMore",on:{click:t.loadMore}},[t._v("加载更多...")]):a("div",{staticClass:"loadMore"},[t._v("没有更多啦！")])])],2)},b=[],u={render:v,staticRenderFns:b},g=u,h=a("VU/8"),x=n,_=h(m,g,!1,x,"data-v-0f7e62e5",null);e.default=_.exports}});