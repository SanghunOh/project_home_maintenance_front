<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Headers from "./components/Headers.vue";
import Footers from "./components/Footers.vue";
import Modals from "./components/Modals.vue";
</script>

<!-- https://getbootstrap.com/docs/5.1/examples/blog/# -->
<template>
  <!-- header -->
  <Headers></Headers>
  <!-- Modal -->
  <Modals></Modals>
  <!-- Start contents -->

  <!-- Strat contents -->
  <main class="container">
    <router-view></router-view>
  </main>

  <!-- End contents -->

  <!-- footer -->
  <footers></footers>
</template>

<style></style>
