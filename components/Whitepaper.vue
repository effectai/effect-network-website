<template>
  <section class="hero has-blue-white-background is-white">
    <div class="hero-body container is-max-widescreen">
      <div class="columns is-centered is-vcentered is-variable is-8">
        <div class="column is-two-fifths my-5">
          <figure class="image is-4by5 is-rounded">
            <a href="/download/effect_whitepaper.pdf" target="_blank">
              <img src="~assets/img/whitepaper.png" class="has-radius has-shadow">
            </a>
          </figure>
        </div>
        <div class="column"></div>
        <div class="column is-half has-background-white">
          <h2 class="title is-3">The Effect Whitepaper</h2>
          <h4 class="subtitle">Technical paper about The Effect Network</h4>
          <p>At the core of The Effect Network (TEN) is a smart-contract based protocol. Developers are able to use the
            protocol to create their decentralized AI related services. This is an easy way to gain access to the
            directory of users, algorithms and compute nodes and the related staking and governance mechanisms of TEN.
          </p>
          <p> TEN is powered by the EFX token and governed by the Effect Council.</p>
          <a href="/download/effect_whitepaper.pdf" target="_blank" class="button is-secondary mt-5"
             :class="{'is-accent': $colorMode.value === 'dark'}">Download Whitepaper</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.has-blue-white-background {
  background: linear-gradient(90deg, $dark-mode-background 35%, white 35%);
}
</style>
