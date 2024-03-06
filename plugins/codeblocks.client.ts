import { VCodeBlock } from "@wdns/vue-code-block";

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.component("VCodeBlock", VCodeBlock);
});
