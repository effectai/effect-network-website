<template>
  <div
    :class="['p-5 has-text-centered token-card', { disabled: props.disabled }]"
    class="p-5 has-text-centered token-card has-background-white has-text-black"
  >
    <div class="logo-wrapper">
      <img id="logo" :src="logo" />
    </div>
    <slot class="link" name="address"></slot>

    <h3 class="is-size-6 is-family-monospace" v-if="supply">
      Current supply: {{ formattedMillions }}M
    </h3>
    <h3 v-else>Current Supply: -</h3>
    <a :href="href" class="button mt-auto is-primary mt-5"
      >Buy EFX on {{ chain }}</a
    >
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  href: string;
  chain: string;
  logo: string;
  disabled?: boolean;
  supply?: number;
}>();

const formattedMillions = new Intl.NumberFormat().format(
  props.supply / 1000000
);
</script>

<style lang="scss">
.token-card {
  #logo {
    width: 100%;
    min-height: 50px;
  }

  &.disabled {
    opacity: 0.22;
    pointer-events: none;
  }
  .logo-wrapper {
    min-height: 75px;
  }

  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: 0.3s;
  min-height: 250px;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
}
</style>
