<template>
	<div class="balanceWidthMoney" style="    padding-top: 46px;">
		<div class="box" v-if= 'info === null || info === ""' style='text-align: center'>暂无信息</div>
		
		<div class="box" v-else v-for='(item, index) in info' :key='index'>
			<div>
				<p class="orderNum"><span class="name">订单编号:</span>&nbsp; <span class="item">{{item.bill_id}}</span> </p>
				<p class="orderNum"><span class="name">流水号码:</span>&nbsp; <span class="item">{{item.buytime}}</span> </p>
				<p class="remain"><span class="name">投资金额: </span>&nbsp;<span class="item">{{item.money}}</span> <span class="ril">（元）</span></p>
				<p class="earn"><span class="name">今日收益: </span>&nbsp;<span class=" item">{{item.obtain}}</span><span class="ril">（元）</span></p>
				<p class="earn"><span class="name">收益时间: </span>&nbsp;<span class="item">{{item.time}}</span></p>
				
			</div>
		</div>
		<div v-transfer-dom>
		      <loading v-model="showLoad" :text="name"></loading>
		    </div>
		<div v-if = ' !!info' style="padding: 0 0 15px 0">
			<div class="loadMore" v-if='status' @click='loadMore'>加载更多...</div>
			<div class="loadMore" v-else>没有更多啦！</div>
		</div>
		
	</div>
</template>
<script>
import { Loading, TransferDomDirective as TransferDom } from 'vux'
import { financialObtain } from '@/api/index'
	export default {
		directives: {
		    TransferDom
		 },
		mounted() {
	  		setTimeout(() => {
	  			this.check_info();
	  		}, 300)
	  	},
	  	components: {
	  		Loading
	  	},
		data() {
			return {
				info: [],
				next: [],
				name:'加载中...',
				showLoad: false,
				page: '0',
				status: true,
			}
		},
		methods: {
			showLoading() {
				this.showLoad = true;
			},
			hideLoading() {
				this.showLoad = false;
			},
			check_info() {
				this.showLoading();
				let params = JSON.stringify({page: this.page});
				financialObtain(params).then((res) => {
					this.hideLoading();
					if(res.succ>0){
						this.info = res.data;
						// console.log(res.data)
					}else{
						if(Number(res.succ) === -1 || Number(res.succ) === -2){
			              alert('请重新登录！');
			              this.$router.push({
			                name: 'root'
			              }) 
			            }else{
			            	this.info = [];
			            }
						
					}
				})
			},
			loadMore() {
				this.status= false;
			}
		}
	}
</script>
<style lang='less' scoped>
	.balanceWidthMoney{
		background: #f8f8f8;
		.title{
			font-size: 22px;
			padding: 2px 0  5px 20px;
		}
		.loadMore{
				text-align: center;
				font-size: 12px;
				color: #ac9375;
				margin-top: 20px;
			}
		.box{
			background: #fff;
			padding: 20px;
			margin-bottom: 10px; 
			font-size: 18px;
			
			p{
				.item{
					font-size: 16px;
					color: #999;
				}
				.name{
					font-size: 17px;
				}
			}
			
			.remain, .earn{
				.ril{
					float: right;
					color: #ccc;
					font-size: 14px;
				}
			}
			.earn{
				.earnNum{
					font-size: 20px;
					color: #FF9068;
				}
			}
		}
		
	}
</style>