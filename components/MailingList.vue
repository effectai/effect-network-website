<template>
  <section class="hero is-secondary-alt">
    <div class="hero-body container has-text-centered">
      <h1 class="title is-2">
        Join our mailing list
      </h1>
      <h4 class="subtitle is-6">
        Get the latest news from across The Effect Network.
      </h4>
      <form @submit.prevent="subscribe" v-if="!subscribed">
        <div class="field has-addons is-justify-content-center">
          <div class="control">
            <input type="email" v-model="email" class="input is-white is-outlined"  placeholder="Enter your email">
          </div>
          <div class="control">
            <button type="submit" class="button is-accent" :class="{'is-loading': loading}">Subscribe</button>
          </div>
        </div>
      </form>
      <div v-else class="has-text-success subtitle has-text-weight-semibold">
        Thanks for subscribing!
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Subscribe',
    data () {
      return {
        loading: false,
        subscribed: false,
        email: null
      };
    },
    methods: {
      subscribe: async function () {
        if(this.email) {
          this.loading = true
          try {
            await axios.post(`https://rosette-backend.rosette.ai/subscribe`, {email: this.email});
            this.subscribed = true
          } catch (e) {
            //this.$modal.show({text: 'Could not subscribe, try again later or send an email to support@effect.ai', color: 'error'})
            alert("Could not subscribe, try again later or send an email to support@effect.ai")
          }
          this.loading = false
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
.hero {
  background-image: url('~assets/img/force-c2a-bg.png');
  background-position: right;
  background-size: cover;
}
</style>
