# DOM

文档对象模型

Document Object Model

## 节点

常用节点

```js
let html = document.documentElement
let head = document.head
let body = document.body
```

节点不等同于元素

节点包括文本节点、元素节点、甚至注释节点

| 对象 | 节点              | 元素节点                 |
| ---- | ----------------- | ------------------------ |
| 父   | `parentNode`      | `parentElement`          |
| 子   | `childNodes`      | `children`               |
| 子   | `firstChild`      | `firstElementChild`      |
| 子   | `lastChild`       | `lastElementChild`       |
| 兄   | `previousSibling` | `previousElementSibling` |
| 兄   | `nextSibling`     | `nextElementSibling`     |

## 选择器

有 6 种主要方法，只有 3 种 by 选择器的结果是动态集合 `live` ，其他的都是 静态集合。

```js
// id选择器：只能在document上调用
let id = document.getElementById('id')

// css选择器：最强大，最实用
let elems = elem.querySelectorAll('css')
let elems = elem.querySelector('css')

// by选择器：已经被css取代，live
let names = elem.getElementsByName('name')
let tags = elem.getElementsByTagName('tag')
let cls = elem.getElementsByClassName('class')
```

其他

```js
// matches: 检查元素是否匹配，而不是选择
let result = elem.matches('css')

// closest：选择最近祖先，包括自己
let parent = elem.closest('css')
```

## 属性

常用属性

```js
let inner = elem.innerHTML
let outer = elem.outerHTML

// inner修改文本：完全替换
inner = 'hello world'

// outer替换元素：删除原元素，插入新元素
outer = '<p>hello world</p>'
```

自定义属性

```html
<div data-key="123">自定义属性</div>
```

```js
let key = elem.dataset.key
```

## 修改文档

创建元素

```js
// 创建
let div = document.createElement('div')

// 添加内容
div.className = 'card'
div.innerHTML = 'hello world'
```

插入节点

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

移除节点

```js
node.remove()
```

克隆节点

```js
// 是否包括子元素
node.cloneNode(true)
node.cloneNode(false)
```

## 修改类

```js
// 完全替换
elem.className = 'class1 class2 class3'

// 部分操作
elem.classList.add('class')

elem.classList.remove('class')

elem.classList.toggle('class')

elem.classList.contains('class')
```

## 修改样式

```js
// 完全重写
elem.style.cssText = 'color: red; font-size: 14px; line-height: 20px;'

// 部分修改：elem.style是个对象
elem.style.backgroundColor = 'red'
elem.style.zIndex = '99'
elem.style.fontSize = '14px'

// 重置为空
elem.style.display = 'none'
elem.style.display = ''

// 计算样式：获取样式
let style = getComputedStyle(elem)
```
