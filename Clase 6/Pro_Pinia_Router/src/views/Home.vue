<script >
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
import { RouterLink } from "vue-router";
import axios from "axios";
import EnviarMensaje from "../components/EnviarMensaje.vue"
import VerMensajes from "../components/VerMensajes.vue";


export default {
       setup(){

const store = useCounterStore();
const { userName } = storeToRefs(store);
const {mensajesRecibidos} = storeToRefs(store);

        return{
        userName,mensajesRecibidos
                
        }
       },
        data() {
 
            return {

              vue:this,
            
            };
        },


        components: {EnviarMensaje,VerMensajes}
        };

</script>

<template>

  <div class="d-flex justify-content-between align-items-center">
  <h2 v-if="userName != ''" class="pr-4">Perfil: {{ userName }}</h2>
  <RouterLink v-if="userName != ''" to="/">
    <button class="nav-link btn btn-outline-danger" @click="userName = ''" >Salir</button>
  </RouterLink>

</div>


        <EnviarMensaje />
      
        <VerMensajes /> 
        

</template>

<style></style>