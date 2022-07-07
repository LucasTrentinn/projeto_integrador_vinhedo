<template>
  <div>
    <h5> ID </h5>
    <h1>{{ vinho.id }}</h1>
    <h5> nome </h5>
    <h1>{{ vinho.name }}</h1>
    <h5> safra </h5>
    <h1>{{ vinho.season }}</h1>
    <h5> {{$route.params.id}} </h5>
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useVinhosStore } from "../stores/vinhos";
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const store = useVinhosStore()
const vinho = computed(() => store.vinho)

onMounted(() => {
  store.selecionarVinho(route.params.id)
})
</script>

<style>

</style>