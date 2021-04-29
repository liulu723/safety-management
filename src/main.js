import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './assets/icon/inconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
