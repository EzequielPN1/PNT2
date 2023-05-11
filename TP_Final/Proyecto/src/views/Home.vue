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

        };

</script>








<template>

  <div class="d-flex justify-content-between align-items-center">
  <h2 v-if="usuario.nombre != ''" class="pr-4">Perfil: {{ usuario.nombre }}</h2>
  <RouterLink v-if="usuario.nombre != ''" to="/">
    <button class="nav-link btn btn-outline-danger" @click="usuario.nombre = ''" >Salir</button>
  </RouterLink>
</div>

<div >
<li v-for="item in listaUsuarios"  >{{ item.nombre }}</li>
</div>




        

</template>

<style></style>