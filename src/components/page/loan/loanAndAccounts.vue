<template>
	<div class="loan">
		<v-loan :AllOrder='LoanAllOrder' @load='load' :status='status'></v-loan>
		<div v-transfer-dom>
	      <loading v-model="showLoad" :text="name"></loading>
	    </div>
	</div>

</template>
<script>
import vLoan from '@/components/page/loan/combineOrder/combineOrder'
import { getloanAndAccounts } from '@/api/index'
import { Loading, TransferDomDirective as TransferDom } from 'vux'
	export default {
		directives: {
		    TransferDom
		 },
		data() {
			return {
				LoanAllOrder:[],
				nextOrder: [],
				page: '0',
				showLoad: false,
				name: '加载中...',
				status: true,
			}
		},
		components: {
			vLoan,
			Loading
		},
		mounted() {
			setTimeout(() => {
				this.checkOrder();
			}, 300)
		},
		methods: {
			showLoading() {
				this.showLoad = true;
			},
			hideLoading() {
				this.showLoad = false;
			},
			checkOrder(){
				this.showLoading();
				let params = JSON.stringify({page: this.page})
				getloanAndAccounts(params).then((res) => {
					console.log(res);
					if(res.succ>0){
						this.hideLoading();
						if(res.data !== null){
							for(let i=0;i<res.data.length;i++){
								var info ={};
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
								info.money = res.data[i].money;
								this.LoanAllOrder.push(info);
							}
						}else{
							this.LoanAllOrder = []
						}
					}else{
						if(Number(res.succ) === -1 || Number(res.succ) === -2){
							alert('请重新登录！');
							this.$router.push({
								name: 'root'
							}) 
						}else{
							this.name= '获取失败,刷新重试！'
							setTimeout(() => {
								this.hideLoading();
							}, 800)					
						}
						
					}
				})
			},
			load(flag) {
				if(flag){
					let params = JSON.stringify({page: ++this.page});
					//请求接口
					this.status = false
				}
			}
		}
	}
</script>
<style scoped lang='less'>
	.loan{
		margin-bottom: 53px;
	}
</style>
