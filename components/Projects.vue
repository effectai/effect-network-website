<template>
  <div>
    <section class="section mb-6">
      <div class="container py-6">
        <div class="column is-two-fifths">
          <h1 class="title is-1" data-aos="fade-up">
            What kind of projects are suitable for Effect Network
          </h1>
          <p data-aos="fade-up" data-aos-delay="100" class="pr-6">Any process that needs automation, here are a couple of use cases to give you an idea!</p>
        </div>
      </div>
      
      <div class="container" data-aos="fade-up" data-aos-delay="150">
        <div class="glide">
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
                  <img :src="project.image" class="project-image pl-6">
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
          description: "Effect Notebooks is a campaign where workers can earn EFX tokens for writing code that will automate the cleaning of data, the way a task specifies.",
          image: require('@/assets/img/notebooks.png')
        },
        {
          id: 2,
          name: "Effect Notebooks 2",
          description: "Effect Notebooks is a campaign where workers can earn EFX tokens for writing code that will automate the cleaning of data, the way a task specifies.",
          image: require('@/assets/img/efx-3d.png')
        },
        {
          id: 3,
          name: "Effect Notebooks 3",
          description: "Effect Notebooks is a campaign where workers can earn EFX tokens for writing code that will automate the cleaning of data, the way a task specifies.",
          image: require('@/assets/img/efx-3d.png')
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
  margin-top: -100px;
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
  transition: opacity .5s ease; 
  grid-area: slide;  //assign all child slides to the cell
  margin: 0 !important;
}
.glide__slide--active {
  z-index:1; 
  opacity:1;
}
</style>
