<template>
  <div class="my-4">
    <button class="bg-blue-500 text-white px-5 py-2 rounded" @click="show = !show">toggle</button>

    <div class="grid transition-all duration-300 mt-5" :style="{ 'grid-template-rows': show ? '1fr' : '0fr' }">
      <div class="min-h-0 overflow-hidden">
        <div class="border rounded p-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus blanditiis enim fuga, porro commodi modi.
          Dolorum dignissimos, at recusandae, et nam ex consequuntur, blanditiis voluptas nemo sed distinctio a
          accusantium?
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>
