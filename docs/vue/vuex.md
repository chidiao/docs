# Vuex

[vuex](https://vuex.vuejs.org/zh/)

```sh
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

```js
const mutations = {
  setCount(state, payload) {
    state.count = payload.count
  }
}

store.commit('setCount', { count: 10 })
store.commit({
  type: 'setCount',
  count: 10
})
```

```js
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      set: 'setCount'
    }),
    ...mapMutations(['setCount'])
  }
}
```
