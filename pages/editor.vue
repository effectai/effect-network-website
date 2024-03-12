<template>
  <div>
    <ClientOnly>
      <TresLeches style="z-index: 999; position: absolute" />
    </ClientOnly>

    <ClientOnly>
      <TresCanvas preset="realistic" ref="canvas" :alpha="true" window-size>
        <TresPerspectiveCamera ref="camera" visible :position="[-6, 0, 10]" />

        <OrbitControls />
        <TresAmbientLight :color="'#101D56'" :intensity="2" />

        <TresSpotLight
          v-light-helper
          :angle="Math.PI / 4"
          :distance="40"
          :penumbra="0.4"
          :decay="0.2"
          :intensity="1"
          :position="[-13, -2, 30]"
          :color="'#ffffff'"
        />

        <Suspense>
          <BrainAnimation />
        </Suspense>
      </TresCanvas>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { vLightHelper } from "@tresjs/cientos";

definePageMeta({ layout: "empty" });

useControls({});
</script>

<style></style>
