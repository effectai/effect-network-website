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
                    <small>with BNB (BSC)</small>
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
                    <small>with BTC or USDT (EOS)</small>
                  </div>
                </div>
                <div class="column is-one-fourth" data-aos="zoom-in" data-aos-delay="500">
                  <div class="has-background-white has-radius px-6 pt-5 pb-2">
                    <div style="min-height: 70px" class=""><img width="80%"
                      :src="require('@/assets/img/Defibox.png')"/>
                      </div>
                    <a class="button is-secondary is-outlined is-fullwidth has-text-weight-semibold" href="https://eos.defibox.io/marketDetail/191" target="_blank">Buy EFX
                    </a>
                    <small>with EOS (EOS)</small>
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
              <p>Stake tokens to participate in the Effect Network DAO</p>
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

    <section class="section">
      <div class="container">
        <div class="mt-2">
          <div class="has-text-centered tokenomics pt-6">
            <h2 class="title is-2 has-text-white">Token Map</h2>
            <div class="table-container">
            <table class="table is-striped is-hoverable is-fullwidth has-text-left">
              <thead>
                <tr>
                  <th>Name</th>
                  <th class="has-text-centered">
                    Tokens
                  </th>
                  <th class="has-text-left">
                    Address
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(label, index) in chartData.datasets[0].labels" :key="label">
                  <td>
                    {{ label }}
                    <span v-if="chartData.datasets[0].meta[index].description" class="is-pulled-right" :data-tooltip="chartData.datasets[0].meta[index].description">
                      <font-awesome-icon :icon="['fas', 'info-circle']" />
                    </span>
                  </td>
                  <td class="has-text-right">
                    {{ hello(balances[chartData.datasets[0].meta[index].balanceKey]) }} EFX
                  </td>
                  <td class="has-text-left">
                    <a
                      :href="chartData.datasets[0].meta[index].link"
                      target="_blank"
                    >{{ chartData.datasets[0].meta[index].addressName }}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="mt-2">
          <div class="has-text-centered tokenomics pt-6">
            <h2 class="title is-2 has-text-white">Contract Map</h2>
            <div class="table-container">
              <table class="table is-striped is-hoverable is-fullwidth has-text-left">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Address</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="contract in contracts" :key="contract.account">
                    <td>{{ contract.name }}</td>
                    <td>{{ contract.description }}</td>
                    <td><a :href="contract.link" target="_blank">{{ contract.account }}</a></td>
                    <td><a :href="contract.source" target="_blank">view source</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <community />

  </div>
</template>
<script>
import Web3 from 'web3/dist/web3.min.js'
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
  },
  data () {
    return {
    loadingBalances: false,
    balances: {
      daoBalance: 0,
      liquidBalance: 0,
      liquidBalanceBsc: 0,
      stakeBalance: 0,
      unswappedBalance: 0,
      // foundationBalance: 195375000,
      foundationBalance: 100000000,
      liquidityBalance: 0,
      communityBalance: 5000000,
      maxSupply: 650000000,
      circulating: 0,
      noncirculating: 0,
      totalSupply: 0

    },
    contracts: [
      {
        name: 'Effect Tokens',
        description: 'Contract managing the EFX and NFX tokens',
        account: 'effecttokens',
        link: 'https://bloks.io/account/effecttokens?loadContract=true&tab=Tables&table=stat&account=effecttokens&scope=EFX&limit=100',
        source: 'https://github.com/effectai/effect-network/tree/master/contracts/token'
      },
      {
        name: 'Effect Staking Protocol',
        description: 'Implemetation of the Effect Staking Protocol 2.0',
        account: 'efxstakepool',
        link: 'https://bloks.io/account/efxstakepool?loadContract=true&tab=Tables&account=efxstakepool&scope=efxstakepool&limit=100',
        source: 'https://github.com/effectai/effect-network-eos/blob/master/contracts/stake/stake.cpp'
      },
      {
        name: 'Token Swap',
        description: 'Verifies NEO transactions with an Oracle and issues EFX tokens on EOS',
        account: 'efxtokenswap',
        link: 'https://bloks.io/account/efxtokenswap?loadContract=true&tab=ABI&account=efxtokenswap&scope=efxtokenswap&limit=100&table=nep5',
        source: 'https://github.com/effectai/effect-network-eos/blob/master/contracts/swap/swap.cpp'
      },
      {
        name: 'EffectDAO',
        description: 'Holds the registry of the members and guardians of the EffectDAO',
        account: 'theeffectdao',
        link: 'https://bloks.io/account/theeffectdao?loadContract=true&tab=Tables&account=theeffectdao&scope=theeffectdao&limit=100&table=member',
        source: 'https://github.com/effectai/effect-network/blob/master/contracts/dao/dao.cpp'
      },
      {
        name: 'Effect Proposals',
        description: 'Stores proposals and handles the voting machanism of the EffectDAO',
        account: 'daoproposals',
        link: 'https://bloks.io/account/daoproposals?loadContract=true&tab=Tables&account=daoproposals&scope=daoproposals&limit=100&table=proposal',
        source: 'https://github.com/effectai/effect-network-eos/blob/proposals/contracts/effect-proposals/effect-proposals.cpp'
      },
      {
        name: 'Effect.AI Token on BSC',
        description: 'Smart contract on the BSC blockchain',
        account: '0xC51...5aD0',
        link: 'https://bscscan.com/token/0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0',
        source: null
      }
    ]
  }
  },
  computed: {
    chartData () {
      return {
        // labels: ['Circulating', 'Foundation'],
        labels: ['Liquid Supply (EOS)', 'Liquid Supply (BSC)', 'Stake Pool', 'Liquidity & Partnerships', 'Circulating', 'EffectDAO*', 'Foundation', 'Non-Circulating', 'Total Supply'],
        datasets: [
          {
            name: 'Token Map',
            backgroundColor: ['#0dd925', '#499166', '#fce68d', '#394dfa', '#d6fca4', '#7aa7ff', '#A4B8BB', '#7e8a8c'],
            weight: 0.55,
            meta: [
              {
                addressName: 'effecttokens',
                link: 'https://bloks.io/tokens/EFX-eos-effecttokens',
                description: null, // 'Current supply in circulation and not locked in any staking or timelock.',
                balanceKey: 'liquidBalance'
              },
              {
                addressName: '0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0',
                link: 'https://bscscan.com/token/0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0',
                description: null,
                balanceKey: 'liquidBalanceBsc'
              },
              {
                addressName: 'efxstakepool',
                locked: true,
                link: 'https://bloks.io/account/efxstakepool',
                description: 'Staked EFX.',
                balanceKey: 'stakeBalance'
              },
              {
                addressName: 'bsc.efx',
                link: 'https://bloks.io/account/bsc.efx',
                locked: false,
                description: 'Funds allocated for providing liquidity and partnership.',
                balanceKey: 'liquidityBalance'
              },
              {
                addressName: '',
                link: '',
                locked: false,
                description: null,
                balanceKey: 'circulating'
              },
              {
                addressName: 'treasury.efx',
                link: 'https://bloks.io/account/treasury.efx',
                locked: true,
                description: 'Tokens governed by the DAO, from here proposals are funded.',
                balanceKey: 'daoBalance'
              },
              {
                addressName: 'efx',
                link: 'https://bloks.io/account/efx',
                locked: true,
                description: null, // 'EFX locked by the foundation until 2021-09.',
                balanceKey: 'foundationBalance'
              },
              {
                addressName: '',
                link: '',
                locked: false,
                description: null,
                balanceKey: 'noncirculating'
              },
              {
                addressName: '',
                link: '',
                locked: false,
                description: null,
                balanceKey: 'totalSupply'
              }
            ],
            labels: ['Liquid Supply (EOS)', 'Liquid Supply (BSC)', 'Stake Pool', 'Liquidity & Partnerships', 'Circulating', 'EffectDAO', 'Foundation','Non-Circulating', 'Total Supply']
          }
        ]
      }
    },
  },
  mounted () {
    this.getBalances()
    this.getBscBalance()
  },
  methods: {
    async getBscBalance () {
      const provider = 'https://bsc-dataseed.binance.org/'
      const efxAddress = '0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0'

      const json = [{
        inputs: [],
        name: 'totalSupply',
        outputs: [{
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }],
        stateMutability: 'view',
        type: 'function'
      }]

      const w3 = new Web3(provider)
      const efxContract = new w3.eth.Contract(json, efxAddress)
      // returns an int like this: 23153044824406508517219986
      const balance = await efxContract.methods.totalSupply().call().catch(console.log)

      // https://bscscan.com/unitconverter?wei=23153044824406508517219986
      // Formatted should look like this: 23153044.824406508517219986

      const formattedBalance = w3.utils.fromWei(balance)
      // fromWei return: 23153044.824406508517219986
      console.log(formattedBalance)
      return formattedBalance
    },
    async getBalances () {
      this.loadingBalances = true
      const circSupply = parseInt((await fetch('https://www.api.bloks.io/tokens/EFX-eos-effecttokens').then(data => data.json()))[0].supply.circulating)
      this.balances.liquidBalanceBsc = parseInt(await this.getBscBalance())
      this.balances.daoBalance = parseInt((await this.$eos.rpc.get_currency_balance('effecttokens', 'treasury.efx', 'EFX'))[0].replace(' EFX', ''))
      this.balances.stakeBalance = parseInt((await this.$eos.rpc.get_currency_balance('effecttokens', 'efxstakepool', 'EFX'))[0].replace(' EFX', ''))
      this.balances.liquidityBalance = parseInt((await this.$eos.rpc.get_currency_balance('effecttokens', 'bsc.efx', 'EFX'))[0].replace(' EFX', ''))
      this.balances.liquidBalance = circSupply - this.balances.daoBalance - this.balances.stakeBalance - this.balances.liquidityBalance - this.balances.foundationBalance - this.balances.liquidBalanceBsc
      this.balances.unswappedBalance = 650000000 - (this.balances.liquidBalance + this.balances.stakeBalance + this.balances.foundationBalance + this.balances.liquidityBalance + this.balances.daoBalance)

      this.balances.circulating = this.balances.liquidBalanceBsc + this.balances.liquidBalance + this.balances.stakeBalance + this.balances.liquidityBalance
      this.balances.noncirculating = this.balances.foundationBalance + this.balances.daoBalance
      this.balances.totalSupply = circSupply

      this.loadingBalances = false
    },
    hello (x) {
      if (!x) {
        return
      } else {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
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
