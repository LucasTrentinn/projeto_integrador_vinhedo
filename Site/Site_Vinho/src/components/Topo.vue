<template>
  <header>
    <div class="container-fluid">
      <div class="row topo">
        <div class="col-1">
          <a class="navbar-brand" href="https://betteranime.net/" target="_blank"><img id="logo" src="./imagens/logo.png" alt="Ícone do site"></a>
        </div>
        <div id="menu" class="col-5">
          <a  href="#">Vinhos</a>
          <a  href="#">Sobre</a>
          <a  href="#">contato</a>
        </div>
        <div class="col-5 campoPesquisa">
          <input type="text" placeholder="Busque por vinhos e outros usuários..." autocomplete="off" id="campoPesquisa" size="70" onfocus="this.value='';">
        </div>
        <div class="col-1 topo4">
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
    color: white;
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
}

.topo4 {
    display: flex;
    align-items: center;
    font-size: 20px;
}
#menu {
  text-align: center;
  font-size: 20px;
  padding: 32px;
  
}



</style>