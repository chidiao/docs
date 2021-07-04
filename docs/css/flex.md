# flex

## justify-content

主轴对齐方式

```scss
.justify-start,
.justify-center,
.justify-end,
.justify-between,
.justify-around,
.justify-evenly 

.box {
    justify-content: space-around;
}
```



## align-items

交叉轴对齐方式

```scss
.items-start,
.items-center,
.items-end,
.items-baseline,
.items-stretch

.box {
    align-items: center;
}
```



## align-self

```scss
.self-auto,
.self-start,
.self-center,
.self-end,
.self-stretch

.box {
    align-self: center;
}
```



## align-content

多主轴对齐方式

```scss
.content-start,
.content-center,
.content-end,
.content-between,
.content-around,
.content-evenly

.box {
    align-content: flex-start;
}
```



## flex-flow

```scss
.box {
    flex-flow: column wrap;
}

.box {
    flex-direction: column;
    flex-wrap: wrap;
}

.flex-row,
.flex-col,
.flex-row-reverse,
.flex-col-reverse

.flex-wrap,
.flex-nowrap,
.flex-wrap-reverse
```



## flex

```scss
.box {
    flex: 0 1 auto;
}

.box {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
}

// 容器空间空闲或溢出时元素的行为
// flex-grow: 变大
// flex-shrink: 缩小
// flex-basis: 用于计算空间的大小


.flex-grow,
.flex-grow-0,
.flex-shrink,
.flex-shrink-0
```



## order

```scss
.item {
    order: 0;
}
```



# expand

## margin

```scss
.item {
  margin: auto;
}

// auto：计算父元素剩余空间
```



弥补 `flex` 布局空缺 `justify-self`

**左右对齐**

```html
<div class="flex-row justify-start">
  <div class="item">left</div>
  <div class="item">left</div>
  <div class="item" style="margin-right: auto">left</div>
  
  <div class="item">right</div>
  <div class="item">right</div>
  <div class="item">right</div>
</div>
```



**左中右对齐**

```html
<div class="flex-row justify-start">
  <div class="item">left</div>
  <div class="item">left</div>
  
  <div class="item" style="margin: 0 auto">center</div>
  
  <div class="item">right</div>
  <div class="item">right</div>
</div>
```

