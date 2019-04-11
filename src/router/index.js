import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Layout from '@/view/Layout/index'
import cardImageText from '@/view/Other/card/card-image-text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [{
        path: 'cardImageText', // card
        component: cardImageText
      }]
    }
  ]
})
