# jQuery

## 遍历

祖先

```js
// 直接父元素
$('.box').parent()

// 所有祖先元素，可以限定条件
$('.box').parents('articl')
```

后代

```js
// 所有直接子元素，可以限定条件
$('.box').children('.title')

// 所有后代子元素，可以限定条件
$('.box').find('.title')
```

同胞

```js
// 所有同胞元素，可以限定条件
$('.box').siblings('div')

// next()、nextAll()、nextUntil()、prev()、prevAll()、prevUntil()
```

