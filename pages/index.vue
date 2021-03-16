<template>
  <div>
    <home-banner />
    <services />
    <mailing-list />
  </div>
</template>

<script>
  import HomeBanner from '@/components/HomeBanner';
  import Services from '@/components/Services';
  import MailingList from '@/components/MailingList';

  export default {
    components: {
      Services,
      MailingList,
      HomeBanner
    }
  }
</script>
