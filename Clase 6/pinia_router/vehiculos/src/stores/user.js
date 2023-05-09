import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {
        name: "",
        token: "",
        direction: "",
      },
    };
  },
  actions: {
    // changeName(name){
    //   let user = {
    //     name: name
    //   }
    //   let respuesta = axios.post("/users", user)
    //   .then(response => this.user.name = response.name)
    //   .catch(err => alert("El nombre no pudo actualizarse: error ->"+err))
    // }
    changeName(user){
      this.user.name = user.name
    }
  },
});