import Vue from 'vue'
import Router from 'vue-router'
import $user from '../services/user'
import $api from '../services/api'

import layoutFull from '@/components/layout/layout-full'
import layoutDefault from '@/components/layout/layout-default'

Vue.use(Router)
var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
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
          component: () => import('@/components/homePage'),
          name: 'home',
          meta: {
            title: 'Home',
            active: 'home'
          }
        }
      ]
    },
    {
      path: '/',
      component: layoutDefault,
      children: [
        {
          path: 'login',
          component: () => import('@/components/authentication/login'),
          name: 'login',
          meta: {
            title: 'Login'
          }
        },
      ]
    },
    {
      path: '*',
      redirect: '/page-not-found'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ($user.logged === false && ['login', 'forgot', 'reset'].indexOf(to.name) === -1) {
    next('/login')
  }
  else if ($user.logged === true && ['login', 'forgot', 'reset'].indexOf(to.name) > -1) {
    next('/home')
  }
  else {
    document.title = to.meta.title + ' | Chợ Game'
    next()
  }
})

export default router