import {
  Material,
  ShaderChunk,
  IcosahedronGeometry,
  MeshStandardMaterial,
  Mesh,
} from "three";

import displacement from "@/glsl/shaders/displacement.glsl";
import headers from "@/glsl/shaders/headers.glsl";

export const useDisplacement = (material: Material) => {
  const controls = useControls({
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
      value: 2.9,
      min: 0,
      max: 10,
    },
    surfaceDistort: {
      value: 1.5,
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
      value: 0.3,
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

  const uniforms = {
    time: { value: 0.1 },
    surfaceTime: { value: 0.1 },

    morphRatio: { value: controls.morphRatio.value.value },

    distort: { value: controls.distort.value.value },
    frequency: { value: controls.frequency.value.value },
    speed: { value: controls.speed.value.value },

    surfaceDistort: { value: controls.surfaceDistort.value.value },
    surfaceFrequency: { value: controls.surfaceFrequency.value.value },
    surfaceSpeed: { value: controls.surfaceSpeed.value.value },
    numberOfWaves: { value: controls.numberOfWaves.value.value },
    surfacePoleAmount: { value: controls.surfacePoleAmount.value.value },
    gooPoleAmount: { value: controls.gooPoleAmount.value.value },
  };

  const updateUniforms = (elapsed: number) => {
    uniforms.time.value = elapsed * uniforms.speed.value;
    uniforms.surfaceTime.value = elapsed * uniforms.surfaceSpeed.value;

    uniforms.morphRatio.value = controls.morphRatio.value.value;

    uniforms.speed.value = controls.speed.value.value;
    uniforms.surfaceSpeed.value = controls.surfaceSpeed.value.value;

    uniforms.distort.value = controls.distort.value.value;
    uniforms.frequency.value = controls.frequency.value.value;
    uniforms.gooPoleAmount.value = controls.gooPoleAmount.value.value;
    uniforms.surfaceDistort.value = controls.surfaceDistort.value.value;
    uniforms.surfaceFrequency.value = controls.surfaceFrequency.value.value;
    uniforms.numberOfWaves.value = controls.numberOfWaves.value.value;
    uniforms.surfacePoleAmount.value = controls.surfacePoleAmount.value.value;
  };

  const attachShader = () => {
    material.onBeforeCompile = (shader: any) => {
      shader.uniforms.time = uniforms.time;

      shader.uniforms.morphRatio = uniforms.morphRatio;

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

            vec3 pStart = positionStart;
            vec3 pEnd = positionEnd;

            float distRatio = sin(morphRatio * PI);

            // Calculate morphed normal
            vec3 normal = normalize(mix(normalStart, normalEnd, morphRatio));
    
            // Calculate morphed position
            vec3 pos = mix(pStart, pEnd, morphRatio);
        `
      );

      shader.vertexShader = shader.vertexShader.replace(
        "#include <displacementmap_vertex>",

        `#include <displacementmap_vertex>
        transformed = pos + normalize(pos) * f(pos);`
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

    material.needsUpdate = true;
  };

  const resetShader = () => {
    material.onBeforeCompile = (shader) => {};
  };

  return {
    resetShader,
    attachShader,
    updateUniforms,
    controls,
    uniforms,
  };
};

export const useBlob = () => {
  const geometry = new IcosahedronGeometry(4, 137);
  const material = new MeshStandardMaterial({
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 0.2,
    flatShading: true,
  });

  const mesh = new Mesh(geometry, material);

  return {
    mesh,
    geometry,
    material,
  };
};
