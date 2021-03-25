<template>
  <div class="my-6">
    <div class="columns">
      <div class="column is-one-third has-text-centered">
        <i class="fab fa-github is-size-1 has-text-secondary" :class="{'has-text-accent': $colorMode.value === 'dark'}"></i>
        <h3 class="title is-4 mt-4">Effect Github</h3>
        <p>Join the Effect.AI development effort by contributing to one of the open source
          projects on the public effect repositories.
        </p>
        <a target="_blank" class="button is-text is-outlined mt-2" :class="{'is-accent': $colorMode.value === 'dark'}" href="https://github.com/effectai">Explore Github</a>
      </div>
      <div class="column is-one-third has-text-centered">
        <i class="fas fa-file-alt is-size-1 has-text-secondary" :class="{'has-text-accent': $colorMode.value === 'dark'}"></i>
        <h3 class="title is-4 mt-4">API Documentation</h3>
        <p>Connect your applications to Effect Force to access a global human workforce or learn more about other dApps like EffectDAO.</p>
        <a href="https://docs.effect.ai" target="_blank" class="button is-text is-outlined mt-2" :class="{'is-accent': $colorMode.value === 'dark'}" >Documentation</a>
      </div>
      <div class="column is-one-third has-text-centered">
        <i class="fas fa-square-root-alt is-size-1 has-text-secondary" :class="{'has-text-accent': $colorMode.value === 'dark'}"></i>
        <h3 class="title is-4 mt-4">Technical Whitepaper</h3>
        <p>Read the original Effect Whitepaper for a technical and mathematical description of The Effect Network.
        </p>
        <a href="/download/effect_whitepaper.pdf" target="_blank" class="button is-text  is-outlined mt-2" :class="{'is-accent': $colorMode.value === 'dark'}" >Technical Whitepaper</a>
      </div>
    </div>
    <div class="has-text-centered">
      <nuxt-link to="/for-developers" class="button is-secondary mt-5 is-wide" :class="{'is-accent': $colorMode.value === 'dark'}" >Build</nuxt-link>
    </div>
  </div>
</template>
