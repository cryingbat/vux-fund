<template>
	<div id='credit' style="    padding-top: 55px;">
    <div class="circle">
      <div style='width:227px;height:227px;margin: 0 auto;padding-top:15px'>
      <x-circle :percent="100" :stroke-width="3" stroke-color="rgba(172, 147, 117, 1)">
        <p>
          <span>理财金额（元）</span><br>
          <span style='color:rgba(172, 147, 117, 1);font-size:28px;font-weight:bold'>{{info.financial_money|| 0.00}}</span>
        </p>
      </x-circle>
      <p class='buy-in'><button class="see" @click='toBuy'>转入</button></p>
    </div>
    </div>
    <div class="loan">
      <p class="title"><img :src="imgUrl" width='23' height="21" alt=""><span>{{title}}</span></p>
      <p class="text">余利宝昨日收益：{{word}}(元)</p>
      <p class="toSee"><button class="see" @click='check_credit'>产品介绍</button></p>
      <toast v-model="show" type="text" width='10em'>获取失败</toast>
    </div>

  </div>
</template>
<script>
import { XCircle, Range, Icon, Toast } from 'vux'
import { userInfo, yesterdayGet } from '@/api/index'
export default {
  data() {
    return {
      info:{},
      imgUrl: '../../../static/u404.png',
      title: '理财收益',
      show:false,
      word: '0.00'
    }
  },
  mounted() {
    setTimeout(() => {
      this.getUser();
      this.getObtain();
    }, 300)
  },
  components: {
    XCircle,
    Range,
    Icon,
    Toast
  },
  methods: {
    getObtain() {
      this.word = 20.00;
    },
    getUser(){
      userInfo().then((res) => {
          if(res.succ>0){
            this.info = res.data;
          }else{
            if(Number(res.succ) === -1 || Number(res.succ) === -2){
              alert('请重新登录！');
              this.$router.push({
                name: 'root'
              }) 
            }else{
               this.info = {};
            }
          }
      })
    },
    toBuy() {
      this.$router.push({
        name: 'dmoney'
      })
    },
    check_credit(){
      this.$router.push({
        name: 'product'
      })
    }
  }
}
</script>

<style scoped lang='less'>
  #credit
    .circle{
      position: relative;
      height: 270px;
      width: 100%;
      .buy-in{
        position: absolute;
        right: 10px;
        bottom: 10px;
        text-align: right;
        .see{
          border: 1px solid rgba(172, 147, 117, 1);
          outline: none;
          background: #fff;
          margin-top: 10px;
          cursor: pointer;
          margin-right: 5px;
          padding: 4px 20px;
          border-radius: 20px;
          color: rgba(172, 147, 117, 1);
          cursor: pointer;
        }
      }
    }
    .loan{
      margin-bottom: 53px;
      padding: 10px 10px 0 10px;
      height: 116px;
      background: #fff;
      .title{
        img{
          vertical-align: top;
          margin-right: 10px;
        }
      }
      .text{
        margin-top: 10px;
        padding-left: 33px;
        font-size: 16px;
        color: #999;
      }
      .toSee{
        margin-top: -10px;
        text-align: right;
        .see{
          border: 1px solid rgba(172, 147, 117, 1);
          outline: none;
          background: #fff;
          margin-top: 10px;
          cursor: pointer;
          margin-right: 5px;
          padding: 4px 20px;
          border-radius: 20px;
          color: rgba(172, 147, 117, 1);
          cursor: pointer;
        }
      }
    }
</style>
