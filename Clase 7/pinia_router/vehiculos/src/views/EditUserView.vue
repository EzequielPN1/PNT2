<script>
import axios from "axios";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  setup() {
    const storeUser = useUserStore();
    const { user } = storeToRefs(storeUser);
    const { changeName } = storeUser;
    return {
      user,
      changeName
    };
  },
  data() {
    return {
      user: {
        name: "",
      },
      vue: this,
    };
  },
  methods: {
    loguear: (user, vue) => {
      let respuesta = axios
        .post("http://localhost:3001/login", user)
        .then(function (response) {
          vue.userName = response.data.nombre;
          vue.user.name = response.data.nombre;
          vue.$router.push("/");
        })
        .catch(function (error) {
          alert("Error de usuario y contraseña");
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <h1>Cambiar Nombre Usuario</h1>
  <h1>{{ user.name }}</h1>
  <form @submit.prevent="changeName(user)">
    <div class="form-group">
      <label for="exampleInputEmail1">Nombre</label>
      <input
        v-model="user.name"
        type="text"
        class="form-control"
        aria-describedby="emailHelp"
      />
    </div>
    <button type="submit" class="btn btn-primary">Cambiar Nombre</button>
  </form>
</template>

<style></style>
