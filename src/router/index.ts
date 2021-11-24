import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue")
  },
  {
    path: '/patient/modularity',
    name: 'Patient Modularity',
    component: () => import("@/views/Modularity.vue")
  },
  {
    path: '/patient/timeseries',
    name: 'Patient Timeseries',
    component: () => import("@/views/TimeSeries.vue")
  },
  {
    path: '/patient/studytemplate',
    name: 'Patient Study Template',
    component: () => import("@/views/Studytemplate.vue")
  },
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/2D',
    name: '2D',
    component: () => import("@/views/2d.vue")
  },
  {
    path: '/3D',
    name: '3D',
    component: () => import("@/views/3d.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
