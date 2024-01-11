<template>
  <div>
    <div class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm cursor-pointer inline btn">Toggle</div>
    <div class="max-w-sm my-4 h-auto content">
      <div class="border h-auto rounded p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque, molestias laudantium odit odio vel
        quis dolore totam soluta cupiditate facilis ratione modi similique quam exercitationem, delectus porro corrupti
        sapiente?
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-rows: 0fr;
  min-height: 0;
  overflow: hidden;
  transition: all 0.3s;
}

.btn:hover + .content {
  grid-template-rows: 1fr;
}
</style>
