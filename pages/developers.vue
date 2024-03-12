<template>
  <div>
    <HeroSection title="Unleash the power of a decentralized workforce">
      <template #canvas> </template>

      <template #subtitle>
        <p class="block is-size-5 has-text-black">
          A collection of resources for joining the Effect.AI ecosystem. By
          developers for developers.
        </p>
      </template>

      <template #side>
        <div class="column"></div>
      </template>

      <template #footer>
        <nuxt-link target="_blank" to="https://developer.effect.network/"
          ><button class="button is-primary">Get Started</button></nuxt-link
        >
      </template>
    </HeroSection>

    <SimpleSection>
      <div class="columns">
        <div class="column">
          <h2 class="is-3 title">Get Started With The SDK</h2>
          <p>
            The Effect.AI SDK offers a collection of tools and libraries that
            developers can use to build applications on top of the Effect
            Network protocol.
          </p>

          <div class="mt-5 is-flex has-gap-1">
            <a
              class="button is-primary"
              href="https://developer.effect.network/quickstart/"
              target="_blank"
              >Documentation</a
            >
            <a
              class="button is-outlined is-secondary"
              href="https://github.com/effectai/effect-js"
              target="_blank"
              >View on github</a
            >
          </div>
        </div>
        <div class="column is-offset-1">
          <Steps>
            <template #1>
              <div class="">
                <p class="my-3">Install the @effect-network SDK</p>
                <CodeBlock
                  :codes="[
                    {
                      language: 'terminal',
                      code: 'yarn add @effectai/effect-js',
                    },
                  ]"
                ></CodeBlock>
              </div>
            </template>
            <template #2>
              <p class="my-3">
                Create a new instance of the EffectClient and connect to the
                jungle testnet.
              </p>
              <CodeBlock
                :codes="[
                  {
                    language: 'js',
                    code: content,
                  },
                ]"
              ></CodeBlock>
            </template>
          </Steps>
        </div>
      </div>
    </SimpleSection>

    <SimpleSection id="tutorials">
      <div class="is-flex has-gap-1 is-align-items-center mb-5">
        <h2 class="title is-2 m-0">Tutorials & Guides</h2>
        <div class="tag is-warning">coming soon</div>
      </div>
      <TutorialCardList
        v-if="tutorials && tutorials.length > 0"
        :tutorials="tutorials"
      />
    </SimpleSection>

    <SimpleSection :title="'Examples'">
      You can start playing with Effect Force in your browser using our online
      sandboxes:

      <a href="#" class="is-capital is-block mt-5">Open on StackBlitz</a>
    </SimpleSection>

    <SimpleSection :title="'Resources'">
      <div class="my-6">
        <div class="columns">
          <div class="column is-one-third">
            <div
              class="card is-flat always-light p-5 h-full is-flex is-flex-direction-column"
            >
              <img
                src="~assets/img/icons/github.svg"
                class="self-baseline"
                style="height: 50px"
              />
              <h3 class="subtitle is-4 mt-4 mb-2">Github</h3>
              <p class="block">
                Join the Effect.AI development effort by contributing to one of
                the open-source projects on the public Effect repositories.
              </p>
              <a
                target="_blank"
                class="is-text is-outlined mt-auto"
                href="https://github.com/effectai"
                >Explore Github</a
              >
            </div>
          </div>
          <div class="column is-one-third">
            <div class="card is-flat always-light p-5">
              <img src="~assets/img/icons/api.svg" style="height: 50px" />
              <h3 class="subtitle is-4 mt-4 mb-2">SDK Documentation</h3>
              <p class="block">
                Connect your applications to Effect Force to access a global
                human workforce or learn more about other dApps like EffectDAO.
              </p>
              <a
                target="_blank"
                class="is-text is-outlined mt-auto"
                href="https://developer.effect.network/"
                >Explore Documentation</a
              >
            </div>
          </div>
          <div class="column is-one-third">
            <div
              class="card is-flat always-light p-5 h-full is-flex is-flex-direction-column"
            >
              <img
                src="~assets/img/icons/whitepaper.svg"
                class="self-baseline"
                style="height: 50px"
              />
              <h3 class="subtitle is-4 mt-4 mb-2">Effect Whitepaper</h3>
              <p class="block">
                Read the original Effect Whitepaper for a technical and
                mathematical description of the Effect Network.
              </p>
              <a
                href="/download/effect_whitepaper.pdf"
                target="_blank"
                class="is-text is-outlined mt-auto"
                >Technical Whitepaper</a
              >
            </div>
          </div>
        </div>
      </div>
    </SimpleSection>
  </div>
</template>

<script setup lang="ts">
import type { Tutorial } from "~/types/tutorials";

useSeoMeta({
  title: "Developers",
  description:
    "A collection of resources for joining the Effect.AI ecosystem. By developers for developers.",
});

const content = `import { EffectClient } from '@effectai/effect-js';
const client = new EffectClient('jungle');
client.connect();`;

const { data: tutorials } = await useAsyncData("tutorials", async () =>
  queryContent<Tutorial>(`/tutorials`).find()
);

definePageMeta({
  layout: "top",
});
</script>

<style lang="scss"></style>
