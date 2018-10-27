<template>
	<div id='login'>
		<div class="title">投资理财</div>

		<div class="enter_box">
			<div class="icon">
				<span class="phone_img"><img :src="icon_phone" width='26' alt=""></span>
				<span class="lock_img"><img :src="icon_clock" width='22' alt=""></span>
			</div>
			<div class="content">
				<div class="phone">
					<input type="text" v-model='phone' @blur="showTip" maxlength="11" placeholder="请输入手机号">
					<div class="tip" v-show='phone_err_tip'>*手机格式不正确</div>
					<div class="tip" v-show='phone_null_tip'>*手机号不能为空</div>
				</div>
				<div class="line"></div>
				<div class="password">
					<input type="password" v-model='password' @keyup="filter" placeholder="请输入密码">
					<div class="tip" v-show='pass_err_tip'>*8-16位字母数字下划线</div>
					<div class="tip" v-show='pass_null_tip'>*密码不能为空</div>
				</div>
			</div>
		</div>
		<div class="err_tip" v-show='err_show'>{{word}}</div>
		<!-- 登录按钮 -->
		<button @click='toPage' class='regist' v-bind:disabled="disabledState">登录</button>

	</div>
</template>
<script>
import { XInput, Group, XButton } from "vux";
import { login } from "@/api/index";
export default {
    components: {
        XInput,
        XButton,
        Group
    },
    data() {
        return {
            icon_phone: "static/u1139.png",
            icon_clock: "static/u1143.png",
            phone: "",
            phone_null_tip: false,
            phone_err_tip: false,
            pass_err_tip: false,
            pass_null_tip: false,
            word: "*账号密码不正确,请重新输入",
            password: "",
            disabledState: false,
            err_show: false
        };
    },
    methods: {
        showTip() {
            //手机号验证
            let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (this.phone.length <= 0) {
                this.phone_null_tip = true;
                this.err_show = false;
                this.phone_err_tip = false;
            } else {
                this.phone_null_tip = false;
                this.err_show = false;
                if (!reg.test(this.phone)) {
                    this.phone_err_tip = true;
                } else {
                    this.phone_err_tip = false;
                }
            }
        },
        toPage() {
            this.$router.push({
                name: "index",
                params: { id: 5 }
            });
            // let phone = this.phone;
            // let password = this.password;
            // let params = JSON.stringify({ phone: phone, passwd: password });
            // login(params).then(res => {
            //     // console.log(res);
            //     if (res.succ > 0) {
            //         this.err_show = false;
            //         this.$router.push({
            //             name: "index",
            //             params: { id: 5 }
            //         });
            //     } else {
            //         this.word = res.msg;
            //         this.err_show = true;
            //         setTimeout(() => {
            //             this.$router.push({
            //                 name: "root"
            //             });
            //         }, 500);
            //     }
            // });
        },
        filter() {
            //密码验证
            let reg = /^[a-zA-Z0-9\d_]{8,}$/;
            if (this.password.length <= 0) {
                this.err_show = false;
                this.pass_null_tip = true;
                this.pass_err_tip = false;
            } else {
                this.pass_null_tip = false;
                this.err_show = false;
                if (!reg.test(this.password)) {
                    this.pass_err_tip = true;
                } else {
                    this.pass_err_tip = false;
                }
            }
            let state1 = this.phone_null_tip;
            let state2 = this.pass_null_tip;
            let state3 = this.phone_err_tip;
            let state4 = this.pass_err_tip;
            if (
                this.phone.length > 0 &&
                this.password.length > 0 &&
                !state1 &&
                !state2 &&
                !state3 &&
                !state4
            ) {
                this.disabledState = false;
            } else {
                this.disabledState = true;
            }
        }
    }
};
</script>
<style scoped lang='less'>
#login {
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    .title {
        text-align: center;
        font-weight: 700;
        margin: 140px 0 80px 0;
        font-size: 32px;
        font-style: normal;
        color: #ac9377;
    }
    .enter_box {
        width: 85%;
        margin: 0 auto;
        height: 119px;
        border: 1px solid rgba(204, 204, 204, 1);
        border-radius: 10px;
        overflow: hidden;
        .icon {
            position: relative;
            width: 17%;
            height: 100%;
            float: left;
            .phone_img {
                position: absolute;
                left: 10px;
                top: 20px;
            }
            .lock_img {
                position: absolute;
                left: 11px;
                bottom: 20px;
            }
        }
        .content {
            position: relative;
            width: 80%;
            height: 100%;
            float: right;
            .phone {
                position: absolute;
                top: 15px;
                width: 100%;
                input {
                    padding: 8px 15px;
                    border: none;
                    background: transparent;
                    outline: none;
                }
                .tip {
                    position: absolute;
                    right: 10px;
                    top: 20px;
                    display: inline-block;
                    color: red;
                    font-size: 12px;
                    text-align: right;
                }
            }
            .password {
                position: absolute;
                bottom: 15px;
                input {
                    padding: 8px 15px;
                    outline: none;
                    border: none;
                    background: transparent;
                }
                .tip {
                    position: absolute;
                    right: -65px;
                    top: 20px;
                    display: inline-block;
                    color: red;
                    font-size: 12px;
                    text-align: right;
                }
            }
            .line {
                position: absolute;
                width: 100%;
                height: 1px;
                background: #ccc;
                top: 50%;
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
    .err_tip {
        position: absolute;
        left: 60%;
        margin-top: 12px;
        color: red;
        font-size: 12px;
        text-align: center;
    }
}
</style>
