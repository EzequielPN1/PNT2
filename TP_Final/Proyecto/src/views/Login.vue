<script>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import { userService } from "../Services/userService.js"


export default{
  setup() {
    const store = useUserStore();
    const { usuario } = storeToRefs(store);
    return {
      usuario,
    };
  },
  data() {
    return {
      user: {
        email: "",
        pass: "",
      },
      vue: this,
      
    };
  },
  methods: {
    loguear: (user, vue) => {
  userService.login(user)
    .then(function (response) {
      vue.usuario = response.data;
      vue.$router.push("/Home");       
    })
    .catch(function (error) {
      console.log(error);
      if (error.response) {
        // Si se recibió una respuesta del servidor con un código de estado
        if (error.response.status === 404) {
          alert("El correo no está registrado.");
        } else if (error.response.status === 401) {
          if (error.response.data === "Contraseña incorrecta.") {
            alert("Contraseña incorrecta.");
          } else {
            alert("La cuenta no está confirmada.");
          }         
        } else {
          alert("Error en la autenticación.");
        }
      } 
    });
},
  },
};
</script>

<template>
  <h1>Login</h1>
  <form @submit.prevent="loguear(user, vue)">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        v-model="user.email"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        v-model="user.pass"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div  >
    <div class="d-flex justify-content-between align-items-center">
    <button type="submit" class="btn btn-primary" >Entrar</button>
    <RouterLink to="/GenerarPass"><button class="btn btn-secondary" >olvido su pass</button></RouterLink>
    <RouterLink to="/"><button class="btn btn-secondary" >Volver</button></RouterLink>
  </div>
  </form>
  


</template>

<style></style>