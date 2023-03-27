# 全局配置

## pages.json

[pages.json](https://uniapp.dcloud.net.cn/collocation/pages.html)

### pages

pages 的 page 对象只有两个属性。

::: code-group

```json [path]
{
  "pages": [
    { "path": "pages/home/index" },
    { "path": "pages/mine/index" },
    { "path": "pages/login/login" },
    { "path": "pages/login/register" }
  ]
}
```

```json [style]
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        // 导航栏
        "navigationBarBackgroundColor": "#f5f5f5",
        "navigationBarTextStyle": "white",
        "navigationBarTitleText": "标题",
        "navigationStyle": "custom",
        // 窗口和下拉
        "backgroundColor": "#f5f5f5",
        "backgroundTextStyle": "dark",
        "enablePullDownRefresh": true,
        "onReachBottomDistance": 50
      }
    }
  ]
}
```

:::

### globalStyle

和 style 一致

```json
{
  "globalStyle": {
    // 导航栏
    "navigationBarBackgroundColor": "#f5f5f5",
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "标题",
    "navigationStyle": "custom",
    // 窗口和下拉
    "backgroundColor": "#f5f5f5",
    "backgroundTextStyle": "dark",
    "enablePullDownRefresh": true,
    "onReachBottomDistance": 50
  }
}
```

### tabBar

::: code-group

```json
{
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#3cc51f",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/home/index",
        "iconPath": "@static/imgs/home-0.png",
        "selectedIconPath": "@static/imgs/home-1.png",
        "text": "主页"
      },
      {
        "pagePath": "pages/mine/index",
        "iconPath": "@static/imgs/mine-0.png",
        "selectedIconPath": "@static/imgs/mine-1.png",
        "text": "我的"
      }
    ]
  }
}
```

:::

## manifest.json

[manifest.json](https://uniapp.dcloud.net.cn/collocation/manifest.html)

屏幕方向

```json
{
  "app-plus": {
    "screenOrientation": [
      "portrait-primary", //  竖屏
      "portrait-secondary", //  反向竖屏
      "landscape-primary", //  横屏
      "landscape-secondary" //  反向横屏
    ]
  }
}
```

## uni.scss

[uni.scss](https://uniapp.dcloud.net.cn/collocation/uni-scss.html)
