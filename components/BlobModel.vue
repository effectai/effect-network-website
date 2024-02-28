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
  texture: {
    type: Object as PropType<Texture>,
    default: "",
  },
});

const geometry = new IcosahedronGeometry(5, 65);
const material = new MeshStandardMaterial({
  metalness: 1,
  roughness: 0.5,
  map: props.texture,
});

material.flatShading = true;

const uniforms = {
  time: { value: 0 },
  uMousePosition: { value: new Vector2(0, 0) },
  distort: { value: 0.4 },
  frequency: { value: 4 },
  speed: { value: 0.33 },
  surfaceDistort: { value: 0.15 },
  surfaceFrequency: { value: 1 },
  surfaceTime: { value: 0 },
  surfaceSpeed: { value: 2 },
  numberOfWaves: { value: 2 },
  surfacePoleAmount: { value: 1 },
  gooPoleAmount: { value: 10 },
};

material.onBeforeCompile = (shader) => {
  shader.uniforms.time = uniforms.time;
  shader.uniforms.uMousePosition = uniforms.uMousePosition;

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
  // shader.fragmentShader = fragmentShader + shader.fragmentShader;
};

const meshWithMaterial = new Mesh(geometry, material);
meshWithMaterial.position.x = 5;

const { onLoop } = useRenderLoop();

onLoop(({ delta, elapsed }) => {
  uniforms.time.value = elapsed * uniforms.speed.value;
  uniforms.surfaceTime.value = elapsed * uniforms.surfaceSpeed.value;
});
</script>

<style></style>
