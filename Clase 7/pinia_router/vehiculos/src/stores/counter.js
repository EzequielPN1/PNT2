import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => {
    let a = 12
    return {
      count: ref(a),
      userName: "",
      lista: [
        { id: 1, marca: "FORD", modelo: "MUSTANG", precio: 23232 },
        { id: 2, marca: "CITROEN", modelo: "3CV", precio: 34563456 },
      ],
      // axios.get("www.sitio.com.ar/api/cars")
      //      .then(response => lista = response.data.lista)
      // con al lógica de ordenar en servicios sería
      // import carsService from "../services/carsServices"
      // lista = carsService.getCars()
      listaUsers: [],
    };
  },
  actions: {
    borrar(id) {
      let index = this.lista.findIndex((auto) => auto.id == id);
      this.lista.splice(index, 1);
      console.log(this.lista);
    },
    agregar(auto) {
      this.lista.push({ ...auto });
      this.count++;
      console.log(this.count);
    },
    async fetchUsers() {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.listaUsers = data.data;
        console.log(this.listaUsers);
        console.log("Bajamos la lista de usuarios" + this.listaUsers[0].name);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  getters: {
    getTablaUsuarios() {
      if (this.listaUsers.length <= 0) {
        this.fetchUsers();
        return this.listaUsers;
      } else {
        return this.listaUsers;
      }
    },
    getPrecioActualizado(id){
      // obtenemos la inflación mensual de un servicio web
      let porcentaje = 3.4
      return this.lista[id].precio * porcentaje
    }
  },
});
