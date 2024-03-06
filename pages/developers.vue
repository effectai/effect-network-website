<template>
  <div>
    <HeroSection title="Unleash the power of a decentralized workforce">
      <template #canvas>
        <div class="is-flex is-justify-content-end h-full">
          <img style="height: 100%" src="@/assets/img/developers.svg" />
        </div>
      </template>

      <template #subtitle>
        <p class="block is-size-5 has-text-white">
          A manual for joining the Effect.AI ecosystem. By developers for
          developers.
        </p>
      </template>

      <template #footer>
        <nuxt-link target="_blank" to="https://developer.effect.network/"
          ><button class="button is-secondary">Get Started</button></nuxt-link
        >
      </template>
    </HeroSection>

    <SimpleSection>
      <div class="my-6">
        <div class="columns">
          <div class="column is-one-third">
            <div class="card is-flat always-light p-5">
              <img src="~assets/img/icons/github.svg" style="height: 50px" />
              <h3 class="subtitle is-4 mt-4 mb-2">Github</h3>
              <h4 class="subtitle is-5 mt-1">
                Explore Public Effect Repositories
              </h4>
              <p class="block">
                Join the Effect.AI development effort by contributing to one of
                the open-source projects on the public Effect repositories.
              </p>
              <a
                target="_blank"
                class="is-text is-outlined mt-2"
                href="https://github.com/effectai"
                >Explore Github</a
              >
            </div>
          </div>
          <div class="column is-one-third">
            <div class="card is-flat always-light p-5">
              <img src="~assets/img/icons/api.svg" style="height: 50px" />
              <h3 class="subtitle is-4 mt-4 mb-2">API Documentation</h3>
              <h4 class="subtitle is-5 mt-1">
                Effect Network API Documentation
              </h4>
              <p class="block">
                Connect your applications to Effect Force to access a global
                human workforce or learn more about other dApps like EffectDAO.
              </p>
              <a
                target="_blank"
                class="is-text is-outlined mt-2"
                href="https://developer.effect.network/"
                >Explore Documentation</a
              >
            </div>
          </div>
          <div class="column is-one-third">
            <div class="card is-flat always-light p-5">
              <img
                src="~assets/img/icons/whitepaper.svg"
                style="height: 50px"
              />
              <h3 class="subtitle is-4 mt-4 mb-2">Effect Whitepaper</h3>
              <h4 class="subtitle is-5 mt-1">Technical description</h4>
              <p class="block">
                Read the original Effect Whitepaper for a technical and
                mathematical description of the Effect Network.
              </p>
              <a
                href="/download/effect_whitepaper.pdf"
                target="_blank"
                class="is-text is-outlined mt-2"
                >Technical Whitepaper</a
              >
            </div>
          </div>
        </div>
      </div>
    </SimpleSection>

    <SimpleSection>
      <SDKSection />
    </SimpleSection>

    <section class="section always-light has-background-white">
      <div class="container">
        <div
          class="columns has-text-left is-white is-vcentered is-variable is-8 pt-4 pb-6"
        >
          <div class="column is-two-fifths">
            <h2 class="title is-2">Smart Contracts</h2>
            <p class="block">
              The Effect Network is an open protocol built with a technology
              stack of smart contracts. The TEN protocol allows anyone to build
              decentralized applications and connect their interface to the
              network.
            </p>
            <a
              class="button is-secondary"
              href="https://github.com/effectai/effect-network-eos"
              target="_blank"
              >Smart Contracts</a
            >
          </div>
          <div class="column is-three-fifths">
            <img src="@/assets/img/formula.png" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import bg from "@/assets/img/grad_devs.png";

useSeoMeta({
  title: "Developers",
  description:
    "A manual for joining the Effect.AI ecosystem. By developers for developers.",
});
</script>

<style lang="scss">
pre {
  background-color: #374151;

  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  color: white;
}
</style>
