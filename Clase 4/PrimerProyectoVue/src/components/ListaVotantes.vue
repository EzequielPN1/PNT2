<template>
    
     <li v-for="item in listaDeVotantes">{{ item.dni + " "+ item.nombre}}</li>
    
     <br>
     <br>

     <AgregarVotante @agregarVotante="agregar($event)"/>

     <br>
     <br>

      <EliminarVotante @eliminarUltimo="eliminarPorDni($event)"/>
     
    </template>

<script>

import AgregarVotante from './AgregarVotante.vue';
import EliminarVotante from './EliminarVotante.vue';


export default {
    data() {
        return {
            listaDeVotantes: [{ dni: "30465342", nombre: "pedro" },{ dni: "31765432", nombre: "Juan" }],
        };
    },
    methods: {
        agregar(votante) {
            if( this.listaDeVotantes.find(elemento => elemento.dni == votante.dni) == null){
                this.listaDeVotantes.push({ ...votante });
            }
           
        },

        eliminarPorDni(dni){       
            var index= this.listaDeVotantes.findIndex(elemento => elemento.dni == dni)
            if(index != -1){
                this.listaDeVotantes.splice(index,1)     
            }
                 
        }

    },
    components: { AgregarVotante, EliminarVotante }
};

</script>

