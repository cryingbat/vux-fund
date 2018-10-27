<template>
	<div class="gathering">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>收款账户</header>
			<span class="name">开户人</span>
		<div class="account"><span class="item">{{acc.account_name|| '加载中...'}}</span></div>
			<span class="name">账户号码</span>
		<div class="account"><span class="item">{{acc.account_val || '加载中...'}}</span></div>
			<span class="name">账户类型</span>
		<div class="account"><span class="item">{{acc.account_belong || '加载中...'}}</span></div>
	</div>
</template>
<script>
import { account }  from '@/api/index'
	export default {
		mounted() {
			setTimeout(() => {
				this.check_acc();
			})
		},
		data() {
			return {
				acc: [],
				imgUrl: 'static/u609.png'
			}
		},
		methods: {
			goBack() {
				this.$router.back(-1)
			},
			check_acc(){
				account().then(res => {
					if(res.succ>0){
						// console.log(res.data)
						this.acc = res.data;
					}else{
						if(Number(res.succ) === -1 || Number(res.succ) === -2){
							alert('请重新登录！');
							this.$router.push({
								name: 'root'
							}) 
						}else{
							this.acc = [];
						}
						
					}
					
				}) 
			}
		}
	}
</script>
<style scoped lang='less'>
	.gathering{
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
		.name{
			display: inline-block;
			padding: 10px 0 0px 12px;
			margin-top: 10px;
		}
		.account{
			width: 80%;
			padding: 12px 12px;
			margin: 0 auto;
			border-bottom: 1px solid #ccc;
			.item{
				color: #999;
				float: right;
				margin-top: -15px;
				font-size: 14px;
				/*margin-right: 40px;*/
			}
		}
	}
</style>