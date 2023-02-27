# Flex

## Flex Flow

`flex-direction` 和 `flex-wrap` 的缩写

```scss
.box {
  flex-flow: <direction> <wrap>;
  flex-direction: <direction>;
  flex-wrap: <wrap>;
}
```

<<< @/code/style/flex-flow.scss

## Justify Content

[justify-content](https://tailwindcss.com/docs/justify-content)

主轴对齐方式

<<< @/code/style/justify-content.scss

## Align Content

[align-content](https://tailwindcss.com/docs/align-content)

多主轴对齐方式

<<< @/code/style/align-content.scss

## Align Items

[align-items](https://tailwindcss.com/docs/align-items)

交叉轴对齐方式

<<< @/code/style/align-items.scss

## Align Self

[align-self](https://tailwindcss.com/docs/align-self)

对齐方式，覆盖 `align-self`

<<< @/code/style/align-self.scss

## Flex

子元素大小，缩写

::: code-group

```scss [flex]
.box {
  flex: <grow> <shrink> <basis>;
  flex: 0 1 auto; // 默认值
}
```

```scss [grow]
.box {
  flex-grow: <grow>; // 拉伸系数
  flex-grow: 0; // 默认值
}

// 分配剩余空间
// 按比例拉伸
// 0 不拉伸
```

```scss [shrink]
.box {
  flex-shrink: <shrink>; // 收缩系数
  flex-shrink: 1; // 默认值
}

// 超出容器空间
// 按比例收缩
// 0 不收缩
```

```scss [basis]
.box {
  flex-basis: <basis>; // flex宽度
  flex-basis: auto; // 默认值
}

// auto表示flex计算宽度等于width或height，否则为指定值
```

:::

<<< @/code/style/flex.scss

## Order

子元素排序

```scss
.box {
  order: 99;
}
```

## 扩展

### Margin

利用 `margin` 来模拟实现 `justify-self`

左右对齐

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

左中右对齐

```html
<div class="flex-row justify-start">
  <div class="item">left</div>
  <div class="item">left</div>

  <div class="item" style="margin: 0 auto">center</div>

  <div class="item">right</div>
  <div class="item">right</div>
</div>
```
