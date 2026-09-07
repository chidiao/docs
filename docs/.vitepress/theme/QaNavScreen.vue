<script setup lang="ts">
import { qaNav } from '../qaNav'
import VPNavMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavMenuGroup.vue'
import VPNavMenuLink from 'vitepress/dist/client/theme-default/components/VPNavMenuLink.vue'
</script>

<template>
  <nav class="QaNavScreen" aria-label="QA Navigation">
    <div v-for="item in qaNav" :key="JSON.stringify(item)" class="item">
      <VPNavMenuLink v-if="'link' in item" :item="item" screen />
      <VPNavMenuGroup v-else :item="item" screen />
    </div>
  </nav>
</template>
