<template>
  <section class="section has-background-light">
    <div class="banner">
      <div class="circle-container">
        <div class="circle"></div>
      </div>

      <div class=" container is-max-widescreen">

        <div class="has-text-centered">
          <h3 class="title is-2">
            <div>The Effect Network</div>
            <div>blog</div>
          </h3>
          <h4 class="subtitle">Blogs, press releases, and videos about Effect.AI</h4>

        </div>
      </div>

      <div class="my-6 mx-6" id="latest">
        <div>
          <div class="columns is-multiline">
            <div class="column is-one-third" v-for="post in posts" v-if="post.featured" :key="post.title">
              <div class="card" :href="post.href" target="_blank" min-height="300">
                <div class="card-image">
                  <figure class="image is-5by3 background-image" :style="'background-image: url(\''+post.img+'\')'">
                  </figure>
                </div>
                <div class="card-content" style="min-height: 250px;">
                  <div class="menu-label level has-text-white post-type">
                    <span class="level-left">{{ post.date }}</span>
                    <span v-if="post.type == 'video'">Video</span>
                    <span v-else-if="post.type == 'blog'">Blog Post</span>
                    <span v-else-if="post.type == 'press'">Press Release</span>
                    <span v-else>Post</span>
                  </div>
                  <div class="title is-4 is-family-sans-serif">{{post.title}}</div>
                  <p>
                    {{post.text}}
                  </p>
                </div>
                <footer class="card-footer">
                  <a v-if="post.type == 'video'" target="_blank" :href="post.href" class="card-footer-item level">
                    <span class="level-left">Watch Video</span>
                    <i class="fab fa-youtube ml-3 level-right"></i>
                  </a>
                  <a v-else target="_blank" :href="post.href" class="card-footer-item level">
                    <span class="level-left">Read More</span>
                    <i class="fas fa-chevron-right ml-3 level-right"></i>
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Seperation between the content should come here. -->

    <div class="my-6">
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="post in posts" :key="post.title">
          <div class="card" :href="post.href" target="_blank" style="min-height: 200px">
            <div class="card-image">
              <figure class="image background-image " :style="'background-image: url(\''+post.img+'\')'">

                <div class="has-text-white">
                  <span v-if="post.type == 'video'">Video</span>
                  <span v-else-if="post.type == 'blog'">Blog Post</span>
                  <span v-else-if="post.type == 'press'">Press Release</span>
                  <span v-else>Post</span>
                </div>

                <div class="card-content" style="min-height: 200px">

                  <div class="subtitle is-7 has-text-white">{{post.date}}</div>
                  <div class="title is-5 is-family-sans-serif has-text-white">{{post.title}}</div>
                  <footer class="card-footer mb-6">
                    <a v-if="post.type == 'video'" target="_blank" :href="post.href" class="card-footer-item has-text-white level">
                      <span class="level-left">Watch Video</span>
                      <i class="fab fa-youtube ml-3"></i>
                    </a>
                    <a v-else target="_blank" :href="post.href" class="card-footer-item has-text-white level">
                      <span class="level-left">Read More</span>
                      <i class="fas fa-chevron-right ml-3"></i>
                    </a>
                  </footer>

                </div>

              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
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
    mounted() {},
    data() {
      return {
        posts: [{
            type: 'blog',
            img: 'https://miro.medium.com/max/700/0*iezuwY0klJ5sKTEh',
            href: 'https://medium.com/effect-ai/art-and-blockchain-team-up-for-social-good-5d2ba81ccc2',
            title: 'Art and Blockchain Team Up for Social Good',
            date: '01 - 7 - 2021',
            text: 'Effect Pieces Uses Blockchain to connect Artists and Refugees to raise funds and awareness.',
            featured: true
          },
          {
            type: 'blog',
            img: 'https://miro.medium.com/max/700/1*74PSLDJv0drL9jIa1hNfLA.png',
            href: 'https://medium.com/effect-ai/effectdao-proposal-system-is-now-live-on-eos-mainnet-e05710b79d21',
            title: 'EffectDAO Proposal System is now LIVE',
            date: '11 - 30 - 2020',
            text: 'We are excited to announce that one of the core components of the EffectDAO has just been launched on EOS Mainnet. ',
            featured: true
          },
          {
            type: 'press',
            img: 'https://miro.medium.com/max/650/0*0t3MQpIwtwsi3rkg',
            href: 'https://medium.com/@chris_79722/effect-ai-partners-with-ivan-on-tech-academy-8dae0f982d05',
            title: 'Effect.AI Partners With Ivan On Tech Academy',
            date: '09 - 3 - 2020',
            text: 'In our enduring efforts to further enrich blockchain and AI learning opportunities in our Effect AI & Blockchain Centers, we’ve partnered with Ivan On Tech Academy. ',
            featured: true
          },
          {
            type: 'blog',
            img: 'https://miro.medium.com/max/910/1*J5CtrUJQjo1kcpNNfU5p6A.png',
            href: 'https://medium.com/effect-ai/the-effect-dao-phase-0-launching-are-you-ready-3ccc6283d87e',
            title: 'The Effect DAO Phase 0 Launching',
            date: '08 - 15 - 2020',
            text: 'The time has come for the most exciting evolution of The Effect Network! ',
            featured: false
          },
          {
            type: 'press',
            img: 'https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy85ZjE4Yjc1ZTI0ZjM0YmUzYjI5NTRlYmRlMmY0MDZlZS5qcGc=.jpg',
            href: 'https://cointelegraph.com/news/akons-dlt-startup-to-set-up-a-blockchain-hub-in-kenya-in-q4-2020',
            title: 'Effect.AI partners with Akon to launch a Blockchain Hub in Africa',
            date: '07 - 6 - 2020',
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
            date: '10 - 10 - 2018',
            text: ''
          },
          {
            type: 'video',
            img: require('@/assets/img/news/effect_cnbc.jpg'),
            href: 'https://www.youtube.com/watch?v=TRkjXp3t2yg',
            title: 'Effect.AI featured on CNBC hosted by Ted Danson',
            date: '02 - 19 - 2019',
            text: 'Welcome to the 2nd edition of the Effect.AI Monthly Ask-Me-Anything!'
          },
          {
            type: 'press',
            img: 'https://eos.io/wp-content/uploads/2021/01/220_02_WEB_RES_BuildonEOS_APP_Spotlight_medium_JT_05162019-1024x347.jpg',
            href: 'https://eos.io/news/effect-ai-is-affecting-the-way-we-build-monetize-and-power-artificial-intelligence-for-the-better/',
            title: 'EOS: Effect.AI dApp spotlight #BuiltOnEos',
            date: '03 - 19 - 2019',
            text: 'Effect.AI is Affecting the Way We Build, Monetize, and Power Artificial Intelligence — For the Better',
          },
          {
            type: 'video',
            img: require('@/assets/img/news/effect_ama_february_thumbnail.jpg'),
            href: 'https://www.youtube.com/watch?v=IU8n5HO3uUM',
            title: 'Effect.AI Monthly AMA February 2020',
            date: '02 - 28 - 2020',
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
            date: '01 - 31 - 2020',
            text: ''
          },
          {
            type: 'video',
            img: require('@/assets/img/news/force.png'),
            href: 'https://www.youtube.com/watch?v=sFYRujgcH0o',
            title: 'Effect Force | High-quality Training Data for AI',
            date: '11 - 1 - 2019',
            text: 'Effect Force is a versatile and easy way to get or create high quality training data for your AI / machine learning solutions.'
          },
          {
            type: 'blog',
            img: require('@/assets/img/news/winning.png'),
            href: 'https://medium.com/effect-ai/effect-ai-2019-overview-57702ed59c3d',
            title: 'Effect.AI — 2019 Overview',
            date: '12 - 31 - 2019',
            text: ''
          },
          {
            type: 'blog',
            img: require('@/assets/img/news/eos.png'),
            href: 'https://medium.com/effect-ai/effect-ai-brings-artificial-intelligence-to-eos-main-net-ead7e68e09fa',
            title: 'Effect.AI brings Artificial Intelligence to EOS Main Net',
            date: '02 - 21 - 2019',
            text: ''
          },
          {
            type: 'press',
            title: 'Blockchain-startup Effect.ai haalt 11 miljoen op',
            text: 'We are proud to say that we made the 47th place in the KvK (Chamber of Commerce) innovation top 100 for 2019!',
            date: '03 - 9 - 2018',
            img: require('@/assets/img/news/effect-ai.png'),
            href: 'https://www.computable.nl/artikel/nieuws/computable-next/6334555/250449/blockchain-startup-effectai-haalt-11-miljoen-op.html'
          },

          {
            type: 'video',
            img: require('@/assets/img/news/phases.png'),
            href: 'https://www.youtube.com/watch?v=gJ-5wYjUkFA',
            title: 'What is Effect.AI?',
            date: '02 - 22 - 2018',
            text: 'Effect.AI introduces an open, decentralized network that provides services in the Artificial Intelligence market.'
          },

        ],
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  span {
    display: inline-block
  }

  .post-type {
    position: absolute;
    top: -35px;
    right: 0px;
    padding: 5px;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    text-align: right;
  }

  .banner {
    position: relative;
    overflow: hidden;
    min-height: calc(100vh - 70px);

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 45%;
      height: 100%;
      z-index: -2;
      top: 0;
      right: 0; //background: url("~assets/img/circle.png");
      //background-size: cover;
    }
  }

  .circle-container {
    position: absolute;
    right: 0;
    top: 0;
    margin: 20px 10px;
    width: 100%;

    .circle {
      margin-left: auto;
      position: relative;
      width: 1400px;
      height: 1400px;
      margin-right: -10px;
      -webkit-filter: blur(7px);
      -moz-filter: blur(7px);
      -o-filter: blur(7px);
      -ms-filter: blur(7px);
      filter: blur(7px); //mask: $noise, radial-gradient(circle at 50% 0, transparent 30%, #000 (65% + 15%)) 0 0 / 50% 100%;
      border-radius: 100%;
      background: $secondary;
      transition: background 2s;
      transform: rotate(-100deg); //background: radial-gradient(circle at top, rgba(#ffffff, 1) 0%, rgba(#fffef7, 1) 7%, rgba($force-color, 1) 30%, rgba($force-color, 1) 50%, rgba($force-color, 1) 100%);
      background: linear-gradient(-40deg, #723dd4 44%, rgba(84, 194, 255, 0.20) 84%, rgba(255, 251, 241, 0.00) 100%);
      background-size: 150% 400%;
      background-position: 10% 0%;
      animation: grained 0.2s linear infinite, rotate 35s linear infinite; //animation-delay: 0s, 1.0s;

      &:before {
        content: "";
        -webkit-filter: blur(7px);
        -moz-filter: blur(7px);
        -o-filter: blur(7px);
        -ms-filter: blur(7px);
        filter: blur(7px);
        display: block;
        position: absolute;
        top: 240px;
        left: 240px;
        width: 920px;
        height: 920px;
        background: white;
        border-radius: 100%;
      }
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 400px;
      right: -30px;
      width: 350px;
      height: 350px;
      background: white;
      -webkit-filter: blur(7px);
      -moz-filter: blur(7px);
      -o-filter: blur(7px);
      -ms-filter: blur(7px);
    }
  }
</style>
