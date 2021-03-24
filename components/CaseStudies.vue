<template>
  <section class="section">
    <div class="container is-max-widescreen my-6">
      <div class="has-text-centered">
        <h1 class="title">Case Studies</h1>
        <p class="has-limited-width is-horizontal-centered">With nearly <strong>8 million tasks</strong> completed, we know our business. 
          We proudly serve many clients worldwide, including young innovative startups and large global enterprises from a wide range of industries.</p>
      </div>
      <div class="my-6">
        <div class="columns is-multiline has-text-centered">
          <div class="column is-one-third p-0 " v-for="study in cases" :key="study.title">
            <div class="card equal-height is-flat">
                <header class="card-header">
                <div class="card-header-title">
                  <div class="has-text-centered is-flex is-centered is-flex-wrap-wrap is-justify-content-center is-align-content-center">
                    <img :src="study.clientLogo" v-if="study.clientLogo" :alt="study.title" class="case-logo block" style="display:block;"/>
                    <div class="case-logo block is-flex is-flex-wrap-wrap is-align-content-center" v-if="study.clientLogoAlt">
                      <h3 class="title is-3">{{study.clientLogoAlt}}</h3>
                    </div>                      
                    <p class="has-text-weight-semibold block" style="width: 100%">{{study.title}}</p>
                    <b><nuxt-link to="/cases" class="button is-outlined is-secondary" >View Case Study</nuxt-link></b>
                  </div>
                </div>
              </header>
            </div>
          </div>
          <nuxt-link to="/cases" class="button is-secondary mt-6 is-horizontal-centered" :class="{'is-accent': $colorMode.value === 'dark'}">All Case Studies</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        cases: [
          {
            title: 'Plastic Bottle Counting',
            clientLogo: require('@/assets/img/partners/un_color.png'),
          },
          {
            title: 'Sentiment Analysis',
            clientLogo: require('@/assets/img/partners/ing_color.png')
          },
          {
            title: 'Invoice Processing',
            clientLogoAlt: 'Case Study #12',
          },
          {
            title: 'Chatbot Training',
            clientLogo: require('@/assets/img/partners/kpmg_color.png'),
          },
          {
            title: 'Satellite Cloud Annotations',
            clientLogo: require('@/assets/img/partners/cosine_color.png'),
          },
          {
            title: 'Rosette: Subtitles for Youtube',
            clientLogo: require('@/assets/img/partners/youtube_color.png'),
          }
        ],
      };
    },
  };
</script>
<style lang="scss" scoped>
.card, .card-header {
  height: 100%;
}
.card-footer {
  margin-top: auto;
  display: block;
  border-top: none;
}
.card-content {
  flex: auto;
}
.equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.case-logo {
  height: 70px;
}

</style>