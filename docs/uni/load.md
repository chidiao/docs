# 加载

## 下拉刷新

::: code-group

```js [page]
export default {
  onLoad() {
    // 手动触发下拉刷新
    uni.startPullDownRefresh()
    this.getData()
  },
  onPullDownRefresh() {
    // 用户触发下拉刷新
    this.getData()
  },
  methods: {
    getData() {
      http.get('/data').then((res) => {
        // 手动结束下拉刷新
        uni.stopPullDownRefresh()
      })
    }
  }
}
```

```json [pages.json]
{
  "style": {
    "enablePullDownRefresh": true
  }
}
```

:::

## 加载更多

::: code-group

```js [page]
export default {
  onReachBottom() {
    this.getData()
  },
  methods: {
    getData() {
      http.get('/data')
    }
  }
}
```

```json [pages.json]
{
  "style": {
    "onReachBottomDistance": 50
  }
}
```

:::
