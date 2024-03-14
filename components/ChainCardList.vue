<template>
  <div class="columns">
    <div class="column is-one-third p-5 has-text-centered">
      <ChainCard
        href="https://eos.defibox.io/marketDetail/191"
        :supply="liquidEosSupply"
        class="eos"
        chain="EOS"
        :logo="eosLogo"
      >
        <template #address>
          <a
            class="is-family-monospace has-text-black is-block"
            href="https://www.bloks.io/account/effecttokens"
            target="_blank"
            >effecttokens</a
          >
        </template>
      </ChainCard>
    </div>
    <div class="column is-one-third p-5 has-text-centered">
      <ChainCard
        href="https://pancakeswap.finance/swap?outputCurrency=0xc51ef828319b131b595b7ec4b28210ecf4d05ad0"
        :supply="bscSupply"
        class="bsc"
        chain="BSC"
        :logo="bscLogo"
      >
        <template #address>
          <a
            class="is-family-monospace has-text-black is-block"
            href="https://bscscan.com/token/0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0"
            target="_blank"
            >0xc5...5ad0</a
          >
        </template>
      </ChainCard>
    </div>
    <div class="column is-one-third p-5 has-text-centered">
      <div
        class="card token-card disabled token-card p-5 is-fullheight is-flex is-justify-content-center has-gap-1 is-align-items-center"
      >
        <p class="has-text-grey">Loading additional chain</p>
        <span class="bulma-loader-mixin"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import solanaLogo from "@/assets/img/icons/Solana-sol-logo-horizontal.svg";
import eosLogo from "@/assets/img/icons/eosio.svg";
import bscLogo from "@/assets/img/icons/bsc.svg";

const { useSupplyStatistics } = useStatistics();
const { liquidEosSupply, bscSupply } = useSupplyStatistics();
</script>

<style lang="scss">
.bulma-loader-mixin {
  @include loader;
}
</style>
