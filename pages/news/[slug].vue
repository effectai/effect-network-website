<template>
  <main id="nuxt-news" class="has-header-top">
    <ContentRenderer v-if="data" :value="data">
      <div class="has-background-smoke">
        <div class="container">
          <div style="padding: 5rem 2rem" class="columns is-vcentered">
            <div class="column is-two-thirds">
              <h1 class="is-size-1 mt-5 has-text-primary title">
                {{ data.title }}
              </h1>

              <div class="is-flex is-align-items-center">
                <SocialBar
                  class="has-text-primary is-size-3"
                  :socials="[twitter, telegram, discord]"
                />
              </div>
              <span class="is-size-5 mt-5 is-block">
                Posted on {{ data.created }} by {{ data.author }}
              </span>
            </div>
            <div class="column">
              <NuxtPicture
                :src="data.image.src"
                class="image is-5by3 has-rounded-corners"
              ></NuxtPicture>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column content is-medium" id="content">
            <ContentRendererMarkdown
              :value="data"
              class=""
              style="padding: 5rem 2rem"
            />
          </div>
        </div>
      </div>
    </ContentRenderer>
  </main>
</template>

<script setup lang="ts">
import { discord, telegram, twitter } from "~/constants/socials";
import { useRoute } from "#vue-router";
import type { Tutorial } from "~/types/tutorials";

const route = useRoute();
const slug = route.params.slug;

const { data } = await useAsyncData("page-data", () =>
  queryContent<Tutorial>(`/news/${slug}`).findOne()
);
</script>

<style lang="scss">
@import "bulma/sass/utilities/mixins";

#nuxt-news {
  p {
    line-height: 32px;
  }

  #content {
    img {
      display: flex;
      margin: 80px auto;
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
