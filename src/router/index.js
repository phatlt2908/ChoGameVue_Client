import Vue from 'vue'
import Router from 'vue-router'
import $user from '../services/user'
import $api from '../services/api'

import layoutFull from '@/components/layout/layoutFull'
import layoutDefault from '@/components/layout/layoutDefault'

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
          component: () => import('@/components/page/home'),
          name: 'home',
          meta: {
            title: 'Home',
            active: 'home'
          }
        },
        {
          path: 'products',
          component: () => import('@/components/page/productList'),
          name: 'products',
          meta: {
            title: 'Products list',
            active: 'products'
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