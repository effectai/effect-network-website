<template>
  <div>
    <div class="hero" id="ecosystem-hero" data-aos="fade-in">
      <div class="three-canvas">
        <PlanetScene />
      </div>
      <section class="section">
        <div class="container">
          <div class="columns is-mobile pt-6">
            <div
              class="mt-6 column is-half-desktop is-three-thirds-tablet is-full-mobile"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h1
                style="font-size: 4rem; line-height: 84px"
                class="title is-1 is-spaced has-text-white is-uppercase"
              >
                Be Part Of <br />
                The AI Future
              </h1>
              <h1
                class="subtitle pr-6 has-text-white"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <EcosystemStatisticsBlock class="has-text-white" />
              </h1>
              <div
                class="is-flex is-size-3 is-align-items-center is-primary has-text-white is-in-front"
                data-aos="fade-left"
                data-aos-delay="550"
              >
                <a
                  target="_blank"
                  href="https://dao.effect.network"
                  class="button is-accent mr-5"
                  >Join DAO</a
                >
                <!-- //twitter -->
                <div>
                  <a
                    target="_blank"
                    href="https://twitter.com/effectaix"
                    class="has-text-white mr-2"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://twitter.com/effectaix"
                    class="has-text-white mr-2"
                  >
                    <i class="fab fa-discord"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/effectai"
                    class="has-text-white"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

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
            running on the network. collectively managed by the DAO. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
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
          <h2 class="title is-1 has-text-primary mt-6">$EFX Token</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <ChainCardList />
      </SimpleSection>

      <SimpleSection class="px-0">
        <div class="my-6">
          <h2 class="title is-1 has-text-primary mt-6">Communities</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <CommunityCardList :communities="communities" />
      </SimpleSection>

      <SimpleSection class="px-0">
        <div class="my-5">
          <h2 class="title is-1 has-text-primary mt-6">Dapps</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="has-background-light">
          <DappCardList :dapps="featuredDapps" />
        </div>

        <div class="is-flex is-justify-content-center mt-5">
          <div class="button is-primary mx-auto has-text-centered">
            <nuxt-link to="/dapps" class="has-text-white"
              >View all dApps</nuxt-link
            >
          </div>
        </div>
      </SimpleSection>
    </SimpleSection>
  </div>
</template>

<script setup lang="ts">
import dapps from "@/content/data/dapps.json";
import communities from "@/content/data/communities.json";

const featuredDapps = dapps.filter((dapp) => dapp.featured);

useSeoMeta({
  title: "Ecosystem",
  description:
    "Effect Network's ecosystem is a collection of all the applications running on the network.",
});

const daoStats = [
  { label: "status", value: "Voting" },
  { label: "cycle", value: "83" },
  { label: "rewards", value: "$2,125.00" },
];
</script>

<style lang="scss">
#ecosystem-hero {
  height: 600px;

  background: #000046; /* fallback for old browsers */
  background: linear-gradient(
    to left,
    #a3a5f0,
    #000046
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
