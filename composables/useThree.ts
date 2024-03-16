import {
  Material,
  ShaderChunk,
  IcosahedronGeometry,
  MeshStandardMaterial,
  Mesh,
  Float32BufferAttribute,
} from "three";

import displacement from "@/glsl/shaders/displacement.glsl";
import headers from "@/glsl/shaders/headers.glsl";

export const useDisplacement = (material: Material) => {
  const metalness = ref(0.8);
  const roughness = ref(0.2);
  const speed = ref(0.2);
  const gooPoleAmount = ref(12);
  const distort = ref(0.3);
  const frequency = ref(2.9);
  const surfaceDistort = ref(1.5);
  const surfaceFrequency = ref(1.65);
  const surfaceSpeed = ref(0.8);
  const numberOfWaves = ref(1);
  const surfacePoleAmount = ref(0.3);
  const morphRatio = ref(0);

  const uniforms = {
    time: { value: 0.1 },
    surfaceTime: { value: 0.1 },

    morphRatio: { value: morphRatio.value },

    distort: { value: distort.value },
    frequency: { value: frequency.value },
    speed: { value: speed.value },

    surfaceDistort: { value: surfaceDistort.value },
    surfaceFrequency: { value: surfaceFrequency.value },
    surfaceSpeed: { value: surfaceSpeed.value },
    numberOfWaves: { value: numberOfWaves.value },
    surfacePoleAmount: { value: surfacePoleAmount.value },
    gooPoleAmount: { value: gooPoleAmount.value },
  };

  const updateUniforms = (elapsed: number) => {
    uniforms.time.value = elapsed * uniforms.speed.value;
    uniforms.surfaceTime.value = elapsed * uniforms.surfaceSpeed.value;

    uniforms.morphRatio.value = morphRatio.value;

    uniforms.distort.value = distort.value;
    uniforms.frequency.value = frequency.value;
    uniforms.surfaceDistort.value = surfaceDistort.value;
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
        `transformed = pos + normalize(pos) * f(pos);`
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
    uniforms,

    controls: {
      metalness,
      roughness,
      speed,
      gooPoleAmount,
      distort,
      frequency,
      surfaceDistort,
      surfaceFrequency,
      surfaceSpeed,
      numberOfWaves,
      surfacePoleAmount,
      morphRatio,
    },
  };
};

export const useBrain = () => {
  const loadBrain = async (
    material: Material,
    geometry: IcosahedronGeometry
  ) => {
    const brainData = useGLTF("/models/brain.glb", {
      draco: true,
    }).then(({ scene, nodes }) => {
      const brain = nodes["finalstlcleanermaterialmergergles"];
      const brainBufferGeometry = mergeAndExtractModel(brain, 0.05);

      brain.material = material;

      brain.traverse((child) => {
        if (child.isMesh) {
          child.material = material;
        }
      });

      geometry.setAttribute(
        "positionStart",
        new Float32BufferAttribute(geometry.attributes.position.array, 3)
      );

      geometry.setAttribute(
        "positionEnd",
        new Float32BufferAttribute(
          brainBufferGeometry.attributes.position.array,
          3
        )
      );
    });
  };

  return {
    loadBrain,
  };
};

export const useBlob = () => {
  const geometry = new IcosahedronGeometry(4, 136);
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
