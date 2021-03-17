<template>
  <div class="efx-bg">
      <div class="container py-6 has-text-white">
        <div class="columns">
          <div class="column">
            <br>
            <img
              contain
              width="264"
              height="289"
              transition="scale-transition"
              class="mx-auto"
              :src="require('@/assets/img/efx_logo.png')"/>
            <br><br>
            <div style="max-width: 700px" class="mx-auto text-center py-12">
              <h2 class="display-2 white--text">
                The digital asset that <b>powers</b>
                Decentralized AI <b>development</b>
              </h2>
              <br><br><br><br><br><br>
              <h2 class="display-2 font-weight-bold mt-12">EFX</h2>
              <br>
              <div class="body-1">
                EFX is the cryptographic token that fuels <b class="font-weight-black">The Effect Network</b>. It offers
                developers and organizations a
                reliable option to build, monetize and power AI solutions. EFX can be earned or bought and can be used
                in a decentralized ecosystem of AI related services.
              </div>
            </div>
            <div class="py-6 text-center">
              <br><br>
              <h2 class="display-2 font-weight-bold">Use Cases</h2>
              <br><br>
              <div class="d-flex flex-wrap flex justify-space-around">
                <div style="width:320px;max-width: 100%" class="ma-4">
                  <img
                    contain
                    width="264"
                    height="264"
                    transition="slide-y-transition"
                    class="mx-auto"
                    :src="require('@/assets/img/phase1.png')"/>
                  <br>
                  <div class="headline font-weight-bold">For AI Development</div>
                  <br>
                  <div class="body-1">
                    Organizations use EFX to transact between a global human workforce to structure and enrich vast
                    amounts of data on the Effect Force platform. Effect Force is the first decentralized micro-tasking
                    platform for AI development.
                  </div>
                </div>
                <div style="width:320px;max-width: 100%" class="ma-4">
                  <img
                    contain
                    width="264"
                    height="264"
                    transition="slide-y-transition"
                    class="mx-auto"
                    :src="require('@/assets/img/phase2.png')"/>
                  <br>
                  <div class="headline font-weight-bold">For the Exchange of AI Services</div>
                  <br>
                  <div class="body-1">
                    AI developers accept EFX in exchange for their algorithms and AI related services on the Effect
                    Smart Market. The Effect Smart Market is the first decentralized marketplace for AI powered apps.
                  </div>
                </div>
                <div style="width:320px;max-width: 100%" class="ma-4">
                  <img
                    contain
                    width="264"
                    height="264"
                    transition="slide-y-transition"
                    class="mx-auto"
                    :src="require('@/assets/img/phase3.png')"/>
                  <br>
                  <div class="headline font-weight-bold">For Computational Resources</div>
                  <br>
                  <div class="body-1">
                    Organizations use EFX in exchange for computational power to run their Deep Learning Frameworks with
                    Effect Power. Effect Power is a distributed super-computer that any organization can tap into to run
                    their AI framework without a single point of failure.
                  </div>
                </div>
              </div>
            </div>
            <div class="py-12 text-center">
              <br><br>
              <h2 class="display-2 font-weight-bold">Features</h2>
              <br><br>
              <div class="columns" align="center" justify="space-between">
                <div class="column" cols="12" md="6">
                  <div class="display-1 font-weight-bold">EARN</div>
                  <div class="title font-weight-bold">There are several ways to earn EFX</div>
                  <br>
                  <p class="body-1">
                    Perform tasks on the micro-tasking platform Effect Force
                    <br>
                    <v-btn color="accent primary--text" href="https://worker.effect.ai" target="_blank">Become an Effect
                      Force Worker
                    </v-btn>
                  </p>
                  <p class="body-1">
                    Offer a gateway to an algorithm or AI solution you have created on the Effect Smart Market
                    <br>
                    <v-btn text color="accent" to="/contact">Participate in the Smart Market Beta</v-btn>
                  </p>
                  <p class="body-1">
                    Rent out extra CPU/GPU to Effect Power. Your contribution will be part of the distributed pool that
                    organizations can tap into to run Deep Learning Frameworks
                    <br>
                    <v-btn dark text color="white" disabled>More Information coming soon</v-btn>
                  </p>
                </div>
                <div class="column" cols="12" md="5">
                  <img
                    contain
                    width="450"
                    height="450"
                    transition="slide-x-transition"
                    class="mx-auto"
                    :src="require('@/assets/img/efx-earn.png')"/>
                </div>
                <div class="column" cols="12" md="5">
                  <img
                    contain
                    width="450"
                    height="450"
                    transition="slide-x-transition"
                    class="mx-auto"
                    :src="require('@/assets/img/efx-stake.png')"/>
                </div>
                <div class="column" cols="12" md="6">
                  <div class="display-1 font-weight-bold">STAKE</div>
                  <div class="title font-weight-bold">Stake your EFX and collect NFX</div>
                  <br>
                  <p class="body-1">
                    EFX holders can stake tokens to improve their rank in The Effect Network. Achieving a high rank has
                    many benefits, like vote casting, reward collection, and gaining privileges on the dApp level. All
                    ranks are accompanied with a degree of responsibility in the Network and users are held accountable
                    for their actions with the risk of losing their stake position – their value and the associated
                    privileges. This means staking can be seen as a proof of commitment and is used as a primary quality
                    measure in the network.
                  </p>
                  <div class="d-flex justify-space-between">
                    <v-btn href="https://medium.com/effect-ai/announcing-effect-staking-protocol-ed43da6c4b83"
                           target="_blank">
                      <v-icon left>mdi-post</v-icon>
                      Effect Staking Protocol
                    </v-btn>
                    <v-btn
                      @click="$emailModal.show({'title': 'Download Effect Staking Protocol Paper', 'url':'/download/effect_staking_protocol.pdf'})">
                      <v-icon left>mdi-download</v-icon>
                      Technical Paper
                    </v-btn>
                  </div>

                </div>
                <div class="column" cols="12" md="6">
                  <div class="display-1 font-weight-bold">GOVERNANCE</div>
                  <div class="title font-weight-bold">Vote with your NFX tokens</div>
                  <br>
                  <p class="body-1">
                    <b class="font-weight-black">The Effect Network</b> is governed by a democratic process where users
                    can vote on key aspects of the
                    network. The most important topics are the configuration of smart contracts and the allocation of
                    Galaxy Pool funds. On the highest level is the Effect Council, its members are allowed to initiate
                    new voting topics and have the highest voting weight.
                  </p>
                  <div class="d-flex justify-space-between">
                    <v-spacer></v-spacer>
                    <v-btn
                      href="https://medium.com/effect-ai/introducing-nfx-the-digitally-programmable-governance-token-of-the-effect-network-f02f94890c7e"
                      target="_blank">
                      <v-icon left>mdi-post</v-icon>
                      NFX Governance token
                    </v-btn>
                  </div>
                </div>
                <div class="column" cols="12" md="5">
                  <img
                    contain
                    width="450"
                    height="450"
                    transition="slide-x-transition"
                    class="mx-auto"
                    :src="require('@/assets/img/efx-vote.png')"/>
                </div>
              </div>
            </div>
            <div class="py-12 text-center">
              <div class="display-1 font-weight-bold">The Effect Network</div>
              <div class="title font-weight-bold">The TEN Protocol</div>
              <br>
              <p class="body-1 mx-auto" style="max-width: 700px">
                At the core of <b class="font-weight-black">The Effect Network</b> (<b class="font-weight-black">TEN</b>)
                is a smart-contract based protocol.
                Developers are able to use the protocol to create their decentralized AI related services. This is an
                easy way to gain access to the directory of users, algorithms and compute nodes and the related staking
                and governance mechanisms of <b class="font-weight-black">TEN</b>.
                <br><br>
                <b class="font-weight-black">TEN</b> is powered by the EFX token and governed by the Effect Council.
              </p>
              <br>
              <v-btn x-large color="accent primary--text"
                     @click="$emailModal.show({'title': 'Download The Effect Network Whitepaper', 'url':'/download/effect_whitepaper.pdf'})">
                <v-icon left>mdi-download</v-icon>
                Technical Whitepaper
              </v-btn>
            </div>
            <div class="py-12 text-center">
              <div class="display-1 font-weight-bold">Buy EFX</div>
              <div class="title font-weight-bold">Buy EFX tokens with BTC, EOS or USDT.<br>Need help or do you want to buy EFX with a different currency?<br>Mail <a style="color: white"
                                                                                              href="mailto:efx@effect.ai"
                                                                                              target="_blank">efx@effect.ai</a>
              </div>
              <br>
              <img
                contain
                :src="require('@/assets/img/efx-graph.png')" />
                <div class="d-flex flex-wrap flex justify-space-around">

                  <div style="width:300px;max-width: 100%" class="ma-4">
                    <img
                      contain
                      height="100"
                      width="280"
                      transition="slide-y-transition"
                      class="mx-auto"
                      :src="require('@/assets/img/kucoin.svg')"/>
                    <br>
                    <v-btn href="https://trade.kucoin.com/EFX-BTC" target="_blank"
                           color="accent primary--text">Buy EFX
                    </v-btn>
                    <br>
                    <span>with BTC</span>
                  </div>
                  <div style="width:300px;max-width: 100%" class="ma-4">
                    <img
                      contain
                      height="100"
                      width="280"
                      transition="slide-y-transition"
                      class="mx-auto"
                      :src="require('@/assets/img/newdex_logo.png')"/>
                    <br>
                    <v-btn href="https://newdex.io/trade/effecttokens-efx-eos" target="_blank"
                           color="accent primary--text">Buy EFX
                    </v-btn>
                    <br>
                    <span>with EOS</span>
                  </div>
                  <div style="width:300px;max-width: 100%" class="ma-4 text-center">
                    <img
                      contain
                      height="70"
                      transition="slide-y-transition"
                      class="mx-auto mt-6"
                      :src="require('@/assets/img/bidesk_logo.png')"/>
                    <br>
                    <v-btn href="https://www.bidesk.com/exchange/EFX/USDT" target="_blank"
                           color="accent primary--text">Buy EFX
                    </v-btn>
                    <br>
                    <span>with USDT</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'EFX',
    colorMode: 'dark',
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
