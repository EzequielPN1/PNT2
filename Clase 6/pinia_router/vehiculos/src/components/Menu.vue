<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import { RouterLink } from "vue-router";
const store = useUserStore();
const { user } = storeToRefs(store);
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <RouterLink class="navbar-brand" to="/">The Garage</RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <RouterLink class="nav-link" to="/"
            >Vehículos <span class="sr-only">(current)</span></RouterLink
          >
        </li>
        <li class="nav-item" v-if="userName != ''">
          <RouterLink class="nav-link" to="/about"
            >Otros <span class="sr-only">(current)</span></RouterLink
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Opciones
          </a>
          <div class="dropdown-menu">
            <RouterLink to="/users" class="dropdown-item" href="#"
              >Usuarios</RouterLink
            >
            <RouterLink to="/cambiarNombre" class="dropdown-item"
              >Cambiar Nombre</RouterLink
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
      <div class="d-flex align-items-center my-2 my-lg-0">
        <h2 v-if="user.name != ''" class="pr-4">{{ user.name }}</h2>
        <RouterLink v-if="user.name == ''" to="/login"
          ><button class="nav-link btn btn-outline-primary">
            Login
          </button></RouterLink
        >
        <RouterLink v-if="user.name != ''" to="/"
          ><button
            @click="user.name = ''"
            class="nav-link btn btn-outline-danger"
          >
            Logout
          </button></RouterLink
        >
      </div>
    </div>
  </nav>
</template>

<style></style>
