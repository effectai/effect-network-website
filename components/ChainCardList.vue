<template>
  <div class="columns">
    <div class="column is-one-third p-5 has-text-centered">
      <ChainCard :supply="163812894" class="eos" chain="EOS" :logo="eosLogo">
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
        :supply="0"
        class="solana recommended"
        chain="Solana"
        :logo="solanaLogo"
      >
        <template #address>
          <a class="is-family-monospace has-text-black is-block"
            >e34pa...jsa4</a
          >
        </template>
      </ChainCard>
    </div>
    <div class="column is-one-third p-5 has-text-centered">
      <ChainCard :supply="45194866" class="bsc" chain="BSC" :logo="bscLogo">
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
  </div>
</template>

<script setup lang="ts">
import solanaLogo from "@/assets/img/icons/Solana-sol-logo-horizontal.svg";
import eosLogo from "@/assets/img/icons/eosio.svg";
import bscLogo from "@/assets/img/icons/bsc.svg";
</script>

<style lang="scss"></style>
