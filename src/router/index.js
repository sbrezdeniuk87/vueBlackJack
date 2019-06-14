import Vue from 'vue'
import Router from 'vue-router'

import Begin from '@/components/Begin'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Play from '@/components/PlayTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      component: Play
    }    
  ]
})
