<template>
  <div>
  <section class="section has-background-light">
    <div class="container is-max-widescreen">
      <div class="has-text-centered my-6">
        <h3 class="title is-2">News & Media</h3>
        <h4 class="subtitle">Blogs, press releases, and videos about Effect.AI</h4>
      </div>
      <div class="my-6" id="latest">
        <div>
          <div class="columns is-multiline">
            <div class="column is-one-third" v-for="post in posts" v-if="post.featured" :key="post.title">
              <div class="card" :href="post.href" target="_blank" min-height="500">
                <div class="card-image">
                  <figure class="image is-5by3 background-image" :style="'background-image: url(\''+post.img+'\')'">
                  </figure>
                </div>
                <div class="card-content" style="min-height: 280px;">
                  <div class="post-type">
                    <div class="columns pt-4">
                      <div class="column is-narrow">
                        <span class="is-size-7 has-text-white">
                          {{post.date}}
                          </span>
                      </div>
                      <div class="column"></div>
                    <div class="column is-narrow">
                      <span class="is-size-6 has-text-white" v-if="post.type == 'video'">Video</span>
                      <span class="is-size-6 has-text-white" v-else-if="post.type == 'blog'">Blog Post</span>
                      <span class="is-size-6 has-text-white" v-else-if="post.type == 'press'">Press Release</span>
                      <span class="is-size-6 has-text-white" v-else>Post</span>
                    </div>
                    </div>
                  </div>
                  <div class="title is-4 is-family-sans-serif">{{post.title}}</div>
                  <p>
                    {{post.text}}
                  </p>
                </div>
                <footer class="card-footer ">
                  <a v-if="post.type == 'video'" target="_blank" :href="post.href" class="card-footer-item" :class="{'has-text-accent': $colorMode.value === 'dark'}">
                    Watch Video <i class="fab fa-youtube ml-3"></i>
                  </a>
                  <a v-else target="_blank" :href="post.href" class="card-footer-item " :class="{'has-text-accent': $colorMode.value === 'dark'}">
                    Read More <i class="fas fa-chevron-right ml-3"></i>
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container is-max-widescreen">
      <div class="">
          <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="post in posts" :key="post.title">
              <div class="card is-flat" :href="post.href" target="_blank">
                <div class="card-image full-image background-image" :style="'background-image: url(\''+post.img+'\')'">
<!--                  <figure class="image is-5by3 background-image" >-->
<!--                  </figure>-->
                </div>
                <div class="card-content is-flex is-justify-content-space-between is-flex-direction-column" style="min-height: 250px;">
                  <div class="is-size-6 has-text-shadow has-text-white has-text-right">
                    <span v-if="post.type == 'video'">Video</span>
                    <span v-else-if="post.type == 'blog'">Blog Post</span>
                    <span v-else-if="post.type == 'press'">Press Release</span>
                    <span v-else>Post</span>
                  </div>
                  <div>
                  <div class="subtitle has-text-white is-7" style="margin-top:70px;">{{post.date}}</div>
                  <div class="title has-text-white is-5 is-family-sans-serif">{{post.title}}</div>
                  </div>
                </div>
                <small class="card-footer">
                  <a v-if="post.type == 'video'" target="_blank" :href="post.href" class="card-footer-item has-text-white" :class="{'has-text-accent': $colorMode.value === 'dark'}">
                    Watch Video <i class="fab fa-youtube ml-3"></i>
                  </a>
                  <a v-else target="_blank" :href="post.href" class="card-footer-item has-text-white" :class="{'has-text-accent': $colorMode.value === 'dark'}">
                    Read More <i class="fas fa-chevron-right ml-3"></i>
                  </a>
                </small>
              </div>
            </div>
          </div>
          <div class="has-text-centered">
            <a :class="{'is-accent': $colorMode.value === 'dark'}" class="button is-secondary m-4" href="https://www.youtube.com/@effectai" target="_blank">
              All Videos
            </a>
            <a :class="{'is-accent': $colorMode.value === 'dark'}" class="button is-secondary m-4" href="https://medium.com/effect-ai" target="_blank">
              All Blogs
            </a>
          </div>
      </div>
    </div>
  </section>
  </div>
</template>


<script>
  export default {
    name: 'News',
    head() {
      return {
        title: 'News & Media - Blogs, press releases, and videos',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'News, blogs, articles, press releases, and videos about Effect.AI.'
          }
        ]
      }
    },
    components: {},
    mounted() {
    },
    data() {
      return {
        posts: [
          {
            type: 'blog',
            img: 'https://miro.medium.com/max/700/0*iezuwY0klJ5sKTEh',
            href: 'https://medium.com/effect-ai/art-and-blockchain-team-up-for-social-good-5d2ba81ccc2',
            title: 'Art and Blockchain Team Up for Social Good',
            date: 'January 7 - 2021',
            text: 'Effect Pieces: Rare digital art masterpieces created by refugees are being sold as NFTs (Non-Fungible Tokens) at auction to raise money and assist with the refugee crisis.',
            featured: true
          },
          {
            type: 'blog',
            img: 'https://miro.medium.com/max/700/1*74PSLDJv0drL9jIa1hNfLA.png',
            href: 'https://medium.com/effect-ai/effectdao-proposal-system-is-now-live-on-eos-mainnet-e05710b79d21',
            title: 'EffectDAO Proposal System is now LIVE',
            date: 'November 30 - 2020',
            text: 'The release of the Effect Proposal System truly brings us one step closer to being a globally connected project where all potential is possible and can be put into action.',
            featured: true
          },
          {
            type: 'press',
            img: 'https://miro.medium.com/max/650/0*0t3MQpIwtwsi3rkg',
            href: 'https://medium.com/@chris_79722/effect-ai-partners-with-ivan-on-tech-academy-8dae0f982d05',
            title: 'Effect.AI Partners With Ivan On Tech Academy',
            date: 'September 3 - 2020',
            text: 'In our enduring efforts to further enrich blockchain and AI learning opportunities in our Effect AI & Blockchain Centers, we’ve partnered with Ivan On Tech Academy.',
            featured: true
          },
          {
            type: 'blog',
            img: 'https://miro.medium.com/max/910/1*J5CtrUJQjo1kcpNNfU5p6A.png',
            href: 'https://medium.com/effect-ai/the-effect-dao-phase-0-launching-are-you-ready-3ccc6283d87e',
            title: 'The Effect DAO Phase 0 Launching',
            date: 'Augustus 15 - 2020',
            text: 'The time has come for the most exciting evolution of the Effect Network! As we close in on the launch of the Effect DAO, the excitement brewing amongst our team and community has become viral…',
            featured: false
          },
          {
            type: 'press',
              img: 'https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy85ZjE4Yjc1ZTI0ZjM0YmUzYjI5NTRlYmRlMmY0MDZlZS5qcGc=.jpg',
            href: 'https://cointelegraph.com/news/akons-dlt-startup-to-set-up-a-blockchain-hub-in-kenya-in-q4-2020',
            title: 'Effect.AI partners with Akon to launch a Blockchain Hub in Africa',
            date: 'July 6 - 2020',
            text: 'Popular musician and blockchain advocate, Akon has partnered with Dutch decentralized artificial intelligence firm, Effect.AI to launch a blockchain education hub in Africa.',
            featured: false
          },
          {
            type: 'blog',
            img: 'https://cdn-images-1.medium.com/max/500/0*rDq3Vh2OiUdlsSM2',
            href: 'https://medium.com/effect-ai/effect-ai-february-2020-update-20b3db93076',
            title: 'Effect.AI — February 2020 Update',
            date: 'March 5 - 2020',
            text: '“Every act of communication is a miracle of translation.”― Ken Liu',
          },
          {
            type: 'video',
            img: require('@/assets/img/news/effect_rtlz.jpg'),
            href: 'https://www.youtube.com/watch?v=FZmuKsMWxRI',
            title: 'Effect.AI feature on Dutch National Television (RTL-Z)',
            date: 'October 10 - 2018',
            text: ''
          },
          {
            type: 'video',
            img: require('@/assets/img/news/effect_cnbc.jpg'),
            href: 'https://www.youtube.com/watch?v=TRkjXp3t2yg',
            title: 'Effect.AI featured on CNBC hosted by Ted Danson',
            date: 'February 19 - 2019',
            text: 'Welcome to the 2nd edition of the Effect.AI Monthly Ask-Me-Anything! This one is all on Chris to answer your hard pressing questions and give you the insights you desire!'
          },
          {
            type: 'press',
            img: 'https://eos.io/wp-content/uploads/2021/01/220_02_WEB_RES_BuildonEOS_APP_Spotlight_medium_JT_05162019-1024x347.jpg',
            href: 'https://eos.io/news/effect-ai-is-affecting-the-way-we-build-monetize-and-power-artificial-intelligence-for-the-better/',
            title: 'EOS: Effect.AI dApp spotlight #BuiltOnEos',
            date: 'March 19 - 2019',
            text: 'Effect.AI is Affecting the Way We Build, Monetize, and Power Artificial Intelligence — For the Better',
          },
          {
            type: 'video',
            img: require('@/assets/img/news/effect_ama_february_thumbnail.jpg'),
            href: 'https://www.youtube.com/watch?v=IU8n5HO3uUM',
            title: 'Effect.AI Monthly AMA February 2020',
            date: 'February 28 - 2020',
            text: ''
          },
          {
            type: 'press',
            title: 'Effect.AI in KVK Innovation Top 100',
            text: 'Our developments haven\'t gone unnoticed! We are proud to say that we made the 47th place in the KvK (Chamber of Commerce) innovation top 100 for 2019!',
            date: '2019',
            img: require('@/assets/img/news/kvk.jpeg'),
            href: 'https://www.kvkinnovatietop100.nl/site/Effect-AI-Open-en-decentraal-netwerk-voor-Kunstmatige-Intelligentie',
          },
          {
            type: 'blog',
            img: require('@/assets/img/news/rosette.png'),
            href: 'https://medium.com/effect-ai/effect-ai-newsletter-january-2020-e25f0692e0e2',
            title: 'Effect.AI — Newsletter January 2020',
            date: 'January 31 - 2020',
            text: ''
          },
          {
            type: 'video',
            img: require('@/assets/img/news/force.png'),
            href: 'https://www.youtube.com/watch?v=sFYRujgcH0o',
            title: 'Effect Force | High-quality Training Data for AI',
            date: 'November 1 - 2019',
            text: 'Effect Force is a versatile and easy way to get or create high quality training data for your AI / machine learning solutions. Want to know more? Go to https://force.effect.ai to get started.'
          },
          {
            type: 'blog',
            img: require('@/assets/img/news/winning.png'),
            href: 'https://medium.com/effect-ai/effect-ai-2019-overview-57702ed59c3d',
            title: 'Effect.AI — 2019 Overview',
            date: 'December 31 - 2019',
            text: ''
          },
          {
            type: 'blog',
            img: require('@/assets/img/news/eos.png'),
            href: 'https://medium.com/effect-ai/effect-ai-brings-artificial-intelligence-to-eos-main-net-ead7e68e09fa',
            title: 'Effect.AI brings Artificial Intelligence to EOS Main Net',
            date: 'February 21 - 2019',
            text: ''
          },
          {
            type: 'press',
            title: 'Blockchain-startup Effect.ai haalt 11 miljoen op',
            text: 'Our developments haven\'t gone unnoticed! We are proud to say that we made the 47th place in the KvK (Chamber of Commerce) innovation top 100 for 2019!',
            date: 'April 9 - 2018',
            img: require('@/assets/img/news/effect-ai.png'),
            href: 'https://www.computable.nl/artikel/nieuws/computable-next/6334555/250449/blockchain-startup-effectai-haalt-11-miljoen-op.html'
          },

          {
            type: 'video',
            img: require('@/assets/img/news/phases.png'),
            href: 'https://www.youtube.com/watch?v=gJ-5wYjUkFA',
            title: 'What is Effect.AI?',
            date: 'February 22 - 2018',
            text: 'Effect.AI introduces an open, decentralized network that provides services in the Artificial Intelligence market.'
          },

        ],
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
.post-type {
  position: absolute;
  top: -53px;
  right: 0px;
  padding: 5px 10px;
  width:100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.card-footer {
  z-index: 1;
  position: relative;
}
.full-image {
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  &:after {
    display: block;
    position: absolute;
    content: "";
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9));
  }
}

</style>
