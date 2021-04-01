<template>
  <div>
    <div class="has-background-light has-navbar-fixed-top">
      <home-banner />
    </div>
    <div class="has-background-light">
      <clients />
      <ten-video />
      <three-blocks />
    </div>
    <force id="force" />
    <services id="dapps" />
    <efx />
    <case-studies />
    <section class="section">
      <div class="container is-max-widescreen py-6">
        <div class="has-text-centered">
          <h1 class="title">Develop</h1>
          <p class="has-limited-width is-horizontal-centered">Specializing in structuring data in areas like Natural
            Language Processing, Machine Learning Training Data, Deploying AI Services, Translations, and many more.</p>
        </div>
        <develop-blocks />
      </div>
    </section>
    <dao />
    <mailing-list />
  </div>
</template>

<script>
  import HomeBanner from '@/components/HomeBanner';
  import Clients from '@/components/Clients';
  import TenVideo from '@/components/Video';
  import ThreeBlocks from '@/components/ThreeBlocks';
  import Force from '@/components/Force';
  import Services from '@/components/Services';
  import DevelopBlocks from '@/components/DevelopBlocks';
  import Efx from '@/components/Efx';
  import Dao from '@/components/Dao';
  import MailingList from '@/components/MailingList';
  import CaseStudies from '../components/CaseStudies.vue';

  export default {
    head() {
      return {
        title: 'Effect Network - Blockchain-based framework for the Future-of-Work',
        script: [
          { src: 'https://files.coinmarketcap.com/static/widget/currency.js' }
        ],
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'Freedom To Work From Anywhere At Anytime. Effect Network is the first Blockchain-based framework for the Future-of-Work. Access to a global, on-demand, 24x7 scalable WorkForce.'
          }
        ]
      }
    },
    components: {
      HomeBanner,
      Clients,
      TenVideo,
      ThreeBlocks,
      Force,
      Services,
      DevelopBlocks,
      Efx,
      Dao,
      MailingList,
      CaseStudies
    }
  }
</script>
