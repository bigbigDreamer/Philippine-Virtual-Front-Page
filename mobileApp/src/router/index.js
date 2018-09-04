import Vue from 'vue'
import Router from 'vue-router'
import Single from '../components/Single'
import Panel from '../components/Panel'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/single/:userId', component: Single,name:'single'
    },
    {
      path:'/#/',component: Panel
    }
  ]
})
