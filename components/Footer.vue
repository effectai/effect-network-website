<template>
  <footer class="footer pt-6">
    <div class="container">
      <Sitemap />
      <div class="has-text-centered has-text-white">
        <small class="is-size-7"
          >&copy; {{ new Date().getFullYear() }} <b>EFFECT NETWORK</b> by EFFECT
          AI</small
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
  background: $primary;
  // background-image: url('~assets/img/grad_foot.png');
  background-repeat: no-repeat;
  background-position: bottom;

  &.is-transparent {
    background: transparent;
  }
}
</style>
