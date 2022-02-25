<template>
  <!-- Tudo -->
  <div>
    <!-- Parte 1 da Home -->
    <div>
      <!-- Título -->
      <div class="col-7">
        <h1 class="frase frase2">Para todos os gostos</h1>
        <hr class="hr">
      </div>

      <!-- Carrossel e Guia -->
      <div class="container-fluid row">
        <section class="col-8">
          <tipos-carousel />
        </section>
        <section class="col-4">
          <router-link to="/"> <img class="bannerGuia" src="https://via.placeholder.com/450x625" alt="..."> </router-link>
        </section>
      </div>
    </div>

    <!-- Parte 2 da Home -->
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

    <!-- Parte 3 da Home -->
    <div></div>
  </div>
</template>

<script>
import AppCarousel from "../components/AppCarousel.vue";
import TiposCarousel from "../components/TiposCarousel.vue";
export default {
  components: { TiposCarousel, AppCarousel },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    };
  },
};
</script>

<style>
.fundo {
  background-color: #4b0082;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: white;
  text-align: center;
}
.button {
  border: none;
  color: black;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 155px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10rem;
}
.meio {
  padding: 50px 0px;
}
.frase {
  padding: 10px;
  font:Georgia normal;
}
.hr {
  border: 1px solid;
  border-radius: 5px;
  color:#006400;
  opacity: 1;
}
.frase2{
  margin-top: 20px;
  margin-left: 30px;
  font:50px Georgia normal;
}
.bannerGuia{
  border: 1px solid black;
  border-radius: 80px;
  position: relative;
  top: -40px;
}
</style>