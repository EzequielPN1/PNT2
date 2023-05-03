<script >
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
            mostrar:false,
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
    
    mostrarUsuarios(){

      if(this.mostrar){
        this.mostrar=false
      }else{
        this.mostrar=true;
      }
      
    },

        },
        mounted() {
    this.nombresUsuarios(); // llama al método cuando el componente es montado
  },
        };

</script>

<template>
  
      <div>
        <h2 v-if="userName != ''" class="pr-4">{{ userName }}</h2>
        <RouterLink v-if="userName != ''" to="/"><button @click="userName = ''">Salir</button></RouterLink>
      </div>
      <div>
        <button v-on:click="mostrarUsuarios()" >Usuarios registrados</button>      
      </div>
     <h1 v-show="mostrar"> <li v-for="nombre in nombres">{{ nombre }}</li></h1>
      
</template>

<style></style>