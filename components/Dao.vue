<template>
  <div class="py-6 has-background-light always-light">
    <section class="section">
      <div class="container is-max-widescreen">
        <div class="columns is-centered is-vcentered is-variable is-6">
          <div class="column is-5" data-aos="fade-up" data-aos-delay="100">
            <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-dao.png') : require('@/assets/img/dapps/effect-dao.png')" width="200" class="mb-5" />
            <!-- <h2 class="title is-2">Effect Proposal System</h2>
            <h4 class="subtitle">Vote, Stake and Earn EFX</h4> -->
            <p>DAOs and distributed organizations rely heavily on the contribution of its members. A key method that allows its members to add value to the network and decide what is important to the project as a whole is a proposal system.</p><br>
            <p class="has-text-weight-bold">Join the DAO and have a voice on the development of the future of work.</p>
            <a href="https://dao.effect.network" target="_blank" class="button is-primary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}">Join our DAO</a>
          </div>
          <div class="column is-7" data-aos="fade-up" data-aos-delay="350">
            <img src="~assets/img/DAO-screen-2.png">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// .dao-image {
//   background-image: url('~assets/img/threepeople.jpg');
// }
// .dao-circle {
//   background-image: url('~assets/img/grad_home_dao.png');
//   background-repeat: no-repeat;
//   background-position-x: calc(50% + 100px);
// }
</style>
