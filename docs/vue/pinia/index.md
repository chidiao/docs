# 开始

[Pinia](https://pinia.vuejs.org/)

## 安装

```bash
yarn add pinia
```

```js
import { createPinia } from 'pinia'

const pinia = createPinia()
app.use(pinia)
```

## Store

定义store

```js
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0
    }
  }
})
```

调用store

```js
import { useStore } from '...'
import { storeToRefs } from 'pinia'

const store = useStore()
const { count } = storeToRefs(store)	// 保持响应性
```

## State

修改state

```js
const store = useStore()

// 简单
store.count++

// $patch：适合多数据
store.$patch({
  count: store.count + 1,
  word: 'hello'
})

// $patch函数：适合带有一定的逻辑
store.$patch((state) => {
  if (isOk) {
    state.count++
  } else {
    state.count--
  }
})

// actions：适合封装和复用
store.increment()
```

