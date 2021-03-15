<template>
  <div>
    <div class="banner pb-6">
      <section class="section">
        <div class="container is-max-widescreen my-6">
          <div class="has-limited-width">
            <h1 class="title site-title">Freedom To Work<br>From Anywhere At Anytime</h1>
            <h1 class="subtitle mt-2">The first Blockchain based framework for the Future-of-Work</h1>
  <!--          <p>Helping data science teams succeed with structuring data and the deployment of AI automation</p>-->
            <br>
            <nuxt-link to="/" class="button is-secondary">Learn more</nuxt-link>
          </div>
        </div>
      </section>
      <div class="circle-container">
        <div class="circle"></div>
      </div>
      <br><br><br><br>
    </div>
    <section class="hero is-primary">
      <div class="hero-body container has-text-centered">
        <h1 class="title">
          Join our mailing list
        </h1>
        <h3 class="subtitle">
          Get the latest news from across The Effect Network.
        </h3>
        <div class="field has-addons is-justify-content-center">
          <div class="control">
            <input type="email" class="input is-white is-outlined" placeholder="Enter your email">
          </div>
          <div class="control">
            <a class="button is-accent">Subscribe</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 45%;
    height: 100%;
    z-index:-2;
    top: 0;
    right: 0;
    background: url("~assets/img/circle.png");
    background-size: cover;

  }

}

.circle-container {
  position: absolute;
  right: 0;
  display: none;
  top: 0;
  margin:10px;
  width: 100%;
  z-index: -1;
  .circle {
    margin-left: auto;
    position: relative;
    width: 1100px;
    height: 1100px;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    opacity: 0.9;
    filter: blur(5px);
    border-radius: 100%;
    background: $secondary;
    transition: background 2s;
    background: linear-gradient(150deg, rgba($secondary, 0) 0%, rgba($secondary, 0.02) 20%, rgba($secondary, 0.1) 30%, $secondary 100%);
    //background-size: 200%;
    animation: rotate 35s linear infinite;

    &:before {
      content: "";
      -webkit-filter: blur(5px);
      -moz-filter: blur(5px);
      -o-filter: blur(5px);
      -ms-filter: blur(5px);
      filter: blur(5px);
      display: block;
      position: absolute;
      top:180px;
      left:180px;
      width: 740px;
      height: 740px;
      background: white;
      border-radius: 100%;
    }
  }
  &:after {
    content: "";
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    display: block;
    position: absolute;
    bottom: 400px;
    right:-20px;
    width: 300px;
    height: 200px;
    background: white;
  }
}
.site-title {
  font-size: 50px;
}
</style>
