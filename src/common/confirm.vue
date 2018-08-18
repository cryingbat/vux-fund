<template>
	<div id='confirm'>
		<div class="bgImg"><img :src="bgImg" width='246' alt=""></div>
		<div class="verify_box">
			<!-- <img :src="verify" width="100" style='border-radius:10px' alt="" @click='changeVerify'> -->
			<input type="text" maxlength="4" class="in_verify_box" placeholder="输入验证码" v-model='in_verify'>
		</div>
		<div class="tip" v-show='showTip'>验证码不正确</div>
		<div class="verify_box enter">
			<button class='toSubmit' @click="toLogin">立即进入</button>
		</div>
	</div>
</template>
<script>
import { XInput, Group, XButton } from "vux";
import axios from "axios";
export default {
    components: {
        XInput,
        XButton,
        Group
    },
    data() {
        return {
            showTip: false,
            in_verify: "",
            bgImg: "../../static/u1152.png"
        };
    },
    methods: {
        toLogin() {
            this.$router.push({
                name: "login"
            });
            // let  cverify = this.in_verify;
            // let parmas =  JSON.stringify({ code: cverify })
            // axios.post('/tool/check_verify',params).then((res) => {
            // 	console.log(res)
            // 	if(res.succ>0){
            // 		this.showTip = false;
            // 		this.$router.push({
            // 			name: 'login'
            // 		})
            // 	}else{
            // 		this.showTip = true
            // 	}
            // })
        },
        changeVerify() {
            // this.verify = '/api.php/home/tool/verify?rnd=' + Math.random();
        }
    }
};
</script>
<style scoped lang='less'>
#confirm {
    .bgImg {
        text-align: center;
        padding-top: 130px;
    }
    .verify_box {
        position: relative;
        width: 250px;
        height: 45px;
        background: rgba(51, 51, 51, 1);
        border-radius: 102px;
        margin: 0 auto;
        margin-top: 30px;
        img {
            margin-top: 7px;
            margin-left: 8px;
        }
        .in_verify_box {
            position: absolute;
            right: 5px;
            padding: 5px 2px;
            top: 8px;
            width: 120px;
            color: #fff;
            border: none;
            outline: none;
            background: rgba(51, 51, 51, 1);
        }
        &.enter {
            .toSubmit {
                width: 100%;
                height: 100%;
                background: rgba(189, 169, 147, 1);
                border-radius: 102px;
                outline: none;
                border: none;
                color: #fff;
            }
        }
        input::-webkit-input-placeholder {
            color: #fff;
            text-align: center;
        }
    }
    .tip {
        color: red;
        height: 10px;
        text-align: right;
        padding-top: 8px;
        padding-right: 70px;
        font-size: 12px;
    }
}
.red {
    color: red;
}
.green {
    color: green;
}
</style>
