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

```bash
yarn add -D autoprefixer
```

命令调用

```bash
postcss input.css -o output.css -u autoprefixer
```

配置调用

```js
// postcss.config.js
module.exports = {
  plugins: {
    autoprefixer: {}
  }
}
```

## Rem

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

## postcss-pxtorem

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
