# 下拉刷新

先在 `style` 里配置开启

```json
{
  "path": "pages/pullDownRefresh",
  "style": {
    "enablePullDownRefresh": true
  }
}
```

下拉刷新

```js
export default {
  data() {
    return {
      list: []
    }
  },
  onLoad() {
    // 手动触发动画的同时请求数据
    uni.startPullDownRefresh()
    this.getList()
  },
  onPullDownRefresh() {
    // 用户触发动画的同时请求数据
    this.getList()
  },
  methods: {
    // 数据更新完成后需要手动结束动画
    async getList() {
      const { data } = await getList()
      this.list = [...this.list, ...data]
      uni.stopPullDownRefresh()
    }
  }
}
```
