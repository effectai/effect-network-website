<template>
  <div>
    <section class="section mb-6">
      <div class="container py-6">
        <div class="column is-two-fifths">
          <h1 class="title is-1" data-aos="fade-up">
            What kind of projects are suitable for Effect Network
          </h1>
          <p data-aos="fade-up" data-aos-delay="100" class="pr-6 block">Any process that needs automation, here are a couple of use cases to give you an idea!</p>
          <p data-aos="fade-up" data-aos-delay="150" class="block" style="z-index: 2; position: relative"><nuxt-link to="/ecosystem" class="button is-primary">Explore Ecosystem</nuxt-link></p>
        </div>
      </div>
      
      <div class="container" data-aos="fade-up" data-aos-delay="150">
        <div class="glide" style="position:relative">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <div 
                class="project-item is-flex column is-one-whole is-align-items-flex-end glide__slide"
                v-for="project in projects"
                :key="project.name">
                <div class="project-item-text column is-one-third">
                  <div class="glide__arrows mb-5" data-glide-el="controls">
                    <img :src="require('@/assets/img/icons/arrow_left.svg')" height="10" class="glide__arrow glide__arrow--left" data-glide-dir="<">
                    <span class="px-6">{{project.id}}/{{projects.length}}</span>
                    <img :src="require('@/assets/img/icons/arrow_right.svg')" height="10" class="glide__arrow glide__arrow--right" data-glide-dir=">">
                  </div>
                  <h2 class="subtitle is-5 has-text-weight-bold mb-2">{{project.name}}</h2>
                  <p>{{project.description}}</p>
                </div>
                <div class="column is-two-third">
                  <div class="box ml-6 p-0">
                    <video autoplay muted loop>
                      <source :src="project.video" type="video/mp4">
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

<script>
import Glide from '@glidejs/glide'

export default {
  mounted() {
    new Glide('.glide', {
      animationDuration: 0,
      rewind: true,
    }).mount()
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Effect Notebooks",
          description: "With Effect Notebooks users earn EFX tokens by writing code that automates the cleaning of data. Let's outsource the tedious bits of datascience!",
          image: require('@/assets/img/notebooks.jpg'),
          video: require('~/assets/videos/notebooks.mp4')
        },
        {
          id: 2,
          name: "Delos",
          description: "Delos allows anyone to submit a Document and using the amazing Effect Workforce, we categorize the data from the image and validate if it is in fact a useful document.",
          video: require('@/assets/videos/delos.mp4')
        },
        {
          id: 3,
          name: "Ergasia",
          description: "Ergasia allows companies and individuals to upload tasks and get them done quickly. For example: Converting handwritten images to text, Editing Images, Technical Code Debug, Feedback for posters and asking Academic Course related questions.",
          video: require('@/assets/videos/egrasia.mp4')
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.glide__arrows {
  display: flex;
  img {
    cursor: pointer;
  }
  span {
    color: #81889D;
    display: inline-block;
    margin-top: 3px;
  }
}

.glide {
  margin-top: -150px;
  @include mobile {
    margin-top: 0;
  }
}

.is-two-third, .is-one-third {
  @include mobile {
    width: 100%;
  }
}

.project-item-text {
  display: block;
  margin-bottom: 40px;
}

.glide__slides {
  transform:none !important; 
  width:auto !important;
  display: grid; 
  grid-template-areas: 'slide';  //create a 1x1 grid where the single cell is called slide
}
.glide__slide {
  position: relative; 
  opacity: 0; 
  transition: all .5s ease; 
  grid-area: slide;  //assign all child slides to the cell
  margin: 0 !important;
  transform: scale(.95);
  @include mobile {
    display: block !important;
    .box {
      margin-left: 0 !important;
    }
  }
}
.glide__slide--active {
  z-index:1; 
  transform: scale(1);
  opacity:1;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
}
</style>
