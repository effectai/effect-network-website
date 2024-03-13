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

//load textures
const gradient = await useTexture(["/img/gradients/zinc.jpg"]);
const envMap = await useTexture(["/img/textures/envmap.jpg"]);
const normalMap = await useTexture(["/img/textures/earth-normalmap.jpg"]);

//TODO::reduce brain poly's..
const { nodes } = await useGLTF("/models/brain.glb", {
  draco: true,
});

const { material, geometry, mesh: blobMesh } = useBlob();

material.map = gradient;
envMap.mapping = EquirectangularReflectionMapping;
material.envMap = envMap;

const brain = nodes["finalstlcleanermaterialmergergles"];
const brainBufferGeometry = mergeAndExtractModel(brain, 0.05);

brain.material = material;

brain.traverse((child) => {
  if (child.isMesh) {
    child.material = material;
  }
});

//set morph positions for shader
geometry.setAttribute(
  "positionStart",
  new Float32BufferAttribute(geometry.attributes.position.array, 3)
);

geometry.setAttribute(
  "positionEnd",
  new Float32BufferAttribute(brainBufferGeometry.attributes.position.array, 3)
);

const { updateUniforms, resetShader, attachShader, controls } =
  useDisplacement(material);

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
    };
  };
};

const brainState: AnimatedObjectState = {
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

const planetState: AnimatedObjectState = {
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

const animateUniforms = (uniforms: AnimatedObjectState["uniforms"]) => {
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

  material.bumpScale = 5000;
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
const { onLoop } = useRenderLoop();

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
