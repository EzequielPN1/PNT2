<script>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
import { RouterLink } from "vue-router";
import axios from "axios";


export default {
       setup(){

const store = useCounterStore();
const { userName } = storeToRefs(store);
const { nombres } = storeToRefs(store);

        return{
        userName,nombres,     
        }
       },
        data() {
 
            return {

              vue:this,
            
            };
        },

        methods: {

        async nombresUsuarios() {
      try {
        const respuesta = await axios.get('http://localhost:3001/users'); 
        this.nombres = respuesta.data; 
      } catch (error) {
        console.error(error);
      }
    },

  },

    mounted() {
              this.nombresUsuarios();            
        },

       
        };

</script>

<template>

  <div class="d-flex justify-content-between align-items-center">
  <h2 v-if="userName != ''" class="pr-4">Perfil: {{ userName }}</h2>
  <RouterLink v-if="userName != ''" to="/">
    <button class="nav-link btn btn-outline-danger" @click="userName = ''" >Salir</button>
  </RouterLink>
</div>

<div >
<li v-for="nombre in nombres"  >{{ nombre }}</li>
</div>


        

</template>

<style></style>