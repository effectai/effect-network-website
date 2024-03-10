import { Material, ShaderChunk } from "three";

import displacement from "@/glsl/shaders/displacement.glsl";
import headers from "@/glsl/shaders/headers.glsl";

export const useDisplacement = (material: Material, uniforms: any) => {
  material.onBeforeCompile = (shader: any) => {
    shader.uniforms.time = uniforms.time;

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

    //fix normals: https://codepen.io/marco_fugaro/pen/xxZWPWJ?editors=1010
    shader.vertexShader = shader.vertexShader.replace(
      "#include <defaultnormal_vertex>",
      ShaderChunk.defaultnormal_vertex.replace(
        "vec3 transformedNormal = objectNormal;",
        `vec3 transformedNormal = displacedNormal;`
      )
    );
  };
};

export const useThreeControls = () => {
  return useControls({
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
};
