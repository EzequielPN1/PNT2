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
  userService.cambiarContrasenia(this.email, this.nuevaContrasenia)
    .then(response => {
      console.log(response);
      alert('Contraseña cambiada exitosamente');
      vue.$router.push("/Login");
    })
    .catch(error => {
      console.error(error);
      if (error.response.status === 404) {
        alert('El correo no está registrado.');
      } else {
        alert('Error al cambiar la contraseña');
      }
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