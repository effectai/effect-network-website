<template>
  <div id="app">
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
