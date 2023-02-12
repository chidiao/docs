# Components

动态组件？

## 注册

```js
// 全局注册
app.component('MyBtn', MyBtn)

// 局部注册
export default {
  components: {
    MyBtn
  }
}
```

## Props

props 是单向数据流，只允许父组件向子组件传递

数组参数，简单粗暴

```js
// setup
const props = defineProps(['foo', 'bar'])

// option
export default {
  props: ['foo', 'bar'],
  setup(props) {
    console.log(props)
  }
}
```

对象参数

```js
// setup
defineProps({
  foo: String,
  bar: Number
})

// option
export default {
  props: {
    foo: String,
    bar: Number
  }
}
```

参数校验

```js
defineProps({
  propA: Number,
  propB: [String, Number],
  propC: {
    type: String,
    required: true
  },
  propD: {
    type: Number,
    default: 100
  },
  // 工厂函数，原始props
  propE: {
    type: Object,
    default(props) {
      return { msg: 'hello' }
    }
  },
  // 自定义校验
  propF: {
    validator(val) {
      return ['success', 'warning', 'danger'].includes(val)
    }
  },
  // 默认函数
  propG: {
    type: Function,
    default() {
      return 'Default Function'
    }
  }
})
```

## Emits

```js
// setup
const emit = defineEmits(['submit', 'change'])

function onSubmit() {
  emit('submit')
}

setup(props, ctx) {
  ctx.emit('submit')
}

// option
export default {
  emits: ['submit', 'change'],
  methods: {
    onSubmit() {
      this.$emit('submit')
    }
  }
}
```

## v-model

默认参数

```vue
<template>
  <Blog v-model="blog"></Blog>
  <!-- 等同于 -->
  <Blog :value="blog" @input="blog = $event">2.x</Blog>
  <Blog :modelValue="blog" @update:modelValue="blog = $event">3.x</Blog>
</template>

<script>
// 2.x 默认值
export default {
  props: ['value'],
  emits: ['input']
}
</script>

<script setup>
// 3.x 默认值
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>
```

数据更新

```js
function onChange() {
  this.$emit('update:blog', newVal)
}
```

自定义参数

2.x 不支持自定义参数，所以只能有一个 `v-model`

3.x 支持自定义参数，因此可以定义多个 `v-model`

```vue
<template>
  <Blog v-model:title="title"></Blog>
  <!-- 等同于 -->
  <Blog :title="title" @update:title="title = $event"></Blog>
</template>

<script setup>
export default {
  props: ['title'],
  emits: ['update:title']
}
</script>
```

**v-bind.sync**

2.x 的一个简单的双向绑定方案，不兼容 3.x

```vue
<template>
  <Blog :title.sync="title"></Blog>
  <!-- 等同于 -->
  <Blog :title="title" @update:title="title = $event"></Blog>
</template>

<script>
export defautl {
  props: ['title'],
  emits: ['update:title']
}
</script>
```

## Attrs

## Slots

默认内容

```html
<!-- MyBtn -->
<button class="my-btn">
  <slot>默认值</slot>
</button>

<!-- 使用 -->
<MyBtn>按钮</MyBtn>
```

具名插槽

```html
<!-- BaseLayout -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

<!-- 使用 -->
<BaseLayout>
  <template v-slot:header></template>
  <template v-slot:default></template>
  <template v-slot:footer></template>
</BaseLayout>

<BaseLayout>
  <template #header></template>
  <template #default></template>
  <template #footer></template>
</BaseLayout>
```
