<template>
  <div class="has-navbar-fixed-top has-background-light">
    <section class="section">
    <div class=" container is-max-widescreen">
      <div class="has-text-centered">
        <h3 class="title is-2">Case studies</h3>
        <h4 class="subtitle">From Innovative Startups to Multinational Companies</h4>
        <p class="has-limited-width is-horizontal-centered">With nearly <strong>8 million tasks</strong> completed, we know our business.
          We proudly serve many clients worldwide, including young innovative startups and large global enterprises from a wide range of industries.</p>
      </div>
      <div class="my-6">
          <div class="columns is-multiline mt-6">
            <div class="column is-half mb-5" v-for="study in cases" :key="study.title">
              <div class="card equal-height always-light">
                  <div class="card-image px-6" v-if="study.clientLogo">
                    <figure class="image px-6">
                      <img :src="study.clientLogo" :alt="study.title" class="px-6 pt-6 pb-3">
                    </figure>
                  </div>
                <div class="card-content">
                  <div class="content px-2">
                    <h4 class="title is-4 mt-2 mb-2">{{study.title}}</h4>
                    <p v-html="study.description"></p>
                    <figure class="image" v-if="study.image">
                      <img :src="study.image" :alt="study.title">
                    </figure>
                  </div>
                </div>
                <div class='card-footer has-text-centered py-5'>
                    <a v-if="study.usecaseLink" :href="study.usecaseLink" target="_blank" class="button is-centered is-primary">
                      <span v-if="study.usecaseLinkText">{{study.usecaseLinkText}}</span>
                      <span v-else>Download Use Case</span>
                    </a>
                    <br>
                    <a v-if="study.extraLink" :href="study.extraLink" target="_blank" class="button is-outlined is-secondary mt-3">{{study.extraLinkText}}</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  export default {
    name: 'Cases',
    head() {
      return {
        title: 'Cases',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Case Studies. From Innovative Startups to Multinational Companies'
          }
        ]
      }
    },
    components: {},
    mounted() {
    },
    data() {
      return {
        cases: [
          {
            title: 'Plastic Bottle Counting',
            description: '<div class="block">The United Nations in Rustavi is running a project focused on reducing plastic bottle usage and enhancing the recycling process.</div>'
            + '<div class="block">Their current intervention aims to raise awareness about plastic pollution and increase the amount of collected plastic by creating a competition between local schools and kindergartens. They need to measure the number of plastic bottles collected weekly at each school. The goal is to automate this process by training the AI model to produce the score without human intervention, but in order to do this, the UN first needs to label their current images with a score of the number of collected plastics.</div>',
            clientLogo: require('@/assets/img/partners/un_color.png'),
            //usecaseLink: '/download/effect_use-case_image-classification.jpeg',
            extraLink: '/download/effect_use-case_image-classification.pdf',
            extraLinkText: 'Image Classification Statistics',
          },
          {
            title: 'Sentiment Analysis',
            clientLogo: require('@/assets/img/partners/ing_color.png'),
            image: require('@/assets/img/sentiment_analysis.png'),
            //usecaseLink: '/download/effect_use-case_sentiment-analysis.jpeg',
            extraLink: '/download/effect_sentimentanalysis.pdf',
            extraLinkText: 'Download Sentiment Analysis Brochure'
          },
          {
            title: 'Invoice Processing',
            description: '<div class="block">Case Study #12 is based on a client that operates globally and offers several products and services in the mail and delivery sector. Being a large and innovative company, one of the many processes this client has been exploring is the automation of data entry for incoming invoices and receipts.</div>'
              + '<div class="block"> This client needs to process thousands of invoices in several languages each month. An automated pipeline was created through a collaboration with the technical team of Effect.AI and the client’s financial department. This particular pipeline is an example of how simple algorithms (Effect Smart Market), together with the power of human input (Effect Force), is utilized in tandem to automate a common business process, making it the perfect bridge for automation of time-consuming business operations. The pipeline is illustrated below.</div>',
            image: require('@/assets/img/asendia_infograph.png'),
            //usecaseLink: '/download/effect_use-case_text-extraction.jpeg',
          },
          {
            title: 'Chatbot Training',
            description: '<div class="block">When it comes to Chatbot training, there are several variables to consider. From utterance creation to intention labeling, a lot of time-consuming, detailed work must be done to make “Mrs. Chatbot” a success. Innovative global brands need multilingual chatbots to serve their diverse customer base. Effect.AI’s chatbot solutions streamline this process and are the sole service provider for chatbot training in the new KPMG Marketplace, helping their clients build the most versatile, intuitive, and responsive chatbots in the market today.</div>',
            clientLogo: require('@/assets/img/partners/kpmg_color.png'),
            extraLink: '/download/effect_use-case_chatbots.pdf',
            extraLinkText: 'Natural Language Processing'
          },
          {
            title: 'Satellite Cloud Annotations',
            description: '<div class="block">Cosine has an extensive history and track record in the aerospace market and are most notably recognized for their excellence in developing projects for the European Space Agency.</div>'
              + '<div class="block">Most exciting among their several projects and initiatives is their artificial intelligence development. In this case study we highlight the method of structuring satellite images of Earth with a custom cloud annotation service on our platform. When we say “cloud” we mean atmospheric clouds and not “cloud computing”.</div><div class="block"> Downloading satellite images from orbiting satellites is costly and there is always the risk of receiving unusable images where the view of the Earth is obstructed due to clouds. It is impossible to analyze images before they are downloaded to avoid receiving unusable data...that’s of course until today!</div>',
            clientLogo: require('@/assets/img/partners/cosine_color.png'),
            //usecaseLink: '/download/effect_use-case_pixel-annotation.jpeg',
          },
          {
            title: 'Linus Tech Tips: Subtitles for Youtube',
            description: '<div class="block"> Over the past decade, Linus Tech Tips has grown its audience to over 10 million subscribers. Their YouTube channel covers everything from computer processors to nuclear fusion reactors. LTT also focuses on emerging and exciting technologies. </div>'
                + '<div class="block">With technology rapidly changing and the world becoming ever more reliant on it in their daily lives, Linus Tech Tips recognized the importance of eliminating language barriers and having their content understood by viewers all over the world. LTT uses Effect Captions to create high-quality and accurate multi-lingual subtitles for their videos. </div>'
                + '<div class="block">YouTube is the second-largest search engine in the world. YouTube’s auto-generated captions and subtitles are not indexed by search algorithms. By having their content subtitled in many languages with Effect Captions, LTT’s videos are fully indexed by YouTube’s search algorithm across many languages and delivered to viewers all over the world. </div>',
            clientLogo: require('@/assets/img/partners/linus.png'),
            // image: require('@/assets/img/rosette_infograph.png'),
            extraLink: 'https://captions.effect.network/',
            extraLinkText: 'Explore Effect Captions'
          }
        ],
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
}
.card-footer {
  margin-top: auto;
  display: block;
}
.card-content {
  flex: auto;
}
.equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}

@media all and (max-width: 770px) {
  .card-image.px-6, .card-image.px-6 .image.px-6 {
    padding: 0 !important;
  }
}
</style>
