<template>
  <!-- Tudo -->
  <div>
    <!-- Parte 1 da Home -->
    <div>
      <!-- Título -->
      <div>
        <titulo texto="Para todos os gostos" />
      </div>

      <!-- Carrossel e Guia -->
      <div class="container-fluid row">
        <section class="col-8">
          <app-carousel
            :items="tipos"
            :qtde="3"
            v-slot="slotProps"
            data-bs-interval="false"
            carousel-maior
          >
            <div class="col-4 conteudo">
              <img
                class="imagem imagemTipos"
                :src="slotProps.item.imagem"
                alt="..."
              />
              <h3 class="textoTipos">
                {{ slotProps.item.nome }}
              </h3>
            </div>
          </app-carousel>
        </section>
        <section class="col-4">
          <router-link to="/">
            <img
              class="imagemBanner"
              src="https://via.placeholder.com/450x625"
              alt="..."
            />
          </router-link>
        </section>
      </div>
    </div>

    <!-- Parte 2 da Home -->
    <div class="row fundo">
      <div class="col-4"></div>
      <div class="col-4 meio">
        <h2 class="frase">UM GUIA PARA OS AMANTES DE VINHO</h2>
        <hr class="hr" />
        <h5 class="frase">
            Um site criado para ajudar você, iniciante ou experiente no mundo dos
            vinhos, a escolher o vinho perfeito para sua ocasião
        </h5>
        <button class="botaoHome">Crie sua conta</button>
      </div>
      <div class="col-4"></div>
    </div>

    <!-- Parte 3 da Home -->
    <div>
      <section>
        <titulo texto="Mais avaliados" />
        <app-carousel
          carouselName="appCarousel2"
          :items="vinhos"
          :qtde="6"
          v-slot="slotProps"
          data-bs-interval="false"
          carousel-menor
        >
          <div class="col-2 conteudo">
            <img
              class="imagem"
              src="https://via.placeholder.com/200x250"
              alt="..."
            />
            <h3>
              {{ slotProps.item.name }}
            </h3>
          </div>
        </app-carousel>

        <titulo texto="Mais procurados hoje" />
        <app-carousel
          carouselName="appCarousel3"
          :items="vinhos"
          :qtde="6"
          v-slot="slotProps"
          data-bs-interval="false"
          carousel-menor
        >
          <div class="col-2 conteudo">
            <img
              class="imagem"
              src="https://via.placeholder.com/200x250"
              alt="..."
            />
            <h3>
              {{ slotProps.item.name }}
            </h3>
          </div>
        </app-carousel>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import AppCarousel from "../components/AppCarousel.vue";
import Titulo from "../components/Titulo.vue";
import { useVinhosStore } from "../stores/vinhos";
import { useVinhoTiposStore } from "../stores/vinhoTipos";

const storeTipos = useVinhoTiposStore();
const storeVinhos = useVinhosStore();
const vinhos = computed(() => storeVinhos.vinhos);
const tipos = computed(() => storeTipos.tipos);

onMounted(() => {
  storeTipos.consultarTodos();
  storeVinhos.consultarTodos();
});
</script>

<style>
/* Corpo */
.fundo {
  background-color: #4b0082;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: white;
  text-align: center;
}

.meio {
  padding: 50px 0px;
}

/* Botões */
.botaoHome {
  border: none;
  color: black;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 100px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10rem;
}

/* Textos */
.frase2 {
  margin-top: 20px;
  margin-left: 30px;
  font: 50px Georgia normal;
}

.frase {
  padding: 10px;
  font: Georgia normal;  
}

.textoTipos {
  position: absolute;
  top: 45%;
  font: 50px Georgia bold;
}

/* Detalhes */
.hr {
  border: 1px solid;
  border-radius: 5px;
  color: #006400;
  opacity: 1;
}

/* Carrosel */
.conteudo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Imagens */
.imagem {
  border-radius: 25px;
}

.imagemTipos {
  width: 300px;
  height: 550px;
  opacity: 70%;
}

.imagemBanner {
  border: 1px solid black;
  border-radius: 80px;
  position: relative;
  top: -40px;
}

</style>