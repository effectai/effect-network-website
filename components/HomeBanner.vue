<template>
  <div class="banner pb-6">
    <section class="section">
      <div class="container is-max-widescreen my-6">
        <div class="has-limited-width">
          <h1 class="title is-1 is-spaced">Freedom To Work From Anywhere At Anytime</h1>
          <h1 class="subtitle">The first Blockchain based framework for the Future-of-Work</h1>
          <!--          <p>Helping data science teams succeed with structuring data and the deployment of AI automation</p>-->
          <br>
          <nuxt-link to="/" class="button is-secondary" :class="{'is-accent': $colorMode.value === 'dark'}">Learn more</nuxt-link>
        </div>
      </div>
    </section>
    <div class="circle-container">
      <div class="circle"></div>
    </div>
    <br><br><br><br>
  </div>
</template>

<style lang="scss" scoped>
  .banner {
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 45%;
      height: 100%;
      z-index: -2;
      top: 0;
      right: 0;
      //background: url("~assets/img/circle.png");
      //background-size: cover;

    }

  }
  @keyframes gradient {
    0%{background-position:100% 170%}
    50%{background-position:-20% 100%}
    100%{background-position:100% 170%}
  }
  .circle-container {
    position: absolute;
    right: 0;
    top: 0;
    margin: 10px;
    opacity: 0.7;

    width: 100%;
    z-index: -1;

    .circle {
      margin-left: auto;
      position: relative;
      width: 1100px;
      height: 1100px;
      -webkit-filter: blur(5px);
      -moz-filter: blur(5px);
      -o-filter: blur(5px);
      -ms-filter: blur(5px);
      opacity: 0.9;
      filter: blur(5px);
      border-radius: 100%;
      background: $secondary;
      transition: background 2s;
      transform: rotate(-100deg);
      //background: linear-gradient(150deg, rgba($secondary, 0) 0%, rgba($secondary, 0) 5%, rgba($secondary, 0.1) 20%, $secondary 100%);
      background: radial-gradient(circle at top, rgba(#ffffff,1) 0%, rgba(#fffef7,1) 7%, rgba(17,72,235,1) 30%, rgba(17,72,235,1) 50%, rgba(16,29,86,1) 100%);
      background-size: 150% 400%;
      background-position: 10% 0%;
      animation: gradiendt 4.5s ease infinite, rotate 45s linear infinite;
      //animation-delay: 0s, 1.0s;

      &:before {
        content: "";
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
        display: block;
        position: absolute;
        top: 180px;
        left: 180px;
        width: 740px;
        height: 740px;
        background: white;
        border-radius: 100%;
      }
    }

    &:after {
      content: "";
      -webkit-filter: blur(5px);
      -moz-filter: blur(5px);
      -o-filter: blur(5px);
      -ms-filter: blur(5px);
      filter: blur(5px);
      display: block;
      position: absolute;
      bottom: 400px;
      right: -20px;
      width: 300px;
      height: 250px;
      background: white;
    }
  }
  .dark-mode {
    .circle-container {
      .circle {
        &:before {
          background: $dark-mode-background;
        }
      }

      &:after {
        background: $dark-mode-background;
      }
    }
  }
</style>
