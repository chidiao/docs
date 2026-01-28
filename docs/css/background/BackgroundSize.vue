<template>
  <div>
    <div
      class="size-96 border rounded bg-[url('https://picsum.photos/id/10/200/300')] bg-center bg-no-repeat"
      :style="{ backgroundSize: size }"
    ></div>

    <div class="flex mt-4 space-x-4">
      <div
        class="ring-1 py-1 px-2 rounded cursor-pointer"
        :class="size === s ? 'ring-blue-400' : 'ring-gray-200'"
        v-for="s in sizes"
        @click="size = s"
      >
        {{ s }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const size = ref('100px auto')
const sizes = ['100px auto', '200px auto', '33% auto', 'cover', 'contain']
</script>
