<template>
  <header class="header">

    <!-- Navbar do Header -->
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">

        <!-- Logo do Header -->
        <router-link class="navbar-brand" to="/"><img id="logo" src="@/assets/img/logo.png" alt="Ícone do site"></router-link>
        
        <!-- Botão do colapse no Header -->
        <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu de opções do Header -->
        <div class="menu collapse navbar-collapse col-4" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/vinhos" class="nav-link">Vinhos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Sobre</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link">Contato</router-link>
            </li>
          </ul>
        </div>

        <!-- Input de pesquisa do Header -->
        <div class="collapse navbar-collapse col-5 campoPesquisa" id="navbarSupportedContent">
          <form class="d-flex">
            <input class="form-control" type="search" placeholder="Busque por vinhos e outros usuários..." autocomplete="off" id="campoPesquisa" size="63" onfocus="this.value='';">
          </form>
        </div>

        <!-- Opção de login do header -->
        <div class=" collapse navbar-collapse col-1 menu" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li>
              <router-link to="/" class="nav-link">Fazer login</router-link>
            </li>
          </ul>   
        </div>
        
      </div> 
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style>
/* Grid */
.header .navbar {
  background-color: #210536; 
  font: 20px Georgia normal;
}

.row {
  margin: 0px;
  padding: 0px;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Logo do Site */
#logo{
    max-width: 100px;
    max-height: 100px;
    height: auto;
    width: auto;
}

/* Input de Pesquisa */
.campoPesquisa {
    display: flex;
    justify-content: center;
    align-items: center;
}

#campoPesquisa {
    border-radius: 20px;
    height: 45px;
    border: 1px solid #ccc;
    background-image:  url('@/assets/img/lupa.png'); 
    background-position: 10px, 10px;
    background-size: 20px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px
}

textarea:focus, input:focus, select:focus{
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

/* Links */
.header a:link, .header a:active, .header a:visited {
  color: white;
}

.header a:hover {
  color: rgb(173, 93, 173);
}

</style>