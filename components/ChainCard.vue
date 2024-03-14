<template>
  <div
    :class="['p-5 has-text-centered token-card', { disabled: props.disabled }]"
    class="p-5 has-text-centered token-card has-background-white is-fullheight has-text-black"
  >
    <div class="logo-wrapper">
      <img id="logo" :src="logo" />
    </div>

    <slot name="address"></slot>

    <div class="my-3 is-fullwidth">
      <div v-for="stat in stats" class="is-fullwidth">
        <div
          v-if="stat.value"
          class="is-flex is-justify-content-center has-gap-1 is-lowercase is-family-monospace"
        >
          <label>{{ stat.name }}</label>
          <span class="is-uppercase"
            >{{ formatNumber(stat.value).value
            }}{{ formatNumber(stat.value).suffix }}</span
          >
        </div>
      </div>
    </div>

    <a target="_blank" :href="href" class="button mt-auto is-primary mt-5"
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
  stats?: Array<{ name: string; value: number }>;
}>();
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
