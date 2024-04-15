# Routes

## 嵌套路由

`path` 的两种写法

```js
const routes = [
  {
    path: '/user',
    component: User,
    children: [
      {
        // 相对路径
        path: 'list',
        component: UserList
      },
      {
        // 绝对路径
        path: '/user/list',
        component: UserList
      }
    ]
  }
]
```

`path` 留空

空路由很有用，可以在使用父/根路由的同时，通过组件或者重定向的方式来渲染需要的内容

```js
const routes = [
  {
    path: '/user',
    component: User,
    children: [
      {
        path: '',
        component: UserHome
      },
      {
        path: '',
        redirect: '/user/list'
      }
    ]
  }
]
```

## redirect

重定向

```js
const routes = [{ path: '/home', redirect: '/' }]
```

## alias

别名

不会发生路径变化

```js
const routes = [{ path: '/', component: Homepage, alias: '/home' }]
const routes = [{ path: '', component: UserList, alias: ['/people', 'list'] }]
```
