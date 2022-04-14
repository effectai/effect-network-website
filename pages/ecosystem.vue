<template>
  <section class="section has-navbar-fixed-top">

  <!-- <div>
    <div :class="['developer-hero', 'is-primary', 'hero', 'has-navbar-fixed-top', 'has-background-white', 'is-light', 'has-text-black']">
      <section class="section">
        <div class="container">
          <div class="columns developer-hero-content pb-6 pt-6">
            <div class="column is-two-fifths mt-6">
              <h2 :class="['title', 'is-1', colorMode === 'dark' ? 'has-text-black' : 'has-text-white']">Effect Ecosystem</h2>
              <p class="block">
                Welcome to the dApps that are now available on the Effect Network.
              </p>
              <p class="block">
                Roll your own our use one of these dApps in order to streamline your pipeline with the Effect Network WorkForce. Learn more at the <a href="https://developer.effect.network" class="is-underlined is-italic">Developer Portal</a>.
              </p>
            </div>
            <div class="column is-four-fifths">
              <network />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div> -->

    <div class="hero">
      <section class="section">
        <div class="container">
          <h2 class="title is-1">Effect Ecosystem</h2>
          <p class="block">
            Welcome to the dApps that are now available on the Effect Network.
          </p>
          <p class="block">
            Roll your own or use one of these dApps in order to streamline your pipeline with the Effect Network WorkForce. Learn more at the <a href="https://developer.effect.network" class="is-underlined is-italic">Developer Portal</a>.
          </p>
        </div>
      </section>
    </div>

    <div class="container is-max-widescreen my-6 py-6">
      <div class="columns is-multiline">
        <div
          class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen columnGrid"
          v-for="dapp in dappsList.submissions"
          :key="dapp.id"
        >

          <nuxt-link to="/">
            <div class="card is-shadowless has-background-white">
              <div class="card-image p-5 mb-1 mx-auto">
                <figure class="">
                  <p class="image is-256x256 is-3by3 has-radius is-vcentered mx-auto is-justify-content-center">
                    <img class="p-2" :src="getImageLink(dapp.image_url)" v-bind:alt="dapp.image_url">
                  </p>
                </figure>
              </div>

              <br>

              <div class="card-content p-2">
                <section class="title-section">
                  <div class="media-content">
                    <h2 class="title is-6 has-text-weight-semibold mb-0 has-text-centered has-text-black">
                      {{ dapp.group_name }}
                    </h2>
                    <br>
                    <div class="tags is-centered">
                      <span v-for="tag in dapp.tags" :key="tag" :class="['tag', 'is-success']">{{ tag }}</span>
                    </div>
                    <p class="has-text-grey is-size-7 is-flex is-clipped">
                      {{ dapp.description.length > 200 ? `${dapp.description.slice(0, 200)}...` : dapp.description }}
                    </p>
                  </div>
                </section>
              </div>

              <div class="card-footer" style="margin-top: auto;">
                <div class="card-footer-item">

                  <button class="button is-primary is-outlined">
                    View
                  </button>

                  </div>
                </div>
              </div>
          </nuxt-link>

          </div>
        </div>
      </div>
  </section>
</template>

<script>
import dapps from '@/static/json/dapps.json'
import Network from "~/assets/img/developers.svg?inline";

export default {
    // colorMode: 'dark',
    components: {
      Network
    },
    name: 'Brand',
    data() {
        return {
            example: null,
            dappsList: dapps,
            publicPath: process.env.BASE_URL
        };
    },
    created() {
      console.log(this.dappsList)
    },
    mounted() {
    },

    computed: {
      heroDarkLight: function () {
        return this.colorMode === 'dark' ? [].join(' ') : ''
      }

    },

    methods: {

      getImageLink (img_url) {
        // /effect-network-website/static/img/ecosystem
        return require(`@/assets/img/ecosystem/${img_url}`)
      },
    }
};
</script>
<style lang="scss" scoped>

// style="display: flex; flex-direction: column; height: 100%; margin-top: auto; border-style: solid; border-width: 1px;

.card:hover {
  background-color: lightskyblue !important;
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: auto;
  border-style: solid;
  border-width: 1px;
  border-color: #ededed;
  .card-image {
    height: 128px !important;
    figure, p, img {
      height: 128px !important;
    }
    img {
      width: 100%;
      object-fit: contain;
      border-radius: 6px !important;
    }
  }
  .card-content {
  }
}

.color {
    display: inline-block;
    margin-right: 25px;
    min-width: 65px;
    &.color-small {
        margin-right: 10px;

        .color-square {
            width: 50px;
            height: 50px;
        }
        .color-text {
            line-height: 14px;
        }
    }
    .color-square {
        width: 100px;
        display:flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        i {
            opacity: 0;
            transition: 0.2s;
        }
        &:hover {
            i {
                opacity: 1;
            }
        }
        height: 100px;

    }

}

.typography {
    code {
        white-space: nowrap;
    }
}

#blockchain {
  width: 100%;
  height: auto;
}

#redblocks > * {
  transform: translate3d(160px, -93px, 0);
  animation: moveblocks 4s 1s ease infinite;
}

@keyframes moveblocks {
  0% {
    transform: translate3d(160px, -93px, 0);
  }
  50%,
  100% {
    transform: translate(0);
  }
}

#firstBlock {
  transform: translate3d(160px, -93px, 0);
  animation: firstBlock 4s 1s ease infinite;
}
#blockdis {
  animation: blockdis 4s 1s ease infinite;
}
@keyframes blockdis {
  30% {
    opacity: 1;
  }
  40%, 100% {
    opacity: 0;
    transform: translate3d(-160px, 93px, 0);
  }
}
@keyframes firstBlock {
  0%,
  15% {
    opacity: 0;
  }
  40%,
  100% {
    opacity: 1;
  }
}

@for $i from 1 to 5 {
  #redblocksparticles g:nth-child(#{$i}) polygon {
    opacity: 0.35;
    animation: glow 4s 1s ease infinite;
  }
}
@for $i from 1 to 20 {
  #redblocksparticles g:nth-child(1) g circle:nth-child(#{$i}){
    animation: dots 4s #{1000+$i*50}ms ease infinite;
  }
  #redblocksparticles g:nth-child(2) g circle:nth-child(#{$i}){
    animation: dots 4s #{1000+$i*50}ms ease infinite;
  }
  #redblocksparticles g:nth-child(3) g circle:nth-child(#{$i}){
    animation: dots 4s #{1000+$i*50}ms ease infinite;
  }
  #redblocksparticles g:nth-child(4) g circle:nth-child(#{$i}){
    animation: dots 4s #{1000+$i*50}ms ease infinite;
  }
}
@keyframes glow {
  0%,
  45% {
    opacity: 0;
  }
  60%, 100% {
    opacity: 0.35;
  }
}

@keyframes dots {
  0%,
  35% {
    transform: translate(0);
    opacity: 0;
  }
  60%, 80% {
    transform: translate(55px, -35px);
    opacity: 1;
  }
  100% {
    transform: translate(55px, -35px);
    opacity: 0;
  }
}

@for $i from 1 to 22 {
  #purplebg > :nth-child(#{$i}) {
    animation: up 2s #{$i* 500}ms ease infinite alternate;
  }
}

@keyframes up {
  to {
    transform: translate(0, -25px);
  }
}

@for $i from 1 to 13 {
  #bottomparticles > :nth-child(#{$i}){
    animation: particles 4s #{$i*300}ms ease infinite alternate, p 2s ease infinite alternate;
  }
  #bottomparticles2 > :nth-child(#{$i}){
    animation: particles 4s #{$i*300}ms ease infinite alternate, p 2s ease infinite alternate;
  }
  #redglowparticles > :nth-child(#{$i}){
    animation: particles 4s #{$i*300}ms ease infinite alternate, p 2s ease infinite alternate;
  }

}
@keyframes p {
  85%,
  100% {
    opacity: 0;
  }
}

@keyframes particles {
  0%, 100% {
    transform: translate(0);
  }
  50% {
    transform: translate(10px, 15px);
  }
}

.particlespoly {
  animation: p 2s ease infinite alternate;
}

@for $i from 1 to 4 {
  #d-app g:nth-child(#{$i}){
    animation: updown 2s #{$i*200}ms ease-in-out infinite alternate;
  }
}
@for $i from 1 to 4 {
  #d-apps2 g:nth-child(#{$i}){
    animation: updown 2s #{$i*200}ms ease-in-out infinite alternate;
  }
}
@for $i from 1 to 20 {
  #d-apps2wrapper g:nth-child(3) g > circle:nth-child(#{$i}){
    animation: updown 2s #{$i*50}ms ease infinite alternate;
  }
}
@for $i from 1 to 20 {
  #d-appswrapper g:nth-child(2) g > circle:nth-child(#{$i}){
    animation: updown 2s #{$i*50}ms ease infinite alternate;
  }
}


@keyframes updown {
  100% {
    transform: translate(0, -20px);
  }
}

#blockchain > g:nth-child(2) > g:nth-child(18) > g:nth-child(12) {
  animation: arrows 1s ease-in-out infinite alternate, p 2s ease infinite alternate;
}
@keyframes arrows {
  to {
    transform: translate(25px, 25px);
  }
}

#blockchain > g:nth-child(2) > g:nth-child(17) > g:nth-child(13) {
  animation: arrows2 1s ease-in-out infinite alternate, p 2s ease infinite alternate;
}
@keyframes arrows2 {
  to {
    transform: translate(-25px, -25px);
  }
}

#blockchain > g:nth-child(2) > g:nth-child(17) > g:nth-child(12) {
  animation: arrows 1s ease-in-out infinite alternate, p 2s ease infinite alternate;
}
</style>

<style lang="scss">

#developers {
  max-width: 130%;
  height: 100%;
  display: block;
  margin-left: -25%;
}

#developers polyline, #developers path:not(.ignore) {
  stroke-dasharray: 310;
  stroke-dashoffset: -310;
  animation-delay: 0.5s;
  animation-name: drawline;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

#developers polyline {
  animation-delay: 2s;
}

#developers ellipse {
  opacity: 0;
  animation-delay: 1s;
  animation-name: fadein;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

#developers path.ignore {
  stroke-dashoffset: -310;
  animation-delay: 0s;
  animation-name: drawline;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
}

@keyframes drawline {
  from {
    stroke-dashoffset: -310;
  }
  to {
    stroke-dashoffset: 0;
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

</style>

<style scoped lang="scss">
.developer-hero {
  background-repeat: no-repeat;
  background-position: left bottom;
  background-image: url('~assets/img/grad_devs.png');
}
@media all and (max-width: 770px) {
  .developer-hero {
    background-position: left top;
    .developer-hero-content {
      padding-top: 0 !important;
      .is-two-fifths {
        padding-top: 0 !important;
      }
    }
  }
}
</style>
