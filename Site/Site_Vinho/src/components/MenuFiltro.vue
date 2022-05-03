<template>
  <div class="sticky-top container-fluid">
    <nav class="menu col menuFiltro">
        <select class="form-select" >
          <option selected> Tipos </option>
          <option v-for="tipo in tipos" :key="tipo.id">{{tipo.nome}}</option>
        </select>
        <select class="form-select">
          <option selected>País</option>
        </select>
        <select class="form-select">
          <option selected>Uva</option>
        </select>
        <select class="form-select">
          <option selected>Região</option>
        </select>
        <select class="form-select">
          <option selected>Harmonização</option>
        </select>
        <select class="form-select">
          <option selected>Tipos</option>
        </select>
        <select class="form-select">
          <option selected>País</option>
        </select>
        <button>
          Filtrar
        </button>
    </nav>
    
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useVinhoTiposStore } from "../stores/vinhoTipos";

const store = useVinhoTiposStore()
const tipos = computed(() => store.tipos)

onMounted(() => {
  store.consultarTodos()
})

</script>

<style>
.menuFiltro {
  padding: 5px;
  margin: 0px 40px 30px 40px;
  border: 1px solid black;
  border-radius: 10px;
  align-self: flex-start;
  background-color: white;
}

.form-select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

.form-select {
  border: none
}

.sticky-top {
  top: 5px;
}


</style>