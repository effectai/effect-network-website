<template>
  <div class="banner" data-aos="fade-in">
    <div class="video-bg">
      <video
        class="is-absolute"
        autoplay=""
        loop=""
        muted=""
        src="@/assets/videos/hero_e.mp4"
      ></video>
    </div>
    <section class="section">
      <div class="container is-max-widescreen mt-6">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title is-spaced" data-aos="fade-up">
              <span class="is-uppercase">Igniting The AI Revolution</span>
            </h1>
            <h1
              class="subtitle has-background-white-blur pr-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <span class="pr-6">
                Step into the Future with Effect.AI, the Decentralized Scalable
                Workforce On-Demand, Pioneering the Birth of Next-Gen AI
                Models</span
              >
            </h1>
            <div
              class="is-flex is-size-3 is-align-items-center is-primary has-text-primary"
              data-aos-delay="300"
            >
              <a
                target="_blank"
                href="https://app.effect.network"
                class="button is-primary mr-5"
                :class="{ 'is-accent': $colorMode.value === 'dark' }"
                >Launch App</a
              >
              <!-- //twitter -->
              <div>
                <a
                  target="_blank"
                  href="https://twitter.com/effectaix"
                  class="is-primary has-text-primary"
                  :class="{ 'is-accent': $colorMode.value === 'dark' }"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/effectaix"
                  class="is-primary has-text-primary"
                  :class="{ 'is-accent': $colorMode.value === 'dark' }"
                >
                  <i class="fab fa-discord"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default defineComponent({
  data() {
    return {
      markerSvg: require("@/assets/img/icons/map_person.svg"),
    };
  },
  components: {},
  mounted() {},
});
</script>

<style lang="scss" scoped>
#globe {
  position: absolute;
  top: calc(100vh - 800px);
  left: -420px;
  z-index: -1;
  // height: 100px !important;
  @include mobile {
    top: calc(100vh - 500px);
    left: -100px;
    @media (max-height: 700px) {
      top: calc(100vh - 350px);
    }
  }
}
.banner {
  overflow: hidden;
  position: relative;
  // background: url('~assets/img/logo-3d.png');
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: bottom right;
  min-height: 500px;

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
  position: absolute;
  width: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
