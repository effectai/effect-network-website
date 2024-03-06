<template>
  <div style="height: 650px">
    <TresCanvas height="600" preset="realistic" :alpha="true">
      <TresPerspectiveCamera ref="camera" visible :position="[-6, 0, 15]" />

      <TresAmbientLight :color="'#101D56'" :intensity="2" />

      <!-- <TresSpotLight
      :angle="Math.PI / 4"
      :distance="9"
      :penumbra="0.5"
      :decay="0.2"
      :intensity="10"
      :position="[0, 10, 0]"
      :color="'#101D56'"
    /> -->

      <TresSpotLight
        :angle="Math.PI / 4"
        :distance="25"
        :penumbra="0.4"
        :decay="0.2"
        :intensity="2"
        :position="[-13, -2, 15]"
        :color="'#ffffff'"
      />

      <!-- <TresSpotLight
        :angle="Math.PI / 4"
        :distance="50"
        :penumbra="0.4"
        :decay="0.2"
        :intensity="25"
        :position="[-13, -2, 15]"
        :color="'#101D56'"
      /> -->

      <BlobMesh
        :color="'#ffffff'"
        v-if="texture && envMap"
        :envMap="envMap"
        :position="[0, 0, 0]"
        :texture="texture"
        :frequency="frequency.value"
        :distort="distort.value"
        :surfaceDistort="surfaceDistort.value"
        :surfaceFrequency="surfaceFrequency.value"
        :surfaceSpeed="surfaceSpeed.value"
        :numberOfWaves="numberOfWaves.value"
        :surfacePoleAmount="surfacePoleAmount.value"
        :metalness="metalness.value"
        :roughness="roughness.value"
        :speed="speed.value"
        :gooPoleAmount="gooPoleAmount.value"
        :flatShading="flatShading.value"
      />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { vLightHelper } from "@tresjs/cientos";
import { EquirectangularReflectionMapping } from "three";
import { useControls, TresLeches } from "@tresjs/leches";
import "@tresjs/leches/styles";

const {
  frequency,
  distort,

  roughness,
  metalness,
  speed,

  gooPoleAmount,

  surfaceDistort,
  surfaceFrequency,
  surfacePoleAmount,
  surfaceSpeed,
  numberOfWaves,

  flatShading,
} = useControls({
  metalness: {
    value: 0.7,
    min: 0.1,
    max: 1,
    step: 0.1,
  },
  roughness: {
    value: 0.2,
    min: 0.1,
    max: 1,
    step: 0.1,
  },
  speed: {
    value: 0.3,
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  gooPoleAmount: {
    value: 12,
    min: 1,
    max: 20,
    step: 1,
  },
  frequency: {
    value: 2.9,
    min: 0.1,
    max: 10,
    step: 0.1,
  },
  distort: {
    value: 0.4,
    min: 0.1,
    max: 1,
    step: 0.01,
  },
  surfaceDistort: {
    value: 1.5,
    min: 0.1,
    max: 10,
    step: 0.1,
  },
  surfaceFrequency: {
    value: 1.65,
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  surfaceSpeed: {
    value: 1,
    min: 0.1,
    max: 5,
    step: 0.1,
  },
  numberOfWaves: {
    value: 0,
    min: 1,
    max: 20,
    step: 1,
  },
  surfacePoleAmount: {
    value: 0,
    min: 0.1,
    max: 1,
    step: 0.1,
  },
  flatShading: true,
});

const texture = ref<any | null>(null);
const envMap = ref<any | null>(null);

onMounted(async () => {
  texture.value = await useTexture(["gradients/gradient-img.png"]);
  envMap.value = await useTexture(["envmap.jpg"]);

  //make envMap equirectangular
  envMap.value.mapping = EquirectangularReflectionMapping;
});
</script>

<style>
canvas {
  width: 100%;
  height: 100%;
}
</style>
