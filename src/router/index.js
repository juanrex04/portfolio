import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Me',
    component: () => import(/* webpackChunkName: "Me" */ '../views/Me.vue')
  },
  {
    path: '/skills',
    name: 'skill',
    component: () => import(/* webpackChunkName: "skill" */ '../views/skill.vue')
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: () => import(/* webpackChunkName: "curriculum" */ '../views/curriculum.vue')
  },
  {
    path: '/portafolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio.vue')
  },
  {
    path:'/*',
    name:'pageNotFound',
    component: () => import(/* webpackChunkName: "PageNotFound" */ '../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
