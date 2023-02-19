# 状态

## data

声明组件初始状态(响应式)的函数

```js
export default {
  data() {
    return { count: 0 }
  }
}
```

## props

声明组件 `props`

单向数据流，只允许父组件向子组件传递

字符串数组

::: code-group

```js [setup]
let props = defineProps(['foo', 'bar'])
```

```js [option]
export default {
  props: ['foo', 'bar']
}
```

:::

对象

::: code-group

```js [setup]
let props = defineProps({
  foo: String,
  bar: Number
})
```

```js [option]
export default {
  props: {
    foo: String,
    bar: Number
  }
}
```

:::

参数校验

::: code-group

```js [setup]
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

:::

## methods

事件处理

```vue
<template>
  <button @click="save(id, $event)">Save</button>
  <button @click="(e) => save(id, e)">Save</button>
</template>

<script>
export default {
  methods: {
    save(id, e) {}
  }
}
</script>
```

## emits

声明由组件触发的自定义事件

字符串数组

::: code-group

```js [setup]
let emits = defineEmits(['submit', 'change'])
```

```js [option]
export default {
  emits: ['submit', 'change']
}
```

:::

对象

```js
defineEmits({
  // 没有验证函数
  submit: null,

  // 具有验证函数
  change: (payload) => {
    if (payload.isRead) {
      return true
    } else {
      return false
    }
  }
})
```

## expose
