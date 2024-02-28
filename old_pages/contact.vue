<template>
  <div>
      <div class="container is-max-widescreen has-text-centered my-6 has-navbar-fixed-top">
        <h1 class="title is-2">Contact Us</h1>
      <div class="subtitle">
        If you have any <nuxt-link to="/faqs">questions</nuxt-link>, requests, or need support, please shoot us an email at:
      </div>
      <div class="block">
        <a  class="pa-4 mx-auto is-size-3" target="_blank" href="mailto:hello@effect.ai">
          hello@effect.ai
        </a>
      </div>
      <div class="subtitle">
        Or fill in the form below
      </div>
      <div ref="typeform" id="typeform">loading..</div>
    </div>
  </div>
</template>

<script>
const typeformEmbed = require('@typeform/embed');

export default {
  mounted() {
    typeformEmbed.makeWidget(
      this.$refs.typeform,
      'https://form.typeform.com/to/GTZ4k2',
      {
        opacity: 50,
        hideScrollbars: true,
        hideFooter: true,
        hideHeader: true,
        buttonText: "Start Form",
        onSubmit: function () {
          console.log('Typeform successfully submitted')
        }
      }
    )
  }
}
</script>

<style lang="scss" scoped>
#typeform {
  height: 400px;
  width: 100%;
  background: $white;
}
.bdziaR {
    opacity: 1 !important;
  }
</style>

