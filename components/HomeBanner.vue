<template>
  <div class="banner"  data-aos="fade-in">
    <section class="section">
      <div class="container is-max-widescreen mt-6">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-spaced" data-aos="fade-up"><span>Freedom To Work From Anywhere At Anytime</span></h1>
            <h1 class="subtitle has-background-white-blur pr-6" data-aos="fade-up" data-aos-delay="150"><span class="pr-6">The first Blockchain-based framework for the Future-of-Work. Access a global, on-demand, 24x7 scalable WorkForce.</span></h1>
            <div style="display: inline-block" data-aos="zoom-in" data-aos-delay="300"><a target="_blank" href="https://app.effect.network" class="button is-primary" :class="{'is-accent': $colorMode.value === 'dark'}">Launch App</a></div>
          </div>
        </div>  
      </div>
    </section>
  </div>
</template>
<script>

export default {
  components: {
  }
}
</script>


<style lang="scss" scoped>
.banner {
  position: relative;
  background: url('~assets/img/logo-3d.png');
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: bottom right;
  height: 50vw;
  min-height: 500px;
  max-height: 850px;
  &:before {
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 0;
    left: 0;
  }
}
@include desktop {
  .title {
        font-size: 54px;
  }
}
</style>
