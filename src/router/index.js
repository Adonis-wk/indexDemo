import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue'),
      children: [
        {
          path: '/vue',
          name: '默认入仓计算器',
          component: () => import('@/views/index.vue'),
        }
      ]
    },
    { path: '*', redirect: '/vue' }
  ]
})

export default router
