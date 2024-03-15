<template>
  <div class="columns is-mobile is-clipped px-2">
    <div class="column is-narrow is-hidden-mobile">
      <div
        style="top: -50px"
        class="is-flex is-fullheight is-flex-direction-column is-justify-content-space-between is-relative"
      >
        <svg
          data-v-08d29902=""
          width="2"
          height="295"
          viewBox="0 0 2 295"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="is-absolute is-fullheight"
        >
          <path
            data-v-08d29902=""
            d="M1 0L1 153"
            stroke="#334155"
            stroke-dasharray="4 4"
          ></path>
          <path
            data-v-08d29902=""
            d="M1 142L1 295"
            stroke="#334155"
            stroke-dasharray="4 4"
          ></path>
        </svg>
        <div
          class="circle-index has-background-primary is-family-monospace z-99 h-8 w-8 px-4 py-2"
          v-for="(slot, i) in $slots"
        >
          {{ i }}
        </div>
      </div>
    </div>
    <div class="column">
      <div v-for="(slot, i) in $slots" class="mt-6">
        <slot :name="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const slots = useSlots();
</script>

<style>
.circle-index {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  color: white;
  margin-left: -1.25rem;

  margin-top: 100px;
  margin-bottom: 80px;

  position: relative;
}
</style>
