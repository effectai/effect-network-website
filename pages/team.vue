<template>
  <div class="has-navbar-fixed-top has-background-light">
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
                    <div v-if="member.link" class="member-overlay is-flex is-justify-content-center is-flex-wrap-wrap is-align-content-center">
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

        <div class="my-6">
            <h4 class="title is-family-sans-serif has-text-weight-bold">
              Ambassadors
            </h4>
            <p class="has-limited-width">Right from the very beginning of Effect.AI, the project has been about community.
              In the true sense of decentralization we want to connect the globe. From day one there have been community members who have contributed and help spread the word on Effect.AI in many creative ways.
              This prompted us to create The Effect Ambassadors Movement aka T.E.A.M., a program designed to offer opportunities and incentives to those who want to be more involved in the project.
              T.E.A.M. is also a platform where participants are rewarded for their efforts!</p>
            <div class="columns is-multiline mt-6">
              <div class="column is-one-fifth has-text-centered px-4 mb-4" v-for="ambassador in ambassadors" :key="ambassador.name">
                <figure class="image px-4">
                  <img class="is-rounded" :src="ambassador.image">
                </figure>
                <h5 class="title is-6 mt-4 mb-1">{{ambassador.name}}</h5>
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
            name: 'Chris Dawe',
            title: 'CEO',
            link: 'https://www.linkedin.com/in/chris-r-dawe-b79217151/',
            image: require('@/assets/img/team/chris.jpg')
          },
          {
            name: 'Jesse Eisses',
            title: 'CTO',
            link: 'https://www.linkedin.com/in/jesse-eisses-9760ab48/',
            image: require('@/assets/img/team/jesse.jpg')
          },
          {
            name: 'Laurens Verspreek',
            title: 'Chief Engineer',
            link: 'https://www.linkedin.com/in/laurensverspeek/',
            image: require('@/assets/img/team/laurens.jpg')
          },
          // {
          //   name: 'Team member #4',
          //   title: 'Chief Engineer',
          //   link: 'http://twitter.com',
          //   image: 'https://bulma.io/images/placeholders/128x128.png'
          // },
          // {
          //   name: 'Team member #5',
          //   title: 'Chief Engineer',
          //   link: 'http://twitter.com',
          //   image: 'https://bulma.io/images/placeholders/128x128.png'
          // },
          // {
          //   name: 'Team member #6',
          //   title: 'Chief Engineer',
          //   link: 'http://twitter.com',
          //   image: 'https://bulma.io/images/placeholders/128x128.png'
          // },
          // {
          //   name: 'Team member #7',
          //   title: 'Chief Engineer',
          //   link: 'http://twitter.com',
          //   image: 'https://bulma.io/images/placeholders/128x128.png'
          // },
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
        ],
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
