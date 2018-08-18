
<template>
	<div class="team">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>修改资料</header>
		<group label-width="2.5em" label-margin-right="2em" label-align="right">
	     <cell title="头像" is-link @click.native='setAvatar' style='padding: 20px 15px;'></cell>
	     <img class="avatar" src="../../../../static/u414.png" width='40' height="40" alt="">
	    </group>
	    <group label-width="2.5em" label-margin-right="2em" label-align="right">
	     <cell title="昵称" is-link @click.native='setName' :value="info.nickname"></cell>
	    </group>
	</div>
</template>
<script>
import {  Group, Cell } from 'vux'
import vueCropper from 'vue-cropper'
import { changeNickname, nicknameSave }  from '@/api/index'
import axios from 'axios'
	export default {
		data() {
			return {
				info: {
					header_url : '../../../../static/loading.svg',
					nickname: 'cryingabt',
				},
				show: false,
				imgUrl: '../../../../static/u609.png',
			}
		},
		components: {
			Group,
			vueCropper,
			Cell
		},
		methods: {
			goBack() {
				this.$router.push({
					name: 'set'
				})
			},
			setName() {
				this.$router.push({
					name: 'nickname'
				});
			},
			setAvatar() {
				this.$router.push({
					name: 'avatar',
					params: {
						url: this.info.nickname ? this.info.header_url : '../../../../static/u414.png'
					}
				})
			},
			showCap() {
				this.show = true
			},
		}
	}
</script>
<style scoped lang='less'>
	.team{
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
		.avatar{
			position: absolute;
			right: 40px;
			top: 12px;
			border-radius: 50%;
		}
		.box{
			position: relative;
			background: #fff;
			padding-bottom: 40px;
			.ok{
				width: 85%;
				margin: 40px auto 0 auto;
			}
		}
	}
</style>
