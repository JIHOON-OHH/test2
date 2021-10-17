import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import clogin from '@/components/clogin'
import dlogin from '@/components/dlogin'
import cjoin from '@/components/cjoin'
import signup from '@/components/signup'
import dmain from '@/components/dmain'
import djoin from '@/components/djoin'
import orderList from '@/components/orderList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/clogin',
      name: 'clogin',
      component: clogin
    },
    {
      path: '/dlogin',
      name: 'dlogin',
      component: dlogin
    },
    {
      path: '/cjoin',
      name: 'cjoin',
      component: cjoin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/dmain',
      name: 'dmain',
      component: dmain
    },
    {
      path: '/djoin',
      name: 'djoin',
      component: djoin
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    }
  ]
})
