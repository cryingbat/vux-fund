<template>
	<div>
		<div style="width:100%;height: 300px;    margin-top: 58px;">
			<div id="echart" :style="{width: '320px', height: '300px'}"></div>
		</div>
		
		<div class='classifly'>
			<div class="balance">
				<p class="name"><span class="dot"></span>{{name[0]}}</p>
				<p class="text">{{info.available_money || 0}}</p>
				<p class="detail"><button class="more" @click='toSeeBalanceDetail'>详情</button></p>
			</div>
			<span ></span>
			<div class="profit">
				<p class="name"><span class="dot"></span>{{name[1]}}</p>
				<p class="text">{{info.financial_money || 0}}</p>
				<p class="detail"><button class="more" @click='toSeeEarnDetail'>详情</button></p>
				<button class="more" @click='toBuy'>转入</button>
			</div>
		</div>
	</div>
</template>

<script>
import { userInfo } from '@/api/index'

export default {
	data () {
		return {
			name: ['活期余额', '余利宝'],
			money: [6561.35, 6561.35],
			info: [],
			prey: 0,
			preh: 0
		}
	},
	mounted () {
		this.init_echarts();
		setTimeout(() => {
			this.getUser();
		}, 300)
	},
	methods: {
		getUser(){
			userInfo().then((res) => {
		        if(res.succ>0){
	        	 this.prey =  Number(res.data.available_money);
	        	 this.preh =  Number(res.data.financial_money);

		          this.info = res.data;
		          this.init_echarts();
		        }else{
		        	if(Number(res.succ) === -1 || Number(res.succ) === -2){
		              alert('请重新登录！');
		              this.$router.push({
		                name: 'root'
		              }) 
		            }else{
		               this.info = {};
		            }
		        }
		    })
		},
		toBuy() {
			this.$router.push({
				name: 'dmoney'
			})
		},
		init_echarts () {
			let echarts = require('echarts');
			// 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById('echart'));
			var a = this.prey;
			var b =this.preh;
			// console.log(b);
			// 绘制图表
			myChart.setOption({
		    
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		    	// show: false
		        orient: 'vertical',
		        left: 'left',
		        data: ['活期余额','余利宝',]
		    },
		    color: ['#ac9375', '#ff9068'],
		    series : [
		        {
		            name: '资产配比',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value: a, name:'活期余额'},
		                {value: b, name:'余利宝'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		});
		},
		toSeeBalanceDetail() {
			this.$router.push({
				name:'balanceWidthAccounts'
			})
		},
		toSeeEarnDetail() {
			this.$router.push({
				name: 'dmoneyDetail'
			})
		}
	}
}
</script>
<style lang='less' scoped>
	#echart{
		margin: 0 auto;
	}
	.classifly{
		&:before{
			content: '';
			position: absolute;
			top:-0.9rem;
			left:50%rem;
			width:0;
			height:0;
			border-left:0.9rem solid transparent;
			border-right:0.9rem solid transparent;
			border-bottom:0.9rem solid #fff;
		}
		position: relative;
		display: flex;
		justify-content: space-around;
		margin-bottom: 53px;
		background: #fff;
		height: 150px;
		width: 100%;
		.balance, .profit{
			
			padding: 20px 8px 0 0px;
			.name{
				position: relative;
				padding-left: 20px;
				.dot{
					position: absolute;
					left: 0;
					top: 5px;
					display: inline-block;
					width: 14px;
					height: 14px;
					border-radius: 50%;
					background: rgba(172, 147, 117, 1);
				}
			}
			.text{
				padding-left: 20px;
				font-weight: 700;
				font-size: 20px;
    			color: #FE6D53;
			}
			.info{
				height: 20px;
				width: 100%;
				color: rgba(0,0,0,0.2);
				padding-left: 20px;
			}
			.detail{
				padding-left: 20px;
				.more{
					border: 2px solid rgba(172, 147, 117, 1);
					outline: none;
					background: #fff;
					margin-top: 10px;
					cursor: pointer;
					padding: 3px 20px;
					border-radius: 20px;
				}
			}
		}
		.balance{
			width: 30%;
		}
		span{
			display: inline-block;
			width: 1px;
			height: 120px;
			background: rgba(0,0,0,0.1);
			position: absolute;
			left: 50%;
			top: 15px;
		}
		.profit{
			position: relative;
			margin-left: -20px;
			>.more{
				position: absolute;
				top: 20px;
				right: -30px;
				border: 2px solid rgba(172, 147, 117, 1);
				outline: none;
				background: #fff;
				cursor: pointer;
				padding: 3px 10px;
				border-radius: 20px;
			}
			.name{
				.dot{
					background: rgba(255, 144, 104, 1);
				}
			}
			.text{
				color: rgba(255, 144, 104, 1);
			}
		}
	}
</style>
