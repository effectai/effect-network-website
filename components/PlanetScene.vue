<template>
  <ClientOnly>
    <TresCanvas preset="realistic" ref="canvas" :alpha="true">
      <TresPerspectiveCamera ref="camera" visible :position="[0, 0, 15]" />

      <TresDirectionalLight
        :color="'0xffffff'"
        :position="[-5, -4, 1]"
        :intensity="0.3"
      />

      <Suspense>
        <TresGroup
          :position="[6, 0, 0]"
          ref="planet"
          v-if="planetTexture && cloudTexture"
        >
          <TresMesh ref="planetMesh">
            <TresIcosahedronGeometry :args="[7, 20]" />
            <TresMeshStandardMaterial
              :map="planetTexture.map"
            ></TresMeshStandardMaterial>
          </TresMesh>
          <TresMesh :scale="1.003" ref="cloudMesh">
            <TresIcosahedronGeometry :args="[7, 20]" />
            <TresMeshStandardMaterial
              :blending="AdditiveBlending"
              :map="cloudTexture.map"
            ></TresMeshStandardMaterial>
          </TresMesh>
        </TresGroup>
      </Suspense>
    </TresCanvas>
  </ClientOnly>
</template>

<script setup lang="ts">
import { AdditiveBlending } from "three";

const canvas = ref(null);
const camera = ref(null);
const planetMesh = ref(null);
const cloudMesh = ref(null);
const planet = ref(null);

const planetTexture = ref<any>(null);
const cloudTexture = ref<any>(null);

//Load earth and cloud textures
onMounted(async () => {
  planetTexture.value = await useTexture({
    map: "/textures/earth_4k.jpg",
  });

  cloudTexture.value = await useTexture({
    map: "/textures/earth_clouds.jpg",
  });
});

const { onLoop } = useRenderLoop();

onLoop(({ delta, elapsed }) => {
  //update the time uniform
  if (planet.value && cloudMesh.value) {
    planet.value.rotation.y = -Math.sin(elapsed / 100) * 2;
    cloudMesh.value.rotation.y = -Math.sin(elapsed / 100);
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
