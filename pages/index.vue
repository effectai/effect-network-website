<template>
  <div>
    <home-banner />
    <div class="has-background-white-bis">
      <clients />
      <ten-video />
      <three-blocks />
    </div>
    <force id="force" />
    <services id="dapps" />
    <efx />
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

  export default {
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
      MailingList
    }
  }
</script>
