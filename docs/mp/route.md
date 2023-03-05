# 路由

```js
uni[type]({
  url: url,
  success: () => {},
  fail: () => {},
  complete: () => {}
})
```

## navigateTo()

保留当前页面，跳转到某个页面

```js
uni.navigateTo({
  url: '/pages/shop/list'
})
```

页面间通信

::: code-group

```js [from]
export default {
  onLoad(opt) {
    uni.navigateTo({
      // url 传参给新页面
      url: '/pages/to?id=6',
      // 创建监听器，接收回传数据
      events: {
        myEmit(data) {
          let { msg } = data
          console.log(msg)
        }
      }
    })
  }
}
```

```js [to]
export default {
  onLoad(opt) {
    // 解析 url 传参
    let { id } = opt
    // 监听器回传数据
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('myEmit', { msg: 'Hello World!' })
  }
}
```

:::

## redirectTo()

关闭当前页面，跳转到某个页面

```js
uni.redirectTo({
  url: '/pages/shop/list'
})
```

## reLaunch()

关闭所有页面，打开到某个页面

```js
uni.reLaunch({
  url: '/pages/shop/list'
})
```

## switchTab()

跳转到 `tabBar` 页面，并关闭其他所有页面

```js
uni.switchTab({
  url: '/pages/mine/index'
})
```

## navigateBack()

关闭当前页面，返回上一页面或多级页面

```js
uni.navigateBack({
  delta: 2
})
```
