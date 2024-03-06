<template>
  <div class="featured-apps">
    <div class="container pt-2">
      <div class="columns is-multiline">
        <nuxt-link
          :data-aos-delay="400 * (index + 1)"
          v-for="(dapp, index) in dapps"
          class="column is-full-mobile is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen"
          :key="dapp.id"
          :to="`/marketplace/${dapp.group_name.toLowerCase()}`"
        >
          <dapp-card class="dapp-card" :dapp="dapp" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  dapps: any[];
}>();
</script>

<style lang="scss">
.dapp-card {
  padding: 0;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
}
</style>
