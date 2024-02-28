<template>
  <div>
    <HeroSection />
    <SimpleSection
      class="p-0"
      data-aos="fade-left"
      data-aos-delay="300"
      id="news"
    >
      <NewsCardList :posts="featuredPosts" />
    </SimpleSection>
    <SimpleSection
      title="Ecosystem Spotlight"
      subtitle="The latest updates on the projects built within the Effect.AI Ecosystem"
    >
      <DappCardList :dapps="featuredDapps" />
      <div class="is-flex is-justify-content-center mt-5"></div>
    </SimpleSection>
  </div>
</template>

<script setup lang="ts">
import posts from "@/content/data/posts.json";
import dapps from "@/content/data/dapps.json";

const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);
const featuredDapps = dapps.filter((dapp) => dapp.featured);

useHead({
  title: "Effect Network | Home",
  meta: [
    {
      hid: "description",
      name: "description",
      content: `Effect.AI is a decentralized network for artificial intelligence and AI related services. We are creating a platform that will allow anyone in the world to contribute to AI development.`,
    },
  ],
  script: [
    { src: "https://files.coinmarketcap.com/static/widget/currency.js" },
  ],
});
</script>

<style lang="scss">
#news {
  margin-top: -220px;

  @include mobile {
    margin-top: -300px;
  }
}
</style>
