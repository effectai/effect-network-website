<template>
  <div>
    <ClientOnly>
      <a
        class="card is-hoverable is-fullheight is-flex is-flex-direction-column"
        :href="post.href"
        target="_blank"
      >
        <div class="card-image">
          <figure
            class="image is-5by3 background-image"
            :style="'background-image: url(\'' + post.img + '\')'"
          ></figure>
        </div>
        <div class="card-content">
          <div
            class="is-flex is-justify-content-space-between has-fullwidth py-2 has-text-primary"
          >
            <span> {{ post.date }}</span>

            <span>{{ postType }}</span>
          </div>
          <div class="title is-4 is-family-sans-serif">
            {{ post.title }}
          </div>
          <p>
            {{ post.text }}
          </p>
        </div>
        <footer class="card-footer mt-auto">
          <a
            v-if="post.type == 'video'"
            target="_blank"
            :href="post.href"
            class="card-footer-item"
          >
            Watch Video <i class="fab fa-youtube ml-3"></i>
          </a>
          <a v-else target="_blank" :href="post.href" class="card-footer-item">
            Read More <i class="fas fa-chevron-right ml-3"></i>
          </a>
        </footer>
      </a>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "@/types/post";

const props = defineProps<{
  post: Post;
}>();

const postType = computed(() =>
  props.post.type == "video"
    ? "Video"
    : props.post.type == "blog"
    ? "Blog Post"
    : "Press Release"
);
</script>

<style lang="scss" scoped>
figure {
  background-size: cover;
}
</style>
