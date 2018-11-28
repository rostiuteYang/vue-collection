import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ItemGroup from '@/components/ItemGroup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bb',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aa',
      name: 'ItemGroup',
      component: ItemGroup
    }
  ]
})
