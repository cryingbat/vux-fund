<template>
	<div id='detail'>
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>详细信息</header>
		<div class="box" ref='box'>
			<group label-width="5em" label-margin-right="2em" label-align="right">
		      <group-title slot="title">打款人信息<span style="float:right;"></span></group-title>
		      <x-input title="昵称：" disabled  v-model="info.user_buy" style='font-size:14px;'></x-input>
		      <x-input title="手机号：" disabled  v-model="info.phone_buy" style='font-size:14px;'></x-input>
		      
		       <x-input title="推荐人：" disabled  v-model="info.referee_buy" style='font-size:14px;'></x-input>
		    </group>
		    <group label-width="5em" label-margin-right="2em" label-align="right">
		      <group-title slot="title">收款人信息<span style="float:right;"></span></group-title>
		      <x-input title="昵称：" disabled v-model="info.user_sell" style='font-size:14px;'></x-input>
		      <x-input title="手机号："  disabled v-model="info.phone_sell" style='font-size:14px;'></x-input>
		       <x-input title="推荐人：" disabled  v-model="info.referee_sell" style='font-size:14px;'></x-input>
		    </group>
		    <group label-width="5em" label-margin-right="2em" label-align="right">
		      <group-title slot="title">账户信息<span style="float:right;"></span></group-title>
		      <x-input title="开户人：" disabled  v-model="info.truename" style='font-size:14px;'></x-input>
		      <x-input title="账户号码：" disabled  v-model="info.account_val" style='font-size:14px;'></x-input>
		      <x-input disabled title="所属银行："  v-model="info.account_belong" style='font-size:14px;'></x-input>
		    </group>
		     <div v-show= 'show' style='background:#f7f7f7'>
		        <div class="pzimg"><span>凭证图片</span></div>
		    	<img :src="returnImg" width='100%' style='text-align:center'  alt="">
		    </div>
	    </div>
		 <div v-transfer-dom>
	      <loading v-model="showLoad" :text="name"></loading>
	    </div>
	    <div class="btn wait" v-if="status === '1'">等待对方上传凭证</div>
	    <div class="btn" v-else-if="status === '2'"><v-mutton :id='id' @confirmOk='reload'></v-mutton></div>
	    <div  v-else-if="status === '100'"><!-- <v-dutton :id='status'></v-dutton> --></div>
	    <div class="btn checking" v-else-if="status === '4'">工作人员审核中</div>
	</div>
</template>
<script>
import { Group, GroupTitle,  Cell,  XInput } from 'vux'
import vButton from '@/common/tButton'
import vMutton from '@/common/thButton'
import { Loading, TransferDomDirective as TransferDom } from 'vux'
import { loanOneAccountsDetail } from '@/api/index'
export default {
directives: {
    TransferDom
 },
  components: {
      Group,
      XInput,
      Loading,
      Cell,
      GroupTitle,
      vButton,
      vMutton
    },
  data () {
    return {
      info: {},
      id: '',
      name: '加载中...',
      showLoad: false,
      show: false,
      returnImg : "",
      status: '',
      imgUrl: 'static/u609.png'
    }
  },
  mounted() {
  	setTimeout(() => {
  		this.getOneZZ();
  	}, 300);
  	this.status = this.$route.query.st;
  },
  methods:{
  	showLoading() {
		this.showLoad = true;
	},
	hideLoading() {
		this.showLoad = false;
	},
  	reload() {
  		window.location.reload();
  	},
  	showImg(url) {
  		this.show = true;
  		this.returnImg = url;
  	},
  	goBack() {
  		this.$router.push({
  			name: 'lzdinfo',
  			 params: {id: 4}
  		});
  	},
  	getOneZZ(){
  		this.showLoading();
  		this.id = this.$route.query.id;
	  	let params = JSON.stringify({sub_bill_id: this.id})
	  	loanOneAccountsDetail(params).then((res) => {
	  		if(res.succ>0){
	  			this.hideLoading();
	  			this.status = res.data.status;
	  			if(res.data.status === '100' ){
	  				this.$refs.box.style.marginBottom =  '0px';
	  			}
	  			if((res.data.status === '100' || res.data.status === '2') && res.data.img_url ){
	  				this.show= true;
	  				this.returnImg = res.data.img_url;
	  			}
	  			this.info = res.data;
	  		}else{
	  			if(Number(res.succ) === -1 || Number(res.succ) === -2){
					alert('请重新登录！');
					this.$router.push({
						name: 'root'
					}) 
				}else{
					this.name = '加载失败,刷新重试！';
		  			setTimeout(() => {
						this.hideLoading();
					}, 800)
		  			this.info = {};
				}
	  		}
	  	})
	  	}
  	}
}
</script>
<style lang='less' scoped>
	#detail{
		position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1010;
        background: rgba(248, 248, 248, 1);
		width:100%;
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
		input:disabled{
			color: #666;
		}
		.box{
			margin-bottom: 53px;
			.pzimg{
			    margin-top: 0.77em;
			    /*margin-bottom: 0.3em;*/
			    padding-left: 15px;
			    padding-right: 15px;
			    color: #999999;
			    font-size: 14px;
			}
		}
		.btn{
			position: fixed;
			bottom: 0;
			left: 0;
			height: 53px;
			background: rgba(172, 147, 117, 1);
			width: 100%;
		}
		.checking{
			text-align: center;
			color: #fff;
			font-size: 16px;
			line-height: 53px;
		}
		.wait{
			text-align: center;
			line-height: 53px;
			color: #fff;
			font-size: 16px;
		}
	}
</style>