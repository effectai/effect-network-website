<template>
  <div class="py-6">
    <section class="section">
            <div class="container has-text-centered">
        <h1 class="title is-1" data-aos="fade-up">
          FAQ
        </h1>
        <h2 class="subtitle" data-aos="fade-up" data-aos-delay="100">Everything you need to get started on Effect Network</h2>
      </div>
      <div class="container mt-6">
        <div
          class="has-limited-width is-horizontal-centered"
          style="width: 960px"
          data-aos="fade-up" data-aos-delay="150"
        >
          <accordion>
            <accordion-item
              v-for="faq in faqs"
              :key="faq.question"
              class="has-background-white has-radius mb-2"
            >
              <!-- This slot will handle the title/header of the accordion and is the part you click on -->
              <template slot="accordion-trigger">
                <h3 class="subtitle mb-0 has-text-weight-semibold">
                  {{ faq.question }}
                </h3>
              </template>
              <!-- This slot will handle all the content that is passed to the accordion -->
              <template slot="accordion-content">
                <!-- eslint-disable vue/no-v-html -->
                <span v-html="faq.answer" />
              </template>
            </accordion-item>
          </accordion>
        </div>
        <p class="block has-text-centered mt-4">
          <nuxt-link class="button is-primary" data-aos="zoom-in" to="/faq">All Questions</nuxt-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'Who completes my tasks?',
          answer:
            'Our WorkForce is made up of more than 10,000 people across the globe who go through a series of certifications to qualify for the tasks you need. With us you only get the best.'
        },
                {
          question: 'How are task prices determined?',
          answer:
            'Task prices are determined by the requester, eventhough we do recommend to them how much the taks should be priced, it is currently not yet enforced. A vote will have to take place in order to nail down the price for each task for the platform. '
        },
                {
          question: 'Who are the requesters?',
          answer:
            'It can be anyone! You can create tasks just as easily as I can. Join app.effect.network in order to start creating tasks today!'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
