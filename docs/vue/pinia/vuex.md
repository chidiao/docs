# Vuex

[vuex](https://vuex.vuejs.org/)

## 开始

::: tip

Vue2 使用 Vuex3

Vue3 使用 Pinia

:::

```sh
yarn add vuex@3
```

创建一个 `store`

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store
```

Vue 通过 `store` 选项，将状态从根组件注入到每一个子组件中，然后通过 `$store` 来访问

```js
import store from '@/store'

new Vue({
  store
})
```

## State

创建

```js
const state = {
  count: 0
}
```

访问

```js
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
```

辅助函数

::: code-group

```js [数组]
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['userinfo', 'token'])
  }
}
```

```js [对象]
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      strCount: 'count',
      funCount: (state) => state.count,
      totalCount(state) {
        return state.count + this.localCount
      }
    })
  }
}
```

:::

## Getters

创建

接收两个参数

`state` ：当前模块的 `state` 对象

`getters` ：所有模块的 `getters` 对象

```js
const getters = {
  doubleCount: (state) => state.count * 2
}
```

返回一个函数(不会被缓存)

```js
const getters = {
  getTodoById: (state) => (id) => {
    return state.todos.find((todo) => todo.id == id)
  }
}

store.getTodoById(2)
```

辅助函数

::: code-group

```js [数组]
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['doubleCount'])
  }
}
```

```js [对象]
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      count: 'doubleCount'
    })
  }
}
```

:::

## Mutations

创建

接收两个参数

`state` ：当前模块的 `state` 对象

`payload` ：负载，即传递的参数，可以是任意数据类型，如果有多个参数，那就传一个对象

::: code-group

```js [single]
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

store.commit('SET_TOKEN', token)
```

```js [multi]
const mutations = {
  SET_INFO(state, payload) {
    state.userinfo = payload.userinfo
    state.token = payload.token
  }
}

// 两种调用方式
store.commit('SET_INFO', { userinfo, token })

store.commit({
  type: 'SET_INOF',
  userinfo,
  token
})
```

:::

辅助函数

```js
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['SET_TOKEN']),
    ...mapMutations({
      setToken: 'SET_TOKEN'
    })
  }
}
```

::: info

`mutation` 中的 `this` 指向的是当前 `store` 。

所以，`mutation` 中可以访问 `getters` ，调用 `mutation` 和 `action` 。

但是，这些通常都是不建议的，且不需要的操作。

`mutation` 通常只用来赋值操作就行了。

`mutation` 中更新状态是同步操作，且必须是同步函数。

:::

## Actions

`action` 可以包含任意异步操作，它提交 `mutation` ，而不直接修改状态。

创建

接收两个参数

`context` ：和当前 `store` 一毛一样，但并不是一回事，可以通过它访问 `store` 的所有属性和方法，可以直接用解构语法。

`payload` ：负载，和 `mutation` 一样。

```js
const actions = {
  updateUserinfo(context, payload) {
    const { state, getters, commit, dispatch } = context

    getUserinfo().then((res) => {
      let user = res.data
      commit('SET_USERINFO', user)
    })
  },
  update({ commit }) {
    commit('UPDATE')
  }
}

store.dispatch('updateUserinfo')
```

辅助函数

```js
import { mapActions } from 'vuex'

export default {
  ...mapActions(['updateUserinfo']),
  ...mapActions({
    update: 'updateUserinfo'
  })
}
```

异步操作

```js
const actions = {
  updateUserinfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserinfo()
        .then((res) => {
          let user = res.data
          commit('SET_USERINFO', user)
          resolve(user)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

store.dispatch('updateUserinfo').then((user) => {
  console.log(user)
})
```
