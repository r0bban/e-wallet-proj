import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCard from '../views/AddCard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // props: route => ({title: 'Active card', title: 'E-WALLET'}),
  },
  {
    path: '/add-card',
    name: 'AddCard',
    component: AddCard,
    // props: route => ({title: 'NEW CARD', title: 'ADD A NEW BANK CARD'}),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
