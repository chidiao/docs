<template>
  <div>
    <div
      class="size-96 border rounded bg-[url('https://picsum.photos/id/10/200/300')] bg-no-repeat relative"
      :style="{
        backgroundPosition: `${pos.x}px ${pos.y}px`
      }"
    >
      <div class="w-full h-px bg-red-300 absolute" :style="{ top: `${pos.y}px` }"></div>
      <div class="w-px h-full bg-red-300 absolute" :style="{ left: `${pos.x}px` }"></div>
    </div>

    <div class="mt-4 flex flex-col items-start space-y-4">
      <div class="flex items-center relative">
        <span class="mr-2">X:</span>
        <input type="number" class="ring-1 ring-gray-200 p-1 rounded w-20 pr-8" v-model="pos.x" />
        <span class="absolute right-[5px] top-[2px]">px</span>
      </div>

      <div class="flex items-center relative">
        <span class="mr-2">Y:</span>
        <input type="number" class="ring-1 ring-gray-200 p-1 rounded w-20 pr-8" v-model="pos.y" />
        <span class="absolute right-[5px] top-[2px]">px</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const pos = ref({ x: 20, y: 30 })
</script>
