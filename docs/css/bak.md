# animation

动画

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

```scss
// 默认值
.box {
  animation-name: none;
  animation-duration: 0s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}
```

## time

```scss
.box {
  animation: <name> <duration> <delay>;
}

.box {
  animation: fade 2s 1s;
}
```

### duration

```scss
.box {
  animation-duration: 2s;
}
```

### delay

```scss
.box {
  animation-delay: 1s;
}
```

## other

### name

```scss
.box {
  animation-name: none;
}
```

### direction

动画方向

| 值                | 描述                                        |
| ----------------- | ------------------------------------------- |
| normal            | start=>end,start=>end (单向重置)            |
| reverse           | end=>start,end=>start (反向重置)            |
| alternate         | start=>end,end=>start,start=>end (往返交替) |
| alternate-reverse | end=>start,start=>end,end=>start (往返交替) |

```scss
.box {
  animation-direction: normal;
  animation-direction: reverse;
  animation-direction: alternate;
  animation-direction: alternate-reverse;
}
```

### fill-mode

填充模式

动画执行前和执行后保持什么样的状态

| 值        | 描述                                 |
| --------- | ------------------------------------ |
| none      | 默认。                               |
| forwards  | 动画结束时(后)，保持最后一帧状态     |
| backwards | 动画开始前(delay 中)，保持第一帧状态 |
| both      | forwards + backwards                 |

```scss
.box {
  animation-fill-mode: none;
  animation-fill-mode: forwards;
  animation-fill-mode: backwards;
  animation-fill-mode: both;
}
```

### iteration-count

动画次数

```scss
.box {
  animation-iteration-count: infinite;
}
```

### timing-function

缓动函数

CSS 不支持所有缓动函数，可以通过贝塞尔曲线实现

[CSS](https://cubic-bezier.com/)

[更多](https://www.xuanfengge.com/easeing/easeing/)

```scss
.box {
  // 关键字
  animation-timing-function: linear;
  // 贝塞尔曲线
  animation-timing-function: cubic-bezier(.17,.67,.83,.67);
  // 阶跃函数
  animation-timing-function: steps(8);
  // ???
  animation-timing-function: frames(10);
}


// 阶跃函数
// 将动画分段/分步/跳帧，而非连续过渡
steps(steps, <direction>)

steps(steps, start)
steps(steps, end)
// start 和 end 的却别在于
// 动画是在每一段的时间起始还是结束时发生变化
// 每段(1s)：在0处，还是1处变化

// 可以制作雪碧图动画
```

### play-state

播放暂停

```scss
.box {
  animation-play-state: running;
  animation-play-state: paused;
}
```

## @keyframes

关键帧

```scss
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}

// 0-100%
// from（与 0% 相同）
// to（与 100% 相同）
```

# counter

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

```scss
ul {
  counter-reset: test 0;
}

li {
  counter-increment: test 1;
}

li::before {
  content: counter(test);
}
```

`reset` 定义计数器及初始值

`increment` 指定计数器及其步进值

`counter()` 计算结果值

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

# CSS

- [盒子模型](./box)

- 图片居中

- 布局方式

- [伪类和伪元素](./selector)

## CSS3 新特性

- border-radius

- [box-shadow](./box#shadow)

- [filter](./filter)

- [transition](./animate)

- [transform](./transform)

- [animate](./animate)

- 渐变

- [flex](./flex)

- grid

- @media
