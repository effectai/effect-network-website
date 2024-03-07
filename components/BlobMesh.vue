<template>
  <primitive :object="meshWithMaterial" />
</template>

<script setup lang="ts">
import {
  MeshStandardMaterial,
  IcosahedronGeometry,
  Mesh,
  Vector2,
  ShaderChunk,
  Texture,
} from "three";

import headers from "@/glsl/shaders/headers.glsl";
import displacement from "@/glsl/shaders/displacement.glsl";

const props = defineProps({
  color: {
    type: String,
    default: "#101D56",
  },
  metalness: {
    type: Number,
    default: 0.3,
  },
  roughness: {
    type: Number,
    default: 0,
  },
  envMapIntensity: {
    type: Number,
    default: 0.2,
  },
  envMap: {
    type: Object as PropType<Texture>,
    default: "",
  },
  texture: {
    type: Object as PropType<Texture>,
    default: "",
  },
  distort: {
    type: Number,
    default: 0.4,
  },
  frequency: {
    type: Number,
    default: 4,
  },
  speed: {
    type: Number,
    default: 0.33,
  },
  surfaceDistort: {
    type: Number,
    default: 0.15,
  },
  surfaceFrequency: {
    type: Number,
    default: 1,
  },
  surfaceSpeed: {
    type: Number,
    default: 2,
  },
  numberOfWaves: {
    type: Number,
    default: 2,
  },
  surfacePoleAmount: {
    type: Number,
    default: 1,
  },
  gooPoleAmount: {
    type: Number,
    default: 10,
  },
  flatShading: {
    type: Boolean,
    default: false,
  },
  liveUpdate: {
    type: Boolean,
    default: false,
  },
});

const geometry = new IcosahedronGeometry(4, 200);

const material = new MeshStandardMaterial({
  metalness: props.metalness,
  roughness: props.roughness,
  map: props.texture,
  envMap: props.envMap,
  envMapIntensity: props.envMapIntensity,
  flatShading: props.flatShading,
});

const uniforms = {
  time: { value: 0 },
  surfaceTime: { value: 0 },

  uMousePosition: { value: new Vector2(0, 0) },

  distort: { value: props.distort },
  frequency: { value: props.frequency },
  speed: { value: props.speed },

  surfaceDistort: { value: props.surfaceDistort },
  surfaceFrequency: { value: props.surfaceFrequency },
  surfaceSpeed: { value: props.surfaceSpeed },
  numberOfWaves: { value: props.numberOfWaves },
  surfacePoleAmount: { value: props.surfacePoleAmount },
  gooPoleAmount: { value: props.gooPoleAmount },
};

material.onBeforeCompile = (shader) => {
  material.needsUpdate = true;
  shader.uniforms.time = uniforms.time;
  shader.uniforms.uMousePosition = uniforms.uMousePosition;

  shader.uniforms.metalness;

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

  shader.vertexShader = shader.vertexShader.replace(
    "#include <displacementmap_vertex>",
    `transformed = displacedPosition;`
  );

  // https://codepen.io/marco_fugaro/pen/xxZWPWJ?editors=1010
  shader.vertexShader = shader.vertexShader.replace(
    "#include <defaultnormal_vertex>",
    ShaderChunk.defaultnormal_vertex.replace(
      "vec3 transformedNormal = objectNormal;",
      `vec3 transformedNormal = displacedNormal;`
    )
  );
};

const meshWithMaterial = new Mesh(geometry, material);
meshWithMaterial.frustumCulled = false;

const { onLoop } = useRenderLoop();

onLoop(({ delta, elapsed }) => {
  //update uniforms
  if (props.liveUpdate) {
    material.needsUpdate = true;

    uniforms.frequency.value = props.frequency;
    uniforms.distort.value = props.distort;
    uniforms.surfaceDistort.value = props.surfaceDistort;
    uniforms.surfaceFrequency.value = props.surfaceFrequency;
    uniforms.surfacePoleAmount.value = props.surfacePoleAmount;
    uniforms.numberOfWaves.value = props.numberOfWaves;
    uniforms.surfaceSpeed.value = props.surfaceSpeed;
    uniforms.gooPoleAmount.value = props.gooPoleAmount;
    uniforms.speed.value = props.speed;

    material.metalness = props.metalness;
    material.roughness = props.roughness;
    material.flatShading = props.flatShading;
  }

  uniforms.time.value = elapsed * uniforms.speed.value;
  uniforms.surfaceTime.value = elapsed * uniforms.surfaceSpeed.value;
});
</script>

<style></style>
