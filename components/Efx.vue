<template>
  <section class="hero is-secondary-alt">
    <div class="hero-body container has-text-centered">
      <h2 class="title is-2 is-spaced">EFX Token</h2>
      <h4 class="subtitle">The digital asset that powers the Effect Network</h4>
      <nuxt-link to="/token-page" class="button is-accent block is-wide">Discover EFX</nuxt-link>
      <div class="coinmarketcap-currency-widget has-background-white has-text-black has-radius" data-currencyid="2666" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
      <tokenomics style="margin-bottom: -120px" class="has-background-primary"/>
    </div>
  </section>

</template>

<script>
import Tokenomics from '@/components/Tokenomics'
export default {
  components: {
    Tokenomics
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

.hero {
  background-image: url('~assets/img/grad_home_efx.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
}
</style>
<style lang="scss">
  .coinmarketcap-currency-widget {
    width: 710px;
    max-width: 100%;
    margin: 0 auto;
    > div {
      display: flex;
      flex-wrap: wrap;
      > div:nth-child(1) {
        min-width: 300px;
        padding: 8px 0 0 !important;
      }
      > div:nth-child(2) {
        width: 400px;
        max-width: 100%;
      }
      > div:nth-child(3) {
        display: none;
      }
    }
  }
</style>

