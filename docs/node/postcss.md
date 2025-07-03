# PostCSS

## PostCSS CLI

```bash
yarn add -D postcss postcss-cli
```

装了 postcss-cli 就可以运行 postcss 命令了

```bash
postcss input.css -o output.css -w
postcss src/css -d dist/css -w
```

## Plugins

### 两种配置方式

```js
// postcss.config.mjs
export default {
  plugins: {
    autoprefixer: {}
  }
}
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    autoprefixer: {}
  }
}
```

### 常用插件

| 插件                 | 功能             | 描述                           |
| -------------------- | ---------------- | ------------------------------ |
| postcss-import       | 导入代码，模块化 | 合并 `@import` 引入的 CSS 文件 |
| @tailwindcss/postcss | tailwindcss      |                                |
| autoprefixer         | 兼容性，前缀     |                                |
| cssnano              | 压缩 CSS         |                                |

```bash
yarn add -D tailwindcss @tailwindcss/postcss postcss
yarn add -D postcss-import autoprefixer cssnano
```

```js
// postcss.config.mjs
export default {
  plugins: {
    'postcss-import': {},
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    cssnano: {}
  }
}
```

### 命令方式调用

```bash
postcss input.css -o output.css -u autoprefixer
```

## 其他

### Rem

[腾讯 Rem 布局](https://tgideas.qq.com/doc/frontend/spec/m/layout.html)

```js
//屏幕适应
;(function (win, doc) {
  if (!win.addEventListener) return
  var html = document.documentElement
  function setFont() {
    var html = document.documentElement
    var k = 750
    html.style.fontSize = (html.clientWidth / k) * 100 + 'px'
  }
  setFont()
  setTimeout(function () {
    setFont()
  }, 300)
  doc.addEventListener('DOMContentLoaded', setFont, false)
  win.addEventListener('resize', setFont, false)
  win.addEventListener('load', setFont, false)
})(window, document)
```

### postcss-pxtorem

```bash
yarn add -D postcss-pxtorem
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 75, // 根元素字体大小
      unitPrecision: 5, // 小数点保留位数
      propList: ['*'], // 需要转换的参数
      selectorBlackList: ['vant-'], // 不需要转换的选择器
      replace: true,
      mediaQuery: false, // 转换@media中的参数
      minPixelValue: 0, // 最小转换像素值
      exclude: false // 忽略路径，包括node_modules
    }
  }
}
```
