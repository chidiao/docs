# Demos

这是一个计数器 Demo

<Demo>
<div class="size-8 bg-blue-500 text-white rounded flex justify-center items-center" @click="count++">{{ count }}</div>
</Demo>

```vue
<template>
  <div class="size-8 bg-blue-500 text-white rounded flex justify-center items-center" @click="count++">{{ count }}</div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
```

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
