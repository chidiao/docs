<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import QaNav from './QaNav.vue'
import QaNavScreen from './QaNavScreen.vue'

const { Layout } = DefaultTheme
const { page } = useData()

const isQa = computed(() => page.value.relativePath.startsWith('qa/'))
</script>

<template>
  <Layout :class="isQa ? 'qa-mode' : ''">
    <template #nav-bar-content-before>
      <QaNav v-if="isQa" />
    </template>
    <template #nav-screen-content-before>
      <QaNavScreen v-if="isQa" />
    </template>
  </Layout>
</template>
