<template>
	<div class="shift">
		<div v-if="LoanAllOrder.length<=0" style='text-align: center'>暂无数据</div>
		<div class="box" v-else v-for="(item, index) in LoanAllOrder" :key='index' :class="{'states1': item.status === '1', 'states2': item.status ==='2', 'states3': item.status ==='3', 'states4': item.status ==='100' , 'states5': item.status ==='0' }"  @click='showDetailInfo(item.bill_id, item.type)'>
			<div   >
			<img v-show='item.type=== 1' :src="imgIcon[0]" alt="" class="icon">
			<img  v-show='item.type=== 2' :src="imgIcon[1]" alt="" class="icon">
			<div class="top">
				<div class="state">
					<img :src="stateImg[0]" width="32" height="32" alt="" v-if="item.status ==='1'">
					<img :src="stateImg[1]" width="32" height="32" alt="" v-else-if="item.status ==='2'">
					<img :src="stateImg[2]" width="32" height="32" alt="" v-else-if="item.status ==='3'">
					<img :src="stateImg[3]" width="32" height="32" alt="" v-else-if="item.status ==='100'">
					<img :src="stateImg[4]" width="32" height="32" alt="" v-else="item.status ==='0'">
				</div>
				<div class="table">
					<p class="item1">号码：{{item.bill_id}}</p>
					<p class="item2">状态：{{item.st}}</p>
					<p class="item3">交易金额: {{item.money}}YNC</p>
				</div>
			</div>
			<div class="bottom">
				<span class="time">创建日期：{{item.date}}</span>
				<button class="more">阅读更多</button>
			</div>
		</div>
		<div class="more">
			<div class="loadMore" v-if='status' @click='loadMore'>加载更多...</div>
			<div class="loadMore" v-else>没有更多啦！</div>
		</div>
		</div>
		
	</div>
</template>
<script>
import { checkLoanAllaccounts } from '@/api/index'
	export default {
		props: {
			LoanAllOrder: {
				type: Array,
			},
			status: {
				type: Boolean
			}
		},
		data() {
			return {
				imgIcon:['../../static/buy.png', '../../static/sell.png'],
    			env: '../../../static/u25.png',
    			stateImg:['../../static/wp.png', '../../static/bf.png', '../../static/pp.png', '../../static/js.png', '../../static/dj.png']
			}
		},
		mounted() {
			
		},
		methods: {
			showDetailInfo(id, type) {
				// console.log(type);
				this.$router.push('/home/page/lzdinfo?id='+id + '&type=' + type);
			},
			loadMore() {
				this.$emit('load' , true)
			},
			}
	}
</script>
<style scoped lang='less'>
	.box{
		position: relative;
		width: 350px;
		height: 170px;
		border-radius: 8px;
		margin: 10px auto 10px auto;
		background:linear-gradient(150deg, rgba(127, 157, 193, 1) 0%, rgba(127, 157, 193, 1) 0%, rgba(53, 82, 135, 1) 100%, rgba(53, 82, 135, 1) 100%);
		&.states1{
			background:#51a4ac;
		}
		&.states2{
			background:linear-gradient(#51a4ac 0%, #3571b0 100%);
		}
		&.states3{
			background: #3571b0;
		}
		&.states4{
			background: linear-gradient(150deg, rgba(228, 228, 228, 1) 0%, rgba(228, 228, 228, 1) 0%, rgba(148, 148, 148, 1) 100%, rgba(148, 148, 148, 1) 100%);
		}
		&.states5{
			background: linear-gradient(150deg, #0c1414 0%, #d40000 0%, #001912 100%, #0a0a12 100%);
		}
		div{
			.icon{
				position: absolute;
				right: 0;
				top: 0
			}
		}
		.top{
			overflow: hidden;
			.state, .env{
				text-align: center;
				padding-top: 10px;
				width: 13%;
				height: 120px;
				float: left;
			}
			.table{
				margin-top: 10px;
				width: 73%;
				height: 105px;
				float: left;
				border: 1px solid #fff;
				.item1, .item2{
					color: #fff;
					border-bottom: 1px solid #fff;
				}
				.item1{
					padding: 5px 0 5px 8px;
				}
				.item2{
					padding: 8px 0 8px 8px; 
					font-size: 10px;
				}
				.item3{
				  color: #fff;
				  font-size: 14px;	
				  padding: 3px 0 0 8px;
				  overflow: hidden;
				}
			}
			.env{
				
			}
		}
		.bottom{
			padding: 0 20px;
			overflow: hidden;
			.time{
				padding-top: 2px;
				color: #fff;
				float: left;
				font-size: 12px;
			}
			.more{
				float: right;
				border: 2px solid rgba(121, 121, 121, 1);
				outline: none;
				background: #fff;
				cursor: pointer;
				color: #000;
				padding: 3px 5px;
				border-radius: 20px;
			}
		}
	}
	.more{
		.loadMore{
			text-align: center;
			font-size: 12px;
			color: #ac9375;
			margin-top: 20px;
		}
	}
	
</style>