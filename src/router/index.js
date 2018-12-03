import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ItemGroup from '@/components/ItemGroup'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aa',
      name: 'ItemGroup',
      component: ItemGroup
    },
    {
      path: '/cc',
      name: 'SignIn',
      component: SignIn
    },

  ]
})
