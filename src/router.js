import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Index from './components/Index.vue'

// 只要是基于vue的插件, 都需要先use一下, 才能用
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token') || to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})
