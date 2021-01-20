<template>
  <div>
    <nav-bar/>
    <div class="container is-max-widescreen content">
      <Nuxt/>
    </div>
    <foot/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar';
  import Foot from '@/components/Footer';


  export default {
    components: {
      NavBar,
      Foot
    },

    data () {
      return {
      }
    },

    computed: {
    },

    methods: {
    }
  };
</script>
