# MP

## 路由

```js
[mp].[fun]({
  url,
  success: () => {},
  fail: () => {},
  complete: () => {}
})

[mp].[fun](url).then(res => {
	//
}).catch(err => {
	//
}).finally(res => {
	//
})
```

| 方法              | 描述                                                   |
| ----------------- | ------------------------------------------------------ |
| switchTab(obj)    | 跳转到 `tabBar` 页面，并关闭其他所有非 `tabBar` 页面   |
| reLaunch(obj)     | 关闭所有页面，打开某个页面                             |
| redirectTo(obj)   | 关闭当前页面，打开某个页面，不允许跳转 `tabBar` 页面   |
| navigateTo(obj)   | 保留当前页面，跳转到某个页面，不允许跳转 `tabBar` 页面 |
| navigateBack(obj) | 关闭当前页面，返回上一页或多页                         |
| getCurrentPages() | 获取当前页面栈                                         |

## 生命周期

| 钩子                | 时机                                 | 更多信息   |
| ------------------- | ------------------------------------ | ---------- |
| onLoad()            | 首次进入页面加载时触发               | 可获取参数 |
| onShow()            | 加载完成、后台转前台、重新进入时触发 |            |
| onReady()           | 页面首次渲染完成时触发               |            |
| onHide()            | 前台转后台、进入其他页面时触发       |            |
| onUnload()          | 页面卸载时触发                       |            |
| onPullDownRefresh() | 下拉刷新                             |            |
| onReachBottom()     | 上拉触底                             |            |
| onShareAppMessage() | 点击转发                             |            |

## 下拉刷新

```json
// pages.json
{
  "path": "index",
  "style": {
    "enablePullDownRefresh": true
  }
}
```

```js
// 下拉动作可触发生命周期，也可以手动触发下拉刷新
// 下拉刷新，需要手动结束
export default {
  onLoad() {
    ;[mp].startPullDownRefresh()
    this.getData()
  },
  onPullDownRefresh() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get().then((res) => {
        ;[mp].stopPullDownRefresh()
      })
    }
  }
}
```

## 条件编译

```html
<!-- #ifdef MP-WEIXIN -->
<view>hello</view>
<!-- #endif -->
```

## 支付

```js
uni.requestPayment({
  provider: 'alipay',
  orderInfo: orderInfo
})
```

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
