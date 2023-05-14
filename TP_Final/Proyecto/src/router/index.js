import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Inicio from '../views/Inicio.vue'
import Home from '../views/Home.vue'
import Registro from '../views/Registro.vue'
import EditarPerfil from '../views/EditarPerfil.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },

    {
      path: '/Registro',
      name: 'Registro',
      component: Registro
    },

    {
      path: '/EditarPerfil',
      name: 'EditarPerfil',
      component: EditarPerfil,
    },
 


  ]
});






export default router
