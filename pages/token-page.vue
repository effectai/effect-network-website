<template>
  <div>
    <div class="token-hero has-navbar-fixed-top">
      <section class="section">
        <div class="container is-max-widescreen my-6">
          <div class="columns has-text-centered">
            <div class="column">
              <h2 class="title is-1">EFX Token</h2>
              <p class="has-limited-width is-horizontal-centered">EFX is the cryptographic token that fuels the Effect
                Network. It offers developers and organizations a reliable option to build, monetize and power AI
                solutions. EFX can be earned or bought and can be used in a decentralized ecosystem of AI-related
                services.</p>
            </div>
          </div>

          <div class="my-6" id="buy" style="max-width:750px; margin-left:auto;margin-right:auto">
            <section class="section has-background-secondary-alt has-radius background-image efx-graph">
              <div class="has-text-centered block">
                <h2 class="title is-2 has-text-white">Buy EFX</h2>
                <p class="subtitle has-text-white">Buy EFX tokens with BTC, EOS or USDT</p>
              </div>
              <div class="columns has-text-grey has-text-centered is-multiline">
                <div class="column is-half">
                  <div class="has-background-white has-radius px-6 pt-5 pb-2">
                    <div style="min-height: 70px" class="pt-2"><img width="100%"
                                                                    :src="require('@/assets/img/pancakeswap.png')"/>
                    </div>
                    <a class="button is-secondary is-outlined is-fullwidth has-text-weight-semibold" href="https://pancakeswap.finance/swap?outputCurrency=0xc51ef828319b131b595b7ec4b28210ecf4d05ad0" target="_blank"
                       color="accent primary--text">Buy EFX
                    </a>
                    <small>with BNB</small>
                  </div>
                </div>
                <div class="column is-half">
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
                <div class="column is-half">
                  <div class="has-background-white has-radius px-6 pt-5 pb-2">
                    <div style="min-height: 70px" class=""><img width="80%"
                      :src="require('@/assets/img/newdex_logo.png')"/>
                      </div>
                    <a class="button is-secondary is-outlined is-fullwidth has-text-weight-semibold" href="https://newdex.io/trade/effecttokens-efx-eos" target="_blank">Buy EFX
                    </a>
                    <small>with EOS</small>
                  </div>
                </div>
                <div class="column is-half">
                  <div class="has-background-white has-radius px-6 pt-5 pb-2">
                    <div style="min-height: 70px;" class=""><img width="80%"
                        :src="require('@/assets/img/orion.png')"/>
                      </div>
                    <a class="button is-secondary is-outlined is-fullwidth has-text-weight-semibold" href="https://trade.orionprotocol.io/trade/EFX-USDT" target="_blank">Buy EFX
                    </a>
                    <small>with USDT (BSC)</small>
                  </div>
                </div>
              </div>
            </section>
            <div class="p-5">
              <div class="subtitle">Official Token Contracts</div>
              <div class="block"><small>BSC Token Contract: <a class="blockchain-address" href="https://bscscan.com/token/0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0" target="_blank">0xc51ef828319b131b595b7ec4b28210ecf4d05ad0</a></small></div>
              <div><small>EOS Token Contract: <a class="blockchain-address" href="https://www.bloks.io/account/effecttokens" target="_blank">effecttokens</a></small></div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="mt-2">
            <div class="has-text-centered tokenomics pt-6">
              <h2 class="title is-2 has-text-white">Tokenomics</h2>
              <div class="coinmarketcap-currency-widget has-background-white has-text-black has-radius" data-currencyid="2666" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
              <tokenomics />
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="section hero is-white">
      <div class="container is-max-widescreen mb-6">
        <div class="has-text-centered">
          <h2 class="title is-2">Features</h2>
        </div>
        <div class="columns mt-5">
          <div class="column is-one-third has-text-centered">
            <img src="~assets/img/icons/earn.svg" style="height: 50px"/>
            <h3 class="title is-4 mt-4">Earn EFX</h3>
            <p>Perform tasks on the micro-tasking platform Effect Force</p>
            <a target="_blank" class="button is-secondary mt-5"  href="https://worker.effect.ai">Join WorkForce</a>
          </div>
          <div class="column is-one-third has-text-centered">
            <img src="~assets/img/icons/stake.svg" style="height: 50px"/>
            <h3 class="title is-4 mt-4">Stake EFX</h3>
            <p>Stake tokens to improve your rank in the Effect Network and collect fees</p>
            <a target="_blank" class="button is-secondary mt-5"  href="https://dao.effect.network/stake">Stake EFX</a>
          </div>
          <div class="column is-one-third has-text-centered">
            <img src="~assets/img/icons/vote.svg" style="height: 50px"/>
            <h3 class="title is-4 mt-4">Governance</h3>
            <p>Receive funding for proposals, vote and collect fees with your NFX tokens</p>
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
    colorMode: 'light',
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
.blockchain-address {
  font-family: monospace;
  text-overflow: ellipsis;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: block;
}
.tokenomics {
  background-color: $secondary-alt;
  border-radius: $box-radius;
}
</style>
