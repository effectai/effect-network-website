<template>
  <main id="nuxt-content">
    <div class="container">
      <ContentRenderer v-if="data" :value="data">
        <div class="breadcrumbs">
          <nuxt-link to="/">Home</nuxt-link> ->
          <nuxt-link to="/developers#tutorials">Tutorials</nuxt-link>
        </div>

        <div class="columns is-vcentered">
          <div class="column is-two-thirds">
            <h1 class="is-size-1 mt-5 has-text-primary title">
              {{ data.title }}
            </h1>

            <div class="is-flex is-align-items-center">
              <SocialBar
                class="has-text-primary is-size-3"
                :socials="[twitter, telegram, discord]"
              />

              <a
                class="button is-primary is-black mx-3 is-self-center"
                href="https://github.com/effectai/effect-js"
                target="_blank"
              >
                <span class="icon has-icon-left">
                  <i class="fab fa-github"></i>
                </span>
                <span> Edit on github</span>
              </a>
            </div>

            <span class="is-family-monospace is-size-7 is-dimmed">
              updated {{ data.lastUpdated }}
            </span>
          </div>
          <div class="column is-offset-1">
            <img src="https://placeholder.com/350x200" />
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-fifth">
            <div class="is-sticky" id="toc">
              <h4 class="is-size-5 has-text-primary">Table of Contents</h4>

              <ul v-if="data.body.toc && data.body.toc.links">
                <li v-for="link in data.body.toc.links" :key="link.text">
                  <nuxt-link
                    :class="{
                      'link-active': anchor === `#${link.id}`,
                    }"
                    :to="`#${link.id}`"
                  >
                    {{ link.text }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="column content" id="content">
            <ContentRendererMarkdown :value="data" />
          </div>
        </div>
      </ContentRenderer>
    </div>
  </main>
</template>

<script setup lang="ts">
import { discord, telegram, twitter } from "~/constants/socials";
import { useRoute } from "#vue-router";
import type { Tutorial } from "~/types/tutorials";

const route = useRoute();
const anchor = computed(() => route.hash);
const slug = route.params.slug;

const { data } = await useAsyncData("page-data", () =>
  queryContent<Tutorial>(`/tutorials/${slug}`).findOne()
);
</script>

<style lang="scss">
@import "bulma/sass/utilities/mixins";

#nuxt-content {
  padding: 8rem 6rem;

  #toc {
    ul {
      a {
        color: $primary;
        opacity: 0.4;

        &.link-active {
          color: $primary;
          opacity: 1;
        }
      }
    }
  }

  .breadcrumbs {
    a {
      color: $primary;
      font-weight: bold;
      margin: 0 0.5rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      font-weight: 600;
      color: $primary;
    }
  }
}
</style>
