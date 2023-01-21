import Vue from 'vue'
import App from './App.vue'
// 引入vuerouter
import router from './route/index'
// 引入vuex
import store from './store/index'
 // 引入amfe-flexible
 import 'amfe-flexible'
// vant样式
// import 'vant/lib/index.css'
import '@/utils/import'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
