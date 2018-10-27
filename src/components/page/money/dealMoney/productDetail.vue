<template>
	<div class="detail">
		<header class="head"><img :src="imgUrl" style='padding:0 10px 5px 6px;' width="12" height="24" alt="" @click='goBack'>产品介绍</header>
		<div class="box"><img :src="bg" width='100%' alt=""></div>
	</div>
</template>
<script>
export default {
    data() {
        return {
            imgUrl: "static/u609.png",
            bg: "static/bg.png"
        };
    },
    methods: {
        goBack() {
            this.$router.back(-1);
        }
    }
};
</script>
<style scoped lang='less'>
.detail {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background: #fff;
    z-index: 1200;
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
    .box {
        height: 100%;
    }
}
</style>