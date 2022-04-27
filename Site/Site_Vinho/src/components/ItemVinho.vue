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

<script setup>
import { mapActions } from 'pinia';
import { computed, onMounted } from 'vue';
import { useVinhosStore } from '../stores/vinhos';

const store = useVinhosStore()
const vinhos = computed(() => store.vinhos)


onMounted(() => {
  store.consultarTodos()
})
</script>

<style>


</style>