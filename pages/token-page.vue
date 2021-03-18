<template>
  <div>
    <section class="section efx-bg">
      <div class="container is-max-widescreen my-6">
        <div class="has-text-centered">
          <div class="mb-6">
            <img width="250" class="mt-6" :src="require('@/assets/img/efx_logo.png')"/>
            <h2 class="subtitle is-2 mt-6 has-text-weight-light">The digital asset that <b>powers</b></h2>
            <h2 class="title is-1">The Future of Work</h2>
          </div>
          <br><br><br>
          <div class="my-6">
            <h2 class="title is-2 mt-6"><b class="is-family-sans-serif">EFX</b> Token</h2>
            <p class="has-limited-width is-horizontal-centered">EFX is the cryptographic token that fuels <b>The Effect
              Network</b>. It offers developers and organizations a reliable option to build, monetize and power AI
              solutions. EFX can be earned or bought and can be used in a decentralized ecosystem of AI related
              services.</p>
          </div>
          <img
            :src="require('@/assets/img/efx-graph.png')"/>
          <div class="my-6">
            <h2 class="title is-2">Buy <b class="is-family-sans-serif">EFX</b></h2>
            <h2 class="subtitle">Buy EFX tokens with BTC, EOS or USDT.</h2>
            <p>Need help or do you want to
              buy EFX with a different currency?</p>
            <p>Mail <b><a class="has-text-white" href="mailto:efx@effect.ai" target="_blank">efx@effect.ai</a></b></p>

            <div class="columns is-variable is-8 my-6">

              <div class="column is-one-third">
                <img
                  style="height: 65px;"
                  :src="require('@/assets/img/kucoin.svg')"/>
                <br>
                <a class="button is-accent" href="https://trade.kucoin.com/EFX-BTC" target="_blank"
                       color="accent primary--text">Buy EFX
                </a>
                <br>
                <span>with BTC</span>
              </div>
              <div class="column is-one-third">
                <img
                  style="height: 65px;"
                  :src="require('@/assets/img/newdex_logo.png')"/>
                <br>
                <a class="button is-accent" href="https://newdex.io/trade/effecttokens-efx-eos" target="_blank"
                       color="accent primary--text">Buy EFX
                </a>
                <br>
                <span>with EOS</span>
              </div>
              <div class="column is-one-third">
                <img style="height: 65px;"
                  :src="require('@/assets/img/bidesk_logo.png')"/>
                <br>
                <a class="button is-accent" href="https://www.bidesk.com/exchange/EFX/USDT" target="_blank"
                       color="accent primary--text">Buy EFX
                </a>
                <br>
                <span>with USDT</span>
              </div>
            </div>
            <br><br><br><br><br><br><br><br><br><br>
          </div>
        </div>
      </div>
    </section>
    <whitepaper/>
  </div>
</template>
<script>
  import Whitepaper from '@/components/Whitepaper'

  export default {
    name: 'EFX',
    colorMode: 'dark',
    components: {
      Whitepaper
    },
    head() {
      return {
        title: 'EFX Token',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'EFX is the digital asset that powers Decentralized AI development'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .efx-bg {
    background-image: url("~assets/img/efx-bg.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -67px;
    padding-top: 67px;
  }
</style>
