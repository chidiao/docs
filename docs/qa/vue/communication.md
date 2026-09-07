# 通信方式

## 父子

- props + emit
- v-model
- slot
- ref + defineExpose
- useAttrs + $attrs

slot 作用域插槽

```html
<div>
  <slot :msg="msg"></slot>
</div>

<Child>
  <template #default="{ msg }">
    <span>{{msg}}</span>
  </template>
</Child>
```

## 跨层级

- provide + inject

## 全局

- pinia
- eventBus
- mitt

::: code-group

```js[vue]
import Vue from 'vue'

const bus = new Vue()

export default bus
```

```js[mitt]
import mitt from 'mitt'

const bus = mitt()

export default bus
```

```js
import bus from '@/utils/bus'

bus.$emit('event', data)
bus.$on('event', handler)
bus.$off('event', handler) // 避免内存泄漏
```

:::

## 特殊

- app.config.globalProperties
- route
- storage
