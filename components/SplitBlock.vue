<template>
  <div class="column is-6 bg-hover p-3">
    <div class="columns is-fullheight is-mobile is-gapless">
      <div
        class="column is-offset-2-desktop is-8-widescreen is-10-desktop is-11-tablet is-fullheight"
      >
        <div
          class="is-flex is-flex-direction-column is-align-items-center is-fullheight"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@include desktop {
  .columns.is-mobile > .column.is-offset-2-desktop {
    margin-left: 16%;
  }
}
</style>
