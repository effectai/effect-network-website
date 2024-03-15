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

<style scoped lang="scss">
#app {
  /*background: url('~assets/img/grid.png');*/
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
