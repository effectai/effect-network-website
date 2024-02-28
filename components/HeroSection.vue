<template>
  <div class="banner" data-aos="fade-in">
    <div class="video-bg is-absolute">
      <BlobScene class="w-full h-full" />
    </div>
    <section class="section">
      <div class="container is-max-widescreen mt-6">
        <div class="columns">
          <div
            class="mt-6 column is-half"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1 class="mt-6 title is-spaced">
              <span class="is-uppercase has-text-white"
                >Igniting The AI Revolution</span
              >
            </h1>
            <h1 class="subtitle pr-6" data-aos="fade-up" data-aos-delay="150">
              <span class="pr-6 has-text-white">
                Bringing AI To the Masses, the Decentralized Scalable Workforce
                On-Demand. Enabling the Birth of next-gen AI models</span
              >
            </h1>
            <div
              class="is-flex is-size-3 is-align-items-center is-primary has-text-primary is-in-front"
              data-aos="fade-left"
              data-aos-delay="550"
            >
              <a
                target="_blank"
                href="https://app.effect.network"
                class="button is-secondary mr-5"
                >Launch App</a
              >
              <!-- //twitter -->
              <div>
                <a
                  target="_blank"
                  href="https://twitter.com/effectaix"
                  class="is-primary has-text-white mr-2"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/effectaix"
                  class="is-primary has-text-white mr-2"
                >
                  <i class="fab fa-discord"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/effectai"
                  class="is-primary has-text-white"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.banner {
  position: relative;
  // background: url('~assets/img/logo-3d.png');
  min-height: 750px;

  .section,
  .container,
  .columns {
    @include mobile {
      height: 100%;
    }
  }
}
@include desktop {
  .title {
    font-size: 54px;
  }
}

.video-bg {
  background: #000046; /* fallback for old browsers */
  background: linear-gradient(
    to left,
    #a3a5f0,
    #000046
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
  height: 100%;
}
</style>
