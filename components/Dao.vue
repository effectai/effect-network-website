<template>
  <div class="dao-circle has-background-white-bis">
    <section class="section">
      <div class="container is-max-widescreen">
        <div class="columns is-centered is-vcentered is-variable is-8">
          <div class="column is-half">
            <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-dao_part-white_h100.png') : require('@/assets/img/dapps/effect-dao_h100.png')" width="170" class="mb-4" />
            <h2 class="title is-2">Effect Proposal System</h2>
            <h4 class="subtitle">Vote, Stake and Earn EFX</h4>
            <p>Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. Lorem ipsum flora elipses esta much. </p>
            <a href="https://dao.effect.ai" target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}">Explore DAO</a>
          </div>
          <div class="column is-half">
            <figure class="image">
              <img src="~assets/img/proposals.png" class="">
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.dao-image {
  background-image: url('~assets/img/threepeople.jpg');
}
.dao-circle {
  background-image: url('~assets/img/circle_dao.png');
  background-repeat: no-repeat;
  background-position: 1000px 0px;
  background-size: 1500px;
}
</style>
