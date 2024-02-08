<template>
  <div class="boxs rounded bg-gray-100">
    <div class="box py-4 flex justify-center items-center text-xs text-white rounded bg-blue-500" v-for="i in 5">
      1fr
    </div>
  </div>
</template>

<style scoped>
.boxs {
  --gap: 15px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--gap);
  padding: var(--gap);
}
</style>
