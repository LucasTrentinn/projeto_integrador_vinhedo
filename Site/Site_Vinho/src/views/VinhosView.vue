<template>
<div>
  <div class="container-fluid intro"></div> 
  <item-vinho />
</div>

</template>

<script>
import ItemVinho from '../components/ItemVinho.vue'
export default {
  components: { ItemVinho },

}
</script>

<style>
/* Grid */
.intro {
  height: 200px;
}

</style>