<template>
  <div>
    <section class="section has-navbar-fixed-top">
      <div class="hero">
        <section class="section">
          <div class="container">
            <h2 class="title is-1">Effect Ecosystem</h2>
            <p class="block">
              Welcome to the dApps that are now available on the Effect Network.
            </p>
          </div>
        </section>
      </div>
    </section>

    <!-- Featured dApps -->
    <div class="featured-apps">
      <div class="container pt-2 pb-6">
        <h2 class="subtitle has-text-weight-semibold is-4 mb-5">Featured dApps</h2>
        <div class="columns is-multiline">
          <div
            class="column is-full-mobile is-half-tablet is-one-fifth-desktop is-one-fifth-widescreen"
            v-for="dapp in featuredDapps"
            :key="dapp.id">
            <div class="card is-shadowless has-background-white p-4" @click="goToDapp(dapp.id)">
              <div class="card-image mx-auto mb-2">
                <figure>
                  <img :src="getImageLink(dapp.image_url)" v-bind:alt="dapp.image_url">
                </figure>
              </div>

              <div class="card-content p-2">
                <section class="title-section">
                  <div class="media-content">
                    <h2 class="title is-5 has-text-weight-medium mb-3 has-text-centered has-text-black">
                      {{ dapp.group_name }}
                    </h2>
                    <div class="tags is-centered">
                      <span v-for="tag in dapp.tags" @click.prevent="addFilter(tag)" :key="tag" class="tag is-info is-light">{{ tag }}</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- All dApps -->
    <section>
      <div class="container my-6 py-6">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <div class="tags is-align-items-center is-align-content-center is-flex">
            <p v-if="filters.length > 0" class="is-size-7 mr-3 mb-0" @click="filters = []">clear tags</p>
            <span v-for="tag in filters" :key="tag" class="tag is-medium py-4 mb-0 is-info is-light">
              {{ tag }}
              <button @click="removeFilter(tag)" class="delete is-small"></button>
            </span>
          </div>
          <div class="select">
            <select v-model="sort" @change="onSort(sort)">
              <option value="" selected>Sort by</option>
              <option v-for="(sort) in sort_options" :key="sort.name" :value="sort" class="column">
                {{ sort.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="columns is-multiline mt-2">
          <div
            class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
            v-for="dapp in filteredDapps"
            :key="dapp.id"
          >
            <div class="card is-shadowless has-background-white p-4" @click="goToDapp(dapp.id)">
              <div class="card-image mx-auto mb-2">
                <figure>
                  <img :src="getImageLink(dapp.image_url)" v-bind:alt="dapp.image_url">
                </figure>
              </div>

              <div class="card-content p-2">
                <section class="title-section">
                  <div class="media-content">
                    <h2 class="title is-5 has-text-weight-medium mb-3 has-text-centered has-text-black">
                      {{ dapp.group_name }}
                    </h2>
                    <div class="tags is-centered">
                      <span v-for="tag in dapp.tags" @click="addFilter(tag)" :key="tag" class="tag is-info is-light">{{ tag }}</span>
                    </div>
                    <p class="has-text-grey is-flex is-clipped mb-0">
                      {{ dapp.description.length > 200 ? `${dapp.description.slice(0, 200)}...` : dapp.description }}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <p v-if="filteredDapps.length === 0">
            No dApps found matching that match the criteria
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash'
import dapps from '@/static/json/dapps.json'
import Network from "~/assets/img/developers.svg?inline";

export default {
    // colorMode: 'dark',
    components: {
      Network
    },
    name: 'Ecosystem',
    data() {
      return {
        example: null,
        dappsList: dapps,
        filters: [],
        featuredDapps: dapps.submissions.filter(e => e.featured),
        publicPath: process.env.BASE_URL,
        sort: '',
        sort_options: {
          title_asc: {
            value: 'group_name',
            name: 'Title (ascending)',
            order: 'asc'
          },
          title_desc: {
            value: 'group_name',
            name: 'Title (descending)',
            order: 'desc'
          },
          recently_added: {
            value: 'id',
            name: 'Recently added',
            order: 'desc'
          }
        }
      };
    },
    mounted() {
    },

    computed: {
      heroDarkLight: function () {
        return this.colorMode === 'dark' ? [].join(' ') : ''
      },
      filteredDapps () {
        let filteredDapps = this.dappsList.submissions;
        if (this.filters.length > 0) {
          console.log(this.filters)
          filteredDapps = filteredDapps.filter((d) => {
            for (const filter of this.filters) {
              if (d.tags.includes(filter.toLowerCase())) {
                return d.tags.includes(filter.toLowerCase())
              }
            }
          })
        }
        if (this.sort) {
          filteredDapps = _.orderBy(filteredDapps, [(dapp) => {
            if (typeof _.get(dapp, `${this.sort.value}`) === 'string') {
              return _.get(dapp, `${this.sort.value}`).toLowerCase()
            } else {
              return _.get(dapp, `${this.sort.value}`)
            }
          }], [this.sort.order, 'desc'])
        }
        return filteredDapps
      }
    },

    methods: {
      goToDapp (id) {
        console.log('Todo go to dapp page', id)
      },
      removeFilter (tag) {
        this.filters = this.filters.filter(e => e !== tag)
      },
      addFilter (tag) {
        if (!this.filters.includes(tag)) {
          this.filters.push(tag)
        }
      },
      onSort (sort) {
        this.sort = sort
      },
      getImageLink (img_url) {
        // /effect-network-website/static/img/ecosystem
        return require(`@/assets/img/ecosystem/${img_url}`)
      },
    }
};
</script>
<style lang="scss" scoped>
.select select {
  outline: none;
  background-color: $light;
  border: none;
  color: #81889D;
}
.featured-apps {
  background: linear-gradient(0deg, $light 65%, transparent 35%);
}
.card:hover {
  box-shadow: $box-shadow !important;
}

.card {
  transition: all .3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 1;
  margin-top: auto;
  border-style: solid;
  border-width: 1px;
  border-color: #ededed;
  .card-image {
    height: 150px !important;
    figure, img {
      height: 150px !important;
    }
    img {
      width: 100%;
      object-fit: cover;
      border-radius: $card-radius !important;
    }
  }
}

.tags {
  .tag {
    z-index: 999;
    background: rgba(25, 119, 243, 0.1);
    color: #81889D;
    cursor: pointer;
  }
  &.is-medium {
    background: $light !important;
    font-size: .95rem !important;
  }
  p {
    cursor: pointer;
  }
}
</style>
