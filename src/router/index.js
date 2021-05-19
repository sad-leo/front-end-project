import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NeonLights from '@/components/NeonLights'
import Tear from '@/components/Tear'
import LiquidFlow from '@/components/LiquidFlow'
import TextLoading from '@/components/TextLoading'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/testloading',
      name: 'TextLoading',
      component: TextLoading
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/neon',
      name: 'NeonLights',
      component: NeonLights
    },
    {
      path: '/tear',
      name: 'Tear',
      component: Tear
    },
    {
      path: '/',
      name: 'LiquidFlow',
      component: LiquidFlow
    },
  ]
})
