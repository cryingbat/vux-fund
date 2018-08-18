<template>
	<div id='regist'>
		<div class="title">投资理财</div>
		<div class="regist_box">
			<div class="icon">
				<span class="phone_img"><img :src="icon_phone" width='26' alt=""></span>
				<span class="pro_img"><img :src="icon_pro" width='26' alt=""></span>
				<span class="user_img"><img :src="icon_user" width='26' alt=""></span>
				<span class="clock_img"><img :src="icon_clock" width='26' alt=""></span>
				<span class="reclock_img"><img :src="icon_rclock" width='32' alt=""></span>
				<span class="topUser_img"><img :src="icon_topUser" width='26' alt=""></span>
			</div>
			<div class="content">
				<div class="phone">
					<input type="text" v-model='phone' maxlength="11" @blur='check_phone' placeholder="请输入手机号">
					<div class="tip" v-show='phone_null_tip_show'>*手机号不能为空</div>
					<div class="tip" v-show='phone_err_tip_show'>*手机格式不正确</div>
					<div class="tip" v-show='phone_already_tip_show'>*手机号码已存在</div>
				</div>
				<div class="yzm"><input type="text" v-model='verify' placeholder="请输入验证码"></div>
				<div class="nickname">
					<input type="text" v-model='nickname' @blur='check_nickname' placeholder="请输入昵称">
					<div class="tip" v-show='nickname_null_tip_show'>*昵称不能为空</div>
					<div class="tip" v-show='nickname_err_tip_show'>*限制2-6位(不含特殊字符)</div>
				</div>
				<div class="passwd">
					<input type="password" v-model='password' @blur='check_pass' placeholder="请输入密码">
					<div class="tip" v-show='pass_err_tip_show'>*8-16位字母数字下划线</div>
					<div class="tip" v-show='pass_null_tip_show'>*密码不能为空</div>
				</div>
				<div class="repass">
					<input type="password" v-model='password2' @keyup='rcheck_pass' placeholder="请确认您的密码">
					<div class="tip" v-show='rpass_null_tip_show'>*请再输一次密码</div>
					<div class="tip" v-show='rpass_err_tip_show'>*两次密码不一致</div>

				</div>
				<div class="top_phone"><input type="text" v-model='tuiname' disabled="disabled" placeholder="推荐人号码"></div>
				<!-- <img :src="imgUrl" alt=""> -->
				<button class="getVerify" @click='dTime'>{{info}}</button>
			</div>
		</div>
		<!-- 注册按钮 -->
		<button class='regist' @click='register' v-bind:disabled="disabledState">注册</button>
	</div>
</template>
<script>
import { XInput, Group, XButton } from "vux";
import { regist, referee, refereePhone } from "@/api/index";
export default {
    components: {
        XInput,
        XButton,
        Group
    },
    data() {
        return {
            imgUrl: "api.php/home/user/referee",
            icon_phone: "../../../static/u1139.png",
            icon_pro: "../../../static/u1209.png",
            icon_user: "../../../static/u1207.png",
            icon_clock: "../../../static/u1143.png",
            icon_rclock: "../../../static/u1203.png",
            icon_topUser: "../../../static/u1205.png",
            nickname: "",
            tuiname: "",
            phone: "",
            time: 60,
            info: "获取验证码",
            verify: "",
            password: "",
            password2: "",
            disabledState: true,
            phone_null_tip_show: false,
            phone_err_tip_show: false,
            phone_already_tip_show: false,
            nickname_err_tip_show: false,
            nickname_null_tip_show: false,
            pass_err_tip_show: false,
            pass_null_tip_show: false,
            rpass_null_tip_show: false,
            rpass_err_tip_show: false
        };
    },
    mounted() {
        let params = JSON.stringify({ referee: this.$route.query.referee });
        refereePhone(params).then(res => {
            this.tuiname = res.data.phone;
        });
    },
    methods: {
        dTime() {
            let return_time = Number(this.time);
            var timer = setInterval(() => {
                return_time--;
                if (return_time < 0) {
                    clearInterval(timer);
                    this.info = "获取验证码";
                    return;
                }
                this.info = "剩余" + return_time + "秒";
            }, 1000);
        },
        check_phone() {
            let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (this.phone.length <= 0) {
                this.phone_null_tip_show = true;
                this.phone_err_tip_show = false;
            } else {
                this.phone_null_tip_show = false;
                if (!reg.test(this.phone)) {
                    this.phone_err_tip_show = true;
                } else {
                    this.phone_err_tip_show = false;
                }
            }
        },
        check_nickname() {
            let reg = /^[0-9a-zA-Z\u4e00-\u9fa5_]{2,6}$/;
            if (this.nickname.length <= 0) {
                this.nickname_null_tip_show = true;
                this.nickname_err_tip_show = false;
            } else {
                this.nickname_null_tip_show = false;
                if (!reg.test(this.nickname)) {
                    this.nickname_err_tip_show = true;
                } else {
                    this.nickname_err_tip_show = false;
                }
            }
        },
        check_pass() {
            let reg = /^[a-zA-Z0-9\d_]{8,}$/;
            if (this.password.length <= 0) {
                this.pass_null_tip_show = true;
                this.pass_err_tip_show = false;
            } else {
                this.pass_null_tip_show = false;
                if (!reg.test(this.password)) {
                    this.pass_err_tip_show = true;
                } else {
                    this.pass_err_tip_show = false;
                }
            }
        },
        rcheck_pass() {
            if (this.password.length <= 0) {
                this.pass_null_tip_show = true;
            } else {
                if (this.password2.length <= 0) {
                    this.rpass_null_tip_show = true;
                    this.rpass_err_tip_show = false;
                } else {
                    this.rpass_null_tip_show = false;
                    if (this.password2 !== this.password) {
                        this.rpass_err_tip_show = true;
                    } else {
                        this.rpass_err_tip_show = false;
                    }
                }
            }
            let state1 = this.phone_null_tip_show;
            let state2 = this.phone_err_tip_show;
            let state3 = this.phone_already_tip_show;
            let state4 = this.nickname_err_tip_show;
            let state5 = this.nickname_null_tip_show;
            let state6 = this.pass_err_tip_show;
            let state7 = this.pass_null_tip_show;
            let state8 = this.rpass_null_tip_show;
            let state9 = this.rpass_err_tip_show;
            if (
                this.password2.length > 0 &&
                this.password.length > 0 &&
                this.phone.length > 0 &&
                this.nickname.length > 0 &&
                !state1 &&
                !state2 &&
                !state4 &&
                !state5 &&
                !state6 &&
                !state7 &&
                !state8 &&
                !state9
            ) {
                this.disabledState = false;
            } else {
                this.disabledState = true;
            }
        },
        register() {
            let phone = this.phone;
            let nickname = this.nickname;
            let passwd = this.password;
            let repasswd = this.password2;
            let referee = this.tuiname;
            let params = JSON.stringify({
                phone: phone,
                passwd: passwd,
                nickname: nickname,
                repasswd: repasswd,
                code: "123465",
                referee: referee
            });
            regist(params).then(res => {
                if (res.succ > 0) {
                    alert("注册成功！");
                    this.$router.push({
                        name: "root"
                    });
                } else {
                    alert("注册失败！");
                }
            });
        }
    }
};
</script>
<style scoped lang='less'>
#regist {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    .title {
        text-align: center;
        font-weight: 700;
        margin: 60px 0 30px 0;
        font-size: 32px;
        font-style: normal;
        color: #ac9377;
    }
    .regist_box {
        width: 85%;
        height: 326px;
        border-radius: 10px;
        border: 1px solid #ccc;
        margin: 0 auto;
        .icon {
            position: relative;
            width: 17%;
            height: 100%;
            float: left;
            .phone_img {
                position: absolute;
                left: 12px;
                top: 20px;
            }
            .pro_img {
                position: absolute;
                left: 12px;
                top: 70px;
            }
            .user_img {
                position: absolute;
                left: 11px;
                top: 125px;
            }
            .clock_img {
                position: absolute;
                left: 11px;
                top: 175px;
            }
            .reclock_img {
                position: absolute;
                left: 8px;
                top: 225px;
            }
            .topUser_img {
                position: absolute;
                left: 12px;
                top: 278px;
            }
        }
        .content {
            position: relative;
            width: 83%;
            height: 100%;
            float: right;
            .getVerify {
                position: absolute;
                right: 20px;
                top: 63px;
                width: 89px;
                height: 31px;
                background: inherit;
                background-color: rgba(172, 147, 119, 1);
                border: none;
                border-radius: 6px;
                -moz-box-shadow: none;
                -webkit-box-shadow: none;
                box-shadow: none;
                color: #ffffff;
            }
            div {
                position: relative;
                margin: 15px 0px;
                input {
                    width: 245px;
                    padding: 2px 0 15px 8px;
                    background: transparent;
                    border: none;
                    outline: none;
                    border-bottom: 1px solid #ccc;
                }
                .tip {
                    position: absolute;
                    top: 3px;
                    right: 10px;
                    color: red;
                    font-size: 12px;
                }
            }
            .top_phone {
                input {
                    border: none;
                }
            }
        }
    }
    .regist {
        position: relative;
        left: 50%;
        margin-left: -42%;
        color: #fff;
        width: 85%;
        padding: 13px 0;
        border: none;
        border-radius: 8px;
        text-align: center;
        background: linear-gradient(
            90deg,
            rgba(189, 169, 147, 1) 0%,
            rgba(189, 169, 147, 1) 0%,
            rgba(172, 147, 119, 1) 100%,
            rgba(172, 147, 119, 1) 100%
        );
        margin-top: 60px;
    }
}
</style>
