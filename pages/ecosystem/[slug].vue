<template>
  <div v-if="dapp">
    <DappDetail :dapp="dapp" />
  </div>
</template>

<script setup lang="ts">
import dapps from "@/content/data/dapps.json";

const dapp = ref();
const route = useRoute();

onMounted(() => {
  dapp.value = dapps.find(
    (dapp) => dapp.group_name.toLocaleLowerCase() === route.params.slug
  );
});
</script>

<style></style>
