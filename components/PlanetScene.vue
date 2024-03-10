<template>
  <ClientOnly>
    <TresCanvas preset="realistic" ref="canvas" :alpha="true">
      <TresPerspectiveCamera ref="camera" visible :position="[0, 0, 15]" />

      <TresAmbientLight :color="'#101D56'" :intensity="2" />

      <TresSpotLight
        :angle="Math.PI / 4"
        :distance="25"
        :penumbra="0.4"
        :decay="0.2"
        :intensity="2"
        :position="[-13, -2, 15]"
        :color="'#ffffff'"
      />

      <Suspense>
        <TresGroup
          :position="[8, 0, 0]"
          ref="planet"
          v-if="envMap && normalMap && gradient"
        >
          <TresMesh ref="planetMesh">
            <TresIcosahedronGeometry :args="[8, 20]" />
            <TresMeshStandardMaterial
              :metalness="0.9"
              :roughness="0.2"
              :map="gradient"
              :envMap="envMap"
              :normalMap="normalMap"
              :bumpMap="specularMap"
              :bumpScale="20"
              :envMapIntensity="0.7"
              :flatShading="true"
            ></TresMeshStandardMaterial>
          </TresMesh>
        </TresGroup>
      </Suspense>
    </TresCanvas>
  </ClientOnly>
</template>

<script setup lang="ts">
import { EquirectangularReflectionMapping } from "three";

const canvas = ref(null);
const camera = ref(null);
const planetMesh = ref(null);
const planet = ref(null);

const specularMap = ref<any>(null);
const normalMap = ref<any>(null);
const envMap = ref<any>(null);
const gradient = ref<any>(null);

//Load textures
onMounted(async () => {
  gradient.value = await useTexture(["/gradients/zinc.jpg"]);

  normalMap.value = await useTexture(["/textures/earth-normalmap.jpg"]);

  envMap.value = await useTexture(["space-env.png"]);
  envMap.value.mapping = EquirectangularReflectionMapping;

  specularMap.value = await useTexture(["/textures/4k_earth_specular.jpg"]);
});

const { onLoop } = useRenderLoop();

onLoop(({ delta, elapsed }) => {
  //update the time uniform
  if (planet.value) {
    planet.value.rotation.y = -Math.sin(elapsed / 100) * 2;
  }
});
</script>

<style></style>
