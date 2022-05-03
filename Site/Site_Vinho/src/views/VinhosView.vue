<template>
  <!-- Tudo -->
  <div>

    <!-- Título -->
    <titulo texto="Seleção de Vinhos"></titulo>

    <menu-filtro />
    <!-- Conteúdo da página -->
    <div class="container-fluid">
      <item-vinho />
    </div>
  </div>
</template>

<script setup>
import ItemVinho from "../components/ItemVinho.vue";
import Titulo from "../components/Titulo.vue";
import MenuFiltro from "../components/MenuFiltro.vue";

</script>

<style>
</style>