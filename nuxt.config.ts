// https://nuxt.com/docs/api/configuration/nuxt-config
import glsl from "vite-plugin-glsl";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      rpcUrl: process.env.EOS_RPC_URL || "https://eos.greymass.com",
      statisticsStaleTime: process.env.STATISTICS_CACHE_TIME_MS || "600000",
      contracts: {
        force: process.env.FORCE_CONTRACT || "force.efx",
        daoProposals: process.env.DAO_PROPOSALS_CONTRACT || "daoproposals",
        efx: process.env.EFX_TOKEN_CONTRACT || "efx.token",
        feePool: process.env.FEE_POOL_CONTRACT || "feepool.efx",
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      titleTemplate: "%s - Effect AI",
      title: "Effect AI",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxt/content", "@tresjs/nuxt", "@vueuse/nuxt", "@nuxt/image"],
  content: {
    markdown: {
      remarkPlugins: ["remark-unwrap-images"],
    },
  },
  build: {
    transpile: ["vue-countup-v3"],
  },
  plugins: [{ src: "~/plugins/aos.client.ts", mode: "client" }],
  css: [
    "@fortawesome/fontawesome-free/css/all.css",
    "@/assets/scss/global.scss",
  ],
  vite: {
    plugins: [glsl()],
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: false,
          additionalData: '@import "@/assets/scss/variables.scss";',
        },
      },
    },
  },
});
