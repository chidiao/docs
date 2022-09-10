# Position

[position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

- static 静态

- relative 相对定位

- absolute 绝对定位

- fixed 固定定位

- sticky 粘性定位

## position

### static

`static` 是 `非定位元素`

其余四种都是 `定位元素`

元素使用正常的布局行为

此时 `top`、`right`、`bottom`、`left` 和 `z-index` 属性均无效

### relative

正常文档流，保留原空间，留白

相对于自身文档流的位置，进行定位和偏移

### absolute

脱离文档流，不保留原空间，不留白

相对于最近的 `定位元素(祖先)` ，进行定位和偏移

### fixed

脱离文档流，不保留原空间，不留白

相对于屏幕视口 `viewport` ，进行定位和偏移

### sticky

正常文档流，保留原空间，留白

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

// 1. height 未指定或auto时，两者同时生效
// 2. height 被指定时，top 优先生效，bottom 会被忽略
// 3. height 被指定时，top：auto时，bottom生效

// 仅对定位元素生效
```

### left/right

```scss
.box {
  left: auto;
  right: auto;
}

// left 优先于 right
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
