<template>
  <div class="columns is-multiline">
    <div class="column is-section-faded" v-for="tutorial in tutorials">
      <TutorialCard :tutorial="tutorial" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tutorial } from "~/types/tutorials";

const props = defineProps({
  tutorials: {
    type: Array as PropType<Tutorial[]>,
    required: true,
  },
});
</script>

<style lang="scss">
.is-section-faded {
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(255, 255, 255, 0.6));
  }
}
</style>
