# Animation

每个动画

`<time>` 最多两个，第一个给 `<duration>` ，第二个给 `<delay>`

```scss
.box {
  animation: rotate 2s linear 1s;
}
```

## [name]

动画名

## [duration]

动画周期时间

## [timing-function]

动画曲线，关键字、赛贝尔曲线等

[bezier](https://cubic-bezier.com/)

[easeing](https://www.xuanfengge.com/easeing/easeing/)

```scss
.box {
  animation: linear;
  animation: ease;
}
```

## [delay]

动画开始前的 `delay` 时间，可以是负数，会直接快进到指定的动画时间

## [iteration-count]

动画次数，可以不是整数

```scss
.box {
  animation: 2;
  animation: infinite;
}
```

## [direction]

动画方向，正、反、正往返和反往返

```scss
.box {
  animation: normal;
  animation: reverse;
  animation: alternate;
  animation: alternate-reverse;
}
```

## [fill-mode]

动画开始和结束时的状态

```scss
.box {
  // none
  animation: none;
  // 结束时保留结束帧
  animation: forwards;
  // 开始时应用开始帧
  animation: backwards;
  // 开始时应用开始帧，结束时保留结束帧
  animation: both;
}
```

## [play-state]

播放和暂停

```scss
.box {
  animation: paused;
  animation: running;
}
```

## [timeline]

实验
