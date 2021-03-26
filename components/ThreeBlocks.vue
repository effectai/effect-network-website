<template>
  <section class="section py-6">
    <div class="container is-max-widescreen">
      <div class="columns">
        <div class="column is-one-third has-text-centered">
          <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/work_white.svg') : require('@/assets/img/icons/work.svg')" style="height: 50px"/>
          <h3 class="title is-4 mt-4">Work 3.0</h3>
          <p>Earn EFX on the first Blockchain-based framework for the Future-of-Work.</p>
          <nuxt-link class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" to="/force">Effect Force</nuxt-link>
        </div>
        <div class="column is-one-third has-text-centered">
          <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/build_white.svg') : require('@/assets/img/icons/build.svg')" style="height: 50px"/>
          <h3 class="title is-4 mt-4">Build</h3>
          <p>An open source development portal to build on the Effect Network Protocol.</p>
          <nuxt-link class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" to="/for-developers">For Developers</nuxt-link>
        </div>
        <div class="column is-one-third has-text-centered">
          <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/requesters_white.svg') : require('@/assets/img/icons/requesters.svg')" style="height: 50px"/>
          <h3 class="title is-4 mt-4">Requestors</h3>
          <p>Access to a global, on-demand, 24x7 scalable WorkForce for all your Data Science needs.</p>
          <nuxt-link class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" to="/#dapps">Explore Services</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
