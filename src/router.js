import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'

// 只要是基于vue的插件, 都需要先use一下, 才能用
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    }
  ]
})
