<template>
  <div>
    <home-banner />
    <three-blocks />
    <force />
    <services />
    <clients />
    <mailing-list />
  </div>
</template>

<script>
  import HomeBanner from '@/components/HomeBanner';
  import ThreeBlocks from '@/components/ThreeBlocks';
  import Force from '@/components/Force';
  import Services from '@/components/Services';
  import Clients from '@/components/Clients';
  import MailingList from '@/components/MailingList';

  export default {
    components: {
      HomeBanner,
      ThreeBlocks,
      Force,
      Services,
      Clients,
      MailingList
    }
  }
</script>
