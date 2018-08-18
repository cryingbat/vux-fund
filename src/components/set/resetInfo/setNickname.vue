<template>
	<div class="nickname">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>修改昵称</header>
		<label for="pass" class="l" style='padding-top:16px'>昵称</label>
		<input type="text" id='pass' v-model='nick' placeholder="请输入您的昵称"><br>
		<x-button type='primary' @click.native='sub_nick' class='btn'>确认</x-button>

	</div>
</template>
<script>
import { XInput, XButton } from "vux";
import { nicknameSave } from "@/api/index";
export default {
    data() {
        return {
            imgUrl: "../../../../../static/u609.png",
            nick: ""
        };
    },
    methods: {
        goBack() {
            this.$router.back(-1);
        },
        onConfirm() {},
        sub_nick() {
            if (this.nick.length <= 0) {
                alert("请完善信息");
            } else {
                let params = JSON.stringify({ nickname: this.nick });
                alert("修改成功！");
                this.$router.push({
                    name: "resetInfo"
                });
            }
        }
    },
    components: {
        XInput,
        XButton
    }
};
</script>
<style scoped lang='less'>
.nickname {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2000;
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
    .l {
        text-align: left;
        float: left;
        padding: 0 16px 16px 16px;
    }
    #pass,
    #rpass {
        display: block;
        width: 85%;
        margin: 0 auto;
        padding: 6px;
        background: transparent;
        border: 0;
        border-bottom: 1px solid #ccc;
    }
    .btn {
        background: linear-gradient(
            90deg,
            rgba(213, 184, 150, 1) 0%,
            rgba(213, 184, 150, 1) 4%,
            rgba(170, 141, 106, 1) 100%,
            rgba(170, 141, 106, 1) 100%
        );
        width: 90%;
        margin: 0 auto;
    }
}
</style>