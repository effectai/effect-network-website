<template>
  <div class="has-background-primary">
    <nav
      class="navbar is-fixed-top"
      :class="{ 'is-scrolling has-background-light': isScrolling }"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img src="/img/logo.svg" class="logo" />
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
            <div @click="mobileMenu = false">
              <nuxt-link
                class="navbar-item"
                to="/developers"
                exact-active-class="is-active"
              >
                Developers
              </nuxt-link>
            </div>
            <div @click="mobileMenu = false">
              <nuxt-link
                to="/ecosystem"
                class="navbar-item"
                exact-active-class="is-active"
              >
                Ecosystem
              </nuxt-link>
            </div>
            <div class="navbar-item" exact-active-class="is-active">
              <div @click="mobileMenu = false">
                <a
                  href="https://app.effect.network"
                  target="_blank"
                  class="button is-outlined is-primary"
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

<script setup lang="ts">
const loading = ref(false);
const mobileMenu = ref(false);

const props = defineProps<{
  isScrolling: boolean;
}>();
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
</style>
