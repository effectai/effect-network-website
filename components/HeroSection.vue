<template>
  <div id="hero" data-aos="fade-in">
    <section class="section">
      <div class="container mt-5">
        <div class="columns is-vcentered">
          <div
            class="column is-full-mobile is-three-fifths-tablet is-half-widescreen"
            data-aos="fade-in"
            data-aos-delay="0"
          >
            <h1 v-if="title" class="title is-spaced is-auto-phrase is-in-front">
              <span class="has-text-primary is-block is-in-front">{{
                title
              }}</span>
            </h1>

            <div v-else-if="$slots.title" class="is-spaced keep-all">
              <slot name="title"> </slot>
            </div>

            <slot name="subtitle"></slot>
            <slot name="footer"></slot>
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
  position: relative;
  width: 100%;
  height: 100%;
  .section,
  .container,
  .columns {
    @include mobile {
      height: 100%;
    }
  }
  .title {
    font-size: 3rem;
  }

  @include desktop {
    .title {
      font-size: 54px;
    }
  }
}
</style>
