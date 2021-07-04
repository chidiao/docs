# 代码规范

## 参考文档

[TGideas](https://tgideas.qq.com/doc/index.html)

[CodeGuide](https://codeguide.bootcss.com/)



## reset示例

[reset示例](https://tgideas.qq.com/doc/frontend/spec/common/css.html)



## rem布局

[rem布局](https://tgideas.qq.com/doc/frontend/spec/m/layout.html)

```html
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
```



```css
html {
  font-size: 100px;
}
```



```js
(function (win, doc) {
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

