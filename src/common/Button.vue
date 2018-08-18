<template>
	<div class="button">
		<button class="flexb" @click='seeImg'>查看图片</button>
		<div v-transfer-dom v-show="show">
	      <x-dialog v-model="show" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '100%', 'background-color': 'rgba(0,0,0,0.7)', 'padding-top': '200px'}">
	        <p style="color:#fff;text-align:center;" @click="show = false">
	        <img :src="img" width='100%' alt="">
	          <br>
	          <br>
	          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
	        </p>
	      </x-dialog>
	    </div>
	</div>
</template>
<script>
import { refusePayMoney, confirmGetMoney, getImgUrl } from '@/api/index'
import { XDialog, TransferDomDirective as TransferDom } from 'vux'

	export default {
		directives: {
		    TransferDom
		},
		props: {
			id: {
				type: String,
				default:''
			}
		},
		data() {
			return {
				show: false,
				img: ''
			}
		},
		components: {
			XDialog
		},
		methods: {
			seeImg() {
				this.show = true;
				let params = JSON.stringify({sub_bill_id: this.id});
				getImgUrl(params).then((res) => {
					if(res.succ>0){
						this.img = res.data.imgurl;
						// console.log(res.data.imgurl)
					}else {
						alert('获取失败！');
					}
					
				})
			}
		}
	}
</script>
<style scoped lang='less'>
	.button{
		display: flex;
		height: 53px;
		justify-content: space-around;
		button{
			width: 33.3%;
			height: 100%;
			background:transparent;
			border: none; 
			color: #fff;
			font-size: 13px;
		}
	}
</style>