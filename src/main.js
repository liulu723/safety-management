import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import BScroller from '@/components/BScroller'
import './assets/iconfont/iconfont.css';
Vue.config.productionTip = false
Vue.component('BScroller', BScroller)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
