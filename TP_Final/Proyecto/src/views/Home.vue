<script>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import { RouterLink } from "vue-router";
import { onMounted } from 'vue'


export default {
       setup(){

const store = useUserStore();
const { usuario } = storeToRefs(store);
const {listaUsuarios} = storeToRefs(store);
const { nombresUsuarios } = store;
onMounted(() => {nombresUsuarios();});

        return{
          usuario,listaUsuarios,
        }
 },
       data() {
 
       return {
      verUsuarios:false,
       };
},
methods: {

}

        };

</script>








<template>

<head>
  

</head>
<body>
  <ul class="navbar">

    <li><h2 v-if="usuario.nombre != ''" class="pr-4">{{ usuario.nombre }}</h2></li>
    <li> <RouterLink to="/EditarPerfil">Editar Perfil</RouterLink></li>
    <li><a href="#" @click="verUsuarios = !verUsuarios">{{ verUsuarios ? 'Ocultar usuarios' : 'Mostrar usuarios' }}</a></li>
    <li><a href="#">Opción 2</a></li>
    <li><a href="#">Opción 3</a></li>
    <RouterLink v-if="usuario.nombre != ''" to="/" class="nav-link btn btn-outline-danger" >Salir
    </RouterLink>
  </ul>


</body>





<div class="user-list" v-if="verUsuarios">
  <a>Nombre de Usuarios</a>
  <ul>
    <li v-for="item in listaUsuarios" class="user-item">{{ item.nombre }}</li>
  </ul>
</div>
  
</template>



<style>
    /* Estilos para el navbar */
    ul.navbar {
      list-style-type: none;
      margin: 0;
      padding: 0;
      background-color: #f1f1f1;
      overflow: hidden;
    }

    ul.navbar li {
      float: left;
    }

    ul.navbar li a {
      display: block;
      color: #333;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    ul.navbar li a:hover {
      background-color: #ddd;
    }


  </style>