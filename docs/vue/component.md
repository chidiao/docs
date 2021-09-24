# 组件

## 组件注册

```js
// 全局注册
app.component('my-btn', MyBtn)
app.component('MyBtn', MyBtn)

// 局部注册
export default {
  components: {
    'my-btn': MyBtn,
    MyBtn: MyBtn
  }
}
```

## Props

单项数据流

```js
export default {
  props: ['title', 'author'],

  // 类型
  props: {
    title: String,
    author: Object
  },

  // 验证
  props: {
    str: String,
    num: [String, Number],
    num: {
      type: [String, Number],
      required: true,
      default: 100
    },
    obj: {
      type: Object,
      default: () = {}
    },
    arr: {
      type: Array,
      default: () => []
    }
  }

  // 自定义验证...
}
```

## Attrs

非 `Props` 属性，例如 `class`、`style` 和 `id` 等属性。

这些属性会被默认添加到组件的根节点上。

如果你有自己的想法

```vue
<template>
  <div class="root">
    <h2 v-bind="$attrs"></h2>
  </div>
</template>

<script>
export default = {
  inheritAttrs: false
}
</script>
```

## Emits

```js
export default {
  // 定义，建议定义
  emits: ['onCopy', 'onAction'],

  // 抛出验证
  emits: {
    onCopy: null,
    onAction: ({ type }) => {
      if (type) {
        return true
      } else {
        console.warn('没有指定操作类型')
        return false
      }
    }
  },
  methods: {
    onChange(e) {
      this.$emit('onAction', e)
    }
  }
}
```

`v-model` 相当于传递了 `prop` 并接收了 `update` 事件

```js
export default {
  props: ['title'],
  emits: ['update:title']
}
```

## v-model

**3.x**

```html
<!-- 有参数 -->
<Blog v-model:title="title"></Blog>
<!-- 等同于 -->
<Blog :title="title" @update:title="title = $event"></Blog>

<!-- 无参数 -->
<Blog v-model="title"></Blog>
<!-- 等同于 -->
<Blog :modelValue="title" @update:modelValue="title = $event"></Blog>
```

`v-model` 相当于传递了 `prop` 并接收了 `update` 事件

**2.x**

```html
<Blog v-model="title"></Blog>
<!-- 等同于 -->
<Blog :value="title" @input="title = $event"></Blog>
```

注意：2.x 只有一个 `v-model` ，属性名和事件名为 `value` 和 `input`

**v-bind.sync**

另一个简单的双向绑定方案，不兼容 3.x

```html
<Blog :title.sync="title"></Blog>
<!-- 等同于 -->
<Blog :title="title" @update:title="title = $event"></Blog>
```

```js
// Blog
this.$emit('update:title', newValue)
```

## slot

向组件填充内容

```html
<!-- 定义 -->
<div class="my-btn">
  <slot></slot>
</div>

<!-- 使用 -->
<MyBtn>按钮</MyBtn>
```

**备用内容/默认值**

```html
<div class="my-btn">
  <slot>默认值</slot>
</div>
```

**具名插槽**

定义

```html
<div class="card">
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
```

使用

```html
<Card>
  <template v-slot:header></template>
</Card>

<!-- 缩写 -->
<Card>
  <template #header></template>
</Card>
```

## 动态组件

```html
<component :is="currentComponent"></component>
```
