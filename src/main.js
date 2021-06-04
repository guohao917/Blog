import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式表
import '@/assets/css/base.css'
import {fetch} from '@/network'
import axios from 'axios'

const LOGIN_SHOW = window.sessionStorage.getItem('HAS_LOGIN')

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.LOGIN_SHOW = LOGIN_SHOW

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
