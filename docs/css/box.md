# 盒子模型

## margin

```scss
.box {
  margin: auto;
  margin: 10%;
}

// 百分比
// 百分比基于父元素的 width 计算

// 简写/缺省
// 缺省的值会取对边的值或统一值
// margin: top right bottom left;
// margin: top right bottom (right);
// margin: top right (top) (right);
// margin: top (top) (top) (top);
```



### margin合并

两个 `垂直外边距` 相遇时，合并成一个外边距

合并结果

1. 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。
2. 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。
3. 两个外边距一正一负时，折叠结果是两者的相加的和。

合并条件

1. 垂直外边距
2. 常规文档流，非float和绝对定位盒子
3. 无border和padding隔绝
4. 等等



### 父子合并

垂直外边距相遇，取较大值

30px + 10px = 30px

```html
<div class="parent" style="margin-top: 10px;">
  <div class="child" style="margin-top: 30px;"></div>
</div>
```



### 兄弟合并

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

// 百分比
// 百分比基于自身 width , 包括 padding-top 和 padding-bottom 同样基于自身 width 而不是 height
```

