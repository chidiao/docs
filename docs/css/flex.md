# Flex

## Flex

作用子元素

`flex-grow` 、`flex-shrink` 和 `flex-basis` 的缩写

`flex-grow` ：是否可变大填充剩余空间

`flex-shrink` ：是否可缩小如果被挤压

`flex-basis` ：预期宽度？

| Class          | Properties        | 描述                 |
| -------------- | ----------------- | -------------------- |
| `flex-1`       | `flex: 1 1 0%;`   | 可变大缩小，无关比例 |
| `flex-auto`    | `flex: 1 1 auto;` | 可变大缩小，等比例   |
| `flex-initial` | `flex: 0 1 auto;` | 可缩小，不可变大     |
| `flex-none`    | `flex: none;`     | 不可变大缩小         |
| `grow`         | `flex-grow: 1;`   |                      |
| `grow-0`       | `flex-grow: 0;`   |                      |
| `shrink`       | `flex-shrink: 1;` |                      |
| `shrink-0`     | `flex-shrink: 0;` |                      |

## Flex Flow

`flex-direction` 和 `flex-wrap` 的缩写

```scss
.box {
  flex-flow: row wrap;
}

.box {
  flex-direction: row;
  flex-wrap: wrap;
}
```

| Class               | Properties                        |
| ------------------- | --------------------------------- |
| `flex-row`          | `flex-direction: row;`            |
| `flex-row-reverse`  | `flex-direction: row-reverse;`    |
| `flex-col`          | `flex-direction: column;`         |
| `flex-col-reverse`  | `flex-direction: column-reverse;` |
| `flex-wrap`         | `flex-wrap: wrap;`                |
| `flex-wrap-reverse` | `flex-wrap: wrap-reverse;`        |
| `flex-nowrap`       | `flex-wrap: nowrap;`              |

## Order

排序

| Class         | Properties      |
| ------------- | --------------- |
| `order-11`    | `order: 11;`    |
| `order-12`    | `order: 12;`    |
| `order-first` | `order: -9999;` |
| `order-last`  | `order: 9999;`  |
| `order-none`  | `order: 0;`     |

## Justify Content

[Justify Content](https://tailwindcss.com/docs/justify-content)

主轴对齐方式

| Class             | Properties                        |
| ----------------- | --------------------------------- |
| `justify-start`   | `justify-content: flex-start;`    |
| `justify-end`     | `justify-content: flex-end;`      |
| `justify-center`  | `justify-content: center;`        |
| `justify-between` | `justify-content: space-between;` |
| `justify-around`  | `justify-content: space-around;`  |
| `justify-evenly`  | `justify-content: space-evenly;`  |

## Align Items

[Align Items](https://tailwindcss.com/docs/align-items)

交叉轴对齐方式

| Class            | Properties                 |
| ---------------- | -------------------------- |
| `items-start`    | `align-items: flex-start;` |
| `items-end`      | `align-items: flex-end;`   |
| `items-center`   | `align-items: center;`     |
| `items-baseline` | `align-items: baseline;`   |
| `items-stretch`  | `align-items: stretch;`    |

## Align Self

[Align Self](https://tailwindcss.com/docs/align-self)

覆盖 `align-items`

| Class           | Properties                |
| --------------- | ------------------------- |
| `self-auto`     | `align-self: auto;`       |
| `self-start`    | `align-self: flex-start;` |
| `self-end`      | `align-self: flex-end;`   |
| `self-center`   | `align-self: center;`     |
| `self-stretch`  | `align-self: stretch;`    |
| `self-baseline` | `align-self: baseline;`   |

## Align Content

[Align Content](https://tailwindcss.com/docs/align-content)

多主轴的对齐方式

| Class             | Properties                      |
| ----------------- | ------------------------------- |
| `content-center`  | `align-content: center;`        |
| `content-start`   | `align-content: flex-start;`    |
| `content-end`     | `align-content: flex-end;`      |
| `content-between` | `align-content: space-between;` |
| `content-around`  | `align-content: space-around;`  |
| `content-evenly`  | `align-content: space-evenly;`  |

## Extend

### Margin

利用 `margin` 来模拟实现 `justify-self`

左右对齐

```scss
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

```scss
<div class="flex-row justify-start">
  <div class="item">left</div>
  <div class="item">left</div>

  <div class="item" style="margin: 0 auto">center</div>

  <div class="item">right</div>
  <div class="item">right</div>
</div>
```
