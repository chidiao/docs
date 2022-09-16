# Router

4.x

```js
const router = createRouter({
  history,
  routes,
  scrollBehavior
})
```

3.x

```js
const router = new VueRouter({
  mode,
  routes,
  scrollBehavior
})
```

## history

4.x

```js
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

cosnt router = createRouter({
  history: createWebHashHistory()
})

const router = createRouter({
  history: createWebHistory()
})
```

3.x

```js
const router = new VueRouter({
  mode: 'hash'
})

const router = new VueRouter({
  mode: 'history'
})
```

## scrollBehavior

滚动行为

返回一个滚动到的 `位置`

```js
function scrollBehavior(to, from, savedPosition) {
  // return 'position'
}

// 滚动到顶部，平滑滚动
function toTop() {
  return {
    top: 0,
    behavior: 'smooth'
  }
}

// 传入DOM元素
function toDOM() {
  return {
    el: '#main',
    top: -10
  }
}

// 滚动到上次位置
function toSaved(to, from, savedPosition) {
  if (savedPosition) {
    return savedPostion
  } else {
    return { top: 0 }
  }
}

// 滚动到锚点
function toAnchor(to, from) {
  if (to.hash) {
    return {
      el: to.hash
    }
  }
}

// 3.x
function router3(to, from, savedPositon) {
  if (savedPosition) {
    return savedPosition
  } else if (to.hash) {
    return { selector: to.hash }
  } else {
    return { x: 0, y: 0 }
  }
}
```

## 路由守卫

全局前置守卫

```js
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

全局后置守卫

```js
router.afterEach((to, from) => {
  document.title = to.meta.title
})
```

## 懒加载

打包时 JS 过大，会影响页面加载。将不同路由对应的组件分割成不同的代码块，当路由被访问时才加载对应组件，这样就会更加高效。

动态导入就是懒加载

```js
// 静态导入
import Home from '@/views/Home.vue'

// 动态导入
const Home = () => import('@/views/Home.vue')
```

路由分块

将指定路由打包的一个异步块(chunk)中

webpack

```js
const UserDetails = () => import(/* webpackChunkName: "group-user" */ './UserDetails.vue')
const UserDashboard = () => import(/* webpackChunkName: "group-user" */ './UserDashboard.vue')
const UserProfileEdit = () => import(/* webpackChunkName: "group-user" */ './UserProfileEdit.vue')
```

Vite

```js
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          'group-user': [
            './src/UserDetails',
            './src/UserDashboard',
            './src/UserProfileEdit',
          ],
        },
    },
  },
})
```
