// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import sellers from 'components/sellers/sellers'
Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/sellers', component: sellers }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
router.push('./goods')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
