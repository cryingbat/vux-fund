<template>
	<div class="repas">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>修改密码</header>
		<label for="pass" class="l" style='padding-top:16px'>旧密码</label>
		<input type="password" id='pass' v-model='oldpass' @keyup='check_oldpass' placeholder="请输入您的旧密码"><br>
		<span class="err_tip tip" v-show='old_type_err'>*8-16位字母数字下划线</span>
		<span class="null_tip tip" v-show='old_null'>*旧密码不能为空</span>
		<span class="null_tip" v-show='old_err'>*旧密码错误</span>
		<label for="rpass" class="l">新密码</label>
		<input type="password" id='rpass' v-model='password' @keyup='check_rpass' placeholder="请输入您的新密码"><br>
		<span class="err_tip tip" v-show='rpass_type_err'>*8-16位字母数字下划线</span>
		<span class="null_tip tip" v-show='rpass_null'>*密码不能为空</span>
		<x-button type='primary' @click.native='sub_pass' class='btn'>提交</x-button>
	</div>
</template>
<script>
import { XButton } from "vux";
import { passwdSave } from "@/api/index";
export default {
    components: {
        XButton
    },
    data() {
        return {
            old_err: false,
            old_null: false,
            old_type_err: false,
            rpass_type_err: false,
            rpass_null: false,
            oldpass: "",
            password: "",
            imgUrl: "static/u609.png"
        };
    },
    methods: {
        goBack() {
            this.$router.push({
                name: "set"
            });
        },
        check_oldpass() {
            let reg = /^[a-zA-Z0-9\d_]{8,}$/;
            if (this.oldpass.length <= 0) {
                this.old_null = true;
                this.old_type_err = false;
            } else {
                this.old_null = false;
                if (!reg.test(this.oldpass)) {
                    this.old_type_err = true;
                } else {
                    this.old_type_err = false;
                }
            }
        },
        check_rpass() {
            let reg = /^[a-zA-Z0-9\d_]{8,}$/;
            if (this.password.length <= 0) {
                this.rpass_null = true;
                this.rpass_type_err = false;
            } else {
                this.rpass_null = false;
                if (!reg.test(this.password)) {
                    this.rpass_type_err = true;
                } else {
                    this.rpass_type_err = false;
                }
            }
        },
        sub_pass() {
            let state1 = this.rpass_type_err;
            let state2 = this.old_type_err;
            let state3 = this.old_null;
            let state4 = this.rpass_null;
            if (
                this.password.length > 0 &&
                this.oldpass.length > 0 &&
                !state1 &&
                !state2 &&
                !state3 &&
                !state4
            ) {
                let oldpass = this.oldpass;
                let repasswd = this.password;
                let params = JSON.stringify({
                    passwd: oldpass,
                    repasswd: repasswd
                });
                alert("修改成功,请重新登录！");
                this.$router.push({
                    name: "root"
                });
            } else {
                alert("填写不规范");
            }
        }
    }
};
</script>
<style scoped lang='less'>
.repas {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    z-index: 1005;
    background: rgba(248, 248, 248, 1);
    width: 100%;
    header.head {
        position: relative;
        img {
            position: absolute;
            left: 10px;
            top: 12px;
        }
        width: 1100;
        height: 44px;
        background: rgba(172, 147, 117, 1);
        font-size: 20px;
        color: #fff;
        text-align: center;
        line-height: 44px;
    }
    .tip {
        float: right;
        font-size: 12px;
        color: red;
        margin-right: 30px;
        margin-top: -20px;
    }
    .l {
        text-align: left;
        float: left;
        padding: 10px 16px 6px 16px;
    }
    #pass,
    #rpass {
        width: 85%;
        margin: 0 auto;
        padding: 6px;
        background: transparent;
        border: 0;
        border-bottom: 1px solid #ccc;
    }
    .btn {
        background: linear-gradient(
            90deg,
            rgba(213, 184, 150, 1) 0%,
            rgba(213, 184, 150, 1) 4%,
            rgba(170, 141, 106, 1) 100%,
            rgba(170, 141, 106, 1) 100%
        );
        width: 90%;
        margin: 30px auto;
    }
}
</style>