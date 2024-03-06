<template>
  <SimpleSection title="Marketplace">
    <DappCardList :fade-up="false" :dapps="dapps" />

    <div class="is-flex is-justify-content-center mt-5">
      <div class="button is-primary mx-auto has-text-centered">
        <nuxt-link to="/marketplace" class="has-text-white">View all</nuxt-link>
      </div>
    </div>
  </SimpleSection>
</template>

<script setup lang="ts">
import { dapps } from "@/constants/dapps";
</script>

<style></style>
