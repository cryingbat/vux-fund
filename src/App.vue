<template>
  <div>
    <router-view></router-view>
  </div> 
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  background-color: #f7f7f7;
}
.weui-tabbar.bottom-tab{
    position: fixed;
  }
</style>
