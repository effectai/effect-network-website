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
            <p>Custom integrations to fit your Artificial Intelligence, Automation, and Data Structuring initiatives.
              Unfortunately, 80% of all businness-relevant data remains instructured, rendering it useless for Artificial Intelligence.
              Tap into the easiest, most scalable way to collect and structure your data and implement Artificial Intelligence systems
              within your company.
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
