<template>
  <div>
    <section class="section">
      <div class="container is-max-widescreen">
        <div class="has-text-centered my-6">
          <h4 class="title is-4">The Effect Network</h4>
          <h1 class="subtitle is-1">For Developers</h1>
        </div>
        <div class="columns py-6">
          <div class="column is-half">
            <h3 class="title"><b class="is-family-sans-serif">Build</b> on The Effect Network Protocol</h3>
            <p class="block">
              Whether you are a data scientist, a blockchain developer, or a software engineer, the design of The Effect
              Network incentivizes everyone to build out the Effect ecosystem.
            </p>
            <p class="block">
              The Effect Network creates new possibilities for developers to build, monetize, and power AI algorithms on a
              decentralized network, thus opening AI development opportunities to all.
            </p>
            <p class="block">
              <b>An open-source development portal to build a Decentralized Network for Artificial Intelligence.</b>
            </p>
          </div>
        </div>
        <div class="columns my-6">
          <div class="column is-one-third has-text-centered">
            <i class="fab fa-github is-size-1 has-text-secondary" :class="{'has-text-accent': $colorMode.value === 'dark'}"></i>
            <h3 class="title is-4 mt-4 has-text-weight-semibold">Effect Github</h3>
            <p>Join the Effect.AI development effort by contributing to one of the open source
              projects on the public effect repositories.
            </p>
            <a target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" href="https://github.com/effectai">Explore Github</a>
          </div>
          <div class="column is-one-third has-text-centered">
            <i class="fas fa-file-alt is-size-1 has-text-secondary" :class="{'has-text-accent': $colorMode.value === 'dark'}"></i>
            <h3 class="title is-4 mt-4 has-text-weight-semibold">API Documentation</h3>
            <p>Connect your applications to Effect Force to access a global human workforce or learn more about other dApps like EffectDAO.</p>
            <a href="https://docs.effect.ai" target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" >Documentation</a>
          </div>
          <div class="column is-one-third has-text-centered">
            <i class="fas fa-square-root-alt is-size-1 has-text-secondary" :class="{'has-text-accent': $colorMode.value === 'dark'}"></i>
            <h3 class="title is-4 mt-4 has-text-weight-semibold">Technical Whitepaper</h3>
            <p>Read the original Effect Whitepaper for a technical and mathematical description of The Effect Network.
            </p>
            <a href="/download/effect_whitepaper.pdf" target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" >Technical Whitepaper</a>
          </div>
        </div>

      </div>
    </section>
    <whitepaper/>
  </div>
</template>

<script>
import Whitepaper from '@/components/Whitepaper';

export default {
  components: {
    Whitepaper
  }
}
</script>
