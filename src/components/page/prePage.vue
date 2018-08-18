<template>
  <div id="page" >
    <div class="title">
      <div class="logo"><img :src="logo" width="35" height="34" alt=""></div>
      <button class="btn" @click='toBaidu'>反馈</button>
    </div>
    <div class="select">
      <flexbox :gutter="0">
        <flexbox-item>
          <div class="flex-demo" @click='change(1)' :data-index='1'><img :src="stateImg[0]" width='60' alt=""><br>转账详情</div>
        </flexbox-item>
        <flexbox-item>
            <div class="flex-demo" @click='change(2)' :data-index='2'><img :src="stateImg[2]" width='60' alt=""><br>借贷详情</div>
        </flexbox-item>
        <flexbox-item>
            <div class="flex-demo" @click='change(4)' :data-index='4'><img :src="stateImg[1]" width='60' alt=""><br>贷款详情</div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="accountShow" v-show='show'><v-accounts ></v-accounts></div>
      <router-view></router-view>
  </div>
</template>

<script>
import vAccounts from  './accounts/accountMoney/accountMoney'
import { Flexbox, FlexboxItem, Group } from 'vux'
export default {
 data() {
  return {
    show: false,
    logo: '../../../static/logo.png',
    stateImg: ['../../../static/accountInfo.png', '../../../static/loanInfo.png', '../../../static/allInfo.png']
  }
 },
 methods: {
  toBaidu() {
    window.location.href= 'https://github.com/cryingbat';
  },
  change(id) {
    if(id === 1){ //跳转账分单
      this.$router.push({
      	name: "zdinfo"
      })
    }else if(id === 2){
      this.$router.push({
      name: 'loanAndAccounts'
    })
    }else if(id ===4){
      this.$router.push({ //跳贷款分单
        name: "lzdinfo",
        params: {id: id}
      })
    }
  }
 },
 mounted() {
  if(this.$route.params.id === 5){
    this.$router.push({  //首页直接跳转账分单
    	name: 'loanAndAccounts',
    })
  }else if(this.$route.params.id === 7){  //从page总单过来
  	this.$router.push({
    	name: 'loanAndAccounts'
    })
  }
 },
 components: {
   Flexbox,
   FlexboxItem,
   Group,
   vAccounts
 }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close';
.dialog-demo {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
  #page
    .title{
      background-color:rgba(172, 147, 117, 1);
      height: 44px;
      line-height: 44px;
      padding: 0 12px;
      overflow: hidden;
      .logo{
        padding-top: 5px;
        float: left;
        img{
          border-radius: 50%;
        }
      }
      .btn{
        float:right;
        outline:none;
        border: none;
        padding: 3px 15px;
        background: transparent;
        border-radius: 6px;
        border: 1px solid #fff;
        color: #fff;
        margin-top: 10px;
      }
      .name{
        float:right;
        color: #fff;
        font-size: 18px;
      }
    }
    .select{
      height: 176px;
      .vux-flexbox{
        height: 100%;
        .vux-flexbox-item{
          height: 100%;
          background-color: rgba(172, 147, 117, 1);
          .flex-demo {
            padding-top: 60px;
            font-size: 18px;
            text-align: center;
            color: #fff;
            background-clip: padding-box;
          }
        }
      }
    }
    .dialog-show
      .dialogBox{
        position: relative;
        width: 245px;
        height:191px;
        background: #fff;
        margin: 0 auto;
        border-radius: 16px;
        .boxTitle{
          font-family: 'Arial Negreta', 'Arial';
          font-weight: 700;
          font-style: normal;
          font-size: 14px;
          height: 35px;
          text-align:center;
          background: rgba(172, 147, 117, 1);
          color:#fff;
          border-top-left-radius:16px;
          border-top-right-radius:16px;
          line-height: 35px;
        }
        .in{
          color: #977E5F;
          span{
            margin-right:10px;
          }
          input{
            width: 100px;
          }
          padding-top: 30px;  
        }
        .tip{
          font-size: 12px;
          color: #999999;
          margin-top:15px;
        }
        button{
          position: absolute;
          left: 50%;
          bottom: 5px;
          width: 110px;
          margin-left: -55px;
          height: 35px;
          background: -webkit-linear-gradient(0deg, rgba(213, 184, 150, 1) 0%, rgba(213, 184, 150, 1) 4%, rgba(170, 141, 106, 1) 100%, rgba(170, 141, 106, 1) 100%);
          background: -moz-linear-gradient(90deg, rgba(213, 184, 150, 1) 0%, rgba(213, 184, 150, 1) 4%, rgba(170, 141, 106, 1) 100%, rgba(170, 141, 106, 1) 100%);
          background: linear-gradient(90deg, rgba(213, 184, 150, 1) 0%, rgba(213, 184, 150, 1) 4%, rgba(170, 141, 106, 1) 100%, rgba(170, 141, 106, 1) 100%);
          border: none;
          border-radius: 55px;
          -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
          -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
          color: #FFFFFF;
        }
      }


</style>
