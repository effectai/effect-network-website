<template>
  <div>
    <HeroSection
      style="min-height: 750px"
      :title="'Decentralizing Artificial Intelligence'"
    >
      <template #subtitle>
        <p class="subtitle pr-6" data-aos="fade-up" data-aos-delay="150">
          <span class="pr-6 has-text-black">
            Bringing AI To the Masses, the Decentralized Scalable Workforce
            On-Demand. Enabling the Birth of next-gen AI models.</span
          >
        </p>
      </template>

      <template #footer>
        <div
          class="is-flex is-size-3 is-align-items-center is-primary has-text-primary is-in-front"
          data-aos="fade-left"
          data-aos-delay="550"
        >
          <a
            target="_blank"
            href="https://app.effect.network"
            class="button is-primary mr-5"
            >Launch App</a
          >
          <div>
            <SocialBar
              class="has-text-primary"
              :socials="[github, twitter, discord]"
            />
          </div>
        </div>
      </template>
    </HeroSection>

    <SimpleSection
      class="p-0"
      data-aos="fade-left"
      data-aos-delay="300"
      id="news"
    >
      <NewsCardList :posts="featuredPosts" />
    </SimpleSection>

    <SimpleSection :centered="true" title="How to use Effect.AI?" class="">
      <template #subtitle>
        <p class="is-size-5">
          Founded in 2017, Effect.AI is a decentralized network for AI related
          services. Together with our community, we are creating a platform that
          will allow anyone in the world to contribute to AI development in a
          100% decentralized manner.
        </p>
      </template>
      <HowItWorks />
    </SimpleSection>

    <SimpleSection
      :centered="true"
      title="Ecosystem Spotlight"
      subtitle="Check out some of the hottest projects built on the Effect Network Ecosystem."
    >
      <DappCardList :dapps="featuredDapps" />
      <div class="is-flex is-justify-content-center mt-5">
        <div class="button is-primary mx-auto has-text-centered">
          <nuxt-link to="/marketplace" class="has-text-white"
            >View all</nuxt-link
          >
        </div>
      </div>
    </SimpleSection>
  </div>
</template>

<script setup lang="ts">
import { posts } from "@/constants/posts";
import { dapps } from "@/constants/dapps";
import { discord, github, twitter } from "@/constants/socials";

const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);
const featuredDapps = dapps.filter((dapp) => dapp.featured);

useSeoMeta({
  title: "Effect.AI | Home",
  description:
    "Effect.AI is a decentralized network for artificial intelligence and AI related services. We are creating a platform that will allow anyone in the world to contribute to AI development.",
});

useHead({
  meta: [
    {
      hid: "description",
      name: "description",
      content: `Effect.AI is a decentralized network for artificial intelligence and AI related services. We are creating a platform that will allow anyone in the world to contribute to AI development.`,
    },
  ],
});

//use layout
definePageMeta({
  layout: "top",
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
