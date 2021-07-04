# scss

## 嵌套

```scss
// 嵌套规则
.user {
  .name {
    font-weight: bold;
  }
  
  .age {
    color: pink;
  }
}

// 父选择器
.card {
  color: gray;
  
  &:hover {
    color: black;
  }
  
  &-info {
    color: black;
  }
}

// 属性嵌套
.card {
  font: {
    size: 16px;
    weight: bold;
    font-family: fantasy;
  }
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
    @media (max-width: 575px) {}
    @media (min-width: 576px) and (max-width: 767px) {}
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

