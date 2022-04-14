<template>
  <div>
    <section class="section  mt-6 pt-6">
      <div class="container has-text-centered">
        <h1 class="title is-1">
          FAQ
        </h1>
        <h2 class="subtitle">Everything you need to get started on Effect Network</h2>
        <div class="
            mt-5
            field
            has-addons has-text-centered
            is-horizontal-centered
            has-limited-width
          ">
          <div class="control is-expanded">
            <input
              v-model="search"
              class="input is-primary"
              type="text"
              placeholder="Search by keyword"
            >
          </div>
          <div class="control">
            <a class="button is-primary has-text-weight-semibold"> Search </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-background-light">
      <div class="container">
        <div
          class="has-limited-width is-horizontal-centered"
          style="width: 960px"
        >
          <accordion>
            <accordion-item
              v-for="faq in filteredFaqs"
              :key="faq.question"
              class="has-background-white has-radius mb-2"
            >
              <!-- This slot will handle the title/header of the accordion and is the part you click on -->
              <template slot="accordion-trigger">
                <h3 class="subtitle mb-4 has-text-weight-semibold">
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
      </div>
    </section>
    <section class="section has-background-image has-text-centered">
      <div class="container">
        <div>
          <div class="">
            <h1 class="title is-spaced">
              Didn't find your<br>answer?
            </h1>
            <h2 class="subtitle">Join our Discord</h2>
          </div>
          <div class="mt-3">
            <a
              href="https://discord.gg/effectnetwork"
              target="_blank"
              class="subtitle is-1"
            >
              <i class="fab fa-discord" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      faqs: [
        {
          question: 'Who completes my tasks?',
          answer:
            'Our WorkForce is made up of more than 10,000 people across the globe who go through a series of certifications to qualify for the tasks you need. With us you only get the best.'
        },
                {
          question: 'Who completes my tasks?',
          answer:
            'Our WorkForce is made up of more than 10,000 people across the globe who go through a series of certifications to qualify for the tasks you need. With us you only get the best.'
        },
                {
          question: 'Who completes my tasks?',
          answer:
            'Our WorkForce is made up of more than 10,000 people across the globe who go through a series of certifications to qualify for the tasks you need. With us you only get the best.'
        }
      ]
    }
  },
  computed: {
    filteredFaqs() {
      if (this.search !== null) {
        return this.faqs.filter((faq) => {
          return (
            faq.question.toLowerCase().includes(this.search.toLowerCase()) ||
            faq.answer.toLowerCase().includes()
          )
        })
      }
      return this.faqs
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
