import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import BScroller from '@/components/BScroller'
import './assets/iconfont/iconfont.css';
import Vant from 'vant';
// import { RadioGroup, Radio } from 'vant';
import 'vant/lib/index.css';
// Vue.use(Radio);
// Vue.use(RadioGroup);
Vue.use(Vant);
Vue.config.productionTip = false
Vue.component('BScroller', BScroller)
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
