<template>
	<div id='dealMoney'>
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>理财</header>
		<div class="main">
			<p class="title">选择产品：余利宝<button class="detail" @click='productDetail'>产品介绍</button></span></p>
			<p class="canUseMoney">可用余额(元)：<span class="money">{{canGetMoney}}</span></p>
			<p class="getMoney">转入金额(元)</p>
			<input type="text" class="in" placeholder="请输入金额..." v-model='in_money' @keyup='check_in'>
			<div class="tip" v-show='show'>*您输入金额不正确</div>
			<button class="btn" @click='toDealMoneyDetail' :v-bind:disabled="disabledStates">确定</button>
		</div>
		
	</div>
</template>
<script>
import { getResMoney, financialBuy } from '@/api/index'
import { clearTimeout } from 'timers';
export default {
  data () {
    return {
      canGetMoney: '0.00', 
      disabledStates: true,
      in_money: '',
      show: false,
      imgUrl: 'static/u609.png'
    }
  },
  mounted() {
  	setTimeout(() => {
  		this.getRes();
  	}, 300)
  },
  methods:{
  	goBack() {
  		this.$router.back(-1)
  	},
  	getRes() {
		this.canGetMoney = 5000;
  	},
  	check_in() {
  		let can_money = this.canGetMoney;
  		let in_money =this.in_money;
  		if(in_money>can_money || in_money<=0 ){
  			this.show = true;
  			this.disabledStates = true;
  		}else{
  			this.show = false;
  			this.disabledStates = false;
  		}
  	},
  	toDealMoneyDetail() {
  		if(true) {
			  let money = this.in_money;
			  if(money===''){
				  this.disabledStates =true;
				  return ;
			  }
  			let params = JSON.stringify({money: money});
  			financialBuy(params).then((res) => {
				  console.log(res)
  				if(Number(res.succ)>0){
  					this.$router.push({
			  			name:'dmoneyDetail'
			  		})
  				}else{
  					if(Number(res.succ) === -1 || Number(res.succ) === -2){
						alert('请重新登录！');
						this.$router.push({
							name: 'root'
						}) 
					}else{
						alert(res.msg);			
					}
  					
  				}
  			})
  			
  		}
  		
  	},
  	productDetail() {
  		this.$router.push('/home/page/dmoney/detail');
  	}
  }
}
</script>
<style lang='less' scoped>
	#dealMoney{
		position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1005;
        background: rgba(248, 248, 248, 1);
		width: 100%;
		header.head{
			position: relative;
			img{
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
		.main{
			position: relative;
			width: 100%;
			height: 500px;
			padding: 80px 20px 0px 20px;
			.title{
				position: relative;
				
				font-size: 18px;
				.detail{
					position: absolute;
					right: 50px;
					width: 65px;
					top: -40px;
				    height: 23px;
				    font-size: 12px;
				    color: #AC9375;
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
				.canGetMoney{
					color: #FE6D53;
				}
			}
			.canUseMoney{
				margin: 18px 0;
				.money{
					font-size: 20px;
					color: #FE6D53;
					font-weight: bold;
				}
			}
			.in{
				width: 85%;
				margin-top: 10px;
				padding: 8px 3px 10px 3px;
				border: none;
				background: transparent;
				border-bottom: 1px solid #999;
			}
			.getMoney{
				font-size: 18px;
				color: #AC9375;
			}
			.tip{
				color: red;
				font-size: 12px;
				text-align: right;
				margin-right: 70px; 
				margin-top: 10px;
			}
			.btn{
				position: absolute;
			    left: 50%;
			    margin-left: -170px;
			    top: 55%;
			    outline: none;
			    width: 305px;
			    height: 40px;
			    background: -webkit-linear-gradient(0deg, rgba(213, 184, 150, 1) 0%, rgba(213, 184, 150, 1) 4%, rgba(170, 141, 106, 1) 100%, rgba(170, 141, 106, 1) 100%);
			    background: -moz-linear-gradient(90deg, rgba(213, 184, 150, 1) 0%, rgba(213, 184, 150, 1) 4%, rgba(170, 141, 106, 1) 100%, rgba(170, 141, 106, 1) 100%);
			    background: linear-gradient(90deg, rgba(213, 184, 150, 1) 0%, rgba(213, 184, 150, 1) 4%, rgba(170, 141, 106, 1) 100%, rgba(170, 141, 106, 1) 100%);
			    border: none;
			    border-radius: 6px;
			    -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
			    -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
			    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
			    color: #FFFFFF;
			}
		}
		
	}
</style>