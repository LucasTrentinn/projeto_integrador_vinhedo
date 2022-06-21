import { defineStore } from "pinia";
import { api } from "../api";

export const useVinhosStore = defineStore({
  id: 'vinhos',
  state: () => ({
    vinhos: [],
    vinho: []
  }),
  getters: {
  },
  actions: {
    async consultarTodos() {
      const res = await api.get('/vinhos')
      this.vinhos = res.data
    },
    async consultarVinho({}, id) {
      return api.get(`/vinhos/${id}`)
    },
    async selecionarVinho(id) {
      const res = await api.get(`/vinhos/${id}`)
      this.vinho = res.data
      console.log(this.vinho)
    }
  }
})