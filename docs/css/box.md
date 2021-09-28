# Box

盒子模型

## margin

```scss
.box {
  margin: auto;
  margin: 10%;
}

// 百分比基于父元素 width
```

**合并**

两个 `垂直外边距` 相遇时，合并成一个外边距

合并结果

1. 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
2. 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
3. 两个外边距一正一负时，折叠结果是两者的相加的和。

合并条件

1. 垂直外边距
2. 常规文档流，非 float 和绝对定位盒子
3. 无 border 和 padding 隔绝
4. 等等

**父子合并**

垂直外边距相遇，取较大值

30px + 10px = 30px

```html
<div class="parent" style="margin-top: 10px;">
  <div class="child" style="margin-top: 30px;"></div>
</div>
```

**兄弟合并**

垂直外边距相遇，取较大值

30px + 10px = 30px

```html
<div class="parent">
  <div class="child" style="margin-bottom: 30px;"></div>
  <div class="child" style="margin-top: 10px;"></div>
</div>
```

## border

```scss
.box {
  border-width: 1px;
  border-style: solid;
  border-color: pink;
  border: 1px solid pink;
}
```

## padding

```scss
.box {
  padding: 10%;
}

// 百分比基于元素 width
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

// 默认值: content-box
// content-box: width = content
// border-box: width = border + content
```
