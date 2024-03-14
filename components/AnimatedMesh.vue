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
import { distortPingPong } from "~/utils/animate";

const envMap = await useTexture(["/img/textures/envmap.jpg"]);
const normalMap = await useTexture(["/img/textures/earth-normalmap.jpg"]);

const { material, geometry, mesh: blobMesh } = useBlob();

const { loadBrain } = useBrain();
loadBrain(material, geometry);

envMap.mapping = EquirectangularReflectionMapping;
material.envMap = envMap;

const { updateUniforms, attachShader, controls } = useDisplacement(material);

attachShader();

type AnimatedObjectState = {
  properties?: {
    rotation?: Vector3;
    position?: Vector3;
    scale?: Vector3;
  };
  uniforms: {
    [key: string]: {
      value: number;
      easing?: (v: number) => number;
      duration?: number;
    };
  };
};

const blobState: AnimatedObjectState = {
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

const brainState: AnimatedObjectState = {
  properties: {
    rotation: new Vector3(0, -6.6, 0),
  },
  uniforms: {
    morphRatio: {
      value: 1,
    },
    surfaceDistort: {
      value: 1.5,
    },
  },
};

const planetState: AnimatedObjectState = {
  uniforms: {
    morphRatio: {
      value: 0,
      duration: 600,
    },
    surfaceDistort: {
      value: 0,
      easing: cubicBezier(1, 0.01, 0.4, 1.07),
    },
  },
};

const ANIMATION_DURATION = 2500;

const animateUniforms = (uniforms: AnimatedObjectState["uniforms"]) => {
  Object.keys(uniforms).forEach((key) => {
    animate({
      from: controls[key].value.value,
      to: uniforms[key].value,
      duration: uniforms[key].duration || ANIMATION_DURATION,
      ease: uniforms[key].easing || cubicBezier(0, 0.42, 0, 1),
      onUpdate: (value) => {
        controls[key].value.value = value;
      },
    });
  });
};

const animateProperties = (properties: AnimatedObjectState["properties"]) => {
  if (!properties) return;
  Object.keys(properties).forEach((key) => {
    const propertyKey = key as keyof AnimatedObjectState["properties"];
    Object.keys(properties[propertyKey]).forEach((coord) => {
      animate({
        from: blobMesh[propertyKey][coord],
        to: properties[propertyKey][coord],
        duration: ANIMATION_DURATION,
        ease: easeOut,
        onUpdate: (value) => {
          blobMesh[propertyKey][coord] = value;
        },
      });
    });
  });
};

const morphToBrain = () => {
  material.normalMap = null;
  material.normalScale = new Vector2(0, 0);

  animateUniforms(brainState.uniforms);
  animateProperties(brainState.properties);

  distortPingPong(controls.distort.value);

  isRotating.value = false;
};

const morphToBlob = () => {
  material.normalMap = null;
  material.needsUpdate = true;
  material.normalScale = new Vector2(0, 0);

  animateUniforms(blobState.uniforms);
  animateProperties(blobState.properties);

  isRotating.value = false;
};

const morphToPlanet = () => {
  animateUniforms(planetState.uniforms);
  // animateProperties(planetState.properties);
  material.normalMap = normalMap;
  material.needsUpdate = true;

  distortPingPong(controls.distort.value);

  animate({
    from: 0,
    to: 1,
    duration: ANIMATION_DURATION,
    ease: easeOut,
    onUpdate: (value) => {
      material.normalScale = new Vector2(value, value);
    },
  });

  isRotating.value = true;
};

const route = useRouter().currentRoute;
const isRotating = ref(false);
const { onLoop } = useRenderLoop();

onLoop(({ elapsed, delta, clock }) => {
  updateUniforms(elapsed);

  if (isRotating.value) {
    blobMesh.rotateY(0.002 % Math.PI);
  }
});

watch(
  route,
  () => {
    if (route.value.name == "index") {
      morphToBlob();
    } else if (route.value.name == "developers") {
      morphToBrain();
    } else if (route.value.name == "ecosystem") {
      morphToPlanet();
    }
  },
  { immediate: true }
);
</script>

<style></style>
