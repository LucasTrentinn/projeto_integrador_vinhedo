<template>
  <footer class="page-footer font-small purple pt-4 footer" >
    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none pb-3" />

        <!-- Grid column -->
        <div class="col-md-1 mb-md-0 mb-3"></div>
        <div class="col-md-3 mb-md-0 mb-3">
          <!-- Links -->

          <ul class="navbar-nav me-auto mb-2 mb-lg-0 listainfo">
            <li class="nav-item">
              <router-link to= "/" class="nav-link listaFooter"> Suporte </router-link>
            </li>
            <li class="nav-item">
              <router-link to= "/" class="nav-link listaFooter"> Política de privacidade </router-link>
            </li>
            <li class="nav-item">
              <router-link to= "/" class="nav-link listaFooter"> Termos e condições </router-link>
            </li>
            <li class="nav-item">
              <router-link to= "/" class="nav-link listaFooter"> Feedback </router-link>
            </li>
          </ul>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 mb-md-0 mb-3">
          <ul class="redes">
              <router-link class="facebook" to= "/"><font-awesome-icon :icon="['fab', 'facebook']" size="lg" /></router-link>
              <router-link class="instagram" to= "/"> <font-awesome-icon :icon="['fab', 'instagram']" size="lg" /> </router-link>
              <router-link class="twitter" to= "/"> <font-awesome-icon :icon="['fab', 'twitter']" size="lg" /> </router-link>
          </ul>
        </div>
        <div class="col-md-3 mt-md-0 mt-3 info">
          <!-- Content -->
          <h5>Use o guia na sua versão mobile</h5>
          <router-link class="mobile" to= "/"><img class="mobile" src="./imagens/apple.png" alt="aplicativo na Apple store"></router-link>
          <router-link class="mobile" to= "/"><img class="mobile" src="./imagens/googlePlay.png" alt="aplicativo na Play store"></router-link>
        </div>
        <div class="col-md-1 mb-md-0 mb-3"></div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3 ">
      2021 - 2022 Projeto de Lucas,Victor e Ana
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background-color: #210536;
  color: white; 
  font: 20px Georgia normal;
  padding: 8px 0px;
}
.facebook{
padding: 10px;
margin-right:0px;
}
.instagram{
padding: 10px;
margin-left:0px;
}
.twitter {
  padding: 10px;
margin-right:0px;
}
.footer a:link, .footer a:active, .footer a:visited {
  text-decoration: none;
  color: white;
}
.footer a:hover {
  color: rgb(173, 93, 173);
}
.listainfo{
  display: flex;
  justify-content: right;

}

.listaFooter{
  padding: 0px 0px 16px 0px;
}
.mobile {
  max-width: 150px;
  max-height: 150px;
  height: auto;
  width: auto;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

</style>
