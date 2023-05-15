<script>
import { userService } from "../Services/userService.js"
  export default {
    data() {
  return {
    nuevaContrasenia: '',
    email: '',
    vue:this,
  };
},
created() {
  this.email = this.getEmailFromUrl();
},
methods: {

  getEmailFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email') || '';
  },

  cambiarContrasenia(vue) {

      // alert(this.nuevaContrasenia + ' ' +  this.email)

       userService.cambiarContrasenia(this.email, this.nuevaContrasenia)
      .then(response => {
        // La contraseña se cambió correctamente, maneja la respuesta según tus necesidades
        console.log(response);
        alert('Contraseña cambiada exitosamente');
        vue.$router.push("/Login");  

      })
      .catch(error => {
        // Ocurrió un error al cambiar la contraseña, maneja el error según tus necesidades
        console.error(error);
        alert('Error al cambiar la contraseña');
      });
      
  }

    }
  };
  </script>



<template>
    <div>
      <form @submit.prevent="cambiarContrasenia(vue)">
        <label>Nueva contraseña:</label>
        <input type="password" v-model="nuevaContrasenia"
         class="form-control"
         id="exampleInputPassword1" 
         required>
        <button type="submit" class="btn btn-primary"  >Cambiar contraseña</button>
      </form>
    </div>
  </template>