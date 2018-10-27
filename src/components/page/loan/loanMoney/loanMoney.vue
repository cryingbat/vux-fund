<template>
	<div id='loanMoney'>
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>贷款</header>
		<div class="main">
			<p class="title">可贷余额(元)：
				<span class="canGetMoney">{{GetMoney}}</span>
			</p>
			<p class="getMoney">申请贷款余额</p>
			<input type="text" class="in" placeholder="为100的倍数，且大于100小于10000" v-model='money' @keyup='check_money'>
			<div class="tip" v-show='money_err'>*输入金额不正确</div>
			<!-- <div class='loanBtn' @click='showD'>详情</div> -->
			<button class="btn" v-bind:disabled='disabledState' @click='submitData'>确定</button>
			<toast v-model="show2" type="text">申请成功</toast>
		</div>

	</div>
</template>
<script>
import { getResMoney, loanAllaccounts } from "@/api/index";
import { Toast } from 'vux'
export default {
    data() {
        return {
            GetMoney: "0.00",
            disabledState: true,
            money_err: false,
            money: "",
            show2: false,
            imgUrl: "static/u609.png"
        };
    },
    mounted() {
        setTimeout(() => {
            this.getRes();
        }, 300);
    },
    methods: {
        getRes() {
			 this.GetMoney = 500000;
        },
        showD() {
            this.$router.push(
                "/home/page/zdlmoney?st=" + Math.random() * 1000 + 10
            );
        },
        check_money() {
            let can_money = Number(this.GetMoney);
            let in_money = Number(this.money);
            if (in_money > can_money || in_money <= 0 || in_money % 100 !== 0) {
                this.money_err = true;
                this.disabledState = true;
            } else {
                this.money_err = false;
                this.disabledState = false;
            }
        },
        goBack() {
            this.$router.back(-1);
        },
        submitData() {
			this.show2 =true;
            this.$router.push({
                name: "zdlmoney"
            });
		}
	},
	components: {
    Toast
  }
};
</script>
<style lang='less' scoped>
#loanMoney {
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
        .loanBtn {
            position: absolute;
            right: 75px;
            top: 30px;
            text-align: center;
            width: 65px;
            height: 23px;
            font-size: 12px;
            color: #ac9375;
            background-color: rgba(255, 255, 255, 0);
            box-sizing: border-box;
            border-width: 1px;
            border-style: solid;
            border-color: rgba(172, 147, 117, 1);
            border-radius: 43px;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        .title {
            font-size: 18px;
            .canGetMoney {
                color: #fe6d53;
            }
        }
        .in {
            width: 85%;
            margin-top: 10px;
            padding: 8px 3px 10px 3px;
            border: none;
            background: transparent;
            border-bottom: 1px solid #999;
        }
        .getMoney {
            font-size: 18px;
            margin-top: 10px;
            color: #ac9375;
        }
        .tip {
            font-size: 12px;
            color: red;
            text-align: right;
            margin-right: 80px;
            margin-top: 10px;
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