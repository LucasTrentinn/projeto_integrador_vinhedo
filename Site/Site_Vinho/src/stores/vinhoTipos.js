import { defineStore } from "pinia";
import { api } from "../api";


export const useVinhoTiposStore = defineStore({
  id: 'vinhosTipos',
  state: () => ({
    tipos: []
  }),
  getters: {
  
  },
  actions: {
    async consultarTodos() {
      const res = await api.get('/vinhoTipos')
      this.tipos = res.data
    }
  }
})