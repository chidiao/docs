<script setup lang="ts">
import { qaNav } from '../qaNav'
import VPNavMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavMenuGroup.vue'
import VPNavMenuLink from 'vitepress/dist/client/theme-default/components/VPNavMenuLink.vue'
</script>

<template>
  <nav class="QaNav menu" aria-label="QA Navigation">
    <ul class="list">
      <li v-for="item in qaNav" :key="JSON.stringify(item)">
        <VPNavMenuLink v-if="'link' in item" :item="item" />
        <VPNavMenuGroup v-else :item="item" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.QaNav {
  display: none;
  flex-grow: 1;
  justify-content: flex-end;
  min-width: 0;
}

@media (min-width: 48rem) {
  .QaNav {
    display: flex;
  }
}

.QaNav .list {
  display: flex;
  justify-content: flex-end;
  min-width: 0;
}
</style>
