<template>
  <primitive :object="blobMesh" />
</template>

<script setup lang="ts">
import {
  Float32BufferAttribute,
  EquirectangularReflectionMapping,
  Texture,
  Vector2,
} from "three";

import { useBlob } from "~/composables/useThreeControls";
import { useTexture } from "@tresjs/core";
import { animate, cubicBezier, easeOut } from "popmotion";

const gradient = await useTexture(["../gradients/zinc.jpg"]);
const envMap = await useTexture(["../envmap.jpg"]);

//TODO::reduce brain poly's..
const { nodes } = await useGLTF("/models/scene.gltf", {
  draco: true,
});

const { material, geometry, mesh: blobMesh } = useBlob();

material.map = gradient;
envMap.mapping = EquirectangularReflectionMapping;
material.envMap = envMap;
material.needsUpdate = true;

const brain = nodes["finalstlcleanermaterialmergergles"];
const brainBufferGeometry = mergeModel(brain, 0.05);
brain.material = material;

brain.traverse((child) => {
  if (child.isMesh) {
    child.material = material;
  }
});

const { morphToBrain } = useControls({
  MorphToBlob: {
    type: "button",
    label: "Morph To Blob",
    onClick: () => {
      morphToBlob();
    },
  },
  morphToPlanet: {
    type: "button",
    label: "Morph To Planet",
    onClick: () => {
      morphToPlanet();
    },
  },
  morphToBrain: {
    type: "button",
    label: "Morph To Brain",
    onClick: () => {
      morphToBrainAnimation();
    },
  },
});

geometry.setAttribute(
  "positionStart",
  new Float32BufferAttribute(geometry.attributes.position.array, 3)
);

geometry.setAttribute(
  "positionEnd",
  new Float32BufferAttribute(brainBufferGeometry.attributes.position.array, 3)
);

const { uniforms, updateUniforms, resetShader, attachShader, controls } =
  useDisplacement(material);

const { onLoop } = useRenderLoop();

attachShader();

const normalMap = await useTexture(["/textures/earth-normalmap.jpg"]);

type BlobState = {
  morphRatio: number;
  distort: number;
  surfaceDistort?: number;
  normalMap?: Texture;
};

const brainState: BlobState = {
  morphRatio: 1,
  distort: 0,
};

const blobState: BlobState = {
  morphRatio: 0,
  distort: 0.3,
};

const planetState: BlobState = {
  morphRatio: 0,
  distort: 0,
  surfaceDistort: 0,
  normalMap,
};

const ANIMATION_DURATION = 2000;

const morphToBrainAnimation = () => {
  material.normalMap = null;
  material.needsUpdate = true;
  material.normalScale = new Vector2(0, 0);

  animate({
    from: controls.morphRatio.value.value,
    to: brainState.morphRatio,
    duration: ANIMATION_DURATION,
    ease: cubicBezier(0, 0.42, 0, 1),
    onUpdate: (morphRatio) => {
      controls.morphRatio.value.value = morphRatio;
    },
  });

  animate({
    from: controls.distort.value.value,
    to: brainState.distort,
    duration: ANIMATION_DURATION,
    ease: cubicBezier(0, 0.1, 0, 1),
    onUpdate: (distort) => {
      controls.distort.value.value = distort;
    },
  });
};

const morphToBlob = () => {
  material.normalMap = null;
  material.needsUpdate = true;
  material.normalScale = new Vector2(0, 0);

  animate({
    from: controls.morphRatio.value.value,
    to: blobState.morphRatio,
    duration: ANIMATION_DURATION,
    ease: cubicBezier(0, 0.42, 0, 1),
    onUpdate: (morphRatio) => {
      controls.morphRatio.value.value = morphRatio;
    },
  });

  animate({
    from: controls.distort.value.value,
    to: blobState.distort,
    duration: ANIMATION_DURATION,
    ease: cubicBezier(0, 0.42, 0, 1),
    onUpdate: (distort) => {
      controls.distort.value.value = distort;
    },
  });
};

const morphToPlanet = () => {
  animate({
    from: controls.morphRatio.value.value,
    to: planetState.morphRatio,
    duration: ANIMATION_DURATION,
    ease: cubicBezier(0, 0.42, 0, 1),
    onUpdate: (morphRatio) => {
      controls.morphRatio.value.value = morphRatio;
    },
  });

  animate({
    from: controls.distort.value.value,
    to: planetState.distort,
    duration: ANIMATION_DURATION,
    ease: cubicBezier(0.2, 1.11, 0.87, -0.3),
    onUpdate: (distort) => {
      controls.distort.value.value = distort;
    },
  });

  animate({
    from: controls.surfaceDistort.value.value,
    to: planetState.surfaceDistort,
    duration: ANIMATION_DURATION,
    ease: cubicBezier(0, 0.42, 0, 1),
    onUpdate: (surfaceDistort) => {
      controls.surfaceDistort.value.value = surfaceDistort;
    },
  });

  material.normalMap = normalMap;

  animate({
    from: 0,
    to: 1,
    duration: ANIMATION_DURATION,
    ease: easeOut,
    onUpdate: (value) => {
      material.normalScale = new Vector2(value, value);
      material.needsUpdate = true;
    },
  });
};

onLoop(({ elapsed, delta, clock }) => {
  updateUniforms(elapsed);
});

const route = useRouter().currentRoute;

watch(
  route,
  () => {
    if (route.value.name == "index") {
      morphToBlob();
    } else if (route.value.name == "developers") {
      morphToBrainAnimation();
    } else if (route.value.name == "ecosystem") {
      morphToPlanet();
    }
  },
  { immediate: true }
);
</script>

<style></style>
