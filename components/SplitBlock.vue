<template>
  <div class="column is-6 bg-hover p-3">
    <div class="columns h-full is-mobile is-gapless">
      <div
        class="column is-offset-2 is-8-widescreen is-10-desktop is-11-tablet h-full"
      >
        <div
          class="is-flex is-flex-direction-column is-align-items-center h-full"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
