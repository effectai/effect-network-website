<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
<!--            <img src="@/assets/img/logo.png" class="logo">-->
<!--            <img src="@/assets/img/logo_white.png" class="logo logo-white">-->
            <b>EFFECT NETWORK</b>
          </nuxt-link>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
             data-target="navbar" @click="mobileMenu = !mobileMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>


        <div id="navbar" class="navbar-menu navbar-centered" :class="{'is-active': mobileMenu}">
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
            <darkmode-switcher />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import DarkmodeSwitcher from '@/components/DarkmodeSwitcher';
  export default {
    components: {
      DarkmodeSwitcher
    },
    data() {
      return {
        loading: false,
        mobileMenu: false
      }
    },

    computed: {
      wallet() {
        return (this.$wallet) ? this.$wallet.wallet : null
      }
    }
  }
</script>

<style lang="scss">
  .navbar {
    &.is-transparent {
      background: transparent;
    }
    .logo {
      height: 40px;
      max-width: none;
      max-height: none;
      margin-right: 8px;
    }
    .logo-white {
      display:none;
    }
    .navbar-brand {
      .navbar-item {
        &.is-active, &:hover {
          color: $primary;
        }
      }
    }

    .navbar-menu {
      margin-top: 8px;
      justify-content: center;

      .navbar-item {
        font-weight: 500;

        &:after {
          display: block;
          width: 0;
          height: 2px;
          position: absolute;
          transition: width 0.5s;
          bottom: 10px;
          background: $accent;
          content: "";
        }

        &.is-active {
          color: $primary;
          font-weight: 700;

          &:after {
            width: calc(100% - 1.5rem);
          }
        }
      }
    }
    @media screen and (min-width: $desktop) {
      .navbar-centered {
        .navbar-start {
          justify-content: center;
          margin-left: auto;
          margin-right: 0;
        }
      }
    }

    @media all and (max-width: $desktop) {
      .navbar-menu {
        .navbar-item {
          &:after {
            display: none;
          }
        }
      }
    }
  }
  .dark-mode {
    .logo {
      display:none;
    }
    .logo-white {
      display:block;
    }
    .navbar {
      .navbar-menu {
        .navbar-item {
          color: $grey-light;
          &:after {
            background: white;
          }
          &.is-active, &:hover {
            color: white;
          }
        }
      }
      .navbar-brand {
        .navbar-item {
          color: white;
          &.is-active, &:hover {
            color: white;
          }
        }
      }
    }
  }
</style>
