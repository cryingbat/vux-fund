webpackJsonp([18],{YLAY:function(n,t,a){t=n.exports=a("FZ+f")(!1),t.push([n.i,"\n.nickname[data-v-b8f85a42] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2000;\n  background: #f8f8f8;\n  width: 100%;\n}\n.nickname header.head[data-v-b8f85a42] {\n  position: relative;\n  width: 1100;\n  height: 44px;\n  background: #ac9375;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  line-height: 44px;\n}\n.nickname header.head img[data-v-b8f85a42] {\n  position: absolute;\n  left: 10px;\n  top: 12px;\n}\n.nickname .l[data-v-b8f85a42] {\n  text-align: left;\n  float: left;\n  padding: 0 16px 16px 16px;\n}\n.nickname #pass[data-v-b8f85a42],\n.nickname #rpass[data-v-b8f85a42] {\n  display: block;\n  width: 85%;\n  margin: 0 auto;\n  padding: 6px;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #ccc;\n}\n.nickname .btn[data-v-b8f85a42] {\n  background: -webkit-gradient(linear, left top, right top, from(#d5b896), color-stop(4%, #d5b896), color-stop(100%, #aa8d6a), to(#aa8d6a));\n  background: linear-gradient(90deg, #d5b896 0%, #d5b896 4%, #aa8d6a 100%, #aa8d6a 100%);\n  width: 90%;\n  margin: 0 auto;\n}\n",""])},"d2f/":function(n,t,a){var e=a("YLAY");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("675dda01",e,!0,{})},qYfo:function(n,t,a){"use strict";function e(n){a("d2f/")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("mvHQ"),o=a.n(i),r=a("pDNl"),s=a("2sLL"),c=(a("gyMJ"),r.a,s.a,{data:function(){return{imgUrl:"static/u609.png",nick:""}},methods:{goBack:function(){this.$router.back(-1)},onConfirm:function(){},sub_nick:function(){if(this.nick.length<=0)alert("请完善信息");else{o()({nickname:this.nick});alert("修改成功！"),this.$router.push({name:"resetInfo"})}}},components:{XInput:r.a,XButton:s.a}}),d=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"nickname"},[a("header",{staticClass:"head"},[a("img",{staticStyle:{padding:"0 10px 5px 6px"},attrs:{src:n.imgUrl,width:"12",height:"24",alt:""},on:{click:n.goBack}}),n._v("修改昵称")]),n._v(" "),a("label",{staticClass:"l",staticStyle:{"padding-top":"16px"},attrs:{for:"pass"}},[n._v("昵称")]),n._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:n.nick,expression:"nick"}],attrs:{type:"text",id:"pass",placeholder:"请输入您的昵称"},domProps:{value:n.nick},on:{input:function(t){t.target.composing||(n.nick=t.target.value)}}}),a("br"),n._v(" "),a("x-button",{staticClass:"btn",attrs:{type:"primary"},nativeOn:{click:function(t){return n.sub_nick(t)}}},[n._v("确认")])],1)},l=[],p={render:d,staticRenderFns:l},f=p,u=a("VU/8"),b=e,g=u(c,f,!1,b,"data-v-b8f85a42",null);t.default=g.exports}});