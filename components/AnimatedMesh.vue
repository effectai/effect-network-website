<template>
  <primitive :object="blobMesh" />
</template>

<script setup lang="ts">
import {
  Float32BufferAttribute,
  EquirectangularReflectionMapping,
  Texture,
  Vector2,
  Vector3,
} from "three";

import { useBlob } from "~/composables/useThreeControls";
import { useTexture } from "@tresjs/core";
import { animate, cubicBezier, easeOut } from "popmotion";
import blob from "~/pages/blob.vue";

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
const brainBufferGeometry = mergeAndExtractModel(brain, 0.05);

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
  properties?: {
    rotation?: Vector3;
    position?: Vector3;
    scale?: Vector3;
  };
  uniforms: {
    [key: string]: {
      value: number;
      easing?: (v: number) => number;
    };
  };
};

const brainState: BlobState = {
  properties: {
    rotation: new Vector3(0, -6.6, 0),
  },
  uniforms: {
    morphRatio: {
      value: 1,
    },
    distort: {
      value: 0,
    },
    surfaceDistort: {
      value: 1.5,
    },
  },
};

const blobState: BlobState = {
  properties: {
    rotation: new Vector3(0, 0, 0),
  },
  uniforms: {
    morphRatio: {
      value: 0,
    },
    distort: {
      value: 0.3,
    },
    surfaceDistort: {
      value: 1.5,
    },
  },
};

const planetState: BlobState = {
  uniforms: {
    morphRatio: {
      value: 0,
    },
    distort: {
      value: 0,
      easing: cubicBezier(0.31, -1.33, 0.37, 1.07),
    },
    surfaceDistort: {
      value: 0,
      easing: cubicBezier(1, 0.01, 0.4, 1.07),
    },
  },
};

const ANIMATION_DURATION = 2500;

const animateUniforms = (uniforms: BlobState["uniforms"]) => {
  Object.keys(uniforms).forEach((key) => {
    animate({
      from: controls[key].value.value,
      to: uniforms[key].value,
      duration: ANIMATION_DURATION,
      ease: uniforms[key].easing || cubicBezier(0, 0.42, 0, 1),
      onUpdate: (value) => {
        controls[key].value.value = value;
      },
    });
  });
};

const animateProperties = (properties: BlobState["properties"]) => {
  Object.keys(properties).forEach((key) => {
    Object.keys(properties[key]).forEach((coord) => {
      animate({
        from: blobMesh[key][coord],
        to: properties[key][coord],
        duration: ANIMATION_DURATION,
        ease: easeOut,
        onUpdate: (value) => {
          blobMesh[key][coord] = value;
        },
      });
    });
  });
};

const morphToBrainAnimation = () => {
  material.normalMap = null;
  material.needsUpdate = true;
  material.normalScale = new Vector2(0, 0);

  animateUniforms(brainState.uniforms);
  animateProperties(brainState.properties);
  isRotating.value = false;
};

const morphToBlob = () => {
  material.normalMap = null;
  material.needsUpdate = true;

  material.normalScale = new Vector2(0, 0);

  animateUniforms(blobState.uniforms);
  animateProperties(blobState.properties);

  geometry.computeVertexNormals();

  isRotating.value = false;
};

const morphToPlanet = () => {
  animateUniforms(planetState.uniforms);
  // animateProperties(planetState.properties);

  material.normalMap = normalMap;
  material.map = null;
  material.needsUpdate = true;

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

  isRotating.value = true;
};

const route = useRouter().currentRoute;
const isRotating = ref(false);

onLoop(({ elapsed, delta, clock }) => {
  updateUniforms(elapsed);

  if (isRotating.value) {
    blobMesh.rotation.y += 0.005;
  }
});

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
