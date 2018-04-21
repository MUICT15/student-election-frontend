import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index.vue'
import ElectionPage from '../pages/election.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/election',
      name: 'Election',
      component: ElectionPage
    }
  ]
})
