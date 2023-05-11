import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      usuario: {
        email:"",
        nombre: "",
        token: "",
      },
      listaUsuarios:[],
    };
  },
  actions: {
     changeName(name){
       let usuario = {
         nombre: name
       }
       let respuesta = axios.post("/editarUsuario", usuario)
       .then(response => this.usuario.nombre = response.usuario)
       .catch(err => alert("El nombre no pudo actualizarse: error ->"+err))
     },

     
     async nombresUsuarios() {
      try {
        const respuesta = await axios.get('http://localhost:3001/usuarios'); 
        this.listaUsuarios = respuesta.data; 
      } catch (error) {
        console.error(error);
      }
    },

  },
 

});