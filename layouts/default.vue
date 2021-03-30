<template>
  <div id="app">
    <nav-bar :is-scrolling="isScrolling"/>
    <div>
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
        isScrolling: false,
      }
    },

    computed: {
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll)
    },
    methods: {
      handleScroll: function (e) {
        if(e.target.documentElement.scrollTop) {
          this.isScrolling = true;
        } else {
          this.isScrolling = false;
        }
      }
    },
  };
</script>

<style scoped>
#app {
  /*background: url('~assets/img/grid.png');*/
  min-height: 100vh;
}
</style>
