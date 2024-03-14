<template>
  <div>
    <nuxt-link
      :to="`${news._path}`"
      class="news-card card is-hoverable is-fullheight is-flex is-flex-direction-column"
    >
      <div class="card-image">
        <figure
          class="image is-5by3 background-image"
          :style="'background-image: url(\'' + news.image.src + '\')'"
        ></figure>
      </div>
      <div class="card-content">
        <div
          class="is-flex is-justify-content-space-between has-fullwidth py-2 has-text-primary"
        >
          <span> {{ news.created }}</span>

          <span>News</span>
        </div>
        <div class="title is-4 is-family-sans-serif">
          {{ news.title }}
        </div>
        <p>
          {{ limitText(news.description, 190) }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { News } from "@/types/news";
import { limitText } from "@/utils/format";

const props = defineProps<{
  news: News;
}>();
</script>

<style lang="scss" scoped>
figure {
  background-size: cover;
}

.news-card {
  &:hover {
    p {
      color: black;
    }
  }
}
</style>
