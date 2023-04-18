<template>


        <input id="inputNombre"  v-model="Tarea.nombre" placeholder="Nombre">
        
        <button @click="agregar">Agregar</button>

</template>


<script >
    export default {
        emits: ['agregarTarea'],  
        data() {
            return {
                Tarea:
                    {
                        num:"",
                        nombre:"",
                        
                    }
            };
        },
        methods: {
            agregar() {
          

                    this.$emit('agregarTarea',this.Tarea);  
                    document.getElementById("inputNombre").value="";

                }
           
            },
        };
        
</script>
 