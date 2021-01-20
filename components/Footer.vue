<template>
  <footer class="footer is-transparent mt-6">
    <nav class="navbar is-transparent pt-4" role="navigation" aria-label="main navigation">
      <div class="container footer-content">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item mt-4" to="/">
<!--            <img src="@/assets/img/logo_text.png" class="logo">-->
<!--            <img src="@/assets/img/logo_white_text.png" class="logo logo-white">-->
          </nuxt-link>
        </div>


        <div id="navbar" class="navbar-menu navbar-centered">
          <div class="navbar-start">
            <nuxt-link class="navbar-item" to="/" exact-active-class="is-active">
              Home
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/about" exact-active-class="is-active">
              About
            </nuxt-link>

            <nuxt-link class="navbar-item" to="/token" exact-active-class="is-active">
              Token
            </nuxt-link>

            <nuxt-link class="navbar-item" to="/contact" exact-active-class="is-active">
              Contact
            </nuxt-link>
          </div>
          <div class="navbar-end">
            <small class="is-size-7">&copy; {{ new Date().getFullYear() }} <b>THE EFFECT NETWORK</b> by EFFECT.AI</small>
          </div>
        </div>
      </div>
    </nav>
<!--    <div class="content has-text-centered">-->
<!--      <p>-->
<!--        &copy; {{ new Date().getFullYear() }} <b>Effect Pieces</b> by <a href="https://effect.ai" target="_blank">Effect.AI</a>-->
<!--      </p>-->
<!--    </div>-->
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    .navbar {
      border-top: 2px solid $primary;
    }
    &.is-transparent {
      background: transparent;
    }
    .logo {
      height: 50px;
    }
    .navbar {
      .navbar-menu {
        margin-top: 0px;
        align-items: center;
      }
    }
  }
</style>
