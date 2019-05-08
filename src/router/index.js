import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewMessage from '@/components/NewMessage'
import AboutMe from '@/components/AboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'new-message',
      component: NewMessage
    },
    {
      path: '/about',
      name: 'aboutme',
      component: AboutMe
    }
  ]
})