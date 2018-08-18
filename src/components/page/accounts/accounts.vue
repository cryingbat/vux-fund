<template>
	<div class="accounts">
		<v-accounts :allOrder='allOrder' @load='load' :status='status'></v-accounts>
		<div v-transfer-dom>
	      <loading v-model="showLoad" :text="name"></loading>
	    </div>
	</div>
</template>
<script>
import vAccounts from '@/common/allAccounts'
import { checkAllAccounts, checkLoanAllaccounts } from '@/api/index'
import { Loading, TransferDomDirective as TransferDom } from 'vux'
	export default {
		 directives: {
		    TransferDom
		 },
		data(){
			return {
				allOrder:[],
				nextOrder: [],
				page: '0',
				name:'加载中...',
				showLoad: false,
				status: true
			}
		},
		components: {
			vAccounts,
			Loading
		},
		mounted() {
			if(this.$route.params.id === 4){
				this.checkLoanAll();
			}else{
				this.all_init();
			}
		},
		methods: {
			showLoading() {
				this.showLoad = true;
			},
			hideLoading() {
				this.showLoad = false;
			},
			all_init() {
				this.showLoading();
				let params = JSON.stringify({page: this.page});
				checkAllAccounts(params).then((res) => {
					this.hideLoading();
					// console.log(res.data);
					if(res.succ>0){
						
						// console.log(res);
						if(res.data !== null) {
							for(let i=0;i<res.data.length;i++){
								var info={};
								switch(res.data[i].status){
									case '1' : info.st = '未匹配'; break;
									case '2' : info.st = '部分匹配'; break;
									case '3' : info.st = '匹配完成'; break;
									case '100' : info.st = '结算完成'; break;
									case '0' : info.st = '冻结'; break;
								}
								info.bill_id = res.data[i].bill_id;
								info.date = res.data[i].date;
								info.status = res.data[i].status;
								info.type = res.data[i].type;
								info.money = res.data[i].money;
								this.allOrder.push(info);
							}
						}else{
							if(Number(res.succ) === -1 || Number(res.succ) === -2){
				              alert('请重新登录！');
				              this.$router.push({
				                name: 'root'
				              }) 
				            }else{
				            	this.name = '加载失败,刷新重试！';
								this.allOrder = [];
				            }
							
						}
					}
				})
			},
			checkLoanAll() {
				this.showLoading();
				let params = JSON.stringify({page: this.page});
				checkLoanAllaccounts(params).then((res) => {
					this.hideLoading();
					// console.log(res.data);
					if(res.succ>0){
						
						// console.log(res.data);
						for(let i=0;i<res.data.length;i++){
							var info={};
							switch(res.data[i].status){
								case '1' : info.st = '未匹配'; break;
								case '2' : info.st = '部分匹配'; break;
								case '3' : info.st = '匹配完成'; break;
								case '100' : info.st = '结算完成'; break;
								case '0' : info.st = '冻结'; break;
							}
							info.bill_id = res.data[i].bill_id;
							info.date = res.data[i].date;
							info.type = res.data[i].type;
							info.status = res.data[i].status;
							info.money = res.data[i].money;
							this.allOrder.push(info);
						}
					}else{
						this.name = '加载失败,刷新重试！';
						this.allOrder = [];
					}
				})
			},
			load(flag) {
				if(flag){
					this.showLoading();
					let params = JSON.stringify({page: ++this.page});
					checkAllAccounts(params).then((res) => {
						this.hideLoading();
						// console.log(res.data);
						if(res.succ>0){
							
							for(let i=0;i<res.data.length;i++){
								var info={};
								switch(res.data[i].status){
									case '1' : info.st = '未匹配'; break;
									case '2' : info.st = '部分匹配'; break;
									case '3' : info.st = '匹配完成'; break;
									case '100' : info.st = '结算完成'; break;
									case '0' : info.st = '冻结'; break;
								}
								info.bill_id = res.data[i].bill_id;
								info.date = res.data[i].date;
								info.status = res.data[i].status;
								info.type = res.data[i].type;
								info.money = res.data[i].money;
								this.nextOrder.push(info);
							}
							this.allOrder.concat(this.nextOrder);
						}else if(res.succ === -4){
							this.nextOrder = [];
							this.status = false;
						}
					})
				}
			}
		}
	}
</script>
<style scoped lang='less'>
	.accounts{
		margin-bottom: 53px;
	}
</style>
