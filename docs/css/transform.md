# Ttransform

```scss
.box {
  transform: <transform-function>;
}
```

## transform-origin

变形原点

```scss
.box {
  transform-origin: <x> <y> <z>;
}

.box {
  transform-origin: center; // 默认值
  transform-origin: top left;
  transform-origin: 50px 50px;
}

// 如果有第三个值，必须为<length>，表示Z轴偏移量
```

### transform-style

```scss
.box {
  transform-style: flat; // 2d
  transform-style: preserve-3d; // 3d
}
```

## transform-function

### matrix()

### perspective()

### rotate()

旋转

```scss
.box {
  transform: rotate(<a>);
  transform: rotate3d(<x>, <y>, <z>, <a>);

  transform: rotateX(45deg);
  transform: rotate3d(1, 0, 0, 45deg);

  transform: rotateY(45deg);
  transform: rotate3d(0, 1, 0, 45deg);

  transform: rotateZ(45deg);
  transform: rotate3d(0, 0, 1, 45deg);
}

// 2d 旋转以 <origin> 作为源点
// 3d 我不懂
```

### scale()

缩放

```scss
.box {
  transform: scale(<sx>, <sy>);
  transform: scale3d(<sx>, <sy>, <sz>);

  transform: scaleX(2);
  transform: scale(2, 1);

  transform: scaleY(2);
  transform: scale(1, 2);

  transform: scaleZ(2);
  transform: scale3d(1, 1, 2);
}

// 2d 也可等效于 3d
// scaleX(2) = scale(2, 1) = scale3d(2, 1, 1)
```

### skew()

拉伸

```scss
.box {
  transform: skew(<ax>, <ay>);
  transform: skewX(<a>);
  transform: skewY(<a>);
}
```

### translate()

移动

```scss
.box {
  transform: translate(<tx>, <ty>);
  transform: translate3d(<tx>, <ty>, <tz>);

  transform: translateX(10px);
  transform: translate(10px, 0);

  transform: translateY(10px);
  transform: translate(0, 10px);

  transform: translateZ(10px);
  transform: translate3d(0, 0, 10px);
}

// 2d 也可等效于 3d
// translateX(10px) = translate(10px, 0) = translate3d(10px, 0, 0)
```
