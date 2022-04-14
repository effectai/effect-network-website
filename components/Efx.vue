<template>
  <section>
    <div class="container has-text-centered mb-6">
      <div class="token-block py-6 has-limited-width">
        <img src="@/assets/img/efx-blue-2.png" class="efx-coin is-hidden-mobile">
        <h2 class="title is-2 has-text-white is-spaced">EFX Token</h2>
        <p class="has-text-white">The digital asset that powers the Effect Network</p>
        <div class="coinmarketcap-currency-widget has-background-white has-text-black has-radius mt-6" data-currencyid="2666" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
        <nuxt-link to="/token-page" class="button is-primary block is-wide mt-6">Get EFX</nuxt-link>
      </div>
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

.has-limited-width {
  width: 960px;
  margin: 0 auto;
}

.token-block {
  background-image: url('~assets/img/efx-blue.png');
  background-color: $secondary-alt;
  background-repeat: no-repeat;
  background-position: right bottom;
  border-radius: 14px;
  background-size: 280px;
  position: relative;

  .efx-coin {
    position: absolute;
    width: 180px;
    top: -50px;
    left: 30px;
  }
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

