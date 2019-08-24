import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './css/base.css'

import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')