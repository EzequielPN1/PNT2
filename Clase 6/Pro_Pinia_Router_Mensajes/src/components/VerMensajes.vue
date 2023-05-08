<script >
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
import axios from "axios";




export default {
       setup(){

const store = useCounterStore();
const {mensajesRecibidos} = storeToRefs(store);
const { userName } = storeToRefs(store);

        return{
        mensajesRecibidos,userName
                
        }
       },
        data() {
 
            return {

              vue:this,
            verMensajes:false,

            };
        },
        methods: {
           

verLista(){
  if(this.verMensajes){
    this.verMensajes=false
  }else{
    this.verMensajes=true
  }
},


async obtenerMensajesRecibidos() {
  
  try {
    const datos = { userName: this.userName };
    const respuesta = await axios.post('http://localhost:3001/traerMensajes',datos); 
    this.mensajesRecibidos = respuesta.data; 
  } catch (error) {
    console.error(error);
  }

  
},

async borrarMensajes() {
  try {
    const data = { userName: this.userName };
    const respuesta =  await axios.delete('http://localhost:3001/borrarMensajes', { data }); 
    this.mensajesRecibidos = respuesta.data; 
    console.log('Mensajes borrados correctamente');
  } catch (error) {
    console.error(error);
  }
},

        },

        mounted() {
              this.obtenerMensajesRecibidos()           
        },

        };

</script>




<template>


<div class="card mt-4">
    <div class="card-header">
      <h3>Bandeja de entrada: {{ mensajesRecibidos.length }}</h3>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <button @click="verLista" class="btn btn-primary">{{ verMensajes ? 'Ocultar mensajes' : 'Mostrar mensajes' }}</button>
        <button @click="obtenerMensajesRecibidos" class="btn btn-primary" >Actualizar bandeja de entrada</button>
        <button class="nav-link btn btn-outline-danger" @click="borrarMensajes"   >Eliminar mensajes</button>
      </div>
      <ul v-if="verMensajes" class="mt-3">
        <li v-for="mensaje in mensajesRecibidos" class="mb-2">{{ mensaje }}</li>
      </ul>
    </div>
  </div>

</template>