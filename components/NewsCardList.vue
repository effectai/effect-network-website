<template>
  <div class="my-6" id="latest">
    <div class="columns p-4 is-gapless-mobile is-multiline">
      <div
        class="column is-full-mobile is-one-third-tablet"
        v-for="(post, i) in posts"
        data-aos="fade-up"
        :data-aos-delay="300 + i * 250"
      >
        <NewsCard class="news-card h-full" :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "@/types/post";

const props = defineProps<{
  posts: Post[];
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
