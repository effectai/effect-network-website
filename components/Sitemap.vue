<template>
  <div class="mb-6 sitemap">
    <div class="columns is-mobile is-multiline">
      <div class="column is-half-mobile is-narrow">
        <div class="menu">
          <p class="menu-label">
            Get Started
          </p>
          <ul class="menu-list">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/token-page">Tokenomics</nuxt-link></li>
            <li><nuxt-link to="/for-developers">Build</nuxt-link></li>
            <li><a target="_blank" href="https://dao.effect.network">DAO</a></li>
            <li><nuxt-link to="/news">Blog</nuxt-link></li>
            <li><nuxt-link to="/team">Team</nuxt-link></li>
            <li><nuxt-link to="/brand">Brand</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="column is-half-mobile is-narrow">
        <div class="menu">
          <p class="menu-label">
            dApps
          </p>
          <ul class="menu-list">
            <li><a href="https://worker.effect.ai" target="_blank">Effect Force</a></li>
            <li><a href="https://dao.effect.network" target="_blank">Effect DAO</a></li>
            <li><a href="https://translate.effect.network" target="_blank">Effect Translate</a></li>
            <li><a href="https://socials.effect.network" target="_blank">Effect Socials</a></li>
            <li><a href="https://captions.effect.network" target="_blank">Effect Captions</a></li>
<!--            <li><a href="https://superrare.co/effectpieces" target="_blank">Effect Pieces</a></li>-->
          </ul>
        </div>
      </div>
      <div class="column is-full-mobile is-narrow">
        <div class="menu social-menu is-flex is-flex-wrap-wrap">
          <p class="menu-label">
            SOCIALS
          </p>
          <ul class="menu-list">
            <li><a href="https://twitter.com/effectaix" target="_blank"><i class="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="https://t.me/effectai" target="_blank"><i class="fab fa-telegram"></i> Telegram</a></li>
            <li><a href="https://www.youtube.com/channel/UCWzHpI310baipgvVMCxcwHA" target="_blank"><i class="fab fa-youtube"></i> YouTube</a></li>
            <li><a href="https://www.facebook.com/effectai" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/effectai" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
           <ul class="menu-list">
            <li><a href="https://github.com/effectai" target="_blank"><i class="fab fa-github"></i> GitHub</a></li>
            <li><a href="https://medium.com/effect-ai" target="_blank"><i class="fab fa-medium"></i> Medium</a></li>
            <li><a href="https://www.reddit.com/r/effectai" target="_blank"><i class="fab fa-reddit"></i> Reddit</a></li>
            <li><a href="https://weibo.com/7578875568/info" target="_blank"><i class="fab fa-weibo"></i> Weibo</a></li>
          </ul>
        </div>
      </div>
      <div class="column is-full-mobile ">
        <div class="columns is-mobile">

          <div class="column is-half is-half-mobile is-flex is-align-items-start is-justify-content-center">
            <img width="30" src="~assets/img/icons/pin.svg" contain class="mr-4 mt-2"/>
            <div>
              <div class="menu-label mb-0">Europe Office</div>
              <u>Effect.AI B.V.</u>
              <div>Prinsengracht 201A</div>
              <div>Amsterdam, 1015 DT</div>
              <div>&nbsp;</div>
              <div>The Netherlands</div>
            </div>
          </div>
          <div class="column is-half is-half-mobile is-flex is-align-items-start is-justify-content-center">
            <img width="30" src="~assets/img/icons/pin.svg" contain class="mr-4 mt-2"/>
            <div>
              <div class="menu-label mb-0">Asia Office</div>
              <u>Effect Network Limited</u>
              <div>Unit B, 12/F, Hang Seng</div>
              <div>Causeway Bay Building, 28 YEE</div>
              <div>Wo Street, Causeway Bay</div>
              <div>Hong Kong</div>
            </div>
          </div>
        </div>
        <!--      <div class="overline mt-3 mb-2 text-center">SOCIALS</div>-->
        <div class="has-text-centered mt-4">
          <div class="is-flex is-align-items-center is-justify-content-center">
            <i class="fas fa-envelope is-size-4 mr-2"></i>
            <div class="text-left">
              <a class="has-text-weight-bold" href="mailto:hello@effect.ai" target="_blank">hello@effect.ai</a>
            </div>
          </div>
          <a class="is-size-3 mx-2 has-text-primary" target="_blank" href="https://twitter.com/effectaix">
            <i class="fab fa-twitter"></i>
          </a>
          <a class="is-size-3 mx-2 has-text-primary" target="_blank" href="http://facebook.com/effectai">
            <i class="fab fa-facebook"></i>
          </a>
          <a class="is-size-3 mx-2 has-text-primary" target="_blank" href="https://medium.com/effect-ai">
            <i class="fab fa-medium"></i>
          </a>
          <a class="is-size-3 mx-2 has-text-primary" target="_blank" href="https://www.youtube.com/@effectai">
            <i class="fab fa-youtube"></i>
          </a>
          <a class="is-size-3 mx-2 has-text-primary" target="_blank" href="https://t.me/effectai">
            <i class="fab fa-telegram"></i>
          </a>
          <a class="is-size-3 mx-2 has-text-primary" target="_blank" href="https://github.com/effectai">
            <i class="fab fa-github"></i>
          </a>
        </div>
<!--        <div class="has-text-centered">-->
<!--          <a class="button my-2 is-secondary is-outlined" href="https://worker.effect.ai"-->
<!--             target="_blank">Join the WorkForce-->
<!--          </a>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sitemap * {
  color: $white;
}

.social-menu {
  flex-direction: column;
}

@media all and (max-width: 770px) {
 .social-menu {
   flex-direction: row;
   .menu-label {
     width: 100%;
   }
   .menu-list {
     width: 50%;
   }
 }
}
</style>
