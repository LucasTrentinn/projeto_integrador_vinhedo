<template>
  <div>
    <topo />
    <tarefas-view />
    <rodape />
  </div>
</template>
<script>
import Rodape from './components/Rodape.vue'
import Topo from './components/Topo.vue'
export default {
  components: { Topo, Rodape},
}
</script>
<style></style>