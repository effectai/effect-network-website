<template>
  <div>
    <section class="section">
      <div class="container is-max-widescreen my-6">
        <div class="columns">
          <div class="column is-half">
            <h2 class="title is-1">EFX Token</h2>
            <p>EFX is the cryptographic token that fuels <b>The Effect
              Network</b>. It offers developers and organizations a reliable option to build, monetize and power AI
              solutions. EFX can be earned or bought and can be used in a decentralized ecosystem of AI related
              services.</p>
          </div>
        </div>

        <div class="my-6" id="buy">
          <section class="section has-background-secondary has-radius background-image efx-graph">
            <div class="has-text-centered block">
              <h2 class="title is-2">Buy EFX</h2>
              <p class="subtitle">Buy EFX tokens with BTC, EOS or USDT</p>
            </div>
            <div class="columns has-text-grey has-text-centered">
              <div class="column is-one-third">
                <div class="has-background-white has-radius px-6 pt-5 pb-2">
                  <div style="min-height: 70px" class="pt-2"><img width="80%"
                    :src="require('@/assets/img/kucoin.svg')"/>
                    </div>
                  <a class="button is-secondary is-outlined is-fullwidth has-text-weight-semibold" href="https://trade.kucoin.com/EFX-BTC" target="_blank"
                     color="accent primary--text">Buy EFX
                  </a>
                  <small>with BTC</small>
                </div>
              </div>
              <div class="column is-one-third">
                <div class="has-background-white has-radius px-6 pt-5 pb-2">
                  <div style="min-height: 70px" class=""><img width="80%"
                    :src="require('@/assets/img/newdex_logo.png')"/>
                    </div>
                  <a class="button is-secondary is-outlined is-fullwidth has-text-weight-semibold" href="https://newdex.io/trade/effecttokens-efx-eos" target="_blank">Buy EFX
                  </a>
                  <small>with EOS</small>
                </div>
              </div>
              <div class="column is-one-third">
                <div class="has-background-white has-radius px-6 pt-5 pb-2">
                  <div style="min-height: 70px;" class=""><img width="80%"
                       :src="require('@/assets/img/bidesk_logo.png')"/>
                    </div>
                  <a class="button is-secondary is-outlined is-fullwidth has-text-weight-semibold" href="https://www.bidesk.com/exchange/EFX/USDT" target="_blank">Buy EFX
                  </a>
                  <small>with USDT</small>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="my-6">
          <div class="has-text-centered">
            <h2 class="title is-2">Tokenomics</h2>
            <div class="coinmarketcap-currency-widget has-background-white has-text-black has-radius" data-currencyid="2666" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
            <tokenomics />
          </div>
        </div>
      </div>
    </section>
    <whitepaper/>
    <section class="section hero is-white">
      <div class="container is-max-widescreen my-6">
        <div class="has-text-centered">
          <h2 class="title is-2">Features</h2>
        </div>
        <div class="columns mt-5">
          <div class="column is-one-third has-text-centered">
            <img src="~assets/img/icons/smartphone.svg" style="height: 50px"/>
            <h3 class="title is-4 mt-4">Earn EFX</h3>
            <p>Perform tasks on the micro-tasking platform Effect Force</p>
            <a target="_blank" class="button is-secondary mt-5"  href="https://worker.effect.ai">Join WorkForce</a>
          </div>
          <div class="column is-one-third has-text-centered">
            <img src="~assets/img/icons/programming.svg" style="height: 50px"/>
            <h3 class="title is-4 mt-4">Stake EFX</h3>
            <p>Stake tokens to improve your rank in The Effect Network and collect fees</p>
            <a target="_blank" class="button is-secondary mt-5"  href="https://dao.effect.network/stake">Stake EFX</a>
          </div>
          <div class="column is-one-third has-text-centered">
            <img src="~assets/img/icons/user.svg" style="height: 50px"/>
            <h3 class="title is-4 mt-4">Governance</h3>
            <p>Receive funding for Proposals, vote and collect fees with your NFX tokens</p>
            <a target="_blank" class="button is-secondary mt-5"  href="https://dao.effect.network/dao">Explore DAO</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
  import Whitepaper from '@/components/Whitepaper'
  import Tokenomics from '@/components/Tokenomics'

  export default {
    name: 'EFX',
    colorMode: 'dark',
    components: {
      Whitepaper,
      Tokenomics
    },
    head() {
      return {
        title: 'EFX Token',
        script: [
          {
            src: 'https://files.coinmarketcap.com/static/widget/currency.js'
          }
        ],
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'EFX is the digital asset that powers The Future of Work'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .efx-graph {
    background-image: url("~assets/img/efx-graph.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .efx-bg {
    background-image: url("~assets/img/efx-bg.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -67px;
    padding-top: 67px;
  }
</style>
