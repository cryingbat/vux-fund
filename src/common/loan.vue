<template>
	<div class="shift">
		<div class="box" v-for="(item, idnex) in LoanAllOrder" :key='index' :class="{'s01': item.status === '1', 's02': item.status ==='2', 's03': item.status === '3' }">
			<div class="top">
				<div class="state">
					<img :src="imgUrl[0]" width="32" height="32" alt="" v-if="states === '1'">
					<img :src="imgUrl[1]" width="32" height="32" alt="" v-else-if="states ==='2'">
					<img :src="imgUrl[2]" width="32" height="32" alt="" v-else="states ==='3'">
				</div>
				<div class="table">
					<p class="name">单号：{{item.bill_id}}</p>
					<!-- <p class="num">{{num}}</p> -->
					<!-- <p class="who">参加者：{{who}}</p> -->
					<p class="money">金额：{{item.money}} CNY</p>
					<p class="date">日期：{{item.date}}</p>
					<p class="pzstate">状态：{{item.status}}</p>
				</div>
				<div class="env"><button class="more" @click='readMore(item.bill_id)'>阅读更多</button></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props:{
			LoanAllOrder: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				imgUrl: ['../../static/u118.png', '../../static/u17.png', '../../static/close.png']
			}
		},
		methods: {
			readMore(id) {
				this.$router.push('/home/page/lzdinfo?id='+id);
			}
		}
	}
</script>
<style scoped lang='less'>
	.box{
		width: 350px;
		height: 170px;
		border-radius: 8px;
		margin: 10px auto;
		background:linear-gradient(150deg, rgba(127, 157, 193, 1) 0%, rgba(127, 157, 193, 1) 0%, rgba(53, 82, 135, 1) 100%, rgba(53, 82, 135, 1) 100%);
		&.s02{
			background:linear-gradient(150deg, rgba(127, 157, 193, 1) 0%, rgba(127, 157, 193, 1) 0%, rgba(53, 82, 135, 1) 100%, rgba(53, 82, 135, 1) 100%);
		}
		&.s01{
			background:linear-gradient(135deg, rgba(204, 102, 204, 1) 0%, rgba(204, 102, 204, 1) 0%, rgba(98, 128, 170, 1) 100%, rgba(98, 128, 170, 1) 100%);
		}
		&.s03{
			background: linear-gradient(150deg, rgba(254, 235, 143, 1) 0%, rgba(254, 235, 143, 1) 0%, rgba(167, 100, 18, 1) 100%, rgba(167, 100, 18, 1) 100%);
		}
		.top{
			overflow: hidden;
			height: 100%;
			.state, .env{
				text-align: center;
				padding-top: 10px;
				width: 13%;
				float: left;
			}
			.table{
				margin-top: 10px;
				width: 58%;
				font-size: 12px;
				color: #fff;
				padding-left: 10px;
				float: left;
				p{
					margin: 5px 0;
				}
				.name, .num{
					font-size: 14px;
					font-weight: bold;
				}
			}	
			.env{
				position: relative;
				float: right;
				width: 20%;
				height: 100%;
				margin-right: 8px;
				.more{
					position: absolute;
					bottom: 25px;
					right: 0;
					border: 2px solid rgba(121, 121, 121, 1);
					outline: none;
					background: #fff;
					cursor: pointer;
					padding: 3px 5px;
					border-radius: 20px;
				}
			}
		}
	}
</style>
