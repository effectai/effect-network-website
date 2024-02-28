<template>
  <div>
    <div class="has-text-centered pt-6 pb-5 has-limited-width is-horizontal-centered">
      <h1 class="title is-2">The power of the Force at a glance</h1>
      <p>Infusing microtasking with blockchain technology opens up new exciting possibilities.</p>
    </div>
    <div class="columns my-6">
      <div class="column is-one-third has-text-centered px-6">
        <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/cotrol_white.svg') : require('@/assets/img/icons/cotrol.svg')" style="height: 50px"/>
        <h3 class="title is-4 mt-4">Full Control</h3>
        <p>Connect your business directly to a driven workforce via our API, define your tasks and curate a workforce
          that meets your needs.</p>
      </div>
      <div class="column is-one-third has-text-centered px-6">
        <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/scalability_white.svg') : require('@/assets/img/icons/scalability.svg')" style="height: 50px"/>
        <h3 class="title is-4 mt-4">Scalibility</h3>
        <p>Whether you need an extra 5 or 5000 helping hands our workforce helps you get your work done fast.</p>
      </div>
      <div class="column is-one-third has-text-centered px-6">
        <img :src="$colorMode.value === 'dark' ? require('@/assets/img/icons/fair_white.svg') : require('@/assets/img/icons/fair.svg')" style="height: 50px"/>
        <h3 class="title is-4 mt-4">Fair Workspace</h3>
        <p>No additional transaction costs or requester fees. Everything that you pay goes straight into the pockets of the workers.</p>
      </div>
    </div>
  </div>
</template>
