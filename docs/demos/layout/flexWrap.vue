<template>
  <div class="boxs rounded bg-gray-100">
    <div class="box py-4 flex justify-center items-center text-xs text-white rounded bg-blue-500" v-for="i in 5">
      25% - gap
    </div>
  </div>
</template>

<style scoped>
.boxs {
  --gap: 15px;

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: var(--gap);
  padding: var(--gap) 0 var(--gap) var(--gap);
}

.box {
  width: calc(25% - var(--gap));
}
</style>
