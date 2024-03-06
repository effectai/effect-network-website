<template>
  <div id="hero" data-aos="fade-in">
    <div class="three-canvas">
      <slot name="canvas" class="three-canvas"> </slot>
    </div>

    <section class="section">
      <div class="container mt-6">
        <div class="columns is-vcentered">
          <div
            class="mt-6 column is-half"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1 v-if="title" class="mt-3 title is-spaced keep-all">
              <span class="is-uppercase has-text-primary">{{ title }}</span>
            </h1>

            <h1 v-else-if="$slots.title" class="mt-3 title is-spaced keep-all">
              <slot name="title"> </slot>
            </h1>

            <slot name="subtitle"></slot>
            <slot name="footer"></slot>
          </div>
          <div class="column is-half is-vcentered">
            <slot name="side"></slot>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    default: "750px",
  },
  title: {
    type: String,
  },
});
</script>

<style lang="scss">
#hero {
  background: #e5e7eb;
}
</style>
