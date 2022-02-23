<template>
  <div>
    <section>
      <tipos-carousel />
    </section>
    <div class="row fundo">
      <div class="col-4"></div>
      <div class="col-4 meio">
        <h2 class="frase">Um guia para os amantes de vinhos</h2>
        <hr class="hr" />
        <p>
          Texto bonitinho sobre qual o objetivo do site e como ele pode ajudar
          as pessoas a encontrar um vinho top!
        </p>
        <button class="button">Crie sua conta</button>
      </div>
      <div class="col-4"></div>
    </div>
    <div>
      <app-carousel :items="items" qtde="12" v-slot:default="slotProps">
        <div class="col-1">
          <div>{{ slotProps.item }}</div>
          <img
            src="https://via.placeholder.com/768x1024"
            class="d-block w-100"
          />
        </div>
      </app-carousel>
    </div>
  </div>
</template>

<script>
import AppCarousel from "../components/AppCarousel.vue";
import TiposCarousel from "../components/TiposCarousel.vue";
export default {
  components: {TiposCarousel, AppCarousel },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    };
  },
};
</script>

<style>
.fundo {
    background-color: #4b0082 ;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: white; 
    text-align: center;
}
.button{
  border: none;
  color: black;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  margin-top: 155px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10rem
}
.meio{
  padding: 50px 0px;
}
.frase{
  padding: 10px;

}
.hr {
  border: 2px solid green; 
  border-radius: 2px;
}
</style>