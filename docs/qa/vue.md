# Vue

## Vue

### MVC

`View` 负责页面显示逻辑

`Model` 负责存储业务数据，以及相应数据操作

`Controller` 是 `View` 和 `Modal` 的纽带

### MVVM

`ViewModel` 通过双向绑定，将 `View` 和 `Model` 的同步更新给自动化了

### 渐进式

### 指令

v-show、v-if、v-for、v-on、v-model、v-bind、v-cloak

### 修饰符

- 表单修饰符

  ```html
  <input type="text" v-model.lazy="value" />
  <p>光标离开时更新，change事件触发更新，而不是input</p>

  <input type="text" v-model.trim="value" />
  <p>过滤首空格字符字符，不过滤中间空格字符</p>

  <input type="number" v-model.number="age" />
  <p>转换为数值类型，若不能则返回原值</p>
  ```

- 事件修饰符

  ```html
  <button @click.stop="handle">阻止冒泡</button>

  <button @click.prevent="handle">阻止默认行为</button>

  <button @click.self="handle">event.target是自己是才触发</button>

  <button @click.once="handle">只触发一次</button>

  <div @click.capture="handle">捕获</div>

  <div @scroll.passive="onScroll">scroll lazy</div>

  <btn @click.native>自定义组件的原生事件</btn>
  ```

- v-bind 修饰符

- 鼠标修饰符

- 键盘修饰符

### 组件通信

- props
- $emit
- provide 和 inject
- vuex

### 全局变量

```js
// vue2.x
Vue.prototype.$store = store

// vue3.x
app.config.globalProperties.$store = store
```

### 视图刷新

修改数组或对象后，视图不更新的问题

解决方法：

- Vue.set()

  ```js
  Vue.set(target, key, val)
  ```

- $forcecUpdated()

  强制更新视图

### 生命周期

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

### computed 和 watch

**computed**

有缓存功能，依赖发生改变才会重新计算

**watch**

异步操作或开销较大的操作时，watch 一定是最有用的选择

### keep-alive

内置组件，组件缓存，避免重新渲染

钩子函数：`activated` 、`deactivated`

### SSR

`Server-Side Rendering` 服务端渲染

优点：

`seo` 优化

首屏渲染优化

其他：

`Prerender SPA Plugin` 预渲染

### 跨域

**CORS**

`HTTP`

`Access-Control-Allow-Origin`

后端实现，前端有浏览器自动完成

**Proxy**

开发环境

本地代理

```js
// vue.config.js
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_SERVER_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
```

生产环境

通过配置 `nginx` 实现代理

**JSONP**

只能 `get`

### axios

封装 `axios`

全局设置：请求头，超时时间

请求拦截器：携带 `token`

响应拦截器：处理错误

## Router

## Vuex

### 概览

一种状态管理模式

集中式存储管理应用的所有组件的状态

| 属性     | 概括               | 描述                                                       |
| -------- | ------------------ | ---------------------------------------------------------- |
| state    | 存储状态(data)     | 单一状态树，唯一数据源，所以每个应用仅有一个 `store` 实例  |
| getter   | 计算属性(computed) |                                                            |
| mutation | 方法(methods)      | 修改状态 `state` 的唯一途径，同步操作                      |
| action   | 调用 `mutation`    | 实现异步操作，最终目的还是通过 `mutation` 修改状态 `state` |
| module   | 模块化             | 单一状态数不免过于庞大，拆分是为了更好的维护               |
