<template>
  <div class="container my-6 py-6">
    <div class="community-block p-6 has-limited-width columns is-flex is-justify-content-space-between is-align-items-center" data-aos="fade-up" data-aos-delay="50">
      <h2 class="p-6 title mb-0 is-2 has-text-white is-spaced">Join the<br>community</h2>
      <div class="px-6">
        <a href="https://discord.gg/effectnetwork" target="_blank">
          <button type="button" class="button is-white">
            <i class="fab fa-discord"></i>
          </button>
        </a>
        <a href="https://twitter.com/effectaix" target="_blank">
          <button type="button" class="button is-white">
            <i class="fab fa-twitter"></i>
          </button>
        </a>
        <a href="https://github.com/effectai" target="_blank">
          <button type="button" class="button is-white">
            <i class="fab fa-github"></i>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Community',
  data () {
    return {
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.community-block {
  border-radius: $box-radius;
  background-color: $secondary-alt;
  @include mobile {
    text-align: center;
    display: block !important;
    h2, div {
      padding: 0 !important;
    }
    h2 {
      margin-bottom: 15px !important;
    }
    div button {
      margin-left: 0 !important;
    }
  }
}
.container {
  width: 100%;
}

.has-limited-width {
  width: 960px;
  margin: 0 auto;
}

button {
  margin-left: 24px;
  height: 65px;
  width: 65px;
  i {
    font-size: 1.5rem;
  }
}
</style>
