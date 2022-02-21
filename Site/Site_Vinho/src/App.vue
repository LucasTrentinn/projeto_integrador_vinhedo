<template>
<div>
 <topo />
  <router-view />
 <rodape />
</div>
</template>

<script>
import Rodape from './components/Rodape.vue'
import Topo from './components/Topo.vue'
export default {
  components: { Rodape, Topo },

}
</script>

<style>

</style>