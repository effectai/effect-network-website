// https://nuxt.com/docs/api/configuration/nuxt-config
import glsl from "vite-plugin-glsl";
import { templateCompilerOptions } from "@tresjs/core";

export default defineNuxtConfig({
  ssr: false,
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
  modules: ["@nuxt/content", "@tresjs/nuxt", "@vueuse/nuxt"],
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
