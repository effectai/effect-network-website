<template>
  <nav
    class="navbar has-background-white pt-2 pb-1 is-sticky top-0"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="effect-navbar is-flex">
        <nuxt-link class="" to="/">
          <img
            style="height: 3.5rem; width: auto"
            src="/img/effect-logo.png"
            alt="Effect Network"
            class="logo p-1"
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
      <div id="navbar" class="navbar-menu" :class="{ 'is-active': mobileMenu }">
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
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const mobileMenu = ref(false);
</script>

<style lang="scss">
nav {
  .navbar-item {
    font-weight: 700;
    margin: 0 0.5rem;

    &:after {
      display: block;
      width: 0;
      height: 2px;
      position: absolute;
      transition: width 0.5s;
      bottom: 8px;
      background: $primary;
      content: "";
    }
  }

  .is-active {
    &:after {
      width: calc(100% - 1.5rem);
    }
  }
}
</style>
