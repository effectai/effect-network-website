<template>
  <div class="has-background-light">
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img :src="$colorMode.value === 'dark' ? require('@/assets/img/logo_white.svg') : require('@/assets/img/logo.svg')"  class="logo">
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
            <div @click="mobileMenu = false">
              <nuxt-link class="navbar-item" to="/" exact-active-class="is-active">
                Home
              </nuxt-link>
            </div>
             <div @click="mobileMenu = false">
            <nuxt-link class="navbar-item" to="/force" exact-active-class="is-active">
              Work 3.0
            </nuxt-link>
             </div>
             <div @click="mobileMenu = false">
            <nuxt-link class="navbar-item" to="/token-page" exact-active-class="is-active">
              EFX Token
            </nuxt-link>
             </div>

             <div @click="mobileMenu = false">
            <nuxt-link class="navbar-item" to="/for-developers" exact-active-class="is-active">
              Develop
            </nuxt-link>
             </div>

             <div @click="mobileMenu = false">
            <nuxt-link class="navbar-item" to="/news" exact-active-class="is-active">
              Blog
            </nuxt-link>
               </div>
            <div class="navbar-item has-dropdown is-hoverable dapps">
               <div @click="mobileMenu = false">
              <nuxt-link to="/#dapps" class="navbar-link">
                dApps
              </nuxt-link>
                 </div>

              <div class="navbar-dropdown">
                <nuxt-link to="/force" class="navbar-item">
                  <img src="~assets/img/dapps/effect-force_h100.png" />
                </nuxt-link>
                <a target="_blank" href="https://dao.effect.network" class="navbar-item">
                  <img src="~assets/img/dapps/effect-dao_h100.png" />
                </a>
                <a target="_blank" href="https://translate.effect.network" class="navbar-item">
                  <img src="~assets/img/dapps/effect-translate_h100.png" />
                </a>
                <a href="https://socials.effect.network" target="_blank" class="navbar-item">
                  <img src="~assets/img/dapps/effect-socials_h100.png" />
                </a>
                <a target="_blank" href="https://captions.effect.network" class="navbar-item">
                  <img src="~assets/img/dapps/effect-captions_h100.png" />
                </a>
                <a target="_blank" href="https://superrare.co/effectpieces" class="navbar-item">
                  <img src="~assets/img/dapps/effect-pieces_h100.png" />
                </a>
              </div>
            </div>
            <div class="navbar-item" exact-active-class="is-active">
               <div @click="mobileMenu = false">
              <nuxt-link class="button is-secondary is-outlined" :class="{'is-accent': $colorMode.value === 'dark'}" to="/token-page" exact-active-class="is-active">
                Buy EFX
              </nuxt-link>
                 </div>

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
