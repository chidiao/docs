# Vuex

[v4](https://vuex.vuejs.org/zh/)

[v3](https://v3.vuex.vuejs.org/zh/)

`vue2` 用 `vuex3` ，`vue3` 用 `pinia` 。

```sh
yarn add vuex@4
yarn add vuex@3
```

## 开始

vuex@3 适配 vue@2

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
})

export default store
```

## State

```js
const state = {
  count: 10
}
```

```js
import { mapState } from 'vuex'

export default {
  computed: {
    // 1.常规函数
    countA() {
      return store.state.count
    },

    // 2.mapState({})
    ...mapState({
      // 2.1.箭头函数，简洁
      countB: (state) => state.count,
      // 2.2.字符串，同名映射
      countC: 'count',
      // 2.3.常规函数，可以调用'this'
      countD() {
        return state.count + this.local
      }
    }),

    // 3.mapState([])
    ...mapState(['count'])
  }
}
```

## Mutation

`mutation` 接收 `state` 作为第一个参数，额外的参数都放在第二个参数里，所以它最好是一个对象(多参数)，它就是 `mutation` 的 载荷 `payload` 。

`mutation` 必须是同步函数。

```js
const mutations = {
  increment(state, payload) {
    state.count += payload.amount
  }
}

// 两种风格的调用方式
store.commit('increment', { amount: 10 })

store.commit({
  type: 'increment',
  amount: 10
})
```

组件内调用

```js
import store from '@/store'
import { mapMutations } from 'vuex'

export default {
  methods: {
    base() {
      // 全局
      this.$store.commit('incrementBy', data)
      // 导入
      store.commit('incrementBy', data)
    },
    // 同名映射
    ...mapMutations(['increment', 'incrementBy']),
    // 别名映射
    ...mapMutations({
      add: 'increment'
    })
  }
}
```

## Action

`action` 提交的是 `mutation` ，而不改变状态。

`action` 可以包含任意异步操作。

`action` 接收一个 `context` 对象作为第一个参数，它具有 `store` 实例相同的属性和方法。额外参数通过第二个参数(载荷)提交。

```js
const actions = {
  increment(context, payload) {
    context.commit('increment')
  },
  // 解构
  increment({ commit }, payload) {
    commit('increment')
  }
}

// 两种风格的调用方式
store.dispatch('incrementAsync', {
  amount: 10
})

store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```

组件中调用

```js
import store from '@/store'
import { mapActions } from 'vuex'

export default {
  methods: {
    base() {
      // 全局
      this.$store.dispatch('incrementBy', data)
      // 导入
      store.dispatch('incrementBy', data)
    },
    // 同名映射
    ...mapActions(['increment', 'incrementBy']),
    // 别名映射
    ...mapActions({
      add: 'increment'
    })
  }
}
```
