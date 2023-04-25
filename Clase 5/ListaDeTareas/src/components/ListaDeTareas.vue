<template>
    
     <li v-for="item in listaDeTareas">nro: {{item.num + " " + item.nombre + "-"}} <a v-if="item.completada">Ok</a> <a v-if="!item.completada">Pendiente</a></li>
    
     <br>
     <br>

    <AgregarTarea @agregarTarea="agregar($event)"/>

     <br>
     <br>

     <EliminarTarea @eliminarTarea="eliminar($event)"/> 

      <br>
      <br>

     <CompletarTarea @Completar="completar($event)" />

       <br>
       <br>
     <button v-on:click="filtrarPorCompletas">Filtar por completadas</button>

     <li v-for="item in listaCompletas">{{ item.nombre }}</li>

     <button v-on:click="filtrarPorIncompletas">Filtar por Incompletadas</button>

     <li v-for="item in listaIncompletas">{{ item.nombre }}</li>
     
    </template>

<script>


import AgregarTarea from './AgregarTarea.vue';
import EliminarTarea from './EliminarTarea.vue';
import CompletarTarea from './CompletarTarea.vue';





export default {
    data() {
        return {
            listaDeTareas: [{num:1, nombre:"Leer",completada: true},{num:2, nombre:"Ir de compras",completada: false}],
            listaCompletas:[],
            listaIncompletas:[],
            num:3
        };
    },
    
    methods: {

       
    
        agregar(tarea) {
 
            if( tarea.nombre != "" && this.listaDeTareas.find(elemento => elemento.nombre == tarea.nombre) == null){
                tarea.num=this.num++,
                this.listaDeTareas.push({ ...tarea })
              }

        },

        eliminar(num){
            var index= this.listaDeTareas.findIndex(elemento => elemento.num == num)
            if(index != -1){
                this.listaDeTareas.splice(index,1)     
            }
        },

        completar(num){
            this.listaDeTareas.find(elemento => elemento.num==num).completada=true
        },

        
        filtrarPorCompletas(){
            this.listaCompletas = this.listaDeTareas.filter(element => element.completada)        
        },

        filtrarPorIncompletas(){
            this.listaIncompletas = this.listaDeTareas.filter(element => !element.completada)
        }

    },
    components: { AgregarTarea, EliminarTarea, CompletarTarea }

};

</script>

