<template>
  <div>
    <a
      class="card is-hoverable"
      :href="post.href"
      target="_blank"
      min-height="500"
    >
      <div class="card-image">
        <figure
          class="image is-5by3 background-image"
          :style="'background-image: url(\'' + post.img + '\')'"
        ></figure>
      </div>
      <div class="card-content" style="min-height: 280px">
        <div class="post-type">
          <div class="columns pt-4">
            <div class="column is-narrow">
              <span class="is-size-7 has-text-primary">
                {{ post.date }}
              </span>
            </div>
            <div class="column"></div>
            <div class="column is-narrow">
              <span class="is-size-6 has-text-white" v-if="post.type == 'video'"
                >Video</span
              >
              <span
                class="is-size-6 has-text-primary"
                v-else-if="post.type == 'blog'"
                >Blog Post</span
              >
              <span
                class="is-size-6 has-text-primary"
                v-else-if="post.type == 'press'"
                >Press Release</span
              >
              <span class="is-size-6 has-text-white" v-else>Post</span>
            </div>
          </div>
        </div>
        <div class="title is-4 is-family-sans-serif">
          {{ post.title }}
        </div>
        <p>
          {{ post.text }}
        </p>
      </div>
      <footer class="card-footer">
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
  </div>
</template>

<script setup lang="ts">
import type { Post } from "@/types/post";

const props = defineProps<{
  post: Post;
}>();
</script>

<style lang="scss"></style>
