# Browser

### URL

```js
// 获取BaseURL
const getBaseURL = (url) => url.replace(/[?#].*$/, '')

// 获取URL参数
const getURLParameters = (url = location.search) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  )

// redirect
const redirect = (url, asLink = true) => (asLink ? (window.location.href = url) : window.location.replace(url))
```

### Clipboard

```js
// 复制到剪切板
const copyToClipboard = (str) => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}
```

### ClickOutside

```js
const onClickOutside = (element, callback) => {
  document.addEventListener('click', (e) => {
    if (!element.contains(e.target)) callback()
  })
}
```

### 滚动

```js
// 滚动到顶部
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

// 滚动到指定元素
const smoothScroll = (element) =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  })

// 获取元素垂直偏移量(文档)
const getVerticalOffset = (el) => {
  let offset = el.offsetTop,
    _el = el
  while (_el.offsetParent) {
    _el = _el.offsetParent
    offset += _el.offsetTop
  }
  return offset
}

// 获取元素偏移量(视口)
const getElementOffset = (el) => {
  let { top, left } = el.getBoundingClientRect()
  let { scrollTop, scrollLeft } = document.body
  return {
    top: top + scrollTop,
    left: left + scrollLeft
  }
}

// 获取滚动距离
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

// 元素是否在可视区域
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

// 是否滚动到底部
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight)

// 滚动结束时回调
const onScrollStop = (callback) => {
  let isScrolling
  window.addEventListener(
    'scroll',
    (e) => {
      clearTimeout(isScrolling)
      isScrolling = setTimeout(() => {
        callback()
      }, 150)
    },
    false
  )
}
```

### 表单

```js
// 获取表单数据
const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  )
```

### 检测

```js
// 获取超出视口宽度的元素，当浏览器有水平滚动条的时候试试这个
const getElementsBiggerThanViewport = () => {
  const docWidth = document.documentElement.offsetWidth
  return [...document.querySelectorAll('*')].filter((el) => el.offsetWidth > docWidth)
}

// 是否浏览器
const isBrowser = () => ![typeof window, typeof document].includes('undefined')

// 是否Node
const isNode = () => typeof process !== 'undefined' && !!process.versions && !!process.versions.node

// 设备类型
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
```

### 其他

```js
// 生成UUID
const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  )
```
