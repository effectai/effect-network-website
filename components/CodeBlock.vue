<template>
  <div class="codeblock" v-if="currentTab">
    <div
      class="toolbar has-text-white is-flex is-justify-content-space-between px-2 p-2 has-background-primary"
    >
      <div class="tab" v-for="code in codes">
        <i v-if="code.language == 'terminal'" class="fas fa-terminal mr-2"></i>
        <i v-else class="fab fa-js mr-2"></i>
        <span> {{ code.language }} </span>
      </div>
      <i @click="doCopy" class="is-clickable fa fa-copy"></i>
    </div>
    <div class="shj-lang-js border-xs m-0">
      {{ currentTab?.code }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { highlightAll } from "@speed-highlight/core";
import "@speed-highlight/core/themes/default.css";

const { copy } = useClipboard();
const currentTab = ref<Code | null>(null);

const doCopy = () => {
  copy(currentTab.value?.code);
};

type Code = {
  code: string;
  language: string;
};

const props = defineProps<{
  codes: Code[];
}>();

onMounted(async () => {
  currentTab.value = props.codes[0];
  await nextTick();
  highlightAll({});
});
</script>

<style lang="scss">
[class*="shj-lang-"] {
  font-size: 12px !important;
}

.codeblock {
  .toolbar {
    i {
      :hover {
        color: black;
      }
    }
    color: white;
  }
  > div {
    border-radius: 0;
  }
}
</style>
