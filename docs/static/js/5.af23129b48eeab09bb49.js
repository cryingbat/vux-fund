webpackJsonp([5],{"+bFd":function(n,t,e){"use strict";function i(n){e("zKSI")}var o=e("mvHQ"),a=e.n(o),l=e("gyMJ"),r=e("/kga"),s=e("62KO"),c=e("63CM"),d=(c.a,String,r.a,s.a,{directives:{TransferDom:c.a},props:{id:{type:String,default:""}},data:function(){return{show:!1,img:"",Tip:!1,showTip:!1}},components:{XDialog:r.a,Confirm:s.a},methods:{seeImg:function(){var n=this;this.show=!0;var t=a()({sub_bill_id:this.id});Object(l.i)(t).then(function(t){t.succ>0?n.img=t.data.imgurl:alert("图片获取失败！")})},confirmGet:function(){this.Tip=!0},No:function(){this.Tip=!1},Yes:function(){alert("确认成功！"),this.$emit("confirmOk",!0),this.Tip=!1},resultGet:function(){this.showTip=!0},onCancel:function(){this.showTip=!1},onConfirm:function(){a()({sub_bill_id:this.id});alert("拒绝成功！"),this.showTip=!1,this.$router.push({name:"lzdinfo",params:{id:4}})}}}),f=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"button"},[e("button",{staticClass:"refuse",on:{click:n.resultGet}},[n._v("拒绝收款")]),n._v(" "),e("button",{staticClass:"confir",on:{click:n.confirmGet}},[n._v("确认收款")]),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("confirm",{attrs:{title:"确定"},on:{"on-cancel":n.No,"on-confirm":n.Yes},model:{value:n.Tip,callback:function(t){n.Tip=t},expression:"Tip"}},[e("p",{staticStyle:{"text-align":"center"}},[n._v(n._s("确定收款吗？"))])])],1),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("confirm",{attrs:{title:"确定"},on:{"on-cancel":n.onCancel,"on-confirm":n.onConfirm},model:{value:n.showTip,callback:function(t){n.showTip=t},expression:"showTip"}},[e("p",{staticStyle:{"text-align":"center"}},[n._v(n._s("确定拒绝收款吗？"))])])],1),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"},{name:"show",rawName:"v-show",value:n.show,expression:"show"}]},[e("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{"max-width":"100%",width:"100%",height:"100%","background-color":"rgba(0,0,0,0.7)","padding-top":"200px"}},model:{value:n.show,callback:function(t){n.show=t},expression:"show"}},[e("p",{staticStyle:{color:"#fff","text-align":"center"},on:{click:function(t){n.show=!1}}},[e("img",{attrs:{src:n.img,width:"100%",alt:""}}),n._v(" "),e("br"),n._v(" "),e("br"),n._v(" "),e("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close-outline",staticStyle:{fill:"#fff"},attrs:{type:"ios-close-outline",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 512 512"}},[e("path",{staticClass:"st0",attrs:{d:"M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0s81.2-213 0-294.2zm-12.3 281.9c-74.3 74.3-195.3 74.3-269.6 0-74.3-74.3-74.3-195.3 0-269.6s195.3-74.3 269.6 0c74.4 74.3 74.4 195.3 0 269.6z"}}),e("path",{staticClass:"st0",attrs:{d:"M340.2 160l-84.4 84.2-84-83.8-11.8 11.8 84 83.8-84 83.8 11.8 11.8 84-83.8 84.4 84.2 11.8-11.8-84.4-84.2 84.4-84.2z"}})])])])],1)])},h=[],p={render:f,staticRenderFns:h},u=p,m=e("VU/8"),b=i,g=m(d,u,!1,b,"data-v-7f905529",null);t.a=g.exports},"1HIy":function(n,t,e){"use strict";function i(n){e("EP44")}var o={name:"group-title"},a=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"weui-cells__title"},[n._t("default")],2)},l=[],r={render:a,staticRenderFns:l},s=r,c=e("VU/8"),d=i,f=c(o,s,!1,d,null,null);t.a=f.exports},"3qjW":function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n#detail[data-v-2cadf2b0] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1010;\n  background: #f8f8f8;\n  width: 100%;\n}\n#detail header.head[data-v-2cadf2b0] {\n  position: relative;\n  width: 1100;\n  height: 44px;\n  background: #ac9375;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  line-height: 44px;\n}\n#detail header.head img[data-v-2cadf2b0] {\n  position: absolute;\n  left: 10px;\n  top: 12px;\n}\n#detail input[data-v-2cadf2b0]:disabled {\n  color: #666;\n}\n#detail .box[data-v-2cadf2b0] {\n  margin-bottom: 53px;\n}\n#detail .box .pzimg[data-v-2cadf2b0] {\n  margin-top: 0.77em;\n  /*margin-bottom: 0.3em;*/\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n#detail .btn[data-v-2cadf2b0] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: 53px;\n  background: #ac9375;\n  width: 100%;\n}\n#detail .checking[data-v-2cadf2b0] {\n  text-align: center;\n  color: #fff;\n  font-size: 16px;\n  line-height: 53px;\n}\n#detail .wait[data-v-2cadf2b0] {\n  text-align: center;\n  line-height: 53px;\n  color: #fff;\n  font-size: 16px;\n}\n",""])},EP44:function(n,t,e){var i=e("ftOY");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("327eeb00",i,!0,{})},Hq3I:function(n,t,e){var i=e("dhOn");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("d14847c8",i,!0,{})},VBKc:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n.button[data-v-7f905529] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 53px;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.button button[data-v-7f905529] {\n  width: 33.3%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 13px;\n}\n",""])},dhOn:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n.button[data-v-67125327] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 53px;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.button button[data-v-67125327] {\n  width: 50%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 13px;\n}\n.button .ll[data-v-67125327] {\n  position: relative;\n  width: 50%;\n  text-align: center;\n}\n.button .ll .flexb[data-v-67125327] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 53px;\n  opacity: 0;\n}\n.button .ll .up[data-v-67125327] {\n  color: #fff;\n  font-size: 12px;\n  line-height: 53px;\n}\n",""])},ftOY:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content\'s padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-cell_access {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  color: inherit;\n}\n.weui-cell_access:active {\n  background-color: #ECECEC;\n}\n.weui-cell_access .weui-cell__ft {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access .weui-cell__ft:after {\n  content: " ";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 2px;\n}\n.weui-cell_link {\n  color: #586C94;\n  font-size: 14px;\n}\n.weui-cell_link.weui-cell:first-child:before {\n  display: block;\n}\n.weui-cell_access.vux-cell-box {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access.vux-cell-box:after {\n  content: " ";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 17px;\n}\n.weui-cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui-cells:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells__title {\n  margin-top: 0.77em;\n  margin-bottom: 0.3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n.weui-cells__title + .weui-cells {\n  margin-top: 0;\n}\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #999999;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui-cell:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-cell:first-child:before {\n  display: none;\n}\n.weui-cell_primary {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.weui-cell__bd {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui-cell__ft {\n  text-align: right;\n  color: #999999;\n}\n.vux-cell-justify {\n  height: 1.41176471em;\n}\n.vux-cell-justify.vux-cell-justify:after {\n  content: ".";\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n',""])},kXR5:function(n,t,e){var i=e("3qjW");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("3412bfaf",i,!0,{})},sILi:function(n,t,e){"use strict";function i(n){e("kXR5")}Object.defineProperty(t,"__esModule",{value:!0});var o=e("mvHQ"),a=e.n(o),l=e("rHil"),r=e("1HIy"),s=e("1DHf"),c=e("pDNl"),d=e("wdEt"),f=e("+bFd"),h=e("Bfwr"),p=e("63CM"),u=e("gyMJ"),m=(p.a,l.a,c.a,h.a,s.a,r.a,d.a,f.a,{directives:{TransferDom:p.a},components:{Group:l.a,XInput:c.a,Loading:h.a,Cell:s.a,GroupTitle:r.a,vButton:d.a,vMutton:f.a},data:function(){return{info:{},id:"",name:"加载中...",showLoad:!1,show:!1,returnImg:"",status:"",imgUrl:"../../static/u609.png"}},mounted:function(){var n=this;setTimeout(function(){n.getOneZZ()},300),this.status=this.$route.query.st},methods:{showLoading:function(){this.showLoad=!0},hideLoading:function(){this.showLoad=!1},reload:function(){window.location.reload()},showImg:function(n){this.show=!0,this.returnImg=n},goBack:function(){this.$router.push({name:"lzdinfo",params:{id:4}})},getOneZZ:function(){var n=this;this.showLoading(),this.id=this.$route.query.id;var t=a()({sub_bill_id:this.id});Object(u.n)(t).then(function(t){t.succ>0?(n.hideLoading(),n.status=t.data.status,"100"===t.data.status&&(n.$refs.box.style.marginBottom="0px"),"100"!==t.data.status&&"2"!==t.data.status||!t.data.img_url||(n.show=!0,n.returnImg=t.data.img_url),n.info=t.data):-1===Number(t.succ)||-2===Number(t.succ)?(alert("请重新登录！"),n.$router.push({name:"root"})):(n.name="加载失败,刷新重试！",setTimeout(function(){n.hideLoading()},800),n.info={})})}}}),b=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"detail"}},[e("header",{staticClass:"head"},[e("img",{staticStyle:{padding:"0 10px 5px 6px"},attrs:{src:n.imgUrl,width:"12",height:"24",alt:""},on:{click:n.goBack}}),n._v("详细信息")]),n._v(" "),e("div",{ref:"box",staticClass:"box"},[e("group",{attrs:{"label-width":"5em","label-margin-right":"2em","label-align":"right"}},[e("group-title",{attrs:{slot:"title"},slot:"title"},[n._v("打款人信息"),e("span",{staticStyle:{float:"right"}})]),n._v(" "),e("x-input",{staticStyle:{"font-size":"14px"},attrs:{title:"昵称：",disabled:""},model:{value:n.info.user_buy,callback:function(t){n.$set(n.info,"user_buy",t)},expression:"info.user_buy"}}),n._v(" "),e("x-input",{staticStyle:{"font-size":"14px"},attrs:{title:"手机号：",disabled:""},model:{value:n.info.phone_buy,callback:function(t){n.$set(n.info,"phone_buy",t)},expression:"info.phone_buy"}}),n._v(" "),e("x-input",{staticStyle:{"font-size":"14px"},attrs:{title:"推荐人：",disabled:""},model:{value:n.info.referee_buy,callback:function(t){n.$set(n.info,"referee_buy",t)},expression:"info.referee_buy"}})],1),n._v(" "),e("group",{attrs:{"label-width":"5em","label-margin-right":"2em","label-align":"right"}},[e("group-title",{attrs:{slot:"title"},slot:"title"},[n._v("收款人信息"),e("span",{staticStyle:{float:"right"}})]),n._v(" "),e("x-input",{staticStyle:{"font-size":"14px"},attrs:{title:"昵称：",disabled:""},model:{value:n.info.user_sell,callback:function(t){n.$set(n.info,"user_sell",t)},expression:"info.user_sell"}}),n._v(" "),e("x-input",{staticStyle:{"font-size":"14px"},attrs:{title:"手机号：",disabled:""},model:{value:n.info.phone_sell,callback:function(t){n.$set(n.info,"phone_sell",t)},expression:"info.phone_sell"}}),n._v(" "),e("x-input",{staticStyle:{"font-size":"14px"},attrs:{title:"推荐人：",disabled:""},model:{value:n.info.referee_sell,callback:function(t){n.$set(n.info,"referee_sell",t)},expression:"info.referee_sell"}})],1),n._v(" "),e("group",{attrs:{"label-width":"5em","label-margin-right":"2em","label-align":"right"}},[e("group-title",{attrs:{slot:"title"},slot:"title"},[n._v("账户信息"),e("span",{staticStyle:{float:"right"}})]),n._v(" "),e("x-input",{staticStyle:{"font-size":"14px"},attrs:{title:"开户人：",disabled:""},model:{value:n.info.truename,callback:function(t){n.$set(n.info,"truename",t)},expression:"info.truename"}}),n._v(" "),e("x-input",{staticStyle:{"font-size":"14px"},attrs:{title:"账户号码：",disabled:""},model:{value:n.info.account_val,callback:function(t){n.$set(n.info,"account_val",t)},expression:"info.account_val"}}),n._v(" "),e("x-input",{staticStyle:{"font-size":"14px"},attrs:{disabled:"",title:"所属银行："},model:{value:n.info.account_belong,callback:function(t){n.$set(n.info,"account_belong",t)},expression:"info.account_belong"}})],1),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],staticStyle:{background:"#f7f7f7"}},[n._m(0),n._v(" "),e("img",{staticStyle:{"text-align":"center"},attrs:{src:n.returnImg,width:"100%",alt:""}})])],1),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("loading",{attrs:{text:n.name},model:{value:n.showLoad,callback:function(t){n.showLoad=t},expression:"showLoad"}})],1),n._v(" "),"1"===n.status?e("div",{staticClass:"btn wait"},[n._v("等待对方上传凭证")]):"2"===n.status?e("div",{staticClass:"btn"},[e("v-mutton",{attrs:{id:n.id},on:{confirmOk:n.reload}})],1):"100"===n.status?e("div"):"4"===n.status?e("div",{staticClass:"btn checking"},[n._v("工作人员审核中")]):n._e()])},g=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"pzimg"},[e("span",[n._v("凭证图片")])])}],v={render:b,staticRenderFns:g},w=v,x=e("VU/8"),y=i,C=x(m,w,!1,y,"data-v-2cadf2b0",null);t.default=C.exports},wdEt:function(n,t,e){"use strict";function i(n){e("Hq3I")}var o=e("mvHQ"),a=e.n(o),l=e("pFYg"),r=e.n(l),s=(e("gyMJ"),e("/kga")),c=e("62KO"),d=e("Bfwr"),f=e("63CM"),h=e("rLAy"),p=(f.a,String,Boolean,s.a,c.a,h.a,d.a,{directives:{TransferDom:f.a},props:{id:{type:String},stt:{type:Boolean}},data:function(){return{buttonShow:!1,img_base64:"",showCon:!1,name:"打款，上传凭证中...",stc:0,uploadShow:!1,showTip:!1,show:!1,imagePath:"",showRefuse:!1}},components:{XDialog:s.a,Confirm:c.a,Toast:h.a,Loading:d.a},mounted:function(){this.stc=Number(this.$route.query.st)},methods:{onConfirmPay:function(){window.location.href="/#/home/page/fdinfo?id="+this.id+"&st=2",this.stc=2},onCancelPay:function(){this.showCon=!1},confirmPay:function(){this.showCon=!0},upload:function(n){var t=this,e=n.target.files[0];if(!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(n.target.value))return alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种"),!1;var i=new FileReader;i.onload=function(n){var e=void 0;e="object"===r()(n.target.result)?window.URL.createObjectURL(new Blob([n.target.result])):n.target.result,t.img_base64=e,t.uploadShow=!0,t.stc=2,t.$emit("imgurl",{url:e})},i.readAsDataURL(e)},showLoading:function(){this.buttonShow=!0},hideLoading:function(){this.buttonShow=!1},refusePay:function(){this.showTip=!0},onCancel:function(){this.showTip=!1},onConfirm:function(){this.showRefuse=!0,this.showTip=!1;a()({sub_bill_id:this.id});this.$router.push("/")}}}),u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"button"},[e("label",{directives:[{name:"show",rawName:"v-show",value:1===n.stc,expression:"stc === 1"}],staticClass:"ll",attrs:{for:"f"}},[e("span",{staticClass:"up"},[n._v("选择图片")]),e("input",{staticClass:"flexb",attrs:{type:"file",id:"f"},on:{change:n.upload}})]),n._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:1===n.stc,expression:"stc === 1"}],staticClass:"refuse",on:{click:n.refusePay}},[n._v("拒绝打款")]),n._v(" "),e("label",{directives:[{name:"show",rawName:"v-show",value:2===n.stc,expression:"stc === 2"}],staticClass:"ll",attrs:{for:"f"}},[e("span",{staticClass:"up"},[n._v("重新选择")]),e("input",{staticClass:"flexb",attrs:{type:"file",id:"f"},on:{change:n.upload}})]),n._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:n.uploadShow,expression:"uploadShow"}],staticClass:"refuse",on:{click:n.confirmPay}},[n._v(" 确定打款")]),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("loading",{attrs:{text:n.name},model:{value:n.buttonShow,callback:function(t){n.buttonShow=t},expression:"buttonShow"}})],1)]),n._v(" "),e("toast",{attrs:{type:"text",width:"20em",time:2e3},model:{value:n.showRefuse,callback:function(t){n.showRefuse=t},expression:"showRefuse"}},[n._v("等待审核后解冻")]),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("confirm",{attrs:{title:"拒绝打款会冻结账户"},on:{"on-cancel":n.onCancel,"on-confirm":n.onConfirm},model:{value:n.showTip,callback:function(t){n.showTip=t},expression:"showTip"}},[e("p",{staticStyle:{"text-align":"center"}},[n._v(n._s("确定吗？"))])])],1),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("confirm",{attrs:{title:"确定打款"},on:{"on-cancel":n.onCancelPay,"on-confirm":n.onConfirmPay},model:{value:n.showCon,callback:function(t){n.showCon=t},expression:"showCon"}},[e("p",{staticStyle:{"text-align":"center"}},[n._v(n._s("确定吗？"))])])],1)],1)},m=[],b={render:u,staticRenderFns:m},g=b,v=e("VU/8"),w=i,x=v(p,g,!1,w,"data-v-67125327",null);t.a=x.exports},zKSI:function(n,t,e){var i=e("VBKc");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("0a518144",i,!0,{})}});