# Position

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

- static 静态，也就是非定位元素
- relative 相对定位
- absolute 绝对定位
- fixed 绝对定位，也叫固定定位
- sticky 粘性定位

除了 `static` 都叫定位元素

## position

### static

正常文档流布局

此时 `top`, `right`, `bottom`, `left` 和 `z-index` 属性无效

### relative

正常文档流布局，保留元素空间

相对于自身文档流位置进行定位和偏移

### absolute

元素脱离文档流，不保留元素空间

相对于最近的 `定位元素祖先` 进行定位和偏移

### fixed

元素脱离文档流，不保留元素空间

相对于屏幕视口 `viewport` 进行定位和偏移

::: code-group

```scss [基于视口]
.parent {
  width: 375px;

  .fixed {
    width: 100%;
    position: fixed;
  }
}

// width: 100vw
// 基于viewport，和祖先元素没有关系
// 宽度借助max-width等方式来解决吧
```

```scss [基于祖先]
.parent {
  width: 375px;
  transform: scale(1);

  .fixed {
    width: 100%;
    position: fixed;
  }
}

// width: 375px
// 祖先元素以下属性不为none时，基于该祖先元素
// transform、perspective、filter、backdrop-filter
// 此时等效于absolute了，并没有fixed效果
```

:::

### sticky

正常文档流布局，保留元素空间

可以当作 `relative` + `fixed`

需要有一个可滚动的祖先元素，且必须指定 `top`、`right`、`bottom`、`left` 其一作为阈值

元素先是正常文档流(relative)，当滚动到阈值位置时，相对于该可滚动的祖先元素吸附(fixed)

若不指定阈值，则等效于相对定位

## other

### top/bottom

```scss
.box {
  top: auto;
  bottom: auto;
}

// 无height时，同时生效
// 有height时，top优先于bottom
// 仅对定位元素生效
```

### left/right

```scss
.box {
  left: auto;
  right: auto;
}

// 无width时，同时生效
// 有width时，left优先于right
// 仅对定位元素生效
```

### z-index

```scss
.box {
  z-index: auto;
  z-index: -1;
}

// 堆叠层级
// 仅对定位元素生效
```
