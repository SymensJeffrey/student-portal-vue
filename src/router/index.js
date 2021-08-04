import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CapstonesEdit from '../views/CapstonesEdit.vue'
import ViewResume from '../views/ViewResume.vue'
import Login from '../views/Login.vue'
import CapstoneShow from '../views/CapstoneShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {

    path: '/ViewResume',
    name: 'resumeShow',
    component: ViewResume,

    path: '/Login',

    path: '/capstones/:id',
    name: 'CapstoneShow',
    component: CapstoneShow
  },
  {
    path: '/login',
    name: 'Login',
    component: Login

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: "/capstones/:id/edit", name: "Capstones-edit", component: CapstonesEdit },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
