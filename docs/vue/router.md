# Vue Router

[官方文档](https://next.router.vuejs.org/zh/introduction.html)

## 开始

```bash
npm i vue-router@4
```



```html
<router-link to="/home">Home</router-link>
<router-link to="/about">About</router-link>

<router-view></router-view>
```



```js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```



### 导航

[文档](https://next.router.vuejs.org/zh/guide/essentials/navigation.html)

```js
router.push('/home')

router.replace('/about')

router.go(1)
```



### 滚动

```js
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
```



### 重定向和别名

```js
const routes = [
  { path: '/', component: Home, redirect: '/home' },
  { path: '/', component: Home, alias: '/home' }
]
```



### 嵌套

```js
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        path: '/info',
        component: UserInfo
      },
      {
        path: '/job',
        component: UserJob
      }
    ]
  }
]
```



