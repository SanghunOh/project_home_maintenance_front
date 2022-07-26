<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HeadMenus from "./components/HeadMenus.vue";
import Footers from "./components/Footers.vue";
import Modals from "./components/Modals.vue";
</script>

<template>
  <!-- header -->
  <HeadMenus></HeadMenus>
  <!-- Modal -->
  <Modals></Modals>
  <!-- Start contents -->

  <!-- main -->
  <main class="container">
    <router-view></router-view>
  </main>

  <!-- End contents -->

  <!-- https://getbootstrap.com/docs/5.1/examples/blog/# -->
  <!-- footer -->
  <footers></footers>
</template>

<style></style>
