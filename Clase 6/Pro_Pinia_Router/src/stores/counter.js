import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: ref(0),
      userName: "",
      nombres:[],

    };
  },
  actions: {

  },
});


















