import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Scroller from '@/components/BScroller'

Vue.config.productionTip = false
Vue.component('Scroller', Scroller)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
