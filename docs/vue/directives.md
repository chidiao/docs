# 指令

## v-model

双向绑定

::: code-group

```vue [template]
<template>
  <input v-model="age" />
  <input :value="age" @input="age = $event.target.value" />

  <Blog v-model="blog">默认</Blog>
  <Blog v-model:blog="blog">命名</Blog>
</template>
```

```js [vue3]
// 默认
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

// 命名
defineProps(['blog'])
defineEmits(['update:blog'])
```

```js [vue2]
// 默认且唯一
export default {
  props: ['value'],
  emits: ['input']
}
```

:::

.sync

vue2 中子组件可以修改父组件数据的另一种方式，类似 v-model ，vue3 不可用

::: code-group

```vue [父组件]
<template>
  <Blog :blog.sync="blog"></Blog>
</template>

<script>
export default {
  data() {
    return {
      blog: blog
    }
  }
}
</script>
```

```js [子组件]
export default {
  props: ['blog'],
  emits: ['update:blog'],
  methods: {
    changeParent() {
      this.$emit('update:blog', newBlog)
    }
  }
}
```

:::

## v-cloak

隐藏尚未完成编译的模板

```css
[v-cloak] {
  display: none;
}
```

```html
<div v-cloak>{{ message }}</div>
```

## v-if 和 v-show

## v-if 和 v-for

## v-for

## 其他

v-text
v-html
v-else
v-else-if
v-on
v-bind
v-slot
v-pre
v-once
v-memo
