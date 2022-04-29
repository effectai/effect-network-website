<template>
  <section class="section">
      <div class="container has-text-centered py-6">
        <h1 class="title is-1 py-5 mb-0" data-aos="fade-up">
          Freedom To Work From Anywhere At Anytime
        </h1>
        <div class="column is-half is-full-mobile is-offset-one-quarter">
          <h2 class="subtitle" data-aos="fade-up" data-aos-delay="100">The first Blockchain based framework for the Future-of-Work. Access to a global, on-demand, 24x7 scalable WorkForce.</h2>
        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  position: relative;
  background: url('~assets/img/logo-3d-full.png');
  background-size: 85%;
  background-repeat: no-repeat;
  background-position: bottom center;
  height: 40vw;
  min-height: 750px;
  @include mobile {
    min-height: 600px;
  }
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
</style>
