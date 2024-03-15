<template>
  <div class="columns is-centered is-size-1 is-vcentered is-6">
    <div class="column is-one-third" v-for="statistic in statistics">
      <div class="has-text-weight-bold" style="font-size: 2.5rem">
        <ClientOnly>
          <div class="is-flex">
            <count-up class="is-flex is-whitespace-pre" :decimal-places="statistic.decimalPlaces"
              :end-val="statistic.value">
            </count-up>
            {{ statistic.suffix }}
          </div>
        </ClientOnly>
      </div>
      <p class="is-size-6 has-text-weight-bold">
        {{ statistic.label }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dapps } from "@/constants/dapps";
import CountUp from "vue-countup-v3";
import { formatNumber } from "~/utils/format";

const { useDaoStatistics, useForceStatistics } = useStatistics();
const { tasksCompleted } = useForceStatistics();
const { proposalsCreated } = useDaoStatistics();

const formattedTasksCompleted = computed(() => {
  return tasksCompleted.value && formatNumber(tasksCompleted.value + 2105812); // Live stats from EOS + hardcoded stats from Force 1.0 on NEO
});

const statistics = computed(
  () =>
    proposalsCreated.value &&
    tasksCompleted.value && [
      {
        label: "Apps in Ecosystem",
        value: dapps.length,
        decimalPlaces: 0,
      },
      {
        label: "Tasks Completed",
        value: formattedTasksCompleted.value.value,
        decimalPlaces: 3,
        suffix: formattedTasksCompleted.value.suffix,
      },
      {
        label: "Proposals created",
        value: proposalsCreated.value,
        decimalPlaces: 0,
      },
    ]
);
</script>

<style></style>
