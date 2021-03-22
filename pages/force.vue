<template>
  <div>
    <force id="force" />
  </div>
</template>

<script>
  import HomeBanner from '@/components/HomeBanner';
  import ThreeBlocks from '@/components/ThreeBlocks';
  import Force from '@/components/Force';
  import Services from '@/components/Services';
  import Efx from '@/components/Efx';
  import Clients from '@/components/Clients';
  import MailingList from '@/components/MailingList';

  export default {
    components: {
      HomeBanner,
      ThreeBlocks,
      Force,
      Services,
      Efx,
      Clients,
      MailingList
    }
  }
</script>
