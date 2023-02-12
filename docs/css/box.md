# Box

## margin

外边距：元素外部空出的空间

```less
.box {
  margin: 0; // 初始值
  margin: 0 auto;
  margin: 100%; // 百分比基于父元素宽度
}
```

## padding

内边距：元素内容与边框之间的空间

```less
.box {
  padding: 0; // 初始值
  padding: 100%; // 百分比基于父元素宽度
}
```

## border

边框

```less
.box {
  border-width: 1px;
  border-style: solid;
  border-color: pink;
  // 可传入多个参数来同时设定4条边框
}

.box {
  border: 1px solid pink;
  border-top: 1px solid pink;
  border-bottom: 1px solid pink;
  // 同时指定4条边框或单独设定指定边框
}
```

## shadow

```scss
.shadow {
  box-shadow: 5px 5px red;
  box-shadow: inset 5px 5px 5px 5px red;
  box-shadow: 5px 5px red, 2px 2px pink;
}

// box-shadow: <inset>? && <length>{2, 4} && <color>?
// inset: 可选
// length: x偏移、y偏移、模糊半径、扩散半径
// color: 可选
```

## sizing

```scss
.box {
  box-sizing: content-box;
  box-sizing: border-box;
}

// 标准盒模型：content-box(默认值)
// content-box: width = content
// border-box: width = border + content
```

## 盒子模型

## 居中

## 外边距合并

元素的上外边距和下外边距有时会合并/重叠为单个边距，其大小取最大值。

float 和 absolute 的元素不会发生外边距合并。

三种情况(垂直方向)：

- 兄弟/相邻元素之间合并。(清除浮动解决)

```html
<div class="parent">
  <div class="child mb-2">child</div>
  <div class="child mt-4">child</div>
</div>
```

- 没有内容将父元素与子元素分开。(border、padding、content 等可分割的内容)

```html
<div class="parent mt-2">
  <div class="child mt-4">child</div>
</div>
```

- 空的块级元素。

  没有内容不光自己的上下边距会合并，甚至进一步和兄弟继续合并。

```html
<div class="mb-2"></div>
<div class="mt-2 mb-2"></div>
<div class="mt-2"></div>

<!-- 实际总外边距为 2 -->
```
