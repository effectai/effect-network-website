<template>
  <footer class="footer mt-6">
    <div class="container">
      <sitemap />
      <div class="has-text-centered">
        <small class="is-size-7">&copy; {{ new Date().getFullYear() }} <b>THE EFFECT NETWORK</b> by EFFECT.AI</small>
      </div>
    </div>
  </footer>
</template>

<script>
  import Sitemap from '@/components/Sitemap'
  export default {
    components: {
      Sitemap
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  background: $primary;
  background-image: url('~assets/img/grad_foot.png');
  background-repeat: no-repeat;
  background-position: bottom;

  &.is-transparent {
    background: transparent;
  }
}
</style>
