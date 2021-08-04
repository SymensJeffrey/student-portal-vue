import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import ViewResume from '../views/ViewResume.vue'
=======
import Login from '../views/Login.vue'
>>>>>>> cbfd80f5562b2c74efe60fce728aa72af40c6947

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
<<<<<<< HEAD
    path: '/ViewResume',
    name: 'resumeShow',
    component: ViewResume,
=======
    path: '/Login',
    name: 'Login',
    component: Login
>>>>>>> cbfd80f5562b2c74efe60fce728aa72af40c6947
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
