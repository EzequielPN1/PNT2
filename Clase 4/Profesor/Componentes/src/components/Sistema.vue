<template>
  <div>
    <Cabecera />
    <h1>Gestor de Libros</h1>
    <Item
      v-for="libro in libros"
      :key="libro.id"
      v-bind:id="libro.id"
      v-bind:descripcion="libro.descripcion"
    />
    <Libros @agregarPadre="agregar($event)" />
    <Pie v-bind:autor="autor" />
  </div>
</template>

<script>
import Cabecera from "./Cabecera.vue";
import Pie from "./Pie.vue";
import Item from "./Item.vue";
import Libros from "./Libros.vue";
export default {
  components: {
    Cabecera,
    Pie,
    Item,
    Libros,
  },
  data() {
    return {
      autor: "Cualquier otro",
      libros: [
        { id: 1, descripcion: "Libro de la Selva" },
        { id: 2, descripcion: "Alicia" },
      ],
    };
  },
  methods: {
    agregar(libritoRecibido) {
      this.libros.push({ ...libritoRecibido });
    },
  },
};
</script>

<style></style>
