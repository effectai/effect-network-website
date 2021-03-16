<template>
  <div class="is-flex is-flex-wrap-wrap pa-4">
    <div class="px-4" style="min-width: 200px;">
      <div>
        <nuxt-link class="my-2" to="/about">About</nuxt-link>
      </div>
      <div>
        <nuxt-link class="my-2" to="/solutions">Services</nuxt-link>
      </div>
      <div>
        <nuxt-link class="my-2" to="/for-organisations">Enterprise</nuxt-link>
      </div>
    </div>
    <div class="px-4" style="min-width: 200px;">
      <div>
        <nuxt-link class="my-2" to="/token-page">EFX Token</nuxt-link>
      </div>
      <div>
        <nuxt-link class="my-2" to="/foundation">Social Impact</nuxt-link>
      </div>
      <div>
        <nuxt-link class="my-2" to="/news">News & Media</nuxt-link>
      </div>
    </div>
    <div class="px-4" style="min-width: 200px;">
      <div>
        <nuxt-link class="my-2" to="/cases">Case Studies</nuxt-link>
      </div>
      <div>
        <nuxt-link class="my-2" to="/for-developers">For Developers</nuxt-link>
      </div>
      <div>
        <nuxt-link class="my-2" to="/team">Team</nuxt-link>
      </div>
    </div>
    <div class="px-4" style="min-width: 200px;">
      <div>
        <nuxt-link class="my-2" to="/team#community">Community</nuxt-link>
      </div>
      <div>
        <nuxt-link class="my-2" to="/faqs">FAQ</nuxt-link>
      </div>
      <div>
        <nuxt-link class="my-2" to="/contact">Contact</nuxt-link>
      </div>
    </div>
    <div class="px-4 py-2" style="min-width: 200px">
      <div class="is-flex is-align-items-start is-justify-content-center">
        <img max-width="35" :src="require('@/assets/img/pin.png')" contain class="mr-4 mt-2"/>
        <div class="text-left">
          <div class="font-weight-black">European Office</div>
          <div class="">Prinsengracht 201A</div>
          <div class="">Amsterdam, 1015 DT</div>
          <div class="">The Netherlands</div>
        </div>
      </div>
    </div>
    <div class="px-4 py-2" style="min-width: 200px">
      <div class="is-flex is-align-items-center is-justify-content-center">
        <i class="fas fa-envelope"></i>
        <div class="text-left">
          <a class="font-weight-bold black--text" href="mailto:hello@effect.ai" target="_blank">hello@effect.ai</a>
        </div>
      </div>
      <!--      <div class="overline mt-3 mb-2 text-center">SOCIALS</div>-->
      <div class="text-center">
        <a class="my-2" target="_blank" href="https://twitter.com/effectaix">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="my-2" target="_blank" href="http://facebook.com/effectai">
          <i class="fab fa-facebook"></i>
        </a>
        <a class="my-2" target="_blank" href="https://medium.com/effect-ai">
          <i class="fab fa-medium"></i>
        </a>
        <a class="my-2" target="_blank" href="https://www.youtube.com/@effectai">
          <i class="fab fa-youtube"></i>
        </a>
        <a class="my-2" target="_blank" href="https://t.me/effectai">
          <i class="fab fa-telegram"></i>
        </a>
        <a class="my-2" target="_blank" href="https://github.com/effectai">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="text-center">
        <a class="button my-2 is-secondary is-outlined" href="https://worker.effect.ai"
               target="_blank">Join the WorkForce
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
