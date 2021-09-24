# clip-path

裁剪路径，区域内显示，区域外隐藏

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

[生成器](https://www.html.cn/tool/css-clip-path/)

```scss
.box {
  clip-path: none;
}
```

## inset()

矩形

```scss
.box {
  clip-path: inset(10px 10px 10px 10px);
  clip-path: inset(10px 10px 10px 10px round 10px 10px 10px 10px);

  clip-path: inset(10px round 10px);
}

// 参数:
// 位置: (top right bottom left)
// 圆角: round (top right bottom left) | 可选
```

## circle()

圆

```scss
.box {
  clip-path: circle(50% at 50% 50%);
}

// 参数：
// 半径 at 圆心(x, y)
```

## ellipse()

椭圆

```scss
.box {
  clip-path: ellipse(25% 40% at 50% 50%);
}

// 参数：
// 半径(x, y) at 圆心(x, y)
```

## polygon()

多边形

```scss
.box {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}

// 参数：
// 各个点的坐标
// (x, y), (x, y), (x, y) ...
```

## geometry-box

裁剪已何种类型进行

```scss
.box {
  clip-path: padding-box circle(50px at 0 100px);
}

// 盒子类型：
// margin-box border-box padding-box content-box
// fill-box stroke-box view-box
```
