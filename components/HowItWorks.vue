<template>
  <div class="split mt-6">
    <div class="container has-text-centered">
      <div class="columns is-relative">
        <split-block class="bg-hover-left">
          <img
            src="~assets/img/icons/coins_white.gif"
            style="height: 90px"
            class="show-on-hover mx-auto"
          />
          <img
            src="~assets/img/icons/coins.png"
            style="height: 90px"
            class="hide-on-hover mx-auto"
          />
          <h1 class="title is-1">Complete Tasks</h1>
          <h1 class="title is-4">
            Complete tasks and earn EFX directly to your wallet.
          </h1>
          <p class="has-text-aligned block">
            Effect.AI is the platform for the Future-of-Work. You can work from
            anywhere, at any time, from any device. Simply create an Effect
            Account and start completing tasks while collecting $EFX directly to
            your wallet!
          </p>
          <p class="block mt-auto">
            <nuxt-link
              class="button mt-auto is-primary is-outlined is-medium"
              to="https://app.effect.network/login"
            >
              Join the workforce
            </nuxt-link>
          </p>
        </split-block>

        <split-block class="bg-hover-right">
          <img
            src="~assets/img/icons/create_white.gif"
            style="height: 90px"
            class="show-on-hover mx-auto"
          />
          <img
            src="~assets/img/icons/create.png"
            style="height: 90px"
            class="hide-on-hover mx-auto"
          />
          <h1 class="title is-1">Create Tasks</h1>
          <h1 class="title is-4">
            Access a global, on-demand, 24x7 scalable workforce
          </h1>
          <p class="has-text-aligned block">
            Tap into a diverse workforce of over 10,000 people who complete
            tasks for you. Choose one of the default task templates to get
            started with text analysis, document transcription, image
            annotations, sentiment analyis and many more!
          </p>
          <p class="block mt-auto">
            <nuxt-link
              class="button is-primary is-outlined is-medium"
              to="https://app.effect.network/campaigns/templates"
            >
              Create a task
            </nuxt-link>
          </p>
        </split-block>
      </div>
    </div>
    <div class="or">OR</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  z-index: 2;
  top: 17px;
  height: 45px;
}
.container {
  position: unset;
}

@import "bulma/sass/utilities/mixins";

.bg-hover {
  z-index: 1;
  transition: 0.3s;
  .title,
  .subtitle {
    transition: 0.3s;
  }
  &:before {
    content: "";
    display: block;
    background: transparent;
    position: absolute;
    height: 100%;
    top: 0;
    width: 100%;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    background: transparent;
    height: 100%;
    background: $primary;
    width: 0;
    top: 0;
    transition: 0.3s;
    z-index: -1;
  }
  .button {
    transition: 0.3s;
  }
}
.bg-hover-left:after,
.bg-hover-left:before {
  right: 50%;
}
.bg-hover-right:after,
.bg-hover-right:before {
  left: 50%;
}
.bg-hover-right:hover:after {
  width: 50%;
  background: $primary;
}
.bg-hover-left:hover:after {
  width: 50%;
  background: $primary;
}
.hide-on-hover {
  display: block;
}
.show-on-hover {
  display: none;
}
.or {
  z-index: 1;
  position: absolute;
  top: calc(60%);
  font-size: 35px;
  font-weight: 900;
  left: calc(50% - 45px);
  width: 90px;
  height: 70px;
  padding-top: 12px;
  text-align: center;
  font-size: 25px;
  background: #fafdff;
  border: 1px solid #bfcdf5;
  box-shadow: 0px 4px 20px rgba(16, 29, 86, 0.2);
  border-radius: 20px;
}
@include desktop {
  .bg-hover:hover {
    color: white;
    .title,
    .subtitle {
      color: white;
    }
    .show-on-hover {
      display: block;
    }
    .hide-on-hover {
      display: none;
    }
    .button {
      border-color: $accent !important;
      background: $accent !important;
      color: black !important;
    }
  }
}
@include touch {
  .bg-hover:before,
  .bg-hover:after,
  .or {
    display: none;
  }
}
</style>
