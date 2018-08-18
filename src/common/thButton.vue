<template>
	<div class="button">
		<button class="refuse" @click='resultGet'>拒绝收款</button>
		<button class="confir" @click='confirmGet'>确认收款</button>

		<div v-transfer-dom>
			<confirm v-model="Tip" :title="'确定'" @on-cancel="No" @on-confirm="Yes">
				<p style="text-align:center;">{{ "确定收款吗？" }}</p>
			</confirm>
		</div>
		<div v-transfer-dom>
			<confirm v-model="showTip" :title="'确定'" @on-cancel="onCancel" @on-confirm="onConfirm">
				<p style="text-align:center;">{{ "确定拒绝收款吗？" }}</p>
			</confirm>
		</div>
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
import { refuseGetMoney, confirmGetMoney, getImgUrl } from "@/api/index";
import { XDialog, Confirm, TransferDomDirective as TransferDom } from "vux";

export default {
    directives: {
        TransferDom
    },
    props: {
        id: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            show: false,
            img: "",
            Tip: false,
            showTip: false
        };
    },
    components: {
        XDialog,
        Confirm
    },
    methods: {
        seeImg() {
            this.show = true;
            let params = JSON.stringify({ sub_bill_id: this.id });
            getImgUrl(params).then(res => {
                if (res.succ > 0) {
                    this.img = res.data.imgurl;
                } else {
                    alert("图片获取失败！");
                }
            });
        },
        confirmGet() {
            this.Tip = true;
        },
        No() {
            this.Tip = false;
        },
        Yes() {
            alert("确认成功！");
            this.$emit("confirmOk", true);
            this.Tip = false;
        },
        resultGet() {
            this.showTip = true;
        },
        onCancel() {
            this.showTip = false;
        },
        onConfirm() {
            let params = JSON.stringify({ sub_bill_id: this.id });
            alert("拒绝成功！");
            this.showTip = false;
            this.$router.push({
                name: "lzdinfo",
                params: { id: 4 }
            });
        }
    }
};
</script>
<style scoped lang='less'>
.button {
    display: flex;
    height: 53px;
    justify-content: space-around;
    button {
        width: 33.3%;
        height: 100%;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 13px;
    }
}
</style>