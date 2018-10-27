<template>
	<div class="shift">
		<div v-if="oneOrder.length<=0 " style='color:#999;text-align:center;margin-top:20px;'>数据为空</div>
		<div class="box" v-else v-for="(item, index) in oneOrder" :key='index' :class="{'states1': item.status === '0', 'states2': item.status ==='1', 'states3': item.status ==='2', 'states4': item.status ==='100','states5': item.status ==='4' }" @click='(Number(item.status) ===100 ? false: true) && showDetailInfo(item.sub_bill_id, item.status)'>
			<img v-show='item.type=== 1' :src="imgIcon[0]" alt="" class="icon">
			<img v-show='item.type=== 2' :src="imgIcon[1]" alt="" class="icon">
			<div class="top">
				<div class="state">
					<img :src="imgSrc[4]" width="32" height="32" alt="" v-if="item.status ==='0'">
					<img :src="imgSrc[1]" width="32" height="32" alt="" v-else-if="item.status ==='1'">
					<img :src="imgSrc[0]" width="32" height="32" alt="" v-else-if="item.status ==='2'">
					<img :src="imgSrc[2]" width="32" height="32" alt="" v-else-if="item.status ==='100'">
					<img :src="imgSrc[3]" width="32" height="32" alt="" v-else="item.status ==='4'">
				</div>
				<div class="table">
					<p class="item1">号码：{{item.idName}}
						<span class='dTimeBox'>{{item.dTime}}</span>
					</p>
					<p class="item2">状态：{{item.st}} </p>
					<p class="item3">
						<div class="subItem1">{{item.from}}</div>
						<div class="subItem2">{{item.money}}</div>
						<div class="subItem3">{{item.to}}</div>
					</p>
				</div>

			</div>
			<div class="env" v-show='item.over'><img :src="env" width="100%" height="100%" alt=""></div>
			<div class="bottom">
				<span class="time">创建日期：{{item.time}}</span>
				<button class="more">阅读更多</button>
			</div>
		</div>
		<div v-transfer-dom>
			<loading v-model="showLoad" :text="name"></loading>
		</div>
		<div v-show="oneOrder.length>0" style="padding-bottom : 15px">
			<div class="loadMore" v-if='status' @click='loadMore'>加载更多...</div>
			<div class="loadMore" v-else>没有更多啦！</div>
		</div>
	</div>
</template>
<script>
import md5 from "md5";
import { getOneAccounts, loanOneAccounts } from "@/api/index";
import { Loading, TransferDomDirective as TransferDom } from "vux";
import moment from "moment";
export default {
    directives: {
        TransferDom
    },
    components: {
        Loading
    },
    data() {
        return {
            oneOrder: [],
            page: "0",
            nextOrder: [],
            name: "加载中...",
            time: 0,
            env: "static/over.png",
            showLoad: false,
            status: true,
            imgIcon: ["static/buy.png", "static/sell.png"],
            imgSrc: [
                "static/wp.png",
                "static/bf.png",
                "static/pp.png",
                "static/js.png",
                "static/dj.png"
            ]
        };
    },
    computed: {},
    methods: {
        dealTime(info, time, curr, dtime) {
            // console.log(dtime);
            time = moment(time).format("X");
            curr = moment(curr).format("X");
            dtime = parseInt(Number(dtime) * 3600);
            let dev = curr - time;
            let timer = setInterval(() => {
                let str = "";
                if (dev <= dtime) {
                    let tt = dtime - dev;
                    let hour = parseInt(tt / 3600);
                    let min = parseInt(tt / 60) % 60;
                    let sec = tt % 60;
                    str =
                        (hour >= 10 ? hour : "0" + hour) +
                        ":" +
                        (min >= 10 ? min : "0" + min) +
                        ":" +
                        (sec >= 10 ? sec : "0" + sec);
                } else {
                    clearInterval(timer);
                    str = "已截止";
                }
                dev++;
                info.dTime = str;
            }, 1000);
        },
        showLoading() {
            this.showLoad = true;
        },
        hideLoading() {
            this.showLoad = false;
        },
        showDetailInfo(id, status) {
            if (!this.$route.query.type) {
                this.$router.push(
                    "/home/page/fdinfo?id=" + id + "&st=" + status
                );
            }
            if (Number(this.$route.query.type) === 1) {
                //跳转账详情
                this.$router.push(
                    "/home/page/fdinfo?id=" + id + "&st=" + status
                );
            } else if (Number(this.$route.query.type) === 2) {
                //跳贷款详情
                this.$router.push(
                    "/home/page/lfdinfo?id=" + id + "&st=" + status
                );
            }
        },
        load() {
            this.showLoading();
            if (!this.$route.query.type) {
                let params = JSON.stringify({ page: this.page });
                getOneAccounts(params).then(res => {
                    if (res.succ > 0) {
                        this.hideLoading();
                        if (res.data !== null) {
                            for (let i = 0; i < res.data.length; i++) {
                                var info = {};
                                if (res.data[i].status == "0") {
                                    info.st = "已冻结";
                                } else if (res.data[i].status == "1") {
                                    info.st = "等待上传凭证";
                                } else if (res.data[i].status == "2") {
                                    info.st = "等待确认";
                                } else if (res.data[i].status == "100") {
                                    info.st = "已完成";
                                } else {
                                    info.st = "管理员审核中";
                                }
                                info.status = res.data[i].status;
                                info.from = res.data[i].from;
                                info.to = res.data[i].to;
                                info.type = res.data[i].type;
                                info.money = res.data[i].money;
                                info.sub_bill_id = res.data[i].sub_bill_id;
                                info.time = res.data[i].time;
                                info.dTime = "";
                                info.idName =
                                    (info.type == 1 ? "B" : "S") +
                                    moment(res.data[i].time).format("HHmmss") +
                                    md5(res.data[i].sub_bill_id).substr(8, 4);
                                this.oneOrder.push(info);
                                if (Number(info.status) === 100) {
                                    info.over = true;
                                } else {
                                    info.over = false;
                                }
                                if (
                                    !!this.oneOrder &&
                                    Number(info.status) === 1
                                )
                                    this.dealTime(
                                        this.oneOrder[this.oneOrder.length - 1],
                                        res.data[i].time,
                                        res.data[i].current_time,
                                        res.data[i].interval
                                    );
                            }
                        } else {
                            this.oneOrder = [];
                        }
                    } else {
                        if (
                            Number(res.succ) === -1 ||
                            Number(res.succ) === -2
                        ) {
                            alert("请重新登录！");
                            this.$router.push({
                                name: "root"
                            });
                        } else {
                            this.name = "加载失败,刷新重试！";
                            setTimeout(() => {
                                this.hideLoading();
                            }, 800);
                            this.oneOrder = [];
                        }
                    }
                });
            }
            if (Number(this.$route.query.type) === 1) {
                //查转账分单  (sell)
                this.showLoading();
                let id = this.$route.query.id;
                let params = JSON.stringify({ bill_id: id, page: this.page });
                getOneAccounts(params).then(res => {
                    if (res.succ > 0) {
                        this.hideLoading();
                        if (res.data !== null) {
                            for (let i = 0; i < res.data.length; i++) {
                                var info = {};
                                if (res.data[i].status == "0") {
                                    info.st = "已冻结";
                                } else if (res.data[i].status == "1") {
                                    info.st = "等待上传凭证";
                                } else if (res.data[i].status == "2") {
                                    info.st = "等待确认";
                                } else if (res.data[i].status == "100") {
                                    info.st = "已完成";
                                } else {
                                    info.st = "管理员审核中";
                                }
                                info.status = res.data[i].status;
                                info.from = res.data[i].from;
                                info.to = res.data[i].to;
                                info.type = res.data[i].type;
                                info.money = res.data[i].money;
                                info.sub_bill_id = res.data[i].sub_bill_id;
                                info.time = res.data[i].time;
                                info.idName =
                                    (info.type == 1 ? "B" : "S") +
                                    moment(res.data[i].time).format("HHmmss") +
                                    md5(res.data[i].sub_bill_id).substr(8, 4);
                                info.dTime = "";
                                this.oneOrder.push(info);
                                if (Number(info.status) === 100) {
                                    info.over = true;
                                } else {
                                    info.over = false;
                                }
                                if (
                                    !!this.oneOrder &&
                                    Number(info.status) === 1
                                )
                                    this.dealTime(
                                        this.oneOrder[this.oneOrder.length - 1],
                                        res.data[i].time,
                                        res.data[i].current_time,
                                        res.data[i].interval
                                    );
                            }
                        } else {
                            this.oneOrder = [];
                        }
                    } else {
                        if (
                            Number(res.succ) === -1 ||
                            Number(res.succ) === -2
                        ) {
                            alert("请重新登录！");
                            this.$router.push({
                                name: "root"
                            });
                        } else {
                            this.name = "加载失败,刷新重试！";
                            setTimeout(() => {
                                this.hideLoading();
                            }, 800);
                            this.oneOrder = [];
                        }
                    }
                });
            } else {
                if (Number(this.$route.query.type) === 2) {
                    //查贷款分单 buy
                    this.showLoading();
                    let id = this.$route.query.id;
                    let params = JSON.stringify({
                        bill_id: id,
                        page: this.page
                    });
                    loanOneAccounts(params).then(res => {
                        if (res.succ > 0) {
                            this.hideLoading();
                            if (res.data !== null) {
                                for (let i = 0; i < res.data.length; i++) {
                                    var info = {};
                                    if (res.data[i].status == "0") {
                                        info.st = "已冻结";
                                    } else if (res.data[i].status == "1") {
                                        info.st = "等待上传凭证";
                                    } else if (res.data[i].status == "2") {
                                        info.st = "等待确认";
                                    } else if (res.data[i].status == "100") {
                                        info.st = "已完成";
                                    } else {
                                        info.st = "管理员审核中";
                                    }
                                    info.status = res.data[i].status;
                                    info.from = res.data[i].from;
                                    info.to = res.data[i].to;
                                    info.money = res.data[i].money;
                                    info.type = res.data[i].type;
                                    info.sub_bill_id = res.data[i].sub_bill_id;
                                    info.time = res.data[i].time;
                                    info.idName =
                                        (info.type == 1 ? "B" : "S") +
                                        moment(res.data[i].time).format(
                                            "HHmmss"
                                        ) +
                                        md5(res.data[i].sub_bill_id).substr(
                                            8,
                                            4
                                        );
                                    info.dTime = "";
                                    this.oneOrder.push(info);
                                    if (Number(info.status) === 100) {
                                        info.over = true;
                                    } else {
                                        info.over = false;
                                    }
                                    if (
                                        !!this.oneOrder.length &&
                                        Number(info.status) === 1
                                    )
                                        this.dealTime(
                                            this.oneOrder[
                                                this.oneOrder.length - 1
                                            ],
                                            res.data[i].time,
                                            res.data[i].current_time,
                                            res.data[i].interval
                                        );
                                }
                            } else {
                                this.oneOrder = [];
                            }
                        } else {
                            if (
                                Number(res.succ) === -1 ||
                                Number(res.succ) === -2
                            ) {
                                alert("请重新登录！");
                                this.$router.push({
                                    name: "root"
                                });
                            } else {
                                this.name = "加载失败,刷新重试！";
                                setTimeout(() => {
                                    this.hideLoading();
                                }, 800);
                                this.oneOrder = [];
                            }
                        }
                    });
                }
            }
        },
        loadMore() {
			this.status =false;
		}
    },
    mounted() {
        this.load();
    }
};
</script>
<style scoped lang='less'>
.shift {
    margin-bottom: 53px;
}
.box {
    position: relative;
    overflow: hidden;
    width: 350px;
    height: 170px;
    border-radius: 8px;
    margin: 10px auto;
    &.states2 {
        background: #51a4ac;
    }
    &.states3 {
        background: linear-gradient(#51a4ac 0%, #3571b0 100%);
    }
    &.states4 {
        background: #3571b0;
    }
    &.states5 {
        background: #938da7;
    }
    &.states1 {
        background: linear-gradient(
            150deg,
            #0c1414 0%,
            #d40000 0%,
            #001912 100%,
            #0a0a12 100%
        );
    }
    .icon {
        position: absolute;
        right: 0;
        top: 0;
    }
    .env {
        position: absolute;
        bottom: 0px;
        right: 50px;
    }
    .top {
        overflow: hidden;
        .state {
            text-align: center;
            padding-top: 10px;
            width: 13%;
            height: 120px;
            float: left;
        }
        .table {
            margin-top: 10px;
            width: 73%;
            height: 105px;
            float: left;
            border: 1px solid #fff;
            .item1,
            .item2 {
                color: #fff;
                border-bottom: 1px solid #fff;
            }
            .item1 {
                padding: 5px 0 5px 8px;
                .dTimeBox {
                    float: right;
                    font-weight: 700;
                    color: rgb(255, 0, 0);
                    margin-right: 5px;
                }
            }
            .item2 {
                padding: 8px 0 8px 8px;
                font-size: 10px;
            }
            .item3 {
                font-size: 14px;
                overflow: hidden;
            }
            .subItem1,
            .subItem3 {
                display: inline-block;
                padding-left: 8px;
                width: 22%;
                /*font-weight: bold;*/
                color: #fff;
                height: 33px;
                text-align: center;
                line-height: 32px;
                float: left;
                border-right: 1px solid #fff;
            }
            .subItem1 {
                padding-right: 10px;
            }
            .subItem2 {
                display: inline-block;
                float: left;
                color: #fff;
                height: 33px;
                text-align: center;
                line-height: 32px;
                /*font-weight: bold;*/
                padding-left: 8px;
                border-right: 1px solid #fff;
                width: 30%;
            }
            .subItem3 {
                border: 0;
            }
        }
    }
    .bottom {
        padding: 0 20px;
        overflow: hidden;
        .time {
            padding-top: 2px;
            color: #fff;
            float: left;
            font-size: 12px;
        }
        .more {
            float: right;
            border: 2px solid rgba(121, 121, 121, 1);
            outline: none;
            background: #fff;
            cursor: pointer;
            color: #000;
            padding: 3px 5px;
            border-radius: 20px;
        }
    }
}
.loadMore {
    text-align: center;
    margin-top: 30px;
    font-size: 12px;
    color: #ac9375;
}
</style>