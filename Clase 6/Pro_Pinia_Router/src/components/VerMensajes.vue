<script >
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
import { RouterLink } from "vue-router";
import axios from "axios";
import EnviarMensaje from "../components/EnviarMensaje.vue"


export default {
       setup(){

const store = useCounterStore();

const {mensajesRecibidos} = storeToRefs(store);

        return{
        mensajesRecibidos
                
        }
       },
        data() {
 
            return {

              vue:this,
            verMensajes:false,

            };
        },
        methods: {
           

    



async obtenerMensajesRecibidos() {
  
      try {
        const datos = { userName: this.userName };
        const respuesta = await axios.post('http://localhost:3001/traerMensajes',datos); 
        this.mensajesRecibidos = respuesta.data; 
      } catch (error) {
        console.error(error);
      }

      
    },

verLista(){
  if(this.verMensajes){
    this.verMensajes=false
  }else{
    this.verMensajes=true
  }
}

        },


        mounted() {
              this.obtenerMensajesRecibidos()
              
        },
     
        };

</script>


















<template>


<div><h1 >Bandeja de entrada: {{ mensajesRecibidos.length }}</h1></div>

<div style="margin-top: 20px;">
     <button @click="verLista">{{ verMensajes ? 'Ocultar Mensajes' : 'Mostrar Mensajes' }}</button>
    <ul v-if="verMensajes" style="margin-top: 20px;">
      <li v-for="mensaje in mensajesRecibidos">{{ mensaje }}</li>
    </ul>
  </div>
</template>