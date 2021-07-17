# 代码段

## Dom

### 回到顶部

```js
function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}
```

### 元素偏移量

```js
function getOffset(el) {
  let { top, left } = el.getBoundingClientRect()
  let { scrollTop, scrollLeft } = document.body
  return {
    top: top + scrollTop,
    left: left + scrollLeft
  }
}
```

### 是否在可视区

```js
function elementIsVisibleInViewport(el, partiallyVisible = false) {
  const { top, left, bottom, right } = el.getBoundingClientRect()

  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}
```

## 检测

### 是否移动端

```js
function isMobile() {
  return 'ontouchstart' in window
}
```

### 是否微信

[微信外打开](https://opensupport.alipay.com/support/helpcenter/93/201602621887)

```js
function isWeiXin() {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') != -1) return true
  else return false
}
```

### 手机平台

```js
function getos() {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1 || ua.indexOf('ipod') != -1) {
    return 'iphone'
  } else {
    return 'android'
  }
}
```

## 获取 url 参数

```js
function getUrlParams() {
  let query = window.location.search.substring(1)
  let params = query.split('&')
  let result = {}
  for (let param of params) {
    let tmp = param.split('=')
    result[tmp[0]] = tmp[1]
  }
  return result
}

function getUrlParam(name) {
  return getUrlParams()[name]
}
```

## 数组切片

```js
function arraySlice(array, size = 1) {
  let tmp = [...array]
  let result = []
  while (tmp.length) {
    result.push(tmp.splice(0, size))
  }
  return result
}
```

## 文本复制

### textarea

根据场景对 textarea 元素进行隐藏处理

```js
function copy(str) {
  let el = document.createElement('textarea')
  el.value = str
  el.readOnly = true
  document.body.appendChild(el)
  el.select()
  let result = document.execCommand('copy')
  if (result) {
    // 成功
  } else {
    // 失败
  }
  el.remove()
}

// 全选
el.select()

// 自选
el.focus()
el.setSelectionRange(3, 5)

// 复制
document.execCommand('copy')
```

### clipboard

[clipboard](https://clipboardjs.com/)

```js
function copyData(data) {
  let event = window.event || {}
  let clipboard = new ClipboardJS('', {
    text: () => data
  })
  clipboard.on('success', (e) => {
    clipboard.off('success')
    clipboard.off('error')
    clipboard.destroy()
  })
  clipboard.on('error', (e) => {
    clipboard.off('success')
    clipboard.off('error')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
```

## 其他

### 随机获取布尔值

```js
const randomBoolean = () => Math.random() >= 0.5
```

### 反转字符串

```js
const reverseStr = (str) => str.split('').reverse().join('')
```

### 判断奇偶数

```js
// 奇数
const isOdd = (num) => num % 2 !== 0

// 偶数
const isEven = (num) => num % 2 === 0
```

### 二维码

```js
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
```
