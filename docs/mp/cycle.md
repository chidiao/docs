# 生命周期

## onPullDownRefresh()

```json
// pages.json
{
  "path": "index",
  "style": {
    "navigationBarTitleText": "首页",
    "enablePullDownRefresh": true
  }
}
```

```js
// 监听用户下拉动作
onPullDownRefresh()

// 触发下拉动画
wx.startPullDownRefresh()

// 结束下拉动画
wx.stopPullDownRefresh()
```

```js
export default {
  onLoad() {
    wx.startPullDownRefresh()
    this.getData()
  },
  onPullDownRefresh() {
    this.getData()
  },
  methods: {
    getData() {
      http.get('/data').then((res) => {
        wx.stopPullDownRefresh()
      })
    }
  }
}
```

## onReachBottom()

```

```

## onPageScroll()

```

```
