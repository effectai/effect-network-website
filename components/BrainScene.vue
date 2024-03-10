<template>
  <ClientOnly>
    <TresCanvas preset="realistic" ref="canvas" :alpha="true">
      <TresPerspectiveCamera ref="camera" visible :position="[-6, 1, 15]" />

      <TresAmbientLight :color="'#101D56'" :intensity="1" />

      <TresSpotLight
        :angle="Math.PI / 4"
        :distance="40"
        :penumbra="0.4"
        :decay="0.2"
        :intensity="1"
        :position="[-13, -2, 30]"
        :color="'#ffffff'"
      />

      <primitive
        v-if="mesh"
        :scale="0.05"
        :position="[0, 0, 0]"
        :rotateZ="0"
        :object="mesh"
      />
    </TresCanvas>
  </ClientOnly>
</template>

<script setup lang="ts">
import {
  BufferGeometry,
  EquirectangularReflectionMapping,
  Mesh,
  MeshStandardMaterial,
} from "three";

import { vLightHelper } from "@tresjs/cientos";

const canvas = ref(null);
const camera = ref(null);

const mesh = shallowRef<Mesh | null>(null);
const brainGeometry = ref<BufferGeometry | null>(null);

const material = new MeshStandardMaterial({
  metalness: 1,
  roughness: 0,
  flatShading: true,
});

//Load earth  textures
onMounted(async () => {
  const envMap = await useTexture(["envmap.jpg"]);
  envMap.mapping = EquirectangularReflectionMapping;
  material.envMap = envMap;

  const gradient = await useTexture(["gradients/zinc.jpg"]);
  material.map = gradient;
  material.needsUpdate = true;

  const { nodes, scene, materials, animations } = await useGLTF(
    "/models/cyberpunk_laptop_concept_design.glb"
  );
  const brain = nodes["RootNode"];

  mesh.value = scene;

  const faceMaterial = materials["Material.001"];

  console.log(faceMaterial);
  faceMaterial.map = gradient;
  faceMaterial.color = false;
  faceMaterial.envMap = envMap;
  faceMaterial.envMapIntensity = 0.2;

  faceMaterial.metalness = 0.75;
  faceMaterial.roughness = 0.4;
  faceMaterial.flatShading = true;
  faceMaterial.needsUpdate = true;
});

const { onLoop } = useRenderLoop();

const {
  metalness,
  roughness,
  distort,
  frequency,
  speed,
  surfaceDistort,
  surfaceFrequency,
  numberOfWaves,
  surfacePoleAmount,
  gooPoleAmount,
  surfaceSpeed,
  morphRatio,
  vertices,
} = useThreeControls();

const uniforms = {
  time: { value: 0.1 },
  surfaceTime: { value: 0.1 },

  distort: { value: distort.value.value },
  frequency: { value: frequency.value.value },
  speed: { value: speed.value.value },

  surfaceDistort: { value: surfaceDistort.value.value },
  surfaceFrequency: { value: surfaceFrequency.value.value },
  surfaceSpeed: { value: surfaceSpeed.value.value },
  numberOfWaves: { value: numberOfWaves.value.value },
  surfacePoleAmount: { value: surfacePoleAmount.value.value },
  gooPoleAmount: { value: gooPoleAmount.value.value },
};

useDisplacement(material, uniforms);

onLoop(({ delta, elapsed }) => {
  //update the time uniform
  //rotate
  if (mesh.value) {
    //roate over sin

    //animate the camera
    mesh.value.rotation.y = -Math.sin(elapsed / 100) * 2;

    uniforms.time.value = elapsed * uniforms.speed.value;
    uniforms.surfaceTime.value = elapsed * uniforms.surfaceSpeed.value;

    uniforms.distort.value = distort.value.value;
    uniforms.frequency.value = frequency.value.value;
    uniforms.gooPoleAmount.value = gooPoleAmount.value.value;
    uniforms.surfaceDistort.value = surfaceDistort.value.value;
    uniforms.surfaceFrequency.value = surfaceFrequency.value.value;
    uniforms.numberOfWaves.value = numberOfWaves.value.value;
    uniforms.surfacePoleAmount.value = surfacePoleAmount.value.value;

    //subdivide detail

    material.metalness = metalness.value.value;
    material.roughness = roughness.value.value;

    //while morphRatio approaches 2, make deform approach 0 with a lower bound of 0.1
  }
});
</script>

<style></style>
