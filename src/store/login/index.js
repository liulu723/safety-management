const state = {
  state:'111'
}
const mutations = {
  changeState(state, payload) {
    state.state = payload
  }
}
const actions = {
  changeState({ commit }, payload) {
    commit('changeState', payload)
  }
}
export default {
  namespaced: true, // 增加命名空间
  state,
  mutations,
  actions
}