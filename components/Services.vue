<template>
  <section class="section">
    <div class="container is-max-widescreen my-6">
      <div class="has-text-centered">
        <h1 class="title">Effect <b>Services</b></h1>
        <p class="has-limited-width is-horizontal-centered">From high quality translations to the very best in social media engagement to Machine Learning Training Data. There are many services available for you to tap into with ease. </p>
      </div>
      <div class="columns is-multiline is-variable is-5 mt-6 is-centered">
        <div class="column is-4">
          <nuxt-link to="/force"  class="card is-flat is-hoverable dapp-force">
            <header class="card-header">
              <div class="card-header-title ">
                <div class="has-text-centered" style="width: 100%">
                  <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-force_part-white_h100.png') : require('@/assets/img/dapps/effect-force_h100.png')" class="dapp-logo block"/>
                  <img src="~assets/img/dapps/effect-force_white_h100.png" class="dapp-logo-white block"/>
                  <p class="has-text-weight-semibold block">Work From Anywhere At Anytime</p>
                  <b> <nuxt-link to="/force" class="button is-outlined is-secondary" :class="{'is-accent': $colorMode.value === 'dark'}">Learn More</nuxt-link> </b>
                </div>
              </div>
            </header>
<!--            <div class="card-content">-->
<!--              <h4 class="subtitle is-5 has-text-weight-semibold">A Global Workforce to Structure Data</h4>-->
<!--              <div>-->
<!--                Whether you need training data, sentiment analysis,-->
<!--                translations, or survey respondents, Force has you covered. We have thousands of workers, speaking-->
<!--                25+ languages that can complete your tasks at scale.-->
<!--              </div>-->
<!--            </div>-->
<!--            <footer class="card-footer">-->
<!--              <p class="card-footer-item">-->
<!--                <b> <a href="https://force.effect.ai" :class="{'has-text-accent': $colorMode.value === 'dark'}" target="_blank">EXPLORE EFFECT FORCE</a> </b>-->
<!--              </p>-->
<!--            </footer>-->
          </nuxt-link>
        </div>
        <div class="column is-4">
          <a href="https://dao.effect.network" target="_blank" class="card is-flat is-hoverable dapp-dao">
            <header class="card-header">
              <div class="card-header-title ">
                <div class="has-text-centered" style="width: 100%">
                  <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-dao_part-white_h100.png') : require('@/assets/img/dapps/effect-dao_h100.png')" class="dapp-logo block"/>
                  <img src="~assets/img/dapps/effect-dao_white_h100.png" class="dapp-logo-white block"/>
                  <p class="has-text-weight-semibold block">Decentralized Proposals & Voting</p>
                  <b> <a href="https://dao.effect.network" class="button is-outlined is-secondary" :class="{'is-accent': $colorMode.value === 'dark'}" target="_blank">Learn More</a> </b>
                </div>
              </div>
            </header>
<!--            <div class="card-content">-->
<!--              <h4 class="subtitle is-5 has-text-weight-semibold">A Global Workforce to Structure Data</h4>-->
<!--              <div>-->
<!--                Whether you need training data, sentiment analysis,-->
<!--                translations, or survey respondents, Force has you covered. We have thousands of workers, speaking-->
<!--                25+ languages that can complete your tasks at scale.-->
<!--              </div>-->
<!--            </div>-->
<!--            <footer class="card-footer">-->
<!--              <p class="card-footer-item">-->
<!--                <b> <a href="https://force.effect.ai" :class="{'has-text-accent': $colorMode.value === 'dark'}" target="_blank">EXPLORE EFFECT FORCE</a> </b>-->
<!--              </p>-->
<!--            </footer>-->
          </a>
        </div>
        <div class="column is-4">
          <a href="https://translate.effect.network" target="_blank" class="card is-flat is-hoverable dapp-translate">
            <header class="card-header">
              <div class="card-header-title ">
                <div class="has-text-centered" style="width: 100%">
                  <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-translate_part-white_h100.png') : require('@/assets/img/dapps/effect-translate_h100.png')" class="dapp-logo block"/>
                  <img src="~assets/img/dapps/effect-translate_white_h100.png" class="dapp-logo-white block"/>
                  <p class="has-text-weight-semibold block">The New Era of Translation</p>
                  <b> <a href="https://translate.effect.network" class="button is-outlined is-secondary" :class="{'is-accent': $colorMode.value === 'dark'}" target="_blank">Learn More</a> </b>
                </div>
              </div>
            </header>
<!--            <div class="card-content">-->
<!--              <h4 class="subtitle is-5 has-text-weight-semibold">A Global Workforce to Structure Data</h4>-->
<!--              <div>-->
<!--                Whether you need training data, sentiment analysis,-->
<!--                translations, or survey respondents, Force has you covered. We have thousands of workers, speaking-->
<!--                25+ languages that can complete your tasks at scale.-->
<!--              </div>-->
<!--            </div>-->
<!--            <footer class="card-footer">-->
<!--              <p class="card-footer-item">-->
<!--                <b> <a href="https://force.effect.ai" :class="{'has-text-accent': $colorMode.value === 'dark'}" target="_blank">EXPLORE EFFECT FORCE</a> </b>-->
<!--              </p>-->
<!--            </footer>-->
          </a>
        </div>
        <div class="column is-4">
          <a href="https://socials.effect.network" target="_blank"  class="card is-flat is-hoverable dapp-socials">
            <header class="card-header">
              <div class="card-header-title ">
                <div class="has-text-centered"  style="width: 100%">
                  <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-socials_part-white_h100.png') : require('@/assets/img/dapps/effect-socials_h100.png')" class="dapp-logo block"/>
                  <img src="~assets/img/dapps/effect-socials_white_h100.png" class="dapp-logo-white block"/>
                  <p class="has-text-weight-semibold block">Real Social Media Engagement</p>
                  <b> <a href="https://socials.effect.network" class="button is-outlined is-secondary" :class="{'is-accent': $colorMode.value === 'dark'}" target="_blank">Learn More</a> </b>
                </div>
              </div>
            </header>
<!--            <div class="card-content">-->
<!--              <h4 class="subtitle is-5 has-text-weight-semibold">A Global Workforce to Structure Data</h4>-->
<!--              <div>-->
<!--                Whether you need training data, sentiment analysis,-->
<!--                translations, or survey respondents, Force has you covered. We have thousands of workers, speaking-->
<!--                25+ languages that can complete your tasks at scale.-->
<!--              </div>-->
<!--            </div>-->
<!--            <footer class="card-footer">-->
<!--              <p class="card-footer-item">-->
<!--                <b> <a href="https://force.effect.ai" :class="{'has-text-accent': $colorMode.value === 'dark'}" target="_blank">EXPLORE EFFECT FORCE</a> </b>-->
<!--              </p>-->
<!--            </footer>-->
          </a>
        </div>
        <div class="column is-4">
          <a  href="https://captions.effect.network" target="_blank" class="card is-flat is-hoverable dapp-captions">
            <header class="card-header">
              <header class="card-header">
                <div class="card-header-title ">
                  <div class="has-text-centered" style="width: 100%">
                    <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-captions_part-white_h100.png') : require('@/assets/img/dapps/effect-captions_h100.png')" class="dapp-logo block"/>
                    <img src="~assets/img/dapps/effect-captions_white_h100.png" class="dapp-logo-white block"/>
                    <p class="has-text-weight-semibold block">Perfect Subtitles for YouTube</p>
                    <b> <a href="https://captions.effect.network" class="button is-outlined is-secondary" :class="{'is-accent': $colorMode.value === 'dark'}" target="_blank">Learn More</a> </b>
                  </div>
                </div>
              </header>
            </header>
<!--            <div class="card-content">-->
<!--              <h4 class="subtitle is-5 has-text-weight-semibold">A Global Workforce to Structure Data</h4>-->
<!--              <div>-->
<!--                Whether you need training data, sentiment analysis,-->
<!--                translations, or survey respondents, Force has you covered. We have thousands of workers, speaking-->
<!--                25+ languages that can complete your tasks at scale.-->
<!--              </div>-->
<!--            </div>-->
<!--            <footer class="card-footer">-->
<!--              <p class="card-footer-item">-->
<!--                <b> <a href="https://force.effect.ai" :class="{'has-text-accent': $colorMode.value === 'dark'}" target="_blank">EXPLORE EFFECT FORCE</a> </b>-->
<!--              </p>-->
<!--            </footer>-->
          </a>
        </div>
<!--        <div class="column is-4">-->
<!--          <a href="https://superrare.co/effectpieces" target="_blank" class="card is-flat is-hoverable dapp-pieces">-->
<!--            <header class="card-header">-->
<!--              <div class="card-header-title ">-->
<!--                <div class="has-text-centered" style="width: 100%;">-->
<!--                  <img :src="$colorMode.value === 'dark' ? require('@/assets/img/dapps/effect-pieces_part-white_h100.png') : require('@/assets/img/dapps/effect-pieces_h100.png')" class="dapp-logo block"/>-->
<!--                  <img src="~assets/img/dapps/effect-pieces_white_h100.png" class="dapp-logo-white block"/>-->
<!--                  <p class="has-text-weight-semibold block">Crowdsourced Art on the Blockchain</p>-->
<!--                  <b> <a href="https://superrare.co/effectpieces" class="button is-outlined is-secondary" :class="{'is-accent': $colorMode.value === 'dark'}" target="_blank">Learn More</a> </b>-->
<!--                </div>-->
<!--              </div>-->
<!--            </header>-->
<!--&lt;!&ndash;            <div class="card-content">&ndash;&gt;-->
<!--&lt;!&ndash;              <h4 class="subtitle is-5 has-text-weight-semibold">A Global Workforce to Structure Data</h4>&ndash;&gt;-->
<!--&lt;!&ndash;              <div>&ndash;&gt;-->
<!--&lt;!&ndash;                Whether you need training data, sentiment analysis,&ndash;&gt;-->
<!--&lt;!&ndash;                translations, or survey respondents, Force has you covered. We have thousands of workers, speaking&ndash;&gt;-->
<!--&lt;!&ndash;                25+ languages that can complete your tasks at scale.&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <footer class="card-footer">&ndash;&gt;-->
<!--&lt;!&ndash;              <p class="card-footer-item">&ndash;&gt;-->
<!--&lt;!&ndash;                <b> <a href="https://force.effect.ai" :class="{'has-text-accent': $colorMode.value === 'dark'}" target="_blank">EXPLORE EFFECT FORCE</a> </b>&ndash;&gt;-->
<!--&lt;!&ndash;              </p>&ndash;&gt;-->
<!--&lt;!&ndash;            </footer>&ndash;&gt;-->
<!--          </a>-->
<!--        </div>-->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .dapp-logo, .dapp-logo-white {
    max-height: 70px;
  }

  .dark-mode {
    .card {
      &.is-hoverable {
        .card-header {
          background: $secondary;
          transition: background 0.1s;

          .card-header-title {
            color: white;
          }

          .button {
            background: white;
            color: $secondary;
            border: none;
          }
        }

        &.dapp-force {
          .card-header {
            background: darken($force-color, 10%);
          }
        }

        &.dapp-dao {
          .card-header {
            background: darken($dao-color, 10%);
          }
        }

        &.dapp-translate {
          .card-header {
            background: darken($translate-color, 10%);
          }
        }

        &.dapp-socials {
          .card-header {
            background: darken($socials-color, 10%);
          }
        }

        &.dapp-captions {
          .card-header {
            background: darken($captions-color, 10%);
          }
        }

        &.dapp-pieces {
          .card-header {
            background: darken($pieces-color, 10%);
          }
        }

        .dapp-logo {
          display: none !important;
        }

        .dapp-logo-white {
          display: inline-block;
        }
      }
    }
  }

  .card {
    .card-content {
      padding: 1.25rem 2.25rem;
    }
    .dapp-logo-white {
      display: none;
    }
    .card-header {
      width: 100%;
    }
    &.is-hoverable:hover {
      .card-header {
        background: $secondary;
        transition: background 0.1s;
        .card-header-title {
          color: white;
        }
        .button {
          background: white;
          color: $secondary;
          border: none;
        }
      }
      &.dapp-force {
        .card-header {
          background: $force-color;
        }
      }
      &.dapp-dao {
        .card-header {
          background: $dao-color;
        }
      }
      &.dapp-translate {
        .card-header {
          background: $translate-color;
        }
      }
      &.dapp-socials {
        .card-header {
          background: $socials-color;
        }
      }
      &.dapp-captions {
        .card-header {
          background: $captions-color;
        }
      }
      &.dapp-pieces {
        .card-header {
          background: $pieces-color;
        }
      }
      .dapp-logo {
        display: none !important;
      }
      .dapp-logo-white {
        display: inline-block;
      }
    }
  }
</style>
