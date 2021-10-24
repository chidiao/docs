# Setup

`setup` 在组件创建之前执行

```js
export default {
  setup(props, context) {
    let { title } = toRefs(props)
    let { attrs, slots, emit } = context
  }
}

// props 是响应式的，不能直接解构
// context 可以直接解构
// setup 在组件创建之前创建，所以，只能访问这4个属性
```

## Props
