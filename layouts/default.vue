<template>
  <div id="app">
    <div
      style="top: 75px"
      class="notification is-light is-fixed-top z-1 has-text-centered"
    >
      <button class="delete"></button>
      <i class="fas fa-exclamation-triangle mx-2"></i>
      We've just announced an official <b>bridge</b> to the
      <b>Solana Network</b>, read more about it <a href="#">here</a> 👈
    </div>

    <NavBar :is-scrolling="isScrolling" />

    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const isScrolling = ref(false);
</script>

<style scoped>
#app {
  /*background: url('~assets/img/grid.png');*/
  min-height: 100vh;
}
</style>
