<template>
  <div id='me'>
    <div class="title">{{title}}<!--  <img :src="imgsrc" width='24' height="24" alt=""> --></div>
    <div class="info">
      <div class='avatar'><img v-lazy="info.header_url" width="60" height="60" alt=""  @click='toChangeAvatar'></div>
      <div class="main-info">
        <p class="name">{{info.nickname}}</p>
        <p class="nc">
          <span class="num">{{info.bank_val}}</span>
          <span class="copy"><button @click = 'tocredit'>信用</button></span>
        </p>
        
      </div>
    </div>
    <v-line></v-line>
     <tab style='padding-top: 10px;position:relative' v-model="change">
      <tab-item selected @on-item-click="consoleIndex()">{{subTitle[0]}}</tab-item>
      <span class="shortLine"></span>
      <tab-item @on-item-click="consoleIndex()">{{subTitle[1]}}</tab-item>
    </tab>
      <router-view></router-view>
  </div>
</template>

<script>
import { userInfo } from '@/api/index'
import { ButtonTab, Tab, TabItem, ButtonTabItem, Divider } from 'vux'
import vLine from '@/common/line'
export default {
  components: {
    ButtonTab,
    ButtonTabItem,
    Divider,
    Tab,
    TabItem,
    vLine
  },
  mounted () {
    setTimeout(() => {
      this.$router.push('/home/me/b-bank');
      this.getInfo();
    }, 300)
  },
  methods: {
    tocredit() {
      this.$router.push({
        name: 'credit'
      })
    },
    toChangeAvatar() {
      this.$router.push({
        name: 'resetInfo'
      })
    },
    getInfo(){
      userInfo().then((res) => {
        if(res.succ>0){
          if(res.data.header_url === ''){
              res.data.header_url = 'static/u414.png';
          }
          this.info = res.data;
        }else{
          this.info = [];
        }
      })
    },
    consoleIndex () {
      if(this.change == 0){
      this.$router.push('/home/me/b-bank')
      }else{
      this.$router.push('/home/me/a-bank')
      }
    }
  },
  data () {
    return {
      info: {
        header_url :'static/loading.svg'
      },
      title: '我的',
      change: 0,    
      arror: 'static/right-arrow_03.png',
      imgsrc: 'static/u453.png',
      avatar: 'static/u414.png',
      subTitle: ['资产', '余利宝']
    }
  }
}
</script>
<style scoped lang='less'>
  #me
    .title{
      position: relative;
      width: 100%;
      height: 44px;
      line-height: 44px;
      background: rgba(172, 147, 117, 1);
      color: #fff;
      font-size: 20px;
      text-align: center;
      img{
        position: absolute;
        right: 15px;
        top: 10px;
      }
    }
    .info{
      background: #fff;
      width: 100%;
      height: 100px;
      overflow: hidden;
      .avatar{
        width: 25%;
        padding-top: 20px;
        float: left;
        border-radius: 50%;
        height: 80px;
        line-height: 100px;
        text-align: center;
        img{
          border-radius: 50%;
        }
      }
      .main-info{
        width: 65%;
        padding-top: 20px;
        float: left;
        .nc{
          position: relative;
        }
          .num{
            margin-top: 10px;
            display: inline-block;
            vertical-align: bottom;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 170px;
          }
          .copy{
            position: absolute;
            display: inline-block;
            top: -20px;
            right: -10px;
            color: rgba(172, 147, 117, 1);
            button{
              border: 2px solid rgba(172, 147, 117, 1);
              outline: none;
              background: #fff;
              margin-top: 10px;
              cursor: pointer;
              padding: 2px 13px;
              border-radius: 20px;
            }
          }
      }
      .arrow{
        float: left;
        padding-top: 48px;
        padding-left: 2px
      }
    }
    .shortLine{
      position: absolute;
      left: 50%;
      top: 18px;
      width: 1px;
      height: 20px;
      background: rgba(0,0,0,0.3);
    }
</style>
