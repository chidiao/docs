<template>
  <div
    :class="[bg]"
    class="size-32 rounded-xl p-2"
    style="mask: linear-gradient(black 0 100%) content-box, linear-gradient(black 0 100%); mask-composite: subtract"
  ></div>
</template>

<script setup>
const bg = `bg-gradient-to-br from-blue-700 via-red-400 to-sky-300`
</script>
