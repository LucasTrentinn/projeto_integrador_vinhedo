import { defineStore } from "pinia";
import { api } from "../api";

export const useVinhosStore = defineStore({
  id: 'vinhos',
  state: () => ({
    vinhos: []
  }),
  getters: {

  },
  actions: {
    async consultarTodos() {
      const res = await api.get('/vinhos')
      this.vinhos = res.data
    }
  }
})