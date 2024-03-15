<template>
  <div id="app">
    <NavBar />

    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#app {
  /*background: url('~assets/img/grid.png');*/
  min-height: 100vh;
}
</style>
