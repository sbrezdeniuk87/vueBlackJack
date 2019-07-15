import Vue from 'vue'
import Router from 'vue-router'

import Guard from './guard'
import Begin from '@/components/Begin'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Play from '@/components/PlayTable'
import ErrorCmp from '@/components/Error'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Begin',
      component: Begin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/play',
      name: 'Play',
      component: Play,
      beforeEnter: Guard
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorCmp
    }   
  ],
  mode: 'history'
})
