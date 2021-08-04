/* global Vue */
import Vue from "vue";
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EducationsEdit from "..views/EducationsEdit.vue";
import SkillsEdit from "..views/SkillsEdit.vue"
import ExperiencesEdit from "..views/ExperiencesEdit.vue";
import Login from '../views/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
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
  {
    path: '/educations/:id/edit',
    name: 'EducationsEdit',
    component: EducationsEdit
  },
  {
    path: '/experiences/:id/edit',
    name: 'ExperiencesEdit',
    component: ExperiencesEdit
  },
  {
    path: '/skills/:id/edit',
    name: 'SkillsEdit',
    component: SkillsEdit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
