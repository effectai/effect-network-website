<template>
  <div class="community-card">
    <div class="card">
      <div class="card-content">
        <i :class="social.faClass" class="has-text-primary"></i>
        <h2 class="title is-size-3 is-uppercase">{{ social.name }}</h2>
        <a
          :href="social.link"
          target="_blank"
          class="button is-primary is-capitalized"
        >
          Join our {{ social.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Social } from "~/types/socials";
const props = defineProps<{
  social: Social;
}>();
</script>

<style scoped lang="scss">
i {
  transition: 0.3s opacity;
  font-size: 6rem;
  position: absolute;
  color: white;
  opacity: 0.3;
  bottom: 0;
  right: 0;
}

.community-card {
  position: relative;
  .card {
    transition: transform 0.3s;
    &:hover {
      i {
        opacity: 1;
      }
      transform: scale(1.04);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
