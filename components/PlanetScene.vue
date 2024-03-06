<template>
  <ClientOnly>
    <TresCanvas preset="realistic" ref="canvas" :alpha="true">
      <TresPerspectiveCamera ref="camera" visible :position="[0, 0, 15]" />

      <TresAmbientLight :intensity="1.5" />

      <Suspense>
        <TresMesh v-if="planetTexture" ref="planetMesh" :position="[9, -1, 0]">
          <TresSphereGeometry :args="[9, 300]" />
          <TresMeshStandardMaterial
            :metalness="0.5"
            :roughness="0.4"
            :map="planetTexture.map"
          ></TresMeshStandardMaterial>
        </TresMesh>
      </Suspense>
    </TresCanvas>
  </ClientOnly>
</template>

<script setup lang="ts">
const canvas = ref(null);
const camera = ref(null);
const planetMesh = ref(null);

const { onLoop } = useRenderLoop();

const planetTexture = ref<any>(null);
onMounted(async () => {
  planetTexture.value = await useTexture({
    map: "/textures/2k_earth_nightmap.jpg",
  });
});

onLoop(({ delta, elapsed }) => {
  //update the time uniform
  if (planetMesh.value) {
    planetMesh.value.rotation.z = Math.sin(elapsed / 100) * 2;
    planetMesh.value.rotation.x = Math.sin(elapsed / 10) * 2;
  }
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
  left: 0;
  top: 75px;
  z-index: 990;
  height: 100px;
  color: white;
  background: black;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 2px black;
}
</style>
