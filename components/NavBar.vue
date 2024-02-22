<template>
  <div class="has-background-light">
    <nav
      class="navbar is-transparent is-fixed-top"
      :class="{ 'is-scrolling has-background-light': isScrolling }"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img
              :src="
                $colorMode.value === 'dark'
                  ? require('@/assets/img/logo_white.svg')
                  : require('@/assets/img/logo.svg')
              "
              class="logo"
            />
          </nuxt-link>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            @click="mobileMenu = !mobileMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbar"
          class="navbar-menu"
          :class="{ 'is-active': mobileMenu }"
        >
          <div class="navbar-start"></div>
          <div class="navbar-end is-align-items-center">
            <!-- <div @click="mobileMenu = false"> -->
            <!-- <nuxt-link class="navbar-item" to="/launchathon" exact-active-class="is-active"> -->
            <!-- Launch-a-thon -->
            <!-- </nuxt-link> -->
            <!-- </div> -->
            <div @click="mobileMenu = false">
              <nuxt-link
                class="navbar-item"
                to="/token-page"
                exact-active-class="is-active"
              >
                Token
              </nuxt-link>
            </div>
            <div @click="mobileMenu = false">
              <nuxt-link
                class="navbar-item"
                to="/news"
                exact-active-class="is-active"
              >
                News
              </nuxt-link>
            </div>
            <div @click="mobileMenu = false">
              <nuxt-link
                class="navbar-item"
                to="/ecosystem"
                exact-active-class="is-active"
              >
                Ecosystem
              </nuxt-link>
            </div>
            <div @click="mobileMenu = false">
              <a
                href="https://dao.effect.network"
                target="_blank"
                class="navbar-item"
                exact-active-class="is-active"
              >
                DAO
              </a>
            </div>
            <div class="navbar-item" exact-active-class="is-active">
              <div @click="mobileMenu = false">
                <a
                  href="https://app.effect.network"
                  target="_blank"
                  class="button is-outlined"
                  :class="{
                    'is-accent': $colorMode.value === 'dark',
                    'is-primary': $colorMode.value !== 'dark'
                  }"
                  exact-active-class="is-active"
                >
                  Launch App
                </a>
              </div>
            </div>
            <!-- <darkmode-switcher class="ml-4" /> -->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import DarkmodeSwitcher from "@/components/DarkmodeSwitcher";
export default {
  props: ["isScrolling"],
  components: {
    DarkmodeSwitcher
  },
  data() {
    return {
      loading: false,
      mobileMenu: false
    };
  },

  computed: {
    wallet() {
      return this.$wallet ? this.$wallet.wallet : null;
    }
  }
};
</script>

<style lang="scss">
.navbar {
  &.is-transparent {
    background: transparent;
  }

  &.is-scrolling {
    box-shadow: $box-shadow;
  }

  .logo {
    height: 45px;
    max-width: none;
    max-height: none;
    margin-right: 8px;
  }
  .navbar-brand {
    .navbar-item {
      &.is-active,
      &:hover {
        color: $primary;
      }
    }
  }

  .navbar-burger {
    height: auto;
  }

  .navbar-menu {
    margin-top: 8px;
    margin-bottom: 8px;
    justify-content: center;
    .navbar-item {
      font-weight: 500;
      padding: 10px 20px;
      text-align: center;
      &.dapps {
        img {
          max-height: 2.5rem;
          width: auto;
          max-width: none;
        }
        .navbar-item:hover {
          background-color: whitesmoke !important;
        }
      }
      &:after {
        display: block;
        width: 0;
        height: 2px;
        position: absolute;
        transition: width 0.5s;
        bottom: 10px;
        background: $secondary;
        content: "";
      }
      &.is-active {
        color: $primary;
        font-weight: 700;
        &:after {
          width: calc(100% - 1.5rem - 15px);
        }
      }
    }
  }
}

.dark-mode {
  .navbar-burger {
    color: $white;
  }
  .navbar-dropdown {
    background: $primary;
    border-top-color: $primary;
  }
  .navbar-menu {
    .navbar-link {
      color: $grey-light;
      &:after {
        border-color: $grey-light;
      }
      &.is-active,
      &:hover {
        color: white;
        &:after {
          border-color: white;
        }
      }
    }
    .navbar-item {
      color: $grey-light;
      &:after {
        background: white;
      }
      &.is-active,
      &:hover {
        color: white;
      }
      &.dapps .navbar-item:hover {
        background-color: rgba(0, 0, 0, 0.3) !important;
      }
    }
  }
  .navbar-brand {
    .navbar-item {
      color: white;
      &.is-active,
      &:hover {
        color: white;
      }
    }
  }

  @media all and (max-width: 770px) {
    .navbar-menu {
      background: $primary;
      .navbar-link {
        color: $white;
        &:after {
          border-color: $grey-light;
        }
        &.is-active,
        &:hover {
          color: $primary;
        }
      }
      .navbar-link:not(.is-arrowless) {
        padding-right: 0.75rem;
      }
      .navbar-item {
        color: $white;
        &:after {
          background: white;
        }
        &.is-active,
        &:hover {
          color: $primary;
        }
      }
    }
    .navbar-brand {
      .navbar-item {
        color: white;
        &.is-active,
        &:hover {
          color: $primary;
        }
      }
    }
  }
}
</style>
