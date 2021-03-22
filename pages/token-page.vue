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
          <div class="columns">
            <div class="column is-half">
              <div class="coinmarketcap-currency-widget has-background-primary" data-currencyid="2666" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
            </div>
          </div>
          <div class="my-6">
            <div class="columns has-text-left is-vcentered is-multiline">
              <div class="column is-two-thirds">
                <h2 class="title is-2">Earn <b class="is-family-sans-serif">EFX</b></h2>
                <h2 class="subtitle">Perform tasks on the micro-tasking platform Effect Force</h2>
                <p class="block">
                  EFX holders can stake tokens to improve their rank in The Effect Network. Achieving a high rank has
                  many benefits, like vote casting, reward collection, and gaining privileges on the dApp level. All
                  ranks are accompanied with a degree of responsibility.
                </p>
                <a class="button is-accent" href="https://worker.effect.ai" target="_blank">Join the WorkForce</a>
              </div>
              <div class="column is-one-third">
                <img src="~assets/img/efx-earn.png"/>
              </div>
              <div class="column is-one-third">
                <img src="~assets/img/efx-stake.png"/>
              </div>
              <div class="column is-two-thirds">
                <h2 class="title is-2">Stake <b class="is-family-sans-serif">EFX</b></h2>
                <h2 class="subtitle">Stake your EFX and collect Fees</h2>
                <p class="block">
                  EFX holders can stake tokens to improve their rank in The Effect Network. Achieving a high rank has
                  many benefits, like vote casting, reward collection, and gaining privileges on the dApp level. All
                  ranks are accompanied with a degree of responsibility in the Network and users are held accountable
                  for their actions with the risk of losing their stake position – their value and the associated
                  privileges. This means staking can be seen as a proof of commitment and is used as a primary quality
                  measure in the network.
                </p>
                <a class="button is-accent" href="https://dashboard.effect.ai/stake/" target="_blank">Stake your EFX</a>
              </div>
              <div class="column is-two-thirds">
                <h2 class="title is-2">Governance</h2>
                <h2 class="subtitle">Vote with your NFX tokens</h2>
                <p class="block">
                  The Effect Network is governed by a democratic process where users can vote on key aspects of the
                  network. The most important topics are the configuration of smart contracts and the allocation of
                  Galaxy Pool funds. On the highest level is the Effect Council, its members are allowed to initiate new
                  voting topics and have the highest voting weight.
                </p>
                <a class="button is-accent" href="https://medium.com/effect-ai/introducing-nfx-the-digitally-programmable-governance-token-of-the-effect-network-f02f94890c7e" target="_blank">NFX Token</a>
              </div>
              <div class="column is-one-third">
                <img src="~assets/img/efx-vote.png"/>
              </div>
            </div>
          </div>
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
            <img :src="require('@/assets/img/efx-graph.png')"/>
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
