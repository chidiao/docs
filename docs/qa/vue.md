# Vue

- **渐进式框架：**？

## 基础

### 常用指令

v-cloak：解决闪动问题

v-bind：绑定属性

v-on：绑定事件

v-model：双向绑定

v-html/v-text/v-if/v-show/v-for

### v-if 和 v-show

| 比较 | v-if                         | v-show        |
| ---- | ---------------------------- | ------------- |
| 场景 | 很少改变条件，不需要频繁切换 | 频繁切换      |
| 区别 | 重新渲染                     | display: none |

### computed 和 watch

| 比较 | computed                   | watch                                              |
| ---- | -------------------------- | -------------------------------------------------- |
|      | 计算属性                   | 监听变化                                           |
|      | 数据发生变化，更新计算属性 | 数据发生变化，执行回调，在回调中可以进行一系列操作 |
|      | 有缓存                     |                                                    |
| 场景 |                            |                                                    |

## 生命周期

| 钩子函数        | 生命周期 | 阶段                                                    | vue3            | 描述 |
| --------------- | -------- | ------------------------------------------------------- | --------------- | ---- |
| beforeCreate()  | 创建     | 开始创建实例，`data` 、`methods` 不可访问               |                 |      |
| created()       | 创建     | 实例创建完毕，`data` 、`methods` 可以访问，模板尚未编译 |                 |      |
| beforeMount()   | 挂载     | 完成模板的编译                                          |                 |      |
| mounted()       | 挂载     | 将编译好的模板挂载到页面                                |                 |      |
| beforeUpdate()  | 更新     | 实例数据发生改变(更新)，DOM 还未更新                    |                 |      |
| updated()       | 更新     | DOM 更新完毕                                            |                 |      |
| beforeDestroy() | 销毁     | 实例被销毁之前，实例所有数据功能正常                    | beforeUnmount() | 卸载 |
| destroyed()     | 销毁     | 实例被销毁之后                                          | unmounted()     | 卸载 |
| activated()     |          | 特殊，`keep-alive` 缓存的组件被激活                     |                 |      |
| deactivated()   |          | 特殊，`keep-alive` 缓存的组件被失活                     |                 |      |
| errorCaptured() |          | 特殊                                                    |                 |      |

## 全家桶

### VueCLI

### VueRouter

- **路由**：页面导航

### Vuex

- **状态管理**：集中式存储管理应用中所有组件的状态(全局数据)

- **state**：存储状态(data)

- **getter**：计算属性

- **mutation**：修改状态的唯一途径(methods)，所有的 `mutation` 都是同步方法

- **action**：异步的调用 `mutation`

- **module**：模块化
