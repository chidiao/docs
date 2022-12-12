# Animate

## @keyframes

定义动画

```scss
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

## animation

调用动画

```scss
.box {
  animation: <name> <duration> <timing-function> <delay> <iteration-count> <direction> <fill-mode> <play-state>;
}
```

## transition

过渡动画

```scss
.box {
  transition: <property> <duration> <timing-function> <delay>;
}
```
