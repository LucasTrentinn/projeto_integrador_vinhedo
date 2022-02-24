<template>
  <div class="item-vinho">
      <router-link to="/vinhos/id">
      <h1>{{ vinhos }}</h1>
      <div class="item" v-for="vinho in vinhos" :key="vinho.id">
          <img src="https://via.placeholder.com/440x470" alt="...">
      </div>
      </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            vinhos: [],
        }
    },
    mounted() {
        fetch("https://vinhos-dad4.restdb.io/rest/vinhos?apikey=d815307d94c90d5acdf9777002277880e7b3d")  
        .then(response => response.json())
        .then(data => this.vinhos = data);
    }
}
</script>

<style>

</style>