
<script >
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
import axios from "axios";
import Mensaje from "./Mensaje.vue";


export default {
       setup(){
const store = useCounterStore();
const { userName } = storeToRefs(store);
const { nombres } = storeToRefs(store);


        return{
        userName,nombres
                
        }
       },
        data() {
 
            return {
              mostrar:false,
              vue:this,
              mensaje:Mensaje,

          

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
    


    envioMensaje() {
      try {

        this.mensaje.nombreEmisor = this.userName
        axios.post('http://localhost:3001/EnviarMensaje', this.mensaje)

         console.log(this.mensaje.nombreDestino)
         console.log(this.mensaje.contenido)


      } catch (error) {
        console.error(error);
      }
      this.$refs.miFormulario.reset(); 
      
    
},

        },

        mounted() {
              this.nombresUsuarios();            
        },


        };

</script>



<template>
    <form ref="miFormulario" @submit.prevent="envioMensaje()">

<div class="form-group">
  <label for="exampleInputEmail1">a Usuario</label>
  <select v-model="mensaje.nombreDestino"  class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp">
<option v-for="nombre in nombres" v-bind:value="nombre" >{{ nombre }}</option>
</select>
</div>
<div class="form-group">
  <label for="exampleInputPassword1">Mensaje</label>
  <input
    v-model="mensaje.contenido"
    type="text"
    class="form-control"
    id="exampleInputText"
  />
</div>
<button type="submit" class="btn btn-primary" >Enviar</button>
</form>





</template>