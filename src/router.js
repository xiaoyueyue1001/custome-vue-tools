import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MapCanvas',
      name: 'MapCanvas',
      component: () => import('./components/MapCanvas/index.vue')
    },
    {
      path: '/CircleProgressBar',
      name: 'CircleProgressBar',
      component: () => import('./components/CircleProgressBar/index.vue')
    },
    {
      path: '/select-all',
      name: 'SelectAll',
      component: () => import('./components/SelectAll/index.vue')
    }
  ]
})
