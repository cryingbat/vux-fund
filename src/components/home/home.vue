<template>
    <div id='app'>
        <router-view></router-view>
        <tabbar class='bottom-tab'>
            <tabbar-item selected link="/home/page/zdinfo">
                <img slot="icon" src="static/page.png">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item link="/home/me/b-bank">
                <img slot="icon" src="static/me.png">
                <span slot="label">我的</span>
            </tabbar-item>
            <tabbar-item link="/home/set">
                <img slot="icon" src="static/set.png">
                <span slot="label">设置</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";
export default {
    name: "app",
    components: {
        Tabbar,
        TabbarItem
    },
    data() {
        return {};
    }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
body {
    background-color: #f7f7f7;
}
#app {
    background: #f7f7f7;
}
.weui-tabbar.bottom-tab {
    position: fixed;
    z-index: 1001;
    .weui-tabbar__item {
        &.weui-bar__item_on {
            .weui-tabbar__label {
                color: #000;
            }
        }
        .weui-tabbar__label {
            color: rgba(172, 147, 117, 1);
        }
    }
}
</style>
