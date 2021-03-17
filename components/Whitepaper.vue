<template>
  <section class="section has-blue-white-background light-mode">
    <div class="container is-max-widescreen">
      <div class="columns is-centered is-vcentered is-variable is-8">
        <div class="column is-two-fifths p-6">
          <figure class="image is-4by5 is-rounded">
            <img src="~assets/img/whitepaper.png" class="has-radius has-shadow">
          </figure>
        </div>
        <div class="column"></div>
        <div class="column is-half has-background-white">
          <h2 class="title is-3">The Effect Whitepaper</h2>
          <h4 class="subtitle">Technical paper about The Effect Network</h4>
          <p>Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. </p>
          <a href="https://worker.effect.ai" target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}">Join the WorkForce</a>
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
