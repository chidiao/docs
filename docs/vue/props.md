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

### 书写规范

- 组件名使用大驼峰：提高可读性，区分原生 HTML 元素。
- 模板内 props 使用 kebab-case：和 HTML attribute 保持一致。

```html
<MyBlog :is-hot="false"></MyBlog>
```

- 组件内 props 使用小驼峰：作为一个合法的 JavaScript 标识符。

```vue
<script setup>
defineProps({
  isHot: Boolean
})
</script>
```

### 其他

```html
<MyBlog v-bind="blog"></MyBlog>

<MyBlog :title="blog.title" :likes="blog.likes"></MyBlog>
```
