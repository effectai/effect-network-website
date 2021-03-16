<template>
  <div>
    <home-banner />
    <services />
    <clients />
    <mailing-list />
  </div>
</template>

<script>
  import HomeBanner from '@/components/HomeBanner';
  import Services from '@/components/Services';
  import Clients from '@/components/Clients';
  import MailingList from '@/components/MailingList';

  export default {
    components: {
      HomeBanner,
      Services,
      Clients,
      MailingList
    }
  }
</script>
