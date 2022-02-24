<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner"> 
      <div :class="{'carousel-item':true, 'active': index == 0}" v-for="(item, index) in items" :key="index">
        <div class="row">
          <tipos-carousel-item class="col-3" :tipo="tipo" v-for="tipo in item" :key="tipo.id" />
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import TiposCarouselItem from "./TiposCarouselItem.vue";

export default {
  components: { TiposCarouselItem },
  data() {
    return {
      tipos: [
        {
          id: 1,
          nome: "Vinho Branco",
        },
        {
          id: 2,
          nome: "Vinho Rosé",
        },
        {
          id: 3,
          nome: "Vinho Tinto",
        },
        {
          id: 4,
          nome: "Vinho Branco",
        },
        {
          id: 5,
          nome: "Vinho Rosé",
        },
        {
          id: 6,
          nome: "Vinho Tinto",
        },
      ],
    };
  },
  computed: {
    items() {
      //carregou a lista de tipos

      let ret = [];
      let tipoAux = [...this.tipos];

      while (tipoAux.length > 0) {
        ret.push(tipoAux.splice(0, 4));
      }

      return ret;
    },
  },
};
</script>

<style>


</style>