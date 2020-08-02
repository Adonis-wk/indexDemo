import Vue from 'vue'
import router from './router'
import store from './store'
import axios from '@/utils/axiosReq'
// import iView from 'view-design'
// import 'view-design/dist/styles/iview.css'
import App from './App.vue'
import i18n from '@/i18n'
// import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import OpVueUi from '@jd/op-vue-ui'
// import Moment from 'vue-moment'
// import VueJsonp from 'vue-jsonp'
// import Cookies from 'js-cookie'
// Vue.use(Moment)
// Vue.use(OpVueUi)
// Vue.use(VueJsonp)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// 实际打包线上环境不引入mock
if (process.env.NODE_ENV === 'development' && !__TestServer) {// eslint-disable-line
  require('@/mock')
}

Vue.config.productionTip = false

// Vue.use(iView, {
//   i18n: (key, value) => i18n.t(key, value)
// })
Vue.prototype.$axios = axios
// Vue.prototype.$echarts = echarts
// Vue.prototype.$Cookies = Cookies

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
