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
import { Button } from 'vant';
Vue.use(Button);
import { Toast } from 'vant';
Vue.use(Toast);
import { Icon } from 'vant';
Vue.use(Icon);
import { Search } from 'vant';
Vue.use(Search);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
