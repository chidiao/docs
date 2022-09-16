# Pinia

[Pinia](https://pinia.vuejs.org/)

```bash
yarn add pinia
```

```js
import { createPinia } from 'pinia'

const pinia = createPinia()
app.use(pinia)
```

## Store

创建 store

pinia 更像一个组件了，分别对应 `data` 、`computed` 、`methods`

```js
import { defineStore } from 'store'

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 0
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

setup

```js
export const useCounterStore = define('', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

调用 store

```js
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
```

## State

`data`

修改 state

```js
const store = useStore()

// 可以通过store直接修改了
store.count++

// 修改多个
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'john'
})
```

重置 state

```js
store.$reset()
```

mapState()

可读

```js
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(useCounterStore, ['count', 'doubleCount']),
    ...mapState(useCounterStore, {
      myCount: 'count',
      double: (store) => store.count * 2
    })
  }
}
```

mapWritableState()

可写

```js
import { mapWritableState } from 'pinia'

export default {
  computed: {
    ...mapWritableState(useCounterState, ['count', 'doubleCount']),
    ...mapWritableState(useCounterState, {
      myCount: 'count'
    })
  }
}
```

## Getters

`computed`

## Actions

`methods`
