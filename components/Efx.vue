<template>
  <section class="hero is-primary">
    <div class="hero-body container">
        <div class="columns is-vcentered is-variable is-8">
          <div class="column is-one-third">
            <h2 class="title is-2 has-text-weight-light"><b>Powered</b> by the<br>digital asset <b class="is-family-sans-serif">EFX</b></h2>
            <nuxt-link to="/token-page" class="button is-accent">Discover the EFX Token</nuxt-link>
          </div>
          <div class="column is-narrow"></div>
          <div class="column is-two-third">
            <img :src="require('@/assets/img/efx-3d.png')"/>
          </div>
        </div>
    </div>
  </section>

</template>
