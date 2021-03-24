<template>
  <div class="banner">
    <div class="circle-container">
      <div class="circle"></div>
    </div>
    <section class="section">
      <div class="container is-max-widescreen mt-6">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-1 is-spaced has-background-white-blur"><span>Freedom To Work From Anywhere At Anytime</span></h1>
            <h1 class="subtitle has-background-white-blur"><span>The first Blockchain based framework for the Future-of-Work.</span></h1>
            <h1 class="subtitle has-background-white-blur"><span>Access to a global, on-demand, 24x7 scalable WorkForce.</span></h1>
            <!--          <p>Helping data science teams succeed with structuring data and the deployment of AI automation</p>-->
            <br>
            <nuxt-link to="/force" class="button is-secondary" :class="{'is-accent': $colorMode.value === 'dark'}">Work 3.0
            </nuxt-link>
          </div>
          <div class="column"></div>
          <div class="column is-two-fifths">
            <img src="~assets/img/women-bedroom-work.jpg"  class="has-radius has-shadow"/>
            <br>
          </div>
        </div>
        <div class="is-flex is-justify-content-flex-end is-hidden-mobile" style="margin-right: -100px">
          <div class="mx-4 ">
            <img width="500" src="~assets/img/women-bedroom-work.jpg"  class="has-radius has-shadow"/>
          </div>
          <div class="mx-4">
            <img width="300" src="~assets/img/women-bedroom-work.jpg"  class="has-radius has-shadow"/>
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

<style lang="scss">
.dark-mode {
  #XMLID_64_, #XMLID_5_, #XMLID_81_ {
    fill: white;
  }
}
#Layer_1 {
  width: 150%;
  margin-left: -30%;
}
#Layer_1 circle {
  r: 0;
}

#Layer_1.animate circle {
  animation-delay: 1s;
  animation-name: radius;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

#layer1, #layer2, #layer3 {
  transform: none;
}

#Layer_1.animate #layer1, #Layer_1.animate #layer2, #Layer_1.animate #layer3 {
  animation-name: float;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

#XMLID_345_ {
  transform: translate3d(-18px, -11px, 0);

}

#Layer_1.animate #XMLID_345_ {
  animation-name: move1;
  animation-delay: 2s;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

#XMLID_317_ {
  transform: translate3d(-48px, 23px, 0);
}

#Layer_1.animate #XMLID_317_ {
  animation-name: move2;
  animation-delay: 1.5s;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

#XMLID_339_ {
  transform: none;
}

#Layer_1.animate #XMLID_339_ {
  animation-name: move3;
  animation-delay: 1s;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

#layer1 {
  animation-delay: 1.5s;
}

#layer2 {
  animation-delay: 2s;
}

#layer3 {
  animation-delay: 2.5s;
}

#XMLID_1_ {
  transform: translate3d(0, 59px, 0);
}

#Layer_1.animate #XMLID_1_ {
  animation-name: layer1;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

#XMLID_4_ {
  transform: translate3d(0, -59px, 0);
}

#Layer_1.animate #XMLID_4_ {
  animation-name: layer3;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

#XMLID_351_, #XMLID_352_, #XMLID_300_ {
  stroke-dasharray: 170;
  stroke-dashoffset: -170;
}

#Layer_1.animate #XMLID_351_, #Layer_1.animate #XMLID_352_, #Layer_1.animate #XMLID_300_ {
  animation-delay: 0.5s;
  animation-name: line;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
}

#XMLID_398_, #top_291_, #XMLID_61_, #XMLID_63_, #XMLID_59_, #XMLID_55_ {
  pointer-events: none;
}

#top_291_ {
  opacity: 0;
}

#Layer_1.animate #top_291_ {
  animation-delay: 0.3s;
  animation-name: fadein;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

#XMLID_5_, #XMLID_64_, #XMLID_81_, #XMLID_598_, #XMLID_590_ {
  opacity: 0;
}

#Layer_1.animate #XMLID_5_, #Layer_1.animate #XMLID_64_, #Layer_1.animate #XMLID_81_, #Layer_1.animate #XMLID_598_, #Layer_1.animate #XMLID_590_ {
  animation-delay: 1.3s;
  animation-name: fadein;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}

#XMLID_448_ > g > g polygon {
  transition: 0.2s;
}

#XMLID_448_ > g > g:hover polygon {
  fill: rgb(85, 110, 160);
  opacity: 1;
}

.tower polygon {
  transition: 0.3s;
}

.tower:hover polygon {
  opacity: 1;
}

.smart-contract polygon {
  transition: 0.3s;
}

.smart-contract polygon:hover {
  fill: rgb(144, 163, 203);
}

.smart-contract image {
  transition: 0.3s;
}

.smart-contract:hover image {
  opacity: 1;
}

@keyframes layer1 {
  from {
    transform: translate3d(0, 59px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes layer3 {
  from {
    transform: translate3d(0, -59px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes radius {
  from {
    r: 0;
  }
  to {
    r: 3;
  }
}

@keyframes line {
  from {
    stroke-dashoffset: -170;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes float {
  from {
    transform: none;
  }
  to {
    transform: translate3d(0, 5px, 0);
  }
}

@keyframes move1 {
  0% {
    transform: translate3d(-18px, -11px, 0);
  }
  25% {
    transform: translate3d(77px, 43px, 0);
  }
  50% {
    transform: translate3d(171px, -10px, 0);
  }
  75% {
    transform: translate3d(76px, -66px, 0);
  }
  100% {
    transform: translate3d(-18px, -11px, 0);
  }
}

@keyframes move2 {
  0% {
    transform: translate3d(-48px, 23px, 0);
  }
  25% {
    transform: translate3d(66px, -32px, 0);
  }
  50% {
    transform: translate3d(-27px, -86px, 0);
  }
  75% {
    transform: translate3d(-138px, -20px, 0);
  }
  100% {
    transform: translate3d(-48px, 23px, 0);
  }
}

@keyframes move3 {
  0% {
    transform: none;
  }
  25% {
    transform: translate3d(-113px, -59px, 0);
  }
  50% {
    transform: translate3d(-244px, 22px, 0);
  }
  75% {
    transform: translate3d(-153px, 74px, 0);
  }
  100% {
    transform: none;
  }
}

@keyframes movebgleft {
  from {
    background-position: -60%;
  }
  to {
    background-position: 120%;
  }
}
</style>
<style type="text/css" id="grained-animation">
    @keyframes grained {
    0% {
      -webkit-mask-position: -10%, 10%;
    }
    10% {
      -webkit-mask-position: -25%, 0%;
    }
    20% {
      -webkit-mask-position: -30%, 10%;
    }
    30% {
      -webkit-mask-position: -30%, 30%;
    }
    40% {
      -webkit-mask-position: 0 0;
    }
    50% {
      -webkit-mask-position: -15%, 10%;
    }
    60% {
      -webkit-mask-position: -20%, 20%;
    }
    70% {
      -webkit-mask-position: -5%, 20%;
    }
    80% {
      -webkit-mask-position: -25%, 5%;
    }
    90% {
      -webkit-mask-position: -30%, 25%;
    }
    100% {
      -webkit-mask-position: -10%, 10%;
    }
  }</style>
<style lang="scss" scoped>
  $noise: url('data:image/png;base64,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');

  .banner {
    position: relative;
    overflow: hidden;
    min-height: calc(100vh - 70px);
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

  @keyframes noise {
    0% {
      -webkit-mask-position: 31% 50%;
    }
    50% {
      -webkit-mask-position: 34% 98%
    }
    100% {
      -webkit-mask-position: 50% 43%;
    }
  }

  .circle-container {
    position: absolute;
    right: 0;
    top: 0;
    margin: 20px 10px;

    width: 100%;

    .circle {
      margin-left: auto;
      position: relative;
      width: 1400px;
      height: 1400px;
      margin-right: -10px;
      -webkit-filter: blur(7px);
      -moz-filter: blur(7px);
      -o-filter: blur(7px);
      -ms-filter: blur(7px);
      filter: blur(7px);
      //mask: $noise, radial-gradient(circle at 50% 0, transparent 30%, #000 (65% + 15%)) 0 0 / 50% 100%;

      border-radius: 100%;
      background: $secondary;
      transition: background 2s;
      transform: rotate(-100deg);
      background: linear-gradient(-47deg, #5158FA 47%, rgba(142,102,247,0.20) 86%, rgba(246,247,255,0.00) 100%);
      //background: radial-gradient(circle at top, rgba(#ffffff, 1) 0%, rgba(#fffef7, 1) 7%, rgba(17, 72, 235, 1) 30%, rgba(17, 72, 235, 1) 50%, rgba(16, 29, 86, 1) 100%);
      background-size: 150% 400%;
      background-position: 10% 0%;
      animation: grained 0.2s linear infinite, rotate 30s linear infinite;
      //animation-delay: 0s, 1.0s;
      &:before {
        content: "";
        -webkit-filter: blur(7px);
        -moz-filter: blur(7px);
        -o-filter: blur(7px);
        -ms-filter: blur(7px);
        filter: blur(7px);
        display: block;
        position: absolute;
        top: 240px;
        left: 240px;
        width: 920px;
        height: 920px;
        background: white;
        border-radius: 100%;
      }
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 400px;
      right: -30px;
      width: 350px;
      height: 350px;
      background: white;
      -webkit-filter: blur(7px);
      -moz-filter: blur(7px);
      -o-filter: blur(7px);
      -ms-filter: blur(7px);
    }
  }
  @media all and (max-width: 770px) {
    .circle-container:after {
      display: none;
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
