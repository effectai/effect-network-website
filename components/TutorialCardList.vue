<template>
  <div class="columns is-multiline">
    <div class="column" v-for="tutorial in tutorials">
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

<style></style>
