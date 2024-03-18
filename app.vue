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

const description =
  "Effect AI is the data network for training next-gen transparent AI models. Join the workforce by collecting and enriching datasets and get paid instantly.";

useSeoMeta({
  title: "Effect AI",
  ogTitle: "Effect AI",
  twitterTitle: "Effect AI",
  ogDescription: description,
  twitterDescription: description,
  description,
  ogImage: "https://effect.ai/logo_icon.png",
  twitterImage: "https://effect.ai/logo_icon.png",

  ogUrl: "https://effect.ai",
  ogSiteName: "Effect AI",
  ogType: "website",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
