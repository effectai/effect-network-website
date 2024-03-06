<template>
  <div>
    <ClientOnly>
      <TresLeches />
    </ClientOnly>
    <BlobScene />
  </div>
</template>

<script setup lang="ts">
import { TresLeches } from "@tresjs/leches";

definePageMeta({
  layout: "empty",
});
</script>

<style></style>
