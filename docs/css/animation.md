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

| 值        | 描述                                |
| --------- | ----------------------------------- |
| none      | 默认。                              |
| forwards  | 动画结束时(后)，保持最后一帧状态    |
| backwards | 动画开始前(delay中)，保持第一帧状态 |
| both      | forwards + backwards                |



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

