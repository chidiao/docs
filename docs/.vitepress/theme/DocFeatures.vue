<script setup lang="ts">
type Feature = {
  icon?: string
  title: string
  details: string
  link?: string
  linkText?: string
}

defineProps<{
  features: Feature[]
}>()
</script>

<template>
  <div class="DocFeatures">
    <a
      v-for="feature in features"
      :key="feature.title"
      class="DocFeature"
      :href="feature.link"
      :target="feature.link?.startsWith('http') ? '_blank' : undefined"
      :rel="feature.link?.startsWith('http') ? 'noreferrer' : undefined"
    >
      <span v-if="feature.icon" class="DocFeatureIcon">{{ feature.icon }}</span>
      <span class="DocFeatureTitle">{{ feature.title }}</span>
      <span class="DocFeatureDetails">{{ feature.details }}</span>
      <span v-if="feature.linkText" class="DocFeatureLink">
        {{ feature.linkText }}
        <span class="vpi-arrow-right DocFeatureArrow" />
      </span>
    </a>
  </div>
</template>

<style scoped>
.DocFeatures {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.DocFeature {
  display: flex;
  min-height: 188px;
  flex-direction: column;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.DocFeature:hover {
  border-color: var(--vp-c-brand-1);
}

.DocFeatureIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 6px;
  width: 48px;
  height: 48px;
  background-color: var(--vp-c-default-soft);
  font-size: 24px;
  line-height: 1;
}

.DocFeatureTitle {
  color: var(--vp-c-text-1);
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.DocFeatureDetails {
  flex: 1;
  padding-top: 8px;
  color: var(--vp-c-text-2);
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
}

.DocFeatureLink {
  display: flex;
  align-items: center;
  padding-top: 8px;
  color: var(--vp-c-brand-1);
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
}

.DocFeatureArrow {
  margin-left: 6px;
}

@media (max-width: 719px) {
  .DocFeatures {
    grid-template-columns: 1fr;
  }
}
</style>
