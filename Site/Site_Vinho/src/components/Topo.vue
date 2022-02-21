<template>
  <header class="topo">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
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

.topo .navbar {
  background-color: #180566;
}

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
.topo a:link, .topo a:visited, .topo a:hover, .topo a:active {
  color: white;
  text-decoration: none;
}


</style>