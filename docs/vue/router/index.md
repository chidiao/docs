# Router

## 导航

### 编程式导航

## 导航守卫



## 懒加载

打包时 JS 过大，会影响页面加载。将不同路由对应的组件分割成不同的代码块，当路由被访问时才会加载对应组件，这样会更加高效。

```js
// 普通导入
import Home from '@/views/Home.vue'
const routes = [{ path: '/', component: Home }]

// 懒加载，动态导入
const Home = () => import('@/views/Home.vue')
const routes = [{ path: '/', component: Home }]

// 懒加载，动态导入
const routes = [{ path: '/', component: () => import('@/views/Home.vue') }]

// 按组打包，借助webpack，将相同ChunkName的打包到一起
const error = {
  403: () => import(/* webpackChunkName: "error" */ '@/views/exception/403'),
  404: () => import(/* webpackChunkName: "error" */ '@/views/exception/404'),
  500: () => import(/* webpackChunkName: "error" */ '@/views/exception/500')
}
```
