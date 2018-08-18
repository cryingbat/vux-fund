<template>
  <div id="set">
    <div class="title">设置</div>
    <group>
      <cell title="开设账户" is-link @click.native='setAcc'></cell>
    </group>
    <group>
      <cell title="收款账户" is-link @click.native='gather'></cell>
    </group>
    <group>
      <cell title="修改资料" is-link @click.native='resetInfo'></cell>
    </group>
    <group>
      <cell title="修改密码" is-link @click.native='repass'></cell>
    </group>
    <group>
      <cell title="我的团队" is-link @click.native='team'></cell>
    </group>
    <group>
      <cell title="推荐二维码" is-link @click.native='qrcode'></cell>
    </group>
    <group>
      <cell title="退出" class='logOut' @click.native='logOut'></cell>
    </group>
    <group>
      <cell title="反馈" is-link class='' @click.native='toBaidu'></cell>
    </group>
    <br>
  </div>
</template>

<script>
import { Group, Cell } from "vux";
import { logOut } from "@/api/index";
export default {
    components: {
        Group,
        Cell
    },
    data() {
        return {};
    },
    methods: {
        toBaidu() {
            window.location.href = "https://github.com/cryingbat";
        },
        setAcc() {
            this.$router.push({
                name: "setAccount"
            });
        },
        resetInfo() {
            this.$router.push({
                name: "resetInfo"
            });
        },
        gather() {
            this.$router.push({
                name: "gathering"
            });
        },
        qrcode() {
            this.$router.push({
                name: "qrcode"
            });
        },
        repass() {
            this.$router.push({
                name: "repass"
            });
        },
        team() {
            this.$router.push({
                name: "team"
            });
        },
        logOut() {
            this.$router.push({
                name: "root"
            });
        }
    }
};
</script>

<style scoped lang='less'>
#set {
    margin-bottom: 53px;
    font-size: 14px;
}
.title {
    width: 100%;
    height: 44px;
    background: rgba(172, 147, 117, 1);
    text-align: center;
    line-height: 44px;
    color: #fff;
    font-size: 20px;
}
#set .weui-cells .vux-cell-bd label.vux-label {
    font-size: 14px !important;
}
.vux-demo {
    text-align: center;
}
.logo {
    width: 100px;
    height: 100px;
}
</style>
