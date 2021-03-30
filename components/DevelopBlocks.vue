<template>
  <div class="my-6">
    <div class="columns">
      <div class="column is-one-third has-text-centered">
        <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/github_white.svg') : require('@/assets/img/icons/github.svg')" style="height: 50px"/>
        <h3 class="title is-4 mt-4">Effect Github</h3>
        <p>Join the Effect.AI development effort by contributing to one of the open-source
          projects on the public Effect repositories.
        </p>
        <a target="_blank" class="button is-text is-outlined mt-2" :class="{'is-accent': $colorMode.value === 'dark'}" href="https://github.com/effectai">Explore Github</a>
      </div>
      <div class="column is-one-third has-text-centered">
        <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/api_white.svg') : require('@/assets/img/icons/api.svg')" style="height: 50px"/>
        <h3 class="title is-4 mt-4">API Documentation</h3>
        <p>Connect your applications to Effect Force to access a global human workforce or learn more about other dApps like EffectDAO.</p>
        <a href="https://docs.effect.ai" target="_blank" class="button is-text is-outlined mt-2" :class="{'is-accent': $colorMode.value === 'dark'}" >Documentation</a>
      </div>
      <div class="column is-one-third has-text-centered">
        <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/whitepaper_white.svg') : require('@/assets/img/icons/whitepaper.svg')" style="height: 50px"/>
        <h3 class="title is-4 mt-4">Technical Whitepaper</h3>
        <p>Read the original Effect Whitepaper for a technical and mathematical description of the Effect Network.
        </p>
        <a href="/download/effect_whitepaper.pdf" target="_blank" class="button is-text is-outlined mt-2" :class="{'is-accent': $colorMode.value === 'dark'}" >Technical Whitepaper</a>
      </div>
    </div>
    <div class="has-text-centered">
      <nuxt-link to="/for-developers" class="button is-secondary mt-5 is-wide" :class="{'is-accent': $colorMode.value === 'dark'}" >Build</nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dark-mode {
  .button.is-outlined {
    border: none !important;
  }
}
</style>