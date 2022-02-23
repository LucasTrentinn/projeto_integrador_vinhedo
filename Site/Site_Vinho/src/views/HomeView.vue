<template>
<div>
    <section>
      <tipos-carousel />
    </section>
    <conteudo-2-home />
    <div>

      <app-carousel :items="items" qtde="12" v-slot:default="slotProps">
        <div class="col-1">
          <div>{{ slotProps.item }}</div>
          <img src="https://via.placeholder.com/768x1024" class="d-block w-100" />
        </div>
      </app-carousel>

    </div>
</div>

</template>

<script>
import AppCarousel from '../components/AppCarousel.vue'
import Conteudo2Home from '../components/Conteudo2Home.vue'
import TiposCarousel from '../components/TiposCarousel.vue'
export default {
  components: { Conteudo2Home, TiposCarousel, AppCarousel },
  data () {
    return {
      items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    }
  }

}
</script>

<style>

</style>