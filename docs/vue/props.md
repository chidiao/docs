# Props

### 声明

```vue
<script setup>
defineProps(['title', 'likes'])

defineProps({
  title: String,
  likes: Number
})
</script>
```

### 校验

```vue
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  isHot: {
    type: [Boolean, Number]
  },
  more: {
    type: Object,
    default: () => {}
  },
  time: {
    validator: (val) => val.length == 10
  }
})
</script>
```

### 类型

```vue
<script setup lang="ts">
interface Props {
  title: string
  likes?: number
}

defineProps<Props>()
</script>
```

默认值

```vue
<script setup lang="ts">
interface Props {
  title: string
  likes?: number
}

withDefaults(defineProps<Props>(), {
  number: 0
})
</script>
```

复杂类型?

### 其他

```html
<MyBlog v-bind="blog"></MyBlog>

<MyBlog :title="blog.title" :likes="blog.likes"></MyBlog>
```
