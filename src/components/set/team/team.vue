<template>
	<div class="team">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>我的团队</header>
		<div class="box" style="text-align:center;background:transparent; padding-top:200px;" v-if='info === null'>暂无团队信息</div>
		<div class="box" v-else>
			<div v-for='(item, index) in info' :key='index' class="space">
				<p class="name avatar">头像<img class="item" :src="item.header_url" width='40' style='margin-top: -5px;border-radius: 50%;' alt=""></p>
				<p class="name">姓名
					<span class="item">{{item.nickname}}</span>
				</p>
				<p class="name">手机号
					<span class="item">{{item.phone}}</span>
				</p>

			</div>
			<div v-show='info !== null'>
				<div class="loadMore" v-if='status' @click='loadMore'>加载更多...</div>
				<div class="loadMore" v-else>没有更多啦！</div>
			</div>
		</div>
		<div v-transfer-dom>
			<loading v-model="showLoad" :text="name"></loading>
		</div>

	</div>
</template>
<script>
import { Loading, TransferDomDirective as TransferDom } from "vux";
import { getGroup } from "@/api/index";
export default {
    directives: {
        TransferDom
    },
    data() {
        return {
            info: [],
            next: [],
            page: "0",
            name: "加载中...",
            showLoad: false,
            status: true,
            imgUrl: "../../../../static/u609.png"
        };
    },
    components: {
        Loading
    },
    mounted() {
        setTimeout(() => {
            this.check_team();
        }, 300);
    },
    methods: {
        showLoading() {
            this.showLoad = true;
        },
        hideLoading() {
            this.showLoad = false;
        },
        goBack() {
            this.$router.back(-1);
        },
        check_team() {
            this.showLoading();
            let params = JSON.stringify({ page: this.page });
            getGroup(params).then(res => {
                this.hideLoading();
                if (res.succ > 0) {
                    if (!res.data) {
                    } else {
                        for (let i = 0; i < res.data.length; i++) {
                            if (res.data.header_url === "") {
                                res.data.header_url =
                                    "../../../../static/u414.png";
                            }
                        }
                    }
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
    }
};
</script>
<style scoped lang='less'>
.team {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1005;
    background: rgba(248, 248, 248, 1);
    width: 100%;
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
        background: transparent;
    }
    .box {
        margin-top: 10px;
        margin-bottom: 10px;
        .space {
            background: #fff;
            margin-bottom: 10px;
        }
        .name {
            border-bottom: 1px solid #ccc;
            padding: 10px 12px;
            .item {
                color: #999;
                float: right;
                margin-right: 20px;
            }
        }
        .name:last-of-type {
            border: none;
        }
        .avatar {
            padding: 16px 12px;
        }
    }
}
</style>
