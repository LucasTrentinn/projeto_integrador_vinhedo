<template>
  <footer id="footer" class="page-footer font-small purple pt-4 fixed-bottom">
    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none pb-3" />

        <!-- Grid column -->
        <div class="col-md-4 mb-md-0 mb-3">
          <!-- Links -->

          <ul class="list-unstyled">
            <li>
              <router-link to= "/"> Suporte </router-link>
            </li>
            <li>
              <router-link to= "/"> Política de privacidade </router-link>
            </li>
            <li>
              <router-link to= "/"> Termos e condições </router-link>
            </li>
            <li>
              <router-link to= "/"> Feedback </router-link>
            </li>
          </ul>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 mb-md-0 mb-3">
          <!-- Links -->
          <h5 class="text-uppercase">Redes sociais</h5>

          <ul class="redes">
              <router-link class="facebook" to= "/"><font-awesome-icon :icon="['fab', 'facebook']" size="lg" /></router-link>
              <router-link class="instagram" to= "/"> <font-awesome-icon :icon="['fab', 'instagram']" size="lg" /> </router-link>
          </ul>
        </div>
        <div class="col-md-4 mt-md-0 mt-3">
          <!-- Content -->
          <h5 class="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">
      2021 - 2022 Projeto de Lucas,Victor e Ana
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {};
</script>

<style>
#footer {
  background-color: #180566;
  color: white;
}
.redes {
  padding: 20px;
}
.facebook{
padding: 5px;
margin-right:0px;
}
.instagram{
  text-align: center;
padding: 5px;
margin-left:0px;
}
</style>
