# 预处理

## Base

| 框架      | 语言 |
| --------- | ---- |
| Bootstrap | Sass |
| Vuetify   | Sass |
| Element   | Sass |
| Antd      | Less |

嵌套

```scss
.blog {
  .title {
    color: black;
    font-weight: bold;
  }

  .content {
    color: gray;
    font-weight: thin;
  }
}

.btn {
  background: blue;
  opacity: 1;
  transition: 0.4s;

  &-danger {
    background: red;
  }

  &:hover {
    opacity: 0.8;
  }
}
```

## Sass

```scss
// 变量
$width: 10px;
$height: $width + 10px;

.box {
  width: $width;
  height: $height;
}
```

## Less

```less
// 变量
@width: 10px;
@height: @width + 10px;

.box {
  width: @width;
  height: @height;
}
```

## script

### @for

```scss
// 1-3
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2em * $i;
  }
}

// 1-2
@for $i from 1 to 3 {
  .item-#{$i} {
    width: 2em * $i;
  }
}
```

### @each

```scss
@each $i in aaa, bbb, ccc {
  .card-#{$i} {
    background-image: url('/images/#{$i}.png');
  }
}
```

### @media

```scss
.box {
  @media screen {
    @media (max-width: 575px) {
    }
    @media (min-width: 576px) and (max-width: 767px) {
    }
  }
}
```

### @extend

```scss
.error {
  color: red;
}

.info {
  @extend .error;
}
```

### @mixin

```scss
@mixin error {
  color: red;
}

.info {
  @include error;
}

@mixin error($color) {
  color: $color;
}

.info {
  @include error(pink);
}
```
