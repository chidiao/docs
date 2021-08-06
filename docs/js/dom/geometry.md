# 几何学

## 元素

### 元素大小

```js
// 元素的完整大小：border + padding + content
let { offsetWidth, offsetHeight } = el

// 外侧大小：border + (scrollbar)
let { clientTop, clientLeft } = el

// 内侧大小：padding + content - (scrollbar)
let { clientWidth, clientHeight } = el
```

### 获取滚动

```js
// 内容完整大小，包括卷出(隐藏)部分
let { scrollWidth, scrollHeight } = el

// 卷出(隐藏)部分的大小，已经滚动了多少
let { scrollLeft, scrollTop } = el
```

### 应用

```js
// 折叠/展开/手风琴/面包屑
el.style.height = 0
el.style.height = el.scrollHeight + 'px'

// 滚动到顶部/底部
el.scrollTop = 0
el.scrollTop = 1e9
```

## 文档

### 窗口大小

```js
// 整个浏览器的大小
let { outerWidth, outerHeight } = window

// 视口大小，浏览器显示区域的大小，包括滚动条
let { innerWidth, innerHeight } = window

// 文档大小，视口减去滚动条剩下的部分
let { clientWidth, clientHeight } = document.documentElement

// 视口大小 = 文档大小 + 滚动条
```

### 文档大小

完整大小

```js
// 理论值
let { scrollWidth, scrollHeight } = document.documentElement

// 文档说理论值不靠谱，咱也搞不懂
// 为什么这样？最好不要问。这些不一致来源于远古时代，而不是“聪明”的逻辑。
let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
)
```

可见大小

```js
let { clientWidth, clientHeight } = document.documentElement
```

### 获取滚动

```js
// 多数浏览器
let { scrollTop, scrollLeft } = document.documentElement

// 少数浏览器，old WebKit
let { scrollTop, scrollLeft } = document.body

// 全能的，优先推荐
let { pageXOffset, pageYOffset } = window
```

### 滚动

```js
// 相对滚动
window.scrollBy(x, y)

// 绝对坐标
window.scrollTo(x, y)

// 元素滚到可视区域顶部/底部，(top = true)
el.scrollIntoView()
el.scrollIntoView(false)
```

### 禁止滚动

```js
document.body.style.overflow = 'hidden'

document.body.style.overflow = ''
```

## 坐标

大多数方法处理的是以下两种坐标系中的一个：

相对于窗口：用 `clientX/clientY` 表示

相对于文档：用 `pageX/pageY` 表示

### 获取窗口坐标

```js
let { x, y, width, height, top, bottom, left, right } = el.getBoundingClientRect()

// 主要属性
// x/y - 矩形原点的窗口坐标
// width/height - 矩形的宽高

// 派生属性
// top/bottom - 矩形顶部和底部的窗口Y坐标
// left/right - 矩形左边和右边的窗口X坐标
```

### 获取文档坐标

文档坐标通过窗口坐标加上文档滚动距离计算获取

获取元素文档坐标

```js
// 获取元素的文档坐标
function getCoords(elem) {
  let box = elem.getBoundingClientRect()

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  }
}
```

### 应用

通过获取元素的坐标，可以在元素附近添加，诸如 `tooltip` `popover` 等内容。

可以通过 `fixed` 在窗口坐标，或 `absolute` 在文档坐标，来达到不同的效果。
