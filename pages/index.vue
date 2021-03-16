<template>
  <div>
    <home-banner />
    <three-blocks />
    <services />
    <clients />
    <mailing-list />
  </div>
</template>

<script>
  import HomeBanner from '@/components/HomeBanner';
  import ThreeBlocks from '@/components/ThreeBlocks';
  import Services from '@/components/Services';
  import Clients from '@/components/Clients';
  import MailingList from '@/components/MailingList';

  export default {
    components: {
      HomeBanner,
      ThreeBlocks,
      Services,
      Clients,
      MailingList
    }
  }
</script>
