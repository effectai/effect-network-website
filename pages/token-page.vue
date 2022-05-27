<template>
  <div>
    <div class="token-hero has-navbar-fixed-top">
      <section class="section">
        <div class="container my-6">
          <div class="columns">
            <div class="column is-two-fifth pr-6">
              <h2 class="title is-1">EFX Token</h2>
              <p>EFX is the cryptographic token that fuels the Effect
                Network. It offers developers and organizations a reliable option to build, monetize and power AI
                solutions. EFX can be earned or bought and can be used in a decentralized ecosystem of AI-related
                services.</p>
            </div>
            <div class="column is-two-fifth is-offset-one-fifth">
              <div class="subtitle">Official Token Contracts</div>
              <div class="block"><small>BSC Token Contract: <a class="blockchain-address" href="https://bscscan.com/token/0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0" target="_blank">0xc51ef828319b131b595b7ec4b28210ecf4d05ad0</a></small></div>
              <div><small>EOS Token Contract: <a class="blockchain-address" href="https://www.bloks.io/account/effecttokens" target="_blank">effecttokens</a></small></div>
            </div>
          </div>

          <div class="my-6" id="buy" style="margin-left:auto;margin-right:auto">
            <section class="section has-background-secondary-alt has-radius background-image efx-graph">
              <img src="@/assets/img/efx-blue-2.png" class="efx-coin">
              <div class="has-text-centered block">
                <h2 class="title is-2 has-text-white">Buy EFX</h2>
                <p class="subtitle has-text-white pt-3 mb-6">Buy EFX tokens with BTC, EOS or USDT</p>
              </div>
              <div class="columns has-text-grey has-text-centered is-multiline">
                <div class="column is-one-fourth" data-aos="zoom-in" data-aos-delay="100">
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
                <div class="column is-one-fourth" data-aos="zoom-in" data-aos-delay="300">
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
                <div class="column is-one-fourth" data-aos="zoom-in" data-aos-delay="500">
                  <div class="has-background-white has-radius px-6 pt-5 pb-2">
                    <div style="min-height: 70px" class=""><img width="80%"
                      :src="require('@/assets/img/newdex_logo.png')"/>
                      </div>
                    <a class="button is-secondary is-outlined is-fullwidth has-text-weight-semibold" href="https://newdex.io/trade/effecttokens-efx-eos" target="_blank">Buy EFX
                    </a>
                    <small>with EOS</small>
                  </div>
                </div>
                <div class="column is-one-fourth" data-aos="zoom-in" data-aos-delay="700">
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
          </div>
        </div>
      </section>
    </div>
    <section class="section">
      <div class="container" data-aos="fade-up">
        <div class="mt-2">
          <div class="has-text-centered tokenomics pt-6">
            <h2 class="title is-2 has-text-white">Tokenomics</h2>
            <tokenomics />
          </div>
        </div>
      </div>
    </section>
    <section class="section hero is-white features">
      <div class="container is-max-widescreen mb-6">
        <div class="has-text-centered">
          <h2 class="title is-2 my-6">Features</h2>
        </div>
        <div class="columns mt-6">
          <div class="column is-one-third is-full-mobile px-5">
            <div class="p-5 is-flex is-justify-content-space-between is-flex-direction-column">
              <img src="~assets/img/icons/earn.svg" class="is-align-self-flex-end" style="height: 70px"/>
              <h3 class="title is-4 mb-2 has-text-weight-semibold">Earn EFX</h3>
              <p>Perform tasks on the micro-tasking platform Effect Force</p>
              <a target="_blank" class="mt-5 is-align-self-flex-end"  href="https://app.effect.network">Join WorkForce <img src="~assets/img/icons/turned-arrow.svg" style="height:15px;"></a>
            </div>
          </div>
          <div class="column is-one-third is-full-mobile px-5">
            <div class="p-5 is-flex is-justify-content-space-between	 is-flex-direction-column">
              <img src="~assets/img/icons/stake.svg" class="is-align-self-flex-end" style="height: 70px"/>
              <h3 class="title is-4 has-text-weight-semibold">Stake EFX</h3>
              <p>Stake tokens to improve your rank in the Effect Network and collect fees</p>
              <a target="_blank" class="mt-5 is-align-self-flex-end"  href="https://dao.effect.network/stake">Stake EFX <img src="~assets/img/icons/turned-arrow.svg" style="height:15px;"></a>
            </div>
          </div>
          <div class="column is-one-third is-full-mobile px-5">
            <div class="p-5 is-flex is-justify-content-space-between	 is-flex-direction-column">
              <img src="~assets/img/icons/vote.svg" class="is-align-self-flex-end" style="height: 70px"/>
              <h3 class="title is-4 has-text-weight-semibold">Governance</h3>
              <p>Receive funding for proposals, vote and collect fees with your NFX tokens</p>
              <a target="_blank" class="mt-5 is-align-self-flex-end"  href="https://dao.effect.network/dao">Explore DAO <img src="~assets/img/icons/turned-arrow.svg" style="height:15px;"></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <community />

  </div>
</template>
<script>
  import Community from '@/components/Community';
  import Whitepaper from '@/components/Whitepaper'
  import Tokenomics from '@/components/Tokenomics'

  export default {
    name: 'EFX',
    colorMode: 'light',
    components: {
      Whitepaper,
      Tokenomics,
      Community
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
.token-hero {
  background: $light;
  background: linear-gradient(180deg, rgba(246,247,255,1) 0%, rgba(255,255,255,1) 100%);
}
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
#buy {
  position: relative;
  .efx-coin {
    position: absolute;
    margin: 0 auto;
    width: 100px;
    top: -55px;
    left: 0;
    right: 0;
  }
}

.features {
  .column > div {
    height: 100%;
    background: $light;
    border-radius: $box-radius;
    a {
      color: $network-color !important;
      position: relative;
      &:after {
        position: absolute;
        content: '';
        height: 1px;
        bottom: -3px;
        left: 0;
        right: 0;
        width: 100%;
        background: $network-color !important;
      }
    }
  }
}
</style>
