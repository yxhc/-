import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import router from './router'
import service from './utils/service'//axios二次封装后进行引用
import *as echarts from 'echarts'
// Vue.prototype.axios = axios//挂载到原型，可以在全局使用
Vue.prototype.service = service
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false

//路由导航守卫
router.beforeEach((to, form, next) => {
  if (!localStorage.getItem('username')) {
    if (to.path !== '/login') {
      next('/login')
    } else next()
  } next()
})


new Vue({
  // 初始渲染，需要配合路由出口使用
  router,
  render: h => h(App),
}).$mount('#app')
