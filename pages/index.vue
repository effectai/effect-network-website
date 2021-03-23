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
  import Efx from '@/components/Efx';
  import MailingList from '@/components/MailingList';

  export default {
    components: {
      HomeBanner,
      Clients,
      TenVideo,
      ThreeBlocks,
      Force,
      Services,
      Efx,
      MailingList
    }
  }
</script>
