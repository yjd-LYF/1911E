import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/Sign.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/mess',
    name: 'mess',
    component: () => import('../views/Mess.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
