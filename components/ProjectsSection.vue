<template>
  <div>
    <section class="section mb-6">
      <div class="container py-6">
        <div style="margin: 1rem auto" class="column is-half has-text-centered">
          <h1 class="title is-1" data-aos="fade-up">Project Spotlight</h1>
          <p data-aos="fade-up" data-aos-delay="100" class="pr-6 block">
            What kinds of projects can you build on the Effect Network? Any
            process that needs automation, here are a couple of use cases to
            give you an idea!
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            class="block"
            style="z-index: 2; position: relative"
          ></p>
        </div>
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="150">
        <div class="glide" style="position: relative">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <div
                class="project-item is-flex column is-one-whole is-align-items-flex-end glide__slide"
                v-for="project in projects"
                :key="project.name"
              >
                <div class="project-item-text column is-one-third">
                  <div class="glide__arrows mb-5" data-glide-el="controls">
                    <img
                      :src="require('@/assets/img/icons/arrow_left.svg')"
                      height="10"
                      class="glide__arrow glide__arrow--left"
                      data-glide-dir="<"
                    />
                    <span class="px-6"
                      >{{ project.id }}/{{ projects.length }}</span
                    >
                    <img
                      :src="require('@/assets/img/icons/arrow_right.svg')"
                      height="10"
                      class="glide__arrow glide__arrow--right"
                      data-glide-dir=">"
                    />
                  </div>
                  <h2 class="subtitle is-5 has-text-weight-bold mb-2">
                    {{ project.name }}
                  </h2>
                  <p>{{ project.description }}</p>
                  <nuxt-link to="/ecosystem" class="mt-3 button is-primary"
                    >Explore Ecosystem</nuxt-link
                  >
                </div>
                <div class="column is-two-third">
                  <div class="box ml-6 p-0">
                    <video autoplay muted loop>
                      <source :src="project.video" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  projects: {
    id: number;
    name: string;
    description: string;
    video: string;
  }[];
}>();
</script>

<style></style>
