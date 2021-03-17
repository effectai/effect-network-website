<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img :src="$colorMode.value === 'dark' ? require('@/assets/img/logo_part-white.svg') : require('@/assets/img/logo.svg')"  class="logo">
          </nuxt-link>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
             data-target="navbar" @click="mobileMenu = !mobileMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>


        <div id="navbar" class="navbar-menu" :class="{'is-active': mobileMenu}">
          <div class="navbar-start">

          </div>
          <div class="navbar-end is-align-items-center">
            <nuxt-link class="navbar-item" to="/force" exact-active-class="is-active">
              Work 2.0
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/token-page" exact-active-class="is-active">
              Tokenomics
            </nuxt-link>

            <nuxt-link class="navbar-item" to="/developers" exact-active-class="is-active">
              Build
            </nuxt-link>

            <nuxt-link class="navbar-item" to="/dao" exact-active-class="is-active">
              DAO
            </nuxt-link>
            <div class="navbar-item has-dropdown is-hoverable dapps">
              <nuxt-link to="/dapps" class="navbar-link">
                dApps
              </nuxt-link>

              <div class="navbar-dropdown">
                <nuxt-link to="/force" class="navbar-item">
                  <img src="~assets/img/dapps/effect-force_h100.png" />
                </nuxt-link>
                <nuxt-link to="/dao" class="navbar-item">
                  <img src="~assets/img/dapps/effect-dao_h100.png" />
                </nuxt-link>
                <nuxt-link to="/translate" class="navbar-item">
                  <img src="~assets/img/dapps/effect-translate_h100.png" />
                </nuxt-link>
                <nuxt-link to="/socials" class="navbar-item">
                  <img src="~assets/img/dapps/effect-socials_h100.png" />
                </nuxt-link>
                <nuxt-link to="/captions" class="navbar-item">
                  <img src="~assets/img/dapps/effect-captions_h100.png" />
                </nuxt-link>
                <nuxt-link to="/pieces" class="navbar-item">
                  <img src="~assets/img/dapps/effect-pieces_h100.png" />
                </nuxt-link>
              </div>
            </div>
            <div class="navbar-item" exact-active-class="is-active">
              <nuxt-link class="button is-secondary is" :class="{'is-outlined': $colorMode.value === 'light'}" to="/dao" exact-active-class="is-active">
                Demo
              </nuxt-link>

            </div>
            <darkmode-switcher class="ml-4" />
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
      height: 45px;
      max-width: none;
      max-height: none;
      margin-top: 5px;
      margin-right: 8px;
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
    .navbar {
      .navbar-menu {
        .navbar-link {
          color: $grey-light;
          &:after {
            border-color: $grey-light;
          }
          &.is-active, &:hover {
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
