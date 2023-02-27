# Scss

sass 和 scss 是一样的，但又不完全一样。

scss = sass + css

sass 有自己的语法格式，scss 既拥有 sass 的功能，又保留 css 的语法格式。

## 嵌套

`&` 标识符表示父元素，也可以嵌套父元素的父元素，反向嵌套

::: code-group

```scss
.btn {
  background: blue;

  &:hover {
    background: pink;
  }

  .blog & {
    background: white;
  }
}
```

```css
.btn {
  background: #00f;
}

.btn:hover {
  background: pink;
}

.blog .btn {
  background: #fff;
}
```

:::

## 变量

```scss
$bgc: pink;

.box {
  background: $bgc;
}
```

## 插值

```scss
$name: flex;

.#{$name}-row {
  display: flex;
  flex-direction: row;
}
```

## @for

`through` 包含 `end` 值，而 `to` 不包含 `end` 值

```scss
@for $num from 1 through 6 {
  .order-#{$num} {
    order: $num;
  }
}

@for $num from 1 to 6 {
  .order-#{$num} {
    order: $num;
  }
}
```

## @each

```scss
@each $size in large, middle, small {
  .box-#{$size} {
    content: '#{$size}';
  }
}
```

## @mixin

```scss
@mixin flex {
  display: flex;
}

.flex-row {
  @include flex;
  flex-direction: row;
}

.flex-col {
  @include flex;
  flex-direction: column;
}
```

带参数

```scss
@mixin btn($bg) {
  background: $bg;
  color: white;
}

.btn-danger {
  @include btn(red);
}
```
