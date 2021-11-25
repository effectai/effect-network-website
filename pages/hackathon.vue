<template>
  <div>
    <div class="hackathon-hero is-primary hero has-navbar-fixed-top">
      <section class="section">
        <div class="container">
          <div class="columns hackathon-hero-content pb-6 pt-6">
            <div class="column is-two-fifths mt-6">
              <h2 class="title is-1">Effect Network<br>1st Hackathon</h2>
              <p class="block has-text-weight-bold">
                Join to create the decentralized network for human intelligence!
              </p>
              <p class="block">
                Effect Network is focused on creating a distributed workforce where workers and requesters can easily connect with each other. Join our hackathon and become a builder in the Future of Work by building a decentralized app that harnesses the power of Effect Force.
              </p>
            </div>
            <div class="column is-four-fifths" style="margin-top: 9rem">
              <div class="content has-text-centered reward-container">
                <h1 class="title has-text-centered">Win $55k in prizes!</h1>
                <img :src="require('@/assets/img/coins.png')" />
                <p class="block">
                  Register solo or team-up with <span class="has-text-accent">2 to 5 superstars</span>.<br>The Devpost platform is used to register and collaborate with your team.
                </p>
                <a href="https://effect-network-hackathon.devpost.com/" target="_blank" class="button is-accent mt-5">
                  Join now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered">Book your Schedule!</h1>
        <div class="my-6">
          <div class="columns is-multiline mt-6">
            <div class="column is-3 has-special-hover">
              <a target="_blank" href="https://youtu.be/xx8QEtZQieI">
                <div class="card has-text-centered has-gradient">
                  <div class="card-content">
                    <div class="content">
                      <div class="block">
                        <p class="has-text-weight-bold is-size-5">
                          24 Nov, 2021
                        </p>
                      </div>
                      <div class="block">
                        <img :src="require('@/assets/img/icons/speaker-4.png')" class="is-icon-size-medium has-radius"/>
                      </div>
                      <div class="block">
                        <span class="is-5 mt-1 has-text-weight-bold">Laurens</span>
                        <p class="has-text-accent">CE</p>
                        <div class="is-divider" />
                      </div>
                      <div class="block">
                        <h5 class="is-5">Hands-on with<br>the Effect SDK</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="column is-3 has-special-hover">
              <a target="_blank" href="https://youtu.be/LkYj0-jRKKw">
                <div class="card has-text-centered has-gradient">
                  <div class="card-content">
                    <div class="content">
                      <div class="block">
                        <p class="has-text-weight-bold is-size-5">
                          25 Nov, 2021
                        </p>
                      </div>
                      <div class="block">
                        <img :src="require('@/assets/img/icons/speaker-2.png')" class="is-icon-size-medium has-radius"/>
                      </div>
                      <div class="block">
                        <span class="is-5 mt-1 has-text-weight-bold">Jesse</span>
                        <p class="has-text-accent">CTO</p>
                        <div class="is-divider" />
                      </div>
                      <div class="block">
                          <h5 class="is-5 is-link">Let's Tackle It</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="column is-3">
              <div class="card has-text-centered has-gradient">
                <div class="card-content">
                  <div class="content">
                    <div class="block">
                      <p class="has-text-weight-bold is-size-5">
                        26 Nov, 2021
                      </p>
                    </div>
                    <div class="block">
                      <img :src="require('@/assets/img/icons/speaker-1.png')" class="is-icon-size-medium has-radius"/>
                    </div>
                    <div class="block">
                      <span class="is-5 mt-1 has-text-weight-bold">Chris Dawe</span>
                      <p class="has-text-accent">CEO</p>
                      <div class="is-divider" />
                    </div>
                    <div class="block">
                      <h5 class="is-5">How to Perfect a Pitch</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-3">
              <div class="card has-text-centered has-gradient">
                <div class="card-content">
                  <div class="content">
                    <div class="block">
                      <p class="has-text-weight-bold is-size-5">
                        26 Nov, 2021
                      </p>
                    </div>
                    <div class="block">
                      <img :src="require('@/assets/img/icons/speaker-3.png')" class="is-icon-size-medium has-radius"/>
                    </div>
                    <div class="block">
                      <span class="is-5 mt-1 has-text-weight-bold">Rochelle</span>
                      <p class="has-text-accent">Chief Talent Officer</p>
                      <div class="is-divider" />
                    </div>
                    <div class="block">
                      <h5 class="is-5">How to Curate<br>Your Workforce</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
        <div class="container">
          <h1 class="title has-text-centered">Submission Requirements</h1>
          <div class="my-6">
            <div class="columns">
              <div class="column is-3 has-text-left">
                <img :src="require('@/assets/img/icons/movie_player.svg')" class="is-icon-size-small" />
                <p>
                  A 3-minute video demonstration of the application uploaded to YouTube and made public with the hashtags <span class="has-text-accent">#EffectNetworkHackathon</span> and <span class="has-text-accent">#FutureOfWork</span>.
                </p>
              </div>
              <div class="column is-3 has-text-left">
                <img :src="require('@/assets/img/icons/code_doc.svg')" class="is-icon-size-small" />
                <p>
                  Source code submitted to GitHub that uses the Effect SDK and includes a readme with details for deployment or operation.
                </p>
              </div>
              <div class="column is-3 has-text-left">
                <img :src="require('@/assets/img/icons/template.svg')" class="is-icon-size-small" />
                <p>
                  A campaign with template on the Effect Force testnet.
                </p>
              </div>
              <div class="column is-3 has-text-left">
                <img :src="require('@/assets/img/icons/wireframe.svg')" class="is-icon-size-small" />
                <p>
                  A user interface, either functioning or designed.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered">Resources</h1>
        <div class="my-6 has-background-black-transparent has-limited-width is-horizontal-centered has-radius py-5">
          <div class="columns">
            <div class="column is-4 is-flex is-justify-content-center">
              <a href="https://github.com/effectai/effect-js" target="_blank" class="custom-hover">
                <img :src="require('@/assets/img/icons/sdk.svg')" class="is-icon-size-small" />
              </a>
            </div>
            <div class="column is-4 is-flex is-justify-content-center">
              <a href="https://github.com/effectai/effect-network" target="_blank" class="custom-hover">
                <img :src="require('@/assets/img/icons/github_white.svg')" class="is-icon-size-small" />
              </a>
              </div>
            <div class="column is-4 is-flex is-justify-content-center">
              <a href="https://discord.gg/effectnetwork" target="_blank" class="custom-hover">
                <img :src="require('@/assets/img/icons/discord.svg')" style="height: 50px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered">FAQ</h1>
        <div class="my-6">
        <V-accordion>
          <template v-slot:title>
            <h5 class="is-size-5">
              Do I need to pay to register for the hackathon?
            </h5>
          </template>
          <template v-slot:content>
            <span>
              No. The Effect hackathon is completely free to join for everyone that qualifies under the hackathon rules.
            </span>
          </template>
        </V-accordion>
        <V-accordion>
          <template v-slot:title>
            <h5 class="is-size-5">
              Do I need to have any specific qualifications to be a participant for the Hackathon? 
            </h5>
          </template>
          <template v-slot:content>
            <span>
              If you love to build things, you are more than welcome to participate in the hackathon. It’s recommended that you have some experience in coding, or that you team up with at least 1 programmer, as you will need to develop an application.
            </span>
          </template>
        </V-accordion>
        <V-accordion>
          <template v-slot:title>
            <h5 class="is-size-5">
              How do I submit what I have made for the hackathon?
            </h5>
          </template>
          <template v-slot:content>
            <span>
              You will have to submit your hackathon entry through GitHub. The Devpost platform should be used to communicate with your team and register your final entry.
            </span>
          </template>
        </V-accordion>
        <V-accordion>
          <template v-slot:title>
            <h5 class="is-size-5">
              Do we need to have the entire idea fully working? 
            </h5>
          </template>
          <template v-slot:content>
            <span>
              The submission doesn’t have to be a finished product. However, the submission should be functional so that it can be reviewed by the judges. This means it should have a user interface with at least a couple of working interactions.
            </span>
          </template>
        </V-accordion>
        <V-accordion>
          <template v-slot:title>
            <h5 class="is-size-5">
              How is the environment? Will your environment support any language? Will you provide any IDE and DB for us to work on ideas? 
            </h5>
          </template>
          <template v-slot:content>
            <span>
              The hackathon and its content are in the English language. The development of your application will be based on the Effect SDK which is a NodeJS package. It’s encouraged to develop your submission in Javascript (or a language that can interop with Javascript), but this is not a requirement.
            </span>
          </template>
        </V-accordion>
        <V-accordion>
          <template v-slot:title>
            <h5 class="is-size-5">
              Does one have to be online and available for the entire duration of the Hackathon? 
            </h5>
          </template>
          <template v-slot:content>
            <span>
              No. You are free to attend the hackathon at whatever capacity you want. But everything you develop for your submission has to be built during the span of the event.
            </span>
          </template>
        </V-accordion>
        <V-accordion>
          <template v-slot:title>
            <h5 class="is-size-5">
              Do I need to give a demo for the product that I have built?
            </h5>
          </template>
          <template v-slot:content>
            <span>
              Your final submission should include a video of how your application works and that shows its functionality.
            </span>
          </template>
        </V-accordion>
        <V-accordion>
          <template v-slot:title>
            <h5 class="is-size-5">
              If it is a team submission, does that mean all team members will have access to work at the same time? 
            </h5>
          </template>
          <template v-slot:content>
            <span>
              This is an online event. All team members will have access to the Devpost platform and can collaborate in the GitHub repository of the project.
            </span>
          </template>
        </V-accordion>
        <V-accordion>
          <template v-slot:title>
            <h5 class="is-size-5">
              Who will own the IP (Intellectual Property) Rights to the product that I have built? 
            </h5>
          </template>
          <template v-slot:content>
            <span>
              The intellectual property of what you develop during the hackathon is owned by the team that made it. It is up to you what happens to it after the event.
            </span>
          </template>
        </V-accordion>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vaccordion from '@/components/Vaccordion';

export default {
  colorMode: 'dark',
  components: {
    'V-accordion': Vaccordion
  }
}
</script>

<style scoped lang="scss">
.has-special-hover:hover {
  div.card {
    border: 1px solid $accent;
  }
}
table.table.is-custom {
  td, th {
    border: 1px solid #505DF1;
    color: $white;
  }
  tbody {
    background: #101D56;
  }
  thead {
    background: #505DF1;
  }
}
a.custom-hover {
  padding: 15px;
  border: 2px dashed transparent;
  &:hover {
     border-color: #505DF1
  }
}
.is-icon-size-small {
  height: 50px;
}
.is-icon-size-medium {
  height: 116px;
}
div.reward-container {
  background: rgba(11, 21, 62, 0.6);
  max-width: 600px;
  padding: 60px;
}
.is-bordered {
  border: 1px solid #505DF1
}
.is-absolute { 
  position: absolute;
}
.has-gradient {
  background: linear-gradient(180deg, #5158FA 0%, #101D56 100%);
}
.is-divider {
  border: 1px solid rgba(81, 88, 250, 0.5);
}
.is-link {
  text-decoration: underline;
}
.hackathon-hero {
  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: url('~assets/img/grad_hackathon.png');
}
@media all and (max-width: 770px) {
  .hackathon-hero {
    background-position: left top;
    .hackathon-hero-content {
      padding-top: 0 !important;
      .is-two-fifths {
        padding-top: 0 !important;
      }
    }
  }
}
</style>