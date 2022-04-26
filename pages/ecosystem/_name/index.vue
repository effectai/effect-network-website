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
      dapp: dapps.submissions.find(e => e.group_name === this.name),
    }
  },
  created () {
    if (this.name) {
      this.dapp = dapps.submissions.find(e => e.group_name === this.name) 
    }
    if (!this.dapp) {
      return this.$nuxt.error({ statusCode: 404, message: "Can't find dApp" })
    }
  },
  methods: {
    getImageLink (img_url) {
      return require(`@/assets/img/ecosystem/${img_url}`)
    },
  }
}
</script>

<style scoped lang="scss">
figure img {
  max-width: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: $card-radius;
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
</style>