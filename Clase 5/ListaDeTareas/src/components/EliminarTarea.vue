<template>
     

    <button @click="eliminar">Eliminar  </button>
    <input id="inputEliminar" v-model="num" placeholder="numero de tarea">

</template>

<script >
    export default {
        emits: ['eliminarTarea'],  
        data() {
            return {
                
                        num:"",
                      
                  
            };
        },
        methods: {
            eliminar() {
               if(this.id != ""){
                
                this.$emit('eliminarTarea',this.num); 

                document.getElementById("inputEliminar").value=""; 
               }
                    
           
            },
        },
        };
</script>