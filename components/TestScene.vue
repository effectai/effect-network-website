<template>
  <div class="is-fullheight">
    <ClientOnly>
      <TresCanvas preset="realistic" ref="canvas" :alpha="true" shadows>
        <TresPerspectiveCamera ref="camera" visible :position="[-6, 0, 30]" />

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

        <primitive :object="meshWithMaterial" />
      </TresCanvas>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { TresCanvas, useRenderLoop } from "@tresjs/core";
import {
  IcosahedronGeometry,
  Mesh,
  MeshStandardMaterial,
  Vector2,
} from "three";
import { getProject, types } from "@theatre/core";
import projectState from "@/public/animation.json";
import studio from "@theatre/studio";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const texture = ref<any>(null);
const gradient = ref<any>(null);

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
} = useThreeControls();

const material = ref<any>(
  new MeshStandardMaterial({
    metalness: metalness.value.value,
    roughness: roughness.value.value,
    flatShading: true,
  })
);

const uniforms = {
  time: { value: 0.1 },
  surfaceTime: { value: 0.1 },

  uMousePosition: { value: new Vector2(0, 0) },

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

const morphTargets = [];
const brainGeometry = ref(null);

onMounted(async () => {
  //load brain
  const { scene, nodes } = await useGLTF("/models/scene.gltf");
  const brain = nodes["finalstlcleanermaterialmergergles"];
  console.log(brain);

  const brainPart = brain.children[0] as Mesh;
  brainGeometry.value = brainPart.geometry;

  const customVertices = brainGeometry.value.attributes.position.array;

  morphTargets.push({ name: "targetGeometry", vertices: customVertices });
});

const geometry = new IcosahedronGeometry(4, 200);
const meshWithMaterial = new Mesh(geometry, material.value);
useDisplacement(material.value, uniforms);
const { onLoop } = useRenderLoop();

const animationDuration = 10;
const totalFrames = 60;

let currentFrame = 0;

onLoop(({ elapsed, delta, clock }) => {
  uniforms.distort.value = distort.value.value;
  uniforms.frequency.value = frequency.value.value;
  uniforms.gooPoleAmount.value = gooPoleAmount.value.value;
  uniforms.surfaceDistort.value = surfaceDistort.value.value;
  uniforms.surfaceFrequency.value = surfaceFrequency.value.value;
  uniforms.numberOfWaves.value = numberOfWaves.value.value;
  uniforms.surfacePoleAmount.value = surfacePoleAmount.value.value;

  uniforms.time.value = elapsed * uniforms.speed.value;
  uniforms.surfaceTime.value = elapsed * uniforms.surfaceSpeed.value;
});

// Create a project for the animation
const project = getProject("THREE.js x Theatre.js", {
  state: projectState,
  assets: {
    baseUrl: "/assets",
  },
});

// Play the animation on repeat
// Create a sheet
const sheet = project.sheet("Animated scene");

const geometrySheet = sheet.object("Geometry", {
  geometry: types.string("IcosahedronGeometry"),
});

const blobSheet = sheet.object("Displacement", {
  metalness: types.number(material.value.metalness, { range: [0, 1] }),
  roughness: types.number(material.value.roughness, { range: [0, 1] }),

  distort: types.number(distort.value.value, { range: [0, 5] }),
  frequency: types.number(frequency.value.value, { range: [0, 5] }),
  speed: types.number(speed.value.value, { range: [0, 5] }),
  surfaceSpeed: types.number(surfaceSpeed.value.value, { range: [0, 5] }),
  surfaceDistort: types.number(surfaceDistort.value.value, { range: [0, 5] }),
  surfaceFrequency: types.number(surfaceFrequency.value.value, {
    range: [0, 5],
  }),

  bumpScale: types.number(material.value.bumpScale, { range: [0, 20] }),
  normalScale: types.number(1, { range: [0, 1] }),
  rotation: types.compound({
    x: types.number(meshWithMaterial.rotation.x, { range: [-2, 2] }),
    y: types.number(meshWithMaterial.rotation.y, { range: [-2, 2] }),
    z: types.number(meshWithMaterial.rotation.z, { range: [-2, 2] }),
  }),
});

// creaate second sheet
const textureSheet = sheet.object("Textures", {
  normalTexture: types.image("", { label: "normalTexture" }),
  texture: types.image("", { label: "texture" }),
  bumpTexture: types.image("", { label: "bumpTexture" }),
});

project.ready.then(() => {
  geometrySheet.onValuesChange(async (values) => {
    // if (!customVertices || customVertices.length == 0) return;
  });

  textureSheet.onValuesChange(async (values) => {
    const normalTextureUrl = project.getAssetUrl(values.normalTexture);
    const textureUrl = project.getAssetUrl(values.texture);
    const bumpTextureUrl = project.getAssetUrl(values.bumpTexture);

    if (normalTextureUrl) {
      material.value.normalMap = await useTexture([normalTextureUrl]);
    } else {
      material.value.normalMap = null;
    }

    if (textureUrl) {
      material.value.map = await useTexture([textureUrl]);
    } else {
      material.value.map = null;
    }

    if (bumpTextureUrl) {
      material.value.bumpMap = await useTexture([bumpTextureUrl]);
    } else {
      material.value.bumpMap = null;
    }

    material.value.needsUpdate = true;
  });

  blobSheet.onValuesChange(async (values) => {
    const { x, y, z } = values.rotation;

    material.value.metalness = values.metalness;
    material.value.roughness = values.roughness;

    material.value.bumpScale = values.bumpScale;

    distort.value.value = values.distort;
    frequency.value.value = values.frequency;
    speed.value.value = values.speed;
    surfaceSpeed.value.value = values.surfaceSpeed;
    surfaceDistort.value.value = values.surfaceDistort;
    surfaceFrequency.value.value = values.surfaceFrequency;

    material.value.normalScale.set(values.normalScale, values.normalScale);
  });
});

studio.initialize();

//on route change
project.ready.then(() => {
  useSetSequence(sheet.sequence);
});
</script>

<style></style>
