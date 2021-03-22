<template>
  <div>
    <section class="section">
      <div class="container is-max-widescreen">
        <div class="has-text-centered my-6">
          <h4 class="title is-4">The Effect Network</h4>
          <h1 class="subtitle is-1">For Developers</h1>
        </div>
        <div class="columns pb-6 is-vcentered">
          <div class="column is-two-fifths">
            <h3 class="title"><b class="is-family-sans-serif">Build</b> on The Effect Network Protocol</h3>
            <p class="block">
              Whether you are a data scientist, a blockchain developer, or a software engineer, the design of The Effect
              Network incentivizes everyone to build out the Effect ecosystem.
            </p>
            <p class="block">
              The Effect Network creates new possibilities for developers to build, monetize, and power AI algorithms on a
              decentralized network, thus opening AI development opportunities to all.
            </p>
            <p class="block">
              <b>An open-source development portal to build a Decentralized Network for Artificial Intelligence.</b>
            </p>
          </div>
          <div class="column is-four-fifths">
            <network />
          </div>
        </div>
        <div class="columns my-6">
          <div class="column is-one-third has-text-centered">
            <i class="fab fa-github is-size-1 has-text-secondary" :class="{'has-text-accent': $colorMode.value === 'dark'}"></i>
            <h3 class="title is-4 mt-4 has-text-weight-semibold">Effect Github</h3>
            <p>Join the Effect.AI development effort by contributing to one of the open source
              projects on the public effect repositories.
            </p>
            <a target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" href="https://github.com/effectai">Explore Github</a>
          </div>
          <div class="column is-one-third has-text-centered">
            <i class="fas fa-file-alt is-size-1 has-text-secondary" :class="{'has-text-accent': $colorMode.value === 'dark'}"></i>
            <h3 class="title is-4 mt-4 has-text-weight-semibold">API Documentation</h3>
            <p>Connect your applications to Effect Force to access a global human workforce or learn more about other dApps like EffectDAO.</p>
            <a href="https://docs.effect.ai" target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" >Documentation</a>
          </div>
          <div class="column is-one-third has-text-centered">
            <i class="fas fa-square-root-alt is-size-1 has-text-secondary" :class="{'has-text-accent': $colorMode.value === 'dark'}"></i>
            <h3 class="title is-4 mt-4 has-text-weight-semibold">Technical Whitepaper</h3>
            <p>Read the original Effect Whitepaper for a technical and mathematical description of The Effect Network.
            </p>
            <a href="/download/effect_whitepaper.pdf" target="_blank" class="button is-secondary mt-5" :class="{'is-accent': $colorMode.value === 'dark'}" >Technical Whitepaper</a>
          </div>
        </div>
        <div class="columns has-text-left is-vcentered is-variable is-8 my-6 py-6">
          <div class="column is-three-fifths">
            <h2 class="title is-2">Smart Contracts</h2>
            <h2 class="subtitle">Smart Contract Stack on the EOS blockchain</h2>
            <p class="block">
              The Effect Network is an open protocol built with a technology stack of Smart Contracts. The TEN protocol allows anyone to build decentralized applications and connect their interface to the network.
            </p>
            <a class="button is-secondary" :class="{'is-accent': $colorMode.value === 'dark'}" href="https://github.com/effectai/effect-network-eos" target="_blank">Smart Contracts</a>
          </div>
          <div class="column is-two-fifths">
            <img src="~assets/img/smart-contracts.png"/>
          </div>
        </div>
      </div>
    </section>
    <whitepaper/>
  </div>
</template>

<script>
import Whitepaper from '@/components/Whitepaper';
import Network from "~/assets/img/blockchain.svg?inline";

export default {
  components: {
    Whitepaper,
    Network
  }
}
</script>
<style lang="scss">
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
  max-width: 140%;
  height: 100%;
  display: block;
  margin-left: -40%;
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
