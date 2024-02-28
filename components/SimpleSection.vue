<template>
  <section class="section" data-aos="fade-in">
    <div class="container is-max-widescreen">
      <div :class="{ 'has-text-centered': centered }" class="my-5">
        <h3 v-if="title" class="title is-2">
          {{ title }}
        </h3>
        <h4 v-if="subtitle" class="subtitle">
          {{ subtitle }}
        </h4>
      </div>
      <div class="">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    centered: boolean;

    title?: string;
    subtitle?: string;
  }>(),
  { centered: false }
);
</script>
