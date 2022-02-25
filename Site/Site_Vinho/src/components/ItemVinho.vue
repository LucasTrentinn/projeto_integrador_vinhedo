<template>
  <div class="item-vinho row">
        <div class="item col-3" v-for="vinho in vinhos" :key="vinho.id">
            <router-link to="/vinhos/id">
            <img src="https://via.placeholder.com/400x600" alt="...">
            <h3> {{ vinho.nome }}</h3>
            </router-link>
        </div>

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
        fetch("https://vinhos-dad4.restdb.io/rest/vinhos?apikey=6219283234fd6215658589e8")  
        .then(response => response.json())
        .then(data => this.vinhos = data);
    }
}
</script>

<style>


</style>