<template>
  <div>
    <div
      :style="`
        background-image: url(${bg});
        background-size: cover;
        background-position: center;
      `"
      class="developer-hero is-primary hero has-navbar-fixed-top is-clipped is-relative"
    >
      <img src="@/assets/img/developers.svg" class="is-absolute right-0" />
      <section class="section">
        <div class="container">
          <div class="columns developer-hero-content pb-6 pt-6">
            <div class="column is-half mt-6">
              <h2 class="title is-1 is-capitalized">
                Unleash the power of a Decentralized Workforce.
              </h2>
              <p class="block is-size-5">
                A manual for joining the Effect.AI ecosystem. By developers for
                developers.
              </p>

              <nuxt-link target="_blank" to="https://developer.effect.network/"
                ><button class="button is-secondary">
                  Get Started
                </button></nuxt-link
              >
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section">
      <div class="container">
        <div
          class="columns has-text-left is-white is-vcentered is-variable is-8 pt-4 pb-6"
        >
          <div class="column is-2/3 has-text-left">
            <pre><code class="lang-js">
<p>import SDK from @effect-network/sdk</p>
<p>const client = new SDK.EffectClient(&#39;jungle&#39;);</p>
<p>const campaign = await client.force.makeCampaign(campaignToIpfs, '10')</p>
            </code></pre>
          </div>
          <div class="column is-1/3">
            <h2 class="title">SDK</h2>
            <p class="block">
              The Effect Network SDK is a collection of tools and libraries that
              allow developers to build applications on top of the Effect
              Network protocol. The SDK is a collection of tools and libraries
              that allow developers to build applications on top of the Effect
              Network protocol.
            </p>

            <a class="button is-secondary" href="" target="_blank"
              >SDK Documentation</a
            >
          </div>
        </div>
      </div>
    </section>

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
    <mailing-list />
  </div>
</template>

<script setup lang="ts">
import bg from "@/assets/img/grad_devs.png";
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

onMounted(() => {
  Prism.highlightAll();
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
