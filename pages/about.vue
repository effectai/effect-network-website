<template>
  <div class="has-navbar-fixed-top has-background-light">
    <section class="section">
      <div class=" container is-max-widescreen">
        <div class="has-text-centered">
          <h3 class="title is-2">About us</h3>
          <h4 class="subtitle">Building the Future-of-Work</h4>
        </div>
        <p class="is-size-5 mb-3 mt-6">
          We are building the Future of Work. Everyone says it, but it's true in
          our case: welcome to the first work platform that’s completely
          decentralized and enables people to work from anywhere.
        </p>
        <p class="is-size-5 mb-6">
          Effect Network was established in 2017 by an amazing community and a
          team that’s passionate about a decentralized future. What makes Effect
          tick is the EffectDAO, started in 2021, a community organization with
          the goal to grow Effect Network by supporting the development of
          projects in a socially responsible, inclusive, and transparent
          manner. The DAO is the mechanism that drives frictionless entry into
          Web3 space and the Future of Work.
        </p>
      </div>
    </section>

    <section class="section">
      <div class=" container is-max-widescreen">
        <div class="has-text-centered">
          <h3 class="title is-2">Team</h3>
          <h4 class="subtitle">Meet the team</h4>
        </div>
        <div class="my-6">
            <div class="columns is-multiline mt-6">
              <div class="column is-one-third has-text-centered px-6 mb-5" v-for="member in teamMembers" :key="member.name">
                <a :href="member.link" target="_blank">
                  <figure class="image mx-4 is-hoverable">
                    <div v-if="member.link" class="member-overlay is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap">
                      <i class="fab fa-linkedin"></i>
                    </div>
                    <img class="is-rounded" :src="member.image">
                  </figure>
                </a>
                <a :href="member.link" target="_blank"><h4 class="title is-5 mt-5 mb-2">{{member.name}}</h4></a>
                <p>{{member.title}}</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  export default {
    name: 'Team',
    head() {
      return {
        title: 'Team',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Meet the team'
          }
        ]
      }
    },
    components: {},
    mounted() {
    },
    data() {
      return {
        teamMembers: [
          {
            name: 'Jesse Eisses',
            title: 'Founder',
            link: 'https://www.linkedin.com/in/jesse-eisses-9760ab48/',
            image: require('@/assets/img/team/jesse.jpg')
          },
          {
            name: 'Laurens Verspeek',
            title: 'Founder',
            link: 'https://www.linkedin.com/in/laurensverspeek/',
            image: require('@/assets/img/team/laurens.png')
          },
          {
            name: 'Rochelle Travellow',
            title: 'Chief Talent Officer',
            link: 'https://www.linkedin.com/in/rochelle-effectai',
            image: require('@/assets/img/team/rochelle.png')
          },
          {
            name: 'Gabrielle Ponce',
            title: 'Head of Marketing',
            link: 'https://www.linkedin.com/in/gabrielle-ponce-b801371b2/',
            image: require('@/assets/img/team/gabi.png')
          },
          {
            name: 'Jaïr Zijp',
            title: 'Software Engineer',
            link: 'http://twitter.com',
            image: require('@/assets/img/team/jair.jpg')
          },
          {
            name: 'David Britt',
            title: 'Software Engineer',
            image: require('@/assets/img/team/david.jpg')
          }
          // {
          //   name: 'Team member #8',
          //   title: 'Chief Engineer',
          //   link: 'http://twitter.com',
          //   image: 'https://bulma.io/images/placeholders/128x128.png'
          // },
          // {
          //   name: 'Team member #9',
          //   title: 'Chief Engineer',
          //   link: 'http://twitter.com',
          //   image: 'https://bulma.io/images/placeholders/128x128.png'
          // },
          // {
          //   name: 'Team member #10',
          //   title: 'Chief Engineer',
          //   link: 'http://twitter.com',
          //   image: 'https://bulma.io/images/placeholders/128x128.png'
          // },
          // {
          //   name: 'Team member #11',
          //   title: 'Chief Engineer',
          //   link: 'http://twitter.com',
          //   image: 'https://bulma.io/images/placeholders/128x128.png'
          // },
          // {
          //   name: 'Team member #12',
          //   title: 'Chief Engineer',
          //   link: 'http://twitter.com',
          //   image: 'https://bulma.io/images/placeholders/128x128.png'
          // },
        ].sort(() => Math.random() - 0.5),
        ambassadors: [
          {
            name: 'Jehudah',
            image: require('@/assets/img/ambassadors/jehudah.jpg')
          },
          {
            name: 'Melicio',
            image: require('@/assets/img/ambassadors/melicio.png')
          },
          {
            name: 'Maksim',
            image: require('@/assets/img/ambassadors/maksim.png')
          },
          {
            name: 'Wisse',
            image: require('@/assets/img/ambassadors/wisse.jpeg')
          },
          {
            name: 'Marc',
            image: require('@/assets/img/ambassadors/marc.png')
          },
          {
            name: 'Ian',
            image: require('@/assets/img/ambassadors/ian.png')
          },
          {
            name: 'Bree',
            image: require('@/assets/img/ambassadors/bree.png')
          },
          {
            name: 'Mustafa',
            image: require('@/assets/img/ambassadors/mustafa.jpeg')
          },
          {
            name: 'Ish',
            image: require('@/assets/img/ambassadors/ish.png')
          },
          {
            name: 'Scott',
            image: require('@/assets/img/ambassadors/scott.png')
          },
          {
            name: 'Larry',
            image: require('@/assets/img/ambassadors/larry.png')
          },
          {
            name: 'André',
            image: require('@/assets/img/ambassadors/andre.jpeg')
          },
          {
            name: 'Stepan',
            image: require('@/assets/img/ambassadors/stepan.png')
          }
        ]
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  .member-overlay {
    background: rgba($secondary, 0.85);
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    opacity: 0;
    transition: 0.2s;
    i {
      color: #fff;
      font-size: 2.5rem;
    }
  }
  .image.is-hoverable {
    overflow: hidden;

    &:hover {
      .member-overlay {
        opacity: 1;
      }
    }
  }
</style>
