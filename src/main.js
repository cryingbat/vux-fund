import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import echarts from 'echarts'
import VueLazyload from 'vue-lazyload'
require('./mock.js')
FastClick.attach(document.body)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  error: '../static/loading.svg',
  loading: '../static/loading.svg'
  // attempt: 1
})
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
