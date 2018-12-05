import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ItemGroup from '@/components/ItemGroup'
import SignIn from '@/components/SignIn'
import InCome from '@/components/InCome'
import FlexDemo from '@/components/FlexDemo'
import TaskList from '@/components/TaskList'
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
    {
      path: '/dd',
      name: 'InCome',
      component: InCome
    },
    {
      path: '/ee',
      name: 'FlexDemo',
      component: FlexDemo
    },
    {
      path: '/ff',
      name: 'TaskList',
      component: TaskList
    },

  ]
})
