<template>
  <div class="columns">
    <div v-for="community in communities" class="column is-3\">
      <nuxt-link :to="community.href">
        <CommunityCard
          :name="community.name"
          :faClass="community.faClass"
          :activeMembers="community.activeMembers"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  communities: {
    name: string;
    faClass: string;
    activeMembers: number;
    href: string;
    isFeatured?: boolean;
  }[];
}>();

//sort on isFeatured
</script>
