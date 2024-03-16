<template>
  <div>
    <HeroSection style="min-height: 750px">
      <template #title>
        <h1 class="title is-spaced has-text-primary is-auto-phrase is-in-front">
          Handcrafted Data for Artificial Intelligence
        </h1>
      </template>

      <template #subtitle>
        <div class="is-flex mt-2 mb-6 is-very-small">
          <nuxt-link to="https://github.com/effectai" class="">
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-primary is-very-small"> open source</span>
                <span class="tag is-dark is-very-small">
                  <i class="fa fa-heart has-text-smoke"></i>
                </span>
              </div>
            </div>
          </nuxt-link>

          <nuxt-link
            to="https://github.com/effectai/effect-network/blob/master/LICENSE"
            style="font-size: 10px"
            class="badge mx-2"
          >
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-primary is-very-small">licence</span>
                <span class="tag is-dark is-very-small"
                  ><small style="height: 12px">MIT</small></span
                >
              </div>
            </div>
          </nuxt-link>
        </div>

        <p class="subtitle pr-6" data-aos="fade-up" data-aos-delay="150">
          <span class="pr-6 has-text-black">
            Effect AI is the data network for training next-gen transparent AI
            models. Join the workforce by collecting and enriching datasets and
            get paid instantly.
          </span>
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
          <div class="is-flex">
            <SocialBar
              class="has-text-primary"
              :socials="[github, twitter, discord]"
            />
          </div>
        </div>
      </template>
    </HeroSection>

    <div class="mt-5">
      <SimpleSection data-aos="fade-left" data-aos-delay="300" id="news">
        <NewsCardList v-if="news" :items="news" />
      </SimpleSection>
    </div>

    <SimpleSection :centered="true" title="How to use Effect AI?" class="">
      <template #subtitle>
        <p class="is-size-5">
          Founded in 2017, Effect AI is a decentralized network for AI related
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
import { dapps } from "@/constants/dapps";
import { discord, github, twitter } from "@/constants/socials";
import type { News } from "@/types/news";

definePageMeta({
  layout: "top",
});

useSeoMeta({
  title: "Home",
  ogTitle: "Home",
});

const featuredDapps = dapps.filter((dapp) => dapp.featured);

//fetch news content and sort by created
const { data: news } = await useAsyncData("news", async () => {
  const data = await queryContent<News>(`/news`)
    .where({ published: true })
    .limit(3)
    .find();

  //sort on created date
  return data.sort((a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });
});
</script>

<style lang="scss">
#news {
  margin-top: -200px;
  @include desktop {
    margin-top: -230px;
  }
}
</style>
