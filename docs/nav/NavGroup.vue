<template>
  <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 py-5">
    <div class="cursor-pointer" v-for="i in links" @click="onClick(i)">
      <div class="w-full flex justify-center items-center p-2 py-4 rounded-lg text-white bg-indigo-500">
        {{ i.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { links } = defineProps({
  links: {
    type: Array,
    default: () => []
  }
})

const onClick = ({ link }) => {
  window.open(link)
}
</script>
