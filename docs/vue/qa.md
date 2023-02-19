# Vue

## Vue

- [生命周期](./cycle)
- [常用指令](./directives)
- [常用修饰符](./modifier)
- [计算属性和侦听器](./cw)

## 通信方式

- [props]()
- [emits]()
- [provide 和 inject]()
- [vuex]()

### MVC

`View` 负责页面显示逻辑

`Model` 负责存储业务数据，以及相应数据操作

`Controller` 是 `View` 和 `Modal` 的纽带

### MVVM

`ViewModel` 通过双向绑定，将 `View` 和 `Model` 的同步更新给自动化了

### 渐进式

### 视图刷新

修改数组或对象后，视图不更新的问题

解决方法：

- Vue.set()

  ```js
  Vue.set(target, key, val)
  ```

- $forcecUpdated()

  强制更新视图

### 异步更新

vue 的视图，dom 更新是异步的

$nextTick(callback)

```js
let methods = {
  fn1() {
    this.list.push('new obj')
    fn()
    // 此时如果获取 dom 元素，结果则为更新前的结果
  },
  fn2() {
    this.list.push('new obj')
    this.list.push('new obj')
    this.list.push('new obj')

    this.$nextTick(() => {
      fn()
      // 此时如果获取 dom 元素，结果才是更新后的结果
      // 虽然数据多次更新，但 nextTick 只会触发一次回调
    })
  }
}
```

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
