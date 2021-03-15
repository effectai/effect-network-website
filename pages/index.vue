<template>
  <div class="banner py-6">
    <div class="container is-max-widescreen my-6">
      <div class="has-limited-width">
        <h1 class="title site-title">The Perfect Combination of Human and Machine</h1>
        <p>Helping data science teams succeed with structuring data and the deployment of AI automation</p>
        <br>
        <nuxt-link to="/" class="button is-secondary">Learn more</nuxt-link>
      </div>
    </div>
    <div class="circle-container">
      <div class="circle"></div>
    </div>
    <br><br><br><br>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;

}
@keyframes rotate {
  0% {
    transform: rotate(-60deg)
  }
  100% {
    transform: rotate(300deg)
  }
}
.circle-container {
  position: absolute;
  right: 0;
  top: 0;
  margin:10px;
  width: 100%;
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
  font-size: 60px;
  font-weight: 400;
  width: 600px;
  max-width: 100%;
}
</style>
