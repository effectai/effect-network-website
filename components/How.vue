<template>
  <section class="section my-6">
    <div class="container is-max-widescreen">
      <h1 data-aos="fade-up" data-aos-delay="100" class="title is-2 has-text-centered">How it works?</h1>
      <div class="columns my-6">
        <atropos :options="{rotateTouch: false}" class="column is-3 p-0">
            <div data-aos="fade-up" data-aos-delay="0" class="has-text-centered p-5 has-background-light has-radius">
                <img src="~assets/img/icons/globe.svg" style="height: 95px"/>
                <h2 class="subtitle mt-4"><b>Connect your blockchain wallet</b></h2>
            </div>
        </atropos>
        <div data-aos="fade-up" class="column is-flex is-align-items-center">
            <img src="~assets/img/icons/lines_animated.svg" width="85%" />
        </div>
        <atropos :options="{rotateTouch: false}" class="column is-3 p-0">
            <div data-aos="fade-up" data-aos-delay="200" class="has-text-centered p-5 has-background-light has-radius">
                <img src="~assets/img/icons/tasks.svg" style="height: 95px"/>
                <h2 class="subtitle mt-4"><b>Upload your tasks &amp; add $EFX</b></h2>
            </div>
        </atropos>
        <div data-aos="fade-up" class="column is-flex is-align-items-center">
            <img src="~assets/img/icons/lines2_animated.svg" width="85%" />
        </div>
        <atropos :options="{rotateTouch: false}" class="column is-3 p-0">
            <div data-aos="fade-up" data-aos-delay="400" class="has-text-centered p-5 has-background-light has-radius">
                <img class="ml-6" src="~assets/img/icons/complete.svg" style="height: 95px"/>
                <h2 class="subtitle mt-4"><b>Expert Workforce completes the tasks</b></h2>
            </div>
        </atropos>
      </div>
    </div>
  </section>
</template>
