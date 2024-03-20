<template>
  <div id="app">
    <NavBar />

    <div
      v-if="showNotification"
      id="news-notification"
      class="notification is-primary is-dark is-fixed-top z-1 has-text-centered mb-0"
    >
      <button @click="close" class="cursor-pointer delete"></button>
      🚀 Our <b>brand new</b> <b>website</b> and <b>roadmap</b> are out! 🔥
      Check it out <nuxt-link to="/news/roadmap-2024">here</nuxt-link> 👈
    </div>

    <div class="is-relative">
      <div
        :class="{ 'is-earth': route.name == 'ecosystem' }"
        class="three-canvas is-absolute is-fullwidth has-background-smoke"
        style="height: 750px"
      >
        <TresCanvas preset="realistic" ref="canvas" :alpha="true">
          <TresPerspectiveCamera
            ref="camera"
            visible
            :position="[posX, -1, 15]"
          />

          <TresAmbientLight :color="'#101D56'" :intensity="2" />

          <TresSpotLight
            :angle="Math.PI / 4"
            :distance="40"
            :penumbra="0.4"
            :decay="0.2"
            :intensity="1"
            :position="[-13, -2, 30]"
            :color="'#ffffff'"
          />

          <Suspense>
            <AnimatedMesh />
          </Suspense>
        </TresCanvas>
      </div>
      <slot> </slot>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const showNotification = ref(true);
const route = useRoute();

const WIDESCREEN = 1408;
const MOBILE = 768;

const screenSize = useWindowSize().width;
const posX = computed(() => {
  if (screenSize.value <= MOBILE) {
    return 6;
  } else if (screenSize.value >= WIDESCREEN) {
    return 0;
  } else {
    return 6 - ((screenSize.value - MOBILE) / (WIDESCREEN - MOBILE)) * 8;
  }
});
//create a value of 0-6 that when the screen size is 300 (mobile) the number is 0 but when the screenSize is 1400+ the number is 6 and stays there

const close = () => {
  showNotification.value = false;
};
</script>

<style lang="scss">
.three-canvas {
  overflow: hidden;
  display: flex;
  justify-content: center;

  opacity: 0.2;

  @include desktop {
    opacity: 0.5;
  }

  @include widescreen {
    opacity: 1;
  }
}
</style>
