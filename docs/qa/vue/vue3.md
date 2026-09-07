# Vue2 vs Vue3

## 响应式原理

### Vue2 Object.defineProperty

递归遍历 data，为每个属性挂载 getter/setter

数据劫持的是每一个属性

新增和删除不会重新调用，所以无法响应，需要 `$set`

数组下标赋值无法响应，是因为性能原因没有劫持，而是重写了数组的7个变异方法

```js
const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
```

深层递归性能开销大

### Vue3 Proxy

`Proxy` 能够代理整个对象

数据劫持的是整个对象，而不是某个属性

性能好，开销小

## 风格

**Options API**

按类型组织代码。data，methods。逻辑分散，复用麻烦，维护困难。

**Composition API**

按功能组织代码。把同一个功能的数据和逻辑放在一起，方便抽离和复用。

## 生命周期

create => setup

destroy => unmount

## 组件

`<Teleport>`：传送门，指定组件挂载位置，适合 Modal、Toast

`<Fragment>`：支持多个根节点

## API

- 全局挂载

```js
Vue.prototype.$axios = axios
Vue.use(xx)

app.config.globalProperties.$axios = axios
app.use(xx)
```

- 删除了 `filters` ，建议使用方法代替

- v-model 支持多个

  ```js
  export default {
    props: ['value'],
    emits: 'input'
  }
  ```

  ```js
  defineProps(['modelValue', 'name'])
  defineEmits(['update:modelValue', 'update:name'])
  ```

## 性能

静态标记

Vue2 是全量对比template，Vue3 会区分哪些是静态的，哪些是动态的。diff 只对比动态节点，跳过静态 DOM

静态提升

纯静态节点直接提升到渲染函数外层，只创建一次，不重复生成 VNode

打包优化

Vue3 模块化、tree-shaking，按需引入，打包更小；Vue2 整体打包，体积更大
