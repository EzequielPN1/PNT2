<template>
     

    <button @click="eliminar">Eliminar  </button>
    <input id="inputEliminar" v-model="dni" placeholder="Dni">

</template>

<script >
    export default {
        emits: ['eliminarUltimo'],  
        data() {
            return {
                dni:""
            };
        },
        methods: {
            eliminar() {
               if(this.dni != ""){
                
                this.$emit('eliminarUltimo',this.dni); 

                document.getElementById("inputEliminar").value=""; 
               }
                    
           
            },
        },
        };
</script>