webpackJsonp([17],{JgnV:function(t,s,e){var i=e("Z2py");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("c296e2b8",i,!0,{})},Z2py:function(t,s,e){s=t.exports=e("FZ+f")(!1),s.push([t.i,"\n#regist[data-v-db1a4bb6] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #fff;\n  width: 100%;\n  height: 100%;\n}\n#regist .title[data-v-db1a4bb6] {\n  text-align: center;\n  font-weight: 700;\n  margin: 60px 0 30px 0;\n  font-size: 32px;\n  font-style: normal;\n  color: #ac9377;\n}\n#regist .regist_box[data-v-db1a4bb6] {\n  width: 85%;\n  height: 326px;\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  margin: 0 auto;\n}\n#regist .regist_box .icon[data-v-db1a4bb6] {\n  position: relative;\n  width: 17%;\n  height: 100%;\n  float: left;\n}\n#regist .regist_box .icon .phone_img[data-v-db1a4bb6] {\n  position: absolute;\n  left: 12px;\n  top: 20px;\n}\n#regist .regist_box .icon .pro_img[data-v-db1a4bb6] {\n  position: absolute;\n  left: 12px;\n  top: 70px;\n}\n#regist .regist_box .icon .user_img[data-v-db1a4bb6] {\n  position: absolute;\n  left: 11px;\n  top: 125px;\n}\n#regist .regist_box .icon .clock_img[data-v-db1a4bb6] {\n  position: absolute;\n  left: 11px;\n  top: 175px;\n}\n#regist .regist_box .icon .reclock_img[data-v-db1a4bb6] {\n  position: absolute;\n  left: 8px;\n  top: 225px;\n}\n#regist .regist_box .icon .topUser_img[data-v-db1a4bb6] {\n  position: absolute;\n  left: 12px;\n  top: 278px;\n}\n#regist .regist_box .content[data-v-db1a4bb6] {\n  position: relative;\n  width: 83%;\n  height: 100%;\n  float: right;\n}\n#regist .regist_box .content .getVerify[data-v-db1a4bb6] {\n  position: absolute;\n  right: 20px;\n  top: 63px;\n  width: 89px;\n  height: 31px;\n  background: inherit;\n  background-color: #ac9377;\n  border: none;\n  border-radius: 6px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  color: #ffffff;\n}\n#regist .regist_box .content div[data-v-db1a4bb6] {\n  position: relative;\n  margin: 15px 0px;\n}\n#regist .regist_box .content div input[data-v-db1a4bb6] {\n  width: 245px;\n  padding: 2px 0 15px 8px;\n  background: transparent;\n  border: none;\n  outline: none;\n  border-bottom: 1px solid #ccc;\n}\n#regist .regist_box .content div .tip[data-v-db1a4bb6] {\n  position: absolute;\n  top: 3px;\n  right: 10px;\n  color: red;\n  font-size: 12px;\n}\n#regist .regist_box .content .top_phone input[data-v-db1a4bb6] {\n  border: none;\n}\n#regist .regist[data-v-db1a4bb6] {\n  position: relative;\n  left: 50%;\n  margin-left: -42%;\n  color: #fff;\n  width: 85%;\n  padding: 13px 0;\n  border: none;\n  border-radius: 8px;\n  text-align: center;\n  background: -webkit-gradient(linear, left top, right top, from(#bda993), color-stop(0%, #bda993), color-stop(100%, #ac9377), to(#ac9377));\n  background: linear-gradient(90deg, #bda993 0%, #bda993 0%, #ac9377 100%, #ac9377 100%);\n  margin-top: 60px;\n}\n",""])},"pLH+":function(t,s,e){"use strict";function i(t){e("JgnV")}Object.defineProperty(s,"__esModule",{value:!0});var n=e("mvHQ"),a=e.n(n),o=e("pDNl"),r=e("rHil"),p=e("2sLL"),_=e("gyMJ"),h=(o.a,p.a,r.a,{components:{XInput:o.a,XButton:p.a,Group:r.a},data:function(){return{imgUrl:"api.php/home/user/referee",icon_phone:"../../../static/u1139.png",icon_pro:"../../../static/u1209.png",icon_user:"../../../static/u1207.png",icon_clock:"../../../static/u1143.png",icon_rclock:"../../../static/u1203.png",icon_topUser:"../../../static/u1205.png",nickname:"",tuiname:"",phone:"",time:60,info:"获取验证码",verify:"",password:"",password2:"",disabledState:!0,phone_null_tip_show:!1,phone_err_tip_show:!1,phone_already_tip_show:!1,nickname_err_tip_show:!1,nickname_null_tip_show:!1,pass_err_tip_show:!1,pass_null_tip_show:!1,rpass_null_tip_show:!1,rpass_err_tip_show:!1}},mounted:function(){var t=this,s=a()({referee:this.$route.query.referee});Object(_.o)(s).then(function(s){t.tuiname=s.data.phone})},methods:{dTime:function(){var t=this,s=Number(this.time),e=setInterval(function(){if(--s<0)return clearInterval(e),void(t.info="获取验证码");t.info="剩余"+s+"秒"},1e3)},check_phone:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;this.phone.length<=0?(this.phone_null_tip_show=!0,this.phone_err_tip_show=!1):(this.phone_null_tip_show=!1,t.test(this.phone)?this.phone_err_tip_show=!1:this.phone_err_tip_show=!0)},check_nickname:function(){var t=/^[0-9a-zA-Z\u4e00-\u9fa5_]{2,6}$/;this.nickname.length<=0?(this.nickname_null_tip_show=!0,this.nickname_err_tip_show=!1):(this.nickname_null_tip_show=!1,t.test(this.nickname)?this.nickname_err_tip_show=!1:this.nickname_err_tip_show=!0)},check_pass:function(){var t=/^[a-zA-Z0-9\d_]{8,}$/;this.password.length<=0?(this.pass_null_tip_show=!0,this.pass_err_tip_show=!1):(this.pass_null_tip_show=!1,t.test(this.password)?this.pass_err_tip_show=!1:this.pass_err_tip_show=!0)},rcheck_pass:function(){this.password.length<=0?this.pass_null_tip_show=!0:this.password2.length<=0?(this.rpass_null_tip_show=!0,this.rpass_err_tip_show=!1):(this.rpass_null_tip_show=!1,this.password2!==this.password?this.rpass_err_tip_show=!0:this.rpass_err_tip_show=!1);var t=this.phone_null_tip_show,s=this.phone_err_tip_show,e=(this.phone_already_tip_show,this.nickname_err_tip_show),i=this.nickname_null_tip_show,n=this.pass_err_tip_show,a=this.pass_null_tip_show,o=this.rpass_null_tip_show,r=this.rpass_err_tip_show;!(this.password2.length>0&&this.password.length>0&&this.phone.length>0&&this.nickname.length>0)||t||s||e||i||n||a||o||r?this.disabledState=!0:this.disabledState=!1},register:function(){var t=this,s=this.phone,e=this.nickname,i=this.password,n=this.password2,o=this.tuiname,r=a()({phone:s,passwd:i,nickname:e,repasswd:n,code:"123465",referee:o});Object(_.p)(r).then(function(s){s.succ>0?(alert("注册成功！"),t.$router.push({name:"root"})):alert("注册失败！")})}}}),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"regist"}},[e("div",{staticClass:"title"},[t._v("投资理财")]),t._v(" "),e("div",{staticClass:"regist_box"},[e("div",{staticClass:"icon"},[e("span",{staticClass:"phone_img"},[e("img",{attrs:{src:t.icon_phone,width:"26",alt:""}})]),t._v(" "),e("span",{staticClass:"pro_img"},[e("img",{attrs:{src:t.icon_pro,width:"26",alt:""}})]),t._v(" "),e("span",{staticClass:"user_img"},[e("img",{attrs:{src:t.icon_user,width:"26",alt:""}})]),t._v(" "),e("span",{staticClass:"clock_img"},[e("img",{attrs:{src:t.icon_clock,width:"26",alt:""}})]),t._v(" "),e("span",{staticClass:"reclock_img"},[e("img",{attrs:{src:t.icon_rclock,width:"32",alt:""}})]),t._v(" "),e("span",{staticClass:"topUser_img"},[e("img",{attrs:{src:t.icon_topUser,width:"26",alt:""}})])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"phone"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",maxlength:"11",placeholder:"请输入手机号"},domProps:{value:t.phone},on:{blur:t.check_phone,input:function(s){s.target.composing||(t.phone=s.target.value)}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.phone_null_tip_show,expression:"phone_null_tip_show"}],staticClass:"tip"},[t._v("*手机号不能为空")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.phone_err_tip_show,expression:"phone_err_tip_show"}],staticClass:"tip"},[t._v("*手机格式不正确")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.phone_already_tip_show,expression:"phone_already_tip_show"}],staticClass:"tip"},[t._v("*手机号码已存在")])]),t._v(" "),e("div",{staticClass:"yzm"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.verify,expression:"verify"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.verify},on:{input:function(s){s.target.composing||(t.verify=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"nickname"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:t.nickname},on:{blur:t.check_nickname,input:function(s){s.target.composing||(t.nickname=s.target.value)}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.nickname_null_tip_show,expression:"nickname_null_tip_show"}],staticClass:"tip"},[t._v("*昵称不能为空")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.nickname_err_tip_show,expression:"nickname_err_tip_show"}],staticClass:"tip"},[t._v("*限制2-6位(不含特殊字符)")])]),t._v(" "),e("div",{staticClass:"passwd"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{blur:t.check_pass,input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.pass_err_tip_show,expression:"pass_err_tip_show"}],staticClass:"tip"},[t._v("*8-16位字母数字下划线")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.pass_null_tip_show,expression:"pass_null_tip_show"}],staticClass:"tip"},[t._v("*密码不能为空")])]),t._v(" "),e("div",{staticClass:"repass"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],attrs:{type:"password",placeholder:"请确认您的密码"},domProps:{value:t.password2},on:{keyup:t.rcheck_pass,input:function(s){s.target.composing||(t.password2=s.target.value)}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.rpass_null_tip_show,expression:"rpass_null_tip_show"}],staticClass:"tip"},[t._v("*请再输一次密码")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.rpass_err_tip_show,expression:"rpass_err_tip_show"}],staticClass:"tip"},[t._v("*两次密码不一致")])]),t._v(" "),e("div",{staticClass:"top_phone"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tuiname,expression:"tuiname"}],attrs:{type:"text",disabled:"disabled",placeholder:"推荐人号码"},domProps:{value:t.tuiname},on:{input:function(s){s.target.composing||(t.tuiname=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"getVerify",on:{click:t.dTime}},[t._v(t._s(t.info))])])]),t._v(" "),e("button",{staticClass:"regist",attrs:{disabled:t.disabledState},on:{click:t.register}},[t._v("注册")])])},c=[],d={render:l,staticRenderFns:c},v=d,u=e("VU/8"),w=i,m=u(h,v,!1,w,"data-v-db1a4bb6",null);s.default=m.exports}});