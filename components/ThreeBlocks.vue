<template>
  <section class="section my-6">
    <div class="container is-max-widescreen">
      <div class="columns">
        <div class="column is-one-third has-text-centered">
          <img src="~assets/img/icons/smartphone.svg" style="height: 50px"/>
          <h3 class="title is-4 mt-4 has-text-weight-semibold">Work 2.0</h3>
          <p>Helping data science teams succeed with structuring data and the deployment of AI automation.</p>
          <nuxt-link class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" to="/force">Explore</nuxt-link>
        </div>
        <div class="column is-one-third has-text-centered">
          <img src="~assets/img/icons/programming.svg" style="height: 50px"/>
          <h3 class="title is-4 mt-4 has-text-weight-semibold">Build</h3>
          <p>Helping data science teams succeed with structuring data and the deployment of AI automation.</p>
          <nuxt-link class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" to="/for-developers">For Developers</nuxt-link>
        </div>
        <div class="column is-one-third has-text-centered">
          <img src="~assets/img/icons/user.svg" style="height: 50px"/>
          <h3 class="title is-4 mt-4 has-text-weight-semibold">Requestors</h3>
          <p>Helping data science teams succeed with structuring data and the deployment of AI automation.</p>
          <nuxt-link class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" to="/force">Explore</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
