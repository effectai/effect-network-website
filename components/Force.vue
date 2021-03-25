<template>
  <div class="force-circle">
    <section class="section">
      <div class="container is-max-widescreen">
        <div class="columns is-centered is-vcentered is-variable is-8">
          <div class="column is-three-fifths p-6">
            <figure class="image has-radius is-5by4">
              <img src="~assets/img/force-desktop.png" class="has-radius mt-6">
            </figure>
          </div>
          <div class="column is-two-fifths">
            <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-force_part-white_h100.png') : require('@/assets/img/dapps/effect-force_h100.png')" width="170" class="mb-4" />
            <h2 class="title is-2">Work 3.0</h2>
            <h4 class="subtitle">Earn crypto from anywhere</h4>
            <p>Effect Force is the decentralized framework for the Future-of-Work. Currently there are over 10,000 people earning great pay in the cryptocurrency $EFX. You can now work from anywhere at any time from any device. Simply create an Effect Account and sign into Effect Force to start your future today.</p>
            <a href="https://worker.effect.ai" target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}">Join the WorkForce</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.force-image {
  //background-image: url('~assets/img/force-desktop.png');
}
.force-circle {
  background-image: url('~assets/img/grad_home_force.png');
  background-repeat: no-repeat;
}
</style>
