<template>
  <div class="columns is-centered is-size-1 is-vcentered is-variable is-6">
    <div class="column is-one-third" v-for="statistic in statistics">
      <div class="has-text-weight-bold" style="font-size: 2.5rem">
        <ClientOnly>
          <div class="is-flex">
            <count-up
              class="is-flex"
              :decimal-places="statistic.decimalPlaces"
              :end-val="statistic.value"
            >
            </count-up>
            {{ statistic.suffix }}
          </div>
        </ClientOnly>
      </div>
      <p class="is-size-6 has-text-weight-bold whitespace-nowrap">
        {{ statistic.label }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dapps } from "@/constants/dapps";
import CountUp from "vue-countup-v3";

const statistics = [
  {
    label: "Dapps in Ecosystem",
    value: dapps.length,
    decimalPlaces: 0,
  },
  {
    label: "Tasks Completed",
    value: 8.53,
    decimalPlaces: 1,
    suffix: "M",
  },
  {
    label: "Proposals created",
    value: 326,
    decimalPlaces: 0,
  },
];
</script>

<style></style>
