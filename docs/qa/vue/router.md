# Router

## 导航守卫

### 全局

`router.beforeEach` 登录拦截、权限校验

`router.beforeResolve` 数据预获取

`router.afterEach` 埋点统计、修改标题

### 路由独享

`beforeEnter` 路由的属性之一，仅对该条路由有效

### 组件

`beforeRouteEnter`

`beforeRouteUpdate` 同组件复用时更新数据，`/user/1` - `/user/2` ，不重新触发 `create` 和 `mount`

`beforeRouteLeave` 清理垃圾、离开确认

## 工作原理

监听 url 变化，驱动 `<router-view>` 动态渲染目标组件

hash

```js
window.addEventListener('hashchange', () => {})
```

history

```js
window.addEventListener('popstate', () => {})
```

更新 url ，不会发生页面刷新

```js
history.pushState(null, '', '/user/123')
```
