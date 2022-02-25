<template>
<!-- Tudo -->
<div>

  <!-- Título -->
  <titulo texto="Seleção de Vinhos"></titulo>

  <!-- Conteúdo da página -->
  <div class="container-fluid">
    <item-vinho />
  </div>
  
</div>

</template>

<script>
import ItemVinho from '../components/ItemVinho.vue'
import Titulo from '../components/Titulo.vue'
export default {
  components: { ItemVinho, Titulo },
    
}
</script>

<style>


</style>