<template>
  <div :id="carouselName" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div :class="{ 'carousel-item': true, active: index == 0 }" v-for="(item, index) in dados" :key="index">
        <div class="row">
          <slot :item="i" v-for="(i, index) in item" :key="index" />
        </div>
      </div>
    </div>
    <button class="carousel-control-prev btn-style" type="button" :data-bs-target="`#${carouselName}`"
      data-bs-slide="prev" :class="{'carousel-menor': carouselMenor}">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next btn-style" type="button" :data-bs-target="`#${carouselName}`"
      data-bs-slide="next" :class="{'carousel-menor': carouselMenor}">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
    qtde: {
      type: Number,
      default: 4,
    },
    carouselName: {
      type: String,
      default: "appCarousel",
    },
    carouselMenor: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    dados() {
      let ret = [];
      let itemsAux = [...this.items];

      while (itemsAux.length > 0) {
        ret.push(itemsAux.splice(0, this.qtde));
      }

      return ret;
    },
  },
};
</script>

<style>
.btn-style {
  height: 60px;
  width: 60px;
  position: absolute;
  top: 250px;
}

.carousel-menor {
  top: 100px ;
}
</style>