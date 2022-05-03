<template>
  <!-- Tudo -->
  <div>
    <div>
      <nav>
      <ul class="menu">
      <form>
        <select class="form-select">
          <option selected>Tipos</option>
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
      </form>
      </ul>
      </nav>
    </div>

    <!-- Título -->
    <titulo texto="Seleção de Vinhos"></titulo>

    <!-- Conteúdo da página -->
    <div class="container-fluid">
      <item-vinho />
    </div>
  </div>
</template>

<script>
import ItemVinho from "../components/ItemVinho.vue";
import Titulo from "../components/Titulo.vue";
export default {
  components: { ItemVinho, Titulo },
};
</script>

<style>
</style>