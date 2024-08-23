<template>
  <div class="flex items-center gap-5 py-5">
    <div :class="[box]"></div>

    <span class="font-bold text-5xl">+</span>

    <div class="size-32">
      <img src="/svg/heart.svg" class="size-full" />
    </div>

    <span class="font-bold text-5xl">=</span>

    <div :class="[box]" style="mask-image: url('/svg/heart.svg')"></div>
  </div>
</template>

<script setup>
const box = `size-32 rounded-xl bg-[url('https://picsum.photos/id/357/200/200')] bg-cover`
</script>
