<template>
  <div v-if="dapp" class="is-shadowless h-full p-4">
    <div class="card-image mx-auto">
      <img class="" :src="useGetImageUrl(dapp.image_url)" />
    </div>

    <div class="card-content p-2">
      <div class="title-section">
        <div class="content">
          <h2
            class="title is-5 has-text-weight-medium mb-3 has-text-centered has-text-black"
          >
            {{ dapp.group_name }}
          </h2>
          <div class="tags is-centered">
            <span
              v-for="tag in dapp.tags"
              :key="tag"
              class="tag is-info is-light"
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Dapp } from "@/types/dapp";

const props = defineProps<{
  dapp: Dapp;
}>();
</script>

<style lang="scss" scoped>
.card-image {
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
}
</style>
