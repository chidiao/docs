# 微信

## App

```js
App({
  globalData: {
    token: '',
    userinfo: {}
  },
  onLaunch(opt) {
    // 小程序加载
  },
  onShow() {
    // 小程序进入前台
  },
  onHide() {
    // 小程序进入后台
  },
  onError(msg) {
    // 小程序错误
  }
})

// 页面调用全局实例
const app = getApp()
```

## Page

```js
Page({
  data: {
    msg: 'Hello World'
  },
  onLoad(opt) {
    // 页面加载，进入页面
  },
  onShow() {
    // 页面显示，进入前台
  },
  onReady() {
    // 页面初次渲染完成
  },
  onHide() {
    // 页面隐藏，进入后台
  },
  onUnload() {
    // 页面关闭，离开页面
  },
  onPullDownRefresh() {
    // 下拉刷新
  },
  onReachBottom() {
    // 底部加载
  },
  onShareAppMessage() {
    // 转发
  },
  onPageScroll() {
    // 页面滚动
  },
  onResize() {
    // 横屏切换
  },
  onTabItemTap(tab) {
    // tab切换
  },
  // methods:
  myFunc() {
    this.setData({
      msg: 'World Hello'
    })
  },
  // customData:
  myData: {
    foo: 'bar'
  }
})
```
