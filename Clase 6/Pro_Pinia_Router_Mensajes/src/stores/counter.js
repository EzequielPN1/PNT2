import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: ref(0),
      userName: "",
      nombres:[],
      mensajesRecibidos:[]

    };
  },
  actions: {











    
  },
});


















