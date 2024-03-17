<template>
  <primitive :object="blobMesh" />
</template>

<script setup lang="ts">
import { EquirectangularReflectionMapping, Vector2, Vector3 } from "three";

import { useTexture } from "@tresjs/core";
import { animate, cubicBezier, easeOut } from "popmotion";
import { distortPingPong } from "~/utils/animate";

const envMap = await useTexture(["img/textures/envmap.jpg"]);
envMap.mapping = EquirectangularReflectionMapping;
const normalMap = await useTexture(["img/textures/earth-normalmap.jpg"]);

const { material, geometry, mesh: blobMesh } = useBlob();
material.envMap = envMap;
blobMesh.position.set(6, 0, 0);
const { loadBrain } = useBrain();
loadBrain(material, geometry);

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

const ANIMATION_DURATION = 2500;

const blobState: AnimatedObjectState = {
  properties: {
    rotation: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
  },
  uniforms: {
    morphRatio: {
      value: 0,
      duration: 2000,
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
    rotation: new Vector3(0, -0.3, 0),
    position: new Vector3(5, 0, 0),
    scale: new Vector3(1, 1, 1),
  },
  uniforms: {
    morphRatio: {
      value: 1,
      duration: 2000,
    },
    surfaceDistort: {
      value: 1.5,
    },
  },
};

const planetState: AnimatedObjectState = {
  properties: {
    scale: new Vector3(1.3, 1.3, 1.3),
    position: new Vector3(6, 0, 0),
  },
  uniforms: {
    morphRatio: {
      value: 0,
      duration: 2000,
    },
    surfaceDistort: {
      value: 0,
      easing: cubicBezier(1, 0.01, 0.4, 1.07),
    },
  },
};

const animateUniforms = (uniforms: AnimatedObjectState["uniforms"]) => {
  const stopFns = [];

  Object.keys(uniforms).forEach((key) => {
    const anim = animate({
      from: controls[key].value,
      to: uniforms[key].value,
      duration: uniforms[key].duration || ANIMATION_DURATION,
      ease: uniforms[key].easing || cubicBezier(0, 0.42, 0, 1),
      onUpdate: (value) => {
        controls[key].value = value;
      },
    });

    stopFns.push(anim.stop);
  });

  return {
    stopUniforms: () => {
      stopFns.forEach((fn) => fn());
    },
  };
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
  const { stopUniforms } = animateUniforms(brainState.uniforms);

  material.normalMap = null;
  material.normalScale = new Vector2(0, 0);

  animateProperties(brainState.properties);
  const { stopAll: stopPingPong } = distortPingPong(controls.distort);

  isRotating.value = false;

  const stopAll = () => {
    stopUniforms();
    stopPingPong();
  };

  return stopAll;
};

const morphToBlob = () => {
  const { stopUniforms } = animateUniforms(blobState.uniforms);

  animateProperties(blobState.properties);
  // const { stopAll: stopPingPong } = distortPingPong(controls.distort, 0.3);

  material.normalMap = null;
  material.normalScale = new Vector2(0, 0);
  material.needsUpdate = true;

  isRotating.value = false;

  const stopAll = () => {
    stopUniforms();
    // stopPingPong();
  };

  return stopAll;
};

const morphToPlanet = () => {
  const { stopUniforms } = animateUniforms(planetState.uniforms);

  animateProperties(planetState.properties);
  material.normalMap = normalMap;
  material.needsUpdate = true;

  const { stopAll: stopPingPong } = distortPingPong(controls.distort);

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

  const stopAll = () => {
    stopUniforms();
    stopPingPong();
  };

  return stopAll;
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

const stopAllCurrent: Ref<Function | null> = ref(null);

const handleRouteChange = () => {
  if (stopAllCurrent.value) {
    stopAllCurrent.value();
  }

  switch (route.value.name) {
    case "index":
      stopAllCurrent.value = morphToBlob();
      break;
    case "developers":
      stopAllCurrent.value = morphToBrain();
      break;
    case "ecosystem":
      stopAllCurrent.value = morphToPlanet();
      break;
    default:
      break;
  }
};

watch(route, handleRouteChange, { immediate: true });
</script>

<style></style>
