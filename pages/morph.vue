<template>
  <div>
    <ClientOnly>
      <TresLeches />
    </ClientOnly>

    <TresCanvas
      style=""
      preset="realistic"
      ref="canvas"
      :alpha="true"
      window-size
    >
      <TresPerspectiveCamera ref="camera" visible :position="[-6, 0, 30]" />

      <OrbitControls />
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

      <primitive v-if="brainMesh" :object="meshWithMaterial" />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { vLightHelper } from "@tresjs/core";
import {
  IcosahedronGeometry,
  MeshStandardMaterial,
  Mesh,
  Vector2,
  Float32BufferAttribute,
  BufferGeometry,
  Scene,
  BufferAttribute,
} from "three";
import { calculateNormals, mergeModel } from "~/utils/three";
import { ShaderChunk } from "three";

import displacement from "@/glsl/shaders/displacement.glsl";
import headers from "@/glsl/shaders/headers.glsl";

definePageMeta({
  layout: "empty",
});

const brainGeometry: Ref<BufferGeometry | null> = ref(null);
const brainMesh: Ref<Mesh | null> = shallowRef(null);

onMounted(async () => {
  //load texture
  const gradient = await useTexture(["/gradients/zinc.jpg"]);
  material.map = gradient;

  const envMap = await useTexture(["envmap.jpg"]);
  material.envMap = envMap;
  material.needsUpdate = true;

  const { nodes, scene } = await useGLTF("/models/scene.gltf");

  const brain = nodes["finalstlcleanermaterialmergergles"];
  brainMesh.value = brain;

  brainGeometry.value = mergeModel(brain, 0.1);

  geometry.value.setAttribute(
    "positionStart",
    new Float32BufferAttribute(geometry.value.attributes.position.array, 3)
  );

  geometry.value.setAttribute(
    "positionEnd",
    new Float32BufferAttribute(brainGeometry.value.attributes.position.array, 3)
  );

  geometry.value.setAttribute(
    "normalStart",
    new Float32BufferAttribute(geometry.value.attributes.normal.array, 3)
  );

  geometry.value.setAttribute(
    "normalEnd",
    new Float32BufferAttribute(brainGeometry.value.attributes.normal.array, 3)
  );
});

const geometry = shallowRef(new IcosahedronGeometry(8, 150));
const material = new MeshStandardMaterial({
  metalness: 0.8,
  roughness: 0.2,
  flatShading: true,
});

const uniforms = {
  distort: { value: 0.4 },
  frequency: { value: 4 },
  speed: { value: 0.33 },
  surfaceDistort: { value: 0.15 },
  surfaceFrequency: { value: 1 },
  surfaceSpeed: { value: 2 },
  surfaceTime: { value: 0 },
  numberOfWaves: { value: 1 },
  surfacePoleAmount: { value: 0.3 },
  gooPoleAmount: { value: 12 },
  time: { value: 0 },
  morphRatio: { value: 0 },
};

material.onBeforeCompile = (shader: any) => {
  shader.uniforms.morphRatio = uniforms.morphRatio;
  shader.uniforms.time = 0;

  shader.uniforms.distort = uniforms.distort;
  shader.uniforms.frequency = uniforms.frequency;
  shader.uniforms.speed = uniforms.speed;
  shader.uniforms.surfaceDistort = uniforms.surfaceDistort;
  shader.uniforms.surfaceFrequency = uniforms.surfaceFrequency;
  shader.uniforms.surfaceTime = uniforms.surfaceTime;
  shader.uniforms.surfaceSpeed = uniforms.surfaceSpeed;
  shader.uniforms.numberOfWaves = uniforms.numberOfWaves;
  shader.uniforms.surfacePoleAmount = uniforms.surfacePoleAmount;
  shader.uniforms.gooPoleAmount = uniforms.gooPoleAmount;

  shader.vertexShader = `
      ${headers}
      ${shader.vertexShader}
    `;

  shader.vertexShader = shader.vertexShader.replace(
    "void main() {",
    `
        void main() {
          ${displacement}
      `
  );

  shader.vertexShader = `
          uniform float morphRatio;
          attribute vec3 positionStart;
          attribute vec3 positionEnd;
          attribute vec3 normalStart;
          attribute vec3 normalEnd;

          ${shader.vertexShader}
        `.replace(
    `#include <begin_vertex>`,
    `#include <begin_vertex>

      float stiffness = 0.5; // Adjust stiffness for desired elasticity
      float damping = 0.1; // Adjust damping for desired damping effect

      vec3 pStart = positionStart;
      vec3 pEnd = positionEnd;

      float distRatio = sin(morphRatio * PI);

      // Calculate morphed normal
      vec3 normal = normalize(mix(normalStart, normalEnd, morphRatio));

      // Calculate morphed position
      vec3 pos = mix(pStart, pEnd, morphRatio);


      transformed = pos + normalize(pos) * f(pos);
        `
  );

  //fix normals: https://codepen.io/marco_fugaro/pen/xxZWPWJ?editors=1010
  shader.vertexShader = shader.vertexShader.replace(
    "#include <defaultnormal_vertex>",
    ShaderChunk.defaultnormal_vertex.replace(
      "vec3 transformedNormal = objectNormal;",
      `vec3 transformedNormal = displacedNormal;`
    )
  );
};

// const meshWithMaterial = new Mesh(geometry.center().scale(1, 1, 1), material);
const meshWithMaterial = new Mesh(geometry.value, material);

const { onLoop } = useRenderLoop();

const {
  morphRatio,
  distort,
  frequency,
  numberOfWaves,
  roughness,
  metalness,
  speed,
  gooPoleAmount,
  surfaceDistort,
  surfaceFrequency,
  surfacePoleAmount,
} = useControls({
  metalness: {
    value: 0.8,
    min: 0,
    max: 1,
  },
  roughness: {
    value: 0.2,
    min: 0,
    max: 1,
  },
  speed: {
    value: 0.2,
    min: 0,
    max: 10,
  },
  gooPoleAmount: {
    value: 12,
    min: 0,
    max: 1,
  },
  distort: {
    value: 0.3,
    min: 0,
    max: 10,
  },
  frequency: {
    value: 1.5,
    min: 0,
    max: 10,
  },
  surfaceDistort: {
    value: 1,
    min: 0,
    max: 10,
  },
  surfaceFrequency: {
    value: 1.65,
    min: 0,
    max: 10,
  },
  surfaceSpeed: {
    value: 0.8,
    min: 0,
    max: 10,
  },
  numberOfWaves: {
    value: 1,
    min: 0,
    max: 10,
  },
  surfacePoleAmount: {
    value: 3,
    min: 0,
    max: 1,
  },
  morphRatio: {
    value: 0,
    min: 0,
    step: 0.001,
    max: 1,
  },
});

onLoop(({ elapsed, delta, clock }) => {
  uniforms.time.value = elapsed * uniforms.speed.value;
  uniforms.surfaceTime.value = elapsed * uniforms.surfaceSpeed.value;
  uniforms.morphRatio.value = morphRatio.value.value;

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

  material.needsUpdate = true;
  //while morphRatio approaches 2, make deform approach 0 with a lower bound of 0.1
  uniforms.distort.value =
    distort.value.value *
    Math.min(1, Math.max(0.1, 1 - morphRatio.value.value));

  // uniforms.time.value = elapsed;
  // uniforms.morphRatio.value = Math.sin(elapsed * 0.5) * 0.5 + 0.5;
});
</script>

<style>
.tl-absolute {
  z-index: 999;
  position: fixed;
}
</style>
