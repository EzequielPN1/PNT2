<template>


        <input id="inputDni"  v-model="votante.dni" placeholder="Dni">
  
        <input id="inputNombre" v-model="votante.nombre" placeholder="nombre" >

   
        
    <button @click="agregar">Agregar</button>

</template>


<script >
    export default {
        emits: ['agregarVotante'],  
        data() {
            return {
                votante:
                    {
                        dni:"",
                        nombre:"",
                    }
            };
        },
        methods: {
            agregar() {
                if(this.votante.dni!="" && this.votante.nombre != ""){

                    this.$emit('agregarVotante',this.votante);  

                    document.getElementById("inputDni").value="";
                    document.getElementById("inputNombre").value="";

                }
           
            },
        },
        };
</script>
 