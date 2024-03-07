<template>
  <div
    class="tutorial-card card is-fullheight"
    :class="{ disabled: tutorial.disabled }"
  >
    <div class="card-title px-4">
      <div class="is-flex is-align-items-center has-gap-">
        <img class="is-64x64 image" src="@/assets/img/logo.svg" />
      </div>
    </div>
    <div class="card-content">
      <div class="content">
        <h3 class="is-size-4">{{ tutorial.title }}</h3>
        <p>{{ tutorial.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tutorial } from "~/types/tutorials";

const props = defineProps({
  tutorial: {
    type: Object as PropType<Tutorial>,
    required: true,
  },
});
</script>

<style lang="scss">
.tutorial-card {
  &.disabled {
    opacity: 0.6;
  }
}
</style>
