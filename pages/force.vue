<template>
  <div>
    <!-- TODO: add the final icons when they are ready -->
    <force-banner id="force" />
    <section class="section">
      <div class="container">
        <div class="columns is-centered is-vcentered is-variable">
          <div class="column is-three-fifths py-6 pr-6">
            <figure class="image image is-4by3 background-image force-image">
            </figure>
          </div>
          <div class="column is-two-fifths py-6 pl-6">
            <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-force_part-white_h100.png') : require('@/assets/img/dapps/effect-force_h100.png')" width="170" class="mb-4" />
            <h2 class="title is-2">Work 3.0</h2>
            <p>Effect Force is the decentralized framework for the Future-of-Work. Currently there are over 10,000 people earning great pay in the cryptocurrency $EFX. You can now work from anywhere at any time from any device. Simply create an Effect Account and sign into Effect Force to start your future today.
            </p>
            <a href="https://force.effect.ai" target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}">Learn More</a>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-background-light">
      <div class="container">
        <force-blocks />
      </div>
    </section>
    <force-C2A />
    <section class="section">
      <div class="container">
        <force-power-blocks />
      </div>
    </section>
  </div>
</template>

<script>
  import ForceBanner from '@/components/ForceBanner';
  import ForceBlocks from '@/components/ForceBlocks';
  import ForceC2A from '@/components/ForceC2A';
  import ForcePowerBlocks from '@/components/ForcePowerBlocks';

  export default {
    components: {
      ForceBanner,
      ForceBlocks,
      ForceC2A,
      ForcePowerBlocks
    }
  }
</script>
<style lang="scss" scoped>
.force-image {
  background-image: url('~assets/img/force-desktop.png');
  background-size: cover;
}
</style>
