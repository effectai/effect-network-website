<template>
  <section class="hero is-white">
    <div class="hero-body container has-text-centered" style="width: 100%">
<!--      <h1 class="title">-->
<!--        Clients & Partners-->
<!--      </h1>-->
<!--      <h3 class="subtitle">-->
<!--        Companies and projects we have worked with-->
<!--      </h3>-->
      <div class="columns is-mobile">
        <div class="column">
          <nuxt-link to="/cases">
            <img width="160px" max-width="200px" height="64px" max-height="80px" contain class="ma-2 greyscale"
                 :src="require('@/assets/img/partners/kraftheinz.png')"/>
          </nuxt-link>
        </div>
        <div class="column">
          <nuxt-link to="/cases#case-linus">
            <img width="160px" max-width="200px" height="64px" max-height="80px" contain class="ma-2 greyscale"
                 :src="require('@/assets/img/partners/linus.png')"/>
          </nuxt-link>
        </div>
        <div class="column">
          <nuxt-link to="/cases#case-un">
            <img width="160px" max-width="200px" height="64px" max-height="80px" contain class="ma-2 greyscale"
                 :src="require('@/assets/img/partners/un_color.png') "/>
          </nuxt-link>
        </div>
        <div class="column">
          <nuxt-link to="/cases#case-ing">
            <img width="140px" max-width="180px" height="64px" max-height="80px" contain class="ma-2 greyscale"
                 :src="require('@/assets/img/partners/ascendia.png')"/>
          </nuxt-link>
        </div>
        <div class="column">
          <nuxt-link to="/cases">
            <img width="100px" max-width="140px" height="64px" max-height="80px" contain class="ma-2 greyscale"
                 :src="require('@/assets/img/partners/pwc_color.png')"/>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .greyscale {
    filter: grayscale(100%);
    opacity: 0.7;
    transition: 0.1s;

    &:hover {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
</style>
