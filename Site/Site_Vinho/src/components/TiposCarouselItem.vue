<template>
  <div class="tipos-carousel-item">
      <router-link to="/vinhos">
      <div>
          {{ tipo.nome }}
      </div>
          <img src="https://via.placeholder.com/275x650" alt="...">
      </router-link>
  </div>
</template>

<script>
export default {
    props: ['tipo']
}
</script>

<style>

</style>