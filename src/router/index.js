import Vue from 'vue'
import Router from 'vue-router'

import layoutFull from '@/components/layout/layout-full'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: layoutFull,
      children: [
        {
          path: 'page-not-found',
          component: () => import('@/components/error/404'),
          name: '404',
          meta: {
            title: 'Page not found'
          }
        },
        {
          path: 'home',
          component: () => import('@/components/HomePage'),
          name: 'home',
          meta: {
            title: 'Home',
            active: 'home'
          }
        }
      ]
    }
  ]
})
