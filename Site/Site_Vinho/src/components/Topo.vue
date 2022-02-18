<template>
  <header>
    <div class="container-fluid">
      <div class="row topo">
        <div class="col-1">
          <a class="navbar-brand" href="https://betteranime.net/" target="_blank"><img id="logo" src="./imagens/logo.png" alt="Ícone do site"></a>
        </div>
        <div class="col-1">
        </div>
        <div class="col-3 menu">
          <a href="#">Vinhos</a> 
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          </div>
        <div class="col-2">
        </div>
        <div class="col-4 campoPesquisa">
          <input type="text" placeholder="Busque por vinhos e outros usuários..." autocomplete="off" id="campoPesquisa" size="63" onfocus="this.value='';">
        </div>
        <div class="col-1 menu">
          <a href="#"> Fazer Login </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style>

.topo {
    background-color: #180566;
    height: 100px;
}

#logo{
    max-width: 100px;
    max-height: 100px;
    height: auto;
    width: auto;
}

.campoPesquisa {
    display: flex;
    justify-content: right;
    align-items: center;
}

#campoPesquisa {
    border-radius: 20px;
    height: 45px;
    border: 1px solid #ccc;
    background-image:  url('./imagens/lupa.png'); 
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

.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font: 20px Georgia normal;
  color: white;
}
a:link, a:visited, a:hover, a:active {
  color: white;
  text-decoration: none;
}


</style>