<template>
  <div class="my-6" id="latest">
    <div class="columns is-multiline">
      <div
        class="column is-full-mobile is-one-third-tablet"
        v-for="(item, i) in items"
        data-aos="fade-up"
        :data-aos-delay="300 + i * 250"
      >
        <NewsCard class="news-card is-fullheight" :news="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { News } from "~/types/news";

const props = defineProps<{
  items: News[];
}>();
</script>

<style lang="scss" scoped>
.news-card {
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
}
</style>
