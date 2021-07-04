# 组件

## 注册

### 全局注册

```js
app.component('TopNav', TopNav)
```

### 局部注册

```js
export default = {
  components: {
    TopNav
  }
}
```

## Props

等价写法

```html
<Blog v-bind="blog"></Blog>

<Blog :id="blog.id" :title="blog.title"></Blog>
```

### 类型验证

```js
// 无验证
export default = {
  props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
}

// 常用验证
export default = {
  props: {
    str: String,
    num: {
      type: Number,
      required: true,
      default: 100
    },
    multi: [String, Number],
    arr: {
      type: Array,
      default: () => []
    },
    obj: {
      type: Object,
      default: () = {}
    }
  }
}

// 自定义验证...
```

## Attrs

传给组件，但是该组件并没有定义的属性

包括 `class`、`style`、`id`、`data-` 等等

默认这些属性会继承到组件根元素

```vue
<script>
export default = {
  inheritAttrs: false
}
</script>

<template>
  <div class="root">
    <div>禁用默认继承</div>
    <div v-bind="$attrs">指定继承</div>
  </div>
</template>
```

## Emits

### 自定义事件

定义/验证

```js
export default = {
  emits: ['myEvent', 'submit'],
  emits: {
    click: null,
    submit: (e) => {
      if (e) {
        return true
      } else {
        console.log('事件无效')
        return false
      }
    }
  }
}
```

抛出

```js
export default = {
  methods: {
    onClick() {
      this.$emit('myEvent', data)
    }
  }
}
```

### v-model

默认/单个

```html
<Blog v-model="blog"></Blog>
```

```js
export default = {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    update() {
      this.emit('update:modelValue', 'value')
    }
  }
}

// 2.x 默认使用 value 和 input 作为 prop 和 emit
```

自定义/多个

```html
<Blog v-model:title="title" v-model="content"></Blog>
```

```js
export default = {
  props: ['title', 'content'],
  emits: ['update:title', 'update:content'],
  methods: {
    update() {
      this.$emit('update:title', 'new title')
      this.$emit('update:content', 'new content')
    }
  }
}
```

修饰符...

## 插槽

```html
<div class="card">
  <slot></slot>
</div>

<div class="card">
  <slot>Submit</slot>
</div>
```

`<slot>` 内可填充后备内容，当无内容时显示后备内容，有内容时被替换。

### 具名插槽

```html
<div class="card">
  <slot name="header"></slot>
  <slot></slot>
  <slot name="footer"></slot>
</div>

<Card>
  <template v-slot:header></template>
  <template v-slot:default></template>
  <template v-slot:footer></template>
</Card>

<Card>
  <template #header></template>
  <template #default></template>
  <template #footer></template>
</Card>
```

没有 `name` 的 `<slot>` 会带有隐含的名字 `default`

`v-slot` 只能添加在 `<template>`

## Provide / Inject

如果有一些深度嵌套的组件，上层组件需要经过多代 prop 对其子孙组件进行传参，可以通过该种方式进行替代

```js
// 提供
export default = {
  provide: {
    secret: 'hello world'
  }
}

// 需要访问实例
export default = {
  provide() {
    return {
      secret: this.secret
    }
  }
}

// 接收
export default = {
  inject: ['secret']
}

// 处理响应性...
```
