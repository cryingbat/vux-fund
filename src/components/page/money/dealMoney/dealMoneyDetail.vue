<template>
	<div class="dealMoneyDetail">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>详情订单</header>
		<div class="box" style="text-align:center;padding-top:100px;background:#ccc" v-if='info === null || info=== ""'>暂无信息</div>
		<div class="box" v-else style='background:#ccc'>
			<div v-for="(item, index) in info" :key='index'>
				<div class="orderDetail">
					<div class="orderNum item">
						<span>订单号</span>
						<span class="right">{{item.bill_id}}</span>
					</div>
					<div class="money item">
						<span>转入金额（元）</span>
						<span class="right">{{item.money}}</span>
					</div>
					<div class="time item">
						<span>转入时间</span>
						<span class="right">{{item.time}}</span>
					</div>
					<!-- <div class="time item">
						<span>期限</span>
						<span class="right">{{item.status}}</span>
					</div> -->
					<div class="earn item">
						<span>昨日收益（元）</span>
						<span class="red right">{{item.obtain || 0}}</span>
					</div>
				</div>
			</div>
			<div v-if='info !== null || info!== ""' style="padding:0 0 15px 0">
				<div class="loadMore" v-if='status' @click='loadMore'>加载更多...</div>
				<div class="loadMore" v-else>没有更多啦！</div>
			</div>
		</div>

	</div>
</template>
<script>
import { financialItems } from "@/api/index";
export default {
    data() {
        return {
            info: [],
            page: "0",
            status: true,
            next: [],
            imgUrl: "static/u609.png"
        };
    },
    methods: {
        goBack() {
            this.$router.back(-1);
        },
        money_list() {
            let params = JSON.stringify({ page: this.page });
            financialItems(params).then(res => {
                if (res.succ > 0) {
                    this.info = res.data;
                } else {
                    if (Number(res.succ) === -1 || Number(res.succ) === -2) {
                        alert("请重新登录！");
                        this.$router.push({
                            name: "root"
                        });
                    } else {
                        this.info = [];
                    }
                }
            });
        },
        loadMore() {
            this.status = false;
        }
    },
    mounted() {
        this.money_list();
    }
};
</script>
<style lang='less' scoped>
.dealMoneyDetail {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    z-index: 1002;
    header.head {
        position: relative;
        img {
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
    .loadMore {
        text-align: center;
        font-size: 12px;
        color: #ac9375;
        margin-top: 20px;
    }
    .box {
        .orderDetail {
            padding: 0 12px;
            height: 190px;
            background: #fff;
            margin: 10px 0;
            .item {
                border-bottom: 1px solid #ccc;
                padding: 10px 0;
                .right {
                    float: right;
                    margin-right: 8px;
                }
                .red {
                    color: #fe6d53;
                }
            }
            .earn {
                border: none;
            }
        }
        .orderDetail:last-child {
            margin-bottom: 0;
        }
    }
}
</style>