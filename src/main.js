import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './styles/base.css'

Vue.config.productionTip = false
// 只要是基于vue的插件, 就需要先use一下, 才能使用
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
