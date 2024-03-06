<template>
  <div class="columns">
    <div v-for="social in socials" class="column is-3\">
      <nuxt-link :to="social.link">
        <SocialCard :social="social" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Social } from "~/types/socials";

const props = defineProps<{
  socials: Social[];
}>();
</script>
