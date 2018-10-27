<template>
	<div class="credit">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>信用</header>
		<div class="box">
			<div class="progress">
					<img :src="status[preNum]" alt="">
					<div class="in">
						<span style="color: #fff;font-size:30px;font-weight:bold">{{personCredit.credit_val}}</span>
			       		<p style='color:#fff'>{{personCredit.credit_msg}}</p>
					</div>
			      
			</div>
			<div class="time">评估时间: {{personCredit.evual_time}}</div>
		</div>
		<div class="decrition">
			<div class="logo">
				<img :src="bgImg" width='50' height="50" alt="">
			</div>
		</div>
		<div class="info">
			<div class="avatar">
				<img v-lazy="personCredit.header_url" width='50' height="50" alt="">
			</div>
			<div class="personCredit">
				<div class="creditInfo">
					<p>Hi,{{personCredit.nickname}}</p>
					<p>你的守信,让世界变得更简单</p>
				</div>
			</div>
		</div>
		<div class="otherInfo">
			<p class="creditNum">信用额度(元)</p>
			<!-- <span class="number">{{personCredit.credit_money}}</span> -->

			<box gap="10px" style='position:relative'>
			  <div class="topNum" :style="{left:percent3+'%'}"><span style="border: 1px solid #09BB07; padding: 2px 5px;border-radius:15px;background:#09BB07;color:#fff">{{personCredit.credit_money}}</span></div>
		      <x-progress :percent="percent3" :show-cancel="false"></x-progress>
		    </box>
		    <p class="progressNumber">
				<span class="start">0</span>
				<span class="end">1000000</span>
			</p>
			<div class="accountMoney">
			</div>

			<p class="text">保持良好信用, 有助于幸福生活</p>
		</div>
	</div>
</template>
<script>
import { Popover, XProgress, Box } from 'vux'
import { credit } from '@/api/index'
	export default {
		data() {
			return {
				personCredit: {
					header_url: 'static/loading.svg',
				},
				percent2: 0,
				percent3: 0,
				status: ['static/1.png','static/2.png','static/3.png','static/4.png','static/5.png','static/6.png','static/7.png','static/8.png','static/9.png','static/10.png','static/11.png','static/12.png','static/13.png','static/14.png','static/15.png','static/16.png','static/17.png','static/18.png','static/19.png','static/20.png'],
				bgImg: 'static/logo.png',
				imgUrl: 'static/u609.png',
				preNum: 0,
			}
		},
		components: {
			Popover,
			XProgress,
			Box
		},
		methods: {
			goBack() {
				this.$router.push({
					name:'me'
				})
			},
			getCredit() {
				credit().then((res) => {
					if(res.succ>0){
						if(res.data.header_url === ''){
				            res.data.header_url = 'static/u414.png';
				        }
				        res.data.credit_money = parseInt(res.data.credit_money);

				        let pre = Number(res.data.credit_val);
				        let pre_money = Number(res.data.credit_money);
				        this.percent2 = (pre/1000)*100;
				        this.percent3 = parseInt((pre_money/1000000)*100);
				        this.flight = this.percent3 < 50 ? 'left' : 'right';
				        // console.log(this.flight);
				        this.percent3 = this.percent3 < 30 ? this.percent3 : this.percent3*0.82;
				        // console.log(this.percent3);

				        this.preNum = Math.floor(pre/1000*20);
						this.personCredit = res.data;
					}
					// console.log(res);
				})
			}
		},
		mounted() {
			this.getCredit();
		}
	}
</script>

<style scoped lang='less'>
.credit{
	position: absolute;
	top: 0;
	bottom: 0;
	background: #f7f7f7;
	z-index: 1010;
	width: 100%;
	header.head{
		position: relative;
		img{
			position: absolute;
			left: 10px;
			top: 12px;
		}
		width: 100%;
		height: 44px;
		background: rgba(172, 147, 117, 1);
		font-size: 20px;
		color: #fff;
		text-align: center;
		line-height: 44px;
	}
	.box{
		padding-top: 50px;
		width: 100%;
		height: 150px;
		background: rgba(172, 147, 117, 1);
		.progress{
			position: relative;
			border-radius: 50%;
			width: 150px;
			height: 110px;
			margin: 0px auto 10px auto;
			img{
				position: absolute;
				left: 0;
				top: 0;
			}
			.in{
				width: 100px;
				height: 100px;
				margin: 0 auto;
				padding-top: 24px;
				text-align: center;
			}
		}
		.time{
			text-align: center;
			font-size: 14px;
			color: #ccc;
		}
	}
	.decrition{
		position: relative;
		z-index: 1;
		width: 100%;
		height: 80px;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
		background: rgba(172, 147, 117, 1);
		.logo{
			width: 50px;
			height: 50px;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: -25px;
			border-radius: 50%;
			img{
				border-radius: 50%;
			}
		}
	}
	.info{
	    height: 150px;
		width: 100%;
		background: #fff;
		margin-top: -50px;
		display: flex;
		.avatar{
			position: relative;
			display: inline-block;
			width: 50px;
			vertical-align: bottom;
			padding-left: 20px;
			height: 50px;
			border-radius: 50%;
			img{
				position: absolute;
				bottom: -80px;
				left: 10px;
				border-radius: 50%;
			}
		}
		.personCredit{
			position: relative;
			z-index: 0;
			display: inline-block;
			flex: 1;
			height: 100%;
			background: #fff;
			.creditInfo{
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 70px;
				p{
					text-indent: 1em;
				}
				p:first-child{
					color: rgba(172, 147, 117, 1);
				}
				p:last-child{
					font-weight: bold;
				}
			}
		}
	}
	.otherInfo{
		width: 100%;
		height: 180px;
		background: #fff;
		margin-top: 10px;
		.creditNum{
			width: 92%;
			padding-top: 20px;
			padding-bottom: 20px;
			margin:0 auto;
			font-weight: 700;
	
		}
		.topNum{
			width: 100%;
			position: absolute;
			left: 0;
			top: -10px;
		}
		.progressNumber{
			width: 92%;
			margin: 0 auto;
			.end{
				float: right;
			}
		}
		.number{
			display: inline-block;
			margin: 0 auto;
			text-indent: 4em;
			width: 92%;
			font-weight: bold;
			margin-bottom: 20px;
		}
		.text{
			text-align: center;
			color: #ac9375;
			font-size: 14px;
			margin-top: 15px;
		}
		.accountMoney{
			width: 97%;
			margin: 20px auto;
			height: 40px;
			.popover-demo-content {
			  padding: 5px 20px;
			}
			.btn{
				position: absolute;
				left: 50%;
				margin-left: -50px;
				border: 2px solid rgba(172, 147, 117, 1);
				outline: none;
				background: #fff;
				cursor: pointer;
				width: 100px;
				padding: 3px 10px;
				border-radius: 20px;
			}
		}
		
	}
}
</style>