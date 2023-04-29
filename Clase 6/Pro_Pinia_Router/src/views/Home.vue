<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
import { RouterLink } from "vue-router";
const store = useCounterStore();
const { userName } = storeToRefs(store);

</script>

<template>
  
      
        <h2 v-if="userName != ''" class="pr-4">{{ userName }}</h2>
        <RouterLink v-if="userName != ''" to="/"><button @click="userName = ''">Salir</button></RouterLink>
   

  
</template>

<style></style>
