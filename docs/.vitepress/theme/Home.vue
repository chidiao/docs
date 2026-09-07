<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import VPHomeContent from 'vitepress/dist/client/theme-default/components/VPHomeContent.vue'
import VPHomeFeatures from 'vitepress/dist/client/theme-default/components/VPHomeFeatures.vue'
import VPHomeHero from 'vitepress/dist/client/theme-default/components/VPHomeHero.vue'
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'

const { frontmatter, theme } = useData()
const groups = computed(() => frontmatter.value.featureGroups ?? [])
</script>

<template>
  <div class="VPHome" :class="{ 'external-link-icon-enabled': theme.externalLinkIcon }">
    <VPHomeHero />

    <template v-if="groups.length">
      <section v-for="group in groups" :key="group.title" class="feature-group">
        <h2 class="feature-group-title">{{ group.title }}</h2>
        <VPFeatures :features="group.features" />
      </section>
    </template>

    <VPHomeFeatures v-else />

    <VPHomeContent v-if="frontmatter.markdownStyles !== false">
      <Content />
    </VPHomeContent>
    <Content v-else />
  </div>
</template>

<style scoped>
.VPHome {
  overflow-x: clip;
  margin-bottom: 6rem;
}

@media (min-width: 48rem) {
  .VPHome {
    margin-bottom: 8rem;
  }
}

.feature-group + .feature-group {
  margin-top: 0.5rem;
}

.feature-group-title {
  max-width: 72rem;
  margin: 2.5rem auto 0;
  padding: 0 1.5rem;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
}

@media (min-width: 40rem) {
  .feature-group-title {
    padding: 0 3rem;
  }
}

@media (min-width: 60rem) {
  .feature-group-title {
    padding: 0 4rem;
  }
}
</style>
