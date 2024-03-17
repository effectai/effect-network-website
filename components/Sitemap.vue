<template>
  <div class="mb-6 sitemap">
    <div class="columns is-mobile is-multiline">
      <div class="column is-half-mobile is-narrow">
        <div class="menu">
          <p class="menu-label">Effect AI</p>
          <ul class="menu-list">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/developers">Developers</nuxt-link></li>
            <li><nuxt-link to="/ecosystem">Ecosystem</nuxt-link></li>
            <li>
              <a target="_blank" href="https://dao.effect.network">DAO</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="column is-full-mobile is-narrow">
        <div class="menu social-menu is-flex is-flex-wrap-wrap">
          <p class="menu-label">SOCIALS</p>
          <ul class="menu-list">
            <li>
              <a href="https://github.com/effectai" target="_blank"
                ><i class="fab fa-github"></i> GitHub</a
              >
            </li>
          </ul>
          <ul class="menu-list">
            <li>
              <a href="https://twitter.com/effectaix" target="_blank"
                ><i class="fab fa-twitter"></i> Twitter</a
              >
            </li>
            <li>
              <a href="https://t.me/effectai" target="_blank"
                ><i class="fab fa-telegram"></i> Telegram</a
              >
            </li>
            <li>
              <a href="https://discord.gg/effectnetwork" target="_blank"
                ><i class="fab fa-discord"></i> Discord</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="column is-full-mobile">
        <div class="columns">
          <div
            class="column is-half is-flex is-align-items-start is-justify-content-center"
          >
          </div>
          <div
            class="column is-half is-flex is-align-items-start is-justify-content-center"
          >
            <div class="has-text-centered mt-4">
              <div
                class="is-flex is-align-items-center is-justify-content-center"
              >
                <i class="fas fa-envelope is-size-4 mr-2"></i>
                <div class="text-left">
                  <a
                    class="has-text-weight-bold"
                    href="mailto:hello@effect.ai"
                    target="_blank"
                    >hello@effect.ai</a
                  >
                </div>
              </div>
              <a
                class="is-size-3 mx-2 has-text-primary"
                target="_blank"
                href="https://twitter.com/effectaix"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                class="is-size-3 mx-2 has-text-primary"
                target="_blank"
                href="https://t.me/effectai"
              >
                <i class="fab fa-telegram"></i>
              </a>
              <a
                class="is-size-3 mx-2 has-text-primary"
                target="_blank"
                href="https://discord.gg/effectnetwork"
              >
                <i class="fab fa-discord"></i>
              </a>
              <a
                class="is-size-3 mx-2 has-text-primary"
                target="_blank"
                href="https://github.com/effectai"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
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
