# MP

## 路由

```js
[mp].[fun]({
  // 通用参数
  url: url,
  success: function(res) {},
  fail: function(err) {},
  complete: function(res) {},

  // navigateTo
  events: { ...obj }
})

[mp].[fun](url).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
}).finally(res => {
  console.log(res)
})
```

### switchTab(obj)

跳转到 `tabBar` 页面，并关闭其他所有非 `tabBar` 页面

### reLaunch(obj)

关闭所有页面，打开某个页面

### redirectTo(obj)

关闭当前页面，打开某个页面，不允许跳转 `tabBar` 页面

### navigateTo(obj)

保留当前页面，跳转到某个页面，不允许跳转 `tabBar` 页面

### navigateBack(obj)

关闭当前页面，返回上一页或多页

### getCurrentPages()

获取当前页面栈

## 页面生命周期

### onLoad

页面加载，可以传递参数

```js
uni.navigateTo('/user?id=7')

export default {
  onLoad(opt) {
    let { id } = opt
    console.log(id)
  }
}
```

### onUnload

页面卸载

### onShow

页面显示

### onHide

页面隐藏

### onPullDownRefresh

下拉刷新

```js
// 可以手动触发
[mp].startPullDownRefresh()

// 触发
onPullDownRefresh() {
  http.get(url).then(res => {
    // 手动结束
    [mp].stopPullDownRefresh()
  })
}
```

### onReachBottom

滑到底部

## openid

用户在当前小程序的唯一标识

`code` 用户登录凭证(5 分钟)

使用 `code` 换取 `openid` 、`unionid` 、`session_key` 等

```js
uni.login({
  provider: 'weixin',
  success: (loginRes) => {
    console.log(loginRes.authResult)
  }
})

wx.login({
  success: (res) => {
    const { code } = res

    http
      .post({
        url,
        code
      })
      .then((res) => {
        console.log(res)
      })
  }
})
```

## unionid

用户在微信开放平台帐号下的唯一标识
