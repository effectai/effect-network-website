<template>
  <div class="my-6">
    <div class="columns">
      <div class="column is-one-third">
        <div class="card is-flat always-light p-5">
          <img src="~assets/img/icons/github.svg" style="height: 50px"/>
          <h3 class="subtitle is-4 mt-4 mb-2">Github</h3>
          <h4 class="subtitle is-5 mt-1">Explore Public Effect Repositories</h4>
          <p class="block">Join the Effect.AI development effort by contributing to one of the open-source
            projects on the public Effect repositories.
          </p>
          <a target="_blank" class="is-text is-outlined mt-2" :class="{'is-accent': $colorMode.value === 'dark'}" href="https://github.com/effectai">Explore Github</a>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="card is-flat always-light p-5">
          <img src="~assets/img/icons/api.svg" style="height: 50px"/>
          <h3 class="subtitle is-4 mt-4 mb-2">API Documentation</h3>
          <h4 class="subtitle is-5 mt-1">Effect Network API Documentation</h4>
          <p class="block">Connect your applications to Effect Force to access a global human workforce or learn more about other dApps like EffectDAO.</p>
          <a target="_blank" class="is-text is-outlined mt-2" :class="{'is-accent': $colorMode.value === 'dark'}" href="https://docs.effect.ai">Explore Documentation</a>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="card is-flat always-light p-5">
          <img src="~assets/img/icons/whitepaper.svg" style="height: 50px"/>
          <h3 class="subtitle is-4 mt-4 mb-2">Effect Whitepaper</h3>
          <h4 class="subtitle is-5 mt-1">Technical description</h4>
          <p class="block">Read the original Effect Whitepaper for a technical and mathematical description of the Effect Network.
          </p>
          <a href="/download/effect_whitepaper.pdf" target="_blank" class="is-text is-outlined mt-2" :class="{'is-accent': $colorMode.value === 'dark'}" >Technical Whitepaper</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
h3.subtitle {
  font-weight: 500;
}

.card a {
  display: block;
  position: relative;
  &:after {
    content:">";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto
  }
}
</style>
