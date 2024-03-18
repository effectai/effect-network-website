<template>
  <main id="nuxt-news">
    <ContentRenderer v-if="article" :value="article">
      <div class="has-background-smoke">
        <div class="container blog-padding">
          <div class="columns is-vcentered">
            <div class="column is-7">
              <h1 class="is-size-1 has-text-primary title">
                {{ article.title }}
              </h1>

              <div class="is-flex is-align-items-center">
                <SocialBar
                  class="has-text-primary is-size-3"
                  :socials="[twitter, telegram, discord]"
                />
              </div>
              <span class="is-size-5 mt-5 is-block">
                Posted on {{ article.created }} by {{ article.author }}
              </span>
            </div>
            <div class="column p-0">
              <NuxtPicture
                :src="article.image.src"
                class="image is-5by3 has-rounded-corners"
              ></NuxtPicture>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns is-gapless">
          <div class="column content is-medium" id="content">
            <ContentRendererMarkdown :value="article" class="blog-padding" />
          </div>
        </div>
      </div>
    </ContentRenderer>
  </main>
</template>

<script setup lang="ts">
import { discord, telegram, twitter } from "~/constants/socials";
import { useRoute } from "#vue-router";
import type { News } from "~/types/news";

const route = useRoute();
const slug = route.params.slug;

const article = ref<News | null>(null);

article.value = await queryContent<News>(`/news/${slug}`).findOne();

useSeoMeta({
  title: article.value?.title,
  description: article.value?.description,
  ogImage: article.value?.image.src,
});
</script>

<style lang="scss">
@import "bulma/sass/utilities/mixins";

.blog-padding {
  padding: 2rem;

  @include desktop {
    padding: 5rem 15rem;
  }
}

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
