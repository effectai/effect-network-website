<template>
  <primitive :object="blobMesh" />
</template>

<script setup lang="ts">
import {
  AnimationMixer,
  LoopOnce,
  LoopPingPong,
  Float32BufferAttribute,
} from "three";

import studio from "@theatre/studio";
import { getProject, types } from "@theatre/core";

import { useBlob } from "~/composables/useThreeControls";

studio.initialize();

const { scene, nodes } = await useGLTF("/models/scene.gltf", {
  draco: true,
});

const project = getProject("Blob Animation");
const sheet = project.sheet("Animation I");

const { material, geometry, mesh: blobMesh } = useBlob();

const brain = nodes["finalstlcleanermaterialmergergles"];

const brainBufferGeometry = mergeModel(brain, 0.1);

//apply same material to the brain
brain.material = material;
brain.scale.set(0.1, 0.1, 0.1);

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
  new Float32BufferAttribute(brainBufferGeometry.attributes.position.array, 3)
);

geometry.setAttribute(
  "normalStart",
  new Float32BufferAttribute(geometry.attributes.normal.array, 3)
);

geometry.setAttribute(
  "normalEnd",
  new Float32BufferAttribute(brainBufferGeometry.attributes.normal.array, 3)
);

const { uniforms, updateUniforms, resetShader, attachShader, controls } =
  useDisplacement(material);

const { onLoop } = useRenderLoop();

attachShader();

const animationBasicMaterial = sheet.object(
  "Basic Material",
  {
    morphRatio: types.number(0, { range: [0, 1] }),
    rotation: types.compound({
      x: types.number(blobMesh.rotation.x, { range: [-2, 2] }),
      y: types.number(blobMesh.rotation.y, { range: [-2, 2] }),
      z: types.number(blobMesh.rotation.z, { range: [-2, 2] }),
    }),
  },
  { reconfigure: true }
);

project.ready.then(() => {
  animationBasicMaterial.onValuesChange((values) => {
    uniforms.morphRatio.value = values.morphRatio;
  });
});

onLoop(({ elapsed, delta, clock }) => {
  //only play animation once
  updateUniforms(elapsed);
  //rotate
});
</script>

<style></style>
