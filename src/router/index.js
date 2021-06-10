
import Vue from 'vue'
import Router from 'vue-router'
import { upperFirst, isEmpty } from 'lodash'
import store from '../store'

Vue.use(Router)
const paths = [
  'login/',
  'login/logout',
  'index/',
  'call',
  'detection',
  'statistics/',
  'company/',
  'apply/',
  'user/',
  'user/task/',
  'user/approval',
  'user/detailTask',
  'user/myexpense',
  'user/statis',
  'detection/examlist'
]
const routers = paths.map(path => {
  let name = path.replace('*', '').split('/')
  if (!name[1]) {
    name[1] = upperFirst(name[0])
  } else {
    name[1] = upperFirst(name[1])
  }
  let component = () => {
    return import(`@/views/${name[0]}/${name[1]}.vue`)
  }
  return {
    path: `/${path}`,
    name: name[1],
    component
  }
})
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: { path: '/index' },
    },
    ...routers,
  ],
})

const fetchData = (to, from,next) => {
  let paylaod = !isEmpty(to.params)
    ? {
      ...to.params
    }
    : undefined
  //let initAction = to.name && to.name.toLowerCase()
  // if (store._actions[initAction]) {
  //   store.commit('loading', true)
  //   return store.dispatch(initAction, paylaod).then(()=> {
  //     store.commit('loading', false)
  //     next && next()
  //   })
  // }
  next && next()
}

router.beforeEach((to,from,next) => {
  if((!store.state.isLogin)&&(to.name!=='Login')&&(to.name!=='Logout')){
    next({
      path:'login/'
    })
  }
  fetchData(to, next())
})
//router.afterEach((to) => {
  // VueSweetalert2.closeModal()
  // let { _hmt } = window
  // if (to.path && _hmt) {
  //   _hmt.push(['_trackPageview', '/#' + to.fullPath])
  // }
//})
export default router
