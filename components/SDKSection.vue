<template>
  <div class="container">
    <div
      class="columns has-text-left is-white is-vcentered is-variable is-8 pt-4 pb-6"
    >
      <div class="column is-2/3 has-text-left">
        <pre><code class="lang-js">
<p>import SDK from @effect-network/sdk</p>
<p>const client = new SDK.EffectClient(&#39;jungle&#39;);</p>
<p>const campaign = await client.force.makeCampaign(campaignToIpfs, '10')</p>
            </code></pre>
      </div>
      <div class="column is-1/3">
        <h2 class="title">Node.js SDK</h2>
        <p class="block">
          The Effect.AI SDK is a collection of tools and libraries that allow
          developers to build applications on top of the Effect Network
          protocol.
        </p>

        <a class="button is-secondary" href="" target="_blank"
          >SDK Documentation</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

onMounted(() => {
  Prism.highlightAll();
});
</script>

<style></style>
