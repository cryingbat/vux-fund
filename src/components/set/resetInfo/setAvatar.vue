<template>
	<div class="avatar">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>修改头像 <span class="point"><img :src="imgLink" width='30' @click='showSelect'  alt=""></span></header>
		<div class="changeAvatar" :class="{'active' : show}">
			<p class="item">
				<label class="btn changeImg" for="uploads">本地相册</label>
				<input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
			</p>
			<p class="item " style='margin-bottom: 0' @click='close'>取消</p>
		</div>
		<div class="wrapper">
			<vueCropper
				ref="cropper2"
				:img="example2.img"
				:autoCrop="example2.autoCrop"
				:autoCropWidth="example2.autoCropWidth"
				:autoCropHeight="example2.autoCropHeight"
				:fixedBox="example2.fixed"
				:canScale='example2.canScale'
				:fixedNumber="example2.fixedNumber"
				>
				
			</vueCropper>
			<button @click="stopCrop" class="btn zz">确认修改</button>
		</div>
		<div v-transfer-dom v-show = 'realy'>
		      <confirm v-model="realy"
		      :title="'确定'"
		      @on-cancel="onCancel"
		      @on-confirm="onConfirm">
		        <p style="text-align:center;">{{"确认修改吗？"}}</p>
	      </confirm>
	    </div>
	</div>
</template>
<script>
import vueCropper from 'vue-cropper'
import { changeNickname, nicknameSave }  from '@/api/index'
import { Confirm, TransferDomDirective as TransferDom } from 'vux'
import { setTimeout } from 'timers';
	export default {
		directives: {
		    TransferDom
		  },
		data() {
			return {
				imgUrl: 'static/u609.png',
				imgLink: 'static/more.png',
				show: false,
				crap: false,
				realy: false,
				example2: {
					img: 'data:image/png;base64,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',
					autoCrop: true,
					canScale: true,
					// 只有自动截图开启 宽度高度才生效
					autoCropWidth: 60,
					autoCropHeight: 60,
					// 开启宽度和高度比例
					fixed: true,
					fixedNumber: [4, 3]
				}
			}
		},
		components: {
			vueCropper,
			Confirm
		},
		methods: {
			goBack() {
				this.$router.back(-1);
			},
			showCap() {
				this.show = true;
			},
			onCancel() {
				this.realy = false
			},
			onConfirm(){
				this.$refs.cropper2.stopCrop();
				this.$refs.cropper2.getCropData((data) => {
				  this.show = false;
				  let params = JSON.stringify({
				  	header_base64: data
				  });
				  setTimeout(() => {
					  alert('修改成功！');
				  		this.$router.push({
				  			name: 'resetInfo'
				  		})
				  },2000) 
				})
			},
			stopCrop () {
				this.realy = true;
			},
			close() {
				this.show = false;
			},
			showSelect() {
				this.show = !this.show;
			},
			uploadImg (e, num) {
			//上传图片
			// this.option.img
				var file = e.target.files[0]
				if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
					 alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
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
					if (num === 1) {
						this.example2.img = data
						this.show = false;
					} else if (num === 2) {
						this.example2.img = data
					}
				}
				// 转化为base64
				reader.readAsDataURL(file);
				// console.log(reader);
				// 转化为blob
				// reader.readAsArrayBuffer(file)
			}
		}
	}
</script>
<style scoped lang='less'>
	.avatar{
		position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2000;
        background: rgba(248, 248, 248, 1);
		width: 100%;
		header.head{
			position: relative;
			img{
				position: absolute;
				left: 10px;
				top: 12px;
			}
			.point{
				position: absolute;
				top: -2px;
				right: 50px;
			}
			width: 1100;
			height: 44px;
			background: rgba(172, 147, 117, 1);
			font-size: 20px;
			color: #fff;
			text-align: center;
			line-height: 44px;
		}
		.wrapper{
			position: fixed;
			top: 44px;
			bottom: 44px;
			width: 100%;
			height: 95%;
			.zz{
				position: fixed;
				right: 22px;
				top: 60px;
				width: 80px;
				border-radius: 20px;
				outline: none;
				background: #ac9375;
				border: none;
				color: #fff;
				height: 30px;

			}
		}
		.changeAvatar{
			width: 100%;
			position: fixed;
			bottom:-90px;
			background: #ccc;
			z-index: 1000;
			left: 0;
			height: 90px;
			text-align: center;
			.item{
				height: 40px;
				line-height: 40px;
				margin-bottom: 10px;
				background: #fff;
				.changeImg{
					width: 100%;
					height: 100%;
					display: inline-block;
				}
			}
			
		}
		.active{
			bottom: 0;
		}
	}
</style>