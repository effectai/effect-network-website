<template>
  <section class="section">
    <div class="container is-max-widescreen">
      <div class="columns is-centered is-vcentered">
        <div class="column is-two-fifths p-6">
          <figure class="image is-rounded">
            <img src="~assets/img/work-phone.png" class="has-radius">
          </figure>
        </div>
        <div class="column is-one-fifth"></div>
        <div class="column is-two-fifths">
          <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-force_part-white_h100.png') : require('@/assets/img/dapps/effect-force_h100.png')" width="170" class="mb-4" />
          <h2 class="title is-2">Work 2.0</h2>
          <h4 class="subtitle">Earn crypto from anywhere</h4>
          <p>Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. </p>
          <a href="https://worker.effect.ai" target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}">Join the WorkForce</a>
        </div>
      </div>
    </div>
  </section>
</template>
