webpackJsonp([24],{"06wy":function(t,e,n){var a=n("sr1B");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("29cc9b65",a,!0,{})},"5PBF":function(t,e,n){"use strict";function a(t){n("06wy")}Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{qrcodeImg:"../../../../static/wechat.jpg",imgUrl:"../../../../static/u609.png"}},methods:{goBack:function(){this.$router.back(-1)}}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qrcode"},[n("header",{staticClass:"head"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}],staticStyle:{padding:"0 10px 5px 6px"},attrs:{width:"12",height:"24",alt:""},on:{click:t.goBack}}),t._v("推荐二维码")]),t._v(" "),n("div",{staticClass:"box"},[n("div",{staticClass:"white"},[n("div",{staticStyle:{width:"200px",height:"200px",margin:"0 auto"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.qrcodeImg,expression:"qrcodeImg"}],attrs:{width:"200",alt:""}})]),t._v(" "),n("p",[t._v("扫一扫, 发展团队")])])])])},r=[],d={render:o,staticRenderFns:r},c=d,s=n("VU/8"),l=a,p=s(i,c,!1,l,"data-v-78db692e",null);e.default=p.exports},sr1B:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.qrcode[data-v-78db692e] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  text-align: center;\n  z-index: 1005;\n  background: #f8f8f8;\n  width: 100%;\n}\n.qrcode header.head[data-v-78db692e] {\n  position: relative;\n  width: 1100;\n  height: 44px;\n  background: #ac9375;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  line-height: 44px;\n}\n.qrcode header.head img[data-v-78db692e] {\n  position: absolute;\n  left: 10px;\n  top: 12px;\n}\n.qrcode .box[data-v-78db692e] {\n  position: relative;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n}\n.qrcode .box .white[data-v-78db692e] {\n  position: absolute;\n  top: 100px;\n  left: 50%;\n  margin-left: -40%;\n  border-radius: 10px;\n  width: 80%;\n  height: 300px;\n  background: #fff;\n}\n.qrcode .box .white p[data-v-78db692e] {\n  margin-top: 38px;\n}\n.qrcode .box .white img[data-v-78db692e] {\n  margin-top: 26px;\n}\n",""])}});