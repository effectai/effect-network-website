<template>
  <div id="app">
    <div
      v-if="showNotification"
      id="news-notification"
      style="top: 75px"
      class="notification is-light is-fixed-top z-1 has-text-centered"
    >
      <button @click="close" class="cursor-pointer delete"></button>
      <i class="fas fa-exclamation-triangle mx-2"></i>
      We've just announced an official <b>bridge</b> to the
      <b>Solana Network</b>, read more about it <a href="#">here</a> 👈
    </div>

    <NavBar :is-scrolling="isScrolling" />

    <div>
      <div class="three-canvas is-absolute is-fullwidth" style="height: 750px">
        <TresCanvas preset="realistic" ref="canvas" :alpha="true">
          <TresPerspectiveCamera
            ref="camera"
            visible
            :position="[-5, -1, 15]"
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
      <slot />
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
