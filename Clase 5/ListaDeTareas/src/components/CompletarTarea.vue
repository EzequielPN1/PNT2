<template>
     

    <button @click="eliminar">Completar Tarea  </button>
    <input id="inputEliminar" v-model="num" placeholder="numero de tarea">

</template>

<script >
    export default {
        emits: ['Completar'],  
        data() {
            return {
                
                        num:"",
                      
                  
            };
        },
        methods: {
            eliminar() {
               if(this.id != ""){
                
                this.$emit('Completar',this.num); 

                document.getElementById("inputEliminar").value=""; 
               }
                    
           
            },
        },
        };
</script>