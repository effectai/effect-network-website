<template>
  <ClientOnly>
    <TresCanvas
      preset="realistic"
      ref="canvas"
      height="600"
      :alpha="true"
      :antialias="true"
    >
      <TresPerspectiveCamera ref="camera" visible :position="[0, 0, 15]" />
      <TresDirectionalLight
        :color="new Color('#ECF0F1')"
        :intensity="3"
        :position="[0, 5, 5]"
      />
      <TresSpotLight
        :angle="Math.PI / 4"
        :distance="12"
        :penumbra="0.8"
        :decay="0.9"
        :intensity="1"
        :color="'#fff'"
      />

      <Suspense>
        <TresMesh ref="planetMesh" :position="[9, -1, 0]">
          <TresSphereGeometry :args="[9, 500]" />
          <TresMeshStandardMaterial
            :metalness="0.3"
            :roughness="0.4"
            :map="texture?.map"
          ></TresMeshStandardMaterial>
        </TresMesh>
      </Suspense>
    </TresCanvas>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Color } from "three";
const canvas = ref(null);
const camera = ref(null);
const planetMesh = ref(null);

const { data: texture, refresh } = await useAsyncData(async () => {
  console.log("getting textures..");
  const texture = await useTexture({
    map: "/textures/8k_earth_nightmap.jpg",
    roughnessMap: "/textures/8k_earth_specular_map.jpg",
  });

  console.log("got textures!");

  return texture;
});

await refresh();

const { onLoop } = useRenderLoop();

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
