# Vuex

[官方文档](https://next.vuex.vuejs.org/)

## 开始

```bash
npm i vuex@4
```



```js
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
```



## 3.x

### 开始

```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  increment(state) {
    state.count++
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store;
```



### 挂载

```js
// main.js
new Vue({
  el: '#app',
  store
})

// 调用
this.$store.commit('increment')
console.log(this.$store.state.count)
```



### state

```js
import { mapState } from 'vuex'

const computed = {
  ...mapState([
    'count',
  ]),
  ...mapState({
    count: state => state.count,
    local(state) {
      return state.count + this.localCount
    }
  })
}

// 箭头函数没有this 无法调用局部数据
// 如需调用组件内数据 需要使用常规函数
```



### getters

```js
// getters 可以理解为 state 的计算属性
const getters = {
  double(state) {
    return state.count * 2
  },
  double2(state, getters) {
    return getters.double * 2
  }
}

// 引用
import { mapGetters } from 'vuex'

const computed = {
  ...mapGetters([
    'double',
    'double2'
  ]),
  ...mapGetters({
    double: 'double'
  })
}
```



### mutation

修改 state 的唯一方法就是 mutation

mutation 必须是同步函数

```js
// store
const mutations = {
  increment(state) {
    state.count++
  },
  increment(state, payload) {
    state.count += payload.amount
  }
}

// 调用
this.$store.commit('increment')
this.$store.commit('increment', {
  amount: 10
})

// 引用
import { mapMutations } from 'vuex'

const methods = {
  ...mapMutations([
    'increment'
  ]),
  ...mapMutations({
    add: 'increment'
  })
}
```



### action

action 通常是异步的

action 的语法和 mutation 相似，用来异步分发 mutation

```js
const actions = {
  increment(context) {
    context.commit('increment')
  },
  increment({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}

// 调用
store.dispatch('increment')
```



### module

模块化

```js
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```



