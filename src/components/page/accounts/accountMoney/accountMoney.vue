<template>
	<div id='account'>
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>转账</header>
		<div class="main">
			<p class="title">输入转账金额(元)</p>
			<input type="text" class="in" placeholder="500~10000" v-model='num' @keyup='check_num'>
			<!-- <p class="num_null_msg" v-show='null_msg'>*不能为空</p> -->
			<p class="tip" :class="{'active': err_msg}">注意：必须为100的倍数，且大于500小于10000</p>
			<button class="btn" @click='submitData' v-bind:disabled="disabledState">提交</button>
			<div v-transfer-dom>
				<alert v-model="show2" title="确定" content="确认转账金额"></alert>
			</div>
		</div>
	</div>
</template>
<script>
import { getAllAccounts } from "@/api/index";
import { Alert, TransferDomDirective as TransferDom } from "vux";
export default {
    directives: {
        TransferDom
    },
    components: {
        Alert
    },
    data() {
        return {
            err_msg: false,
            num: "",
            show2: false,
            disabledState: true,
            imgUrl: "static/u609.png"
        };
    },

    methods: {
        goBack() {
            this.$router.back(-1);
        },
        submitData() {
            let money = this.num;
            let params = JSON.stringify({ money: money });
            this.show2 = true;
            this.$router.back(-1);
        },
        check_num() {
            let re = /^[0-9]*[0-9]$/i;
            if (re.test(this.num)) {
                if (
                    this.num >= 500 &&
                    this.num <= 10000 &&
                    this.num % 100 === 0
                ) {
                    this.err_msg = false;
                    this.disabledState = false;
                } else {
                    this.err_msg = true;
                    this.disabledState = true;
                }
            } else {
                this.err_msg = true;
            }
        }
    }
};
</script>
<style lang='less' scoped>
#account {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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
    .main {
        position: relative;
        width: 100%;
        height: 500px;
        padding: 80px 20px 0px 20px;
        .title {
            color: #ac9375;
            font-size: 18px;
        }
        .in {
            width: 85%;
            margin-top: 10px;
            padding: 8px 3px 10px 3px;
            border: none;
            background: transparent;
            border-bottom: 1px solid #999;
        }
        .num_null_msg {
            position: absolute;
            right: 71px;
            color: red;
            top: 126px;
            font-size: 12px;
        }
        .tip {
            font-size: 10px;
            margin-top: 20px;
            color: #ccc;
            &.active {
                color: red;
            }
        }
        .btn {
            position: absolute;
            left: 50%;
            margin-left: -170px;
            top: 40%;
            outline: none;
            width: 305px;
            height: 40px;
            background: -webkit-linear-gradient(
                0deg,
                rgba(213, 184, 150, 1) 0%,
                rgba(213, 184, 150, 1) 4%,
                rgba(170, 141, 106, 1) 100%,
                rgba(170, 141, 106, 1) 100%
            );
            background: -moz-linear-gradient(
                90deg,
                rgba(213, 184, 150, 1) 0%,
                rgba(213, 184, 150, 1) 4%,
                rgba(170, 141, 106, 1) 100%,
                rgba(170, 141, 106, 1) 100%
            );
            background: linear-gradient(
                90deg,
                rgba(213, 184, 150, 1) 0%,
                rgba(213, 184, 150, 1) 4%,
                rgba(170, 141, 106, 1) 100%,
                rgba(170, 141, 106, 1) 100%
            );
            border: none;
            border-radius: 6px;
            -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
            -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
            color: #ffffff;
        }
    }
}
</style>