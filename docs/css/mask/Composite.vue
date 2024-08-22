<template>
  <div class="flex items-center flex-wrap gap-5 py-5">
    <div
      :class="[bg, box]"
      style="mask-image: linear-gradient(135deg, #000 0, rgba(0, 0, 0, 0) 70%)"
      :style="{ maskClip: i }"
      v-for="i in clips"
    ></div>
  </div>
</template>

<script setup>
const bg = `bg-blue-500`
const box = `size-32 border-[32px] border-black rounded-xl`

const clips = ['content-box', 'padding-box', 'border-box', 'fill-box', 'stroke-box', 'view-box']
</script>
