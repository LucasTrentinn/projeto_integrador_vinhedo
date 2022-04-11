<template>
  <div class="container-fluid intro">
    <div class="col-7">
        <h1 class="titulo"> {{ this.texto }} </h1>
        <hr class="hrTitulo">
    </div>
  </div> 
</template>

<script>
export default {
  props: [
    "texto"
  ]
}
</script>

<style>
/* Grid */
.intro {
  height: 100px;
}

/* Título */
.titulo {
  padding: 0px;
  font: 50px Georgia normal;
  margin: 30px 0px 0px 35px;
}

.hrTitulo {
  border: 1px solid;
  border-radius: 5px;
  color:#006400;
  opacity: 1;
  margin: 0px 0px 0px 30px;
}

</style>