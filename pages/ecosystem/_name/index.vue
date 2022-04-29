<template>
  <section class="section">
    <div class="container py-6" v-if="dapp">
      <div class="columns">
        <div class="p-4 column is-one-fifth is-one-whole-mobile">
          <figure>
            <img :src="getImageLink(dapp.image_url)" v-bind:alt="dapp.image_url">
          </figure>
          <div class="container" v-if="dapp">
            <div class="social-icons is-flex is-justify-content-center">
              <a :href="dapp.campaign_url" v-if="dapp.campaign_url" target="_blank">
                <img :src="require('@/assets/img/icons/effect.svg')" style="height: 35px"/>
              </a>
              <a :href="dapp.github_url" v-if="dapp.github_url" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a :href="dapp.youtube_url" v-if="dapp.youtube_url" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 column mb-6 is-two-fifths is-one-whole-mobile">
          <h1 class="title is-2 mb-3">{{dapp.group_name}}</h1>
          <div class="tags">
            <span v-for="tag in dapp.tags" :key="tag" class="tag is-info is-light">{{ tag }}</span>
          </div>
          <p class="has-text-grey is-flex is-clipped mb-0">
            {{ dapp.description }}
          </p>
          <a :href="dapp.website" v-if="dapp.website" class="button is-primary mt-3">
            Visit website
          </a>
        </div>
      </div>
      <hr>
      <div class="columns">
        <div class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen" v-if="nextDapp">
          <h2 class="subtitle my-4 has-text-weight-semibold">Next dApp</h2>
            <div class="card is-shadowless has-background-white p-4" @click="goToDapp(nextDapp.group_name)">
              <div class="card-image mx-auto mb-2">
                <figure>
                  <img :src="getImageLink(nextDapp.image_url)" v-bind:alt="nextDapp.image_url">
                </figure>
              </div>

              <div class="card-content p-2">
                <section class="title-section">
                  <div class="media-content">
                    <h2 class="title is-5 has-text-weight-medium mb-3 has-text-centered has-text-black">
                      {{ nextDapp.group_name }}
                    </h2>
                    <div class="tags is-centered">
                      <span v-for="tag in nextDapp.tags" @click="addFilter(tag)" :key="tag" class="tag is-info is-light">{{ tag }}</span>
                    </div>
                    <p class="has-text-grey is-flex is-clipped mb-0">
                      {{ nextDapp.description.length > 200 ? `${nextDapp.description.slice(0, 200)}...` : nextDapp.description }}
                    </p>
                  </div>
                </section>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import dapps from '@/static/json/dapps.json'

export default {
  data () {
    return {
      name: this.$route.params.name,
      loading: false,
      dapp: null,
      nextDapp: null,
    }
  },
  created () {
    if (this.name) {
      this.dapp = dapps.submissions.find(e => e.group_name === this.name)
      const dappIndex = dapps.submissions.findIndex(e => e.group_name === this.name)
      this.nextDapp = (dappIndex + 1) > dapps.submissions.length - 1 ? dapps.submissions[0] : dapps.submissions[dappIndex + 1]
    }
    if (!this.dapp) {
      return this.$nuxt.error({ statusCode: 404, message: "Can't find dApp" })
    }
  },
  methods: {
    getImageLink (img_url) {
      return require(`@/assets/img/ecosystem/${img_url}`)
    },
    goToDapp (name) {
      this.$router.push(`/ecosystem/${name}`)
    },
  }
}
</script>

<style scoped lang="scss">
.is-one-fifth figure {
  @include mobile {
    display: flex;
    justify-content: center;
  }
  img {
    max-width: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: $card-radius;
    
  }
}
.social-icons {
  justify-content: center;
  align-items: center;
  a {
    display: inline-block;
    margin: 10px 7px;
  }
  i {
    color: #CACDD9;
    font-size: 1.9rem;
  }
}
hr {
  display: block;
  overflow: hidden;
}

.card:hover {
  box-shadow: $box-shadow !important;
}

.card {
  transition: all .3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 1;
  margin-top: auto;
  border-style: solid;
  border-width: 1px;
  border-color: #ededed;
  .card-image {
    border: 1px solid #E8EEFF;
    overflow: hidden;
    height: 150px !important;
    border-radius: $card-radius !important;
    figure, img {
      height: 150px !important;
    }
    img {
      width: 100%;
      object-fit: cover;
      // border-radius: $card-radius !important;
    }
  }
}
</style>