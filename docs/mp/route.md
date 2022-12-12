# 路由

## switchTab()

跳转到`tabBar`页面，并关闭其他所有页面

```js
wx.switchTab({
  url: '/home'
})
```

## reLaunch()

关闭所有页面，并打开到某一个页面

```js
wx.reLaunch({
  url: 'test?id=1'
})
```

## redirectTo()

关闭当前页面，并打开到某一个页面

```js
wx.redirectTo({
  url: 'test?id=1'
})
```

## navigateTo()

保留当前页面，跳转到某一个页面

```js
wx.navigateTo({
  url: 'test?id=1'
})
```

`events`：页面间通信接口，用于监听被打开页面发送到当前页面的数据

## navigateBack()

关闭当前页面，返回上一页面或多级页面

```js
wx.navigateBack({
  delta: 2
})
```
