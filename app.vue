<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
onMounted(() => {
  useNuxtApp().$aos().init({
    once: true,
  });
});
</script>
