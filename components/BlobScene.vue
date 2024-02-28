<template>
  <ClientOnly>
    <TresCanvas
      preset="realistic"
      ref="canvas"
      height="600"
      :alpha="true"
      :antialias="true"
      shadows
    >
      <TresPerspectiveCamera ref="camera" visible :position="[0, 0, 15]" />
      <TresDirectionalLight
        :color="0xecf0f1"
        :intensity="2"
        :position="[0, 5, 5]"
      />
      <TresSpotLight
        :angle="Math.PI / 4"
        :distance="7"
        :penumbra="1"
        :decay="0.5"
        :intensity="0.9"
        :color="'#fff'"
      />

      <BlobModel v-if="texture" :texture="texture" />
    </TresCanvas>
  </ClientOnly>
</template>

<script setup lang="ts">
const texture = ref<any | null>(null);
onMounted(async () => {
  texture.value = await useTexture(["gradients/gradient-img.png"]);
});
</script>

<style>
canvas {
  z-index: 0;
  width: 100%;
  height: 100%;
}

.debug {
  position: absolute;
  bottom: 00;
  left: 0;
  z-index: 100;
  color: white;
  background: black;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 2px black;
}
</style>
