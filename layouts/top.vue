<template>
  <div id="app">
    <div
      v-if="showNotification"
      id="news-notification"
      style="top: 75px"
      class="notification is-light is-fixed-top z-1 has-text-centered"
    >
      <button @click="close" class="cursor-pointer delete"></button>
      🚀 Our <b>brand new</b> <b>website</b> and <b>roadmap</b> are out! 🔥
      Check it out <nuxt-link to="/news/roadmap-2024">here</nuxt-link> 👈
    </div>

    <NavBar :is-scrolling="isScrolling" />

    <div class="is-relative">
      <div
        class="three-canvas is-absolute is-fullwidth has-background-smoke"
        style="height: 750px"
      >
        <TresCanvas preset="realistic" ref="canvas" :alpha="true">
          <TresPerspectiveCamera ref="camera" visible :position="[0, 0, 15]" />

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
const isScrolling = ref(false);
const showNotification = ref(true);

const close = () => {
  showNotification.value = false;
};
</script>

<style scoped>
#app {
  /*background: url('~assets/img/grid.png');*/
  min-height: 100vh;
}
</style>