import Vue from 'vue'
import Vuex from 'vuex'
import foot from './foot/index'
import {Toast} from 'cube-ui'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    self:localStorage.self && JSON.parse(localStorage.self),
  },
  mutations: {
    login(state, payload){
      state.isLogin = payload
    },
    changeLoginState(state, payload){
      state.isLogin = payload
    }
  },
  actions: {
   login({commit},payload){
    return new Promise((resolve) =>{
      if(payload&&(payload.user==='ll')&&(payload.password=='111')){
        setTimeout(() =>{
            commit('changeLoginState',true)
            resolve(true)
        },2000)
  
      }else{
        Toast.$create({
          time: 1000,
          txt: '账号或密码错误'
        }).show()
        resolve(false)
      }
    })
  }
  },
  modules: {
    foot
  }
})
