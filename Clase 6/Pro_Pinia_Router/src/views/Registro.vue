


<script>

import axios from "axios";

    export default {
   

        data() {
            return {
                usuario:
                    {
                        nombre:"",
                        mail:"",
                        pass:"",
                    },
                 vue:this,
            };
        },
        methods: {
          registerUser(vue) {
  axios.post('http://localhost:3001/register', this.usuario)
    .then(response => {
      // Lógica para manejar la respuesta exitosa
      vue.$router.push("/");
    })
    .catch(error => {
      // Lógica para manejar el error
      console.log(error);
      
      alert("Error mail ya ingresado")
    });
}



        }
        };
        





</script>








<template>
    <h1>Registrarse</h1>
    
    <form @submit.prevent="registerUser(vue)">
        <div class="form-group">
        <label for="exampleInputPassword1">Nombre</label>
        <input
          v-model="usuario.nombre"
           
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="usuario.mail"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
    </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="usuario.pass"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
    </form>
    <RouterLink to="/"><button>Volver</button></RouterLink>
  </template>
  


