<template>
  <div>
    <HeroSection style="height: 650px">
      <template #title>
        <h1 class="has-text-primary is-uppercase title">
          Be Part of <br />
          the AI future
        </h1>
      </template>

      <template #subtitle>
        <div class="subtitle" data-aos="fade-up" data-aos-delay="150">
          <EcosystemStatisticsBlock class="has-text-black" />
        </div>
      </template>

      <template #footer>
        <div
          class="is-flex is-size-3 is-align-items-center is-primary has-text-white is-in-front"
          data-aos="fade-left"
          data-aos-delay="550"
        >
          <div class="is-flex is-justify-content-center">
            <div class="button is-primary has-text-white mt-5">
              <nuxt-link to="/marketplace" class="has-text-white"
                >Explore the Marketplace</nuxt-link
              >
            </div>
          </div>
        </div>
      </template>
    </HeroSection>

    <SimpleSection class="has-background-light has-text-primary">
      <div class="columns is-variable is-6">
        <div class="column is-5" data-aos="fade-up" data-aos-delay="100">
          <h2 class="title is-3 has-text-primary mb-0">The EFFECT.AI</h2>
          <h2
            class="title is-1 has-text-primary is-uppercase"
            style="font-size: 3rem"
          >
            Ecosystem
          </h2>
          <p>
            Effect Network's ecosystem is a collection of all the applications
            running on the network. You may use $EFX tokens to buy a number of
            services that boost productivity, including social media engagement,
            translations, subtitles and graphics, to help your business grow in
            many ways.
          </p>
          <br />
          <p class="has-text-weight-bold">
            Join the DAO and have a voice on the development of the EFFECT.AI
            Ecosystem.
          </p>
        </div>
        <div class="column"></div>
        <div class="column is-5" data-aos="fade-up" data-aos-delay="350">
          <div class="card dao-card">
            <div class="card-content has-text-centered">
              <img
                src="@/assets/img/dapps/effect-dao.png"
                width="200"
                class=""
              />
              <h4 class="subtitle">Vote, Stake and Earn EFX</h4>

              <div class="columns">
                <div v-for="stat in daoStats" class="column is-4">
                  <p class="has-text-weight-bold">{{ stat.label }}</p>
                  <p>{{ stat.value }}</p>
                </div>
              </div>

              <a
                href="https://dao.effect.network"
                target="_blank"
                class="button is-primary mt-5"
                >Become a member</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="has-background-white my-5">
        <Tokenomics class="has-background-white" />
      </div>

      <SimpleSection class="section px-0">
        <div class="my-5">
          <h2 class="title is-1 has-text-primary mt-6">Powered By EFX</h2>
          <p>
            EFX is the cryptographic token that fuels the Effect Network. It
            offers developers and organizations a reliable option to build,
            monetize and power AI solutions. EFX can be earned or bought and can
            be used in a decentralized ecosystem of AI-related services.
          </p>
        </div>
        <ChainCardList />
      </SimpleSection>

      <SimpleSection class="px-0">
        <div class="my-6">
          <h2 class="title is-1 has-text-primary mt-6">Communities</h2>

          <p>
            Come talk to us on our social channels. We are active on Reddit,
            Discord and Telegram. We are always looking for new members to join
            our community and would love to hear from you.
          </p>
        </div>
        <SocialCardList :socials="communities" />
      </SimpleSection>

      <SimpleSection class="px-0">
        <div class="my-5">
          <h2 class="title is-1 has-text-primary mt-6">Marketplace</h2>
          <p>
            Effect.AI is a decentralized platform for AI related services. The
            marketplace is a place where you can find AI services and
            applications that are built on the network.
          </p>
        </div>
        <div class="has-background-light">
          <DappCardList :dapps="featuredDapps" />
        </div>

        <div class="is-flex is-justify-content-center mt-5">
          <div class="button is-primary mx-auto has-text-centered">
            <nuxt-link to="/marketplace" class="has-text-white"
              >View all</nuxt-link
            >
          </div>
        </div>
      </SimpleSection>
    </SimpleSection>
  </div>
</template>

<script setup lang="ts">
import { dapps } from "@/constants/dapps";
import { communities } from "@/constants/socials";

const featuredDapps = dapps.filter((dapp) => dapp.featured);

definePageMeta({
  layout: "top",
});

useSeoMeta({
  title: "Ecosystem",
  description:
    "Effect Network's ecosystem is a collection of all the applications running on the network.",
});

const { useDaoStatistics, useEfxPrice } = useStatistics();
const { data: price } = useEfxPrice();

const { currentCycle, feePoolBalance } = useDaoStatistics();

const daoStats = computed(() => [
  { label: "status", value: "voting" },
  { label: "cycle", value: currentCycle },
  {
    label: "rewards",
    value: `$${new Intl.NumberFormat().format(
      (feePoolBalance.value * price.value) / 1000
    )}`,
  },
]);
</script>
