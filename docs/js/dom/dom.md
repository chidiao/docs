# DOM

文档对象模型

## NodeList

[NodeList](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList)

`NodeList` 不是一个数组，是一个类似数组的对象。

`NodeList` 可以是一个实时集合，如果文档中的节点树发生变化，`NodeList` 也会随之变化。

`NodeList` 也可以是一个静态集合，文档对象模型的任何改动都不会影响集合的内容。

## 选择器

```js
// 常用节点
let html = document.documentElement
let head = document.head
let body = document.body
```

```js
// 静态集合
let els = elem.querySelectorAll(css)
let el = elem.querySelector(css)

// 实时集合
let els = elem.getElementBy*()

// 只能在document上调用
let el = document.getElementById(id)
```

## 修改类

```js
// 完整class
el.className = 'class1 class2 class3'

// 单个class
el.classList.add('class')

el.classList.remove('class')

el.classList.toggle('class')

el.classList.contains('class')
```

## 修改样式

```js
// 修改
// el.style 是个对象
el.style.backgroundColor = 'red'
el.style.zIndex = '99'
el.style.fontSize = '14px'

// 重置
el.style.display = 'none'
el.style.display = ''

// 完全重写
el.style.cssText = 'color: red; font-size: 14px; line-height: 20px;'
```

## 修改文档

### 创建

```js
// 创建
document.createElement(tag)
let div = document.createElement('div')

// 添加内容
div.className = 'box'
div.innerHtml = 'hello world'
```

### 插入

```js
// 内部
node.append(...nodes or strings)
node.prepend(...nodes or strings)

// 外部
node.before(...nodes or strings)
node.after(...nodes or strings)

// 替换
node.replaceWith(...nodes or strings)
```

### 移除

```js
node.remove()
```

### 克隆

```js
elem.cloneNode(true)
```
