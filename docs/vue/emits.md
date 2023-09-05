# Emits

### 直接触发

```html
<button @click="$emit('update', 1)">click me</button>
```

### 声明

```vue
<script setup>
const emit = defineEmits(['change', 'update'])

emit('update', 1)
</script>
```

### 校验?

### 类型

```vue
<script setup lang="ts">
defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

defineEmits<{
  change: [id: number]
  update: [value: string]
}>()
</script>
```
