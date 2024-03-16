<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
onMounted(() => {
  const nuxtApp = useNuxtApp();

  useNuxtApp().$aos().init({
    once: true,
  });

  nuxtApp.hook("page:finish", () => {
    window.scrollTo(0, 0);
  });
});
</script>
