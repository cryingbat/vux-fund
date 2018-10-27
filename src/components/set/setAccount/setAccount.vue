<template>
	<div class="set">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>开设账户</header>
		<div class="x-box">
			<p class="title">开户人</p>
			<input type="text" class="in" v-model="username" placeholder="开户人姓名">
		</div>
		<div class="x-box">
			<p class="title">账户号码</p>
			<input type="text" class="in" v-model="num" placeholder="银行卡号/支付宝帐号/微信帐号">
		</div>
		<div class="x-box">
			<p class="title">账户类型</p>
			<input type="text" class="in" v-model="belong" placeholder="银行名称/支付宝/微信">
		</div>
		<!-- <group >
			<x-input title="开户人" v-model="username"></x-input>
		</group>
		<group>
			<x-input title="账户号码" v-model="num"></x-input>
		</group>
		<group>
			<x-input title="账户所属" v-model="belong"></x-input>
		</group> -->
		<x-button type="primary" class='btn' @click.native='change_acc'>提交</x-button>
	</div>
</template>
<script>
import { Group,XButton, XInput} from 'vux'
import { accountSave }  from '@/api/index'

	export default {
		data() {
			return {
				username: '',
				num: '',
				belong: '',
				imgUrl: 'static/u609.png'
			}
		},
		methods: {
			goBack() {
				this.$router.push({
					name:'set'
				})
			},
			change_acc(){
				if(this.num.length<=0 || this.username.length<=0 || this.belong.length<=0){
					alert('请填写完整的信息！')
				}else{
					let account_name = this.username;
					let account_belong = this.belong;
					let account_val = this.num;
					let params = JSON.stringify({account_name: account_name,account_val:account_val,account_belong:account_belong})
						if(true){
							// console.log(res.data)
							alert('开设成功！')
							this.num = '';
							this.username = '';
							this.belong= '';
							setTimeout(()=> {
								this.$router.push({
									name: 'gathering'
								}) 
							}) 
						}else{
							if(Number(res.succ) === -1 || Number(res.succ) === -2){
								alert('请重新登录！');
								this.$router.push({
									name: 'root'
								}) 
							}else{
								alert('开设失败！')
							}
							
						}
				}
			}
		},
		components: {
			XInput,
			Group,
			XButton
		}
	}
</script>
<style scoped lang='less'>
	.set{
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
		.x-box{
			width: 100%;
			padding: 20px 12px 10px 12px;
			.title{
				font-weight: 400;
			    color: #333333;
			}
			.in{
				display: block;
				width: 85%;
				margin: 0 auto;
				padding: 6px ;
				background: transparent;
				border:0;
				border-bottom: 1px solid #ccc;
			}
		}
		.btn{
			margin-top: 40px;
			width: 95%;
			margin: 40px auto;
			background: linear-gradient(90deg, rgba(213, 184, 150, 1) 0%, rgba(213, 184, 150, 1) 4%, rgba(170, 141, 106, 1) 100%, rgba(170, 141, 106, 1) 100%)
		}
	}
</style>