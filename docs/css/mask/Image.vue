<template>
  <div class="flex items-center gap-5 py-5">
    <div
      :class="[box]"
      style="mask-image: linear-gradient(-90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 70%)"
    ></div>

    <div :class="[box]" style="mask-image: url('/svg/heart.svg')"></div>
  </div>
</template>

<script setup>
const box = `size-32 rounded-xl bg-[url('https://picsum.photos/id/357/200/200')] bg-cover`
</script>
