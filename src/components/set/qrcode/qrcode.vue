<template>
	<div class="qrcode">
		<header class="head"><img v-lazy="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>推荐二维码</header>
		<div class="box">
			<div class="white">
				<div style="width:200px;height:200px;margin: 0 auto"><img v-lazy="qrcodeImg" width='200' alt=""></div>
				<p>扫一扫, 发展团队</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				qrcodeImg: '../../../../static/wechat.jpg',
				imgUrl: '../../../../static/u609.png',
			}
		},
		methods: {
			goBack() {
				this.$router.back(-1)
			},
		}
	}
</script>
<style scoped lang='less'>
	.qrcode{
		position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        text-align: center;
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
		.box{
			position: relative;
			height: 100%;
			background: rgba(0,0,0,0.8);
			.white{
				position: absolute;
				top: 100px;
				left: 50%;
				margin-left: -40%;
				border-radius: 10px;
				width: 80%;
				height: 300px;
				background: #fff;
				p{
					margin-top: 38px;
				}
				img{
					margin-top: 26px;
				}
			}
		}
	}
</style>