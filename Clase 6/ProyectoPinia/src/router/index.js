import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/Login.vue"), 
    },
    {
      path: '/users',
      name: 'users',
      component: () => import("../views/User.vue"), 
    },


  ]
})

export default router
