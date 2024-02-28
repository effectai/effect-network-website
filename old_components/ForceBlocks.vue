<template>
  <div>
    <div class="has-text-centered py-6">
      <h1 class="title is-2">How does the Effect<br>Force work</h1>
    </div>
    <div class="columns my-6">
      <div class="column is-one-quarter px-5 mb-3">
        <div class="column-icon-head is-align-items-flex-end is-flex">
          <span>1</span>
          <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/1objective_white.svg') : require('@/assets/img/icons/1objective.svg')" style="height: 50px"/>
        </div>
        <h3 class="subtitle is-5 mt-5">Set your objective</h3>
        <p>Whether you need text analysis, document transcription or image annotations: we got you covered.</p>
      </div>
      <div class="column is-one-quarter px-5 mb-3">
        <div class="column-icon-head is-align-items-flex-end is-flex">
          <span>2</span>
          <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/2instructions_white.svg') : require('@/assets/img/icons/2instructions.svg')" style="height: 50px"/>
        </div>
        <h3 class="subtitle is-5 mt-5">Create task instructions</h3>
        <p>Our workers are good at following instructions, but not at reading your mind.
        </p>
      </div>
      <div class="column is-one-quarter px-5 mb-3">
        <div class="column-icon-head is-align-items-flex-end is-flex">
          <span>3</span>
          <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/3launch_white.svg') : require('@/assets/img/icons/3launch.svg')" style="height: 50px"/>
        </div>
        <h3 class="subtitle is-5 mt-5">Launch your campaign</h3>
        <p>Force projectmanager monitor and oversee the results of your campaign(s).</p>
      </div>
      <div class="column is-one-quarter px-5 mb-3">
        <div class="column-icon-head is-align-items-flex-end is-flex">
          <span>4</span>
          <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/4results_white.svg') : require('@/assets/img/icons/4results.svg')" style="height: 50px"/>
        </div>
        <h3 class="subtitle is-5 mt-5">Receive results</h3>
        <p>Once the campaign is finished you'll receive a campaign report attached to the results.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h3.subtitle {
  font-weight: 500;
}
.column-icon-head {
  span {
    color: #ddd;
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    margin-bottom: 0;
  }
}
</style>
