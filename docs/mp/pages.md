# pages.json

[pages.json](https://uniapp.dcloud.net.cn/collocation/pages.html)

## pages

```json
{
  "pages": [
    { "path": "/pages/home/index" },
    { "path": "/pages/market/index" },
    { "path": "/pages/wallet/index" },
    { "path": "/pages/mine/index" }
  ]
}
```

### style

```json
{
  "path": "/pages/home/index",
  "style": {
    "navigationBarTitleText": "标题",
    "navigationStyle": "custom",
    "enablePullDownRefresh": true,
    "onReachBottomDistance": 50
  }
}
```

## globalStyle

```json
{
  "globalStyle": {
    "navigationBarTitleText": "标题",
    "navigationStyle": "default",
    "enablePullDownRefresh": false,
    "onReachBottomDistance": 50
  }
}
```

## tabBar

```json
{
  "tabBar": {
    "color": "#000",
    "selectedColor": "#333",
    "backgroundColor": "#fff",
    "list": [
      {
        "pagePath": "/pages/home/index",
        "iconPath": "@/static/imgs/home-0.png",
        "selectedIconPath": "@/static/imgs/home-1.png",
        "text": "主页"
      },
      {
        "pagePath": "/pages/mine/index",
        "iconPath": "@/static/imgs/mine-0.png",
        "selectedIconPath": "@/static/imgs/mine-1.png",
        "text": "我的"
      }
    ]
  }
}
```
