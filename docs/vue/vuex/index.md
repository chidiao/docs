# Vuex

## State

### 定义

```js
const store = {
  state: {
    count: 0
  }
}
```

### 获取

```js
// 计算属性
const Counter = {
  computed: {
    count() {
      return store.state.count
    }
  }
}

// mapState
export default {
  computed: {
    ...mapState({
      count1: (state) => state.count,
      count2: 'count',
      count3(state) {
        return state.count + this.localCount
      }
    })
  }
}

// mapState 同名映射
export default {
  computed: {
    ...mapState(['count'])
  }
}
```

## Mutation

```js
const store = {
  mutations: {
    increment(state, payload) {
      state.count += payload.amount
    }
  }
}

store.commit('increment', { amount: 10 })
store.commit({
  type: 'increment',
  amount: 10
})
```

## Module

### 定义

```js
const user = {
  state: {
    token: '',
    info: {}
  }
}

const store = createStore({
  modules: {
    user
  }
})

// 获取
store.state.user.token
store.state.user.info
```
