<template>
<div>
	<div class="button">
		<label for="f" class="ll" v-show='stc === 1'><span class="up">选择图片</span><input type="file" id='f' class="flexb" @change='upload'></label>
		<button class="refuse" v-show='stc === 1' @click='refusePay'>拒绝打款</button>
		<label for="f" class="ll" v-show='stc === 2'><span class="up">重新选择</span><input type="file" id='f' class="flexb" @change='upload'></label>
		<button class="refuse" v-show='uploadShow' @click='confirmPay'> 确定打款</button>
		
		<div v-transfer-dom>
		      <loading v-model="buttonShow" :text="name"></loading>
		</div>
	</div>
	<!-- <img :src="resultUrl" width='100%' alt=""> -->
	<toast v-model="showRefuse" type="text" width='20em' :time="2000">等待审核后解冻</toast>
	 
	<div v-transfer-dom>
      <confirm v-model="showTip"
	      :title="'拒绝打款会冻结账户'"
	      @on-cancel="onCancel"
	      @on-confirm="onConfirm">
        <p style="text-align:center;">{{ "确定吗？" }}</p>
      </confirm>
    </div>
	<div v-transfer-dom>
      <confirm v-model="showCon"
	      :title="'确定打款'"
	      @on-cancel="onCancelPay"
	      @on-confirm="onConfirmPay">
        <p style="text-align:center;">{{ "确定吗？" }}</p>
      </confirm>
    </div>
</div>
</template>
<script>
import { uploadImg, refusePayMoney, logOut } from '@/api/index'
import { XDialog, Confirm,Loading, TransferDomDirective as TransferDom } from 'vux'
 import { Toast } from 'vux'
	export default {
		directives: {
		    TransferDom
		},
		props: {
			id: {
				type:String
			},
			stt: {
				type: Boolean,
			}
		},
		data() {
			return {
				buttonShow: false,
				img_base64: '',
				showCon: false,
				name: '打款，上传凭证中...',
				stc : 0,
				uploadShow : false,
				showTip: false,
				show: false,
				imagePath:'',
				showRefuse: false
			}
		},
		components: {
			XDialog,
			Confirm,
			Toast,
			Loading
		},
		mounted() {
			this.stc = Number(this.$route.query.st);
		},
		methods:{
			onConfirmPay() {
				window.location.href="/#/home/page/fdinfo?id="+this.id+"&st=2";
				this.stc = 2;
			},
			onCancelPay() {
				this.showCon = false;
			},
			confirmPay() {
				this.showCon = true;
			},
			upload(e){
				var file = e.target.files[0]
				if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
					 alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种');
					 return false
				 }
				var reader = new FileReader()
				reader.onload = (e) => {
					let data
					if (typeof e.target.result === 'object') {
						// 把Array Buffer转化为blob 如果是base64不需要
						data = window.URL.createObjectURL(new Blob([e.target.result]))
					} else {
						data = e.target.result
					}
					this.img_base64 = data;
					this.uploadShow = true;
					this.stc = 2;
					this.$emit('imgurl', {
						url:data
					});
					// console.log(this.stc);
				}
				// 转化为base64
				reader.readAsDataURL(file);
				// console.log(reader);
				// 转化为blob
				// reader.readAsArrayBuffer(file)
			},
			showLoading () {
		      this.buttonShow =true;
		      // setTimeout(() => {
		      //   this.$vux.loading.hide()
		      // }, 2000)
		    },
		    hideLoading(){
		    	this.buttonShow = false;
		    },
			refusePay() {
				this.showTip = true;
			},
			onCancel() {
				this.showTip = false;
			},
			onConfirm(){
				this.showRefuse = true;
				this.showTip = false;
				let params = JSON.stringify({sub_bill_id: this.id});
				this.$router.push('/');
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
			width: 50%;
			height: 100%;
			background:transparent;
			border: none; 
			color: #fff;
			font-size: 13px;
		}
		.ll{
			position: relative;
			width: 50%;
			text-align: center;
			.flexb{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 53px;
				opacity: 0;
			}
			.up{
				color: #fff;
				font-size: 12px;
				line-height: 53px;
			}
		}
	}
</style>