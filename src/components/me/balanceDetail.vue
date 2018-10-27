<template>
	<div class="balanceDetail">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>收益</header>
		<tab style='padding-top: 10px;position:relative' v-model="change" class='tabChange'>
	      <tab-item selected @on-item-click="consoleIndex()">借贷</tab-item>
	      <span class="shortLine"></span>
	      <tab-item @on-item-click="consoleIndex()">理财</tab-item>
	    </tab>
	      <router-view></router-view>
	</div>
</template>
<script>
import { Tab, TabItem } from 'vux'
	export default {
		data () {
		    return {
		      change: 0,
		      imgUrl: 'static/u609.png'
		    }
		},
	  	components: {
	    	Tab,
	    	TabItem
	 	},
	  	methods:{
	  		consoleIndex() {
	  			if(this.change === 0){
	  				this.$router.push({
	  					name: 'balanceWidthAccounts'
	  				})
	  			}else if(this.change === 1){
					this.$router.push({
				  	name: 'balanceWidthMoney'
				})
	  		}
		  	},
		  	goBack() {
		  		this.$router.push({
		  			name: 'b-bank'
		  		})
		  	}
		  }
	}
</script>
<style scoped lang='less'>
	.balanceDetail{
		position: absolute;
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
		.tabChange{
			.vux-tab-item{
				font-size: 18px;
			}
			/*.vux-tab-item.vux-tab-selected{
				color: #ac9375;
				border-bottom: 3px solid #ac9375;
			}*/
			.shortLine{
				position: absolute;
		      	left: 50%;
		      	top: 18px;
		      	width: 1px;
		     	height: 20px;
		      	background: rgba(0,0,0,0.3);
			}
		}
	}
</style>