<template>
  <div>
    <a
      v-for="social in socials"
      target="_blank"
      :href="social.link"
      class="is-primary has-text-primary mr-2"
    >
      <i :class="social.faClass"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Social } from "@/types/socials";

const props = defineProps({
  socials: {
    type: Array as PropType<Social[]>,
    required: true,
  },
});
</script>

<style></style>
