# ref 和 reactive

## ref()

响应式状态

返回一个响应式的 ref 对象，此对象只有一个指向其内部值的属性 `.value`

可以用于任何数据类型，如果是对象，那么其 value 值，是一个 reactive 创建的 proxy

```js
let count = ref(0)

count.value++
console.log(count.value)
```

调用子组件

::: code-group

```vue [option]
<template>
  <child ref="child"></child>
</template>

<script>
export default {
  mounted() {
    let childName = this.$refs.child.name
    this.$refs.child.say()
  }
}
</script>
```

```js [setup]
import { ref } from 'vue'

let child = ref(null)
```

:::

## reactive()

返回一个对象的响应式代理

只能用于对象类型
